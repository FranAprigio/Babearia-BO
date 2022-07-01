import "./login_header.css"
import logo from "../../../Assets/LOGO.png"
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";



const LoginHeader = () => {

    return (

        <div className="login_header">
            <div className="header_container">
                <div className="local_login">

                    <p>Rua: xpto, nº 58, juiz de fora, mg</p>
                    <p>Tel:<FaWhatsapp size={16} color={'#2cce4c'}/> (32) 7070-7070</p>

                </div>

                <div className="navbar_login">
                    <div className="logo_login">
                            
                        <img src={logo} alt="" className="logoimg" />
                        <h1>Barbearia BO</h1>
                    </div>              

                    <div className="info_login">

                        <Link to='/'>
                        <button className="main_button">
                            <span>HOME</span>
                        </button>
                        </Link>

                    </div>

                    <div className="header_login_respons" >
                        <p><AiOutlineBars size={40} color={'#FFFFFF'}/></p>
                    </div>
                </div>
                
            </div>
        </div>

    )
}

export default LoginHeader;