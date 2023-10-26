import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { routing } from "./Components/Constant/constant";
import { Context } from "./Components/Reusable/context";
import { useState } from "react";

function App() {
  const [dynamicFiles, setDynamicFiles] = useState([]);
  const [fileName,setFileName] = useState('')
  const [uniqueIndex, setUniqueIndex] = useState(null);
  const [viewForm, setViewForm] = useState(true);
  return (
    <div className="App">
      <Context.Provider
        value={[
          dynamicFiles,
          setDynamicFiles,
          uniqueIndex,
          setUniqueIndex,
          viewForm,
          setViewForm,
          fileName,
          setFileName
        ]}
      >
        <Routes>
          {routing.map((product, index) => {
            return (
              <Route
                key={index}
                exact={true}
                path={product.path}
                element={product.element}
              ></Route>
            );
          })}
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
