import logo from "./logo.png";
import search_icon from "./search_icon.svg";
import company_icon from "./company_icon.svg";
import microsoft_logo from "./microsoft_logo.svg";
import walmart_logo from "./walmart_logo.svg";
import accenture_logo from "./accenture_logo.png";
import profile_img from "./profile_img.png";
import app_main_img from "./app_main_img.png";
import cross_icon from './cross_icon.svg';
import location_icon from './location_icon.svg';
import money_icon from './money_icon.svg';
import suitcase_icon from './suitcase_icon.svg';
import person_icon from './person_icon.svg';
import upload_area from './upload_area.svg';
import resume_selected from './resume_selected.svg';
import resume_not_selected from './resume_not_selected.svg';
import play_store from './play_store.svg';
import app_store from './app_store.svg';
import back_arrow_icon from './back_arrow_icon.svg';
import left_arrow_icon from './left_arrow_icon.svg';
import right_arrow_icon from './right_arrow_icon.svg';
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import home_icon from './home_icon.svg'
import add_icon from './add_icon.svg'
import profile_upload_icon from './profile_upload_icon.svg'
import person_tick_icon from './person_tick_icon.svg'
import resume_download_icon from './resume_download_icon.svg'
import delete_icon from './delete_icon.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import samsung_logo from './samsung_logo.png'
import adobe_logo from './adobe_logo.png'
import amazon_logo from './amazon_logo.png'
import intro from './intro.png'
import boy1 from './boy1.png'
import boy2 from './boy2.png'
import boy3 from './boy3.png'
import girl1 from './girl1.png'
import girl2 from './girl2.png'
import girl3 from './girl3.png'
import adope_logo from './adope_logo.png'
import meta_logo from './meta_logo.png'
import netflix_logo from './netflix_logo.png'
import salesforce_logo from './salesforce_logo.png'
import spotify_logo from './spotify_logo.png'
import tesla_logo from './tesla_logo.png'
import google_logo from './google_logo.png'
import ibm_logo from './ibm_logo.png'
import intel_logo from './intel_logo.png'



export const assets = {
    intel_logo,
    ibm_logo,
    google_logo,
    tesla_logo,
    spotify_logo,
    salesforce_logo,
    netflix_logo,
    meta_logo,
    adope_logo,
    boy1,
    boy2,
    boy3,
    girl1,
    girl2,
    girl3,
    logo,
    intro,
    search_icon,
    cross_icon,
    upload_area,
    company_icon,
    resume_not_selected,
    resume_selected,
    microsoft_logo,
    walmart_logo,
    accenture_logo,
    app_main_img,
    play_store,
    app_store,
    back_arrow_icon,
    left_arrow_icon,
    right_arrow_icon,
    location_icon,
    money_icon,
    suitcase_icon,
    person_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    home_icon,
    add_icon,
    person_tick_icon,
    resume_download_icon,
    profile_img,
    delete_icon,
    profile_upload_icon,
    email_icon,
    lock_icon,
    samsung_logo,
    adobe_logo,
    amazon_logo
}

export const JobCategories = [
    "Programming",
    "Data Science",
    "Designing",
    "Networking",
    "Management",
    "Marketing",
    "Cybersecurity",
]

export const JobLocations = [
    "Bangalore",
    "Washington",
    "Hyderabad",
    "Mumbai",
    "California",
    "Chennai",
    "New York"
]

// Sample data for Manage Jobs Page
export const manageJobsData = [
    { _id: 1, title: "Full Stack Developer", date: 1729102298497, location: "Bangalore", applicants: 20 },
    { _id: 2, title: "Data Scientist", date: 1729102298497, location: "San Francisco", applicants: 15 },
    { _id: 3, title: "Marketing Manager", date: 1729102298497, location: "London", applicants: 2 },
    { _id: 4, title: "UI/UX Designer", date: 1729102298497, location: "Dubai", applicants: 25 }
];

// Sample data for Profile Page
export const jobsApplied = [
    {
        company: 'Amazon',
        title: 'Full Stack Developer',
        location: 'Bangalore',
        date: '22 Aug, 2024',
        status: 'Pending',
        logo: company_icon,
    },
    {
        company: 'Meta',
        title: 'Data Scientist',
        location: 'San Francisco',
        date: '22 Aug, 2024',
        status: 'Rejected',
        logo: company_icon,
    },
    {
        company: 'Google',
        title: 'Marketing Manager',
        location: 'London',
        date: '25 Sep, 2024',
        status: 'Accepted',
        logo: company_icon,
    },
    {
        company: 'Qualcomm',
        title: 'UI/UX Designer',
        location: 'Dubai',
        date: '15 Oct, 2024',
        status: 'Pending',
        logo: company_icon,
    },
    {
        company: 'Microsoft',
        title: 'Full Stack Developer',
        location: 'Hyderabad',
        date: '25 Sep, 2024',
        status: 'Accepted',
        logo: company_icon,
    },
];

export const viewApplicationsPageData = [
    { _id: 1, name: "Richard Sanford", jobTitle: "Full Stack Developer", location: "Bangalore", imgSrc: profile_img },
    { _id: 2, name: "Enrique Murphy", jobTitle: "Data Scientist", location: "San Francisco", imgSrc: profile_img },
    { _id: 3, name: "Alison Powell", jobTitle: "Marketing Manager", location: "London", imgSrc: profile_img },
    { _id: 4, name: "Richard Sanford", jobTitle: "UI/UX Designer", location: "Dubai", imgSrc: profile_img },
    { _id: 5, name: "Enrique Murphy", jobTitle: "Full Stack Developer", location: "Hyderabad", imgSrc: profile_img },
    { _id: 6, name: "Alison Powell", jobTitle: "Data Scientist", location: "New Delhi", imgSrc: profile_img },
    { _id: 7, name: "Richard Sanford", jobTitle: "Marketing Manager", location: "Chennai", imgSrc: profile_img },
];

