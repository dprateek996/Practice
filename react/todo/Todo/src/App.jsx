import { useState } from "react";


// function App() { 
// //   let state = {
// //     count:  0
// //   }
// const [count, setCount] = useState(0);

// // function onClickHandler(){
// // //  state.count = state.count+1
// // setCount (count+1);
// // }
//   return (
//     <div>
//      <CustomButton count = {count}   setCount={setCount}> </CustomButton>
//     </div>
//   )
// }
function CustomButton(props){
 
 function onClickHandler(){
  props.setCount (props.count+1);
 }
 return <button onClick={onClickHandler}>
  Counter {props.count}
 </button>
}




function app(){

  const [todos , setTodos] = useState([{
title: "go to gym",
description:  " got to gym 7-9",
completed : false
  }, 
   {
    title: "Study DSA",
     Description: "Stody ll and arrays",
     completed: faslse
  }]);


function addTodo(){
  setTodos([...todos, {
title: "new todos",
description: "desc of new todo"
  }])
}


  return (
 
    <div>
      <button onClick={addTodo}> Add a random todo  </button>
      {todos.map(function(todo){
        return <Todo title = {todo.title} description={todo.description}/>
      })}
     </div>
  )
}

export default App
