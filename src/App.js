import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import DataProvider from "./components/DataProvider"
import UserDetails from './components/UserDetails';
import WorkspaceDetails from './components/WorkspaceDetails';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserDetails />} />
            <Route path="/workspace" element={<WorkspaceDetails />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
