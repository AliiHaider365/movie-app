import React from 'react'

function LoadMoreBtn({ text, callback }) {
    return (
        <button className="Loadbtn" onClick={callback}>
            {text}
        </button>
    )
}

export default LoadMoreBtn
