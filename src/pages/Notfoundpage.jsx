import {Link} from 'react-router-dom'

const Notfoundpage = () => {
  return (
    <div>
      <br></br>
      <br></br>
      <h1>Этой страницы не существует. Вернуться на <Link to="/" style={{color: 'blueviolet'}}> главную </Link></h1>
    </div>
  )
}

export default Notfoundpage;