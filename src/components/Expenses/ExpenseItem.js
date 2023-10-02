

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  /* Basicamente useState() devuelve un array, el primer elemento es el valor predefinido,
  el segundo elemento es otra función, que será usada en un futuro, esa función
  aceptara un parametro que será un nuevo valor para redefinir a la variable devuelta por useState() 
  y esa variable se actualizará en el front */


  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