export const jobsData = [
    {
        _id: '1',
        title: "Full Stack Developer",
        location: "California",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candidate will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
        salary: 82000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '2',
        title: "Data Scientist",
        location: "New York",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Join our analytics team to help drive business decisions using data. As a Data Scientist, you will leverage your analytical skills to uncover patterns and insights that will influence our strategic direction. You will work closely with stakeholders to understand their needs and deliver impactful analyses that support our growth objectives. Your role is critical in turning data into actionable insights.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Analyze large datasets to uncover trends and patterns that inform business strategies.</li>
            <li>Develop predictive models to forecast outcomes and improve decision-making.</li>
            <li>Visualize data findings through reports and dashboards for stakeholders.</li>
            <li>Collaborate with cross-functional teams to define data-driven goals.</li>
            <li>Continuously refine data collection and analysis processes to enhance accuracy.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in Python or R for statistical analysis and data manipulation.</li>
            <li>Experience with data visualization tools (e.g., Tableau, Power BI).</li>
            <li>Strong knowledge of SQL and database management.</li>
            <li>Familiarity with machine learning techniques and algorithms.</li>
            <li>Excellent problem-solving and critical-thinking skills.</li>
        </ol>`,
        salary: 72000,
        date: 1729681667114,
        category: "Data Science",
    },
    {
        _id: '3',
        title: "UI/UX Designer",
        location: "Bangalore",
        level: "Beginner Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Create intuitive digital experiences as a UI/UX Designer. In this role, you will collaborate with product teams to design engaging user interfaces and ensure a seamless user journey. Your creativity and attention to detail will be crucial in developing designs that not only look good but also enhance functionality and user satisfaction.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Conduct user research and usability testing to gather insights on user needs.</li>
            <li>Create wireframes, prototypes, and high-fidelity designs that communicate user flows.</li>
            <li>Collaborate with development teams to implement designs effectively.</li>
            <li>Stay updated with industry trends and best practices in UI/UX design.</li>
            <li>Gather and analyze user feedback to iterate and improve designs.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in design tools like Figma, Sketch, or Adobe XD.</li>
            <li>Strong understanding of user-centered design principles.</li>
            <li>Basic knowledge of HTML/CSS for better collaboration with developers.</li>
            <li>Excellent communication and teamwork skills.</li>
            <li>Creative problem-solving abilities.</li>
        </ol>`,
        salary: 61000,
        date: 1729681667114,
        category: "Designing",
    },
    {
        _id: '4',
        title: "DevOps Engineer",
        location: "Washington",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Enhance our deployment pipeline as a DevOps Engineer. This role will involve automating deployment processes, managing cloud infrastructure, and implementing best practices for security and performance. You will play a vital role in bridging the gap between development and operations, ensuring efficient workflows and high-quality releases.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Automate deployment processes using CI/CD tools to streamline development workflows.</li>
            <li>Manage cloud infrastructure, ensuring optimal performance and scalability.</li>
            <li>Implement security best practices to safeguard our systems.</li>
            <li>Monitor application performance and troubleshoot issues proactively.</li>
            <li>Collaborate with developers to improve system reliability and efficiency.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Experience with CI/CD tools (e.g., Jenkins, GitLab CI).</li>
            <li>Strong knowledge of cloud platforms (e.g., AWS, Azure).</li>
            <li>Proficiency in scripting languages (e.g., Bash, Python).</li>
            <li>Familiarity with containerization technologies (e.g., Docker, Kubernetes).</li>
            <li>Excellent troubleshooting and analytical skills.</li>
        </ol>`,
        salary: 53000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '5',
        title: "Software Engineer",
        location: "Hyderabad",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Join our team as a Software Engineer to build high-quality applications that deliver exceptional user experiences. You will be responsible for designing, developing, and maintaining software solutions that meet business needs. Collaborating closely with other engineers, you will contribute to code reviews and ensure best practices are followed throughout the development process.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop and maintain software applications that fulfill user requirements.</li>
            <li>Collaborate with cross-functional teams to design scalable and efficient solutions.</li>
            <li>Participate in code reviews to ensure code quality and maintainability.</li>
            <li>Conduct testing and debugging to improve application functionality.</li>
            <li>Document development processes and application designs.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficient in Java or C# with a solid understanding of object-oriented programming.</li>
            <li>Experience with Agile methodologies and software development life cycle.</li>
            <li>Strong problem-solving skills and attention to detail.</li>
            <li>Familiarity with version control systems (e.g., Git).</li>
            <li>Excellent communication and teamwork abilities.</li>
        </ol>`,
        salary: 91000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '6',
        title: "Network Engineer",
        location: "Bangalore",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>We are looking for a Network Engineer to manage our infrastructure and ensure robust connectivity across all systems. Your expertise will help us design and implement network solutions that are secure and efficient. You will be pivotal in monitoring network performance and ensuring compliance with security standards.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design and implement network solutions that meet organizational needs.</li>
            <li>Monitor network performance and troubleshoot issues to ensure uptime.</li>
            <li>Ensure security compliance by implementing best practices.</li>
            <li>Document network configurations and maintain updated records.</li>
            <li>Collaborate with IT teams to enhance network capabilities.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in network protocols and routing (e.g., TCP/IP, BGP, OSPF).</li>
            <li>Experience with firewalls, VPNs, and security technologies.</li>
            <li>Strong troubleshooting skills and attention to detail.</li>
            <li>Excellent communication and teamwork abilities.</li>
            <li>Relevant certifications (e.g., CCNA, CCNP) are a plus.</li>
        </ol>`,
        salary: 77000,
        date: 1729681667114,
        category: "Networking",
    },
    {
        _id: '7',
        title: "Project Manager",
        location: "Bangalore",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Lead projects as a Project Manager ensuring timely delivery and alignment with organizational goals. You will oversee project planning, execution, and monitoring, collaborating with various teams to ensure that all aspects of each project are delivered successfully. Your strong leadership skills will be key to motivating team members and fostering a positive work environment.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Define project scope, objectives, and deliverables in collaboration with stakeholders.</li>
            <li>Develop detailed project plans and schedules to guide execution.</li>
            <li>Monitor project progress and adjust plans as necessary to meet deadlines.</li>
            <li>Facilitate communication between teams and manage stakeholder expectations.</li>
            <li>Conduct project retrospectives to identify lessons learned and areas for improvement.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proven experience as a Project Manager in a technology-focused environment.</li>
            <li>Familiarity with project management software (e.g., JIRA, Trello).</li>
            <li>Strong leadership and organizational skills.</li>
            <li>Excellent communication and interpersonal abilities.</li>
            <li>Certification in project management (e.g., PMP, Scrum Master) is preferred.</li>
        </ol>`,
        salary: 60000,
        date: 1729681667114,
        category: "Management",
    },
    {
        _id: '8',
        title: "Mobile App Developer",
        location: "Hyderabad",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Join our team as a Mobile App Developer to create engaging mobile applications for iOS and Android platforms. You will be responsible for the full app development lifecycle, from concept and design to deployment and maintenance. Your creativity and technical skills will help us deliver high-quality applications that enhance user experience.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design and build advanced mobile applications for iOS and Android.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Continuously discover, evaluate, and implement new technologies to maximize development efficiency.</li>
            <li>Ensure performance, quality, and responsiveness of applications.</li>
            <li>Conduct code reviews and maintain code quality standards.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in Swift for iOS or Kotlin for Android development.</li>
            <li>Experience with RESTful APIs and third-party libraries.</li>
            <li>Strong understanding of mobile app design principles and guidelines.</li>
            <li>Excellent problem-solving skills and attention to detail.</li>
            <li>Familiarity with version control systems (e.g., Git).</li>
        </ol>`,
        salary: 112000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '9',
        title: "Cloud Architect",
        location: "Hyderabad",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Design cloud solutions as a Cloud Architect, helping to transform our infrastructure and services. You will work closely with various teams to understand their requirements and translate them into secure, scalable, and efficient cloud-based solutions. Your expertise will guide our cloud strategy and ensure that we leverage cloud technologies to their fullest potential.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design and implement cloud solutions that align with business objectives.</li>
            <li>Provide guidance on best practices for cloud architecture and deployment.</li>
            <li>Collaborate with DevOps teams to enhance cloud infrastructure and security.</li>
            <li>Monitor cloud systems for performance and cost-effectiveness.</li>
            <li>Stay updated on emerging cloud technologies and industry trends.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Strong knowledge of cloud service providers (e.g., AWS, Azure, GCP).</li>
            <li>Experience with cloud architecture patterns and best practices.</li>
            <li>Familiarity with containerization and orchestration technologies (e.g., Docker, Kubernetes).</li>
            <li>Excellent analytical and problem-solving skills.</li>
            <li>Relevant certifications (e.g., AWS Certified Solutions Architect) are preferred.</li>
        </ol>`,
        salary: 96000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '10',
        title: "Technical Writer",
        location: "Mumbai",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Join us as a Technical Writer to create user-friendly documentation that supports our products and services. You will work closely with engineers and product managers to gather information and produce clear, concise, and accurate documentation. Your role is essential in ensuring that our users can easily understand and utilize our offerings.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Create and maintain user manuals, API documentation, and other technical materials.</li>
            <li>Collaborate with development teams to gather and clarify technical information.</li>
            <li>Conduct reviews of existing documentation to ensure accuracy and relevance.</li>
            <li>Ensure that documentation is up-to-date and consistent with product updates.</li>
            <li>Utilize feedback from users to enhance the clarity and usability of documentation.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in technical writing and documentation tools (e.g., MadCap Flare, Adobe FrameMaker).</li>
            <li>Strong understanding of technology and the ability to convey complex information clearly.</li>
            <li>Excellent research and analytical skills.</li>
            <li>Strong communication and collaboration abilities.</li>
            <li>Attention to detail and a commitment to quality.</li>
        </ol>`,
        salary: 72000,
        date: 1729681667114,
        category: "Marketing",
    },
    {
        _id: '11',
        title: "Cybersecurity Analyst",
        location: "Mumbai",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Protect our systems as a Cybersecurity Analyst. In this role, you will monitor security systems, analyze potential threats, and implement protective measures to safeguard our information and assets. Your expertise will help us stay ahead of evolving security challenges and maintain a secure environment for our users and stakeholders.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Monitor and analyze security events to identify potential threats.</li>
            <li>Conduct risk assessments and vulnerability analyses to enhance security posture.</li>
            <li>Implement security measures and controls to mitigate risks.</li>
            <li>Collaborate with IT teams to respond to security incidents.</li>
            <li>Stay informed about the latest cybersecurity trends and threats.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Strong knowledge of security protocols, standards, and tools.</li>
            <li>Experience with SIEM tools and incident response processes.</li>
            <li>Understanding of network protocols and security technologies.</li>
            <li>Excellent problem-solving and analytical skills.</li>
            <li>Relevant certifications (e.g., CISSP, CEH) are a plus.</li>
        </ol>`,
        salary: 62000,
        date: 1729681667114,
        category: "Cybersecurity",
    },
    {
        _id: '12',
        title: "Business Analyst",
        location: "Mumbai",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Join us as a Business Analyst to optimize our processes and improve overall efficiency. You will work closely with stakeholders to identify business needs and gather requirements for new projects. Your analytical skills will help drive decision-making and ensure that solutions align with business objectives.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Gather and analyze business requirements from stakeholders.</li>
            <li>Develop detailed documentation of business processes and workflows.</li>
            <li>Collaborate with IT and development teams to translate requirements into solutions.</li>
            <li>Conduct testing and validation of new systems and processes.</li>
            <li>Provide ongoing support and training for users.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Strong analytical skills and attention to detail.</li>
            <li>Proficiency in business analysis tools (e.g., Visio, JIRA).</li>
            <li>Excellent communication and interpersonal abilities.</li>
            <li>Experience with data analysis and reporting.</li>
            <li>Familiarity with Agile methodologies is a plus.</li>
        </ol>`,
        salary: 68000,
        date: 1729681667114,
        category: "Management",
    },
    {
        _id: '13',
        title: "Marketing Specialist",
        location: "Chennai",
        level: "Beginner Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Support our marketing efforts as a Marketing Specialist. In this role, you will assist with campaign execution, content creation, and social media management. Your creativity and enthusiasm will help promote our brand and engage our audience across various channels.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Assist in the development and execution of marketing campaigns.</li>
            <li>Create engaging content for social media platforms and newsletters.</li>
            <li>Conduct market research to identify trends and opportunities.</li>
            <li>Monitor and analyze campaign performance metrics.</li>
            <li>Collaborate with team members to brainstorm new marketing ideas.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Basic understanding of digital marketing principles.</li>
            <li>Strong written and verbal communication skills.</li>
            <li>Proficiency in social media platforms and marketing tools.</li>
            <li>Creative thinking and problem-solving abilities.</li>
            <li>Willingness to learn and adapt in a fast-paced environment.</li>
        </ol>`,
        salary: 77000,
        date: 1729681667114,
        category: "Marketing",
    },
    {
        _id: '14',
        title: "Data Scientist",
        location: "California",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Join our innovative team as a Data Scientist, where you will analyze complex data sets to drive strategic decision-making. You will leverage your statistical and programming skills to uncover insights and develop predictive models, contributing to the overall success of our organization.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Analyze large datasets to identify trends, patterns, and anomalies.</li>
            <li>Develop and implement predictive models and algorithms.</li>
            <li>Collaborate with cross-functional teams to understand business needs and provide data-driven solutions.</li>
            <li>Visualize data findings and present insights to stakeholders.</li>
            <li>Stay current with industry trends and best practices in data science.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in programming languages such as Python or R.</li>
            <li>Strong knowledge of statistical methods and machine learning techniques.</li>
            <li>Experience with data visualization tools (e.g., Tableau, Power BI).</li>
            <li>Excellent problem-solving skills and attention to detail.</li>
            <li>Ability to communicate complex concepts to non-technical audiences.</li>
        </ol>`,
        salary: 65000,
        date: 1729681667114,
        category: "Data Science",
    },
    {
        _id: '15',
        title: "UX/UI Designer",
        location: "Hyderabad",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>We are seeking a talented UX/UI Designer to enhance our user experience across digital platforms. You will collaborate with product managers and developers to create intuitive and engaging interfaces that meet user needs and improve overall satisfaction.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Conduct user research and usability testing to inform design decisions.</li>
            <li>Create wireframes, prototypes, and high-fidelity mockups for web and mobile applications.</li>
            <li>Work closely with development teams to ensure designs are implemented accurately.</li>
            <li>Iterate on designs based on user feedback and analytics.</li>
            <li>Stay updated on design trends and best practices in UX/UI.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in design tools such as Sketch, Figma, or Adobe XD.</li>
            <li>Strong understanding of user-centered design principles.</li>
            <li>Experience with responsive and adaptive design techniques.</li>
            <li>Excellent communication skills and ability to work collaboratively.</li>
            <li>A portfolio showcasing relevant design projects is required.</li>
        </ol>`,
        salary: 64000,
        date: 1729681667114,
        category: "Design",
    },
    {
        _id: '16',
        title: "DevOps Engineer",
        location: "Bangalore",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>As a DevOps Engineer, you will play a crucial role in enhancing our software development and deployment processes. You will work with development and operations teams to automate workflows, improve system reliability, and ensure seamless integration and delivery of applications.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design and implement CI/CD pipelines to automate application deployment.</li>
            <li>Monitor system performance and troubleshoot issues proactively.</li>
            <li>Collaborate with development teams to improve software development lifecycle.</li>
            <li>Implement infrastructure as code using tools like Terraform or Ansible.</li>
            <li>Ensure security best practices are followed in the deployment process.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Strong experience with cloud platforms (AWS, Azure, or GCP).</li>
            <li>Proficiency in scripting languages such as Bash or Python.</li>
            <li>Familiarity with containerization tools like Docker and orchestration platforms like Kubernetes.</li>
            <li>Excellent troubleshooting and problem-solving skills.</li>
            <li>Relevant certifications (e.g., AWS Certified DevOps Engineer) are a plus.</li>
        </ol>`,
        salary: 74000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '17',
        title: "Sales Manager",
        location: "New York",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Join our team as a Sales Manager, where you will lead our sales efforts to drive growth and increase market share. You will develop sales strategies, manage client relationships, and mentor your sales team to achieve performance goals.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop and implement strategic sales plans to achieve company objectives.</li>
            <li>Manage and lead a team of sales representatives to meet and exceed sales targets.</li>
            <li>Build and maintain strong relationships with key clients and stakeholders.</li>
            <li>Analyze sales data and market trends to identify opportunities for growth.</li>
            <li>Provide training and development opportunities for the sales team.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proven experience in sales management and team leadership.</li>
            <li>Strong negotiation and communication skills.</li>
            <li>Ability to analyze data and make informed decisions.</li>
            <li>Experience with CRM software (e.g., Salesforce).</li>
            <li>A results-oriented mindset with a focus on meeting targets.</li>
        </ol>`,
        salary: 59000,
        date: 1729681667114,
        category: "Marketing",
    },
    {
        _id: '18',
        title: "Human Resources Specialist",
        location: "Washington",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>As a Human Resources Specialist, you will support various HR functions, including recruitment, employee relations, and compliance. You will play a vital role in fostering a positive workplace culture and ensuring that our HR practices align with organizational goals.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Assist with the recruitment process, including job postings and candidate screenings.</li>
            <li>Support employee onboarding and orientation programs.</li>
            <li>Manage employee records and ensure compliance with HR policies.</li>
            <li>Provide guidance to employees on HR-related inquiries.</li>
            <li>Help organize employee training and development initiatives.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Strong understanding of HR principles and practices.</li>
            <li>Excellent communication and interpersonal skills.</li>
            <li>Proficiency in HR software (e.g., HRIS, ATS).</li>
            <li>Ability to maintain confidentiality and handle sensitive information.</li>
            <li>Attention to detail and strong organizational skills.</li>
        </ol>`,
        salary: 89000,
        date: 1729681667114,
        category: "Management",
    },
    {
        _id: '19',
        title: "Content Marketing Manager",
        location: "Mumbai",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>We are looking for a Content Marketing Manager to lead our content strategy and execution. In this role, you will develop compelling content that engages our audience and drives brand awareness. You will collaborate with various teams to ensure consistent messaging across all platforms.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop and implement a content marketing strategy aligned with business objectives.</li>
            <li>Create and oversee the production of high-quality content for blogs, social media, and other channels.</li>
            <li>Analyze content performance and optimize strategies based on data-driven insights.</li>
            <li>Collaborate with designers and other stakeholders to ensure content aligns with visual branding.</li>
            <li>Manage the content calendar and ensure timely delivery of content.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proven experience in content marketing and strategy development.</li>
            <li>Strong writing and editing skills with a keen eye for detail.</li>
            <li>Familiarity with SEO best practices and content management systems.</li>
            <li>Excellent analytical skills and ability to interpret data.</li>
            <li>Strong leadership and project management skills.</li>
        </ol>`,
        salary: 99000,
        date: 1729681667114,
        category: "Marketing",
    },
    {
        _id: '20',
        title: "Graphic Designer",
        location: "Chennai",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Join our creative team as a Graphic Designer, where you will be responsible for creating visually appealing graphics and layouts that enhance our brand identity. You will collaborate with marketing and product teams to develop creative solutions for various projects.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design graphics for digital and print media, including social media, websites, and marketing materials.</li>
            <li>Collaborate with cross-functional teams to understand project requirements and objectives.</li>
            <li>Stay updated on design trends and tools to continually enhance skills and creativity.</li>
            <li>Prepare and present design concepts to stakeholders for feedback and approval.</li>
            <li>Ensure all designs align with brand guidelines and project specifications.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in design software such as Adobe Creative Suite (Photoshop, Illustrator, InDesign).</li>
            <li>Strong understanding of design principles and typography.</li>
            <li>Ability to work on multiple projects simultaneously and meet deadlines.</li>
            <li>Excellent communication and collaboration skills.</li>
            <li>A portfolio showcasing relevant design work is required.</li>
        </ol>`,
        salary: 91000,
        date: 1729681667114,
        category: "Design",
    },
    {
        _id: '21',
        title: "Software Tester",
        location: "Chennai",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>As a Software Tester, you will play a critical role in ensuring the quality and reliability of our software applications. You will design test cases, execute tests, and collaborate with development teams to identify and resolve defects before product release.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop and execute test plans and test cases based on software requirements.</li>
            <li>Identify, document, and track defects using bug tracking tools.</li>
            <li>Collaborate with developers to resolve issues and improve software quality.</li>
            <li>Conduct regression testing to ensure existing functionality remains intact.</li>
            <li>Participate in team meetings to provide insights on product quality and testing status.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Experience with manual and automated testing techniques.</li>
            <li>Familiarity with testing tools (e.g., Selenium, JUnit).</li>
            <li>Strong analytical and problem-solving skills.</li>
            <li>Excellent attention to detail and ability to work under tight deadlines.</li>
            <li>Good communication skills to articulate testing outcomes and challenges.</li>
        </ol>`,
        salary: 123000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '22',
        title: "Network Security Engineer",
        location: "Bangalore",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>We are seeking a Network Security Engineer to protect our organization's IT infrastructure. You will design and implement security measures to safeguard systems from unauthorized access and ensure compliance with security policies.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop and implement security protocols for network systems.</li>
            <li>Monitor network traffic for suspicious activity and respond to incidents.</li>
            <li>Conduct vulnerability assessments and penetration testing.</li>
            <li>Collaborate with IT teams to resolve security issues and enhance network security.</li>
            <li>Stay updated on the latest security trends and technologies.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Strong knowledge of networking protocols and security technologies.</li>
            <li>Experience with firewalls, VPNs, IDS/IPS, and security information systems.</li>
            <li>Relevant certifications (e.g., CISSP, CISM, CEH) are preferred.</li>
            <li>Excellent analytical and troubleshooting skills.</li>
            <li>Strong communication skills to work with technical and non-technical teams.</li>
        </ol>`,
        salary: 87000,
        date: 1729681667114,
        category: "Cybersecurity",
    },
    {
        _id: '23',
        title: "Cloud Engineer",
        location: "Hyderabad",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Join our technology team as a Cloud Engineer, where you will be responsible for designing and managing our cloud infrastructure. You will collaborate with development and operations teams to ensure the efficient deployment and scaling of applications.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design and implement cloud solutions using AWS, Azure, or Google Cloud Platform.</li>
            <li>Monitor and optimize cloud resources for performance and cost efficiency.</li>
            <li>Work with DevOps teams to automate deployment processes.</li>
            <li>Ensure cloud security and compliance with industry standards.</li>
            <li>Provide technical support and troubleshooting for cloud-based applications.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Experience with cloud platforms and services.</li>
            <li>Proficiency in scripting languages such as Python or Bash.</li>
            <li>Strong understanding of networking concepts and security.</li>
            <li>Experience with container orchestration tools like Kubernetes.</li>
            <li>Good problem-solving skills and attention to detail.</li>
        </ol>`,
        salary: 102000,
        date: 1729681667114,
        category: "Programming",
    }
];

