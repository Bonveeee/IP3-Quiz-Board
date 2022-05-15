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


    document.write("<h1>Your Result is:" + score * 10 + "%<h1>" +
        "<p>Excellent>=80%, Very Good>=70%,Average>=50%, Fail is below 50% <br> Refresh to start again!<p>"
    );
}