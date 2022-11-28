import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "./assets/1.jpg"
import img2 from "./assets/2.jpg"
import img3 from "./assets/3.jpg"
import img4 from "./assets/4.jpg"
import img5 from "./assets/5.jpg"
import img6 from "./assets/6.jpg"
import img7 from "./assets/7.jpg"
import img8 from "./assets/8.jpg"
import img9 from "./assets/9.jpg"
import img10 from "./assets/10.jpg"

const Slider = () => {
  return (
    <Carousel autoPlay infiniteLoop dynamicHeight transitionTime={1500}  showThumbs={false}>
      <div>
        <img src={img1} />
        <aside className="legend">
          <h1>Mandya</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
            est ex eos commodi odit exercitationem doloremque perferendis
            molestiae. Odit ratione beatae vitae quisquam esse in!
          </p>
          <button>View More</button>
        </aside>
      </div>
      <div>
        <img src={img2} />
        <aside className="legend">
          <h1>Mysore</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
            est ex eos commodi odit exercitationem doloremque perferendis
            molestiae. Odit ratione beatae vitae quisquam esse in!
          </p>
          <button>View More</button>
        </aside>
      </div>
      <div>
        <img src={img3} />
        <aside className="legend">
          <h1>Mangalore</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
            est ex eos commodi odit exercitationem doloremque perferendis
            molestiae. Odit ratione beatae vitae quisquam esse in!
          </p>
          <button>View More</button>
        </aside>
      </div>
      <div>
        <img src={img4} />
        <aside className="legend">
          <h1>Madikeri</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
            est ex eos commodi odit exercitationem doloremque perferendis
            molestiae. Odit ratione beatae vitae quisquam esse in!
          </p>
          <button>View More</button>
        </aside>
      </div>
      <div>
        <img src={img5} />
        <aside className="legend">
          <h1>Banglore</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
            est ex eos commodi odit exercitationem doloremque perferendis
            molestiae. Odit ratione beatae vitae quisquam esse in!
          </p>
          <button>View More</button>
        </aside>
      </div>
      <div>
        <img src={img6} />
        <aside className="legend">
          <h1>Hubli</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
            est ex eos commodi odit exercitationem doloremque perferendis
            molestiae. Odit ratione beatae vitae quisquam esse in!
          </p>
          <button>View More</button>
        </aside>
      </div>
      <div>
        <img src={img7} />
        <aside className="legend">
          <h1>Belgaum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
            est ex eos commodi odit exercitationem doloremque perferendis
            molestiae. Odit ratione beatae vitae quisquam esse in!
          </p>
          <button>View More</button>
        </aside>
      </div>
      <div>
        <img src={img8} />
        <aside className="legend">
          <h1>Bidar</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
            est ex eos commodi odit exercitationem doloremque perferendis
            molestiae. Odit ratione beatae vitae quisquam esse in!
          </p>
          <button>View More</button>
        </aside>
      </div>
      <div>
        <img src={img9} />
        <aside className="legend">
          <h1>Hassan</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
            est ex eos commodi odit exercitationem doloremque perferendis
            molestiae. Odit ratione beatae vitae quisquam esse in!
          </p>
          <button>View More</button>
        </aside>
      </div>
      <div>
        <img src={img10} />
        <aside className="legend">
          <h1>Ramanagaram</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
            est ex eos commodi odit exercitationem doloremque perferendis
            molestiae. Odit ratione beatae vitae quisquam esse in!
          </p>
          <button>View More</button>
        </aside>
      </div>
    </Carousel>
  );
}

export default Slider;
