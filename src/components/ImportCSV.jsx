import Papa from "papaparse";
import {  useState } from "react";
import Axios from "axios";

const ImportCSV = ()  =>{
    const [datos, setDatos] = useState([])
    const [success, setSuccess] = useState(false)

    const envioDatos = async datos => {
        await Axios.post("http://localhost:3000/envioDatos", {
        datos
       },{
        headers: {
          "Content-type": "Application/json",
        }}).then(res => {console.log(res)
            setSuccess(true)})
       .catch(error => console.log(error)) 
    }


    const funcionParse = (files) =>{
        Papa.parse(files, {
            complete: function(results) {
              console.log("Finished:", results.data);
              setDatos(results.data)
            }}
          )
    }
    const handleClick = () => {
        let datosConversion = datos.map(item => item[0])
        envioDatos(datosConversion)
    }


  return (
    <div className="container">
      <input
        className="button2"
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={(e) => {
          const files = e.target.files;
          console.log(files);
          if (files) {
            console.log(files[0]);
            funcionParse(files[0])
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
         {datos && datos.map((items,i) => {return(
         <tr key={i}>
            <td>{i+1}</td>
            <td>{items}</td>
          </tr>
        )})}
      </tbody>
    </table>
      <div className="button-check">
        <button onClick={handleClick} className="button">
            Enviar
        </button>
        {success?<div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Datos Cargados!</strong>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() =>setSuccess(false)}></button>
            </div>:null}
        </div>
    </div>
  );
}

export default ImportCSV