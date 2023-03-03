import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// page imports
import Layout from './Layouts/Layout';
import Start from './components/Start.tsx';
import GameNav from './GameNav';
import TimedGame from './components/GameModes/TimedGame';
import NormalGame from './components/GameModes/NormalGame';



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Start />} />
            <Route path="game" element={<GameNav />} />
            <Route path="game/competitive" element={<TimedGame />} />
            <Route path="game/practice" element={<NormalGame />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
