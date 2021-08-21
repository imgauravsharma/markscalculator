let calculate = () => {
  let sub1 = document.getElementById("sub1").value;
  let sub2 = document.getElementById("sub2").value;
  let sub3 = document.getElementById("sub3").value;
  let sub4 = document.getElementById("sub4").value;
  let sub5 = document.getElementById("sub5").value;
  let sub6 = document.getElementById("sub6").value;
  let grades = "";

  let result =
    parseFloat(sub1) +
    parseFloat(sub2) +
    parseFloat(sub3) +
    parseFloat(sub4) +
    parseFloat(sub5) +
    parseFloat(sub6);

//   alert(result);

  let percentage = parseFloat((result / 600) * 100);
//   alert(percentage);

  if (percentage <= 100 && percentage >= 91) {
    grades = "A+";
  } else if (percentage <= 90 && percentage >= 81) {
    grades = "A";
  } else if (percentage <= 80 && percentage >= 71) {
    grades = "B+";
  } else if (percentage <= 70 && percentage >= 61) {
    grades = "B";
  } else if (percentage <= 60 && percentage >= 51) {
    grades = "C+";
  } else if (percentage <= 50 && percentage >= 41) {
    grades = "C";
  } else if (percentage <= 40 && percentage >= 31) {
    grades = "D+";
  } else if (percentage <= 30 && percentage >= 21) {
    grades = "D";
  } else if (percentage <= 20 && percentage >= 11) {
    grades = "E+";
  } else if (percentage <= 10 && percentage >= 01) {
    grades = "E";
  }

  if (percentage >= 33) {
    document.getElementById(
        "showdata"
      ).innerHTML = ` Out of 600 your marks is ${result} and Percentag is ${percentage}%. <br> Your Grade is ${grades}. You are Pass `;
          
  } else {
    document.getElementById(
        "showdata"
      ).innerHTML = ` Out of 600 your marks is ${result} and Percentag is ${percentage}%. <br> Your Grade is ${grades}. You are Fail `;
    
      
  }


};
