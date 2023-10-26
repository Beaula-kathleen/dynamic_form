import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { optionFields } from "../Constant/constant";
import CustomInput from "./CustomInputs";
import { useContext } from "react";
import { Context } from "./context";
import Button from "./Button";

const AddOptions = ({
  handelOptions,
  handelAddOptions,
  selectedInputs,
  onSelectedInputs,
  element,
  index,
}) => {
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
  return (
    <>
      {optionFields.includes(element.inputType) && (
        <>
          <button
            className="addOptions"
            onClick={(event) => {
              if (viewForm) handelOptions(event, index);
            }}
          >
            Add options
            <FontAwesomeIcon className="FontIcon" icon={faSquarePlus} />
          </button>
          {element.displayinput &&
            element.options.map((ele, indexVal) => {
              return (
                <div className="displayOptions">
                  <button
                    onClick={() => {
                      if (viewForm) {
                        handelAddOptions(indexVal);
                      }
                    }}
                  >
                    <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
                  <CustomInput
                    type={"text"}
                    placeholder={element.componentName}
                    onChange={(event) => {
                      if (viewForm) {
                        const newselectedInputs = [...selectedInputs];
                        newselectedInputs[index].options[indexVal] =
                          event.target.value;
                        onSelectedInputs(newselectedInputs);
                      }
                    }}
                    value={selectedInputs[index].options[indexVal]}
                  />
                </div>
              );
            })}
        </>
      )}
    </>
  );
};

export default AddOptions;
