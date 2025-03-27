import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black">

      <div className="text-white py-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto items-center justify-between">

          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-extrabold">
              Our Expertise In <span className="text-teal-400">Marketing Solutions</span>
            </h2>
            <p className="text-gray-300 text-lg mt-3">
              We Execute Your Ideas From Start to Finish.
            </p>
            <button className="mt-6 bg-white text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition">
              Start Now
            </button>
          </div>


          <div className="mt-10 lg:mt-0 flex justify-center">
            <img src="banner-img.png" alt="Marketing Solutions" className="max-w-xs lg:max-w-md" />
          </div>
        </div>
      </div>


      <div className="container text-center py-16 px-4">

        <h1 className="text-white text-4xl md:text-4xl font-extrabold">
          Lorem Ipsum <span className="text-teal-400">Dummy Text</span> Demo
        </h1>
        <div className="w-40 h-1 bg-teal-400 mx-auto my-4"></div>
        <p className="text-gray-300 text-lg">Lorem Ipsum is simply dummy text of the printing</p>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

          <div className="bg-white rounded-lg shadow-lg overflow-hidden text-left">
            <img src="demo-img-1.png" alt="Tech Image" className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Web & Mobile Application</h3>
              <p className="text-teal-500 font-bold">DEMO</p>
            </div>
          </div>


          <div className="bg-white rounded-lg shadow-lg overflow-hidden text-left">
            <img src="demo-img-1.png" alt="Tech Image" className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Web & Mobile Application</h3>
              <p className="text-teal-500 font-bold">DEMO</p>
            </div>
          </div>


          <div className="bg-white rounded-lg shadow-lg overflow-hidden text-left">
            <img src="demo-img-1.png" alt="Tech Image" className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Web & Mobile Application</h3>
              <p className="text-teal-500 font-bold">DEMO</p>
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-2 bg-[url(/story-img.jpg)] bg-cover relative h-150">
        <div className="absolute top-1/2 left-5 transform -translate-y-1/2 max-w-3xl p-5">
          <h5 className="text-primary-foreground text-md pb-2 font-semibold text-xl">Story Of <span className="text-teal-400 font-bold">NEO</span> DIGITAL </h5>
          <h3 className="text-primary-foreground text-md pb-2 font-semibold text-3xl">We have the</h3>
          <p className="text-primary-foreground text-md pb-2 font-semibold">NEO DIGITAL is a team of talented developers committed to affordable, quality, full-scope development services, A to Z!</p>
          <p className="text-primary-foreground text-md pb-2 font-semibold"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          {/* <button className="bg-white text-black text-md font-semibold rounded-3xl p-3">Start Now</button> */}
        </div>

        <div className=""></div>

      </div>


      <div className="py-16 px-4">

        <h1 className="text-white text-4xl md:text-4xl font-extrabold text-center">
          Lorem Ipsum <span className="text-teal-400">Dummy Text</span> Demo</h1>
        <div className="w-40 h-1 bg-teal-400 mx-auto my-4"></div>
        <p className="text-gray-300 text-lg text-center">Lorem Ipsum is simply dummy text of the printing</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
          <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto border-b-4 border-green-500">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 flex items-center justify-center bg-teal-100 rounded-full">
                <span className="text-teal-600 text-xl font-semibold">01</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Lorem Ipsum Dummy Text</h2>
            <p className="mt-4 text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto border-b-4 border-green-500">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 flex items-center justify-center bg-teal-100 rounded-full">
                <span className="text-teal-600 text-xl font-semibold">02</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Lorem Ipsum Dummy Text</h2>
            <p className="mt-4 text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
          </div>


          <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto border-b-4 border-green-500">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 flex items-center justify-center bg-teal-100 rounded-full">
                <span className="text-teal-600 text-xl font-semibold">03</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Lorem Ipsum Dummy Text</h2>
            <p className="mt-4 text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

      </div>


      <div className="bg-black text-center py-16 relative">

        <div className="absolute inset-0 bg-[url('https://source.unsplash.com/1600x900/?stars,space')] opacity-20"></div>

        <div className="relative z-10">
          <h1 className="text-white text-4xl font-extrabold">
            Lorem Ipsum <span className="text-teal-400">Dummy Text</span> Demo
          </h1>
          <p className="text-gray-300 mt-2">Lorem Ipsum is simply dummy text of the printing</p>

          <button className="mt-6 bg-teal-500 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-teal-600 transition">
            Enquiry Now
          </button>
        </div>
      </div>




    </div>








  );
}
