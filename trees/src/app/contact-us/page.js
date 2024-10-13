'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        topic: 'general'
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required";
        if (!formData.email.trim()) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is invalid";
        }
        if (!formData.message.trim()) tempErrors.message = "Message is required";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    setIsSubmitted(true);
                    setFormData({ name: '', email: '', message: '', topic: 'general' });
                } else {
                    const errorData = await response.json();
                    setErrors({ submit: errorData.message || 'An error occurred. Please try again.' });
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                setErrors({ submit: 'An error occurred. Please try again.' });
            }
        }
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4"
            >
                <h2 className="text-3xl font-bold text-emerald-700 mb-4">Thank You!</h2>
                <p className="text-lg text-emerald-600 text-center">
                    Your message has been received. We'll get back to you soon!
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition duration-300"
                >
                    Send Another Message
                </motion.button>
            </motion.div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4 flex flex-col justify-center items-center">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full"
            >
                <h2 className="text-3xl font-bold text-emerald-700 mb-6 text-center">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-emerald-600">Name</label>
                        <motion.input
                            whileFocus={{ scale: 1.02 }}
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50 ${errors.name ? 'border-red-500' : ''}`}
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-emerald-600">Email</label>
                        <motion.input
                            whileFocus={{ scale: 1.02 }}
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50 ${errors.email ? 'border-red-500' : ''}`}
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="topic" className="block text-sm font-medium text-emerald-600">Topic</label>
                        <select
                            id="topic"
                            name="topic"
                            value={formData.topic}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
                        >
                            <option value="general">General Inquiry</option>
                            <option value="support">Support</option>
                            <option value="feedback">Feedback</option>
                            <option value="partnership">Partnership</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-emerald-600">Message</label>
                        <motion.textarea
                            whileFocus={{ scale: 1.02 }}
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50 ${errors.message ? 'border-red-500' : ''}`}
                        ></motion.textarea>
                        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                    </div>
                    {errors.submit && <p className="text-xs text-red-500">{errors.submit}</p>}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 transition duration-300"
                    >
                        Send Message
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default ContactUs;