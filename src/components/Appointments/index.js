import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {appointList: [], title: '', date: '', isFilter: false}

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onAddAppoint = event => {
    event.preventDefault()
    const {title, date} = this.state
    const formatDate = date ? format(new Date(date), 'dd MMMM yyyy, EEEE') : ''
    const newAppoint = {
      id: uuidv4(),
      title,
      date: formatDate,
      isFavStar: false,
    }
    this.setState(prev => ({
      appointList: [...prev.appointList, newAppoint],
      title: '',
      date: '',
    }))
  }

  onToggleStar = id => {
    this.setState(prev => ({
      appointList: prev.appointList.map(each => {
        if (id === each.id) {
          return {...each, isFavStar: !each.isFavStar}
        }
        return each
      }),
    }))
  }

  getFilteredList = () => {
    const {appointList, isFilter} = this.state

    if (isFilter) {
      return appointList.filter(each => each.isFavStar === true)
    }
    return appointList
  }

  onClickStar = () => {
    const {isFilter} = this.state
    this.setState({isFilter: !isFilter})
  }

  render() {
    const {date, title, isFilter} = this.state

    const filterClass = isFilter ? 'filter' : ' '

    const filterAppointList = this.getFilteredList()

    return (
      <div className="bg">
        <div className="bg1">
          <div className="bg2">
            <div className="bg3">
              <div className="bg4">
                <h1>Add Appointment</h1>
                <form className="f1" onSubmit={this.onAddAppoint}>
                  <label htmlFor="title">TITLE</label>
                  <input
                    id="title"
                    type="text"
                    value={title}
                    placeholder="Title"
                    onChange={this.onChangeTitle}
                  />

                  <label htmlFor="inDate">DATE</label>
                  <input
                    type="date"
                    id="inDate"
                    value={date}
                    onChange={this.onChangeDate}
                  />
                  <button type="submit" className="btn">
                    Add
                  </button>
                </form>
              </div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="image"
              />
            </div>

            <hr />
            <div className="bg5">
              <h1> Appointments</h1>
              <button
                type="button"
                className={`${filterClass} bt1`}
                onClick={this.onClickStar}
              >
                Starred
              </button>
            </div>
          </div>
          <ul>
            {filterAppointList.map(each => (
              <AppointmentItem
                key={each.id}
                newAppointment={each}
                onToggleStar={this.onToggleStar}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
