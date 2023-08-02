import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    static propTypes = {}
    articles = [{
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
        "source": { "id": "associated-press", "name": "Associated Press" },
        "author": "Aaron Morrison, EMILY WAGSTER PETTUS",
        "title": "For Emmett Till's family, national monument proclamation cements his inclusion in the American story - The Associated Press",
        "description": "President Joe Biden has signed a proclamation establishing a national monument honoring Emmett Till, the Black teenager from Chicago whose abduction, torture and killing in Mississippi in 1955 helped propel the Civil Rights Movement. The Emmett Till and Mamie…",
        "url": "https://apnews.com/article/emmett-till-monument-national-proclamation-civil-rights-7c9c5e6b7ce18c9180f943b512bb4032",
        "urlToImage": "https://dims.apnews.com/dims4/default/c745083/2147483647/strip/true/crop/5885x3310+0+306/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F9f%2F1a%2Fa893b7e361d68d24ea1cb71ad11c%2Fbfc6e2da5f9b4e61b916c18fd78a73e9",
        "publishedAt": "2023-07-26T02:01:00Z",
        "content": "When President Joe Biden signed a proclamation Tuesday establishing a national monument honoring Emmett Till and his mother, Mamie Till-Mobley, it marked the fulfillment of a promise Tills relatives … [+8676 chars]"
    },
    {
        "source": { "id": "reuters", "name": "Reuters" },
        "author": "Phil Stewart",
        "title": "Bowe Bergdahl's court-martial conviction voided by U.S. judge - Reuters",
        "description": "A U.S. federal judge on Tuesday voided a 2017 court-martial conviction against Bowe Bergdahl, an Army sergeant who walked off his post in 2009 only to be captured by the Taliban and spend five years as their prisoner.",
        "url": "https://www.reuters.com/world/us/bowe-bergdahls-court-martial-conviction-voided-by-us-judge-2023-07-26/",
        "urlToImage": "https://www.reuters.com/resizer/epx9L3M4HX8qXX0X8Mcsx1zHoHo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SNV2OJNT5BKMVBLOLTWTCGCYLQ.jpg",
        "publishedAt": "2023-07-26T01:54:06Z",
        "content": "WASHINGTON, July 25 (Reuters) - A U.S. federal judge on Tuesday voided a 2017 court-martial conviction against Bowe Bergdahl, an Army sergeant who walked off his post in 2009 only to be captured by t… [+3032 chars]"
    },
    {
        "source": { "id": "usa-today", "name": "USA Today" },
        "author": "Safid Deen",
        "title": "Lionel Messi scores two goals, leads Inter Miami to 4-0 win over Atlanta United - USA TODAY",
        "description": "Lionel Messi played a role in three of Inter Miami's four goals against Atlanta United in Tuesday night's Leagues Cup match.",
        "url": "https://www.usatoday.com/story/sports/mls/2023/07/25/lionel-messis-second-game-with-inter-miami-vs-atlanta-united-updates/70466673007/",
        "urlToImage": "https://www.usatoday.com/gcdn/presto/2023/07/26/USAT/12b85b2a-6ee0-4862-95c6-17abed2f8537-USATSI_21083116.jpg?crop=4443,2500,x0,y0&width=3200&height=1801&format=pjpg&auto=webp",
        "publishedAt": "2023-07-26T01:34:08Z",
        "content": "FORT LAUDERDALE, Fla. Lionel Messis game-winning goal in his first Inter Miami match was so clutch, memorable and dynamic. It was natural to wonder whether his second game could live up to the height… [+6642 chars]"
    },
    {
        "source": { "id": null, "name": "The Guardian" },
        "author": "Dani Anguiano",
        "title": "Florida ocean records 'unprecedented' temperatures similar to a hot tub - The Guardian US",
        "description": "The 90-100F readings add to previous warnings over warming water putting marine life and ecosystems in peril",
        "url": "https://www.theguardian.com/us-news/2023/jul/25/florida-ocean-temperatures-hot-tub-extreme-weather",
        "urlToImage": "https://i.guim.co.uk/img/media/210b9acee319ff1023071e3bfb00d88d50a83ba1/0_195_4256_2553/master/4256.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=35eef60072fc914f7f04ae43c04a1ac9",
        "publishedAt": "2023-07-26T01:30:00Z",
        "content": "The surface ocean temperature around the Florida Keys soared to 101.19F (38.43C) this week, in what could be a global record as ocean heat around the state reaches unprecedented extremes.\r\nA water te… [+3766 chars]"
    },
    {
        "source": { "id": null, "name": "The Guardian" },
        "author": "Anna Isaac, Kalyeena Makortoff",
        "title": "NatWest boss Alison Rose resigns over Nigel Farage Coutts account row - The Guardian",
        "description": "Former Ukip leader obtained report suggesting media coverage of his political views was considered in Coutts closure decision",
        "url": "https://www.theguardian.com/business/2023/jul/26/natwest-boss-alison-rose-nigel-farage-account-coutts",
        "urlToImage": "https://i.guim.co.uk/img/media/dd0fd079b84527bb6ce7f041e1042f5f4dda0175/0_270_8145_4890/master/8145.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=891f1bd4c44ac21eed1df13c49c2c319",
        "publishedAt": "2023-07-26T01:25:27Z",
        "content": "Dame Alison Rose, the chief executive of NatWest Group, has stood down after a row over the closure of Nigel Farages bank account with the private bank Coutts, which NatWest owns.\r\nRose has resigned … [+10561 chars]"
    },
    {
        "source": { "id": "politico", "name": "Politico" },
        "author": null,
        "title": "Judge knocks down Biden's asylum policy as illegal border crossings dip - POLITICO",
        "description": "The ruling is the latest legal blow to the administration’s immigration policy response.",
        "url": "https://www.politico.com/news/2023/07/25/biden-asylum-policy-immigration-00108074",
        "urlToImage": "https://static.politico.com/e1/1b/f6ff66dd4763a78b3050bbe403d9/immigration-asylum-rule-78410.jpg",
        "publishedAt": "2023-07-26T01:08:38Z",
        "content": "The Justice Department disagrees with the district courts ruling today in the East Bay case and intends to appeal the decision and to seek a stay pending appeal. We remain confident in our position t… [+3410 chars]"
    },
    {
        "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
        "author": "Al Jazeera",
        "title": "Man sentenced to prison for defrauding US border wall supporters - Al Jazeera English",
        "description": "Timothy Shea receives the longest prison sentence yet for his participation in the ‘We Build the Wall’ scheme.",
        "url": "https://www.aljazeera.com/news/2023/7/26/man-sentenced-to-prison-for-defrauding-us-border-wall-supporters",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/07/AP23206769164348-1690329518.jpg?resize=1920%2C1440",
        "publishedAt": "2023-07-26T00:58:39Z",
        "content": "A court in the United States has handed down the highest sentence yet to a defendant involved in the We Build the Wall fundraising campaign, which purported to support the construction of former Pres… [+4631 chars]"
    },
    {
        "source": { "id": "reuters", "name": "Reuters" },
        "author": "Fedja Grulovic, Nicolas Economou",
        "title": "Three dead in Greece wildfires as firefighters battle the flames - Reuters",
        "description": "Three people became the first known fatalities on Tuesday of wildfires that have been raging on the Greek islands for a week, and Prime Minister Kyriakos Mitsotakis warned of tough days ahead as the blazes destroyed homes and forced tourist evacuations.",
        "url": "https://www.reuters.com/world/europe/wildfires-greece-burn-days-more-tourists-expected-fly-out-2023-07-25/",
        "urlToImage": "https://www.reuters.com/resizer/G1IHnp_CLOLKozRC_Kf0RKiUZvQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2AGRYE22W5OMHFLGLKADALPHXE.jpg",
        "publishedAt": "2023-07-26T00:29:12Z",
        "content": "RHODES, Greece, July 25 (Reuters) - Three people became the first known fatalities on Tuesday of wildfires that have been raging on the Greek islands for a week, and Prime Minister Kyriakos Mitsotaki… [+4009 chars]"
    },
    {
        "source": { "id": "reuters", "name": "Reuters" },
        "author": "Niket Nishant, Nupur Anand, David French",
        "title": "Banc of California and PacWest to merge, raise $400 million in equity - Reuters",
        "description": "Banc of California <a href=\"https://www.reuters.com/markets/companies/BANC.N\" target=\"_blank\">(BANC.N)</a> and PacWest Bancorp <a href=\"https://www.reuters.com/markets/companies/PACW.O\" target=\"_blank\">(PACW.O)</a> will merge in an all-stock deal to create a …",
        "url": "https://www.reuters.com/markets/deals/banc-california-talks-buy-pacwest-bancorp-wsj-2023-07-25/",
        "urlToImage": "https://www.reuters.com/resizer/6nSOCOZ_zBxVHKBdDjbz-79zOac=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/IITSN5REOFMIJA7GGE23HXBEPQ.jpg",
        "publishedAt": "2023-07-26T00:12:00Z",
        "content": "July 25 (Reuters) - Banc of California (BANC.N) and PacWest Bancorp (PACW.O) will merge in an all-stock deal to create a bank with $36 billion in assets, the companies said on Tuesday, coming togethe… [+5013 chars]"
    },
    {
        "source": { "id": null, "name": "Harvard Crimson" },
        "author": null,
        "title": "Dept. of Education Opens Investigation Into Harvard's Donor, Legacy Admissions Preferences | News - Harvard Crimson",
        "description": "The U.S. Department of Education officially opened an investigation on Tuesday into the use of donor and legacy preferences in Harvard University’s admissions processes.",
        "url": "https://www.thecrimson.com/article/2023/7/26/doe-investigation-donor-legacy-admissions/",
        "urlToImage": "https://s3.amazonaws.com/thumbnails.thecrimson.com/photos/2023/07/03/130749_1364383.jpg.2000x1333_q95_crop-smart_upscale.jpg",
        "publishedAt": "2023-07-25T23:21:55Z",
        "content": "Updated July 25, 2023, at 4:08 p.m.\r\nWASHINGTON The U.S. Department of Education officially opened an investigation on Tuesday into the use of donor and legacy preferences in Harvard Universitys admi… [+4225 chars]"
    },
    {
        "source": { "id": "cnn", "name": "CNN" },
        "author": "Melanie Zanona, Manu Raju, Annie Grayer",
        "title": "Inside McCarthy’s sudden warming to a Biden impeachment inquiry - CNN",
        "description": "Speaker Kevin McCarthy in recent weeks has heard similar advice from both a senior House Republican and an influential conservative lawyer: prioritize the impeachment of President Joe Biden over a member of his Cabinet.",
        "url": "https://www.cnn.com/2023/07/25/politics/kevin-mccarthy-impeachment-embrace/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230725152945-01-kevin-mccarthy-072523.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-07-25T23:21:00Z",
        "content": "Speaker Kevin McCarthy in recent weeks has heard similar advice from both a senior House Republican and an influential conservative lawyer: prioritize the impeachment of President Joe Biden over a me… [+13224 chars]"
    },
    {
        "source": { "id": null, "name": "Barron's" },
        "author": "Eric J. Savitz",
        "title": "Microsoft Stock Slips Despite Strong Earnings. Guidance Fell Shy of Estimates. - Barron's",
        "description": "Shares of the software giant are up 44% so far this year, recently setting a record high.",
        "url": "https://www.barrons.com/articles/microsoft-earnings-stock-price-231e11a9",
        "urlToImage": "https://images.barrons.com/im-822568/social",
        "publishedAt": "2023-07-25T23:15:00Z",
        "content": null
    },
    {
        "source": { "id": "espn", "name": "ESPN" },
        "author": "Lindsey Thiry",
        "title": "Sources -- Chargers, QB Justin Herbert agree to 5-year, $262.5M extension - ESPN - ESPN",
        "description": "The Chargers and quarterback Justin Herbert have agreed to terms on a five-year, $262.5 million deal, sources told ESPN's Adam Schefter on Tuesday.",
        "url": "https://www.espn.com/mlb/story/_/id/38068747/sources-chargers-qb-justin-herbert-agree-5-year-262m-extension",
        "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0725%2Fr1202007_1296x729_16%2D9.jpg",
        "publishedAt": "2023-07-25T23:00:00Z",
        "content": "COSTA MESA, Calif. -- The Los Angeles Chargers and quarterback Justin Herbert have agreed to terms on a five-year, $262.5 million contract extension, sources told ESPN's Adam Schefter on Tuesday.\r\nTh… [+3867 chars]"
    },
    {
        "source": { "id": null, "name": "KTLA Los Angeles" },
        "author": "Iman Palm",
        "title": "Disneyland’s Haunted Mansion inspired Airbnb materializes in Southern California - KTLA Los Angeles",
        "description": "If you ever wondered what it would be like to spend the night in Disneyland’s Haunted Mansion, here’s your chance. An Airbnb listing for the Ghostly Retreat in Fullerton pays tribute to the fan-favorite attraction with Haunted Mansion-inspired décor, along wi…",
        "url": "https://ktla.com/news/local-news/disneylands-haunted-mansion-inspired-airbnb-materializes-in-southern-california/",
        "urlToImage": "https://ktla.com/wp-content/uploads/sites/4/2023/05/9_2018_DL.0271.jpg?w=1280",
        "publishedAt": "2023-07-25T22:15:44Z",
        "content": "If you ever wondered what it would be like to spend the night in Disneyland’s Haunted Mansion, here’s your chance.\r\nAn Airbnb listing for the Ghostly Retreat in Fullerton pays tribute to the fan-favo… [+1706 chars]"
    },
    {
        "source": { "id": "engadget", "name": "Engadget" },
        "author": null,
        "title": "Samsung Galaxy Unpacked July 2023: How to watch - Engadget",
        "description": "While Samsung already revealed its flagship Galaxy S23 phones earlier this year, summer is reserved for its foldable devices..",
        "url": "https://www.engadget.com/samsung-galaxy-unpacked-july-2023-how-to-watch-220014632.html",
        "urlToImage": "https://s.yimg.com/uu/api/res/1.2/f73DgY2LkohKnM1YnO5HSA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-07/56943af0-2abb-11ee-bfdf-1daf9e9dc2bc.cf.jpg",
        "publishedAt": "2023-07-25T22:01:57Z",
        "content": "Samsung Unpacked 2023\r\nWhile Samsung already revealed its flagship Galaxy S23 phones earlier this year, summer is reserved for its foldable devices. This year, that event is taking place in South Kor… [+1192 chars]"
    },
    {
        "source": { "id": "axios", "name": "Axios" },
        "author": "Axios",
        "title": "Gulf Stream could collapse within decades, study warns - Axios",
        "description": null,
        "url": "https://www.axios.com/2023/07/25/gulf-stream-collapse-atlantic-ocean-circulation",
        "urlToImage": null,
        "publishedAt": "2023-07-25T21:58:09Z",
        "content": null
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
    constructor(){
        super();
        this.state = {
            articles: this.articles,
            loading: false,
        }
    }

    render() {
        return (
            <div className='container my-4'>

                <div className="row">
                    <div className="col-md-4 ml-sd-4">
                        <NewsItem title="India won the series"
                            desc="This was very easy match and India won the series. But, still India lost the lead in WTC."
                            imgUrl="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0725%2Fr1202007_1296x729_16%2D9.jpg" />
                    </div>
                </div>
                
            </div>
        )
    }
}

export default News;