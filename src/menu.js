import './style.css';
import Pic from './original.jpg';

export function showMenuPage() {
    const MenuPage = document.createElement('div');
    const contentDiv = document.getElementById('content');
    contentDiv.appendChild(MenuPage);
    
    function AddPic()
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
        MenuTextI.innerHTML+= "1- Chicken Burger";
        Item1.appendChild(MenuTextI);

        Item1.classList.add('Items');
        
        return Item1;
    }


    function MenuinfoHead()
    {
        const MenuTextH = document.createElement('div'); 
        MenuTextH.classList.add('MenuHeading');
        MenuTextH.innerHTML+= "MENU";
        return MenuTextH;
    }

    
  

    
MenuPage.appendChild(AddPic());
MenuPage.appendChild(MenuinfoHead());

}