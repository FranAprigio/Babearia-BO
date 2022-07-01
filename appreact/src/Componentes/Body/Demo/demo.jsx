import "./demo.css"
import img_esq from "../../../Assets/img_esq.png"
import img_center from "../../../Assets/img_center.png"
import img_dir from "../../../Assets/img_dir.png"



const Demo = () =>{

    return(

        <div className="container">
            <div className="demo_img">

                <img src={img_esq} alt="" className='img_LR' />
                <img src={img_center} alt="" className='img_center' />
                <img src={img_dir} alt="" className='img_LR' />

            </div>

        </div>

    )

}


export default Demo;