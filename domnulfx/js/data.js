var loves = [{
        name: "Ideas"
    },
    {
        name: "Web Development"
    },
    {
        name: "Music"
    },
    {
        name: "Microsoft's .NET"
    },
    {
        name: "Unconventional Learning"
    },
    {
        name: "JavaScript"
    },
    {
        name: "Photography"
    },
    {
        name: "Good Books"
    },
    {
        name: "Movies"
    },
    {
        name: "Product Hunting"
    },
];

var socialLinks = [{
        url: "https://linktr.ee/monsieurfx",
        icon: "fa-globe",
        title: "Everything"
    },
    {
        url: "https://www.linkedin.com/in/marianfx/",
        icon: "fa-linkedin",
        title: "Linkedin"
    },
    {
        url: "https://github.com/marianfx",
        icon: "fa-github",
        title: "Github"
    },
    {
        url: "https://twitter.com/fxsays",
        icon: "fa-twitter",
        title: "Twitter"
    },
    {
        url: "https://www.instagram.com/monsieurfx",
        icon: "fa-instagram",
        title: "Instagram"
    }
];

var age = getAge(1996, 8, 4);
var infos = [{
        title: "Name",
        value: "Marian Focșa (FX)"
    },
    {
        title: "Email",
        value: '<a href="mailto:contact@marianfocsa.info">contact@marianfocsa.info</a>'
    },
    {
        title: "Phone",
        value: "+40 741-579-***"
    },
    {
        title: "Date of birth",
        value: '<a href="http://whathappenedinmybirthyear.com/" target="_black">04 Aug 1996 (' + age + ' years)</a>'
    },
    {
        title: "Address",
        value: "Iași, România"
    },
    {
        title: "Nationality",
        value: "Român"
    },
    {
        title: "Languages",
        value: "Română, English"
    },
];
var contactData = {
    address: `Iași, România`,
    phone: "+40 741-579-***",
    mails: ["contact@marianfocsa.info", "marian.focsa@kireygroup.com"],
    whentocontact: ["Week: 09:00 AM - 19:00 PM", "Weekend: 11 AM - 2 PM"],
    messengerLink: "https://m.me/marian.fx"
};
var profiFile = {
    description: "Sassy software enthusiast with great skills of communication, attention to details & architectural thinking. Based on my fast learning algorithm and team choreography understanding, I'm looking forward to increasing my software engineering skills and growing myself into the better developer by tackling difficult projects and coming front with innovative solutions. Open-minded, I'll be always looking for a new challenge to take on.",
    links: [
        {
            title: "Linkedin (Web)",
            link: "https://www.linkedin.com/in/marianfx/"
        },
        {
            title: "Europass (PDF, full)",
            link: "/files/CV.Marian.Focsa.EN.pdf"
        },
        {
            title: "Linkedin (PDF, short)",
            link: "/files/CV.SHORT.Marian.Focsa.EN.pdf"
        }
    ]
};

var interestsIntro = {
    description: '"We don\'t read and write poetry because it\'s cute. We read and write poetry because we are members of the human race. And the human race is filled with passion. And medicine, law, business, engineering, these are noble pursuits and necessary to sustain life. But poetry, beauty, romance, love, these are what we stay alive for."',
    caption: "- Robin Williams in ‘Dead Poets Society’"
};

var interestsData = [{
        title: "Movies",
        link: "https://www.taste.io/users/monsieurfx",
        icon: "fa-film"
    },
    {
        title: "Music",
        link: "https://open.spotify.com/user/marianfx69?si=vJS66F5pRmmoYvJ4SlqqdQ",
        icon: "fa-music"
    },
    {
        title: "Books",
        link: "http://goodreads.com/marianfx",
        icon: "fa-book"
    },
    {
        title: "Coffee",
        link: "https://www.ko-fi.com/monsieurfx",
        icon: "fa-coffee"
    },
    {
        title: "Money",
        link: "http://paypal.me/marianfx",
        icon: "fa-money"
    },
    {
        title: "Photography",
        link: "https://gurushots.com/monsieurfx",
        icon: "fa-photo"
    },
    {
        title: "Art",
        link: "https://www.artstation.com/artist/fxmarian/likes",
        icon: "fa-paint-brush"
    },
    {
        title: "Humour",
        link: "http://classicprogrammerpaintings.com/",
        icon: "fa-graduation-cap"
    },
    {
        title: "Video Games",
        link: "https://keeptrackofmygames.com/users/marianfx69",
        icon: "fa-gamepad"
    },
    {
        title: "Shopping",
        link: "http://www.asos.com",
        icon: "fa-shopping-bag"
    },
];

