// import { Component } from 'react'

// export class NewsItem extends Component {
//   render() {
//     let { url, title, description, urlToImage, author, date,source } = this.props;
//     return (
//       <div className="my-3">
//         <div className="card">

//           <div style={{
//             display: 'flex',
//             justifyContent: 'flex-end',
//             position: 'absolute',
//             right: '0'
//           }}> 

//             <span className='badge rounded-pill bg-danger'>{source}</span>

//           </div>

//           <img src={!urlToImage ? "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg" : urlToImage} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title">{title}
//               {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}>
//                 {source}
//               </span> */}
//             </h5>

//             <p className="card-text">{description}</p>
//             <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>
//             <a href={url} className="btn btn-sm btn-dark">Read More</a>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }


const NewsItem = (props) => {

    let { url, title, description, urlToImage, author, date,source } = props;
    return (
      <div className="my-3">
        <div className="card">

          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }}> 

            <span className='badge rounded-pill bg-danger'>{source}</span>

          </div>

          <img src={!urlToImage ? "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg" : urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}
              {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}>
                {source}
              </span> */}
            </h5>

            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>
            <a href={url} className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem
