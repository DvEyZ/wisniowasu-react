import React from 'react';

import './contact.scss';

export class WiFIContactComponent extends React.Component
{
    render()
    {
        return(
            <div>
                <h2 class="section_topic alt-mobile-anim">Pytania? Napisz do nas</h2>
                <section class="contact-card">
                    <h2 class="contact-card__title">Jesteś ciekawy przebiegu pracy?</h2>
                    <p class="contact-card__content">Obserwuj nas na bieżąco w social mediach oraz w razie pytań lub sugestii koniecznie
                        pisz do nas za pośrednictwem maila <a href="mailto:kontakt@wisniowasu.pl">kontakt@wisniowasu.pl</a> albo
                        formularza poniżej.
                    </p>
                    <div class="contact-card__social">
                        <a href="https://instagram.wisniowasu.pl" title="Nasz Instagram" class="contact-card__social__instagram"></a>
                        <a href="https://www.facebook.com/wifiwisniowa" title="Nasz Facebook"
                            class="contact-card__social__facebook"></a>
                        <a href="https://youtube.wisniowasu.pl" title="Nasz YouTube" class="contact-card__social__youtube"></a>
                    </div>
                </section>

                <form class="contact-container" id="form">
                    <fieldset class="contact-form">
                        <legend class="contact-form__legend">Kontakt</legend>
                        <label class="contact-form__label" for="name">Imię i nazwisko</label>
                        <span class="contact-form__input">
                            <img class="contact-form__input__icon" src="../../../img/icons/icons8-user-100.png" alt="Imię"/>
                            <input class="contact-form__input__field" type="text" name="name" id="name" placeholder="Jan Kowalski"/>
                        </span>
                        <label class="contact-form__label" for="subject">Temat wiadomości</label>
                        <span class="contact-form__input">
                            <img class="contact-form__input__icon" src="../../../img/icons/icons8-pencil-drawing-100.png" alt="Temat"/>
                            <input class="contact-form__input__field" type="text" name="subject" id="subject" placeholder="Temat"/>
                        </span>
                        <label class="contact-form__label" for="email">Adres e-mail<span class="contact-form__required"></span></label>
                        <span class="contact-form__input">
                            <img class="contact-form__input__icon" src="../../../img/icons/icons8-mail-100.png" alt="Adres"
                                aria-required="true"/>
                            <input class="contact-form__input__field" type="email" name="email" id="email"
                                placeholder="email@example.com" required/>
                        </span>
                        <label class="contact-form__label" for="content">Treść wiadomości<span
                                class="contact-form__required"></span></label>
                        <div class="flex-container">
                            <textarea class="contact-form__message" name="message" id="message" placeholder="..." required></textarea>
                        </div>
                        <span class="contact-form__button">
                            <button class="contact-form__button__btn" type="submit" name="submit" id="submit">Wyślij
                                <img class="contact-form__button__icon" src="../../../img/icons/icons8-email-send-100.png" alt="Wyślij" />
                            </button>
                        </span>
                    </fieldset>
                </form>
                <aside class="modal" id="modal">
                    <button class="modal__close-button" id="modal_close_btn"></button>
                    <img src="../../../img/icons/icons8-approval-100.png" alt="Ikonka sukces" class="modal__icon"
                        id="js_modal_icon_success"/>
                    <img src="../../../img/icons/icons8-cancel-100.png" alt="Ikonka niepowodzenie" class="modal__icon"
                        id="js_modal_icon_fail"/>
                    <h2 class="modal__header" id="js_modal_header">Poszło!</h2>
                    <p class="modal__message" id="js_modal_message">Dzięki za kontakt! Odezwiemy się wkrótce ;)</p>
                </aside>
                <div class="modal__background-overlay" id="modal_overlay"></div>
            </div>
        )
    }
}