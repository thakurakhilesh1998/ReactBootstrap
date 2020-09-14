import React from 'react';
import ReactDom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Card=(props)=>{
    return(
        <>
            <div className="col-md m-2">
                <div className="card">
                    <img src={props.imgageUrl} className="card-img-top" height="250px"/>
                    <div className="card-body">
                        <h5 className="card-title">Card Title</h5>
                        <p className="card-text">Card text will be goes here.</p>
                         <a href="#" className="btn btn-primary">Go Somewhere</a>
                    </div>

                </div>
              </div>
        </>
    );
}

export {Card};