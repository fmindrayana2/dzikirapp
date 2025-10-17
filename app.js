// Dzikir App - Mobile Islamic Prayer Application
// State Management and Functionality

class DzikirApp {
    constructor() {
        this.currentType = null; // 'pagi' or 'petang'
        this.currentIndex = 0;
        this.currentCount = 0;
        this.isCompleted = false;
        
        // Data for dzikir
        this.dzikirData = {
            pagi: [
                {
                    id: 1,
                    arabic: "اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ، لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ، لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ، مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ، يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ، وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلاَّ بِمَا شَاءَ، وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ، وَلَا يَئُودُهُ حِفْظُهُمَا، وَهُوَ الْعَلِيُّ الْعَظِيمُ",
                    count: 1,
                    name: "Ayat Kursi"
                },
                {
                    id: 2,
                    arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ قُلْ هُوَ اللَّهُ أَحَدٌ اللَّهُ الصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ مِن شَرِّ مَا خَلَقَ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ قُلْ أَعُوذُ بِرَبِّ النَّاسِ مَلِكِ النَّاسِ إِلَهِ النَّاسِ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ مِنَ الْجِنَّةِ وَ النَّاسِ",
                    count: 3,
                    name: "Al-Ikhlas, Al-Falaq, An-Nas"
                },
                {
                    id: 3,
                    arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَـهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِيْ هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوْذُ بِكَ مِنْ شَرِّ مَا فِيْ هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوْذُ بِكَ مِنَ الْكَسَلِ وَسُوْءِ الْكِبَرِ، رَبِّ أَعُوْذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ",
                    count: 1,
                    name: "Doa Pagi"
                },
                {
                    id: 4,
                    arabic: "اَللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوْتُ وَإِلَيْكَ النُّشُوْرُ",
                    count: 1,
                    name: "Doa Hidup Mati"
                },
                {
                    id: 5,
                    arabic: "اَللَّهُمَّ أَنْتَ رَبِّيْ لاَ إِلَـهَ إِلاَّ أَنْتَ، خَلَقْتَنِيْ وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوْذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوْءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوْءُ بِذَنْبِيْ فَاغْفِرْ لِيْ فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوْبَ إِلاَّ أَنْتَ",
                    count: 1,
                    name: "Sayyidul Istighfar"
                },
                {
                    id: 6,
                    arabic: "اَللَّهُمَّ إِنِّيْ أَصْبَحْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلاَئِكَتَكَ وَجَمِيْعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللهُ لاَ إِلَـهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيْكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُوْلُكَ",
                    count: 4,
                    name: "Doa Bersaksi"
                },
                {
                    id: 7,
                    arabic: "اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَاْلآخِرَةِ، اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِيْنِيْ وَدُنْيَايَ وَأَهْلِيْ وَمَالِيْ اللَّهُمَّ اسْتُرْ عَوْرَاتِى وَآمِنْ رَوْعَاتِى. اَللَّهُمَّ احْفَظْنِيْ مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِيْ، وَعَنْ يَمِيْنِيْ وَعَنْ شِمَالِيْ، وَمِنْ فَوْقِيْ، وَأَعُوْذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِيْ",
                    count: 1,
                    name: "Doa Afiyah"
                },
                {
                    id: 8,
                    arabic: "اَللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَاْلأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيْكَهُ، أَشْهَدُ أَنْ لاَ إِلَـهَ إِلاَّ أَنْتَ، أَعُوْذُ بِكَ مِنْ شَرِّ نَفْسِيْ، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِيْ سُوْءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ",
                    count: 1,
                    name: "Doa Perlindungan"
                },
                {
                    id: 9,
                    arabic: "بِسْمِ اللَّهِ الَّذِى لاَ يَضُرُّ مَعَ اسْمِهِ شَىْءٌ فِى الأَرْضِ وَلاَ فِى السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
                    count: 3,
                    name: "Doa Perlindungan Bahaya"
                },
                {
                    id: 10,
                    arabic: "رَضِيْتُ بِاللهِ رَبًّا، وَبِاْلإِسْلاَمِ دِيْنًا، وَبِمُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا",
                    count: 3,
                    name: "Doa Keridlaan"
                },
                {
                    id: 11,
                    arabic: "يَا حَيُّ يَا قَيُّوْمُ بِرَحْمَتِكَ أَسْتَغِيْثُ، وَأَصْلِحْ لِيْ شَأْنِيْ كُلَّهُ وَلاَ تَكِلْنِيْ إِلَى نَفْسِيْ طَرْفَةَ عَيْنٍ أَبَدًا",
                    count: 1,
                    name: "Doa Minta Pertolongan"
                },
                {
                    id: 12,
                    arabic: "أَصْبَحْنَا عَلَى فِطْرَةِ اْلإِسْلاَمِ وَعَلَى كَلِمَةِ اْلإِخْلاَصِ، وَعَلَى دِيْنِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِيْنَا إِبْرَاهِيْمَ، حَنِيْفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِيْنَ",
                    count: 1,
                    name: "Doa Istiqamah"
                },
                {
                    id: 13,
                    arabic: "سُبْحَانَ اللهِ وَبِحَمْدِهِ",
                    count: 100,
                    name: "Tasbih"
                }
            ],
            petang: [
                {
                    id: 1,
                    arabic: "اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ، لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ، لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ، مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ، يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ، وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلاَّ بِمَا شَاءَ، وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ، وَلَا يَئُودُهُ حِفْظُهُمَا، وَهُوَ الْعَلِيُّ الْعَظِيمُ",
                    count: 1,
                    name: "Ayat Kursi"
                },
                {
                    id: 2,
                    arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ قُلْ هُوَ اللَّهُ أَحَدٌ اللَّهُ الصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ مِن شَرِّ مَا خَلَقَ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ قُلْ أَعُوذُ بِرَبِّ النَّاسِ مَلِكِ النَّاسِ إِلَهِ النَّاسِ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ مِنَ الْجِنَّةِ وَ النَّاسِ",
                    count: 3,
                    name: "Al-Ikhlas, Al-Falaq, An-Nas"
                },
                {
                    id: 3,
                    arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ للهِ، وَالْحَمْدُ للهِ، لَا إِلَهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُبِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُبِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُبِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ",
                    count: 1,
                    name: "Doa Petang"
                },
                {
                    id: 4,
                    arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا،وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيْرُ",
                    count: 1,
                    name: "Doa Hidup Mati"
                },
                {
                    id: 5,
                    arabic: "اَللَّهُمَّ أَنْتَ رَبِّيْ لاَ إِلَـهَ إِلاَّ أَنْتَ، خَلَقْتَنِيْ وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوْذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوْءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوْءُ بِذَنْبِيْ فَاغْفِرْ لِيْ فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوْبَ إِلاَّ أَنْتَ",
                    count: 1,
                    name: "Sayyidul Istighfar"
                },
                {
                    id: 6,
                    arabic: "اَللَّهُمَّ إِنِّيْ أَمْسَيْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلاَئِكَتَكَ وَجَمِيْعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللهُ لاَ إِلَـهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيْكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُوْلُكَ",
                    count: 4,
                    name: "Doa Bersaksi"
                }
            ]
        };
        
        // Keutamaan data
        this.keutamaanData = [
            {
                title: "Mendekatkan Diri kepada Allah",
                description: "Dzikir adalah cara terbaik untuk mengingat Allah dan mendekatkan diri kepada-Nya sepanjang waktu."
            },
            {
                title: "Perlindungan dari Setan dan Jin",
                description: "Dzikir pagi dan petang memberikan perlindungan dari gangguan setan, jin, dan makhluk halus lainnya."
            },
            {
                title: "Ketenangan dan Kedamaian Jiwa",
                description: "Dengan mengingat Allah, hati menjadi tenang dan damai. Allah berfirman: 'Ingatlah, hanya dengan mengingat Allah hati menjadi tenteram.'"
            },
            {
                title: "Pahala yang Berlipat Ganda",
                description: "Setiap dzikir yang dibaca akan mendapat pahala yang berlipat ganda dari Allah, terutama dzikir di waktu-waktu mustajab."
            },
            {
                title: "Penghapus Dosa dan Kesalahan",
                description: "Dzikir dapat menghapus dosa-dosa kecil dan menjadi penebus kesalahan yang telah diperbuat."
            },
            {
                title: "Penjaga dari Bala dan Musibah",
                description: "Dzikir pagi dan petang menjadi benteng perlindungan dari berbagai bala, musibah, dan kejahatan."
            },
            {
                title: "Keberkahan dalam Hidup",
                description: "Orang yang rajin berdzikir akan mendapat keberkahan dalam hidupnya, baik dalam rezeki, kesehatan, maupun keluarga."
            },
            {
                title: "Syafaat di Hari Kiamat",
                description: "Dzikir akan menjadi saksi dan pemberi syafaat bagi pembacanya di hari kiamat kelak."
            }
        ];
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.renderKeutamaan();
        this.hideLoadingScreen();
        
        // Initialize theme
        const savedTheme = this.getTheme();
        this.setTheme(savedTheme);
    }
    
