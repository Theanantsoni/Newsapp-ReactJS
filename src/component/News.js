// import { Component, useActionState } from 'react'
// import { useEffect, useState } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types';
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {

//   static defaultProps = {
//     country: "us",
//     category: "general"
//   }

//   static propTypes = {
//     country: PropTypes.string,
//     category: PropTypes.string
//   }

//   constructor(props) {
//     super(props);
//     // console.log("Hello I am constructor from news component");

//     this.state =
//     {
//       articles: [],
//       loading: false,
//       page: 1,
//       totalResults: 0
//     }
//     document.title =props.category;
//   }

//   async updateNews() {
//    props.setProgress(10);

//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6c6e95daa288467ba3fc3c57a1b982b1&page=${this.state.page}&pageSize=15`;
//     // this.data = await fetch(url);

//     let data = await fetch(url);

//    props.setProgress(30);

//     let parseData = await data.json()
//     console.log(parseData);

//    props.setProgress(70);

//     this.setState({
//       articles: parseData.articles,
//       totalResults: parseData.totalResults,
//       loading: false,
//     })
//    props.setProgress(100);
//   }

//   async componentDidMount() {
//     this.updateNews();
//     // console.log("cdm");
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6c6e95daa288467ba3fc3c57a1b982b1&page=${this.state.page}&pagesize=15`;
//     this.data = await fetch(url);

//     let data = await fetch(url);

//     let parseData = await data.json()
//     console.log(parseData);
//     this.setState({
//       articles: parseData.articles,
//       totalResults: parseData.totalResults,
//       loading: false
//     })

//   }


//   handlePreviousClick = async () => {
//     // // console.log("prev")

//     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6c6e95daa288467ba3fc3c57a1b982b1&page=${this.state.page - 1}&pageSize=6`;
//     // this.setState({loading: true});
//     // let data = await fetch(url);
//     // let parseData = await data.json();
//     // // console.log(parseData);

//     // this.setState({loading: false});

//     // this.setState({
//     //   articles: parseData.articles, 
//     //   totalArticles: parseData.totalResults, 
//     //   page: this.state.page - 1,
//     //   loading: false
//     // });

//     this.setState({ page: this.state.page - 1 });
//     this.updateNews();
//   };


//   handleNextClick = async () => {
//     // if(this.state.page + 1 > Math.ceil(this.state.totalArticles/6)){
//     //   console.log("If condition")
//     // }
//     // else{
//     //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6c6e95daa288467ba3fc3c57a1b982b1&page=${this.state.page + 1}&pageSize=6`;

//     //   this.setState({loading: true});

//     //   let data = await fetch(url); 
//     //   let parseData = await data.json();
//     //   // console.log(parseData);

//     //   this.setState({loading: false});

//     //   this.setState({
//     //     articles: parseData.articles, 
//     //     page: this.state.page + 1,
//     //     totalArticles: parseData.totalResults,
//     //     loading: false
//     //   });
//     // }

//     this.setState({ page: this.state.page + 1 });
//     this.updateNews();
//   };

//   fetchMoreData = async () => {
//     // this.setState({ page: this.state.page + 1 })

//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6c6e95daa288467ba3fc3c57a1b982b1&page=${this.state.page}&pagesize=15`;
//     this.data = await fetch(url);

//     let data = await fetch(url);

//     let parseData = await data.json()
//     console.log(parseData);
//     this.setState({
//       articles: this.state.articles.concat(parseData.articles),
//       totalResults: parseData.totalResults,
//       // loading: false
//     })
//   };

//   render() {

//     // console.log("render");
//     return (

//       <div className="container md-3">


//         <h1 className='text-center' style={{ margin: '35px 0px' }}>NewsMonkey - Top Headlines</h1>

//         {this.state.loading && <Spinner/>}

//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={/*true*/ this.state.articles.length !== this.state.totalResults}
//           loader={<Spinner />}//{<h4>Loading...</h4>}
//         >

//           <div className="container">

//             <div className="row">
//               {
//             /* !this.state.loading && */ this.state.articles.map((element) => {
//                 return <div className="col-md-4" key={element.url}>
//                   <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} urlToImage={element.urlToImage ? element.urlToImage : ""} author={element.author} date={element.publishedAt} url={element.url ? element.url : ""} source={element.source.name} />
//                 </div>
//               }
//               )
//               }
//             </div>
//           </div>
//         </InfiniteScroll>
//         {/* <div className="container d-flex justify-content-between mt-3">
//           <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
//           <button type="button" disabled={this.state.page >= Math.ceil(this.state.totalArticles / 6)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
//         </div> */}

//       </div>
//     )
//   }
// }



import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from 'react'
import App from '../App';


const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, setTotalResults] = useState(0);



  const updateNews = async () => {
    props.setProgress(10);

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6c6e95daa288467ba3fc3c57a1b982b1&page=${page}&pageSize=15`;

    setLoading(true)

    let data = await fetch(url);

    props.setProgress(30);

    let parseData = await data.json();
    console.log(parseData);

    props.setProgress(70);

    setArticles(parseData.articles);

    setTotalResults(parseData.totalResults);

    setLoading(false);

    props.setProgress(100);
  }

    const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

useEffect(() => {
  console.log("Title update for category:", props.category);
  document.title = `${capitalizeFirstLetter(props.category)} - News Monkey`;
  updateNews();
}, [props.category]);

  const fetchMoreData = async () => {
    // this.setState({ page: this.state.page + 1 })
    

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6c6e95daa288467ba3fc3c57a1b982b1&page=${page+1}&pagesize=15`;
    // this.data = await fetch(url);

    const nextpage = page + 1;
    setpage(nextpage)

    let data = await fetch(url);

    let parseData = await data.json()
    console.log(parseData);

    setArticles(articles.concat(parseData.articles));

    setTotalResults(parseData.totalResults);

  };

    // console.log("render");
    return (

      <div className="container md-3">

        <h1 className='text-center' style={{ margin: '35px 0px', marginTop: '90px'}}> {capitalizeFirstLetter(props.category)} - Top Headlines</h1>

        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={/*true*/ articles.length !== totalResults}
          loader={<Spinner />}//{<h4>Loading...</h4>}
        >

          <div className="container">

            <div className="row">
             
                {articles.map((element) => {
                return (<div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title.slice(0, 45) : ""} 
                  description={element.description ? element.description.slice(0, 88) : ""} 
                  urlToImage={element.urlToImage ? element.urlToImage : ""} 
                  author={element.author} 
                  date={element.publishedAt} 
                  url={element.url ? element.url : ""} 
                  source={element.source.name} 
                  />
                </div>
                )
              })}
            </div>
          </div>
        </InfiniteScroll>
        
      </div>
    )

  }

  News.defaultProps = {
    country: "us",
    category: "general"
  }

  News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
  }

export default News
