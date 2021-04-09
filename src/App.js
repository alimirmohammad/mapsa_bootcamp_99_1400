import React, { useState, Suspense } from 'react';
import './App.css';
const Modal = React.lazy(() => import('./Modal'));

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div style={{ position: 'relative' }} className='App'>
        <table>
          <tbody>
            <tr>
              <td>A</td>
              <td>B</td>
            </tr>
            <tr>
              <td>C</td>
              <td>
                <button onClick={() => setOpen(true)}>Open</button>
                {open && (
                  <Suspense fallback={<h2>loading...</h2>}>
                    <Modal onClose={() => setOpen(false)} />
                  </Suspense>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>Ali</div>
    </>
  );
}

export default App;
