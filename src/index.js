import "./styles/main.scss"

if (localStorage.getItem("visited") === null) {
    document.getElementById("overlay").style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
}

localStorage.setItem('visited', 'true');

document.getElementById("overlay").onclick = function () {
    document.getElementById("overlay").style.display = "none";
    document.querySelector("body").style.overflow = null;
}

const urlParams = new URLSearchParams(window.location.search);
const userName = urlParams.get('name');
const userSubscribed = urlParams.get('subscribed');

if (userName) {
    document.getElementById("js-hero-txt").innerHTML = `Welcome ${userName}!`;
}

if (userSubscribed) {
    document.getElementById("js-intro-txt").innerHTML = "<b>Thank you for being a subscriber to our mailing list! Please register to our next raffle!</b>";
}

const days = {
    Sun: 'Sunday',
    Mon: 'Monday',
    Tue: 'Tuesday',
    Wed: 'Wednesday',
    Thu: 'Thursday',
    Fri: 'Friday',
    Sat: 'Saturday'
};
const jsDate = new Date();
jsDate.setDate(26);
jsDate.setMonth(jsDate.getMonth() - 1);

const displayDate = jsDate.toString().split(' ');
displayDate.length = 4;
displayDate[0] = days[displayDate[0]];

document.getElementById("js-date").innerHTML = displayDate.join(', ');

const subForm = document.getElementById("subscribe");


subForm.onsubmit = function (e) {
    e.preventDefault();
    const formName = document.getElementById("formnNme").value;

    // form submit via json post
    const url = "backend.com"
    const formData = new FormData(subForm);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.send(JSON.stringify(formData));


    location.href = `?name=${formName}&subscribed=true`;

}
