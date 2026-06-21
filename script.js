// Bilingual translations database
const translations = {
    en: {
        navApps: "Apps",
        navPhilosophy: "Philosophy",
        navContact: "Contact",
        heroBadge: "Next-Gen SaaS & Mobile Studio",
        heroSubtitle: "AI-powered mobile apps and SaaS tools",
        heroDescription: "We craft premium, user-centric, and offline-first software solutions driven by modern artificial intelligence. Elevate your business, health, spiritual journey, and daily routines with our crafted experience suite.",
        btnExplore: "Explore Portfolio",
        btnContact: "Get In Touch",
        tagOfflinePMS: "Offline-First PMS",
        tagAIHealth: "AI Migraine Assistant",
        tagIslamicGuide: "Islamic Life Guide",
        tagAISalon: "AI Salon Management",
        portfolioTitle: "Our Applications",
        portfolioSubtitle: "Explore our high-performance mobile apps and SaaS solutions designed for seamless user experiences.",
        categoryHospitality: "Hospitality SaaS",
        boutiflowDesc: "Professional, offline-first property management system (PMS) designed for boutique hotels, guesthouses, and vacation rentals. Access calendars, guest CRM, and templates completely offline.",
        featOfflineFirst: "Offline-First",
        featVisualBooking: "Visual Calendar",
        featWhatsApp: "WhatsApp i18n",
        categoryHealth: "AI Health",
        migrafocusDesc: "AI-powered health assistant designed to monitor sleep patterns, heart rates, and physical activity to predict migraine risk thresholds and deliver personalized wellness recommendations.",
        featAIPrediction: "AI Risk Prediction",
        featAppleWatch: "Apple Watch Sync",
        featPDFReports: "PDF Reports",
        categoryLifestyle: "Islamic Lifestyle",
        nuraiDesc: "An elegant, AI-supported companion for your Islamic daily routines. Provides real-time prayer calculations, a fully localized Quran, Islamic prayers, and glassmorphic starry widgets.",
        featPrayerTimes: "Prayer Times",
        featQuran: "Quran Reader",
        featAICompanion: "AI Companion",
        categoryBeauty: "AI Beauty SaaS",
        passioDesc: "High-end salon management software with built-in AI beauty consulting. Features a luxury appointment timeline calendar, offline CRM databases, and smart sales reports for beauty experts.",
        featSmartBooking: "Smart Booking",
        featOfflineCRM: "Offline CRM",
        featAnalytics: "Sales Analytics",
        visitSite: "Visit Website",
        philoTitle: "Our Core Philosophy",
        philoSubtitle: "How we approach design, development, and user security to construct memorable experiences.",
        p1Title: "Offline-First Privacy",
        p1Desc: "Your data belongs to you. We write applications where critical logic runs client-side directly on your hardware, guaranteeing speed and data sovereignty without needing connection.",
        p2Title: "Applied Intelligence",
        p2Desc: "We integrate AI not as a gimmick, but as a practical assistant. From predicting health trends to auto-generating localized guest templates, we maximize daily productivity.",
        p3Title: "Luxury Craftsmanship",
        p3Desc: "We believe software should feel premium. Every alignment, transition, typography scale, and glassmorphic surface is tuned to present a sleek, satisfying environment.",
        contactTitle: "Let's Create Together",
        contactSubtitle: "Interested in our services, custom AI integrations, or custom SaaS development? Reach out and we'll reply shortly.",
        contactBtn: "Send us an Email",
        footerRights: "All rights reserved.",
        comingSoonAppStore: "Coming Soon on App Store"
    },
    tr: {
        navApps: "Uygulamalar",
        navPhilosophy: "Felsefe",
        navContact: "İletişim",
        heroBadge: "Yeni Nesil SaaS ve Mobil Stüdyo",
        heroSubtitle: "Yapay zeka destekli mobil uygulamalar ve SaaS araçları",
        heroDescription: "Modern yapay zeka ile yönlendirilen, kullanıcı odaklı ve öncelikli çevrimdışı çalışan premium yazılımlar üretiyoruz. İşinizi, sağlığınızı, ibadetlerinizi ve günlük rutinlerinizi özel tasarlanmış uygulama setimizle ileriye taşıyın.",
        btnExplore: "Portföyü Keşfet",
        btnContact: "İletişime Geç",
        tagOfflinePMS: "Çevrimdışı PMS",
        tagAIHealth: "Yapay Zeka Migren Asistanı",
        tagIslamicGuide: "İslami Yaşam Rehberi",
        tagAISalon: "Yapay Zeka Salon Yönetimi",
        portfolioTitle: "Uygulamalarımız",
        portfolioSubtitle: "Kusursuz kullanıcı deneyimleri için tasarlanmış yüksek performanslı mobil uygulamalarımızı ve SaaS çözümlerimizi keşfedin.",
        categoryHospitality: "Otel SaaS",
        boutiflowDesc: "Butik oteller, pansiyonlar ve kiralık yazlıklar için tasarlanmış profesyonel, öncelikli çevrimdışı çalışan otel yönetim sistemi (PMS). Takvimlere, konuk CRM'ine ve şablonlara internet olmadan erişin.",
        featOfflineFirst: "Çevrimdışı Çalışma",
        featVisualBooking: "Görsel Takvim",
        featWhatsApp: "Çok Dilli WhatsApp",
        categoryHealth: "Yapay Zeka Sağlık",
        migrafocusDesc: "Migren risk sınırlarını tahmin etmek ve kişiselleştirilmiş sağlık önerileri sunmak amacıyla uyku düzenini, nabız hızını ve fiziksel aktiviteyi izlemek için tasarlanmış yapay zeka destekli sağlık asistanı.",
        featAIPrediction: "Yapay Zeka Risk Tahmini",
        featAppleWatch: "Apple Watch Eşitleme",
        featPDFReports: "PDF Raporlama",
        categoryLifestyle: "İslami Yaşam",
        nuraiDesc: "Günlük İslami rutinleriniz için yapay zeka destekli zarif bir rehber. Gerçek zamanlı namaz saati hesaplamaları, yerelleştirilmiş Kur'an-ı Kerim, dualar ve yıldızlı cam widget'lar sunar.",
        featPrayerTimes: "Namaz Vakitleri",
        featQuran: "Kur'an Okuyucu",
        featAICompanion: "Yapay Zeka Yoldaş",
        categoryBeauty: "Yapay Zeka Güzellik SaaS",
        passioDesc: "Yapay zeka destekli güzellik danışmanlığı sunan premium salon yönetim yazılımı. Lüks randevu zaman çizelgesi takvimi, çevrimdışı CRM veritabanları ve güzellik uzmanları için akıllı satış raporları sunar.",
        featSmartBooking: "Akıllı Rezervasyon",
        featOfflineCRM: "Çevrimdışı CRM",
        featAnalytics: "Satış Analitiği",
        visitSite: "Siteyi Ziyaret Et",
        philoTitle: "Temel Felsefemiz",
        philoSubtitle: "Unutulmaz deneyimler inşa etmek için tasarıma, geliştirmeye ve kullanıcı güvenliğine yaklaşımımız.",
        p1Title: "Çevrimdışı Öncelikli Gizlilik",
        p1Desc: "Verileriniz size aittir. Kritik mantığın internet bağlantısı gerektirmeden doğrudan cihazınızda çalıştığı uygulamalar yazarak hız ve veri bağımsızlığı sağlıyoruz.",
        p2Title: "Uygulamalı Zeka",
        p2Desc: "Yapay zekayı geçici bir heves olarak değil, pratik bir yardımcı olarak entegre ediyoruz. Sağlık trendlerini tahmin etmekten çok dilli müşteri şablonları oluşturmaya kadar günlük verimliliği artırıyoruz.",
        p3Title: "Lüks İşçilik",
        p3Desc: "Yazılımın lüks ve kaliteli hissettirmesi gerektiğine inanıyoruz. Her hizalama, geçiş efekti, yazı tipi ölçeği ve cam arayüz tasarımı size şık bir ortam sunmak üzere ayarlanmıştır.",
        contactTitle: "Birlikte Üretelim",
        contactSubtitle: "Hizmetlerimizle, özel yapay zeka entegrasyonlarımızla veya SaaS geliştirme çözümlerimizle ilgileniyor musunuz? Bize ulaşın, en kısa sürede dönüş yapalım.",
        contactBtn: "E-posta Gönderin",
        footerRights: "Tüm hakları saklıdır.",
        comingSoonAppStore: "Yakında App Store'da"
    }
};

