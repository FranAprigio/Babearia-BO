import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { loginService } from "../../Service/service"

export const LoginContext = createContext()

const AuthContext = ({children, nome})=>{

    const [user, setUser] = useState(null)
    const navigate = useNavigate();

    const login = async (login, senha)=>{
        console.log('verificando login')

        { /* Consumir o serviço de login  :) */ }
        const u = await loginService(login, senha)
        console.log("user",u)

        if (u !== null){
            
            setUser(u)
            navigate("/Agenda")
        } else {
            return null
        }

        


    }

    return(
        <LoginContext.Provider value={
            {"autenticado": user !== null,
            "user": user,
            login}
        }>

            {children}

        </LoginContext.Provider>
    )

}


export default AuthContext;