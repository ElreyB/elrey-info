import React from 'react';

const Testimonials = ({data, ...props}) => {
  let testimonials

    if(data){
      const {testimonials: testimonialsArr}
      testimonials = data.testimonialsArr.map(({user,text }) => {
        return  <li key={user}>
            <blockquote>
               <p>{text}</p>
               <cite>{user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Client Testimonials</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {testimonials}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }


export default Testimonials;
