import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipe, removeFromCalendar } from '../actions';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Hello World</h1>
      </div>  
    );
  }
}

const mapStateToProps = (calendar) => {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  return {
    calendar: dayOrder.map((day)=>({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal)=>{
        meals[meal] = calendar[day][meal]
          ? calendar[day][meal]
          : null
        
          return meals;
      }, {})
    }))
  }
}

const mapDispatchToProps = (dispatch) => ({
  selectRecipe: (data) => dispatch(addRecipe(data)),
  remove: (data) => dispatch(removeFromCalendar(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
