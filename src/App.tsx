import React, { useEffect } from 'react';
import logo from './logo.svg';
import Login from './components/Login';

function App() {
  function handleClick() {
    alert('you have clicked the btn');
  }

  return (
    <div className="w-96 p-4 bg-orange-500 flex items-center flex-col		">
      <h1 className="text-3xl font-bold underline m-3">Hello from extension</h1>
      <Login />
      {/* <button className="p-2 border-2" onClick={handleClick}>
        LOGIN
      </button> */}
    </div>
  );
}

export default App;
