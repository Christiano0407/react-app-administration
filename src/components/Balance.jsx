//**! ====== === ===================== Component Balance  */
import { useGlobalState } from '../context/GlobalState';

export const Balance = () => {
  const { transaction } = useGlobalState();

  const amounts = transaction.map((transaction) => transaction.amount);

  const totalPay = amounts.reduce((acc, total) => (acc += total), 0);

  return (
    <>
      <div className="w-full flex flex-col">
        <h1 className="text-[20px] font-bold text-black">Balance Pay</h1>
        <span className="text-[16px] font-normal">
          Amount: {JSON.stringify(amounts)}
        </span>
        <span className="text-[16px] font-normal">
          ${JSON.stringify(totalPay)}
        </span>
      </div>
    </>
  );
};
