import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Router/Router";

function App() {
  // const handleAddUser = (event) => {
  //   event.preventDefault();

  //   const form = event.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const user = { name, email };
  //   console.log(user);
    
  //   fetch("http://localhost:5000/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(user),
  //   })
  //   .then(res => res.json())
  //   .then(data =>{
  //     console.log(data);
  //     if(data.insertedId){
  //       alert('new user added successfully');
  //       form.reset()
  //     }
  //   })
  // };

  return (
    <div className='max-w-screen-xl mx-auto'>
    <RouterProvider router={router}></RouterProvider>
    {/* <Toaster></Toaster> */}
  </div>
  );
}

export default App;
