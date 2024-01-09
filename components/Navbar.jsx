"use client"
import Link from 'next/link'
import React from 'react'
import { IoMdAddCircle } from "react-icons/io";

const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="top-header mt-3">
                            <div className="home-link">
                            <Link className='Link' href={'/'} >next js Todo App</Link>
                            </div>
                            <div className="add-topic">
                            <Link className="Link link2" href={'/addTopic'}>Add Topic</Link>
                            <IoMdAddCircle className='add-icon'/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </nav>
    )
}

export default Navbar