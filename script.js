const currdate = document.getElementById('currDate');
const dob = document.querySelector('#DOB');
const calc = document.getElementById('CalcAge');
const displayAge = document.getElementById('displayAge');
const Age = document.getElementById("age");
const okay = document.getElementById("okay");
var today = new Date();
currdate.innerHTML = `Today's Date is: ${today.toLocaleDateString('en-US')}`;

calc.addEventListener("click", () => {
    var birthDate = new Date(dob.value);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m<0 || (m===0) && (today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }
    displayAge.style.visibility="visible";
    Age.innerHTML = `You are ${age} years old`;
});

okay.addEventListener("click", () => {
    displayAge.style.visibility = "hidden";
});