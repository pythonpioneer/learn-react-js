import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsItem extends Component {
    static propTypes = {}

    render() {

        // accessing some props
        let { title, desc, imgUrl, newsUrl } = this.props;

        return (
            <>
                <div className="container my-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={imgUrl} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{desc}</p>
                            <a href="#" className="btn btn-sm btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem