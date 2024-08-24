const Index = () => {
  return (
    <div className="descripcion">
      El proyecto <strong>Comprobando Repositorios</strong> es una herramienta
      pensada para docentes, y esta diseñada para verificar automáticamente el
      estado de los repositorios de GitHub de los estudiantes en un curso. La
      aplicación permite cargar un archivo CSV con las URLs de los repositorios
      de los alumnos y realiza varias comprobaciones sobre cada repositorio,
      tales como:
      <div className="listado-funcionalidades">
        <ol>
          <li>
            <strong>Existencia del Repositorio:</strong> Verifica si el
            repositorio especificado existe en GitHub.
          </li>
          <li>
            <strong>Commits:</strong> Consulta el número de commits realizados
            en el repositorio.
          </li>
          <li>
            <strong>Branches:</strong> Lista las ramas (branches) existentes en
            cada repositorio.
          </li>
        </ol>
      </div>
      <div>
        Puede probar la funcionalidad utilizando los botones comprobar y cargar
        ubicados en la barra de navegación
      </div>
      <br />
      <div>
        <i>Desarrollado por Veronica Valdez </i>
      </div>
    </div>
  );
};

export default Index;
