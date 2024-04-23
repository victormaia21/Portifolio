import React, { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import CountUp from 'react-countup';

function Index() {
    const [estatisticasPosition, setEstatisticasPosition] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    
    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            setScrollPosition(currentPosition);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const updatePosition = () => {
            const estatisticasElement = document.querySelector(".estatisticas");
            if (estatisticasElement) {
                const positionFromTop = estatisticasElement.getBoundingClientRect().top;
                setEstatisticasPosition(positionFromTop);
            }
        };

        updatePosition();
        window.addEventListener("scroll", updatePosition);

        return () => {
            window.removeEventListener("scroll", updatePosition);
        };
    }, []);

    const windowHeight = window.innerHeight;
    const isNearBottom = estatisticasPosition !== null && estatisticasPosition - scrollPosition < windowHeight;

    return (
        <div className="estatisticas">
            <div>
                <span><FaPen/></span>
                {isNearBottom && <h1><CountUp end={28} duration={2.5} delay={0.5} className="count"/></h1>}
                <h2>Projetos</h2>
            </div>
            <div>
                <span><IoPeopleSharp/></span>
                {isNearBottom && <h1><CountUp end={10} duration={2.5} delay={0.5} className="count"/></h1>}
                <h2>Clientes Satisfeitos</h2>
            </div>
            <div>
                <span><FaRegLightbulb/></span>
                {isNearBottom && <h1><CountUp end={100} duration={2.5} delay={0.5} className="count"/></h1>}
                <h2>Ideias Surreais</h2>
            </div>
            <div>
                <span><FaCoffee/></span>
                {isNearBottom && <h1><CountUp end={1000} duration={2.5} delay={0.5} className="count"/></h1>}
                <h2>Copos de café</h2>
            </div>
            <div>
                <span><IoMdTime/></span>
                {isNearBottom && <h1><CountUp end={3000} duration={2.5} delay={0.5} className="count"/></h1>}
                <h2>Horas</h2>
            </div>
        </div>
    );
}

export default Index;
