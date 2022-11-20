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
const poTexture = "我是 TT 資訊，開發 A 組的 PO，粉紅豬。<br \><br \>PO 也就是產品負責人（Product Owner）。<br \><br \>產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。最後排出產品待辦清單（Product Backlog）唷！<br \><br \>剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。 既然你都來了，來試試看調整產品優先度，排出產品待辦清單吧！"
showTyping('.po-show', $('.product-owner .dialog'),".po-content",poTexture)

//sortable js
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
    const answerMessage = document.querySelector(".message");
    let order = productBacklog.toArray();
    const answerrr = isArrEqual(order, answerAry); // true
    if (answerrr === true) {
      answerMessage.innerHTML =
        "<p class='messageCorrect'>" + "順序正確" + "</p>";
    } else {
      answerMessage.innerHTML =
        "<p class='messageWorng'>" + "順序錯誤" + "</p>";
    }
  }
});
