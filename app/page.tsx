'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: target.name.value,
        email: target.email.value,
        message: target.message.value,
      }),
    });
    
    if (res.ok) {
      setStatus('Thank you! Your message has been sent successfully.');
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 font-sans antialiased">
      
      {/* 1. HERO & NAVIGATION */}
      <header className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-950 text-white sticky top-0 z-50 shadow-md">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4">
          <span className="text-xl font-bold tracking-wider">INTAJ KHAN</span>
          <div className="space-x-4 md:space-x-6 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#expertise" className="hover:text-white transition">Expertise</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#tools" className="hover:text-white transition">Skills & Certs</a>
            <a href="#contact" className="bg-indigo-600 px-4 py-2 rounded-md text-white hover:bg-indigo-500 transition">Contact</a>
          </div>
        </nav>
      </header>

      {/* 2. EXECUTIVE SUMMARY HERO WITH PROFILE IMAGE */}
      <section id="about" className="bg-slate-900 text-white py-16 md:py-24 px-6 border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text content side */}
          <div className="max-w-3xl order-2 md:order-1">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800/50">
              Sharjah, United Arab Emirates
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mt-4 mb-6 tracking-tight">
              Strategic IT Manager
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              13+ years of experience leading IT operations, infrastructure, and cybersecurity across the Oil & Gas, Telecom, Construction, and Automobile sectors. Proven track record in cloud migration, business continuity, and delivering high system availability through automated, secure frameworks.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition">
                Get in Touch
              </a>
              <a href="https://www.linkedin.com/in/intajkhan" target="_blank" rel="noopener noreferrer" className="border border-slate-700 hover:bg-slate-800 text-slate-300 font-medium px-6 py-3 rounded-lg transition flex items-center gap-2">
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Profile Image side */}
          <div className="order-1 md:order-2 flex-shrink-0">
            <div className="relative w-48 h-64 md:w-60 md:h-72 rounded-2xl overflow-hidden border-4 border-indigo-500/30 shadow-2xl bg-white">
              <Image 
                src="/images/Profile.png" 
                alt="Intaj Khan - IT Manager Profile" 
                fill
                priority
                className="object-cover"
                sizes="(max-w-768px) 192px, 256px"
              />
            </div>
          </div>

        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-24">

        {/* 3. CORE EXPERTISE GRID */}
        <section id="expertise">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Core Competencies</h2>
          <p className="text-zinc-600 mb-8">Primary operational domains and enterprise strategies managed.</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-200">
              <div className="h-10 w-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center font-bold mb-4">☁️</div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Cloud & Identity</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">Expert administration of Microsoft 365, Google Workspace, and Microsoft Entra ID (Azure AD). Proven success delivering zero-downtime cloud migrations.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-200">
              <div className="h-10 w-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center font-bold mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Cybersecurity & BCDR</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">Implementing network security via SonicWall, ThreatDown endpoint protection, XDR security, and robust disaster recovery frameworks using IDrive and CrashPlan.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-200">
              <div className="h-10 w-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center font-bold mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-2">IT Operations Leadership</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">Aligning ITSM & ITIL frameworks. Extensive experience managing cross-functional teams, vendor contracts, IT budgets, and automating workflows with PowerShell.</p>
            </div>
          </div>
        </section>

        {/* 4. PROFESSIONAL EXPERIENCE */}
        <section id="experience">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Professional Experience</h2>
          <p className="text-zinc-600 mb-8">13+ years of technical leadership and infrastructure optimization.</p>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200 grid md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">Mar 2019 - Present</span>
                <p className="text-sm font-medium text-zinc-800 mt-4">Regal Group UAE</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold mb-2">IT Manager</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                  Directing comprehensive IT operations and infrastructure for 100+ users across multiple locations, overseeing a dedicated team of 4 IT professionals.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-sm text-zinc-700">
                  <span className="flex gap-2"><span>✓</span> Delivered zero-downtime cloud migrations.</span>
                  <span className="flex gap-2"><span>✓</span> Automated daily processes via PowerShell.</span>
                  <span className="flex gap-2"><span>✓</span> Managed Tally Prime Server ERP environments.</span>
                  <span className="flex gap-2"><span>✓</span> Controlled IT budgeting and vendor relations.</span>
                  <span className="flex gap-2"><span>✓</span> Administered Avaya & 3CX telephony systems.</span>
                  <span className="flex gap-2"><span>✓</span> Deployed ThreatDown & SonicWall security.</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200 grid md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <span className="text-sm font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">2011 - 2019</span>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold mb-4">Previous Engineering & Admin Roles</h3>
                <ul className="space-y-4 text-sm text-zinc-700">
                  <li className="border-l-2 border-slate-200 pl-4">
                    <strong>IT Administrator</strong> — Royal Petro Energy (2015 - 2019)
                  </li>
                  <li className="border-l-2 border-slate-200 pl-4">
                    <strong>Senior System Engineer</strong> — DBC LLC (2014 - 2015)
                  </li>
                  <li className="border-l-2 border-slate-200 pl-4">
                    <strong>FME Engineer</strong> — Trimax (2013 - 2014)
                  </li>
                  <li className="border-l-2 border-slate-200 pl-4">
                    <strong>Customer Support Engineer</strong> — CI Infotech (2011 - 2013)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. TECHNICAL STACK & CREDENTIALS */}
        <section id="tools" className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Technical Arsenal</h2>
            <div className="flex flex-wrap gap-2">
              {['Microsoft 365', 'Google Workspace', 'Azure AD (Entra)', 'SonicWall Firewall', 'XDR Security', 'ThreatDown', 'IDrive & CrashPlan', 'PowerShell', 'Docker', 'Tally Prime Server', 'Avaya IP Office / 3CX', 'Hikvision NVR'].map((tool) => (
                <span key={tool} className="text-xs font-medium bg-zinc-200 text-zinc-800 px-3 py-1.5 rounded-md">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Education & Certifications</h2>
<ul className="space-y-4 text-sm text-zinc-700">
  <li className="flex items-start gap-3">
    <span className="text-lg">🎓</span>
    <div>
      <strong>MBA in Operations & IT</strong>
      <p className="text-xs text-zinc-500">Graduated 2021</p>
    </div>
  </li>
  <li className="flex items-start gap-3">
    <span className="text-lg">🏅</span>
    <div>
      <strong>Certifications & Continuous Learning</strong>

{/* 1. Core Official Certifications */}
<div className="mt-3">
  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Official Certifications</span>
  <ul className="text-xs text-zinc-600 mt-1 space-y-1">
    <li>• <strong>CompTIA Security+ (ce)</strong> — CompTIA (2025–2028)</li>
    <li>• <strong>Generative AI Foundations</strong> — upGrad (2025)</li>
    <li>• <strong>Microsoft Certified: Azure Fundamentals (AZ-900)</strong> — Microsoft (2023)</li>
    <li>• <strong>ITIL Foundation Level</strong> — AXELOS Global Best Practice (2022)</li>
    <li>• <strong>Microsoft Certified Professional (MCP)</strong> — Microsoft (2012)</li>
    <li>• <strong>Microsoft Certified Technology Specialist (MCTS)</strong> — Microsoft (2010)</li>
  </ul>
</div>

{/* 2. Professional Development & Training */}
<div className="mt-4">
  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Professional Development & Training</span>
  <ul className="text-xs text-zinc-600 mt-1 space-y-1">
    <li>• <strong>PMP Exam Prep</strong> — Udemy (2024)</li>
    <li>• <strong>AZ-900 Prep Training</strong> — Udemy (2022)</li>
    <li>• <strong>CompTIA Cloud+ Series (Basic, Intermediate, Advanced)</strong> — AOE (2021)</li>
    <li>• <strong>CISSP Cert Prep: Security & Risk Management</strong> — LinkedIn Learning (2021)</li>
    <li>• <strong>Cybersecurity Foundations</strong> — LinkedIn Learning (2021)</li>
    <li>• <strong>Network Server Security & Protection</strong> — AOE (2021)</li>
    <li>• <strong>IT Management: Software & Databases</strong> — AOE (2020)</li>
    <li>• <strong>Introduction to IT for Managers</strong> — Alison (2019)</li>
  </ul>
</div>
          </div>
        </section>

        {/* 6. CONTACT SECTION */}
        <section id="contact" className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-slate-900">Initiate Collaboration</h2>
          <p className="text-sm text-zinc-600 mb-6">Reach out regarding IT management roles, infrastructure consultancy, or networking opportunities.</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-600 mb-1">Full Name</label>
                <input type="text" name="name" required className="w-full text-sm border border-zinc-300 p-2.5 rounded-md focus:ring-1 focus:ring-indigo-500 outline-none" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-600 mb-1">Email Address</label>
                <input type="email" name="email" required className="w-full text-sm border border-zinc-300 p-2.5 rounded-md focus:ring-1 focus:ring-indigo-500 outline-none" placeholder="email@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-600 mb-1">Message</label>
              <textarea name="message" required rows={4} className="w-full text-sm border border-zinc-300 p-2.5 rounded-md focus:ring-1 focus:ring-indigo-500 outline-none" placeholder="How can we work together?"></textarea>
            </div>
            <button type="submit" className="w-full bg-indigo-600 text-white font-medium py-2.5 rounded-md hover:bg-indigo-700 transition shadow-sm">
              Send Message
            </button>
            {status && <p className="mt-4 text-center text-sm font-semibold text-indigo-600">{status}</p>}
          </form>
        </section>

      </div>

      <footer className="bg-slate-950 text-slate-500 text-center py-8 text-xs border-t border-slate-900">
        © {new Date().getFullYear()} Intaj Khan. Built with Next.js, Node.js, and Tailwind CSS. Hosted on Vercel.
      </footer>
    </main>
  );
}