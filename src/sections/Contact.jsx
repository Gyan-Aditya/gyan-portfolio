import { useState } from "react"
import emailjs from '@emailjs/browser';
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
const Contact = () => {
    const [formData, setFormData]=useState({name:'',email:'',message:''});
    const [isLoading, setIsLoading]=useState(false);
    const [showAlert, setShowAlert]=useState(false);
    const [alertType, setAlertType]=useState('');
    const [alertMessage, setAlertMessage]=useState('');
    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value});
    };
    const showAlertMessage = (type, message) => {
        setAlertType(type);
        setAlertMessage(message);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); 
        try {
            console.log("form submitted:",formData);
            await emailjs.send("service_i9dv5yv","template_wfpvo5b",{
                from_name: formData.name,
                to_name: "Gyan",
                from_email: formData.email,
                to_email: "gyanaditya2903@gmail.com",
                message: formData.message,
            },"yAjiP0BprVvc-ZSaD"); 
            setIsLoading(false);
            setFormData({name:'',email:'',message:''});
            showAlertMessage("success","Your message was sent successfully!.");
        } catch (error) {
            setIsLoading(false);
            console.error(error);
            showAlertMessage("danger","Something went wrong. Please try again.");
        }
    };
    // service_i9dv5yv
    // template_wfpvo5b
  return (
    <section id="contact"className="relative flex items-center c-space section-spacing">
        <Particles className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh/>
        { showAlert && <Alert type={alertType} text={alertMessage}/>}
        <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
            <div className="flex flex-col items-start w-full gap-5 mb-10">
                <h2 className="text-heading">Let's talk</h2>
                <p className="font-normal text-neutral-400">Whether you're looking to build a new website, improve your existing platform or bring a unique project to life, I'm here to help</p>
            </div>
            <form className="w-full" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="name" className="field-label">Full Name</label>
                    <input id='name' name='name' type='text' className="field-input field-input-focus" placeholder="John Doe" autoComplete="name" value={formData.name} onChange={handleChange} required/>
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="field-label">Email</label>
                    <input id='email' name='email' type='email' className="field-input field-input-focus" placeholder="JohnDoe@email.com" autoComplete="email" value={formData.email} onChange={handleChange} required/>
                </div>
                <div className="mb-5">
                    <label htmlFor="message" className="field-label">Message</label>
                    <textarea id='message' name='message' type='text' rows='4' className="field-input field-input-focus" placeholder="Share your thoughts..." autoComplete="message" value={formData.message} onChange={handleChange} required/>
                </div>
                <button type='submit' className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation">{!isLoading ? "Send" : "Sending..."}</button>
            </form>
        </div>
    </section>
  )
}

export default Contact
