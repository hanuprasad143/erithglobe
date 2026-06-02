// import { PlaySvg, PlayTwoSvg, VideoPlayerThreeSvg } from "../svg";
import {PlayTwoSvg } from "../svg";
import VideoProvider from "../video/video-provider";

export default function CampusVideoArea() {
  return (
    <div
      className="tp-video-5-area tp-video-hover tp-video-inner-bg"
      style={{ backgroundImage: `url(/assets/img/live/banner-erith.png)` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="tp-course-details-2-widget-thumb p-relative mt-30">
              {/* <VideoProvider videoId="WaOHtQuqI50" vimeoPlayer={true}> */}
              <VideoProvider videoId="rBor15TMdBU">
                <span className="tp-m-play-inner campus play-center">
                  {/* <svg
                    className="tp-circle-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="152"
                    height="152"
                    viewBox="0 0 152 152"
                  >
                    <path
                      id="tp-cicle-path-934"
                      fill="#FFFFFF"
                      d="M18,76a58,58,0,1,1,58,58A58,58,0,0,1,18,76"
                    ></path>
                    <text className="tp-circle-text">
                      <textPath xlinkHref="#tp-cicle-path-934">
                        Erith Global UAE in the heart of the Middle East
                      </textPath>
                    </text>
                  </svg> */}
                  <PlayTwoSvg />
                  {/* <PlaySvg /> */}
                </span>
              </VideoProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
