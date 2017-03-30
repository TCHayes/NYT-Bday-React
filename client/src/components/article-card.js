import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../NYTlogo.png';
import '../../public/main.css';

function mapStateToProps(state, props) {
    return {
      date: state.currentDate
    }
}

export class ArticleCard extends Component {
  render () {
    return (
       <div className="article-div">
          <img src={logo} alt="NYT Logo" className="logo-img" />
          <h3>{this.props.headline}</h3>
          <div className="inner">
            <h5>{this.props.lead} <a href={this.props.url}>More...</a></h5>
          </div>
       </div>
    )
  }
}

export default connect(mapStateToProps)(ArticleCard);
