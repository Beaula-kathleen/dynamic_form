import FieldCreation from "./FieldCreation";
import {urlFields} from "../Constant/constant"
import { Context } from "./context";
import { useContext} from 'react'
    
const MobileView = ({selectedInputs=[]}) => {
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

  return (
    <div className="mobileDisplay">
      <div className="mobileArea">
        <div className="displayArea">
        {selectedInputs.map((element) => {   
            return (
              <div className="mobileInputs">
               {urlFields.includes(element.inputType)? "" :
               <label className="lablePreview">
                  {element.label}
                  {element.required && <span className="requiredField">*</span>}
                </label>}
                <FieldCreation element={element}/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileView;
