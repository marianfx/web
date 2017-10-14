function loadData(){
    attachLoves();
    attachSocialLinks();
    attachBasicInfo();
    attachProfessionalProfile();
    attachInterests();
    attachSkills();
    attachSideData();
    attachWorkExperience();
    attachEduExperience();
    attachContact();
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
            url: "https://www.instagram.com/domnulfx/",
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

function attachEduExperience(){
    var edus = [
        {
            dataposition: "Left",
            institution: "🎓 Faculty of Computer Science, „Alexandru Ioan Cuza” University, Iași",
            title: "Bachelor's Degree, Computer Science",
            period: "2014 - 2017 (3 years)",
            description: `Status: finished, no license yet.<br/> Three years of learning more or less useful knowledge (presented in a
                more or less optimized fashion), meeting new people and discovering new ideas about my future self.`,
            tags: ["Web Technologies", "Cloud Computing", ".NET", ".NET Advanced", "OOP", "Programming Engineering", "Computer Networks", "Databases &amp; DBMS Practice", "Operating Systems - Linux", "Python", "Game design &amp; Development", "Computer Graphics", "Regular Expressions / Formal Languages", "Mathematics", "Logics for Computer Science", "Machine Learning", "Artificial Intelligence", "Data Structures", "Algorithms Design", "Java"]
        },
        {
            dataposition: "Right",
            institution: "🌞 SoloLearn - JavaScript Course",
            title: '<a href="https://www.sololearn.com/Profile/1229632/" target="_blank">Certificate of Completion</a>',
            period: "Jun. 2017 (1 month)",
            description: ``,
            tags: ["JavaScript"]
        },
        {
            dataposition: "Left",
            institution: "🌞 SoloLearn - HTML Fundamentals",
            title: '<a href="https://www.sololearn.com/Profile/1229632/" target="_blank">Certificate of Completion</a>',
            period: "Feb. 2017 (1 month)",
            description: ``,
            tags: ["HTML", "HTML5"]
        },
        {
            dataposition: "Right",
            institution: "🌞 SoloLearn - Python 3 Course",
            title: '<a href="https://www.sololearn.com/Profile/1229632/" target="_blank">Certificate of Completion</a>',
            period: "Jan. 2017 (1 month)",
            description: ``,
            tags: ["Python", "Python 3"]
        },
        {
            dataposition: "Left",
            institution: "🌞 SoloLearn - C# Course",
            title: '<a href="https://www.sololearn.com/Profile/1229632/" target="_blank">Certificate of Completion</a>',
            period: "Jul. 2017 (1 month)",
            description: ``,
            tags: ["C#"]
        },
        {
            dataposition: "Right",
            institution: "🎒 „Ștefan Procopiu” High-School, Vaslui",
            title: "High School Diploma in Mathematics and Computer Science",
            period: "2010 - 2015 (4 years)",
            description: `Also obtained <b>Professional Certificate</b>, <b>Baccalaureate Diploma</b> and <b>English Certificate</b>. 
            <hr>
            Baccalaureate - Jun 2014. Avg: <b>9.86</b> <br/> 
            ⭐ Mathematics: <b>10</b> <br/>
            ⭐ Computer Science (C/C++) : <b>10</b> <br/>
            ⭐ Romanian Language &amp; Literature: <b>9.6</b>.`,
            tags: ["Mathematics", "Computer Science", "Romanian Language &amp; Literature", "English Language"]
        },
        {
            dataposition: "Left",
            institution: "👶 Elementary School &amp; Secondary Education",
            title: "Life++",
            period: "2002 - 2010 (8 years)",
            description: `Does anybody remember something from this forgotten times?`,
            tags: ["Life Experience"]
        }
    ];


    _.forEach(edus, function(edu){
        var tags = "";
        _.forEach(edu.tags, function(tag){
            var element = "<li><a href='#'><span>" + tag + "</span></a></li>";
            tags += element;
        });
        
        var inverted = (edu.dataposition === "Right" ? "timeline-inverted " : " ");
        var eduBody = `<li class="` + inverted + `wow fadeIn` + edu.dataposition + `">
                        <div class="timeline-badge">
                            <i class="fa fa-circle"></i>
                        </div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h2>` + edu.institution + `</h2>
                                <h3>` + edu.title + `</h3>
                                <span class="date"><i>` + edu.period + `</i></span>
                            </div>
                            <div class="timeline-body">
                                ` + edu.description + `
                            </div>
                            <div class="tagcloud">
                                <ul>
                                ` + tags + `
                                </ul>
                            </div>
                        </div>
                    </li>`;
        $('#edu-timeline').append(eduBody);
    });
}

function attachContact(){
    var data = {
        address: `Bld. Nicolae Iorga, No. 26 <br/>
                Iași, România, 700259`,
        phone: "+40 749-936-026",
        mails: ["marian.focsa@outlook.com", "m.focsa@kireyest.com", "domnulfx@gmail.com"],
        whentocontact: ["Week: 09:00 AM - 19:00 PM", "Weekend: 11 AM - 2 PM"],
        messengerLink: "https://m.me/marian.fx",
        mapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6091.2352056701!2d27.58541845006448!3d47.151257028542936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafbbb580ba0a9%3A0x2021d6f47ce6da2!2sBulevardul+Nicolae+Iorga+26%2C+Ia%C8%99i+700259!5e0!3m2!1sro!2sro!4v1498219840426"
    };

    var mails = '';
    _.forEach(data.mails, function(mail){
        mails += `  <p>
                        <a href="mailto:` + mail + `">` + mail + `</a> 
                    </p>`;
    });

    var contactHours = '';
    _.forEach(data.whentocontact, function(contactHour){
        contactHours += "<p>" + contactHour + "</p>";
    });

    var basicContact = `<li>
                            <div class="contact-list">
                                <i class="fa fa-map-marker"></i>
                                <div class="contact-info">
                                    <p>` + data.address + `</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="contact-list">
                                <i class="fa fa-envelope"></i>
                                <div id="contact-mails" class="contact-info">
                                    ` + mails + `
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="contact-list">
                                <i class="fa fa-phone"></i>
                                <div class="contact-info">
                                    <p>` + data.phone + `</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="contact-list">
                                <i class="fa fa-clock-o"></i>
                                <div class="contact-info">
                                    ` + contactHours + `
                                </div>
                            </div>
                        </li>`;
    
    var actionButtons = `<a id="send-mail" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Your (must-have) e-mail client will pop-up.">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            Send mail
                        </a>
                        <a id="open-messenger" href="` + data.messengerLink + `" target="_blank" class="btn btn-info" data-toggle="tooltip" data-placement="bottom" title="Or chat with me on Facebook's Messenger.">
                            <i class="fa fa-commenting" aria-hidden="true"></i>
                            Messenger
                        </a>`;

    var map = `<iframe src="` + data.mapsLink + `"
    height="450" frameborder="0" style="border:0; width: 100%;" allowfullscreen></iframe>`;

    $('#contact-data ul').html(basicContact);
    $('#contact-form').append(actionButtons);
    $('#map-container').html(map);

    // init actions
    $('[data-toggle="tooltip"]').tooltip();
    $('#send-mail').click(function(){
        var subject = $('#form-subject').val();
        var message = $('#form-message').val();
        var error = '';
        if(subject == null || subject == '')
            error = "So you have nothing to talk with me about? 😞Insert a subject for this message to work, please!";
        if(error == '' && (message == null || message == ''))
            error = "If you have no idea, then it means we have a problem - we can't communicate! 😭 (you must insert a message)";
        
        if(error != '')
            return swal({
                title: "Oh, snap!",
                text: error,
                icon: "warning",
                button: "I Understand and Accept."
            });
        
        var mailto = $('#contact-mails p:first-child a:first-child');
        if(mailto == null || mailto == 'undefined')
            return swal({
                title: "Oh, snap!",
                text: "It seams that there is no contact email address. You cannot send your precious message. 😞",
                icon: "warning",
                button: "I Understand and Accept."
            });
        
        var mailstr = "mailto:" + mailto.text() + "?subject=" + subject + "&body=" + message;
        window.open(mailstr, '_self');
    });
}