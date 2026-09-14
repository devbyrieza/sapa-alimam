"use client";

// src/app/login/page.tsx
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Lock,
  User,
  ShieldCheck,
  Eye,
  EyeOff,
  Loader2,
  AlertCircle,
  BookOpen,
  QrCode,
  ClipboardList
} from "lucide-react";

export default function LoginAsatidz() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    setTimeout(() => {
      if (password === "PAAS2026!" || password === "2026#@") {
        document.cookie = "tamu_auth=true; path=/; max-age=86400";
        window.location.href = "/admin";
      } else {
        setLoading(false);
        setErrorMsg("Username atau Password salah.");
      }
    }, 1000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a0000 0%, #3d0000 30%, #550000 60%, #7a0000 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background orbs */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(221,193,146,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Subtle grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Main Card */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "460px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {/* Top nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 16px",
              borderRadius: "100px",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.8)",
              fontSize: "11px",
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              backdropFilter: "blur(8px)",
              transition: "all 0.2s",
            }}
          >
            <ArrowRight
              style={{ width: 12, height: 12, transform: "rotate(180deg)" }}
            />
            Layar Kiosk SAPA
          </Link>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              borderRadius: "100px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#4ade80",
                display: "inline-block",
                boxShadow: "0 0 8px #4ade80",
              }}
            />
            <span
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.04em",
              }}
            >
              Portal Resepsionis &bull; Staf
            </span>
          </div>
        </div>

        {/* Hero Brand Section */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "20px",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
              backdropFilter: "blur(12px)",
            }}
          >
            <img
              src="/logo-alimam.png"
              alt="Logo Al-Imam"
              style={{ width: 48, height: 48, objectFit: "contain" }}
            />
          </div>
          <p
            style={{
              fontSize: "10px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#ddc192",
              marginBottom: "6px",
            }}
          >
            Pesantren Islam Al-Imam Sukabumi
          </p>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              marginBottom: "8px",
            }}
          >
            SAPA Al-Imam
          </h1>
          <p
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.6)",
              fontWeight: 400,
              lineHeight: 1.5,
            }}
          >
            Sistem Administrasi Pelayanan &amp; Kunjungan Tamu
          </p>
        </div>

        {/* Login Form Card */}
        <div
          style={{
            background: "rgba(255,255,255,0.97)",
            borderRadius: "24px",
            padding: "32px",
            boxShadow: "0 32px 80px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.8)",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          <div style={{ marginBottom: "24px" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: 800,
                color: "#0f172a",
                letterSpacing: "-0.02em",
                marginBottom: "4px",
              }}
            >
              Masuk Portal Resepsionis
            </h2>
            <p style={{ fontSize: "12px", color: "#64748b", fontWeight: 400 }}>
              Silakan masukkan kredensial petugas resepsionis atau pengurus.
            </p>
          </div>

          {/* Info banner */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 14px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #fff8ec 0%, #fdf4e7 100%)",
              border: "1px solid #ddc19240",
              marginBottom: "20px",
            }}
          >
            <ShieldCheck style={{ width: 15, height: 15, color: "#550000", flexShrink: 0 }} />
            <span style={{ fontSize: "11px", color: "#550000", fontWeight: 500, lineHeight: 1.4 }}>
              Akses khusus petugas front office &amp; keamanan pesantren.
            </span>
          </div>

          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Username field */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#475569",
                  marginBottom: "6px",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Username Petugas <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <div style={{ position: "relative" }}>
                <User
                  style={{
                    position: "absolute",
                    left: 14,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 15,
                    height: 15,
                    color: "#94a3b8",
                    pointerEvents: "none",
                  }}
                />
                <input
                  type="text"
                  required
                  autoFocus
                  disabled={loading}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username Petugas / Staf"
                  style={{
                    width: "100%",
                    height: "48px",
                    paddingLeft: "40px",
                    paddingRight: "16px",
                    background: "#f8fafc",
                    border: "1.5px solid #e2e8f0",
                    borderRadius: "12px",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#0f172a",
                    outline: "none",
                    transition: "all 0.2s",
                    boxSizing: "border-box",
                    fontFamily: "inherit",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#550000";
                    e.target.style.background = "#ffffff";
                    e.target.style.boxShadow = "0 0 0 4px rgba(85,0,0,0.08)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e2e8f0";
                    e.target.style.background = "#f8fafc";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
            </div>

            {/* Password field */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#475569",
                  marginBottom: "6px",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Kata Sandi <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <div style={{ position: "relative" }}>
                <Lock
                  style={{
                    position: "absolute",
                    left: 14,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 15,
                    height: 15,
                    color: "#94a3b8",
                    pointerEvents: "none",
                  }}
                />
                <input
                  type={showPass ? "text" : "password"}
                  required
                  disabled={loading}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan kata sandi akses"
                  style={{
                    width: "100%",
                    height: "48px",
                    paddingLeft: "40px",
                    paddingRight: "44px",
                    background: "#f8fafc",
                    border: "1.5px solid #e2e8f0",
                    borderRadius: "12px",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#0f172a",
                    outline: "none",
                    transition: "all 0.2s",
                    boxSizing: "border-box",
                    fontFamily: "inherit",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#550000";
                    e.target.style.background = "#ffffff";
                    e.target.style.boxShadow = "0 0 0 4px rgba(85,0,0,0.08)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e2e8f0";
                    e.target.style.background = "#f8fafc";
                    e.target.style.boxShadow = "none";
                  }}
                />
                <button
                  type="button"
                  tabIndex={-1}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => setShowPass(!showPass)}
                  style={{
                    position: "absolute",
                    right: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#94a3b8",
                    padding: "4px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  aria-label="Tampilkan kata sandi"
                >
                  {showPass ? (
                    <EyeOff style={{ width: 16, height: 16 }} />
                  ) : (
                    <Eye style={{ width: 16, height: 16 }} />
                  )}
                </button>
              </div>
            </div>

            {/* Error */}
            {errorMsg && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 14px",
                  borderRadius: "12px",
                  background: "#fef2f2",
                  border: "1px solid #fecaca",
                }}
              >
                <AlertCircle style={{ width: 14, height: 14, color: "#dc2626", flexShrink: 0 }} />
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#dc2626" }}>{errorMsg}</span>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                height: "50px",
                borderRadius: "12px",
                background: loading
                  ? "#7a0000"
                  : "linear-gradient(135deg, #550000 0%, #7a0000 100%)",
                color: "#ffffff",
                fontWeight: 800,
                fontSize: "13px",
                letterSpacing: "0.02em",
                border: "none",
                cursor: loading ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                boxShadow: loading ? "none" : "0 8px 24px rgba(85,0,0,0.35)",
                transition: "all 0.2s",
                fontFamily: "inherit",
                opacity: loading ? 0.8 : 1,
              }}
            >
              {loading ? (
                <>
                  <Loader2 style={{ width: 16, height: 16, animation: "spin 1s linear infinite" }} />
                  <span>Memverifikasi Akses...</span>
                </>
              ) : (
                <>
                  <span>Masuk ke Panel Resepsionis</span>
                  <ArrowRight style={{ width: 16, height: 16 }} />
                </>
              )}
            </button>
          </form>

          {/* Footer inside card */}
          <div
            style={{
              marginTop: "20px",
              paddingTop: "16px",
              borderTop: "1px solid #f1f5f9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#4ade80",
                display: "inline-block",
              }}
            />
            <span style={{ fontSize: "11px", color: "#94a3b8", fontWeight: 600 }}>
              Koneksi Aman Terenkripsi SSL
            </span>
          </div>
        </div>

        {/* Feature pills */}
        <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
          {[
            { icon: BookOpen, label: "Buku Tamu Digital" },
            { icon: QrCode, label: "Scan Kunjungan" },
            { icon: ClipboardList, label: "Rekapitulasi Tamu" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 14px",
                borderRadius: "100px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Icon style={{ width: 11, height: 11, color: "#ddc192" }} />
              <span style={{ fontSize: "10px", fontWeight: 600, color: "rgba(255,255,255,0.7)", letterSpacing: "0.03em" }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>
            &copy; 2026 Pesantren Al-Imam Al-Islami &bull; SAPA v2.0
          </p>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
