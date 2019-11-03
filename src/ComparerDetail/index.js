import React from 'react'

export default function ComparerDetail() {
    return (
        <div >
            <div class="modal-header">
                <h3 class="modal-title" id="exampleModalLabel">
                    Name | Category
                </h3>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="embed-responsive embed-responsive-16by9">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        {/* <p><b>Sustainability & Ethics</b> | {{ this.selectedItem.value.sust }}</p> */}
                        <br />
                        <p><b>Certifications:</b></p>

                        <hr />
                        <a class="btn btn-info" target="_blank" href="{{this.selectedItem.value.sustlink}}">Sustainability & Ethics</a>
                        <a target="_blank" class="btn btn-success" href="{{this.selectedItem.value.prodlink}}">Get It Now</a>

                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <div class="fb-share-button pull-left btn btn-default" data-href="http://www.superjuice.cc" data-layout="link" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.superjuice.cc%2F&amp;src=sdkpreparse">Share</a></div>
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div >
        </div >
    )
}