// 


// import { useRef } from "react";
// import { Globe } from "../components/globe";
// import CopyEmailButton from "../components/CopyEmailButton";
// import { Frameworks } from "../components/Frameworks";

// const About = () => {
//   return (
//     <section id="about" className="c-space section-spacing">
//       <h2 className="text-heading">About Me</h2>
      
//       <div className="grid grid-cols-1 gap-5 md:grid-cols-6 lg:grid-cols-6 mt-12 auto-rows-auto">
        
//         {/* Card 1: Bio Hero */}
//         <div className="grid-default-color col-span-1 md:col-span-3 lg:col-span-4 p-8 flex flex-col justify-between min-h-[22rem] relative overflow-hidden group hover:-translate-y-1 duration-300">
//           <div className="absolute -right-10 -top-10 w-40 h-40 bg-royal/10 rounded-full blur-3xl pointer-events-none" />
//           <div className="z-10">
//             <span className="text-xs font-semibold uppercase tracking-widest text-lavender bg-lavender/10 px-3 py-1 rounded-full">
//               Introduction
//             </span>
//             <h3 className="text-2xl font-bold text-white mt-6 mb-4">Hi, I'm Gyan Aditya</h3>
//             <p className="subtext text-base leading-relaxed max-w-2xl">
//               A software developer completing a B.Tech in Computer Science and Engineering at KIIT[cite: 151]. 
//               I specialize in breaking down complex data structures and building back architecture that scales efficiently. 
//               From algorithm optimization to deep backend design, I treat programming as a precise craft.
//             </p>
//           </div>
//           <div className="mt-6 flex flex-wrap gap-3 z-10">
//             <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm">
//               🎓 KIIT CSE '26 [cite: 151]
//             </div>
//             <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm text-mint font-medium">
//               💼 Accenture Placed (ASE)
//             </div>
//           </div>
//         </div>

//         {/* Card 2: Strategic Pillars */}
//         <div className="grid-default-color col-span-1 md:col-span-3 lg:col-span-2 p-8 flex flex-col justify-between min-h-[22rem] hover:-translate-y-1 duration-300">
//           <div>
//             <span className="text-xs font-semibold uppercase tracking-widest text-sand bg-sand/10 px-3 py-1 rounded-full">
//               Core Principles
//             </span>
//             <h4 className="text-lg font-bold mt-6 mb-3">Architectural Focus</h4>
//             <ul className="space-y-3">
//               {["Modular Clean Code", "Algorithmic Efficiency (DSA)", "Object Oriented Design (OOPS)", "Secure Access Protocols"].map((item, idx) => (
//                 <li key={idx} className="flex items-center gap-2 text-sm text-neutral-400">
//                   <span className="w-1.5 h-1.5 bg-lavender rounded-full" />
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <p className="text-2xl font-black text-white/5 select-none self-end tracking-wider">
//             SYSTEM DESIGN
//           </p>
//         </div>

//         {/* Card 3: Dynamic Tech Stack */}
//         <div className="grid-default-color col-span-1 md:col-span-4 lg:col-span-4 p-8 min-h-[22rem] relative overflow-hidden flex flex-col justify-between hover:-translate-y-1 duration-300">
//           <div className="z-10 max-w-md">
//             <span className="text-xs font-semibold uppercase tracking-widest text-mint bg-mint/10 px-3 py-1 rounded-full">
//               Capabilities
//             </span>
//             <h4 className="text-xl font-bold mt-6 mb-2">Technical Core</h4>
//             <p className="subtext text-sm">
//               Fluent across systems programming, client layouts, machine learning models, and standard operations management platforms.
//             </p>
//           </div>
//           <div className="w-full relative h-[12rem] flex items-center justify-center mt-4">
//             <div className="absolute inset-0 scale-90 md:scale-100">
//               <Frameworks />
//             </div>
//           </div>
//         </div>

