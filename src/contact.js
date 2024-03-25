import './style.css';
import Pic from './restr.jpg';
import insta from './insta.jpeg';
import x from './x.jpeg';
import tiktok from './tt.png';

export function showContactPage() {
    const ContactPage = document.createElement('div');
    const contentDiv = document.getElementById('content');
    contentDiv.appendChild(ContactPage);

    function RestaurantInfo()
    {
        const containerdiv =document.createElement('div');
        containerdiv.classList.add('ContactPage')

        const picDiv = document.createElement('div');
        picDiv.classList.add('ContactPic');
        const myPic = new Image();
        myPic.src = Pic;
        picDiv.appendChild(myPic);
        containerdiv.appendChild(picDiv);

        const textDiv1 = document.createElement('div'); 
        textDiv1.classList.add('HeaderContact');
        textDiv1.innerHTML+= "Contact us On";
        containerdiv.appendChild(textDiv1);

        const instaPic = document.createElement('div');
        instaPic .classList.add('instaC');
        const Insta = new Image();
        Insta.src = insta;
        instaPic.appendChild(Insta);
        containerdiv.appendChild(instaPic);


        const xPic = document.createElement('div');
        xPic .classList.add('xC');
        const X = new Image();
        X.src = x;
        xPic.appendChild(X);
        containerdiv.appendChild(xPic);

        const ttPic = document.createElement('div');
        ttPic .classList.add('tC');
        const T = new Image();
        T.src = tiktok;
        ttPic.appendChild(T);
        containerdiv.appendChild(ttPic);

       
      
       

        return containerdiv;
    }

    function feedback()
   {
    const feedback = document.createElement('div');
    feedback.classList.add('fd');
    feedback.innerHTML+= "We're grateful for your interest in our Restaurant  Your feedback <br>\
     means the world to us. As passionate burger enthusiasts, we're committed to creating <br>\
     memorable experiences for every guest.Whether you're reaching out with a question, <br>\
     suggestion, feedback or just want to share your thoughts, know that your voice matters. <br>\
     Our team is here to listen and ensure that every bite and item exceeds your expectations. <br>\
     Thank you for choosing us and we look forward to hearing from you soon!";
    
    return feedback;
   
   }
    ContactPage.appendChild(RestaurantInfo());
    ContactPage.appendChild(feedback());
  
  
    }
    
    