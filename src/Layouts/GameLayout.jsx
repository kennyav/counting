import { Outlet } from "react-router-dom";
import GameNav from '../GameNav';

export default function GameLayout() {
  return (
    <>
      <GameNav />
      <Outlet />
    </>
  );
}