import React from 'react';
import './Review.css';
import review1 from '../../images/section/chris-liverani-HUJDz6CJEaM-unsplash-2.jpg'

const Review = () => {
    return (
        <div className='container'>
            <h2 className='text-center'>Our Review Part</h2>
            <div className="container px-4">
  <div className="row gx-5">
    <div className="col">
     <div className="p-3 border bg-light">
     <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Customer Review 1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      I ordered a Radiator for my car. It was a simple process in which I was able to purchase it through linking to my Google, Facebook account, or create an account. I entered my vehicle information into their site to ensure I got the right part. When it arrived via FedEx I noticed the package was opened. Upon inspection, I noticed a slight dent. I hopped on the site and struck up a chat with Jake C. From Customer Service.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Customer Review 2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      I needed a part for my car and got online to search for it. I came across CarParts.com. They seemed to have the part I needed. I knew nothing about this online vendor so I cautiously ordered the part using PayPal. I waited two weeks and didn't see the part. I thought it might be a scam until I realized I never pressed "ORDER". Duh! Once I did, the part came in a few days and I received constant tracking reassurance from them that it was on its way until it arrived at my doorstep.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Customer Review 3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      This was my first purchase with Carparts.com. I needed a R side mirror for a Ford Escape. They had what I thought I needed, but after checking I didn't need the whole thing. I cancelled 1 of the 2 items on the order 3 hours after placing it. My credit card was adjusted for the change. I got the 1 item no problem. I even got text messages on the status of my shipping. 
      </div>
    </div>
  </div>
</div>
     </div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light">
          <img style={{width:'450px'}} className='' src={review1} alt="" />
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Review;