import React from 'react';


function Slide(props) {
  return (
    <div className= {props.css_class}>
    <div  className="d-block mx-auto" alt="животное" style={{'MaxWidth': '300px'}}>  
    <img src={'https://pets.сделай.site'+props.data.image} className="d-block m-auto" alt="photo_pets" style={{height: '200px'}}/>    
    <h2 className='text-center '>{props.data.kind}</h2>
    <p className='text-center'>{props.data.description}</p>  
 
  </div>
  </div>
  )
}

        export default Slide;