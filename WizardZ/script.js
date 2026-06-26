function page1Animation() {
    var tl = gsap.timeline()

    tl.from("nav i", {
        y: -70,
        opacity: 0,
        duration: 1,
        rotate: 360,
    })

    tl.from("nav h1", {
        y: -40,
        opacity: 0,
        duration: 0.5,
    })

    tl.from("nav .part2 h4", {
        x: 60,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
    })

    tl.from("nav .part2 button", {
        x: 60,
        y: -40,
        opacity: 0,
        duration: 0.5,
    })

    tl.from(".center .center-part1", {
        x: -240,
        opacity: 0,
        duration: 0.5,
    })
    tl.from(".center .center-part1 button", {
        y: 100,
        opacity: 0,
        duration: 0.5,
    })
    tl.from(".center .center-part2", {
        x: 300,
        opacity: 0,
        duration: 0.5,
    })
    tl.from(".bottompart img", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,

    })
}
page1Animation()

function page1ReverseAnimation() {

    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page2",
            scroller: "body",
            start: "top 100%",
            end: "top 0%",
            scrub: 2,
        }
    })

    tl2.to("nav i", {
        y: -70,
        opacity: 0,
        duration: 1,
        rotate: 360,
    })

    tl2.to("nav h1, nav .part2 h4, nav .part2 button", {
        y: -40,
        opacity: 0,
        duration: 0.5,
    })

    tl2.to(".center .center-part1", {
        x: -240,
        opacity: 0,
        duration: 0.5,
    })
    tl2.to(".center .center-part1 button", {
        y: 100,
        opacity: 0,
        duration: 0.5,
    })
    tl2.to(".center .center-part2", {
        x: 300,
        opacity: 0,
        duration: 0.5,
    })
    tl2.to(".bottompart img", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,

    })
}
page1ReverseAnimation()

function page2Animation() {
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page2",
            scroller: "body",
            start: "top 60%",
            end: "top 0%",
            scrub: 2,
        }
    })

    tl3.from(".services h1", {
        x: -100,
        opacity: 0,
        duration: 0.5,
    })
    tl3.from(".services p", {
        x: 100,
        opacity: 0,
        duration: 0.5,
    })
    tl3.from("#elem1 , #elem3", {
        x: -100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
    })
    tl3.from("#elem2 , #elem4", {
        x: 100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
    })
}
page2Animation()