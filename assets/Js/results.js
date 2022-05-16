function result() {
    var score = 0;
    if (document.getElementById('correct 1').checked) {
        score++;
    }
    if (document.getElementById('correct 2').checked) {
        score++;
    }
    if (document.getElementById('correct 3').checked) {
        score++;
    }
    if (document.getElementById('correct 4').checked) {
        score++;
    }
    if (document.getElementById('correct 5').checked) {
        score++;
    }


    window.location.href = `./results.html?result=${(score/5)*100}%`
}

const searchUrl = window.location.search;

const searchParams = new URLSearchParams(searchUrl);

const score = searchParams.get('result');

document.querySelector('#result').textContent = score;