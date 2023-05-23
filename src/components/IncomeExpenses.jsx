////** ===================== === Component Income Expenses === ===================== */
import { useGlobalState } from '../context/GlobalState';

export default function IncomeExpenses() {
  const { transaction } = useGlobalState();

  const amounts = transaction.map((pay) => pay.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts
      .filter((item) => item < 0)
      .reduce((acc, items) => (acc += items), 0) * -1;

  return (
    <section className="w-full p-[10px] mx-auto my-5 ">
      <div
        key={transaction.id}
        className="p-[10px] sm:text-center md:text-start"
      >
        <h2 className="font-bold mb-2 sm:text-3xl md:text-2xl">Income</h2>
        <span className="font-semibold text-lg">${income}</span>
      </div>
      <div className="p-[10px] sm:text-center md:text-start">
        <h2 className="font-bold mb-2 sm:text-3xl md:text-2xl">Expense</h2>
        <span className="font-semibold text-lg">${expense}</span>
      </div>
    </section>
  );
}
