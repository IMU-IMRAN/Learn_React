import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//1(As we see App.jsx is a method, so we can write our own method and give it to ReactDom.createRoot  )
function MyApp(){
  return(
    <div>
      <h1>Custom APP !</h1>
    </div>
  )
}

//2
//we cannot use it bcz react does not understand it like 
//the ReactElement object have type, props and children which is make by me
//but react doesnot understand it
// const ReactElement ={
//   type : 'a',
//   props : {
//       href : 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to vist Google'
// }

//3
//we can use it.
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

//varibale
const anotherUser = "chai aau imran"

//4
//we create React.createElement which is bydefaultly inject by bibel(transpiler)
//now we have create it using react element(React ke hisab se banayege)
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'Click me to vist Google',
  anotherUser
)


//at the end it will covert all this to object
ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
