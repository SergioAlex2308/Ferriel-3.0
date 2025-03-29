const UIComponent = () => {
  return (
    <div id="UI" className="ui-container">
      {/* Encabezado */}
      <header className="ui-header">
        <h1 className="ui-title">Ferriel 3.0</h1>
      </header>

      {/* Pie de página con botones */}
      <footer className="ui-footer">
        <button className="ui-button">Información</button>
        <button className="ui-button">Configuraciones</button>
        <button className="ui-button">Cambiar día</button>
        <button className="ui-button">Controles</button>
      </footer>
    </div>
  );
};

export default UIComponent;