import React from 'react'
import './Autorization.css';
import {useState} from 'react';


function Autorization() {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [correct, setCorrect] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    setIsButtonDisabled(true);
    console.log(login + " " + password);
    //function send to bd for chekin
    let rightLoginPassword = true;
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 1000)

    if (rightLoginPassword){
      setCorrect(true);
      window.location.assign('admin/showitems');
    }
    else{
      setCorrect(false);
    }
  }

  return (
    <div >
      <div className='auth-main'>
        <h2>Авторизация</h2>
        <form className='auth' onSubmit={handleSubmit}>
          <input name="login" onChange={(event) => {setLogin(event.target.value); setCorrect(true)}} className='auth-item auth-login' placeholder='login@mail.ru'></input>
          <input name="password" onChange={(event) => {setPassword(event.target.value); setCorrect(true)} } className='auth-item auth-login' placeholder='password'></input>
          <div className={!correct ? "message-warning": "message-correct"}>Неправильные данные</div>
          <button className='auth-item auth-button' disabled={isButtonDisabled}>Войти</button>
        </form>
      </div>
    </div>
  )
}

export default Autorization;
