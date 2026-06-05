window.translations = window.translations || {};
window.translations.zh = {
  nav: {
    home: '首页',
    profile: '个人资料',
    skills: '技能',
    experience: '经历',
    projects: '项目',
    education: '教育',
    contact: '联系方式'
  },
  hero: {
    greeting: '你好，我是',
    name: 'Rayner Alejandro Soto Martínez',
    title: 'Java 后端开发工程师',
    location: '古巴哈瓦那 | 可接受远程工作',
    download: '下载简历',
    contact: '联系我'
  },
  profile: {
    eyebrow: '关于我',
    title: '专业背景',
    text: '计算机工程师与后端开发工程师，专注于 Java 后端开发，拥有超过 3 年构建可扩展企业级应用的经验。精通 Spring 框架生态系统（Spring Boot、Spring Cloud、Spring Security、Spring Data JPA），擅长构建健壮的微服务和 RESTful API。具备将单体系统转化为分布式架构的实践经验，运用六边形架构模式和领域驱动设计（DDD）原则。熟练进行关系型数据库设计与优化（PostgreSQL、MySQL），在地理空间数据集成（PostGIS）和 ETL 流程自动化方面能力突出。致力于通过 DevOps 实践（Docker、Flyway、GitHub Actions）、严格测试（JUnit、Mockito）和代码分析（SonarQube）交付优质解决方案。具备敏捷开发方法论（Scrum）的实践经验，并能为分布式开发团队做出有效贡献。'
  },
  skills: {
    eyebrow: '我的专长',
    title: '技术能力',
    categories: [
      { name: '编程语言', items: ['Java (JDK 8, 11, 14, 17, 21, 22, 25, GraalVM)', 'Scala', 'Python', 'C', 'JavaScript'] },
      { name: '框架与 Spring 生态系统', items: ['Spring Boot', 'Spring AOP', 'Spring Cloud', 'Spring Security (JWT)', 'Spring Data JPA', 'Spring Data JDBC', 'Spring Batch', 'Spring MVC', 'Hibernate', 'JPA'] },
      { name: '数据库', items: ['PostgreSQL', 'PostGIS', 'MySQL', 'SQL Server', 'SQLite', 'H2', 'Oracle DB', 'JDBC', 'Flyway'] },
      { name: '软件架构', items: ['Microservices', 'Hexagonal Architecture', 'Domain-Driven Design', 'MVC', 'UML 2.0'] },
      { name: 'DevOps 与工具', items: ['Docker', 'Maven', 'Gradle', 'Git', 'GitHub Actions', 'Apache Tomcat', 'CI/CD'] },
      { name: '测试与质量', items: ['JUnit', 'Mockito', 'SonarQube', 'Code Review', 'Clean Code', 'SOLID', 'Design Patterns'] },
      { name: '前端', items: ['HTML5', 'CSS3', 'JavaScript', 'Thymeleaf', 'PrimeFaces', 'Jakarta EE', 'React'] },
      { name: '数据处理', items: ['Apache POI', 'ETL', 'GIS'] }
    ]
  },
  experience: {
    eyebrow: '职业生涯',
    title: '工作经历',
    jobs: [
      {
        title: 'Java Full-Stack 分析师与开发员',
        company: 'Gecytes',
        period: '2024年11月 - 至今',
        location: '墨西哥（远程）',
        details: [
          '基于微服务和六边形架构的后端服务设计。',
          '使用 Spring Boot 和 Spring Cloud 实现 RESTful API。',
          'PostgreSQL (PostGIS) 地理空间数据管理。',
          '使用 JUnit、SonarQube 和 Docker 进行质量保证。',
          '使用 Git/GitHub 进行敏捷协作。'
        ],
        stack: ['Java 17/21/25', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Hibernate', 'React', 'PostgreSQL (PostGIS)', 'Docker', 'Maven']
      },
      {
        title: 'Java 后端开发员',
        company: 'Gestini',
        period: '2025年5月 - 2025年6月',
        location: '阿根廷（远程）',
        details: [
          '可扩展后端功能的设计与实现。',
          '实施单元测试以确保系统健壮性和稳定性。'
        ],
        stack: ['Java 17/21', 'Spring Boot', 'Spring Data', 'Spring Security', 'Hibernate', 'MySQL', 'Docker', 'Maven']
      },
      {
        title: 'Scala 后端开发员',
        company: 'Arkon Data',
        period: '2025年3月 - 2025年5月',
        location: '墨西哥（远程）',
        details: [
          '深入学习 Scala 及函数式编程在后端开发中的应用。',
          '分析可扩展架构与微服务。',
          '参与代码审查和服务优化。'
        ],
        stack: ['Scala', 'Functional Programming', 'Microservices', 'Git', 'GitHub']
      },
      {
        title: 'Java 后端分析师与开发员',
        company: 'CUJAE',
        period: '2024年1月 - 2024年11月',
        location: '古巴哈瓦那',
        details: [
          '主导桌面端到 Web 端的跨平台迁移项目。',
          '使用 Spring Boot、Spring Cloud 和 Spring Security 创建 RESTful API。',
          '使用 Apache POI 实现 ETL 流程自动化。',
          '使用 PostGIS 优化地理空间数据。'
        ],
        stack: ['Java 17', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'PostgreSQL (PostGIS)', 'Apache POI', 'Maven']
      },
      {
        title: 'Java 开发员与数据库专员',
        company: 'CUJAE',
        period: '2022年9月 - 2023年7月',
        location: '古巴哈瓦那',
        details: [
          '开发 Java 自动化工具用于数据迁移。',
          '关系型数据库的重新设计与优化。',
          '实现触发器和函数以保证参照完整性。'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'SQL', 'Git', 'GitHub']
      },
      {
        title: 'Java 软件分析师与开发员',
        company: 'CUJAE',
        period: '2022年1月 - 2022年9月',
        location: '古巴哈瓦那',
        details: [
          '创建地理空间信息管理解决方案。',
          '实现 Excel 到关系型数据库的自动转换。',
          '开发 Java Swing 界面用于数据分析。'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'Apache POI', 'GIS', 'Git']
      }
    ]
  },
  projects: {
    eyebrow: '精选项目',
    title: '代表性项目',
    list: [
      {
        title: '智能传感器数据监控与分析系统',
        subtitle: '学士论文 - CUJAE',
        period: '2024 - 2025',
        description: '用于监控、管理和分析身体连接智能传感器数据的后端系统。集成微服务、人工智能和物联网技术，通过步态模式分析辅助病理诊断。',
        highlights: [
          '基于 Spring Boot 和 Spring Cloud（Gateway、Eureka）的微服务架构',
          '使用 Neuroph 进行步态模式分类的神经网络',
          '基于 ESP32 传感器和蓝牙的物联网集成',
          '支持 SQLite 和 PostgreSQL 同步的原生 Android 应用',
          '基于 Spring Security (JWT) 的安全方案'
        ],
        stack: ['Java 17', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'PostgreSQL', 'SQLite', 'Android', 'Neuroph', 'IoT', 'Maven']
      },
      {
        title: '蜂业管理地理信息系统',
        subtitle: 'Gecytes',
        period: '2024年11月 - 至今',
        description: '墨西哥蜂业管理地理信息系统，实现蜂箱、养蜂场和路线的地理空间可视化。',
        highlights: [
          '集成地理空间数据的健壮 RESTful API',
          '性能优化与认证/授权机制',
          '集成 GIS 扩展的 PostgreSQL 数据库',
          '使用 Flyway 进行数据库版本管理，Docker 部署',
          '全面的架构文档'
        ],
        stack: ['Java 17/21/25', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'PostgreSQL (PostGIS)', 'Flyway', 'Docker', 'Maven', 'JUnit', 'SonarQube']
      },
      {
        title: '基于地理参考的人员管理后端系统',
        subtitle: 'CUJAE - Web 端',
        period: '2024年1月 - 2024年11月',
        description: '用于管理旅游运输公司运营的 Web 系统，集成地理空间功能。',
        highlights: [
          '基于 Spring Framework 和 Spring Data JDBC 的后端',
          '使用 JSF 和 PrimeFaces 的 Web 界面',
          '驾驶员、车辆和请求管理模块',
          '架构图与技术文档'
        ],
        stack: ['Java', 'Spring Boot', 'Spring Data JDBC', 'JSF', 'PrimeFaces', 'PostgreSQL', 'Maven', 'Swagger', 'UML']
      },
      {
        title: '驾驶员与车辆控制系统',
        subtitle: 'CUJAE - 旅游运输',
        period: '2023年9月 - 2024年2月',
        description: '集成后端与 Web 前端的旅游运输公司管理系统。',
        highlights: [
          '基于 Spring Framework、Spring Data JDBC 和 Spring MVC 的后端',
          '使用 JSF 和 PrimeFaces 的 Web 界面',
          '数据完整性验证与管理'
        ],
        stack: ['Java', 'Spring Boot', 'Spring Data JDBC', 'Spring MVC', 'Spring Security', 'JSF', 'PrimeFaces', 'PostgreSQL', 'Maven']
      },
      {
        title: '计算机设备库存数据库',
        subtitle: 'CUJAE - 计算机工程学院',
        period: '2022年9月 - 2023年7月',
        description: '将基于 Excel 的库存系统迁移至 PostgreSQL 关系型数据库。',
        highlights: [
          '从 Excel 到 PostgreSQL 的数据迁移与转换',
          '结构化高效的库存管理模型',
          '优化 SQL 查询以高效提取信息'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'Apache POI', 'UML', 'Git']
      },
      {
        title: '基于地理参考的人员管理系统',
        subtitle: 'CUJAE - 桌面端',
        period: '2022年1月 - 2022年7月',
        description: '将 Excel 数据整合到关系型数据库并支持地理空间处理的桌面系统。',
        highlights: [
          '从 Excel 到 PostgreSQL 的导入与存储',
          '二维连接矩阵生成',
          '集成 GIS 的自动化处理'
        ],
        stack: ['Java', 'Java Swing', 'JDBC', 'PostgreSQL', 'Apache POI', 'GIS', 'UML', 'Git']
      },
      {
        title: '驾驶员与车辆控制系统',
        subtitle: 'CUJAE - 桌面端',
        period: '2021年1月 - 2021年11月',
        description: '用于旅游运输公司驾驶员与车辆管理的桌面系统。',
        highlights: [
          '面向对象的 Java 业务逻辑',
          '基于 Java Swing 的图形界面',
          '完整的数据管理与技术文档'
        ],
        stack: ['Java', 'PostgreSQL', 'Java Swing', 'OOP', 'Eclipse IDE']
      }
    ]
  },
  education: {
    eyebrow: '教育信息',
    title: '教育背景',
    degree: {
      title: '计算机工程',
      institution: '哈瓦那科技大学 "何塞·安东尼奥·埃切维里亚" (CUJAE)',
      period: '2018年9月 - 至今',
      detail: '预计毕业时间：2026年（待答辩 - 已完成全部学分）',
      focus: '全面培养软件工程、高级算法与分布式系统架构能力。'
    },
    complementary: {
      title: '补充教育',
      courses: [
        {
          name: 'KetherLabs 奖学金 - Datacamp',
          period: '2026年1月 - 至今',
          detail: '大规模数据处理、统计建模与预测分析。'
        },
        {
          name: 'Java 后端专家 - Oracle ONE',
          period: '2024年1月 - 2024年7月',
          detail: 'Java 生态系统、Spring Framework、Spring Boot、Spring Data JPA/Hibernate、Spring Security、MySQL、SOLID、Clean Code、设计模式。'
        },
        {
          name: 'LinkedIn Learning',
          period: '',
          detail: 'Java（初级到高级）、Scala 函数式编程、Spring Framework、Spring Data JPA、JDBC、REST APIs、HTML5、CSS3、JavaScript、Git/GitHub、Scrum。'
        }
      ]
    },
    languages: {
      title: '语言能力',
      items: [
        { name: '西班牙语', level: '母语' },
        { name: '英语', level: '中级 (A2-B1) | 技术阅读: 高级' }
      ]
    }
  },
  contact: {
    eyebrow: '联系方式',
    title: '联系我',
    subtitle: '我对工作机会与合作始终保持开放态度。',
    email: 'raynersoto01@gmail.com',
    phone: '+1 (863) 766-8212',
    whatsapp: '+1 (863) 397-6979',
    location: '古巴哈瓦那',
    linkedin: 'linkedin.com/in/rayner-alejandro',
    github: 'github.com/RaynerSoto'
  },
  footer: {
    copyright: '© 2026 Rayner Alejandro Soto Martínez. 保留所有权利。',
    built: '使用技术构建'
  }
};
