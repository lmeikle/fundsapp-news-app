import React, { Component } from 'react';
import { fetchTopHeadlines } from './NewsAPI';
import NewsHeadlineComponent from './NewsHeadlineComponent';

/**
 * Renders a list of top news headlines
 */
class NewsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headlines: null,
      error: null
    };
  }

  componentDidMount() {
    fetchTopHeadlines()
      .then(headlines => this.setState({ headlines }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { headlines, error } = this.state;

    if (error) {
      return <div className="errorMessage">Failed to get top headlines due to: {error.toString()}</div>;
    }

    if (!headlines) {
      return null;
    }

    return (
      <div className="news-container">
        <div className="news-title">News</div>
        <div className="news-headlines-container">
          {headlines.map(headline => <NewsHeadlineComponent key={headline.title} {...headline} />)}
        </div>
        <div className="news-powered-by">
          <a href="https://newsapi.org" target="_blank" rel="noopener noreferrer">
            Powered by News API
          </a>
        </div>
      </div>
    );
  }
}

export default NewsContainer;
