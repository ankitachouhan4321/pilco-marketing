import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import React, { useEffect, useRef, useState } from "react";


const Counter = ({ end, suffix = "+", duration = 1800 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting || started.current) return;

            started.current = true;

            let startTime = null;

            const animate = (time) => {
                if (!startTime) startTime = time;

                const progress = Math.min((time - startTime) / duration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);

                setCount(Math.floor(easeOut * end));

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        });

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [end, duration]);

    return (
        <span ref={ref}>
            {count.toLocaleString()}
            {suffix}
        </span>
    );
};


const Home = () => {
    return (
        <>
            {/* pilco-hero start */}
            <section className="pilco-hero">
                <div className="pilco-hero-overlay"></div>

                <div className="container position-relative h-100">
                    <div className="row h-100 align-items-center">

                        <div className=" col-md-12">
                            <div className="pilco-hero-content">

                                <span className="pilco-hero-tag">
                                    Pilco Storage Systems
                                </span>

                                <h1>
                                    Industrial & Warehouse

                                    Storage Solutions
                                </h1>

                                <p className="text-center">
                                    Reliable storage systems, racks and pallets designed for
                                    efficient, organized and high-capacity material storage.
                                </p>

                                <Link
                                    to="/about"
                                    className="btn pilco-btn px-4 py-3"
                                >
                                    DISCOVER MORE
                                    <i className="bi bi-arrow-right ms-2"></i>
                                </Link>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* pilco-hero end */}

            {/* category-sec start */}
            <section id="category-sec" className="py-lg-5 py-3 side-space">
                <div className="container-fluid ">

                    {/* Heading */}
                    <div className="row text-center mb-4">

                        {/* <div className="top-head mb-2">
                                Our Categories
                            </div> */}

                        <h2 className="heading mb-0">
                            Explore Our  <br className="d-none d-md-block" />  Product Categories
                        </h2>


                    </div>


                    {/* Slider */}
                    <div className="position-relative category-slider-wrap">

                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={24}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 2800,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                nextEl: ".category-next",
                                prevEl: ".category-prev",
                            }}
                            breakpoints={{

                                576: {
                                    slidesPerView: 2,
                                },
                                992: {
                                    slidesPerView: 3,
                                },
                                1200: {
                                    slidesPerView: 4,
                                },
                                1600: {
                                    slidesPerView: 6,
                                },
                            }}
                            className="categorySwiper"
                        >

                            {/* 1 */}
                            <SwiperSlide>
                                <div className="category-card">

                                    <div className="category-img">
                                        <img
                                            src="/img/Plastic-Pallets/1.png"
                                            alt="Plastic Extrusion Plant"
                                        />

                                        {/* <div className="category-no">
                                            01
                                        </div> */}
                                    </div>

                                    <div className="category-body">
                                        {/* 
                                        <span className="category-small">
                                            Industrial Machinery
                                        </span> */}

                                        <h4>
                                            Plastic Pallets
                                        </h4>

                                        <a href="/products" className="category-link">
                                            Explore Category
                                            <i className="bi bi-arrow-up-right ms-2"></i>
                                        </a>

                                    </div>

                                </div>
                            </SwiperSlide>


                            {/* 2 */}
                            <SwiperSlide>
                                <div className="category-card">

                                    <div className="category-img">
                                        <img
                                            src="/img/Cable-Tray/1.png"
                                            alt="Pipe Making Plant"
                                        />

                                        {/* <div className="category-no">
                                            02
                                        </div> */}
                                    </div>

                                    <div className="category-body">

                                        {/* <span className="category-small">
                                            Pipe Machinery
                                        </span> */}

                                        <h4>
                                            Cable Tray
                                        </h4>

                                        <a href="/products" className="category-link">
                                            Explore Category
                                            <i className="bi bi-arrow-up-right ms-2"></i>
                                        </a>

                                    </div>

                                </div>
                            </SwiperSlide>

                            {/* 1 */}
                            <SwiperSlide>
                                <div className="category-card">

                                    <div className="category-img">
                                        <img
                                            src="/img/Plastic-Crates/1.png"
                                            alt="Plastic Extrusion Plant"
                                        />

                                        {/* <div className="category-no">
                                            01
                                        </div> */}
                                    </div>

                                    <div className="category-body">
                                        {/* 
                                        <span className="category-small">
                                            Industrial Machinery
                                        </span> */}

                                        <h4>
                                            Plastic Crates
                                        </h4>

                                        <a href="/products" className="category-link">
                                            Explore Category
                                            <i className="bi bi-arrow-up-right ms-2"></i>
                                        </a>

                                    </div>

                                </div>
                            </SwiperSlide>


                            {/* 2 */}
                            <SwiperSlide>
                                <div className="category-card">

                                    <div className="category-img">
                                        <img
                                            src="/img/Warehouse-Racks/1.png"
                                            alt="Pipe Making Plant"
                                        />

                                        {/* <div className="category-no">
                                            02
                                        </div> */}
                                    </div>

                                    <div className="category-body">

                                        {/* <span className="category-small">
                                            Pipe Machinery
                                        </span> */}

                                        <h4>
                                            Warehouse Racks
                                        </h4>

                                        <a href="/products" className="category-link">
                                            Explore Category
                                            <i className="bi bi-arrow-up-right ms-2"></i>
                                        </a>

                                    </div>

                                </div>
                            </SwiperSlide>

                            {/* 1 */}
                            <SwiperSlide>
                                <div className="category-card">

                                    <div className="category-img">
                                        <img
                                            src="/img/Industrial-Storage-Crate/1.png"
                                            alt="Plastic Extrusion Plant"
                                        />

                                        {/* <div className="category-no">
                                            01
                                        </div> */}
                                    </div>

                                    <div className="category-body">
                                        {/* 
                                        <span className="category-small">
                                            Industrial Machinery
                                        </span> */}

                                        <h4>
                                            Industrial Storage Crate
                                        </h4>

                                        <a href="/products" className="category-link">
                                            Explore Category
                                            <i className="bi bi-arrow-up-right ms-2"></i>
                                        </a>

                                    </div>

                                </div>
                            </SwiperSlide>


                            {/* 2 */}
                            <SwiperSlide>
                                <div className="category-card">

                                    <div className="category-img">
                                        <img
                                            src="/img/Industrial-Pallets/1.png"
                                            alt="Pipe Making Plant"
                                        />

                                        {/* <div className="category-no">
                                            02
                                        </div> */}
                                    </div>

                                    <div className="category-body">

                                        {/* <span className="category-small">
                                            Pipe Machinery
                                        </span> */}

                                        <h4>
                                            Industrial Pallets
                                        </h4>

                                        <a href="/products" className="category-link">
                                            Explore Category
                                            <i className="bi bi-arrow-up-right ms-2"></i>
                                        </a>

                                    </div>

                                </div>
                            </SwiperSlide>

                            {/* 2 */}
                            <SwiperSlide>
                                <div className="category-card">

                                    <div className="category-img">
                                        <img
                                            src="/img/Vegetable-Crate/1.png"
                                            alt="Pipe Making Plant"
                                        />

                                        {/* <div className="category-no">
                                            02
                                        </div> */}
                                    </div>

                                    <div className="category-body">

                                        {/* <span className="category-small">
                                            Pipe Machinery
                                        </span> */}

                                        <h4>
                                            Vegetable Crate
                                        </h4>

                                        <a href="/products" className="category-link">
                                            Explore Category
                                            <i className="bi bi-arrow-up-right ms-2"></i>
                                        </a>

                                    </div>

                                </div>
                            </SwiperSlide>

                            {/* 2 */}
                            <SwiperSlide>
                                <div className="category-card">

                                    <div className="category-img">
                                        <img
                                            src="/img/Storage-Racks/1.png"
                                            alt="Pipe Making Plant"
                                        />

                                        {/* <div className="category-no">
                                            02
                                        </div> */}
                                    </div>

                                    <div className="category-body">

                                        {/* <span className="category-small">
                                            Pipe Machinery
                                        </span> */}

                                        <h4>
                                            Storage Racks
                                        </h4>

                                        <a href="/products" className="category-link">
                                            Explore Category
                                            <i className="bi bi-arrow-up-right ms-2"></i>
                                        </a>

                                    </div>

                                </div>
                            </SwiperSlide>

                        </Swiper>

                    </div>

                </div>
            </section>
            {/* category-sec end */}

            {/* about-sec start */}
            <section id="about-sec" className="py-lg-5 py-4">
                <div className="container-lg py-lg-5 py-3">

                    <div className="row align-items-center g-5">

                        {/* LEFT CONTENT */}
                        <div className="col-lg-5 col-md-6">
                            <div className="content">

                                <div className="top-head mb-3">
                                    About Pilco
                                </div>

                                <h2 className="heading mb-4">
                                    Leading Storage System
                                    <br />
                                    Manufacturer in Delhi
                                </h2>
                                <p>
                                    Pilco is an established name in industrial and warehouse storage
                                    solutions, providing reliable systems designed for efficient
                                    storage, material handling and better use of available space.
                                </p>

                                <p>
                                    Since 1987, Pilco has been engaged in manufacturing and supplying
                                    a wide range of storage products, including plastic pallets, heavy
                                    duty pallet racks, storage racks, mezzanine floors, cantilever racks,
                                    display racks, flow racks, cable trays and cable ducts. With a focus
                                    on quality, innovation and dependable service, we serve diverse
                                    storage requirements across industries.
                                </p>

                                <a
                                    href="/about"
                                    className="btn pilco-btn px-4 py-3 mt-3"
                                >
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
                                <div className="img-box">
                                    <img
                                        src="/img/about-sec.jpg"
                                        alt="PILCO Industrial Factory"
                                        className="img-fluid"
                                    />
                                </div>


                                {/* Experience Badge */}
                                <div className="experience-badge">

                                    <div className="experience-number">
                                        39+
                                    </div>

                                    <span>
                                        Years of Experience
                                    </span>

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
                        <div className="col-md-6 left">

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
                                    <li>
                                        Heavy duty storage racks for high-load applications
                                    </li>
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
                        <div className="col-md-6 right">

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
                                    <li>
                                        Efficient use of vertical and floor storage space
                                    </li>
                                    <li>
                                        Storage systems for light and heavy goods
                                    </li>
                                    <li>
                                        Flexible solutions for different warehouse layouts
                                    </li>
                                    <li>
                                        Designed for efficient material handling and access
                                    </li>
                                </ul>

                            </div>

                        </div>


                        {/* ================= FULL WIDTH ================= */}
                        <div className="col-12">

                            <div className="content mt-2">

                                <div className="heading text-center">
                                    Complete Material Storage
                                    <br />
                                    Solutions by Pilco
                                </div>

                                <p>
                                    Beyond storage racks, Pilco offers a wide range of material
                                    storage products including plastic pallets, heavy duty pallet
                                    racks, mezzanine floors, cantilever racks, display racks,
                                    flow racks, cable trays and cable ducts. With experience
                                    dating back to 1987, Pilco combines manufacturing and supply
                                    capabilities to meet diverse storage requirements.
                                </p>

                                <p>
                                    Our products are developed with a focus on strength, load
                                    capacity, durability and practical storage needs, helping
                                    customers create more organized and productive industrial
                                    and warehouse environments.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>


            </div>
            {/* company-info end */}

            {/* why choose start */}
            <section id="why-choose-us" className="py-lg-5 py-3 mt-5">
                <div className="container py-lg-5">

                    <div className="text-center mx-auto why-head mb-5">

                        <div className="small-title">
                            WHY CHOOSE PILCO
                        </div>

                        <h2 className="heading">
                            Reliable Storage Solutions Built for Industry
                        </h2>

                        <p>
                            With experience since 1987, Pilco delivers dependable storage
                            systems designed for strength, efficiency, durability and
                            practical warehouse requirements.
                        </p>

                    </div>


                    <div className="row">

                        {/* 01 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="choose-item d-flex gap-3">

                                <div className="choose-icon">
                                    <i className="bi bi-building"></i>
                                </div>

                                <div>
                                    <h5>Since 1987</h5>
                                    <p>
                                        Decades of experience in industrial and warehouse
                                        storage solutions with a strong focus on quality
                                        and customer satisfaction.
                                    </p>
                                </div>

                            </div>
                        </div>


                        {/* 02 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="choose-item d-flex gap-3">

                                <div className="choose-icon">
                                    <i className="bi bi-gear-wide-connected"></i>
                                </div>

                                <div>
                                    <h5>Manufacturing Expertise</h5>
                                    <p>
                                        Strong manufacturing capabilities for reliable
                                        storage racks and material storage solutions.
                                    </p>
                                </div>

                            </div>
                        </div>


                        {/* 03 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="choose-item d-flex gap-3">

                                <div className="choose-icon">
                                    <i className="bi bi-box-seam"></i>
                                </div>

                                <div>
                                    <h5>Wide Product Range</h5>
                                    <p>
                                        From pallet racks and storage racks to pallets,
                                        mezzanine floors, cantilever racks and flow racks.
                                    </p>
                                </div>

                            </div>
                        </div>


                        {/* 04 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="choose-item d-flex gap-3">

                                <div className="choose-icon">
                                    <i className="bi bi-shield-check"></i>
                                </div>

                                <div>
                                    <h5>Quality & Durability</h5>
                                    <p>
                                        Products designed with quality materials for
                                        strength, durability and dependable performance.
                                    </p>
                                </div>

                            </div>
                        </div>


                        {/* 05 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="choose-item d-flex gap-3">

                                <div className="choose-icon">
                                    <i className="bi bi-grid-3x3-gap"></i>
                                </div>

                                <div>
                                    <h5>Efficient Storage</h5>
                                    <p>
                                        Practical storage systems that help maximize
                                        available space and improve warehouse organization.
                                    </p>
                                </div>

                            </div>
                        </div>


                        {/* 06 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="choose-item d-flex gap-3">

                                <div className="choose-icon">
                                    <i className="bi bi-sliders"></i>
                                </div>

                                <div>
                                    <h5>Flexible Solutions</h5>
                                    <p>
                                        Storage solutions suited to different warehouse
                                        layouts, product types, load requirements and
                                        business needs.
                                    </p>
                                </div>

                            </div>
                        </div>


                        {/* 07 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="choose-item d-flex gap-3">

                                <div className="choose-icon">
                                    <i className="bi bi-truck"></i>
                                </div>

                                <div>
                                    <h5>Reliable Supply</h5>
                                    <p>
                                        Manufacturing and supply capabilities to support
                                        diverse industrial and warehouse storage needs.
                                    </p>
                                </div>

                            </div>
                        </div>


                        {/* 08 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="choose-item d-flex gap-3">

                                <div className="choose-icon">
                                    <i className="bi bi-lightbulb"></i>
                                </div>

                                <div>
                                    <h5>Innovation</h5>
                                    <p>
                                        Continuous focus on practical ideas and improved
                                        storage solutions for changing industry requirements.
                                    </p>
                                </div>

                            </div>
                        </div>


                        {/* 09 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="choose-item d-flex gap-3">

                                <div className="choose-icon">
                                    <i className="bi bi-headset"></i>
                                </div>

                                <div>
                                    <h5>After-Sales Support</h5>
                                    <p>
                                        Dedicated customer support focused on dependable
                                        service and long-term relationships.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* why choose end */}

            {/* industries start */}
            <section id="industries" className="py-lg-5 py-3">
                <div className="container-lg py-lg-5 py-3">

                    {/* Heading */}
                    <div className="row text-center mb-4">

                        {/* <div className="top-head mb-2">
                                Our Categories
                            </div> */}

                        <h2 className="heading mb-0">
                            Industries We Serve

                        </h2>


                    </div>


                    {/* Slider */}
                    <div className="position-relative category-slider-wrap">

                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={24}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 2800,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                nextEl: ".category-next",
                                prevEl: ".category-prev",
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 2,
                                },
                                576: {
                                    slidesPerView: 2,
                                },
                                992: {
                                    slidesPerView: 3,
                                },
                                1200: {
                                    slidesPerView: 4,
                                },

                            }}
                            className="categorySwiper"
                        >

                            {/* 1 */}
                            <SwiperSlide>
                                <div className="card" >
                                    <img
                                        src="/img/ind-1.jpg"
                                        className="card-img-top"
                                        alt="Product"
                                    />

                                    <div className="card-body">
                                        <h5 className="card-title">Warehousing & Logistics</h5>

                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* 1 */}
                            <SwiperSlide>
                                <div className="card even" >
                                    <img
                                        src="/img/ind-1.jpg"
                                        className="card-img-top"
                                        alt="Product"
                                    />

                                    <div className="card-body">
                                        <h5 className="card-title">Manufacturing</h5>

                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* 1 */}
                            <SwiperSlide>
                                <div className="card" >
                                    <img
                                        src="/img/ind-1.jpg"
                                        className="card-img-top"
                                        alt="Product"
                                    />

                                    <div className="card-body">
                                        <h5 className="card-title">Automotive</h5>

                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* 1 */}
                            <SwiperSlide>
                                <div className="card even" >
                                    <img
                                        src="/img/ind-1.jpg"
                                        className="card-img-top"
                                        alt="Product"
                                    />

                                    <div className="card-body">
                                        <h5 className="card-title">Food & Beverage</h5>

                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* 1 */}
                            <SwiperSlide>
                                <div className="card even" >
                                    <img
                                        src="/img/ind-1.jpg"
                                        className="card-img-top"
                                        alt="Product"
                                    />

                                    <div className="card-body">
                                        <h5 className="card-title">Pharmaceutical</h5>

                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* 1 */}
                            <SwiperSlide>
                                <div className="card even" >
                                    <img
                                        src="/img/ind-1.jpg"
                                        className="card-img-top"
                                        alt="Product"
                                    />

                                    <div className="card-body">
                                        <h5 className="card-title">FMCG</h5>

                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* 1 */}
                            <SwiperSlide>
                                <div className="card even" >
                                    <img
                                        src="/img/ind-1.jpg"
                                        className="card-img-top"
                                        alt="Product"
                                    />

                                    <div className="card-body">
                                        <h5 className="card-title">Agriculture & Cold Storage</h5>

                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* 1 */}
                            <SwiperSlide>
                                <div className="card even" >
                                    <img
                                        src="/img/ind-1.jpg"
                                        className="card-img-top"
                                        alt="Product"
                                    />

                                    <div className="card-body">
                                        <h5 className="card-title">E-commerce & Retail</h5>

                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* 1 */}
                            <SwiperSlide>
                                <div className="card even" >
                                    <img
                                        src="/img/ind-1.jpg"
                                        className="card-img-top"
                                        alt="Product"
                                    />

                                    <div className="card-body">
                                        <h5 className="card-title">Electrical & Electronics</h5>

                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* 1 */}
                            <SwiperSlide>
                                <div className="card even" >
                                    <img
                                        src="/img/ind-1.jpg"
                                        className="card-img-top"
                                        alt="Product"
                                    />

                                    <div className="card-body">
                                        <h5 className="card-title">Chemical & Petrochemical</h5>

                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* 1 */}
                            <SwiperSlide>
                                <div className="card even" >
                                    <img
                                        src="/img/ind-1.jpg"
                                        className="card-img-top"
                                        alt="Product"
                                    />

                                    <div className="card-body">
                                        <h5 className="card-title">Construction & Infrastructure</h5>

                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* 1 */}
                            <SwiperSlide>
                                <div className="card even" >
                                    <img
                                        src="/img/ind-1.jpg"
                                        className="card-img-top"
                                        alt="Product"
                                    />

                                    <div className="card-body">
                                        <h5 className="card-title">Export & Shipping</h5>

                                    </div>
                                </div>
                            </SwiperSlide>



                        </Swiper>




                    </div>

                </div>
            </section>
            {/* industries end */}

            {/* product-sec start */}
            <section id="product-sec" className="py-lg-5 py-3 side-space">
                <div className="container-fluid py-lg-5 py-3 ">

                    {/* Heading */}
                    <div className="text-center mb-5">

                        <div className="top-head mb-2">
                            Our Products
                        </div>

                        <h2 className="heading mb-3">
                            Quality Storage Solutions
                        </h2>

                        <p className="product-desc mx-auto">
                            Explore reliable racks, pallets and storage systems built for
                            modern warehouses and industrial applications.
                        </p>

                    </div>


                    {/* Product Slider */}
                    <div className="position-relative">

                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={22}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 2800,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                nextEl: ".product-next",
                                prevEl: ".product-prev",
                            }}
                            breakpoints={{
                                576: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1200: {
                                    slidesPerView: 4,
                                },
                                1400: {
                                    slidesPerView: 5,
                                },
                            }}
                            className="productSwiper"
                        >

                            {/* Product 1 */}
                            <SwiperSlide>
                                <div className="product-card">

                                    <div className="product-img">
                                        <img
                                            src="/img/Plastic-Pallets/1.png"
                                            alt="Plastic Extrusion Plant"
                                        />
                                    </div>

                                    <div className="product-content text-center">
                                        <h5>Plastic Pallets</h5>

                                        <a
                                            href="/products"
                                            className="btn pilco-btn px-4 py-2"
                                        >
                                            View Product
                                            <i className="bi bi-arrow-right ms-2"></i>
                                        </a>
                                    </div>

                                </div>
                            </SwiperSlide>


                            {/* Product 2 */}
                            <SwiperSlide>
                                <div className="product-card">

                                    <div className="product-img">
                                        <img
                                            src="/img/Cable-Tray/1.png"
                                            alt="PVC Pipe Plant"
                                        />
                                    </div>

                                    <div className="product-content text-center">
                                        <h5>Cable Tray</h5>

                                        <a
                                            href="/products"
                                            className="btn pilco-btn px-4 py-2"
                                        >
                                            View Product
                                            <i className="bi bi-arrow-right ms-2"></i>
                                        </a>
                                    </div>

                                </div>
                            </SwiperSlide>


                            {/* Product 3 */}
                            <SwiperSlide>
                                <div className="product-card">

                                    <div className="product-img">
                                        <img
                                            src="/img/Plastic-Crates/1.png"
                                            alt="Plastic Dana Machine"
                                        />
                                    </div>

                                    <div className="product-content text-center">
                                        <h5>Plastic Crates</h5>

                                        <a
                                            href="/products"
                                            className="btn pilco-btn px-4 py-2"
                                        >
                                            View Product
                                            <i className="bi bi-arrow-right ms-2"></i>
                                        </a>
                                    </div>

                                </div>
                            </SwiperSlide>


                            {/* Product 4 */}
                            <SwiperSlide>
                                <div className="product-card">

                                    <div className="product-img">
                                        <img
                                            src="/img/Warehouse-Racks/1.png"
                                            alt="Garden Pipe Plant"
                                        />
                                    </div>

                                    <div className="product-content text-center">
                                        <h5>Warehouse Racks</h5>

                                        <a
                                            href="/products"
                                            className="btn pilco-btn px-4 py-2"
                                        >
                                            View Product
                                            <i className="bi bi-arrow-right ms-2"></i>
                                        </a>
                                    </div>

                                </div>
                            </SwiperSlide>
                            {/* Product 4 */}
                            <SwiperSlide>
                                <div className="product-card">

                                    <div className="product-img">
                                        <img
                                            src="/img/Industrial-Storage-Crate/1.png"
                                            alt="Garden Pipe Plant"
                                        />
                                    </div>

                                    <div className="product-content text-center">
                                        <h5>Industrial Storage Crate</h5>

                                        <a
                                            href="/products"
                                            className="btn pilco-btn px-4 py-2"
                                        >
                                            View Product
                                            <i className="bi bi-arrow-right ms-2"></i>
                                        </a>
                                    </div>

                                </div>
                            </SwiperSlide>

                            {/* Product 4 */}
                            <SwiperSlide>
                                <div className="product-card">

                                    <div className="product-img">
                                        <img
                                            src="/img/Industrial-Pallets/1.png"
                                            alt="Garden Pipe Plant"
                                        />
                                    </div>

                                    <div className="product-content text-center">
                                        <h5>Industrial Pallets</h5>

                                        <a
                                            href="/products"
                                            className="btn pilco-btn px-4 py-2"
                                        >
                                            View Product
                                            <i className="bi bi-arrow-right ms-2"></i>
                                        </a>
                                    </div>

                                </div>
                            </SwiperSlide>

                            {/* Product 4 */}
                            <SwiperSlide>
                                <div className="product-card">

                                    <div className="product-img">
                                        <img
                                            src="/img/Vegetable-Crate/1.png"
                                            alt="Garden Pipe Plant"
                                        />
                                    </div>

                                    <div className="product-content text-center">
                                        <h5>Vegetable Crate</h5>

                                        <a
                                            href="/products"
                                            className="btn pilco-btn px-4 py-2"
                                        >
                                            View Product
                                            <i className="bi bi-arrow-right ms-2"></i>
                                        </a>
                                    </div>

                                </div>
                            </SwiperSlide>

                            {/* Product 4 */}
                            <SwiperSlide>
                                <div className="product-card">

                                    <div className="product-img">
                                        <img
                                            src="/img/Storage-Racks/1.png"
                                            alt="Garden Pipe Plant"
                                        />
                                    </div>

                                    <div className="product-content text-center">
                                        <h5>Storage Racks</h5>

                                        <a
                                            href="/products"
                                            className="btn pilco-btn px-4 py-2"
                                        >
                                            View Product
                                            <i className="bi bi-arrow-right ms-2"></i>
                                        </a>
                                    </div>

                                </div>
                            </SwiperSlide>




                        </Swiper>


                    </div>

                </div>
            </section>
            {/* product-sec end */}



            {/* stats-sec start */}

            <section id="stats-sec" className="py-5">
                <div className="container py-lg-5 py-4">

                    {/* TOP COUNTER */}
                    <div className="text-center stats-content mx-auto">

                        <div className="main-counter">
                            <Counter end={4500} suffix="+" />

                            <span className="counter-underline"></span>
                        </div>

                        <h2 className="heading mt-4">
                            Happy Customers
                        </h2>

                        <p className="stats-desc mx-auto mt-3">
                            Pilco has built lasting customer relationships by delivering
                            reliable industrial and warehouse storage solutions with a
                            strong focus on quality, durability and dependable service.
                        </p>

                    </div>


                    {/* BOTTOM COUNTERS */}
                    <div className="row justify-content-center text-center g-4 mt-lg-4 mt-3">

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="stat-item">

                                <div className="stat-number">
                                    <Counter end={39} />
                                </div>

                                <h6>Years of Experience</h6>

                            </div>
                        </div>


                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="stat-item">

                                <div className="stat-number">
                                    <Counter end={100} suffix="+" />
                                </div>

                                <h6>Storage Products</h6>

                            </div>
                        </div>


                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="stat-item">

                                <div className="stat-number">
                                    <Counter end={30} />
                                </div>

                                <h6>Storage Categories</h6>

                            </div>
                        </div>

                    </div>

                </div>
            </section>
            {/* stats-sec end */}

            {/* usp-sec start */}
            <section id="usp-sec" className="py-5">
                <div className="container">


                    <div className="row g-3 justify-content-center">

                        <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                            <div className="usp-card text-center h-100">
                                <div className="usp-icon">
                                    <i className="bi bi-tags"></i>
                                </div>

                                <h6>
                                    Best Wholesale
                                    <br />
                                    Pricing
                                </h6>
                            </div>
                        </div>


                        <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                            <div className="usp-card text-center h-100">
                                <div className="usp-icon">
                                    <i className="bi bi-patch-check"></i>
                                </div>

                                <h6>
                                    Premium Quality
                                    <br />
                                    Products
                                </h6>
                            </div>
                        </div>


                        <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                            <div className="usp-card text-center h-100">
                                <div className="usp-icon">
                                    <i className="bi bi-emoji-smile"></i>
                                </div>

                                <h6>
                                    100% Customer
                                    <br />
                                    Satisfaction
                                </h6>
                            </div>
                        </div>


                        <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                            <div className="usp-card text-center h-100">
                                <div className="usp-icon">
                                    <i className="bi bi-box-seam"></i>
                                </div>

                                <h6>
                                    Best Packaging
                                    <br />
                                    In The Industry
                                </h6>
                            </div>
                        </div>


                        <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                            <div className="usp-card text-center h-100">
                                <div className="usp-icon">
                                    <i className="bi bi-headset"></i>
                                </div>

                                <h6>
                                    Dedicated Customer
                                    <br />
                                    Service
                                </h6>
                            </div>
                        </div>


                        <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                            <div className="usp-card text-center h-100">
                                <div className="usp-icon">
                                    <i className="bi bi-truck"></i>
                                </div>

                                <h6>
                                    Lowest Global
                                    <br />
                                    Shipping Rates
                                </h6>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            {/* usp-sec end */}

        </>
    )
}

export default Home
