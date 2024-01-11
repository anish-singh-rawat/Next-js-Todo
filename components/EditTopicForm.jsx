"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const EditTopicForm = ({ id, title, description }) => {
    const router = useRouter();
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);

    const handleEdit = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: newTitle, description: newDescription }),
            });

            if (!res.ok) {
                throw new Error('Failed to update topics');
            }

            router.push('/');
            router.refresh();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="input-header">
                            <input type="text" placeholder='Enter Title...'
                                onChange={(e) => setNewTitle(e.target.value)}
                                value={newTitle}
                                className='title-input' />

                            <input type="text" placeholder='Enter description....'
                                onChange={(e) => setNewDescription(e.target.value)}
                                value={newDescription}
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