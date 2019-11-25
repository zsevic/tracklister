import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, 
  Jumbotron, ListGroup, ListGroupItem, Spinner, 
} from 'reactstrap'
import axios from 'axios'
import validator from 'validator'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: false,
      tracklist: '',
      url: '',
      error: '',
    }
  }

  changeUrl = e => {
    e.preventDefault()

    this.setState({ url: e.target.value })
  }

  getTracklist = async () => {
    this.setState({ error: '' })
    if (!validator.isURL(this.state.url)) {
      this.setState({ error: 'Url is not valid', tracklist: [] })
      return
    }

    this.setState({ loading: true, tracklist: [] })

    let tracklist = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}/tracklist`,
      data: {
        url: this.state.url
      }
    })

    if (tracklist.data.err) {
      this.setState({ error: tracklist.data.err })
    } else {
      tracklist = tracklist.data
      console.log(tracklist)
      if (Array.isArray(tracklist)) {
        this.setState({ tracklist, error: '' })
      }
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
            {this.state.error}
            {loading ? <Spinner /> : <Tracklist list={this.state.tracklist} />}
          </div>
        </Jumbotron>
      </div>
    )
  }
}

class Tracklist extends Component {
  render () {
    return <ListGroup>
      {this.props.list && this.props.list.map(track => <ListGroupItem>
        <a href={track.link ? track.link : '#'} target='_blank' rel='noopener noreferrer'> 
          {track.artist} - {track.name}
        </a>
        </ListGroupItem>)}
      </ListGroup>
  }
}

export default App
