

const RegisterComponent = () => {
  return (
    <div className="container">
      <h1>Register Form</h1>
      <form>
        <label>Enter Name</label>
        <input type="text" name="name" placeholder="Enter Full name"/>
        <label>Enter Email</label>
        <input type="email" name="email" placeholder="Enter Email"/><label>Enter Password</label>
        <input type="password" name="password" placeholder="Enter Password"/>
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default RegisterComponent