var cards = [
    {
        title: "Professional Skills",
        data: [
            {
                title: "Web Development",
                value: 95
            },
            {
                title: ".NET Development",
                value: 93
            },
            {
                title: "OOP / <a target='_blank' href='https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)'>S.O.L.I.D.</a> Programming.",
                value: 93
            },
            {
                title: "Front-End Development",
                value: 83
            },
            {
                title: "Databases / SQL",
                value: 75
            },
            {
                title: "Data Structures &amp; Algorithms",
                value: 70
            }
        ]
    },
    {
        title: "Personal Skills",
        data: [{
                title: "Confidence",
                value: 90
            },
            {
                title: "Organizational Skills Suite",
                value: 88
            },
            {
                title: "Attention to Details",
                value: 85
            },
            {
                title: "Architectural Thinking",
                value: 75
            },
            {
                title: "Fast Learning algorithm",
                value: 75
            },
            {
                title: "Leadership",
                value: 75
            },
            {
                title: "Communication",
                value: 69
            },
            {
                title: "Team Coreography",
                value: 65
            }
        ]
    },
    {
        title: "Technologies Mastered",
        data: [{
                title: "ASP.NET (+Core) & Frameworks",
                value: 92,
                tooltip: "Includes ASP.NET MVC, ASP.NET Web API, .NET Core alternatives and many Nu-Get libraries for any usecase"
            },
            {
                title: "JS / CSS & Frameworks",
                value: 80,
                tooltip: "Includes jQuery, Angular (2+), Vue.JS, Bootstrap, Material Design, Chart.js and many other smaller packages for any usecase"
            },
            {
                title: "Databases / ORMs / Any",
                value: 82,
                tooltip: "Includes T-SQL & PL/SQL knowledge, advanced query writing, and most of all Entity Framework proeficiency (and extras like EFPlus, Linq); also other query-builder like libs"
            },
            {
                title: "Agile & Customs",
                value: 70
            },
            {
                title: "Async programming",
                value: 70
            },
            {
                title: ".NET Framework",
                value: 69,
                tooltip: "Refers to other .NET Framework knowledge, like WCF, WFA, WPF"
            },
            {
                title: "Node.js & Frameworks",
                value: 60,
                tooltip: "Never used in professional environment, only as test-playground"
            },
            {
                title: "Functional Programming",
                value: 60,
                tooltip: "Applied with JavaScript mostly, and a long time ago with Python"
            },
            {
                title: "Regular Expressions",
                value: 50,
                tooltip: "Includes basic knowledge, mostly used when searching in files and when validating data"
            },
        ]
    },
    {
        title: "Languages (Programming)",
        data: [{
                title: "C#",
                value: 95
            },
            {
                title: "JavaScript (ES6+ +/- TypeScript)",
                value: 88
            },
            {
                title: "SQL (PL/SQL, T-SQL, MySQL)",
                value: 80
            },
            {
                title: "VB.NET",
                value: 50
            },
            {
                title: "Python",
                value: 50
            },
            {
                title: "C/C++",
                value: 50
            },
            {
                title: "Java",
                value: 50
            },
        ]
    },
];

