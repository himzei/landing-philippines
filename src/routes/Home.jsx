import About from "../components/home/About";
import Consulting from "../components/home/Consulting";
import MainSlide from "../components/home/MainSlide";
import Portfolio from "../components/home/Portfolio";
import Service from "../components/home/Service";
import { Element } from "react-scroll";
import Differences from "../components/Differences";
import Outline from "../components/Outline";
import Curriculum from "../components/home/Curriculum";

export default function Home() {
  return (
    <>
      {/* 메인 슬라이드 */}
      <MainSlide />

      {/* About */}
      <div id="1">
        <Element name="test1" className="test1">
          <About />
        </Element>
      </div>

      {/* Service */}
      <div id="2">
        <Element name="test2" className="test2">
          <Service />
        </Element>
      </div>

      {/* 이런점이 달라요 */}
      <div>
        <Differences />
      </div>

      {/* 개요 */}
      <div>
        <Outline />
      </div>

      {/* Community */}
      <div id="4">
        <Element name="test4" className="test4" id="4">
          <Curriculum />
        </Element>
      </div>

      {/* 포트폴리오 */}
      <div id="3">
        <Element name="test3" className="test3" id="3">
          <Portfolio />
        </Element>
      </div>

      {/* 컨설팅 */}
      <div id="six">
        <Element name="test6" className="test6" id="6">
          <Consulting />
        </Element>
      </div>

      {/* 공백 */}
    </>
  );
}
