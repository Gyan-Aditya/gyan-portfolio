// 
import { Marquee } from "../components/Marquee";

const metrics = [
  { label: "CGPA", value: "8.51/10", detail: "KIIT University" },
  { label: "Placement", value: "Accenture", detail: "Future ASE" },
  { label: "Challenges", value: "150+", detail: "LeetCode Solved[cite: 1]" },
  { label: "Certifications", value: "AWS", detail: "Cloud Practitioner[cite: 1]" },
  { label: "Open Source", value: "Digitomize", detail: "Contributor[cite: 1]" },
  { label: "Internship", value: "AICTE", detail: "AI-ML Virtual[cite: 1]" },
];

export default function Testimonial() {
  return (
    <div className="section-spacing c-space">
      <h2 className="text-heading">Proven Excellence</h2>
      <p className="subtext mt-2 mb-12">Quantified achievements and verified engineering milestones[cite: 1].</p>
      
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:30s] gap-6">
          {metrics.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center min-w-[200px] p-6 grid-default-color border border-white/5 rounded-2xl hover:border-lavender/50 transition-colors">
              <span className="text-lavender text-xs font-bold uppercase tracking-tighter mb-2">{item.label}</span>
              <span className="text-3xl font-black text-white">{item.value}</span>
              <span className="text-neutral-500 text-[10px] mt-1 italic">{item.detail}</span>
            </div>
          ))}
        </Marquee>
        
        {/* Shadow Overlay for depth */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-primary"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}