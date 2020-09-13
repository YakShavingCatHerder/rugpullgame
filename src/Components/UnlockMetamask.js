import React from 'react';

function UnlockMetamask(props) {
    return (
       <div className="">
            <div className="notification is-danger">
               <button className="delete"></button>
                {props.message}
            </div>
            <br />
        </div>
    )
}

export default UnlockMetamask;