import Header from "../components/header";
import Footer from "../components/footer";
import '../css/style.css';
import Entry from "../components/entry";
<link href="style.css" rel="stylesheet"/>


const Login = () =>{
    return(
        <div>
            <Header />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"></link>
            <main style={{'minHeight':'71vh'}}> 
            <div className="wrapper bg-dark text-center mb-35">
                <div className="h1 text-center text-white" >Вход</div>
                <div className="h4 text-light text-center pt-2 " >Введите данные</div>
               <Entry/>
              </div>
              </main>
        
            <Footer />
        </div>
    );
};
export default Login;