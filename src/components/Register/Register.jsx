import React, { useState } from "react"
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";

import "./Register.scss";

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
    <div className="Register-container">
    <form class="form-register" onSubmit={onSubmit}>
        <input class="infos" id="nome" type="text" name="name" placeholder="Nombre y Apellidos" required value={name} onChange={onChange} />
        <div class="mario"></div>
        <input id="email" type="email" name="email" placeholder="Correo electrónico" required value={email} onChange={onChange}/>
        <input class="password" type="password" name="password" placeholder="Contraseña" required value={password} onChange={onChange}/>
        <button class="btn-register" type="submit">Register</button>
    </form>
    </div>
  )
}
export default Register
