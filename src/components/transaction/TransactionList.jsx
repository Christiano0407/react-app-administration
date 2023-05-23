//** ======================== === Transaction List === ======================================== */
import { useGlobalState } from '../../context/GlobalState';

export function TransactionList(children) {
  const { transaction, deleteTransaction } = useGlobalState();

  return (
    <section className="w-full p-[10px] mx-auto my-5">
      <h2 className="font-bold text-white text-center text-[24px] mb-[10px]">
        History Pay
      </h2>
      {transaction.map((transaction) => (
        <div
          key={children.id}
          className="w-[25rem] flex flex-col p-4  mx-auto my-5 border-solid border-2 border-[#f4f4f4] rounded-2xl"
        >
          <p className="font-semibold text-white text-[18px] text-center mb-2">
            {transaction.description}
          </p>
          <span className="font-semibold text-[16px] mb-2">
            {transaction.amount}
          </span>
          <button
            className="p-4 bg-red-600 text-white font-medium text-base my-2 rounded-md"
            onClick={() => {
              deleteTransaction(transaction.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </section>
  );
}
