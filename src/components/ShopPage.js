import React, {useState, useEffect} from 'react';
import ShopCard from './ShopCard'
import Search from "./Search"

function ShopPage() {

    const [shops, setShops] = useState([])

    useEffect(() => {
      getShops()
    }, [])
    
    function getShops() {
      fetch('http://localhost:3000/shops')
      .then(resp => resp.json())
      .then(data => setShops(data))
    }

    const [search, SetSearch] = useState('')

function handleSearch(e) {
  SetSearch(e.target.value)
}

const filteredShops = [...shops].filter((el) => {
  return el.name.toLowerCase().includes(search.toLowerCase()
  )})

    const mappedShops = filteredShops.map((shop) => {
        return (
        <ShopCard 
          key={shop.id}
          shop={shop}
          id={shop.id}
          />
        )
      })   

    return (
        <main>
<<<<<<< HEAD
            <h1>Cards go here</h1>
=======
            <Search 
            search={search}
            handleSearch={handleSearch}
            />
            {mappedShops}
>>>>>>> main
        </main>
    )
}

export default ShopPage