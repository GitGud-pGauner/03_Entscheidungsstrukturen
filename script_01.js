"use strict";

/*Entscheidungsstrukturen | control flow */

// Deklaration + Assignment
// const ageJohn = 30;
// const ageMark = 35;

// Deklaration
// let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark);

// Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------");

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)

// if(true)
// if(false)
// if(isJohnOlder)
// if(ageJohn > ageMark)
// {
// console.log("John ist älter.");
// }

/********** IF - ELSE ***********/
// mit Alternative
// entweder ja oder nein

// if(true)
// if(false)
// if(isJohnOlder)
// if(ageJohn > ageMark)
// {
//     console.log("John ist älter.");
// } 
// else 
// {
//     console.log("John ist jünger.");
// }

/************  Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");

/************ IF - ELSE IF  ************/
// mit alternativen Fällen (älter, gleich alt, jünger)

// if(isJohnOlder) //1.Test
// {
//     console.log("John ist älter.");
// } 
// else if(isJohnEqual)// 1. ...n Alternative
// {
//     console.log("John ist gleichalt.");
// } 

// else // wenn alle vorherigen Tests fehlschlagen
// {
//     console.log("John ist jünger.");
// }



/****** Fallunterscheidung / SWITCH|CASE 1 ******/

// const firstName = "Jane";
// let job; 

// // job = "driver";      // .. fährt TAXI! / UBER
// job = "diver";       // .. taucht im Rhein! 
// // job = "researcher"   // .. untersucht den Dschungel! 
// // job = "gettinglost"  //  .. lernt Tarzan kennen!
// // job = "pilot";      // .. macht etwas anderes! --> default
// job = "teacher";    // .. unterrichtet!
// // job = "instructor"; // .. unterrichtet!



// switch (job)
// {

//     case "driver": // ( == )
//         console.log(firstName + " fährt TAXI!")
//         break;
        
//     case "diver": // 
//         console.log(firstName + " tauch im Rhein!")
//         break;   
        
//     case "researcher": // 
//         console.log(firstName + " untersucht den Dschungel")
//         break; 

//     case "teacher": //  ( == )
//     case "instructor": // ( == )    
//         console.log(firstName + " unterrichtet")
//         break;  
    
//     case "pilot": // 
//         console.log(firstName + " macht etwas anderes!")
//         break;
    
//     case "gettinglost": // 
//         console.log(firstName + " lernt Tarzan kennen!")
//         break;  
        
//       default:
//         console.log(firstName + " macht was anderes!")
//         break;
// }
/********  Fallunterscheidung / SWITCH|CASE 2 *******/

const cond = false;
const a = 2;

switch (cond) 
{
    case (a==1):
        console.log("a ist gleich 1!");
        break;
    case (a==2):
        console.log("a ist gleich 2!");
        break;
    default:
        console.log("a hat einen anderen Wert");
        break;
}




