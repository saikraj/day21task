import React from 'react';

function Card(props) {
    let property =props.prop[0];
    return (
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">{property.title}</h5>
                <h6 className="card-price text-center">{property.price}<span className="period">/month</span></h6>
                <hr />
                <ul className="fa-ul">
                  {property.options.map((item,index)=>{
                    return (<li className={item.className==='muted'?'text-muted':''} key={index}><span className="fa-li"><i className="fas fa-check"></i></span>{(property.title==='PRO'&&item.val==='Free Subdomain')?<strong>Unlimited </strong>:<></>}{item.val}</li>)
                  })}
                  
                </ul>
                <div className="d-grid">
                  <a href="#" className="btn btn-primary text-uppercase">Button</a>
                </div>
              </div>
            </div>
        </div>
    );
}

export default Card;
