import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import StreamList from './streams/StreamList'
import StreamCreate from './streams/StreamCreate'
import StreamEdit from 'module./streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'
import StreamShow from './streams/StreamShow'

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={StreamList} />
                    <Route path='/streams/new' component={StreamCreate} />
                    <Route path='/streams/edit' component={StreamEdit} />
                    <Route path='/streams/delete' component={StreamDelete} />
                    <Route path='/stream/show' component={StreamShow} />
                </div>
            </BrowserRouter>
        </div>
    )
}
