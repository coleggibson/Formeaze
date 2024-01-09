import './Main.css'
import './components/FormSidebar'
import FormSidebar from './components/FormSidebar'
import FormPage from './components/FormPage'

const MainPage = () => {
  return (
    <div className="container">
      <main>
       
        <div className='main-content-container flex '>
        <FormSidebar/>
        <FormPage/>
        </div>

        <div className="buttons">
          <a
            className="button button-filled"
            href="https://wasp-lang.dev/docs/tutorial/create"
            target="_blank"
            rel="noreferrer noopener"
          >
            Take the Tutorial
          </a>
        
        </div>
      </main>
    </div>
  )
}
export default MainPage
