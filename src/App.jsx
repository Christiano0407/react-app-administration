//** ========================================== === App === ========================================== */
//import { useState } from 'react';
import { Header } from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import { Transaction } from './components/transaction/TransactionForm';
import { TransactionList } from './components/transaction/TransactionList';
import { Balance } from './components/Balance';
import './App.css';

function App() {
  return (
    <>
      <main className="w-full sm:h-full md:h-screen bg-zinc-800 text-white p-[10px] grid sm:grid-cols-1 md:grid-cols-2 grid-flow-row gap-4">
        <section className="bg-zinc-800 p-10  flex flex-col col-start-1 col-end-2">
          <Header />
          <IncomeExpenses />
          <Transaction />
        </section>
        <section className="sm:col-start-1 md:col-start-2 col-end-4 bg-zinc-800 p-10 flex flex-col">
          <TransactionList />
          <Balance />
        </section>
      </main>
    </>
  );
}

export default App;
