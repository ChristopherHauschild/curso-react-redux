import React from 'react'

import './App.css'

import Card from './layout/Card'

import First from './components/basics/First'
import WithParams from './components/basics/WithParams'
import Fragment from './components/basics/Fragment'
import Aleatory from './components/basics/Aleatory'
import Family from './components/basics/Family'
import FamilyMember from './components/basics/FamilyMember'
import ListPupils from './components/looping/ListPupils'
import TableProducts from './components/looping/TableProducts'
import EvenOrOdd from './components/conditional/EvenOrOdd'
import UserInfo from './components/conditional/UserInfo'
import DirectFather from './components/comunication/DirectFather'
import IndirectFather from './components/comunication/IndirectFather'
import Input from './components/formulary/Input'
import Counter from './components/counter/Counter'
import Mega from './components/mega/Mega'

export default _ => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card title="#13 - Desafio MegaSena" color="#DB3340">
        <Mega quant={8} />
      </Card>

      <Card title="#12 - Contador" color="#1FDA9A">
        <Counter initialNumber={10} />
      </Card>

      <Card title="#11 - Componente Controlado" color="#FA6900">
        <Input />
      </Card>

      <Card title="#10 - Comunicação Indireta" color="#E94C6F">
        <IndirectFather />
      </Card>

      <Card title="#09 - Comunicação Direta" color="#59323c">
        <DirectFather />
      </Card>

      <Card title="#08 - Renderização Condicional" color="#008">
        <EvenOrOdd number={20} />
        <UserInfo user={{ name: 'Pedro' }} />
        <UserInfo user={{ email: 'pedro_teste@gmail.com' }} />
      </Card>

      <Card title="#07 - Desafio Repetição" color="#800">
        <TableProducts />
      </Card>

      <Card title="#06 - Repetição" color="#080">
        <ListPupils />
      </Card>

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
