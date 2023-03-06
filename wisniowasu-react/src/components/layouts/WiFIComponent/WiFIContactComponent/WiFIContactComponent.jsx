import React from 'react';

import './contact.scss';

export class WiFIContactComponent extends React.Component
{
    render()
    {
        return(
            <div>
                <h2 className="section_topic alt-mobile-anim">Pytania? Napisz do nas</h2>
                <section className="contact-card">
                    <h2 className="contact-card__title">Jesteś ciekawy przebiegu pracy?</h2>
                    <p className="contact-card__content">Obserwuj nas na bieżąco w social mediach oraz w razie pytań lub sugestii koniecznie
                        pisz do nas za pośrednictwem maila <a href="mailto:kontakt@wisniowasu.pl">kontakt@wisniowasu.pl</a> albo
                        formularza poniżej.
                    </p>
                    <div className="contact-card__social">
                        <a href="https://instagram.wisniowasu.pl" title="Nasz Instagram" className="contact-card__social__instagram"></a>
                        <a href="https://www.facebook.com/wifiwisniowa" title="Nasz Facebook"
                            className="contact-card__social__facebook"></a>
                        <a href="https://youtube.wisniowasu.pl" title="Nasz YouTube" className="contact-card__social__youtube"></a>
                    </div>
                </section>

                <form className="contact-container" id="form">
                    <fieldset className="contact-form">
                        <legend className="contact-form__legend">Kontakt</legend>
                        <label className="contact-form__label" htmlFor="name">Imię i nazwisko</label>
                        <span className="contact-form__input">
                            <img className="contact-form__input__icon" src="../../../img/icons/icons8-user-100.png" alt="Imię"/>
                            <input className="contact-form__input__field" type="text" name="name" id="name" placeholder="Jan Kowalski"/>
                        </span>
                        <label className="contact-form__label" htmlFor="subject">Temat wiadomości</label>
                        <span className="contact-form__input">
                            <img className="contact-form__input__icon" src="../../../img/icons/icons8-pencil-drawing-100.png" alt="Temat"/>
                            <input className="contact-form__input__field" type="text" name="subject" id="subject" placeholder="Temat"/>
                        </span>
                        <label className="contact-form__label" htmlFor="email">Adres e-mail<span className="contact-form__required"></span></label>
                        <span className="contact-form__input">
                            <img className="contact-form__input__icon" src="../../../img/icons/icons8-mail-100.png" alt="Adres"
                                aria-required="true"/>
                            <input className="contact-form__input__field" type="email" name="email" id="email"
                                placeholder="email@example.com" required/>
                        </span>
                        <label className="contact-form__label" htmlFor="content">Treść wiadomości<span
                                className="contact-form__required"></span></label>
                        <div className="flex-container">
                            <textarea className="contact-form__message" name="message" id="message" placeholder="..." required></textarea>
                        </div>
                        <span className="contact-form__button">
                            <button className="contact-form__button__btn" type="submit" name="submit" id="submit">Wyślij
                                <img className="contact-form__button__icon" src="../../../img/icons/icons8-email-send-100.png" alt="Wyślij" />
                            </button>
                        </span>
                    </fieldset>
                </form>
                <aside className="modal" id="modal">
                    <button className="modal__close-button" id="modal_close_btn"></button>
                    <img src="../../../img/icons/icons8-approval-100.png" alt="Ikonka sukces" className="modal__icon"
                        id="js_modal_icon_success"/>
                    <img src="../../../img/icons/icons8-cancel-100.png" alt="Ikonka niepowodzenie" className="modal__icon"
                        id="js_modal_icon_fail"/>
                    <h2 className="modal__header" id="js_modal_header">Poszło!</h2>
                    <p className="modal__message" id="js_modal_message">Dzięki za kontakt! Odezwiemy się wkrótce ;)</p>
                </aside>
                <div className="modal__background-overlay" id="modal_overlay"></div>
            </div>
        )
    }
}