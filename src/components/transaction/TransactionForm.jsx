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
      amount,
    });
  };

  return (
    <section className="w-full flex justify-center my-5">
      <form
        onSubmit={onSubmit}
        className="w-1/2 p-5 m-[20px, auto] flex justify-center items-center flex-col border-4 border-sky-950"
      >
        <input
          type="text"
          placeholder="Enter your description"
          className="p-3 text-lg text-black font-semibold w-1/2 my-3"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          step="0.01"
          placeholder="00:00"
          className="p-3 w-1/2 my-3 text-lg text-black "
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="p-4 bg-zinc-900 text-white font-medium text-base my-2 rounded-md">
          Add Transaction
        </button>
      </form>
    </section>
  );
};
