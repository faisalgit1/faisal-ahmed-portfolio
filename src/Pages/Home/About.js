import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);
    return (
        <div
            data-aos="fade-down"
            id="about"
            className="lg:mb-32 my-20 w-5/6 mx-auto"
        ><h3 className="text-primary text-3xl font-bold text-center mr-2">
                About Me
            </h3>
            <div className="flex  items-center border-b-2 py-2 border-accent">

            </div>
            <div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-10">
                    <div data-aos="fade-right" className="">
                        <p className="text-accent mb-5 ">
                            Hey! I'm Faisal Ahmed Bijoy and I love to explore myself. I explore
                            lots of fields. At some moments, my interest grows in the
                            development sector.{" "}
                            <span className="text-primary">
                                Last 1 year I hold this sector and try to explore the
                                fields.
                            </span>
                        </p>

                        <p className="text-accent">
                            There were so many changes that happened to me.{" "}
                            <span className="text-primary">
                                I completed two courses fully and one course is running.
                            </span>{" "}
                            My passions always help me to survive. As you know, how depressed
                            the sector is! When you are stuck, the code is not working and
                            other issues. But, I never quite. I always hold and try to figure
                            out where is the problem and at the end I will always get success.
                        </p>
                    </div>

                    <div data-aos="fade-left">
                        <div className="flex flex-wrap justify-end">
                            <p className="py-3 px-5 border-2 border-accent rounded text-accent mr-3 mb-5">
                                HTML
                            </p>

                            <p className="py-3 px-5 border-2 border-accent rounded text-accent mr-3 mb-5">
                                CSS
                            </p>

                            <p className="py-3 px-5 border-2 border-accent rounded text-accent mr-3 mb-5">
                                BootStrap
                            </p>

                            <p className="py-3 px-5 border-2 border-accent rounded text-accent mr-3 mb-5">
                                Tailwind
                            </p>

                            <p className="py-3 px-5 border-2 border-accent rounded text-accent mr-3 mb-5">
                                JavaScript
                            </p>

                            <p className="py-3 px-5 border-2 border-accent rounded text-accent mr-3 mb-5">
                                React JS
                            </p>

                            <p className="py-3 px-5 border-2 border-accent rounded text-accent mr-3 mb-5">
                                Express
                            </p>

                            <p className="py-3 px-5 border-2 border-accent rounded text-accent mr-3 mb-5">
                                Node JS
                            </p>

                            <p className="py-3 px-5 border-2 border-accent rounded text-accent mr-3 mb-5">
                                MongoDB
                            </p>

                            <p className="py-3 px-5 border-2 border-accent rounded text-accent mr-3 mb-5">
                                Firebase
                            </p>

                            <p className="py-3 px-5 border-2 border-accent rounded text-accent mr-3 mb-5">
                                Wordpress
                            </p>

                            <p className="py-3 px-5 border-2 border-accent rounded text-accent mr-3 mb-5">
                                Elementor
                            </p>

                            <p className="py-3 px-5 border-2 border-accent rounded text-accent mr-3 mb-5">
                                Divi
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
