import '../Main.css'
// import { drag, allowDrop, drop } from '../Utils'

const FormPage = () => {
    return  (
    <div className="form-page border-solid border-black border-2 w-4/5 mx-10"
    onDrop = {e => drop(e)} onDragOver = {e => allowDrop(e)}>
        Form Here
    </div>
    )
}

export default FormPage