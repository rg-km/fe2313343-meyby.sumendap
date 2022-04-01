// Pengecekan angka positif, negatif, atau 0 dengan nested if

// Masukan suatu angka
const number = parseInt(prompt("Masukan bilangan: "));

// TODO: answer here
if(number > 0 ) {
    console.log("bilangan positif");
}else if (number == 0) {
    console.log("bilangan netral / 0");
}else {
    console.log("bilangan negatif");
}