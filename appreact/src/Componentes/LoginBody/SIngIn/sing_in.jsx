import "./sing_in.css"
import LoginBImg from "../../../Assets/login_body_img.png"
import Loading from "../Loading/loading.jsx"
import Input from "../Input/input.jsx"
import {useState, useContext} from "react"
import { LoginContext } from "../../AuthContext/authcontext"


const SingIn = () =>{


    const [values, setValues] = useState({login: "", senha: ""})
    const [load, setLoad] = useState(false)
    const [error, setError] = useState("")
            { /* Guardar a senha :) */ }

    const {login} = useContext ( LoginContext)


    const change = (e) =>{
        const {value, name} = e.target
        setValues({...values, [name] : value});
        //console.log (values)  
    }

    const submitHandle = async (e) =>{
        console.log ("ok")  
        e.preventDefault()
        console.log ("ok")  
        setLoad(true)
        const msg = await login(values.login, values.senha)
        if (msg == null){
            setLoad(false)
            setError("Senha ou login incorretos")
        }
        { /* Metodo Logar :) */ }


    }

    return load ? (
        <Loading />
    ) : (
        <main className="login_content">

            <div className="container_login">

                <div className="left_content_login">

                    <div className="imgblogin">
                        <img src={LoginBImg} alt="" className="imgB" />
                        
                        
                    </div>
                </div>

                <div className="user-login">
                    <h1 className="user-login__title">Login</h1>
                    <form onSubmit={submitHandle}>
                    <div className="user-login__form">
                        <Input type="text" label="login" required="1"
                        id="login" value={values.login} onChange={change}/>
                        { /* isso vai funcionar :) */ }
                    </div>

                    <div className="user-login__form">

                        <Input type="password" label="senha" required="1" 
                        id="senha" value={values.senha} onChange={change}/>
                        
                    </div>

                    <a href="/" className="password_forgot">
                        <p className="p_password">Forgot Password?</p>
                    </a>


                    {error && <p>{error}</p>}
                    <button type="submit"className="login_user_button">
                        Login
                    </button>

                    <button type="submit"className="singup_user_button">
                        Singup
                    </button>
                    </form>
                </div>


            </div>
        </main>
    );


}

export default SingIn;