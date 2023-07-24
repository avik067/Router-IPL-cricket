// Write your code here

import './index.css'

const LatestMatch = ({details}) => {
  console.log('Match Card')

  const newOb = {
    competingTeam: details.competing_team,
    competingTeamLogo: details.competing_team_logo,
    date: details.date,
    id: details.id,
    firstInnings: details.first_innings,

    manOfTheMatch: details.man_of_the_match,
    matchStatus: details.match_status,
    result: details.result,
    secondInnings: details.second_innings,
    umpires: details.umpires,
    venue: details.venue,
  }
  const {
    competingTeam,
    competingTeamLogo,
    date,
    id,
    firstInnings,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = newOb

  const color = matchStatus === 'Won' ? 'green' : 'red'
  return (
    <li className="other-card col-nor space-evenly ">
      <img
        className="other-match-logo"
        src={competingTeamLogo}
        alt={competingTeam}
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={color}>{matchStatus}</p>
    </li>
  )
}

export default LatestMatch
