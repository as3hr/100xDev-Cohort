const numbers=[1,2,3,4,5];

let ans=findLargest(numbers)

console.log(ans);
function findLargest(numbers){
    let largest=numbers[0];


    for(let i=0;i<numbers.length;i++){
        if(numbers[i]<numbers[i+1]){
            largest=numbers[i+1];
        }
    }

    return largest;
}