// Write your code here
import './index.css'

const MatchCard = ({details}) => {
  console.log('Latest Match')
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

  return (
    <div className="latest-card row-nor apart ">
      <div>
        <h1>{competingTeam}</h1>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        className="opponent-logo"
        src={competingTeamLogo}
        alt={competingTeam}
      />
      <div>
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default MatchCard