    hideLoadingScreen() {
        setTimeout(() => {
            document.getElementById('loadingScreen').style.display = 'none';
            document.getElementById('app').classList.remove('hidden');
        }, 1000);
    }
    
    bindEvents() {
        // Menu buttons
        document.getElementById('dzikirPagiBtn').addEventListener('click', () => {
            this.startDzikir('pagi');
        });
        
        document.getElementById('dzikirPetangBtn').addEventListener('click', () => {
            this.startDzikir('petang');
        });
        
        // Navigation buttons
        document.getElementById('backToHome').addEventListener('click', () => {
            this.showHome();
        });
        
        document.getElementById('prevBtn').addEventListener('click', () => {
            this.prevDzikir();
        });
        
        document.getElementById('nextBtn').addEventListener('click', () => {
            this.nextDzikir();
        });
        
        // Counter buttons
        document.getElementById('incrementBtn').addEventListener('click', () => {
            this.incrementCounter();
        });
        
        document.getElementById('decrementBtn').addEventListener('click', () => {
            this.decrementCounter();
        });
        
        document.getElementById('tapCountBtn').addEventListener('click', () => {
            this.tapCount();
        });
        
        // Completion screen buttons
        document.getElementById('restartBtn').addEventListener('click', () => {
            this.restartDzikir();
        });
        
        document.getElementById('backToMenuBtn').addEventListener('click', () => {
            this.showHome();
        });
        
        // Theme toggle
        document.getElementById('themeToggle').addEventListener('click', () => {
            this.toggleTheme();
        });
        
        // Add touch event for haptic feedback
        this.addHapticFeedback();
    }
    
