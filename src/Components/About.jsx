
const About = () => {
  return (
   <div className="bg-red-100">
      <section className=" bg-red-100  text-[ #663300] py-12 px-4">
        <h2 className="text-2xl font-bold  text-center">Our Vision</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto  text-[ #663300]">
          Making cooking fun and accessible for everyone, everywhere. We aim to inspire creativity in the kitchen with our diverse range of recipes.
        </p>
      </section>

     
      <section className=" py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Our Kitchen Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow transform hover:scale-105">
            <h3 className="text-xl font-bold">Blenders</h3>
            <p className="text-gray-700 mt-2">Perfect for smoothies, soups, and more.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow transform hover:scale-105">
            <h3 className="text-xl font-bold">Food Processors</h3>
            <p className="text-gray-700 mt-2">Chop, slice, and dice with ease.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow transform hover:scale-105">
            <h3 className="text-xl font-bold">Ovens</h3>
            <p className="text-gray-700 mt-2">Bake and roast to perfection.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow transform hover:scale-105">
            <h3 className="text-xl font-bold">Mixers</h3>
            <p className="text-gray-700 mt-2">Ideal for baking and mixing doughs.</p>
          </div>
        </div>
      </section>

     

      <section className="bg-[#F34E4C] text-white text-center py-12 px-4">
        <h2 className="text-2xl font-bold">What Our Users Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
          <div className="p-4 shadow-lg rounded-lg bg-red-600 hover:bg-red-500 transition-colors transform hover:scale-105">
            <p>These recipes are a game changer! So easy to follow and delicious.</p>
            <h3 className="mt-4 font-bold">- User A</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-red-600 hover:bg-red-500 transition-colors transform hover:scale-105">
            <p>I love the meal plans. They make my week so much simpler.</p>
            <h3 className="mt-4 font-bold">- User B</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-red-600 hover:bg-red-500 transition-colors transform hover:scale-105">
            <p>Fantastic tips and tricks. My cooking has improved so much!</p>
            <h3 className="mt-4 font-bold">- User C</h3>
          </div>
        </div>
      </section>

    

      <footer className="bg-[#F34E4C] text-white text-center py-8">
        <p>&copy; 2024 Your Recipe App. All rights reserved. Made By Binary Boats⛵</p>
      </footer>
   

    </div>
  )
}




  


export default About
