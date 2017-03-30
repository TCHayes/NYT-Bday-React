import React from 'react';
import ArticleCard from './article-card';
import { connect } from 'react-redux';
import '../../public/main.css';

function mapStateToProps(state, props) {
    return {
      rawData: state.rawData
    }
}

export function Results (props) {
  const cards = props.rawData.map((article, index) => {
    return <ArticleCard
        key={index}
        headline={article.headline.main}
        lead={article.lead_paragraph}
        url={article.web_url}
        byline={article.byline ? article.byline.original : ''}
    />
  });

  return (
    <div id='results-container'>
      {cards}
    </div>
  )
}

export default connect(mapStateToProps)(Results);
