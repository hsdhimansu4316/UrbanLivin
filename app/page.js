"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TopNav from "@/components/TopNav";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import NumberCounter from "@/components/NumberCounter";
import Banner2 from "@/components/Banner2";
import Navbar2 from "@/components/Navbar2";
import About from "@/components/About";
import BuildVision from "@/components/BuildVision";
import OurPartners from "@/components/OurPartners";
import OurClients from "@/components/OurClients";
import FeatureProject from "@/components/FeatureProject";
import Footer from "@/components/Footer";
import FeatureVideo from "@/components/FeatureVideo";
import PopupForm from "@/components/PopupForm";
import ScrollAnimation from "@/components/ScrollAnimation";
import OurPartner2 from "@/components/OurPartner2";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    useEffect(() => {
        gsap.utils.toArray(".parallax-item").forEach((item) => {
            gsap.fromTo(
                item,
                { opacity: 0, y: 50 }, // Initial state
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }, []);

    return (
        <main>
            <Navbar2 />

            <ScrollAnimation>
                <Banner2 />
            </ScrollAnimation>

            <ScrollAnimation>
                <About />
            </ScrollAnimation>

            <ScrollAnimation>
                <NumberCounter />
            </ScrollAnimation>

            <ScrollAnimation>
                <OurPartner2 />
            </ScrollAnimation>

            {/* <ScrollAnimation>
                <BuildVision />
            </ScrollAnimation> */}
            <ScrollAnimation>
                <FeatureVideo />
            </ScrollAnimation>

            <ScrollAnimation>
                <FeatureProject />
            </ScrollAnimation>

            <ScrollAnimation>
                <OurClients />
            </ScrollAnimation>

            <ScrollAnimation>
                <Footer />
            </ScrollAnimation>
        </main>
    );
}