    addHapticFeedback() {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                this.vibrate(50);
            });
        });
    }
    
    vibrate(duration = 50) {
        if ('vibrate' in navigator) {
            navigator.vibrate(duration);
        }
    }
    
    startDzikir(type) {
        this.currentType = type;
        this.currentIndex = 0;
        this.currentCount = 0;
        this.isCompleted = false;
        
        this.showDzikirScreen();
        this.renderDzikir();
        this.updateProgress();
        
        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    renderDzikir() {
        const dzikir = this.getCurrentDzikir();
        if (!dzikir) return;
        
        document.getElementById('dzikirName').textContent = dzikir.name;
        document.getElementById('dzikirArabic').textContent = dzikir.arabic;
        
        // Show/hide counter section based on count requirement
        const counterSection = document.getElementById('counterSection');
        if (dzikir.count > 1) {
            counterSection.classList.remove('hidden');
            this.setupCounter(dzikir.count);
        } else {
            counterSection.classList.add('hidden');
            this.currentCount = 1; // Auto-complete single count dzikir
        }
        
        this.updateNavigationButtons();
    }
    
    setupCounter(targetCount) {
        document.getElementById('targetCount').textContent = targetCount;
        document.getElementById('currentCount').textContent = this.currentCount;
        
        this.updateCounterButtons();
    }
    
    updateCounterButtons() {
        const dzikir = this.getCurrentDzikir();
        const decrementBtn = document.getElementById('decrementBtn');
        const incrementBtn = document.getElementById('incrementBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        decrementBtn.disabled = this.currentCount <= 0;
        incrementBtn.disabled = this.currentCount >= dzikir.count;
        
        // Enable next button only when counter is complete or dzikir has count of 1
        nextBtn.disabled = dzikir.count > 1 && this.currentCount < dzikir.count;
        
        // Update next button text based on completion
        if (this.currentIndex === this.getCurrentDzikirList().length - 1) {
            if (dzikir.count === 1 || this.currentCount >= dzikir.count) {
                nextBtn.textContent = 'Selesai ✨';
                nextBtn.disabled = false;
            }
        } else {
            nextBtn.textContent = 'Lanjut →';
        }
    }
    
    incrementCounter() {
        const dzikir = this.getCurrentDzikir();
        if (this.currentCount < dzikir.count) {
            this.currentCount++;
            document.getElementById('currentCount').textContent = this.currentCount;
            this.updateCounterButtons();
            this.vibrate(30);
        }
    }
    
    decrementCounter() {
        if (this.currentCount > 0) {
            this.currentCount--;
            document.getElementById('currentCount').textContent = this.currentCount;
            this.updateCounterButtons();
            this.vibrate(30);
        }
    }
    
    tapCount() {
        this.incrementCounter();
        
        // Add visual feedback
        const tapBtn = document.getElementById('tapCountBtn');
        tapBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            tapBtn.style.transform = 'scale(1)';
        }, 100);
    }
    
    nextDzikir() {
        const dzikir = this.getCurrentDzikir();
        
        // Check if current dzikir is complete
        if (dzikir.count > 1 && this.currentCount < dzikir.count) {
            return; // Don't proceed if counter not complete
        }
        
        if (this.currentIndex < this.getCurrentDzikirList().length - 1) {
            this.currentIndex++;
            this.currentCount = 0;
            this.renderDzikir();
            this.updateProgress();
            
            // Smooth scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // Complete the dzikir session
            this.completeDzikir();
        }
    }
    
    prevDzikir() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            const prevDzikir = this.getCurrentDzikir();
            this.currentCount = prevDzikir.count; // Set to complete state
            this.renderDzikir();
            this.updateProgress();
            
            // Smooth scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    
    completeDzikir() {
        this.isCompleted = true;
        this.showCompletionScreen();
        this.vibrate([100, 50, 100]); // Celebration vibration pattern
    }
    
    restartDzikir() {
        this.currentIndex = 0;
        this.currentCount = 0;
        this.isCompleted = false;
        this.showDzikirScreen();
        this.renderDzikir();
        this.updateProgress();
    }
    
    updateProgress() {
        const total = this.getCurrentDzikirList().length;
        const current = this.currentIndex + 1;
        const percentage = (this.currentIndex / (total - 1)) * 100;
        
        document.getElementById('progressText').textContent = `${current}/${total}`;
        document.getElementById('progressFill').style.width = `${percentage}%`;
    }
    
    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        prevBtn.disabled = this.currentIndex === 0;
        
        // Next button logic is handled in updateCounterButtons
        this.updateCounterButtons();
    }
    
    getCurrentDzikir() {
        if (!this.currentType) return null;
        return this.getCurrentDzikirList()[this.currentIndex];
    }
    
    getCurrentDzikirList() {
        return this.dzikirData[this.currentType] || [];
    }
    
    // Theme management
    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }
    
    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const themeIcon = document.querySelector('.theme-icon');
        themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
        
        // Save theme preference (using variable since no localStorage)
        this.currentTheme = theme;
    }
    
    getTheme() {
        return this.currentTheme || 'light';
    }
    
    // Screen management
    showHome() {
        this.hideAllScreens();
        document.getElementById('homeScreen').classList.remove('hidden');
        this.resetState();
    }
    
    showDzikirScreen() {
        this.hideAllScreens();
        document.getElementById('dzikirScreen').classList.remove('hidden');
    }
    
    showCompletionScreen() {
        this.hideAllScreens();
        document.getElementById('completionScreen').classList.remove('hidden');
    }
    
    hideAllScreens() {
        const screens = document.querySelectorAll('.screen');
        screens.forEach(screen => screen.classList.add('hidden'));
    }
    
    resetState() {
        this.currentType = null;
        this.currentIndex = 0;
        this.currentCount = 0;
        this.isCompleted = false;
    }
    
    // Render keutamaan accordion
    renderKeutamaan() {
        const accordion = document.getElementById('keutamaanAccordion');
        
        this.keutamaanData.forEach((item, index) => {
            const accordionItem = document.createElement('div');
            accordionItem.className = 'accordion-item';
            accordionItem.innerHTML = `
                <button class="accordion-header" data-index="${index}">
                    <span>${item.title}</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        ${item.description}
                    </div>
                </div>
            `;
            
            accordion.appendChild(accordionItem);
        });
        
        // Bind accordion events
        this.bindAccordionEvents();
    }
    
    bindAccordionEvents() {
        const accordionHeaders = document.querySelectorAll('.accordion-header');
        
        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const accordionItem = header.parentElement;
                const isActive = accordionItem.classList.contains('active');
                
                // Close all accordion items
                document.querySelectorAll('.accordion-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Toggle current item if it wasn't active
                if (!isActive) {
                    accordionItem.classList.add('active');
                }
                
                this.vibrate(20);
            });
        });
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.dzikirApp = new DzikirApp();
});