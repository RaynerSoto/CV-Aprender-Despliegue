window.translations = window.translations || {};
window.translations.en = {
  nav: { home: 'Home', profile: 'Profile', skills: 'Skills', experience: 'Experience', projects: 'Projects', education: 'Education', contact: 'Contact' },
  hero: {
    greeting: 'Hi, I\u2019m',
    name: 'Rayner Alejandro Soto Martínez',
    title: 'Java Backend Developer',
    location: 'Havana, Cuba | Available for remote work',
    download: 'Download CV',
    contact: 'Get in touch'
  },
  profile: {
    eyebrow: 'About me',
    title: 'Professional Profile',
    text: 'Computer Engineer and Backend Developer, specialized in Java Backend Development with over 3 years of experience building scalable enterprise applications. Expert in the Spring Framework ecosystem (Spring Boot, Spring Cloud, Spring Security, Spring Data JPA) for building robust microservices and RESTful APIs. Proven experience transforming monolithic systems into distributed architectures using Hexagonal Architecture patterns and Domain-Driven Design (DDD) principles. Skilled in relational database design and optimization (PostgreSQL, MySQL) with strong capabilities in geospatial data integration (PostGIS) and ETL process automation. Committed to delivering quality solutions through DevOps practices (Docker, Flyway, GitHub Actions), rigorous testing (JUnit, Mockito), and code analysis (SonarQube). Proven track record working with Agile methodologies (Scrum) and contributing to distributed development teams.'
  },
  skills: {
    eyebrow: 'My expertise',
    title: 'Technical Skills',
    categories: [
      { name: 'Programming Languages', items: ['Java (JDK 8, 11, 14, 17, 21, 22, 25, GraalVM)', 'Scala', 'Python', 'C', 'JavaScript'] },
      { name: 'Frameworks & Spring Ecosystem', items: ['Spring Boot', 'Spring AOP', 'Spring Cloud', 'Spring Security (JWT)', 'Spring Data JPA', 'Spring Data JDBC', 'Spring Batch', 'Spring MVC', 'Hibernate', 'JPA'] },
      { name: 'Databases', items: ['PostgreSQL', 'PostGIS', 'MySQL', 'SQL Server', 'SQLite', 'H2', 'Oracle DB', 'JDBC', 'Flyway'] },
      { name: 'Software Architecture', items: ['Microservices', 'Hexagonal Architecture', 'Domain-Driven Design', 'MVC', 'UML 2.0'] },
      { name: 'DevOps & Tools', items: ['Docker', 'Maven', 'Gradle', 'Git', 'GitHub Actions', 'Apache Tomcat', 'CI/CD'] },
      { name: 'Testing & Quality', items: ['JUnit', 'Mockito', 'SonarQube', 'Code Review', 'Clean Code', 'SOLID', 'Design Patterns'] },
      { name: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'Thymeleaf', 'PrimeFaces', 'Jakarta EE', 'React'] },
      { name: 'Data Processing', items: ['Apache POI', 'ETL', 'GIS'] }
    ]
  },
  experience: {
    eyebrow: 'Career',
    title: 'Professional Experience',
    jobs: [
      {
        title: 'Java Full-Stack Analyst & Developer',
        company: 'Gecytes',
        period: 'Nov 2024 - Present',
        location: 'Remote, Mexico',
        details: [
          'Backend service design under Microservices and Hexagonal Architecture.',
          'RESTful API implementation with Spring Boot and Spring Cloud.',
          'PostgreSQL (PostGIS) management with geospatial data.',
          'Quality assurance with JUnit, SonarQube and Docker.',
          'Agile collaboration with Git/GitHub.'
        ],
        stack: ['Java 17/21/25', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Hibernate', 'React', 'PostgreSQL (PostGIS)', 'Docker', 'Maven']
      },
      {
        title: 'Java Backend Developer',
        company: 'Gestini',
        period: 'May 2025 - Jun 2025',
        location: 'Remote, Argentina',
        details: [
          'Scalable backend feature design and implementation.',
          'Unit testing implementation to ensure robustness and stability.'
        ],
        stack: ['Java 17/21', 'Spring Boot', 'Spring Data', 'Spring Security', 'Hibernate', 'MySQL', 'Docker', 'Maven']
      },
      {
        title: 'Scala Backend Developer',
        company: 'Arkon Data',
        period: 'Mar 2025 - May 2025',
        location: 'Remote, Mexico',
        details: [
          'Deep dive into Scala and functional programming for backend development.',
          'Analysis of scalable architectures and microservices.',
          'Code Review participation and service optimization.'
        ],
        stack: ['Scala', 'Functional Programming', 'Microservices', 'Git', 'GitHub']
      },
      {
        title: 'Java Back-End Analyst & Developer',
        company: 'CUJAE',
        period: 'Jan 2024 - Nov 2024',
        location: 'Havana, Cuba',
        details: [
          'Technical leadership in desktop-to-web multiplatform migration.',
          'RESTful API creation and ETL automation with Apache POI.',
          'Geospatial data optimization with PostGIS.'
        ],
        stack: ['Java 17', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'PostgreSQL (PostGIS)', 'Apache POI', 'Maven']
      },
      {
        title: 'Java Developer & Database Specialist',
        company: 'CUJAE',
        period: 'Sep 2022 - Jul 2023',
        location: 'Havana, Cuba',
        details: [
          'Java automation tool development for data migration.',
          'Relational database redesign and optimization.',
          'Trigger and function implementation for referential integrity.'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'SQL', 'Git', 'GitHub']
      },
      {
        title: 'Java Software Analyst & Developer',
        company: 'CUJAE',
        period: 'Jan 2022 - Sep 2022',
        location: 'Havana, Cuba',
        details: [
          'Geospatial information management solution creation.',
          'Excel-to-relational-database conversion automation.',
          'Java Swing interface development for data analysis.'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'Apache POI', 'GIS', 'Git']
      }
    ]
  },
  projects: {
    eyebrow: 'Featured work',
    title: 'Featured Projects',
    list: [
      {
        title: 'Smart Sensor Data Monitoring & Analysis System',
          subtitle: 'Bachelor\u2019s Thesis - CUJAE',
        period: '2024 - 2025',
        description: 'Backend system for monitoring, managing and analyzing data from body-connected smart sensors. Integrates microservices, artificial intelligence and IoT for pathology diagnosis through gait pattern analysis.',
        highlights: [
          'Microservices Architecture with Spring Boot and Spring Cloud (Gateway, Eureka)',
          'Neural Networks with Neuroph for gait pattern classification',
          'IoT with ESP32 sensors and Bluetooth',
          'Native Android app with SQLite and PostgreSQL sync',
          'Security with Spring Security (JWT)'
        ],
        stack: ['Java 17', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'PostgreSQL', 'SQLite', 'Android', 'Neuroph', 'IoT', 'Maven']
      },
      {
        title: 'Geographic System for Beekeeping Management',
        subtitle: 'Gecytes',
        period: 'Nov 2024 - Present',
        description: 'Geographic system for beekeeping management in Mexico with geospatial representation of hives, apiaries and routes.',
        highlights: [
          'Robust RESTful API with geospatial data integration',
          'Performance optimization and authentication/authorization',
          'PostgreSQL with GIS extension',
          'Database versioning with Flyway and Docker deployment',
          'Comprehensive architecture documentation'
        ],
        stack: ['Java 17/21/25', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'PostgreSQL (PostGIS)', 'Flyway', 'Docker', 'Maven', 'JUnit', 'SonarQube']
      },
      {
        title: 'Personnel Management Backend System with Georeferencing',
        subtitle: 'CUJAE - Web',
        period: 'Jan 2024 - Nov 2024',
          description: 'Web system for managing a tourism transport company\u2019s operations with geospatial integration.',
        highlights: [
          'Backend with Spring Framework and Spring Data JDBC',
          'Web interface with JSF and PrimeFaces',
          'Driver, bus and request management modules',
          'Architecture diagrams and technical documentation'
        ],
        stack: ['Java', 'Spring Boot', 'Spring Data JDBC', 'JSF', 'PrimeFaces', 'PostgreSQL', 'Maven', 'Swagger', 'UML']
      },
      {
        title: 'Driver and Bus Control System',
        subtitle: 'CUJAE - Tourism Transport',
        period: 'Sep 2023 - Feb 2024',
        description: 'Management system for a tourism transport company integrating backend and web frontend.',
        highlights: [
          'Backend with Spring Framework, Spring Data JDBC and Spring MVC',
          'Web interface with JSF and PrimeFaces',
          'Data integrity validations and management'
        ],
        stack: ['Java', 'Spring Boot', 'Spring Data JDBC', 'Spring MVC', 'Spring Security', 'JSF', 'PrimeFaces', 'PostgreSQL', 'Maven']
      },
      {
        title: 'Computer Inventory Database',
        subtitle: 'CUJAE - Faculty of Computer Engineering',
        period: 'Sep 2022 - Jul 2023',
        description: 'Migration of an Excel-based inventory system to a PostgreSQL relational database.',
        highlights: [
          'Data migration and transformation from Excel to PostgreSQL',
          'Structured and efficient inventory management model',
          'Optimized SQL queries for information extraction'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'Apache POI', 'UML', 'Git']
      },
      {
        title: 'Personnel Management System with Georeferencing',
        subtitle: 'CUJAE - Desktop',
        period: 'Jan 2022 - Jul 2022',
        description: 'Desktop system for centralizing Excel data into a relational database with geospatial processing.',
        highlights: [
          'Import and storage from Excel to PostgreSQL',
          'Bidimensional connection matrix generation',
          'Automation with GIS integration'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'Apache POI', 'GIS', 'UML', 'Git']
      },
      {
        title: 'Driver and Bus Control System',
        subtitle: 'CUJAE - Desktop',
        period: 'Jan 2021 - Nov 2021',
        description: 'Desktop system for driver and bus management in a tourism transport company.',
        highlights: [
          'Object-oriented Java business logic',
          'Graphical interface with Java Swing',
          'Complete data management and technical documentation'
        ],
        stack: ['Java', 'PostgreSQL', 'Java Swing', 'OOP', 'Eclipse IDE']
      }
    ]
  },
  education: {
    eyebrow: 'Education',
    title: 'Education',
    degree: {
      title: 'Computer Engineering',
      institution: 'Technological University of Havana "José Antonio Echeverría" (CUJAE)',
      period: 'Sep 2018 - Present',
      detail: 'Expected graduation: 2026 (Thesis defense pending - All credits completed)',
      focus: 'Comprehensive training in software engineering, advanced algorithms and distributed systems architecture.'
    },
    complementary: {
      title: 'Complementary Education',
      courses: [
        { name: 'KetherLabs Scholarship - Datacamp', period: 'Jan 2026 - Present', detail: 'Massive data processing, statistical modeling and predictive analytics.' },
        { name: 'Java Backend Specialist - Oracle ONE', period: 'Jan 2024 - Jul 2024', detail: 'Java Ecosystem, Spring Framework, Spring Boot, Spring Data JPA/Hibernate, Spring Security, MySQL, SOLID, Clean Code, Design Patterns.' },
        { name: 'LinkedIn Learning', period: '', detail: 'Java (Beginner to Advanced), Functional programming with Scala, Spring Framework, Spring Data JPA, JDBC, REST APIs, HTML5, CSS3, JavaScript, Git/GitHub, Scrum.' }
      ]
    },
    languages: {
      title: 'Languages',
      items: [
        { name: 'Spanish', level: 'Native' },
        { name: 'English', level: 'Intermediate (A2-B1) | Technical reading: Advanced' }
      ]
    }
  },
  contact: {
      eyebrow: 'Let\u2019s connect',
    title: 'Contact',
      subtitle: 'I\u2019m open to job opportunities and collaborations.',
    email: 'raynersoto01@gmail.com',
    phone: '+1 (863) 766-8212',
    whatsapp: '+1 (863) 397-6979',
    location: 'Havana, Cuba',
    linkedin: 'linkedin.com/in/rayner-alejandro',
    github: 'github.com/RaynerSoto'
  },
  footer: {
    copyright: '© 2026 Rayner Alejandro Soto Martínez. All rights reserved.',
    built: 'Built with'
  }
};
