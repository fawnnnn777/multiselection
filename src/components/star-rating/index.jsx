import { useState } from "react"
import { FaStar } from "react-icons/fa"
import './styles.css'
export default function Star({stars = 5}){

    const [rating, setRating] = useState(0)

    const [hover, setHover] = useState(0)

    const handleClick = (currentIndex) =>{
        console.log(currentIndex)
        setRating(currentIndex)
    }

    const handleMouseEnter = (currentIndex)=>{
        console.log(currentIndex)
        setHover(currentIndex)

    }

    const handleMouseLeave =(currentIndex)=>{
        console.log(currentIndex)
        setHover(rating)
    }

    return(
        <>
           <div className="star-rating">
                {
                    [...Array(stars)].map((_,index)=>{
                        index += 1

                        return <FaStar 
                        className={index <= (hover || rating) ? 'active' : 'inactive'}
                        key={index} 
                        onClick={()=>handleClick(index)} 
                        onMouseEnter={()=>handleMouseEnter(index)} 
                        onMouseLeave={()=>handleMouseLeave(index)}
                        size={40}   
                        />
                    })
                }
                
           </div>
        </>
    )
}