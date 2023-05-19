//** ========================================== === App === ========================================== */
//import { useState } from 'react';
import { Header } from './components/Header';
import { Transaction } from './components/transaction/TransactionForm';
import { Balance } from './components/Balance';
import { TransactionList } from './components/transaction/TransactionList';
import './App.css';

function App() {
  return (
    <>
      <main className="w-full p-2 ">
        <Header />
        <Transaction />
        <TransactionList />
        <Balance />
      </main>
    </>
  );
}

export default App;
