import React,{useEffect} from 'react';
import Context from './context';
import Todolist from './Todo/TodoList';
import Loading from './Loading';
import Modal from './Modal/Modal.js'

const AddTodo = React.lazy(
  ()=> new Promise(resolve => {
      setTimeout(()=>{
          resolve(import('./Todo/AddTodo'))
      },3000)
  })
);


function App() {
    const [todos, setTodos] = React.useState([
        {
            id: 1,
            completed: false,
            title: 'C#'
        }, {
            id: 2,
            completed: false,
            title: 'Asp.Net MVC'
        }, {
            id: 3,
            completed: false,
            title: 'Asp.Net Core'
        },
    ]);

    const[loading, setLoading] = React.useState(true);
    
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(response => response.json())
    .then(todos => {
      setTimeout(()=>{setTodos(todos); setLoading(false)},2000)
    })
    },[])

   function toggleTodo(id)
   {
    setTodos(todos.map(item => {
       if(item.id === id)
      {
        item.completed = !item.completed
      }
      return item;
     }))
   }
   function removeTodo(id)
   {
     setTodos(todos.filter(todo => todo.id !== id))
   }
   function addTodo(title)
   {
     setTodos(
       todos.concat([{
         title,
         id: Date.now(),
         completed: false
       }])
     )
   }
    return (
      <Context.Provider value={{removeTodo : removeTodo}}>
        <div className="wrapper">
            <h1>React Tutorial</h1>
            <Modal/>
         <React.Suspense fallback={<p>Loading...</p>}>
         <AddTodo onCreate={addTodo}/>
         </React.Suspense>
            {loading && <Loading/>}
            {
            todos.length ? 
            <Todolist todos={todos} onToggle = {toggleTodo}/> :
            (loading ? null : <p>No todos</p>)
          }
        </div>
        </Context.Provider>
    )


}

export default App;
