import "./main_header.css";
import logo from "../../../Assets/LOGO.png"
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { useState } from "react";


const Main_Header = () =>{

const [ativo, setativo] = useState (false)

const onclick = () => {
    setativo(!ativo)
}

    return (

        <div className="container">
            <div className="navigation">
                <div className="local">

                    <p>Rua: xpto, nº 58, juiz de fora, mg</p>
                    <p>Tel:<FaWhatsapp size={16} color={'#2cce4c'}/> (32) 7070-7070</p>

                </div>
                
                <div className="navbar">
                    <div className="logo">
                        
                        <img src={logo} alt="" className="logoimg" />

                    </div>

                    <div className={ativo? "info aberta" : "info fechada"}>
                    
                        <p>Sobre</p>
                        <p>Agenda</p>
                        <p>Preço</p>
                        <p>Equipe</p>
                        <p>Contato</p>

                        <Link to='/Login'>
                        <button className="login_button">
                            <span>LOGIN</span>
                        </button>
                        </Link>

                        <div className="localb">

                            <p>Rua: xpto, nº 58, juiz de fora, mg</p>
                            <p>Tel:<FaWhatsapp size={16} color={'#2cce4c'}/> (32) 7070-7070</p>

                        </div>
                    </div>

                    <div className= {! ativo? "header_respons header_respons_ativa"  : "header_respons"}
                     onClick = {onclick}>

                        <p><AiOutlineBars size={40} color={'#FFFFFF'}/></p>
                    </div>

                </div>

            </div>


        </div>

    )

}


export default Main_Header;

