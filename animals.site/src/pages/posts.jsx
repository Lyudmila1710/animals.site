import Header from "../components/header";
import Footer from "../components/footer";
import {Link} from "react-router-dom";
import CatalogPosts from "../components/postCatalog";

const Posts = () =>{
    return(
        <div>
            <Header />    
            <main className="container bg-white " style={{'minHeight':'75vh'}}>
          <div className="mb-4">
          <Link to={'/createPost'}><button type="button"  className="btn btn-dark text-light mt-3">Создать объявление</button></Link></div>
            <div className="row">
            <CatalogPosts/>
              </div>
 </main>
            <Footer />
        </div>
    );
};
export default Posts;