import React from 'react'

const Home = () => {
  return (
    <div className='flex h-[90vh] relative items-center justify-center overflow-hidden  bg-red-100 '>
              {/* <img className='absolute w-[100%] h-[100%] z-[0]' src="https://i.pinimg.com/564x/6c/3f/63/6c3f63dbeca4fff8c8980011d89055e8.jpg" alt=""  /> */}

        <div className='w-[50%]  h-[80%] flex items-left justify-end  py-[3%] px-20 flex-col gap-4'>
           <h1 className='text-[100px] text-shadow-2xl text-[#F34E4C] w-[80%] leading-[100px]   text-bold text-[ #663300] '>Flavor Fusion</h1>
            <h2 className='text-3xl w-[80%] mt-[2%] text-bold text-[ #663300] '>Crafting Culinary Delights, One Recipe at a Time.</h2>
            <p className='w-[80%] text-[#333333]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio doloribus architecto quaerat perspiciatis labore. Ut impedit culpa deserunt officiis sint?</p>
            <button className='py-3 mt-[2.5%] w-[20%] rounded-xl text-white  bg-[#F34E4C] '
             style={{
              boxShadow:'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
            }}>Get Started</button>
        
        </div>
        <div className='relative w-[50%] h-[100%] flex items-center justify-center'>
          <img className='scale-[0.8] left-[-20%] z-[1] top-[30%] absolute' src="../b82a39c07f7abaca8eb5e58660db33dc-removebg-preview.png" alt="" />
           <img  className='scale-[0.8] left-[30%] z-[1] top-[20%] absolute' src="../6d7d886ae4665f1e349191526ffac45f-removebg-preview.png" alt="" />
        <img className='scale-[1.2] left-[0%] z-[0] top-[-2%] absolute' src="../e6b52f005370f32dabbf530ebe62851e-removebg-preview.png" alt=""  />
      <img className='scale-[0.7] left-[43%] z-[1] top-[15%] absolute' src="../05eb8e7ded3db5a397ef8c6078e57e48-removebg-preview.png" alt=""  />
        </div>
      
    </div>
  )
}

export default Home
