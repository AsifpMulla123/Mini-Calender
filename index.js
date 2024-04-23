const monthName = document.getElementById('month-name');
const dayName = document.getElementById('day-name');
const dateNumber = document.getElementById('day-number');
const year = document.getElementById('year');

const date = new Date();
const month = date.getMonth();
monthName.innerText = date.toLocaleString("en", {
    month: "long",
});
dayName.innerText = date.toLocaleString("en", {
    weekday: "long",
});;
dateNumber.innerText = date.getDate();
year.innerText = date.getFullYear();