import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toString().toLowerCase();
        return lower.toUpperCase().charAt(0) + lower.toLowerCase().slice(1);
    }

  return (
    props.alert && <div className={`alert alert-${props.alert.type} `} role="alert">
       <strong>{capitalize(props.alert.type)} </strong>:  {props.alert.msg}
    </div>
  )
}
