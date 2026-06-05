window.translations = window.translations || {};
window.translations.ko = {
  nav: {
    home: '홈',
    profile: '프로필',
    skills: '기술',
    experience: '경력',
    projects: '프로젝트',
    education: '교육',
    contact: '연락처'
  },
  hero: {
    greeting: '안녕하세요, 저는',
    name: 'Rayner Alejandro Soto Martínez',
    title: 'Java 백엔드 개발자',
    location: '쿠바, 하바나 | 원격 근무 가능',
    download: '이력서 다운로드',
    contact: '연락하기'
  },
  profile: {
    eyebrow: '소개',
    title: '전문 프로필',
    text: '컴퓨터 엔지니어이자 백엔드 개발자로, Java 백엔드 개발을 전문으로 하며 3년 이상의 경력을 통해 확장 가능한 엔터프라이즈 애플리케이션을 구축해 왔습니다. Spring Framework 생태계(Spring Boot, Spring Cloud, Spring Security, Spring Data JPA)에 능숙하며, 견고한 마이크로서비스와 RESTful API 개발에 탁월합니다. 헥사고날 아키텍처 패턴과 도메인 주도 설계(DDD) 원칙을 활용하여 모놀리식 시스템을 분산 아키텍처로 전환한 실무 경험을 보유하고 있습니다. 관계형 데이터베이스 설계 및 최적화(PostgreSQL, MySQL)에 숙련되어 있으며, 공간 데이터 통합(PostGIS) 및 ETL 프로세스 자동화에 강점을 가지고 있습니다. DevOps 관행(Docker, Flyway, GitHub Actions), 엄격한 테스트(JUnit, Mockito), 코드 분석(SonarQube)을 통해 품질 높은 솔루션을 제공하는 데 전념하고 있습니다. 애자일 방법론(Scrum) 실무 경험을 보유하고 있으며 분산 개발 팀에 기여한 이력이 있습니다.'
  },
  skills: {
    eyebrow: '전문 분야',
    title: '기술 역량',
    categories: [
      { name: '프로그래밍 언어', items: ['Java (JDK 8, 11, 14, 17, 21, 22, 25, GraalVM)', 'Scala', 'Python', 'C', 'JavaScript'] },
      { name: '프레임워크 및 Spring 생태계', items: ['Spring Boot', 'Spring AOP', 'Spring Cloud', 'Spring Security (JWT)', 'Spring Data JPA', 'Spring Data JDBC', 'Spring Batch', 'Spring MVC', 'Hibernate', 'JPA'] },
      { name: '데이터베이스', items: ['PostgreSQL', 'PostGIS', 'MySQL', 'SQL Server', 'SQLite', 'H2', 'Oracle DB', 'JDBC', 'Flyway'] },
      { name: '소프트웨어 아키텍처', items: ['Microservices', 'Hexagonal Architecture', 'Domain-Driven Design', 'MVC', 'UML 2.0'] },
      { name: 'DevOps 및 도구', items: ['Docker', 'Maven', 'Gradle', 'Git', 'GitHub Actions', 'Apache Tomcat', 'CI/CD'] },
      { name: '테스트 및 품질', items: ['JUnit', 'Mockito', 'SonarQube', 'Code Review', 'Clean Code', 'SOLID', 'Design Patterns'] },
      { name: '프론트엔드', items: ['HTML5', 'CSS3', 'JavaScript', 'Thymeleaf', 'PrimeFaces', 'Jakarta EE', 'React'] },
      { name: '데이터 처리', items: ['Apache POI', 'ETL', 'GIS'] }
    ]
  },
  experience: {
    eyebrow: '경력',
    title: '업무 경험',
    jobs: [
      {
        title: 'Java Full-Stack 분석가 및 개발자',
        company: 'Gecytes',
        period: '2024년 11월 - 현재',
        location: '멕시코 (원격)',
        details: [
          '마이크로서비스 및 헥사고날 아키텍처 기반 백엔드 서비스 설계.',
          'Spring Boot와 Spring Cloud를 사용한 RESTful API 구현.',
          'PostgreSQL (PostGIS)을 활용한 공간 데이터 관리.',
          'JUnit, SonarQube, Docker를 사용한 품질 보증.',
          'Git/GitHub를 활용한 애자일 협업.'
        ],
        stack: ['Java 17/21/25', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Hibernate', 'React', 'PostgreSQL (PostGIS)', 'Docker', 'Maven']
      },
      {
        title: 'Java 백엔드 개발자',
        company: 'Gestini',
        period: '2025년 5월 - 2025년 6월',
        location: '아르헨티나 (원격)',
        details: [
          '확장 가능한 백엔드 기능 설계 및 구현.',
          '견고성과 안정성 확보를 위한 단위 테스트 구현.'
        ],
        stack: ['Java 17/21', 'Spring Boot', 'Spring Data', 'Spring Security', 'Hibernate', 'MySQL', 'Docker', 'Maven']
      },
      {
        title: 'Scala 백엔드 개발자',
        company: 'Arkon Data',
        period: '2025년 3월 - 2025년 5월',
        location: '멕시코 (원격)',
        details: [
          'Scala 및 함수형 프로그래밍의 백엔드 개발 적용 심층 탐구.',
          '확장 가능한 아키텍처 및 마이크로서비스 분석.',
          '코드 리뷰 참여 및 서비스 최적화.'
        ],
        stack: ['Scala', 'Functional Programming', 'Microservices', 'Git', 'GitHub']
      },
      {
        title: 'Java 백엔드 분석가 및 개발자',
        company: 'CUJAE',
        period: '2024년 1월 - 2024년 11월',
        location: '쿠바, 하바나',
        details: [
          '데스크톱에서 웹으로의 멀티플랫폼 마이그레이션 프로젝트 기술 리더십.',
          'Spring Boot, Spring Cloud, Spring Security를 사용한 RESTful API 생성.',
          'Apache POI를 활용한 ETL 프로세스 자동화.',
          'PostGIS를 사용한 공간 데이터 최적화.'
        ],
        stack: ['Java 17', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'PostgreSQL (PostGIS)', 'Apache POI', 'Maven']
      },
      {
        title: 'Java 개발자 및 데이터베이스 전문가',
        company: 'CUJAE',
        period: '2022년 9월 - 2023년 7월',
        location: '쿠바, 하바나',
        details: [
          '데이터 마이그레이션을 위한 Java 자동화 도구 개발.',
          '관계형 데이터베이스 재설계 및 최적화.',
          '참조 무결성을 위한 트리거 및 함수 구현.'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'SQL', 'Git', 'GitHub']
      },
      {
        title: 'Java 소프트웨어 분석가 및 개발자',
        company: 'CUJAE',
        period: '2022년 1월 - 2022년 9월',
        location: '쿠바, 하바나',
        details: [
          '공간 정보 관리 솔루션 개발.',
          'Excel에서 관계형 데이터베이스로의 변환 자동화.',
          '데이터 분석을 위한 Java Swing 인터페이스 개발.'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'Apache POI', 'GIS', 'Git']
      }
    ]
  },
  projects: {
    eyebrow: '주요 프로젝트',
    title: '대표 프로젝트',
    list: [
      {
        title: '스마트 센서 데이터 모니터링 및 분석 시스템',
        subtitle: '학사 논문 - CUJAE',
        period: '2024 - 2025',
        description: '신체 부착형 스마트 센서의 데이터를 모니터링, 관리 및 분석하는 백엔드 시스템입니다. 마이크로서비스, 인공지능, IoT를 통합하여 보행 패턴 분석을 통한 병리 진단을 지원합니다.',
        highlights: [
          'Spring Boot와 Spring Cloud(Gateway, Eureka) 기반 마이크로서비스 아키텍처',
          'Neuroph를 사용한 보행 패턴 분류 신경망',
          'ESP32 센서 및 Bluetooth를 활용한 IoT',
          'SQLite 및 PostgreSQL 동기화를 지원하는 네이티브 Android 앱',
          'Spring Security (JWT)를 통한 보안'
        ],
        stack: ['Java 17', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'PostgreSQL', 'SQLite', 'Android', 'Neuroph', 'IoT', 'Maven']
      },
      {
        title: '양봉 관리 지리 정보 시스템',
        subtitle: 'Gecytes',
        period: '2024년 11월 - 현재',
        description: '멕시코 양봉 관리를 위한 지리 정보 시스템으로, 벌통, 양봉장 및 경로의 공간 데이터를 시각화합니다.',
        highlights: [
          '공간 데이터 통합을 갖춘 견고한 RESTful API',
          '성능 최적화 및 인증/권한 부여',
          'GIS 확장 기능을 갖춘 PostgreSQL',
          'Flyway를 통한 데이터베이스 버전 관리 및 Docker 배포',
          '포괄적인 아키텍처 문서'
        ],
        stack: ['Java 17/21/25', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'PostgreSQL (PostGIS)', 'Flyway', 'Docker', 'Maven', 'JUnit', 'SonarQube']
      },
      {
        title: '지리 참조 기능이 포함된 인사 관리 백엔드 시스템',
        subtitle: 'CUJAE - 웹',
        period: '2024년 1월 - 2024년 11월',
        description: '공간 정보 통합을 갖춘 관광 운송 회사 운영 관리 웹 시스템.',
        highlights: [
          'Spring Framework와 Spring Data JDBC 기반 백엔드',
          'JSF와 PrimeFaces를 사용한 웹 인터페이스',
          '운전자, 버스 및 요청 관리 모듈',
          '아키텍처 다이어그램 및 기술 문서'
        ],
        stack: ['Java', 'Spring Boot', 'Spring Data JDBC', 'JSF', 'PrimeFaces', 'PostgreSQL', 'Maven', 'Swagger', 'UML']
      },
      {
        title: '운전자 및 버스 관리 시스템',
        subtitle: 'CUJAE - 관광 운송',
        period: '2023년 9월 - 2024년 2월',
        description: '백엔드와 웹 프론트엔드를 통합한 관광 운송 회사 관리 시스템.',
        highlights: [
          'Spring Framework, Spring Data JDBC 및 Spring MVC 기반 백엔드',
          'JSF와 PrimeFaces를 사용한 웹 인터페이스',
          '데이터 무결성 검증 및 관리'
        ],
        stack: ['Java', 'Spring Boot', 'Spring Data JDBC', 'Spring MVC', 'Spring Security', 'JSF', 'PrimeFaces', 'PostgreSQL', 'Maven']
      },
      {
        title: '컴퓨터 장비 재고 데이터베이스',
        subtitle: 'CUJAE - 컴퓨터 공학부',
        period: '2022년 9월 - 2023년 7월',
        description: 'Excel 기반 재고 시스템에서 PostgreSQL 관계형 데이터베이스로의 마이그레이션.',
        highlights: [
          'Excel에서 PostgreSQL로의 데이터 마이그레이션 및 변환',
          '구조화되고 효율적인 재고 관리 모델',
          '정보 추출을 위한 최적화된 SQL 쿼리'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'Apache POI', 'UML', 'Git']
      },
      {
        title: '지리 참조 기능이 포함된 인사 관리 시스템',
        subtitle: 'CUJAE - 데스크톱',
        period: '2022년 1월 - 2022년 7월',
        description: 'Excel 데이터를 관계형 데이터베이스로 통합하고 공간 처리를 지원하는 데스크톱 시스템.',
        highlights: [
          'Excel에서 PostgreSQL로의 가져오기 및 저장',
          '2차원 연결 매트릭스 생성',
          'GIS 통합 자동화'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'Apache POI', 'GIS', 'UML', 'Git']
      },
      {
        title: '운전자 및 버스 관리 시스템',
        subtitle: 'CUJAE - 데스크톱',
        period: '2021년 1월 - 2021년 11월',
        description: '관광 운송 회사의 운전자 및 버스 관리를 위한 데스크톱 시스템.',
        highlights: [
          '객체 지향 Java 비즈니스 로직',
          'Java Swing을 사용한 그래픽 인터페이스',
          '완전한 데이터 관리 및 기술 문서'
        ],
        stack: ['Java', 'PostgreSQL', 'Java Swing', 'OOP', 'Eclipse IDE']
      }
    ]
  },
  education: {
    eyebrow: '교육',
    title: '교육 배경',
    degree: {
      title: '컴퓨터 공학',
      institution: '하바나 공과대학교 "호세 안토니오 에체베리아" (CUJAE)',
      period: '2018년 9월 - 현재',
      detail: '졸업 예정: 2026년 (논문 심사 대기 중 - 전체 학점 이수 완료)',
      focus: '소프트웨어 공학, 고급 알고리즘 및 분산 시스템 아키텍처에 대한 포괄적 교육.'
    },
    complementary: {
      title: '추가 교육',
      courses: [
        {
          name: 'KetherLabs 장학금 - Datacamp',
          period: '2026년 1월 - 현재',
          detail: '대규모 데이터 처리, 통계 모델링 및 예측 분석.'
        },
        {
          name: 'Java 백엔드 전문가 - Oracle ONE',
          period: '2024년 1월 - 2024년 7월',
          detail: 'Java 생태계, Spring Framework, Spring Boot, Spring Data JPA/Hibernate, Spring Security, MySQL, SOLID, Clean Code, 디자인 패턴.'
        },
        {
          name: 'LinkedIn Learning',
          period: '',
          detail: 'Java (초급부터 고급), Scala 함수형 프로그래밍, Spring Framework, Spring Data JPA, JDBC, REST API, HTML5, CSS3, JavaScript, Git/GitHub, Scrum.'
        }
      ]
    },
    languages: {
      title: '언어',
      items: [
        { name: '스페인어', level: '모국어' },
        { name: '영어', level: '중급 (A2-B1) | 기술 문서 읽기: 고급' }
      ]
    }
  },
  contact: {
    eyebrow: '연락처',
    title: '연락처',
    subtitle: '저는 일자리 기회와 협업에 대해 항상 열려 있습니다.',
    email: 'raynersoto01@gmail.com',
    phone: '+1 (863) 766-8212',
    whatsapp: '+1 (863) 397-6979',
    location: '쿠바, 하바나',
    linkedin: 'linkedin.com/in/rayner-alejandro',
    github: 'github.com/RaynerSoto'
  },
  footer: {
    copyright: '© 2026 Rayner Alejandro Soto Martínez. 모든 권리 보유.',
    built: '로 구축됨'
  }
};
