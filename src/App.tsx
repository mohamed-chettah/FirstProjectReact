// import {useState} from 'react'
import './App.css'
import Header from "./components/Header.tsx";
import FormLogin from "./components/FormLogin.tsx";
import RealFormLogin from "./components/RealFormLogin.tsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
      <>
          <Header className="text-black-200" text={'Login'} >
              Connectez-vous à votre compte
          </Header>

          <RealFormLogin />
      </>
  )
}

export default App
