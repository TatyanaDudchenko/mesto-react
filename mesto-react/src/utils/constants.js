// Объявляем объект настроек валидации
export const settingsObjectMesto = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

export const settingsObjectCard = {
  cardSelector: '.card',
  likeButtonSelector: '.card__icon-like',
  trashButtonSelector: '.card__icon-trash',
  likeButtonActiveClass: 'card__icon-like_active',
  cardImageSelector: '.card__image',
  cardTitleSelector: '.card__text',
  likeSelector: '.card__counter-like'
}

// Создаем объект и экземпляр класса с данными пользователя
export const configUserInfo = {
  nameItemSelector: '.profile__name',
  jobItemSelector: '.profile__job',
  avatarItemSelector: '.profile__avatar'
}

// Выбираем в документе галерею, которая будет заполняться карточками
export const gallerySelector = '.gallery';

// Выбираем элементы попапы
export const editPopup = document.querySelector('.popup_type_edit');
export const addPopup = document.querySelector('.popup_type_add');
export const editAvatarPopup = document.querySelector('.popup_type_edit-avatar');

// Выбираем кнопки открытия попапов
export const openEditPopupButton = document.querySelector('.profile__button-edit');
export const openAddPopupButton = document.querySelector('.profile-container__button-add');
export const openEditAvatarPopupButton = document.querySelector('.profile__button-edit-avatar');

// Выбираем элемент Форма редактирования профиля
const formEditPopup = editPopup.querySelector('.popup__container');
// Выбираем поле редактирования ввода Имя
export const nameInput = formEditPopup.querySelector('.popup__input_name');
// Выбираем поле редактирования ввода Деятельность
export const jobInput = formEditPopup.querySelector('.popup__input_job');
