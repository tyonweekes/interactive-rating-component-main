let oneStar = document.getElementById('1');
let twoStars = document.getElementById('2');
let threeStars = document.getElementById('3');
let fourStars = document.getElementById('4');
let fiveStars = document.getElementById('5');
let ratingSpace = document.getElementById('selected-rating');
let submitButton = document.querySelector('button');

oneStar.addEventListener('click', function() {
    ratingSpace.textContent = '1';
});

twoStars.addEventListener('click', function() {
    ratingSpace.textContent = '2';
});

threeStars.addEventListener('click', function() {
    ratingSpace.textContent = '3';
});

fourStars.addEventListener('click', function() {
    ratingSpace.textContent = '4';
});

fiveStars.addEventListener('click', function() {
    ratingSpace.textContent = '5';
});

submitButton.addEventListener('click', function() {
    let thankYouPage = document.querySelector('.main-container-thank-you');
    if (thankYouPage.style.display === 'block') {
        thankYouPage.style.display = 'none';
    } else {
        thankYouPage.style.display = 'block';
    }
});