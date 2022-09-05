'use strict'

{
  // お題
  const wordWolfQuestion = [
    ['スノーボード', 'スケートボード'], 
    ['ピアニスト', 'ギタリスト'],
    ['泥棒', 'スパイ'],
    ['天気予報', '星座占い'],
    ['ワサビ', 'こしょう'],
  ];

  // プレイヤー設定
  const playerListWrapper = document.getElementById('wordWolfPlayerLists');
  let memberLists = ``
  for (let member = 1; member <= 3; member++) {
    memberLists += `<input type="text" placeholder="プレイヤー` + member + `" class="word-wolf-player-input">`
  }

  playerListWrapper.insertAdjacentHTML('beforeend', memberLists)

  const decreaseMember = document.getElementById('wordWolfDecreaseMember');
  const playerNum = document.getElementById('wordWolfPlayerNum');
  decreaseMember.addEventListener('click', () => {
    if (playerNum.innerText !== '0') {
      playerNum.innerText--;
      playerNum.innerText = playerNum.innerText;

      // 人数構成の市民側の人数を減らす
      const wordWolfGameCitizen = document.getElementById('wordWolfGameCitizen');
      if (wordWolfGameCitizen.innerText !== '0') {
        wordWolfGameCitizen.innerText--;
        wordWolfGameCitizen.innerText = wordWolfGameCitizen.innerText;
      } else {
        const wordWolfGameWolf = document.getElementById('wordWolfGameWolf');
        wordWolfGameWolf.innerText--;
        wordWolfGameWolf.innerText = wordWolfGameWolf.innerText;
      }

      // プレイヤー名入力タグを減らす
      playerListWrapper.innerHTML = '';
      let memberLists = ``
      for (let member = 1; member <= playerNum.innerText; member++) {
        memberLists += `<input type="text" placeholder="プレイヤー` + member + `" class="word-wolf-player-input">`
      }
      playerListWrapper.insertAdjacentHTML('beforeend', memberLists)
    }
  })

  const increaseMember = document.getElementById('wordWolfIncreaseMember');
  increaseMember.addEventListener('click', () => {
    playerNum.innerText++;
    playerNum.innerText = playerNum.innerText;

     // 人数構成の市民側の人数を増やす
    const wordWolfGameCitizen = document.getElementById('wordWolfGameCitizen');
    if (wordWolfGameCitizen.innerText !== '0') {
      wordWolfGameCitizen.innerText++;
      wordWolfGameCitizen.innerText = wordWolfGameCitizen.innerText;
    }

    // プレイヤー名入力タグを増やす
    playerListWrapper.innerHTML = '';
    let memberLists = ``
    for (let member = 1; member <= playerNum.innerText; member++) {
      memberLists += `<input type="text" placeholder="プレイヤー` + member + `" class="word-wolf-player-input">`
    }
    playerListWrapper.insertAdjacentHTML('beforeend', memberLists)
  })

  // ゲーム設定
  // 人数構成
  const wordWolfGameSettingIncreaseCitizen = document.getElementById('wordWolfGameSettingIncreaseCitizen');
  wordWolfGameSettingIncreaseCitizen.addEventListener('click', () => {
    const wordWolfGameCitizen = document.getElementById('wordWolfGameCitizen');
    const wordWolfGameWolf = document.getElementById('wordWolfGameWolf');
    if (wordWolfGameWolf.innerText !== '0') {
      wordWolfGameCitizen.innerText++;
      wordWolfGameWolf.innerText--;
    }
    wordWolfGameCitizen.innerText = wordWolfGameCitizen.innerText;
    wordWolfGameWolf.innerText = wordWolfGameWolf.innerText;
  })

  const wordWolfGameSettingIncreaseWolf = document.getElementById('wordWolfGameSettingIncreaseWolf');
  wordWolfGameSettingIncreaseWolf.addEventListener('click', () => {
    const wordWolfGameCitizen = document.getElementById('wordWolfGameCitizen');
    const wordWolfGameWolf = document.getElementById('wordWolfGameWolf');
    if (wordWolfGameCitizen.innerText !== '0') {
      wordWolfGameCitizen.innerText--;
      wordWolfGameWolf.innerText++;
    }
    wordWolfGameCitizen.innerText = wordWolfGameCitizen.innerText;
    wordWolfGameWolf.innerText = wordWolfGameWolf.innerText;
  })

  // お題カテゴリー
  const themeLists = ['スポーツ', '音楽', 'アニメ', 'アウトドア', '食べ物'];
  const wordWolfTheme = document.getElementById('wordWolfTheme');
  let wordWolfIndex = themeLists.indexOf(wordWolfTheme.innerText);

  const wordWolfThemeBefore = document.getElementById('wordWolfThemeBefore');
  wordWolfThemeBefore.addEventListener('click', () => {
    if (wordWolfIndex === 0) {
      wordWolfIndex = themeLists.length - 1;
    } else {
      wordWolfIndex--;
    }
    wordWolfTheme.innerText = themeLists[wordWolfIndex];
  })

  const wordWolfThemeAfter = document.getElementById('wordWolfThemeAfter');
  wordWolfThemeAfter.addEventListener('click', () => {
    if (wordWolfIndex === themeLists.length - 1) {
      wordWolfIndex = 0;
    } else {
      wordWolfIndex++;
    }
    wordWolfTheme.innerText = themeLists[wordWolfIndex];
  })

  // トーク時間
  const wordWolfDecreaseTalkTime = document.getElementById('wordWolfDecreaseTalkTime');
  wordWolfDecreaseTalkTime.addEventListener('click', () => {
    const wordWolfTalkTime = document.getElementById('wordWolfTalkTime');
    if (wordWolfTalkTime.innerText !== '0') {
      wordWolfTalkTime.innerText--;
    }
    wordWolfTalkTime.innerText = wordWolfTalkTime.innerText;
  })

  const wordWolfIncreaseTalkTime = document.getElementById('wordWolfIncreaseTalkTime');
  wordWolfIncreaseTalkTime.addEventListener('click', () => {
    const wordWolfTalkTime = document.getElementById('wordWolfTalkTime');
    wordWolfTalkTime.innerText++;
    wordWolfTalkTime.innerText = wordWolfTalkTime.innerText;
  });

  // お題表示
  const wordWolfDisplayCard = document.getElementById('wordWolfDisplayCard');
  wordWolfDisplayCard.addEventListener('click', () => {
    // ウルフの決定
    const wordWolfPlayerNum = document.getElementById('wordWolfPlayerNum').innerText;
    const wordWolfGameWolf = document.getElementById('wordWolfGameWolf').innerText;
    let wolfPeople = [];
    for(let i = 1; i <= wordWolfGameWolf; i++){
      while(true){
        let tmp = Math.floor( Math.random() * (wordWolfPlayerNum)) + 1;
        if(!wolfPeople.includes(tmp)){
          wolfPeople.push(tmp);
          break;
        }
      }
    }

    const playerNum = document.getElementById('wordWolfPlayerNum');
    const playersName = document.getElementsByClassName('word-wolf-player-input')

    let cards = `<div class="word-wolf-card-lists">`;

    for (let cardCount = 0; cardCount < playerNum.innerText; cardCount++) {
      if (playersName[cardCount].value === '') {
        let playerNum = cardCount + 1;
        playersName[cardCount].value = 'プレイヤー' + playerNum
      }
      cards += `<div class="word-wolf-card-box" id="wordWolfCardBox${cardCount + 1}"><div class="word-wolf-card" id="wordWolfCard${cardCount + 1}">${playersName[cardCount].value}</div></div>`
    }
    cards += `</div>`
    + `<button class="word-wolf-discussion-start-button" id="wordWolfDiscussionStart">会議を始める</button>`

    let wordWolfCardWrapper = document.getElementById('wordWolfCardWrapper');
    wordWolfCardWrapper.innerHTML = cards;

    // カードをめくる
    let canSeeTheme = false;
    for (let cardCount = 1; cardCount <= playerNum.innerText; cardCount++) {
      const card = document.getElementById('wordWolfCard' + cardCount);
      card.addEventListener('click', () => {
        let nickname = card.innerHTML;
        if (!canSeeTheme) {
          let result = confirm(playersName[cardCount - 1].value + 'がこの画面を見てください。\nお題を表示します。\n他のプレイヤーに見られないように表示してください。');

          if (result) {

            // 本人のときだけカードをめくる
            if (wolfPeople.indexOf(cardCount) != -1) {
              // ウルフ側
              const yourTheme = `<div>`
            + `<p>お題</p>`
            + `<div>「${wordWolfQuestion[wordWolfIndex][1]}」</div>`
            + `</div>`
            card.innerHTML = yourTheme;
            } else {
              // 市民側
              const yourTheme = `<div>`
            + `<p>お題</p>`
            + `<div>「${wordWolfQuestion[wordWolfIndex][0]}」</div>`
            + `</div>`
            card.innerHTML = yourTheme;
            }
            
            const memorizeButton = `<button class="word-wolf-memorize-theme" id="wordWolfMemorizeTheme">覚えた！</button>`
            document.getElementById('wordWolfCardBox' + cardCount).insertAdjacentHTML('beforeend', memorizeButton)
            canSeeTheme = true;
          }
        }

        const wordWolfMemorizeTheme = document.getElementById('wordWolfMemorizeTheme');
        wordWolfMemorizeTheme.addEventListener('click', () => {
          confirm('本当に覚えましたか？');
          card.innerHTML = nickname;
          wordWolfMemorizeTheme.remove()
          canSeeTheme = false;
        })
      })
    }

    // 会議を始める
    const wordWolfDiscussionStart = document.getElementById('wordWolfDiscussionStart');
    let changeState = 0
    wordWolfDiscussionStart.addEventListener('click', () => {
      if (changeState === 0) {
        // 会議を始めたとき
        wordWolfDiscussionStart.innerText = '会議を終了する';
        changeState = 1;
      } else if (changeState === 1) {
        // 会議を終了したとき
        let wolf = 
        `<div class="word-wolf-result">
          <p>ウルフは、、、`
          for (let wolfNum = 0; wolfNum < wolfPeople.length; wolfNum++) {
            wolf += `プレイヤー${wolfPeople[wolfNum]} `
          }
        wolf += `</div>`;
        wordWolfCardWrapper.innerHTML = wolf
      }
    })
  })
}
