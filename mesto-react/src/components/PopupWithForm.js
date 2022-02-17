function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button onClick={props.onClose} type="button" className="popup__icon-close"></button>
                <h3 className="popup__title">{props.title}</h3>
                <form name={props.name} className="popup__form" noValidate>
                    {props.children}
                    <button type="submit" value="Сохранить" className="popup__button">Сохранить</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;