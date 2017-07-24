(function($) {
    var img1 = $('.img--1'),
        img2 = $('.img--2'),
        img3 = $('.img--3'),
        img4 = $('.img--4'),
        img5 = $('.img--5'),
        img6 = $('.img--6'),
        buttons = $('button'),
        tl = new TimelineLite({paused: true}),
        dot = $('.preloader__dot'),
        loader = $('.preloader'),
        wrapper = $('.preloader-wrapper'),
        tlLoader = new TimelineMax({repeat: 2, onComplete: loadContent});

        tl
            .from(img1, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut})
            .add('intro')
            .from(img2, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut})
            .from(img3, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut})
            .from(img4, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut})
            .from(img5, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut})
            .from(img6, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut})
            .staggerFrom(buttons, 1, {cycle: {
                y: [50, -50],
                scale: [0.5, 2]
            }, autoAlpha:0, ease:Power1.easeOut}, 0.5);

        tlLoader
            .staggerFromTo(dot, 0.3,
                {y:0, autoAlpha: 0},
                {y: 20, autoAlpha: 1, ease:Back.easeInOut},
                0.05
            )
            .fromTo(loader, 0.3,
                {autoAlpha:1, scale: 1.3},
                {autoAlpha: 0, scale: 1, ease:Power0.easeNone},
                0.9
            );

        function loadContent() {
            var tlLoadOut = new TimelineLite({onComplete: contentIn});
            tlLoadOut
                .set(dot, {backgroundColor: '#2b4d66'})
                .to(loader, 0.3, {autoAlpha: 1, scale: 1.3, ease:Power0.easeNone})
                .staggerFromTo(dot, 0.3,
                    {y:0, autoAlpha: 0},
                    {y: 20, autoAlpha: 1, ease:Back.easeInOut},
                    0.05, 0
                )
                .to(loader, 0.3, {y: -150, autoAlpha:0, ease:Back.easeIn}, '+=0.3')
                .to(wrapper, 0.8, {autoAlpha:0, ease:Back.easeIn}, '+=0.3', 0.5)
        }

        function contentIn() {
            tl.play();
        }

        $('#btnPlay').on('click', function () {
            tl.play();
        });

        $('#btnPause').on('click', function () {
            tl.pause();
        });

        $('#btnResume').on('click', function () {
            tl.resume();
        });

        $('#btnReverse').on('click', function () {
            tl.reverse();
        });

        $('#btnSpeedUp').on('click', function () {
            tl.timeScale(8);
        });

        $('#btnSlowDown').on('click', function () {
            tl.timeScale(0.5);
        });

        $('#btnSeek').on('click', function () {
            tl.seek(1);
        });

        $('#btnProgress').on('click', function () {
            tl.progress(0.5);
        });

        $('#btnRestart').on('click', function () {
            tl.restart();
        });
})(jQuery);
