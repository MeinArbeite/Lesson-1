// 1
// const Svetofor = prompt("Пожалуйста выберите цвет? (green, gelb, rot)");
// console.log("Svetofor");
// var green = true;
// var gelb = true;
// var rot = true;

// var Allcolor = green + gelb + rot;
// if (Svetofor === 'green') {
//     console.log("Gehen");
// } else if (Svetofor === 'gelb') {
//     console.log("Warten");
    
// } else if (Svetofor === 'rot') {
//     console.log("Stop");
// } else {
//     console.log("Пожалуйста выберите цвет правильно!");
// }

//2

const convert = Number(prompt('Пожалуйста введите числа?'))

if(convert === 1){
    console.log('1 => I');
}else if (convert === 2) {
    console.log('2 => II');
} else if (convert === 3) {
    console.log('3 => III');
} else if (convert === 4) {
    console.log('4 => IV');
} else if (convert === 5) {
    console.log('5 => V');
} else if (convert === 6) {
    console.log('6 => VI');
} else if (convert === 7) {
    console.log('7 => VII');
} else if (convert === 8) {
    console.log('8 => VIII');
} else if (convert === 9) {
    console.log('9 => IX');
} else {
    console.log('Пожалуйста напишите правильно!');
}

// 3
 
var bait = 1561569
var kgbait = bait / 1024 
var mgbait = kgbait / 1024

console.log(`${bait} bait = ${kgbait.toFixed(6)} + kgbait `);
console.log(`${bait} bait = ${mgbait.toFixed(9)} + mgbait`);

