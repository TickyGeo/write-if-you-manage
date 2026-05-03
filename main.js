const viewBox = document.querySelector('.game .display .view .box');
const exampleBox = document.querySelector('.game .display .example .box');
const point = document.querySelector('.game .display .point');
const editor = document.querySelector('.game #editor');
const ending = document.querySelector('.game .display .ending');
const restartBtn = document.querySelector('.game .restart');
const menu = document.querySelector('.menu');
const btn = document.querySelectorAll('.menu .control .btn');
const description = document.querySelector('.menu .description');
const closeBtn = document.querySelector('.menu button');
const theme = new Audio('theme.mp3');
theme.onended = () => theme.play();


let room = 0;

const winner = x => {
    room++;
    point.innerHTML = `${room}<br>Point`;
    editor.style.color = '#01e532';
    exampleBox.style = null;
    viewBox.style = x;
    if (room == 8) {
        point.style.scale = '1.3';
        ending.style.opacity = '1';
        editor.style.pointerEvents = 'none';
        restartBtn.style.left = '80%';
    };
    viewBox.ontransitionend = () => {
        editor.style.color = null;
        editor.value = '';
    };

};

const check = val => {
    return [
        val.includes('width: 200px;') && val.includes('height: 200px;') && val.includes('background: red;'),
        val.includes('width: 300px;') && val.includes('height: 100px;') && val.includes('background: orange;'),
        val.includes('width: 100px;') && val.includes('height: 100px;') && val.includes('background: pink;') && (val.includes('border: 5px solid blue;') || val.includes('border: solid 5px blue;')),
        val.includes('width: 200px;') && val.includes('height: 200px;') && val.includes('background: pink;') && (val.includes('border: 5px solid blue;') || val.includes('border: solid 5px blue;')) && val.includes('border-radius: 50%;'),
        val.includes('width: 200px;') && val.includes('height: 200px;') && val.includes('background: black;') && (val.includes('border: 15px dotted red;') || val.includes('border: dotted 15px red;')),
        val.includes('width: 200px;') && val.includes('height: 300px;') && val.includes('background: blue;') && (val.includes('border: 15px dotted white;') || val.includes('border: dotted 15px white;')) && val.includes('border-radius: 40%;'),
        val.includes('width: 200px;') && val.includes('height: 200px;') && val.includes('background: gold;') && val.includes('border-radius: 50%;') && val.includes('box-shadow: 0 0 20px black;'),
        val.includes('width: 400px;') && val.includes('height: 300px;') && val.includes('background: blue;') && (val.includes('border: 15px dotted white;') || val.includes('border: dotted 15px white;')) && val.includes('border-radius: 40%;') && val.includes('cursor: pointer;'),
    ][room];
};


const style = [
    'width: 300px; height: 100px; background: orange',
    'width: 100px; height: 100px; background: pink; border: 5px solid blue;',
    'width: 200px; height: 200px; background: pink; border: 5px solid blue; border-radius: 50%;',
    'width: 200px; height: 200px; background: black; border: 15px dotted red;',
    'width: 200px; height: 300px; background: blue; border: 15px dotted white; border-radius: 40%;',
    'width: 200px; height: 200px; background: gold; border-radius: 50%; box-shadow: 0 0 20px black;',
    'width: 400px; height: 300px; background: blue; border: 15px dotted white; border-radius: 40%; cursor: pointer;',
    'width: 0; height: 0;',
];

editor.oninput = () => {
    let val = editor.value;
    exampleBox.style = val;
    if (check(val)) {
        winner(style[room]);
    };
};

btn[0].onclick = () => {
    menu.style.top = '-100%';
    theme.play();
};

btn[1].onclick = () => {
    description.style.left = '50%';
};

btn[2].onclick = () => {
    close();
};

closeBtn.onclick = () => {
    description.style.left = null;
};

restartBtn.onclick = () => {
    room = 0;
    point.innerHTML = `0<br>Point`;
    point.style.scale = '1';
    ending.style.opacity = '0';
    editor.style.pointerEvents = 'auto';
    editor.value = '';
    editor.style.color = null;
    viewBox.style = '';
    exampleBox.style = '';
    restartBtn.style.left = '150%';
};
