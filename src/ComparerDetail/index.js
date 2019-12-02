import React from 'react'
import CertificationWidget from '../CertificationWidget'
import ReactPlayer from 'react-player'
import './styles.css'


export default function ComparerDetail(props) {
    return (
        <div >
            <div class="row">
                <div class="col-12">
                    <h5>
                        {props.item.title} | {props.item.category}
                    </h5>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-6">
                    <div className='player-wrapper'>
                        <ReactPlayer  
                            width='100%' 
                            height='100%' 
                            url={props.item.video1} 
                            className='react-player'
                            playing 
                            />
                    </div>
                </div>
                <div class="col-sm-6">
                    <p><b>Sustainability & Ethics</b> | {props.item.sust1}</p>
                    <p>
                        <b>Certifications: &nbsp;</b>
                        <CertificationWidget item={props.item} className="m-1" />
                    </p>
                    <p className="detail-intro">{props.item.intro}</p>
                    <hr />
                    <button class="btn btn-info m-1" target="_blank" onClick={() => window.open(props.item.sustlink)}>Sustainability & Ethics</button>
                    <button target="_blank" class="btn btn-success m-1" onClick={() => window.open(props.item.productlink)}>Get It Now</button>
                    <div class="fb-share-button pull-left btn btn-default" data-href="http://www.superjuice.cc" data-layout="link" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.superjuice.cc%2F&amp;src=sdkpreparse">Share</a></div>

                </div>
            </div>

        </div >
    )
}