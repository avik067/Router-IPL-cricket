// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {data: {}, k: '', isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {key} = params
    console.log(key)
    const data = await fetch(`https://apis.ccbp.in/ipl/${key}`)
    const jsonData = await data.json()

    const newOb = {
      teamBannerUrl: jsonData.team_banner_url,
      recentMatches: jsonData.recent_matches,
      latestMatchDetails: jsonData.latest_match_details,
    }
    this.setState({data: newOb, k: key, isLoading: false})
  }

  render() {
    const {data, k, isLoading} = this.state
    if (!isLoading) {
      const {teamBannerUrl, recentMatches, latestMatchDetails} = data
      console.log(latestMatchDetails)
      console.log(recentMatches)

      return (
        <div className="second-main">
          <img className="banner" src={teamBannerUrl} alt={k} />
          <p>Latest Matches</p>
          <LatestMatch
            details={latestMatchDetails}
            key={latestMatchDetails.id}
          />
          <ul className="row-nor center wrap">
            {recentMatches.map(each => (
              <MatchCard details={each} key={each.id} />
            ))}
          </ul>
        </div>
      )
    }
    console.log('loading..........')
    return <div>Loading Loading 🙂</div>
  }
}

export default TeamMatches