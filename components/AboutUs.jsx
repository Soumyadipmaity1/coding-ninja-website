import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black max-w-full py-20">
      
      <div className="text-center p-7">
      <h1 className="sm:text-5xl text-4xl font-bold event-title text-center mb-20 sm:mb-9 text-orange-500">About Us</h1>
      <p className=" text-gray-400 mt-2 text-xl"> Earn through challenges, track your growth, and stand out to recruiters with ratings, feedback, and insights.</p>
      </div>
      <div className="flex md:flex-row flex-col text-center justify-center items-center gap-9 ">
        <div className="bg-black box-border size-80 border-4 p-4 rounded-xl text-white hover:text-orange-500 hover: border-gray-300 hover:border-orange-500 transition delay-150 duration-300 ease-in-out content-between hover:shadow-2xl">
          <h3 className="text-2xl font-bold p-4 text-left">LEARN</h3>
          <p className="text-left"> Experience seamless learning with problem-solving modules and awards.</p>
          
             <p className="text-left">Access curated learning resources, interactive quizzes, and real-world challenges tailored to boost your concepts.</p>
          
        </div>
        <div className="bg-black box-border size-80 border-4 p-4 rounded-xl text-white hover:text-orange-500  border-gray-300 hover:border-orange-500 transition delay-150 duration-300 ease-in-out hover:shadow-2xl">

        <h3 className="font-bold p-4 text-2xl text-left">EXCEL</h3>
        <p className="text-left ">Track your skill level and make meaningful progress for you to grow.</p>
        <p className="text-left ">Gain insights from performance analytics, receive constructive feedback to push your limits.</p>
          
        </div>
        <div className="bg-black box-border size-80 border-4 p-4 rounded-xl text-white hover:text-orange-500 border-gray-300 hover:border-orange-500 transition delay-150 duration-300 ease-in-out hover:shadow-2xl">
        <h3 className="text-2xl font-bold p-4 text-left">STANDOUT</h3>
        <p className="text-left">Stand out to recruiters, showcase ratings, get feedback interview insights.</p>
        <p className="text-left">
        Connect with industry leaders, receive mentorship, and access exclusive job opportunities.
        </p>
        
        </div>
      </div>
    
    </main>
    
  );
}
