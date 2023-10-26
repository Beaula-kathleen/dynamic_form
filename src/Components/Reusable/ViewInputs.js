const ViewInputs = ({element})=> {
    return <button className="componentItems" >
      <span>{element.componentType}</span>
      <span>{element.componentIcon}</span>
    </button>
}

export default ViewInputs;