import React from 'react'

export default function ComparerWidget(props) {

    return (
        <div className="myPanel myRow row p-1">
            <div className="col-xs-4 col-sm-2" >
                <img style={{width:'100%', marginTop:'20%'}} src={`https://img.youtube.com/vi/${props.item.videotag}/default.jpg`} />
            </div>
            <div className="col-xs-8 col-sm-8">
                <h3>{ props.item.title }</h3>
                <p style={{color:'grey'}}>{ props.item.price }</p>

                <button className="btn btn-outline-dark btn-sm pull-right">
                    { props.item.upvote } Purchased Through Superjuice
                </button>
                <button className="btn btn-outline-dark btn-sm pull-right hoverButton" style={{color: 'grey', margin: 2, outlineColor: 'grey'}}>
                    🎥 More Info
                </button>
                <button className="btn btn-outline-dark btn-sm pull-right hoverButton" style={{color: 'grey', margin: 2, outlineColor: 'grey'}} target="_blank" href={props.item.prodlink}>
                    Get It Now
                </button>
            </div>
        </div>
    )
}


