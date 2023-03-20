//we declare a variable and assign it the value passed into the window prompt
//we turn the value collected by the prompt to an integer with parseInt
let mark = parseInt(window.prompt("Enter your marks"));
let grade;
/*we create a function to assign grades with regards to the marks with 
a conditional statement*/
function gradeAssigner() {
     if(mark >= 80 && mark <= 100) {
        grade = 'You got an A.';
    } else if (mark < 80 && mark >= 60) {
        grade = 'You got a B.';
    } else if (mark < 60 && mark >=50) {
        grade = 'You got a C.';
    } else if (mark < 50 && mark >=40) {
        grade = 'You got a D.';
    } else if (mark < 40 && mark >= 0) {
        grade = 'You got a E.';
    } else {
        console.log('Enter correct marks.')
    }
    console.log(grade)
}
