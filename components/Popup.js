export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
  }

  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose);
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    document.addEventListener("keydown", this._handleEscapeClose);
  }

  setEventListeners() {
    this._popupCloseBtn.addEventListener("mousedown", (evt) => {
      if (
        evt.target.closest(".popup__close") ||
        evt.target.classList.contains("popup")
      )
        this.close();
    });
  }
}
