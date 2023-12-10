function test(){
    return new Promise((resolve,reject)=>{
    let c='hi';
    resolve(c);
    })
}

function add(c){
    console.log(c);
}

let ans=test();
ans.then(add);