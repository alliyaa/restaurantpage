import './style.css';
import Pic from './pic.jpg';

export function showHomePage() {
const HomePage = document.createElement('div');
const contentDiv = document.getElementById('content');
contentDiv.appendChild(HomePage);

function AddPic()
{
    const picDiv = document.createElement('div');
    picDiv.classList.add('HomePic');
    const myPic = new Image();
    myPic.src = Pic;
    picDiv.appendChild(myPic);
    return picDiv;
}


function RestaurantInfo()
{
    const textDiv = document.createElement('div'); 
    textDiv.classList.add('HomeTextDiv');
    textDiv.innerHTML+= "Our home page has a summary of all our pages, our menu page has our items and our contact page <br> \
    has our delivery pages. At our restaurant, crafting the perfect burger is a culinary art form  and our <br> \
    chef's edition is the pinnacle of flavor and satisfaction. It all begins with meticulously selected, top <br> \
    quality ingredients. Our chefs handpick the finest cuts of beef, ensuring that each patty is juicy and <br> \
    tender.As the patties sizzle on the grill, a symphony of aromas fills the air, tantalizing taste buds <br> \
    even before the first bite. But it doesn't stop there our secret sauce, a carefully guarded recipe, adds <br>\
    a burst of tangy richness that elevates each bite. Crisp lettuce, ripe tomatoes, and fresh onions provide <br>\
    the perfect balance of textures and flavors, while a slice of melted cheese crowns this masterpiece <br>\
    binding it all together. Finally, nestled between perfectly toasted brioche buns, the burger is served <br>\
    with a side of crispy fries, completing a culinary experience that leaves diners craving more. <br>\
    To further enhance the indulgence, our chef's edition burger is served with a side of homemade </br>\
    pickles, adding a delightful tanginess that complements the rich, savory flavors of the burge </br>\
    Each bite is a harmonious blend of savory, sweet, and umami, a testament to the skill and passion </br>\
    of our chefs  a symphony of flavors in every bite. A burger for everyone! Come and try Today!";
    return textDiv;
}


HomePage.appendChild(AddPic());
HomePage.appendChild(RestaurantInfo());
}

