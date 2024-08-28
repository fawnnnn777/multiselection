import { useEffect } from "react"
import { useState } from "react"
import './styles.css'


export default function LoadData(){

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)

    async function fetchProducts() {
        try{
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${
                count === 0 ? 0 : count *20
            }`)
            const result = await response.json()
            console.log(result)

            if(result && result.products && result.products.length){
                setProducts(()=>[...products,...result.products])
                setLoading(false)
            }

        }
        catch(e){
            console.log(e.message)
        }
    }

    useEffect(()=>{
        fetchProducts()
    },[count])

    if(loading){
        return <h1>LOADING DATA</h1>
    }

    return <div className="load-container">
        <div className="product-container">
            {products && products.length ? 
            products.map((item)=>{
                return (
                    <div className="product">
                    <img className="product-image" alt={item.title} src={item.images[0]}/>
                    <h1>{item.title}</h1>
                    </div>
                )
            })
            : null }
            </div>
    <div className="button-container">
        <button disabled={products && products.length >= 100 ? true : false} onClick={()=>setCount(count + 1)}>Load More</button>
    </div>
    </div>
 }