import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const TopicList = () => {
  return (
   <div className="container mt-4">
    <div className="row">
        <div className="col">
            <div className="list-data-header">
                <div className="top-sub-header">
                    <div className="title">
                        <h3>Lorem ipsum dolor sit amet.</h3>
                    </div>
                    <div className="title-icons">
                    <div className="delete-icon"><MdDelete/> </div>
                    <div className="edit-icon"><FaRegEdit/></div>
                    </div>
                </div>
                <div className="description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, officia.
                </div>
            </div>
        </div>
    </div>
   </div>
  )
}

export default TopicList