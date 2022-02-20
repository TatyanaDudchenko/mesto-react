function Card({ card, onCardClick }) {

    function handleClick() {
        onCardClick(card);
      }

    return (
        <figure className="card">
            <div style={{ backgroundImage: `url(${card.link})` }} className="card__image" alt={card.name} onClick={handleClick}></div>
            <button type="button" className="card__icon-trash"></button>
            <figcaption className="card__description">
                <h2 className="card__text">{card.name}</h2>
                <div className="card__container-like">
                    <button type="button" className="card__icon-like"></button>
                    <div className="card__counter-like">
                        {card.likes.length}
                    </div>
                </div>
            </figcaption>
        </figure>
    )
}

export default Card;

