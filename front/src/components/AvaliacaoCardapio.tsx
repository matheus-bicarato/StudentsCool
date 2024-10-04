import './styles/AvaliacaoCardapio.css'

import StarRating from './StarRating'

const RatingTable = () => {
// border: '2px solid #000'
    return (
        <table style={{ width: '45%', textAlign: 'center' }}>
            <tbody>
                <tr className='infosAvalia'>
                    <td>
                        <StarRating/>
                    </td>
                </tr>
                <tr>
                    <div className='contAvalia'>
                        <button className='button_avalia'>ENVIAR</button>
                    </div>
                </tr>
            </tbody>
        </table>
    );
};

export default RatingTable;