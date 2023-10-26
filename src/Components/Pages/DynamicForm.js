import NavBar from "../Reusable/NavBar";
import MobileView from "../Reusable/MobileView";
import { Context } from "../Reusable/context";
import { useContext,useState } from "react";
import "../Styles/dynamicFormGenerator.css";
import DNDContainer from "../Reusable/DNDContainer";
import { useEffect} from 'react'

const DynamicForm = () => {
  const [
    dynamicFiles,
    setDynamicFiles,
    uniqueIndex,
    setUniqueIndex,
    viewForm,
    setViewForm,
    fileName,
    setFileName
  ] = useContext(Context);
  const [selectedInputs, setSelectedInputs] = useState([]);
  useEffect(() => {
  if( uniqueIndex != null ){
  const updateIndex=dynamicFiles[uniqueIndex].datas;
   setSelectedInputs(updateIndex)
 }
    }, []);

  return (
    <>
      <NavBar displayNavBar={true} selectedInputs={selectedInputs} fileName={"fileName"}/>
      <h3>{fileName}</h3>
      <div className="dynamicContainer">
        <DNDContainer  style={{ pointerEvents: 'none' }} selectedInputs={selectedInputs} onSelectedInputs={setSelectedInputs}/>
        <div className="mobileViews">
          <MobileView selectedInputs={selectedInputs}/>
        </div>
      </div>
    </>
  );
};

export default DynamicForm;
