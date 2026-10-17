import React from 'react'

const About = () => {
  return (
    <>
      {/* about-sec start */}
      <section id="about-sec" className="py-lg-5 py-4">
        <div className="container-lg py-lg-5 py-3">
          <div className="row align-items-center g-5">
            {/* LEFT CONTENT */}
            <div className="col-lg-5 col-md-6" data-aos="fade-right">
              <div className="content">
                <div className="top-head mb-3">About Pilco</div>

                <h2 className="heading mb-4">
                  Leading Storage System
                  <br />
                  Manufacturer in Delhi
                </h2>
                <p>
                  Pilco is an established name in industrial and warehouse
                  storage solutions, providing reliable systems designed for
                  efficient storage, material handling and better use of
                  available space.
                </p>

                <p>
                  Since 1987, Pilco has been engaged in manufacturing and
                  supplying a wide range of storage products, including plastic
                  pallets, heavy duty pallet racks, storage racks, mezzanine
                  floors, cantilever racks, display racks, flow racks, cable
                  trays and cable ducts. With a focus on quality, innovation and
                  dependable service, we serve diverse storage requirements
                  across industries.
                </p>

                <a href="/about" className="btn pilco-btn px-4 py-3 mt-3">
                  DISCOVER MORE
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-7 col-md-6">
              <div className="about-visual">
                {/* Orange/Cyan back shapes */}
                {/* <div className="about-shape shape-one"></div>
                                <div className="about-shape shape-two"></div> */}

                {/* Main image */}

                <div className="img-shadow"></div>

                {/* Main image */}
                <div className="img-box" data-aos="zoom-in">
                  <img
                    src="/img/about-sec.jpg"
                    alt="PILCO Industrial Factory"
                    className="img-fluid"
                  />
                </div>

                {/* Experience Badge */}
                <div className="experience-badge">
                  <div className="experience-number">39+</div>

                  <span>Years of Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about-sec end */}

      {/* company-inf0 start */}
      <div id="company-info">
        <div className="container-lg company-info">
          <div className="row g-2">
            {/* ================= LEFT COLUMN ================= */}
            <div className="col-md-6 left" data-aos="fade-right">
              <div className="content">
                <div className="heading text-center">
                  Industrial Storage Rack
                  <br />
                  Manufacturer in Delhi
                </div>

                <p>
                  Pilco provides durable industrial storage racks designed to
                  organize materials, improve storage capacity and make better
                  use of available warehouse space. Our storage solutions are
                  suitable for different industrial and commercial requirements.
                </p>

                <p>
                  From light-duty applications to heavy-duty storage, Pilco
                  offers practical rack systems designed around product weight,
                  storage requirements, available space and handling needs.
                </p>

                <ul>
                  <li>Heavy duty storage racks for high-load applications</li>
                  <li>
                    Pallet storage racks for organized warehouse operations
                  </li>
                  <li>
                    Space-efficient designs for better storage utilization
                  </li>
                  <li>
                    Reliable solutions for industrial and commercial facilities
                  </li>
                </ul>
              </div>
            </div>

            {/* ================= RIGHT COLUMN ================= */}
            <div className="col-md-6 right" data-aos="fade-left">
              <div className="content rounded-3">
                <div className="heading text-center">
                  Warehouse Storage
                  <br />
                  Systems & Solutions
                </div>

                <p>
                  Pilco specializes in warehouse storage systems that help
                  businesses manage inventory efficiently while maximizing
                  available storage space. Our solutions are developed to
                  support organized material storage and smooth warehouse
                  operations.
                </p>

                <p>
                  Our range includes pallet racks, cantilever racks, display
                  racks, flow racks and mezzanine floors, providing flexible
                  options for warehouses, factories, distribution centers and
                  other storage facilities.
                </p>

                <ul>
                  <li>Efficient use of vertical and floor storage space</li>
                  <li>Storage systems for light and heavy goods</li>
                  <li>Flexible solutions for different warehouse layouts</li>
                  <li>Designed for efficient material handling and access</li>
                </ul>
              </div>
            </div>

            {/* ================= FULL WIDTH ================= */}
            <div className="col-12" data-aos="fade-up">
              <div className="content mt-2">
                <div className="heading text-center">
                  Complete Material Storage
                  <br />
                  Solutions by Pilco
                </div>

                <p>
                  Beyond storage racks, Pilco offers a wide range of material
                  storage products including plastic pallets, heavy duty pallet
                  racks, mezzanine floors, cantilever racks, display racks, flow
                  racks, cable trays and cable ducts. With experience dating
                  back to 1987, Pilco combines manufacturing and supply
                  capabilities to meet diverse storage requirements.
                </p>

                <p>
                  Our products are developed with a focus on strength, load
                  capacity, durability and practical storage needs, helping
                  customers create more organized and productive industrial and
                  warehouse environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* company-info end */}
    </>
  );
}

export default About

