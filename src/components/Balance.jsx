//**! ====== === ===================== Component Balance  */
import { useGlobalState } from '../context/GlobalState';

export const Balance = () => {
  const data = useGlobalState();

  return (
    <>
      <div>
        <h1>Balance</h1>
        <span>{JSON.stringify(data)}</span>
      </div>
    </>
  );
};
