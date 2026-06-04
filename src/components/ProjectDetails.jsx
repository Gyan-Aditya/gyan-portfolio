// import {motion} from 'motion/react';

// const BASE_URL = import.meta.env.BASE_URL;
// const resolveAssetUrl = (path) => path?.startsWith("/") ? path : `${BASE_URL}${path}`;

// const ProjectDetails = ({title, description, subDescription, image, tags, href,closeModal}) => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
//       <motion.div className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10" initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}}>
//         <button onClick={closeModal} className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500">
//             <img src={resolveAssetUrl('assets/close.svg')} className="w-6 h-6"/>
//         </button>
//         <img src={resolveAssetUrl(image)} alt={title} className="w-full rounded-t-2xl"/>
//         <div className="p-5">
//             <h5 className="mb-2 text-2xl font-bold text-white ">{title}</h5>
//             <p className="mb-3 font-normal text-neutral-400">{description}</p>
//             {subDescription.map((subDesc,index)=>(<p key={index} className="mb-3 font-normal text-neutral-400">{subDesc}</p>))}
//         </div>
//         <div className="flex items-center justify-between mt-4">
//             <div className="flex gap-3">
//                 {tags.map((tag)=>(<img key={tag.id} src={resolveAssetUrl(tag.path)} alt={tag.name} className="rounded-lg size-10 hover-animation"/>))}
//             </div>
//             <a className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"href={href}>
//                 View Project <img src={resolveAssetUrl('assets/arrow-up.svg')} className="size-4" />
//             </a>
//         </div>
//       </motion.div>
//     </div>
//   )
// }

// export default ProjectDetails


import { motion } from 'motion/react';

const BASE_URL = import.meta.env.BASE_URL;
const resolveAssetUrl = (path) => path?.startsWith("/") ? path : `${BASE_URL}${path}`;

const ProjectDetails = ({ title, description, subDescription, image, tags, href, closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-hidden backdrop-blur-md bg-black/40">
      {/* Backdrop Click Dismissal */}
      <div className="absolute inset-0" onClick={closeModal} />

      <motion.div 
        className="relative w-full max-w-2xl border shadow-2xl rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 overflow-y-auto max-h-[90vh] z-10 p-6"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
      >
        <button onClick={closeModal} className="absolute p-2 rounded-xl top-4 right-4 bg-midnight/80 border border-white/10 hover:bg-neutral-800 transition-colors cursor-pointer z-20">
          <img src={resolveAssetUrl('assets/close.svg')} className="w-5 h-5" alt="close"/>
        </button>

        <img src={resolveAssetUrl(image)} alt={title} className="w-full h-auto rounded-xl object-cover mb-6 border border-white/5" />
   
        <div>
          <h5 className="mb-3 text-2xl font-bold text-white tracking-tight">{title}</h5>
          <p className="mb-4 font-normal text-neutral-300 leading-relaxed">{description}</p>
          <div className="space-y-2 mb-6">
            {subDescription.map((subDesc, index) => (
              <p key={index} className="text-sm font-normal text-neutral-400 flex items-start gap-2">
                <span className="text-lavender mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-lavender" />
                {subDesc}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
          <div className="flex gap-2">
            {tags.map((tag) => (
              <div key={tag.id} className="relative group/tag">
                <img src={resolveAssetUrl(tag.path)} alt={tag.name} className="rounded-lg size-9 p-1.5 bg-white/5 border border-white/10 hover-animation" />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-900 text-[10px] text-white px-2 py-0.5 rounded opacity-0 group-hover/tag:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">
                  {tag.name}
                </span>
              </div>
            ))}
          </div>
          <a className="inline-flex items-center gap-1.5 font-semibold text-sm bg-radial from-lavender to-royal px-4 py-2 rounded-xl cursor-pointer hover-animation shadow-md shadow-royal/20" href={href} target="_blank" rel="noreferrer">
            View Project <img src={resolveAssetUrl('assets/arrow-up.svg')} className="size-3.5 invert" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;