import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar, faStarHalfAlt as halfStar, faStar as emptyStar } from '@fortawesome/free-solid-svg-icons';

import Talher from '../../assets/imagens/talher_icon.png'

interface StarRatingProps {
    rating: number;
    setRating: (rating: number) => void;
}

//:Conponent StarRating
//: Props - rating atual - setRating Atualiza valor
const StarRating: React.FC<StarRatingProps> = ({ rating, setRating }) => {
    //hoverRating Valor do mouse
    const [hoverRating, setHoverRating] = useState(0);

    //Define qual estrela aparece no hover 
    const renderStar = (index: number) => {
        if (hoverRating > 0) {
            if (hoverRating >= index) {
                return fullStar;
            } else if (hoverRating >= index - 0.5) {
                return halfStar;
            } else {
                return emptyStar;
            }
        } else {
            if (rating >= index) {
                return fullStar;
            } else if (rating >= index - 0.5) {
                return halfStar;
            } else {
                return emptyStar;
            }
        }
    };

    //Att com o mouse
    const handleMouseOver = (value: number) => {
        setHoverRating(value);
    };

    //Att sem o mouse
    const handleMouseLeave = () => {
        setHoverRating(0);
    };

    //Att o prop com o click do mouse
    const handleClick = (value: number) => {
        setRating(value);
    };

    //Renderiza o StarRating(tudo o que foi feito)
    return (
        <div className="star-rating">
            {[...Array(5)].map((_, i) => {
                const starValue = i + 1;
                return (
                    <span
                        key={starValue}
                        onMouseOver={() => handleMouseOver(starValue)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick(starValue)}

                        // se hoverRating ou rating for maior que o valor da estrela
                        style={{ cursor: 'pointer', color: (hoverRating >= starValue || rating >= starValue) ? 'yellow' : 'gray' }}
                    >
                        <FontAwesomeIcon icon={renderStar(starValue)} />
                    </span>
                );
            })}
        </div>
    );
};

interface AvaliacaoManhaProps {
    rating: number;
    setRating: (rating: number) => void;
  }

const AvaliacaoAlmoco: React.FC<AvaliacaoManhaProps> = ({ rating, setRating }) => {
    return (
        <div className='Avalia'>
            <div className='title_icon_star'>
                <h3>Almoço</h3>
                <img src={Talher} alt="" className='icon_Star' />
            </div>
            <StarRating rating={rating} setRating={setRating} />
            <p>Avaliação: {rating} Estrelas</p>
        </div>
    );
};

export default AvaliacaoAlmoco;