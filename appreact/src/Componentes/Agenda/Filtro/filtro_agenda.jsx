import './filtro_agenda.css'
import {BsCalendarDate, BsCalendarWeek} from 'react-icons/bs'
import {AiOutlineCalendar} from 'react-icons/ai'
import {BiCalendar} from 'react-icons/bi'

const Filtro = () => {

    return (
        <div className='filtro_container'>
            <div className='agenda_filtro'>

                <div className="title_filtro">
                    <h1>FILTRO</h1>
                </div>

                <div className="calendario">

                    <div className="descricao_calendario">
                        <a className='icone_filtro' href=""><BsCalendarDate size={30}/></a>
                        <p className='sub_filtro'>HOJE</p>
                    </div>
                        
                    <div className="descricao_calendario">
                        <a className='icone_filtro' href=""><BsCalendarWeek size={30}/></a>
                        <p className='sub_filtro'>SEMANA</p>
                    </div>

                    <div className="descricao_calendario">                 
                        <a className='icone_filtro' href=""><AiOutlineCalendar size={30}/></a>
                        <p className='sub_filtro'>MÊS</p>
                    </div > 

                    <div className="descricao_calendario">
                        <a className='icone_filtro' href=""><BiCalendar size={30}/></a>
                        <p className='sub_filtro'>ANUAL</p>
                    </div>

                </div>

                <div className="title_filtro">
                    <h1>AGENDA</h1>
                    <h2 className='risco'></h2>
                </div>
            </div>

        </div>
    )
}

export default Filtro;