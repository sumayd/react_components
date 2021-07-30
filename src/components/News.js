import React from 'react';

import NewsItem from './NewsItem';

class News extends React.Component{
    render(){
        const elements = this.props.news.map(news => 
            <NewsItem
                key={news}
                title={news.title}
            />
        );
        return(
            <div>
                { elements }
            </div>
        )
    }

}

export default News;