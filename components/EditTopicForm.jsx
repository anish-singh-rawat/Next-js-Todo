import Link from 'next/link'
import React from 'react'

const EditTopicForm = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="input-header">
                            <input type="text" placeholder='Enter Title...'
                             className='title-input' />
                            <input type="text" placeholder='Enter description....'
                             className='description-input' />
                        </div>
                        <div className="btn-div mt-4">
                        <Link className="btn btn-success" href={'/'}>Update Data</Link>
                        <Link className="btn btn-danger" href={'/'}>cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditTopicForm