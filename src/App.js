import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Table from "./component/Table";
import CreateNewForm from "./component/CreateNewForm";
import "./App.css";
import { useState } from "react";
function App() {
  const [rowss, setRows] = useState([]);
  const addRow = (formData) => {
    setRows([...rowss, formData]);
  };
  return (
    <div className="app">
      <div className="container1">
        <Header />
        <Router>
          <Routes>
            <Route exact path="/" element={<Table rows={rowss} />} />
            <Route
              path="/create-new"
              element={<CreateNewForm addRow={addRow} />}
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
export default App;
