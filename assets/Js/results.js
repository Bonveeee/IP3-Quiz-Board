

const searchUrl = window.location.search;

const searchParams = new URLSearchParams(searchUrl);

const score = searchParams.get('result');

document.querySelector('#result').textContent = score;