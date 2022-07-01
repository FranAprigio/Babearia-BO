import "./equipe.css"
import Zezin from "../../../Assets/zezin.png"

const Equipe  = () =>{

    return (

        <div className="container" >
            <div className="container_equipe">
                <div className="left_content">
                    <h1>Equipe</h1>
                    <img src={Zezin} alt="" className='img_zezin'/>

                    <div className="quad">
                        <p className="b"></p>
                        <p className="b"></p>
                        <p className="y"></p>
                        <p className="b"></p>
                    </div>

                </div>

                <div className="right_content">

                    <h1>Zezin da Silva</h1>
                    <p>Especialista em xxxxx</p>
                    <p>30 anos</p>
                    <p>xxxx</p>
                    <p>xxxxxxxxxxxxxxxxx</p>
                    <p>xxxxxxxxxxxx</p>

                </div>

            </div>

        </div>
    )



}

export default Equipe;







