/* Összegzés algoritmus */
let numericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sum = 0;
for (let i = 0; i < numericArray.length ; i++) {
    sum += numericArray[i];
}
console.log("Szum: ", sum);

/* Számlálás algoritmusa */
let db = 0;
for ( i = 0; i < numericArray.length; i++) {
    if (numericArray[i] % 2 == 0) {
        db++;
    }
}
console.log("Darab: ", db);

/* Szélsőérték keresés */
let biggest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] > biggest) {
        biggest = numericArray[i]
    }
   
}
console.log("Legnagyobb: ", biggest);

/* Eldöntés tétele */
let contains = false;
for (let i = 0; i < numericArray.length && !contains; i++) {
    if (numericArray[i] == 5) {
        contains = true;
    }
    
}
console.log("Tartalmazza: ", contains);