var firstJobYear = 2015;
var jobs = [{
        title: "🍹 Lead Software Developer",
        employer: "Kirey Group",
        period: "Aug. 2017 - Present (?)",
        description: `Team leader/lead developer of a continuously growing team, working with a tech-stack floating around
        .NET (Core) and Angular, collaborating with clients and managers from multiple countries.

        <br/><br/>
        <b>Related projects:</b> 
            <a href="#project-15">Promis - Oil&Gas PM</a>,
            <a href="#project-20">Risk Asset Manager</a>
        <br/>
        <b>Frameworks:</b> .NET Framework / Core, ASP.NET (Core) MVC / WebApi, Entity Framework (Core), Angular, MSUnit
        <br/>
        <b>Languages:</b> C#, TypeScript, JavaScript, LINQ, T-SQL flavor, MySQL flavor
        <br/>
        <b>Environment:</b> Visual Studio, Visual Studio Code, SQL Server Management Studio, DBeaver, GIT (Bitbucket), SVN (Tortoise), Postman, Jira, Citrix Workspace
        <br/>
        <b>Other:</b> HTML, CSS, jQuery, Chart.JS, Angular Material, Bootstrap, ASP.NET Core DI, Autofac, Enterprise Library, Automapper, EPPlus (Excel), NPOI (Excel), EFPlus (batch queries), SqlKata (query builder), PDFSharp, SSO`,
        tags: ["Leadership", "ASP.NET Core", "C#", "Architecture", "Angular"]
    },
    {
        title: "🍷 .NET Software Developer",
        employer: "KireyEst",
        period: "Oct. 2015 - Jul. 2017 (<2 years)",
        description: `Worked part-time, while also studying at university, alongside both junior and experienced developers, on a various set of technologies, in order to gain experience.

        <br/><br/>
        <b>Related projects:</b> 
            <a href="#project-1">Anti-fraud - Fraud & Risk Management</a>,
            <a href="#project-4">"Vittoria's Secrets" - Automated Tests & Tools</a>,
            <a href="#project-8">""Product Factory" - Banking Product Management</a>
        <br/>
        <b>Frameworks:</b> .NET Framework, ASP.NET WebForms, WPF (MVVM), Entity Framework, Spring.NET, Telerik
        <br/>
        <b>Languages:</b> C#, VB.NET, T-SQL flavor, LINQ, XAML
        <br/>
        <b>Environment:</b> Visual Studio, SQL Server Management Studio, TFS, SVN (Tortoise), Citrix
        <br/>
        <b>Other:</b> HTML, CSS, jQuery, Bootstrap`,
        tags: ["C# / VB.NET", "ASP.NET", ".NET Framework", "WPF - MVVM", "Team Work"]
    },
    {
        title: "🍼 .NET Intern",
        employer: "KireyEst",
        period: "Jul. 2015 - Sep. 2015 (3 months)",
        description: `Trained by a supervisor in a long list of .NET Technologies by realizing small projects (enum: C#, VB.NET, ASP.NET WebForms, ASP.NET MVC, ADO.NET, Entity Framework, WPF – MVVM, WFC, Spring.NET, T-SQL, Javascript & jQuery, HTML, CSS...).`,
        tags: ["Training"]
    }
];

