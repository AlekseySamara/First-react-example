//import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Title} from './components/title/title'
import FormInput from './components/formInput/formInput'
import UserInfo from './components/homework/homework'

/*const Title = () =>{
  return <h1>Hello world</h1>
}*/



function Items(){
  return <h1>Привет мир!</h1>
}
/*class FormInput extends React.Component {
  render(){
    return <input type='number'/>
  }
}*/
const App = () => {
  return (
    <div>
      <h1>Example from the lesson</h1>
      <Title title = {'главная'}/>
      <FormInput labelText = {'телефон'} inputType= {'phone'}/>
      <Title title = {'главная, но не совсем'}/>
      <Items/>
      <Title/>
      <Title/>
      <FormInput labelText = {'пароль'} inputType= {'password'}/>
      <Title/>
      <h2>Homework</h2>
      <div><UserInfo userName = {'Вова'} userGender = {'Муж'} userAge = {27} yearsWorked = {1}/></div>
      <hr></hr>
      <div><UserInfo userName = {'Иван'} userGender = {'Муж'} userAge = {21} yearsWorked = {2}/></div>
      <hr></hr>
      <div><UserInfo userName = {'Ольга'} userGender = {'Жен'} userAge = {37} yearsWorked = {3}/></div>
      <hr></hr>
    </div>
  )
}


/*
const getUser = () =>{
  return ({
    name: 'Aleks',
    age: 26
  });
};
console.log (getUser());*/

export default App;

//function App() {
 // return (
    //<div className="App">
     // <header className="App-header">
      //  <img src={logo} className="App-logo" alt="logo" />
       // <p>
        //  Edit <code>src/App.js</code> and save to reload.
        //</p>
       // <a
        //  className="App-link"
       //   href="https://reactjs.org"
        //  target="_blank"
        //  rel="noopener noreferrer"
       //>
        //  Learn React
       // </a>
     // </header>
   // </div>
 // );
//}

//export default App;
