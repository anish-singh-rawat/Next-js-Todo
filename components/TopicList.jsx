"use client"
import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const getTopics = async () => {
    try {
        const topics = await fetch('http://localhost:3000/api/topics', {
            cache: "no-store",
        })
        if (!topics.ok) {
            throw new Error('faild to get topics')
        }
        return topics.json();
    } catch (error) {
        console.log('error: ', error);
    }
}

const TopicList = async () => {
    const router = useRouter();  
    const { topic } = await getTopics();
    const delelteData = async (id)=>{
        const res =  await fetch(`http://localhost:3000/api/topics?id=${id}`,{
            method : 'DELETE'
        })
        if (res.ok) {
            router.refresh()
        }
    }

    return (
        <>
            {
                topic.map((data) => (
                    <div className="container mt-4" key={data._id}>
                        <div className="row">
                            <div className="col">
                                <div className="list-data-header">
                                    <div className="top-sub-header">
                                        <div className="title">
                                            <h3 style={{wordBreak : 'break-word'}}>{data.title}.</h3>
                                        </div>
                                        <div className="title-icons">
                                            <div className="delete-icon">
                                                <MdDelete onClick={()=>delelteData(data._id)}/> 
                                            </div>
                                            <div className="edit-icon">
                                                <Link href={`/editTopic/${data._id}`}
                                                    style={{ color: 'black' }} >
                                                    <FaRegEdit />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="description"  
                                    style={{wordBreak : 'break-word'}}>
                                        {data.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default TopicList