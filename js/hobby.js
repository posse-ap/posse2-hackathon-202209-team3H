'use strict';

const searchList = ['スポーツ','アウトドア','アニメ','ゲーム','写真','ドラマ','書道','バイト','音楽','食べ物','娯楽','ディズニー','漫画','YouTube','映画',];
const searchListEnglish = ['sport','outdoor','anime','game','photo','drama','calligraphy','PartTimeJob','music', 'food' ,'entertainment','disney','manga','YouTube','movie'];

const searchListBox = document.getElementById('searchListBox');

for (let num = 0; num < searchList.length ; num++) {
  searchListBox.insertAdjacentHTML('beforeend', '<div class = "ro" id="'+ searchListEnglish[num] +'Log"><label for="anime"><input type="checkbox" id="' + searchListEnglish[num] + 'SearchList" value="' + searchListEnglish[num] + '">' + searchList[num] + '</label></div>');
}

// 写真を表示
let checkedList = [];
function displayPicture(id, searchListJa) {

  // チェックされているidをcheckedListにまとめる
  const choiceId = document.getElementById(id)
  if (choiceId.checked) {
    checkedList.push(searchListJa);
  } else {
    const index = checkedList.indexOf(searchListJa);
    checkedList.splice(index, 1);
  }

  // checkedListにあるidを全て持つ人のみを表示
  let hasHobbyMemberLists = [];
  checkedList.forEach(element => {
    for (let memberLength = 0; memberLength < memberList.length; memberLength++) {
      for (let hobbyNum = 0; hobbyNum < memberList[memberLength].hobby.length; hobbyNum++) {
        // その人がcheckedListにあるidの趣味を持っているか
        if (element === memberList[memberLength].hobby[hobbyNum][0]) {
          hasHobbyMemberLists.push(memberList[memberLength].id);
        }
      }
    }
  })

  // 写真を並べる
  let photoLists = ``;
  for (let memberNum = 0; memberNum < hasHobbyMemberLists.length; memberNum++) {
    photoLists += `<img src="./img-slideshow/` + hasHobbyMemberLists[memberNum] + `.jpg" class = "imgEveryone">`
  }

  const searchResult = document.getElementById('searchResult');
  searchResult.innerHTML = '';
  searchResult.insertAdjacentHTML('beforeend', photoLists);
}


const resultBox = document.getElementById('resultBox');

for (let num = 0; num < searchList.length ; num++) {
  const selectCheck = document.getElementById(searchListEnglish[num] + 'SearchList');

  let canSee = false;
  selectCheck.addEventListener('click', () => {
    if (canSee == false) {
      // クリックされていないとき
      let selectCheck = '<div id="' + searchListEnglish[num] + 'Clicked" class="searchList" >' + searchList[num] 
      + '<span id="' + searchListEnglish[num] + 'Disappear" class = "batten">✖︎</span>' 
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

        displayPicture(searchListEnglish[num] + 'SearchList', searchList[num]);
      })
    }

    displayPicture(searchListEnglish[num] + 'SearchList', searchList[num]);
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
