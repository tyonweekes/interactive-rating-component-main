// let rating = document.querySelector('.rating');
// let submitButton = document.querySelector('button');

function submitRating() {
    let thankYouPage = document.querySelector('.main-container-thank-you');
    if (thankYouPage.style.display === 'block') {
        thankYouPage.style.display = 'none';
    } else {
        thankYouPage.style.display = 'block';
    }
}