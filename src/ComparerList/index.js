import React, { useEffect, useState } from 'react'
import SignUp from '../SignUp'
import ComparerWidget from '../ComparerWidget'
import { fetchPosts } from '../data'


export default function ComparerList() {

        const [items, setItems] = useState([])
        const [filteredItems, setFilteredItems] = useState([])
        const [category, setCategory] = useState()

        useEffect(() => {
                const fetchData = async () => {
                        let data = await fetch('https://superjuice-1cb15.firebaseio.com/.json')
                        let json = await data.json()
                        let brands = json.brands
                        let brandsArr = []
                        for (var key of Object.keys(brands)) {
                                brandsArr.push(brands[key])
                        }
                        setItems(brandsArr)
                        console.log(brandsArr)
                        setCategory('Cleaning')
                }
                fetchData()
        }, [])


        useEffect(() => {
                let filteredItems = items.filter((item) => item.category === category)
                setFilteredItems(filteredItems)
        }, [ category ])

        const visibilityExpander = () => {

        }

        return (
                <div>
                        <div style={{ textAlign: 'center', paddingTop: 20, paddingBottom: 20 }}>
                                <h3 style={{ textAlign: 'center' }}>Where To Get Affordable, Sustainable </h3>
                                <br />
                                <div class="btn-group btn-group-justified myPanel" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                        <a type="button" class="btn btn-default app_button" onClick={() => setCategory('Cleaning')} >
                                                ✨<br />Cleaning
                                                </a>
                                        <a type="button" class="btn btn-default app_button" onClick={() => setCategory('Power')} >
                                                🔌<br />Energy
                                                </a>
                                        <a type="button" class="btn btn-default app_button" onClick={() => setCategory('Eyewear')} >
                                                ️🕶<br />Eyewear
                                </a>
                                        <a type="button" class="btn btn-default app_button" onClick={() => setCategory('Fashion')} >
                                                👖<br />Fashion
                                </a>
                                        <a type="button" class="btn btn-default app_button" onClick={() => setCategory('Banking')} >
                                                💰<br />Finance
                                        </a>
                                        <a type="button" class="btn btn-default app_button" onClick={() => setCategory('Nourishment')}>
                                                🌮<br />Food
                                </a>
                                        <a type="button" class="btn btn-default app_button" onClick={() => setCategory('Home')} >
                                                🏠<br />Home
                                </a>
                                        <a type="button" class="btn btn-default app_button" onClick={() => setCategory('Makeup')} >
                                                💄<br />Makeup
                                </a>
                                        <a type="button" class="btn btn-default app_button" onClick={() => setCategory('Transport')} >
                                                🚗<br />Mobility
                                </a>
                                        <a type="button" class="btn btn-default app_button" onClick={() => setCategory('Shoes')}>
                                                👟<br />Shoes
                                </a>
                                        <a type="button" class="btn btn-default app_button" onClick={() => setCategory('Generation')}>
                                                ☀️<br />Solar
                                </a>
                                </div>
                        </div>





                        {
                                filteredItems.map((item, index) => <ComparerWidget key={index} item={item} />) 
                        }




                        <div style={{ display: filteredItems.length > 5 ? 'inline' : 'none'}}>
                                <a class="btn btn-default myPanel" onClick={visibilityExpander} >
                                        <b>Load More</b><br />˯
                                </a>
                        </div>


                        < div style={{ paddingTop: 100 }}>
                                <SignUp />
                        </div >

                        <div id="myModal" class="modal fade" tabindex="-1" role="dialog" >
                                <div class="modal-dialog modal-lg" role="document">
                                        <div class="modal-content">
                                                {/* <ComparerDetails selectedComponent={props.match.id} /> */}
                                        </div>
                                </div >
                        </div >
                </div>

        )
}