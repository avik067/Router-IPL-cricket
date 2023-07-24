// Write your code here

import {Component} from 'react'
// import {Link} from 'react-router-dom'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {dataList: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const data = await fetch('https://apis.ccbp.in/ipl')
    const jsonData = await data.json()
    const {teams} = jsonData
    const newList = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({dataList: newList})
  }

  render() {
    const {dataList} = this.state
    return (
      <div className="main col-nor">
        <div className="row-nor center">
          <img
            className="main-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        <ul className="row-nor center wrap">
          {dataList.map(each => (
            <TeamCard details={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
