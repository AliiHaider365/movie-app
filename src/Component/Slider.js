import React from "react";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../api";

function Home({ slider }) {
  // console.log(slider[4]);

  // const slide = {
  //   img1:
  //     `${IMAGE_BASE_URL}${BACKDROP_SIZE}${slider[6].backdrop_path}` ||
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNbMI2uujhb9ic49QFf8cpnKhaBdhc7h-uag&usqp=CAU",
  //   img2:
  //     `${IMAGE_BASE_URL}${BACKDROP_SIZE}${slider[6].backdrop_path}` ||
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNbMI2uujhb9ic49QFf8cpnKhaBdhc7h-uag&usqp=CAU",
  //   img3:
  //     `${IMAGE_BASE_URL}${BACKDROP_SIZE}${slider[6].backdrop_path}` ||
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNbMI2uujhb9ic49QFf8cpnKhaBdhc7h-uag&usqp=CAU",
  // };

  if (!slider) {
    return <h1>..loading</h1>;
  } else {
    return (
      <>
        <div className="sliderContainer">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="http://image.tmdb.org/t/p/w500/tWxCVe4rQZa3BvR3tMT3t74oVTT.jpg"
                  alt="..."
                  class="d-block w-100 img-fluid"
                />
              </div>
              <div class="carousel-item">
                <img src={"http://image.tmdb.org/t/p/w500/86L8wqGMDbwURPni2t7FQ0nDjsH.jpg"} alt="..."
                 class="d-block w-100 img-fluid" />
              </div>
              <div class="carousel-item">
                <img
                  src="http://image.tmdb.org/t/p/w500/gEjNlhZhyHeto6Fy5wWy5Uk3A9D.jpg"
                  class="d-block w-100 img-fluid"
                  alt="..."
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
