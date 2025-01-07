let p = new Promise((resolve,reject)=>{
    let num=1;
    if(num===1){
        setTimeout(()=>{
            resolve(num);
        },2000)
    }else{
        reject('error');
    }
})
p.then(res=>{
    console.log("Promise resolved!");
})
.catch(err=>{
    console.log("Error the num is not 1");
})