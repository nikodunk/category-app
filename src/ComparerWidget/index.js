import React from 'react'

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
                {props.item.greene ? <p style={{display:'inline'}}><a target="_blank" href="www.green-e.org"><img src="green-e.gif" height="30px"/></a></p> : null } 
                {props.item.organic ? <p style={{display:'inline'}}><a target="_blank" href="https://www.ams.usda.gov/rules-regulations/organic"><img src="organic.gif" height="30px"/></a></p> : null } 
                {props.item.fairtrade ? <p style={{display:'inline'}}><a target="_blank" href="http://fairtradeusa.org/cooplink"><img src="fairtrade.gif" height="30px"/></a></p> : null } 
                {props.item.bcorp ? <p style={{display:'inline'}}><a target="_blank" href="https://www.bcorporation.net"><img src="bcorp.gif" height="30px"/></a></p> : null } 
                {props.item.carbonfree ? <p style={{display:'inline'}}><a target="_blank" href="https://carbonfund.org/product-certification"><img src="carbonfree.gif" height="30px"/></a></p> : null } 
                {props.item.closedloop ? <p style={{display:'inline'}}><img src="closedloop.gif" height="30px"/></p> : null }
                {props.item.fairlabor1 ? <p style={{display:'inline'}}><a target="_blank" href="http://www.fairlabor.org"><img src="fairlabor1.gif" height="30px" /></a></p> : null }
                {props.item.fairlabor2 ? <p style={{display:'inline'}}><a target="_blank" href="http://fairtradeusa.org/certification"><img src="fairlabor2.gif" height="30px" /></a></p> : null }
                {props.item.local ? <p style={{display:'inline'}}><img src="local.gif" height="30px"/></p> : null }
                {props.item.noncarbon ? <p style={{display:'inline'}}><img src="noncarbon.gif" height="30px"/></p> : null }
                {props.item.noncruelty ? <p style={{display:'inline'}}><a target="_blank" href="http://www.peta.org/about-peta/how-is-a-company-certified-as-cruelty-free/"><img src="noncruelty.gif" height="30px"/></a></p> : null }
                {props.item.nonfur ? <p style={{display:'inline'}}><a target="_blank" href="http://www.peta.org/about-peta/how-is-a-company-certified-as-cruelty-free/"><img src="nonfur.gif" height="30px"/></a></p> : null }
                {props.item.nongmo ? <p style={{display:'inline'}}><img src="nongmo.gif" height="30px"/></p> : null }
                {props.item.nontoxic ? <p style={{display:'inline'}}><img src="nontoxic.gif" height="30px"/></p> : null }
                {props.item.nonwaste ? <p style={{display:'inline'}}><img src="nonwaste.gif" height="30px"/></p> : null }
                {props.item.vegan ? <p style={{display:'inline'}}><img src="vegan.gif" height="30px"/></p> : null }
                {props.item.none ? <p style={{display:'inline'}}>No Certification</p> : null }
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


