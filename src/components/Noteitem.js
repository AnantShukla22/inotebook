import React from 'react'

const Noteitem = (props) => {
    const { note } = props
    return (
        <div className='col-md-3'>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title"> {note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <button type="button" className="btn btn-primary mx-1">Primary</button>
                    <button type="button" className="btn btn-dark mx-1">Primary</button>

                </div>
            </div>
        </div>
    )
}

export default Noteitem