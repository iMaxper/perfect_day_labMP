import React from 'react';

function Card(props) {
  return (
 <div className="card" style={{width: "18rem"}}>
  <img src={props.songImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.shortLyrics}.</p>
    <a href="https://www.google.com/search?safe=strict&ei=T-fLX7jjAoqq5NoPjZqO-A8&q=maxwell+silver+hammer+lyrics&oq=maxwell+silver+hammer+&gs_lcp=CgZwc3ktYWIQARgAMgcIABDJAxBDMgIIADICCAAyAggAMgIILjICCAAyAggAMgIIADICCAAyAggAOgQIABBHOgYIABAWEB5Qs90FWNXpBWCX6gZoAHACeACAAXiIAdoEkgEDMy4zmAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=psy-ab" className="btn btn-primary">Go to Lyrics</a>
  </div>
</div>
  );
}

export default Card;
