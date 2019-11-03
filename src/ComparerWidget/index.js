import React from 'react'

export default function ComparerWidget(props) {

    return (
        <div class="myPanel row p-1">
            <div class="col-xs-4 col-sm-2" >
                <img style={{width:'100%', marginTop:'20%'}} src="https://img.youtube.com/vi/Hh1ckWJF7_0/default.jpg" />
            </div>
            <div class="col-xs-8 col-sm-8">
                <h3>{ props.item.title }</h3>
                <p style={{color:'grey'}}>{ props.item.price }</p>

                <button class="btn btn-default btn-sm pull-right">
                    { props.item.upvote } Purchased Through Superjuice
                </button>
                <div class="btn btn-default btn-sm hoverButton pull-right" style={{color: 'grey'}}>
                    <span class="glyphicon glyphicon-facetime-video" aria-hidden="true" style={{color: 'grey'}}>
                        More Info
                    </span>
                </div>
                <a class="btn btn-default hoverButton btn-sm pull-right" style={{color: 'grey'}} target="_blank" href="{{new.value.prodlink}}">
                    Get It Now
                </a>
            </div>
        </div>
    )
}


