import MenuList from "./menu-list";
import { useState } from "react";
import {FaPlus, FaMinus} from 'react-icons/fa'
import './styles.css'


export default function MenuItem({ item }) {

    const [displayChildren, setDisplayChildren] = useState({})
    
    function toggleChildren(label){
        setDisplayChildren({
            ...displayChildren,
            [label] : !displayChildren[label]
        })
    }

    console.log(displayChildren)

    return (
    <li>
        <div className="menu-item">
        <p>{item.label}</p>
        {
            item && item.children && item.children.length ? 
            <span onClick={()=>toggleChildren(item.label)}>
                {displayChildren[item.label] ? <FaMinus size={25} color="white"/> : <FaPlus size={25} color="white"/>}
            </span>
            : null
        }
        </div>
        {   
            item && item.children && item.children.length > 0 && displayChildren[item.label] ?
                <MenuList list={item.children}></MenuList>
                : null
        }
    </li>
    )
}