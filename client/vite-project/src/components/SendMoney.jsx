import { useState } from "react";
import axios from "axios";

export default function SendMoney() {
    const [toEmail, setToEmail] = useState("");
    const [amount, setAmount] = useState("");

    const send = async () => {
        const res = axios.post("http://localhost:5000/api/payment/send",{
            toEmail,
            amount,
        });
        alert(res.data.message);
    };

    return(
        <div>
            <h2>Send Money</h2>
            <input placeholder="To Email" onChange={(e) => setToEmail(e.target.value)}/>
            <input placeholder="amount" onChange={(e) => setAmount(e.target.value)}/>
            <button onClick={send}>Send</button>
        </div>
    );
}