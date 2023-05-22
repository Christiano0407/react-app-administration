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
      <main className="w-full p-2 ">
        <Header />
        <IncomeExpenses />
        <Transaction />
        <TransactionList />
        <Balance />
      </main>
    </>
  );
}

export default App;
