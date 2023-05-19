//**! ====== === ===================== Component Balance  */
import { useGlobalState } from '../context/GlobalState';

export const Balance = () => {
  const data = useGlobalState();

  return (
    <>
      <div className="w-full ">
        <h1 className="text-[20px] font-bold text-black">Balance</h1>
        <span className="text-[16px] font-normal">{JSON.stringify(data)}</span>
      </div>
    </>
  );
};
