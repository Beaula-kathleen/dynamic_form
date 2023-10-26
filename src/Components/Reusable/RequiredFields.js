import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { urlFields } from "../Constant/constant";
import CustomInput from "./CustomInputs";
import { Context } from "./context";
import { useContext } from "react";

const RequiredFields = ({
  handelDelete,
  handelChanges,
  index,
  element,
  selectedInputs,
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
      <div className="requiredFields">
        <div
          className="requiredInput"
          style={{
            visibility: urlFields.includes(element.inputType)
              ? "hidden"
              : "visible",
          }}
        >
          <input
            type={"checkbox"}
            onChange={(event) => {{
              if (viewForm) {handelChanges(event, index, "checkBox");}}
            }}
            defaultChecked={selectedInputs[index].required}
            disabled={!viewForm}
          />
          <>Required</>
        </div>
        <button
          onClick={() => {
            if (viewForm) {
              handelDelete(index);
            }
          }}
          // disabled={view}
        >
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
      </div>
    </>
  );
};

export default RequiredFields;