var edus = [
    {
        institution: "🌞 Udemy - Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)",
        title: '<a href="http://ude.my/UC-7PPSDK51" target="_blank">Certificate</a>',
        period: "Sep. 2019 (1 month)",
        description: `I took this complete course about Vue.js in order to prepare for a set of work-related projects and to keep up with the ongoing progress of front-end technologies. Coming from an Angular background, many terms here are familiar; as a result, it was easy to learn and interesting to compare the two tools.
        <br/>This course is presented by <a href="https://www.udemy.com/user/maximilian-schwarzmuller/" target="_blank">Maximilian Schwarzmüller</a>, the same awesome person from which I learned Angular. All problems tackled in the course can be found on my <a href="https://github.com/marianfx/vue-udemy" target="_blank">GitHub</a>.`,
        tags: ["DevOps"]
    },
    {
        institution: "🌞 Udemy - DevOps Essentials",
        title: '<a href="http://ude.my/UC-NY1A7VGY" target="_blank">Certificate</a>',
        period: "Sep. 2019 (1 month)",
        description: `I took this course in order to learn the core notion of what DevOps ecosystem means. It is presented by The Linux Academy.`,
        tags: ["DevOps"]
    },
    {
        institution: "🌞 Udemy - Agile Project Management: Scrum Step by Step",
        title: '<a href="http://ude.my/UC-30XT1MAU" target="_blank">Certificate</a>',
        period: "Aug. 2019 (1 month)",
        description: `The followup to "Scrum Certification Prep + Scrum Master + Agile Scrum Training". I learned more details about Scrum Artifacts, member roles, and techniques in order to properly apply Scrum in realworld scenarios.`,
        tags: ["Agile", "Scrum"]
    },
    {
        institution: "🌞 Udemy - Angular 8 (Angular 2+) - The Complete Guide",
        title: '<a href="http://ude.my/UC-4GREQAHJ" target="_blank">Certificate</a>',
        period: "JuL. 2019 (1 month)",
        description: `I took this course after already working with Angular a few months, for rooting my knowledge on the subject. This complete guide is presented by Maximilian Schwarzmüller. <br/>
        All problems tackled in the course can be found on my <a href="https://github.com/marianfx/ng-udemy-files" target="_blank">GitHub</a>.`,
        tags: ["Angular"]
    },
    {
        institution: "🌞 Udemy - Scrum Certification Prep + Scrum Master + Agile Scrum Training",
        title: '<a href="http://ude.my/UC-SOSRGIMB" target="_blank">Certificate</a>',
        period: "Jun. 2019 (1 month)",
        description: `I took this course in order to clarify my notions about Agile methodologies and the Scrum framework. Throughout the course, I learned about the Scrum Theory, Scrum Team Roles, Scrum Events, Scrum Artifacts, Scrum of Scrums, with practical exercises and questions.`,
        tags: ["Agile", "Scrum", "Scrum Master"]
    },
    {
        institution: "🎓 Faculty of Computer Science, „Alexandru Ioan Cuza” University, Iași",
        title: "!Bachelor's Degree, Computer Science",
        period: "2014 - 2017 (3 years)",
        description: `Status: finished, no license.<br/> 
        Three years of learning more or less useful knowledge (presented in a more or less optimized fashion), meeting new people and discovering new ideas about my future self. Topics studied added as tags.`,
        tags: ["Web Technologies", "Cloud Computing", ".NET", ".NET Advanced", "OOP", "Programming Engineering", "Computer Networks", "Databases &amp; DBMS Practice", "Operating Systems - Linux", "Python", "Game design &amp; Development", "Computer Graphics", "Regular Expressions / Formal Languages", "Mathematics", "Logics for Computer Science", "Machine Learning", "Artificial Intelligence", "Data Structures", "Algorithms Design", "Java"]
    },
    {
        institution: "🌞 SoloLearn - JavaScript Course",
        title: '<a href="https://www.sololearn.com/Profile/1229632/" target="_blank">Certificate of Completion</a>',
        period: "Jun. 2017 (1 month)",
        description: ``,
        tags: ["JavaScript"]
    },
    {
        institution: "🌞 SoloLearn - HTML Fundamentals",
        title: '<a href="https://www.sololearn.com/Profile/1229632/" target="_blank">Certificate of Completion</a>',
        period: "Feb. 2017 (1 month)",
        description: ``,
        tags: ["HTML", "HTML5"]
    },
    {
        institution: "🌞 SoloLearn - Python 3 Course",
        title: '<a href="https://www.sololearn.com/Profile/1229632/" target="_blank">Certificate of Completion</a>',
        period: "Jan. 2017 (1 month)",
        description: ``,
        tags: ["Python", "Python 3"]
    },
    {
        institution: "🌞 SoloLearn - C# Course",
        title: '<a href="https://www.sololearn.com/Profile/1229632/" target="_blank">Certificate of Completion</a>',
        period: "Jul. 2017 (1 month)",
        description: ``,
        tags: ["C#"]
    },
    {
        institution: "🎒 „Ștefan Procopiu” High-School, Vaslui",
        title: "High School Diploma in Mathematics and Computer Science",
        period: "2010 - 2014 (4 years)",
        description: `Also obtained <b>Professional Certificate</b>, <b>Baccalaureate Diploma</b> and <b>English Certificate</b>. 
            <hr>
            Baccalaureate - Jun 2014. Avg: <b>9.86</b> <br/> 
            ⭐ Mathematics: <b>10</b> <br/>
            ⭐ Computer Science (C/C++) : <b>10</b> <br/>
            ⭐ Romanian Language &amp; Literature: <b>9.6</b>.`,
        tags: ["Mathematics", "Computer Science", "Romanian Language &amp; Literature", "English Language"]
    },
    {
        institution: "👶 Elementary School &amp; Secondary Education",
        title: "Life++",
        period: "2002 - 2010 (8 years)",
        description: `Does anybody remember something from this forgotten times?`,
        tags: ["Life Experience"]
    }
];

