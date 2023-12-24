import { useRef, useState } from "react";


const New = () => {
    let [mail, setMail]=useState();
    let message=useRef()
    let message1=useRef()
    const load=(e)=>{
      e.preventDefault();
    const forms = document.getElementById('form')

        if (!forms.checkValidity()) {
          e.stopPropagation()
          forms.classList.add('was-validated')
return
        } 
     
      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

let raw = JSON.stringify(mail);

let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://pets.xn--80ahdri7a.site/api/subscription", requestOptions)
  .then(response => response.status)
  .then(result => {
    console.log(result);
    if (result==204) message.current.classList.remove('d-none')
    else
  if (result==422) message1.current.classList.remove('d-none')
   
  })
  .catch(error => console.log('error', error));

    }

    return ( 
      <div>
      <form className="p-3 m-auto w-25" style={{'minWidth':'200px'}} onSubmit={load} id="form" noValidate>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Введите адрес электронной почты, чтопы подписаться на рассылку новостей </label>
    <input type="email" id="validationCustom1" placeholder="Введите Email" required className="form-control" onChange={(e)=>setMail({...mail,email:e.target.value})}/>
    <div className="invalid-feedback minWidth">
        Пожалуйста, введите адрес электронной почты
      </div>
            </div>
            <div className="row mb-4">
              <div className="col d-flex justify-content-center">
              <div className="form-check">
      <input className="form-check-input bg-dark" id="invalidCheck" type="checkbox" required />
      <label  className="form-check-label text-dark"   style={{'paddingBottom': '10px'}} htmlFor="invalidCheck">
      Нажимая галочку, Вы соглашаетесь с политикой конфиденциальности
      </label>
      <div className="  invalid-feedback"  htmlFor="form2Example31" style={{'paddingBottom': '10px', 'color':"#CD5C5C"}} >
      Для продолжения вы должны согласиться
      </div>
    </div>
              </div>
              
            <button type="submit" className="btn btn-block btn-dark text-light"> <h5> Подписаться</h5></button>
      
    </div>
    
  </form>
  <div className="alert alert-dark d-none" role="alert" ref={message}>
 Вы успешно подписались на новости
</div>
<div className="alert alert-dark d-none" role="alert" ref={message1}>
Упс, ошибка, попробуйте позже
</div>
   </div>);
}
 
export default New;