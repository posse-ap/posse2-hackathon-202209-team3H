'use strict';

// console.log(memberList);
// console.log(memberList[0]);
// console.log(memberList[0].hobby);
// console.log(memberList[0].hobby[0]);
// console.log(memberList[0].hobby[0][0]);
// console.log(memberList[0].hobby[1][0]);

// console.log(memberList.length)

// let searchList = [];
// for (let num = 1; num <= memberList.length ; num++) {
//   console.log(memberList[0].hobby[1][0]);
//   // console.log(num);
//   searchList[num-1] = memberList[num-1].hobby[1][0];
// }
// console.log(searchList)

const searchList = ['スポーツ', '音楽', 'アニメ', '銭湯','旅行','野球','サッカー','麻雀','k-pop','メイク','犬','ゲーム','j-pop','プログラミング','YouTube', ];
const searchListEnglish = ['sport', 'music', 'anime', 'sento','trip','baseball','soccer','mahjong','k-pop','Make up','dog','game','j-pop','programming' ];

const searchListBox = document.getElementById('searchListBox');
// console.log(searchListBox)

for (let num = 0; num < searchList.length ; num++) {
  // console.log(num)
  // console.log(searchList[num])
  searchListBox.insertAdjacentHTML('beforeend', '<div class = "ro" id="'+ searchListEnglish[num] +'Log"><label for="anime"><input type="checkbox" id="' + searchListEnglish[num] + 'SearchList" value="' + searchListEnglish[num] + '">' + searchList[num] + '</label></div>');

  // searchListBox.insertAdjacentHTML('beforeend', '<div class = "ro"><label for="anime"><input type="checkbox" id="sportSearchList">' + searchList[num] + '</label></div>');

}


const resultBox = document.getElementById('resultBox');

for (let num = 0; num < searchList.length ; num++) {
  const selectCheck = document.getElementById(searchListEnglish[num] + 'SearchList');

  let canSee = false;
  selectCheck.addEventListener('click', () => {
    if (canSee == false) {
      // クリックされていないとき
      let selectCheck = '<div id="' + searchListEnglish[num] + 'Clicked" class="searchList" >' + searchList[num] 
      + '<span id="' + searchListEnglish[num] + 'Disappear" class = "batsu">✖︎</span>' 
      + '</div>';
      resultBox.insertAdjacentHTML('beforeend', selectCheck);
      canSee = true;
    } else {
      // クリックされているとき
      const element = document.getElementById(searchListEnglish[num] + 'Clicked');
      element.remove();
      canSee = false;
    };

    const disappear = document.getElementById(searchListEnglish[num] + 'Disappear');
    if (disappear !== null) {
      disappear.addEventListener('click', () => {
        // タグを消す
        const element = document.getElementById(searchListEnglish[num] + 'Clicked');
        element.remove();
  
        // チェックボックスのチェックを外す
        document.querySelector("input[type='checkbox'][value='" + searchListEnglish[num] + "']").checked = false;
        canSee = false;
      })
    }
  });

  function inputChange(event) {
    const incorrect = document.getElementById(searchListEnglish[num] +'Log');
    if (event.currentTarget.value !== null && searchList[num].indexOf(event.currentTarget.value) == -1) {
      incorrect.classList.add('displayNone');
    } else {
      incorrect.classList.remove('displayNone');
    }
  }
  
  const search = document.getElementById('search');
  search.addEventListener('change', inputChange);
}



