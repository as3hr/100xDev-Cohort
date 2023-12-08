let ans=calcTime(1000)

console.log(ans);
function calcTime(n){
    const startTime = new Date();
    
    let sum=0;
    for(let i=0;i<n;i++){
        sum=sum+i;
    }
    const endTime = new Date();

    const elapsedTime=(endTime-startTime)/1000;

    return elapsedTime;
}