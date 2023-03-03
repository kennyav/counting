import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// page imports
import NormalGame from './components/GameModes/NormalGame';
import TimedGame from './components/GameModes/TimedGame';

export default function GameNav() {
   return (
      <div className='App'>
            <Routes>
               <Route path="/game" element={<GameLayout />}>
                  <Route path="competitive" element={<TimedGame />} />
                  <Route path="practice" element={<NormalGame />} />
               </Route>
            </Routes>
      </div>
   );
}

