/* Initializers */
var pluginspreparer = function () {
    "use strict";

    $(window).load(function () {
        setTimeout(function () {
            $("body").addClass("loaded");
            setTimeout(function () {
                afterLoadedDissapears();
            }, 969);
        }, 200);
    });

    $("#cpyear").text(new Date().getFullYear());
    loadData();


    var imagesAvailable = 4;
    var randomImageId = Math.floor(Math.random() * imagesAvailable + 1);
    $(".banner").css("background-image", "url(img/portraits/portrait" + randomImageId + ".jpeg)");

    // var logosAvailable = 2;
    // var randomLogoId = Math.floor(Math.random() * logosAvailable + 1);
    // $('.navbar-brand img').attr("src", "img/logos/logo" + randomLogoId + ".png");
};

function afterLoadedDissapears() {
    $("body").addClass("scrollbar");
    $("body").addClass("scyan");
    $('[data-toggle="tooltip"]').tooltip(); //enable tooltips
}
$(pluginspreparer);



/* Classic attachment of data to placeholders (data is retrieved from data.js) using jQuery. */
function loadData() {
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
    initProjects();
}

function attachLoves() {
    _.forEach(loves, function (love, key) {
        var element = $('<b' + (key == 0 ? ' class="is-visible"' : '') + '>' + love.name + '</b>');
        $('#whatilove').append(element);
    });

}

function attachSocialLinks() {
    _.forEach(socialLinks, function (sl) {
        var element = $('<li><a target="_blank" href="' + sl.url + '" data-toggle="tooltip" data-placement="bottom" title="View ' + sl.title + '"><i class="fa ' + sl.icon + '" aria-hidden="true"></i></a></li>');
        $('.social-link').append(element);
    });
}

function attachBasicInfo() {
    _.forEach(infos, function (info) {
        var element = $('<li><span>' + info.title + ':</span> <span class="info">' + info.value + '</span></li>');
        $('.basic-info').append(element);
    });
}

function attachProfessionalProfile() {
    var element = $(`<p>` + profiFile.description + `</p>
                    <a class="btn btn-primary" target="_blank" href="` + profiFile.link1.link + `">` + profiFile.link1.title + `</a>
                    <a class="btn btn-default" target="_blank" href="` + profiFile.link2.link + `">` + profiFile.link2.title + `</a>
                    `);
    $('.professional-profile').append(element);
}

function attachInterests() {
    $('#interests-description').html(interestsIntro.description);
    $('#interests-caption').html(interestsIntro.caption);

    _.forEach(interestsData, function (info) {
        var element = $(`<li>
                            <a target="_blank" href="` + info.link + `">
                                <i class="fa ` + info.icon + `"></i>
                                <span>` + info.title + `</span>
                            </a>
                        </li>`);
        $('#interests-container').append(element);
    });
}

function attachSkills() {
    _.forEach(cards, function (card) {
        var container = $(`<div class="progress-block wow fadeInLeft"></div>`);
        _.forEach(card.data, function (data) {
            var element = `<div class="single-progressbar">
                            <div class="skill-text">
                                <span>` + data.title + `</span>
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
                                    <h2>` + card.title + `</h2>
                                    ` + container.prop('outerHTML') + `
                                </div>
                            </div>`);
        $('#skills-container').append(cardContainer);
    });
}

function attachSideData() {
    _.forEach(numbersData, function (d) {
        var element = $(`<div class="col-xs-6 col-sm-6">
                            <div class="service-info">
                                <span class="counter">` + d.count + `</span>
                                <h4>` + d.title + `</h4>
                            </div>
                        </div>`);
        $('#side-data-container').append(element);
    });
}

function attachWorkExperience() {
    var count = -1;
    _.forEach(jobs, function (job) {
        var tags = "";
        _.forEach(job.tags, function (tag) {
            var element = "<li><a href='#'><span>" + tag + "</span></a></li>";
            tags += element;
        });

        var inverted = ((count++) % 2 === 0 ? "timeline-inverted " : " ");
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

function attachEduExperience() {
    var count = -1;
    _.forEach(edus, function (edu) {
        var tags = "";
        _.forEach(edu.tags, function (tag) {
            var element = "<li><a href='#'><span>" + tag + "</span></a></li>";
            tags += element;
        });

        var inverted = ((count++) % 2 === 0 ? "timeline-inverted " : " ");
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

function attachContact() {
    var mails = '';
    _.forEach(contactData.mails, function (mail) {
        mails += `  <p>
                        <a href="mailto:` + mail + `">` + mail + `</a> 
                    </p>`;
    });

    var contactHours = '';
    _.forEach(contactData.whentocontact, function (contactHour) {
        contactHours += "<p>" + contactHour + "</p>";
    });

    var basicContact = `<li>
                            <div class="contact-list">
                                <i class="fa fa-map-marker"></i>
                                <div class="contact-info">
                                    <p>` + contactData.address + `</p>
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
                                    <p>` + contactData.phone + `</p>
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
                        <a id="open-messenger" href="` + contactData.messengerLink + `" target="_blank" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Or chat with me on Facebook's Messenger.">
                            <i class="fa fa-commenting" aria-hidden="true"></i>
                            Messenger
                        </a>`;

    $('#contact-data ul').html(basicContact);
    $('#contact-form').append(actionButtons);

    // init actions
    $('[data-toggle="tooltip"]').tooltip();
    $('#send-mail').click(function () {
        var subject = $('#form-subject').val();
        var message = $('#form-message').val();
        var error = '';
        if (subject == null || subject == '')
            error = "So you have nothing to talk with me about? 😞Insert a subject for this message to work, please!";
        if (error == '' && (message == null || message == ''))
            error = "If you have no idea, then it means we have a problem - we can't communicate! 😭 (you must insert a message)";

        if (error != '')
            return swal({
                title: "Oh, snap!",
                text: error,
                icon: "warning",
                button: "I Understand and Accept."
            });

        var mailto = $('#contact-mails p:first-child a:first-child');
        if (mailto == null || mailto == 'undefined')
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

function initProjects() {
    _.forEach(allProjects, function (data) {
        var element = `<li class="full-card card ` + data.category + ` col-xs-12 col-sm-6 col-md-4 mix">
                            <div class="wrapper" style="background: url(` + data.image + `) center/cover no-repeat;">
                                <div class="header">
                                <div class="date">
                                    <span class="year">` + data.time + `</span>
                                </div>
                                </div>
                                <div class="data">
                                    <div class="content">
                                        <span class="author">` + data.type + `</span>
                                        <h2 class="title">
                                            <a href="#">` + data.title + `</a>
                                        </h2>
                                        <p class="text">` + data.description + `</p>
                                        <a target="_blank" href="` + data.url.link + `" class="button">` + data.url.title + `</a>
                                    </div>
                                </div>
                            </div>
                        </li>`;
        $('.portfolio_items').append(element);
    });

}