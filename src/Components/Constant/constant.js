import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFont } from "@fortawesome/free-solid-svg-icons";
import { fa1 } from "@fortawesome/free-solid-svg-icons";
import { fa2 } from "@fortawesome/free-solid-svg-icons";
import { fa3 } from "@fortawesome/free-solid-svg-icons";
import { faCheckToSlot } from "@fortawesome/free-solid-svg-icons";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faIndent } from "@fortawesome/free-solid-svg-icons";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faFileAudio } from "@fortawesome/free-solid-svg-icons";
import DynamicFiles from "../Pages/DynamicFiles";
import DynamicForm from "../Pages/DynamicForm";

export const componentList = [
  { componentType: "Text Field", componentIcon: <FontAwesomeIcon icon={faFont} />,inputType:"text",label:""},
  { componentType: "Number",componentIcon: <><FontAwesomeIcon icon={fa1} /> <FontAwesomeIcon icon={fa2} /> <FontAwesomeIcon icon={fa3} /></>,inputType:"number",label:""},
  { componentType: "Check List", options: [],displayinput:false,componentIcon: <FontAwesomeIcon icon={faCheckToSlot} />,inputType:"checkBox",label:""},
  { componentType: "Radio", options: [],displayinput:false,componentIcon:  <FontAwesomeIcon icon={faCircleDot} />,inputType:"radio",label:""},
  { componentType: "Drop Down",options: [],displayinput:false, componentIcon: <FontAwesomeIcon icon={faCircleChevronDown} />,inputType:"select",label:""},
  { componentType: "Date", componentIcon:  <FontAwesomeIcon icon={faCalendarDays} />,inputType:"date",label:""},
  { componentType: "File Upload", componentIcon: <FontAwesomeIcon icon={faFileArrowUp} />,inputType:"file",label:""},
  { componentType: "Date Time",componentIcon: <FontAwesomeIcon icon={faClock} />,inputType:"time",label:""},
  { componentType: "Multi Line", componentIcon:  <FontAwesomeIcon icon={faIndent} />,inputType:"textarea",label:""},
  { componentType: "Image", componentIcon:  <FontAwesomeIcon icon={faImages} />,inputType:"image",label:"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"},
  { componentType: "Video", componentIcon:  <FontAwesomeIcon icon={faVideo} />,inputType:"video",label:"https://www.youtube.com/watch?v=nfZvg4n3zzQ"},
  { componentType: "Audio", componentIcon:  <FontAwesomeIcon icon={faFileAudio} />,inputType:"audio",label:""},
];
export const routing = [
  { path: "/", element: <DynamicFiles/>},
  { path: "dynamicForm", element: <DynamicForm/> }
];
export const optionFields=["checkBox","radio","select"]
export const urlFields=["image","video","audio"]
export const uniqueFields= ["textarea","image","video","audio"]