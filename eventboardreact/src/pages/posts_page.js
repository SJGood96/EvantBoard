import React, { Component } from "react"
import {Container, Row, Col} from 'react-bootstrap'
import DisplaySmallPosts from "../components/DisplaySmallPosts"
import DisplayPostForm from "../components/DisplayPostForm"
import '../styles/posts_page.css';

const BackEnd_URL = "http://localhost:8080/api/eventBoard/"

class PostsPage extends React.Component {

    state = {
        loading: false,
        postsData: [
            {

            }],
    }

    loadPosts() {
        this.setState({loading: true})
        console.log("Loading Posts...")
        fetch (BackEnd_URL + "/post/posts", {mode: 'cors'})
            .then(response => {
                console.log(response.json())
                return response.json()
            })
            .then(response => this.setState(
                {postsData: response, loading: false}
            ))
    }

    componentDidMount() {
        console.log("Posts page is now mounted")
        this.loadPosts();
    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    fetchPost(id) {
        this.toggleHidden.bind(this);
        <DisplayPostForm className="postFormat" />
    }



    render() {
        return (
            <div id="posts_page" className="App-page">
                <Container fluid>
                    <Row>
                        <Col>
                            <DisplaySmallPosts className="postFormat" posts={this.state.postsData} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
    
}

export default PostsPage

// goes on line 38 (with DisplaySmallPosts)
// posts={this.state.postsData} />