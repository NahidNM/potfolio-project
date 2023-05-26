import React from 'react';
import section from './../../../../public/img/download (1).jpeg'

const SectionHero = () => {
    return (
        <div data-aos="fade-left">
            <h1 className='my-10 text-3xl font-semibold text-center'>My Favarite Action</h1>
          <div className=" hero bg-base-200">
  <div className="flex-col gap-3 hero-content lg:flex-row">
    <img src={section} className="rounded-lg shadow-2xl md:mr-12 w-60 h-2/3"/>
    <div>
      <h1 className="text-5xl font-bold">
SPIDER-MAN!</h1>
      <p className="py-6">With amazing spider-like abilities, <br /> teenage science whiz Peter Parker fights crime and  dreams of becoming an Avenger as Spider-Man..</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SectionHero;