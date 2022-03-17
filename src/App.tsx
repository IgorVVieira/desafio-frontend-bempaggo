import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';

import { Header } from './components/Header';
import { Form } from './components/Form';

function App() {
  return (
    <>
      <Header />
      <Form />
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </>
  )
}

export default App
