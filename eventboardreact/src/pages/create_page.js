import React, { Component } from "react"
import CreateEventForm from "../components/CreateEventForm"

function CreatePage() {
    return (
        <div id="create_page" className="App-page">
            <h2>Hello from create page!</h2>

            <div>
                <CreateEventForm />
            </div>
        </div>
    )
}

export default CreatePage