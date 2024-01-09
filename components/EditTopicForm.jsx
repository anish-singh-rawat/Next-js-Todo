"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

const EditTopicForm = ({ id, title, description }) => {
    // const router = useRouter()
    const [newtitle, setNewTitle] = useState(title);
    const [newdescription, setnewDescription] = useState(description);
    const handleEdit = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: 'PUT',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ newtitle, newdescription })
            })
            if (!res.ok) {
                throw new Error('faild to update topics')
            }
            // router.push('/')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="input-header">
                            <input type="text" placeholder='Enter Title...'
                                onChange={(e) => setNewTitle(e.target.value)}
                                value={newtitle}
                                className='title-input' />

                            <input type="text" placeholder='Enter description....'
                                onChange={(e) => setnewDescription(e.target.value)}
                                value={newdescription}
                                className='description-input' />
                        </div>
                        <div className="btn-div mt-4">
                            <div className="btn btn-success" onClick={handleEdit}>
                                Update Data</div>
                            <Link className="btn btn-danger" href={'/'}>cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditTopicForm