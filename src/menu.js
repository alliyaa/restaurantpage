import './style.css';
import Pic from './original.jpg';
import Pic2 from './spicy.jpeg';
import Pic3 from './kids.jpg';
import Pic4 from './veg.jpeg';

export function showMenuPage() {
    const MenuPage = document.createElement('div');
    const contentDiv = document.getElementById('content');
    contentDiv.appendChild(MenuPage);

    
    function Item1()
    {
        const Item1 = document.createElement('div');
        const picDiv = document.createElement('div');
        picDiv.classList.add('MenuPic');
        const myPic = new Image();
        myPic.src = Pic;
        picDiv.appendChild(myPic);
        Item1.appendChild(picDiv);

        const MenuTextI = document.createElement('div'); 
        MenuTextI.classList.add('MenuItems');
        MenuTextI.innerHTML+= " <h3> 1-  Classic Chicken Burger $50  </h3> <br>\
        Indulge in our Classic Burger: a culinary marvel featuring a perfectly grilled prime beef <br>\
         patty nestled in artisanal brioche, accompanied by crisp lettuce, ripe tomato, house-made pickles, </br>\
         and savory aioli. A symphony of flavors awaits, delivering a delightful balance of tradition and </br>\
        sophistication in every bite.";
        Item1.appendChild(MenuTextI);


        Item1.classList.add('Items');
        
        return Item1;
    }

     
    function Item2()
    {
        const Item2 = document.createElement('div');
        const picDiv = document.createElement('div');
        picDiv.classList.add('MenuPic');
        const myPic = new Image();
        myPic.src = Pic2;
        picDiv.appendChild(myPic);
        Item2.appendChild(picDiv);

        const MenuTextI = document.createElement('div'); 
        MenuTextI.classList.add('MenuItems');
        MenuTextI.innerHTML+= " <h3> 2- Ultra Spicy Burger $55  </h3> <br>\
        Experience an explosion of heat with our Ultra Spicy Burger: a fiery blend of flame-grilled prime beef, <br>\
        jalapenos, pepper jack cheese, and chipotle aioli. Infused with ghost peppers and habanero relish, each <br>\
        bite delivers an intense burst of flavor, perfectly balanced for those craving boldness and adventure.";
        Item2.appendChild(MenuTextI);


        Item2.classList.add('Items');
        
        return Item2;
    }


    function Item3()
    {
        const Item3 = document.createElement('div');
        const picDiv = document.createElement('div');
        picDiv.classList.add('MenuPic');
        const myPic = new Image();
        myPic.src = Pic3;
        picDiv.appendChild(myPic);
        Item3.appendChild(picDiv);

        const MenuTextI = document.createElement('div'); 
        MenuTextI.classList.add('MenuItems');
        MenuTextI.innerHTML+= " <h3> 3-  Package of 3 Kids' Cheeseburger  $30 </h3> <br>\
        Treat your little ones to our Kids' Cheeseburger: a delightful classic with a twist. <br>\
        Featuring a tender beef patty, melted cheddar cheese, and a soft bun, this burger is <br>\
        perfect for young appetites. Served with a side of smile";
        Item3.appendChild(MenuTextI);


        Item3.classList.add('Items');
        
        return Item3;
    }

    
    function Item4()
    {
        const Item4 = document.createElement('div');
        const picDiv = document.createElement('div');
        picDiv.classList.add('MenuPic');
        const myPic = new Image();
        myPic.src = Pic4;
        picDiv.appendChild(myPic);
        Item4.appendChild(picDiv);

        const MenuTextI = document.createElement('div'); 
        MenuTextI.classList.add('MenuItems');
        MenuTextI.innerHTML+= "<h3> 4- Veggie Burger  $35 </h3> <br>\
        Indulge in our Veggie Burger: a nutritious twist on the classic. Made with a flavorful blend of black beans, <br>\
        quinoa, and veggies, it's packed with protein and fiber. Served on a soft bun with crisp lettuce, juicy <br>\
        tomato, and creamy avocado slices, it's a  delicious and satisfying option for young appetites.";
        Item4.appendChild(MenuTextI);


        Item4.classList.add('Items');
        
        return Item4;
    }

    

MenuPage.appendChild(Item1());
MenuPage.appendChild(Item2());
MenuPage.appendChild(Item3());
MenuPage.appendChild(Item4());


}