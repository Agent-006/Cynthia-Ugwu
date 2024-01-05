const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let timeout;

function skewCursorEffect() {

    let xscale = 1;
    let yscale = 1;

    let xprev = 0;
    let yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);

        let xdiff = dets.clientX - xprev;
        let ydiff = dets.clientX - yprev;

        xscale = gsap.utils.clamp(.8, 1.2, xdiff);
        yscale = gsap.utils.clamp(.6, 1.2, ydiff);

        xprev = dets.clientX;
        yprev = dets.clientY;

        customCursor(xscale, yscale);
        timeout = setTimeout(function () {
            let crsr = document.querySelector('#cursor');

            crsr.style.transform = `translate(${dets.clientX - 5}px, ${dets.clientY - 5}px) scale(1, 1)`;
        }, 100);
    })
}

skewCursorEffect();

function customCursor(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        let crsr = document.querySelector('#cursor');

        crsr.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
}


(function animate() {
    let tl = gsap.timeline();

    tl.from('#nav', {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
    })

    tl.to('.boundingelemUp', {
        y: 0,
        ease: Expo.easeInOut,
        duration: 1.5,
        stagger: .1,
    })

    tl.to('.boundingelemDown', {
        y: 0,
        ease: Expo.easeInOut,
        duration: 1.5,
        delay: -1,
        stagger: .1,
    })

    tl.from('#herobase', {
        y: 10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut,
    })
})();
