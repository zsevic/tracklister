import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Jumbotron } from 'reactstrap'
import axios from 'axios'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tracklist: [],
      url: 'pozz'
    }
  }

  getTracklist = async () => {
    const tracklist = await axios('http://localhost:8080/tracklist')
    const { data } = tracklist
    console.log(data)
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
                value={this.state.url}
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
