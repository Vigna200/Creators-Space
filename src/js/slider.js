const testimonials = [
    {
        img: 'assets/images/sumit-r.jpg',
        name: 'Sumit R.',
        position: 'Founding Member & CEO @ Creator-Space',
        message: 'Sumit Lorem ipsum doner sit amet.Lorem ipsum doner sit amet.Lorem ipsum doner sit amet.Lorem ipsum doner sit amet.Lorem ipsum doner sit amet'
    },
    {
        img: 'assets/images/userIcon_Square.png',
        name: 'Himanshu S.K.',
        position: 'Founding Member @ Creator-Space',
        message: 'Himanshu Lorem ipsum donor sit amet.Lorem ipsum doner sit amet.Lorem ipsum doner sit amet.Lorem ipsum doner sit amet.Lorem ipsum doner sit amet.Lorem ipsum doner sit amet'
    },
    {
        img: 'assets/images/anurag-v.jpg',
        name: 'Anurag V.',
        position: 'Founding Member & Dev @ Creator-Space',
        message: 'Anurag Lorem ipsum donor sit amet.Lorem ipsum doner sit amet.Lorem ipsum doner sit amet.Lorem ipsum doner sit amet.Lorem ipsum doner sit amet.Lorem ipsum doner sit amet'
    },
    {
        img: 'assets/images/userIcon_Square.png',
        name: 'Anuj S.',
        position: 'Founding Member & CTO @ Creator-Space',
        message: 'Lorem ipsum donor sit amet.Lorem ipsum doner sit amet.Lorem ipsum doner sit amet.Lorem ipsum doner sit amet.Lorem ipsum doner sit amet.Lorem ipsum doner sit amet'
    },
    {
        img: 'assets/images/userIcon_Square.png',
        name: 'Mr. PQR 😅',
        position: 'Miscellaneous @ Creator-Space',
        message: 'Lorem ipsum donor sit amet.Lorem ipsum doner sit amet.Lorem ipsum doner sit amet.Lorem ipsum doner sit amet.Lorem ipsum doner sit amet.Lorem ipsum doner sit amet'
    }
  ];

  let currentTestimonial = 1;

  function displayTestimonial(index) {

    let testimonialLeft;
    let testimonialRight;

    if(index == 0){
      testimonialLeft = testimonials[testimonials.length-1];  
    }
    else{
      testimonialLeft = testimonials[index-1];
    }

    if(index == testimonials.length-1){
      testimonialRight = testimonials[0];
    }
    else{
      testimonialRight = testimonials[index+1];
    }
    
    document.getElementById('testimonial-img-left').src  = `${testimonialLeft.img}`;
    document.getElementById('testimonial-message-left').innerText = `"${testimonialLeft.message}"`;
    document.getElementById('testimonial-name-left').innerText = testimonialLeft.name;
    document.getElementById('testimonial-position-left').innerText = testimonialLeft.position;
    
    const testimonialMid = testimonials[index];
    document.getElementById('testimonial-img-mid').src  = `${testimonialMid.img}`;
    document.getElementById('testimonial-message-mid').innerText = `"${testimonialMid.message}"`;
    document.getElementById('testimonial-name-mid').innerText = testimonialMid.name;
    document.getElementById('testimonial-position-mid').innerText = testimonialMid.position;

    document.getElementById('testimonial-img-right').src  = `${testimonialRight.img}`;
    document.getElementById('testimonial-message-right').innerText = `"${testimonialRight.message}"`;
    document.getElementById('testimonial-name-right').innerText = testimonialRight.name;
    document.getElementById('testimonial-position-right').innerText = testimonialRight.position;
  }

  document.getElementById('testimonial-btn-right').addEventListener('click', () => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      displayTestimonial(currentTestimonial);
  });

  document.getElementById('testimonial-btn-left').addEventListener('click', () => {
    if (currentTestimonial === 0) {
        currentTestimonial = testimonials.length - 1;
    } else {
        currentTestimonial -= 1;
    }
    
    displayTestimonial(currentTestimonial);
  });

  displayTestimonial(currentTestimonial);