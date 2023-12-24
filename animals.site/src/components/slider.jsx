import Slide from "../components/slide";
import { useState, useEffect } from "react";
function Loader(props) {
    return (<div className='justify-content-center align-items-center' id='loader' style={props.display}>
        <div className='fs-1 text-success'>...Идет загрузка</div>
    </div>)
}



const Slider = () => {
    let [slide, setSlide] = useState({ data: { pets: [] } });
    let [show, setShow] = useState({ display: 'flex' });
    useEffect(() => req_slide(slide, setSlide), []);

    function req_slide(slide, setSlide) {
        var requestOptions = {
            method: 'GET',
        };

        fetch("https://pets.сделай.site/api/pets/slider", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setSlide(result)
                setShow({ display: 'none' });

            })
            .catch(error => console.log('error', error));

    } let indicators = slide.data.pets.map((pet, index) => {
        if (index == 0) {
            return <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" key={index + 'btn'}></button>;
        } else {
            return <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} aria-label={"Slide " + (Number(index) + 1)} key={index + 'btn'}></button>;

        }
    })
    let slides = slide.data.pets.map((pet, index) => {
        if (index == 0) {
            return <Slide data={pet} key={index} css_class='carousel-item active text-center text-light p-4' />;
        } else {
            return <Slide data={pet} key={index} css_class='carousel-item text-center text-light p-4' />;

        }
    })
    return (
        <div>
            <Loader display={show} />
            <div id="carouselExampleIndicators" className="carousel slide carousel-light w-50 m-auto bg-dark" data-bs-ride="carousel" style={{ minWidth: '250', minHeight:"380px" }}>
                <div className="carousel-indicators " >
                    {indicators}
                </div>
                <div className="carousel-inner">

                    {slides}

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    )
}



export default Slider;