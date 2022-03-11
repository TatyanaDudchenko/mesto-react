import React from "react";
import { useState, useEffect } from "react";
import api from "../utils/Api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ onEditProfile, onAddPlace, onEditAvatar, handleCardClick }) {
    const currentUser = React.useContext(CurrentUserContext);

    const [cards, setCards] = useState([]);
  
    useEffect(() => {
      
      api.getInitialCards()
      .then(response => {
        const reversedItems = response.reverse();
        setCards(reversedItems)
      })
      .catch((err) => {
        console.log(err);
      });
    }, [])

    function handleCardLike(card) {
      // Снова проверяем, есть ли уже лайк на этой карточке
      const isLiked = card.likes.some(i => i._id === currentUser._id);
      
      // Отправляем запрос в API и получаем обновлённые данные карточки
      if (!isLiked) {
        api.putLike(card._id)
        .then(newRenderCard => {
          setCards((cards) => cards.map((c) => c._id === card._id ? newRenderCard : c));
        })
        .catch((err) => {
          console.log(err);
        })

      } else {
        api.deleteLike(card._id)
        .then(newRenderCard => {
          setCards((cards) => cards.map((c) => c._id === card._id ? newRenderCard : c));
        })
        .catch((err) => {
          console.log(err);
        })
      }
    } 

    function handleCardDelete(card) {
      api.deleteCard(card._id)
      .then(response => {
        setCards((cards) => cards.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        console.log(err);
      })
    } 
    

    return (
      <div className="content">
        <section className="profile-container">
          <article className="profile">
            <div className="profile__hover-effect-container">
              <div style={{ backgroundImage: `url(${currentUser.avatar})` }} className="profile__avatar" alt="Аватар"></div>
                <button onClick={onEditAvatar} type="submit" className="profile__button-edit-avatar">
                </button>
            </div>
            <div className="profile__info-container">
              <div className="profile__info-group">
                <h1 className="profile__name">{currentUser.name}</h1>
                <h2 className="profile__job">{currentUser.about}</h2>
              </div>
              <button onClick={onEditProfile} type="submit" className="profile__button-edit"></button>
            </div>
          </article>
          <button onClick={onAddPlace} type="button" className="profile-container__button-add"></button>
        </section>

        <section className="gallery">
          {cards.map(item => (<Card key={item._id} {...item} card={item} 
          onCardClick={handleCardClick} 
          onCardLike={handleCardLike} 
          onCardDelete={handleCardDelete} />))}
        </section>
      </div>
    )
}

export default Main;