import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import './App.scss';

import "swiper/css";
import 'swiper/css/pagination';

import Img1 from './assets/Abandoned_All.png';
import Img2 from './assets/Abandoned_All_Studio.png';
import Img3 from './assets/Abandoned_Closeup_1.png';
import Img4 from './assets/Abandoned_Closeup_2.png';
import Img5 from './assets/Abandoned_Closeup_3.png';

import Img6 from './assets/Mixed_All.png';
import Img7 from './assets/Mixed_All_Studio.png';
import Img8 from './assets/Mixed_Closeup_1.png';
import Img9 from './assets/Mixed_Closeup_2.png';
import Img10 from './assets/Mixed_Closeup_3.png';

function App() {

  return (
    <main className="App">
      
      <h1>Photogrammetry Adventures!</h1>

      <section className="abandoned">
        
        <h2>
          The Abandonment Pack
        </h2>

        <Swiper className="mySwiper" 
          modules={[Pagination]} 
          pagination={{clickable: true}}
          thumbs={true}
          >
          <SwiperSlide>
            <img src={Img1} />
          </SwiperSlide>

          <SwiperSlide>
            <img src={Img2} />
          </SwiperSlide>
        </Swiper>

        <p className="caption">
          Close Ups
        </p>

        <Swiper className="mySwiper space" 
          modules={[Pagination]} 
          pagination={{clickable: true}}
          thumbs={true}
          >
          <SwiperSlide>
            <img src={Img3} />
          </SwiperSlide>

          <SwiperSlide>
            <img src={Img4} />
          </SwiperSlide>

          <SwiperSlide>
            <img src={Img5} />
          </SwiperSlide>
        </Swiper>

        <p className="caption">
          Wow, much abandonment to be had here!
        </p>

      </section>

      <section className="mixed">

        <h2>Mixed Pack</h2>

        <Swiper className="mySwiper" 
          modules={[Pagination]} 
          pagination={{clickable: true}}
          thumbs={true}
          >
          <SwiperSlide>
            <img src={Img6} />
          </SwiperSlide>

          <SwiperSlide>
            <img src={Img7} />
          </SwiperSlide>
        </Swiper>

        <p className="caption">
          More closeups!
        </p>

        <Swiper className="mySwiper space" 
          modules={[Pagination]} 
          pagination={{clickable: true}}
          thumbs={true}
          >
          <SwiperSlide>
            <img src={Img8} />
          </SwiperSlide>

          <SwiperSlide>
            <img src={Img9} />
          </SwiperSlide>

          <SwiperSlide>
            <img src={Img10} />
          </SwiperSlide>
        </Swiper>

        <p className="caption">
          Grandma said she wished me well - I said, I have indoor plumbing
        </p>

      </section>

    </main>
  )
}

export default App
