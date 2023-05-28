import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

const Home: NextPage = () => {
  const router = useRouter();

  const [email_value,setEmail_value]=useState(false);
  return (
    <>
      <div className="h-[60%] w-full sm:h-[70%] md:h-[70%] lg:h-[90%]">
        <img
          src="/netflix.jpg"
          className="absolute object-cover h-[60%]  sm:h-[70%] w-full lg:h-[90%]  top-0 z-0 brightness-50"
        />
        <nav className="flex justify-between mt-2 z-30 relative">
          <div className="logo ml-[5%]">
            <Image src="/logo.svg" height={30} width={30} alt="logo" />
          </div>
          <div className="sign_up mr-[5%]">
            <button className="h-14 w-32 rounded-lg bg-red-700 text-white font-bold text-lg border-2" >
              Sign Up
            </button>
          </div>
        </nav>
        <div className="text-center my-[20%] sm:my-[15%] md:my-[15%] lg:my-[10%] text-white z-30 relative">
          <h1 className="font-semibold text-2xl w-[90%] text-center ml-4 sm:text-4xl sm:w-[70%] sm:ml-28 lg:text-7xl lg:ml-52 shadow-transparent ">
            Ultimate Movies ,TV Shows and More.
          </h1>
          <p className="mt-2 font-light sm:text-lg lg:text-[1.65rem] lg:mr-8 lg:mt-8">
            Watch Anywhere , Cancel Anytime
          </p>
          <p className="mt-10 w-[70%] sm:w-[65%] font-semibold ml-16 sm:text-lg sm:ml-32 lg:ml-64">
            Ready To Watch ? Enter Your Email To Create Or Start Membership
          </p>
          <div className="sm:flex lg:flex z-30">
            <input type="email" id="email" placeholder=" " required onClick={()=>{setEmail_value(true)}}
            className="w-[80%] text-black mt-4 h-[40px] font-semibold sm:w-[50%] sm:h-[45px] sm:ml-32 lg:ml-[29%] lg:w-[35%] lg:h-14 peer" />
            <label htmlFor="" className={`absolute ${email_value ? '-translate-y-1 sm:-translate-y-2 lg:-translate-y-3 text-sm' : 'translate-y-0'} text-neutral-500 lg:left-[30%] left-[15%] sm:left-[20%] font-bold text-lg mt-5 sm:mt-6 lg:mt-7 peer-focus:text-sm peer-focus:-translate-y-1 peer-active:-translate-y-1 sm:peer-focus:-translate-y-2 lg:peer-focus:-translate-y-3 peer-focus:transition transition`} >Email</label>
            
            <button className="h-12 w-32  bg-red-700 text-white font-bold text-lg mt-[15px] mb-2 lg:h-14"
            onClick={()=>{
              let x=document.getElementById('email');
              if(x?.textContent=='')
              {
                router.push('/signup');
              }
              else{
                router.push('/signin')
              }

            }}>
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Video TV */}
      <div className="bg-black absolute top-[60%] lg:top-[80%] w-full lg:mt-14 ">
        <div className="bg-gray-900 border-4 border-[#222] w-full" />
        <div
          className="lg:flex">
          <div className="text-white">
            <h1 className="ml-[30%] mt-4 sm:text-2xl sm:ml-[36%] sm:font-semibold lg:text-5xl lg:ml-[30%] lg:mt-24 ">
              Enjoy on your TV.
            </h1>
            <p className=" mt-2 text-center text-sm font-semibold sm:text-lg sm:mt-4 sm:w-[70%] sm:ml-[15%] lg:text-2xl lg:ml-[5%] lg:mt-6 lg:w-full ">
              Watch on Smart Playstation,Xbox,Chromecast,Apple TV,Blu-ray
              Players and more.
            </p>
          </div>
          <div>
            <img
              src="/tv.png"
              className="brightness-50 h-[70%] w-[100%] sm:w-[80%] sm:ml-16 lg:scale-125 lg:mt-10 lg:mr-16 relative z-50 "
            />
          </div>
        </div>
        <video src="/netflix_video.mp4" width={310} height={300} autoPlay controls loop muted className="absolute top-40 sm:top-56 lg:top-24  left-[13%] z-0 sm:w-[70%] sm:ml-[30px]   lg:left-[57.5%] lg:w-[34%]"></video>
        <div className='bg-gray-900 border-4 border-[#222] w-full' />

        {/* download */}
        <div className="lg:flex-col-reverse lg:mt-32 lg:mb-24">
          <div className="mt-16 sm:mt-24 lg:mt-24 lg:ml-8 lg:absolute lg:left-52">
          <h1 className="text-white text-2xl  m-auto w-[90%] text-center mt-4 sm:text-4xl sm:w-[70%] sm:mt-6 lg:text-4xl lg:w-[80%] lg:mt-20 lg:ml-[350px]" >Download Your Show To Watch Ofline</h1>
          <p className="text-white text-lg text-center mt-2 sm:text-2xl sm:mt-4 lg:text-2xl lg:mt-6 lg:ml-[45%] lg:w-[60%]" >Save your favorite easily and always have something to watch</p>
          </div>
          <img src="/mobile.jpg" className=" sm:ml-14 mb-24" />
          <div className="flex rounded-lg h-20 w-[70%] -mt-32 sm:-mt-44 lg:-mt-52 sm:h-28 sm:w-[50%] sm:left-[180px]  sm:justify-between border-2 absolute left-[15%]  bg-black lg:h-32 lg:w-[30%]  lg:left-[150px]">
          <img src="/boxshot.png" className="fill-transparent m-2" />
          <div className="ml-4 sm:mt-2 lg:mt-4 ">
            <h1 className="text-white mt-2 sm:text-2xl sm:mt-3">Stranger Things</h1>
            <h1 className="text-blue-900 font-bold shadow-lg">Downlaoding ...</h1>
            </div>
            <img src="/icon.gif" className="mb-2 brightness-50" />
            
          </div >
        </div>
        <div className='bg-gray-900 border-4 border-[#222] w-full' />

        {/* Watch everywhere */}

        <div className="text-white mt-20 mb-16 text-2xl lg:mt-20">
          <h1 className="text-center align-middle font-bold sm:text-4xl">
            WATCH EVERY WHERE
          </h1>
          <p className="text-lg mb-10 mt-4 text-center sm:text-2xl sm:w-[80%] sm:ml-[80px] sm:mt-8 lg:ml-[350px] lg:w-[50%]">Stream unlimited movies and TV shows on your phone , tablet , laptop, and TV.</p>
        </div>
        <div className='bg-gray-900 border-4 border-[#222] w-full' />

        <div className="lg:flex mb-10">
        <div className="text-white mt-6 lg:mt-32 lg:ml-4">
          <h1 className="text-2xl font-semibold text-center sm:text-3xl lg:text-5xl">Create Profile For Kids.</h1>
          <p className="text-center mt-3 text-lg sm:text-2xl lg:text-3xl">Send kids on adventures with their favourite character in a scpace made just for them - free with your membership.</p>
          </div>
          <img src="/kid.png" className="sm:ml-16 lg:mt-14" />
          
        </div>
        <div className='bg-gray-900 border-4 border-[#222] w-full' />

        {/* FAQ */}
        <h1 className="text-white text-xl text-center mb-4 mt-4 lg:text-5xl lg:mb-10 sm:text-3xl sm:mb-6 sm:mt-6">Frequently Asked Questions</h1>

        <div id="FAQ" className="faq-1 text-white overflow-hidden  h-[48px] bg-[#303030] cursor-pointer mb-2 sm:w-[75%] sm:ml-24 lg:w-[60%] lg:h-14 lg:ml-72 "
         onClick={()=>{
          let x =document.getElementById('FAQ');
          x?.classList.toggle('faq1');
         }}>
          <div className="question flex justify-between cursor-pointer">
            <h3 className="mt-3 text-2xl font-semibold sm:ml-4">What Is Netflix ?</h3>
            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 7V17M7 12H17" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="w-full bg-black h-[1px] mt-2" />

          <div className="mt-4 text-start sm:text-2xl sm:ml-2">
            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
            <br/> <br/> You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
          </div>

        </div>

        <div id="FAQ1" className="faq-1 text-white overflow-hidden h-[48px] bg-[#303030] cursor-pointer mb-2 sm:w-[75%] sm:ml-24 lg:w-[60%] lg:h-14 lg:ml-72"
         onClick={()=>{
          let x =document.getElementById('FAQ1');
          x?.classList.toggle('faq1');
         }}>
          <div className="question flex justify-between cursor-pointer">
            <h3 className="mt-3 text-2xl font-semibold sm:ml-4">How Much Does Netflix Cost ?</h3>
            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 7V17M7 12H17" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="w-full bg-black h-[1px] mt-2" />

          <div className="mt-4 text-start sm:text-2xl sm:ml-2">
            <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs250 to Rs1,100 a month. No extra costs, no contracts.</p>
          </div>

        </div>

        <div id="FAQ2" className="faq2 text-white overflow-hidden h-[48px] bg-[#303030] cursor-pointer mb-2 sm:w-[75%] sm:ml-24 lg:w-[60%] lg:h-14 lg:ml-72"
         onClick={()=>{
          let x =document.getElementById('FAQ2');
          x?.classList.toggle('faq1');
         }}>
          <div className="question flex justify-between cursor-pointer">
            <h3 className="mt-3 text-2xl font-semibold sm:ml-4">What Is Netflix ?</h3>
            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 7V17M7 12H17" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="w-full bg-black h-[1px] mt-2" />

          <div className="mt-4 text-start sm:text-2xl sm:ml-2">
            <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
            <br/> <br/> You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
          </div>

        </div>

        <div id="FAQ3" className="faq3 text-white overflow-hidden h-[48px] bg-[#303030] cursor-pointer mb-2 sm:w-[75%] sm:ml-24 lg:w-[60%] lg:h-14 lg:ml-72"
         onClick={()=>{
          let x =document.getElementById('FAQ3');
          x?.classList.toggle('faq1');
         }}>
          <div className="question flex justify-between cursor-pointer">
            <h3 className="mt-3 text-2xl font-semibold sm:ml-4">How Do I Cancel ?</h3>
            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 7V17M7 12H17" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="w-full bg-black h-[1px] mt-2" />

          <div className="mt-4 text-start sm:text-2xl sm:ml-2 sm:mb-4">
            <p>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
          </div>

        </div> */
        <h1 className="text-white text-xl text-center mt-4 sm:w-[70%] sm:ml-28 sm:mt-10 sm:text-3xl lg:text-5xl lg:ml-52 lg:mb-10">Ready to watch? Enter your email to create or restart your membership.</h1>
        <div className="sm:flex lg:flex z-30">
            <input type="email" id="email" placeholder=" " required
            className="w-[80%] text-black mt-4 h-[40px] font-semibold ml-10 sm:w-[50%] sm:h-[45px] sm:ml-32 lg:ml-[29%] lg:w-[35%] lg:h-14 peer" />
            <label htmlFor="" className={`absolute ${email_value ? '-translate-y-1 sm:-translate-y-2 lg:-translate-y-3 text-sm' : 'translate-y-0'} text-neutral-500 lg:left-[30%] left-[15%] sm:left-[20%] font-bold text-lg mt-5 sm:mt-6 lg:mt-7 peer-focus:text-sm peer-focus:-translate-y-1 peer-active:-translate-y-1 sm:peer-focus:-translate-y-2 lg:peer-focus:-translate-y-3 peer-focus:transition transition`} >Email</label>

            <button className="h-12 w-32  bg-red-700 text-white font-bold ml-28 text-lg mt-[15px] mb-4 lg:h-14 sm:ml-0 lg:ml-0"
            onClick={()=>{
              let x=document.getElementById('email');
              if(x?.textContent=='')
              {
                router.push('/signup');
              }
              else{
                router.push('/signin')
              }

            }}>
              Get Started
            </button>
          </div>
        <div className='bg-gray-900 border-4 border-[#222] w-full mb-6' />


         {/* footer  */}

        <Link href='#' className="text-[#737373] ml-4 hover:text-white">Question? Contact Us </Link>
        <div className="text-[#737373] mb-10 sm:flex ">

          <div className="flex gap-10 overflow-hidden mt-8 ml-4 text-center justify-center sm:ml-32 lg:ml-[300px] lg:gap-32">
            <ul>
              <li className="hover:text-white cursor-pointer sm:mb-2">FAQ</li>
              <li className="hover:text-white cursor-pointer sm:mb-2">Investor</li>
              <li className="hover:text-white cursor-pointer sm:mb-2">Relation</li>
              <li className="hover:text-white cursor-pointer sm:mb-2">Privacy</li>
            </ul>
            <ul>
              <li className="hover:text-white cursor-pointer sm:mb-2">Help Center</li>
              <li className="hover:text-white cursor-pointer sm:mb-2">Cookies</li>
              <li className="hover:text-white cursor-pointer sm:mb-2">Jobs</li>
              <li className="hover:text-white cursor-pointer sm:mb-2">Legal Notice</li>
            </ul>
            <ul>
              <li className="hover:text-white cursor-pointer sm:mb-2">Account</li>
              <li className="hover:text-white cursor-pointer sm:mb-2">Ways to Watch</li>
              <li className="hover:text-white cursor-pointer sm:mb-2">Information</li>
              <li className="hover:text-white cursor-pointer sm:mb-2">Only on Netflix</li>
            </ul>
          </div>

          <div className=" overflow-hidden mt-10 mr-10 text-center sm:mt-8 sm:ml-14 lg:ml-32">
            <ul>
              <li className="hover:text-white cursor-pointer sm:mb-2">Help</li>
              <li className="hover:text-white cursor-pointer sm:mb-2">Media Center</li>
              <li className="hover:text-white cursor-pointer sm:mb-2">Term Of Use</li>
              <li className="hover:text-white cursor-pointer sm:mb-2">Contact Us</li>
            </ul>
          </div>
        </div>
        <h1 className="text-[#737373] ml-4 mb-4">NETFLIX</h1>



      </div>

      
            
    </>
  );
};

export default Home;
