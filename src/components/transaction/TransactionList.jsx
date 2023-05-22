//** ======================== === Transaction List === ======================================== */
import { useGlobalState } from '../../context/GlobalState';

export function TransactionList(children) {
  const { transaction, deleteTransaction } = useGlobalState();

  return (
    <>
      <h3>History Pay</h3>
      {transaction.map((transaction) => (
        <div
          key={children.id}
          className="w-[25rem] flex flex-col p-4 outline-2"
        >
          <p className="font-semibold text-black text-[18px]">
            {transaction.description}
          </p>
          <span className="font-light text-[14px]">{transaction.amount}</span>
          <button
            className="p-4 bg-red-600 text-white font-medium text-base my-2 rounded-md"
            onClick={() => {
              deleteTransaction(transaction.id);
            }}
          >
            X
          </button>
        </div>
      ))}
    </>
  );
}
