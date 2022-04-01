// Mengembalikan teks yang berkebalikan
//
// contoh: 
// teks = hello world
// hasil:
// dlrow olleh

function reverseString(str) {
    // TODO: answer here
    let result ='';
    for (let i = str.length-1; i>= 0; i--){
        result += str[i];
    }
    return result;
}

const string = prompt('Masukan teks: ');

const result = reverseString(string);
console.log(result);