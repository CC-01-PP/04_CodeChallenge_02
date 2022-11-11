/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

//Deklaration
let firstName;
let alter;

//Eingabe
firstName = prompt("Bitte ein Name eingeben:","Name");
alter = Number(prompt("Bitte gebe ein Alter .", "Alter"));

//
switch (true) {
    case (alter >=0 && alter <6):
        console.log(firstName + " trinkt Milch.")
        break;
    case (alter <13):
        console.log(firstName + " trinkt Saft.")
        break;
    case (alter <18):
        console.log(firstName + " trinkt Cola.")
        break;
    case (alter >=18):
        console.log(firstName + " trinkt Wein.")
        break;
    default:
        console.log(firstName + " braucht ein gültiges Alter, um ein Getränk zu bekommen!")
        break;
}