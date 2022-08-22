import { useState } from 'react'
import { extend } from '@syncfusion/ej2-base';
import './App.css'
import { ColumnDirective, ColumnsDirective, KanbanComponent } from '@syncfusion/ej2-react-kanban';
import "../node_modules/@syncfusion/ej2-base/styles/material.css";
import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../node_modules/@syncfusion/ej2-react-kanban/styles/material.css";

function App() {
  const jsonData = [
    {
      'id': 'MorningStar Software Developer II',
      'title': 'MorningStar Software Developer II',
      'status': 'To Do',
      'description': 'At Morningstar, helping investors is what brings us together and drives our work. We are looking for a full-stack software engi...',
      'location': 'Remote',
      'company_link': 'https://morningstar.com',
      'company_name': 'MorningStar'
    },
    {
      'id': 'Google Engineer I',
      'title': 'Google Software Developer I',
      'status': 'Awaiting',
      'description': 'At Google, helping investors is what brings us together and drives our work. We are looking for a full-stack software engi...',
      'location': 'Mountain View, CA',
      'company_link': 'https://google.com',
      'company_name': 'Google, Inc'
    },
    {
      'id': 'Google Engineer I',
      'title': 'Google Software Developer I',
      'status': 'Awaiting',
      'description': 'At Google, helping investors is what brings us together and drives our work. We are looking for a full-stack software engi...',
      'location': 'Mountain View, CA',
      'company_link': 'https://google.com',
      'company_name': 'Google, Inc'
    }
  ]

  const [data, setData] = useState(extend([], jsonData, null, true));
  return (
    <KanbanComponent dataSource={data} keyField="status" 
      cardSettings={{ contentField: "description", headerField: "id" }} 
      swimlaneSettings={{ keyField: "company_name" }}>

      <ColumnsDirective>
        <ColumnDirective headerText='To Do' keyField='To Do'></ColumnDirective>
        <ColumnDirective headerText='Awaiting' keyField='Awaiting'></ColumnDirective>
        <ColumnDirective headerText='Scheduled' keyField='Scheduled'></ColumnDirective>
        <ColumnDirective headerText='Negotiation' keyField='Negotiation'></ColumnDirective>
        <ColumnDirective headerText='Offer' keyField='Offer'></ColumnDirective>
      </ColumnsDirective>
    </KanbanComponent>
  )
}

export default App
