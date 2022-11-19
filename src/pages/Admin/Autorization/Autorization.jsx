import React from 'react'
import './Autorization.css';

function Autorization() {
  return (
    <div >
      <div className='auth-main'>
        <h2>Авторизация</h2>
        <div className='auth'>
          <input className='auth-item auth-login' placeholder='login@mail.ru'></input>
          <input className='auth-item auth-login' placeholder='password'></input>
          <button className='auth-item auth-button'>Войти</button>
        </div>
      </div>
    </div>
  )
}

export default Autorization;
