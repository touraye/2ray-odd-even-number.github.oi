
// let oddOrEven = (number) =>{
//     if(number === 0){
//         return 'Even'
//     } else if (number === 1){
//         return 'Odd'
//     } else {
//         return oddOrEven(number - 2)
//     }
// }

// console.log(oddOrEven());

let oddOrEven = (number) =>{
  if(number % 2 == 0){
    return 'an Even';
  } else {
    return 'a Odd';
  }
}



function input() {
    let myInput = prompt('Type in your number');
    let option = oddOrEven(myInput);
    let myAns = document.createElement('h3');
    const textAns = document.createTextNode(`${myInput} is ${option} number`);
    myAns.setAttribute("id", "input");
    myAns.appendChild(textAns);
    document.getElementById('result').appendChild(myAns)
}

function reset() {
    let refresh = alert('Tap F5 or refresh your broswer')
    document.getElementById('result').remove();
}
