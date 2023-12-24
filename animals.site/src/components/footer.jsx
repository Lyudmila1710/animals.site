import React from 'react';
import { Link, useNavigate } from "react-router-dom";
const Footer = () => {
  const history = useNavigate();

  const handleProfileClick = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      history("/login");
    }
    else {
      history("/profile");
    }
  };
    return(
    <div>
<div className="border-bottom bg-dark" >
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item"><Link to={'/'}  className="nav-link px-2 text-light">Главная</Link></li>
              <li className="nav-item"> 
                  <button className="nav-link text-light" onClick={handleProfileClick}>Личный кабинет</button>
                  </li>
              <li className="nav-item"><Link to={'/createPost'}  className="nav-link px-2 text-light">Добавить пост</Link></li>
              <li className="nav-item"><Link to={'/posts'} className="nav-link px-2 text-light">Поиск по объявлениям</Link></li>
              <li className="nav-item"><Link to={'/login'} className="nav-link px-2 text-light">Вход</Link></li>
              <li className="nav-item"><Link to={'/registration'} className="nav-link px-2 text-light">Регистрация</Link></li>
            </ul>
            <p className="text-center text-light"> Телефон “8 (800)123-45-67” 
              e-mail: mail@getpetback.ru
              </p>
            <p className="text-center text-secondary">© 2023 GET PET BACK</p>
          </div>
    </div>
      );
    };
    export default Footer;