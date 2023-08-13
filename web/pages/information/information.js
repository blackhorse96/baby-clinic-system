$(document).ready(function () {
    console.log(getToken)
    if (!getToken) {
        window.location.href = 'index.html';
    }
});