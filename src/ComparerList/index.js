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
                        let brandsArr = await fetchPosts()
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
                console.log(item)
        }

        const visibilityExpander = () => {

        }

        return (
                <div>
                        <div style={{ textAlign: 'center', paddingTop: 20, paddingBottom: 20 }}>
                                <h3 style={{ textAlign: 'center' }}>Where to get affordable, sustainable <u>{category}</u></h3>
                                <br />
                                <div className="myPanel">
                                        <div className="btn-group btn-group-justified " style={{ display: 'flex', flexWrap: 'wrap' }}>
                                                        <a type="button" className={"btn btn-light app_button"} style={{backgroundColor: category === 'Cleaning' ? 'lightgrey' : 'white'}} onClick={() => setCategory('Cleaning')} >
                                                        ✨<br />Cleaning
                                                </a>
                                                        <a type="button" className={"btn btn-light app_button"} style={{backgroundColor: category === 'Power' ? 'lightgrey' : 'white'}} onClick={() => setCategory('Power')} >
                                                                🔌<br />Energy
                                                </a>
                                                        <a type="button" className={"btn btn-light app_button"} style={{backgroundColor: category === 'Eyewear' ? 'lightgrey' : 'white'}} onClick={() => setCategory('Eyewear')} >
                                                                🕶<br />Eyewear
                                                </a>
                                                        <a type="button" className={"btn btn-light app_button"} style={{backgroundColor: category === 'Fashion' ? 'lightgrey' : 'white'}} onClick={() => setCategory('Fashion')} >
                                                                👖<br />Fashion
                                                </a>
                                                        <a type="button" className={"btn btn-light app_button"} style={{backgroundColor: category === 'Banking' ? 'lightgrey' : 'white'}} onClick={() => setCategory('Banking')} >
                                                                💰<br />Finance
                                                </a>
                                        </div>
                                        <div className="btn-group btn-group-justified " style={{ display: 'flex', flexWrap: 'wrap' }}>
                                                        <a type="button" className={"btn btn-light app_button"} style={{backgroundColor: category === 'Nourishment' ? 'lightgrey' : 'white'}} onClick={() => setCategory('Nourishment')}>
                                                                🌮<br />Food
                                                </a>
                                                <a type="button" className={"btn btn-light app_button"} style={{backgroundColor: category === 'Home' ? 'lightgrey' : 'white'}} onClick={() => setCategory('Home')} >
                                                        🏠<br />Home
                                                </a>
                                                <a type="button" className={"btn btn-light app_button"} style={{backgroundColor: category === 'Makeup' ? 'lightgrey' : 'white'}} onClick={() => setCategory('Makeup')} >
                                                        💄<br />Makeup
                                                </a>
                                                <a type="button" className={"btn btn-light app_button"} style={{backgroundColor: category === 'Transport' ? 'lightgrey' : 'white'}} onClick={() => setCategory('Transport')} >
                                                        🚗<br />Mobility
                                                </a>
                                                        <a type="button" className={"btn btn-light app_button"} style={{backgroundColor: category === 'Shoes' ? 'lightgrey' : 'white'}} onClick={() => setCategory('Shoes')}>
                                                                👟<br />Shoes
                                                </a>
                                                <a type="button" className={"btn btn-light app_button"} style={{backgroundColor: category === 'Generation' ? 'lightgrey' : 'white'}} onClick={() => setCategory('Generation')}>
                                                        ☀️<br />Solar
                                                </a>
                                        </div>
                                </div>
                        </div>

                        { filteredItems.map((item, index) => <ComparerWidget key={index} item={item} openModal={openModal} />) }

                        {/* <div style={{ display: filteredItems.length > 5 ? 'inline' : 'none' }}>
                                <a className="btn btn-light myPanel" onClick={visibilityExpander} >
                                        <b>Load More</b><br />˯
                                </a>
                        </div> */}

                        <div style={{ paddingTop: 100 }}>
                                <SignUp />
                        </div >

                        { adding ? 
                                <Popup>
                                        <ComparerDetail item={selectedItem} />
                                        <button onClick={(e) => {e.preventDefault(); setAdding(false)}} className="btn btn-secondary m-1">Close</button>
                                </Popup>
                        : null } 
                </div>

        )
}