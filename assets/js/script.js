// Couple Section Animations
gsap.to(".couple #couple-desc-1", {

    scrollTrigger: {
        trigger: ".couple",
        scroller: 'body',
        markers: false,
        start: "top 70%",
        end: "top -30%",
        scrub: 2,
    },

    left: "-50rem",
    duration: 1,
})

gsap.to(".couple #couple-desc-2", {

    scrollTrigger: {
        trigger: ".couple",
        scroller: 'body',
        markers: false,
        start: "top 70%",
        end: "top -30%",
        scrub: 2,
    },

    right: "-50rem",
    duration: 1,
})

gsap.to(".couple #bride-img", {

    scrollTrigger: {
        trigger: ".couple",
        scroller: 'body',
        markers: false,
        start: "top 70%",
        end: "top -30%",
        scrub: 2,
    },

    left: "32%",
    duration: 1,
})

gsap.to(".couple #groom-img", {

    scrollTrigger: {
        trigger: ".couple",
        scroller: 'body',
        markers: false,
        start: "top 70%",
        end: "top -30%",
        scrub: 2,
    },

    right: "31%",
    duration: 1,
})

gsap.to(".couple #left-ball", {

    scrollTrigger: {
        trigger: ".couple",
        scroller: 'body',
        markers: false,
        start: "top 70%",
        end: "top -30%",
        scrub: 2,
    },

    left: "95%",
    duration: 1,
})

gsap.to(".couple #right-ball", {

    scrollTrigger: {
        trigger: ".couple",
        scroller: 'body',
        markers: false,
        start: "top 70%",
        end: "top -30%",
        scrub: 2,
    },

    right: "95%",
    duration: 1,
})

// ------------------------------------------------------------------------------------------------------------------------------------

// Our Story Section Animations
gsap.to("#floating-dots", {
    y: -14,      
    x: -10,      
    duration: 1,      
    yoyo: true,       
    repeat: -1,      
    ease: "power1.inOut"
  });