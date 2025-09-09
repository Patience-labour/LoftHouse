import './Feedback.scss';
import { mask } from './../../Libs/phoneMask/mask';
import { useEffect } from 'react';

export const Feedback = () => {

  useEffect(() => {
    mask('[data-tel-input]');
  }, [])
  
  return (
    <section className="feedback">
      <div className="container">
        <div className="feedback__title">
          <h2 className="title-2">Есть вопросы?</h2>
        </div>
        <form action="" className="feedback__form form">
          <p className="form__privacy form__privacy--mobile">
            *Мы никому не передаем ваши данные.<br />
            И не сохраняем ваш номер в базу.
          </p>
          <input type="text" className="form__input" placeholder="Ваше имя" />
          <input data-tel-input type="text" className="form__input" placeholder="Ваш телефон" />

          <button type="submit" className="form__btn">Посмотреть район</button>
        </form>
      </div>
    </section>
  )
}