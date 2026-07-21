{/* 5. TECHNICAL STACK & CREDENTIALS */}
        <section id="tools" className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Technical Arsenal</h2>
            <div className="space-y-5">
              
              {/* Cloud & Infrastructure */}
              <div>
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Cloud & Infrastructure</p>
                <div className="flex flex-wrap gap-2">
                  {['Microsoft 365', 'Google Workspace', 'Azure AD (Entra)', 'Docker', 'Tally Prime Server', 'Online UPS'].map((tool) => (
                    <span key={tool} className="text-xs font-medium bg-zinc-200 text-zinc-800 px-3 py-1.5 rounded-md">{tool}</span>
                  ))}
                </div>
              </div>

              {/* Security & Network */}
              <div>
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Security & Network</p>
                <div className="flex flex-wrap gap-2">
                  {['SonicWall Firewall', 'XDR Security', 'ThreatDown', 'Email Security', 'Avaya IP Office / 3CX', 'Hikvision NVR'].map((tool) => (
                    <span key={tool} className="text-xs font-medium bg-zinc-200 text-zinc-800 px-3 py-1.5 rounded-md">{tool}</span>
                  ))}
                </div>
              </div>

              {/* IT Operations & Management */}
              <div>
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">IT Operations & Management</p>
                <div className="flex flex-wrap gap-2">
                  {['ITSM & ITIL', 'PowerShell Automation', 'Patch Management', 'Backup & Disaster Recovery', 'Vendor Management', 'Budgeting & Cost Optimization', 'Business Continuity'].map((tool) => (
                    <span key={tool} className="text-xs font-medium bg-indigo-100 text-indigo-800 px-3 py-1.5 rounded-md">{tool}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
          
          {/* ... (Keep your Education & Certifications right column exactly as it is) ... */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Education & Certifications</h2>
            {/* ... Rest of your code ... */}