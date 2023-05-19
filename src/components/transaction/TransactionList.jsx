//** ======================== === Transaction List === ======================================== */
import { useGlobalState } from '../../context/GlobalState';

export function TransactionList({ children }) {
  const { transactions } = useGlobalState();

  return (
    <div>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <p>{transaction.description}</p>
          <span>{transaction.amount}</span>
        </div>
      ))}
    </div>
  );
}
