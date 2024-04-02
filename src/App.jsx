import AddToDo from "./AddToDo"
import TODOlist from "./TODOlist"


function App() {
 

  return (
   
    <div className=" bg-white  py-10 h-screen">
      <h1 className=' text-center font-bold text-4xl text-blue-700'>TODO app</h1>
      <hr  className=" border-2 border-gray-500 my-5 mx-10 md:mx-20"/>
      <AddToDo/>
      <TODOlist />

    </div>
     
    
  )
}

export default App
