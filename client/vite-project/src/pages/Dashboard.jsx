import SendMoney from "../components/SendMoney";
import TransactionList from "../components/TransactionList";

export default function Dashboard(){
return(
    <div>
    <h2>Dashboard</h2>
    <SendMoney />
    <TransactionList />
    </div>
);
}