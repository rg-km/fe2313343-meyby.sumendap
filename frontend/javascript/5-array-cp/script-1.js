const sortArray = (n) =>{
    let sum = 0;
    for(let i =0; i< n.length ; i++){
     let willBeSum = sum + n[i];
     let shouldBeSum =  sum+ (n[i-1]+1);
     if(willBeSum !== shouldBeSum){
         if(n[i] > sum){
             sum = n[i];
         }
     }else{
        sum = willBeSum;
     }
    }
    return sum;
}

console.log(sortArray([-1,2,3,-9,11]));
console.log(sortArray([-2,-1,1,2]));
console.log(sortArray([100,-9,2,-3,5]));
console.log(sortArray([1,2,3]));
console.log(sortArray([2,-1,2,3,-9]));
console.log(sortArray([-1,-2,-3]));