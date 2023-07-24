// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = ({details}) => {
  const {id, name, teamImageUrl} = details
  console.log('Team Class')

  return (
    <li className="front-list row-nor">
      <Link to={`/team-matches/${id}`} className="link row-nor apart">
        <img className="team-front-img" src={teamImageUrl} alt={name} />
        <p>{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
