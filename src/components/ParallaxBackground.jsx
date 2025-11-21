import {motion,useScroll, useSpring, useTransform} from "motion/react";

const BASE_URL = import.meta.env.BASE_URL;

const ParallaxBackground = () => {
    const {scrollYProgress} =useScroll();
    const x=useSpring(scrollYProgress,{damping:50});
    const mountain3Y= useTransform(x,[0,0.5],["0%","70%"]);
    const planetsX= useTransform(x,[0,0.5],["0%","-20%"]);
    const mountain2Y= useTransform(x,[0,0.5],["0%","30%"]);
    const mountain1Y= useTransform(x,[0,0.5],["0%","0%"]);

    const assetUrl = (path) => `url(${BASE_URL}assets/${path})`;

  return (
    <section className='absolute inset-0 bg-black/40'>
        <div className="relative h-screen overflow-y-hidden">
            {/* Background Sky */}
            <div className='absolute inset-0 w-full h-screen -z-50' style={{
                backgroundImage: assetUrl("sky.jpg"),
                backgroundPosition: "bottom",
                backgroundSize: "cover",
            }}/>
            {/* Mountain Layer 3 */}
            <motion.div className="absolute inset-0 -z-40" style={{
                backgroundImage: assetUrl("mountain-3.png"),
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                y: mountain3Y,
            }}/>
            {/* Planets */}
            <motion.div className="absolute inset-0 -z-30" style={{
                backgroundImage: assetUrl("planets.png"),
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                x: planetsX,
            }}/>
            {/* Mountain Layer 2 */}
            <motion.div className="absolute inset-0 -z-20" style={{
                backgroundImage: assetUrl("mountain-2.png"),
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                y: mountain2Y,
            }}/>
            {/* Mountain Layer 1 */}
            <motion.div className="absolute inset-0 -z-10" style={{
                backgroundImage: assetUrl("mountain-1.png"),
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                y: mountain1Y,
            }}/>
        </div>
    </section>
  )
}

export default ParallaxBackground;
