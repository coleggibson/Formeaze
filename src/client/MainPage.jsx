import './Main.css'
import './components/FormSidebar'
import { handleOnDrop, handleOnDrag, handleDragOver} from './Utils'
import {useState, useEffect} from "react"

// import FormSidebar from './components/FormSidebar'
// import FormPage from './components/FormPage'

const MainPage = () => {

const [formItems, setFormItems] = useState([]);
let [background, setBackground] = useState("white");

useEffect(() => {
  formcontainer.style.backgroundColor = background
}, [background])

 const handleOnDrag = (e) => {
  e.dataTransfer.setData("text", e.target.id)
}

 const handleOnDrop = (e) => {
  const itemType = e.dataTransfer.getData("itemType")
  setFormItems([...formItems, itemType])
  console.log(formItems)
  setBackground([background = "white"])
}


const handleOnDropText = (e) => {
  let textItem = document.createElement("INPUT")
  textItem.setAttribute("type", "text")
 
  setFormItems([...formItems, textItem])
  console.log(textItem)
  console.log(formItems)
  setBackground([background = "white"])

}

 const handleDragOver = (e) => {
  e.preventDefault();
  setBackground([background = "gray"])
  console.log(e.target.id)
}

const handleDragLeave = (e) => {
  setBackground([background = "white"])
}

  return (
    <div className="container max-w-full" >
      <main>
       
        <div className='main-content-container flex justify-between '>
        <div id="mainform" className="form-option-container border-solid border-2 border-black flex flex-col p-2 item-between"
         onDragOver={e => handleDragOver(e)}>
        <div id="textbox" onDrop={e =>handleOnDropText(e)} draggable='true' className="form-option" onDragStart={e => handleOnDrag(e)}>Text box</div>
        <div draggable='true' className="form-option">Checkbox</div>
        <div draggable='true' className="form-option">Dropdown</div>
        {/* <div draggable='true' className="form-option">Multi-select</div> */}
        {/* <div draggable='true' className="form-option">Number</div> */}
        {/* <div draggable='true' className="form-option">Time picker</div> */}
        {/* <div draggable='true' className="form-option">Date picker</div> */}
        {/* <div draggable='true' className="form-option">File</div> */}
        {/* <div draggable='true' className="form-option">Hyperlink</div> */}
      </div>
      <div id="formcontainer" className="form-page border-solid border-black border-2 w-4/5 mx-10"
      onDrop = {e => handleOnDropText(e)} onDragOver = {e => handleDragOver(e)} onDragLeave = {e => handleDragLeave(e)}>
        {formItems.map((formitem, index) => (
          <div className="dropped-formitem" key={index}>
            {formitem}
            </div>
            ))}
      </div>
        </div>
      </main>
    </div>
  )
}
export default MainPage
