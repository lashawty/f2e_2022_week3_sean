//點擊顯示對話
const showTyping = (click, active, content, texture) => {
  Observer.create({
    target: click,//字串
    type: "pointer",
    onClick: () => typing()
  });

  function typing() {
    active.addClass('active')//jq
    setTimeout(() => {
      gsap.to(content, { //字串
        text: texture,//字串，另外宣告
        duration: 10,
        ease: "none",
      })
    }, 300);
  } 
}

//PO intro
const poIntro = () => {
  const poTexture = "我是 TT 資訊，開發 A 組的 PO，粉紅豬。<br \><br \>PO 也就是產品負責人（Product Owner）。<br \><br \>產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。最後排出產品待辦清單（Product Backlog）唷！<br \><br \>剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。 既然你都來了，來試試看調整產品優先度，排出產品待辦清單吧！"
  showTyping('.po-show', $('.product-owner .dialog'),".po-content",poTexture)
}
poIntro()

//sortable js
const dragGame = () => {
  const candidateDOM = document.querySelector(".candidate");
  const productBacklogDOM = document.querySelector(".productBacklog");
  const isArrEqual = (arr1, arr2) => {
    return arr1.join("") === arr2.join("") ? true : false;
  };
  const answerAry = ["1", "2", "3", "4"];

  var candidate = Sortable.create(candidateDOM, {
    group: "shart",
    animation: 500,
    filter: '.drag-title',
    dragClass: 'dragging'
  });

  var productBacklog = Sortable.create(productBacklogDOM, {
    group: "shart",
    onChange: () => {
      dragCheck()
    }
  });

  const dragCheck = () => {
    $('.drag-next').on('click', function () {
      $('.message').addClass('active')
    })
    const answerMessage = document.querySelector(".message");
    let order = productBacklog.toArray();
    const answerrr = isArrEqual(order, answerAry); // true
    const checkMessage = document.querySelector('.check-message')
    if (answerrr === true) {
      checkMessage.innerHTML ="你做得非常好！<br \>你已經能掌握基礎產品代辦清單的優先度排序<br \>接下來再繼續挑戰吧！"
      $('.game-next').addClass('active')
      $('.game-prev').removeClass('active')
      
    } else {
      checkMessage.innerHTML ="順序可以再調整看看唷！"
      $('.game-prev').addClass('active')
      $('.game-next').removeClass('active')
    }
}

//重新挑戰
function reChallenge() {
  $('.game-prev').on('click', function () {
    $('.message').removeClass('active')
  })
  $('.game-next').on('click', function () {
    $('.message').removeClass('active')
  })
}

reChallenge()
}
dragGame()

//sprint explain
const dot = () => {
  gsap.to(".dot", {
    text: '...',
    duration: 1,
    ease: "none",
    repeat: -1,
    repeatDelay: 2,
  })

  $('.dot').on('click', function () {
    const self = $(this)
    $(self).hide()
  })
}
const sprintExplain = {
  text1: '產品待辦清單好了之後，我們來召集 Scrum Master 和開發團隊共同召開短衝規劃會議（Sprint Planning）。短衝即是一個迭代，具有固定時間限制，我們會在這個會議中，決定要完成哪些工作事項來達到商業需求，列出短衝待辦清單（Sprint Backlog），並由開發團隊在接下來的產品開發週期裡執行。',
  text2: '嗨嗨(ﾟ∀ﾟ)你是新來的前端吧！我是這次的 Scrum Master 山豬，我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議，提升團隊成員對 Scrum 瞭解。這位是黃黃，是我們開發團隊的成員唷～<br \><br \>目前我們團隊一次 Sprint 週期是兩週的時間，依照我的觀察，目前團隊可以負擔的點數 (Sprint Point) 大約是 20 點左右。',
  text3: '嘿！新來的，你應該還不知道點數是什麼意思吧(ゝ∀･)我來跟你介紹一下吧～ Sprint Point 目的是為了衡量速度，是用大概花費的時間預估出的相對點數。<br \><br \>我這邊已經把剛剛討論好的點數標上去囉～你來練習把任務排到短衝待辦清單吧！<br \>對了，我們平常管理任務是使用 Jira     這套軟體，你有時間記得先去註冊和熟悉唷～'
}
sprintExplain.init = () => {
  dot(),
  showTyping('.dot1', $('.explain-text1'),".explain-text1",sprintExplain.text1)
  showTyping('.dot2', $('.explain-text2'),".explain-text2",sprintExplain.text2)
  showTyping('.dot3', $('.explain-text3'),".explain-text3",sprintExplain.text3)
}

sprintExplain.init()