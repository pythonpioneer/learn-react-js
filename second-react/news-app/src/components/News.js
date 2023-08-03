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
    {
        "source": { "id": "independent", "name": "Independent" },
        "author": "Meredith Clark",
        "title": "Ozempic users report stomach paralysis as weight loss drug side effect: 'I wish I never touched it' - The Independent",
        "description": "The FDA has received reports of stomach paralysis among patients taking Ozempic and Wegovy",
        "url": "https://www.independent.co.uk/life-style/health-and-families/ozempic-stomach-paralysis-side-effects-b2381825.html",
        "urlToImage": "https://static.independent.co.uk/2023/04/30/14/Drug_Shortages_Explainer_57723.jpg?quality=75&width=1200&auto=webp",
        "publishedAt": "2023-07-25T21:54:36Z",
        "content": "Stay ahead of the trend in fashion and beyond with our free weekly Lifestyle Edit newsletter\r\nStay ahead of the trend in fashion and beyond with our free weekly Lifestyle Edit newsletter \r\nA recent i… [+5016 chars]"
    },
    {
        "source": { "id": "cnn", "name": "CNN" },
        "author": "Terence Burlij, Jack Forrest",
        "title": "Abortion rights amendment qualifies for November ballot in Ohio - CNN",
        "description": "Ohio Secretary of State Frank LaRose announced Tuesday that organizers submitted enough valid signatures to put an amendment on the November ballot to enshrine abortion rights in the state’s constitution.",
        "url": "https://www.cnn.com/2023/07/25/politics/ohio-abortion-rights-amendment/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230330144956-ohio-pro-choice-rally-220624-file.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-07-25T21:37:00Z",
        "content": "Ohio Secretary of State Frank LaRose announced Tuesday that organizers submitted enough valid signatures to put an amendment on the November ballot to enshrine abortion rights in the states constitut… [+3677 chars]"
    },
    {
        "source": { "id": null, "name": "The Guardian" },
        "author": "Kari Paul",
        "title": "Alphabet stocks rise after second-quarter profits exceed expectations - The Guardian",
        "description": "The sunny report establishes a continued rebound for the tech company after a difficult 2022 and thousands of job cuts",
        "url": "https://www.theguardian.com/technology/2023/jul/25/alphabet-google-q2-earnings-report-stock",
        "urlToImage": "https://i.guim.co.uk/img/media/c6629ffd6b6b331f328010cb52820a40c3eb6d6a/0_199_6048_3627/master/6048.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=61c70f795426c95104d2ac3f06289272",
        "publishedAt": "2023-07-25T21:07:00Z",
        "content": "Alphabet stocks rose in after-hours trading on Tuesday after the Google parent companys second-quarter profits exceeded Wall Street expectations, amid a rebound in advertising dollars and the growing… [+3301 chars]"
    }]

    // creating constructor and state
    constructor() {
        super();
        this.state = {
            articles: this.articlesList,
            loading: false,
        }
    }

    // runs when everything executed
    async componentDidMount() {
        let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=40e43d4e18e54bd0acb81ab9cf897760';
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            articles: parsedData.articles
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
                    <button className='btn btn-dark ml-4'>&larr; Previous</button>
                    <button className='btn btn-dark mr-4'>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News;