import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-50">
      <div className="relative flex flex-col items-center">
        {/* Logo or Center Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/logo-alimam.png" alt="Logo" className="w-12 h-12 object-contain animate-pulse drop-shadow-md" onError={(e) => (e.currentTarget.style.display = 'none')} />
        </div>
        
        {/* Spinning Ring */}
        <Loader2 className="w-24 h-24 text-primary-500 animate-spin relative z-10" />
        
        {/* Text */}
        <h2 className="mt-8 text-xl font-black text-slate-700 uppercase tracking-widest animate-pulse">
          Memuat Sistem...
        </h2>
        <p className="text-slate-400 font-medium text-sm mt-2">
          Pesantren Al-Imam
        </p>
      </div>
    </div>
  );
}