/**
 * skills.js
 * This file exports an array of skill objects, now using pure JavaScript objects for icons
 * to ensure compatibility with a standard .js file.
 * Each object represents a technology, with its icon data structured for rendering in a React component.
 */
// export const skills = [


//   {
//     name: 'MongoDB',
//     icon: {
//       viewBox: '0 0 24 24',
//       className: 'w-8 h-8 mx-auto mb-2 text-green-600',
//       svgProps: { fill: 'currentColor' },
//       elements: [{ type: 'path', props: { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.17c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V11h-3v5.17zM12 9c.83 0 1.5-.67 1.5-1.5S12.83 6 12 6s-1.5.67-1.5 1.5S11.17 9 12 9z' } }],
//     },
//   },
//   {
//     name: 'Express.js',
//     icon: {
//       viewBox: '0 0 24 24',
//       className: 'w-8 h-8 mx-auto mb-2 text-gray-700',
//       svgProps: { fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
//       elements: [{ type: 'path', props: { d: 'M4 10h16m-8-4v8m-4 0h8' } }],
//     },
//   },
//   {
//     name: 'React',
//     icon: {
//       viewBox: '0 0 24 24',
//       className: 'w-8 h-8 mx-auto mb-2 text-blue-500',
//       svgProps: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' },
//       elements: [
//         { type: 'ellipse', props: { cx: '12', cy: '12', rx: '11', ry: '4.2' } },
//         { type: 'ellipse', props: { cx: '12', cy: '12', rx: '11', ry: '4.2', transform: 'rotate(60 12 12)' } },
//         { type: 'ellipse', props: { cx: '12', cy: '12', rx: '11', ry: '4.2', transform: 'rotate(120 12 12)' } },
//         { type: 'circle', props: { cx: '12', cy: '12', r: '1.5', fill: 'currentColor' } },
//       ],
//     },
//   },
//   {
//     name: 'Node.js',
//     icon: {
//       viewBox: '0 0 24 24',
//       className: 'w-8 h-8 mx-auto mb-2 text-green-500',
//       svgProps: { fill: 'currentColor' },
//       elements: [{ type: 'path', props: { d: 'M20.62 8.11L13.12 3.3a2 2 0 00-2.24 0l-7.5 4.81A2 2 0 002 9.88v8.24a2 2 0 001.38 1.87l7.5 4.81a2 2 0 002.24 0l7.5-4.81a2 2 0 001.38-1.87V9.88a2 2 0 00-1.38-1.77z' } }],
//     },
//   },
//   // Core Languages
//   {
//     name: 'JavaScript',
//     icon: {
//       viewBox: '0 0 24 24',
//       className: 'w-8 h-8 mx-auto mb-2 text-yellow-500',
//       svgProps: { fill: 'currentColor' },
//       elements: [
//         { type: 'path', props: { d: 'M1 1h22v22H1z', fill: 'none' } },
//         { type: 'path', props: { d: 'M9.42 16.88L12 14.3l2.58 2.58L16 15.46l-2.58-2.58L16 10.3l-1.42-1.42L12 11.46 9.42 8.88 8 10.3l2.58 2.58L8 15.46z' } },
//       ],
//     },
//   },
//   {
//     name: 'Java',
//     icon: {
//       viewBox: '0 0 24 24',
//       className: 'w-8 h-8 mx-auto mb-2 text-red-500',
//       svgProps: { fill: 'currentColor' },
//       elements: [{ type: 'path', props: { d: 'M4 4h16v12h-4v4H8v-4H4zm6 14h4v-4h-4zM6 6h12v8H6z' } }],
//     },
//   },
//   {
//     name: 'Python',
//     icon: {
//       viewBox: '0 0 24 24',
//       className: 'w-8 h-8 mx-auto mb-2 text-blue-700',
//       svgProps: { fill: 'currentColor' },
//       elements: [{ type: 'path', props: { d: 'M15 4a2 2 0 00-2 2v3h-2V6a2 2 0 00-4 0v3H5v4h2v2a2 2 0 004 0v-2h2v3a2 2 0 002 2h3a2 2 0 002-2v-3h2v-4h-2V6a2 2 0 00-2-2h-3z' } }],
//     },
//   },
//   {
//     name: 'HTML',
//     icon: {
//       viewBox: '0 0 24 24',
//       className: 'w-8 h-8 mx-auto mb-2 text-orange-600',
//       svgProps: { fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
//       elements: [{ type: 'path', props: { d: 'M7 8l-4 4 4 4m10-8l4 4-4 4M14.5 4l-5 16' } }],
//     },
//   },
//   {
//     name: 'CSS',
//     icon: {
//       viewBox: '0 0 24 24',
//       className: 'w-8 h-8 mx-auto mb-2 text-blue-500',
//       svgProps: { fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
//       elements: [{ type: 'path', props: { d: 'M15 11l-3 6-3-6 3-6 3 6zM9 21a9 9 0 0011.88-6.12M3 12a9 9 0 0111.88-6.12' } }],
//     },
//   },
//   {
//     name: 'SQL',
//     icon: {
//       viewBox: '0 0 24 24',
//       className: 'w-8 h-8 mx-auto mb-2 text-indigo-500',
//       svgProps: { fill: 'currentColor' },
//       elements: [{ type: 'path', props: { d: 'M12 2C6.48 2 2 4.69 2 8s4.48 6 10 6 10-2.69 10-6-4.48-6-10-6zm0 18c-4.42 0-8-1.79-8-4v-3.33c1.45.99 4.47 1.33 8 1.33s6.55-.34 8-1.33V16c0 2.21-3.58 4-8 4zm0-10c-4.42 0-8-1.79-8-4s3.58-4 8-4 8 1.79 8 4-3.58 4-8 4z' } }],
//     },
//   },
//   // Frontend
//   {
//     name: 'TypeScript',
//     icon: {
//       viewBox: '0 0 24 24',
//       className: 'w-8 h-8 mx-auto mb-2 text-blue-600',
//       svgProps: { fill: 'currentColor' },
//       elements: [
//         { type: 'path', props: { d: 'M1 1h22v22H1z', fill: 'none' } },
//         { type: 'path', props: { d: 'M6.5 11.25h11v1.5h-11zM12 4l-4.5 8h9z' } },
//       ],
//     },
//   },
//   {
//     name: 'Tailwind CSS',
//     icon: {
//       viewBox: '0 0 24 24',
//       className: 'w-8 h-8 mx-auto mb-2 text-teal-500',
//       svgProps: { fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
//       elements: [{ type: 'path', props: { d: 'M4 12c4.42 0 8-3.58 8-8m-8 8c4.42 0 8 3.58 8 8m-8-8h16m-8 8c-4.42 0-8-3.58-8-8m8 8c-4.42 0-8 3.58-8 8' } }],
//     },
//   },
//   {
//     name: 'Redux',
//     icon: {
//       viewBox: '0 0 24 24',
//       className: 'w-8 h-8 mx-auto mb-2 text-purple-600',
//       svgProps: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' },
//       elements: [
//         { type: 'path', props: { d: 'M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4m-2.83-7.07l-2.83 2.83M16.24 16.24l-2.83 2.83' } },
//         { type: 'circle', props: { cx: '12', cy: '12', r: '3' } },
//       ],
//     },
//   },
//   // Tools & Platforms
//   {
//     name: 'Git',
//     icon: {
//       viewBox: '0 0 24 24',
//       className: 'w-8 h-8 mx-auto mb-2 text-red-600',
//       svgProps: { fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
//       elements: [
//         { type: 'path', props: { d: 'M18 6l-6 6-6-6' } },
//         { type: 'path', props: { d: 'M12 12v9' } },
//         { type: 'circle', props: { cx: '18', cy: '6', r: '3' } },
//         { type: 'circle', props: { cx: '6', cy: '6', r: '3' } },
//         { type: 'circle', props: { cx: '12', cy: '21', r: '3' } },
//       ],
//     },
//   },
//   {
//     name: 'GitHub',
//     icon: {
//       viewBox: '0 0 24 24',
//       className: 'w-8 h-8 mx-auto mb-2 text-gray-800',
//       svgProps: { fill: 'currentColor' },
//       elements: [{ type: 'path', props: { fillRule: 'evenodd', d: 'M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z', clipRule: 'evenodd' } }],
//     },
//   },
//   {
//     name: 'Postman',
//     icon: {
//       viewBox: '0 0 24 24',
//       className: 'w-8 h-8 mx-auto mb-2 text-orange-500',
//       svgProps: { fill: 'currentColor' },
//       elements: [{ type: 'path', props: { d: 'M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 4a6 6 0 100 12 6 6 0 000-12zm-3 5h6v2H9v-2z' } }],
//     },
//   },
//   {
//     name: 'Vercel',
//     icon: {
//       viewBox: '0 0 24 24',
//       className: 'w-8 h-8 mx-auto mb-2 text-black',
//       svgProps: { fill: 'currentColor' },
//       elements: [{ type: 'path', props: { d: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z' } }],
//     },
//   },
//   {
//     name: 'Docker',
//     icon: {
//       viewBox: '0 0 24 24',
//       className: 'w-8 h-8 mx-auto mb-2 text-blue-400',
//       svgProps: { fill: 'currentColor' },
//       elements: [{ type: 'path', props: { d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12h20zM4 14h2v2H4v-2zm4 0h2v2H8v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z' } }],
//     },
//   },
//   {
//     name: 'Firebase',
//     icon: {
//       viewBox: '0 0 24 24',
//       className: 'w-8 h-8 mx-auto mb-2 text-yellow-400',
//       svgProps: { fill: 'currentColor' },
//       elements: [{ type: 'path', props: { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15l-4-4 1.5-1.5 2.5 2.5 5.5-5.5 1.5 1.5-7 7z' } }],
//     },
//   },
// ];

