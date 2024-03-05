import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

// pasando el text como un parámetro nombrado
// componente ( una función que devele un elemento )
// los nombres de componentes son PascalCase, no camelCase ni snake_case, kebab-case
// los base componentes reutilizabas son las propiedades ( parámetros ) [Props]
// dentro de la función de un componente la evaluación se hace entre llaves
// cual es la diferencia entre componente y elemento ( un componente es una factoría de elementos y el elemento es lo que se rendering react)
// modificar una prop es una mala practica se puede resignar un cambio a otra variable const



root.render(
  <App />
)
