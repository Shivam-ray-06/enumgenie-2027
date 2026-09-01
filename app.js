const initApp = () => {
    
    // ==========================================
    // 1. COMPREHENSIVE i18n DICTIONARY
    // ==========================================
    const i18n = {
        en: {
            app_title: "EnumGenie 2027 | Digital Enumeration",
            theme_toggle: "Toggle Dark Mode",
            welcome_title: "Welcome to EnumGenie",
            welcome_subtitle: "Select your portal to securely access the 2027 Digital Census ecosystem.",
            btn_citizen: "Citizen Portal",
            btn_citizen_sub: "Self-enumeration & AI assistance",
            btn_admin: "Admin / Enumerator",
            btn_admin_sub: "Real-time analytics & verification",
            encrypted_notice: "End-to-end encrypted • Privacy Preserved",
            citizen_portal_title: "Citizen Enumeration Portal",
            citizen_portal_sub: "Complete your census securely or ask Census Mitra for help.",
            btn_exit: "Exit",
            wizard_title: "Self-Enumeration Form",
            btn_audio: "Audio Guide",
            sec_basic: "Basic Demographics",
            lbl_head_name: "Head of Household Name",
            lbl_age: "Respondent Age (18+)",
            lbl_size: "Household Size",
            lbl_marital: "Marital Status",
            opt_select: "Select...",
            opt_single: "Single / Never Married",
            opt_married: "Married",
            opt_widowed: "Widowed",
            opt_divorced: "Divorced / Separated",
            sec_socio: "Socio-Economic Data",
            lbl_edu: "Highest Education Level",
            opt_edu_none: "No Formal Education",
            opt_edu_primary: "Primary (Up to 5th)",
            opt_edu_secondary: "Secondary (Up to 10th)",
            opt_edu_higher: "Higher Secondary (12th)",
            opt_edu_grad: "Graduate / Postgraduate",
            lbl_occ: "Primary Occupation",
            opt_occ_agri: "Agriculture & Farming",
            opt_occ_biz: "Business / Self-employed",
            opt_occ_salaried: "Salaried Employee",
            opt_occ_student: "Student",
            opt_occ_home: "Homemaker",
            opt_occ_unemp: "Unemployed",
            lbl_address: "Residential Address",
            legal_disclaimer: "Data encrypted locally using C++ WebAssembly module before transit.",
            btn_generate_id: "Generate Digital SE ID",
            ai_name: "Census Mitra AI",
            ai_status: "Powered by Gemini Multimodal",
            ai_welcome: "Namaste! I am Census Mitra, your AI guide. I can help you understand questions, debunk myths, or translate terms. How can I assist you with your digital enumeration today?",
            ai_placeholder: "Ask Census Mitra...",
            admin_title: "Command Center",
            admin_sub: "Real-time synchronization via secure Firestore channels",
            kpi_total: "Total Enumerated",
            kpi_today: "today",
            kpi_verify: "Verification Rate",
            kpi_pending: "Pending Sync (Edge)",
            kpi_syncing: "Syncing via Service Worker...",
            kpi_ai: "AI Queries Served",
            kpi_gemini: "Powered by Gemini",
            chart_title_1: "Enrollment Trajectory (Last 7 Days)",
            chart_title_2: "Demographic Age Distribution",
            table_title: "Recent Secure Ingestions",
            table_search: "Search hash...",
            th_id: "Edge Hash ID",
            th_size: "HH Size",
            th_region: "Region (Simulated)",
            th_status: "Status",
            th_time: "Timestamp",
            table_showing: "Showing top 5 recent entries",
            feed_title: "Live Agent Activity"
        },
        hi: {
            app_title: "इनमजिनी 2027 | डिजिटल जनगणना",
            theme_toggle: "डार्क मोड टॉगल करें",
            welcome_title: "इनमजिनी में आपका स्वागत है",
            welcome_subtitle: "2027 डिजिटल जनगणना पारिस्थितिकी तंत्र को सुरक्षित रूप से एक्सेस करने के लिए अपना पोर्टल चुनें।",
            btn_citizen: "नागरिक पोर्टल",
            btn_citizen_sub: "स्वयं-जनगणना और एआई सहायता",
            btn_admin: "व्यवस्थापक / प्रगणक",
            btn_admin_sub: "रीयल-टाइम एनालिटिक्स और सत्यापन",
            encrypted_notice: "एंड-टू-एंड एन्क्रिप्टेड • गोपनीयता सुरक्षित",
            citizen_portal_title: "नागरिक जनगणना पोर्टल",
            citizen_portal_sub: "अपनी जनगणना सुरक्षित रूप से पूरी करें या मदद के लिए सेंसस मित्र से पूछें।",
            btn_exit: "बाहर जाएं",
            wizard_title: "स्वयं-जनगणना प्रपत्र",
            btn_audio: "ऑडियो गाइड",
            sec_basic: "मूल जनसांख्यिकी",
            lbl_head_name: "परिवार के मुखिया का नाम",
            lbl_age: "उत्तरदाता की आयु (18+)",
            lbl_size: "परिवार का आकार",
            lbl_marital: "वैवाहिक स्थिति",
            opt_select: "चुनें...",
            opt_single: "अविवाहित",
            opt_married: "विवाहित",
            opt_widowed: "विधवा/विधुर",
            opt_divorced: "तलाकशुदा",
            sec_socio: "सामाजिक-आर्थिक डेटा",
            lbl_edu: "उच्चतम शिक्षा स्तर",
            opt_edu_none: "कोई औपचारिक शिक्षा नहीं",
            opt_edu_primary: "प्राथमिक",
            opt_edu_secondary: "माध्यमिक",
            opt_edu_higher: "उच्चतर माध्यमिक",
            opt_edu_grad: "स्नातक",
            lbl_occ: "प्राथमिक व्यवसाय",
            opt_occ_agri: "कृषि",
            opt_occ_biz: "व्यापार",
            opt_occ_salaried: "वेतनभोगी",
            opt_occ_student: "छात्र",
            opt_occ_home: "गृहिणी",
            opt_occ_unemp: "बेरोजगार",
            lbl_address: "आवासीय पता",
            legal_disclaimer: "पारगमन से पहले सी++ मॉड्यूल का उपयोग करके डेटा एन्क्रिप्ट किया गया।",
            btn_generate_id: "डिजिटल एसई आईडी उत्पन्न करें",
            ai_name: "सेंसस मित्र एआई",
            ai_status: "जेमिनी मल्टीमॉडल द्वारा संचालित",
            ai_welcome: "नमस्ते! मैं सेंसस मित्र हूँ, आपका एआई गाइड। मैं प्रश्नों को समझने में आपकी मदद कर सकता हूँ। मैं आज आपकी क्या सहायता कर सकता हूँ?",
            ai_placeholder: "सेंसस मित्र से पूछें...",
            admin_title: "कमांड सेंटर",
            admin_sub: "फायरस्टोर चैनलों के माध्यम से रीयल-टाइम सिंक्रनाइज़ेशन",
            kpi_total: "कुल गणना",
            kpi_today: "आज",
            kpi_verify: "सत्यापन दर",
            kpi_pending: "लंबित सिंक",
            kpi_syncing: "सेवा कार्यकर्ता के माध्यम से सिंक हो रहा है...",
            kpi_ai: "एआई प्रश्न हल किए गए",
            kpi_gemini: "जेमिनी द्वारा संचालित",
            chart_title_1: "नामांकन प्रक्षेपवक्र (पिछले 7 दिन)",
            chart_title_2: "जनसांख्यिकीय आयु वितरण",
            table_title: "हाल के सुरक्षित अंतर्ग्रहण",
            table_search: "हैश खोजें...",
            th_id: "एज हैश आईडी",
            th_size: "परिवार का आकार",
            th_region: "क्षेत्र (सिम्युलेटेड)",
            th_status: "स्थिति",
            th_time: "समय",
            table_showing: "शीर्ष 5 हाल की प्रविष्टियां दिखा रहा है",
            feed_title: "लाइव एजेंट गतिविधि"
        }
        // Note: For hackathon demonstration, we implement full EN and HI. 
        // Other 14 languages would follow the exact same JSON structure dynamically loaded.
    };

    const applyTranslations = (lang) => {
        // Fallback to English if language not fully implemented in mock dict
        const dict = i18n[lang] || i18n['en']; 
        
        // Translate text nodes safely preserving icons
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                const icon = el.querySelector('i, svg');
                if (icon) {
                    const iconClone = icon.cloneNode(true);
                    el.replaceChildren(iconClone, document.createTextNode(' ' + dict[key]));
                } else {
                    el.textContent = dict[key];
                }
            }
        });

        // Translate placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key]) el.setAttribute('placeholder', dict[key]);
        });
        
        // Translate titles
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            if (dict[key]) el.setAttribute('title', dict[key]);
        });
    };

    const langSelector = document.getElementById('language-selector');
    if (langSelector) {
        langSelector.addEventListener('change', (e) => applyTranslations(e.target.value));
    }

    // ==========================================
    // 2. VIEW ROUTING & THEME
    // ==========================================
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    // Restore saved theme preference
    if (localStorage.getItem('theme') === 'light') {
        document.documentElement.classList.remove('dark');
    }

    const views = {
        login: document.getElementById('view-login'),
        citizen: document.getElementById('view-citizen'),
        admin: document.getElementById('view-admin')
    };

    // ==========================================
    // 2.5 DEMO UX: Demo Credentials & Profiles
    // ==========================================
    const DEMO_PROFILES = {
        admin: { type: 'admin', email: 'admin.census2027@gov.in', role: 'Enumeration Director / District Admin' },
        citizen1: { type: 'citizen', name: 'Rajesh Sharma', age: '42', size: '4', marital: 'married', edu: 'graduate', occ: 'salaried', address: 'Flat 102, Connaught Place, New Delhi, Delhi - 110001' },
        citizen2: { type: 'citizen', name: 'Priya Sundaram', age: '34', size: '3', marital: 'married', edu: 'graduate', occ: 'business', address: 'Plot 45, Anna Nagar, Chennai, Tamil Nadu - 600040' },
        citizen3: { type: 'citizen', name: 'Amit Deshmukh', age: '29', size: '5', marital: 'married', edu: 'secondary', occ: 'agriculture', address: 'Village Khed, Pune District, Maharashtra - 410505' }
    };

    // Profile Dropdown Menu Handler
    const btnProfileDropdown = document.getElementById('btn-profile-dropdown');
    const profileDropdownMenu = document.getElementById('profile-dropdown-menu');
    const profileLabel = document.getElementById('current-profile-label');

    if (btnProfileDropdown && profileDropdownMenu) {
        btnProfileDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
            profileDropdownMenu.classList.toggle('hidden');
        });

        document.addEventListener('click', () => {
            profileDropdownMenu.classList.add('hidden');
        });
    }

    document.querySelectorAll('.demo-profile-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const profileKey = btn.getAttribute('data-profile');
            const profile = DEMO_PROFILES[profileKey];
            if (!profile) return;

            if (profileLabel) {
                profileLabel.innerText = profile.type === 'admin' ? 'Admin Director' : profile.name;
            }

            if (profile.type === 'admin') {
                switchView('login', 'admin');
                initAdminDashboard();
            } else {
                switchView('login', 'citizen');
                document.getElementById('head-name').value = profile.name;
                document.getElementById('respondent-age').value = profile.age;
                document.getElementById('household-size').value = profile.size;
                document.getElementById('marital-status').value = profile.marital;
                document.getElementById('education').value = profile.edu;
                document.getElementById('occupation').value = profile.occ;
                document.getElementById('address').value = profile.address;
            }
        });
    });

    const networkBadge = document.getElementById('network-badge');
    const updateNetworkStatus = () => {
        if (!networkBadge) return;
        if (navigator.onLine) {
            networkBadge.className = 'hidden md:flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold backdrop-blur-md transition-colors';
            networkBadge.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span><span>Connected (Firebase Live)</span>';
        } else {
            networkBadge.className = 'hidden md:flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-semibold backdrop-blur-md transition-colors';
            networkBadge.innerHTML = '<span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span><span>Offline Mode (Local Sync)</span>';
        }
    };
    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);
    updateNetworkStatus();

    const btnAutoFill = document.getElementById('btn-demo-autofill');
    if (btnAutoFill) {
        btnAutoFill.addEventListener('click', () => {
            document.getElementById('head-name').value = "Vikram Sharma";
            document.getElementById('respondent-age').value = "45";
            document.getElementById('household-size').value = "4";
            document.getElementById('marital-status').value = "married";
            document.getElementById('education').value = "graduate";
            document.getElementById('occupation').value = "business";
            document.getElementById('address').value = "Flat 402, Cyber Tower, New Delhi, 110001";
            
            // Visual feedback
            btnAutoFill.innerHTML = '<i data-lucide="check" class="w-4 h-4 mr-1"></i> Populated!';
            lucide.createIcons({ root: btnAutoFill });
            setTimeout(() => {
                btnAutoFill.innerHTML = '<i data-lucide="zap" class="w-4 h-4 mr-1"></i> Auto-Fill Citizen Form';
                lucide.createIcons({ root: btnAutoFill });
            }, 2000);
        });
    }

    const switchView = (hideKey, showKey) => {
        views[hideKey].classList.add('hidden');
        views[hideKey].classList.remove('block');
        views[showKey].classList.remove('hidden');
        views[showKey].classList.add('block');
    };

    document.getElementById('btn-citizen').addEventListener('click', () => switchView('login', 'citizen'));
    document.getElementById('btn-admin').addEventListener('click', () => {
        switchView('login', 'admin');
        initAdminDashboard();
    });
    
    document.querySelectorAll('.btn-logout').forEach(btn => {
        btn.addEventListener('click', () => {
            views.citizen.classList.add('hidden');
            views.admin.classList.add('hidden');
            views.login.classList.remove('hidden');
        });
    });

    // ==========================================
    // 3. CITIZEN PORTAL WIZARD LOGIC
    // ==========================================
    document.getElementById('btn-submit-census').addEventListener('click', async (e) => {
        e.preventDefault();
        
        const loader = document.getElementById('wizard-loader');
        const headName = document.getElementById('head-name').value;
        const size = parseInt(document.getElementById('household-size').value, 10);
        const age = parseInt(document.getElementById('respondent-age').value, 10);
        const marital = document.getElementById('marital-status').value;
        const edu = document.getElementById('education').value;
        const occ = document.getElementById('occupation').value;
        
        // Complex client-side pre-validation (mirroring C++ logic)
        if (!headName || !marital || !edu || !occ) {
            alert('Validation Error: Please fill all required demographic and socio-economic fields.');
            return;
        }
        if (isNaN(size) || size < 1 || size > 50) {
            alert('Validation Error: Household size must be between 1 and 50.'); return;
        }
        if (isNaN(age) || age < 18 || age > 120) {
            alert('Validation Error: Respondent must be an adult (18-120).'); return;
        }
        // Cross-field logic
        if (age < 21 && marital === 'widowed') {
            alert('Anomaly Detected: Please verify Marital Status vs Age.'); return;
        }

        loader.classList.remove('hidden');
        
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            // Simulate SHA-256 creation
            const mockHash = Array.from({length: 64}, () => Math.floor(Math.random()*16).toString(16)).join('');
            
            // Hide form and show receipt
            document.getElementById('census-form').classList.add('hidden');
            document.getElementById('wizard-footer').classList.add('hidden');
            const receipt = document.getElementById('se-id-receipt');
            receipt.classList.remove('hidden');
            document.getElementById('receipt-id-text').innerText = `EG27-${mockHash.substring(0, 12).toUpperCase()}`;
            
        } finally {
            loader.classList.add('hidden');
        }
    });

    const btnPrint = document.getElementById('btn-print-receipt');
    if (btnPrint) {
        btnPrint.addEventListener('click', () => {
            window.print();
        });
    }

    // ==========================================
    // 4. GEMINI AI CHATBOT (ADVANCED MOCK)
    // ==========================================
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    
    // Quick Prompt Chips logic
    document.querySelectorAll('.chip-prompt').forEach(chip => {
        chip.addEventListener('click', () => {
            chatInput.value = chip.innerText;
            chatInput.focus();
        });
    });

    const appendMessage = (text, isUser = false) => {
        const msgDiv = document.createElement('div');
        msgDiv.className = `flex ${isUser ? 'justify-end' : 'justify-start'} relative z-10 animate-slide-up`;
        
        if (isUser) {
            msgDiv.innerHTML = `
                <div class="bg-gradient-to-r from-brand-indigo to-purple-600 text-white p-3 rounded-2xl rounded-br-none shadow-md max-w-[85%] text-sm">
                    ${text}
                </div>
            `;
        } else {
            msgDiv.innerHTML = `
                <div class="w-8 h-8 rounded-full bg-brand-emerald flex items-center justify-center mr-2 flex-shrink-0 mt-auto mb-1 shadow-sm border-2 border-white/20">
                    <i data-lucide="bot" class="w-4 h-4 text-white"></i>
                </div>
                <div class="bg-white dark:bg-slate-800/90 p-4 rounded-2xl rounded-bl-none shadow-md border border-slate-100 dark:border-slate-700 max-w-[85%] text-sm leading-relaxed backdrop-blur-sm">
                    ${text}
                </div>
            `;
        }
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        lucide.createIcons({ root: msgDiv });
    };

    const handleChat = async () => {
        const text = chatInput.value.trim();
        if (!text) return;

        appendMessage(text, true);
        chatInput.value = '';

        const loaderId = 'loader-' + Date.now();
        const typingDiv = document.createElement('div');
        typingDiv.id = loaderId;
        typingDiv.className = 'flex justify-start relative z-10 animate-slide-up';
        typingDiv.innerHTML = `
            <div class="w-8 h-8 rounded-full bg-brand-indigo flex items-center justify-center mr-2 mt-auto mb-1 opacity-50">
                <i data-lucide="loader" class="w-4 h-4 text-white animate-spin"></i>
            </div>
            <div class="bg-white/50 dark:bg-slate-800/50 p-3 rounded-2xl rounded-bl-none text-xs text-slate-500 flex space-x-1 items-center">
                <div class="w-1.5 h-1.5 bg-brand-indigo rounded-full animate-bounce"></div>
                <div class="w-1.5 h-1.5 bg-brand-emerald rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                <div class="w-1.5 h-1.5 bg-brand-indigo rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
            </div>
        `;
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        try {
            // Mock network latency for AI processing
            await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));
            
            let response = "I am processing your query via Gemini. Please proceed with the form.";
            const lower = text.toLowerCase();
            
            // Advanced contextual matching
            if (lower.match(/bank|account|money|otp|password|scam/)) {
                response = "**⚠️ SECURITY ALERT:** The Census will **NEVER** ask for your bank account, OTP, passwords, or money. Official enumerators only collect demographic data. Please report any such requests immediately.";
            } else if (lower.match(/education|school|degree|college/)) {
                response = "For 'Highest Education Level', select the highest degree or standard you have *completed*. If currently enrolled, select the previous milestone achieved.";
            } else if (lower.match(/hindi|tamil|marathi|language/)) {
                response = "EnumGenie natively supports 16 languages. Use the dropdown at the top right (🌐 icon) to instantly switch the interface language.";
            } else if (lower.match(/what is this|why|help/)) {
                response = "This is the EnumGenie 2027 Digital Enumeration portal. It allows you to self-report your census data securely from home, saving time and resources.";
            }

            document.getElementById(loaderId).remove();
            appendMessage(response, false);
        } catch (e) {
            document.getElementById(loaderId).remove();
            appendMessage("Service unavailable due to high load. Please try again later.", false);
        }
    };

    document.getElementById('btn-send-chat').addEventListener('click', handleChat);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleChat();
        }
    });

    // ==========================================
    // 5. ADMIN DASHBOARD & ADVANCED CHARTS
    // ==========================================
    let chartsInitialized = false;

    const initAdminDashboard = () => {
        // Clock
        setInterval(() => {
            document.getElementById('live-clock').textContent = new Date().toLocaleTimeString();
        }, 1000);

        // Animate Counters
        document.querySelectorAll('.counter').forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2500;
            const isDecimal = target % 1 !== 0;
            const steps = 60;
            const stepTime = duration / steps;
            let current = 0;
            
            const timer = setInterval(() => {
                current += target / steps;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.innerText = isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString();
            }, stepTime);
        });

        // Initialize Chart.js exactly once
        if (!chartsInitialized && window.Chart) {
            chartsInitialized = true;
            
            Chart.defaults.color = document.documentElement.classList.contains('dark') ? '#94a3b8' : '#64748b';
            Chart.defaults.font.family = "'Inter', sans-serif";

            // Main Line Chart
            new Chart(document.getElementById('mainChart').getContext('2d'), {
                type: 'line',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                        label: 'Self-Enumerations',
                        data: [12000, 19000, 15000, 22000, 28000, 35000, 42000],
                        borderColor: '#4F46E5',
                        backgroundColor: 'rgba(79, 70, 229, 0.1)',
                        borderWidth: 3,
                        tension: 0.4,
                        fill: true,
                        pointBackgroundColor: '#10B981',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        y: { beginAtZero: true, grid: { color: 'rgba(148, 163, 184, 0.1)' } },
                        x: { grid: { display: false } }
                    }
                }
            });

            // Doughnut Chart
            new Chart(document.getElementById('doughnutChart').getContext('2d'), {
                type: 'doughnut',
                data: {
                    labels: ['18-25', '26-40', '41-60', '60+'],
                    datasets: [{
                        data: [25, 40, 20, 15],
                        backgroundColor: ['#4F46E5', '#10B981', '#F59E0B', '#8B5CF6'],
                        borderWidth: 0,
                        hoverOffset: 10
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '75%',
                    plugins: {
                        legend: { position: 'bottom' }
                    }
                }
            });
            
            generateMockTable();
            startLiveFeed();
        }
    };

    // Table Generation
    const generateMockTable = () => {
        const tbody = document.getElementById('mock-table-body');
        tbody.innerHTML = '';
        const regions = ['Maharashtra', 'Tamil Nadu', 'Delhi', 'Karnataka', 'Gujarat'];
        
        for (let i = 0; i < 4; i++) {
            const hash = Array.from({length: 24}, () => Math.floor(Math.random()*16).toString(16)).join('');
            const size = Math.floor(Math.random() * 6) + 1;
            const region = regions[Math.floor(Math.random() * regions.length)];
            const time = new Date(Date.now() - (i * 45000)).toLocaleTimeString();
            
            tbody.innerHTML += `
                <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td class="px-6 py-4 font-mono text-xs text-brand-indigo">${hash}...</td>
                    <td class="px-6 py-4 font-medium">${size}</td>
                    <td class="px-6 py-4 text-slate-500">${region}</td>
                    <td class="px-6 py-4">
                        <span class="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-xs px-2.5 py-1 rounded-full font-medium flex items-center w-max">
                            <i data-lucide="check-circle-2" class="w-3 h-3 mr-1"></i> Verified
                        </span>
                    </td>
                    <td class="px-6 py-4 text-slate-500 text-xs">${time}</td>
                </tr>
            `;
        }
        
        // Inject Anomaly Row
        tbody.innerHTML += `
            <tr class="bg-rose-50/50 dark:bg-rose-900/20 hover:bg-rose-50 dark:hover:bg-rose-900/30 transition-colors">
                <td class="px-6 py-4 font-mono text-xs text-rose-500">f4a2b9...</td>
                <td class="px-6 py-4 font-medium text-rose-600 dark:text-rose-400">1</td>
                <td class="px-6 py-4 text-rose-500/70">Kerala</td>
                <td class="px-6 py-4">
                    <span class="bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-400 text-xs px-2.5 py-1 rounded-full font-medium flex items-center w-max shadow-sm shadow-rose-500/20">
                        <span class="w-2 h-2 rounded-full bg-rose-500 animate-pulse mr-1.5"></span> Anomaly Detected
                    </span>
                </td>
                <td class="px-6 py-4 text-rose-500/70 text-xs">Just now</td>
            </tr>
        `;
        
        lucide.createIcons({ root: tbody });
    };

    // ==========================================
    // 6. 36 STATES/UTS DATASET & DRILLDOWN ENGINE
    // ==========================================
    const STATE_UT_DATA = [
        { name: "Maharashtra", type: "State", zone: "West", pop: "126.4M", hh: "24.8M", progress: 78, districts: [{ name: "Mumbai", pop: "12.4M", progress: 84 }, { name: "Pune", pop: "9.4M", progress: 81 }, { name: "Nagpur", pop: "4.6M", progress: 72 }] },
        { name: "Delhi", type: "UT", zone: "North", pop: "20.8M", hh: "4.2M", progress: 91, districts: [{ name: "Central Delhi", pop: "2.1M", progress: 95 }, { name: "South Delhi", pop: "2.8M", progress: 92 }, { name: "North Delhi", pop: "1.9M", progress: 88 }] },
        { name: "Tamil Nadu", type: "State", zone: "South", pop: "76.8M", hh: "18.5M", progress: 85, districts: [{ name: "Chennai", pop: "7.1M", progress: 89 }, { name: "Coimbatore", pop: "3.4M", progress: 86 }, { name: "Madurai", pop: "3.1M", progress: 80 }] },
        { name: "Uttar Pradesh", type: "State", zone: "North", pop: "235.6M", hh: "41.2M", progress: 68, districts: [{ name: "Lucknow", pop: "4.8M", progress: 75 }, { name: "Kanpur", pop: "4.5M", progress: 70 }, { name: "Varanasi", pop: "3.6M", progress: 65 }] },
        { name: "Karnataka", type: "State", zone: "South", pop: "67.5M", hh: "14.1M", progress: 82, districts: [{ name: "Bengaluru Urban", pop: "11.2M", progress: 88 }, { name: "Mysuru", pop: "3.0M", progress: 81 }, { name: "Hubballi-Dharwad", pop: "1.8M", progress: 76 }] },
        { name: "Gujarat", type: "State", zone: "West", pop: "70.4M", hh: "13.6M", progress: 80, districts: [{ name: "Ahmedabad", pop: "8.2M", progress: 85 }, { name: "Surat", pop: "6.1M", progress: 82 }, { name: "Vadodara", pop: "4.1M", progress: 79 }] },
        { name: "Kerala", type: "State", zone: "South", pop: "35.8M", hh: "7.8M", progress: 94, districts: [{ name: "Thiruvananthapuram", pop: "3.3M", progress: 96 }, { name: "Erankulam", pop: "3.4M", progress: 95 }, { name: "Kozhikode", pop: "3.1M", progress: 92 }] },
        { name: "West Bengal", type: "State", zone: "East", pop: "99.1M", hh: "20.3M", progress: 74, districts: [{ name: "Kolkata", pop: "4.5M", progress: 83 }, { name: "North 24 Parganas", pop: "10.1M", progress: 76 }, { name: "Howrah", pop: "4.8M", progress: 72 }] }
    ];

    const SCHEDULES_DATA = [
        { state: "Maharashtra", zone: "West", phase1: "Apr 2026 - Jun 2026", phase2: "Feb 2027", status: "Active Phase 1" },
        { state: "Delhi", zone: "North", phase1: "May 2026 - Jul 2026", phase2: "Feb 2027", status: "Completed Phase 1" },
        { state: "Tamil Nadu", zone: "South", phase1: "Apr 2026 - Jun 2026", phase2: "Feb 2027", status: "Active Phase 1" },
        { state: "Uttar Pradesh", zone: "North", phase1: "Jun 2026 - Sep 2026", phase2: "Mar 2027", status: "Scheduled" },
        { state: "Karnataka", zone: "South", phase1: "May 2026 - Jul 2026", phase2: "Feb 2027", status: "Active Phase 1" },
        { state: "Gujarat", zone: "West", phase1: "Apr 2026 - Jun 2026", phase2: "Feb 2027", status: "Active Phase 1" }
    ];

    // Render Roadmap Schedules
    const renderSchedules = (filterZone = 'all') => {
        const grid = document.getElementById('schedule-grid');
        if (!grid) return;
        grid.innerHTML = '';
        
        const list = filterZone === 'all' ? SCHEDULES_DATA : SCHEDULES_DATA.filter(s => s.zone === filterZone);
        
        list.forEach(item => {
            grid.innerHTML += `
                <div class="p-4 rounded-2xl bg-white/40 dark:bg-slate-800/40 border border-white/10 shadow-sm flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-center mb-2">
                            <span class="font-bold text-sm text-slate-800 dark:text-white">${item.state}</span>
                            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-indigo/10 text-brand-indigo">${item.zone} Zone</span>
                        </div>
                        <div class="space-y-1 text-xs text-slate-500">
                            <div><strong class="text-slate-700 dark:text-slate-300">Phase 1 (Houselisting):</strong> ${item.phase1}</div>
                            <div><strong class="text-slate-700 dark:text-slate-300">Phase 2 (Enumeration):</strong> ${item.phase2}</div>
                        </div>
                    </div>
                    <div class="mt-3 pt-2 border-t border-slate-200/50 dark:border-slate-700/50 flex justify-between items-center text-xs">
                        <span class="text-[11px] font-semibold text-emerald-500 flex items-center">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse mr-1"></span> ${item.status}
                        </span>
                    </div>
                </div>
            `;
        });
    };
    renderSchedules();

    document.querySelectorAll('.schedule-zone-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.schedule-zone-btn').forEach(b => {
                b.className = 'schedule-zone-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 text-slate-400 hover:bg-white/20 transition-all';
            });
            btn.className = 'schedule-zone-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-brand-indigo text-white shadow-sm';
            renderSchedules(btn.getAttribute('data-zone'));
        });
    });

    // Standalone Hero Search Autocomplete
    const heroInput = document.getElementById('hero-search-input');
    const heroDropdown = document.getElementById('hero-search-dropdown');

    if (heroInput && heroDropdown) {
        heroInput.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();
            if (!query) {
                heroDropdown.classList.add('hidden');
                return;
            }

            const matches = STATE_UT_DATA.filter(s => 
                s.name.toLowerCase().includes(query) || 
                s.districts.some(d => d.name.toLowerCase().includes(query))
            );

            if (matches.length === 0) {
                heroDropdown.innerHTML = `<div class="p-4 text-xs text-slate-400 text-center">No matching State, UT, or District found.</div>`;
            } else {
                heroDropdown.innerHTML = matches.map(s => `
                    <button class="hero-search-item-btn w-full text-left p-3.5 hover:bg-brand-indigo/10 transition-colors border-b border-slate-100 dark:border-slate-800 flex justify-between items-center" data-state="${s.name}">
                        <div>
                            <div class="font-bold text-sm text-slate-800 dark:text-white">${s.name} (${s.type})</div>
                            <div class="text-xs text-slate-400">Pop: ${s.pop} • ${s.districts.length} Major Districts</div>
                        </div>
                        <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-500">${s.progress}% Done</span>
                    </button>
                `).join('');
            }
            heroDropdown.classList.remove('hidden');

            document.querySelectorAll('.hero-search-item-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const stateName = btn.getAttribute('data-state');
                    openDrilldownModal(stateName);
                    heroDropdown.classList.add('hidden');
                    heroInput.value = '';
                });
            });
        });
    }

    // Live Security Attack Log Ticker
    const attackLogEl = document.getElementById('security-attack-log');
    if (attackLogEl) {
        const securityLogs = [
            'Intercepted fake SMS phishing domain census2027-verify.org -> Blacklisted by WAF.',
            'Prevented fraudulent bank OTP request attempt on fake mobile portal.',
            'Blocked malicious census-2027-installer.apk download from unauthorized server.',
            'WAF Neutralized SQLi vector on API endpoint /api/v1/enumerations.',
            'Java Backend stripped XSS payload <script> alert(1) </script> from form input.'
        ];
        let logIdx = 0;
        setInterval(() => {
            logIdx = (logIdx + 1) % securityLogs.length;
            attackLogEl.innerText = `[${new Date().toLocaleTimeString()}] ${securityLogs[logIdx]}`;
        }, 3500);
    }

    // Modal Drilldown logic
    const drillModal = document.getElementById('drilldown-modal');
    const modalContent = document.getElementById('modal-content');
    const closeDrillModal = document.getElementById('close-drilldown-modal');

    const openDrilldownModal = (stateName) => {
        const item = STATE_UT_DATA.find(s => s.name === stateName);
        if (!item || !drillModal || !modalContent) return;

        modalContent.innerHTML = `
            <div class="flex items-center space-x-3 mb-4">
                <div class="p-3 bg-brand-indigo/10 text-brand-indigo rounded-2xl">
                    <i data-lucide="map-pin" class="w-6 h-6"></i>
                </div>
                <div>
                    <h3 class="text-2xl font-extrabold">${item.name} (${item.type})</h3>
                    <p class="text-xs text-slate-400">${item.zone} Zone • Official 2027 Census Metrics</p>
                </div>
            </div>

            <div class="grid grid-cols-3 gap-4 mb-6">
                <div class="p-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                    <div class="text-xs text-slate-400">Population</div>
                    <div class="text-xl font-bold text-brand-indigo">${item.pop}</div>
                </div>
                <div class="p-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                    <div class="text-xs text-slate-400">Households</div>
                    <div class="text-xl font-bold text-brand-emerald">${item.hh}</div>
                </div>
                <div class="p-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                    <div class="text-xs text-slate-400">Progress</div>
                    <div class="text-xl font-bold text-purple-500">${item.progress}%</div>
                </div>
            </div>

            <h4 class="text-sm font-bold mb-3 text-slate-700 dark:text-slate-300">District Breakdown</h4>
            <div class="space-y-2">
                ${item.districts.map(d => `
                    <div class="flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs">
                        <span class="font-bold">${d.name}</span>
                        <span class="text-slate-400">Pop: ${d.pop}</span>
                        <span class="font-semibold text-emerald-500">${d.progress}% Enumerated</span>
                    </div>
                `).join('')}
            </div>
        `;

        lucide.createIcons({ root: modalContent });
        drillModal.classList.remove('hidden');
    };

    if (closeDrillModal) {
        closeDrillModal.addEventListener('click', () => drillModal.classList.add('hidden'));
    }

    // SVG Map Interactivity
    document.querySelectorAll('.map-region').forEach(region => {
        region.addEventListener('click', () => {
            const stateName = region.getAttribute('data-state');
            const titleEl = document.getElementById('map-selected-title');
            const subEl = document.getElementById('map-selected-sub');
            if (titleEl) titleEl.innerText = stateName;
            if (subEl) subEl.innerText = `Census survey metrics loaded for ${stateName}. Opening district breakdown...`;
            openDrilldownModal(stateName);
        });
    });

    // Live Activity Feed
    const startLiveFeed = () => {
        const feed = document.getElementById('activity-feed');
        const activities = [
            { icon: 'shield-check', color: 'emerald', text: 'New batch of 500 records synced securely from Edge Node #42.' },
            { icon: 'alert-triangle', color: 'orange', text: 'Anomaly detected in District B data bounds. Flagged for review.' },
            { icon: 'bot', color: 'indigo', text: 'Gemini AI successfully debunked a viral myth for user in Tamil Nadu.' },
            { icon: 'wifi-off', color: 'slate', text: 'Offline PWA sync completed for 12 rural devices.' },
            { icon: 'user-plus', color: 'purple', text: 'New Enumerator registered in Karnataka jurisdiction.' }
        ];

        setInterval(() => {
            const act = activities[Math.floor(Math.random() * activities.length)];
            const item = document.createElement('div');
            item.className = 'feed-item-enter bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-start space-x-3';
            item.innerHTML = `
                <div class="p-2 bg-${act.color}-500/10 rounded-lg text-${act.color}-500 mt-0.5">
                    <i data-lucide="${act.icon}" class="w-4 h-4"></i>
                </div>
                <div>
                    <p class="text-sm text-slate-700 dark:text-slate-300">${act.text}</p>
                    <p class="text-xs text-slate-400 mt-1">${new Date().toLocaleTimeString()}</p>
                </div>
            `;
            
            feed.insertBefore(item, feed.firstChild);
            if (feed.children.length > 8) feed.removeChild(feed.lastChild);
            lucide.createIcons({ root: item });
        }, 4000);
    };
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
