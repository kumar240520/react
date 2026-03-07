import { useState } from 'react';


function Form() {
  // 1. Create a single state variable with an object for all fields
  const [details, setDetails] = useState({
    name: '',
    email: '',
    password: '',
    address: ''
  });

  // 2. Create a single handle change function for all inputs
  const handleChange = (e) => {
    // Extract name and value using object destructuring 
    const { name, value } = e.target; 
    
    // Return all previous properties and replace the value of the specific field 
    setDetails((prev) => {
      return { ...prev, [name]: value }; 
    });
  };

  // 3. Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop the default page refresh behavior
    console.log(details); // You could call an API here to send details to a server
  };

  return (
    // Call handleSubmit on the form's onSubmit event
    <form onSubmit={handleSubmit}>
      <h3>Name</h3>
      {/* Ensure the 'name' attribute matches the property in the state object exactly */}
      <input type="text" name="name" onChange={handleChange} />

      <h3>Email</h3>
      <input type="email" name="email" onChange={handleChange} />

      <h3>Password</h3>
      <input type="password" name="password" onChange={handleChange} />

      <h3>Address</h3>
      <textarea name="address" onChange={handleChange}></textarea>

      <button type="submit">Submit Form</button>
    </form>
  );
}

export default Form;