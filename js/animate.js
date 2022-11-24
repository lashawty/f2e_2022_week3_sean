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
// 點擊切換active
// clickSwitchClass(點擊目標,加上cls名稱)
function clickSwitchClass(target, className) {
  $(target).on('click', function () {
    $(target).not(this).removeClass(className);
    $(this).addClass(className);
  });
}

function clickToggleClass(target, className) {
  $(target).on('click', function () {
    $(this).toggleClass(className);
  });
}

//PO intro
const poIntro = () => {
  const poTexture = "我是 TT 資訊，開發 A 組的 PO，粉紅豬。<br \><br \>PO 也就是產品負責人（Product Owner）。<br \><br \>產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。最後排出產品待辦清單（Product Backlog）唷！<br \><br \>剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。 既然你都來了，來試試看調整產品優先度，排出產品待辦清單吧！"
  showTyping('.po-show', $('.product-owner .dialog'),".po-content",poTexture)
}


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

//sprint-list
const sprintList = () => {
  const backlogDOM = document.querySelector(
    ".backlog-section .droppable-container"
  );
  const sprintDOM = document.querySelector(
    ".sprint-section .droppable-container"
  );

  const backlogArr = [
    {
      title: "前台職缺列表",
      content: '（職缺詳細內容、點選可發送應徵意願）',
      score: 5
    },
    { 
      title: "應徵者的線上履歷編輯器", 
      score: 13 
    },
    {
      title: "會員系統",
      content: "（登入、註冊、權限管理）",
      score: 8 
    },
    { 
      title: "後台職缺管理功能",
      content: '（資訊上架、下架、顯示應徵者資料）',
      score: 8 
    }
  ];
  let totalScore = 0;
  let totalScoreDOM = document.querySelector(".total-score");
  totalScoreDOM.textContent = totalScore;

  // 以map方式創造DOM node, 並塞入backlog的container
  backlogArr.map((ele) => {
    let draggableCard = document.createElement("div");
    let draggableText = document.createElement("p");
    draggableCard.setAttribute("data-score", ele.score);
    draggableCard.setAttribute("draggable", "true");
    draggableCard.classList.add("draggble",'cotton-model');
    draggableCard.textContent = ele.title;
    draggableCard.appendChild(draggableText)
    draggableText.textContent = ele.content;
    let timeAvatar = document.createElement("ul");
    timeAvatar.classList.add("time-avatar");
    timeAvatar.textContent = ele.score + ' 點';
    draggableCard.appendChild(timeAvatar);
    backlogDOM.appendChild(draggableCard);

    //產出對應數量li
    for (let i = 0; i < ele.score ; i++) {
      let boxes = document.createElement("li")
      timeAvatar.appendChild(boxes)
    }
    
  });

  let sprintSortableObj = Sortable.create(sprintDOM, {
    group: "dnd",
    animation: 10,
    dataIdAttr: "data-score",

    onEnd: (event) => {
      // 更新t// 更新totalScore
      totalScore = sprintSortableObj
        .toArray()
        .map((ele) => parseInt(ele, 10))
        .reduce((a, b) => a + b, 0);
      totalScoreDOM.textContent = totalScore + '點';

      //目前點數的黃色框框數量
      const $li= document.querySelectorAll(".current-point li")
      const $currentPoint = document.querySelector('.current-point')

      if ($li.length > 0) {
        for (let i = 0; i < $li.length; i++) {
          $li[i].remove()
        }
      }
      
      for (let i = 0; i < totalScore; i++) {
        let currentBoxes = document.createElement("li")
        $currentPoint.appendChild(currentBoxes)
      }
      
      console.log($li,'左邊的點數');

      //warning-text 顯示/隱藏
      let warningTextDOM = document.querySelector(".warning-text");

      warningTextDOM.classList.add("hidden");
      if (totalScore > 20) {
        warningTextDOM.classList.remove("hidden");
      }
    }
  });

  let backlogSortableObj = Sortable.create(backlogDOM, {
    group: "dnd",
    animation: 10,
    dataIdAttr: "data-score",

    onEnd: (event) => {
      totalScore = sprintSortableObj
        .toArray()
        .map((ele) => parseInt(ele, 10))
        .reduce((a, b) => a + b, 0);
      totalScoreDOM.textContent = totalScore + ' 點';
      
      //目前點數的黃色框框數量
      const $li= document.querySelectorAll(".current-point li")
      const $currentPoint = document.querySelector('.current-point')

      if ($li.length > 0) {
        for (let i = 0; i < $li.length; i++) {
          $li[i].remove()
        }
      }
      
      for (let i = 0; i < totalScore; i++) {
        let currentBoxes = document.createElement("li")
        $currentPoint.appendChild(currentBoxes)
      }
      
      //warning-text 顯示/隱藏
      let warningTextDOM = document.querySelector(".warning-text");

      warningTextDOM.classList.add("hidden");
      if (totalScore > 20) {
        warningTextDOM.classList.remove("hidden");
      }
    }
  });

  //點數已超過上限
  
  Observer.create({
    target: '.warning-text',
    type: "pointer",
    onDrag: () => $('.warning-text').addClass('hidden')
  });
}

//sprint
const sprint = (target,text) => {
  clickSwitchClass('.option-box', 'active')

  function updateText (target,text) {
    const $optionText = document.querySelector('.option-text')
    $optionText.innerHTML = ''
    setTimeout(() => {
      gsap.to('.option-text', { //字串
        text: text,//字串，另外宣告
        duration: 10,
        ease: "none",
      })
    }, 300)
  }

  Observer.create({
    target: target,//字串
    type: "pointer",
    onClick: () => updateText (target,text)
  });
}

