"use client";
import { useState } from "react";
import { ArrowRight, Lock, User, ShieldCheck } from "lucide-react";

export default function LoginAsatidz() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Fake login delay for realism
    setTimeout(() => {
      window.location.href = "/admin";
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 w-full h-96 bg-gradient-to-b from-primary-900 to-primary-700 rounded-b-[4rem] z-0"></div>
      
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-white rounded-full p-4 mx-auto mb-4 shadow-xl flex items-center justify-center">
            <img src="/logo-alimam.png" alt="Logo" className="w-16 h-16 object-contain" />
          </div>
          <h1 className="text-3xl font-black text-white mb-2">Portal Asatidz</h1>
          <p className="text-primary-100 font-medium">Sistem Informasi Manajemen Terpadu</p>
        </div>

        <div className="bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl border border-white">
          <div className="flex items-center justify-center gap-2 mb-8">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Secure Login</span>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Username / Email / No. WA</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-slate-400" />
                </div>
                <input type="text" required value={username} onChange={e => setUsername(e.target.value)} className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all text-slate-800 font-medium" placeholder="Masukkan identitas..." />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Kata Sandi</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-slate-400" />
                </div>
                <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all text-slate-800 font-medium" placeholder="••••••••" />
              </div>
            </div>

            <div className="pt-4">
              <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-3 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl shadow-primary-600/20 transition-all">
                {loading ? (
                  <span className="animate-pulse">Memverifikasi...</span>
                ) : (
                  <>Masuk Sistem <ArrowRight className="w-5 h-5" /></>
                )}
              </button>
            </div>
          </form>
        </div>
        
        <p className="text-center text-slate-400 text-sm font-medium mt-8">
          &copy; 2026 Pesantren Al-Imam. All rights reserved.
        </p>
      </div>
    </div>
  );
}
