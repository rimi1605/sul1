import { useState } from 'react';
import './App.css';
import {Nav, List, Util, Main, Cont1, Section2, List3, List4, Fn, Fdown} from './compo';
import {m, c1, c3, c4, fm, fn} from './data';
import a1 from './h_1.png';
import a2 from './h_2.png';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './styles.css';
function App() {
  var [list,setList]=useState(false);
  return (
    <div className="App">
      <header id="header">
        <div className="up">
          <div className="left">
            <div className="language" onClick={()=>{
              setList(!list)
            }}>
              <a href="#">
                한국/한국어
                <span>
                  {
                    list==true ? <img src={a2} alt="1" /> : <img src={a1} alt="1" />
                  }
                </span>
              </a>
            </div>
            {
              list==true ? <List/> : null
            }
          </div>
          <h1 id="logo"><a href="#"></a></h1>
          <Util/>
        </div>
        <div className="down">
          <Nav/>
        </div>
      </header>
      <div className="main">
          <Swiper
            direction={'vertical'}
            slidesPerView={1}
            spaceBetween={0}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
        modules={[Mousewheel, Pagination]}
        className="main"
          >
            {
            m.map((a,i)=>{
              return(
                <SwiperSlide>
                  <Main m={m} i={i}/>                  
                </SwiperSlide>
              )
            })
          }
         
            
          </Swiper>
          
          
        
      </div>
      <div className="section">
        <section id="section1">
          <h2>설화수 추천</h2>
          <div className="boxWrap">
            <div className="slide">
              <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  spaceBetween={24}
                  slidesPerView={3}
                  slidesPerGroup={3}
                  autoplay={true}
                  navigation                  
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                >
                  
                  {
                    c1.map((a,i)=>{
                      return(
                        <SwiperSlide>
                          <Cont1 c1={c1} i={i}/>
                        
                        </SwiperSlide>
                      )
                    })
                  }
                </Swiper>
                  
                 
             
                  
               
                
                
              
            </div>
          </div>
        </section>
        <Section2/>
        <section id="section3">
          <h2>설화수 시즌추천</h2>
          <div className="boxWrap">
            <div className="box">
              <ul>
                {
                  c3.map((a,i)=>{
                    return(
                      <List3 c3={c3} i={i} key={i}/>
                    )
                  })
                }
                
              </ul>
            </div>
          </div>
        </section>
        <section id="section4">
          <div className="boxWrap">
            <ul>
              {
                c4.map((a,i)=>{
                  return(
                    <List4 c4={c4} i={i} key={i}/>
                  )
                })
              }
              
            </ul>
          </div>
        </section>
      </div>
      <footer id="footer">
        <div className="footIn">
          <div className="fmenu">
            <ul>
              {
                fm.map((a,i)=>{
                  return(
                    <li key={i}><a href="#">{fm[i]}</a></li>
                  )
                })
              }
              
            </ul>
          </div>
          <div className="fsns">
            <ul>
              {
                fn.map((i)=>{
                  return(
                    <Fn fn={fn} i={i} key={i}/>
                  )
                })
              }
              
            </ul>
          </div>
        </div>
       <Fdown/>
      </footer>
    </div>
  );
}


export default App;
