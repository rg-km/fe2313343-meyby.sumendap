function searchMatch(arr1, arr2) {
    let result = [];
    let arrBaru = arr1.concat(arr2);

    for(let i = 0; i < arrBaru.length; i++) {
   for (let j = i+1; j < arrBaru.length; j++) {
       if(arrBaru[i] == arrBaru[j]){
           result.push(arrBaru[j]);
       }
   }
}
    return result // TODO: replace this
}

let cars1 = ["Toyota", "Honda", "Nissan", "BMW", "Chevy", "Ford"];
let cars2 = ["Ford", "BMW", "Audi", "Mercedes"];

result = searchMatch(cars1, cars2);
console.log(result);

module.exports = {searchMatch}