import '../Main.css'
const FormSidebar = () => {
    return  (
    <div className="form-option-container border-solid border-2 border-black flex-column ">
        <div className="form-option">Text box</div>
        <div className="form-option">Checkbox</div>
        <div className="form-option">Dropdown</div>
        <div className="form-option">Multi-select</div>
        <div className="form-option">Number</div>
        <div className="form-option">Time picker</div>
        <div className="form-option">Date picker</div>
        <div className="form-option">File</div>
        <div className="form-option">Hyperlink</div>
    </div>
    )
}

export default FormSidebar