//畫面載入
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

//轉場
const transition = function (hideElement,showElement) {
  
  gsap.to(".cube",
    {
    opacity:'1',
    ease:'none',
    duration: 1,
    }
  )
  gsap.to(".cube",
    {
    opacity:'0',
    ease:'none',
    duration: 1,
    delay: 2,
    }
  )
  setTimeout(() => {
    hideElement.hide()
    gsap.to(hideElement[0],{opacity:0})
    showElement.show()
  }, 1500);
  
}

//滑鼠
const mouse = () => {
// or using DOM element
  const cursor = document.querySelector('.mouse')
  const cottonCursor = new Cotton(cursor, {
    speed: 1,
  })
}
//出現下個元素
const showNext = function (hideElement,showElement,nextElement,rocket) {
  transition(hideElement,showElement)
  setTimeout(() => {
    transitionNextElement(nextElement,rocket)
  }, 1500);
}

//下一個元素動畫
const transitionNextElement = (e,rocket) =>{
  gsap.to(e,
    {
    opacity: 1,
    delay: 2,
    duration: 5,
    }
  ),
  gsap.to('.nav-rocket',{
    xPercent: rocket,
    delay: 3,
    duration: 3,
  })
}

//上一頁、下一頁切換
//btn 字串,被點擊的元素
//hide 要隱藏的元素
//show 要出現元素
//rocket 火箭進度
const clickEvent = (btn, hide, show, rocket) => {
  Observer.create({
    target: btn,
    type: "pointer",
    onClick: () => showNext(hide,show,show,rocket)
  });
  
}

clickEvent.init = () => {
  //接受挑戰，無上一步 .welcome
  clickEvent('.challenge-accepted',$('.welcome'),$('.introduction'),11)

  //角色介紹  
  clickEvent('.intro-prev',$('.introduction'),$('.welcome'),0)
  clickEvent('.intro-next',$('.introduction'),$('.product-owner'),22)

  //product-owner
  clickEvent('.po-prev',$('.product-owner'),$('.introduction'),11)
  clickEvent('.po-next',$('.product-owner'),$('.drag-game'),33)

  //拖拉遊戲
  clickEvent('.drag-prev',$('.drag-game'),$('.product-owner'),22)
  clickEvent('.game-next',$('.drag-game'),$('.sprint-explain'),44)

  //短衝規劃說明
  clickEvent('.explain-prev',$('.sprint-explain'),$('.drag-game'),33)
  clickEvent('.explain-next',$('.sprint-explain'),$('.sprint-list'),55)

  //短衝待辦清單
  clickEvent('.list-prev',$('.sprint-list'),$('.sprint-explain'),44)
  clickEvent('.list-next',$('.sprint-list'),$('.sprint-now'),66)

  //短衝
  clickEvent('.sprint-prev',$('.sprint-now'),$('.sprint-list'),55)
  clickEvent('.sprint-next',$('.sprint-now'),$('.sprint-drag'),77)

  //短衝流程測驗 
  clickEvent('.sd-prev',$('.sprint-drag'),$('.sprint-now'),66)
  clickEvent('.sd-next',$('.sprint-drag'),$('.reflect'),88)

  //自省回顧
  clickEvent('.reflect-prev',$('.reflect'),$('.sprint-drag'),77)
  clickEvent('.reflect-next',$('.reflect'),$('.congrats'),105)
} 

//執行
clickEvent.init()
mouse()
loading()
