import React from "react";
import { Link } from "react-router-dom";

const NewsItem=(props)=> {
  
    let { title, description, imageUrl, newsUrl, author, date } = props;
    return (
      <div>
        <div className="  scale-in conatainer my-3">
          <div className="card">
          <a rel="noopener noreferrer" href={newsUrl} target="_blank"><img
              className="card-img"
              src={
                !imageUrl
                  ? "https://www.ohsd.net/cms/lib/WA01919452/Centricity/Page/5501/news.jpg"
                  : imageUrl
              }
              alt="..."
            /></a>
            <div className="card-body">
            <Link rel="noopener noreferrer" style={{ textDecoration: "none !important"}} to={newsUrl} target="_blank"> <h5 className="cardtitle card-title" style={{ textDecoration: "none !important"}}>{title}</h5></Link>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="card-text">
                  By {!author ? "Unknown" : author} on{" "}
                  {new Date(date).toUTCString()}
                </small>
              </p>
              <div className="  text-center">
                <button className="learn-more ">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <a rel="noopener noreferrer" href={newsUrl} target="_blank">
                    <span className="button-text">Read More</span>
                  </a>
                </button>
               
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
