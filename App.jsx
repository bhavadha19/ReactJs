// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// // import Hello from './assets/Hello'
// // import About from './About'
// // import Login from './Login'
// import Expense from './Expense'
// const title = 'Expense calculator';
// function App() {
//   // const [count, setCount] = useState(0)
//   // const a="BHAVADHARANI"
//   // const b="21CSR019"
//   // const c="CSE-A"
//   // const d="KONGU ENGINEERING COLLEGE"

//   return (
//     <>
//     <h1>Expense Tracker</h1>
//     <p>{title}</p>
//     {/* <Hello/><About/><Login/>*/<Expense/> }
//      {/* {a}<br>
//         </br>
//         {b}<br>
//         </br>
//         {c}<br>
//         </br>
//         {d}<br>
//         </br> */}
//       {/* <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//     </>
//   )
// }

// export default App
import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [tableData, setTableData] = useState([]);

  const handleInputChange1 = (e) => {
    setInputValue1(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setInputValue2(e.target.value);
  };

  const handleAddToTable = () => {
    if (inputValue1.trim() !== '' && inputValue2.trim() !== '') {
      setTableData([...tableData, { value1: inputValue1, value2: inputValue2 }]);
      setInputValue1('');
      setInputValue2('');
    }
  };

  return (
    <div className="App">
      <div>
        <label>
          Enter expense type:
          <input type="text" value={inputValue1} onChange={handleInputChange1} /><br></br><br></br>
        </label>
        <label>
          Enter amount:
          <input type="number" value={inputValue2} onChange={handleInputChange2} /><br></br><br></br>
        </label>
        <button onClick={handleAddToTable}>Add to Table</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Expense Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.value1}</td>
              <td>{data.value2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

