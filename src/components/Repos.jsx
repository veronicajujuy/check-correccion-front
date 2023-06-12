import axios from "axios";
import { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { PORT, HTTP } from "./../assets/config.js";

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const [mostrar, setMostrar] = useState(false);
  let datos = "datos";

  useEffect(() => {
    axios.get(`http://${HTTP}:${PORT}/existenRepos`).then((res) => {
      console.log(res.data);
      setRepos(res.data);
    });
  }, [mostrar]);
  const handleClick = () => {
    axios
      .post(
        `http://${HTTP}:${PORT}/limpiarDatos`,
        {
          datos,
        },
        {
          headers: {
            "Content-type": "Application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setMostrar(!mostrar);
      });
  };

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
            <th>Archivos</th>
          </tr>
        </thead>
        <tbody>
          {repos &&
            repos.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.usuario}</td>
                <td>{item.repo}</td>
                <td>
                  <span
                    className={
                      item.existe
                        ? "badge text-bg-success badge-pers"
                        : "badge text-bg-danger badge-pers"
                    }
                  >
                    {item.existe ? "si" : "no"}
                  </span>
                </td>
                <td>{item.commits}</td>
                <td>
                  {item.branches &&
                    item.branches.map((branch, index) => (
                      <span className="branches" key={index}>
                        {branch}
                      </span>
                    ))}
                </td>
                <td>
                  {item.archivos &&
                    item.archivos.map((archivo, index) => (
                      <div key={index}>
                        <strong>Rama:</strong> {archivo.rama}
                        <br />
                        <strong>Archivos:</strong>{" "}
                        {archivo.archivos.map((file, idx) => (
                          <span key={idx}>{file + " - "}</span>
                        ))}
                      </div>
                    ))}
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <CSVLink className="button descarga" data={repos}>
        Descarga
      </CSVLink>
      <button onClick={handleClick} className="button">
        Limpiar
      </button>
    </div>
  );
};

export default Repos;
