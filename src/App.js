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
      this.setState({ error: 'Url is not valid', tracklist: [], loading: false })
      return
    }

    this.setState({ loading: true, tracklist: [] })

    let tracklist = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_BASE_URL}/tracklist`,
      params: {
        url: this.state.url
      }
    })

    if (tracklist.data.err) {
      this.setState({ error: tracklist.data.err, loading: false })
    } else {
      tracklist = tracklist.data

      if (Array.isArray(tracklist)) {
        this.setState({ tracklist, error: '', loading: false })
      }
    }

    this.setState({ loading: false })
  }

  render () {
    const { loading } = this.state

    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Jumbotron style={{minHeight: '85vh', minWidth: '50vw'}}>
          <h1 className='text-center'>Tracklister</h1>
          <p className='lead text-center'>Find tracks from your favorite music set</p>
          <hr className='my-2' />

          <Form style={{display:'flex', justifyContent: 'center'}}>
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
            <p className='text-center'>{this.state.error}</p>
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
