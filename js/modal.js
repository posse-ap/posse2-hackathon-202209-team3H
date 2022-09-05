'use strict'

for (let human = 1;human<=memberList.length;human++){
  const openModal = document.getElementById(memberList[human-1].id+'Slideshow');

  openModal.addEventListener('click', () => {
    let afterClick = 
    `<div class=gray id=gray>`
    +  `<div class=white>`
    +  `<img class=photo src=./img-slideshow/${memberList[human-1].id}.jpg>
        <div class=info>
          <h1 class=name>${memberList[human-1].name}</h1>
          <h3 class=univ>${memberList[human-1].univ}</h3>
          <h3 class=from>${memberList[human-1].from}</>
          <h3 class=birthday>${memberList[human-1].birthDay}</>`;

        for (let hobbyNumber=0; hobbyNumber < memberList[human-1].hobby.length;hobbyNumber++) {
          afterClick +=
          `<h3 class=hobby>${memberList[human-1].hobby[hobbyNumber][0]}</h3>`

          + `<p class=hobby>${memberList[human-1].hobby[hobbyNumber][1]}</p>`
        }

        afterClick +=
        `</div>`
    +  `<img class=batsu id="close" src=./img/battenn.png>`
    +  `</div>`
    +`</div>`
    const body = document.getElementById('body');
    body.insertAdjacentHTML("beforebegin",afterClick)
  
  
    const closeModal = document.getElementById('close');
    const closeModal2 = document.getElementById('gray');
  
    closeModal.addEventListener('click', () => {
      closeModal2.remove()
  })
  })
}