var contributors = [{
    nick: "groza",
    name: "Vasile",
    url: "https://www.linkedin.com/in/vasile-groza-553a5911b/"
}, {
    nick: "dorin",
    name: "Dorin",
    url: "https://www.linkedin.com/in/dorin-miron/",
}, {
    nick: "cezy",
    name: "Cezara",
    url: "https://github.com/Chinmaiy"
}, {
    nick: "ioana",
    name: "Ioana",
    url: "https://www.linkedin.com/in/ioana-bogdan-a149a7107/"
}, {
    nick: "marta",
    name: "Marta",
    url: "https://github.com/martafil"
}, {
    nick: "alberto",
    name: "Alberto",
    url: "https://www.linkedin.com/in/alberto-cieri-a152b0121/"
}, {
    nick: "bianca",
    name: "Bianca",
    url: "https://www.linkedin.com/in/bianca-roxana-coman-009ab1121/"
}, {
    nick: "tifui",
    name: "Vali T.",
    url: "https://www.linkedin.com/in/tifuivali/"
}, {
    nick: "vali",
    name: "Vali",
    url: "https://github.com/valicolibaba"
}];

var cLinks = {};
contributors.forEach(element => {
    cLinks[element.nick] = "<a href='" + element.url + "'>" + element.name + "</a>"
});

