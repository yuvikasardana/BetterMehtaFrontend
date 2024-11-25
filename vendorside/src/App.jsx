import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PrintJobCard from './printJobCard'

function App() {
  return (
    <div className="container mt-5">
      <PrintJobCard />
    </div>
  );
}

export default App
