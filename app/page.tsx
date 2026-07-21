import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20">
      
      {/* 1. HEADER */}
      <header className="bg-slate-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Intaj Khan</h1>
          <p className="text-xl text-slate-300 mb-6">Strategic IT Manager</p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <span>📍 Sharjah, United Arab Emirates</span>
            <span>📞 +971 562273698</span>
            <span>✉️ intaj@outlook.in</span>
            <span>🔗 www.linkedin.com/in/intajkhan</span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 md:px-12 mt-12 space-y-16">
        
        {/* 2. PROFESSIONAL SUMMARY */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Professional Summary</h2>
          <p className="text-slate-600 leading-relaxed">
            Strategic IT Manager with 13+ years of experience leading IT operations, infrastructure, and
            cybersecurity across Oil &amp; Gas, Telecom, Construction, and Automobile sectors. Expert in
            Microsoft 365, Google Workspace, and Microsoft Entra ID (Azure AD), with strong
            experience in enterprise IT infrastructure and cloud integration. Proven track record in
            cloud migration, patch management, backup and disaster recovery using IDrive and
            CrashPlan, and endpoint security using ThreatDown. Skilled in network security
            (SonicWall), ERP systems, and automation using PowerShell, delivering high system
            availability, cost optimization, and business continuity.
          </p>
        </section>

        {/* 3. PROFESSIONAL EXPERIENCE */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Professional Experience</h2>
          <div className="space-y-8">
            
            {/* Regal Group UAE */}
            <div>
              <h3 className="text-xl font-bold text-slate-800">IT Manager</h3>
              <div className="text-indigo-600 font-medium mb-3">Regal Group UAE | Mar 2019 - Present</div>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Lead IT operations for 100+ users across multiple locations</li>
                <li>Manage team of 4 IT professionals</li>
                <li>Administer Microsoft 365, Google Workspace, and Azure AD</li>
                <li>Manage SonicWall firewall and XDR security</li>
                <li>Implemented ThreatDown endpoint protection</li>
                <li>Delivered zero-downtime cloud migration</li>
                <li>Managed IDrive and CrashPlan backup solutions</li>
                <li>Automated processes using PowerShell</li>
                <li>Managed ERP (Tally Prime Server)</li>
                <li>Maintained Avaya &amp; 3CX telephony systems</li>
                <li>Managed Hikvision NVR &amp; UPS systems</li>
                <li>Controlled IT budget and vendor management</li>
              </ul>
            </div>

            {/* Previous Roles Summary */}
            <div>
              <h3 className="text-xl font-bold text-slate-800">Previous Roles</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mt-3">
                <li><span className="font-semibold text-slate-800">IT Administrator</span> - Royal Petro Energy (2015-2019)</li>
                <li><span className="font-semibold text-slate-800">Senior System Engineer</span> - DBC LLC (2014-2015)</li>
                <li><span className="font-semibold text-slate-800">FME Engineer</span> - Trimax (2013-2014)</li>
                <li><span className="font-semibold text-slate-800">Customer Support Engineer</span> - CI Infotech (2011-2013)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. TECHNICAL ARSENAL & CREDENTIALS GRID */}
        <section id="tools" className="grid md:grid-cols-2 gap-12">
          
          {/* Left Column: Technical Arsenal */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Technical Arsenal</h2>
            <div className="space-y-6">
              
              {/* Cloud & Infrastructure */}
              <div>
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">Cloud &amp; Infrastructure</p>
                <div className="flex flex-wrap gap-2">
                  {['Microsoft 365', 'Google Workspace', 'Azure AD (Entra)', 'Docker', 'Tally Prime Server', 'Online UPS'].map((tool) => (
                    <span key={tool} className="text-xs font-medium bg-zinc-200 text-zinc-800 px-3 py-1.5 rounded-md">{tool}</span>
                  ))}
                </div>
              </div>

              {/* Security & Network */}
              <div>
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">Security &amp; Network</p>
                <div className="flex flex-wrap gap-2">
                  {['SonicWall Firewall', 'XDR Security', 'ThreatDown', 'Email Security', 'Avaya IP Office / 3CX', 'Hikvision NVR'].map((tool) => (
                    <span key={tool} className="text-xs font-medium bg-zinc-200 text-zinc-800 px-3 py-1.5 rounded-md">{tool}</span>
                  ))}
                </div>
              </div>

              {/* IT Operations & Management */}
              <div>
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">IT Operations &amp; Management</p>
                <div className="flex flex-wrap gap-2">
                  {['ITSM & ITIL', 'PowerShell Automation', 'Patch Management', 'Backup & Disaster Recovery', 'Vendor Management', 'Budgeting & Cost Optimization', 'Business Continuity'].map((tool) => (
                    <span key={tool} className="text-xs font-medium bg-indigo-100 text-indigo-800 px-3 py-1.5 rounded-md">{tool}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
          
          {/* Right Column: Education & Certifications */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Education &amp; Certifications</h2>
            <div className="space-y-6">
              
              <div>
                <h3 className="font-bold text-slate-800 border-b border-slate-200 pb-2 mb-3">Education</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>MBA (P&amp;O Mgmt &amp; IT) - 2021</li>
                  <li>BA - 2010</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-slate-800 border-b border-slate-200 pb-2 mb-3">Certifications</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>ITIL Foundation</li>
                  <li>MCP</li>
                  <li>Azure Fundamentals</li>
                  <li>CompTIA Security+ (Training)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-slate-800 border-b border-slate-200 pb-2 mb-3">Languages</h3>
                <p className="text-slate-600">English, Hindi, Bengali, Bhojpuri</p>
              </div>

            </div>
          </div>
        </section>

      </main>
    </div>
  );
}