sprint.all = () => {
  const text1 = '每天都要進行的會議，以 15 分鐘為限制<br \>昨天為團隊的短衝目標（Sprint Goal）做了那些進度<br \>今天我會如何準備來幫助團隊達到短衝目標<br \>過程中有遇到什麼問題、難題<br \>透過團隊分享，追蹤大家的工作狀況。 <span></span>'
  const text2 = '向利害關係人（Stakeholder）展示工作結果，蒐集使用回饋，分享市場反應，並一起討論下一步工作方向。<br \><br \>在短衝檢視會議過程，會取得使用者或利害關係人對於本次短衝增量的回饋數據或意見，討論哪些想法值得納入至產品待辦清單去實踐。 <span></span>'
  const text3 = '團隊在自省會議裡，會共同回顧該短衝歷程發生的事情、好的地方、可以改進的地方。<br \><br \>如何維持我們已有的成功經驗，優化工作流程、讓團隊有變得更好的機會。<br \><br \>推薦工具：<img src="./assets/img/confluence.png" alt="alt"> <span></span>'
  const text4 = '等等等等等，你應該還不知道什麼是 Sprint 吧？<br \><br \>讓我先為你介紹一下～ 仔細聽好唷，等等會考考你！<br \><br \>Sprint 是一個短衝，如同前面敏捷教練所提到的，一次sprint一次sprint週期為2周。開發團隊會在這期間執行開發。在這段期間內，開發團隊舉辦每日站立會議（Daily Scrum） ，追蹤成員間的工作狀況。除了每日站立會議，在 Sprint 的結束也會包含 短衝檢視會議（Sprint Review）、短衝自省會議（Sprint Retrospective）。'
  sprint('.option-box1',text1)
  sprint('.option-box2',text2)
  sprint('.option-box3',text3)
  dot()
  showTyping('.sprint-dot', $('.sprint-text'), '.sprint-text', text4)
}

//sprint-drag
const sprintDrag = () => {
  //上方文字
  const text = '那你來試試看，在這經典的 Scrum 流程圖中，這些流程分別代表哪一個會議呢？<br \><br \>請你試著把左下方三個方塊，"依序"拖拉至答案區中。'

  dot()
  showTyping('.sprint-drag-dot', $('.sprint-drag-text'), '.sprint-drag-text', text)

  //判斷
  const candidateDOM = document.querySelector(".selection-wrap");
  const productBacklogDOM = document.querySelector(".flow-chart3");
  const isArrEqual = (arr1, arr2) => {
    return arr1.join("") === arr2.join("") ? true : false;
  };
  const answerAry = ["1", "2", "3"];

  var candidate = Sortable.create(candidateDOM, {
    group: "shart",
    animation: 500,
    dragClass: 'dragging'
  });

  var productBacklog = Sortable.create(productBacklogDOM, {
    group: "shart",
    onChange: () => {
      answerCheck()
    }
  });

  const answerCheck = () => {
    $('.sd-done').on('click', function () {
      $('.check-selection').addClass('active')
    })
    
    const answerMessage = document.querySelector(".notice");
    let order = productBacklog.toArray();
    const answerrr = isArrEqual(order, answerAry);
    const checkMessage = document.querySelector('.check-selection')
    if (answerrr === true) {
      $('.success').addClass('active')
      $('.fail').removeClass('active')
      $('.sd-next').on('click', function () {
        $('.check-selection').removeClass('active')
      })
    } else {
      $('.fail').addClass('active')
      $('.success').removeClass('active')
      $('.try-again').on('click', function () {
        $('.check-selection').removeClass('active')
      })
    }}
}

//自省回顧
const reflect = () => {
  const text = '哇新來的，你真的很幸運，今天剛好是開發 B 組的 Retro，你也來見識一下，看看 Retro 都該做些什麼吧～～<br \>我們會在會議裡請團隊成員提出哪些是做得好的地方、哪些可以繼續改善的地方？並記錄在 Confluence 中。<br \><br \>重點在於『正面表述』，你也思考看看，哪一些是適合 Retro 的回饋吧～～'

  dot()
  showTyping('.reflect-dot', $('.reflect-text'), '.reflect-text', text)

  
  //點擊切換active
  clickToggleClass('.box', 'active')
  const $box = $('.reflect .box')
  const $correct = $('.reflect .correct')
  const $wrong = $('.reflect .wrong')
  

  $('.reflect-check').on('click', function () {

    let correctCheck = false
    let doubleCheck = true

    //如果錯誤答案被選擇了，就直接return
    if($wrong.hasClass('active')) { return }

    
    $correct.each(function(index,element){
      if($(this).hasClass('active')){
        correctCheck = true
      } else {
        correctCheck = false
        doubleCheck = false
      }
    });

    if (correctCheck && doubleCheck ) {
      $('.right-answer').addClass('active')
      $('.wrong-answer').removeClass('active')
    } else {
      $('.right-answer').removeClass('active')
      $('.wrong-answer').addClass('active')
    }
  })
  
  $('.reflect-again').on('click', function () {
    $('.answer-view').removeClass('active')
  })

  $('.reflect-next').on('click', function () {
    $('.answer-view').removeClass('active')
  })

}

const initAll = () => {
  dragGame()
  poIntro()
  sprintExplain.init()
  sprintList()
  sprint.all()
  sprintDrag()
  reflect()
}

initAll()
