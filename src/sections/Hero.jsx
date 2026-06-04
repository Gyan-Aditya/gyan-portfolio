// import { Canvas, useFrame } from "@react-three/fiber"
// import HeroText from "../components/HeroText"
// import ParallaxBackground from "../components/ParallaxBackground"
// import { Astronaut } from "../components/Astronaut"
// import { Float } from "@react-three/drei"
// import { easing } from "maath"
// import { useMediaQuery } from "react-responsive"
// import { Suspense } from "react"
// import Loader from "../components/Loader"

// const Hero = () => {
//     const isMobile =useMediaQuery({maxWidth:853});
//   return (
//     <section id="home" className='flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space'>
//         <HeroText/>
//         <ParallaxBackground/>
//         <figure className="absolute inset-0" style={{width: "100vw", height:"100vh"}}>
//             <Canvas camera={{position:[0,1,3]}}>
//                 <Suspense fallback={<Loader/>}>
//                 <Float>
//                  <Astronaut scale={isMobile && 0.23} position={isMobile && [0,-1.5,0]}/>
//                 </Float>
//                 <Rig/>
//                 </Suspense>
//             </Canvas>
//         </figure>
//     </section>
//   )
// }

// function Rig(){
//     return useFrame((state,delta)=>{
//         easing.damp3(state.camera.position,[state.mouse.x/10,1+state.mouse.y/10,3],0.5,delta);
//     });
// }

// export default Hero

// import { useState } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import { Particles } from "../components/Particles";

// const Hero = () => {
//   const [activeFile, setActiveFile] = useState("Profile.json");

//   const files = [
//     { name: "Profile.json", icon: "{}", target: "home", color: "text-yellow-400" },
//     { name: "About.jsx", icon: "JS", target: "about", color: "text-blue-400" },
//     { name: "Projects.py", icon: "PY", target: "projects", color: "text-green-400" },
//     { name: "Education.ts", icon: "TS", target: "education", color: "text-royal" },
//     { name: "Contact.css", icon: "#", target: "contact", color: "text-fuchsia" },
//   ];

//   const handleFileClick = (target, fileName) => {
//     setActiveFile(fileName);
//     const element = document.getElementById(target);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section id="home" className="relative w-full h-screen overflow-hidden bg-primary flex items-center justify-center c-space">
//       <Particles className="absolute inset-0 z-0" quantity={100} staticity={50} color="#5c33cc" />

//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="relative z-10 w-full max-w-5xl h-[75vh] md:h-[650px] bg-[#06091f]/90 backdrop-blur-2xl border border-white/10 rounded-lg shadow-2xl flex flex-col overflow-hidden"
//       >
//         {/* IDE Tab Bar */}
//         <div className="w-full bg-white/5 border-b border-white/10 flex items-center px-4 justify-between">
//           <div className="flex">
//             {files.map((file) => (
//               <div 
//                 key={file.name}
//                 onClick={() => handleFileClick(file.target, file.name)}
//                 className={`px-4 py-3 text-xs font-mono flex items-center gap-2 cursor-pointer transition-colors border-r border-white/5 ${activeFile === file.name ? "bg-white/10 text-white border-b border-b-lavender" : "text-neutral-500 hover:bg-white/5"}`}
//               >
//                 <span className={`text-[10px] ${file.color}`}>{file.icon}</span>
//                 {file.name}
//               </div>
//             ))}
//           </div>
//           <div className="hidden md:flex gap-2 opacity-50">
//              <div className="w-3 h-3 rounded-full bg-white/10" />
//              <div className="w-3 h-3 rounded-full bg-white/10" />
//           </div>
//         </div>

//         <div className="flex flex-1 overflow-hidden">
//           {/* Sidebar / File Explorer */}
//           <div className="hidden md:flex w-48 bg-black/20 border-r border-white/10 flex-col p-4">
//             <p className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest mb-4">Explorer</p>
//             <div className="space-y-2">
//               <p className="text-xs text-neutral-400 font-mono flex items-center gap-2">
//                 <span className="opacity-50">▼</span> portfolio_v2
//               </p>
//               <div className="pl-4 space-y-2">
//                 {files.map((file) => (
//                   <div 
//                     key={file.name}
//                     onClick={() => handleFileClick(file.target, file.name)}
//                     className="text-xs text-neutral-500 font-mono hover:text-lavender cursor-pointer flex items-center gap-2 truncate"
//                   >
//                     <span className={file.color}>{file.icon}</span> {file.name}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Main Editor Window */}
//           <div className="flex-1 p-6 font-mono text-sm md:text-base overflow-y-auto custom-scrollbar bg-black/10">
//             <div className="flex gap-4">
//               {/* Line Numbers */}
//               <div className="text-neutral-700 text-right select-none pr-4 border-r border-white/5 hidden sm:block">
//                 {Array.from({ length: 15 }).map((_, i) => <p key={i}>{i + 1}</p>)}
//               </div>

//               {/* Code Content */}
//               <div className="flex-1">
//                 <span className="text-fuchsia">const</span> <span className="text-blue-400">developer</span> = {"{"}
//                 <div className="pl-6">
//                   <p><span className="text-neutral-400">name:</span> <span className="text-sand">"Gyan Aditya"</span>,</p>
//                   <p><span className="text-neutral-400">role:</span> <span className="text-sand">"Full-Stack Engineer"</span>,</p>
//                   <p><span className="text-neutral-400">status:</span> <span className="text-mint">"Placed @ Accenture"</span>,</p>
//                   <p><span className="text-neutral-400">location:</span> <span className="text-sand">"Bhubaneswar, IN"</span>,</p>
//                   <p><span className="text-neutral-400">skills:</span> [</p>
//                   <div className="pl-6 text-lavender">
//                     "MERN", "TensorFlow", "C++", "AWS"
//                   </div>
//                   <p>],</p>
//                   <p><span className="text-neutral-400">openToWork:</span> <span className="text-orange">true</span></p>
//                 </div>
//                 {"};"}

