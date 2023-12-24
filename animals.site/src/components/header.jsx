import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from '../img/logo2.png';
import Search from './search';

const Header = () => {
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
<nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid">
              <Link to={'/'} className="navbar-brand"><img src={logo} className=" rounded-3" alt="logo"/></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to={'/'} className="nav-link text-light" aria-current="page" >Главная</Link>
                  </li>
                  <li className="nav-item"> 
                  <button className="nav-link text-light" onClick={handleProfileClick}>Личный кабинет</button>
                  </li>
                  <li className="nav-item">
                    <Link to={'/createPost'} className="nav-link text-light" >Добавить пост</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/posts'} className="nav-link text-light">Поиск по объявлениям</Link>
                  </li>
                </ul>
               <Search/>
                <div className="col-md-4 text-end">
                    <Link to={"/login"}><button type="button" id="loginButton" className="btn btn-outline-light me-2">Войти</button></Link>
                    <Link to={"/registration"}> <button type="button" id="RegistrationButton" className="btn btn-light">Зарегистрироваться</button></Link>
                </div>
              </div>
            </div>
          </nav></div>
          );
        };
        export default Header;