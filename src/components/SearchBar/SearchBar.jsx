import React, { useState } from 'react';
import { assets } from '../../assets/assets'
import './SearchBar.css';

const foodItems = [
  { id: 1, name: "Greek Salad" },
  { id: 2, name: "Veg salad" },
  { id: 3, name: "Clover Salad" },
  { id: 4, name: "Chicken Salad" },
  { id: 5, name: "Lasagna Rolls" },
  { id: 6, name: "Peri Peri Rolls" },
  { id: 7, name: "Chicken Rolls" },
  { id: 8, name: "Veg Rolls" },
  { id: 9, name: "Ripple Ice Cream" },
  { id: 10, name: "Fruit Ice Cream" },
  { id: 11, name: "Jar Ice Cream" },
  { id: 12, name: "Vanilla Ice Cream" },
  { id: 13, name: "Chicken Sandwich" },
  { id: 14, name: "Vegan Sandwich" },
  { id: 15, name: "Grilled Sandwich" },
  { id: 16, name: "Bread Sandwich" },
  { id: 17, name: "Cup Cake" },
  { id: 18, name: "Vegan Cake" },
  { id: 19, name: "Butterscotch Cake" },
  { id: 20, name: "Sliced Cake" },
  { id: 21, name: "Garlic Mushroom" },
  { id: 22, name: "Fried Cauliflower" },
  { id: 23, name: "Mix Veg Pulao" },
  { id: 24, name: "Rice Zucchini" },
  { id: 25, name: "Cheese Pasta" },
  { id: 26, name: "Tomato Pasta" },
  { id: 27, name: "Creamy Pasta" },
  { id: 28, name: "Chicken Pasta" },
  { id: 29, name: "Buttter Noodles" },
  { id: 30, name: "Veg Noodles" },
  { id: 31, name: "Somen Noodles" },
  { id: 32, name: "Cooked Noodles" }
];

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const filteredItems = foodItems.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-wrapper">
      <button className="search-toggle" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? assets.basket_icon : assets.search_icon}
      </button>

      {isVisible && (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search food..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <div className="search-results">
            {filteredItems.length > 0 ? (
              filteredItems.map(item => <p key={item.id}>{item.name}</p>)
            ) : (
              <p>No food found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;