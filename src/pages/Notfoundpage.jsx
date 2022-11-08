import {Link} from 'react-router-dom'

const Notfoundpage = () => {
  return (
    <div>
      <h1>Этой страницы не существует. Вернуться на <Link to="/"> главную </Link></h1>
    </div>
  )
}

export default Notfoundpage;