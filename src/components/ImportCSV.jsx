import Papa from "papaparse";
import {  useState } from "react";
import Axios from "axios";

const ImportCSV = ()  =>{
    const [datos, setDatos] = useState([])

    const envioDatos = async datos => {
        await Axios.post("http://localhost:3000/envioDatos", {
        datos
       },{
        headers: {
          "Content-type": "Application/json",
        }}).then(res => console.log(res))
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
      
        <button onClick={handleClick} className="button">
            Enviar
        </button>
    </div>
  );
}

export default ImportCSV