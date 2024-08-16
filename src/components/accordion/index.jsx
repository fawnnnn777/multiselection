import React, { useState } from "react";
import data from "./data";
import './styles.css'

export default function Accordion(){

    const [selected, setSelected] = useState(null)
    const [enable, setEnable] = useState(false)
    const [multiple, setMultiple] = useState([])

    function handleSigleSelection(currentId){
        console.log(currentId)
        setSelected(currentId === selected ? null : currentId);
    }

    function handleMultiple(currentId){
        console.log(`multiple is active ${currentId}`)
        let ids = [...multiple];
        const indexOfCurrent = ids.indexOf(currentId)
        console.log(indexOfCurrent)
        if(indexOfCurrent === -1){
            ids.push(currentId)
        }
        else{
            ids.splice(indexOfCurrent, 1)
        }
        setMultiple(ids)
    }

    console.log(multiple)

    return(
        <>
        <div className="wrapper">
            <label> Active Accordian 
            <input onClick={()=>setEnable(!enable)} type="checkbox"></input>
            </label>
            <div className="accordion">
                {data && data.length < 0 ? <div>no data</div>:
                data.map(item=>
                    <div className="item">
                        <div onClick={
                            enable 
                            ? ()=>handleMultiple(item.id) 
                            : ()=>handleSigleSelection(item.id)} className="title"> 
                            <h3>{item.question}</h3>
                            <span>+</span>
                        </div> 
                            {
                                selected === item.id || multiple.indexOf(item.id) !== -1 ?
                                <div className="answer">
                                    {item.answer}
                                </div>
                                : null
                            }
                    </div>
                )
                    }
            </div>
        </div>
        </>
    )
}