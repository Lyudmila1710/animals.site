import React, { useEffect, useState, useRef} from 'react';
const Cab = () => {
  let message=useRef()
  let message1=useRef()
  function Zapros(profile,SetProfile) {
    var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${localStorage.token}`);
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://pets.xn--80ahdri7a.site/api/users", requestOptions)
  .then(response => response.json())
  .then(result => {console.log(result)
  SetProfile(result)
  console.log(profile,result)
  })
  .catch(error => console.log('error', error));
  }
  const [profile,SetProfile] = useState({name:'',phone:'', email:'',registrationDate:new Date(),countOrder:'',countPets:''})
 useEffect(()=>{
  Zapros(profile,SetProfile)
 },[])
  function Zapros2(id) {
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${localStorage.token}`);

var raw = JSON.stringify({
  [id]: document.getElementById(id).value
});

var requestOptions = {
  method: 'PATCH',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(`https://pets.xn--80ahdri7a.site/api/users/${id}`, requestOptions)
  .then(response => response.status)
  .then(result =>{ console.log(result);
   if(result==200) {message.current.classList.remove('d-none');
    message1.current.classList.add('d-none')}
  else
  if (result==401) {message1.current.classList.remove('d-none');
  message.current.classList.add('d-none')}})
  .catch(error => console.log('error', error));
  }



let countDay =Math.floor((new Date()-new Date (profile.registrationDate))/86400000)
    return(
    <div>
                      <div className="h3 text-center text-white" >{profile.name}</div>
                <div className="h4 text-center pt-2 text-white"  >Данные</div>
<form className="pt-3 w-75 m-auto ">
<div className="form-group py-2">
  <div className="input-field border-light d-flex justify-content-between align-items-center">
   <div>
    <span>Дней на сайте:</span> <span>{String(countDay)}</span>
  </div>
 </div></div>
<div className="form-group py-2">
  <div className="input-field border-light d-flex justify-content-between align-items-center">
   <div>
    <span>Номер телефона:</span>  <input type="tel" id="phone" required className="form-control lg-w-75 sm-w-50 minWidth" pattern="^\+[0-9]{1,10}" defaultValue={profile.phone}/>
  </div>
 <button type="button" className="btn bg-dark text-white " onClick={()=>Zapros2("phone")}>Изменить</button></div></div>
 <div className="form-group py-2">
  <div className="input-field border-light d-flex justify-content-between align-items-center">
   <div>
    <span>E-mail:</span> <input type="email" id="email" required className="form-control w-75 minWidth" defaultValue={profile.email} />
  </div>
 <button type="button" className="btn bg-dark text-white " onClick={()=>Zapros2("email")}>Изменить</button></div></div>
 <div className="form-group py-2">
  <div className="input-field border-light d-flex justify-content-between align-items-center">
   <div>
    <span>Количество добавленных объявлений:</span> <span>{profile.countOrder}</span>
  </div>
 </div></div>
 <div className="form-group py-2">
  <div className="input-field border-light d-flex justify-content-between align-items-center">
   <div>
    <span>Количество животных, у которых нашлись хозяева из числа тех, объявления о
      которых были добавлены текущим пользователем: </span> <span>{profile.countPets}</span>
  </div>
</div></div>
</form>
<div className="alert alert-dark d-none" role="alert" ref={message}>
 Вы успешно изменили данные!
</div>
<div className="alert alert-dark d-none" role="alert" ref={message1}>
Не получилось изменить, попробуйте еще раз
</div>
</div>
 );
};
export default Cab;