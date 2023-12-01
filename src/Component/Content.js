import React from 'react'
import { useState } from 'react';
import { IoTrashBin } from "react-icons/io5";
const Content = () => {
  const[items,setItems]=useState([
    {
        id:1,
        checked:true,
        item:"practice coding"
    },
    {
        id:2,
        checked:false,
        item:"practice cong"
    },
    {
        id:3,
        checked:true,
        item:"practice ing"
    },
    {
        id:4,
        checked:false,
        item:"practicing"
    }
]);
const handlecheck=(id)=>{
const listitems=items.map((item)=>item.id===id ?{...item,checked:!item.checked}:item)
setItems(listitems)
localStorage.setItem("todo_list",JSON.stringify(listitems))
}
const handledelete= (id)=>{
 const listitems =items.filter((item) => item.id!==id)
setItems(listitems)
localStorage.setItem("todo_list",JSON.stringify(listitems))
}
  return (
    <main>
        {(items.length) ? (
        <ul>
        {items.map((item)=>(
            <li className='item' key={item.id}>
                <input type="checkbox"checked={item.checked}
onChange={() =>handlecheck(item.id)}
             />
                <label style={(item.checked)?{textDecoration:'line-through'}:null}
                onDoubleClick={()=>handlecheck(item.id)} >{item.item}</label>
                <IoTrashBin role='button' tabIndex="0"
                onClick={()=>handledelete(item.id)}/> </li>
        ))}
     </ul>

        ):(
            <p style ={ { marginTop:'2rem'}}>Your List is Empty</p>
        )}
       

    </main>
    
  )}


export default Content