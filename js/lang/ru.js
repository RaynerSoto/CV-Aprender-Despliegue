window.translations = window.translations || {};
window.translations.ru = {
  nav: {
    home: 'Главная',
    profile: 'Профиль',
    skills: 'Навыки',
    experience: 'Опыт',
    projects: 'Проекты',
    education: 'Образование',
    contact: 'Контакты'
  },

  hero: {
    greeting: 'Привет, я',
    name: 'Rayner Alejandro Soto Martínez',
    title: 'Java Backend разработчик',
    location: 'Гавана, Куба | Доступен для удаленной работы',
    download: 'Скачать резюме',
    contact: 'Связаться'
  },

  profile: {
    eyebrow: 'Обо мне',
    title: 'Профессиональный профиль',
    text: 'Компьютерный инженер и Backend разработчик, специализирующийся на Java Backend разработке с более чем 3-летним опытом создания масштабируемых корпоративных приложений. Эксперт в экосистеме Spring Framework (Spring Boot, Spring Cloud, Spring Security, Spring Data JPA) для построения надежных микросервисов и RESTful API. Имею подтвержденный опыт преобразования монолитных систем в распределенные архитектуры с использованием паттернов Гексагональной архитектуры и принципов Domain-Driven Design (DDD). Обладаю навыками проектирования и оптимизации реляционных баз данных (PostgreSQL, MySQL) с сильными компетенциями в интеграции геопространственных данных (PostGIS) и автоматизации ETL процессов. Стремлюсь к поставке качественных решений через практики DevOps (Docker, Flyway, GitHub Actions), тщательное тестирование (JUnit, Mockito) и анализ кода (SonarQube). Имею подтвержденный опыт работы с Agile методологиями (Scrum) и вклада в распределенные команды разработки.'
  },

  skills: {
    eyebrow: 'Моя экспертиза',
    title: 'Технические навыки',
    categories: [
      { name: 'Языки программирования', items: ['Java (JDK 8, 11, 14, 17, 21, 22, 25, GraalVM)', 'Scala', 'Python', 'C', 'JavaScript'] },
      { name: 'Фреймворки и экосистема Spring', items: ['Spring Boot', 'Spring AOP', 'Spring Cloud', 'Spring Security (JWT)', 'Spring Data JPA', 'Spring Data JDBC', 'Spring Batch', 'Spring MVC', 'Hibernate', 'JPA'] },
      { name: 'Базы данных', items: ['PostgreSQL', 'PostGIS', 'MySQL', 'SQL Server', 'SQLite', 'H2', 'Oracle DB', 'JDBC', 'Flyway'] },
      { name: 'Архитектура ПО', items: ['Microservices', 'Hexagonal Architecture', 'Domain-Driven Design', 'MVC', 'UML 2.0'] },
      { name: 'DevOps и инструменты', items: ['Docker', 'Maven', 'Gradle', 'Git', 'GitHub Actions', 'Apache Tomcat', 'CI/CD'] },
      { name: 'Тестирование и качество', items: ['JUnit', 'Mockito', 'SonarQube', 'Code Review', 'Clean Code', 'SOLID', 'Design Patterns'] },
      { name: 'Фронтенд', items: ['HTML5', 'CSS3', 'JavaScript', 'Thymeleaf', 'PrimeFaces', 'Jakarta EE', 'React'] },
      { name: 'Обработка данных', items: ['Apache POI', 'ETL', 'GIS'] }
    ]
  },

  experience: {
    eyebrow: 'Карьера',
    title: 'Профессиональный опыт',
    jobs: [
      {
        title: 'Java Full-Stack аналитик и разработчик',
        company: 'Gecytes',
        period: 'Ноя 2024 - Настоящее время',
        location: 'Удаленно, Мексика',
        details: [
          'Проектирование backend сервисов в рамках микросервисной и гексагональной архитектуры.',
          'Реализация RESTful API с использованием Spring Boot и Spring Cloud.',
          'Управление PostgreSQL (PostGIS) с геопространственными данными.',
          'Обеспечение качества с помощью JUnit, SonarQube и Docker.',
          'Agile сотрудничество с Git/GitHub.'
        ],
        stack: ['Java 17/21/25', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Hibernate', 'React', 'PostgreSQL (PostGIS)', 'Docker', 'Maven']
      },
      {
        title: 'Java Backend разработчик',
        company: 'Gestini',
        period: 'Май 2025 - Июн 2025',
        location: 'Удаленно, Аргентина',
        details: [
          'Проектирование и реализация масштабируемых backend функций.',
          'Реализация модульных тестов для обеспечения надежности и стабильности.'
        ],
        stack: ['Java 17/21', 'Spring Boot', 'Spring Data', 'Spring Security', 'Hibernate', 'MySQL', 'Docker', 'Maven']
      },
      {
        title: 'Scala Backend разработчик',
        company: 'Arkon Data',
        period: 'Мар 2025 - Май 2025',
        location: 'Удаленно, Мексика',
        details: [
          'Углубленное изучение Scala и функционального программирования для backend разработки.',
          'Анализ масштабируемых архитектур и микросервисов.',
          'Участие в Code Review и оптимизация сервисов.'
        ],
        stack: ['Scala', 'Functional Programming', 'Microservices', 'Git', 'GitHub']
      },
      {
        title: 'Java Back-End аналитик и разработчик',
        company: 'CUJAE',
        period: 'Янв 2024 - Ноя 2024',
        location: 'Гавана, Куба',
        details: [
          'Техническое руководство миграцией с десктопного приложения на мультиплатформенное веб-решение.',
          'Создание RESTful API и автоматизация ETL с помощью Apache POI.',
          'Оптимизация геопространственных данных с PostGIS.'
        ],
        stack: ['Java 17', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'PostgreSQL (PostGIS)', 'Apache POI', 'Maven']
      },
      {
        title: 'Java разработчик и специалист по БД',
        company: 'CUJAE',
        period: 'Сен 2022 - Июл 2023',
        location: 'Гавана, Куба',
        details: [
          'Разработка инструментов автоматизации на Java для миграции данных.',
          'Редизайн и оптимизация реляционных баз данных.',
          'Реализация триггеров и функций для обеспечения ссылочной целостности.'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'SQL', 'Git', 'GitHub']
      },
      {
        title: 'Java аналитик и разработчик ПО',
        company: 'CUJAE',
        period: 'Янв 2022 - Сен 2022',
        location: 'Гавана, Куба',
        details: [
          'Создание решения для управления геопространственной информацией.',
          'Автоматизация конвертации Excel в реляционную базу данных.',
          'Разработка интерфейса на Java Swing для анализа данных.'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'Apache POI', 'GIS', 'Git']
      }
    ]
  },

  projects: {
    eyebrow: 'Избранные работы',
    title: 'Избранные проекты',
    list: [
      {
        title: 'Система мониторинга и анализа данных с умных сенсоров',
        subtitle: 'Дипломная работа - CUJAE',
        period: '2024 - 2025',
        description: 'Backend система для мониторинга, управления и анализа данных с умных сенсоров, подключаемых к телу. Интегрирует микросервисы, искусственный интеллект и Интернет вещей для диагностики патологий через анализ паттернов походки.',
        highlights: [
          'Микросервисная архитектура с Spring Boot и Spring Cloud (Gateway, Eureka)',
          'Нейронные сети с Neuroph для классификации паттернов походки',
          'Интернет вещей с ESP32 сенсорами и Bluetooth',
          'Нативное Android приложение с синхронизацией SQLite и PostgreSQL',
          'Безопасность с Spring Security (JWT)'
        ],
        stack: ['Java 17', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'PostgreSQL', 'SQLite', 'Android', 'Neuroph', 'IoT', 'Maven']
      },
      {
        title: 'Географическая система управления пчеловодством',
        subtitle: 'Gecytes',
        period: 'Ноя 2024 - Настоящее время',
        description: 'Географическая система для управления пчеловодством в Мексике с геопространственным представлением ульев, пасек и маршрутов.',
        highlights: [
          'Надежный RESTful API с интеграцией геопространственных данных',
          'Оптимизация производительности и аутентификация/авторизация',
          'PostgreSQL с расширением GIS',
          'Версионирование базы данных с Flyway и развертывание через Docker',
          'Комплексная документация архитектуры'
        ],
        stack: ['Java 17/21/25', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'PostgreSQL (PostGIS)', 'Flyway', 'Docker', 'Maven', 'JUnit', 'SonarQube']
      },
      {
        title: 'Backend система управления персоналом с геопривязкой',
        subtitle: 'CUJAE - Веб',
        period: 'Янв 2024 - Ноя 2024',
        description: 'Веб-система для управления операциями туристической транспортной компании с геопространственной интеграцией.',
        highlights: [
          'Backend с Spring Framework и Spring Data JDBC',
          'Веб-интерфейс с JSF и PrimeFaces',
          'Модули управления водителями, автобусами и заявками',
          'Диаграммы архитектуры и техническая документация'
        ],
        stack: ['Java', 'Spring Boot', 'Spring Data JDBC', 'JSF', 'PrimeFaces', 'PostgreSQL', 'Maven', 'Swagger', 'UML']
      },
      {
        title: 'Система контроля водителей и автобусов',
        subtitle: 'CUJAE - Туристический транспорт',
        period: 'Сен 2023 - Фев 2024',
        description: 'Система управления для туристической транспортной компании, интегрирующая backend и веб-фронтенд.',
        highlights: [
          'Backend с Spring Framework, Spring Data JDBC и Spring MVC',
          'Веб-интерфейс с JSF и PrimeFaces',
          'Валидации целостности данных и управление'
        ],
        stack: ['Java', 'Spring Boot', 'Spring Data JDBC', 'Spring MVC', 'Spring Security', 'JSF', 'PrimeFaces', 'PostgreSQL', 'Maven']
      },
      {
        title: 'База данных инвентаризации компьютерной техники',
        subtitle: 'CUJAE - Факультет компьютерной инженерии',
        period: 'Сен 2022 - Июл 2023',
        description: 'Миграция системы инвентаризации на базе Excel в реляционную базу данных PostgreSQL.',
        highlights: [
          'Миграция и трансформация данных из Excel в PostgreSQL',
          'Структурированная и эффективная модель управления инвентаризацией',
          'Оптимизированные SQL запросы для извлечения информации'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'Apache POI', 'UML', 'Git']
      },
      {
        title: 'Система управления персоналом с геопривязкой',
        subtitle: 'CUJAE - Десктоп',
        period: 'Янв 2022 - Июл 2022',
        description: 'Десктопная система для централизации данных Excel в реляционной базе данных с геопространственной обработкой.',
        highlights: [
          'Импорт и хранение из Excel в PostgreSQL',
          'Генерация матрицы двунаправленных связей',
          'Автоматизация с интеграцией GIS'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'Apache POI', 'GIS', 'UML', 'Git']
      },
      {
        title: 'Система контроля водителей и автобусов',
        subtitle: 'CUJAE - Десктоп',
        period: 'Янв 2021 - Ноя 2021',
        description: 'Десктопная система для управления водителями и автобусами в туристической транспортной компании.',
        highlights: [
          'Объектно-ориентированная бизнес-логика на Java',
          'Графический интерфейс на Java Swing',
          'Полное управление данными и техническая документация'
        ],
        stack: ['Java', 'PostgreSQL', 'Java Swing', 'OOP', 'Eclipse IDE']
      }
    ]
  },

  education: {
    eyebrow: 'Образование',
    title: 'Образование',
    degree: {
      title: 'Компьютерная инженерия',
      institution: 'Technological University of Havana "José Antonio Echeverría" (CUJAE)',
      period: 'Сен 2018 - Настоящее время',
      detail: 'Ожидаемое окончание: 2026 (Защита диссертации ожидается - Все кредиты завершены)',
      focus: 'Комплексная подготовка в области программной инженерии, продвинутых алгоритмов и архитектуры распределенных систем.'
    },
    complementary: {
      title: 'Дополнительное образование',
      courses: [
        { name: 'KetherLabs Scholarship - Datacamp', period: 'Янв 2026 - Настоящее время', detail: 'Обработка больших данных, статистическое моделирование и прогнозная аналитика.' },
        { name: 'Java Backend Specialist - Oracle ONE', period: 'Янв 2024 - Июл 2024', detail: 'Java Ecosystem, Spring Framework, Spring Boot, Spring Data JPA/Hibernate, Spring Security, MySQL, SOLID, Clean Code, Design Patterns.' },
        { name: 'LinkedIn Learning', period: '', detail: 'Java (Beginner to Advanced), Functional programming with Scala, Spring Framework, Spring Data JPA, JDBC, REST APIs, HTML5, CSS3, JavaScript, Git/GitHub, Scrum.' }
      ]
    },
    languages: {
      title: 'Языки',
      items: [
        { name: 'Испанский', level: 'Родной' },
        { name: 'Английский', level: 'Средний (A2-B1) | Техническое чтение: Продвинутый' }
      ]
    }
  },

  contact: {
    eyebrow: 'Давайте свяжемся',
    title: 'Контакты',
    subtitle: 'Я открыт для рабочих предложений и сотрудничества.',
    email: 'raynersoto01@gmail.com',
    phone: '+1 (863) 766-8212',
    whatsapp: '+1 (863) 397-6979',
    location: 'Гавана, Куба',
    linkedin: 'linkedin.com/in/rayner-alejandro',
    github: 'github.com/RaynerSoto'
  },

  footer: {
    copyright: '© 2026 Rayner Alejandro Soto Martínez. Все права защищены.',
    built: 'Создано с помощью'
  }
};
