import React from 'react'
import CertificationWidget from '../CertificationWidget'
import ReactPlayer from 'react-player'

export default function ComparerDetail(props) {
    return (
        <div >
            <div class="row">
                <div class="col-12">
                    <h3>
                        {props.item.title} | {props.item.category}
                    </h3>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-6">
                    <div >
                        <ReactPlayer width='100%' url={props.item.video1} playing />
                        <div class="fb-share-button pull-left btn btn-default" data-href="http://www.superjuice.cc" data-layout="link" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.superjuice.cc%2F&amp;src=sdkpreparse">Share</a></div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <p><b>Sustainability & Ethics</b> | {props.item.sust1}</p>
                    <br />
                    <p>
                        <b>Certifications: &nbsp;</b>
                        <CertificationWidget item={props.item} />
                    </p>

                    <p>{props.item.intro}</p>

                    <hr />

                    <button class="btn btn-info m-1" target="_blank" onClick={() => window.open(props.item.sustlink)}>Sustainability & Ethics</button>
                    <button target="_blank" class="btn btn-success m-1" onClick={() => window.open(props.item.productlink)}>Get It Now</button>

                </div>
            </div>

        </div >
    )
}