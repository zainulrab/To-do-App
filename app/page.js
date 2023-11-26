"use client";
import React, { useState } from 'react';


const page = () =>
{
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const [mainTask, setmainTask] = useState([]);
    const submitHandler = (e) =>{
        e.preventDefault()
        setmainTask([...mainTask,{title,desc}])
        //alert("task added successfully")
        settitle("")
        setdesc("")

    }

    const deleteHandler = (index) =>{
        let copyTask = [...mainTask]
        copyTask.splice(index,1)
        setmainTask(copyTask)
    }

    let renderTask = <h2 className='font-bold'>No Task Available</h2>
    if(mainTask.length > 0){
        renderTask = mainTask.map((item,index)=>{
            return(
            <li key={index} className='list-none'>
            <div className='flex justify-between items-center mb-4'>
                <h3 className='text-black text-xl font-bold'>{index+1}) <b/> Title: {item.title}</h3>
                <h4 className='text-zinc-700 font-semibold'>Description: {item.desc}</h4>
                <button onClick={()=>{
                    deleteHandler(index)
                }} className='bg-red-600 rounded px-4 py-2'>Delete</button>
            </div>
            </li>
            )
            
        });
    };
    
    return(
        <>
            <h1 className='bg-black text-white p-4 text-center text-4xl font-bold'>Zain's Todo List</h1>
            <form onSubmit={submitHandler} className='text-center'>
                <input type='text' className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2' placeholder='Enter a task' value={title}
                onChange={(e)=>{
                    settitle(e.target.value);
                }}/>
                <input type='text' className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2' placeholder='Enter description' value={desc}
                onChange={(e)=>{
                    setdesc(e.target.value)}}/>
                <button className='bg-black text-white px-4 py-3 rounded font-bold ml-10 mb-5 text-2xl'>Add a Task</button>
            </form>
            <hr/>
            <div className='p-8 bg-cyan-200' >{renderTask}</div>   
        </>
    )
}
      
export default page;