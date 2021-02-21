let cookies = document.cookie;

if (cookies.includes('firstVisit=no')) {
    document.querySelector('.js-block').classList.add('bg-danger');
    document.querySelector('.js-block').classList.remove('bg-success');
} else {
    document.querySelector('.js-block').classList.add('bg-success');
    document.querySelector('.js-block').classList.remove('bg-danger');
}

document.cookie = "firstVisit=no";