import { Link } from 'react-router-dom';
import './styles/segunda.css'
import CheckboxForm from '../Checkbox';


const Segunda = () => {
    return (
        <div className=''>
            <form action="">
                <div className="barra_porple"></div>
                <div className="container_Cadastro_itens">
                    <CheckboxForm />
                    <hr className="hr_opacity" />
                </div>

                <div className="container_cadastro_button">
                    <input className='button_cadastro' type="submit" placeholder='enviar' />
                </div>
            </form>
        </div>
    )
}

export default Segunda;