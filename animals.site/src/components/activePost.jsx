import React from 'react';
import {Link} from "react-router-dom";
import  { useState } from "react";

const ActivePost = (props) => {
  const [formState, setFormState] = useState({
    kind: "",
    mark: ""
  });
  function redacted(e) {
    e.preventDefault();

    const forms = document.getElementById("redackt" + props.data.id);
    console.log(forms.checkValidity());

    if (!forms.checkValidity()) {
      e.stopPropagation()
      forms.classList.add('was-validated')
return
    } 

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage.token);



    var formdata = new FormData(document.getElementById("redackt" + props.data.id));

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://pets.сделай.site/api/pets/" + props.data.id, requestOptions)
        .then(response => response.json())
        .then(result => {
            if ('data' in result) {
                window.location.reload();
            }
        })
        .catch(error => console.log('error', error));
}

  
    const deleted = (id) => {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + localStorage.token);


      var requestOptions = {
          method: 'DELETE',
          headers: myHeaders,
          redirect: 'follow'
      };

      fetch(`https://pets.сделай.site/api/users/orders/${id}`, requestOptions)
          .then(response => response.status)
          .then(result => {
              console.log(result)
              window.location.reload();
          })

          .catch(error => console.log('error', error));
  }
    
    return(
    <div>

                
                <div className="featurette bg-dark text-white align-items-center mb-4 w-100" style={{'height': '110'}}>
                    <div className=" d-flex justify-content-center mt-4">
                    <img src={'https://pets.сделай.site'+props.data.photos} id="animalsuserposts" alt="animal" style={{"height":"250px"}}/>
                    </div>
                   
                      <div className="d-flex flex-column border m-5 p-3 mx-auto" style={{'maxWidth': '500px'}}> 
                        
                        <div className="d-flex">
                            <p className="text-info me-2 d-inline">id: </p>
                            <p className="d-inline">{props.data.id}</p>
                        </div >
                        <div className="d-flex"><p className=" text-info me-2">Статус:</p>
                          <p >{props.data.status}</p></div>
                        <div className="d-flex"> <p className="text-info me-2 d-inline"> Вид животного:</p><p>{props.data.kind}</p>        </div >
                            <div className="d-flex"><p className="text-info me-2 d-inline">Описание:</p><p>{props.data.description}</p>        </div >
                                <div className="d-flex"> <p className="text-info me-2 d-inline">Номер чипа:</p><p> hapo-035-spb</p>        </div >
                                    <div className="d-flex"> <p className="text-info me-2 d-inline">Район:</p><p> {props.data.district}</p>        </div >
                                        <div className="d-flex"><p className="text-info me-2 d-inline" >Дата:</p><p> {props.data.date}</p>        </div >
                                        <div className="d-flex"><p className="text-info me-2 d-inline" >Телефон:</p><p> {props.data.phone}</p>        </div >
                                        <div className="d-flex"><p className="text-info me-2 d-inline" >Пост разместил(а):</p><p> {props.data.name}</p>        </div >
                                        <div className="d-flex justify-content-between align-items-center ">
                <div className="btn-group btn-group-sm">
                <Link to={"/post1/" + props.data.id}> <button type="button" className="btn btn-outline-light ">Подробнее</button></Link>
                {(props.data.status == "onModeration" || props.data.status == "archive") &&<button className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#exampleModal1">Удалить объявление</button>}
                {(props.data.status == "onModeration" || props.data.status == "archive") && <button className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target={"#exampleModal2" + props.data.id}>Изменить данные</button>}
      
                  
                  </div>
            </div>
                    </div>
                  </div>
                  <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content bg-black text-white">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Подтвердите удаление</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div className="modal-body">
        Вы уверены, что хотите удалить объявление?
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-light" data-bs-dismiss="modal">Закрыть</button>
        <button type="button" className="btn btn-outline-light" onClick={() => deleted(props.data.id)} data-bs-dismiss="modal">Удалить</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id={"exampleModal2" + props.data.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-black text-white">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Изменение данных</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id={'redackt' + props.data.id} onSubmit={redacted} noValidate>
                                <label htmlFor="inputK">Вид:</label>
                                <input name="kind" type="text" className="form-control" id="inputK"  pattern="^[А-Яа-яЁё\s\-]{1,}$" onChange={(e)=>setFormState({...formState,kind:e.target.value})}/>
                                <div className="invalid-feedback minWidth">
    Пожалуйста, введите вид. Оно может содержать только кириллицу, пробелы и дефисы
      </div>
                                <br />
                                <label htmlFor="inputNai">Фото 1:</label>
                                <input name='photos1' type="file" className="form-control-file " id="exampleFormControlFile1" accept="image/png"  />
                                <br />
                                <label htmlFor="inputView">Фото 2:</label>
                                <input name='photos2' type="file" className="form-control-file " id="exampleFormControlFile2" accept="image/png"  />
                                <br />
                                <label htmlFor="inputVie">Фото 3:</label>
                                <input name='photos3' type="file" className="form-control-file " id="exampleFormControlFile3" accept="image/png" />
                                <br />
                                <label htmlFor="inputM">Чип:</label>
                                <input name='mark' type="text" className="form-control" id="inputM"  pattern="^[А-Яа-яЁё\s\-]{1,}$" onChange={(e)=>setFormState({...formState,mark:e.target.value})} />
                                <div className="invalid-feedback minWidth">
    Пожалуйста, введите вид. Оно может содержать только кириллицу, пробелы и дефисы
      </div>
                                <br />
                                <label htmlFor="inpu">Описание:</label>
                                <input name='description' type="text" className="form-control" id="inpu" />


                                <div className="modal-footer">
                                    <button type="button" className="btn btn-light" data-bs-dismiss="modal">Закрыть</button>
                                    <button type="submit" className="btn  btn-outline-light">Сохранить изменения</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
</div>
          );
        };
        export default ActivePost;