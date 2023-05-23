//**! ====== === ===================== Component Balance  */
import { useGlobalState } from '../context/GlobalState';

export const Balance = () => {
  const { transaction } = useGlobalState();

  const amounts = transaction.map((transaction) => transaction.amount);

  const totalPay = amounts.reduce((acc, total) => (acc += total), 0).toFixed(2);

  return (
    <>
      <div className="w-full flex flex-col p-[10px] mx-auto my-5">
        <h1 className="text-[24px] font-bold text-white text-center mb-3 ">
          Balance Pay
        </h1>
        <span className="text-[16px] font-semibold mb-2 sm:text-center md:text-start">
          Amount: {JSON.stringify(amounts)}
        </span>
        <span className="text-[16px] font-semibold sm:text-center md:text-start">
          Total Pay: {totalPay}
        </span>
      </div>
    </>
  );
};
