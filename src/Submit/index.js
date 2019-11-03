import React, { useState } from 'react';


export default function App() {

    const [ submitted, setSubmitted ] = useState(false)

    return (
        <div class="myPanel" >
            {!submitted ?
                <form>
                    <div style={{margin:40}}>
                        <h2>
                            <span class="glyphicon glyphicon-plus-sign" aria-hidden="true">
                            </span> Add a Brand
			      	          	</h2>
                        <p>Enter a sustainable brand into the catalog!</p>
                        <br />
                        <br />
                        <div class="form-group">
                            <label for="title">Company Name</label>
                            <input
                                name="title"
                                type="text"
                                class="form-control mb-3"
                                placeholder="Enter Product Name, if different from video review"
                            />
                        </div>
                        <div>
                            <label for="title">Video Link</label>
                            <input
                                required
                                name="video1"
                                type="text"
                                class="form-control mb-3"
                                placeholder="Product Video or Video Review Link (ie. youtube, vimeo)"
                            />
                        </div>
                        <div class="form-group">
                            <label for="title">Sustainability Link</label>
                            <input
                                required
                                name="sustlink"
                                type="text"
                                class="form-control mb-3"
                                placeholder="CSR Page / Independent Label Link. Why is this thing 'green'? Who's backing up their claim?"
                            />
                        </div>
                        <div class="form-group">
                            <label for="title">Product Link</label>
                            <input
                                
                                
                                name="productlink"
                                type="text"
                                required
                                class="form-control mb-3"
                                placeholder="Amazon Product Link, link to a page to purchase."
                            />
                        </div>
                        <div class="form-group">
                            <label for="title">Sustainability & Ethics</label>
                            <input
                                
                                
                                required
                                name="sust1"
                                type="text"
                                class="form-control mb-3"
                                placeholder=""
                            />
                        </div>
                        <div class="form-group">
                            <label for="title">Best For</label>
                            <input
                                
                                
                                required
                                name="bestfor"
                                type="text"
                                class="form-control mb-3"
                                placeholder=""
                            />
                        </div>
                        <div class="form-group">
                            <label for="title">Product Range</label>
                            <input
                                
                                
                                name="range"
                                type="text"
                                class="form-control mb-3"
                                placeholder="Enter Product Category (ie. apparel, beauty, solar)"
                            />
                        </div>
                        <div class="form-group">
                            <label for="title"> Price Range</label>
                            <input
                                
                                
                                name="price"
                                type="text"
                                class="form-control mb-3"
                                placeholder="Enter the rough price at the given link, we will automate this ASAP"
                            />
                        </div>
                        <div class="form-group">
                            <label for="title">Blurb</label>
                            <input
                                
                                
                                required
                                name="intro"
                                type="text"
                                class="form-control mb-3"
                                placeholder="Intro"
                            />
                        </div>
                        <div class="form-group">
                            <label for="title">Category</label>
                            <input
                                
                                
                                name="category"
                                type="text"
                                class="form-control mb-3"
                                placeholder="Please enter a category"
                            />
                        </div>



                        <a data-toggle="collapse" href="#collapseExample">
                            More Options
								</a>
                        <br />



                        <div class="collapse" id="collapseExample">
                            <br />
                            <div class="form-group">
                                <label for="title">Comments, if any</label>
                                <input
                                    
                                    
                                    name="comments1"
                                    type="text"
                                    class="form-control mb-3"
                                    placeholder="Comment Number"
                                />
                            </div>
                            <div class="form-group">
                                <label for="title">Votes</label>
                                <input
                                    
                                    
                                    name="upvote"
                                    type="number"
                                    class="form-control mb-3"
                                    placeholder="0"
                                />
                            </div>
                            <div class="form-group">
                                <label for="title">User</label>
                                <input
                                    
                                    
                                    name="user"
                                    type="text"
                                    class="form-control mb-3"
                                    placeholder="Username"
                                />
                            </div>
                            <div class="form-group">
                                <label for="title">Category</label>
                                <input
                                    
                                    
                                    name="category2"
                                    type="text"
                                    class="form-control mb-3"
                                    placeholder="Category 2, if any"
                                />
                            </div>
                        </div>

                        <br />
                        <hr />
                        <br />

                        <button class="btn btn-success">
                            Submit
			      		</button>

                    </div>
                </form>
                :
                <div style={{ margin: 20 }}>
                    <h4 style={{ textAlign: 'center' }}>Thank you for your submission!</h4>
                </div>
            }
        </div>
    );
}