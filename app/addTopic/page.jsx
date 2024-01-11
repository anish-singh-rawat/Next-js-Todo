'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const addTopic = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const router = useRouter()
    const hanleSubmit = async () => {
        if(title.trim() !== '' && description.trim() !== '') {
           try {
            const result =  await fetch('http://localhost:3000/api/topics',{
                method : 'POST',
                headers: { 
                    "content-type": "application/json"
                },
                body : JSON.stringify({title, description})
            })
            if(result.ok){
                router.push('/')
            }
            else{
                throw new Error('Failed to connect to')
            }
           } catch (error) {
            console.log(error);
           }
        } 
        else{
            alert('Please enter a all data')
        }
    }
  return (
    <>
    <div className="container mt-5">
        <div className="row">
            <div className="col">
                <div className="input-header">
                    <input type="text" placeholder='Enter Title...' 
                    value={title} onChange={(e)=> setTitle(e.target.value)}
                    className='title-input' />
                    <input type="text" placeholder='Enter description....' 
                      value={description} onChange={(e)=> setDescription(e.target.value)}
                   className='description-input' />
                </div>
                <div className="btn-div mt-4">
                    <div className="btn btn-success"onClick={hanleSubmit}>
                        Add Data
                    </div>
                    <Link className="btn btn-danger" href={'/'}>cancel</Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default addTopic