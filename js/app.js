const loading = function () {
  const tl = gsap.timeline();
  tl.to(".rocket", {
    top:'0',
    yPercent:'-30',
    scale:0,
    duration: 5,
  })
  .to(".rocket-firing", {
    top:'0',
    yPercent:'-30',
    scale:0,
    duration: 5,
  },"<")
  .to(".star-field", {
    opacity:0,
    duration: 5,
  },"<")
  .to(".bg-star", {
    opacity: 1,
    duration: 5,
  },"<")
  .to(".welcome", {
    yPercent:'-10',
    opacity:1,
    duration: 5,
  })
  .to(".welcome-content", {
    text: "哈囉，歡迎加入 TT 資訊！<br \>在正式加入專案開發之前，需要請你先了解 Scrum 的流程與精神！<br \>請接受挑戰任務，成功通過 Scrum 新手村的挑戰任務吧～", 
    duration: 10,
    ease: "none",
  },"<")
  .to(".challenge-accepted", {
    opacity:1,
    duration: .1,
  })
}

const ajaxIntro = function () {
  $.ajax({
    type: "get",
    url: "./intro.html",
    data: "data",
    dataType: "dataType",
    success: function (response) {
      
    }
  });
}
loading()