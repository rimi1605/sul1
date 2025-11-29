function Nav(){
    return(
        <nav id="nav">
            <ul>
              <li><a href="#">윤조</a></li>
              <li><a href="#">자음생</a></li>
              <li><a href="#">기프트</a></li>
              <li><a href="#">베스트 셀러</a></li>
              <li>
                <a href="#">제품</a>
                <div className="subBack">
                  <div className="subIn">
                    <ul className="sub">
                      <li><a href="#">스킨케어</a></li>
                      <li><a href="#">메이크업</a></li>
                      <li><a href="#">남성</a></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a href="#">스파</a>
                <div className="subBack">
                  <div className="subIn">
                    <ul className="sub">
                      <li><a href="#">소개</a></li>
                      <li><a href="#">스파프로그램</a></li>
                      <li><a href="#">예약</a></li>
                      <li><a href="#">매장찾기</a></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a href="#">플래그십 스토어</a>
                <div className="subBack">
                  <div className="subIn">
                    <ul className="sub">
                      <li><a href="#">플래그십 스토어</a></li>
                      <li><a href="#">설화수 북촌</a></li>
                      <li><a href="#">설화수 도산</a></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a href="#">ABOUT 설화수</a>
                <div className="subBack">
                  <div className="subIn">
                    <ul className="sub">
                      <li><a href="#">브랜드 스토리</a></li>
                      <li><a href="#">브랜드 지속가능성</a></li>
                      <li><a href="#">설화문화전</a></li>
                      <li><a href="#">샬롱 설화수</a></li>
                      <li><a href="#">명작컬렉션</a></li>
                      <li><a href="#">브랜드 뉴스</a></li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
        </nav>  
    )
}
function List(){
    return(
        <div className="list">
            <ul>
                <li><a href="#">한국/한국어</a></li>
                <li><a href="#">INTERNATIONAL/ENGLISH</a></li>
                <li><a href="#">中文</a></li>
                <li><a href="#">繁體中文</a></li>
                <li><a href="#">SINGAPORE/ENGLISH</a></li>
                <li><a href="#">MALAYSIA/ENGLISH</a></li>
                <li><a href="#">VIET NAME/TIENG VIET</a></li>
                <li><a href="#">INDONESIA/BAHASIA INDONESIA</a></li>
                <li><a href="#">USA/ENGLISH</a></li>
            </ul>
        </div>
    )
}
function Util(){
    return(
        <div className="util">
            <ul>
              <li><a href="#">매장찾기</a></li>
              <li><a href="#">구매하기</a></li>
              <li><a href="#"></a></li>
            </ul>
        </div>
    )
}
function Main(props){
  return(
    <a href="#">
      <div className="imgB">
        <img src={`/images/main_slide${props.i}.jpg`} alt="1" />
      </div>
      <div className="txtB">
        <p>{props.m[props.i].d}</p>
        <p>{props.m[props.i].t}</p>
      </div>
    </a>
  )
}
function Cont1(props){
  return(
    <a href="#">
      <div className="imgBox">
        <img src={`/images/cont1_${props.i}.jpg`} alt="1" />
      </div>
      <div className="txtBox">
        <p>{props.c1[props.i].t}</p>
        <p>{props.c1[props.i].d}</p>
        <p>{props.c1[props.i].p}</p>
      </div>
    </a>
  )
}
function Section2(){
  return(
    <section id="section2">
      <a href="#">
        <div className="imgBox">
          <img src="/images/cont2.jpg" alt="2" />
        </div>
        <div className="txtBox">
          <h2>베스트 셀러</h2>
          <p>건강하게 빛나고 힘 있게 채우는<br/>설화수의 시그니쳐 케어</p>
          <span>자세히 보기</span>
        </div>
      </a>
    </section>
  )
}
function List3(props){
  return(
    <li>
      <a href="#">
        <div className="imgBox">
          <img src={`/images/cont3_${props.i}.png`} alt="1" />
        </div>
        <div className="txtBox">
          <p>{props.c3[props.i].t}</p>
          <p>{props.c3[props.i].d}</p>
          <p>{props.c3[props.i].p}</p>
        </div>
      </a>
    </li>
  )
}
function List4(props){
  return(
    <li>
      <a href="#">
        <div className="imgBox">
          <img src={`/images/cont4_${props.i}.jpg`} alt="0" />
        </div>
        <div className="txtBox">
          <h3>{props.c4[props.i].t}</h3>
          <span>{props.c4[props.i].b}</span>
        </div>
      </a>
    </li>
  )
}
function Fn(props){
  return(
    <li>
      <a href="#">
        <img src={`/images/sns${props.i}.png`} alt="0" />
      </a>
    </li>
  )
}
function Fdown(){
  return(
    <div className="fdown">
      <div className="footIn">
        <div className="tel">
          <p>고개서비스센터(수진자요금부담) : 080-023-5454 (월~금) AN 09:00~PM 06:00)</p>
        </div>
        <div className="copy">
          <p>&copy;<span>AMOREPACIFIC</span> CORPORATION. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
export {Nav, List, Util, Main, Cont1, Section2, List3, List4, Fn, Fdown};