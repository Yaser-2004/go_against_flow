gsap.from("#main img", {y: 500, x: 100, scale: 0.8,duration: 1,ease: "power1.out"})

//G
gsap.from("#go h1:first-child", { x: -20,opacity: 0, delay: 0.8,duration: 0.2,ease: "power1.out"})

//o
gsap.from("#go h1:last-child", {opacity: 0, delay: 0.8,duration: 0.2,ease: "power1.out"})

//a
gsap.from("#against h1:first-child", {opacity: 0,delay: 0.8,duration: 0.2,ease: "power1.out"})

//g
gsap.from("#against h1:nth-child(2)", {x: 20,opacity: 0,delay: 0.8,duration: 0.2,ease: "power1.out"})

//a
gsap.from("#against h1:nth-child(3)", {opacity: 0,delay: 0.8,duration: 0.2,ease: "power1.out"})

//i
gsap.from("#against h1:nth-child(4)", {y: 60,opacity: 0,delay: 0.8,duration: 0.2,ease: "power1.out"})

//n
gsap.from("#against h1:nth-child(5)", {x: -20,opacity: 0,delay: 0.8,duration: 0.2,ease: "power1.out"})

//s
gsap.from("#against h1:nth-child(6)", {y: -60,opacity: 0,delay: 0.8,duration: 0.2,ease: "power1.out"})

//t
gsap.from("#against h1:last-child", {opacity: 0,delay: 0.8,duration: 0.2, ease: "power1.out"})

//f
gsap.from("#flow h1:first-child", {x: 20,opacity: 0,delay: 0.8,duration: 0.2,ease: "power1.out"})

//l
gsap.from("#flow h1:nth-child(2)", {opacity: 0,delay: 0.8,duration: 0.2,ease: "power1.out"})

//o
gsap.from("#flow h1:nth-child(3)", {y: 60,opacity: 0,delay: 0.8,duration: 0.2,ease: "power1.out"})

//w
gsap.from("#flow h1:last-child", {x: -20,opacity: 0,delay: 0.8,duration: 0.2,ease: "power1.out"})

//column nav
gsap.from("#col-nav", {x: 20,delay: 1.3,opacity: 0,ease: "power1.out"})

gsap.from("button", {y: 60,opacity: 0,delay: 1,ease: "power1.out"})





$("#open").on("click", () => {
    $("#open").css("display", "none");
    $("#close").css("display", "block");
    $(".side-menu").toggleClass("active");
    $("#col-nav").toggleClass("active1");

    setTimeout(() => {
        $(".up").css("display", "flex");
        $(".down").css("display", "flex");
    }, 400);
    
    // $(".up").toggleClass("up1");
    // $(".down").toggleClass("down1");

    setTimeout(() => {
        $("button").toggleClass("btn");
    }, 400);

});

$("#close").on("click", () => {
    $("#open").css("display", "block");
    $("#close").css("display", "none");
    $(".side-menu").toggleClass("active");
    $("#col-nav").toggleClass("active1");
    $(".up").css("display", "none");
    $(".down").css("display", "none");
    // $(".up").toggleClass("up1");
    // $(".down").toggleClass("down1");
    $("button").toggleClass("btn");
});

if ($(window).width() <= 700) {
    $("#col-nav").addClass("less-than-700");
    gsap.from(".less-than-700", {
        y: -60,
        delay: 1.3,
        ease: "power1.out"
    })
} else {
    $("#col-nav").removeClass("less-than-700");
}


window.addEventListener("resize", () => {
    if ($(window).width() <= 700) {
        $("#col-nav").addClass("less-than-700");
    } else {
        $("#col-nav").removeClass("less-than-700");
    }
});




