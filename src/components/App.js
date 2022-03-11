import { useState, useEffect } from "react";
import api from "../utils/Api";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});
  
  const [currentUser, setСurrentUser] = useState({});

  useEffect(() => {
    api.getUserData()
    .then(response => {
      setСurrentUser(response); //response.name, response.about, response.avatar
    })
    .catch((err) => {
      console.log(err);
    });

  }, [])

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  function handleCardClick(props) {
    setSelectedCard(props);
    setIsImagePopupOpen(true);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="background">
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        handleCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm
        title={"Редактировать профиль"}
        name={"edit"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <label className="popup__form-field">
          <input type="text" placeholder="Имя" name="name" className="popup__input popup__input_name" id="name-input" minLength="2" maxLength="40" required/>
          <span className="name-input-error popup__input-error"></span>
        </label>
        <label className="popup__form-field">
          <input type="text" placeholder="Занятие" name="about" className="popup__input popup__input_job" id="job-input" minLength="2" maxLength="200" required/>
          <span className="job-input-error popup__input-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        title={"Новое место"}
        name={"add"}
        button={"Создать"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <label className="popup__form-field">
          <input type="text" placeholder="Название" name="name" className="popup__input popup__input_title" id="title-input" minLength="2" maxLength="30" required/>
          <span className="title-input-error popup__input-error"></span>
        </label>
        <label className="popup__form-field">
          <input type="url" placeholder="Ссылка на картинку" name="link" className="popup__input popup__input_link" id="link-input" required/>
          <span className="link-input-error popup__input-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        title={"Обновить аватар"}
        name={"edit-avatar"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <label className="popup__form-field">
          <input type="url" placeholder="Ссылка на картинку" name="link" className="popup__input popup__input_link" id="link-inp" required/>
          <span className="link-inp-error popup__input-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        title={"Вы уверены?"}
        name={"confirm"} />
      <ImagePopup
        name={"img"}
        isOpen={isImagePopupOpen}
        card={selectedCard}
        onClose={closeAllPopups} />
    </div>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
