function loadData(){
    attachLoves();
    attachSocialLinks();
    attachBasicInfo();
    attachProfessionalProfile();
    attachInterests();
    attachSkills();
    attachSideData();
    attachWorkExperience();
}

function attachLoves(){
    var loves = [
        {
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
            name: "Javascript"
        },
        {
            name: "Good Books"
        },
        {
            name: "Node.Js"
        },
        {
            name: "Movies"
        },
        {
            name: "Product Hunting"
        },
    ];

    _.forEach(loves, function(love, key){
        var element = $('<b' + (key == 0 ? ' class="is-visible"' : '') + '>' + love.name + '</b>');
        $('#whatilove').append(element);
    });
    
}

function attachSocialLinks(){
    var socialLinks = [
        {
            url: "https://www.linkedin.com/in/marianfx/",
            icon: "fa-linkedin",
            title: "Linkedin"
        },
        {
            url: "https://medium.com/@marianfx69",
            icon: "fa-pencil-square",
            title: "Blog"
        },
        {
            url: "https://github.com/marianfx",
            icon: "fa-github",
            title: "Github"
        },
        {
            url: "https://www.facebook.com/marian.fx",
            icon: "fa-facebook",
            title: "Facebook"
        },
        {
            url: "https://www.instagram.com/marianfx/",
            icon: "fa-instagram",
            title: "Instagram"
        },
        {
            url: "https://ro.pinterest.com/fxmarian/",
            icon: "fa-pinterest-p",
            title: "Pinterest"
        },
    ];

    _.forEach(socialLinks, function(sl){
        var element = $('<li><a target="_blank" href="' + sl.url + '" data-toggle="tooltip" data-placement="bottom" title="View my ' + sl.title + '"><i class="fa ' + sl.icon + '" aria-hidden="true"></i></a></li>');
        $('.social-link').append(element);
    });
}

