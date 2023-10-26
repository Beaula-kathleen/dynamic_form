import { componentList } from "../Constant/constant";
import { useContext } from "react";
import { Context } from "./context";
import ViewInputs from "./ViewInputs";
import FormBiulder from "./FormBiulder";

const DNDContainer = ({ selectedInputs, onSelectedInputs }) => {
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

  const handelDrop = (event) => {
    event.preventDefault();
    const dargedIndex = event.dataTransfer.getData("drag");
    if (dargedIndex != "") {
      onSelectedInputs([
        ...selectedInputs,
        { ...componentList[dargedIndex], options: [] },
      ]);
    }
  };
  return (
    <div
      className="parentContainer"
      onDragOver={(event) => {
        event.preventDefault();
      }}      
    >
      <div className="listArea">
        <div className="optionsArea">
          {componentList.map((element, index) => {
            return (
              <div
                key={index}
                draggable={viewForm}
                onDragStart={(event) => {
                  event.dataTransfer.clearData()
                  event.dataTransfer.setData("drag", index);
                }}
                className="inputArea"                
              >
                <ViewInputs element={element} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="viewEdit" onDrop={handelDrop} >
        <FormBiulder
          selectedInputs={selectedInputs}
          onSelectedInputs={onSelectedInputs}
        />
      </div>
    </div>
  );
}

export default DNDContainer;
