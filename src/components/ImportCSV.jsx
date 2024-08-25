import Papa from "papaparse";
import { useState } from "react";
import Axios from "axios";
import { API_URL } from "./../assets/config.js";

const ImportCSV = () => {
  const [datos, setDatos] = useState([]);
  const [success, setSuccess] = useState(false);

  const envioDatos = async (datos) => {
    await Axios.post(
      `${API_URL}/envioDatos`,
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
        setSuccess(true);
      })
      .catch((error) => console.log(error));
  };

  const funcionParse = (files) => {
    Papa.parse(files, {
      complete: function (results) {
        setDatos(results.data);
      },
    });
  };
  const handleClick = () => {
    let datosConversion = datos.map((item) => item[0]);
    envioDatos(datosConversion);
  };

  return (
    <div className="container">
      <div className="descripcion">
        En esta pestaña debe cargar el archivo .csv, con el listado de
        repositorios:
        <div className="listado-funcionalidades">
          Ejemplo:
          <ol>
            <li>https://github.com/usuario1/repo1</li>
            <li>https://github.com/usuario2/repo2 </li>
            <li>https://github.com/usuario2/repo3</li>
          </ol>
        </div>
        Luego debe presionar el boton enviar para que se carguen los
        repositorios
      </div>
      <input
        className="button2"
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={(e) => {
          const files = e.target.files;
          console.log(files);
          if (files) {
            console.log(files[0]);
            funcionParse(files[0]);
          }
        }}
      />
      <table className="table table-striped table-sm tabla">
        <thead>
          <tr>
            <th>#</th>
            <th>Repositorio</th>
          </tr>
        </thead>
        <tbody>
          {datos &&
            datos.map((items, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{items}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="button-check">
        <button onClick={handleClick} className="button">
          Enviar
        </button>
        {success ? (
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>Datos Cargados!</strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => setSuccess(false)}
            ></button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ImportCSV;
