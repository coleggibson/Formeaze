export const handleOnDrag = (e) => {
    e.dataTransfer.setData("text", e.target.id)
  }
  
export const handleOnDrop = (e) => {
    const itemType = e.dataTransfer.getData("itemType")
    console.log("itemType")
    setFormItems([...formItems, itemType])
  }
  
export const handleDragOver = (e) => {
    e.preventDefault();
  }

  