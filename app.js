// console.log("this");

let button = document.querySelector('.button');
let main = document.querySelector('.main');

let hours = document.querySelector('#hours');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');

setInterval(clock_update, 1000);

function clock_update() {

    let current_time = new Date();
    // console.log(current_time);

    //Get all time
    let seconds = current_time.getSeconds();
    // console.log(seconds);
    let minutes = current_time.getMinutes();
    let hour = current_time.getHours();
    // console.log(hour);



    //rotation degree
    let sec_degree = -90 + (seconds * 6);
    let min_degree = -90 + (minutes * (360 / 60));
    let hours_degree = -90 + (hour * (360 / 12));

    //rotation
    sec.style.transform = "rotate(" + sec_degree + "deg)";
    min.style.transform = "rotate(" + min_degree + "deg)";
    hours.style.transform = "rotate(" + hours_degree + "deg)";


}

clock_update(); //call function





// Dark mode function
let toggle_value = 0;
button.addEventListener("click", function() {
    // console.log("click")
    if (toggle_value == 0) {
        toggle_value = 1;
        button.innerHTML = '<i class = "fa fa-sun-o"></i>';
    } else {
        toggle_value = 0;
        button.innerHTML = '<i class = "fa fa-moon-o"></i>';
    }
    main.classList.toggle('dark_mode')
});