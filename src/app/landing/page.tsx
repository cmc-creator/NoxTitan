// This is the migrated landing page from landing/index.html to Next.js (App Router) format.
// All static HTML is now JSX, and external CSS should be imported at the top if needed.


import React from "react";
import Link from 'next/link';
import './landing-galaxy.css';
import AIAssistant from '../../components/AIAssistant';
import ChatBot from '../../components/ChatBot';

export default function LandingPage() {
  // Generate 80 tiny stars with random positions and animation delays
  const stars = Array.from({ length: 80 }).map((_, i) => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const delay = (Math.random() * 2.5).toFixed(2);
    return (
      <div
        key={i}
        className="star"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });
  return (
    <div className="galaxy-bg min-h-screen w-full">
      {/* Render stars absolutely on the background */}
      <div style={{position: 'absolute', width: '100vw', height: '100vh', top: 0, left: 0, zIndex: 2, pointerEvents: 'none'}}>
        {stars}
      </div>
      {/* Tagline - Beautifully styled at the top */}
      <div className="w-full flex flex-col items-center py-4 px-2 animate-fade-in">
        <span className="text-xl md:text-2xl font-bold tracking-widest text-purple-200 drop-shadow-lg uppercase text-center text-pop">
          Business Management. Forged for Titans.
        </span>
        {/* Action Buttons Row - Centered below tagline */}
        <div className="flex flex-row flex-wrap justify-center gap-4 mt-4">
          <Link href="/login" className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 font-bold shadow-lg hover:scale-105 transition-transform border border-blue-500 text-white text-pop-light">Login</Link>
          <Link href="/dashboard" className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-900 via-purple-700 to-black font-black shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-110 transition-transform border-2 border-purple-500 text-white uppercase tracking-wider text-pop-strong">⚡ Command Center</Link>
          <Link href="#contact" className="px-5 py-2 rounded-lg bg-gradient-to-r from-black via-gray-300 to-purple-600 font-bold shadow-lg hover:scale-105 transition-transform border border-purple-700 text-gradient-demo text-pop-light">Request Executive Demo</Link>
          <Link href="/login" className="px-5 py-2 rounded-lg bg-gradient-to-r from-black via-gray-300 to-purple-600 font-bold shadow-lg hover:scale-105 transition-transform border border-purple-700 text-gradient-opposite text-pop-light">VIP Access (Code: RISK424)</Link>
          <Link href="/pricing" className="px-5 py-2 rounded-lg bg-gradient-to-r from-black via-gray-300 to-purple-600 font-bold shadow-lg hover:scale-105 transition-transform border border-purple-700 text-gradient-opposite text-pop-light">Pricing</Link>
        </div>
      </div>

      {/* Navigation Bar with Executive Demo Button */}
        <nav className="w-full flex justify-center items-center py-6 bg-gradient-to-b from-black via-[#1a1a1e] to-black shadow-lg sticky top-0 z-50 animate-fade-in">
          <div className="w-full max-w-6xl flex flex-row items-center justify-between px-4">
            <div className="flex flex-1 justify-center gap-6">
              <a href="#demo-section" className="text-white font-semibold hover:text-purple-400 transition-colors text-pop-light">Demo</a>
              <a href="#comparison" className="text-white font-semibold hover:text-purple-400 transition-colors text-pop-light">Comparison</a>
              <a href="#roi" className="text-white font-semibold hover:text-purple-400 transition-colors text-pop-light">ROI</a>
            </div>
            {/* No right-side navigation buttons */}
          </div>
        </nav>
      <section className="w-full flex flex-col items-center justify-center py-16">
        <div className="flex flex-col items-center justify-center mb-8">
          <video
            autoPlay
            loop
            muted
            playsInline
            controls
            poster="/noxtitan-logo-new.png"
            className="rounded-2xl shadow-2xl border-4 border-purple-700/40 bg-black w-full max-w-xl h-72 object-cover mb-4 animate-fade-in"
          >
            <source src="/noxtitan-video.mp4" type="video/mp4" />
            <source src="/noxtitan-video.webm" type="video/webm" />
            <source src="/noxtitan-video.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
          <h1 className="text-4xl md:text-6xl font-extrabold text-center text-white drop-shadow-lg mt-6 animate-slide-up text-pop-strong">
            Run Your Entire Business in One Place.
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-purple-200 text-center max-w-2xl animate-fade-in text-pop">
            Stop juggling 15 different apps. Manage your employees, payroll, scheduling, compliance, and operations from a single powerful platform.
          </p>
          {/* Removed duplicate action buttons below tagline */}
        </div>
      </section>

      {/* Video Section (Demo) - Centered and Modern */}
      <section id="demo-section" className="w-full flex flex-col items-center justify-center py-20">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-4 animate-fade-in">See What NoxTitan Can Do For You.</h2>
          <p className="text-lg md:text-xl text-purple-200 text-center mb-8 animate-fade-in max-w-2xl">
            Watch our interactive walkthrough below to see how NoxTitan handles scheduling, payroll, compliance, and more—all in one powerful platform.
          </p>
          <div className="w-full flex justify-center items-center animate-fade-in">
            <iframe
              src="https://cmc-creator.github.io/NoxTitan/"
              title="NoxTitan Interactive Walkthrough"
              allowFullScreen
              className="rounded-2xl shadow-2xl border-4 border-purple-700/40 bg-black w-full max-w-4xl min-h-[400px] h-[70vh]"
              style={{ minHeight: 400 }}
            ></iframe>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="w-full flex flex-col items-center py-8">
        <p className="text-purple-300 text-lg font-semibold mb-4 animate-fade-in">Trusted by industry leaders scaling beyond limits.</p>
        <div className="flex flex-wrap justify-center gap-8 animate-fade-in">
          <div className="bg-gradient-to-r from-purple-700 to-pink-600 text-white px-6 py-3 rounded-lg font-bold shadow-md">Enterprise Corp</div>
          <div className="bg-gradient-to-r from-purple-700 to-pink-600 text-white px-6 py-3 rounded-lg font-bold shadow-md">Global Tech Inc.</div>
          <div className="bg-gradient-to-r from-purple-700 to-pink-600 text-white px-6 py-3 rounded-lg font-bold shadow-md">Titan Industries</div>
          <div className="bg-gradient-to-r from-purple-700 to-pink-600 text-white px-6 py-3 rounded-lg font-bold shadow-md">Innovate Now</div>
        </div>
      </section>

      {/* (Removed duplicate demo section) */}

      {/* Comparison Table - Enhanced Styling */}
      <section id="comparison" className="w-full flex flex-col items-center justify-center py-20">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-2 animate-fade-in">Everything You Need. Nothing You Don't.</h2>
          <p className="text-lg md:text-xl text-purple-200 text-center mb-8 animate-fade-in">One platform replaces all your separate systems. Save time, money, and headaches.</p>
          <div className="w-full overflow-x-auto animate-fade-in">
            <table className="min-w-full rounded-2xl overflow-hidden shadow-2xl border border-purple-700/40 bg-black">
              <thead className="bg-gradient-to-r from-purple-700 to-pink-600">
                <tr>
                  <th className="px-6 py-4 text-lg font-bold text-white text-left">Features & Capabilities</th>
                  <th className="px-6 py-4 text-lg font-bold text-white text-left">Using Multiple Systems</th>
                  <th className="px-6 py-4 text-lg font-bold text-white text-left">NoxTitan All-in-One</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-900">
                <tr>
                  <td className="px-6 py-4 font-semibold text-purple-200">Human Capital Mgmt (HCM) & Payroll</td>
                  <td className="px-6 py-4 text-red-400 flex items-center gap-2">Requires Workday + Gusto <span className="text-2xl">✗</span></td>
                  <td className="px-6 py-4 text-green-400 text-2xl font-bold">✓</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-purple-200">Enterprise Project Portfolio Mgmt</td>
                  <td className="px-6 py-4 text-red-400 flex items-center gap-2">Requires Jira + Asana <span className="text-2xl">✗</span></td>
                  <td className="px-6 py-4 text-green-400 text-2xl font-bold">✓</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-purple-200">Contextual Team Communication</td>
                  <td className="px-6 py-4 text-red-400 flex items-center gap-2">Disconnected Slack Threads <span className="text-2xl">✗</span></td>
                  <td className="px-6 py-4 text-green-400 text-2xl font-bold">✓</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-purple-200">Full-Cycle CRM & Pipeline</td>
                  <td className="px-6 py-4 text-red-400 flex items-center gap-2">Separate Salesforce Instance <span className="text-2xl">✗</span></td>
                  <td className="px-6 py-4 text-green-400 text-2xl font-bold">✓</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-purple-200">Advanced Financial Analytics</td>
                  <td className="px-6 py-4 text-red-400 flex items-center gap-2">External BI Tools Needed <span className="text-2xl">✗</span></td>
                  <td className="px-6 py-4 text-green-400 text-2xl font-bold">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced Styling */}
      <section id="roi" className="w-full flex flex-col items-center justify-center py-20">
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-gradient-to-br from-purple-800/80 to-black rounded-2xl shadow-xl p-8">
            <h3 className="text-5xl font-extrabold text-purple-300 mb-2 animate-fade-in">40%</h3>
            <p className="text-lg text-purple-100 text-center">Reduction in Operational OpEx.</p>
          </div>
          <div className="flex flex-col items-center bg-gradient-to-br from-purple-800/80 to-black rounded-2xl shadow-xl p-8">
            <h3 className="text-5xl font-extrabold text-purple-300 mb-2 animate-fade-in">15 hrs/week</h3>
            <p className="text-lg text-purple-100 text-center">Saved per employee on context-switching.</p>
          </div>
          <div className="flex flex-col items-center bg-gradient-to-br from-purple-800/80 to-black rounded-2xl shadow-xl p-8">
            <h3 className="text-4xl font-extrabold text-purple-300 mb-2 animate-fade-in">Startling ROI</h3>
            <p className="text-lg text-purple-100 text-center">Average payback period of 4 months.</p>
          </div>
        </div>
      </section>

      {/* Testimonials - Enhanced Styling */}
      <section className="w-full flex flex-col items-center justify-center py-20">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 animate-fade-in">Hear from the Titans.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            <div className="flex flex-col bg-gradient-to-br from-purple-900/80 to-black rounded-2xl shadow-xl p-8 items-center animate-fade-in">
              <div className="text-yellow-400 text-2xl mb-2">★★★★★</div>
              <p className="text-lg text-purple-100 text-center mb-6">"Migrating to NoxTitan was the single most impactful operational decision we've made in a decade. The speed and clarity we now have is unmatched."</p>
              <div className="flex items-center gap-4">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Chen" className="w-14 h-14 rounded-full object-cover border-2 border-purple-400" />
                <div className="flex flex-col">
                  <span className="font-bold text-white">Sarah Chen</span>
                  <span className="text-purple-300 text-sm">CTO, Apex Dynamics</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-gradient-to-br from-purple-900/80 to-black rounded-2xl shadow-xl p-8 items-center animate-fade-in">
              <div className="text-yellow-400 text-2xl mb-2">★★★★★</div>
              <p className="text-lg text-purple-100 text-center mb-6">"We eliminated 12 different SaaS subscriptions and gained exponentially more control. NoxTitan isn't just software; it's a competitive advantage."</p>
              <div className="flex items-center gap-4">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Marcus Thorne" className="w-14 h-14 rounded-full object-cover border-2 border-purple-400" />
                <div className="flex flex-col">
                  <span className="font-bold text-white">Marcus Thorne</span>
                  <span className="text-purple-300 text-sm">CEO, OmniCorp Global</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section - Beautifully Styled */}
      <section id="contact" className="w-full flex flex-col items-center justify-center py-20">
        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-center">
          <div className="flex-1 flex flex-col items-start mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 animate-fade-in">Ready to Simplify Your Operations?</h2>
            <p className="text-lg text-purple-200 mb-6 animate-fade-in">Tell us about your business and we'll show you exactly how NoxTitan can help. No pressure, just solutions.</p>
          </div>
          <div className="flex-1 w-full">
            <form className="bg-black/80 rounded-2xl shadow-xl p-8 flex flex-col gap-6 animate-fade-in">
              <div>
                <label htmlFor="name" className="block text-purple-200 font-semibold mb-2">Full Name</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg bg-[#18181b] text-white border border-purple-700 focus:ring-2 focus:ring-purple-500 outline-none" />
              </div>
              <div>
                <label htmlFor="email" className="block text-purple-200 font-semibold mb-2">Work Email</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg bg-[#18181b] text-white border border-purple-700 focus:ring-2 focus:ring-purple-500 outline-none" />
              </div>
              <div>
                <label htmlFor="company-size" className="block text-purple-200 font-semibold mb-2">How Many Employees?</label>
                <select id="company-size" name="company-size" className="w-full px-4 py-3 rounded-lg bg-[#18181b] text-white border border-purple-700 focus:ring-2 focus:ring-purple-500 outline-none">
                  <option value="">Select Size</option>
                  <option value="1-50">1-50 Employees</option>
                  <option value="51-200">51-200 Employees</option>
                  <option value="201-500">201-500 Employees</option>
                  <option value="500+">500+ Employees</option>
                </select>
              </div>
              <div>
                <label htmlFor="pain-points" className="block text-purple-200 font-semibold mb-2">What challenges are you facing? (Optional)</label>
                <textarea id="pain-points" name="pain-points" rows={4} placeholder="Scheduling conflicts, payroll errors, compliance issues, etc." className="w-full px-4 py-3 rounded-lg bg-[#18181b] text-white border border-purple-700 focus:ring-2 focus:ring-purple-500 outline-none"></textarea>
              </div>
              <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg hover:scale-105 transition-transform text-lg">Get Started - Request Demo</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer - Beautifully Styled */}
      <footer className="w-full border-t border-purple-900 py-12 flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-6">Stop juggling software.<br />Start running your business.</h2>
          <Link href="#contact" className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg hover:scale-105 transition-transform text-lg mb-8">Request Executive Demo</Link>
          <p className="text-purple-300 text-sm text-center mb-2">&copy; 2024 NoxTitan™. A solution provided by Connie Michelle Consulting & Business Solutions LLC. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-purple-400 hover:underline text-sm">Privacy Policy</Link>
            <span className="text-purple-400">|</span>
            <Link href="/terms" className="text-purple-400 hover:underline text-sm">Terms of Service</Link>
          </div>
        </div>
      </footer>

      {/* Titan ChatBot Integration Root - Both chatbots stacked bottom right, with forced override for child fixed positions */}
      <div id="chatbot-stack-container" style={{position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000, display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-end', pointerEvents: 'none'}}>
        <div style={{position: 'static', pointerEvents: 'auto'}}><AIAssistant /></div>
        <div style={{position: 'static', pointerEvents: 'auto'}}><ChatBot /></div>
      </div>
      {/* The hydrate-chatbot.js script should be loaded in _app or via a custom hook for Next.js hydration */}
    </div>
  );
}
