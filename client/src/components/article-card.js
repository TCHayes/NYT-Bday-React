import React from 'react';
import { connect } from 'react-redux';
import logo from '../NYTlogo.png';
import '../../public/main.css';

function mapStateToProps(state, props) {
    return {
      date: state.currentDate
    }
}

export function ArticleCard (props){
    return (
       <div className="article-div">
          <img src={logo} alt="NYT Logo" className="logo-img" />
          <h3>{props.headline}</h3>
          <h5>{props.byline}</h5>
          <div className="inner">
            <h5>{props.lead} <a href={props.url}>More...</a></h5>
          </div>
       </div>
    )
}

export default connect(mapStateToProps)(ArticleCard);
