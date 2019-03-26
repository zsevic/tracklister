import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Jumbotron, Spinner } from 'reactstrap'
import axios from 'axios'
import validator from 'validator'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: false,
      tracklist: '',
      url: ''
    }
  }

  changeUrl = e => {
    e.preventDefault()

    this.setState({ url: e.target.value })
  }

  getTracklist = async () => {
    if (!validator.isURL(this.state.url)) {
      this.setState({ tracklist: 'Url is not valid' })
      return
    }

    this.setState({ loading: true, tracklist: '' })

    let tracklist = await axios({
      method: 'post',
      url: 'https://tracklister.herokuapp.com/tracklist',
      data: {
        url: this.state.url
      }
    })

    if (tracklist.data.err) {
      this.setState({ tracklist: tracklist.data.err })
    } else {
      tracklist = tracklist.data.tracklist
      if (Array.isArray(tracklist)) {
        tracklist = tracklist
          .map(track => `${track.artist} - ${track.name}`)
          .join(', ')
      }
      this.setState({ tracklist })
    }

    this.setState({ loading: false })
  }

  render () {
    const { loading } = this.state

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
          <div>
            {loading ? <Spinner /> : <Tracklist list={this.state.tracklist} />}
          </div>
        </Jumbotron>
      </div>
    )
  }
}

class Tracklist extends Component {
  render () {
    return <div>{this.props.list}</div>
  }
}

export default App
