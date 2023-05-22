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
    <>
      <div key={transaction.id} className="p-[10px]">
        <h2 className="font-bold text-xl">Income</h2>
        <span className="font-semibold text-lg">{income}</span>
      </div>
      <div className="p-[10px]">
        <h2 className="font-bold text-xl">Expense</h2>
        <span className="font-semibold text-lg">{expense}</span>
      </div>
    </>
  );
}
