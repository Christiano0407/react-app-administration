//**! ============================= Component Transaction Form */

export const Transaction = () => {
  return (
    <section className="w-full flex justify-center my-5">
      <form className="w-1/2 p-5 m-[20px, auto] flex justify-center items-center flex-col border-4 border-sky-950">
        <input
          type="text"
          placeholder="Enter your description"
          className="p-3 text-base text-black font-semibold w-1/2"
        />
        <input type="number" placeholder="00:00" className="p-3 w-1/2 my-3 " />
      </form>
    </section>
  );
};
