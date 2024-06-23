import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import testimonials from './testimonials';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const itemsPerPage = isSmallScreen ? 1 : 3;

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const end = currentIndex + itemsPerPage;
    if (end > testimonials.length) {
      return [...testimonials.slice(currentIndex), ...testimonials.slice(0, end - testimonials.length)];
    }
    return testimonials.slice(currentIndex, end);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {Array(fullStars).fill().map((_, i) => <FaStar key={`full-${i}`} className="text-yellow-500" />)}
        {halfStars === 1 && <FaStarHalfAlt key="half" className="text-yellow-500" />}
        {Array(emptyStars).fill().map((_, i) => <FaStar key={`empty-${i}`} className="text-gray-400" />)}
      </>
    );
  };

  return (
    <div className='flex flex-col gap-4 px-[3rem] py-2 mb-4'>
      <div className='text-2xl text-center font-bold text-blue-800'>
        Feedback from Our Users
      </div>
      <div className='relative w-full max-w-7xl mx-auto flex justify-center items-center'>
        <div className='absolute left-[-30px] md:left-[-35px] top-1/2 transform -translate-y-1/2'>
          <button 
            onClick={handlePrev} 
            className='bg-transparent p-2 rounded-full z-10 transition duration-300 text-blue-800'
          >
            <FaChevronLeft size={35} />
          </button>
        </div>  
        <div className='w-full flex justify-center overflow-hidden'>
          <div className='flex transition-transform duration-500 ease-in-out gap-3'>
            {getVisibleTestimonials().map((testimonial) => (
              <div key={testimonial.id} className='flex-shrink-0 w-full md:w-1/3 p-4'>
                <div className='w-full h-full p-3 bg-blue-200 rounded-md shadow-md'>
                  <div className='flex items-center gap-4 p-2'>
                    <img src={testimonial.image} alt={testimonial.name} className='w-16 h-16 rounded-full' />
                    <div>
                      <p className='text-lg font-semibold text-blue-900'>{testimonial.name}</p>
                      <p className='text-sm text-blue-500'>{testimonial.position}, {testimonial.company}</p>
                      <div className='flex mt-2'>
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <p className='mt-2'>{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='absolute right-[-30px] md:right-[-40px] top-1/2 transform -translate-y-1/2'>
          <button 
            onClick={handleNext} 
            className='bg-transparent p-2 rounded-full z-10 transition duration-300 text-blue-800 hover:text-dark-blue'
          >
            <FaChevronRight size={35} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
