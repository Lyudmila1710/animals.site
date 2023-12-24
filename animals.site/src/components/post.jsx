import React from 'react';

import {Link} from "react-router-dom";
const Post = (props) => {
    return(
    <div>

<div className="col-lg-6 col-md-6 col-12">
                <div className="row featurette bg-dark text-white align-items-center mb-4 " style={{'height': '110','width':'400px'}}>
                    <div className=" d-flex justify-content-center mt-4" style={{"height":"280px"}}>
                    {props.data == null?<></>:<img src={'https://pets.сделай.site' + props.data.photos} className="card-img-top card_img" alt="..." />}
                    </div>
                   
                      <div className="d-flex flex-column border m-5 p-3 mx-auto" > 
                        
                        <div className="d-flex">
                            <p className="text-info me-2 d-inline">id: </p>
                            <p className="d-inline">{props.data.id}</p>
                        </div >
                        <div className="d-flex"><p className=" text-info me-2">Телефон:</p>
                          <p >{props.data.phone}</p></div>
                          <div className="d-flex"><p className=" text-info me-2">Имя:</p>
                          <p >{props.data.name}</p></div>
                        <div className="d-flex"> <p className="text-info me-2 d-inline"> Вид животного:</p><p>{props.data.kind}</p>        </div >
                            <div className="d-flex"><p className="text-info me-2 d-inline">Описание:</p><p>{props.data.description}</p>        </div >
                                <div className="d-flex"> <p className="text-info me-2 d-inline">Номер чипа:</p><p>{props.data.mark}</p>        </div >
                                    <div className="d-flex"> <p className="text-info me-2 d-inline">Район:</p><p> {props.data.district}</p>        </div >
                                        <div className="d-flex"><p className="text-info me-2 d-inline" >Дата:</p><p> {props.data.date}</p>        </div >
                        <div className="text-center">
                        <Link to={"/post1/" + props.data.id}>  <button type="button" className="btn btn-outline-light me-2">Подробнее</button> </Link>
                        </div>
                    </div>
                  </div>
                  </div>

</div>
          );
        };
        export default Post;