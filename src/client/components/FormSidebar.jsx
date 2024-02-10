import '../Main.css'
// import { drag, allowDrop, drop } from '../Utils'

const FormSidebar = () => {
    return  (
    <div className="form-option-container border-solid border-2 border-black flex flex-col p-2 item-between"
    onDrop={e =>drop(e)} onDragOver={e => allowDrop(e)}>
        <div draggable='true' className="form-option" onDragStart={e => drag(e)}>Text box</div>
        <div draggable='true' className="form-option">Checkbox</div>
        <div draggable='true' className="form-option">Dropdown</div>
        <div draggable='true' className="form-option">Multi-select</div>
        <div draggable='true' className="form-option">Number</div>
        <div draggable='true' className="form-option">Time picker</div>
        <div draggable='true' className="form-option">Date picker</div>
        <div draggable='true' className="form-option">File</div>
        <div draggable='true' className="form-option">Hyperlink</div>
    </div>
    )
}

export default FormSidebar