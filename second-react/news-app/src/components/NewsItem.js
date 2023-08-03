import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsItem extends Component {
    static propTypes = {}

    render() {

        // accessing some props
        let { title, desc, newsUrl, imgUrl } = this.props;

        return (
            <>
                <div className="container my-3" >
                    <div className="card ml-4" style={{ width: "18rem" }}>
                        <img className="card-img-top" style={{ height: "10rem" }} src={imgUrl ? imgUrl : 'https://i.guim.co.uk/img/media/210b9acee319ff1023071e3bfb00d88d50a83ba1/0_195_4256_2553/master/4256.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=35eef60072fc914f7f04ae43c04a1ac9'} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{title?.slice(0, 40)}...</h5>
                            <p className="card-text">{desc?.slice(0, 50)}...</p>
                            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem