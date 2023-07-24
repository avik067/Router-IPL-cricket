// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
// import {Link} from 'react-router-dom'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {dataList: [], isLoading: true}

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

    this.setState({dataList: newList, isLoading: false})
  }

  render() {
    const {dataList, isLoading} = this.state
    const show = (
      <div className="main col-nor">
        <div className="row-nor center">
          <img
            className="main-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        <>
          {!isLoading ? (
            <ul className="row-nor center wrap">
              {dataList.map(each => (
                <TeamCard details={each} key={each.id} />
              ))}
            </ul>
          ) : (
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          )}
        </>
      </div>
    )
    return show
  }
}

export default Home
