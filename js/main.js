const ctt = document.querySelector('#ctt');
const v1 = document.querySelector('#v1');
const v2 = document.querySelector('#v2');
const v3 = document.querySelector('#v3');
const tb = document.querySelector('#wordbox');
const at = document.querySelector('#amountTime');
const results = document.querySelector('#results');
const copyResults = document.querySelector('#copyResults');
const bh = document.querySelector('#bh');

let timeGo = 59;
let ready = 0;

function fadeOut(fadeMeOut) {
    fadeMeOut.className += ' fadeOut';
    setTimeout(() => {
        fadeMeOut.style.display = "none";
    }, 1000);
}

function fadeIn(fadeMeIn, dType) {
    fadeMeIn.style.display = dType;
    fadeMeIn.className += ' fadeIn';
}

ctt.addEventListener('click', () => {
    fadeOut(v1);
    setTimeout(() => {
        fadeIn(v2, 'flex');
    }, 1000);
});

tb.addEventListener('keypress', () => {
    letsgo()
}, {once : true});


function letsgo() {
    at.innerHTML = '00:' + timeGo;
    let gos = setInterval(() => {
        timeGo = timeGo - 1;
        at.innerHTML = '00:' + timeGo;
        if(timeGo < 10) {
            at.innerHTML = '00:0' + timeGo;
        }
        if (timeGo < 1) {
            clearInterval(gos);
            end();
        }
    }, 1000);

}

function end() {
    fadeOut(v2);
    setTimeout(() => {
        fadeIn(v3, 'flex');
    }, 1000);
    let finVal = parseInt(tb.value.length);
    let finVal2 =finVal;
    let finale = finVal2 / 5;
    results.innerHTML = finale.toFixed();
    bh.innerHTML = finale.toFixed();
}

copyResults.addEventListener('click', () => {
    bh.select();
    document.execCommand('copy');
});
