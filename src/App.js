import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Jumbotron } from 'reactstrap'
import axios from 'axios'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tracklist: [],
      url: ''
    }
  }

  changeUrl = e => {
    e.preventDefault()

    this.setState({ url: e.target.value })
  }

  getTracklist = async () => {
    const tracklist = await axios({
      method: 'post',
      url: 'http://localhost:8080/tracklist',
      data: {
        url: this.state.url
      }
    })
    console.log(tracklist)
  }

  render () {
    return (
      <div>
        <Jumbotron>
          <h1 className='display-3'>Tracklister</h1>
          <p className='lead'>Find tracks from your favorite music set</p>
          <hr className='my-2' />

          <Form inline>
            <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
              <Input
                type='url'
                name='url'
                id='url'
                placeholder='Insert YouTube url'
                onChange={this.changeUrl}
              />
            </FormGroup>
            <Button onClick={this.getTracklist}>Submit</Button>
          </Form>
        </Jumbotron>
      </div>
    )
  }
}

export default App
