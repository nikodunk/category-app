import React from 'react'

export default function ComparerWidget(props) {

    const openModal = (item) => {
        console.log(item)
    }

    return (
        <div className="myPanel myRow row p-3" onClick={() => openModal(props.item)}>
            <div className="col-xs-4 col-sm-2" >
                <img style={{width:'100%', marginTop:'20%'}} src={`https://img.youtube.com/vi/${props.item.videotag}/default.jpg`} />
            </div>
            <div className="col-xs-8 col-sm-8">
                <h3>{ props.item.title }</h3>
                {/* <p style={{color:'grey'}}>{ props.item.price }</p> */}
                {/* <p style="color:grey">{props.item.sust1}</p> */}
                {props.item.greene ? <p style={{display:'inline'}}><a target="_blank" href="www.green-e.org"><img src="green-e.gif" height="30px"/></a></p> : null } 
                {/* <p *ngIf="new.value.cert == 'USDA Certified Organic'" style="display:inline"><a target="_blank" href="https://www.ams.usda.gov/rules-regulations/organic"><img src="assets/organic.gif" height="30px"></a></p>
                <p *ngIf="new.value.cert == 'Fair Trade Certified'" style="display:inline"><a target="_blank" href="http://fairtradeusa.org/cooplink"><img src="assets/fairtrade.gif" height="30px"></a></p>
                <p *ngIf="new.value.cert == 'B-Corp'" style="display:inline"><a target="_blank" href="https://www.bcorporation.net"><img src="assets/bcorp.gif" height="30px"></a></p>
                <p *ngIf="new.value.cert == 'Carbon-Free'" style="display:inline"><a target="_blank" href="https://carbonfund.org/product-certification"><img src="assets/carbonfree.gif" height="30px"></a></p> */}
                {props.item.closedloop ? <p style={{display:'inline'}}><img src="closedloop.gif" height="30px"/></p> : null }
            {/* <p *ngIf="new.value.cert == 'Fair Labor Certified'" style="display:inline"><a target="_blank" href="http://www.fairlabor.org"><img src="assets/fairlabor1.gif" height="30px"></a></p> */}
                {props.item.fairtrade ? <p style={{display:'inline'}}><a target="_blank" href="http://fairtradeusa.org/certification"><img src="fairlabor2.gif" height="30px" /></a></p> : null }
                 {/* <p *ngIf="new.value.cert == 'Local Production'" style="display:inline"><img src="assets/local.gif" height="30px"></p>
            <!-- 	<p *ngIf="new.value.noncarbon" style="display:inline"><img src="assets/noncarbon.gif" height="30px"></p> -->
                <p *ngIf="new.value.cert == 'PETA Cruelty Free'" style="display:inline"><a target="_blank" href="http://www.peta.org/about-peta/how-is-a-company-certified-as-cruelty-free/"><img src="assets/noncruelty.gif" height="30px"></a></p>
            <!-- 	<p *ngIf="new.value.nonfur" style="display:inline"><a target="_blank" href="http://www.peta.org/about-peta/how-is-a-company-certified-as-cruelty-free/"><img src="assets/nonfur.gif" height="30px"></a></p> -->
                <p *ngIf="new.value.cert == 'GMO-Free'" style="display:inline"><img src="assets/nongmo.gif" height="30px"></p>
                <p *ngIf="new.value.cert == 'EWG A'" style="display:inline"><img src="assets/nontoxic.gif" height="30px"></p>
                <!-- <p *ngIf="new.value.nonwaste" style="display:inline"><img src="assets/nonwaste.gif" height="30px"></p> -->
                <p *ngIf="new.value.cert == 'Vegan'" style="display:inline"><img src="assets/vegan.gif" height="30px"></p>
                <p *ngIf="new.value.cert == 'None'" style="display:inline; color:grey; height:30px">No Certifications</p> */}
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