//                 <motion.div 
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 1 }}
//                   className="mt-12 p-6 bg-lavender/5 border border-lavender/20 rounded-lg max-w-xl"
//                 >
//                   <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">Building scalable software architectures.</h1>
//                   <p className="text-neutral-400 text-sm">
//                     Final year B.Tech student at KIIT with an 8.51 CGPA. 
//                     Passionate about AI/ML and modern web solutions.
//                   </p>
//                   <button 
//                     onClick={() => handleFileClick("projects", "Projects.py")}
//                     className="mt-6 px-6 py-2 bg-royal text-white rounded-md text-sm font-bold hover:bg-lavender transition-all cursor-pointer"
//                   >
//                     view_work()
//                   </button>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer Bar */}
//         <div className="w-full bg-royal/20 border-t border-white/10 px-4 py-1 flex items-center justify-between text-[10px] text-neutral-400 font-mono">
//           <div className="flex gap-4">
//             <span className="flex items-center gap-1 text-mint"><span className="w-2 h-2 rounded-full bg-mint animate-pulse"/> main*</span>
//             <span className="hidden sm:inline">0 Errors</span>
//             <span className="hidden sm:inline">0 Warnings</span>
//           </div>
//           <div className="flex gap-4">
//             <span>UTF-8</span>
//             <span>JavaScript React</span>
//           </div>
//         </div>
//       </motion.div>

//       {/* Background Decorative Glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-royal/10 rounded-full blur-[140px] pointer-events-none" />
//     </section>
//   );
// };

// export default Hero;

import { useState } from "react";
import { motion } from "motion/react";

const Hero = () => {
  const [storeState, setStoreState] = useState({
    activeView: "INDEX",
    academicCGPA: "8.51",
    placementStatus: "ACCENTURE_CONFIRMED"
  });

  const actions = [
    { type: "FETCH_BIOGRAPHY_DATA", payload: "about", tracking: "VIEW_ABOUT" },
    { type: "LOAD_COMPUTATIONAL_PROJECTS", payload: "projects", tracking: "VIEW_PROJECTS" },
    { type: "PULL_ACADEMIC_RECORDS", payload: "education", tracking: "VIEW_EDUCATION" },
    { type: "INITIALIZE_COMMS_HANDSHAKE", payload: "contact", tracking: "VIEW_CONTACT" },
  ];

  const dispatchAction = (type, payload, tracking) => {
    setStoreState((prev) => ({ ...prev, activeView: tracking }));
    document.getElementById(payload)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="w-full h-screen bg-[#030412] font-mono flex items-center justify-center p-6 relative overflow-hidden">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Side Reducer Dispatch Column */}
        <div className="md:col-span-7 flex flex-col gap-4 justify-center">
          <div>
            <span className="text-[10px] font-bold uppercase bg-royal/10 text-lavender border border-lavender/20 px-2.5 py-1 rounded-full">
              Event Dispatcher
            </span>
            <h1 className="text-2xl font-black text-white mt-4 mb-2">Unidirectional Data Architecture</h1>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-md mb-4">
              Dispatch immutable event actions to transition state views across application directory sections.
            </p>
          </div>

          <div className="space-y-2">
            {actions.map((act) => (
              <button
                key={act.type}
                onClick={() => dispatchAction(act.type, act.payload, act.tracking)}
                className="w-full text-left p-3 rounded-xl border border-white/5 bg-white/5 hover:bg-royal/10 hover:border-royal/40 text-xs transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-2 truncate pr-2">
                  <span className="text-neutral-600 font-bold text-[10px]">dispatch()</span>
                  <span className="text-white font-semibold truncate group-hover:text-lavender transition-colors">{act.type}</span>
                </div>
                <span className="text-neutral-500 shrink-0 text-[10px]">{"{ payload: '"}{act.payload}{"' }"}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side State Store Monitor Column */}
        <div className="md:col-span-5 bg-black/30 border border-white/5 rounded-2xl p-6 flex flex-col justify-between backdrop-blur-xl">
          <div>
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-4">
              <span className="text-xs font-bold text-neutral-400">State Tree Monitor</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-mint/10 text-mint font-bold border border-mint/20">LIVE</span>
            </div>
            
            <div className="text-xs sm:text-sm space-y-3 font-mono">
              <div>
                <p className="text-neutral-500">// current active node parameter</p>
                <p className="text-white">activeView: <span className="text-sand">"{storeState.activeView}"</span></p>
              </div>
              <div>
                <p className="text-neutral-500">// immutable university registry</p>
                <p className="text-white">academicCGPA: <span className="text-fuchsia">{storeState.academicCGPA}</span></p>
              </div>
              <div>
                <p className="text-neutral-500">// system entry allocation status</p>
                <p className="text-white">placementStatus: <span className="text-mint">"{storeState.placementStatus}"</span></p>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-neutral-600 mt-6 pt-2 border-t border-white/5">
            Store Listener: State Mutated via Strict Actions.
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;