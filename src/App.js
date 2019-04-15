import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 


import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import Main from './Components/Main';
import { Details } from './Components/Details';
import { HabitsContainer } from './Components/HabitsContainer';
import { New } from './Components/New';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formName: '',
      formDesc: '',
      habits: defaultHabits
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // This function is responsible for the controled form text fields
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  // This function is responsible for the submission of the new habit
  handleSubmit(event) {
    const target = event.target;
    const name = target.name;
    let habits = this.state.habits;

    if(name === "create") {
      if(this.state.formName !== "") {


        const newHabit = {
          name: this.state.formName,
          description: this.state.formDesc,
          progress: [...defaultProgress]
        }
        habits = habits.concat(newHabit);
      }
    }

    this.setState({
      formName: '',
      formDesc: '',
      habits      
    });
  }

  // This is the function that hadles the deletion of the habits
  handleDelete(event) {
    const target = event.target;
    const name = parseInt(target.name,10);
    const habits = this.state.habits.slice(0,name).concat(this.state.habits.slice(name + 1, this.state.habits.length));
    
    this.setState({
      habits
    });
  }

  // This function handles the clicks in the weekly progress boxes
  handleClick(event) {
    const target = event.target;
    // The name parameter holds the habit position in the state array
    const position = parseInt(target.name, 10);
    // The id parameter holds the day of the week for the progress array
    const progressDay = parseInt(target.id, 10);
    let currentHabits = this.state.habits.concat();
    let newHabit = this.state.habits[position];
    newHabit.progress[progressDay] = newHabit.progress[progressDay] ? false : true;
    currentHabits[position] = newHabit;

    this.setState({
      habits: currentHabits
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div id="App">
          <Header />
          <Main>
            <Switch>
              <Route path="/" render={(props) => <HabitsContainer habits={this.state.habits} handleDelete={this.handleDelete} />} exact />
              <Route path="/details/:id" render={props => <Details {...props} habits={this.state.habits} handleClick={this.handleClick} />} />
              <Route path="/new" render={props => <New {...props} name={this.state.formName} description={this.state.formDesc} handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} />} />
            </Switch>
          </Main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const defaultProgress = [false, false, false, false, false, false, false];

const defaultHabits = [{
  name: "Habit1",
  description: "This is my first habit",
  progress: [true, false, false, false, true, true, false]
},
{
  name: "Habit2",
  description: "This is my second habit",
  progress: [false, false, true, false, true, true, false]
}
]

export default App;