function attachBasicInfo(){
    var infos = [
        {
            title: "Name",
            value: "Marian Focșa (FX)"
        },
        {
            title: "Email",
            value: '<a href="mailto:marian.focsa@outlook.com">marian.focsa@outlook.com</a>'
        },
        {
            title: "Phone",
            value: "(+40) 749-936-026"
        },
        {
            title: "Date of birth",
            value: '<a href="http://whathappenedinmybirthyear.com/" target="_black">04 Aug 1996</a>'
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

    _.forEach(infos, function(info){
        var element = $('<li><span>' + info.title + ':</span> <span class="info">' + info.value + '</span></li>');
        $('.basic-info').append(element);
    });
}

function attachProfessionalProfile(){
    var data = {
        description: "Software enthusiast with great skills of communication, attention to details &amp; architectural thinking. Based on my fast learning algorithm and team choreography understanding, I'm looking forward to increasing my software engineering skills and growing myself into the better developer. Open minded, I'll be always looking for a new challenge to take on.",
        link1: {
            title: "Download Resume",
            link: "#"
        },
        link2: {
            title: "Linkedin",
            link: "https://www.linkedin.com/in/marianfx/"
        }
    };
    var element = $(`<p>` + data.description + `</p>
                    <a class="btn btn-primary" target="_blank" href="` + data.link1.link + `">` + data.link1.title + `</a>
                    <a class="btn btn-default" target="_blank" href="` + data.link2.link + `">` + data.link2.title + `</a>
                    `);
    $('.professional-profile').append(element);
}

function attachInterests(){
    var intro = {
        description: '"We don\'t read and write poetry because it\'s cute. We read and write poetry because we are members of the human race. And the human race is filled with passion. And medicine, law, business, engineering, these are noble pursuits and necessary to sustain life. But poetry, beauty, romance, love, these are what we stay alive for."',
        caption: "- Robin Williams in ‘Dead Poets Society’"
    };

    var data = [
        {
            title: "Movies",
            link: "https://www.taste.io/users/domnulfx",
            icon: "fa-film"
        },
        {
            title: "Music",
            link: "http://open.spotify.com/user/marianfx69",
            icon: "fa-music"
        },
        {
            title: "Books",
            link: "http://goodreads.com/marianfx",
            icon: "fa-book"
        },
        {
            title: "Coffee",
            link: "http://www.kakapo.co/#/",
            icon: "fa-coffee"
        },
        {
            title: "Money",
            link: "http://paypal.me/marianfx",
            icon: "fa-money"
        },
        {
            title: "Photography",
            link: "https://500px.com/marianfx/galleries",
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
    
    $('#interests-description').html(intro.description);
    $('#interests-caption').html(intro.caption);
    
    _.forEach(data, function(info){
        var element = $(`<li>
                            <a target="_blank" href="` + info.link + `">
                                <i class="fa ` + info.icon + `"></i>
                                <span>` + info.title + `</span>
                            </a>
                        </li>`);
        $('#interests-container').append(element);
    });
}

function attachSkills(){
    var cards = [
        {
            title: "Personal Skills",
            data: [
                {
                    title: "Confidence",
                    value: 86
                },
                {
                    title: "Organizational Skills Suite",
                    value: 85
                },
                {
                    title: "Communication",
                    value: 84
                },
                {
                    title: "Leadership",
                    value: 83
                },
                {
                    title: "Attention to Details",
                    value: 82
                },
                {
                    title: "Fast Learning algorithm",
                    value: 82
                },
                {
                    title: "Team Coreography",
                    value: 81
                },
                {
                    title: "Architectural Thinking",
                    value: 80
                },
            ]
        },
        {
            title: "Professional Skills",
            data: [
                {
                    title: "OOP Programming",
                    value: 95
                },
                {
                    title: "<a target='_blank' href='https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)'>S.O.L.I.D.</a> Programming",
                    value: 92
                },
                {
                    title: ".NET Development",
                    value: 90
                },
                {
                    title: "Web Development",
                    value: 85
                },
                {
                    title: "Databases / SQL",
                    value: 82
                },
                {
                    title: "Databases / SQL",
                    value: 82
                },
                {
                    title: "Front-End Development",
                    value: 80
                },
                {
                    title: "Functional Programming",
                    value: 78
                },
                {
                    title: "Data Structures &amp; Algorithms",
                    value: 60
                }
            ]
        },
        {
            title: "Technologies Mastered",
            data: [
                {
                    title: "ASP.NET",
                    value: 90
                },
                {
                    title: "Node.js & Frameworks (Express, Sails, Socket.io, Meteor, Cordova ...)",
                    value: 85
                },
                {
                    title: "ORMs (Entity Framework, Sequelize, Sails Waterline ...)",
                    value: 79
                },
                {
                    title: "JS & Frameworks (jQuery, Bluebird, Angular, React, Webtorrent, Chart.js ...)",
                    value: 76
                },
                {
                    title: "CSS & Frameworks (Bootstrap, Materialize, MDB, Angular Material ...)",
                    value: 74
                },
                {
                    title: "Agile (Scrum with Trello / Zenhub)",
                    value: 73
                },
                {
                    title: ".NET Framework (Console, Library, WFA, WPF, WCF ...)",
                    value: 72
                },
                {
                    title: "Regular Expressions",
                    value: 69
                },
                {
                    title: ".NET Core",
                    value: 50
                },
            ]
        },
        {
            title: "Languages (Programming)",
            data: [
                {
                    title: "C#",
                    value: 95
                },
                {
                    title: "JavaScript (ES6+)(+/- TypeScript)",
                    value: 85
                },
                {
                    title: "SQL (PL/SQL, T-SQL, MySQL)",
                    value: 80
                },
                {
                    title: "C/C++",
                    value: 73
                },
                {
                    title: "Python",
                    value: 71
                },
                {
                    title: "Java",
                    value: 57
                },
                {
                    title: "VB.NET",
                    value: 55
                },
            ]
        },
    ];


    var maxCardsPerRow = 4;
    _.forEach(cards, function(card){
        var container = $(`<div class="progress-block wow fadeInLeft"></div>`);
        _.forEach(card.data, function(data){
            var element = `<div class="single-progressbar">
                            <div class="skill-text">
                                <span>`+ data.title + `</span>
                                <span class="skill-per"></span>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="` + data.value + `" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">
                                </div>
                            </div>
                        </div>`;
            container.append(element);
        });

        var cardContainer = $(`<div class="col-xs-12 col-sm-3">
                                <div class="panel-box">
                                    <h2>` + card.title  + `</h2>
                                    ` + container.prop('outerHTML') + `
                                </div>
                            </div>`);
        $('#skills-container').append(cardContainer);
    });
}

function attachSideData(){
    var data = [
        {
            title: "Projects",
            count: 10
        },
        {
            title: "Cups of coffee",
            count: 6969
        },
    ];

    _.forEach(data, function(d){
        var element = $(`<div class="col-xs-6 col-sm-6">
                            <div class="service-info">
                                <span class="counter">` + d.count + `</span>
                                <h4>` + d.title + `</h4>
                            </div>
                        </div>`);
        $('#side-data-container').append(element);
    });
}

function attachWorkExperience(){
    var jobs = [
        {
            dataposition: "Left",
            title: "🍹 ASP.NET Developer",
            employer: "KireyEst",
            period: "Aug. 2016 - Future (?)",
            description: `The current big thing is the development cycle of a Project Management / Admin Dashsboard Style Application, with <b>ASP.NET MVC</b> Framework at its core, Onion-style architectured, combined with <i>IoC Mechanisms</i>, REST Web APIs and Unit Testing on the back-end, and a beautiful <b>Bootstrap 4</b>, Async-styled interface (using multiple client-side libraries). One does <i>development, coordination and performance improvements</i> on the project and manipulates the time with a customized version of Scrum (big thanks to <b>Trello</b>).`,
            tags: ["C#", "ASP.NET MVC", "Entity Framework 6", "Onion", "Autofac", "DI", "IoC", "Unit Tests", "HTML5", "CSS3", "JS(ES6)", "Bootstrap 4", "AJAX", "jQuery", "Chart.js", "MySql", "Scrum", "Visual Studio 2017", "Trello", "DBeaver", "Coordination", "Architecture"]
        },
        {
            dataposition: "Right",
            title: "🍷 WPF.NET Developer",
            employer: "KireyEst",
            period: "Oct. 2016 - Jul. 2016 (10 months)",
            description: `A WPF desktop project appeared on the Horizon. Learned a good amount of practical skills getting the project from start to the (almost) finish alongside my team, updated my social understanding and team work techniques, discovered a lot of tricks and, maybe the best of it all, became the better me (as a developer).`,
            tags: ["VB.NET", "WPF - MVVM", "Entity Framework 6", "LINQ", "T-SQL", "Visual Studio 2015", "SQL Server 2012", "TFS", "Tricks", "Understanding of Teams"]
        },
        {
            dataposition: "Left",
            title: "🍵 Tester &amp; Tools Supervisor.",
            employer: "KireyEst",
            period: "Jul. 2016 - Sep. 2016 (3 months)",
            description: `During the story, one's activities consisted, for a short period of time, of developing and maintaining an interesting set of testing tools (Telerik-based for a while, then HP-based) and running automated tests on a banking web site.`,
            tags: ["C#", "VBScript", ".NET Framework", "Telerik", "T-SQL", "Visual Studio 2015", "SQL Server 2008", "TFS", "Automation Tester"]
        },
        {
            dataposition: "Right",
            title: "🍻 ASP.NET Developer",
            employer: "KireyEst",
            period: "Oct. 2015 - Jun. 2016 (9 months)",
            description: `The real deal started with the first internal project, an anti-fraud system to facilitate the insurance companies in identifying potential frauds, consisting of an ecosystem of database choreographies, having on top an ASP.NET Web Forms application (meh, but good for starters). Helped a lot in identifying social skills and unveiling new full stack developer techniques.`,
            tags: ["C#", "ASP.NET Web Forms", "Entity Framework 5", "T-SQL", "HTML", "CSS", "JS", "Visual Studio 2015", "SQL Server 2012", "CVS", "Full Stack"]
        },
        {
            dataposition: "Left",
            title: "🍼 .NET Intern",
            employer: "KireyEst",
            period: "Jul. 2015 - Sep. 2015 (3 months)",
            description: `<p>First Internship 🎉🎉🎉</p>
                            <p>Trained by a supervisor in a long list of .NET Technologies by realizing small projects (enum: C#, VB.NET, ASP.NET WebForms, ASP.NET MVC, ADO.NET, Entity Framework, WPF – MVVM, WFC, Spring.NET, T-SQL, Javascript & jQuery, HTML, CSS... 😵).</p>`,
            tags: ["C#", "VB.NET", "ASP.NET Web Forms", "ASP.NET MVC", "ADO.NET", "Entity Framework 5", "WPF - MVVM", "WCF", "T-SQL", "HTML", "CSS", "JS", "JQuery", "Visual Studio 2012", "SQL Server 2008 &amp; 2012", "Training"]
        }
    ];


    _.forEach(jobs, function(job){
        var tags = "";
        _.forEach(job.tags, function(tag){
            var element = "<li><a href='#'><span>" + tag + "</span></a></li>";
            tags += element;
        });
        
        var inverted = (job.dataposition === "Right" ? "timeline-inverted " : " ");
        var jobBody = `<li class="` + inverted + `wow fadeIn` + job.dataposition + `">
                        <div class="timeline-badge">
                            <i class="fa fa-circle"></i>
                        </div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h2>` + job.title + `</h2>
                                <h3>` + job.employer + `</h3>
                                <span class="date"><i>` + job.period + `</i></span>
                            </div>
                            <div class="timeline-body">
                                ` + job.description + `
                            </div>
                            <div class="tagcloud">
                                <ul>
                                ` + tags + `
                                </ul>
                            </div>
                        </div>
                    </li>`;
        $('#work-timeline').append(jobBody);
    });
}