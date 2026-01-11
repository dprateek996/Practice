/*function counter() {
    let count = 0;
    for (var i = 0; i < 60; i++) {
        count = count + i;
        console.log(count); // prints each value
    }
}
setInterval(counter, 1000);




let count = 0;
const timer = setTimeout(()=>{
    console.log(count);
    count++;
    
}, 1000);

*/


function counter() {
    for (let i = 0; i < 10; i++) {
        setTimeout(function() {
            console.log(i);
        }, i * 1000);
    }
}

counter();



