import { useState, useEffect } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
    const [userName, setUserName] = useState([]);
    const [userDescription, setUserDescription] = useState([]);
    const [userAvatar, setUserAvatar] = useState([]);
    const [cards, setCards] = useState([]);
  
    useEffect(() => {
      handleRequest()
    }, [])
  
    const handleRequest = () => {
      api.getUserData()
      .then(response => {
        setUserName(response.name);
        setUserDescription(response.about);
        setUserAvatar(response.avatar);
      })

      api.getInitialCards()
      .then(response => {
        const reversedItems = response.reverse();
        setCards(reversedItems)
      });
    }

    return (
        <div className="content">
            <section className="profile-container">
                <article className="profile">
                    <div className="profile__hover-effect-container">
                        <div style={{ backgroundImage: `url(${userAvatar})` }} className="profile__avatar" alt="Аватар"></div>
                        <button onClick={props.onEditAvatar} type="submit" className="profile__button-edit-avatar">
                        </button>
                    </div>
                    <div className="profile__info-container">
                        <div className="profile__info-group">
                            <h1 className="profile__name">{userName}</h1>
                            <h2 className="profile__job">{userDescription}</h2>
                        </div>
                        <button onClick={props.onEditProfile} type="submit" className="profile__button-edit"></button>
                    </div>
                </article>
                <button onClick={props.onAddPlace} type="button" className="profile-container__button-add"></button>
            </section>

            <section className="gallery">
              {cards.map(item => <Card key={item._id} {...item} card={item} onCardClick={props.handleCardClick} />)}
            </section>
        </div>
    )
}

export default Main;