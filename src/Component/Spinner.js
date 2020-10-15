import React from 'react'
import Loader from 'react-loader-spinner'

export default class Spinner extends React.Component {
 //other logic
   render() {
    return(
        <div className="loadingScreen">
     <Loader
        type="Rings"
        color="brown"
        height={300}
        width={300}
        timeout={90000} //3 secs
        

     />
     </div>
    );
   }
}