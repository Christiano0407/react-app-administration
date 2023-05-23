//**! === === ================== Victory Chat Component ========================= === === */
import { VictoryPie, VictoryLabel } from 'victory';
import { useGlobalState } from '../context/GlobalState';

export function ExpenseChart() {
  const { transaction } = useGlobalState();

  const payTotal = transaction.reduce(
    (acc, transaction) => (acc += transaction.amount),
    0
  );
  // == Total de Ingresos ==
  const incomeTotal = transaction
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);
  // === Total de Gastos ===
  const expenseTotal =
    transaction
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const totalPercentageExpense = Math.round((expenseTotal / incomeTotal) * 100);

  const incomeTotalPercentage = 100 - totalPercentageExpense;

  return (
    <div className="w-full p-[10px]">
      <h2 className="font-bold text-white text-center text-[24px] mb-[10px]">
        ExpenseChart
      </h2>
      <VictoryPie
        colorScale={['#e74c3c', '#2ecc71']}
        data={[
          { x: 'Expenses', y: totalPercentageExpense },
          { x: 'Incomes', y: incomeTotalPercentage },
        ]}
        animate={{
          duration: 200,
        }}
        labels={({ datum }) => `${datum.y}%`}
        labelComponent={
          <VictoryLabel
            angle={45}
            style={{
              fill: 'White',
            }}
          />
        }
      />
    </div>
  );
}
