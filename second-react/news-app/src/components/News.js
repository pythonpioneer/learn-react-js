import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    static propTypes = {}
    articlesList = [{
        "source": { "id": null, "name": "The Athletic" },
        "author": "The Athletic Staff",
        "title": "Explaining cardiac arrest after Bronny James collapse: Is it common in young athletes? - The Athletic",
        "description": "Here’s what we know about cardiac arrest and the typical medical response that follows.",
        "url": "https://theathletic.com/4719835/2023/07/25/what-is-cardiac-arrest-bronny-james/",
        "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/07/25132712/USATSI_21079851-scaled.jpg",
        "publishedAt": "2023-07-26T02:16:57Z",
        "content": "USC freshman Bronny James suffered cardiac arrest during practice Monday, a family spokesperson confirmed to The Athletic in a statement Tuesday. James, the 18-year-old son of Lakers star LeBron Jame… [+4180 chars]"
    },
    ]

    // creating constructor and state
    constructor() {
        super();
        this.state = {
            articles: this.articlesList,
            loading: false,
            page: 1,
        }
    }

    // displaying next page, when clicked on next button
    handleNextPageClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=40e43d4e18e54bd0acb81ab9cf897760&page=${this.state.page+1}&pageSize=18`;
        let data = await fetch(url);
        this.parsedData = await data.json();

        this.setState({
            articles: this.parsedData.articles,
            page: this.state.page + 1,
        });
    }

    // displaying previous page, when clicked on previous button
    handlePrevPageClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=40e43d4e18e54bd0acb81ab9cf897760&page=${this.state.page-1}&pageSize=18`;
        let data = await fetch(url);
        this.parsedData = await data.json();

        this.setState({
            articles: this.parsedData.articles,
            page: this.state.page - 1,
        });
    }

    // runs when everything executed
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=40e43d4e18e54bd0acb81ab9cf897760&page=${this.state.page}&pageSize=18`;
        let data = await fetch(url);
        this.parsedData = await data.json();

        this.setState({
            articles: this.parsedData.articles
        });
    }

    render() {
        return (
            <div className='container my-4'>
                <h2 className='container ml-4'>Get Your News - Top Headlines</h2>

                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4 ml-sd-4" key={element.url}>
                            <NewsItem title={element.title}
                                desc={element.description}
                                imgUrl={element.urlToImage}
                                newsUrl={element.url}
                            />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} className='btn btn-dark ml-4' onClick={this.handlePrevPageClick} >&larr; Previous</button>
                    <button disabled={Math.ceil(this.parsedData?.totalResults/18) > this.state.page?false:true} className='btn btn-dark mr-4' onClick={this.handleNextPageClick} >Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News;