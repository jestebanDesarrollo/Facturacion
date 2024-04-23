import { useState } from 'react';

function Facturacion() {
  const [datosFacturacion, setDatosFacturacion] = useState({
    nit: '',
    telefono: '',
    nombreCliente: '',
    correoElectronico: '',
    metodoPago: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDatosFacturacion(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Datos de facturación:', datosFacturacion);
  };

  return (
    <div className="facturacion-container">
      <h2 className="titulo">Facturación</h2>
      <form onSubmit={handleSubmit} className="formulario">
        <label className="label">
          NIT:
          <input
            type="text"
            name="nit"
            value={datosFacturacion.nit}
            onChange={handleChange}
            className="input"
          />
        </label>
        <br />
        <label className="label">
          Teléfono:
          <input
            type="text"
            name="telefono"
            value={datosFacturacion.telefono}
            onChange={handleChange}
            className="input"
          />
        </label>
        <br />
        <label className="label">
          Nombre del Cliente:
          <input
            type="text"
            name="nombreCliente"
            value={datosFacturacion.nombreCliente}
            onChange={handleChange}
            className="input"
          />
        </label>
        <br />
        <label className="label">
          Correo Electrónico:
          <input
            type="email"
            name="correoElectronico"
            value={datosFacturacion.correoElectronico}
            onChange={handleChange}
            className="input"
          />
        </label>
        <br />
        <label className="label">
          Método de Pago:
          <select
            name="metodoPago"
            value={datosFacturacion.metodoPago}
            onChange={handleChange}
            className="input"
          >
            <option value="">Seleccionar método de pago</option>
            <option value="efectivo">Efectivo</option>
            <option value="tarjeta">Tarjeta de Crédito/Débito</option>
          </select>
        </label>
        <br />
        <button type="submit" className="boton">Enviar Factura</button>
      </form>
    </div>
  );
}

export default Facturacion;
