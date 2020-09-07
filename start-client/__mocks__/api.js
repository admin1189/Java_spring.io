export const MockClient = {
  _links: {
    'maven-project': {
      href:
        'https://start.spring.io/starter.zip?type=maven-project{&dependencies,packaging,javaVersion,language,bootVersion,groupId,artifactId,version,name,description,packageName}',
      templated: true,
    },
    'maven-build': {
      href:
        'https://start.spring.io/pom.xml?type=maven-build{&dependencies,packaging,javaVersion,language,bootVersion,groupId,artifactId,version,name,description,packageName}',
      templated: true,
    },
    'gradle-project': {
      href:
        'https://start.spring.io/starter.zip?type=gradle-project{&dependencies,packaging,javaVersion,language,bootVersion,groupId,artifactId,version,name,description,packageName}',
      templated: true,
    },
    'gradle-build': {
      href:
        'https://start.spring.io/build.gradle?type=gradle-build{&dependencies,packaging,javaVersion,language,bootVersion,groupId,artifactId,version,name,description,packageName}',
      templated: true,
    },
    dependencies: {
      href: 'https://start.spring.io/dependencies{?bootVersion}',
      templated: true,
    },
  },
  dependencies: {
    type: 'hierarchical-multi-select',
    values: [
      {
        name: 'Developer Tools',
        values: [
          {
            id: 'devtools',
            name: 'Spring Boot DevTools',
            description:
              'Provides fast application restarts, LiveReload, and configurations for enhanced development experience.',
            _links: {
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#using-boot-devtools',
                templated: true,
              },
            },
          },
          {
            id: 'lombok',
            name: 'Lombok',
            description:
              'Java annotation library which helps to reduce boilerplate code.',
          },
          {
            id: 'configuration-processor',
            name: 'Spring Configuration Processor',
            description:
              'Generate metadata for developers to offer contextual help and “code completion” when working with custom configuration keys (ex.application.properties/.yml files).',
            _links: {
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#configuration-metadata-annotation-processor',
                templated: true,
              },
            },
          },
        ],
      },
      {
        name: 'Web',
        values: [
          {
            id: 'web',
            name: 'Spring Web Starter',
            description:
              'Build web, including RESTful, applications using Spring MVC. Uses Apache Tomcat as the default embedded container.',
            _links: {
              guide: [
                {
                  href: 'https://spring.io/guides/gs/rest-service/',
                  title: 'Building a RESTful Web Service',
                },
                {
                  href: 'https://spring.io/guides/gs/serving-web-content/',
                  title: 'Serving Web Content with Spring MVC',
                },
                {
                  href: 'https://spring.io/guides/tutorials/bookmarks/',
                  title: 'Building REST services with Spring',
                },
              ],
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-developing-web-applications',
                templated: true,
              },
            },
          },
          {
            id: 'webflux',
            name: 'Spring Reactive Web',
            description:
              'Build reactive web applications with Spring WebFlux and Netty.',
          },
          {
            id: 'data-rest',
            name: 'Rest Repositories',
            description:
              'Exposing Spring Data repositories over REST via Spring Data REST.',
            _links: {
              guide: [
                {
                  href: 'https://spring.io/guides/gs/accessing-data-rest/',
                  title: 'Accessing JPA Data with REST',
                },
                {
                  href:
                    'https://spring.io/guides/gs/accessing-neo4j-data-rest/',
                  title: 'Accessing Neo4j Data with REST',
                },
                {
                  href:
                    'https://spring.io/guides/gs/accessing-mongodb-data-rest/',
                  title: 'Accessing MongoDB Data with REST',
                },
              ],
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#howto-use-exposing-spring-data-repositories-rest-endpoint',
                templated: true,
              },
            },
          },
          {
            id: 'session',
            name: 'Spring Session',
            description:
              'Provides an API and implementations for managing user session information.',
          },
          {
            id: 'data-rest-hal',
            name: 'Rest Repositories HAL Browser',
            description:
              'Browsing Spring Data REST repositories in your browser.',
          },
          {
            id: 'hateoas',
            name: 'Spring HATEOAS',
            description:
              'Eases the creation of RESTful APIs that follow the HATEOAS principle when working with Spring / Spring MVC.',
            _links: {
              guide: {
                href: 'https://spring.io/guides/gs/rest-hateoas/',
                title: 'Building a Hypermedia-Driven RESTful Web Service',
              },
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-spring-hateoas',
                templated: true,
              },
            },
          },
          {
            id: 'web-services',
            name: 'Spring Web Services',
            description:
              'Facilitates contract-first SOAP development. Allows for the creation of flexible web services using one of the many ways to manipulate XML payloads.',
            _links: {
              guide: {
                href: 'https://spring.io/guides/gs/producing-web-service/',
                title: 'Producing a SOAP web service',
              },
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-webservices',
                templated: true,
              },
            },
          },
          {
            id: 'jersey',
            name: 'Jersey',
            description:
              'Framework for developing RESTful Web Services in Java that provides support for JAX-RS APIs.',
            _links: {
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-jersey',
                templated: true,
              },
            },
          },
          {
            id: 'restdocs',
            name: 'Spring REST Docs',
            description:
              'Document RESTful services by combining hand-written with Asciidoctor and auto-generated snippets produced with Spring MVC Test.',
          },
          {
            id: 'vaadin',
            name: 'Vaadin',
            description:
              'Java framework for building rich client apps based on Web components.',
            _links: {
              guide: {
                href: 'https://spring.io/guides/gs/crud-with-vaadin/',
                title: 'Creating CRUD UI with Vaadin',
              },
              reference: { href: 'https://vaadin.com/spring' },
            },
          },
        ],
      },
      {
        name: 'Template Engines',
        values: [
          {
            id: 'thymeleaf',
            name: 'Thymeleaf',
            description:
              'A modern server-side Java template engine for both web and standalone environments. Allows HTML to be correctly displayed in browsers and as static prototypes.',
            _links: {
              guide: {
                href: 'https://spring.io/guides/gs/handling-form-submission/',
                title: 'Handling Form Submission',
              },
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-spring-mvc-template-engines',
                templated: true,
              },
            },
          },
          {
            id: 'freemarker',
            name: 'Apache Freemarker',
            description:
              'Java library to generate text output (HTML web pages, e-mails, configuration files, source code, etc.) based on templates and changing data.',
            _links: {
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-spring-mvc-template-engines',
                templated: true,
              },
            },
          },
          {
            id: 'mustache',
            name: 'Mustache',
            description:
              'Logic-less Templates. There are no if statements, else clauses, or for loops. Instead there are only tags.',
            _links: {
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-spring-mvc-template-engines',
                templated: true,
              },
            },
          },
          {
            id: 'groovy-templates',
            name: 'Groovy Templates',
            description: 'Groovy templating engine',
            _links: {
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-spring-mvc-template-engines',
                templated: true,
              },
            },
          },
        ],
      },
      {
        name: 'Security',
        values: [
          {
            id: 'security',
            name: 'Spring Security',
            description:
              'Highly customizable authentication and access-control framework for Spring applications.',
            _links: {
              guide: [
                {
                  href: 'https://spring.io/guides/gs/securing-web/',
                  title: 'Securing a Web Application',
                },
                {
                  href:
                    'https://spring.io/guides/tutorials/spring-boot-oauth2/',
                  title: 'Spring Boot and OAuth2',
                },
                {
                  href: 'https://spring.io/guides/gs/authenticating-ldap/',
                  title: 'Authenticating a User with LDAP',
                },
              ],
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-security',
                templated: true,
              },
            },
          },
          {
            id: 'oauth2-client',
            name: 'OAuth2 Client',
            description:
              "Spring Boot integration for Spring Security's OAuth2/OpenID Connect client features.",
            _links: {
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-security-oauth2-client',
                templated: true,
              },
            },
          },
          {
            id: 'oauth2-resource-server',
            name: 'OAuth2 Resource Server',
            description:
              "Spring Boot integration for Spring Security's OAuth2 resource server features.",
            versionRange: '2.1.0.M2',
            _links: {
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-security-oauth2-server',
                templated: true,
              },
            },
          },
          {
            id: 'data-ldap',
            name: 'Spring LDAP',
            description:
              'Makes it easier to build Spring based applications that use the Lightweight Directory Access Protocol.',
            _links: {
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-ldap',
                templated: true,
              },
            },
          },
          {
            id: 'okta',
            name: 'Okta',
            description:
              'Okta specific configuration for Spring Security/Spring Boot OAuth2 features. Enable your Spring Boot application to work with Okta via OAuth 2.0/OIDC.',
            versionRange: '2.1.2.RELEASE',
            _links: {
              guide: [
                {
                  href:
                    'https://github.com/okta/samples-java-spring/tree/master/okta-hosted-login',
                  title: 'Okta-Hosted Login Page Example',
                },
                {
                  href:
                    'https://github.com/okta/samples-java-spring/tree/master/custom-login',
                  title: 'Custom Login Page Example',
                },
                {
                  href:
                    'https://github.com/okta/samples-java-spring/tree/master/resource-server',
                  title: 'Okta Spring Security Resource Server Example',
                },
              ],
              reference: {
                href:
                  'https://github.com/okta/okta-spring-boot/blob/master/README.md',
              },
            },
          },
        ],
      },
      {
        name: 'SQL',
        values: [
          {
            id: 'data-jpa',
            name: 'Spring Data JPA',
            description:
              'Persist data in SQL stores with Java Persistence API using Spring Data and Hibernate.',
            _links: {
              guide: {
                href: 'https://spring.io/guides/gs/accessing-data-jpa/',
                title: 'Accessing Data with JPA',
              },
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-jpa-and-spring-data',
                templated: true,
              },
            },
          },
          {
            id: 'mysql',
            name: 'MySQL Driver',
            description: 'MySQL JDBC driver.',
            _links: {
              guide: {
                href: 'https://spring.io/guides/gs/accessing-data-mysql/',
                title: 'Accessing data with MySQL',
              },
            },
          },
          {
            id: 'h2',
            name: 'H2 Database',
            description:
              'Provides a fast in-memory database that supports JDBC API, with a small (2mb) footprint. Supports embedded and server modes as well as a browser based console application.',
          },
          {
            id: 'jdbc',
            name: 'JDBC API',
            description:
              'Database Connectivity API that defines how a client may connect and query a database.',
            _links: {
              guide: [
                {
                  href: 'https://spring.io/guides/gs/relational-data-access/',
                  title: 'Accessing Relational Data using JDBC with Spring',
                },
                {
                  href: 'https://spring.io/guides/gs/managing-transactions/',
                  title: 'Managing Transactions',
                },
              ],
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-sql',
                templated: true,
              },
            },
          },
          {
            id: 'mybatis',
            name: 'MyBatis Framework',
            description:
              'Persistence framework with support for custom SQL, stored procedures and advanced mappings. MyBatis couples objects with stored procedures or SQL statements using a XML descriptor or annotations.',
            _links: {
              guide: {
                href:
                  'https://github.com/mybatis/spring-boot-starter/wiki/Quick-Start',
                title: 'MyBatis Quick Start',
              },
              reference: {
                href:
                  'http://www.mybatis.org/spring-boot-starter/mybatis-spring-boot-autoconfigure/',
              },
            },
          },
          {
            id: 'postgresql',
            name: 'PostgreSQL Driver',
            description:
              'An open source JDBC driver that allows Java programs to connect to a PostgreSQL database using standard, database independent Java code.',
          },
          {
            id: 'sqlserver',
            name: 'MS SQL Server Driver',
            description:
              'A Type 4 JDBC driver that provides access to Microsoft SQL Server and Azure SQL Database from any Java application.',
          },
          {
            id: 'hsql',
            name: 'HyperSQL Database',
            description: 'Lightweight 100% Java SQL Database Engine.',
          },
          {
            id: 'derby',
            name: 'Apache Derby Database',
            description:
              'An open source relational database implemented entirely in Java.',
          },
          {
            id: 'liquibase',
            name: 'Liquibase Migration',
            description:
              'Liquibase database migration and source control library.',
            _links: {
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#howto-execute-liquibase-database-migrations-on-startup',
                templated: true,
              },
            },
          },
          {
            id: 'flyway',
            name: 'Flyway Migration',
            description:
              'Version control for your database so you can migrate from any version (incl. an empty database) to the latest version of the schema.',
            _links: {
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#howto-execute-flyway-database-migrations-on-startup',
                templated: true,
              },
            },
          },
          {
            id: 'jooq',
            name: 'JOOQ Access Layer',
            description:
              'Generate Java code from your database and build type safe SQL queries through a fluent API.',
            _links: {
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-jooq',
                templated: true,
              },
            },
          },
        ],
      },
      {
        name: 'NoSQL',
        values: [
          {
            id: 'data-redis',
            name: 'Spring Data Redis (Access+Driver)',
            description:
              'Advanced and thread-safe Java Redis client for synchronous, asynchronous, and reactive usage. Supports Cluster, Sentinel, Pipelining, Auto-Reconnect, Codecs and much more.',
            _links: {
              guide: {
                href: 'https://spring.io/guides/gs/messaging-redis/',
                title: 'Messaging with Redis',
              },
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-redis',
                templated: true,
              },
            },
          },
          {
            id: 'data-redis-reactive',
            name: 'Spring Data Reactive Redis',
            description:
              'Access Redis key-value data stores in a reactive fashion with Spring Data Redis.',
            _links: {
              guide: {
                href: 'https://spring.io/guides/gs/messaging-redis/',
                title: 'Messaging with Redis',
              },
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-redis',
                templated: true,
              },
            },
          },
          {
            id: 'data-mongodb',
            name: 'Spring Data MongoDB',
            description:
              'Store data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time.',
            _links: {
              guide: {
                href: 'https://spring.io/guides/gs/accessing-data-mongodb/',
                title: 'Accessing Data with MongoDB',
              },
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-mongodb',
                templated: true,
              },
            },
          },
          {
            id: 'data-mongodb-reactive',
            name: 'Spring Data Reactive MongoDB',
            description:
              'Provides asynchronous stream processing with non-blocking back pressure for MongoDB. Implements the Reactive Streams API.',
            _links: {
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-mongodb',
                templated: true,
              },
            },
          },
          {
            id: 'flapdoodle-mongo',
            name: 'Embedded MongoDB database',
            description:
              'Provides a platform neutral way for running MongoDB in unit tests.',
          },
          {
            id: 'data-elasticsearch',
            name: 'Spring Data Elasticsearch (Access+Driver)',
            description:
              'A distributed, RESTful search and analytics engine with Spring Data Elasticsearch.',
            _links: {
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-elasticsearch',
                templated: true,
              },
            },
          },
          {
            id: 'data-solr',
            name: 'Spring Data for Apache Solr',
            description:
              'Apache Solr is an open source enterprise search platform built on Apache Lucene.',
            _links: {
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-solr',
                templated: true,
              },
            },
          },
          {
            id: 'data-cassandra',
            name: 'Spring Data for Apache Cassandra',
            description:
              'A free and open-source, distributed, NoSQL database management system that offers high-scalability and high-performance.',
            _links: {
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-cassandra',
                templated: true,
              },
            },
          },
          {
            id: 'data-cassandra-reactive',
            name: 'Spring Data Reactive for Apache Cassandra',
            description:
              'Access Cassandra NoSQL Database in a reactive fashion',
            _links: {
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-cassandra',
                templated: true,
              },
            },
          },
          {
            id: 'data-couchbase',
            name: 'Spring Data Couchbase',
            description:
              'NoSQL document-oriented database that offers in memory-first architecture, geo-distributed deployments, and workload isolation.',
            _links: {
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-couchbase',
                templated: true,
              },
            },
          },
          {
            id: 'data-couchbase-reactive',
            name: 'Spring Data Reactive Couchbase',
            description:
              'Access Couchbase NoSQL database in a reactive fashion with Spring Data Couchbase.',
            _links: {
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-couchbase',
                templated: true,
              },
            },
          },
          {
            id: 'data-neo4j',
            name: 'Spring Data Neo4j',
            description:
              'An open source NoSQL database that stores data structured as graphs consisting of nodes, connected by relationships.',
            _links: {
              guide: {
                href: 'https://spring.io/guides/gs/accessing-data-neo4j/',
                title: 'Accessing Data with Neo4j',
              },
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-neo4j',
                templated: true,
              },
            },
          },
        ],
      },
      {
        name: 'Messaging',
        values: [
          {
            id: 'integration',
            name: 'Spring Integration',
            description:
              'Adds support for Enterprise Integration Patterns. Enables lightweight messaging and supports integration with external systems via declarative adapters.',
            _links: {
              guide: {
                href: 'https://spring.io/guides/gs/integration/',
                title: 'Integrating Data',
              },
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-integration',
                templated: true,
              },
            },
          },
          {
            id: 'amqp',
            name: 'Spring for RabbitMQ',
            description:
              'Gives your applications a common platform to send and receive messages, and your messages a safe place to live until received.',
            _links: {
              guide: {
                href: 'https://spring.io/guides/gs/messaging-rabbitmq/',
                title: 'Messaging with RabbitMQ',
              },
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-amqp',
                templated: true,
              },
            },
          },
          {
            id: 'kafka',
            name: 'Spring for Apache Kafka',
            description:
              'Publish, subscribe, store, and process streams of records.',
            _links: {
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-kafka',
                templated: true,
              },
            },
          },
          {
            id: 'kafka-streams',
            name: 'Spring for Apache Kafka Streams',
            description:
              'Building stream processing applications with Apache Kafka Streams.',
            _links: {
              guide: {
                href:
                  'https://github.com/spring-cloud/spring-cloud-stream-samples/tree/master/kafka-streams-samples',
                title:
                  'Samples for using Apache Kafka Streams with Spring Cloud stream',
              },
              reference: [
                {
                  href:
                    'https://docs.spring.io/spring-kafka/docs/current/reference/html/_reference.html#kafka-streams',
                  title: 'Apache Kafka Streams Support',
                },
                {
                  href:
                    'https://docs.spring.io/spring-cloud-stream/docs/current/reference/htmlsingle/#_kafka_streams_binding_capabilities_of_spring_cloud_stream',
                  title:
                    'Apache Kafka Streams Binding Capabilities of Spring Cloud Stream',
                },
              ],
            },
          },
          {
            id: 'activemq',
            name: 'Spring for Apache ActiveMQ 5',
            description: "Spring JMS support with Apache ActiveMQ 'Classic'",
            _links: {
              guide: {
                href: 'https://spring.io/guides/gs/messaging-jms/',
                title: 'Java Message Service API via Apache ActiveMQ Classic.',
              },
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-activemq',
                templated: true,
              },
            },
          },
          {
            id: 'artemis',
            name: 'Spring for Apache ActiveMQ Artemis',
            description: 'Spring JMS support with Apache ActiveMQ Artemis',
            _links: {
              guide: {
                href: 'https://spring.io/guides/gs/messaging-jms/',
                title: 'Messaging with JMS',
              },
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-artemis',
                templated: true,
              },
            },
          },
          {
            id: 'websocket',
            name: 'WebSocket',
            description: 'Build WebSocket applications with SockJS and STOMP.',
            _links: {
              guide: {
                href: 'https://spring.io/guides/gs/messaging-stomp-websocket/',
                title:
                  'Using WebSocket to build an interactive web application',
              },
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-websockets',
                templated: true,
              },
            },
          },
          {
            id: 'rsocket',
            name: 'RSocket',
            description:
              'RSocket.io applications with Spring Messaging and Netty.',
            versionRange: '2.2.0.M2',
          },
          {
            id: 'camel',
            name: 'Apache Camel',
            description:
              'Apache Camel lets you create the Enterprise Integration Patterns to implement routing and mediation rules a Java based Domain Specific Language via Spring.',
            _links: {
              guide: {
                href: 'https://camel.apache.org/spring-boot',
                title: 'Using Apache Camel with Spring Boot',
              },
            },
          },
        ],
      },
      {
        name: 'I/O',
        values: [
          {
            id: 'batch',
            name: 'Spring Batch',
            description:
              'Batch applications with transactions, retry/skip and chunk based processing.',
            _links: {
              guide: {
                href: 'https://spring.io/guides/gs/batch-processing/',
                title: 'Creating a Batch Service',
              },
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#howto-batch-applications',
                templated: true,
              },
            },
          },
          {
            id: 'mail',
            name: 'Java Mail Sender',
            description:
              "Send email using Java Mail and Spring Framework's JavaMailSender.",
            _links: {
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-email',
                templated: true,
              },
            },
          },
          {
            id: 'quartz',
            name: 'Quartz Scheduler',
            description: 'Schedule jobs using Quartz.',
          },
          {
            id: 'cache',
            name: 'Spring cache abstraction',
            description:
              'Provides cache-related operations, such as the ability to update the content of the cache, but does not provide the actual data store.',
            _links: {
              guide: {
                href: 'https://spring.io/guides/gs/caching/',
                title: 'Caching Data with Spring',
              },
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-caching',
                templated: true,
              },
            },
          },
        ],
      },
      {
        name: 'Ops',
        values: [
          {
            id: 'actuator',
            name: 'Spring Boot Actuator',
            description:
              'Supports built in (or custom) endpoints that let you monitor and manage your application - such as application health, metrics, sessions, etc.',
            _links: {
              guide: {
                href: 'https://spring.io/guides/gs/actuator-service/',
                title:
                  'Building a RESTful Web Service with Spring Boot Actuator',
              },
              reference: {
                href:
                  'https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#production-ready',
                templated: true,
              },
            },
          },
          {
            id: 'codecentric-spring-boot-admin-client',
            name: 'Spring Boot Admin (Client)',
            description:
              'Required for your application to register with a Spring Boot Admin Server instance.',
            versionRange: '[2.0.0.RELEASE,2.2.0.M1)',
            _links: {
              reference: {
                href:
                  'https://codecentric.github.io/spring-boot-admin/current/#getting-started',
              },
            },
          },
          {
            id: 'codecentric-spring-boot-admin-server',
            name: 'Spring Boot Admin (Server)',
            description:
              'A community project to manage and monitor your Spring Boot applications. Provides a UI on top of the Spring Boot Actuator endpoints.',
            versionRange: '[2.0.0.RELEASE,2.2.0.M1)',
            _links: {
              reference: {
                href:
                  'https://codecentric.github.io/spring-boot-admin/current/#getting-started',
              },
            },
          },
        ],
      },
      {
        name: 'Spring Cloud',
        values: [
          {
            id: 'cloud-starter',
            name: 'Cloud Bootstrap',
            description:
              'Non-specific Spring Cloud features, unrelated to external libraries or integrations (e.g. Bootstrap context and @RefreshScope)',
            _links: {
              reference: {
                href: 'https://spring.io/projects/spring-cloud-commons',
              },
            },
          },
          {
            id: 'cloud-function',
            name: 'Function',
            description:
              'Promotes the implementation of business logic via functions and supports a uniform programming model across serverless providers, as well as the ability to run standalone (locally or in a PaaS).',
            _links: {
              reference: {
                href: 'https://cloud.spring.io/spring-cloud-function/',
              },
              sample: {
                href:
                  'https://github.com/spring-cloud/spring-cloud-function/tree/master/spring-cloud-function-samples',
                title: 'Various sample apps using Spring Cloud Function',
              },
            },
          },
          {
            id: 'cloud-task',
            name: 'Task',
            description:
              'Allows a user to develop and run short lived microservices using Spring Cloud. Run them locally, in the cloud, and on Spring Cloud Data Flow.',
          },
        ],
      },
      {
        name: 'Spring Cloud Security',
        values: [
          {
            id: 'cloud-security',
            name: 'Cloud Security',
            description:
              'A declarative model which can be heavily configured externally (or centrally) lends itself to the implementation of large systems of co-operating, remote components, usually with a central indentity management service.',
          },
          {
            id: 'cloud-oauth2',
            name: 'Cloud OAuth2',
            description:
              'OAuth2 and distributed application patterns with spring-cloud-security.',
          },
        ],
      },
      {
        name: 'Spring Cloud Tools',
        values: [
          {
            id: 'cloud-connectors',
            name: 'Cloud Connectors',
            description:
              'Simplifies the process of connecting to services and gaining operating environment awareness in cloud platforms such as Cloud Foundry and Heroku.',
          },
          {
            id: 'open-service-broker',
            name: 'Open Service Broker',
            description:
              'Framework for building Spring Boot apps that implement the Open Service Broker API, which can deliver services to applications running within cloud native platforms such as Cloud Foundry, Kubernetes and OpenShift.',
            _links: {
              reference: {
                href:
                  'https://docs.spring.io/spring-cloud-open-service-broker/docs/current/reference/html5/',
              },
              guide: {
                href:
                  'https://github.com/spring-cloud-samples/bookstore-service-broker',
                title: 'Using Spring Cloud Open Service Broker',
              },
            },
          },
          {
            id: 'cloud-contract-verifier',
            name: 'Contract Verifier',
            description:
              'Moves TDD to the level of software architecture by enabling Consumer Driven Contract (CDC) development.',
            _links: {
              guide: {
                href:
                  'https://cloud.spring.io/spring-cloud-contract/spring-cloud-contract.html#_spring_cloud_contract_verifier_setup',
                title: 'Spring Cloud Contract Verifier Setup',
              },
            },
          },
          {
            id: 'cloud-contract-stub-runner',
            name: 'Contract Stub Runner',
            description:
              'Stub Runner for HTTP/Messaging based communication. Allows creating WireMock stubs from RestDocs tests.',
          },
        ],
      },
      {
        name: 'Spring Cloud Config',
        values: [
          {
            id: 'cloud-config-client',
            name: 'Config Client',
            description:
              "Client that connects to a Spring Cloud Config Server to fetch the application's configuration.",
          },
          {
            id: 'cloud-config-server',
            name: 'Config Server',
            description:
              'Central management for configuration via Git, SVN, or HashiCorp Vault.',
            _links: {
              guide: {
                href: 'https://spring.io/guides/gs/centralized-configuration/',
                title: 'Centralized Configuration',
              },
            },
          },
          {
            id: 'cloud-starter-vault-config',
            name: 'Vault Configuration',
            description:
              "Provides client-side support for externalized configuration in a distributed system. Using HashiCorp's Vault you have a central place to manage external secret properties for applications across all environments.",
          },
          {
            id: 'cloud-starter-zookeeper-config',
            name: 'Apache Zookeeper Configuration',
            description:
              'Enable and configure common patterns inside your application and build large distributed systems with Apache Zookeeper based components. The provided patterns include Service Discovery and Configuration.',
          },
          {
            id: 'cloud-starter-consul-config',
            name: 'Consul Configuration',
            description:
              'Enable and configure the common patterns inside your application and build large distributed systems with Hashicorp’s Consul. The patterns provided include Service Discovery, Distributed Configuration and Control Bus.',
          },
        ],
      },
      {
        name: 'Spring Cloud Discovery',
        values: [
          {
            id: 'cloud-eureka',
            name: 'Eureka Discovery Client',
            description:
              'a REST based service for locating services for the purpose of load balancing and failover of middle-tier servers.',
          },
          {
            id: 'cloud-eureka-server',
            name: 'Eureka Server',
            description: 'spring-cloud-netflix Eureka Server',
            _links: {
              guide: {
                href:
                  'https://spring.io/guides/gs/service-registration-and-discovery/',
                title: 'Service Registration and Discovery',
              },
            },
          },
          {
            id: 'cloud-starter-zookeeper-discovery',
            name: 'Apache Zookeeper Discovery',
            description: 'Service discovery with Apache Zookeeper',
          },
          {
            id: 'cloud-cloudfoundry-discovery',
            name: 'Cloud Foundry Discovery',
            description: 'Service discovery with Cloud Foundry',
          },
          {
            id: 'cloud-starter-consul-discovery',
            name: 'Consul Discovery',
            description: 'Service discovery with Hashicorp Consul',
          },
        ],
      },
      {
        name: 'Spring Cloud Routing',
        values: [
          {
            id: 'cloud-zuul',
            name: 'Zuul',
            description:
              'Intelligent and programmable routing with Spring Cloud Netflix Zuul.',
            _links: {
              guide: {
                href: 'https://spring.io/guides/gs/routing-and-filtering/',
                title: 'Routing and Filtering',
              },
            },
          },
          {
            id: 'cloud-gateway',
            name: 'Gateway',
            description:
              'Provides a simple, yet effective way to route to APIs and provide cross cutting concerns to them such as security, monitoring/metrics, and resiliency.',
            _links: {
              guide: {
                href:
                  'https://github.com/spring-cloud-samples/spring-cloud-gateway-sample',
                title: 'Using Spring Cloud Gateway',
              },
            },
          },
          {
            id: 'cloud-ribbon',
            name: 'Ribbon',
            description:
              'Client side load balancing with Spring Cloud Netflix and Ribbon.',
            _links: {
              guide: {
                href: 'https://spring.io/guides/gs/client-side-load-balancing/',
                title:
                  'Client Side Load Balancing with Ribbon and Spring Cloud',
              },
            },
          },
          {
            id: 'cloud-feign',
            name: 'OpenFeign',
            description:
              'Declarative REST Client. OpenFeign creates a dynamic implementation of an interface decorated with JAX-RS or Spring MVC annotations.',
          },
        ],
      },
      {
        name: 'Spring Cloud Circuit Breaker',
        values: [
          {
            id: 'cloud-hystrix',
            name: 'Hystrix',
            description: 'Circuit breaker with Spring Cloud Netflix Hystrix.',
            _links: {
              guide: {
                href: 'https://spring.io/guides/gs/circuit-breaker/',
                title: 'Circuit Breaker',
              },
            },
          },
          {
            id: 'cloud-hystrix-dashboard',
            name: 'Hystrix Dashboard',
            description:
              'Circuit breaker dashboard with Spring Cloud Netflix Hystrix.',
          },
          {
            id: 'cloud-turbine',
            name: 'Turbine',
            description:
              'Circuit breaker metric aggregation using spring-cloud-netflix with Turbine and server-sent events',
          },
          {
            id: 'cloud-turbine-stream',
            name: 'Turbine Stream',
            description:
              'Circuit breaker metric aggregation using spring-cloud-netflix with Turbine and Spring Cloud Stream (requires a binder, e.g. Apache Kafka or RabbitMQ)',
          },
        ],
      },
      {
        name: 'Spring Cloud Tracing',
        values: [
          {
            id: 'cloud-starter-sleuth',
            name: 'Sleuth',
            description:
              'Distributed tracing via logs with Spring Cloud Sleuth.',
          },
          {
            id: 'cloud-starter-zipkin',
            name: 'Zipkin Client',
            description:
              'Distributed tracing with an existing Zipkin installation and Spring Cloud Sleuth Zipkin.',
          },
        ],
      },
      {
        name: 'Spring Cloud Messaging',
        values: [
          {
            id: 'cloud-bus',
            name: 'Cloud Bus',
            description:
              'Links nodes of a distributed system with a lightweight message broker which can used to broadcast state changes or other management instructions (requires a binder, e.g. Apache Kafka or RabbitMQ).',
          },
          {
            id: 'cloud-stream',
            name: 'Cloud Stream',
            description:
              'Framework for building highly scalable event-driven microservices connected with shared messaging systems (requires a binder, e.g. Apache Kafka or RabbitMQ).',
          },
          {
            id: 'reactive-cloud-stream',
            name: 'Reactive Cloud Stream',
            description:
              'Reactive messaging microservices with Spring Cloud Stream (requires a binder, e.g. Apache Kafka or RabbitMQ).',
          },
        ],
      },
      {
        name: 'Pivotal Cloud Foundry',
        values: [
          {
            id: 'scs-config-client',
            name: 'Config Client (PCF)',
            description: 'Config client on Pivotal Cloud Foundry',
            _links: {
              reference: {
                href: 'https://docs.pivotal.io/spring-cloud-services/',
              },
            },
          },
          {
            id: 'scs-service-registry',
            name: 'Service Registry (PCF)',
            description:
              'Eureka service discovery client on Pivotal Cloud Foundry',
            _links: {
              reference: {
                href: 'https://docs.pivotal.io/spring-cloud-services/',
              },
            },
          },
          {
            id: 'scs-circuit-breaker',
            name: 'Circuit Breaker (PCF)',
            description:
              'Hystrix circuit breaker client on Pivotal Cloud Foundry',
            _links: {
              reference: {
                href: 'https://docs.pivotal.io/spring-cloud-services/',
              },
            },
          },
        ],
      },
      {
        name: 'Amazon Web Services',
        values: [
          {
            id: 'cloud-aws',
            name: 'AWS Core',
            description: 'AWS native services from Spring Cloud for AWS',
          },
          {
            id: 'cloud-aws-jdbc',
            name: 'AWS RDS',
            description:
              'Relational databases on AWS with RDS and Spring Cloud AWS JDBC',
          },
          {
            id: 'cloud-aws-messaging',
            name: 'AWS Simple Queue Service',
            description:
              'Messaging on AWS with SQS and Spring Cloud AWS Messaging',
          },
        ],
      },
      {
        name: 'Microsoft Azure',
        values: [
          {
            id: 'azure-support',
            name: 'Azure Support',
            description:
              'Auto-configuration for Azure Services (Service Bus, Storage, Active Directory, Cosmos DB, Key Vault, and more).',
            _links: {
              reference: {
                href:
                  'https://github.com/Microsoft/azure-spring-boot/tree/master/azure-spring-boot',
              },
            },
          },
          {
            id: 'azure-active-directory',
            name: 'Azure Active Directory',
            description:
              'Spring Security integration with Azure Active Directory for authentication.',
            _links: {
              guide: {
                href:
                  'https://github.com/Microsoft/azure-spring-boot/tree/master/azure-spring-boot-samples/azure-active-directory-spring-boot-sample',
                title: 'Using Active Directory',
              },
              reference: {
                href:
                  'https://github.com/Microsoft/azure-spring-boot/tree/master/azure-spring-boot-starters/azure-active-directory-spring-boot-starter',
              },
            },
          },
          {
            id: 'azure-keyvault-secrets',
            name: 'Azure Key Vault',
            description: 'Manage application secrets and keys.',
            _links: {
              guide: {
                href:
                  'https://github.com/Microsoft/azure-spring-boot/tree/master/azure-spring-boot-samples/azure-keyvault-secrets-spring-boot-sample',
                title: 'Using Key Vault',
              },
              reference: {
                href:
                  'https://github.com/Microsoft/azure-spring-boot/tree/master/azure-spring-boot-starters/azure-keyvault-secrets-spring-boot-starter',
              },
            },
          },
          {
            id: 'azure-storage',
            name: 'Azure Storage',
            description: 'Azure Storage service integration.',
            _links: {
              guide: {
                href:
                  'https://github.com/Microsoft/azure-spring-boot/tree/master/azure-spring-boot-samples/azure-storage-spring-boot-sample',
                title: 'Using Azure Storage',
              },
              reference: {
                href:
                  'https://github.com/Microsoft/azure-spring-boot/tree/master/azure-spring-boot-starters/azure-storage-spring-boot-starter',
              },
            },
          },
        ],
      },
      {
        name: 'Google Cloud Platform',
        values: [
          {
            id: 'cloud-gcp',
            name: 'GCP Support',
            description:
              'Contains auto-configuration support for every Spring Cloud GCP integration. Most of the auto-configuration code is only enabled if other dependencies are added to the classpath.',
            _links: {
              reference: {
                href:
                  'https://docs.spring.io/spring-cloud-gcp/docs/1.1.0.M3/reference/htmlsingle/',
              },
              guide: {
                href:
                  'https://github.com/spring-cloud/spring-cloud-gcp/tree/master/spring-cloud-gcp-samples',
                title: 'GCP Samples',
              },
            },
          },
          {
            id: 'cloud-gcp-pubsub',
            name: 'GCP Messaging',
            description:
              'Adds the GCP Support entry and all the required dependencies so that the Google Cloud Pub/Sub integration work out of the box.',
            _links: {
              reference: {
                href:
                  'https://docs.spring.io/spring-cloud-gcp/docs/1.1.0.M3/reference/htmlsingle/#_spring_cloud_gcp_for_pub_sub',
              },
              guide: {
                href:
                  'https://github.com/spring-cloud/spring-cloud-gcp/tree/master/spring-cloud-gcp-samples/spring-cloud-gcp-pubsub-sample',
                title: 'GCP Pub/Sub Sample',
              },
            },
          },
          {
            id: 'cloud-gcp-storage',
            name: 'GCP Storage',
            description:
              'Adds the GCP Support entry and all the required dependencies so that the Google Cloud Storage integration work out of the box.',
            _links: {
              reference: {
                href:
                  'https://docs.spring.io/spring-cloud-gcp/docs/1.1.0.M3/reference/htmlsingle/#_spring_resources',
              },
              guide: {
                href:
                  'https://github.com/spring-cloud/spring-cloud-gcp/tree/master/spring-cloud-gcp-samples/spring-cloud-gcp-storage-resource-sample',
                title: 'GCP Storage Sample',
              },
            },
          },
        ],
      },
    ],
  },
  type: {
    type: 'action',
    default: 'maven-project',
    values: [
      {
        id: 'maven-project',
        name: 'Maven Project',
        description: 'Generate a Maven based project archive',
        action: '/starter.zip',
        tags: { build: 'maven', format: 'project' },
      },
      {
        id: 'maven-build',
        name: 'Maven POM',
        description: 'Generate a Maven pom.xml',
        action: '/pom.xml',
        tags: { build: 'maven', format: 'build' },
      },
      {
        id: 'gradle-project',
        name: 'Gradle Project',
        description: 'Generate a Gradle based project archive',
        action: '/starter.zip',
        tags: { build: 'gradle', format: 'project' },
      },
      {
        id: 'gradle-build',
        name: 'Gradle Config',
        description: 'Generate a Gradle build file',
        action: '/build.gradle',
        tags: { build: 'gradle', format: 'build' },
      },
    ],
  },
  packaging: {
    type: 'single-select',
    default: 'jar',
    values: [{ id: 'jar', name: 'Jar' }, { id: 'war', name: 'War' }],
  },
  javaVersion: {
    type: 'single-select',
    default: '1.8',
    values: [
      { id: '12', name: '12' },
      { id: '11', name: '11' },
      { id: '1.8', name: '8' },
    ],
  },
  language: {
    type: 'single-select',
    default: 'java',
    values: [
      { id: 'java', name: 'Java' },
      { id: 'kotlin', name: 'Kotlin' },
      { id: 'groovy', name: 'Groovy' },
    ],
  },
  bootVersion: {
    type: 'single-select',
    default: '2.1.7.RELEASE',
    values: [
      { id: '2.2.0.M5', name: '2.2.0 M5' },
      { id: '2.2.0.BUILD-SNAPSHOT', name: '2.2.0 (SNAPSHOT)' },
      { id: '2.1.8.BUILD-SNAPSHOT', name: '2.1.8 (SNAPSHOT)' },
      { id: '2.1.7.RELEASE', name: '2.1.7' },
    ],
  },
  groupId: { type: 'text', default: 'com.example' },
  artifactId: { type: 'text', default: 'demo' },
  version: { type: 'text', default: '0.0.1-SNAPSHOT' },
  name: { type: 'text', default: 'demo' },
  description: { type: 'text', default: 'Demo project for Spring Boot' },
  packageName: { type: 'text', default: 'com.example.demo' },
}
