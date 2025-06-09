export interface Expenses {
  id: number;
  description: string;
  category: string;
  price: number;
}

interface Props {
  expenses: Expenses[];
  onDelete:(id:number)=>void
}

const ExpenseList = ({ expenses,onDelete }: Props) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Descripton</th>
          <th>Category</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.category}</td>
            <td>{expense.price}</td>
            <td>
              <button className="btn btn-outline-danger" onClick={()=>onDelete(expense.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
            <td>Total</td>
            <td></td>
            <td>{expenses.reduce((acc, expense)=>expense.price+acc,0)}</td>
            <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
