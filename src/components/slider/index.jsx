import { useEffect, useState } from "react"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import './styles.css'


export default function Slider({url, limit}){

    const [images, setImages] = useState([])

    const [currentSlide, setCurrentSlide] = useState(0)

    const [error, setError] = useState(null)

    const [loading, setLoading] = useState(false)

    async function fetchImages(url) {
        try{

            setLoading(true)

            const response = await fetch(`${url}?page=1&limit=${limit}`)
            const data = await response.json()

            if(data){
                setImages(data)
                setLoading(false)
            }

        }
        catch(e){
            setError(e.message)
            setLoading(false)
        }
    }

    function handlePrevious(){
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
        console.log(currentSlide)
    }

    function handleNext(){
        setCurrentSlide(currentSlide === images.length -1 ? 0 : currentSlide + 1)
    }

    useEffect(()=>{
        if(url !== '') fetchImages(url)
    }, [url])

    console.log(images)

    if(loading){
        return <div>Loading </div>
    }

    if(error !== null){
        return <div>Error {error}</div>
    }

    return(
        <div className="container">

        <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left"></BsArrowLeftCircleFill>
        {
            images && images.length ? 
            images.map((item, index)=>{
                return <img className={currentSlide === index ? 'current-image' : 'current-image hide-image'} key={item.id} alt={item.download_url} src={item.download_url}></img>
            })
            :
            <h1>hello</h1>
        }
        <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"></BsArrowRightCircleFill>
        <span className="circle-indicators">
            {
                images && images.length ?
                images.map((_,index)=>{
                    return <button key={index} 
                     className={currentSlide === index ? 'current-indicator' : 'current-indicator hide-indicator'}
                     onClick={()=> setCurrentSlide(index)}
                     ></button>
                }) : <h1>hello</h1>
            }
        </span>
        </div>
    )
}