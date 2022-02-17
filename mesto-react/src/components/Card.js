function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
      }

    return (
        <figure className="card">
            <div style={{ backgroundImage: `url(${props.card.link})` }} className="card__image" alt={props.card.name} onClick={handleClick}></div>
            <button type="button" className="card__icon-trash"></button>
            <figcaption className="card__description">
                <h2 className="card__text">{props.card.name}</h2>
                <div className="card__container-like">
                    <button type="button" className="card__icon-like"></button>
                    <div className="card__counter-like">
                        {props.card.likes.length}
                    </div>
                </div>
            </figcaption>
        </figure>
    )
}

export default Card;

