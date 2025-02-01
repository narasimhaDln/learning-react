
import './App.css'

// import UserForm from './Components/UserForm'
// import { FeedbackProvider } from './Components/UserSummary/feedBackContext'
// // import NavBar from './Components/UserSummary/NavBar'
// import Routing from './Components/UserSummary/Routing'
import { ChakraProvider } from '@chakra-ui/react'
import FormBuilder from './Components/AdvanceFrom/FormBuilder'
function App() {
 const formConfig:FieldConfig[]= [
    {
      "type": "text",
      "label": "Full Name",
      "name": "fullName",
      "required": true
    },
    {
      "type": "email",
      "label": "Email Address",
      "name": "email",
      "required": true
    },
    {
      "type": "number",
      "label": "Age",
      "name": "age",
      "required": true,
      "min": 18,
      "max": 99
    },
    {
      "type": "select",
      "label": "Country",
      "name": "country",
      "options": ["USA", "Canada", "India"],
      "required": true
    },
    {
      "type": "select",
      "label": "State",
      "name": "state",
      "options": [],
      "dependsOn": {
        "field": "country",
        "values": {
          "USA": ["California", "Texas", "New York"],
          "Canada": ["Ontario", "Quebec"],
          "India": ["Maharashtra", "Karnataka", "Delhi"]
        }
      },
      "required": true
    },
    {
      "type": "checkbox",
      "label": "Agree to Terms",
      "name": "agreeToTerms",
      "required": true
    }
  ]
  const handleSubmit=(data:any)=>{
    console.log("form submitted with data",data)
  }
  
  return ( 
    <ChakraProvider>
         
<FormBuilder config={formConfig}
onSubmit={handleSubmit}
/>
   
    </ChakraProvider>
  )
}

export default App