//         {/* Card 4: Global Availability */}
//         <div className="grid-black-color col-span-1 md:col-span-2 lg:col-span-2 p-8 min-h-[22rem] flex flex-col justify-between relative overflow-hidden hover:-translate-y-1 duration-300 [contain:content]">
//           <div className="z-10">
//             <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 bg-neutral-800 px-3 py-1 rounded-full">
//               Location
//             </span>
//             <h4 className="text-lg font-bold mt-6 mb-2">Based in India</h4>
//             <p className="subtext text-xs">Open to worldwide engineering roles.</p>
//           </div>
          
//           <div className="absolute -bottom-20 -right-20 w-64 h-64 opacity-80 pointer-events-none">
//             <Globe />
//           </div>
//         </div>

//         {/* Card 5: Collaboration Call to Action */}
//         <div className="grid-special-color col-span-1 md:col-span-6 p-10 text-center flex flex-col items-center justify-center gap-4 min-h-[14rem] hover:-translate-y-1 duration-300">
//           <h3 className="text-2xl font-bold text-white max-w-lg">
//             Let's build reliable software systems together.
//           </h3>
//           <p className="text-white/70 text-sm max-w-md -mt-1">
//             Currently accepting corporate project inquiries and engineering opportunities.
//           </p>
//           <div className="mt-2">
//             <CopyEmailButton />
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default About;

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Particles } from "../components/Particles";

