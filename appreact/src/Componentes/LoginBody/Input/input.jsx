import React from 'react';


const Input = ({type,id, required, pattern, itens, value, onChange, readOnly}) => {

    const req = required ? true : false
    
    return (

        <div className="formGroup field">
            
            {type === 'select' ?(

                <select className="input_menu_login"  required={req} id={id} name={id} autoComplete='none'
                disabled={readOnly}
                value={value} onChange={onChange}
                placeholder=" ">
                    {itens && itens.map((item,i) => 
                        <option key={i} value={item.id}>{item.nome}</option>
                    )}

                </select>

            ):(

                <input type={type} className="input_menu_login"  required={req} id={id} name={id} autoComplete='none'
                readOnly={readOnly}
                value={value} onChange={onChange}
                pattern={pattern} placeholder=" "/>

            )}
            
            

        </div>
    )
}

export default Input;