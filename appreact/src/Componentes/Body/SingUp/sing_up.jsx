import "./sing_up.css"


const SingUp = () =>{

    return (

        <div className="container">
            <div className="sing_up_container">
                <div className="sing_up">

                    <form action="" className="sing">
                        <div className="lable">
                            <label htmlFor="">First Name </label>
                            <input type="text" className='input' placeholder="Enter your name"/>
                        </div>
                        <div className="lable">
                            <label htmlFor="">Phone </label>
                            <input type="text" className='input' placeholder='+1 800 123-34-45'/>
                        </div>
                        <div className="lable">
                            <label htmlFor="">Company </label>
                            <input type="text" className='input' placeholder='Company Name'/>
                        </div>
                        <div className="lable">
                            <label htmlFor="">Email </label>
                            <input type="text" className='input' placeholder='Enter your email'/>
                        </div>
                        <div className="lable">
                            <label htmlFor="">Position </label>
                            <input type="text" className='input' placeholder='CEO'/>
                        </div>
                    </form>

                </div>
            </div>

        </div>

    )
}

export default SingUp;