// /-------------------------------------------------------------------------------/






export const skills = [
  // MERN Stack
  {
    name: 'MongoDB',
    icon: {
      viewBox: '0 0 24 24',
      className: 'w-8 h-8 mx-auto mb-2 text-green-600',
      svgProps: { fill: 'currentColor' },
      elements: [{ type: 'path', props: { d: 'M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4.5C14.33,4.5 15.8,6.62 15.2,8.65C15,9.35 14.26,9.5 13.8,9.05L12.1,7.2C11.7,6.75 11,6.9 11,7.5V13C11,13.55 10.55,14 10,14H9C8.45,14 8,13.55 8,13V7.5C8,5.83 9.42,4.5 11.25,4.5C11.5,4.5 11.75,4.5 12,4.5Z' } }],
    },
  },
  {
    name: 'Express.js',
    icon: {
      viewBox: '0 0 24 24',
      className: 'w-8 h-8 mx-auto mb-2 text-gray-700',
      svgProps: { fill: 'currentColor' },
      elements: [{ type: 'path', props: { d: 'M3 3h18v18H3V3zm5.24 2.05l1.54.4.95-3.35-1.54-.4-.95 3.35zm3.62 1.34l.4 1.53 3.34-.96-.4-1.53-3.34.96zm-1.01 4.25l-2.83 2.76.9.92 3.74-3.66-.9-.92-3.77 3.66.06-.06zm.93-1.87c.97 0 1.75-.78 1.75-1.75s-.78-1.75-1.75-1.75-1.75.78-1.75 1.75.78 1.75 1.75 1.75zm-1.12 6.78l-1.54-.4-.95 3.35 1.54.4.95-3.35z' } }],
    },
  },
  {
    name: 'React',
    icon: {
      viewBox: '0 0 24 24',
      className: 'w-8 h-8 mx-auto mb-2 text-blue-500',
      svgProps: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' },
      elements: [
        { type: 'ellipse', props: { cx: '12', cy: '12', rx: '11', ry: '4.2' } },
        { type: 'ellipse', props: { cx: '12', cy: '12', rx: '11', ry: '4.2', transform: 'rotate(60 12 12)' } },
        { type: 'ellipse', props: { cx: '12', cy: '12', rx: '11', ry: '4.2', transform: 'rotate(120 12 12)' } },
        { type: 'circle', props: { cx: '12', cy: '12', r: '1.5', fill: 'currentColor' } },
      ],
    },
  },
  {
    name: 'Node.js',
    icon: {
      viewBox: '0 0 24 24',
      className: 'w-8 h-8 mx-auto mb-2 text-green-500',
      svgProps: { fill: 'currentColor' },
      elements: [{ type: 'path', props: { d: 'M12,2.6L4.4,6.8v8.4l7.6,4.2l7.6-4.2V6.8L12,2.6z M11.1,17.4v-3.8l-3.3-1.8v3.2L11.1,17.4z M11.1,12.3v-3L8,7.6l3.1-1.8v3.1 l3.3,1.9v3.1L11.1,12.3z M12.9,15.1v-3.2l3.3,1.8v3.8L12.9,15.1z' } }],
    },
  },
  // Core Languages
  {
    name: 'JavaScript',
    icon: {
      viewBox: '0 0 24 24',
      className: 'w-8 h-8 mx-auto mb-2 text-yellow-500',
      svgProps: { fill: 'currentColor' },
      elements: [{ type: 'path', props: { d: 'M0 0h24v24H0V0h24z', fill: 'none' } }, { type: 'path', props: { d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10S22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-2.5-4.5h1v-4h-1v4zm5 0h1v-4h-1v4z' } }],
    },
  },
  {
    name: 'Java',
    icon: {
      viewBox: '0 0 24 24',
      className: 'w-8 h-8 mx-auto mb-2 text-blue-500', // Official color is often blue/orange
      svgProps: { fill: 'currentColor' },
      elements: [{ type: 'path', props: { d: 'M4 2v2h16V2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2H4v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm0 16h16V4H4v14zM8 8h8v2H8zm0 4h8v2H8z' } }],
    },
  },
  {
    name: 'Python',
    icon: {
      viewBox: '0 0 24 24',
      className: 'w-8 h-8 mx-auto mb-2 text-blue-700',
      svgProps: { fill: 'currentColor' },
      elements: [{ type: 'path', props: { d: 'M16.5 7.5V3H15v4.5h1.5zM7.5 21H9v-4.5H7.5v4.5zm2.25-13.5c0-1.65-1.35-3-3-3s-3 1.35-3 3v4.5h1.5V7.5c0-.825.675-1.5 1.5-1.5s1.5.675 1.5 1.5V12h6V7.5c0-1.65-1.35-3-3-3s-3 1.35-3 3v1.5h1.5V7.5zm4.5 9c0 1.65 1.35 3 3 3s3-1.35 3-3V12h-1.5v4.5c0 .825-.675 1.5-1.5 1.5s-1.5-.675-1.5-1.5V12h-6v4.5z' } }],
    },
  },
  {
    name: 'HTML',
    icon: {
      viewBox: '0 0 24 24',
      className: 'w-8 h-8 mx-auto mb-2 text-orange-600',
      svgProps: { fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
      elements: [{ type: 'path', props: { d: 'M7 8l-4 4 4 4m10-8l4 4-4 4M14.5 4l-5 16' } }],
    },
  },
  {
    name: 'CSS',
    icon: {
      viewBox: '0 0 24 24',
      className: 'w-8 h-8 mx-auto mb-2 text-blue-500',
      svgProps: { fill: 'currentColor' },
      elements: [{ type: 'path', props: { d: 'M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.91L5.41 4.91l.213 2.622 10.125.002-.255 2.716-4.2.002-4.178-.002.213 2.622h3.965l.213 2.404L8.74 15.35l-.09.918 3.327.918.016-.002 3.344-.93.318-3.725h-2.92l-.159-1.804h3.292l.213-3.13L18.59 4.91z' } }],
    },
  },
  {
    name: 'SQL',
    icon: {
      viewBox: '0 0 24 24',
      className: 'w-8 h-8 mx-auto mb-2 text-indigo-500',
      svgProps: { fill: 'currentColor' },
      elements: [{ type: 'path', props: { d: 'M12 2C6.48 2 2 4.69 2 8s4.48 6 10 6 10-2.69 10-6-4.48-6-10-6zm0 18c-4.42 0-8-1.79-8-4v-3.33c1.45.99 4.47 1.33 8 1.33s6.55-.34 8-1.33V16c0 2.21-3.58 4-8 4zm0-10c-4.42 0-8-1.79-8-4s3.58-4 8-4 8 1.79 8 4-3.58 4-8 4z' } }],
    },
  },
  // Frontend
  {
    name: 'TypeScript',
    icon: {
      viewBox: '0 0 24 24',
      className: 'w-8 h-8 mx-auto mb-2 text-blue-600',
      svgProps: { fill: 'currentColor' },
      elements: [{ type: 'path', props: { d: 'M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.88 17.032V13.2h3.36v1.128h-2.232v1.536h2.1v1.128h-2.1v1.56h2.232v1.128H9.38zm5.04-4.824c1.128 0 1.968.144 2.52.408l.384-1.464c-.624-.288-1.536-.504-2.88-.504-2.4 0-4.008 1.2-4.008 3.24 0 2.04 1.488 3.144 3.96 3.144 2.304 0 3.312-.912 3.312-2.16 0-1.152-.72-1.68-1.92-1.92l-1.392-.312c-.528-.12-.744-.312-.744-.648 0-.312.24-.528.72-.528.48 0 .888.168 1.2.336l.336-1.128c-.336-.144-.792-.288-1.512-.288-.984 0-1.68.456-1.68 1.224 0 .72.504 1.104 1.584 1.344l1.32.288c.6.144.84.36.84.696 0 .432-.336.696-.864.696-.6 0-1.128-.216-1.488-.456l-.384 1.152c.48.264 1.176.456 2.04.456 1.584 0 2.592-.744 2.592-1.968 0-1.536-1.152-2.304-3.144-2.304h-.24z' } }],
    },
  },
  {
    name: 'Tailwind CSS',
    icon: {
      viewBox: '0 0 24 24',
      className: 'w-8 h-8 mx-auto mb-2 text-teal-500',
      svgProps: { fill: 'currentColor' },
      elements: [{ type: 'path', props: { d: 'M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z' } }],
    },
  },
  {
    name: 'Redux',
    icon: {
      viewBox: '0 0 24 24',
      className: 'w-8 h-8 mx-auto mb-2 text-purple-600',
      svgProps: { fill: 'currentColor' },
      elements: [{ type: 'path', props: { d: 'M11.185 15.311c-1.246 1.446-2.213 2.126-3.722 2.126-1.684 0-2.82-1.054-2.82-2.522 0-1.834 1.344-2.82 3.422-3.14l1.01-.132c.187-.024.258-.108.258-.234 0-.21-.186-.336-.575-.336-.504 0-1.033.21-1.465.725l-1.344-.937c.745-.96 1.963-1.536 3.287-1.536 1.758 0 2.946 1.054 2.946 2.447 0 .937-.41 1.716-1.247 2.2l-1.12.66c-.36.21-.432.384-.432.6 0 .313.21.48.552.48.528 0 1.104-.336 1.633-1.126l1.32.937zM21.13 14.73c0 2.257-1.585 3.552-4.128 3.552-2.52 0-4.104-1.295-4.104-3.528 0-2.256 1.584-3.552 4.104-3.552s4.128 1.296 4.128 3.528zm-2.327 0c0-1.032-.672-1.776-1.8-1.776s-1.8.744-1.8 1.776c0 1.056.672 1.776 1.8 1.776s1.8-.72 1.8-1.776z' } }],
    },
  },
  // Tools & Platforms
  {
    name: 'Git',
    icon: {
      viewBox: '0 0 24 24',
      className: 'w-8 h-8 mx-auto mb-2 text-red-600',
      svgProps: { fill: 'currentColor' },
      elements: [{ type: 'path', props: { d: 'M22.523 8.893l-6.273-6.273c-.56-.56-1.468-.56-2.028 0l-1.137 1.137 3.09 3.09-.328.328-3.09-3.09-8.484 8.484 3.09 3.09-.327.327-3.09-3.09-1.138 1.138c-.56.56-.56 1.468 0 2.028l6.273 6.273c.56.56 1.468.56 2.028 0l9.648-9.648c.56-.56.56-1.467 0-2.027zM14.828 14c-.414 0-.75-.336-.75-.75s.336-.75.75-.75.75.336.75.75-.336.75-.75.75zm-1.5-1.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75.336-.75.75-.75.75.336.75.75zm1.5-1.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75.75.336.75.75-.336.75-.75.75zm3 0c-.414 0-.75-.336-.75-.75s.336-.75.75-.75.75.336.75.75-.336.75-.75.75zm-1.5-1.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75.336-.75.75-.75.75.336.75.75z' } }],
    },
  },
  {
    name: 'GitHub',
    icon: {
      viewBox: '0 0 24 24',
      className: 'w-8 h-8 mx-auto mb-2 text-gray-800',
      svgProps: { fill: 'currentColor' },
      elements: [{ type: 'path', props: { fillRule: 'evenodd', d: 'M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z', clipRule: 'evenodd' } }],
    },
  },
  {
    name: 'Postman',
    icon: {
      viewBox: '0 0 24 24',
      className: 'w-8 h-8 mx-auto mb-2 text-orange-500',
      svgProps: { fill: 'currentColor' },
      elements: [{ type: 'path', props: { d: 'M20.882 12.724c.03.202.046.408.046.618C20.928 17.58 16.92 21.6 12 21.6c-4.92 0-8.928-4.02-8.928-8.258 0-.21.016-.416.046-.618.06-.416.15-.812.27-1.188L12 18l8.612-6.464c.26.376.19.772.27 1.188zM12 2.4c-4.08 0-7.536 2.7-8.64 6.36l8.64 6.48 8.64-6.48C19.536 5.1 16.08 2.4 12 2.4z' } }],
    },
  },
  {
    name: 'Vercel',
    icon: {
      viewBox: '0 0 24 24',
      className: 'w-8 h-8 mx-auto mb-2 text-black',
      svgProps: { fill: 'currentColor' },
      elements: [{ type: 'path', props: { d: 'M12 2L2 22h20L12 2z' } }],
    },
  },
  {
    name: 'Docker',
    icon: {
      viewBox: '0 0 24 24',
      className: 'w-8 h-8 mx-auto mb-2 text-blue-400',
      svgProps: { fill: 'currentColor' },
      elements: [{ type: 'path', props: { d: 'M22.012 12.871c-.035.795-.08 1.583-.135 2.365a.692.692 0 0 1-.689.635H2.812a.692.692 0 0 1-.689-.635c-.055-.782-.1-1.57-.135-2.365-.008-.18.01-.36.05-.536.216-.92.68-1.78 1.34-2.52C4.545 8.442 5.952 7.4 8.28 6.945c1.43-.28 2.92-.358 4.38-.223 1.52.14 2.98.534 4.31 1.25.99.53 1.83 1.29 2.51 2.27.39.55.7 1.17.91 1.83.05.15.07.3.07.45v0zm-1.05-1.99c-.2-.62-.48-1.2-.84-1.71-.62-.9-1.4-1.59-2.35-2.07-1.25-.65-2.61-1.01-4.01-1.14-1.37-.12-2.76-.05-4.1.2-2.19.42-3.51 1.39-4.59 2.68-.62.75-1.04 1.57-1.25 2.48h19.14v-.44zm-15.68 5.75H4.1v1.18h1.18v-1.18zm2.36 0H6.46v1.18h1.18v-1.18zm2.36 0H8.82v1.18h1.18v-1.18zm2.36 0h-1.18v1.18h1.18v-1.18zm2.36 0h-1.18v1.18h1.18v-1.18z' } }],
    },
  },
  {
    name: 'Firebase',
    icon: {
      viewBox: '0 0 24 24',
      className: 'w-8 h-8 mx-auto mb-2 text-yellow-400',
      svgProps: { fill: 'currentColor' },
      elements: [{ type: 'path', props: { d: 'M3.4,18.1l6.4-14.8c0.3-0.8,1.5-0.8,1.8,0l6.4,14.8c0.3,0.7-0.2,1.5-1,1.5H4.3C3.6,19.6,3,18.8,3.4,18.1z M5,18.2h14L12,5.2L5,18.2z M12,14.6l-2.4,5.9c-0.2,0.5,0.4,1,0.9,0.7l2.8-1.8c0.4-0.3,1-0.3,1.4,0l2.8,1.8c0.5,0.3,1.1-0.2,0.9-0.7l-2.4-5.9 C12.6,13.8,11.4,13.8,12,14.6z' } }],
    },
  },
];