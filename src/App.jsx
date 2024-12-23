import { useState } from 'react'
import './App.css'
import enter from './assets/enterBottom.png'
import Task from './components/Task'

function App() {

  return (
    <>
      {/* <h1>Tasketor</h1>
      <img src={logo} alt="logo" width="50px"/> */}
      <div className='tasksContainer'>
        <div className="title">
          <h2>Tarefas</h2>
          <hr />
        </div>

        <div className="tasks">
          <Task name="Estudar Algoritmos de Ordenação" priority="2" time="20" />
          <Task name="Finalizar Experimento de Eletromagnetismo" priority="1" time="20" />
          <Task name="Arrumar o quarto" priority="3" time="20" />
        </div>

        <button className="addTask">Adicionar Tarefa</button>
      </div>


    </>
  )
}

export default App
