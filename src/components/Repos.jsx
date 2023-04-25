import axios from "axios"
import { useEffect, useState } from "react"
import { CSVLink} from "react-csv";


const Repos = () => {
const [repos, setRepos] = useState([])

useEffect(() =>{
    axios.get('http://localhost:3000/existenRepos')
    .then(res => {
        console.log(res.data)
        setRepos(res.data)
    })
},[])

  return (

    <div className="container">
        <table className="table table-striped table-sm tabla">
      <thead>
        <tr>
          <th>Usuario</th>
          <th>Repositorio</th>
          <th>Existe?</th>
        </tr>
      </thead>
      <tbody>
      {repos && repos.map(item =>
      <tr key={item.usuario}>
        <td >{item.usuario}</td>
        <td>{item.repo}</td>
        <td className={item.existe? "badge text-bg-success badge-pers": "badge text-bg-danger badge-pers"}>{item.existe? "si":"no"}</td>
        </tr>
        )}
      </tbody>
    </table>
      
        <CSVLink data={repos}>Download me</CSVLink>
    </div>
  )
}

export default Repos
