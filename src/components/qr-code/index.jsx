import { useState } from "react"
import QRCode from "react-qr-code"


export default function QRcodeGenerator(){

    const [code, setCode] = useState('')
    const [input, setInput] = useState('')

    function handleGenerate(){
        setCode(input)
        setInput('')
    }

    return <div>
        <h1>QR Code Generator</h1>
        <div>
            <input onChange={(e)=>setInput(e.target.value)} type="text" value={input}></input>
            <button disabled={input !== '' ? false:true} onClick={handleGenerate}>Generate</button>
        </div>
        <div>
            <QRCode id="qr-core" size={400} value={code}></QRCode>
        </div>
    </div>
}