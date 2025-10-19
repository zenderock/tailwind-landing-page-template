"use client"

import { useState } from 'react';

interface FormData {
    name: string;
    email: string;
    framework: string;
    project: string;
    deployment: string;
    message: string;
}

export default function ContactSection() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        framework: '',
        project: '',
        deployment: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string>('');

    const ONESIGNAL_APP_ID = process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID;
    const ONESIGNAL_REST_API_KEY = process.env.NEXT_PUBLIC_ONESIGNAL_API_KEY;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setError('');
    };

    const validateEmail = (email: string): boolean => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const sendContactEmail = async (): Promise<void> => {
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
                    email_to: ['zenderock@servel.ink'],
                    email_subject: `Nouveau contact Servelink - ${formData.name}`,
                    email_body: `
            <html>
              <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                  <h1 style="color: #8b5cf6;">Nouveau message de contact</h1>
                  
                  <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="margin-top: 0; color: #374151;">Informations du contact</h3>
                    <p><strong>Nom :</strong> ${formData.name}</p>
                    <p><strong>Email :</strong> ${formData.email}</p>
                    <p><strong>Framework :</strong> ${formData.framework || 'Non spécifié'}</p>
                    <p><strong>Type de déploiement :</strong> ${formData.deployment || 'Non spécifié'}</p>
                  </div>

                  ${formData.project ? `
                  <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="margin-top: 0; color: #374151;">Description du projet</h3>
                    <p>${formData.project}</p>
                  </div>
                  ` : ''}

                  ${formData.message ? `
                  <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="margin-top: 0; color: #374151;">Besoins additionnels</h3>
                    <p>${formData.message}</p>
                  </div>
                  ` : ''}

                  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                    <p style="color: #6b7280; font-size: 14px;">
                      Message reçu le ${new Date().toLocaleString('fr-FR')}
                    </p>
                  </div>
                </div>
              </body>
            </html>
          `,
                    email_from_name: 'Servelink Contact',
                    email_from_address: 'hello@servel.ink'
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.errors?.[0] || 'Erreur lors de l\'envoi du message');
            }
        } catch (err) {
            console.error('OneSignal email error:', err);
            throw err;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!formData.name.trim()) {
            setError('Veuillez entrer votre nom');
            return;
        }

        if (!validateEmail(formData.email)) {
            setError('Veuillez entrer un email valide');
            return;
        }

        setLoading(true);

        try {
            await sendContactEmail();
            setSubmitted(true);
            setFormData({
                name: '',
                email: '',
                framework: '',
                project: '',
                deployment: '',
                message: ''
            });
        } catch (err) {
            setError('Une erreur est survenue. Veuillez réessayer.');
            console.error('Submission error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-32">
            <div className="mx-auto max-w-4xl px-4 lg:px-0">
                <h1 className="text-title mb-12 text-center text-3xl font-semibold md:text-4xl lg:text-5xl">Get in touch with our team</h1>
                <div data-shade="950" className="relative grid divide-y border md:grid-cols-2 md:gap-4 md:divide-x md:divide-y-0">
                    <div className="flex flex-col justify-between  p-6 sm:p-12">
                        <div>
                            <h3 className="text-title mb-3">General Support</h3>
                            <a href="mailto:support@servel.ink" className="link variant-animated intent-primary my-3 text-2xl">support@servel.ink</a>
                            <p className="mt-3 text-sm">24/7 deployment assistance</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between space-y-8  p-6 sm:p-12">
                        <div>
                            <h3 className="text-title mb-3">Enterprise Sales</h3>
                            <a href="mailto:sales@servel.ink" className="link variant-animated intent-primary my-3 text-2xl">sales@servel.ink</a>
                            <p className="mt-3 text-sm">Custom deployment solutions</p>
                        </div>
                    </div>
                </div>
                <div className="h-3 invert [--stripes-color:theme(colors.white/0.15)] [background-image:linear-gradient(-45deg,var(--stripes-color)_25%,transparent_25%,transparent_50%,var(--stripes-color)_50%,var(--stripes-color)_75%,transparent_75%,transparent)] [background-size:5px_5px] dark:invert-0"></div>
                <div className="border px-4 py-12 lg:px-0 lg:py-24">
                    {submitted ? (
                        <div className="lg:card variant-mixed mx-auto max-w-lg sm:p-16 text-center">
                            <div className="w-16 h-16 bg-green-500 flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-title text-2xl font-bold mb-3">Message envoyé !</h3>
                            <p className="text-sm text-gray-600 mb-6">
                                Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="btn bg-purple-600 text-white hover:bg-purple-700"
                            >
                                Envoyer un autre message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="lg:card variant-mixed mx-auto max-w-lg sm:p-16">
                            <div>
                                <h3 className="text-title text-xl font-semibold">Start your deployment journey</h3>
                                <p className="mt-4 text-sm">Tell us about your project and we'll help you deploy it with Servelink. Whether it's Laravel, Python, or Node.js, we've got you covered.</p>
                            </div>

                            <div className="mt-12 space-y-4">
                                <div>
                                    <label
                                        className="mb-1 block text-sm font-medium text-gray-700"
                                        htmlFor="name"
                                    >
                                        Full name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="form-input w-full py-2"
                                        type="text"
                                        placeholder="John Doe"
                                        required
                                        disabled={loading}
                                    />
                                </div>

                                <div>
                                    <label
                                        className="mb-1 block text-sm font-medium text-gray-700"
                                        htmlFor="email"
                                    >
                                        Work Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="form-input w-full py-2"
                                        type="email"
                                        placeholder="john@company.com"
                                        required
                                        disabled={loading}
                                    />
                                </div>

                                <div>
                                    <label
                                        className="mb-1 block text-sm font-medium text-gray-700"
                                        htmlFor="framework"
                                    >
                                        Framework/Technology
                                    </label>
                                    <select
                                        id="framework"
                                        name="framework"
                                        value={formData.framework}
                                        onChange={handleInputChange}
                                        className="form-input w-full py-2"
                                        disabled={loading}
                                    >
                                        <option value="">Select your framework</option>
                                        <option value="laravel">Laravel (PHP)</option>
                                        <option value="django">Django (Python)</option>
                                        <option value="flask">Flask (Python)</option>
                                        <option value="fastapi">FastAPI (Python)</option>
                                        <option value="nodejs">Node.js</option>
                                        <option value="react">React</option>
                                        <option value="nextjs">Next.js</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        className="mb-1 block text-sm font-medium text-gray-700"
                                        htmlFor="project"
                                    >
                                        Project Description
                                    </label>
                                    <input
                                        id="project"
                                        name="project"
                                        value={formData.project}
                                        onChange={handleInputChange}
                                        className="form-input w-full py-2"
                                        type="text"
                                        placeholder="Brief description of your project"
                                        disabled={loading}
                                    />
                                </div>

                                <div>
                                    <label
                                        className="mb-1 block text-sm font-medium text-gray-700"
                                        htmlFor="deployment"
                                    >
                                        Deployment Type
                                    </label>
                                    <select
                                        id="deployment"
                                        name="deployment"
                                        value={formData.deployment}
                                        onChange={handleInputChange}
                                        className="form-input w-full py-2"
                                        disabled={loading}
                                    >
                                        <option value="">Select deployment type</option>
                                        <option value="web-app">Web Application</option>
                                        <option value="api">API/Backend</option>
                                        <option value="fullstack">Fullstack App</option>
                                        <option value="microservice">Microservice</option>
                                        <option value="static">Static Site</option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        className="mb-1 block text-sm font-medium text-gray-700"
                                        htmlFor="message"
                                    >
                                        Additional Requirements
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="form-input w-full py-2"
                                        rows={4}
                                        placeholder="Tell us about your specific needs, database requirements, scaling needs, etc."
                                        disabled={loading}
                                    ></textarea>
                                </div>

                                {error && (
                                    <div className="p-4 bg-red-50 border-2 border-red-600 text-red-900 text-sm">
                                        {error}
                                    </div>
                                )}

                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="btn w-full bg-linear-to-t from-purple-600 to-purple-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {loading ? 'Envoi en cours...' : 'Start Deployment'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    )
}