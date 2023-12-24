import Header from "../components/header";
import Footer from "../components/footer";
import '../css/style.css';
import Registrations from "../components/registrations";
<link href="style.css" rel="stylesheet"/>

const Registration = () =>{
    return(
        <div>
            <Header />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"></link>
            <main style={{'minHeight':'71vh'}}> 
            <div className="wrapper bg-dark ">
                <div className="h1 text-white text-center" >Регистрация</div>
  <Registrations/>
              </div>
              </main>
        
            <Footer />
        </div>
    );
};
export default Registration;