const inputElements = document.querySelectorAll(".form-class [name]");
const errorEllement =document.querySelector(".error");
const currentYear = new Date().getFullYear();
const minYear = 1950;
let timerID =-1;

function onSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    const employee = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    )
    console.log(employee)
}
function onChange(event) {
    if (event.target.name == "salary") {
        if(+event.target.value < 1000 || +event.target.value > 40000){
           error(event,
            `salary need to be more than 1000 and less than 40000. salary= ${+event.target.value}`);
        }
    }

    if (event.target.name == "birthDate") {
        const arDate = (event.target.value).split('-');
        const selectedYear = +arDate[0];
        if( selectedYear < minYear || selectedYear > currentYear){
            error(event,
                `year has to be more then ${minYear } and less than ${currentYear}. selected year = ${selectedYear}`);
        }
    }
    
}
function error(event, message) {
    event.target.value ='';
    errorEllement.innerHTML = "ERROR: the value of" + message;
    timerID = setTimeout(()=> {
        errorEllement.innerHTML = '';
        
    },5000)
}