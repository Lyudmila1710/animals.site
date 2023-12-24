import React from 'react';
import Footer from "../components/footer";
import '../css/cabinet.css';
import Cab from '../components/cab';
import HeaderCab from '../components/headercab';
import PostCabinet from '../components/post_cabinet';

const Cabinet = () => {
    return(
    <div>
       <HeaderCab />  
       <main style={{'minHeight': '75vh'}}>
            <div className="wrapperr bg-dark text-center mb-20 ">

              <Cab/>
              </div>
              <div className="row g-2" style={{'width':'80%',  'margin': 'auto', 'marginBottom': '30px'}}>
              <PostCabinet/>
                  </div>
              </main>
            <Footer />     
</div>
          );
        };
        export default Cabinet;