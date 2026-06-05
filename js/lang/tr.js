window.translations = window.translations || {};
window.translations.tr = {
  nav: {
    home: 'Ana Sayfa',
    profile: 'Profil',
    skills: 'Yetenekler',
    experience: 'Deneyim',
    projects: 'Projeler',
    education: 'Eğitim',
    contact: 'İletişim'
  },

  hero: {
    greeting: 'Merhaba, ben',
    name: 'Rayner Alejandro Soto Martínez',
    title: 'Java Backend Geliştirici',
    location: 'Havana, Küba | Uzaktan çalışmaya uygun',
    download: "CV'yi İndir",
    contact: 'İletişime Geç'
  },

  profile: {
    eyebrow: 'Hakkımda',
    title: 'Profesyonel Profil',
    text: 'Ölçeklenebilir kurumsal uygulamalar geliştirmede 3 yılı aşkın deneyime sahip, Java Backend geliştirme konusunda uzmanlaşmış Bilgisayar Mühendisi ve Backend Geliştiricisiyim. Sağlam mikrositeler ve RESTful API\'ler oluşturmak için Spring Framework ekosisteminde (Spring Boot, Spring Cloud, Spring Security, Spring Data JPA) uzmanım. Altıgen Mimari desenleri ve Domain-Driven Design (DDD) ilkelerini kullanarak monolitik sistemleri dağıtık mimarilere dönüştürme konusunda kanıtlanmış deneyime sahibim. İlişkisel veritabanı tasarımı ve optimizasyonunda (PostgreSQL, MySQL) yetkin olup, coğrafi veri entegrasyonu (PostGIS) ve ETL süreç otomasyonunda güçlü yeteneklere sahibim. DevOps uygulamaları (Docker, Flyway, GitHub Actions), titiz testler (JUnit, Mockito) ve kod analizi (SonarQube) ile kaliteli çözümler sunmaya kararlıyım. Agile metodolojileri (Scrum) ile çalışma ve dağıtık geliştirme ekiplerine katkıda bulunma konusunda kanıtlanmış bir geçmişe sahibim.'
  },

  skills: {
    eyebrow: 'Uzmanlık alanım',
    title: 'Teknik Beceriler',
    categories: [
      { name: 'Programlama Dilleri', items: ['Java (JDK 8, 11, 14, 17, 21, 22, 25, GraalVM)', 'Scala', 'Python', 'C', 'JavaScript'] },
      { name: 'Frameworkler ve Spring Ekosistemi', items: ['Spring Boot', 'Spring AOP', 'Spring Cloud', 'Spring Security (JWT)', 'Spring Data JPA', 'Spring Data JDBC', 'Spring Batch', 'Spring MVC', 'Hibernate', 'JPA'] },
      { name: 'Veritabanları', items: ['PostgreSQL', 'PostGIS', 'MySQL', 'SQL Server', 'SQLite', 'H2', 'Oracle DB', 'JDBC', 'Flyway'] },
      { name: 'Yazılım Mimarisi', items: ['Microservices', 'Hexagonal Architecture', 'Domain-Driven Design', 'MVC', 'UML 2.0'] },
      { name: 'DevOps ve Araçlar', items: ['Docker', 'Maven', 'Gradle', 'Git', 'GitHub Actions', 'Apache Tomcat', 'CI/CD'] },
      { name: 'Test ve Kalite', items: ['JUnit', 'Mockito', 'SonarQube', 'Code Review', 'Clean Code', 'SOLID', 'Design Patterns'] },
      { name: 'Ön Yüz', items: ['HTML5', 'CSS3', 'JavaScript', 'Thymeleaf', 'PrimeFaces', 'Jakarta EE', 'React'] },
      { name: 'Veri İşleme', items: ['Apache POI', 'ETL', 'GIS'] }
    ]
  },

  experience: {
    eyebrow: 'Kariyer',
    title: 'Profesyonel Deneyim',
    jobs: [
      {
        title: 'Java Full-Stack Analist ve Geliştirici',
        company: 'Gecytes',
        period: 'Kas 2024 - Günümüz',
        location: 'Uzaktan, Meksika',
        details: [
          'Mikrositeler ve Altıgen Mimari altında backend servis tasarımı.',
          'Spring Boot ve Spring Cloud ile RESTful API uygulaması.',
          'Coğrafi verilerle PostgreSQL (PostGIS) yönetimi.',
          'JUnit, SonarQube ve Docker ile kalite güvencesi.',
          'Git/GitHub ile Agile iş birliği.'
        ],
        stack: ['Java 17/21/25', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Hibernate', 'React', 'PostgreSQL (PostGIS)', 'Docker', 'Maven']
      },
      {
        title: 'Java Backend Geliştirici',
        company: 'Gestini',
        period: 'May 2025 - Haz 2025',
        location: 'Uzaktan, Arjantin',
        details: [
          'Ölçeklenebilir backend özellik tasarımı ve uygulaması.',
          'Sağlamlık ve kararlılığı sağlamak için birim test uygulaması.'
        ],
        stack: ['Java 17/21', 'Spring Boot', 'Spring Data', 'Spring Security', 'Hibernate', 'MySQL', 'Docker', 'Maven']
      },
      {
        title: 'Scala Backend Geliştirici',
        company: 'Arkon Data',
        period: 'Mar 2025 - May 2025',
        location: 'Uzaktan, Meksika',
        details: [
          'Backend geliştirme için Scala ve fonksiyonel programlamaya derinlemesine dalış.',
          'Ölçeklenebilir mimarilerin ve mikrositelerin analizi.',
          'Kod İncelemesine katılım ve servis optimizasyonu.'
        ],
        stack: ['Scala', 'Functional Programming', 'Microservices', 'Git', 'GitHub']
      },
      {
        title: 'Java Back-End Analist ve Geliştirici',
        company: 'CUJAE',
        period: 'Oca 2024 - Kas 2024',
        location: 'Havana, Küba',
        details: [
          'Masaüstünden çoklu platform web çözümüne geçişte teknik liderlik.',
          'Apache POI ile RESTful API oluşturma ve ETL otomasyonu.',
          'PostGIS ile coğrafi veri optimizasyonu.'
        ],
        stack: ['Java 17', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'PostgreSQL (PostGIS)', 'Apache POI', 'Maven']
      },
      {
        title: 'Java Geliştirici ve Veritabanı Uzmanı',
        company: 'CUJAE',
        period: 'Eyl 2022 - Tem 2023',
        location: 'Havana, Küba',
        details: [
          'Veri göçü için Java otomasyon aracı geliştirme.',
          'İlişkisel veritabanı yeniden tasarımı ve optimizasyonu.',
          'Referans bütünlüğü için tetikleyici ve fonksiyon uygulaması.'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'SQL', 'Git', 'GitHub']
      },
      {
        title: 'Java Yazılım Analisti ve Geliştiricisi',
        company: 'CUJAE',
        period: 'Oca 2022 - Eyl 2022',
        location: 'Havana, Küba',
        details: [
          'Coğrafi bilgi yönetim çözümü oluşturma.',
          'Excel\'den ilişkisel veritabanına dönüşüm otomasyonu.',
          'Veri analizi için Java Swing arayüz geliştirme.'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'Apache POI', 'GIS', 'Git']
      }
    ]
  },

  projects: {
    eyebrow: 'Öne çıkan çalışmalar',
    title: 'Öne Çıkan Projeler',
    list: [
      {
        title: 'Akıllı Sensör Veri İzleme ve Analiz Sistemi',
        subtitle: 'Lisans Tezi - CUJAE',
        period: '2024 - 2025',
        description: 'Vücuda bağlı akıllı sensörlerden gelen verileri izlemek, yönetmek ve analiz etmek için backend sistemi. Yürüyüş paterni analizi yoluyla patoloji teşhisi için mikrositeleri, yapay zekayı ve Nesnelerin İnternetini entegre eder.',
        highlights: [
          'Spring Boot ve Spring Cloud (Gateway, Eureka) ile Mikroservis Mimarisi',
          'Yürüyüş paterni sınıflandırması için Neuroph ile Sinir Ağları',
          'ESP32 sensörleri ve Bluetooth ile IoT',
          'SQLite ve PostgreSQL senkronizasyonu ile Yerli Android uygulaması',
          'Spring Security (JWT) ile Güvenlik'
        ],
        stack: ['Java 17', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'PostgreSQL', 'SQLite', 'Android', 'Neuroph', 'IoT', 'Maven']
      },
      {
        title: 'Arıcılık Yönetimi için Coğrafi Sistem',
        subtitle: 'Gecytes',
        period: 'Kas 2024 - Günümüz',
        description: 'Meksika\'da arıcılık yönetimi için kovanların, arılıkların ve rotaların coğrafi gösterimi ile coğrafi sistem.',
        highlights: [
          'Coğrafi veri entegrasyonu ile sağlam RESTful API',
          'Performans optimizasyonu ve kimlik doğrulama/yetkilendirme',
          'GIS uzantılı PostgreSQL',
          'Flyway ile veritabanı sürümleme ve Docker dağıtımı',
          'Kapsamlı mimari dokümantasyonu'
        ],
        stack: ['Java 17/21/25', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'PostgreSQL (PostGIS)', 'Flyway', 'Docker', 'Maven', 'JUnit', 'SonarQube']
      },
      {
        title: 'Coğrafi Referanslı Personel Yönetim Backend Sistemi',
        subtitle: 'CUJAE - Web',
        period: 'Oca 2024 - Kas 2024',
        description: 'Coğrafi entegrasyon ile bir turizm taşımacılık şirketinin operasyonlarını yönetmek için web sistemi.',
        highlights: [
          'Spring Framework ve Spring Data JDBC ile Backend',
          'JSF ve PrimeFaces ile web arayüzü',
          'Şoför, otobüs ve talep yönetim modülleri',
          'Mimari diyagramlar ve teknik dokümantasyon'
        ],
        stack: ['Java', 'Spring Boot', 'Spring Data JDBC', 'JSF', 'PrimeFaces', 'PostgreSQL', 'Maven', 'Swagger', 'UML']
      },
      {
        title: 'Şoför ve Otobüs Kontrol Sistemi',
        subtitle: 'CUJAE - Turizm Taşımacılık',
        period: 'Eyl 2023 - Şub 2024',
        description: 'Backend ve web ön yüzünü entegre eden bir turizm taşımacılık şirketi için yönetim sistemi.',
        highlights: [
          'Spring Framework, Spring Data JDBC ve Spring MVC ile Backend',
          'JSF ve PrimeFaces ile web arayüzü',
          'Veri bütünlüğü doğrulamaları ve yönetim'
        ],
        stack: ['Java', 'Spring Boot', 'Spring Data JDBC', 'Spring MVC', 'Spring Security', 'JSF', 'PrimeFaces', 'PostgreSQL', 'Maven']
      },
      {
        title: 'Bilgisayar Envanter Veritabanı',
        subtitle: 'CUJAE - Bilgisayar Mühendisliği Fakültesi',
        period: 'Eyl 2022 - Tem 2023',
        description: 'Excel tabanlı bir envanter sisteminden PostgreSQL ilişkisel veritabanına geçiş.',
        highlights: [
          'Excel\'den PostgreSQL\'e veri göçü ve dönüşümü',
          'Yapılandırılmış ve verimli envanter yönetim modeli',
          'Bilgi çıkarımı için optimize edilmiş SQL sorguları'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'Apache POI', 'UML', 'Git']
      },
      {
        title: 'Coğrafi Referanslı Personel Yönetim Sistemi',
        subtitle: 'CUJAE - Masaüstü',
        period: 'Oca 2022 - Tem 2022',
        description: 'Coğrafi işleme ile Excel verilerini ilişkisel veritabanında merkezileştirmek için masaüstü sistemi.',
        highlights: [
          'Excel\'den PostgreSQL\'e aktarma ve depolama',
          'Çift yönlü bağlantı matrisi oluşturma',
          'GIS entegrasyonu ile otomasyon'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'Apache POI', 'GIS', 'UML', 'Git']
      },
      {
        title: 'Şoför ve Otobüs Kontrol Sistemi',
        subtitle: 'CUJAE - Masaüstü',
        period: 'Oca 2021 - Kas 2021',
        description: 'Bir turizm taşımacılık şirketinde şoför ve otobüs yönetimi için masaüstü sistemi.',
        highlights: [
          'Nesne yönelimli Java iş mantığı',
          'Java Swing ile grafik arayüz',
          'Tam veri yönetimi ve teknik dokümantasyon'
        ],
        stack: ['Java', 'PostgreSQL', 'Java Swing', 'OOP', 'Eclipse IDE']
      }
    ]
  },

  education: {
    eyebrow: 'Eğitim',
    title: 'Eğitim',
    degree: {
      title: 'Bilgisayar Mühendisliği',
      institution: 'Technological University of Havana "José Antonio Echeverría" (CUJAE)',
      period: 'Eyl 2018 - Günümüz',
      detail: 'Beklenen mezuniyet: 2026 (Tez savunması beklemede - Tüm krediler tamamlandı)',
      focus: 'Yazılım mühendisliği, ileri algoritmalar ve dağıtık sistem mimarisi alanında kapsamlı eğitim.'
    },
    complementary: {
      title: 'Tamamlayıcı Eğitim',
      courses: [
        { name: 'KetherLabs Scholarship - Datacamp', period: 'Oca 2026 - Günümüz', detail: 'Büyük veri işleme, istatistiksel modelleme ve tahmine dayalı analitik.' },
        { name: 'Java Backend Specialist - Oracle ONE', period: 'Oca 2024 - Tem 2024', detail: 'Java Ecosystem, Spring Framework, Spring Boot, Spring Data JPA/Hibernate, Spring Security, MySQL, SOLID, Clean Code, Design Patterns.' },
        { name: 'LinkedIn Learning', period: '', detail: 'Java (Beginner to Advanced), Functional programming with Scala, Spring Framework, Spring Data JPA, JDBC, REST APIs, HTML5, CSS3, JavaScript, Git/GitHub, Scrum.' }
      ]
    },
    languages: {
      title: 'Diller',
      items: [
        { name: 'İspanyolca', level: 'Ana dil' },
        { name: 'İngilizce', level: 'Orta (A2-B1) | Teknik okuma: İleri' }
      ]
    }
  },

  contact: {
    eyebrow: 'Bağlanalım',
    title: 'İletişim',
    subtitle: 'İş fırsatları ve işbirlikleri için açığım.',
    email: 'raynersoto01@gmail.com',
    phone: '+1 (863) 766-8212',
    whatsapp: '+1 (863) 397-6979',
    location: 'Havana, Küba',
    linkedin: 'linkedin.com/in/rayner-alejandro',
    github: 'github.com/RaynerSoto'
  },

  footer: {
    copyright: '© 2026 Rayner Alejandro Soto Martínez. Tüm hakları saklıdır.',
    built: 'kullanılarak oluşturuldu'
  }
};
