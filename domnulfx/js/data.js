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
        url: "https://linkkle.com/monsieurfx",
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
        value: '<a href="mailto:marian.focsa@outlook.com">marian.focsa@outlook.com</a>'
    },
    {
        title: "Phone",
        value: "(+40) 749-936-***"
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
    phone: "+40 749-936-***",
    mails: ["marian.focsa@outlook.com", "marian.focsa@kireygroup.com"],
    whentocontact: ["Week: 09:00 AM - 19:00 PM", "Weekend: 11 AM - 2 PM"],
    messengerLink: "https://m.me/marian.fx"
};
var profiFile = {
    description: "Sassy software enthusiast with great skills of communication, attention to details & architectural thinking. Based on my fast learning algorithm and team choreography understanding, I'm looking forward to increasing my software engineering skills and growing myself into the better developer. Open minded, I'll be always looking for a new challenge to take on.",
    links: [
        {
            title: "Linkedin (Web)",
            link: "https://www.linkedin.com/in/marianfx/"
        },
        {
            title: "Europass (PDF)",
            link: "/files/CV-ESP-Europass-20190709-Focsa_Marian-EN.pdf"
        },
        {
            title: "Linkedin format (PDF)",
            link: "/files/cv_pro.pdf"
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
                tooltip: "Includes jQuery, Angular (2+), Bootstrap, Material Design, Chart.js and many other smaller packages for any usecase"
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
        title: "🍹 Software Developer",
        employer: "Kirey Group",
        period: "Aug. 2017 - Present (?)",
        description: `🎉 2018-2019: Testing social skills and unveiling lead developer techniques. The activity consists of developing a full-stack project, coordinating a team in re-engineering an old finance application with Angular, .NET Core and all the fancy terms, following the Scrum methodology.  <br/> <br/> 
        🎉 2017-2018: Engineered with the help of other experienced people a targeted (oil & gas construction sites) project management application and coordinated, in an Agile manner, a small team to develop the new ASP.NET MVC architecture, following standard patterns, integrating IoC Mechanisms, REST Web APIs, front-end development, Unit Testing and many more.`,
        tags: ["Coordination", "Architecture", "ASP.NET Core", "C#", "EF Core", "ASP.NET MVC", "Entity Framework", "Advanced EF", "DI", "Autofac", "IoC", "Unit Tests", "Angular", "HTML", "CSS", "JS(ES6)", "TS", "Bootstrap", "AJAX", "jQuery", "Chart.js", "Material Design", "MySql", "MSSQL", "Scrum", "Agile", "Visual Studio", "Trello", "Notion", "Jira", "DBeaver"]
    },
    {
        title: "🍷 .NET Developer",
        employer: "KireyEst",
        period: "Oct. 2015 - Jul. 2017 (<2 years)",
        description: `Involved in a wide range of activities, from Desktop applications (WPF) to automated testing and web developing (Asp.NET), working part-time while also studying. ☕`,
        tags: ["C#", "VB.NET", ".NET Framework", "WPF - MVVM", "ASP.NET MVC", "ASP.NET Web Forms", "Entity Framework 6", "LINQ", "T-SQL", "Visual Studio 2015", "SQL Server 2012", "TFS", "Telerik", "Tricks", "Understanding of Teams"]
    },
    {
        title: "🍼 .NET Intern",
        employer: "KireyEst",
        period: "Jul. 2015 - Sep. 2015 (3 months)",
        description: `Trained by a supervisor in a long list of .NET Technologies by realizing small projects (enum: C#, VB.NET, ASP.NET WebForms, ASP.NET MVC, ADO.NET, Entity Framework, WPF – MVVM, WFC, Spring.NET, T-SQL, Javascript & jQuery, HTML, CSS... 😵).`,
        tags: ["C#", "VB.NET", "ASP.NET Web Forms", "ASP.NET MVC", "ADO.NET", "Entity Framework 5", "WPF - MVVM", "WCF", "T-SQL", "HTML", "CSS", "JS", "JQuery", "Visual Studio 2012", "SQL Server 2008 &amp; 2012", "Training"]
    }
];

var edus = [
    {
        institution: "🌞 Udemy - Angular 8 (formerly Angular 2) - The Complete Guide",
        title: '<a href="http://ude.my/UC-4GREQAHJ" target="_blank">Certificate</a>',
        period: "JuL. 2019 (1 month)",
        description: ``,
        tags: ["Angular"]
    },
    {
        institution: "🌞 Udemy - Scrum Certification Prep + Scrum Master + Agile Scrum Training",
        title: '<a href="http://ude.my/UC-SOSRGIMB" target="_blank">Certificate</a>',
        period: "Jun. 2019 (1 month)",
        description: ``,
        tags: ["Agile", "Scrum", "Scrum Master"]
    },
    {
        institution: "🎓 Faculty of Computer Science, „Alexandru Ioan Cuza” University, Iași",
        title: "Bachelor's Degree, Computer Science",
        period: "2014 - 2017 (3 years)",
        description: `Status: finished, no license.<br/> Three years of learning more or less useful knowledge (presented in a
                more or less optimized fashion), meeting new people and discovering new ideas about my future self.`,
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
        category: "side-projects",
        time: "Nov 2018",
        type: "Side Project / Solo / Finished",
        title: "Autofiller - Gurushots Automation Bot",
        description: "Created as a side project in order to test if Gurushots' voting sessions and friend search can be automated using Puppeteer and .NET Core. Private project.",
        url: {
            link: "javascript:void()",
            title: "Private work"
        },
        image: "./img/portfolio/gurushots.jpg"
    },
    {
        category: "side-projects",
        time: "May 2018",
        type: "Side Project / Solo / In Progress",
        title: "Replay.NET - Streaming App Playground",
        description: "A web application which tries to integrate many existing movie engines (IMDb, Trakt, Taste) for creating awesome movie browsing and one-place streaming experience. Includes many technology playgrounds, like ASP.NET Core, scraping and testing with Puppeteer, streaming from http and p2p sources, integrating other existing apps with Electron etc. Private project.",
        url: {
            link: "javascript:void()",
            title: "Private work"
        },
        image: "./img/portfolio/replay.jpg"
    },
    {
        category: "work-projects",
        time: "May. 2018",
        type: "Work / Finished",
        title: "Codename \"AM\" - .NET Core Asset Management Tool",
        description: "Web application, reengineered after an old Desktop app with ASP.NET Core &amp; Angular, which does lots of banking stuff (really complicated). Further details are private.",
        url: {
            link: "javascript:void()",
            title: "Private work"
        },
        image: "./img/portfolio/ramnet.png"
    }, {
        category: "work-projects",
        time: "Jan. 2018",
        type: "Work Project / Continuous",
        title: "Problem killing and training samples",
        description: "Consists mostly of solving, in different ways, problems from LeetCode (a website that approaches different software engineering problems) and training materials.",
        url: {
            link: "https://bitbucket.org/marianfx/kirey-tuts/src/dev-fx/",
            title: "Check repo"
        },
        image: "./img/portfolio/leetcode.png"
    }, {
        category: "side-projects",
        time: "Nov. 2017",
        type: "Side Project / Solo / In Progress",
        title: "LIFR - Instagram Manager",
        description: "Web, Node.JS based application for managing Instagram account - access to followers, unfollowers, history, automated tasks. Private project.",
        url: {
            link: "javascript:void()",
            title: "Private work"
        },
        image: "./img/portfolio/lifr.png"
    },{
        category: "work-projects",
        time: "Aug. 2017",
        type: "Work / Finished",
        title: "Codename \"Promise\" - Oil&Gas Project Management",
        description: "A smart web application, ASP.NET MVC &amp; (*insert many FE libs here) of which sole purpose is the management of huge oil & gas project's construction and resources. Further details are private.",
        url: {
            link: "javascript:void()",
            title: "Private work"
        },
        image: "./img/portfolio/promisnet.jpg"
    },{
        category: "uni-projects",
        time: "May 2017",
        type: "Uni / + " + cLinks.cezy,
        title: "Numerical Calculus - Labs &amp; Assignments",
        description: "Small projects (in Java & C#) that solve different complicated mathematical problems: matrices, aproximations, automated equation solving etc.",
        url: {
            link: "https://bitbucket.org/javafxteam/cn-labs",
            title: "Check repo"
        },
        image: "./img/portfolio/labs-cn.jpg"
    },{
        category: "uni-projects",
        time: "May 2017",
        type: "Uni / + " + cLinks.cezy,
        title: "Computer Graphics - Labs &amp; Assignments",
        description: "Small projects (in C++) that test the 'power' of raw computer graphic engines. Most of them contain lots of mathematics.",
        url: {
            link: "https://bitbucket.org/javafxteam/cg-labs",
            title: "Check repo"
        },
        image: "./img/portfolio/labs-cf.jpg"
    }, {
        category: "uni-projects",
        time: "Jan 2017",
        type: "Uni / Solo",
        title: "Cloud Computing - Labs &amp; Assignments",
        description: "Small projects using different languages - a web youtube mp3 search & download tool, a REST API implemented without a framework, and a websockets collaborative markdown editor.",
        url: {
            link: "https://bitbucket.org/marianfx/cc-labs",
            title: "Check repo"
        },
        image: "./img/portfolio/labs-cloud.jpg"
    }, {
        category: "uni-projects",
        time: "Jan 2017",
        type: "Uni / + " + cLinks.ioana + ", " + cLinks.cezy + ", " + cLinks.marta + ", " + cLinks.alberto + ", " + cLinks.bianca + ", " + cLinks.tifui + ", " + cLinks.vali,
        title: "Solution1 - Web App",
        description: "Next gen/alternative of Fun Web. Replaces multiplayer concepts with a strong assignments uploads/copyrights check / grades management. Check Github for full details.",
        url: {
            link: "https://github.com/tabby336/Solution1",
            title: "Check Github"
        },
        image: "./img/portfolio/solution1.png"
    }, {
        category: "uni-projects",
        time: "Jan 2017",
        type: "Uni / Solo / Labs",
        title: "Python - Labs &amp; Assignments",
        description: "Contains examples of doing many things basic things in Python, including more advanced ones like HTTP content server and Site Image Scraper",
        url: {
            link: "https://github.com/marianfx/python-labs",
            title: "Check Github"
        },
        image: "./img/portfolio/labs-python.png"
    }, {
        category: "side-projects",
        time: "Jan 2017",
        type: "Side Project / Solo",
        title: "ID3 Helper (Machine Learning) - Web / Android",
        description: "Based on Cordova engine, this is a helper for the ID3 Machine Learning Algorithm, which can be used on web or compiled for Android. Check Github for full details.",
        url: {
            link: "https://github.com/marianfx/com.fx.Id3Helper",
            title: "Check Github"
        },
        image: "./img/portfolio/id3-ml.png"
    }, {
        category: "uni-projects",
        time: "Nov. 2016",
        type: "Uni / Solo / Labs",
        title: "Artificial Intelligence - Labs &amp; Assignments",
        description: "Practical implementations of small AI Concents - a simple chatbot, a 4-ways Hanoi solver, A simple bot that plays chess on the Web, and some DBPedia samples.",
        url: {
            link: "https://github.com/marianfx/ai-labs",
            title: "Check Github"
        },
        image: "./img/portfolio/labs-ai.jpg"
    }, {
        category: "uni-projects",
        time: "Nov. 2016",
        type: "Uni / Solo / Labs",
        title: ".NET Core - Labs &amp; Assignments",
        description: "Contains learning material about .NET Core 1.0 / 1.1 - concepts of OOP, LINQ, databases and repositories, and finally webforms (not .NET Core)",
        url: {
            link: "https://github.com/marianfx/dotnet-core-labs",
            title: "Check Github"
        },
        image: "./img/portfolio/labs-netcore.png"
    },
    {
        category: "side-projects",
        time: "Nov. 2016",
        type: "Side Project / Solo / In Progress",
        title: "Codingame - Solved problems",
        description: "Codingame is a competitive website where people can solve different problems, which are presented in the form of games. This project involves solving certain games from the website.",
        url: {
            link: "https://bitbucket.org/fx69/codin-game-csharp",
            title: "Check repo"
        },
        image: "./img/portfolio/codingame.jpg"
    }, {
        category: "uni-projects",
        time: "June, 2016?",
        type: "Uni / + " + cLinks.groza + ", " + cLinks.cezy + ", " + cLinks.dorin,
        title: "Fun Web - Node.JS based Learning &amp; Multiplayer WebApp",
        description: "Fun educational app for learning courses, gaining XP and then competing in multiplayer Q&A competitions. Check Github for full details.",
        url: {
            link: "https://github.com/marianfx/team-7-fun-web",
            title: "Check Github"
        },
        image: "./img/portfolio/fun-web.png"
    },
    {
        category: "side-projects",
        time: "Jan, 2016",
        type: "Side Project / Solo",
        title: "Change Notifier - Desktop Node.JS &amp; Electron Application",
        description: "Built with Electron, capable of running diffs on a webpage and show you only what's changed, using native notifications. Check Github for full details.",
        url: {
            link: "https://github.com/marianfx/change-notifier",
            title: "Check Github"
        },
        image: "./img/portfolio/change-notifier.jpg"
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