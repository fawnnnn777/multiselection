import { useEffect, useState } from "react"

export default function Random(){

    const [type, setType] = useState('hex')
    const [color, setColor] = useState('#000000')

    function randomColor(length){
        return Math.floor(Math.random() * length)
    }

    function createHexColor(){
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexColor ='#'
        for(let i = 0; i<6;i++){
            hexColor += hex[randomColor(hex.length)]
        }
        setColor(hexColor)
    }

    function createRgbColor(){
        const r = randomColor(256)
        const g = randomColor(256)
        const b = randomColor(256)

        setColor(`rgb(${r}, ${g}, ${b})`)
    }

    useEffect(()=>{
        if(type=== 'rgb'){
            createRgbColor()
        }
        else{
            createHexColor()
        }
    }, [type])

    return(
        <div style={{
            width: "100vw",
            height: "100vh",
            background: color
        }} 
        className="container">
            <button onClick={()=>setType('hex')}>Clear Hex Color</button>
            <button onClick={()=>setType('rgb')}>Clear RGB Color</button>
            <button onClick={type === 'hex' ? createHexColor : createRgbColor}>Generate Random Color</button>
            <div>
                {color}
            </div>
        </div>
    )
}