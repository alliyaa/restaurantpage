import './style.css';
import Pic from './pic.jpg';


function AddPic()
{
  const picDiv = document.getElementById('content');
  const myPic = new Image();
  myPic.src = Pic;
  picDiv.appendChild(myPic);

  return picDiv;
}

document.body.appendChild(AddPic());


function RestaurantInfo()
{
    const Rhome = document.getElementById('content');
    Rhome.classList.add('Rhome');
    Rhome.innerHTML+=" I am a potato";
}
document.body.appendChild(RestaurantInfo());
