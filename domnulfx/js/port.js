function initPort(){
    var datas = [
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

    _.forEach(datas, function(data){
        var element = `<li class="full-card card ` + data.category + ` col-xs-12 col-sm-6 col-md-4 mix">
                            <div class="wrapper" style="background: url(` + data.image + `) center/cover no-repeat;">
                                <div class="header">
                                <div class="date">
                                    <span class="year">`+ data.time + `</span>
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
initPort();