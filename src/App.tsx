import React, { useState,  useEffect} from 'react';
import "./App.css"
import BoardComponent from './components/BoardComponent';
import { Board } from './models/Board';


const App = () => {
  const [board, setboard]= useState(new Board());

    useEffect(()=>{
      restart()
    },[])

  function restart(){
    const newBoard=new Board();
    newBoard.initCells();
    setboard(newBoard);
  }
  return (
    <div className='app'>
      <BoardComponent
        board={board}
        setBoard={setboard}
      />
    </div>
  );
};

export default App;
