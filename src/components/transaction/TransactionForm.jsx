//**! ============================= Component Transaction Form */
import { useState } from 'react';
import { useGlobalState } from '../../context/GlobalState';

export const Transaction = () => {
  const { addTransaction } = useGlobalState();

  const [description, setDescription] = useState();

  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID,
      description,
      amount: +amount,
    });
  };

  return (
    <section className="w-full flex justify-center my-5">
      <form
        onSubmit={onSubmit}
        className="w-full p-[20px] m-[20px, auto] flex justify-center items-center flex-col border-4 border-white rounded-lg"
      >
        <input
          type="text"
          placeholder="Enter your description"
          className="p-[15px] text-lg bg-zinc-600 text-white font-semibold w-full my-3 rounded-lg"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          step="0.01"
          placeholder="00:00"
          className="p-[10px] text-lg bg-zinc-600 text-white font-semibold w-full my-3 rounded-lg mb-[10px]"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="p-4 bg-zinc-900 text-white font-medium text-base my-2 rounded-md">
          Add Transaction
        </button>
      </form>
    </section>
  );
};
