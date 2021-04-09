import React, { useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div style={{ position: 'relative' }} className='App'>
        <table>
          <tr>
            <td>A</td>
            <td>B</td>
          </tr>
          <tr>
            <td>C</td>
            <td>
              <button onClick={() => setOpen(true)}>Open</button>
              {open && <Modal onClose={() => setOpen(false)} />}
            </td>
          </tr>
        </table>
      </div>
      <div>Ali</div>
    </>
  );
}

export default App;
