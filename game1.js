'use strict';

const gameList = [
  {selectNumber:'1', question:'9回裏、4番バッターの打った球は観客席へ。入るか入らないかの瀬戸際だったが、外野手が無事にキャッチし歓喜の雄叫びをあげる。しかし、判定はホームランに。なぜ？', answer:'キャッチしたのはバッターの所属するチームの２軍外野手。最前列で１軍の試合を観客していた彼が観客席で打球をキャッチしたから彼が雄叫びを上げたのだ。', icon:'疑惑の判定'},
  {selectNumber:'2', question:'とあるサッカー部の部員たちは、血を差し出すことで試合に勝てるようになった。また、差し出された側も喜んだ。なぜ？', answer:'献血をすることで検査もしてもらっていたから。ある大学のスポーツチームは血液から健康状態や不足している栄養素を知ろうとした。しかし、検査をするとお金がかかってしまう。そこで、献血を依頼する代わりに検査をしてもらうことにしたのだ。', icon:'勝利の代償'},
  {selectNumber:'3', question:'カメラマンのカメオはどんなに醜い人も美しく撮れる実力の持ち主だが、普段は美しい人を醜くとっているという。なぜ？', answer:'芸能カメラマンで、美人モデルの不倫現場などを押さえているから。カメオはカメラマンといっても芸能人のプライベートを盗撮する、いわゆるパパラッチなのだ。', icon:'カメラマンのカメオ'},
  {selectNumber:'4', question:'直輝さんは身に着けていたものをたくさん奪われたのになんだか気分が良い！一体なぜだろうか？', answer:'POSSE②の3期生からモテていた直輝さんは卒業式の日に制服のボタンを全部取られて嬉しくなった。', icon:'直輝さん'},
  {selectNumber:'5', question:'A子は少女漫画のような出会いに憧れている。ある日、食パンをくわえて走っていると曲がり角で、美少年とぶつかった。しかし、A子の顔は青ざめてしまった。なぜ？', answer:'A子は走っていたのではなく、車で走っていたから。', icon:'少女漫画のような出会い'},
  {selectNumber:'6', question:'お金を投げて遊ぶ直輝さんはいつも運営さんに怒られていた。しかし今日はお金を投げても怒られず、むしろ運営さんはその姿を見て微笑んでいた。なぜだろうか？', answer:'今日直輝さんが投げたものは賽銭だった。', icon:'お金'}
]


//問題ボックスの表示
let gameBox = `<div class="game_main" id="game_main">`

for (let gameNumber = 1; gameNumber <= gameList.length; gameNumber++) {
gameBox += `<div class="game${gameList[gameNumber-1].selectNumber}"}_container" id="game${gameList[gameNumber-1].selectNumber}_container">
${gameList[gameNumber-1].icon}
</div>`;
}
`</div>`;

const allGameBox=document.getElementById('game_container');
allGameBox.insertAdjacentHTML('beforeend', gameBox);

//問題の表示
for (let gameNumber = 1; gameNumber <= gameList.length; gameNumber++) {
const gamePage = document.getElementById('game' + gameList[gameNumber-1].selectNumber + '_container')
let clickCount = 0
gamePage.addEventListener('click',() => {

if (clickCount ==0){
  gamePage.classList.add('option_click')
  let mainBox = `<div class="main_container" id="main_container">`
  mainBox+=`<div class="question_container">`
  +`<div class="question_text">${gameList[gameNumber-1].question}</div>`
  +`</div>`
  +`</div>`
  +`<div class="answer_label" id="answer_label${gameList[gameNumber-1].selectNumber}">答えを見る</div>`

  const allMainBox=document.getElementById('big_container');
  allMainBox.insertAdjacentHTML('beforeend', mainBox);
}
clickCount++

const answerPage = document.getElementById('answer_label'+gameList[gameNumber-1].selectNumber)
  answerPage.addEventListener('click',() => {
      let answerBox=`<div class="answer_detail" id="answer_detail">`
      alert('あなたは出題者ですか？')
      answerBox+=`<div class="answer_text">${gameList[gameNumber-1].answer}</div>`
      +`</div>`
      const allAnswerBox=document.getElementById('hidden_container');
      allAnswerBox.insertAdjacentHTML('beforeend', answerBox);
  })
})
}