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
    textDiv.innerHTML+= "Our home page has a summary of all our pages, our menu page has our items <br> \
    and our contact page has our delivery pages. At our restaurant, crafting THE burger <br> \
    is a culinary art form  and our chef's edition is the pinnacle of flavor and satisfaction. <br> \
    It all begins with meticulously selected, top-quality ingredients. Our chefs handpick the <br> \
    finest cuts of beef, ensuring that each patty is juicy and tender. As the patties sizzle <br> \
    on the grill, a symphony of aromas fills the air, tantalizing taste buds even before the  <br> \
     first bite.  Crisp lettuce, ripe tomatoes, and fresh onions provide the perfect balance <br> \
    of textures and flavors, while a slice of melted cheese crowns this masterpiece binding <br> \
    it all together. Finally, nestled between perfectly toasted brioche buns, the burger is <br> \
    served with a side of crispy fries, completing a culinary experience that leaves diners <br> \
    craving more. A burger for everyone & anyone! Come and try Today! Bring your Friends"; 
    return textDiv;
}


HomePage.appendChild(AddPic());
HomePage.appendChild(RestaurantInfo());
}

