import React from 'react'

const HEADER_TITLE: string = "My To-do List";

export default function PageHeader(): JSX.Element {
    return (
        <div className='page-header'>
            <h1>{HEADER_TITLE}</h1>
        </div>
    )
}