const Hero = () => {
  const [code, setCode] = useState(
`import portfolio as pf
from sklearn.model_selection import train_test_split
from tensorflow.keras.models import Sequential

# 1. Initialize Gyan Aditya Profile Model
model = pf.GyanOS(cgpa=8.51, placement="Accenture")

# 2. Run target prediction query
# Options: "about", "projects", "education", "contact"
model.predict(target="about")`
  );

  const [consoleLogs, setConsoleLogs] = useState([
    "Python 3.10.12 runtime initialized.",
    "TensorFlow 2.15.0 successfully hooked.",
    "Ready for execution. Click 'Run Code' or change the target parameter.",
  ]);
  const [isRunning, setIsRunning] = useState(false);
  const consoleEndRef = useRef(null);

  useEffect(() => {
    consoleEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [consoleLogs]);

  const runMLCode = () => {
    setIsRunning(true);
    setConsoleLogs((prev) => [...prev, ">>> Running script..."]);

    // Simple parsing logic to read the user's input target string parameter dynamically
    const targetMatch = code.match(/target=["']([^"']+)["']/);
    const targetSection = targetMatch ? targetMatch[1].toLowerCase().trim() : "about";

    setTimeout(() => {
      setConsoleLogs((prev) => [
        ...prev,
        "Epoch 1/3: loss: 0.0412 - accuracy: 0.9420",
        "Epoch 2/3: loss: 0.0102 - accuracy: 0.9850",
        "Epoch 3/3: loss: 0.0024 - accuracy: 0.9981",
        `[SUCCESS] Model converged on classification route: /${targetSection}`,
        `Redirecting system layer to section: ${targetSection}...`
      ]);
      
      setIsRunning(false);

      // Trigger smooth scroll mapping anchors cleanly after the training epoch visualization loops
      setTimeout(() => {
        const targetElement = document.getElementById(targetSection);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        } else {
          setConsoleLogs((prev) => [...prev, `[ERROR] Runtime warning: Anchor link ID '#${targetSection}' not found.`]);
        }
      }, 1000);

    }, 1500);
  };

  return (
    <section id="home" className="relative w-full h-screen bg-[#020410] flex items-center justify-center font-mono p-4 overflow-hidden">
      <Particles className="absolute inset-0 opacity-15" quantity={80} color="#fbbf24" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-6xl h-[80vh] md:h-[680px] bg-[#070a22]/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Workspace Toolbar Controls */}
        <div className="w-full bg-white/5 border-b border-white/10 px-6 py-4 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/40" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
              <div className="w-3 h-3 rounded-full bg-green-500/40" />
            </div>
            <span className="text-xs font-bold text-neutral-400 bg-white/5 px-2.5 py-1 rounded border border-white/5">
              📂 gyan_model_training.ipynb
            </span>
          </div>

          <button
            onClick={runMLCode}
            disabled={isRunning}
            className={`px-5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer border shadow-lg ${
              isRunning 
                ? "bg-amber-500/10 text-amber-400 border-amber-500/30" 
                : "bg-radial from-amber-400 to-amber-600 text-black border-transparent font-black shadow-amber-500/10 hover:scale-[1.02]"
            }`}
          >
            {isRunning ? (
              <>
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                Fitting Model...
              </>
            ) : (
              <>▶ Run Python Script</>
            )}
          </button>
        </div>

        {/* IDE Split View Workspace Layout */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          
          {/* Left Panel: Python Script Textarea Editor */}
          <div className="lg:col-span-7 flex flex-col p-4 bg-black/20 border-r border-white/5 relative">
            <div className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider mb-2 pl-2">
              In [1]: Interactive Code Window
            </div>
            <div className="flex gap-4 flex-1 items-stretch">
              <div className="text-neutral-700 text-xs text-right select-none pr-2 hidden sm:block pt-1 leading-relaxed">
                {Array.from({ length: 11 }).map((_, i) => <p key={i}>{i + 1}</p>)}
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                spellCheck="false"
                className="flex-1 bg-transparent border-none outline-none text-neutral-200 font-mono text-xs md:text-sm resize-none leading-relaxed focus:ring-0 whitespace-pre scrollbar-none"
              />
            </div>
          </div>

          {/* Right Panel: Active Compilation Model Outputs */}
          <div className="lg:col-span-5 bg-black/40 p-5 flex flex-col justify-between overflow-y-auto">
            <div className="flex-1 flex flex-col">
              <div className="text-[10px] text-amber-400 font-bold uppercase tracking-widest mb-3 border-b border-white/5 pb-2 flex items-center justify-between">
                <span>Out [1]: Evaluation Logs</span>
                <span className="text-neutral-500 font-mono">Accuracy Tracker</span>
              </div>
              
              <div className="space-y-2 text-xs text-neutral-300 font-mono leading-relaxed max-h-[360px] overflow-y-auto">
                {consoleLogs.map((log, idx) => {
                  let logClass = "text-neutral-400";
                  if (log.startsWith(">>>") || log.startsWith(">")) logClass = "text-amber-300 font-bold";
                  if (log.startsWith("[SUCCESS]")) logClass = "text-mint font-bold";
                  if (log.startsWith("Epoch")) logClass = "text-lavender/90";
                  return <p key={idx} className={logClass}>{log}</p>;
                })}
                <div ref={consoleEndRef} />
              </div>
            </div>

            {/* Quick Context Reference Sheet Block */}
            <div className="mt-4 pt-4 border-t border-white/5 text-[10px] text-neutral-500 space-y-1">
              <p className="font-bold text-neutral-400 uppercase tracking-tight">Active Context Bindings:</p>
              <p>• cgpa_matrix = <span className="text-amber-400 font-bold">8.51</span> (KIIT CSE Registry)</p>
              <p>• destination_targets = [<span className="text-neutral-300">"about", "projects", "education", "contact"</span>]</p>
            </div>

          </div>

        </div>

        {/* Console Execution Status Bar Footer */}
        <div className="w-full bg-[#040616] border-t border-white/10 px-6 py-2 flex items-center justify-between text-[10px] text-neutral-500">
          <div className="flex gap-4">
            <span className="text-amber-400 font-semibold">● Kernel: Idle</span>
            <span>Memory Array Alloc: 12.4 MB</span>
          </div>
          <span>UTF-8 | LF | Python (DataScience Env)</span>
        </div>
      </motion.div>

      {/* Backdrop Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
    </section>
  );
};

export default Hero;