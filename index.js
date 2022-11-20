// Your code here


function createEmployeeRecord(array){
    // let's define the desired object
    const obj= {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    //lets return our object 
return obj
}


function createEmployeeRecords (array){

    return array.map(arr => { // take the erray given, and gives us a new array "arr" depending // on whatever the changes we do to each element 
 
        return createEmployeeRecord(arr)
    })  

}

function createTimeInEvent(employeeObj, dateStamp){   

    const date = dateStamp.split(" ")
    
    employeeObj.timeInEvents.push( {
        type: "TimeIn",
        hour: parseInt(date[1]),
        date: date[0]
    })
     
    return employeeObj;
}

//let bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])
//et updatedBpRecord = createTimeInEvent(bpRecord, "2014-02-28 1400")

function createTimeOutEvent(employeeObjOut, dateStampOut){
    
    const dateAtEnd = dateStampOut.split(" ")
    
    employeeObjOut.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateAtEnd[1]),
        date: dateAtEnd[0]
    })
    return employeeObjOut
}

//let updatedBpRecord = createTimeOutEvent(bpRecord, "2015-02-28 1700")
//let newEvent = updatedBpRecord.timeOutEvents[0]


function hoursWorkedOnDate(employeeObj, date){
//console.log( employeeObj, date)
    const resultA = employeeObj.timeInEvents.find(element=> element.date === date).hour 
    const resultB = employeeObj.timeOutEvents.find(element=> element.date === date).hour
    const resultC = resultB - resultA

    return resultC/100
   //console.log(employeeObj.timeInEvents[0].hour)
}

function wagesEarnedOnDate(employeeObj, date){
    const resultA = employeeObj.timeInEvents.find(element=> element.date === date).hour 
    const resultB = employeeObj.timeOutEvents.find(element=> element.date === date).hour
    const resultC = resultB - resultA

    const resultD = employeeObj.payPerHour
    const resultE = resultD*resultC

    return resultE/100

}

function allWagesFor(employeeObj){

    const date = employeeObj.timeInEvents.map(variable => variable.date)

    const pay = date.reduce(function(a, b){
        return a + wagesEarnedOnDate(employeeObj, b)

    },0)
//console.log(pay);
return pay


}


function calculatePayroll(array){

   
 

    return array.reduce(function(a, b){ 

     return a + allWagesFor(b)
    },0)

}









//console.log(employeeObj.timeInEvents[0].date)


//const loopingOver = employeeObj;







/*
for (const element of loopingOver.timeInEvents){
    console.log(element)
}
for (const element of loopingOver.timeOutEvents){
    console.log(element)
}
*/



//cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
//updatedBpRecord = createTimeInEvent(cRecord, "0044-03-15 0900")
//updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-15 1100")
//expect(wagesEarnedOnDate(cRecord, "0044-03-15")).to.equal(54)

