import Header from './component/header';
import Image from 'next/image'; 

export default function Home() {
  return (
    <>
    <Header/>
    <main className=' w-full flex flex-col md:flex-row '>
      <div className=' sm:ml-1 font-serif  md:w-1/2 font-medium w-full flex justify-center flex-col items-start px-6 md:pl-28 pt-8 gap-5'>

      <h1 className='text-3xl md:text-4xl leading-tight md:leading-snug'>IMPECCABLE       
      CRAFTSMANSHIP AND FINESSE
      </h1>
      <p className="text-[#A29875]  text-base md:text-lg font-medium ">
      An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
      </p>
      <div className='bg-[#A29875] rounded-md h-8 w-36 pl-7 pt-1 text-white cursor-pointer'>Explore Now</div>
    </div>
    <div className='flex justify-center items-center w-full  pt-8 md:pt-8 md:w-1/2 '>
    <Image className="  "src={"/pic.png"} alt="image" width={300} height={500}/>
    </div>
   
   
      
    </main>
   
      
    
    </>
  );
}
