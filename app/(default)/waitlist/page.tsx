"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Types
interface FormData {
    name: string;
    email: string;
}

const WaitlistPage: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '' });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string>('');

    // OneSignal Configuration
    const ONESIGNAL_APP_ID = process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID;
    const ONESIGNAL_REST_API_KEY = process.env.NEXT_PUBLIC_ONESIGNAL_API_KEY;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setError('');
    };

    const validateEmail = (email: string): boolean => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const registerUserInOneSignal = async (email: string): Promise<string> => {
        try {
            const response = await fetch(`https://api.onesignal.com/apps/${ONESIGNAL_APP_ID}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Key ${ONESIGNAL_REST_API_KEY}`
                },
                body: JSON.stringify({
                    subscriptions: [
                        {
                            type: 'Email',
                            token: email,
                            enabled: true
                        }
                    ]
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.errors?.[0] || 'Registration error');
            }

            return data.identity?.external_id || data.id;
        } catch (err) {
            console.error('OneSignal registration error:', err);
            throw err;
        }
    };

    const sendWelcomeEmail = async (email: string, name: string): Promise<void> => {
        try {
            const response = await fetch('https://api.onesignal.com/notifications', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Key ${ONESIGNAL_REST_API_KEY}`
                },
                body: JSON.stringify({
                    app_id: ONESIGNAL_APP_ID,
                    target_channel: 'email',
                    email_to: [email],
                    email_subject: '🎉 Welcome to the Servelink Waitlist!',
                    email_body: `
            <html>
              <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                  <h1 style="color: #8b5cf6;">Welcome ${name}!</h1>
                  <p>Thank you for joining the <strong>Servelink</strong> waitlist 🚀</p>
                  <p>We're thrilled to have you among our future users. You'll be among the first to discover our modern deployment platform.</p>
                  <div style="background: #8b5cf6; padding: 20px; border-radius: 8px; margin: 30px 0;">
                    <h2 style="color: white; margin-top: 0;">What awaits you:</h2>
                    <ul style="color: white;">
                      <li>Simplified deployment for Laravel, Python, Node.js</li>
                      <li>Modern and intuitive interface</li>
                      <li>Support for the latest technologies</li>
                      <li>Early access to all features</li>
                    </ul>
                  </div>
                  <p>We'll keep you updated on our progress and contact you as soon as we launch!</p>
                  <p style="margin-top: 40px;">See you soon,<br><strong>The Servelink Team</strong></p>
                </div>
              </body>
            </html>
          `,
                    email_from_name: 'Servelink',
                    email_from_address: 'hello@servel.ink'
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.errors?.[0] || 'Email sending error');
            }
        } catch (err) {
            console.error('OneSignal email error:', err);
            throw err;
        }
    };

    const handleSubmit = async () => {
        setError('');

        if (!formData.name.trim()) {
            setError('Please enter your name');
            return;
        }

        if (!validateEmail(formData.email)) {
            setError('Please enter a valid email');
            return;
        }

        setLoading(true);

        try {
            await registerUserInOneSignal(formData.email);
            await sendWelcomeEmail(formData.email, formData.name);
            setSubmitted(true);
            setFormData({ name: '', email: '' });
        } catch (err) {
            setError('An error occurred. Please try again.');
            console.error('Submission error:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !loading) {
            handleSubmit();
        }
    };

    return (
        <div className="min-h-screen bg-white pt-6">
            <div className=" px-4 py-16 md:py-24">
                <div className="max-w-5xl mx-auto">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-2 mb-8">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="w-2 h-2 bg-purple-600 rounded-full"
                            />
                            <span className="text-sm font-medium text-purple-600">COMING SOON</span>
                        </div>


                    </motion.div>

                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <AnimatePresence mode="wait">
                            {!submitted ? (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="space-y-8 grid grid-cols-2 gap-10"
                                >
                                    {/* Features Grid */}
                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        {[
                                            { icon: '⚡', label: 'Fast Deployment' },
                                            { icon: '🔧', label: 'Simple Configuration' },
                                            { icon: '🚀', label: 'Multi-frameworks' },
                                            { icon: '💻', label: 'Intuitive Interface' }
                                        ].map((feature, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2 + i * 0.1 }}
                                                className="p-4 border border-gray-200 bg-gray-50"
                                            >
                                                <div className="text-2xl mb-2">{feature.icon}</div>
                                                <div className="text-sm font-medium text-gray-900">{feature.label}</div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Form */}
                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                                                Full name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                onKeyPress={handleKeyPress}
                                                placeholder="John Doe"
                                                className="form-input w-full py-2"
                                                disabled={loading}
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                                                Email address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                onKeyPress={handleKeyPress}
                                                placeholder="john@example.com"
                                                className="form-input w-full py-2"
                                                disabled={loading}
                                            />
                                        </div>

                                        {error && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                className="p-4 bg-red-50 border-2 border-red-600 text-red-900 text-sm"
                                            >
                                                {error}
                                            </motion.div>
                                        )}

                                        <motion.button
                                            type="button"
                                            onClick={handleSubmit}
                                            disabled={loading}
                                            whileHover={{ scale: loading ? 1 : 1.02 }}
                                            whileTap={{ scale: loading ? 1 : 0.98 }}
                                            className="w-full rounded-2xl py-4 bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {loading ? 'Signing up...' : 'Join the waitlist'}
                                        </motion.button>

                                        <p className="text-xs text-gray-500 text-center">
                                            Your data is protected and will never be shared with third parties.
                                        </p>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12 space-y-6"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", duration: 0.5 }}
                                        className="w-16 h-16 bg-green-500 flex items-center justify-center mx-auto"
                                    >
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </motion.div>

                                    <div>
                                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                            All set!
                                        </h2>
                                        <p className="text-gray-600">
                                            You're on the waitlist.<br />
                                            Check your email to confirm.
                                        </p>
                                    </div>

                                    <motion.button
                                        onClick={() => setSubmitted(false)}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="rounded-2xl px-6 py-4 bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Add another person
                                    </motion.button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-16 pt-8 border-t border-gray-200"
                    >
                        <div className="grid grid-cols-3 gap-8 text-center">
                            {[
                                { value: '6+', label: 'Frameworks' },
                                { value: '< 2min', label: 'Deployment' },
                                { value: '99.9%', label: 'Uptime' }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                    <div className="text-xs text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default WaitlistPage;