import React ,{useState,useEffect} from 'react';
import './Preloader.css';
import pre from '../../Assets/preloader.json';
import Lottie from 'lottie-react';
import App from '../../App';
function Preloader() {
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        setLoading(true);
        setTimeout(() =>{
            setLoading(false)
        },3810)
    },[])
   
return (

            loading ?

                <div className='pre'>
                <div><Lottie className="preloader" animationData={pre}/></div>
            </div>
            :
            //Rest Code
                <App/>  

            
             

  );
}
export default Preloader;