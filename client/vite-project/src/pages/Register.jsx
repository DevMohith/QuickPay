import { useState } from "react";
import axios from "axios";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async() => {
        const res = await axios.post("http://localhost:5000/api/auth/login",{
            email,
            password,
        });
        console.log("Register response", res.data);
    };

    return(
        <div>
        <h1>Register</h1>
        <input placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
        <input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleRegister}>Register</button>
        </div>
    );
}