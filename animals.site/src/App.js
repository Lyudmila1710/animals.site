import {Routes, Route} from "react-router-dom";
import Main from "./pages/main";
import Login from "./pages/login";
import Registration from "./pages/registration";
import Cabinet from "./pages/cabinet";
import Posts from "./pages/posts";
import Post_1 from "./pages/post_1";
import AddPage from "./pages/createPost";

function App() {
  return (
    <div className="App">
      <Routes>
<Route path={'/'}element={<Main/>}/>
<Route path={'/profile'}element={<Cabinet/>}/>
<Route path={'/registration'}element={<Registration/>}/>
<Route path={'/createPost'}element={<AddPage/>}/>
<Route path={'/posts'}element={<Posts/>}/>
<Route path={'/login'}element={<Login/>}/>
<Route path={'/post1/:id'}element={<Post_1/>}/>
</Routes>
    </div>
  );
}

export default App;
