import React from 'react';
import './News.css';
import newsData from '../files/newsData.json'; 
import AnimatedComponent from '../components/AnimatedComponent';

const News = () => {
  return (
    <AnimatedComponent>
      <div className="news">
      <h2>News & Announcements</h2>
      <div className="news-list">
        {newsData.map((item, index) => (
          <div className="news-item" key={index}>
            <img src={process.env.PUBLIC_URL + '/' + item.image} alt={item.title} className="news-image" />
            <div className="news-content">
              <h3>{item.title}</h3>
              <a href={item.link} className="read-more" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>

    </AnimatedComponent>
      
  );
}

export default News;
