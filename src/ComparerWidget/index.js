import React from 'react'
import CertificationWidget from '../CertificationWidget'

export default function ComparerWidget(props) {

    return (
        <div className="myPanel myRow row p-3" onClick={() => props.openModal(props.item)}>
            <div className="col-xs-4 col-sm-2" >
                <img style={{width:'100%', marginTop:'20%'}} src={`https://img.youtube.com/vi/${props.item.videotag}/default.jpg`} />
            </div>
            <div className="col-xs-8 col-sm-8">
                <h3>{ props.item.title }</h3>
                {/* <p style={{color:'grey'}}>{ props.item.price }</p> */}
                {/* <p style="color:grey">{props.item.sust1}</p> */}
                <CertificationWidget item={props.item} />
                <br />
                <button className="btn btn-outline-dark btn-sm pull-right">
                    { props.item.upvote } Purchased Through Superjuice
                </button>
                <button className="btn btn-outline-dark btn-sm pull-right hoverButton" style={{color: 'grey', margin: 2, borderColor: 'lightgrey'}}>
                    🎥 More Info
                </button>
                <button className="btn btn-outline-dark btn-sm pull-right hoverButton" style={{color: 'grey', margin: 2, borderColor: 'lightgrey'}} onClick={() => window.open(props.item.productlink)}>
                    Get It Now
                </button>
            </div>
        </div>
    )
}


