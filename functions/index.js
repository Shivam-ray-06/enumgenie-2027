const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { defineSecret } = require('firebase-functions/params');
const admin = require("firebase-admin");

admin.initializeApp();

// SECURITY INJECTION: Mask Gemini API Key using Firebase Secret Manager
const geminiApiKey = defineSecret('GEMINI_API_KEY');

// In-memory rate limiting store (For demo purposes. In production, use Redis/Firestore).
const rateLimitMap = new Map();
const MAX_REQUESTS_PER_MINUTE = 5;

/**
 * Cloud Function to securely handle AI chat requests.
 * Enforces authentication, extracts secrets, and rate limits.
 */
exports.secureCensusChat = onCall(
  { secrets: [geminiApiKey] },
  async (request) => {
    // 1. Mandatory Authentication Check
    if (!request.auth) {
      throw new HttpsError('unauthenticated', 'User must be authenticated to use the AI Guide.');
    }

    const uid = request.auth.uid;
    const now = Date.now();

    // 2. SECURITY INJECTION: Strict Rate Limiting
    const userLimits = rateLimitMap.get(uid) || { count: 0, startTime: now };
    
    if (now - userLimits.startTime > 60000) {
      // Reset window after 1 minute
      userLimits.count = 1;
      userLimits.startTime = now;
    } else {
      userLimits.count++;
      if (userLimits.count > MAX_REQUESTS_PER_MINUTE) {
        throw new HttpsError('resource-exhausted', 'Rate limit exceeded. Please wait 60 seconds before trying again.');
      }
    }
    rateLimitMap.set(uid, userLimits);

    // 3. Process Prompt safely
    const userPrompt = request.data.prompt;
    if (!userPrompt || typeof userPrompt !== 'string') {
      throw new HttpsError('invalid-argument', 'Prompt is missing or malformed.');
    }

    try {
      // Securely access the injected API Key without exposing it in source code
      const apiKey = geminiApiKey.value();
      
      // Simulated API Call to Gemini...
      console.log(`[Secure Backend] Forwarding request to Gemini API. Authorized UID: ${uid}`);
      
      return {
        success: true,
        response: "This is a secure, rate-limited mock response from the Gemini integration via Cloud Functions."
      };
    } catch (error) {
      console.error("Gemini API Error", error);
      throw new HttpsError('internal', 'Secure chat processing failed.');
    }
  }
);
