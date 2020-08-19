import React from 'react'
import "./Avatar.css"
export interface AvatarProps { url: string; name: string }
export function Avatar (props: AvatarProps) {
    return (
        <div className="avatar">
            <img src={props.url} alt=""/>
            <p>{ props.name }</p>
        </div>
    )
}
