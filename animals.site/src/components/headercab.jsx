import React from 'react';
import logo from '../img/logo2.png';
import {Link,useNavigate} from "react-router-dom";
import Search from './search';

const HeaderCab = () => {
 
let history=useNavigate()

  const handleLogout= ()=>{
    localStorage.clear();
    history('/login') 
    
  }
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
                    <Link to={'/profile'} className="nav-link text-light" >Личный кабинет</Link>
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
                <button type="button" className="btn btn-outline-light me-2" data-bs-toggle="modal" data-bs-target="#exampleModal"> Выйти</button>
                
                </div>
              </div>
            </div>
          </nav>
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content bg-black text-white">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Подтвердите выход</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div className="modal-body">
        Вы уверены, что хотите выйти?
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-light" data-bs-dismiss="modal">Закрыть</button>
        <button type="button" className="btn btn-outline-light" onClick={handleLogout} data-bs-dismiss="modal">Выйти</button>
      </div>
    </div>
  </div>
</div>

          </div>
          
          );
        };
        export default HeaderCab;