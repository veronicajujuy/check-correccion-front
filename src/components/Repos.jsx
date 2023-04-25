import axios from "axios"
import { useEffect, useState } from "react"
import { CSVLink} from "react-csv";


const Repos = () => {
const [repos, setRepos] = useState([])

useEffect(() =>{
    axios.get('https://check-intro-back-production.up.railway.app/existenRepos')
    .then(res => {
        console.log(res.data)
        setRepos(res.data)
    })
},[])

  return (

    <div className="container">
    <table className="table table-striped table-sm vertical-align: middle tabla">
      <thead className="tabla-encabezado">
        <tr>
          <th>#</th>
          <th>Usuario</th>
          <th>Repositorio</th>
          <th>Existe?</th>
          <th>Commits</th>
          <th>Branches</th>
        </tr>
      </thead>
      <tbody>
      {repos && repos.map((item,i) =>
      <tr key={i}>
        <td >{i+1}</td>
        <td >{item.usuario}</td>
        <td>{item.repo}</td>
        <td ><span className={item.existe? "badge text-bg-success badge-pers": "badge text-bg-danger badge-pers"}>{item.existe? "si":"no"}</span></td>
        <td>{item.commits}</td>
        <td>{item.branches && item.branches.map(item => <span className="branches" key={item}>{item}</span>)}</td>
        </tr>
        )}
      </tbody>
    </table>
      
        <CSVLink className="button descarga" data={repos}>Descarga</CSVLink>
    </div>
  )
}

export default Repos
