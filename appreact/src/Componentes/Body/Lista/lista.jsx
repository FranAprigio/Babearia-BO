import "./lista.css"
import canivete from "../../../Assets//canivete.png";
import tesoura from "../../../Assets/tesoura.png";
import head from "../../../Assets/head.png";

const Lista = () =>{

    return (
        <div className="container">
            <div className="container_list">

                <div className="imagens">
                    
                    <img src={canivete} alt="" className='canivete'/>
                    <img src={tesoura} alt="" className="tesoura" />
                    <img src={head} alt="" className="head" />
                    
                </div>

                <div className='container_preco'>
                    <h1>Tabela de preço</h1>
                    <div className="precos">
                        <div className="left_list">
                            <p>Corte</p> <p>R$15,00</p>
                            <p>Barba</p> <p>R$17,00</p>
                            <p>Corte e barba</p> <p>R$25,00</p>
                            <p>Desenho</p> <p>R$30,00</p>
                        </div>
                        <div className="center_list"></div>
                        <div className="rigth_list">
                            <p>Luzes</p> <p>R$70,00</p>
                            <p>Alisamento</p> <p>R$50,00</p>
                            <p>Pintura</p> <p>R$40,00</p>
                        </div>
                    </div>

                </div>

                <div className="container_preco_respons">
                    <h2>Tabela de preço</h2>
                    <div className="precos_respons">
                        <div className="itens_respons">
                            <p>Corte</p> 
                            <p>Barba</p> 
                            <p>Corte e barba</p> 
                            <p>Desenho</p> 
                            <p>Luzes</p> 
                            <p>Alisamento</p> 
                            <p>Pintura</p> 
                        </div>
                        <div className="valor_respons">
                            <p>R$15,00</p>
                            <p>R$17,00</p>
                            <p>R$25,00</p>
                            <p>R$30,00</p>
                            <p>R$70,00</p>
                            <p>R$50,00</p>
                            <p>R$40,00</p>
                        </div>

                    </div>
                    




                </div>
            </div>
        </div>

    )
}


export default Lista;