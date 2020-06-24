import React from 'react'

import './App.css'

import First from './components/basics/First'
import WithParams from './components/basics/WithParams'
import Fragment from './components/basics/Fragment'
import Aleatory from './components/basics/Aleatory'
import Card from './components/layout/Card'
import Family from './components/basics/Family'
import FamilyMember from './components/basics/FamilyMember'

export default _ => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card title="#05 - Componentes com Filhos" color="#DB3340">
        {/* FamilyMembers tem acesso ao surname, passado pelo componente PAI */}
        <Family surname="Ferreira">
          <FamilyMember name='Pedro' />
          <FamilyMember name='Ana Clara' />
          <FamilyMember name='João' />
        </Family>
      </Card>

      <Card title="#04 - Desafio Aleatório" color="#FA6900">
        <Aleatory min={3} max={12} />
      </Card>

      <Card title="#03 - Fragmento" color="#E94C6F">
        <Fragment />
      </Card>

      <Card title="#02 - Com Parâmetros" color="#3B5998">
        <WithParams
          title='Com Parâmetros'
          name='Pedro Silva'
          grade={6.5}
        />
      </Card>

      <Card title="#01 - Primeiro Componente" color="#1FDA9A">
        <First />
      </Card>
    </div>

  </div>
)
