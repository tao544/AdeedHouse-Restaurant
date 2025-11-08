import jollof from "../assets/menu-jolo.jpg";
import efo from "../assets/iyan.jpg";
import egusi from "../assets/Egusi-soup.jpg";
import ofada from "../assets/ofada-rice.jpg";
import amala from "../assets/amala.jpg";

import spaq from "../assets/spaqbolo.jpg"
import stirChick from "../assets/riceChick.jpg"
import grill from "../assets/grilled-fish.jpg"
import fried from "../assets/friedBbq.jpg"


import Chapman from "../assets/Chapman.jpg"
import juice from "../assets/orangejuice.jpg"
import drink from "../assets/softdrinks.jpg"
import iceCream from "../assets/icecream.jpg"
import smoothies from "../assets/smoothies.jpg"

const menuData = {
  localDishes: [
    { name: 'Jollof Rice with Grilled Chicken', price: '₦2,500', image: jollof },
    { name: 'Efo Riro with Pounded Yam', price: '₦3,000', image: efo },
    { name: 'Egusi Soup with Goat Meat', price: '₦3,200', image: egusi },
    { name: 'Ofada Rice with Sauce', price: '₦2,800', image: ofada },
    { name: 'Amala with Gbegiri & Ewedu', price: '₦2,500', image: amala },
  ],
  continentalDishes: [
    { name: 'Spaghetti Bolognese', price: '₦3,500', image: spaq },
    { name: 'Chicken Stir Fry with Rice', price: '₦3,200', image: stirChick },
    { name: 'Grilled Fish with Chips', price: '₦3,800', image: grill },
    { name: 'Fried Rice with BBQ Chicken', price: '₦3,000', image: fried },
  ],
  drinksDesserts: [
    { name: 'Chapman', price: '₦1,200', image: Chapman },
    { name: 'Fresh Fruit Juice', price: '₦1,000', image: juice },
    { name: 'Soft Drinks', price: '₦800', image: drink },
    { name: 'Ice Cream (Vanilla, Chocolate, Strawberry)', price: '₦800', image: iceCream },
    { name: 'Smoothies', price: '₦1,500', image: smoothies },
  ],
};


export default menuData;

