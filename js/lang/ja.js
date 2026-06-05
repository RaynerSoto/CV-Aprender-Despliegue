window.translations = window.translations || {};
window.translations.ja = {
  nav: {
    home: 'ホーム',
    profile: 'プロフィール',
    skills: 'スキル',
    experience: '経歴',
    projects: 'プロジェクト',
    education: '学歴',
    contact: 'お問い合わせ'
  },
  hero: {
    greeting: 'こんにちは、私は',
    name: 'Rayner Alejandro Soto Martínez',
    title: 'Java バックエンド開発者',
    location: 'キューバ、ハバナ | リモートワーク可能',
    download: '履歴書をダウンロード',
    contact: 'お問い合わせ'
  },
  profile: {
    eyebrow: '自己紹介',
    title: 'プロフェッショナルプロフィール',
    text: 'コンピュータエンジニア兼バックエンド開発者。3年以上の経験を持ち、Javaバックエンド開発、特にスケーラブルなエンタープライズアプリケーションの構築を専門としています。Spring Frameworkエコシステム（Spring Boot、Spring Cloud、Spring Security、Spring Data JPA）を駆使し、堅牢なマイクロサービスとRESTful APIの開発に精通しています。ヘキサゴナルアーキテクチャパターンとドメイン駆動設計（DDD）の原則を用いた、モノリシックシステムから分散アーキテクチャへの移行に豊富な実績があります。リレーショナルデータベースの設計と最適化（PostgreSQL、MySQL）に熟練し、地理空間データ統合（PostGIS）やETLプロセス自動化に強みを持ちます。DevOpsプラクティス（Docker、Flyway、GitHub Actions）、厳格なテスト（JUnit、Mockito）、コード分析（SonarQube）を通じて、品質の高いソリューションを提供することに努めています。アジャイル開発手法（Scrum）の実践経験があり、分散開発チームへの貢献実績があります。'
  },
  skills: {
    eyebrow: '私の専門分野',
    title: '技術スキル',
    categories: [
      { name: 'プログラミング言語', items: ['Java (JDK 8, 11, 14, 17, 21, 22, 25, GraalVM)', 'Scala', 'Python', 'C', 'JavaScript'] },
      { name: 'フレームワークとSpringエコシステム', items: ['Spring Boot', 'Spring AOP', 'Spring Cloud', 'Spring Security (JWT)', 'Spring Data JPA', 'Spring Data JDBC', 'Spring Batch', 'Spring MVC', 'Hibernate', 'JPA'] },
      { name: 'データベース', items: ['PostgreSQL', 'PostGIS', 'MySQL', 'SQL Server', 'SQLite', 'H2', 'Oracle DB', 'JDBC', 'Flyway'] },
      { name: 'ソフトウェアアーキテクチャ', items: ['Microservices', 'Hexagonal Architecture', 'Domain-Driven Design', 'MVC', 'UML 2.0'] },
      { name: 'DevOpsとツール', items: ['Docker', 'Maven', 'Gradle', 'Git', 'GitHub Actions', 'Apache Tomcat', 'CI/CD'] },
      { name: 'テストと品質', items: ['JUnit', 'Mockito', 'SonarQube', 'Code Review', 'Clean Code', 'SOLID', 'Design Patterns'] },
      { name: 'フロントエンド', items: ['HTML5', 'CSS3', 'JavaScript', 'Thymeleaf', 'PrimeFaces', 'Jakarta EE', 'React'] },
      { name: 'データ処理', items: ['Apache POI', 'ETL', 'GIS'] }
    ]
  },
  experience: {
    eyebrow: 'キャリア',
    title: '職務経歴',
    jobs: [
      {
        title: 'Java Full-Stack アナリスト兼開発者',
        company: 'Gecytes',
        period: '2024年11月 - 現在',
        location: 'メキシコ（リモート）',
        details: [
          'マイクロサービスとヘキサゴナルアーキテクチャに基づくバックエンドサービス設計。',
          'Spring Boot と Spring Cloud を使用した RESTful API の実装。',
          'PostgreSQL（PostGIS）による地理空間データ管理。',
          'JUnit、SonarQube、Docker を使用した品質保証。',
          'Git/GitHub を用いたアジャイル開発。'
        ],
        stack: ['Java 17/21/25', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Hibernate', 'React', 'PostgreSQL (PostGIS)', 'Docker', 'Maven']
      },
      {
        title: 'Java バックエンド開発者',
        company: 'Gestini',
        period: '2025年5月 - 2025年6月',
        location: 'アルゼンチン（リモート）',
        details: [
          'スケーラブルなバックエンド機能の設計と実装。',
          '堅牢性と安定性を確保するための単体テストの実装。'
        ],
        stack: ['Java 17/21', 'Spring Boot', 'Spring Data', 'Spring Security', 'Hibernate', 'MySQL', 'Docker', 'Maven']
      },
      {
        title: 'Scala バックエンド開発者',
        company: 'Arkon Data',
        period: '2025年3月 - 2025年5月',
        location: 'メキシコ（リモート）',
        details: [
          'Scala と関数型プログラミングのバックエンド開発への応用を深く探究。',
          'スケーラブルなアーキテクチャとマイクロサービスの分析。',
          'コードレビューへの参加とサービス最適化。'
        ],
        stack: ['Scala', 'Functional Programming', 'Microservices', 'Git', 'GitHub']
      },
      {
        title: 'Java バックエンド アナリスト兼開発者',
        company: 'CUJAE',
        period: '2024年1月 - 2024年11月',
        location: 'キューバ、ハバナ',
        details: [
          'デスクトップからWebへのマルチプラットフォーム移行プロジェクトを主導。',
          'Spring Boot、Spring Cloud、Spring Security を使用した RESTful API の作成。',
          'Apache POI を用いた ETL プロセスの自動化。',
          'PostGIS を使用した地理空間データの最適化。'
        ],
        stack: ['Java 17', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'PostgreSQL (PostGIS)', 'Apache POI', 'Maven']
      },
      {
        title: 'Java 開発者兼データベース専門家',
        company: 'CUJAE',
        period: '2022年9月 - 2023年7月',
        location: 'キューバ、ハバナ',
        details: [
          'データマイグレーションのための Java 自動化ツール開発。',
          'リレーショナルデータベースの再設計と最適化。',
          '参照整合性を確保するためのトリガーと関数の実装。'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'SQL', 'Git', 'GitHub']
      },
      {
        title: 'Java ソフトウェア アナリスト兼開発者',
        company: 'CUJAE',
        period: '2022年1月 - 2022年9月',
        location: 'キューバ、ハバナ',
        details: [
          '地理空間情報管理ソリューションの作成。',
          'Excel からリレーショナルデータベースへの変換自動化。',
          'データ分析のための Java Swing インターフェース開発。'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'Apache POI', 'GIS', 'Git']
      }
    ]
  },
  projects: {
    eyebrow: '注目案件',
    title: '主要プロジェクト',
    list: [
      {
        title: 'スマートセンサーデータ監視・分析システム',
        subtitle: '学士論文 - CUJAE',
        period: '2024 - 2025',
        description: '身体接続型スマートセンサーのデータを監視・管理・分析するバックエンドシステム。マイクロサービス、人工知能、IoTを統合し、歩行パターン分析による病理診断を支援します。',
        highlights: [
          'Spring Boot と Spring Cloud（Gateway、Eureka）によるマイクロサービスアーキテクチャ',
          'Neuroph を使用した歩行パターン分類のためのニューラルネットワーク',
          'ESP32 センサーと Bluetooth を活用した IoT',
          'SQLite と PostgreSQL の同期を備えたネイティブ Android アプリ',
          'Spring Security（JWT）によるセキュリティ'
        ],
        stack: ['Java 17', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'PostgreSQL', 'SQLite', 'Android', 'Neuroph', 'IoT', 'Maven']
      },
      {
        title: '養蜂管理地理情報システム',
        subtitle: 'Gecytes',
        period: '2024年11月 - 現在',
        description: 'メキシコにおける養蜂管理のための地理情報システム。巣箱、養蜂場、ルートの地理空間表現を提供します。',
        highlights: [
          '地理空間データ統合を備えた堅牢な RESTful API',
          'パフォーマンス最適化と認証・認可',
          'GIS 拡張機能を備えた PostgreSQL',
          'Flyway によるデータベースバージョン管理と Docker デプロイ',
          '包括的なアーキテクチャドキュメント'
        ],
        stack: ['Java 17/21/25', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'PostgreSQL (PostGIS)', 'Flyway', 'Docker', 'Maven', 'JUnit', 'SonarQube']
      },
      {
        title: '地理参照機能付き人事管理バックエンドシステム',
        subtitle: 'CUJAE - Web',
        period: '2024年1月 - 2024年11月',
        description: '地理空間統合を備えた観光運輸会社の業務管理Webシステム。',
        highlights: [
          'Spring Framework と Spring Data JDBC によるバックエンド',
          'JSF と PrimeFaces を使用した Web インターフェース',
          '運転手、バス、リクエスト管理モジュール',
          'アーキテクチャ図と技術文書'
        ],
        stack: ['Java', 'Spring Boot', 'Spring Data JDBC', 'JSF', 'PrimeFaces', 'PostgreSQL', 'Maven', 'Swagger', 'UML']
      },
      {
        title: '運転手・バス管理システム',
        subtitle: 'CUJAE - 観光運輸',
        period: '2023年9月 - 2024年2月',
        description: 'バックエンドとWebフロントエンドを統合した観光運輸会社向け管理システム。',
        highlights: [
          'Spring Framework、Spring Data JDBC、Spring MVC によるバックエンド',
          'JSF と PrimeFaces を使用した Web インターフェース',
          'データ整合性検証と管理'
        ],
        stack: ['Java', 'Spring Boot', 'Spring Data JDBC', 'Spring MVC', 'Spring Security', 'JSF', 'PrimeFaces', 'PostgreSQL', 'Maven']
      },
      {
        title: 'コンピュータ機器在庫データベース',
        subtitle: 'CUJAE - コンピュータ工学部',
        period: '2022年9月 - 2023年7月',
        description: 'Excelベースの在庫管理システムからPostgreSQLリレーショナルデータベースへの移行。',
        highlights: [
          'Excel から PostgreSQL へのデータ移行と変換',
          '構造化された効率的な在庫管理モデル',
          '情報抽出のための最適化された SQL クエリ'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'Apache POI', 'UML', 'Git']
      },
      {
        title: '地理参照機能付き人事管理システム',
        subtitle: 'CUJAE - デスクトップ',
        period: '2022年1月 - 2022年7月',
        description: 'Excelデータをリレーショナルデータベースに統合し、地理空間処理を備えたデスクトップシステム。',
        highlights: [
          'Excel から PostgreSQL へのインポートと保存',
          '2次元接続マトリックスの生成',
          'GIS 統合による自動化'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'Apache POI', 'GIS', 'UML', 'Git']
      },
      {
        title: '運転手・バス管理システム',
        subtitle: 'CUJAE - デスクトップ',
        period: '2021年1月 - 2021年11月',
        description: '観光運輸会社における運転手とバスを管理するデスクトップシステム。',
        highlights: [
          'オブジェクト指向 Java によるビジネスロジック',
          'Java Swing を使用したグラフィカルインターフェース',
          '完全なデータ管理と技術文書'
        ],
        stack: ['Java', 'PostgreSQL', 'Java Swing', 'OOP', 'Eclipse IDE']
      }
    ]
  },
  education: {
    eyebrow: '学歴',
    title: '教育背景',
    degree: {
      title: 'コンピュータ工学',
      institution: 'ハバナ工科大学「ホセ・アントニオ・エチェベリア」(CUJAE)',
      period: '2018年9月 - 現在',
      detail: '卒業見込み：2026年（論文審査待ち - 全単位修了済み）',
      focus: 'ソフトウェア工学、高度なアルゴリズム、分散システムアーキテクチャに関する総合的な教育。'
    },
    complementary: {
      title: '補足教育',
      courses: [
        {
          name: 'KetherLabs 奨学金 - Datacamp',
          period: '2026年1月 - 現在',
          detail: '大規模データ処理、統計モデリング、予測分析。'
        },
        {
          name: 'Java バックエンド専門家 - Oracle ONE',
          period: '2024年1月 - 2024年7月',
          detail: 'Javaエコシステム、Spring Framework、Spring Boot、Spring Data JPA/Hibernate、Spring Security、MySQL、SOLID、Clean Code、デザインパターン。'
        },
        {
          name: 'LinkedIn Learning',
          period: '',
          detail: 'Java（初級から上級）、Scalaによる関数型プログラミング、Spring Framework、Spring Data JPA、JDBC、REST API、HTML5、CSS3、JavaScript、Git/GitHub、Scrum。'
        }
      ]
    },
    languages: {
      title: '言語',
      items: [
        { name: 'スペイン語', level: '母国語' },
        { name: '英語', level: '中級 (A2-B1) | 技術読解: 上級' }
      ]
    }
  },
  contact: {
    eyebrow: 'お問い合わせ',
    title: 'お問い合わせ',
    subtitle: '業務を含むお問合せ・コラボレーションなど、お気軽にお問合せください。',
    email: 'raynersoto01@gmail.com',
    phone: '+1 (863) 766-8212',
    whatsapp: '+1 (863) 397-6979',
    location: 'キューバ、ハバナ',
    linkedin: 'linkedin.com/in/rayner-alejandro',
    github: 'github.com/RaynerSoto'
  },
  footer: {
    copyright: '© 2026 Rayner Alejandro Soto Martínez. 無断複製・転載を禁じます。',
    built: '使用技術'
  }
};
