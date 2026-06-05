window.translations = window.translations || {};
window.translations.pl = {
  nav: {
    home: 'Strona główna',
    profile: 'Profil',
    skills: 'Umiejętności',
    experience: 'Doświadczenie',
    projects: 'Projekty',
    education: 'Edukacja',
    contact: 'Kontakt'
  },

  hero: {
    greeting: 'Cześć, jestem',
    name: 'Rayner Alejandro Soto Martínez',
    title: 'Programista Java Backend',
    location: 'Hawana, Kuba | Dostępny do pracy zdalnej',
    download: 'Pobierz CV',
    contact: 'Skontaktuj się'
  },

  profile: {
    eyebrow: 'O mnie',
    title: 'Profil zawodowy',
    text: 'Inżynier komputerowy i programista backend, specjalizujący się w tworzeniu oprogramowania w języku Java Backend z ponad 3-letnim doświadczeniem w budowaniu skalowalnych aplikacji korporacyjnych. Ekspert w ekosystemie Spring Framework (Spring Boot, Spring Cloud, Spring Security, Spring Data JPA) do tworzenia niezawodnych mikrousług i interfejsów RESTful API. Posiadam sprawdzone doświadczenie w przekształcaniu systemów monolitycznych w architektury rozproszone z wykorzystaniem Architektury Heksagonalnej i zasad Domain-Driven Design (DDD). Biegły w projektowaniu i optymalizacji relacyjnych baz danych (PostgreSQL, MySQL) z silnymi kompetencjami w integracji danych geoprzestrzennych (PostGIS) i automatyzacji procesów ETL. Zaangażowany w dostarczanie wysokiej jakości rozwiązań poprzez praktyki DevOps (Docker, Flyway, GitHub Actions), rygorystyczne testowanie (JUnit, Mockito) i analizę kodu (SonarQube). Udokumentowane doświadczenie w pracy z metodykami Agile (Scrum) i współpracy w rozproszonych zespołach programistycznych.'
  },

  skills: {
    eyebrow: 'Moja ekspertyza',
    title: 'Umiejętności techniczne',
    categories: [
      { name: 'Języki programowania', items: ['Java (JDK 8, 11, 14, 17, 21, 22, 25, GraalVM)', 'Scala', 'Python', 'C', 'JavaScript'] },
      { name: 'Frameworki i ekosystem Spring', items: ['Spring Boot', 'Spring AOP', 'Spring Cloud', 'Spring Security (JWT)', 'Spring Data JPA', 'Spring Data JDBC', 'Spring Batch', 'Spring MVC', 'Hibernate', 'JPA'] },
      { name: 'Bazy danych', items: ['PostgreSQL', 'PostGIS', 'MySQL', 'SQL Server', 'SQLite', 'H2', 'Oracle DB', 'JDBC', 'Flyway'] },
      { name: 'Architektura oprogramowania', items: ['Microservices', 'Hexagonal Architecture', 'Domain-Driven Design', 'MVC', 'UML 2.0'] },
      { name: 'DevOps i narzędzia', items: ['Docker', 'Maven', 'Gradle', 'Git', 'GitHub Actions', 'Apache Tomcat', 'CI/CD'] },
      { name: 'Testowanie i jakość', items: ['JUnit', 'Mockito', 'SonarQube', 'Code Review', 'Clean Code', 'SOLID', 'Design Patterns'] },
      { name: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'Thymeleaf', 'PrimeFaces', 'Jakarta EE', 'React'] },
      { name: 'Przetwarzanie danych', items: ['Apache POI', 'ETL', 'GIS'] }
    ]
  },

  experience: {
    eyebrow: 'Kariera',
    title: 'Doświadczenie zawodowe',
    jobs: [
      {
        title: 'Analityk i programista Java Full-Stack',
        company: 'Gecytes',
        period: 'Lis 2024 - Obecnie',
        location: 'Zdalnie, Meksyk',
        details: [
          'Projektowanie usług backend w architekturze mikrousług i heksagonalnej.',
          'Implementacja RESTful API z użyciem Spring Boot i Spring Cloud.',
          'Zarządzanie PostgreSQL (PostGIS) z danymi geoprzestrzennymi.',
          'Zapewnianie jakości z JUnit, SonarQube i Docker.',
          'Współpraca Agile z Git/GitHub.'
        ],
        stack: ['Java 17/21/25', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Hibernate', 'React', 'PostgreSQL (PostGIS)', 'Docker', 'Maven']
      },
      {
        title: 'Programista Java Backend',
        company: 'Gestini',
        period: 'Maj 2025 - Cze 2025',
        location: 'Zdalnie, Argentyna',
        details: [
          'Projektowanie i implementacja skalowalnych funkcji backend.',
          'Implementacja testów jednostkowych w celu zapewnienia niezawodności i stabilności.'
        ],
        stack: ['Java 17/21', 'Spring Boot', 'Spring Data', 'Spring Security', 'Hibernate', 'MySQL', 'Docker', 'Maven']
      },
      {
        title: 'Programista Scala Backend',
        company: 'Arkon Data',
        period: 'Mar 2025 - Maj 2025',
        location: 'Zdalnie, Meksyk',
        details: [
          'Dogłębne poznanie Scali i programowania funkcyjnego w rozwoju backend.',
          'Analiza skalowalnych architektur i mikrousług.',
          'Udział w Code Review i optymalizacja serwisów.'
        ],
        stack: ['Scala', 'Functional Programming', 'Microservices', 'Git', 'GitHub']
      },
      {
        title: 'Analityk i programista Java Back-End',
        company: 'CUJAE',
        period: 'Sty 2024 - Lis 2024',
        location: 'Hawana, Kuba',
        details: [
          'Przywództwo techniczne w migracji z aplikacji desktopowej na wieloplatformowe rozwiązanie webowe.',
          'Tworzenie RESTful API i automatyzacja ETL z Apache POI.',
          'Optymalizacja danych geoprzestrzennych z PostGIS.'
        ],
        stack: ['Java 17', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'PostgreSQL (PostGIS)', 'Apache POI', 'Maven']
      },
      {
        title: 'Programista Java i specjalista baz danych',
        company: 'CUJAE',
        period: 'Wrz 2022 - Lip 2023',
        location: 'Hawana, Kuba',
        details: [
          'Tworzenie narzędzi automatyzacji w Javie do migracji danych.',
          'Przeprojektowanie i optymalizacja relacyjnych baz danych.',
          'Implementacja triggerów i funkcji dla integralności referencyjnej.'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'SQL', 'Git', 'GitHub']
      },
      {
        title: 'Analityk i programista oprogramowania Java',
        company: 'CUJAE',
        period: 'Sty 2022 - Wrz 2022',
        location: 'Hawana, Kuba',
        details: [
          'Tworzenie rozwiązania do zarządzania informacją geoprzestrzenną.',
          'Automatyzacja konwersji Excel do relacyjnej bazy danych.',
          'Tworzenie interfejsu Java Swing do analizy danych.'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'Apache POI', 'GIS', 'Git']
      }
    ]
  },

  projects: {
    eyebrow: 'Wyróżnione prace',
    title: 'Wyróżnione projekty',
    list: [
      {
        title: 'System monitorowania i analizy danych z inteligentnych czujników',
        subtitle: 'Praca dyplomowa - CUJAE',
        period: '2024 - 2025',
        description: 'System backend do monitorowania, zarządzania i analizy danych z inteligentnych czujników noszonych na ciele. Integruje mikrousługi, sztuczną inteligencję i Internet Rzeczy do diagnozowania patologii poprzez analizę wzorców chodu.',
        highlights: [
          'Architektura mikrousług z Spring Boot i Spring Cloud (Gateway, Eureka)',
          'Sieci neuronowe z Neuroph do klasyfikacji wzorców chodu',
          'IoT z czujnikami ESP32 i Bluetooth',
          'Natywna aplikacja Android z synchronizacją SQLite i PostgreSQL',
          'Bezpieczeństwo z Spring Security (JWT)'
        ],
        stack: ['Java 17', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'PostgreSQL', 'SQLite', 'Android', 'Neuroph', 'IoT', 'Maven']
      },
      {
        title: 'System geograficzny do zarządzania pszczelarstwem',
        subtitle: 'Gecytes',
        period: 'Lis 2024 - Obecnie',
        description: 'System geograficzny do zarządzania pszczelarstwem w Meksyku z geoprzestrzenną reprezentacją uli, pasiek i tras.',
        highlights: [
          'Niezawodne RESTful API z integracją danych geoprzestrzennych',
          'Optymalizacja wydajności oraz uwierzytelnianie/autoryzacja',
          'PostgreSQL z rozszerzeniem GIS',
          'Wersjonowanie bazy danych z Flyway i wdrożenie przez Docker',
          'Kompleksowa dokumentacja architektury'
        ],
        stack: ['Java 17/21/25', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'PostgreSQL (PostGIS)', 'Flyway', 'Docker', 'Maven', 'JUnit', 'SonarQube']
      },
      {
        title: 'Backend system zarządzania personelem z georeferencjami',
        subtitle: 'CUJAE - Web',
        period: 'Sty 2024 - Lis 2024',
        description: 'System webowy do zarządzania operacjami firmy transportu turystycznego z integracją geoprzestrzenną.',
        highlights: [
          'Backend z Spring Framework i Spring Data JDBC',
          'Interfejs webowy z JSF i PrimeFaces',
          'Moduły zarządzania kierowcami, autobusami i zgłoszeniami',
          'Diagramy architektury i dokumentacja techniczna'
        ],
        stack: ['Java', 'Spring Boot', 'Spring Data JDBC', 'JSF', 'PrimeFaces', 'PostgreSQL', 'Maven', 'Swagger', 'UML']
      },
      {
        title: 'System kontroli kierowców i autobusów',
        subtitle: 'CUJAE - Transport turystyczny',
        period: 'Wrz 2023 - Lut 2024',
        description: 'System zarządzania dla firmy transportu turystycznego integrujący backend i frontend webowy.',
        highlights: [
          'Backend z Spring Framework, Spring Data JDBC i Spring MVC',
          'Interfejs webowy z JSF i PrimeFaces',
          'Walidacje integralności danych i zarządzanie'
        ],
        stack: ['Java', 'Spring Boot', 'Spring Data JDBC', 'Spring MVC', 'Spring Security', 'JSF', 'PrimeFaces', 'PostgreSQL', 'Maven']
      },
      {
        title: 'Baza danych inwentaryzacji komputerów',
        subtitle: 'CUJAE - Wydział Inżynierii Komputerowej',
        period: 'Wrz 2022 - Lip 2023',
        description: 'Migracja systemu inwentaryzacji opartego na Excelu do relacyjnej bazy danych PostgreSQL.',
        highlights: [
          'Migracja i transformacja danych z Excel do PostgreSQL',
          'Strukturalny i wydajny model zarządzania inwentaryzacją',
          'Zoptymalizowane zapytania SQL do ekstrakcji informacji'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'Apache POI', 'UML', 'Git']
      },
      {
        title: 'System zarządzania personelem z georeferencjami',
        subtitle: 'CUJAE - Desktop',
        period: 'Sty 2022 - Lip 2022',
        description: 'System desktopowy do centralizacji danych Excel w relacyjnej bazie danych z przetwarzaniem geoprzestrzennym.',
        highlights: [
          'Import i przechowywanie z Excel do PostgreSQL',
          'Generowanie macierzy połączeń dwukierunkowych',
          'Automatyzacja z integracją GIS'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'Apache POI', 'GIS', 'UML', 'Git']
      },
      {
        title: 'System kontroli kierowców i autobusów',
        subtitle: 'CUJAE - Desktop',
        period: 'Sty 2021 - Lis 2021',
        description: 'System desktopowy do zarządzania kierowcami i autobusami w firmie transportu turystycznego.',
        highlights: [
          'Obiektowa logika biznesowa w Javie',
          'Interfejs graficzny w Java Swing',
          'Pełne zarządzanie danymi i dokumentacja techniczna'
        ],
        stack: ['Java', 'PostgreSQL', 'Java Swing', 'OOP', 'Eclipse IDE']
      }
    ]
  },

  education: {
    eyebrow: 'Edukacja',
    title: 'Edukacja',
    degree: {
      title: 'Inżynieria komputerowa',
      institution: 'Technological University of Havana "José Antonio Echeverría" (CUJAE)',
      period: 'Wrz 2018 - Obecnie',
      detail: 'Przewidywana data ukończenia: 2026 (Obrona pracy dyplomowej w toku - Wszystkie punkty zaliczone)',
      focus: 'Kompleksowe kształcenie w inżynierii oprogramowania, zaawansowanych algorytmach i architekturze systemów rozproszonych.'
    },
    complementary: {
      title: 'Edukacja uzupełniająca',
      courses: [
        { name: 'KetherLabs Scholarship - Datacamp', period: 'Sty 2026 - Obecnie', detail: 'Przetwarzanie dużych zbiorów danych, modelowanie statystyczne i analityka predykcyjna.' },
        { name: 'Java Backend Specialist - Oracle ONE', period: 'Sty 2024 - Lip 2024', detail: 'Java Ecosystem, Spring Framework, Spring Boot, Spring Data JPA/Hibernate, Spring Security, MySQL, SOLID, Clean Code, Design Patterns.' },
        { name: 'LinkedIn Learning', period: '', detail: 'Java (Beginner to Advanced), Functional programming with Scala, Spring Framework, Spring Data JPA, JDBC, REST APIs, HTML5, CSS3, JavaScript, Git/GitHub, Scrum.' }
      ]
    },
    languages: {
      title: 'Języki',
      items: [
        { name: 'Hiszpański', level: 'Ojczysty' },
        { name: 'Angielski', level: 'Średniozaawansowany (A2-B1) | Czytanie techniczne: Zaawansowany' }
      ]
    }
  },

  contact: {
    eyebrow: 'Nawiążmy kontakt',
    title: 'Kontakt',
    subtitle: 'Jestem otwarty na oferty pracy i współpracę.',
    email: 'raynersoto01@gmail.com',
    phone: '+1 (863) 766-8212',
    whatsapp: '+1 (863) 397-6979',
    location: 'Hawana, Kuba',
    linkedin: 'linkedin.com/in/rayner-alejandro',
    github: 'github.com/RaynerSoto'
  },

  footer: {
    copyright: '© 2026 Rayner Alejandro Soto Martínez. Wszelkie prawa zastrzeżone.',
    built: 'Zbudowano z'
  }
};
