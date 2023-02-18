import './Heart.css'
import { FaRegHeart } from 'react-icons/fa';//VACIO
import { FaHeart } from 'react-icons/fa';//LLENO
import { useState } from 'react';


const Heart = () => {

    const [Liked, seTlike] = useState(false);
    const handleClick = () => {
        /*if(Liked == true){
            seTlike(false)

        }else{
            seTlike(true)
        }*/

        Liked == true ? seTlike(false) : seTlike(true)
    }



    
  return (
    <div onClick={handleClick}>
        {Liked == true ? <FaHeart className='heart'/> : <FaRegHeart className='heart'/> }
         
    </div>

  )
}

export default Heart