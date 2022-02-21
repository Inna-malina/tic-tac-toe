let gameSection = document.querySelector('.game__section');
let win = document.querySelector('.resalt__text-win');
let clear = document.querySelector('.button__newgame');
let boxes = document.querySelectorAll('.game__section-box');
let modal = document.querySelector('.modal__window');
let resaltCount = document.querySelector('.resalt__text-count');
let audioClick = document.querySelector('.click');
let audioTada = document.querySelector('.tada');
let audioStendoff = document.querySelector('.stendoff');
let count = 0;
let result = '';
let playerOne;
let playerTwo;

gameSection.addEventListener('click', function (elem) {
    audioClick.play();
    if (elem.target.className == "game__section-box") {
        if (count % 2 === 0) {
            elem.target.textContent = 'x';

        } else {
            elem.target.textContent = 'o';
        }
        count++;
        standOff();
        check();
    }

    resaltCount.textContent = count;
});

function check() {
    let arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < arr.length; i++) {

        if (boxes[arr[i][0]].textContent == 'x' && boxes[arr[i][1]].textContent == 'x' && boxes[arr[i][2]].textContent == 'x') {
            result = 'крестики';
            win.textContent = result;
            modal.style.display = 'flex';
            audioTada.play();
        } else if (boxes[arr[i][0]].textContent == 'o' && boxes[arr[i][1]].textContent == 'o' && boxes[arr[i][2]].textContent == 'o') {
            result = 'нолики';
            win.textContent = result;
            modal.style.display = 'flex';
            audioTada.play();
        }
    }
}


//ничья
function standOff() {

    if (boxes[0].textContent != '' && boxes[1].textContent != '' && boxes[2].textContent != '' && boxes[3].textContent != '' && boxes[4].textContent != '' && boxes[5].textContent != '' && boxes[6].textContent != '' && boxes[7].textContent != '' && boxes[8].textContent != '') {
        result = 'Ничья!';
        win.textContent = result;
        modal.style.display = 'flex';
        audioStendoff.play();
    }
}


clear.addEventListener('click', function () {

    location.reload();
    localStorage.clear();
    let game = {
        "победили": result,
        "сделано ходов": count
    };
    localStorage.setItem('игра', JSON.stringify(game));

    boxes.forEach(function (box) {
        box.textContent = "";
        win.textContent = "";
        modal.style.display = 'none';

    });
});