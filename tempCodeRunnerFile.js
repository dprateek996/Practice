
function wait1(t){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },t*1000);
    });
}
function wait2(t){
    return new Promise((resolve, reject) => {
        settimeout(()=>{
            resolve();

        }, t*1000)
    });
}

function wait3(t){
    return new promise((resolve,reject)=>{
           settimeout(()=>{
            resolve();
           },t*1000)
    });
}

function calculateTime(t1, t2, t3){
    wait1(t1);
    wait2(t2);
    wait3(t3);
}
calculateTime(5,7,10).then(()=>{
    console.log (wait3-wait-2-wait1);
})