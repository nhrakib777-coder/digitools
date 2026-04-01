import React from 'react';

const Explore = () => {
  return (
    <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white py-16 my-20  text-center space-y-6'>
     <div className='max-w-[1200px] mx-auto space-y-4 px-4'>
       <h2 className='text-4xl'>Ready to Transform Your Workflow?</h2>
      <p >Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
      <div className='flex  justify-center items-center gap-3'>
        <button className='bg-white text-purple-600 hover:bg-gray-200 font-bold rounded-full py-2 px-4 '>Explore Products</button>
        <button className='bg-none border border-white rounded-full hover:bg-white hover:text-purple-600 py-2 px-4'>View Pricing</button>
      </div>
      <p>14-day free trial • No credit card required • Cancel anytime</p>
     </div>
    </div>
  );
};

export default Explore;