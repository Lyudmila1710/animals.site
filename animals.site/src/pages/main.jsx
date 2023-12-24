import Header from "../components/header";
import Footer from "../components/footer";
import Post_main from "../components/post_main";
import New from "../components/new";
import Slider from "../components/slider";
import React,{useEffect,useState} from "react";
const Main = () =>{
    let [post,setPost] = useState({data:{orders: [] }});
    useEffect(() => re_post(post, setPost), []);
    function re_post(post,setPost){
        var myHeaders = new Headers();

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://pets.xn--80ahdri7a.site/api/pets", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    setPost(result)})
  .catch(error => console.log('error', error));
    }
    let posts=post.data.orders.map((order,index) =>{
        return <Post_main data={order}/>;
    })
        return(
        <div>
            <Header />
            <main style={{'minHeight':'74vh'}}> 
             <h2 className="text-center text-dark bg-light m-2">Найденные животные</h2>
          <Slider/>
              <h2 className="text-center text-dark bg-light m-2">Карточки найденных животных</h2>
              <hr className="featurette-divider"/>
       {posts}
         <h2 className="text-center text-dark bg-light m-2">Подписка на новости</h2>
          <New/>
        
                 </main>
            <Footer />
        </div>
    );
};
export default Main;