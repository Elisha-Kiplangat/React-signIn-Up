
import './App.scss'
import Form from './components/form'

export function SubmitFunction(e: any) {
      e.preventDefault()
      alert('Submitting form ......')
  }

function App() {
  return (
    <>
      <div className="App">
        <Form/>
      </div>
    </>
  );
}

export default App;
