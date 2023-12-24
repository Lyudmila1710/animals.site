import Header from "../components/header";
import Footer from "../components/footer";
import Post_ from "../components/post_";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Post_1 = () =>{
    let [animal, setAnimal] = useState({ data: { pet: [] } });
    useEffect(() => req_pageAnimal(animal, setAnimal), []);
    let { id } = useParams();
 
    function req_pageAnimal(animal, setAnimal) {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
 
        fetch("https://pets.сделай.site/api/pets/" + id, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setAnimal(result);
            })
            .catch(error => console.log('error', error));
    }
    let pet = animal.data.pet;
    return(
        <div>
            <Header />
            <main style={{'minHeight':'73vh'}} className=" bg-dark "> 
            <div style={{'paddingTop': '10vh'}}>
<Post_ data={pet}/> 
            </div>
              </main>
            <Footer />
        </div>
    );
};
export default Post_1;
