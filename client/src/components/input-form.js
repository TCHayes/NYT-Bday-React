import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../../public/main.css';

function mapStateToProps(state, props) {
    return {
      date: state.currentDate
    }
}

export class InputForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    let date = this.date.value.replace(/-/g,"");
    this.props.dispatch(actions.setDate(date));
    let currentUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3047b4f43aa340b1a9976a2cefadbf7f&begin_date=${date}&end_date=${date}&fq=section_name:front%20page`
    this.props.dispatch(actions.fetchData(currentUrl));
  }

  render () {
    return (
      <form id="search" onSubmit={this.onSubmit}>
      	<label htmlFor="date-selection">Enter your birthdate: </label>
      	<input id="date-selection" type="date" ref={ref => this.date = ref}/>
        <button id="searchButton" type="submit">Search</button>
      </form>
    )
  }
}

export default connect(mapStateToProps)(InputForm);
