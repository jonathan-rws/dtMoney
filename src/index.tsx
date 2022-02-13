import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';



import {createServer, Model} from 'miragejs'

createServer({

  models:{
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
       {
         id: 1,
         name: 'Banana',
         type: 'deposit',
         category: 'Dev',
         amount: 500,
         createdAt: new Date('2022-02-01 09:26:00')
       },
       {
        id: 2,
        name: 'Caco',
        type: 'withdraw',
        category: 'mama',
        amount: 100,
        createdAt: new Date('2022-01-14 09:26:00')
      }
      
      ]
    })
  },

  routes(){
    this.namespace = 'api'
    this.get('/transactions', () =>{
      return this.schema.all('transaction')
    })
    this.post('/transactions', (schema, request) => {
      const data = {...JSON.parse(request.requestBody), createdAt: new Date()} 
      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
