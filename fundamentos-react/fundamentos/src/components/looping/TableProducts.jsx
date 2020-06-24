import React from 'react'

import products from '../../data/products'

import './TableProducts.css'

export default props => {
  return (
    <div>
      <table style={{ width: '100%' }}>
        <thead>
          <tr className="Header">
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => {
            const { id, name, price } = product
            return (
              <tr key={id} className={index % 2 === 0 ? 'Par' : 'Impar'}>
                <td>{id}</td>
                <td>{name}</td>
                <td>R$ {price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}