function createEmployee(id, name, birthYear, salary) {
     return {id, name, birthYear, salary};
}


function createRandomEmployees(nEmployees,idDigits, minSalary, maxSalary, minBirthYear,
    maxBirthYear) {
        let employees = [];
        let uniqueIds = [0];
        minId = Math.pow(10,idDigits-1);
        maxId = Math.pow(10,idDigits);
        for(let i=0; i<nEmployees; i++) {
            let id = getUniqueRandomId(minId, maxId, uniqueIds);
            //let name = "name"+id;
            employees.push(createEmployee(id,'name'+id,
            getRandomIntegerValue(minBirthYear,maxBirthYear),
            getRandomIntegerValue(minSalary,maxSalary)));
        }
        return employees;
    }


    function getUniqueRandomId(minId, maxId, uniqueIds) {
        let id = uniqueIds[0];
        do{
            id = getRandomIntegerValue(minId, maxId);
        }while(uniqueIds.includes(id))
        uniqueIds.push(id);
        return id;
    }

    // function getUniqueRandomId1( minId, maxId, uniqueIds) {
    //     let id = uniqueIds[0];
    //     do {
    //         id = getRandomIntegerValue(minId, maxId);
    //     }while(!uniqueIds.every(unId => unId != id))
    //     uniqueIds.push(id);
    //     return id;
    // }

    function getRandomIntegerValue(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max-min)+min);
    }

    let allEmps = createRandomEmployees(8,3,10000,20000,1955,2002);
    console.log("task 1 ", allEmps);


    function getAverageAge(employees) {
        let currentDateYear = (new Date()).getFullYear();
        return Math.round(employees.reduce((sum,empl) =>{
            return sum+currentDateYear-empl.birthYear;
        },0)/employees.length);
    }
    console.log("task 2 ", " averageAge=",getAverageAge(allEmps));

    function getEmployessBySalary(employees, minSalary, maxSalary) {
        return employees.filter(empl => empl.salary > minSalary && maxSalary).sort((empl1,empl2) => empl1.salary - empl2.salary);
    }
    console.log("task3", getEmployessBySalary(allEmps, 14500,17100));


    // function increaseSalary1(employees, borderSalary, percent) {
    //     employees.filter(empl => empl.salary < borderSalary).forEach(empl =>
    //         empl.salary += empl.salary*percent/100);
    // }
    // increaseSalary1(allEmps,15000,10);
    // console.log("task4",allEmps);
    
    function increaseSalary(employees, borderSalary, percent) {
        return employees.map(employee => {
            if(employee.salary < borderSalary) {
                employee.salary += employee.salary*percent/100;
            }
            return employee;
        })
    }
    console.log("task4",increaseSalary(allEmps,1500,10));


