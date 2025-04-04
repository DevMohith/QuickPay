import { useEffect, useState } from "react";
import axios from "axios";

export default function TransactionList() {
    const [transactions, setTransactions] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:5000/api/payment/history").then((res) => {
            setTransactions(res.data);
        });
    }, []);

    return(
        <div>
            <h3>Transaction History</h3>
            <ul>
                {transactions.map((txn, idx) => (
                    <li key={idx}>
                        {txn.type}: {txn.amount} to {txn.Email}
                    </li>
                ))}
            </ul>
        </div>
    );
}