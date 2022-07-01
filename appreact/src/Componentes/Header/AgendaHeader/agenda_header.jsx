import "./agenda_header.css"
import Logo from "../../../Assets/LOGO.png"
import { Link } from 'react-router-dom';
import { FaBell } from "react-icons/fa";




const AgendaHeader = () =>{

    return (

        <div className="agenda_header" >
            <div className="agenda_header_container">

                <div className="navbar_agenda">
                    <div className="logo_agenda">
                                
                        <img src={Logo} alt="" className="logoimg" />
                        <h1>Barbearia BO</h1>
                    </div>

                    <div className="info_agenda">

                        <Link to='/Agenda'>
                        <button className="nav_button">
                            <span>Agenda</span>
                        </button>
                        </Link>

                        <Link to='/Agendamento'>
                        <button className="nav_button">
                            <span>Criar</span>
                        </button>
                        </Link>

                        <Link to='/Agenda'>
                        <button className="nav_button">
                            <span>Relatório</span>
                        </button>
                        </Link>
                        <div className="fabell">
                            <FaBell size={28} color={"#F06123"} />
                        </div>
                        <a href="/Login">
                            <button className="button_logout">
                                <span>LOGOUT</span>
                            </button>
                        </a>
                            

                    </div>

                </div>


            </div>


        </div>





    )
}


export default AgendaHeader;