import React from 'react';

/*
Message component
Used when gets error or response json!

if msgError true use aler class
if false use success class

use props to get message!
*/
const getStyle = props => {
    let baseClass = "alert ";
    if(props.message.msgError)
        baseClass = baseClass + "alert-danger ";
    else
        baseClass = baseClass + "alert-success ";
    return baseClass + "text-center";
}
const Message = props =>{
    return(
        <div className={getStyle(props)} role="alert">
            {props.message.msgBody}
        </div>
    )
}

export default Message;
