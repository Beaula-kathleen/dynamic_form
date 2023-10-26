import { uniqueFields, optionFields } from "../Constant/constant";

function FieldCreation({ element }) {
  if (uniqueFields.includes(element.inputType)) {
    switch (element.inputType) {
      case "textarea":
        return <textarea className="fieldValues" />;
      case "image":
        return (
          <input
            type="image"
            src={element.label}
            alt=""
            className="imageInput"
            width={"100%"}
          />
        );
      case "video":
        return <video controls src={element.label} type="video/mp4" width={"100%"}/>;
      case "audio":
        return <audio controls src={element.label} />;
    }
  } else if (optionFields.includes(element.inputType)) {
    if (element.options != null) {
      if (element.inputType === "select") {
        return (
          <>
            <select>
              {element.options.map((e, index) => (
                <option key={index}>{e}</option>
              ))}
            </select>
          </>
        );
      } else {
        return (
          <div className="editpanel">
            {element.options.map((e, index) => (
              <div className="fieldValues">
                <input type={element.inputType} key={e} />
                {e}
              </div>
            ))}
          </div>
        );
      }
    }
  } else {
    return (
      <>
        <input type={element.inputType} />
      </>
    );
  }
}

export default FieldCreation;
