// Write your code here

import './index.css'

const LatestMatch = ({details}) => {
  console.log('Match Card')
  const newOb = {
    competingTeam: details.competing_team,
    competingTeamLogo: details.competing_team_logo,
    date: details.date,
    id: details.id,
    manOfTheMatch: details.man_of_the_match,
    matchStatus: details.match_status,
    result: details.result,
    secondInnings: details.second_innings,
    umpires: details.umpires,
    venue: details.venue,
  }

  return <li className="latest-card ">LatestMatch</li>
}

export default LatestMatch
