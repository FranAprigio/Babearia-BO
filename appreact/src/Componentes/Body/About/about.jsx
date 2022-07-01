import "./about.css"
import about_img from "../../../Assets/sobre.png"

const About  = () =>{

    return (

        <div className="container">
            <div className="container_about">
                <div className="about_text">
                    <h1>Sobre Nós</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                        sheets containing Lorem Ipsum passages. </p>
                </div>
                
                <img src={about_img} alt="" className='img_about'/>
                <h2>Sobre Nós</h2>
            </div>

        </div>
    

    )

}

export default About;