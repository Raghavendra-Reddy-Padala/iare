"use client";

import { useState } from "react";
import { GL } from "../gl";
import { Pill } from "../pill";
import { Button } from "../ui/button";

const FORMSPREE_ENDPOINT = "xrbywkdz";

export default function ContactSection() {
    const [hovering, setHovering] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const departments = [
        {
            name: 'Convenor',
            email: 'rd.shobharani@iare.ac.in',
            phone: '+91 9550080044',
            head: 'Dr. D Shobha Rani'
        },
        {
            name: 'Co-Convenor',
            email: 'p.srilatha@iare.ac.in',
            phone: '+91 9966009088',
            head: 'Dr. P Srilatha'
        },
        {
            name: 'Student Co-ordinator',
            email: 'karthiktatineni34@gmail.com',
            phone: '+91 7995466261',
            head: 'Tatineni Karthik sai'
        },
        {
            name: 'Student Co-ordinator',
            email: 'saicharansilar24@gmail.com',
            phone: '+91 8499941104',
            head: 'Silar Sai Charan'
        },
        {
            name: 'Student Co-ordinator',
            email: 'Mchaitanya2369@gmail.com',
            phone: '+91 8328371671',
            head: 'M. Jaya Chaitanya reddy'
        },
        {
            name: 'Student Co-ordinator',
            email: 'renukaunnam13@gmail.com',
            phone: '+91 8019491793',
            head: 'Renuka Unnam'
        },
        {
            name: 'Student Co-ordinator',
            email: 'monicajampa2005@gmail.com',
            phone: '+91 8374070679',
            head: 'J Monica'
        }
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ENDPOINT}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <div className="flex flex-col min-h-screen items-center justify-center py-35 px-4">
            <GL hovering={hovering} />

            <div className="text-center relative z-10 max-w-6xl w-full">
                <Pill className="mb-6 md:mb-8">CONTACT US</Pill>

                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-sentient font-extrabold leading-none tracking-tighter">
                    Get in Touch
                    <span className="block mt-3 text-3xl sm:text-4xl md:text-5xl text-gray-400">
                        <i className="font-light">We're Here to Help</i>
                    </span>
                </h2>

                <p className="font-mono text-base sm:text-lg text-foreground/70 text-balance mt-8 max-w-2xl mx-auto">
                    Have questions about Consortium 2025? Reach out to us and we'll get back to you as soon as possible.
                </p>

                {/* Contact Form */}
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="text-left">
                        <h3 className="text-2xl font-sentient font-bold mb-6">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-mono text-foreground/70 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-transparent border border-foreground/20 focus:border-foreground/40 outline-none transition-colors font-mono"
                                    onMouseEnter={() => setHovering(true)}
                                    onMouseLeave={() => setHovering(false)}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-mono text-foreground/70 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-transparent border border-foreground/20 focus:border-foreground/40 outline-none transition-colors font-mono"
                                    onMouseEnter={() => setHovering(true)}
                                    onMouseLeave={() => setHovering(false)}
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-mono text-foreground/70 mb-2">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-transparent border border-foreground/20 focus:border-foreground/40 outline-none transition-colors font-mono"
                                    onMouseEnter={() => setHovering(true)}
                                    onMouseLeave={() => setHovering(false)}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-mono text-foreground/70 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-transparent border border-foreground/20 focus:border-foreground/40 outline-none transition-colors font-mono resize-none"
                                    onMouseEnter={() => setHovering(true)}
                                    onMouseLeave={() => setHovering(false)}
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full py-4"
                                onMouseEnter={() => setHovering(true)}
                                onMouseLeave={() => setHovering(false)}
                            >
                                {status === 'submitting' ? '[Sending...]' : '[Send Message]'}
                            </Button>

                            {status === 'success' && (
                                <p className="text-green-500 font-mono text-sm text-center">
                                    Message sent successfully!
                                </p>
                            )}

                            {status === 'error' && (
                                <p className="text-red-500 font-mono text-sm text-center">
                                    Something went wrong. Please try again.
                                </p>
                            )}
                        </form>
                    </div>

                    <div className="text-left">
                        <h3 className="text-2xl font-sentient font-bold mb-6">Find Us</h3>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.059126552245!2d78.41515037516982!3d17.599926983323957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8ecfe1af26dd%3A0x65666fa3c4a256d2!2sInstitute%20of%20Aeronautical%20Engineering!5e0!3m2!1sen!2sin!4v1761156512865!5m2!1sen!2sin" 
                            width="100%" 
                            height="450" 
                            style={{border: 0, borderRadius: '12px'}}
                            allowFullScreen={true}
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="IARE College Location Map"
                        />
                    </div>
                </div>

                {/* Coordinators Section */}
                <div className="mt-20">
                    <h3 className="text-3xl sm:text-4xl font-sentient font-bold mb-12">Our Coordinators</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {departments.map((dept, index) => (
                            <div
                                key={index}
                                className="border border-foreground/20 p-6 text-left transition-all duration-300 hover:border-foreground/40"
                                onMouseEnter={() => setHovering(true)}
                                onMouseLeave={() => setHovering(false)}
                            >
                                <div className="text-xs font-mono text-foreground/50 mb-2">
                                    {dept.name}
                                </div>
                                <div className="text-xl font-sentient font-bold mb-4">
                                    {dept.head}
                                </div>
                                <div className="space-y-2 font-mono text-sm text-foreground/70">
                                    <a 
                                        href={`mailto:${dept.email}`}
                                        className="block hover:text-foreground transition-colors"
                                    >
                                        {dept.email}
                                    </a>
                                    <a 
                                        href={`tel:${dept.phone}`}
                                        className="block hover:text-foreground transition-colors"
                                    >
                                        {dept.phone}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}