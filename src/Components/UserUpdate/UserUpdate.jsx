import { useLoaderData } from "react-router-dom";

const UserUpdate = () => {
  const loadedUser = useLoaderData();

  const handleUpdateUser = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const UpdateUser = { name, email };
    console.log(UpdateUser);
    
    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UpdateUser),
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.modifiedCount > 0){
        alert('update user successfully');
        form.reset()
      }
    })
  };
  return (
    <div>
      <h1>update information of {loadedUser.name} user </h1>

      <form onSubmit={handleUpdateUser}>
        <input type="text" name="name" defaultValue={loadedUser.name} />
        <br />
        <input type="email" name="email" defaultValue={loadedUser.email} />
        <br />
        <input type="submit" value="Update User" />
      </form>
    </div>
  );
};

export default UserUpdate;
