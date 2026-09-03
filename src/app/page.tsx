// src/app/page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Users,
  Search,
  Building,
  User,
  ChevronRight,
  CheckCircle2,
  UserCheck,
  ArrowRight,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowLeft
} from "lucide-react";

type Kategori = "WALI_SANTRI" | "SURVEY" | "DINAS" | "UMUM" | null;

export default function BukuTamuKiosk() {
  const [step, setStep] = useState(0);
  const [kategori, setKategori] = useState<Kategori>(null);

  // Form State
  const [nama, setNama] = useState("");
  const [wa, setWa] = useState("");
  const [alamat, setAlamat] = useState("");
  const [instansi, setInstansi] = useState("");
  const [keperluan, setKeperluan] = useState("");

  const [currentTime, setCurrentTime] = useState("");
  const [currentDay, setCurrentDay] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })
      );
      setCurrentDay(
        now.toLocaleDateString("id-ID", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric"
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const resetForm = () => {
    setStep(0);
    setKategori(null);
    setNama("");
    setWa("");
    setAlamat("");
    setInstansi("");
    setKeperluan("");
  };

  // Mandatory UX Rule: Draft Autosave
  useEffect(() => {
    const draft = localStorage.getItem("tamu_alimam_draft");
    if (draft) {
      try {
        const parsed = JSON.parse(draft);
        if (parsed.nama) setNama(parsed.nama);
        if (parsed.wa) setWa(parsed.wa);
        if (parsed.instansi) setInstansi(parsed.instansi);
        if (parsed.alamat) setAlamat(parsed.alamat);
        if (parsed.keperluan) setKeperluan(parsed.keperluan);
      } catch (e) {
        console.error("Failed to parse draft");
      }
    }
  }, []);

  useEffect(() => {
    if (nama || wa || instansi || alamat || keperluan) {
      localStorage.setItem(
        "tamu_alimam_draft",
        JSON.stringify({ nama, wa, instansi, alamat, keperluan })
      );
    }
  }, [nama, wa, instansi, alamat, keperluan]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3); // Success Screen
    localStorage.removeItem("tamu_alimam_draft");
    setTimeout(() => {
      resetForm();
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F7FF] via-[#F8FAFC] to-white text-slate-900 font-sans flex flex-col items-center justify-center relative overflow-hidden py-10 px-4">
      
      {/* Background Micro-Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTAgNjBoNjBNNjAgMGwwIDYwIi8+PC9nPjwvc3ZnPg==')] opacity-70 pointer-events-none" />

      {/* Top Header Status Pill */}
      <div className="w-full max-w-2xl flex items-center justify-between gap-3 mb-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/95 border border-slate-200/90 shadow-2xs text-xs font-bold text-slate-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>SAPA AL-IMAM &bull; Buku Tamu Digital</span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-white/95 border border-slate-200/90 shadow-2xs text-xs font-semibold text-slate-600">
          <Clock className="w-3.5 h-3.5 text-[#550000]" />
          <span>{currentDay} &bull; {currentTime} WIB</span>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        
        {/* ─── STEP 0: WELCOME SCREEN (LUXURY OMI KIOSK) ─── */}
        {step === 0 && (
          <div
            onClick={() => setStep(1)}
            className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-200 bg-white cursor-pointer hover:scale-[1.01] transition-transform duration-300"
          >
            {/* Header Maroon */}
            <div className="bg-gradient-to-br from-[#2D0000] via-[#400000] to-[#550000] p-10 sm:p-14 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#ddc192]/15 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 space-y-4">
                <div className="w-24 h-24 bg-white rounded-3xl p-3 mx-auto shadow-xl border border-white/20 flex items-center justify-center">
                  <img
                    src="/logo-alimam.png"
                    alt="Logo Al-Imam"
                    className="w-18 h-18 object-contain"
                  />
                </div>
                
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#ddc192] bg-white/10 px-4 py-1.5 rounded-full border border-white/15 inline-block mb-2">
                    Layanan Tamu &amp; Kunjungan Kampus
                  </span>
                  <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-serif">
                    أهلاً وسهلاً
                  </h1>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-100 mt-2">
                    Pesantren Al Imam Al Islami
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mt-1">
                    Sukabumi &bull; Managed by Al Andalus IIBS
                  </p>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="p-8 sm:p-10 text-center bg-white space-y-4">
              <div className="inline-flex items-center justify-center gap-3 bg-[#550000] hover:bg-[#400000] text-white px-8 py-4 rounded-2xl font-extrabold text-base sm:text-lg shadow-lg shadow-[#550000]/25 transition-all w-full animate-pulse">
                <span>Sentuh Layar Untuk Check-In (SAPA)</span>
                <ChevronRight className="w-5 h-5 text-[#ddc192]" />
              </div>
              <p className="text-xs text-slate-400 font-medium">
                Silakan isi data kunjungan Anda untuk pencatatan keamanan dan layanan resepsionis.
              </p>
            </div>
          </div>
        )}

        {/* ─── STEP 1: PILIH KATEGORI TAMU ─── */}
        {step === 1 && (
          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white p-7 sm:p-10 space-y-8 animate-in fade-in zoom-in-95 duration-300">
            <div className="text-center space-y-1.5">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#550000] bg-[#ddc192]/20 px-3 py-1 rounded-full border border-[#ddc192]/40 inline-block">
                Langkah 1 dari 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Pilih Kategori Kunjungan
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Silakan tentukan keperluan kehadiran Anda di kampus hari ini:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  id: "WALI_SANTRI",
                  title: "Wali Santri",
                  desc: "Orang tua atau keluarga santri aktif mukim",
                  icon: Users,
                  color: "text-emerald-700 bg-emerald-50 border-emerald-200"
                },
                {
                  id: "SURVEY",
                  title: "Tamu Survey / SPMB",
                  desc: "Calon wali santri yang berkunjung melihat fasilitas",
                  icon: Search,
                  color: "text-[#550000] bg-[#ddc192]/20 border-[#ddc192]/50"
                },
                {
                  id: "DINAS",
                  title: "Tamu Dinas / Lembaga",
                  desc: "Kunjungan resmi instansi pemerintah / mitra sekolah",
                  icon: Building,
                  color: "text-blue-700 bg-blue-50 border-blue-200"
                },
                {
                  id: "UMUM",
                  title: "Tamu Umum / Silaturahmi",
                  desc: "Kunjungan personal, ustadz tamu, atau vendor",
                  icon: User,
                  color: "text-amber-700 bg-amber-50 border-amber-200"
                }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setKategori(item.id as Kategori);
                    setStep(2);
                  }}
                  className="p-6 rounded-2xl border border-slate-200 hover:border-[#550000] hover:shadow-md transition-all flex flex-col items-center text-center group bg-slate-50/50 hover:bg-white cursor-pointer"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${item.color}`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base mb-1 group-hover:text-[#550000] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(0)}
              className="w-full text-center text-xs font-bold text-slate-400 hover:text-slate-600 flex items-center justify-center gap-1 pt-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Layar Awal</span>
            </button>
          </div>
        )}

        {/* ─── STEP 2: FORM DATA DIRI (OMI TWO-SECTION CARD) ─── */}
        {step === 2 && (
          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white animate-in fade-in zoom-in-95 duration-300">
            {/* Header Form */}
            <div className="bg-gradient-to-br from-[#2D0000] via-[#400000] to-[#550000] p-6 text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#ddc192] bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15 inline-block mb-1">
                  Kategori: {kategori?.replace("_", " ")}
                </span>
                <h3 className="text-xl font-extrabold text-white">
                  Lengkapi Data Kunjungan
                </h3>
              </div>
              <button
                onClick={() => setStep(1)}
                className="px-3.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold transition-colors"
              >
                Ganti Kategori
              </button>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} className="p-7 sm:p-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-extrabold text-slate-700 flex items-center gap-1">
                    <span>Nama Lengkap Anda</span>
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Contoh: Budi Santoso, S.Pd"
                    className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:bg-white focus:border-[#550000] focus:ring-4 focus:ring-[#550000]/10 transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-extrabold text-slate-700 flex items-center gap-1">
                    <span>Nomor WhatsApp Aktif</span>
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={wa}
                    onChange={(e) => setWa(e.target.value)}
                    placeholder="Contoh: 081234567890"
                    className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:bg-white focus:border-[#550000] focus:ring-4 focus:ring-[#550000]/10 transition-all"
                  />
                </div>
              </div>

              {kategori === "WALI_SANTRI" && (
                <div className="space-y-1">
                  <label className="text-xs font-extrabold text-slate-700 flex items-center gap-1">
                    <span>Nama Santri yang Dikunjungi &amp; Kelas</span>
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={instansi}
                    onChange={(e) => setInstansi(e.target.value)}
                    placeholder="Contoh: Abdullah bin Fulan (Kelas 8 MTs)"
                    className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:bg-white focus:border-[#550000] focus:ring-4 focus:ring-[#550000]/10 transition-all"
                  />
                </div>
              )}

              {(kategori === "DINAS" || kategori === "UMUM") && (
                <div className="space-y-1">
                  <label className="text-xs font-extrabold text-slate-700">
                    Asal Instansi / Lembaga / Perusahaan
                  </label>
                  <input
                    type="text"
                    value={instansi}
                    onChange={(e) => setInstansi(e.target.value)}
                    placeholder="Contoh: Kemenag Sukabumi / PT Mitra Sejahtera"
                    className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:bg-white focus:border-[#550000] focus:ring-4 focus:ring-[#550000]/10 transition-all"
                  />
                </div>
              )}

              <div className="space-y-1">
                <label className="text-xs font-extrabold text-slate-700 flex items-center gap-1">
                  <span>Asal Kota / Alamat Singkat</span>
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  placeholder="Contoh: Sukabumi / Jakarta Selatan"
                  className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:bg-white focus:border-[#550000] focus:ring-4 focus:ring-[#550000]/10 transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-extrabold text-slate-700 flex items-center gap-1">
                  <span>Keperluan / Ingin Bertemu Siapa?</span>
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={keperluan}
                  onChange={(e) => setKeperluan(e.target.value)}
                  placeholder="Contoh: Ingin konsultasi penerimaan santri baru dengan tim admisi..."
                  className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#550000] focus:ring-4 focus:ring-[#550000]/10 transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-[#550000] hover:bg-[#400000] text-white font-extrabold text-sm shadow-md shadow-[#550000]/25 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 cursor-pointer"
                >
                  <UserCheck className="w-4 h-4 text-[#ddc192]" />
                  <span>Konfirmasi &amp; Simpan Check-In Tamu</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ─── STEP 3: SUCCESS SCREEN ─── */}
        {step === 3 && (
          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white p-10 sm:p-14 text-center space-y-5 animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                Check-In Berhasil
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Jazakallahu Khairan, {nama.split(" ")[0]}!
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Data kedatangan Anda telah tercatat pada sistem SAPA. Petugas resepsionis / asatidzah piket kami akan segera menemui Anda di ruang lobi.
              </p>
            </div>

            <p className="text-xs text-slate-400 font-medium animate-pulse pt-4">
              Layar ini akan kembali otomatis ke halaman utama...
            </p>
          </div>
        )}

      </div>

    </div>
  );
}
