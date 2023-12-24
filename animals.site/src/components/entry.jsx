import { useRef, useState } from "react";
import {Link} from "react-router-dom";
const Entry = () =>{
  const [user,setUser] = useState('');  
  let message=useRef()
  let message1=useRef()


  const load=(e)=>{
    e.preventDefault()
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
    
    fetch("https://pets.xn--80ahdri7a.site/api/login", requestOptions)

      .then(response => response.json())
      .then(result => {
        console.log(result);
        if ("data" in result) {
          message.current.classList.remove('d-none');
           localStorage.token=result.data.token;
           message1.current.classList.add('d-none')
        }
        else
        if (result.error.code==401) {message1.current.classList.remove('d-none')
        message.current.classList.add('d-none')}
      
      }
    )
      .catch(error => console.log('error', error));
  
  };
    return(
        <div>
 <form className="pt-3 need-validation" onSubmit={load} noValidate id='form' >
                  <div className="form-group py-2">
                    <div className="input-field  border-light">
                      <span className="far fa-user p-2 border-white"></span>
                      <input type="email" placeholder="Введите Email"  id="validationCustom01" required className="form-control" onChange={(e)=>setUser({...user, email:e.target.value})}/>
                    </div>
                    <div className="invalid-feedback">
        Пожалуйста, введите адрес электронной почты
      </div>
                  </div>
                  <div className="form-group py-1 pb-2 ">
                    <div className="input-field border-light">
                      <span className="fas fa-lock p-2 light"></span>
                      <input type="password" placeholder="Введите пароль" id="validationCustom02" required className="form-control" onChange={(e)=>setUser({...user, password:e.target.value})}/>
                    </div>
                    <div className="invalid-feedback">
        Пожалуйста, введите пароль.
      </div>
                  </div>
                  <button type="submit" className="btn btn-block btn-light text-dark" > <h5> Вход</h5></button>
                  <div className="text-center pt-3" style={{'color':'lightgray'}}>Не зарегистрированы? <Link to={'/registration'}  style={{'textDecoration':'none', 'color':'lightgray'}}>Зарегистрироваться</Link>
               </div>
                </form>
                <div className="alert alert-dark d-none" role="alert" ref={message}>
 Вы успешно вошли!
</div>
<div className="alert alert-dark d-none" role="alert" ref={message1}>
Неправильный E-mail или пароль
</div>

        </div>
              );
            };
            export default Entry;