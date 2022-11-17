const loading = function () {
  gsap.to(".loading", {
    opacity: 0,
    yPercent:'-30',
    scale:0,
    duration: 10,
  })
}

loading()