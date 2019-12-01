import React, { useEffect, useState } from 'react'
import SignUp from '../SignUp'
import ComparerWidget from '../ComparerWidget'
import ComparerDetail from '../ComparerDetail'
import Popup from '../PopUp'
import { fetchPosts } from '../data'


export default function ComparerList() {

        const [items, setItems] = useState([])
        const [filteredItems, setFilteredItems] = useState([])
        const [category, setCategory] = useState()
        const [selectedItem, setSelectedItem] = useState()
        const [adding, setAdding] = useState()

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
                        setCategory('Fashion')
                }
                fetchData()
        }, [])


        useEffect(() => {
                let filteredItems = items.filter((item) => item.category === category)
                setFilteredItems(filteredItems)
        }, [category])

        const openModal = (item) => {
                setAdding(true)
                setSelectedItem(item)
        }

        const visibilityExpander = () => {

        }

        return (
                <div>
                        <div style={{ textAlign: 'center', paddingTop: 20, paddingBottom: 20 }}>
                                <h3 style={{ textAlign: 'center' }}>Where To Get Affordable, Sustainable <u>{category}</u></h3>
                                <br />
                                <div className="myPanel">
                                        <div className="btn-group btn-group-justified " style={{ display: 'flex', flexWrap: 'wrap' }}>
                                                <a type="button" className={"btn btn-light app_button " + (category === 'Cleaning' ? 'active' : "")} onClick={() => setCategory('Cleaning')} >
                                                        ✨<br />Cleaning
                                                </a>
                                                        <a type="button" className={"btn btn-light app_button " + (category === 'Power' ? 'active' : "")} onClick={() => setCategory('Power')} >
                                                                🔌<br />Energy
                                                </a>
                                                        <a type="button" className={"btn btn-light app_button " + (category === 'Eyewear' ? 'active' : "")} onClick={() => setCategory('Eyewear')} >
                                                                🕶<br />Eyewear
                                                </a>
                                                        <a type="button" className={"btn btn-light app_button " + (category === 'Fashion' ? 'active' : "")} onClick={() => setCategory('Fashion')} >
                                                                👖<br />Fashion
                                                </a>
                                                        <a type="button" className={"btn btn-light app_button " + (category === 'Banking' ? 'active' : "")} onClick={() => setCategory('Banking')} >
                                                                💰<br />Finance
                                                </a>
                                                        <a type="button" className={"btn btn-light app_button " + (category === 'Nourishment' ? 'active' : "")} onClick={() => setCategory('Nourishment')}>
                                                                🌮<br />Food
                                                </a>
                                        </div>
                                        <div className="btn-group btn-group-justified " style={{ display: 'flex', flexWrap: 'wrap' }}>
                                                <a type="button" className={"btn btn-light app_button " + (category === 'Home' ? 'active' : "")} onClick={() => setCategory('Home')} >
                                                        🏠<br />Home
                                                </a>
                                                <a type="button" className={"btn btn-light app_button " + (category === 'Makeup' ? 'active' : "")} onClick={() => setCategory('Makeup')} >
                                                        💄<br />Makeup
                                                </a>
                                                <a type="button" className={"btn btn-light app_button " + (category === 'Transport' ? 'active' : "")} onClick={() => setCategory('Transport')} >
                                                        🚗<br />Mobility
                                                </a>
                                                        <a type="button" className={"btn btn-light app_button " + (category === 'Shoes' ? 'active' : "")} onClick={() => setCategory('Shoes')}>
                                                                👟<br />Shoes
                                                </a>
                                                <a type="button" className={"btn btn-light app_button " + (category === 'Generation' ? 'active' : "")} onClick={() => setCategory('Generation')}>
                                                        ☀️<br />Solar
                                                </a>
                                                <a type="button" className="btn btn-light app_button" onClick={() => setCategory('Generation')}>
                                                        &nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                </a>
                                        </div>
                                </div>
                        </div>

                        { filteredItems.map((item, index) => <ComparerWidget key={index} item={item} openModal={openModal} />) }

                        <div style={{ display: filteredItems.length > 5 ? 'inline' : 'none' }}>
                                <a className="btn btn-light myPanel" onClick={visibilityExpander} >
                                        <b>Load More</b><br />˯
                                </a>
                        </div>

                        <div style={{ paddingTop: 100 }}>
                                <SignUp />
                        </div >

                        { adding ? 
                                <Popup>
                                        <h3>Details</h3>
                                        <ComparerDetail item={selectedItem} />
                                        <br />
                                        <button onClick={(e) => {e.preventDefault(); setAdding(false)}} className="btn btn-secondary m-1">Close</button>
                                </Popup>
                        : null } 
                </div>

        )
}