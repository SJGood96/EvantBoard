import React, { Component } from "react"
import {Container, Row, Col} from 'react-bootstrap'
import EventDisplayForm from "../components/CreateEventForm"
import DisplaySmallPosts from "../components/DisplaySmallPosts"
import DisplayPostForm from "../components/DisplayPostForm"

import '../styles/posts_page.css';

function HomePage() {
    return (
        <div id="home_page" className="App-page">
            <header className="App-header">
            </header>

            <Container fluid>
                    <Row>
                        <Col>
                            <DisplaySmallPosts className="postFormat"/>  
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}

export default HomePage