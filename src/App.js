import { Routes, Route, Outlet } from "react-router-dom";

import Menu from './components/Layouts/Menu'
import Uno from './components/Pages/Uno';
import Dos from './components/Pages/Dos';
import Tres from './components/Pages/Tres';
import Main from './components/Pages/Main'

function App () {
  return (
    <>
      <Menu />
      <div className="App">

        <Routes  >
          <Route excact path="/" element={<Main />} />
          <Route excact path="/uno" element={<Uno />} />
          <Route excact path="/dos" element={<Dos />} />
          <Route excact path="/tres" element={<Tres />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
