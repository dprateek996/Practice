import { useState } from "react";


function App() { 
//   let state = {
//     count:  0
//   }
const [count, setCount] = useState(0);

// function onClickHandler(){
// //  state.count = state.count+1
// setCount (count+1);
// }
  return (
    <div>
     <CustomButton count = {count}   setCount={setCount}> </CustomButton>
    </div>
  )
}
function CustomButton(props){
 
 function onClickHandler(){
  props.setCount (props.count+1);
 }
 return <button onClick={onClickHandler}>
  Counter {props.count}
 </button>
}







export default App
