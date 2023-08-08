import PropTypes from 'prop-types';
import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

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
            loading: true,
            page: 1,
        }
    };

    // fetching data from api and loading spinner, when clicked on next, prev and refresh
    async updateApiData(val) {
        this.props.setProgress(40);
        this.setState({ loading: true });  // displaying spinner, before fetching data from api

        // fetching data from api
        let url = `https://newsapi.org/v2/top-headlines?q=${this.props.searchText}&country=in&category=${this.props.category.toLowerCase()}&apiKey=${this.props.newsApiKey}&page=${this.state.page + val}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.props.setProgress(100);
        this.parsedData = await data.json();

        this.setState({
            articles: this.parsedData.articles,
            page: this.state.page + val,
            loading: false,  // hiding spinner, after fetching data from api
        });
    }

    // runs when everything executed
    async componentDidMount() {
        this.updateApiData(0);  // passed 0, page movement not required
    }

    // called when try to scroll more
    fetchMoreData = async () => {
        const val = 1;  // to increse the page size

        // fetching data from api
        let url = `https://newsapi.org/v2/top-headlines?q=${this.props.searchText}&country=in&category=${this.props.category.toLowerCase()}&apiKey=${this.props.newsApiKey}&page=${this.state.page + val}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.parsedData = await data.json();

        this.setState({
            articles: this.state.articles.concat(this.parsedData.articles),
            page: this.state.page + val,
        });

    }

    render() {
        return (
            <>
                <div className='my-4' style={{marginLeft: '5rem'}}>
                    <h2 className='container'>Top Headlines - {this.props.category === 'general' || this.props.category === "" ? "Global" : this.props.category}</h2>
                </div>
                
                {/* displaying loader when page refreshed */}
                {this.state.loading && <Loading />}
                <InfiniteScroll
                    dataLength={this.state?.articles == null ? 0 : this.state?.articles?.length}
                    next={this.fetchMoreData}
                    hasMore={this.state?.articles?.length < this.parsedData?.totalResults}
                    loader={<Loading />}
                >
                    {/* displaying the news on the card using loops */}
                    <div className='container my-4'>

                        <div className="row">
                            {!this.state.loading && this.state?.articles?.map((element) => {
                                return <div className="col-md-4 ml-sd-4" key={element.url}>
                                    <NewsItem title={element?.title}
                                        desc={element?.description}
                                        imgUrl={element?.urlToImage}
                                        newsUrl={element?.url}
                                        authorName={element?.source.name}
                                        publishedAt={element?.publishedAt}
                                    />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}

export default News;