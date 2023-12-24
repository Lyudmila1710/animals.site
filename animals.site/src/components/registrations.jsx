import React from "react";
import { useRef, useState } from "react";
import {Link} from "react-router-dom";
const Registrations = () =>{
  const [user, setUser] = useState('');  
  let message=useRef()
  let message1=useRef()

const  load=(e)=>{  
    e.preventDefault();
    const forms = document.getElementById('form')

        if (!forms.checkValidity()) {
          e.stopPropagation()
          forms.classList.add('was-validated')
return
        } 
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify(user);
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("https://pets.xn--80ahdri7a.site/api/register", requestOptions)
          .then(response => response.status)
          .then( result => {
            console.log(result);
            if (result==204){ message.current.classList.remove('d-none')
            message1.current.classList.add('d-none')
          }
          else
          if (result.error.code==422) {message1.current.classList.remove('d-none')
          message.current.classList.add('d-none')}
          
          })
          .catch(error => console.log('error', error));

      }
    return(
        <div>
              <form className="pt-3 needs-validation" onSubmit={load} id="form"  noValidate>   
<div className="form-group py-1 pb-2 ">
  <div className="input-field border-light flex-wrap ">
    <span className="far fa-user p-2 light"></span>
    <input type="text" placeholder="Введите имя" required className="form-control w-75 minWidth"  pattern="^[А-Яа-яЁё\s\-]{1,}$"  id="validationCustom01" onChange={(e)=>setUser({...user,name:e.target.value})} />   
  
   <div className="invalid-feedback minWidth">
    Пожалуйста, введите имя. Оно может содержать только кириллицу, пробелы и дефисы
      </div>
      </div>
</div>


<div className="form-group py-1 pb-2">
  <div className="input-field border-light flex-wrap">
    <span className="fas fa-phone p-2 light"></span>
    <input type="tel" placeholder="Введите телефон" id="validationCustom02" required className="form-control w-75 minWidth" pattern="^\+[0-9]{1,10}" onChange={(e)=>setUser({...user,phone:e.target.value})}/>
  
  <div className="invalid-feedback minWidth">
        Пожалуйста, введите телефон в формате: +12345678956
      </div>
      </div>
</div>


<div className="form-group py-2">
  <div className="input-field border-light flex-wrap">
    <span className="far fa-envelope p-2 border-white"></span>
    <input type="email" id="validationCustom03" placeholder="Введите Email" required className="form-control w-75 minWidth" onChange={(e)=>setUser({...user,email:e.target.value})}/>
  
  <div className="invalid-feedback minWidth">
        Пожалуйста, введите адрес электронной почты
      </div>
      </div>
</div>


<div className="form-group py-1 pb-2 ">
  <div className="input-field border-light flex-wrap">
    <span className="fas fa-lock p-2 light"></span>
    <input type="password" placeholder="Введите пароль"  id="validationCustom04"required className="form-control w-75 minWidth" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{7,}" onChange={(e)=>setUser({...user,password:e.target.value})}/>
 
  <div className="invalid-feedback minWidth">
        Пожалуйста, введите пароль.Пароль должен содержать минимум 7 символов, включая по крайней мере одну цифру, одну строчную и одну заглавную латинскую букву
      </div>
      </div>
</div>


<div className="form-group py-1 pb-2">
  <div className="input-field border-light flex-wrap">
    <span className="fa fa-unlock-alt p-2 light"></span>
    <input type="password" pattern={user.password}   id="validationCustom05" placeholder="Повторите пароль" required className='form-control w-75 minWidth' onChange={(e)=>setUser({...user,password_confirmation:e.target.value})}/>
  
  <div className="invalid-feedback minWidth">
       Пароли не совпадают
      </div>
      </div>
</div>


<div className="row mb-4">
  <div className="col d-flex justify-content-center">
    <div className="form-check">
      <input className="form-check-input bg-dark" id="invalidCheck" type="checkbox" required  onClick={(e)=>setUser({...user,confirm:e.target.checked})}/>
      <label  className="form-check-label text-light"   style={{'paddingBottom': '10px'}} htmlFor="invalidCheck">
      Нажимая галочку, Вы соглашаетесь с политикой конфиденциальности
      </label>
      <div className="  invalid-feedback"  htmlFor="form2Example31" style={{'paddingBottom': '10px', 'color':"#CD5C5C"}} >
      Для продолжения вы должны согласиться
      </div>
    </div>
  </div>
</div>



  <div className="col d-flex justify-content-center">
<button type="submit" className="btn btn-block btn-light text-dark"> <h5> Зарегистрироваться</h5></button>
</div>
                  <div className="text-center text-light pt-3">Уже есть аккаунт? <Link to={'/login'} className="text-light text-decoration" > Войти</Link></div>
                </form>
               <div className="alert alert-dark d-none" role="alert" ref={message}>
 Вы успешно зарегистрировались!
</div>
<div className="alert alert-dark d-none" role="alert" ref={message1}>
Попробуйте зарегистрироваться позже
    </div>
        </div>
        );
    };
    export default Registrations;