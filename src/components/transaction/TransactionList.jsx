//** ======================== === Transaction List === ======================================== */
import { useGlobalState } from '../../context/GlobalState';

export function TransactionList() {
  const { transaction, deleteTransaction } = useGlobalState();

  return (
    <div className="w-full p-[10px] my-6 grid grid-cols-3 grid-rows-2 gap-5 ">
      {transaction.map((transactions) => (
        <div
          key={transactions.id}
          className="w-[25rem] flex flex-col p-4 outline-2"
        >
          <p className="font-semibold text-black text-[18px]">
            {transactions.description}
          </p>
          <span className="font-light text-[14px]">{transactions.amount}</span>
          <button
            className="p-4 bg-red-600 text-white font-medium text-base my-2 rounded-md"
            onClick={() => {
              deleteTransaction(transactions.id);
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
