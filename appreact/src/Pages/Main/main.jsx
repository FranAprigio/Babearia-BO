
import Main_Header from "../../Componentes/Header/MainHeader/main_header.jsx";
import Info from "../../Componentes/Body/Info/Info.jsx";
import Demo from "../../Componentes/Body/Demo/demo.jsx";
import About from "../../Componentes/Body/About/about.jsx";
import Lista from "../../Componentes/Body/Lista/lista.jsx"
import Equipe from "../../Componentes/Body/Equipe/equipe.jsx"
import SingUp from "../../Componentes/Body/SingUp/sing_up.jsx";
import Footer from "../../Componentes/Footer/footer.jsx";



const Main = () =>{

    return (
        <div className="main_container">    
            <Main_Header/>
            <Info/>
            <Demo/>
            <About/>
            <Lista/>
            <Equipe/>
            <SingUp/>
            <Footer/>

        </div>


            



        
    )






}


export default Main;