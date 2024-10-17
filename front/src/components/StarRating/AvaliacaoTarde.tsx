import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar, faStarHalfAlt as halfStar, faStar as emptyStar } from '@fortawesome/free-solid-svg-icons';

import Nuvem from '../../assets/imagens/nuven_icon.png'

interface StarRatingProps {
    rating: number;
    setRating: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, setRating }) => {
    const [hoverRating, setHoverRating] = useState(0);

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

    const handleMouseOver = (value: number) => {
        setHoverRating(value);
    };

    const handleMouseLeave = () => {
        setHoverRating(0);
    };

    const handleClick = (value: number) => {
        setRating(value);
    };

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

  const AvaliacaoTarde: React.FC<AvaliacaoManhaProps> = ({ rating, setRating }) => {
    return ( 
        <div className='Avaliaultimo'>
            <div className='title_icon_star'>
                <h3>Tarde</h3>
                <img src={Nuvem} alt="" className='icon_Star' />
            </div>
            <StarRating rating={rating} setRating={setRating} />
            <p>Avaliação: {rating} Estrelas</p>
        </div>
    );
};

export default AvaliacaoTarde;