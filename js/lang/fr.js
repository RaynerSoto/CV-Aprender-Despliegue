window.translations = window.translations || {};
window.translations.fr = {
  nav: { home: 'Accueil', profile: 'Profil', skills: 'Compétences', experience: 'Expérience', projects: 'Projets', education: 'Formation', contact: 'Contact' },
  hero: {
    greeting: 'Bonjour, je suis',
    name: 'Rayner Alejandro Soto Martínez',
    title: 'Développeur Java Backend',
    location: 'La Havane, Cuba | Disponible pour télétravail',
    download: 'Télécharger le CV',
    contact: 'Me contacter'
  },
  profile: {
    eyebrow: 'À propos de moi',
    title: 'Profil Professionnel',
    text: 'Ingénieur informatique et développeur Backend, spécialisé dans le développement Java Backend avec plus de 3 ans d\'expérience dans la création d\'applications d\'entreprise évolutives. Expert dans l\'écosystème Spring Framework (Spring Boot, Spring Cloud, Spring Security, Spring Data JPA) pour la construction de microservices robustes et d\'API RESTful. Expérience éprouvée dans la transformation de systèmes monolithiques en architectures distribuées en utilisant les principes d\'Architecture Hexagonale et de Domain-Driven Design (DDD). Compétent dans la conception et l\'optimisation de bases de données relationnelles (PostgreSQL, MySQL) avec de solides capacités en intégration de données géospatiales (PostGIS) et en automatisation de processus ETL. Engagé à fournir des solutions de qualité grâce aux pratiques DevOps (Docker, Flyway, GitHub Actions), aux tests rigoureux (JUnit, Mockito) et à l\'analyse de code (SonarQube). Excellente expérience de travail avec les méthodologies Agile (Scrum) et de contribution aux équipes de développement distribuées.'
  },
  skills: {
    eyebrow: 'Mon expertise',
    title: 'Compétences Techniques',
    categories: [
      { name: 'Langages de Programmation', items: ['Java (JDK 8, 11, 14, 17, 21, 22, 25, GraalVM)', 'Scala', 'Python', 'C', 'JavaScript'] },
      { name: 'Frameworks & Écosystème Spring', items: ['Spring Boot', 'Spring AOP', 'Spring Cloud', 'Spring Security (JWT)', 'Spring Data JPA', 'Spring Data JDBC', 'Spring Batch', 'Spring MVC', 'Hibernate', 'JPA'] },
      { name: 'Bases de Données', items: ['PostgreSQL', 'PostGIS', 'MySQL', 'SQL Server', 'SQLite', 'H2', 'Oracle DB', 'JDBC', 'Flyway'] },
      { name: 'Architecture Logicielle', items: ['Microservices', 'Hexagonal Architecture', 'Domain-Driven Design', 'MVC', 'UML 2.0'] },
      { name: 'DevOps & Outils', items: ['Docker', 'Maven', 'Gradle', 'Git', 'GitHub Actions', 'Apache Tomcat', 'CI/CD'] },
      { name: 'Tests & Qualité', items: ['JUnit', 'Mockito', 'SonarQube', 'Code Review', 'Clean Code', 'SOLID', 'Design Patterns'] },
      { name: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'Thymeleaf', 'PrimeFaces', 'Jakarta EE', 'React'] },
      { name: 'Traitement de Données', items: ['Apache POI', 'ETL', 'GIS'] }
    ]
  },
  experience: {
    eyebrow: 'Parcours',
    title: 'Expérience Professionnelle',
    jobs: [
      {
        title: 'Analyste et Développeur Java Full-Stack',
        company: 'Gecytes',
        period: 'Nov 2024 - Présent',
        location: 'Distant, Mexique',
        details: [
          'Conception de services backend selon les architectures Microservices et Hexagonale.',
          'Implémentation d\'API RESTful avec Spring Boot et Spring Cloud.',
          'Gestion PostgreSQL (PostGIS) avec données géospatiales.',
          'Assurance qualité avec JUnit, SonarQube et Docker.',
          'Collaboration Agile avec Git/GitHub.'
        ],
        stack: ['Java 17/21/25', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Hibernate', 'React', 'PostgreSQL (PostGIS)', 'Docker', 'Maven']
      },
      {
        title: 'Développeur Java Backend',
        company: 'Gestini',
        period: 'Mai 2025 - Juin 2025',
        location: 'Distant, Argentine',
        details: [
          'Conception et implémentation de fonctionnalités backend évolutives.',
          'Implémentation de tests unitaires pour garantir la robustesse et la stabilité.'
        ],
        stack: ['Java 17/21', 'Spring Boot', 'Spring Data', 'Spring Security', 'Hibernate', 'MySQL', 'Docker', 'Maven']
      },
      {
        title: 'Développeur Scala Backend',
        company: 'Arkon Data',
        period: 'Mar 2025 - Mai 2025',
        location: 'Distant, Mexique',
        details: [
          'Exploration approfondie de Scala et de la programmation fonctionnelle pour le développement backend.',
          'Analyse d\'architectures évolutives et de microservices.',
          'Participation aux revues de code et optimisation des services.'
        ],
        stack: ['Scala', 'Functional Programming', 'Microservices', 'Git', 'GitHub']
      },
      {
        title: 'Analyste et Développeur Java Back-End',
        company: 'CUJAE',
        period: 'Jan 2024 - Nov 2024',
        location: 'La Havane, Cuba',
        details: [
          'Leadership technique dans la migration multiplateforme du bureau vers le web.',
          'Création d\'API RESTful et automatisation ETL avec Apache POI.',
          'Optimisation des données géospatiales avec PostGIS.'
        ],
        stack: ['Java 17', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'PostgreSQL (PostGIS)', 'Apache POI', 'Maven']
      },
      {
        title: 'Développeur Java et Bases de Données',
        company: 'CUJAE',
        period: 'Sep 2022 - Jui 2023',
        location: 'La Havane, Cuba',
        details: [
          'Développement d\'outils d\'automatisation Java pour la migration de données.',
          'Refonte et optimisation de bases de données relationnelles.',
          'Implémentation de déclencheurs et de fonctions pour l\'intégrité référentielle.'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'SQL', 'Git', 'GitHub']
      },
      {
        title: 'Analyste et Développeur Logiciel Java',
        company: 'CUJAE',
        period: 'Jan 2022 - Sep 2022',
        location: 'La Havane, Cuba',
        details: [
          'Création de solutions de gestion d\'informations géospatiales.',
          'Automatisation de la conversion Excel vers base de données relationnelle.',
          'Développement d\'interfaces Java Swing pour l\'analyse de données.'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'Apache POI', 'GIS', 'Git']
      }
    ]
  },
  projects: {
    eyebrow: 'Projets phares',
    title: 'Projets Marquants',
    list: [
      {
        title: 'Système de Surveillance et d\'Analyse de Données de Capteurs Intelligents',
        subtitle: 'Thèse de Licence - CUJAE',
        period: '2024 - 2025',
        description: 'Système backend pour la surveillance, la gestion et l\'analyse de données provenant de capteurs intelligents connectés au corps. Intègre microservices, intelligence artificielle et IoT pour le diagnostic de pathologies par l\'analyse de la démarche.',
        highlights: [
          'Architecture microservices avec Spring Boot et Spring Cloud (Gateway, Eureka)',
          'Réseaux de neurones avec Neuroph pour la classification de la démarche',
          'IoT avec capteurs ESP32 et Bluetooth',
          'Application Android native avec synchronisation SQLite et PostgreSQL',
          'Sécurité avec Spring Security (JWT)'
        ],
        stack: ['Java 17', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'PostgreSQL', 'SQLite', 'Android', 'Neuroph', 'IoT', 'Maven']
      },
      {
        title: 'Système Géographique pour la Gestion Apicole',
        subtitle: 'Gecytes',
        period: 'Nov 2024 - Présent',
        description: 'Système géographique pour la gestion apicole au Mexique avec représentation géospatiale des ruches, ruchers et parcours.',
        highlights: [
          'API RESTful robuste avec intégration de données géospatiales',
          'Optimisation des performances et authentification/autorisation',
          'PostgreSQL avec extension GIS',
          'Versionnement de base de données avec Flyway et déploiement Docker',
          'Documentation complète de l\'architecture'
        ],
        stack: ['Java 17/21/25', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'PostgreSQL (PostGIS)', 'Flyway', 'Docker', 'Maven', 'JUnit', 'SonarQube']
      },
      {
        title: 'Système Backend de Gestion du Personnel avec Géo-référencement',
        subtitle: 'CUJAE - Web',
        period: 'Jan 2024 - Nov 2024',
        description: 'Système web pour la gestion des opérations d\'une entreprise de transport touristique avec intégration géospatiale.',
        highlights: [
          'Backend avec Spring Framework et Spring Data JDBC',
          'Interface web avec JSF et PrimeFaces',
          'Modules de gestion des chauffeurs, bus et demandes',
          'Diagrammes d\'architecture et documentation technique'
        ],
        stack: ['Java', 'Spring Boot', 'Spring Data JDBC', 'JSF', 'PrimeFaces', 'PostgreSQL', 'Maven', 'Swagger', 'UML']
      },
      {
        title: 'Système de Gestion des Chauffeurs et Bus',
        subtitle: 'CUJAE - Transport Touristique',
        period: 'Sep 2023 - Fév 2024',
        description: 'Système de gestion pour une entreprise de transport touristique intégrant backend et frontend web.',
        highlights: [
          'Backend avec Spring Framework, Spring Data JDBC et Spring MVC',
          'Interface web avec JSF et PrimeFaces',
          'Validations d\'intégrité des données et gestion'
        ],
        stack: ['Java', 'Spring Boot', 'Spring Data JDBC', 'Spring MVC', 'Spring Security', 'JSF', 'PrimeFaces', 'PostgreSQL', 'Maven']
      },
      {
        title: 'Base de Données d\'Inventaire Informatique',
        subtitle: 'CUJAE - Faculté de Génie Informatique',
        period: 'Sep 2022 - Jui 2023',
        description: 'Migration d\'un système d\'inventaire basé sur Excel vers une base de données relationnelle PostgreSQL.',
        highlights: [
          'Migration et transformation de données d\'Excel vers PostgreSQL',
          'Modèle de gestion d\'inventaire structuré et efficace',
          'Requêtes SQL optimisées pour l\'extraction d\'informations'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'Apache POI', 'UML', 'Git']
      },
      {
        title: 'Système de Gestion du Personnel avec Géo-référencement',
        subtitle: 'CUJAE - Desktop',
        period: 'Jan 2022 - Jui 2022',
        description: 'Système desktop pour centraliser les données Excel dans une base de données relationnelle avec traitement géospatial.',
        highlights: [
          'Import et stockage d\'Excel vers PostgreSQL',
          'Génération de matrice de connexion bidimensionnelle',
          'Automatisation avec intégration GIS'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'Apache POI', 'GIS', 'UML', 'Git']
      },
      {
        title: 'Système de Contrôle des Chauffeurs et Bus',
        subtitle: 'CUJAE - Desktop',
        period: 'Jan 2021 - Nov 2021',
        description: 'Système desktop pour la gestion des chauffeurs et bus dans une entreprise de transport touristique.',
        highlights: [
          'Logique métier orientée objet en Java',
          'Interface graphique avec Java Swing',
          'Gestion complète des données et documentation technique'
        ],
        stack: ['Java', 'PostgreSQL', 'Java Swing', 'OOP', 'Eclipse IDE']
      }
    ]
  },
  education: {
    eyebrow: 'Formation',
    title: 'Formation',
    degree: {
      title: 'Diplôme d\'Ingénieur en Informatique',
      institution: 'Université Technologique de La Havane "José Antonio Echeverría" (CUJAE)',
      period: 'Sep 2018 - Présent',
      detail: 'Diplôme prévu : 2026 (Soutenance de thèse en attente - Tous les crédits obtenus)',
      focus: 'Formation complète en génie logiciel, algorithmes avancés et architecture de systèmes distribués.'
    },
    complementary: {
      title: 'Formation Complémentaire',
      courses: [
        { name: 'Bourse KetherLabs - Datacamp', period: 'Jan 2026 - Présent', detail: 'Traitement massif de données, modélisation statistique et analytique prédictive.' },
        { name: 'Spécialiste Java Backend - Oracle ONE', period: 'Jan 2024 - Jui 2024', detail: 'Écosystème Java, Spring Framework, Spring Boot, Spring Data JPA/Hibernate, Spring Security, MySQL, SOLID, Clean Code, Design Patterns.' },
        { name: 'LinkedIn Learning', period: '', detail: 'Java (Débutant à Avancé), Programmation fonctionnelle avec Scala, Spring Framework, Spring Data JPA, JDBC, API REST, HTML5, CSS3, JavaScript, Git/GitHub, Scrum.' }
      ]
    },
    languages: {
      title: 'Langues',
      items: [
        { name: 'Espagnol', level: 'Langue maternelle' },
        { name: 'Anglais', level: 'Intermédiaire (A2-B1) | Lecture technique : Avancé' }
      ]
    }
  },
  contact: {
    eyebrow: 'Contactez-moi',
    title: 'Contact',
    subtitle: 'Je suis ouvert aux opportunités professionnelles et aux collaborations.',
    email: 'raynersoto01@gmail.com',
    phone: '+1 (863) 766-8212',
    whatsapp: '+1 (863) 397-6979',
    location: 'La Havane, Cuba',
    linkedin: 'linkedin.com/in/rayner-alejandro',
    github: 'github.com/RaynerSoto'
  },
  footer: {
    copyright: '© 2026 Rayner Alejandro Soto Martínez. Tous droits réservés.',
    built: 'Construit avec'
  }
};
