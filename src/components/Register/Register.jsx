import React, { useState } from "react"
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";

const Register = ()=>{
    const {register} = useContext(UserContext)
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:''
    })
    const {name,email,password} = formData
    const onChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log('formData',formData)
    }
  return (
    <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Nombre y Apellidos" required value={name} onChange={onChange} />
        <input type="email" name="email" placeholder="Correo electrónico" required value={email} onChange={onChange}/>
        <input type="password" name="password" placeholder="Contraseña" required value={password} onChange={onChange}/>
        <button type="submit">Register</button>
    </form>
  )
}
export default Register