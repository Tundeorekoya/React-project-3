import React, { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import items from "./data";

const allCategories = ['all',...new Set(items.map((item)=>item.category))]

function App() {
  const [categories, setCategories] = useState( allCategories )
  const [menuItems, setMenuItems] = useState( items ) 

  const filterItem = (category) =>{
    if (category === "all"){
      setMenuItems(items)
      return;
    }
    const newItem = items.filter((item) => item.category === category)
      setMenuItems(newItem)

  }
  return(
    <main>
    <section className="menu section">
      <div className="title">
        <h2>our Menu</h2>
        <div className="underline"></div>
        </div>
        <Categories categories={categories} filter={filterItem} />
        <Menu item={menuItems}/>
    </section>
    </main>
  )

 
}

export default App;
