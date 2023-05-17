//** ========================================== === App === ========================================== */
//import { useState } from 'react';
import { Header } from './components/Header';
import { Transaction } from './components/TransactionForm';
import { Balance } from './components/Balance';
import './App.css';

function App() {
  return (
    <>
      <main>
        <Header />
        <Transaction />
        <Balance />
      </main>
    </>
  );
}

export default App;
