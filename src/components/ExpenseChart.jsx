//**! === === ================== Victory Chat Component ========================= === === */
import { VictoryPie, VictoryLabel } from 'victory';

export function ExpenseChart() {
  return (
    <div className="w-full p-[10px]">
      <h2 className="font-bold text-white text-center text-[24px] mb-[10px]">
        ExpenseChart
      </h2>
      <VictoryPie
        colorScale={['#e74c3c', '#2ecc71']}
        data={[
          { x: 'Expenses', y: 35 },
          { x: 'Incomes', y: 40 },
        ]}
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
