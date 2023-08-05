import PropTypes from 'prop-types';
import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Loading from './Loading';

export class News extends Component {

    // defining the types of props
    static propTypes = {
        pageSize: PropTypes.number,
        category: PropTypes.string,
    };

    // setting the default of props
    static defaultProps = {
        pageSize: 9,
        category: "general",
    }

    // creating constructor and state
    constructor() {
        super();
        this.state = {
            articles: null,
            loading: false,
            page: 1,
        }
    }

    // displaying next page, when clicked on next button
    handleNextPageClick = async () => {
        this.setState({loading: true});  // displaying spinner before fetching data from api

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category.toLowerCase()}&apiKey=40e43d4e18e54bd0acb81ab9cf897760&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.parsedData = await data.json();

        this.setState({
            articles: this.parsedData.articles,
            page: this.state.page + 1,
            loading: false,  // hiding spinner, after fetching data from api
        });
    }

    // displaying previous page, when clicked on previous button
    handlePrevPageClick = async () => {
        this.setState({loading: true});  // displaying spinner before fetching data from api

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category.toLowerCase()}&apiKey=40e43d4e18e54bd0acb81ab9cf897760&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.parsedData = await data.json();

        this.setState({
            articles: this.parsedData.articles,
            page: this.state.page - 1,
            loading: false,  // hiding spinner, after fetching data from api
        });
    }

    // runs when everything executed
    async componentDidMount() {
        this.setState({loading: true});  // displaying spinner before fetching data from api

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category.toLowerCase()}&apiKey=40e43d4e18e54bd0acb81ab9cf897760&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.parsedData = await data.json();

        this.setState({
            articles: this.parsedData.articles,
            loading: false,  // hiding spinner, after fetching data from api
        });
    }

    render() {
        return (
            <div className='container my-4'>
                <h2 className='container ml-4'>Top Headlines - {this.props.category==='general'||this.props.category===""?"All":this.props.category}</h2>

                {/* displaying spinner when api is fetching */}
                {this.state.loading && <Loading/>}

                {/* displaying the news on the card using loops */}
                <div className="row">
                    {!this.state.loading && this.state.articles?.map((element) => {
                        return <div className="col-md-4 ml-sd-4" key={element.url}>
                            <NewsItem title={element.title}
                                desc={element.description}
                                imgUrl={element.urlToImage}
                                newsUrl={element.url}
                                authorName={element.source.name}
                                publishedAt={element.publishedAt}
                            />
                        </div>
                    })}
                </div>

                {/* buttons to navigate on next and previous articles */}
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} className='btn btn-dark ml-4' onClick={this.handlePrevPageClick} >&larr; Previous</button>
                    <button disabled={Math.ceil(this.parsedData?.totalResults/this.props.pageSize) > this.state.page?false:true} className='btn btn-dark mr-4' onClick={this.handleNextPageClick} >Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News;