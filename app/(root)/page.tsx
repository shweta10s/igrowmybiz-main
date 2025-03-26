import { cn } from '@/lib/utils'
import Link from 'next/link'
import { oxygen } from '../fonts'
import HomeService from './components/home-service'
import Image from 'next/image'
import Testimonials from './components/testimonial'
import Slider from './components/slider'
import Countdown1 from './components/count-down'
import { Metadata } from 'next'

const images = ['abcap-a3be2e4f.png', 'bbb-016bebb4.png', 'geoline-221c69ce.png', 'magha-6b5980fd.png', 'more-09e1cd70.png', 'quikdsp-5b6fab73.png', 'rapido-710258dc.png', 'shim-1e9caefd.png', '12 Nov Logo new 01.png', 'Bluejay.png', 'day events logo.png', 'logo (1).png', 'Logo Design.png', 'output-onlinepngtools (2).png', 'vishal lo for whit vid.png', 'abcap-a3be2e4f.png', 'bbb-016bebb4.png', 'geoline-221c69ce.png', 'magha-6b5980fd.png', 'more-09e1cd70.png', 'quikdsp-5b6fab73.png', 'rapido-710258dc.png', 'shim-1e9caefd.png', '12 Nov Logo new 01.png', 'Bluejay.png', 'day events logo.png', 'logo (1).png', 'Logo Design.png', 'output-onlinepngtools (2).png', 'vishal lo for whit vid.png',]
export default function Home() {
  return (
    <>
      <main className='bg-secondaryColor  w-full'>
        <section className='flex h-screen w-full md:px-[5%] lg:px-[1%] relative'>
          <div className='md:w-1/2 h-full flex flex-col gap-8 lg:gap-12 md:justify-center px-8 md:px-10 lg:px-14 relative top-1/3 sm:top-0 z-30'>
            <h1 className={cn(oxygen.className, 'text-white text-3xl md:text-3xl lg:text-4xl xl:text-7xl font-bold leading-8 lg:leading-[2.7rem] flex flex-col gap-2 sm:gap-4')}>
              IgrowMyBiz - <span className='text-xl md:text-3xl lg:text-4xl xl:text-5xl'>Building Brands From Biz <span className='inline-block relative top-[12%] h-6 w-6 sm:h-8 sm:w-8 lg:h-12 lg:w-12'><Image src={'/assets/images/star.png'} alt='' fill className='object-cover' /></span></span>
            </h1>
            <Link href="/services" className='px-8 py-3 rounded-md text-sm text-black bg-mainColor w-fit font-semibold transition-all duration-500'>
              Our Services
            </Link>
          </div>
          <div className='w-full h-full absolute z-20 bg-black md:hidden opacity-70' />
          <div className='w-full md:w-[40%] h-full absolute top-0 left-0 md:left-[95%] z-10 md:-translate-x-full '>
            <div className='h-full w-full flex items-end'>
              <div className='h-full w-full md:h-[90%] relative rounded-md md:px-6 overflow-hidden'>
                <Slider />
                <div className='absolute top-0 left-0 -z-10 h-[455px] w-[455px] rounded-full home-slider-bg' />
                <div className='absolute top-1/2 left-1/3 -z-10 h-[455px] w-[455px] rounded-full home-slider-bg' />
              </div>
            </div>
          </div>
        </section>
        <section className='bg-black'>
          <div className='py-2 lg:py-4 lg:h-28 h-24'>
            <div className='relative h-full w-full overflow-hidden mx-auto'>
              <div className='flex absolute logo-scroll-three  xl:gap-14 gap-2 items-center my-auto -bottom-5'>
                {images.map((item, index) => <div key={index} className='relative grow-0 shrink-0 w-28 h-28'>
                  <Image src={`/assets/images/${item}`} alt='bbb' fill className='object-contain filter grayscale hover:grayscale-0' />
                </div>)}

              </div>
            </div>
          </div>
          {/* <div className='sm:w-[45%] w-full mx-auto my-2'>
            <AspectRatio ratio={16 / 9}>
              <iframe className='object-cover w-full h-full rounded-lg' src="https://www.youtube.com/embed/9DhuWapDDrw?si=Y6vr5Qjts9gyygHZ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </AspectRatio>
          </div> */}
          <div className='sm:py-10'>
            <div className='sm:w-4/5 mx-auto rounded-2xl px-4 sm:px-0 py-8 sm:py-0 sm:p-12 flex flex-col gap-6 items-center'>
              <div className='flex flex-col gap-4 items-center'>
                <h2 className='text-white font-semibold text-center text-3xl lg:text-5xl'>What do we do?</h2>
                <p className='text-textColor text-center text-sm sm:w-3/4 lg:w-[60%]'>Our main aim is to focus on business development, content marketing, social media marketing, meme marketing, SEOs, Paid ads (google & meta), Website Development, Ad Production, PR strategies.</p>
              </div>
              <div className='flex flex-col md:grid grid-cols-3 gap-4 p-2 lg:p-4'>
                <div className='text-white p-2 sm:p-0 sm:pr-8 flex flex-col items-center justify-center sm:border-r-2 border-[#FCF74A]'>
                  <p className='text-center'>
                    <Countdown1 initialCount={100} timeDuration={50} symbol='+' />
                    Projects Completed
                  </p>
                </div>
                <div className='text-white p-2 sm:p-0 flex flex-col items-center justify-center sm:border-r-2 border-[#FCF74A]'>
                  <p className='text-center'>
                    <Countdown1 initialCount={45} timeDuration={100} symbol='+' />
                    Happy Clients
                  </p>
                </div>
                <div className='text-white rounded-xl p-2 sm:p-0 sm:pl-6 flex flex-col items-center justify-center'>
                  <p className='text-center'>
                    <Countdown1 initialCount={90} timeDuration={70} symbol='%' />
                    Client Retaintion Rate
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='py-2 lg:py-4 lg:h-28 h-24'>
            <div className='relative h-full w-full overflow-hidden mx-auto'>
              <div className='flex absolute logo-scroll-four  xl:gap-14 gap-2 items-center my-auto -bottom-5'>
                {images.map((item, index) => <div key={index} className='relative grow-0 shrink-0 w-28 h-28'>
                  <Image src={`/assets/images/${item}`} alt='bbb' fill className='object-contain filter grayscale hover:grayscale-0' />
                </div>)}

              </div>
            </div>
          </div>
        </section>
        {/* <section className='flex flex-col gap-5 items-center justify-center pb-20 pt-10'>
          <h2 className='text-mainColor font-semibold text-2xl text-center'>Hurry up! get your free consultation now!</h2>
          <CountDownKammo/>
        </section> */}
        <section className='py-14 sm:py-20 flex items-center justify-center'>
          <Testimonials />
        </section>
        <HomeService />

      </main>
    </>
  )
}