/* All projects AREA */
var allProjects = [
    {
        id: 19,
        category: "side-projects",
        time: "Aug. 2018 - Present",
        type: "Side Project / Solo / In Progress",
        title: "Replay.NET - Streaming Playground",
        description: "Web application which tries to integrate many existing movie engines (IMDb, Trakt, Taste) for creating awesome movie / one-place streaming experience.",
        url: {
            link: "javascript:void()",
            title: "Private work"
        },
        image: "./img/portfolio/replay.jpg"
    },
    {
        id: 20,
        category: "work-projects",
        time: "May 2018 - Present",
        type: "Work / Finished",
        title: "Risk Asset Manager",
        description: "Web application, reengineered after an old Desktop app, with ASP.NET Core &amp; Angular, which does banking workflows, algorithms and management of assets.",
        url: {
            link: "javascript:void()",
            title: "Private work"
        },
        image: "./img/portfolio/ramnet.jpg"
    },
    {
        id: 18,
        category: "side-projects",
        time: "Nov. 2018 - Dec. 2018",
        type: "Side Project / Solo / Finished",
        title: "Autofiller - Gurushots Automation Bot",
        description: "Created as a side project in order to test if Gurushots' voting and friend search can be automated using Puppeteer and .NET Core",
        url: {
            link: "javascript:void()",
            title: "Private work"
        },
        image: "./img/portfolio/gurushots.jpg"
    }, 
    {
        id: 16,
        category: "side-projects",
        time: "Nov. 2017 - Nov. 2018",
        type: "Side Project / Solo / Discontinued",
        title: "LIFR - Instagram Manager",
        description: "Web, Node.JS based application for managing Instagram account - access to followers, unfollowers, history, automated tasks. Abandoned, but interesting",
        url: {
            link: "javascript:void()",
            title: "Private work"
        },
        image: "./img/portfolio/lifr.png"
    },
    {
        id: 15,
        category: "work-projects",
        time: "Aug. 2017 - Apr. 2018",
        type: "Work / Finished",
        title: "Promis - Oil&Gas Project Management",
        description: "Web application, ASP.NET MVC &amp; (*FE libs) of which purpose is the management of huge oil&gas project's construction and resources",
        url: {
            link: "javascript:void()",
            title: "Private work"
        },
        image: "./img/portfolio/promisnet.jpg"
    },
    {
        id: 8,
        category: "work-projects",
        time: "Nov. 2016 - Aug. 2017",
        type: "Work / Finished",
        title: "'Product Factory' - Banking product management",
        description: "Developed WPF Desktop application, with an internal MVVM framework, following best practices, adding ideas and testing.",
        url: {
            link: "javascript:void()",
            title: "Private work"
        },
        image: "./img/portfolio/product-placement.jpg"
    },
    {
        id: 14,
        category: "uni-projects",
        time: "Nov. 2016 - May 2017",
        type: "Uni / + " + cLinks.cezy,
        title: "Learning Curve - University",
        description: `This 'project' lists all the interesting projects worked on in years 2 and 3 of university:
        <a href='https://bitbucket.org/javafxteam/cn-labs'>Numerical Calculus</a>,
        <a href='https://bitbucket.org/javafxteam/cg-labs'>Computer Graphics</a>,
        <a href='https://bitbucket.org/marianfx/cc-labs'>Cloud Computing</a>,
        <a href='https://github.com/marianfx/python-labs'>Python</a>,
        <a href='https://github.com/marianfx/ai-labs'>Artificial Intelligence</a>,
        <a href='https://github.com/marianfx/dotnet-core-labs'>.NET Core</a>,
        `,
        url: {
            link: "javascript:void()",
            title: "Link in description"
        },
        image: "./img/portfolio/labs-cn.jpg"
    }, 
    {
        id: 12,
        category: "uni-projects",
        time: "Jan 2017",
        type: "Uni / + " + cLinks.ioana + ", " + cLinks.cezy + ", " + cLinks.marta + ", " + cLinks.alberto + ", " + cLinks.bianca + ", " + cLinks.tifui + ", " + cLinks.vali,
        title: "Solution1 - .NET Core iteration & improvement of Fun Web",
        description: "Fun Web alternative. Replaces multiplayer concepts with a strong assignments / copyright /grades management.",
        url: {
            link: "https://github.com/tabby336/Solution1",
            title: "Check Github"
        },
        image: "./img/portfolio/solution1.jpg"
    }, 
    {
        id: 9,
        category: "side-projects",
        time: "Jan 2017",
        type: "Side Project / Solo",
        title: "ID3 Helper (Machine Learning) - Web / Android",
        description: "Based on Cordova engine, this is a helper for the ID3 Machine Learning Algorithm, which can be used on web or mobile.",
        url: {
            link: "https://github.com/marianfx/com.fx.Id3Helper",
            title: "Check Github"
        },
        image: "./img/portfolio/id3-ml.png"
    },
    {
        id: 17,
        category: "work-projects",
        time: "Jan. 2018 - Present",
        type: "Work Project / Continuous",
        title: "'Problem solver' - LeetCode, CodinGame",
        description: "In my free time, I enjoy riddles on problem-solving websites. This project contains solutions for <a href='https://github.com/marianfx/solver-codingame'>CodinGame</a> and <a href='https://github.com/marianfx/solver-leetcode'>Leetcode</a>.",
        url: {
            link: "javascript:void()",
            title: "Links in description"
        },
        image: "./img/portfolio/leetcode.png"
    },
    {
        id: 4,
        category: "work-projects",
        time: "Jun. 2016 - Nov. 2016",
        type: "Work / Finished",
        title: "'Vittoria's Secrets' - Automated Tests & Tools",
        description: "Developed tools for the automated testing of a banking website (C#); also executed and maintained a set of tests.",
        url: {
            link: "javascript:void()",
            title: "Private work"
        },
        image: "./img/portfolio/tests.jpg"
    },
    {
        id: 1,
        category: "work-projects",
        time: "Oct. 2015 - Jun. 2016",
        type: "Work / Finished",
        title: "'Anti-fraud' - Fraud Management System",
        description: "Web application /w ASP.NET Web Forms. Entered the project when it was in progress and developed different functionalities.",
        url: {
            link: "javascript:void()",
            title: "Private work"
        },
        image: "./img/portfolio/anti-fraud.jpg"
    },
    {
        id: 2,
        category: "side-projects",
        time: "Jan. 2016",
        type: "Side Project / Solo",
        title: "Change Notifier - Desktop Node.JS &amp; Electron Application",
        description: "Built with Electron, capable of running diffs on a webpage and show you only what's changed, using native notifications.",
        url: {
            link: "https://github.com/marianfx/change-notifier",
            title: "Check Github"
        },
        image: "./img/portfolio/change-notifier.jpg"
    },
    {
        id: 3,
        category: "uni-projects",
        time: "Mar. 2016 - Jun. 2016",
        type: "Uni / + " + cLinks.groza + ", " + cLinks.cezy + ", " + cLinks.dorin,
        title: "Fun Web - Node.JS based Learning &amp; Multiplayer WebApp",
        description: "Fun educational app for learning courses, gaining XP and then competing in multiplayer Q&A competitions.",
        url: {
            link: "https://github.com/marianfx/team-7-fun-web",
            title: "Check Github"
        },
        image: "./img/portfolio/fun-web.png"
    }
];

var numbersData = [{
        title: "Projects",
        count: allProjects.length
    },
    {
        title: "Cups of coffee",
        count: Infinity
    },
    {
        title: "Years of experience",
        count: (new Date().getFullYear() - firstJobYear)
    },
    {
        title: "Glasses of wine",
        count: "1996"
    },
];


/* Helpful functions */
function getAge(year, month, day) {
    var today = new Date();
    var birthDay = new Date(year, month - 1, day);
    var age = today.getFullYear() - birthDay.getFullYear();
    var m = today.getMonth() - birthDay.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDay.getDate()))
        age--;
    return age;
}