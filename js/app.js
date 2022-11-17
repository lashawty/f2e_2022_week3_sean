const loading = function () {
  gsap.to(".rocket", {
    top:'0',
    yPercent:'-30',
    scale:0,
    duration: 5,
  })
  gsap.to(".rocket-firing", {
    top:'0',
    yPercent:'-30',
    scale:0,
    duration: 5,
  })
  gsap.to(".star-field", {
    opacity:0,
    duration: 5,
  })
  gsap.to(".bg-star", {
    opacity: 1,
    duration: 10,
  })
}

loading()