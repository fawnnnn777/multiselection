import MenuItem from "./menu-item"

export default function MenuList({list = []}){
    return( <ul>
        {
            list && list.length ? 
            list.map((listItem)=>{
                return <MenuItem item={listItem}></MenuItem>
            })
            : null
        }
    </ul>)
}