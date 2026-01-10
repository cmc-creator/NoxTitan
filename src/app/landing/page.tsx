// This is the migrated landing page from landing/index.html to Next.js (App Router) format.
// All static HTML is now JSX, and external CSS should be imported at the top if needed.


import React from "react";
import Link from 'next/link';
import './landing-galaxy.css';

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

      {/* Simple Top Bar with VIP Access and Login */}
      <div className="w-full flex justify-between items-center px-8 animate-fade-in">
        <div className="flex items-center">
          <Link href="/signup?vip=true" className="px-6 py-3 rounded-xl bg-gradient-to-br from-yellow-900/50 to-amber-900/50 border-2 border-yellow-600/40 hover:border-yellow-400 font-bold shadow-lg transition-all text-white">
            💎 VIP Access
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href="/login" className="px-6 py-3 rounded-xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-2 border-purple-600/40 hover:border-purple-400 font-bold shadow-lg transition-all text-white">
            🔐 Login
          </Link>
        </div>
      </div>

      {/* NOXTITAN Title and Tagline */}
      <div className="w-full flex flex-col items-center animate-fade-in" style={{ marginTop: '-60px' }}>
        <img 
          src="/noxtitan-chrome.png" 
          alt="NOXTITAN" 
          className="h-20 md:h-28 w-auto mb-3 object-contain"
          style={{
            filter: 'drop-shadow(0px 5px 15px rgba(0,0,0,0.9))',
            mixBlendMode: 'normal',
            imageRendering: 'high-quality'
          }}
        />
        <span className="text-base md:text-lg font-bold uppercase text-center tracking-widest" style={{
          backgroundImage: 'linear-gradient(180deg, #f5f5ff 0%, #d8d8e8 20%, #b0b0d0 40%, #8080a8 47%, #303048 50%, #e0e0f8 52%, #a8a8c8 70%, #606080 100%)',
          backgroundSize: '100% 100%',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0px -1px 2px rgba(255,255,255,0.5)) drop-shadow(0px 3px 6px rgba(0,0,0,0.7))'
        }}>
          Business Management. Forged for Titans.
        </span>
        {/* Action Buttons Row - Cleaned up, no duplicates */}
        <div className="flex flex-row flex-wrap justify-center gap-4 mt-6">
          <Link href="/signup" className="px-6 py-3 rounded-xl bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-2 border-green-600/40 hover:border-green-400 font-bold shadow-lg transition-all text-white text-pop-light">🚀 Start Free Trial</Link>
          <Link href="#contact" className="px-6 py-3 rounded-xl bg-gradient-to-br from-blue-900/50 to-indigo-900/50 border-2 border-blue-600/40 hover:border-blue-400 font-bold shadow-lg transition-all text-white text-pop-light">📺 Request Demo</Link>
          <Link href="/pricing" className="px-6 py-3 rounded-xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-2 border-purple-600/40 hover:border-purple-400 font-bold shadow-lg transition-all text-white text-pop-light">💰 View Pricing</Link>
        </div>
      </div>

      {/* Navigation Bar */}
        <nav className="w-full flex justify-center items-center py-6 bg-gradient-to-b from-black via-[#1a1a1e] to-black shadow-lg sticky top-0 z-50 animate-fade-in">
          <div className="w-full max-w-6xl flex flex-row items-center justify-between px-4">
            <div className="flex flex-1 justify-center gap-6">
              <a href="#features" className="text-white font-semibold hover:text-purple-400 transition-colors text-pop-light">Features</a>
              <a href="#comparison" className="text-white font-semibold hover:text-purple-400 transition-colors text-pop-light">Comparison</a>
              <a href="#demo-section" className="text-white font-semibold hover:text-purple-400 transition-colors text-pop-light">Demo</a>
              <a href="#contact" className="text-white font-semibold hover:text-purple-400 transition-colors text-pop-light">Contact</a>
            </div>
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
      <section id="demo-section" className="w-full flex flex-col items-center justify-center py-12">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-3 animate-fade-in">See What NoxTitan Can Do For You.</h2>
          <p className="text-lg md:text-xl text-purple-200 text-center mb-6 animate-fade-in max-w-2xl">
            Watch our interactive walkthrough below to see how NoxTitan handles scheduling, payroll, compliance, and more—all in one powerful platform.
          </p>
          <div className="w-full flex justify-center items-center animate-fade-in">
            <iframe
              src="https://cmc-creator.github.io/NoxTitan/"
              title="NoxTitan Interactive Walkthrough"
              allowFullScreen
              className="rounded-2xl shadow-2xl border-4 border-purple-700/40 bg-black w-full h-[92vh]"
              style={{ minHeight: '92vh' }}
            ></iframe>
          </div>
        </div>
      </section>

      {/* Unique Features Section - NEW */}
      <section id="features" className="w-full flex flex-col items-center justify-center py-20 bg-gradient-to-b from-black via-purple-950/30 to-black">
        <div className="w-full max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-4 animate-fade-in">
            Features No One Else Has
          </h2>
          <p className="text-lg md:text-xl text-purple-200 text-center mb-12 animate-fade-in">
            NoxTitan isn't just another business tool—it's a complete ecosystem built for modern teams
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Guild Gamification */}
            <div className="bg-gradient-to-br from-purple-900/50 to-black border-2 border-purple-600/40 rounded-xl p-6 hover:border-purple-400 transition-all">
              <div className="text-4xl mb-3">👑</div>
              <h3 className="text-xl font-bold text-white mb-2">Guild Gamification System</h3>
              <p className="text-purple-200 text-sm mb-3">XP, levels, achievements, and rewards turn work into an engaging RPG experience. 7-tier progression from Novice to Grandmaster.</p>
              <div className="text-xs text-purple-400">• Level progression • XP rewards • Achievement badges • Reward shop</div>
            </div>

            {/* Team Activities */}
            <div className="bg-gradient-to-br from-pink-900/50 to-black border-2 border-pink-600/40 rounded-xl p-6 hover:border-pink-400 transition-all">
              <div className="text-4xl mb-3">🎮</div>
              <h3 className="text-xl font-bold text-white mb-2">30+ Team Engagement Activities</h3>
              <p className="text-purple-200 text-sm mb-3">Ice breakers, coffee roulette, trivia nights, manager mixers, and daily challenges keep teams connected and engaged.</p>
              <div className="text-xs text-purple-400">• Ice breakers • Team bonding • Manager engagement • Competitions</div>
            </div>

            {/* Oracle AI */}
            <div className="bg-gradient-to-br from-blue-900/50 to-black border-2 border-blue-600/40 rounded-xl p-6 hover:border-blue-400 transition-all">
              <div className="text-4xl mb-3">🔮</div>
              <h3 className="text-xl font-bold text-white mb-2">Oracle Predictive AI</h3>
              <p className="text-purple-200 text-sm mb-3">Machine learning forecasts staffing needs, predicts turnover, and optimizes schedules before issues arise.</p>
              <div className="text-xs text-purple-400">• Turnover prediction • Staffing optimization • Trend analysis</div>
            </div>

            {/* Asset Vault */}
            <div className="bg-gradient-to-br from-green-900/50 to-black border-2 border-green-600/40 rounded-xl p-6 hover:border-green-400 transition-all">
              <div className="text-4xl mb-3">🏦</div>
              <h3 className="text-xl font-bold text-white mb-2">Asset Vault</h3>
              <p className="text-purple-200 text-sm mb-3">Track equipment, vehicles, supplies, and inventory with full lifecycle management, maintenance tracking, and depreciation.</p>
              <div className="text-xs text-purple-400">• Equipment tracking • Maintenance logs • Depreciation calc</div>
            </div>

            {/* Sentinel */}
            <div className="bg-gradient-to-br from-red-900/50 to-black border-2 border-red-600/40 rounded-xl p-6 hover:border-red-400 transition-all">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-2">Sentinel Visitor Management</h3>
              <p className="text-purple-200 text-sm mb-3">Complete visitor tracking, badge printing, access control, and security protocols integrated with your facility management.</p>
              <div className="text-xs text-purple-400">• Check-in/out • Badge printing • Security alerts • Access logs</div>
            </div>

            {/* Basecamp Personal Portals */}
            <div className="bg-gradient-to-br from-yellow-900/50 to-black border-2 border-yellow-600/40 rounded-xl p-6 hover:border-yellow-400 transition-all">
              <div className="text-4xl mb-3">⛺</div>
              <h3 className="text-xl font-bold text-white mb-2">Basecamp Personal Portals</h3>
              <p className="text-purple-200 text-sm mb-3">Every employee gets a personalized dashboard with their schedule, goals, recognition, and team connections all in one place.</p>
              <div className="text-xs text-purple-400">• Personal dashboard • Goal tracking • Recognition feed</div>
            </div>

            {/* Compliance Suite */}
            <div className="bg-gradient-to-br from-indigo-900/50 to-black border-2 border-indigo-600/40 rounded-xl p-6 hover:border-indigo-400 transition-all">
              <div className="text-4xl mb-3">📋</div>
              <h3 className="text-xl font-bold text-white mb-2">Compliance Suite</h3>
              <p className="text-purple-200 text-sm mb-3">Automated OSHA, CMS, and Joint Commission compliance tracking with audit trails, certifications, and regulatory reporting.</p>
              <div className="text-xs text-purple-400">• OSHA tracking • CMS compliance • Audit trails • Certifications</div>
            </div>

            {/* Treasury & Signatures */}
            <div className="bg-gradient-to-br from-purple-900/50 to-black border-2 border-purple-600/40 rounded-xl p-6 hover:border-purple-400 transition-all">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-white mb-2">Digital Treasury & Signatures</h3>
              <p className="text-purple-200 text-sm mb-3">Secure document signing, approval workflows, and treasury management with full audit trails and compliance.</p>
              <div className="text-xs text-purple-400">• E-signatures • Approval workflows • Document vault</div>
            </div>

            {/* Learning Management */}
            <div className="bg-gradient-to-br from-teal-900/50 to-black border-2 border-teal-600/40 rounded-xl p-6 hover:border-teal-400 transition-all">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="text-xl font-bold text-white mb-2">Learning Management System</h3>
              <p className="text-purple-200 text-sm mb-3">Built-in training courses, certification tracking, skill development paths, and automated compliance training.</p>
              <div className="text-xs text-purple-400">• Training courses • Certifications • Skill tracking • Quizzes</div>
            </div>

            {/* Recognition System */}
            <div className="bg-gradient-to-br from-pink-900/50 to-black border-2 border-pink-600/40 rounded-xl p-6 hover:border-pink-400 transition-all">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="text-xl font-bold text-white mb-2">Recognition & Rewards</h3>
              <p className="text-purple-200 text-sm mb-3">Public recognition feed, badges, awards, points system, and peer-to-peer appreciation that actually improves retention.</p>
              <div className="text-xs text-purple-400">• Public recognition • Badge system • Points rewards • Analytics</div>
            </div>

            {/* Nox & Titan AI Assistants */}
            <div className="bg-gradient-to-br from-cyan-900/50 to-black border-2 border-cyan-600/40 rounded-xl p-6 hover:border-cyan-400 transition-all">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="text-xl font-bold text-white mb-2">Nox & Titan AI Assistants</h3>
              <p className="text-purple-200 text-sm mb-3">Dual AI assistants with text and voice capabilities help with scheduling, HR questions, payroll, and more—24/7.</p>
              <div className="text-xs text-purple-400">• Chat assistant • Voice commands • Contextual help • 24/7 availability</div>
            </div>

            {/* Merch Store Integration */}
            <div className="bg-gradient-to-br from-orange-900/50 to-black border-2 border-orange-600/40 rounded-xl p-6 hover:border-orange-400 transition-all">
              <div className="text-4xl mb-3">🛍️</div>
              <h3 className="text-xl font-bold text-white mb-2">Integrated Merch Store</h3>
              <p className="text-purple-200 text-sm mb-3">Employees can redeem points for branded merchandise, creating a tangible rewards program that builds team culture.</p>
              <div className="text-xs text-purple-400">• Point redemption • Branded merch • Fulfillment tracking</div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/signup" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 font-bold shadow-lg hover:scale-105 transition-transform border-2 border-green-500 text-white text-xl">
              Start Your Free Trial →
            </Link>
            <p className="text-purple-300 mt-4">No credit card required • 14-day trial • Full access</p>
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
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-2 animate-fade-in">
            Stop Bleeding Money on Multiple Subscriptions
          </h2>
          <p className="text-lg md:text-xl text-purple-200 text-center mb-4 animate-fade-in max-w-3xl">
            Replace 8+ expensive systems with one platform. Save $50K-$200K+ annually.
          </p>
          <p className="text-md text-purple-300 text-center mb-8 animate-fade-in max-w-2xl italic">
            (Based on 100 employees - your savings scale with team size)
          </p>
          <div className="w-full overflow-x-auto animate-fade-in">
            <table className="min-w-full rounded-2xl overflow-hidden shadow-2xl border border-purple-700/40 bg-black">
              <thead className="bg-gradient-to-r from-purple-700 to-pink-600">
                <tr>
                  <th className="px-6 py-4 text-lg font-bold text-white text-left">What You Need</th>
                  <th className="px-6 py-4 text-lg font-bold text-white text-left">Industry Standard (Multiple Tools)</th>
                  <th className="px-6 py-4 text-lg font-bold text-white text-left">Annual Cost</th>
                  <th className="px-6 py-4 text-lg font-bold text-white text-left">NoxTitan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-900">
                <tr className="hover:bg-purple-900/20 transition-colors">
                  <td className="px-6 py-4 font-semibold text-purple-200">HR & Payroll Processing</td>
                  <td className="px-6 py-4 text-gray-300">
                    <div className="font-medium">Paycom or ADP Workforce Now</div>
                    <div className="text-sm text-gray-400">$25-40/employee/month</div>
                  </td>
                  <td className="px-6 py-4 text-red-400 font-bold text-lg">$30K-$48K</td>
                  <td className="px-6 py-4 text-green-400 text-2xl font-bold">✓ Included</td>
                </tr>
                <tr className="hover:bg-purple-900/20 transition-colors">
                  <td className="px-6 py-4 font-semibold text-purple-200">Time & Attendance Tracking</td>
                  <td className="px-6 py-4 text-gray-300">
                    <div className="font-medium">Kronos/UKG or Deputy</div>
                    <div className="text-sm text-gray-400">$5-8/employee/month</div>
                  </td>
                  <td className="px-6 py-4 text-red-400 font-bold text-lg">$6K-$9.6K</td>
                  <td className="px-6 py-4 text-green-400 text-2xl font-bold">✓ Included</td>
                </tr>
                <tr className="hover:bg-purple-900/20 transition-colors">
                  <td className="px-6 py-4 font-semibold text-purple-200">Employee Scheduling</td>
                  <td className="px-6 py-4 text-gray-300">
                    <div className="font-medium">When I Work or Deputy</div>
                    <div className="text-sm text-gray-400">$2-4/employee/month</div>
                  </td>
                  <td className="px-6 py-4 text-red-400 font-bold text-lg">$2.4K-$4.8K</td>
                  <td className="px-6 py-4 text-green-400 text-2xl font-bold">✓ Included</td>
                </tr>
                <tr className="hover:bg-purple-900/20 transition-colors">
                  <td className="px-6 py-4 font-semibold text-purple-200">Performance Management</td>
                  <td className="px-6 py-4 text-gray-300">
                    <div className="font-medium">Lattice or 15Five</div>
                    <div className="text-sm text-gray-400">$8-11/employee/month</div>
                  </td>
                  <td className="px-6 py-4 text-red-400 font-bold text-lg">$9.6K-$13.2K</td>
                  <td className="px-6 py-4 text-green-400 text-2xl font-bold">✓ Included</td>
                </tr>
                <tr className="hover:bg-purple-900/20 transition-colors">
                  <td className="px-6 py-4 font-semibold text-purple-200">Applicant Tracking System</td>
                  <td className="px-6 py-4 text-gray-300">
                    <div className="font-medium">Greenhouse or Lever</div>
                    <div className="text-sm text-gray-400">$6K-15K base + per job fees</div>
                  </td>
                  <td className="px-6 py-4 text-red-400 font-bold text-lg">$12K-$25K</td>
                  <td className="px-6 py-4 text-green-400 text-2xl font-bold">✓ Included</td>
                </tr>
                <tr className="hover:bg-purple-900/20 transition-colors">
                  <td className="px-6 py-4 font-semibold text-purple-200">Learning Management (LMS)</td>
                  <td className="px-6 py-4 text-gray-300">
                    <div className="font-medium">Cornerstone or Docebo</div>
                    <div className="text-sm text-gray-400">$5-10/employee/month</div>
                  </td>
                  <td className="px-6 py-4 text-red-400 font-bold text-lg">$6K-$12K</td>
                  <td className="px-6 py-4 text-green-400 text-2xl font-bold">✓ Included</td>
                </tr>
                <tr className="hover:bg-purple-900/20 transition-colors">
                  <td className="px-6 py-4 font-semibold text-purple-200">Project Management</td>
                  <td className="px-6 py-4 text-gray-300">
                    <div className="font-medium">Asana or Monday.com</div>
                    <div className="text-sm text-gray-400">$10-25/user/month</div>
                  </td>
                  <td className="px-6 py-4 text-red-400 font-bold text-lg">$12K-$30K</td>
                  <td className="px-6 py-4 text-green-400 text-2xl font-bold">✓ Included</td>
                </tr>
                <tr className="hover:bg-purple-900/20 transition-colors">
                  <td className="px-6 py-4 font-semibold text-purple-200">Team Communication</td>
                  <td className="px-6 py-4 text-gray-300">
                    <div className="font-medium">Slack Business+</div>
                    <div className="text-sm text-gray-400">$12.50/user/month</div>
                  </td>
                  <td className="px-6 py-4 text-red-400 font-bold text-lg">$15K</td>
                  <td className="px-6 py-4 text-green-400 text-2xl font-bold">✓ Included</td>
                </tr>
                <tr className="bg-purple-950/50 font-bold text-xl">
                  <td className="px-6 py-5 text-white" colSpan={2}>TOTAL COST FOR ALL TOOLS</td>
                  <td className="px-6 py-5 text-red-400 text-2xl">$93K-$157K/yr</td>
                  <td className="px-6 py-5 text-green-400 text-2xl">$17,988/yr</td>
                </tr>
                <tr className="bg-gradient-to-r from-green-900/40 to-emerald-900/40">
                  <td className="px-6 py-5 text-white font-bold text-xl" colSpan={2}>YOUR ANNUAL SAVINGS</td>
                  <td className="px-6 py-5 text-green-400 font-black text-3xl" colSpan={2}>$75K-$139K+ SAVED</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl border-2 border-purple-500/50 max-w-4xl">
            <p className="text-white text-lg font-semibold mb-2">💡 Not Included in Savings Calculation:</p>
            <ul className="text-purple-200 space-y-1 ml-6 list-disc">
              <li>Reduced admin time (40% time savings = $78K+/year for 2 FTE managers)</li>
              <li>Eliminated context-switching costs (15 hrs/week recovered per employee)</li>
              <li>Lower turnover from Guild gamification (35% reduction = $480K saved on replacement costs)</li>
              <li>No integration fees or IT overhead for managing 8+ systems</li>
            </ul>
            <p className="text-green-400 font-bold text-xl mt-4">✨ Real Total Savings: $600K+ in Year 1</p>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced Styling */}
      <section id="roi" className="w-full flex flex-col items-center justify-center py-20 bg-gradient-to-b from-black via-purple-950/20 to-black">
        <div className="w-full max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12 animate-fade-in">By The Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center justify-center bg-gradient-to-br from-green-800/60 to-emerald-900/60 rounded-2xl shadow-xl p-10 border-2 border-green-500/40 hover:border-green-400/60 transition-all">
              <div className="text-center">
                <h3 className="text-6xl font-black text-green-300 mb-3 tracking-tight leading-none">$75K-$139K</h3>
                <p className="text-xl text-green-100 font-semibold mb-2">Annual Subscription Savings</p>
                <p className="text-sm text-green-200/80">Replace 8+ tools with one platform</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-800/60 to-indigo-900/60 rounded-2xl shadow-xl p-10 border-2 border-blue-500/40 hover:border-blue-400/60 transition-all">
              <div className="text-center">
                <h3 className="text-6xl font-black text-blue-300 mb-3 tracking-tight leading-none">$480K</h3>
                <p className="text-xl text-blue-100 font-semibold mb-2">Turnover Cost Savings</p>
                <p className="text-sm text-blue-200/80">35% reduction in employee churn (100 employees)</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center bg-gradient-to-br from-purple-800/60 to-pink-900/60 rounded-2xl shadow-xl p-10 border-2 border-purple-500/40 hover:border-purple-400/60 transition-all">
              <div className="text-center">
                <h3 className="text-6xl font-black text-purple-300 mb-3 tracking-tight leading-none">3 Weeks</h3>
                <p className="text-xl text-purple-100 font-semibold mb-2">Platform Pays for Itself</p>
                <p className="text-sm text-purple-200/80">Fastest ROI in the industry</p>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="text-2xl font-bold text-white mb-2">💰 Total Year 1 Impact</p>
            <p className="text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">$600K+ Saved</p>
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

      {/* Sales Assistant - Only on landing page */}
      <div style={{position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000, pointerEvents: 'auto'}}>
      </div>
      {/* AIAssistant now handled globally in ConditionalBots */}
    </div>
  );
}
