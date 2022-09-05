'use strict';

const gameList = [
  {selectNumber:'1', question:'ニンジンを握りしめながら泣いている直輝さん。一体何があった？', answer:'雪だるまが溶けてしまい、地面に残ったニンジンの鼻を拾っていた直輝さんであった。', icon:'にんじん'},
  {selectNumber:'2', question:'直輝さんがバーに入り、バーテンダーに1杯の水を求めた。しかしバーテンダーは、水を出す代わりに銃を出して直輝さんに向けた。すると男は「ありがとう」と言い残して店を出て行った。何が起こったのだろうか？', answer:'直輝さんはしゃっくりが止まらなかった。直輝さんはバーに立ち寄り、しゃっくりを止める為に水を一杯注文した。そこでマスターは機転を利かせ、直輝さんに銃を突きつけた。銃を突きつけられてびっくりした直輝さんはしゃっくりが止まり、マスターに「ありがとう」と言ってバーを去っていった。', icon:'銃'},
  {selectNumber:'3', question:'お湯に入れてかき混ぜるだけで完成。新商品「ポッセベジタブル」。パッケージにはみずみずしい有機野菜や果物が描かれていて、それなりに売れていた。しかし、あるときからパッケージがそこまで美味しそうじゃない、どんよりとした緑一色になってしまった。一体なぜだろうか。', answer:'新商品は「入浴剤」だった。パッケージがあまりにもスープらしい見た目だったので、誤飲を防ぐためにパッケージを変更したのだ。', icon:'健康'},
  {selectNumber:'4', question:'直輝さんは身に着けていたものをたくさん奪われたのになんだか気分が良い！一体なぜだろうか？', answer:'POSSE②の3期生からモテていた直輝さんは卒業式の日に制服のボタンを全部取られて嬉しくなった。', icon:'直輝さん'},
  {selectNumber:'5', question:'とある男女が、まったくの同時刻に鋭利な刃物で切りつけられた。しかも、どちらも同一の人物に、同一の凶器によってやられたという。一体どんな手口が使われたのだろう？', answer:'犯行現場は分娩室であった。人物もとい医師は、医療用のハサミを握っていた。たった今産まれ落ちた男の子とその母親をつなぐ、へその緒を切断したのである。新しい命の誕生であった。', icon:'怖い？'},
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
  // +`<div class="question_label">問題${gameNumber}</div>`
  +`<div class="question_text">${gameList[gameNumber-1].question}</div>`
  +`</div>`
  +`</div>`
  // +`<div class="answer_container">`
  +`<div class="answer_label" id="answer_label${gameList[gameNumber-1].selectNumber}">答えを見る</div>`
  // +`<div class="answer_text">${gameList[gameNumber-1].answer}</div>`
  // +`</div>`;

  const allMainBox=document.getElementById('big_container');
  allMainBox.insertAdjacentHTML('beforeend', mainBox);
}
clickCount++

const answerPage = document.getElementById('answer_label'+gameList[gameNumber-1].selectNumber)
  console.log(answerPage);
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