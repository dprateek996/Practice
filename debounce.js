

function populateDiv(){
 const a = document.getElementById("input1");
 const b = document.getElementById("input2");
  console.log(a+b);
}


function debouncePopulateDiv(){
 
    const timeout = setTimeout(function(){
    populateDiv()
    },1000);
    clearTimeout(timeout); 

}