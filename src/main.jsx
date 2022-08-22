import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { registerLicense} from '@syncfusion/ej2-base'

registerLicense('ORg4AjUWIQA/Gnt2VVhiQlFaclxJVHxLfkx0RWFbb116cVVMYl5BJAtUQF1hS35bdERiX39ec3BXR2VU');

ReactDOM.createRoot(document.getElementById('kanban')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
