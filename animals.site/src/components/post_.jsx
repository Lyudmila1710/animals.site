import React from 'react';


const Post_ = (props) => {
    return(
      <div>
      <div className="row featurette bg-dark text-white align-items-center">
                   
      <h4 className="  pt-5 align-items-center text-center" style={{'minWidth': '250px'}}>{props.data.name}</h4>
       <div className="col-md-7">

           <div className="d-flex flex-row flex-wrap border m-5 p-3" style={{'minWidth': '200px'}}>
               <p className="w-50 text-info" style={{'minWidth': '250px'}}>id:</p>
               <p className="w-50" style={{'minWidth': '250px'}}>{props.data.id}</p>

               <p className="w-50 text-info" style={{'minWidth': '250px'}}>Телефон:</p>
               <p className="w-50" style={{'minWidth': '250px'}}>{props.data.phone}</p>

               <p className="w-50 text-info" style={{'minWidth': '250px'}}>Email:</p>
               <p className="w-50" style={{'minWidth': '250px'}}>{props.data.email}</p>

               <p className="w-50 text-info" style={{'minWidth': '250px'}}>Имя:</p>
               <p className="w-50" style={{'minWidth': '250px'}}>{props.data.name} </p>

               <p className="w-50 text-info" style={{'minWidth': '250px'}}>Вид животного:</p>
               <p className="w-50" style={{'minWidth': '250px'}}> {props.data.kind}</p>
         
               <p className="w-50 text-info" style={{'minWidth': '300px'}}>Описание:</p>
               <p className="w-50" style={{'minWidth': '300px'}}>{props.data.description} </p>
         
               <p className="w-50 text-info" style={{'minWidth': '300px'}}>Чип:</p>
               <p className="w-50" style={{'minWidth': '300px'}}>{props.data.mark}</p>
         
               <p className="w-50 text-info" style={{'minWidth': '300px'}}>Район:</p>
               <p className="w-50" style={{'minWidth': '300px'}}>{props.data.district}</p>
         
               <p className="w-50 text-info" style={{'minWidth': '300px'}}>Дата:</p>
               <p className="w-50" style={{'minWidth': '300px'}}>{props.data.date}</p>

             </div>
       </div>
       <div className="col-md-5 d-flex justify-content-center">
         <img src={'https://pets.сделай.site'+props.data.photos1} className="img-fluid" style={{"height":"250px"}} alt="Животное" />
       </div>
     </div>

 <hr className="featurette-divider"/>
</div>
          );
        };
        export default Post_;