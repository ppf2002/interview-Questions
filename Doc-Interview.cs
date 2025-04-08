using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace interview_Questions
{
    internal class Doc_Interview
    {
        //
        /*
         I am a seasoned software engineer with 25 years of experience, consistently 
        demonstrating a solid technical foundation and a passion for leading teams in 
        delivering high-quality, impactful solutions. My core expertise includes .NET 
        development, JavaScript frameworks such as React, Next.js, and Angular, cloud 
        architecture, mobile development, and DevOps practices.
I’m a quick learner and have proven my adaptability by mastering mobile development 
        and successfully delivering three iOS and three Android applications. Known 
        for being reliable and responsible, I’m always willing to dedicate extra time 
        and focus when project demands are high.
In my previous role at ICF, I led the development of the Covid-19 Treatment Guidelines
        project during the peak of the pandemic. With an aggressive timeline of just 
        two weeks to launch the initial version, we strategically phased the project 
        priorities and built a cloud-native application on AWS to meet urgent 
        public health needs.



I began my career as a classic ASP developer and have continuously expanded my skills
        over the years, progressing through ASP.NET 1.1 to .NET Framework 4.8, 
        then moving into .NET Core, and now working with the latest unified 
        versions—.NET 6 and .NET 8. Throughout my journey, I've gained experience 
        with a variety of databases including SQL Server, Oracle, MySQL, SQLite,  
        DynamoDB, and MongoDB. I've also worked with relevance search engines such as
        Solr, Elasticsearch, Amazon OpenSearch, and Lucene.NET. In addition, I ventured
        into mobile development, creating three iOS apps using Objective-C and Swift,
        as well as three Android apps using Java. On the front-end side, I've developed 
        single-page applications (SPAs) using modern frameworks like React, Next.js, and 
        AngularJS.

Throughout my career, I have consistently tried to stay up to date with evolving 
        technologies and ensure our tech stack evolves accordingly. When Microsoft 
        introduced .NET Core, we made the strategic decision to migrate our backend 
        CMS to this new framework. Initially, the content management system was built 
        using MySQL with Entity Framework Core (code-first approach). We later transitioned
        to SQL Server to leverage SSRS reporting capabilities.
The backend is built as an ASP.NET Core Web API using Entity Framework, GraphQL API and
        AWS Cognito for identity management. While the frontend is developed in React, 
        Appollo client and Gatsby plugin to generate static web pages. The Backend WebAPI
        application was originally hosted on AWS EC2, and later containerized and deployed
        using AWS ECS, and Fargate.
The frontend was initially hosted on AWS S3, and subsequently migrated to AWS Amplify
        for enhanced deployment and management. The public facing website hosted on AWS S3,
        CloudFront, and Route 53.

Testing frame work:
My first experience with a testing framework began with Selenium. We integrated Selenium
        WebDriver into the testing process for the Aidsinfo website. During code 
        deployments for the Aidsinfo project, we encountered occasional issues where 
        the custom search index files were not properly deployed to the target location
        through the CI/CD pipeline using Octopus Deploy. To address this, we implemented
        Selenium-based tests that verified the successful loading of each section's 
        homepage and executed a search for the term “aids” within each module. If any 
        search returned zero results, the test would fail and immediately notify the 
        development team via Slack using webhooks.
Later, while redesigning the CMS system in .NET Core, we incorporated unit and integration
        tests into the new project using xUnit. We utilized libraries such as Moq and
        FluentAssertions to enhance test clarity and coverage. This significantly 
        improved code quality, reliability, and overall confidence in our deployments.



I’ve worked on several migration projects throughout my career. One notable project was 
        during my time at ICF, where we redesigned our CMS system using modern technologies.
        The backend was restructured into a .NET Core Web API with a GraphQL server, and
        the frontend was rebuilt using React, GraphQL, Apollo Client, and Gatsby.
To avoid conflicts with the existing API, we introduced a new versioned endpoint (v2) 
        and developed a corresponding GraphQL schema. I was responsible for initially 
        designing the architecture of this redesign project. In the first phase, I focused
        on the backend, implementing and thoroughly testing the Web API using xUnit. 
        We gathered feedback continuously from stakeholders and QA teams and iteratively
        improved the implementation to meet evolving requirements.
For the frontend, we started by selecting the smallest module to redesign. Using Apollo
        Client and Gatsby plugins, I rebuilt the UI in React. After successfully 
        completing and testing the initial module, we gradually moved on to the more 
        complex parts, eventually tackling the largest and most critical modules. 
        After completing each one, we performed rigorous testing before proceeding to
        the next. Once the full migration was complete, we carefully phased out the 
        legacy frontend and replaced it with the newly redesigned React application.




In one of my recent projects, we redesigned a CMS into a set of microservices using 
        ASP.NET Core Web API and GraphQL. The goal was to create a modular, scalable,
        and maintainable architecture that could handle dynamic content delivery 
        across various client platforms.
Design & Architecture:
We followed domain-driven design (DDD) principles to split the system into bounded
        contexts, each responsible for a specific business capability—such as content
        management, user/login management, and dashborad. 
For the API layer, we used HotChocolate to implement GraphQL endpoints. This allowed
        clients to fetch exactly the data they needed, which significantly reduced
        over-fetching and under-fetching issues common with REST APIs.
Data Modeling:
We used Entity Framework Core with a code-first approach for most services. For complex
        read scenarios, especially where performance was a concern, we adopted the 
        in-memory Caching for GraphQL data
Performance Considerations:
•	Caching: We used in-memory caching for frequently accessed data and Redis 
        for distributed caching across services.
•	Monitoring & Logging: Integrated tools like AWS CloudWatch, Application Insights,
        and ElasticSearch + Kibana (ELK) stack for monitoring, logging, and diagnostics.
•	Load testing: We used tools like JMeter to simulate high traffic scenarios, 
        allowing us to identify bottlenecks early.
Reliability & Resilience:
•	Implemented health checks and readiness probes in each service to ensure reliable
        orchestration with AWS ECS/Fargate.
•	Services were deployed in containers with zero-downtime deployments using blue/green
        strategies.


         */
    }
}
