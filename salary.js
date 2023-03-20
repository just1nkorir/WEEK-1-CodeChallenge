/* 
  we create to two window prompts for basic salary and benefits
  we then declare variables(basic,benefits) and assign the values collected by the prompts
  after they are converted to integers by parseInt
*/
let basic = parseInt(window.prompt("Enter your basic salary"));
let benefits =parseInt(window.prompt("Enter sum of benefits"));
//We then declare  a variable(gross) and assign it the sum of the values of the basic and benefits variables
let gross = basic + benefits;
//We declare another variable but we do not assign it a value
let tax;
//We create a function to calculate the deduction due to tax
function paye() {
    if(gross <= 24000){
       tax = gross * 0.1; 
    } else if (gross > 24000 && gross <= 32333){
        tax = (24000 * 0.1) + (gross - 24000)*0.25;
    } else {
        tax = (24000 * 0.1) + (32333 - 24000)*0.25 + (gross - 32333)*0.3;
    }
    return tax
}
//We create a function to calculate the deduction due to NSSF
let withnssf;
function nssf() {
    if(gross <= 8000) {
        withnssf = gross * 0.05;
    } else {
        withnssf = 400;
    }
    return withnssf
}
//We create a function to calculate the deduction due to NHIF
let withnhif;
function nhif() {
    if(gross <= 5999) {
        withnhif = 150;
    } else if(gross > 5999 && gross <= 7999) {
        withnhif = 300;
    }  else if(gross > 7999 && gross <= 11999) {
        withnhif = 400;
    } else if(gross > 11999 && gross <= 14999) {
        withnhif = 500;
    } else if(gross > 14999 && gross <= 19999) {
        withnhif = 600;
    } else if(gross > 19999 && gross <= 24999) {
        withnhif = 750;
    } else if(gross > 24999 && gross <= 29999) {
        withnhif = 850;
    } else if(gross > 29999 && gross <= 34999) {
        withnhif = 900;
    } else if(gross > 34999 && gross <= 39999) {
        withnhif = 950;
    } else if(gross > 39999 && gross <= 44999) {
        withnhif = 1000;
    } else if(gross > 44999 && gross <= 49999) {
        withnhif = 1100;
    } else if(gross > 49999 && gross <= 59999) {
        withnhif = 1200;
    } else if(gross > 59999 && gross <= 69999) {
        withnhif = 1300;
    } else if(gross > 69999 && gross <= 79999) {
        withnhif = 1400;
    } else if(gross > 79999 && gross <= 89999) {
        withnhif = 1500;
    } else if(gross > 89999 && gross <= 99999) {
        withnhif = 1600;
    } else {
        withnhif = 1700;
    }
    return withnhif
} 
//We then declare some variables without assigning any value to them
let Paye;
let Nhif;
let Nssf;
let net;
 function netSalary () {
    //we then assign the value of the deduction functions to the variables we have just declare
     Paye = paye();
     Nhif = nhif();
     Nssf = nssf();
     /*
       We then find the sum of the variables we just assigned values to i.e. Paye,Nhif and Nssf.
        We then get the difference of the value of the gross with the sum value to get the net salary.
     */ 
     net = gross - (Paye + Nhif + Nssf);
 }