// Language Handling State
let currentLang = localStorage.getItem("dedeapps_lang") || "en";

function updateLanguageUI(lang) {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    // Update active button text
    const langBtnText = document.querySelector("#langToggle .lang-text");
    if (langBtnText) {
        langBtnText.textContent = lang.toUpperCase();
    }
    // Update HTML lang attribute
    document.documentElement.setAttribute("lang", lang);
}

// Initial Call
document.addEventListener("DOMContentLoaded", () => {
    updateLanguageUI(currentLang);
    
    // Set Footer Current Year
    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Language Toggle Listener
    const langToggle = document.getElementById("langToggle");
    if (langToggle) {
        langToggle.addEventListener("click", () => {
            currentLang = currentLang === "en" ? "tr" : "en";
            localStorage.setItem("dedeapps_lang", currentLang);
            updateLanguageUI(currentLang);
        });
    }

    // Mobile Navbar Menu Toggles
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            navMenu.classList.toggle("active");
            // Change icon toggles
            const icon = menuToggle.querySelector("i");
            if (icon.classList.contains("fa-bars-staggered")) {
                icon.classList.remove("fa-bars-staggered");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars-staggered");
            }
        });

        // Close menu on nav links click
        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                const icon = menuToggle.querySelector("i");
                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars-staggered");
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener("click", (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove("active");
                const icon = menuToggle.querySelector("i");
                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars-staggered");
                }
            }
        });
    }

    // Header Scroll Shadow
    window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }
    });

    // Spotlight Hover Card Mouse Effect
    document.querySelectorAll(".app-card").forEach(card => {
        card.addEventListener("mousemove", e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty("--x", `${x}px`);
            card.style.setProperty("--y", `${y}px`);
        });
    });

    // Reveal on Scroll Animations
    const revealElements = document.querySelectorAll("[data-reveal]");
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" // triggers slightly before entering viewport
    });

    revealElements.forEach(el => revealObserver.observe(el));
});
