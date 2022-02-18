function ImagePopup(props) {
    return (
        <div className={`popup popup_type_img ${props.isOpen ? 'popup_opened' : ''}`}>
            <figure className="popup__image">
                <button onClick={props.onClose} type="button" className="popup__icon-close"></button>
                <img className="popup__image-is-opened" src={props.card.link} alt={props.card.name}/>
                <figcaption className="popup__description-is-opened">
                {props.card.name}
                </figcaption>
            </figure>
        </div>
    )
}

export default ImagePopup;