/*
const myPromise = new Promise((resolve,reject)=>{
    console.log("Hi from promise");
    resolve( console.log())
})

function wait(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, n * 1000);
    });
}

module.exports = wait;

// Example usage:
wait(3).then(() => {
    console.log("3 seconds have passed");
});





function sleep(milliseconds) {
    return new Promise((resolve) => {
        const start = Date.now();
        while (Date.now() - start < milliseconds) {
            // Busy wait - keeps the thread busy
        }
        resolve();
    });
}

module.exports = sleep;

// Example usage:
sleep(3000).then(() => {
    console.log("3 seconds have passed");
});


*/




function wait1(t){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            console.log("Hi from wait1")
        },t*1000);
    });
}
function wait2(t){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve();
            console.log("Hi from wait2 ")
        }, t*1000)
    });
}

function wait3(t){
    return new Promise((resolve,reject)=>{
           setTimeout(()=>{
            resolve();
            console.log("Hi from wait 3")
           },t*1000)
    });
}

function calculateTime(t1, t2, t3) {
    const start = Date.now();
     //return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(()     (promisall)
    return wait1(t1).then(()=> wait2(t2)).then(()=> wait3(t3)).then(()=>{console.log("all done"); //(promise chaining);11
        const timeTaken = Date.now() - start;
        console.log("Total time:", timeTaken, "milliseconds");
        return timeTaken;
    });
}

calculateTime(5,7,10);

