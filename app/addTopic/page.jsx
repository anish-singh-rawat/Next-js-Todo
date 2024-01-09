import Link from 'next/link'
import React from 'react'

const addTopic = () => {
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
                    <Link className="btn btn-success" href={'/'}>Add Data</Link>
                    <Link className="btn btn-danger" href={'/'}>cancel</Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default addTopic