import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

import styled from '@emotion/styled';


const Contenedor = styled.div `
    max-width: 600px;
    margin: 0 auto;
`;

const ContenedorFormulario = styled.div `
    background-color: #FFF;
    padding: 3rem;
`;

function App() {

  const [ resumen, guardarResumen ] = useState({});

  const [ cargando, guardarCargando ] = useState(false);

  // Exraer datos
  const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
      <Header
      titulo="Cotizador de Seguros" 
      />

      <ContenedorFormulario>
          <Formulario 
            guardarResumen={guardarResumen}
            guardarCargando={guardarCargando}
          />

          { cargando ? <Spinner /> : null }

          {datos ? <Resumen 
            datos={datos}
          /> : null }
          

          { !cargando ? <Resultado 
            cotizacion={cotizacion}
          /> : null }

      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
