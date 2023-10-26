import CustomInput from "./CustomInputs";
import ImageUpload from "./ImageUpload";
import { urlFields } from "../Constant/constant";
import { useState,useContext } from "react";
import { Context } from "./context";
import RequiredFields from "./RequiredFields";
import AddOptions from "./AddOptions";

const FormBiulder = ({ selectedInputs, onSelectedInputs }) => {
  const [imageInput, setImageInput] = useState(false);
  const [
    dynamicFiles,
    setDynamicFiles,
    uniqueIndex,
    setUniqueIndex,
    viewForm,
    setViewForm,
    fileName,
    setFileName,
  ] = useContext(Context);

  const handelChanges = (event, index, field) => {
    if (field === "value") {
      const newselectedInputs = [...selectedInputs];
      newselectedInputs[index].label = imageInput
        ? URL.createObjectURL(event.target.files[0])
        : event.target.value;
      setImageInput(false);
      onSelectedInputs(newselectedInputs);
    } else {
      const newselectedInputs = [...selectedInputs];
      newselectedInputs[index].required = event.target.checked;
      onSelectedInputs(newselectedInputs);
    }
  };

  const handelSwap = (dragStart, dragEnd) => {
    const sortEditFields = [...selectedInputs];
    const draggedItemContent = sortEditFields.splice(dragStart, 1)[0];
    const newArray = [
      ...sortEditFields.slice(0, dragEnd),
      draggedItemContent,
      ...sortEditFields.slice(dragEnd),
    ];
    onSelectedInputs(newArray);
  };

  const handelAddOptions = (indexVal) => {
    const list = selectedInputs.map((element, index) => {
      const removeField = element.options.filter((item, i) => i !== indexVal);
      return { ...element, options: removeField };
    });
    onSelectedInputs(list);
  };

  const handelOptions = (event, index) => {
    const newselectedInputs = [...selectedInputs];
    newselectedInputs[index].displayinput = true;
    const optionValue = newselectedInputs[index].options;
    optionValue.push("");
    newselectedInputs[index].options = optionValue;
    onSelectedInputs(newselectedInputs);
  };

  const handelDelete = (index) => {
    const removeField = selectedInputs.filter(
      (element, indexval) => index != indexval
    );
    onSelectedInputs(removeField);
  };

  return (
    <div className="viewArea">
      <div className="textFieldHolder">
        {selectedInputs.map((element, index) => {
          return (
            <div 
              className="viewAreaInputs"             
              draggable={viewForm}
              onDragStart={(event) => {                  
                event.stopPropagation();
                event.dataTransfer.setData("child", index);
              }}
              onDragOver={(event) => {
                event.preventDefault();
              }}
              onDrop={(event) => {
                event.stopPropagation();
                const daggedIndex = event.dataTransfer.getData("child");
                handelSwap(daggedIndex, index);
              }}
            >
              <div className="inputArea">
                <CustomInput
                  type={"text"}
                  placeholder={element.ComponentName}
                  onChange={(event) => {
                    if(viewForm)
                    handelChanges(event, index, "value");
                  }}
                  value={selectedInputs[index].label}
                />
                <RequiredFields
                  handelDelete={handelDelete}
                  handelChanges={handelChanges}
                  index={index}
                  element={element}
                  selectedInputs={selectedInputs}
                />
              </div>
              <div className="imageUpload">
                {urlFields.includes(element.inputType) && (
                  <ImageUpload
                    onImageInput={setImageInput}
                    handelChanges={handelChanges}
                    element={element}
                    index={index}
                  />
                )}
              </div>
              <div className="optionComponent">
                <AddOptions
                  handelOptions={handelOptions}
                  handelAddOptions={handelAddOptions}
                  selectedInputs={selectedInputs}
                  onSelectedInputs={onSelectedInputs}
                  element={element}
                  index={index}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormBiulder;
