'use client'

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, Sparkles, Settings, BarChart3, Zap, Menu, X, Bot, User, Check, Copy, Mic, Volume2, VolumeX, ImagePlus, ArrowRight, LogOut, Palette, Globe, CreditCard, Code, TrendingUp, Clock, Users, MessageSquare, DollarSign, Download, Phone, Home } from 'lucide-react';
import { storage } from '@/lib/storage';

// --- PEGAR DESDE AQUÍ (BLOQUE DE COMPONENTES NUEVOS) ---

// Componente simple para mostrar estrellas
const StarRating = () => (
  <div className="flex gap-1 mb-2">
    {[1, 2, 3, 4, 5].map((star) => (
      <div key={star} className="w-4 h-4 text-yellow-400 fill-current">★</div>
    ))}
  </div>
);

// Componente: Landing Page (Portada + Testimonios)
// Componente: Landing Page (Premium + Multi-idioma)
const LandingPage = ({ t, selectedLanguage, onLanguageChange, onStart, onLogin, onDemo }) => {
  const LangBtn = ({ code, label }) => (
    <button
      onClick={() => onLanguageChange(code)}
      className={`px-2.5 py-1 rounded-lg border text-xs font-semibold transition ${
        selectedLanguage === code
          ? 'bg-cyan-500/15 border-cyan-400/40 text-cyan-200'
          : 'bg-white/5 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 overflow-x-hidden relative">
      {/* Fondo glow premium */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-cyan-500/10 blur-3xl rounded-full" />
        <div className="absolute top-1/3 -right-24 w-[520px] h-[520px] bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-1/3 w-[520px] h-[520px] bg-purple-500/10 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.12),transparent_55%)]" />
      </div>

      {/* Navbar */}
      <nav className="relative max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 blur-lg opacity-60 rounded-xl" />
            <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 p-2 rounded-xl border border-white/10">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="leading-tight">
            <div className="text-lg font-bold text-white">Aura AI</div>
            <div className="text-xs text-slate-400">Your Digital Employee</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2">
            <LangBtn code="es" label="ES" />
            <LangBtn code="en" label="EN" />
            <LangBtn code="pt" label="PT" />
          </div>

          <button
            onClick={onLogin}
            className="hidden md:inline-flex px-4 py-2 rounded-xl bg-white/5 border border-slate-800 hover:border-slate-700 hover:bg-white/10 transition text-sm font-semibold"
          >
            {t.landingFinalCtaPrimary /* reutilizamos texto, o cambia luego si quieres */}
          </button>

          <button
            onClick={onDemo}
            className="inline-flex px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900 transition text-sm font-semibold"
          >
            {t.landingCtaSecondary}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative max-w-7xl mx-auto px-6 pt-10 pb-14 md:pt-16 md:pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-slate-800 text-xs text-slate-300">
            <span className="text-cyan-300">●</span> {t.landingWhySubtitle}
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.02] text-white">
  {t.landingHeroTitle}
</h1>

          <p className="text-lg md:text-xl text-slate-300/80 max-w-xl leading-relaxed">
            {t.landingHeroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={onStart}
              className="px-8 py-4 rounded-2xl font-bold text-lg text-white
                         bg-gradient-to-r from-blue-600 to-cyan-500
                         hover:from-blue-500 hover:to-cyan-400 transition
                         shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
            >
              {t.landingCtaPrimary} <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onDemo}
              className="px-8 py-4 rounded-2xl font-bold text-lg text-white
                         bg-white/5 hover:bg-white/10 transition
                         border border-slate-800 flex items-center justify-center"
            >
              {t.landingCtaSecondary}
            </button>
          </div>

          <div className="flex items-center gap-4 text-sm text-slate-400 pt-3">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-slate-900 border-2 border-slate-950"
                />
              ))}
            </div>
            <p>{t.trustLine ?? "+500 negocios confían en Aura"}</p>
          </div>
        </div>

        {/* Visual premium: Aura en acción (chat mockup) */}
{/* Visual premium: Aura en acción (chat mockup) */}
{/* MOCK / CHAT CARD (Premium) */}
{/* MOCK / CHAT (Premium) */}
<div className="relative hidden md:block">
  <div className="absolute -inset-6 bg-cyan-500/20 blur-3xl rounded-full" />

  <div className="relative bg-slate-900/60 border border-slate-800 rounded-3xl p-6 shadow-2xl backdrop-blur overflow-hidden">
    <div className="h-80 min-h-0 rounded-2xl bg-gradient-to-br from-slate-800/70 to-slate-950/60 flex flex-col p-6 border border-white/5">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="text-slate-300 text-sm font-semibold">
          {t.landingMockHeader}
        </div>
        <div className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
          Online
        </div>
      </div>

      {/* Messages */}
      <div className="aura-scroll space-y-3 flex flex-col mt-4 flex-1 min-h-0 overflow-y-auto pr-2">
        {/* Aura */}
        <div className="bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 max-w-xs">
          {t.landingMockA1}
        </div>

        {/* Cliente */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-sm text-white/90 max-w-xs self-end shadow-xl shadow-black/20">
          {t.landingMockU1}
        </div>

        {/* Aura (menú) */}
        <div className="bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 max-w-xs">
          {t.landingMockA2}
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="rounded-xl bg-white/5 border border-white/10 p-2">
              <p className="text-xs text-slate-200 font-semibold truncate">{t.landingMockItem1}</p>
              <p className="text-[11px] text-slate-400">$4.90</p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-2">
              <p className="text-xs text-slate-200 font-semibold truncate">{t.landingMockItem2}</p>
              <p className="text-[11px] text-slate-400">$3.50</p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-2">
              <p className="text-xs text-slate-200 font-semibold truncate">{t.landingMockItem3}</p>
              <p className="text-[11px] text-slate-400">$6.20</p>
            </div>
          </div>
        </div>

        {/* Cliente (pregunta USDT) */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-sm text-white/90 max-w-xs self-end shadow-xl shadow-black/20">
          {t.landingMockU2}
        </div>

        {/* Aura (respuesta USDT) */}
        <div className="bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 max-w-xs">
          {t.landingMockA3}
        </div>

        {/* Typing */}
        <div className="text-xs text-slate-500 flex items-center gap-2 pt-1">
          <span className="inline-flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce [animation-delay:-0.2s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce [animation-delay:-0.1s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" />
          </span>
          <span>Aura {t.typing}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4">
        <div className="text-xs text-slate-500">
          {t.landingMockFooter}
        </div>

        {/* Ventas hoy (si luego quieres traducirlo, lo hacemos con t también) */}
        <div className="bg-slate-900/70 border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-300 flex items-center gap-2">
          <span className="text-green-400">●</span>
          {t.landingSalesToday}: <span className="font-bold text-white">+$1,250.00</span>
        </div>
      </div>
    </div>
  </div>
</div>



      </header>

      {/* WHY AURA */}
      <section className="relative max-w-7xl mx-auto px-6 py-18 md:py-20 border-t border-slate-800/50">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            {t.landingWhyTitle}
          </h2>
          <p className="text-slate-400 mt-3">{t.landingWhySubtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: MessageSquare, title: t.landingWhy1Title, desc: t.landingWhy1Desc },
            { icon: Globe, title: t.landingWhy2Title, desc: t.landingWhy2Desc },
            { icon: Zap, title: t.landingWhy3Title, desc: t.landingWhy3Desc },
            { icon: CreditCard, title: t.landingWhy4Title, desc: t.landingWhy4Desc },
            { icon: Sparkles, title: t.landingWhy5Title, desc: t.landingWhy5Desc },
            { icon: Phone, title: t.landingWhy6Title, desc: t.landingWhy6Desc },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-slate-900/40 p-7 rounded-3xl border border-slate-800/70 hover:border-cyan-500/25 transition group"
            >
              <div className="bg-white/5 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border border-slate-800 group-hover:border-cyan-500/25 transition">
                <f.icon className="w-6 h-6 text-cyan-300" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* INDUSTRIES (SEO + Premium) */}
<section className="relative max-w-7xl mx-auto px-6 py-20 border-y border-slate-800/50">
  <div className="text-center max-w-2xl mx-auto mb-12">
    <h2 className="text-3xl md:text-4xl font-extrabold text-white">
      {t.landingIndustriesTitle}
    </h2>
    <p className="text-slate-400 mt-3">{t.landingIndustriesSubtitle}</p>
  </div>

  <div className="grid md:grid-cols-2 gap-6">
    {[
      {
        icon: "🍽️",
        title: t.landingIndustry1Title,
        desc: t.landingIndustry1Desc,
      },
      {
        icon: "✨",
        title: t.landingIndustry2Title,
        desc: t.landingIndustry2Desc,
      },
      {
        icon: "🛍️",
        title: t.landingIndustry3Title,
        desc: t.landingIndustry3Desc,
      },
      {
        icon: "💼",
        title: t.landingIndustry4Title,
        desc: t.landingIndustry4Desc,
      },
    ].map((item, i) => (
      <div
        key={i}
        className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/30 p-7 hover:bg-slate-900/45 transition"
      >
        {/* Glow suave premium */}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full" />
        </div>

        <div className="relative flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl">
            {item.icon}
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
            <p className="text-slate-400 mt-1 leading-relaxed">{item.desc}</p>

            <button
  onClick={onDemo}
  className="mt-4 flex items-center gap-2 text-sm text-cyan-300/90 font-semibold hover:text-cyan-200 transition"
>
  <span>Ver ejemplos</span>
  <ArrowRight className="w-4 h-4" />
</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* TESTIMONIALS */}
      <section className="relative py-20 border-y border-slate-800/50 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">{t.landingTestimonialsTitle}</h2>
            <p className="text-slate-400 mt-3">{t.landingTestimonialsSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: t.landingTesti1Name, role: t.landingTesti1Role, quote: t.landingTesti1Text },
              { name: t.landingTesti2Name, role: t.landingTesti2Role, quote: t.landingTesti2Text },
              { name: t.landingTesti3Name, role: t.landingTesti3Role, quote: t.landingTesti3Text },
            ].map((ttm, i) => (
              <div key={i} className="bg-slate-950/70 p-8 rounded-3xl border border-slate-800">
                <StarRating />
                <p className="text-slate-200/90 italic leading-relaxed">“{ttm.quote}”</p>
                <div className="mt-6">
                  <p className="font-bold text-cyan-300">{ttm.name}</p>
                  <p className="text-xs text-slate-500">{ttm.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* FINAL CTA */}
      <section className="relative py-16 border-t border-slate-800/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-r from-slate-900/70 to-slate-950/70 border border-slate-800 rounded-3xl p-10 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">{t.landingFinalCtaTitle}</h3>
              <p className="text-slate-400 mt-2">{t.landingFinalCtaSubtitle}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={onStart}
                className="px-6 py-3 rounded-2xl font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition"
              >
                {t.landingFinalCtaPrimary}
              </button>
              <button
                onClick={onDemo}
                className="px-6 py-3 rounded-2xl font-bold text-white bg-white/5 hover:bg-white/10 transition border border-slate-800"
              >
                {t.landingFinalCtaSecondary}
              </button>
            </div>
          </div>
          <style jsx global>{`
  /* Scrollbar fino (Chrome/Edge/Safari) */
  .aura-scroll::-webkit-scrollbar {
    width: 8px;
  }
  .aura-scroll::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.04);
    border-radius: 999px;
  }
  .aura-scroll::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.14);
    border-radius: 999px;
    border: 2px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
  }
  .aura-scroll::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.22);
    border: 2px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
  }

  /* Firefox */
  .aura-scroll {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.20) rgba(255, 255, 255, 0.06);
  }
`}</style>

        </div>
      </section>

      <footer className="relative py-10 text-center text-slate-600 text-sm">
        <p>© 2026 Aura AI. All rights reserved.</p>
      </footer>
    </div>
  );
};


// Componente: Precios (Pricing)
// Componente: Precios (Premium + Multi-idioma)
const PricingSection = ({ t, selectedLanguage, onLanguageChange, onSelectPlan, onBack }) => {
  const LangBtn = ({ code, label }) => (
    <button
      onClick={() => onLanguageChange(code)}
      className={`px-2.5 py-1 rounded-lg border text-xs font-semibold transition ${
        selectedLanguage === code
          ? 'bg-cyan-500/15 border-cyan-400/40 text-cyan-200'
          : 'bg-white/5 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
  <div className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-cyan-500/10 blur-3xl rounded-full" />
  <div className="absolute top-1/4 -right-32 w-[640px] h-[640px] bg-blue-500/12 blur-3xl rounded-full" />
  <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-indigo-500/10 blur-3xl rounded-full" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.10),transparent_55%)]" />
</div>

      <button
        onClick={onBack}
        className="absolute top-6 left-6 text-slate-400 hover:text-white flex items-center gap-2 z-10"
      >
        ← {t.backToWelcome ?? "Volver"}
      </button>

      <div className="max-w-7xl mx-auto px-6 pt-10 pb-14">
        <div className="flex items-center justify-end gap-2 mb-8">
          <LangBtn code="es" label="ES" />
          <LangBtn code="en" label="EN" />
          <LangBtn code="pt" label="PT" />
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3">{t.landingPlansTitle}</h2>
          <p className="text-slate-400">{t.landingPlansSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free */}
          <div className="bg-slate-950/35 border border-white/10 rounded-3xl p-8 flex flex-col shadow-2xl shadow-black/20">
            <div className="flex items-center justify-between">
  <div>
    <h3 className="text-2xl font-bold text-white">{t.landingPlanFreeTitle}</h3>
    <p className="text-slate-400 text-sm">{t.landingPlanFreeDesc}</p>
  </div>

  <span className="-mt-10 px-3 py-1 rounded-full text-xs font-bold bg-green-500/15 border border-green-500/30 text-green-300">
    {t.currentPlan ?? "Plan Actual"}
  </span>
</div>

            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white">$0</span>
              <span className="text-slate-500">/mo</span>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-slate-200">
                <Check className="w-5 h-5 text-green-400" /> {t.landingPlanFreeFeat1}
              </li>
              <li className="flex items-center gap-3 text-slate-200">
                <Check className="w-5 h-5 text-green-400" /> {t.landingPlanFreeFeat2}
              </li>
              <li className="flex items-center gap-3 text-slate-200">
                <Check className="w-5 h-5 text-green-400" /> {t.landingPlanFreeFeat3}
              </li>
            </ul>

            <button
              onClick={() => onSelectPlan('free')}
              className="w-full py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold transition border border-slate-800"
            >
              {t.landingPlanFreeCta}
            </button>
          </div>

          {/* Unlimited */}
          <div className="group relative bg-slate-950/35 border border-blue-500/30 rounded-3xl p-8 flex flex-col shadow-2xl shadow-blue-900/20 transition hover:border-blue-400/60">
          {/* Glow premium hover */}
<div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition">
  <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
  <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
</div>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide text-white bg-white/10 border border-white/20 backdrop-blur-md shadow-md shadow-blue-500/10">
  <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
    {t.landingPlanProBadge}
  </span>
</div>

            <div className="relative mb-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-yellow-400">👑</span> {t.landingPlanProTitle}
              </h3>
              <p className="text-blue-200/70 text-sm">{t.landingPlanProDesc}</p>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white">$49</span>
              <span className="text-slate-500">/mo</span>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-white">
  <span className="w-5 h-5 rounded-full border border-cyan-400/50 bg-cyan-500/10 flex items-center justify-center text-cyan-200 text-xs shadow-sm shadow-cyan-500/20">
  ✓
</span>
  {t.landingPlanProFeat1}
</li>
              <li className="flex items-center gap-3 text-white">
  <span className="w-5 h-5 rounded-full border border-cyan-400/50 bg-cyan-500/10 flex items-center justify-center text-cyan-200 text-xs shadow-sm shadow-cyan-500/20">
  ✓
</span>
  {t.landingPlanProFeat2}
</li>
              <li className="flex items-center gap-3 text-white">
  <span className="w-5 h-5 rounded-full border border-cyan-400/50 bg-cyan-500/10 flex items-center justify-center text-cyan-200 text-xs shadow-sm shadow-cyan-500/20">
  ✓
</span>
  {t.landingPlanProFeat3}
</li>
            </ul>

            <button
  onClick={() => onSelectPlan('premium')}
  className="relative overflow-hidden w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-2xl font-bold transition shadow-lg shadow-blue-500/25"
>
  <span className="relative z-10">{t.landingPlanProCta}</span>

  {/* Shine premium */}
  <span className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition">
    <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/12 blur-xl rotate-12 translate-x-0 hover:translate-x-[220%] transition duration-700" />
  </span>
</button>

          </div>
        </div>
      </div>
    </div>
  );
};

// --- FIN BLOQUE DE COMPONENTES ---
  export default function AIBusinessAssistantPro() {
  // Estados para controlar la Landing Page y Login
  const [currentView, setCurrentView] = useState('landing'); // 'landing', 'pricing', 'app'
  const [userPlan, setUserPlan] = useState('free'); // 'free' o 'premium'
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Efecto para verificar si ya inició sesión antes (Persistencia "Simulada")
  useEffect(() => {
    const savedAuth = localStorage.getItem('aura_auth');
    if (savedAuth) {
      const { plan } = JSON.parse(savedAuth);
      setUserPlan(plan);
      setIsAuthenticated(true);
      setCurrentView('app'); // Ir directo a la app
    }
  }, []);

  const handleLogin = (planType) => {
    // Aquí simulamos el login exitoso
    const authData = { loggedIn: true, plan: planType, date: new Date().toISOString() };
    localStorage.setItem('aura_auth', JSON.stringify(authData));
    setUserPlan(planType);
    setIsAuthenticated(true);
    setCurrentView('app');
  };

  const handleLogout = () => {
    localStorage.removeItem('aura_auth');
    setIsAuthenticated(false);
    setCurrentView('landing');
    // Opcional: Limpiar estados del negocio
  };
  // --- FIN DE LO NUEVO ---
  // ... (el resto de tu código sigue igual)
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeTab, setActiveTab] = useState('chat');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('es');
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  
  const [businessInfo, setBusinessInfo] = useState({
    name: '',
    type: '',
    description: '',
    hours: '',
    phone: '',
    address: '',
    logo: '',
    primaryColor: '#06B6D4',
    secondaryColor: '#0EA5E9',
    accentColor: '#3B82F6'
  });

  const [products, setProducts] = useState([]);
  // --- NUEVOS ESTADOS PARA EL MENÚ Y SUBIDA DE FOTOS ---
  const [cart, setCart] = useState({}); 
  const [showMenuUI, setShowMenuUI] = useState(false);
  // NUEVO: Estado para el Calendario
  const [showCalendar, setShowCalendar] = useState(false);

  // Función para leer archivos del PC
  const handleFileUpload = (e, callback) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) callback(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '', image: '' });
  
  const [isConfigured, setIsConfigured] = useState(false);

  // Example configurations for demo
  const exampleConfigs = {
    es: {
      name: 'Café Delicias',
      type: 'Cafetería',
      description: 'Ofrecemos café artesanal de origen, postres caseros y un ambiente acogedor. Contamos con opciones veganas y sin gluten. WiFi gratis y espacio para trabajar.',
      hours: 'Lun-Vie 7AM-8PM, Sáb-Dom 8AM-9PM',
      phone: '5511345678900',
      address: 'Av. Paulista 1000, São Paulo, SP',
      logo: '☕',
      primaryColor: '#06B6D4',
      secondaryColor: '#0EA5E9',
      accentColor: '#3B82F6'
    },
    en: {
      name: 'Delicias Café',
      type: 'Coffee Shop',
      description: 'We offer artisanal origin coffee, homemade desserts and a cozy atmosphere. We have vegan and gluten-free options. Free WiFi and workspace available.',
      hours: 'Mon-Fri 7AM-8PM, Sat-Sun 8AM-9PM',
      phone: '15551234567',
      address: '123 Main Street, New York, NY',
      logo: '☕',
      primaryColor: '#06B6D4',
      secondaryColor: '#0EA5E9',
      accentColor: '#3B82F6'
    },
    pt: {
      name: 'Café Delícias',
      type: 'Cafeteria',
      description: 'Oferecemos café artesanal de origem, sobremesas caseiras e um ambiente aconchegante. Temos opções veganas e sem glúten. WiFi grátis e espaço para trabalhar.',
      hours: 'Seg-Sex 7h-20h, Sáb-Dom 8h-21h',
      phone: '5511345678900',
      address: 'Av. Paulista 1000, São Paulo, SP',
      logo: '☕',
      primaryColor: '#06B6D4',
      secondaryColor: '#0EA5E9',
      accentColor: '#3B82F6'
    }
  };

  // PRODUCTOS DE EJEMPLO TRADUCIDOS
  const exampleProducts = {
    es: [
      { name: 'Espresso', price: '3.50', category: 'Bebidas Calientes', image: '☕' },
      { name: 'Cappuccino', price: '4.50', category: 'Bebidas Calientes', image: '☕' },
      { name: 'Latte', price: '4.50', category: 'Bebidas Calientes', image: '🥛' },
      { name: 'Frappé', price: '5.50', category: 'Bebidas Frías', image: '🥤' },
      { name: 'Smoothie', price: '6.00', category: 'Bebidas Frías', image: '🍹' },
      { name: 'Cheesecake', price: '5.50', category: 'Postres', image: '🍰' },
      { name: 'Brownie', price: '4.50', category: 'Postres', image: '🍫' }
    ],
    en: [
      { name: 'Espresso', price: '3.50', category: 'Hot Drinks', image: '☕' },
      { name: 'Cappuccino', price: '4.50', category: 'Hot Drinks', image: '☕' },
      { name: 'Latte', price: '4.50', category: 'Hot Drinks', image: '🥛' },
      { name: 'Frappe', price: '5.50', category: 'Cold Drinks', image: '🥤' },
      { name: 'Smoothie', price: '6.00', category: 'Cold Drinks', image: '🍹' },
      { name: 'Cheesecake', price: '5.50', category: 'Desserts', image: '🍰' },
      { name: 'Brownie', price: '4.50', category: 'Desserts', image: '🍫' }
    ],
    pt: [
      { name: 'Espresso', price: '3.50', category: 'Bebidas Quentes', image: '☕' },
      { name: 'Cappuccino', price: '4.50', category: 'Bebidas Quentes', image: '☕' },
      { name: 'Latte', price: '4.50', category: 'Bebidas Quentes', image: '🥛' },
      { name: 'Frappé', price: '5.50', category: 'Bebidas Geladas', image: '🥤' },
      { name: 'Smoothie', price: '6.00', category: 'Bebidas Geladas', image: '🍹' },
      { name: 'Cheesecake', price: '5.50', category: 'Sobremesas', image: '🍰' },
      { name: 'Brownie', price: '4.50', category: 'Sobremesas', image: '🍫' }
    ]
  };

  // --- NUEVO: EFECTO MÁGICO PARA ACTUALIZAR LA DEMO AL CAMBIAR IDIOMA ---
  useEffect(() => {
    // 1. Verificamos si estás usando uno de los nombres de la Demo (Café Delicias, etc.)
    const isDemoStore = Object.values(exampleConfigs).some(conf => conf.name === businessInfo.name);
    
    // 2. Si es una demo, actualizamos todo automáticamente al nuevo idioma
    if (isDemoStore) {
      setBusinessInfo(exampleConfigs[selectedLanguage]);
      setProducts(exampleProducts[selectedLanguage]);
    }
  }, [selectedLanguage]); // Se activa cada vez que cambias el idioma
  
  const loadExampleConfig = () => {
    const example = exampleConfigs[selectedLanguage];
    
    // 1. Carga la Info del Negocio
    setBusinessInfo(example);
    
    // 2. Carga los Productos de ejemplo (SEGÚN IDIOMA)
    setProducts(exampleProducts[selectedLanguage]); 

    // 3. ACTIVA LOS PAGOS PARA LA DEMO
    // (Aquí sí van los tres puntos antes de paymentInfo, es código real)
    setPaymentInfo({
      ...paymentInfo,
      pixEnabled: true,
      creditCardEnabled: true,
      debitCardEnabled: true,
      cashEnabled: true,
      paypalEnabled: false,
      stripeEnabled: false,
      mercadoPagoEnabled: false,
      cryptoUsdtEnable: false,
    });

    setIsConfigured(true);
    setActiveTab('chat');
    
    // Textos de bienvenida
    const welcomeTexts = {
      es: `👋 ¡Hola! Bienvenido a ${example.name}.
      
Soy tu asistente inteligente 🤖. Estoy aquí para atenderte rápido.

Puedes preguntarme sobre:
☕ **Menú y Precios**
📍 **Ubicación y Horarios**
📅 **Reservas**
❓ **Servicios del local**

¿Qué te gustaría consultar primero?`,
      
      en: `👋 Hello! Welcome to ${example.name}.
      
I'm your smart assistant 🤖. I'm here to help you fast.

You can ask me about:
☕ **Menu and Prices**
📍 **Location and Hours**
📅 **Bookings**
❓ **Services**

What would you like to check first?`,
      
      pt: `👋 Olá! Bem-vindo ao ${example.name}.
      
Sou seu assistente inteligente 🤖. Estou aqui para te atender rápido.

Você pode me perguntar sobre:
☕ **Menu e Preços**
📍 **Localização e Horários**
📅 **Reservas**
❓ **Serviços**

O que você gostaria de consultar primeiro?`
    };

    const welcomeMsg = {
      role: 'assistant',
      content: welcomeTexts[selectedLanguage],
      timestamp: new Date().toISOString()
    };
    
    setMessages([welcomeMsg]);
    
    setNotifMessage(t.demoLoaded);
    setShowCopyNotif(true);
    setTimeout(() => setShowCopyNotif(false), 3000);
  };

  const resetToWelcome = () => {
    setIsConfigured(false);
    setMessages([]);
    setProducts([]);
    setBusinessInfo({
      name: '',
      type: '',
      description: '',
      hours: '',
      phone: '',
      address: '',
      logo: '',
      primaryColor: '#06B6D4',
      secondaryColor: '#0EA5E9',
      accentColor: '#3B82F6'
    });
    setActiveTab('chat');
  };
  const [stats, setStats] = useState({
    totalChats: 0,
    todayChats: 0,
    avgResponseTime: '< 1s',
    satisfaction: 95,
    peakHours: '2PM - 4PM',
    topQuestions: {
      es: ['Horarios', 'Ubicación', 'Precios'],
      en: ['Hours', 'Location', 'Prices'],
      pt: ['Horários', 'Localização', 'Preços']
    }
  });
  
  const [analyticsData, setAnalyticsData] = useState({
    hourlyData: [5, 12, 18, 25, 30, 28, 35, 40, 38, 32, 20, 15],
    dailyData: [45, 52, 48, 65, 70, 68, 55],
    conversionRate: 68,
    avgSessionTime: '3:24'
  });

  const [paymentInfo, setPaymentInfo] = useState({
    stripeEnabled: false,
    mercadoPagoEnabled: false,
    paypalEnabled: false,
    // NUEVOS MÉTODOS DE PAGO ESPECÍFICOS:
    pixEnabled: false,        // 🇧🇷 Pix
    creditCardEnabled: false, // 💳 Crédito
    debitCardEnabled: false,  // 💳 Débito
    cashEnabled: true,        // 💵 Efectivo (Activo por defecto)
    cryptoUsdtEnable: false,
    testMode: true
  });

  const [showCopyNotif, setShowCopyNotif] = useState(false);
  const [notifMessage, setNotifMessage] = useState('');
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const translations = {
    es: {
      chat: 'Chat',
      config: 'Configuración',
      analytics: 'Analíticas',
      integrations: 'Integraciones',
      welcome: '¡Hola! Bienvenido a',
      canHelp: 'Soy tu asistente virtual. ¿En qué puedo ayudarte?',
      typing: 'escribiendo...',
      messagePlaceholder: 'Escribe tu mensaje...',
      send: 'Enviar',
      configure: 'Configurar Ahora',
      loadExample: 'Cargar Ejemplo de Demostración',
      demoLoaded: 'Ejemplo cargado - ¡Prueba el chat ahora!',
      backToWelcome: 'Volver al Inicio',
      businessConfig: 'Configuración del Negocio',
      configSubtitle: 'Personaliza tu asistente con la información de tu negocio',
      businessName: 'Nombre del Negocio',
      businessNamePlaceholder: 'ej. Café Delicias',
      businessType: 'Tipo de Negocio',
      businessTypePlaceholder: 'ej. Cafetería, Clínica, Tienda',
      servicesDescription: 'Descripción de Servicios',
      servicesPlaceholder: 'Describe qué ofrece tu negocio...',
      businessHours: 'Horario de Atención',
      hoursPlaceholder: 'Lun-Vie 9AM-6PM',
      phoneNumber: 'Número de Teléfono',
      phonePlaceholder: '5511987654321',
      address: 'Dirección',
      addressPlaceholder: 'Av. Paulista 1000, São Paulo',
      brandColors: 'Colores de Marca',
      primary: 'Primario',
      secondary: 'Secundario',
      accent: 'Acento',
      businessLogo: 'Logo del Negocio',
      logoPlaceholder: 'Emoji o URL de imagen',
      productsServices: 'Productos/Servicios',
      productName: 'Nombre del producto',
      productPrice: 'Precio (ej: 5.50)',
      productCategory: 'Categoría (ej: Bebidas)',
      productImage: 'Emoji o URL imagen',
      addProduct: '+ Agregar Producto',
      save: 'Guardar Configuración',
      selectIndustry: 'Selecciona una industria...',
      otherIndustry: '✨ Otro (Escribir manual)',
      typeManualPlaceholder: 'Escribe tu tipo de negocio (ej. Tienda de Zapatos)',
      uploadLogo: 'Cargar Logo',
      uploadPhoto: '+ Cargar Foto desde PC',
      ifNoPhoto: 'Si no subes foto, usaremos el emoji por defecto.',
      remove: 'Eliminar',
      preview: 'Vista previa',
      
      // ESTOS SON LOS QUE FALTABAN:
      productNamePlaceholder: 'Nombre del Servicio/Producto',
      productPricePlaceholder: 'Precio ($)',
      productDescriptionPlaceholder: 'Descripción (ej: Incluye revisión, vacunas, ingredientes...)',
      
      totalChats: 'Total de Chats',
      today: 'Hoy',
      avgResponse: 'Respuesta Promedio',
      satisfaction: 'Satisfacción',
      hourlyActivity: 'Actividad por Hora',
      topQuestions: 'Preguntas Frecuentes',
      performanceMetrics: 'Métricas de Rendimiento',
      conversionRate: 'Tasa de Conversión',
      avgSessionTime: 'Tiempo Promedio de Sesión',
      peakHours: 'Horas Pico',
      schedules: 'Horarios',
      location: 'Ubicación',
      prices: 'Precios',
      websiteWidget: 'Widget para Sitio Web',
      embedWebsite: 'Incrustar en cualquier sitio web',
      copyWidgetCode: 'Copiar Código del Widget',
      whatsappIntegration: 'Integración WhatsApp',
      connectTwilio: 'Conectar vía Twilio',
      copyWhatsappCode: 'Copiar Código WhatsApp',
      paymentProcessing: 'Procesamiento de Pagos',
      paymentMethodsAvailable: 'Múltiples métodos de pago disponibles',
      payPix: 'Pix (Brasil)',
      payCredit: 'Crédito',
      payDebit: 'Débito',
      payCash: 'Efectivo',
      payStripe: 'Stripe',
      payMP: 'MercadoPago',
      payPaypal: 'PayPal',
      payUSDT: "USDT (Cripto)",
      multiLanguageSupport: 'Soporte Multi-idioma',
      selectLanguages: 'Selecciona los idiomas que deseas activar',
      readyToDeploy: 'Listo para Desplegar',
      exportAssistant: 'Exporta tu asistente completo a tu propio servidor',
      exportCode: 'Exportar Código',
      exportConfig: 'Exportar Configuración',
      exportDocs: 'Exportar Documentación',
      voiceEnabled: 'Voz activada',
      voiceDisabled: 'Voz desactivada',
      recording: 'Grabando...',
      welcomeTitle: 'Bienvenido a AI Assistant PRO',
      welcomeSubtitle: 'Configura tu negocio para activar tu asistente inteligente multiidioma con voz',
      voiceRecognition: 'Reconocimiento de Voz',
      imageAnalysis: 'Análisis de Imágenes',
      multiLanguage: 'Multi-idioma',
      whatsappReady: 'WhatsApp Listo',
      paymentIntegration: 'Integración de Pagos',
      proTip: 'Consejo Pro',
      proTipText: 'Configura tu negocio, prueba el chat y luego exporta a tu sitio web',
      calendarTitle: '📅 Agendar Cita',
      selectDate: 'Selecciona un día:',
      selectTime: 'Horarios disponibles:',
      landingLogin: 'Iniciar Sesión',

      // Landing Premium
landingHeroTitle: "Convierte chats en ventas con Aura",
landingHeroSubtitle: "Asistente virtual para tu negocio: responde al instante, muestra tu catálogo, resuelve dudas y agenda citas 24/7. Experiencia premium, lista para WhatsApp y pagos.",
landingCtaPrimary: "Crear mi Aura",
landingCtaSecondary: "Ver demo en vivo",

landingWhyTitle: "¿Por qué Aura?",
landingWhySubtitle: "Una experiencia premium que vende, atiende y agenda sin esfuerzo.",

landingWhy1Title: "Responde en segundos",
landingWhy1Desc: "Evita perder clientes: Aura contesta al instante 24/7.",
landingWhy2Title: "Multi-idioma",
landingWhy2Desc: "ES/EN/PT para atender mejor y vender sin fronteras.",
landingWhy3Title: "Catálogo inteligente",
landingWhy3Desc: "Productos, precios y detalles listos para comprar más rápido.",
landingWhy4Title: "Pagos y métodos",
landingWhy4Desc: "Efectivo, Pix, tarjetas, Stripe, PayPal, MercadoPago y USDT.",
landingWhy5Title: "Diseño premium",
landingWhy5Desc: "Se ve moderno, confiable y eleva la percepción de tu marca.",
landingWhy6Title: "Listo para escalar",
landingWhy6Desc: "Ideal para WhatsApp, integraciones y crecimiento sin fricción.",

landingTestimonialsTitle: "Historias reales",
landingTestimonialsSubtitle: "Menos mensajes repetidos. Más ventas. Mejor experiencia.",

landingTesti1Name: "María G.",
landingTesti1Role: "Cafetería • 2 sucursales",
landingTesti1Text: "Antes respondíamos tarde y se iban. Con Aura el cliente ve el menú, pregunta y compra sin esperar. Se nota más profesional.",

landingTesti2Name: "João S.",
landingTesti2Role: "Pet shop",
landingTesti2Text: "Redujo muchísimo las preguntas repetidas. El catálogo quedó hermoso y el negocio atiende 24/7. Vale cada centavo.",

landingTesti3Name: "Sarah J.",
landingTesti3Role: "Servicios de belleza",
landingTesti3Text: "Los agendamientos son más fluidos. Aura responde dudas y confirma detalles rápido. Los clientes confían porque se ve premium.",

landingPlansTitle: "Planes y precios",
landingPlansSubtitle: "Comienza gratis y crece sin límites.",
landingPlanFreeTitle: "Plan Gratuito",
landingPlanFreeDesc: "Perfecto para comenzar",
landingPlanFreeFeat1: "Hasta 2 productos",
landingPlanFreeFeat2: "Solo pagos en efectivo",
landingPlanFreeFeat3: "Acceso básico a la app",
landingPlanFreeCta: "Empezar gratis",

landingPlanProTitle: "Plan Ilimitado",
landingPlanProBadge: "POPULAR",
landingPlanProDesc: "Para crecer sin límites",
landingPlanProFeat1: "Productos ilimitados",
landingPlanProFeat2: "Acceso a toda la app",
landingPlanProFeat3: "Pagos completos + integraciones",
landingPlanProCta: "Actualizar a ilimitado",

landingFinalCtaTitle: "Tu negocio, atendido 24/7",
landingFinalCtaSubtitle: "Configura Aura hoy y empieza a convertir visitas en ventas.",
landingFinalCtaPrimary: "Ver planes",
landingFinalCtaSecondary: "Probar demo",
landingSalesToday: "Ventas Hoy",

landingMockHeader: "Chat en vivo • Aura AI",
landingMockMsg1: "Hola 👋 ¿En qué puedo ayudarte hoy?",
landingMockMsg2: "Quiero agendar una cita",
landingMockMsg3: "Perfecto 😊 ¿Qué día te viene mejor?",
landingMockFooter: "Respuesta automática en tiempo real",

landingMockHeader: "Chat en vivo • Aura AI",
landingMockA1: "Hola 👋 ¿Quieres ver el menú o agendar una cita?",
landingMockU1: "Quiero ver el menú",
landingMockA2: "Perfecto ✅ Estos son los más pedidos hoy:",
landingMockItem1: "Café",
landingMockItem2: "Té",
landingMockItem3: "Postre",
landingMockU2: "¿Aceptan pagos con USDT?",
landingMockA3: "🟩 Sí, aceptamos USDT. ¿Deseas que te calcule el total?",
landingMockFooter: "Respuesta automática en tiempo real",
landingSalesToday: "Ventas Hoy",

landingIndustriesTitle: "Ideal para tu industria",
landingIndustriesSubtitle: "Aura se adapta a tu negocio y convierte conversaciones en ventas.",
landingIndustry1Title: "Restaurantes y cafeterías",
landingIndustry1Desc: "Menú, horarios, pedidos y preguntas frecuentes en segundos.",
landingIndustry2Title: "Belleza y estética",
landingIndustry2Desc: "Agenda citas, confirma disponibilidad y responde dudas 24/7.",
landingIndustry3Title: "Tiendas y e-commerce",
landingIndustry3Desc: "Catálogo inteligente, precios, pagos y seguimiento automático.",
landingIndustry4Title: "Servicios profesionales",
landingIndustry4Desc: "Cotizaciones rápidas, reservas y atención premium sin esfuerzo.",

currentPlan: "Plan Actual",

    },
    en: {
      chat: 'Chat',
      config: 'Config',
      analytics: 'Analytics',
      integrations: 'Integrations',
      welcome: 'Hello! Welcome to',
      canHelp: 'I\'m your virtual assistant. How can I help you?',
      typing: 'typing...',
      messagePlaceholder: 'Type your message...',
      send: 'Send',
      configure: 'Configure Now',
      loadExample: 'Load Demo Example',
      demoLoaded: 'Example loaded - Try the chat now!',
      backToWelcome: 'Back to Home',
      businessConfig: 'Business Configuration',
      configSubtitle: 'Personalize your AI assistant with your business information',
      businessName: 'Business Name',
      businessNamePlaceholder: 'e.g. TechCafe',
      businessType: 'Business Type',
      businessTypePlaceholder: 'e.g. Coffee Shop, Clinic, Store',
      servicesDescription: 'Services Description',
      servicesPlaceholder: 'Describe what your business offers...',
      businessHours: 'Business Hours',
      hoursPlaceholder: 'Mon-Fri 9AM-6PM',
      phoneNumber: 'Phone Number',
      phonePlaceholder: '15551234567',
      address: 'Address',
      addressPlaceholder: '123 Main St, New York',
      brandColors: 'Brand Colors',
      primary: 'Primary',
      secondary: 'Secondary',
      accent: 'Accent',
      businessLogo: 'Business Logo',
      logoPlaceholder: 'Emoji or image URL',
      productsServices: 'Products/Services',
      productName: 'Product name',
      productPrice: 'Price (e.g. 5.50)',
      productCategory: 'Category (e.g. Drinks)',
      productImage: 'Emoji or image URL',
      addProduct: '+ Add Product',
      save: 'Save Configuration',
      selectIndustry: 'Select an industry...',
      otherIndustry: '✨ Other (Type manually)',
      typeManualPlaceholder: 'Type your business type (e.g. Shoe Store)',
      uploadLogo: 'Upload Logo',
      uploadPhoto: '+ Upload Photo from PC',
      ifNoPhoto: 'If no photo uploaded, we\'ll use the default emoji.',
      remove: 'Remove',
      preview: 'Preview',
      
      // ESTOS FALTABAN EN INGLÉS:
      productNamePlaceholder: 'Service/Product Name',
      productPricePlaceholder: 'Price ($)',
      productDescriptionPlaceholder: 'Description (e.g. Includes checkup, vaccines, ingredients...)',

      totalChats: 'Total Chats',
      today: 'Today',
      avgResponse: 'Avg Response',
      satisfaction: 'Satisfaction',
      hourlyActivity: 'Hourly Activity',
      topQuestions: 'Top Questions',
      performanceMetrics: 'Performance Metrics',
      conversionRate: 'Conversion Rate',
      avgSessionTime: 'Avg Session Time',
      peakHours: 'Peak Hours',
      schedules: 'Hours',
      location: 'Location',
      prices: 'Prices',
      websiteWidget: 'Website Widget',
      embedWebsite: 'Embed in any website',
      copyWidgetCode: 'Copy Widget Code',
      whatsappIntegration: 'WhatsApp Integration',
      connectTwilio: 'Connect via Twilio',
      copyWhatsappCode: 'Copy WhatsApp Code',
      paymentProcessing: 'Payment Processing',
      paymentMethodsAvailable: 'Multiple payment methods available',
      payPix: 'Pix (Brazil)',
      payCredit: 'Credit Card',
      payDebit: 'Debit Card',
      payCash: 'Cash',
      payStripe: 'Stripe',
      payMP: 'MercadoPago',
      payPaypal: 'PayPal',
      payUSDT: "USDT (Crypto)",
      multiLanguageSupport: 'Multi-Language Support',
      selectLanguages: 'Select languages to activate',
      readyToDeploy: 'Ready to Deploy',
      exportAssistant: 'Export your complete AI assistant to your own server',
      exportCode: 'Export Code',
      exportConfig: 'Export Config',
      exportDocs: 'Export Docs',
      voiceEnabled: 'Voice enabled',
      voiceDisabled: 'Voice disabled',
      recording: 'Recording...',
      welcomeTitle: 'Welcome to AI Assistant PRO',
      welcomeSubtitle: 'Configure your business to activate your intelligent multi-language voice-enabled assistant',
      voiceRecognition: 'Voice Recognition',
      imageAnalysis: 'Image Analysis',
      multiLanguage: 'Multi-language',
      whatsappReady: 'WhatsApp Ready',
      paymentIntegration: 'Payment Integration',
      proTip: 'Pro Tip',
      proTipText: 'Configure your business, test the chat, then export to your website',
      calendarTitle: '📅 Book Appointment',
      selectDate: 'Select a date:',
      selectTime: 'Available times:',
      landingLogin: 'Log in',

      landingHeroTitle: "Turn chats into sales with Aura",
landingHeroSubtitle: "A virtual assistant for your business: instant replies, smart catalog, FAQs and booking 24/7. Premium experience, WhatsApp-ready and payments supported.",
landingCtaPrimary: "Create my Aura",
landingCtaSecondary: "View live demo",

landingWhyTitle: "Why Aura?",
landingWhySubtitle: "A premium experience that sells, supports and books effortlessly.",

landingWhy1Title: "Replies in seconds",
landingWhy1Desc: "Don’t lose customers: Aura answers instantly 24/7.",
landingWhy2Title: "Multi-language",
landingWhy2Desc: "ES/EN/PT to support better and sell globally.",
landingWhy3Title: "Smart catalog",
landingWhy3Desc: "Products, prices and details—built to convert faster.",
landingWhy4Title: "Payments supported",
landingWhy4Desc: "Cash, Pix, cards, Stripe, PayPal, MercadoPago and USDT.",
landingWhy5Title: "Premium design",
landingWhy5Desc: "Modern, trustworthy and brand-elevating.",
landingWhy6Title: "Ready to scale",
landingWhy6Desc: "Built for WhatsApp, integrations and growth.",

landingTestimonialsTitle: "Real stories",
landingTestimonialsSubtitle: "Fewer repetitive messages. More sales. Better experience.",

landingTesti1Name: "María G.",
landingTesti1Role: "Coffee shop • 2 locations",
landingTesti1Text: "We used to reply late and lose people. With Aura, customers see the menu and buy faster. It feels truly professional.",
landingTesti2Name: "João S.",
landingTesti2Role: "Pet store",
landingTesti2Text: "It cut repetitive questions a lot. The catalog looks amazing and support is 24/7. Worth it.",
landingTesti3Name: "Sarah J.",
landingTesti3Role: "Beauty services",
landingTesti3Text: "Bookings are smoother now. Aura handles FAQs and confirms details quickly. Customers trust the premium look.",

landingPlansTitle: "Plans & pricing",
landingPlansSubtitle: "Start free and grow without limits.",
landingPlanFreeTitle: "Free Plan",
landingPlanFreeDesc: "Perfect to get started",
landingPlanFreeFeat1: "Up to 2 products",
landingPlanFreeFeat2: "Cash payments only",
landingPlanFreeFeat3: "Basic app access",
landingPlanFreeCta: "Start free",

landingPlanProTitle: "Unlimited Plan",
landingPlanProBadge: "POPULAR",
landingPlanProDesc: "Built to scale",
landingPlanProFeat1: "Unlimited products",
landingPlanProFeat2: "Full app access",
landingPlanProFeat3: "Full payments + integrations",
landingPlanProCta: "Upgrade to unlimited",

landingFinalCtaTitle: "Your business, answered 24/7",
landingFinalCtaSubtitle: "Set up Aura today and turn visits into sales.",
landingFinalCtaPrimary: "View plans",
landingFinalCtaSecondary: "Try demo",
landingSalesToday: "Sales Today",

landingMockHeader: "Live chat • Aura AI",
landingMockMsg1: "Hi 👋 How can I help you today?",
landingMockMsg2: "I want to book an appointment",
landingMockMsg3: "Perfect 😊 What day works best for you?",
landingMockFooter: "Real-time automated response",

landingMockHeader: "Live chat • Aura AI",
landingMockA1: "Hi 👋 Would you like to see the menu or book an appointment?",
landingMockU1: "Show me the menu",
landingMockA2: "Great ✅ Here are today’s most requested:",
landingMockItem1: "Coffee",
landingMockItem2: "Tea",
landingMockItem3: "Dessert",
landingMockU2: "Do you accept USDT payments?",
landingMockA3: "🟩 Yes, we accept USDT. Want me to calculate the total?",
landingMockFooter: "Real-time automated response",
landingSalesToday: "Sales Today",

landingIndustriesTitle: "Perfect for your industry",
landingIndustriesSubtitle: "Aura adapts to your business and turns conversations into sales.",
landingIndustry1Title: "Restaurants & cafés",
landingIndustry1Desc: "Menu, hours, orders and FAQs in seconds.",
landingIndustry2Title: "Beauty & wellness",
landingIndustry2Desc: "Book appointments, confirm availability and answer 24/7.",
landingIndustry3Title: "Stores & e-commerce",
landingIndustry3Desc: "Smart catalog, pricing, payments and automated follow-ups.",
landingIndustry4Title: "Professional services",
landingIndustry4Desc: "Fast quotes, bookings and premium support effortlessly.",

currentPlan: "Current plan",

    },
    pt: {
      chat: 'Chat',
      config: 'Configuração',
      analytics: 'Análises',
      integrations: 'Integrações',
      welcome: 'Olá! Bem-vindo a',
      canHelp: 'Sou seu assistente virtual. Como posso ajudá-lo?',
      typing: 'digitando...',
      messagePlaceholder: 'Digite sua mensagem...',
      send: 'Enviar',
      configure: 'Configurar Agora',
      loadExample: 'Carregar Exemplo de Demonstração',
      demoLoaded: 'Exemplo carregado - Experimente o chat agora!',
      backToWelcome: 'Voltar ao Início',
      businessConfig: 'Configuração do Negócio',
      configSubtitle: 'Personalize seu assistente com as informações do seu negócio',
      businessName: 'Nome do Negócio',
      businessNamePlaceholder: 'ex. Café Delícias',
      businessType: 'Tipo de Negócio',
      businessTypePlaceholder: 'ex. Cafeteria, Clínica, Loja',
      servicesDescription: 'Descrição dos Serviços',
      servicesPlaceholder: 'Descreva o que seu negócio oferece...',
      businessHours: 'Horário de Atendimento',
      hoursPlaceholder: 'Seg-Sex 9h-18h',
      phoneNumber: 'Número de Telefone',
      phonePlaceholder: '5511987654321',
      address: 'Endereço',
      addressPlaceholder: 'Av. Paulista 1000, São Paulo',
      brandColors: 'Cores da Marca',
      primary: 'Primária',
      secondary: 'Secundária',
      accent: 'Destaque',
      businessLogo: 'Logo do Negócio',
      logoPlaceholder: 'Emoji ou URL da imagem',
      productsServices: 'Produtos/Serviços',
      productName: 'Nome do produto',
      productPrice: 'Preço (ex: 5.50)',
      productCategory: 'Categoria (ex: Bebidas)',
      productImage: 'Emoji ou URL imagem',
      addProduct: '+ Adicionar Produto',
      save: 'Salvar Configuração',
      selectIndustry: 'Selecione uma indústria...',
      otherIndustry: '✨ Outro (Digitar manual)',
      typeManualPlaceholder: 'Digite seu tipo de negócio (ex. Loja de Sapatos)',
      uploadLogo: 'Carregar Logo',
      uploadPhoto: '+ Carregar Foto do PC',
      ifNoPhoto: 'Se não enviar foto, usaremos o emoji padrão.',
      remove: 'Remover',
      preview: 'Visualização',
      
      // ESTOS FALTABAN EN PORTUGUÉS:
      productNamePlaceholder: 'Nome do Serviço/Produto',
      productPricePlaceholder: 'Preço ($)',
      productDescriptionPlaceholder: 'Descrição (ex: Inclui revisão, vacinas, ingredientes...)',
      
      totalChats: 'Total de Chats',
      today: 'Hoje',
      avgResponse: 'Resposta Média',
      satisfaction: 'Satisfação',
      hourlyActivity: 'Atividade por Hora',
      topQuestions: 'Perguntas Frequentes',
      performanceMetrics: 'Métricas de Desempenho',
      conversionRate: 'Taxa de Conversão',
      avgSessionTime: 'Tempo Médio de Sessão',
      peakHours: 'Horários de Pico',
      schedules: 'Horários',
      location: 'Localização',
      prices: 'Preços',
      websiteWidget: 'Widget para Site',
      embedWebsite: 'Incorporar em qualquer site',
      copyWidgetCode: 'Copiar Código do Widget',
      whatsappIntegration: 'Integração WhatsApp',
      connectTwilio: 'Conetar via Twilio',
      copyWhatsappCode: 'Copiar Código do WhatsApp', // <--- ESTO ESTABA MAL
      paymentProcessing: 'Processamento de Pagamentos',
      paymentMethodsAvailable: 'Múltiplos métodos de pagamento disponíveis',
      payPix: 'Pix (Brasil)',
      payCredit: 'Crédito',
      payDebit: 'Débito',
      payCash: 'Dinheiro',
      payStripe: 'Stripe',
      payMP: 'MercadoPago',
      payPaypal: 'PayPal',
      payUSDT: "USDT (Cripto)",
      multiLanguageSupport: 'Suporte Multi-idioma',
      selectLanguages: 'Selecione os idiomas para ativar',
      readyToDeploy: 'Pronto para Implantar',
      exportAssistant: 'Exporte seu assistente completo para seu próprio servidor',
      exportCode: 'Exportar Código',
      exportConfig: 'Exportar Configuração',
      exportDocs: 'Exportar Documentação',
      voiceEnabled: 'Voz ativada',
      voiceDisabled: 'Voz desativada',
      recording: 'Gravando...',
      welcomeTitle: 'Bem-vindo ao AI Assistant PRO',
      welcomeSubtitle: 'Configure seu negócio para ativar seu assistente inteligente multilíngue com voz',
      voiceRecognition: 'Reconhecimento de Voz',
      imageAnalysis: 'Análise de Imagens',
      multiLanguage: 'Multi-idioma',
      whatsappReady: 'WhatsApp Pronto',
      paymentIntegration: 'Integração de Pagamentos',
      proTip: 'Dica Pro',
      proTipText: 'Configure seu negócio, teste o chat e depois exporte para seu site',
      calendarTitle: '📅 Agendar Horário',
      selectDate: 'Selecione um dia:',
      selectTime: 'Horários disponíveis:',
      landingLogin: 'Entrar',
      landingHeroTitle: "Transforme conversas em vendas com Aura",
landingHeroSubtitle: "Assistente virtual para o seu negócio: responde na hora, mostra o catálogo, tira dúvidas e agenda 24/7. Experiência premium, pronta para WhatsApp e pagamentos.",
landingCtaPrimary: "Criar minha Aura",
landingCtaSecondary: "Ver demo ao vivo",

landingWhyTitle: "Por que Aura?",
landingWhySubtitle: "Uma experiência premium que vende, atende e agenda sem esforço.",

landingWhy1Title: "Responde em segundos",
landingWhy1Desc: "Não perca clientes: a Aura responde na hora 24/7.",
landingWhy2Title: "Multi-idioma",
landingWhy2Desc: "ES/EN/PT para atender melhor e vender sem fronteiras.",
landingWhy3Title: "Catálogo inteligente",
landingWhy3Desc: "Produtos, preços e detalhes prontos para converter.",
landingWhy4Title: "Pagamentos suportados",
landingWhy4Desc: "Dinheiro, Pix, cartões, Stripe, PayPal, MercadoPago e USDT.",
landingWhy5Title: "Design premium",
landingWhy5Desc: "Visual moderno, confiável e que valoriza sua marca.",
landingWhy6Title: "Pronto para escalar",
landingWhy6Desc: "Feito para WhatsApp, integrações e crescimento.",

landingTestimonialsTitle: "Histórias reais",
landingTestimonialsSubtitle: "Menos mensagens repetidas. Mais vendas. Melhor experiência.",

landingTesti1Name: "María G.",
landingTesti1Role: "Cafeteria • 2 unidades",
landingTesti1Text: "Antes respondíamos tarde e perdíamos clientes. Com a Aura, a pessoa vê o menu e compra mais rápido. Fica bem profissional.",
landingTesti2Name: "João S.",
landingTesti2Role: "Pet shop",
landingTesti2Text: "Diminuiu muito as perguntas repetidas. O catálogo ficou lindo e o atendimento é 24/7. Vale muito a pena.",
landingTesti3Name: "Sarah J.",
landingTesti3Role: "Serviços de beleza",
landingTesti3Text: "Os agendamentos ficaram mais fáceis. A Aura responde dúvidas e confirma detalhes rápido. O visual premium dá confiança.",

landingPlansTitle: "Planos e preços",
landingPlansSubtitle: "Comece grátis e cresça sem limites.",
landingPlanFreeTitle: "Plano Grátis",
landingPlanFreeDesc: "Perfeito para começar",
landingPlanFreeFeat1: "Até 2 produtos",
landingPlanFreeFeat2: "Somente pagamentos em dinheiro",
landingPlanFreeFeat3: "Acesso básico ao app",
landingPlanFreeCta: "Começar grátis",

landingPlanProTitle: "Plano Ilimitado",
landingPlanProBadge: "POPULAR",
landingPlanProDesc: "Para crescer sem limites",
landingPlanProFeat1: "Produtos ilimitados",
landingPlanProFeat2: "Acesso total ao app",
landingPlanProFeat3: "Pagamentos completos + integrações",
landingPlanProCta: "Atualizar para ilimitado",

landingFinalCtaTitle: "Seu negócio atendido 24/7",
landingFinalCtaSubtitle: "Configure a Aura hoje e transforme visitas em vendas.",
landingFinalCtaPrimary: "Ver planos",
landingFinalCtaSecondary: "Testar demo",
landingSalesToday: "Vendas Hoje",

landingMockHeader: "Chat ao vivo • Aura AI",
landingMockMsg1: "Olá 👋 Como posso te ajudar hoje?",
landingMockMsg2: "Quero agendar um horário",
landingMockMsg3: "Perfeito 😊 Qual dia fica melhor pra você?",
landingMockFooter: "Resposta automática em tempo real",

landingMockHeader: "Chat ao vivo • Aura AI",
landingMockA1: "Olá 👋 Quer ver o menu ou agendar um horário?",
landingMockU1: "Quero ver o menu",
landingMockA2: "Perfeito ✅ Estes são os mais pedidos hoje:",
landingMockItem1: "Café",
landingMockItem2: "Chá",
landingMockItem3: "Sobremesa",
landingMockU2: "Vocês aceitam pagamento em USDT?",
landingMockA3: "🟩 Sim, aceitamos USDT. Quer que eu calcule o total?",
landingMockFooter: "Resposta automática em tempo real",
landingSalesToday: "Vendas Hoje",

landingIndustriesTitle: "Ideal para o seu setor",
landingIndustriesSubtitle: "A Aura se adapta ao seu negócio e transforma conversas em vendas.",
landingIndustry1Title: "Restaurantes e cafeterias",
landingIndustry1Desc: "Cardápio, horários, pedidos e dúvidas em segundos.",
landingIndustry2Title: "Beleza e estética",
landingIndustry2Desc: "Agenda horários, confirma disponibilidade e responde 24/7.",
landingIndustry3Title: "Lojas e e-commerce",
landingIndustry3Desc: "Catálogo inteligente, preços, pagamentos e acompanhamento automático.",
landingIndustry4Title: "Serviços profissionais",
landingIndustry4Desc: "Orçamentos rápidos, reservas e atendimento premium sem esforço.",

currentPlan: "Plano atual",

    }
  };

  const t = translations[selectedLanguage];

  // LISTA DE INDUSTRIAS PARA EL SELECTOR
  // LISTA DE INDUSTRIAS CON EMOJIS PREDEFINIDOS
  // LISTA DE INDUSTRIAS DINÁMICA (Según idioma)
  const getBusinessTypes = () => [
    { id: 'coffee', label: selectedLanguage === 'pt' ? '☕ Cafeteria / Restaurante' : (selectedLanguage === 'en' ? '☕ Coffee Shop / Restaurant' : '☕ Cafetería / Restaurante'), value: 'Restaurante', emoji: '☕' },
    { id: 'health', label: selectedLanguage === 'pt' ? '🦷 Clínica Odontológica / Saúde' : (selectedLanguage === 'en' ? '🦷 Dental / Health Clinic' : '🦷 Clínica Dental / Salud'), value: 'Clínica de Salud', emoji: '🦷' },
    { id: 'vet', label: selectedLanguage === 'pt' ? '🐾 Veterinária / Pets' : (selectedLanguage === 'en' ? '🐾 Vet / Pets' : '🐾 Veterinaria / Mascotas'), value: 'Clínica Veterinaria', emoji: '🐶' },
    { id: 'gym', label: selectedLanguage === 'pt' ? '💪 Academia / Fitness' : (selectedLanguage === 'en' ? '💪 Gym / Fitness' : '💪 Gimnasio / Fitness'), value: 'Centro de Fitness', emoji: '💪' },
    { id: 'realestate', label: selectedLanguage === 'pt' ? '🏠 Imobiliária' : (selectedLanguage === 'en' ? '🏠 Real Estate' : '🏠 Inmobiliaria'), value: 'Agencia Inmobiliaria', emoji: '🏠' },
    { id: 'legal', label: selectedLanguage === 'pt' ? '⚖️ Jurídico / Advogados' : (selectedLanguage === 'en' ? '⚖️ Legal / Lawyers' : '⚖️ Legal / Abogados'), value: 'Estudio Jurídico', emoji: '⚖️' },
    { id: 'store', label: selectedLanguage === 'pt' ? '🛍️ Loja / E-commerce' : (selectedLanguage === 'en' ? '🛍️ Store / E-commerce' : '🛍️ Tienda / E-commerce'), value: 'Tienda', emoji: '🛍️' },
    { id: 'beauty', label: selectedLanguage === 'pt' ? '💇‍♀️ Beleza / Estética' : (selectedLanguage === 'en' ? '💇‍♀️ Beauty / Spa' : '💇‍♀️ Belleza / Estética'), value: 'Centro de Estética', emoji: '💇‍♀️' },
    { id: 'auto', label: selectedLanguage === 'pt' ? '🔧 Oficina Mecânica' : (selectedLanguage === 'en' ? '🔧 Auto Repair' : '🔧 Taller Mecánico'), value: 'Taller Automotriz', emoji: '🔧' },
    { id: 'education', label: selectedLanguage === 'pt' ? '🎓 Educação / Cursos' : (selectedLanguage === 'en' ? '🎓 Education / Courses' : '🎓 Educación / Cursos'), value: 'Academia', emoji: '🎓' },
    { id: 'other', label: t.otherIndustry, value: '', emoji: '🏢' }
  ];
  
  const businessTypes = getBusinessTypes(); // Ejecutamos la función

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await storage.get('ai-assistant-complete-data');
        if (data) {
          const parsed = JSON.parse(data.value);
          setBusinessInfo(parsed.businessInfo || businessInfo);
          // NO cargar mensajes automáticamente
          setProducts(parsed.products || []);
          const loadedStats = parsed.stats || stats;
          if (!loadedStats.topQuestions || typeof loadedStats.topQuestions === 'string') {
            loadedStats.topQuestions = {
              es: ['Horarios', 'Ubicación', 'Precios'],
              en: ['Hours', 'Location', 'Prices'],
              pt: ['Horários', 'Localização', 'Preços']
            };
          }
          setStats(loadedStats);
          setAnalyticsData(parsed.analytics || analyticsData);
          setPaymentInfo(parsed.payment || paymentInfo);
          // NO cargar isConfigured - siempre empezar en bienvenida
        }
      } catch (error) {
        console.log('Initializing fresh installation');
      }
    };
    loadData();
  }, []);

  const saveAllData = async () => {
    try {
      const allData = {
        businessInfo,
        messages,
        products,
        stats,
        analytics: analyticsData,
        payment: paymentInfo,
        isConfigured
      };
      await storage.set('ai-assistant-complete-data', JSON.stringify(allData));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const saveBusinessInfo = async () => {
    setIsConfigured(true);
    setActiveTab('chat');
    
    // TEXTOS MULTI-IDIOMA PARA TU NEGOCIO (ALIA)
    const welcomeTexts = {
      es: `👋 ¡Hola! Bienvenido a ${businessInfo.name}.
Soy ALIA, tu nueva "Empleada Digital" 🤖.

Mi trabajo es atender a tus clientes 24/7 para que tú descanses.
Aquí tienes lo más buscado:

💰 **Ver Precio del Plan Básico**
🚀 **Entender cómo funciono**
💳 **Pasos para contratarme**

¿Te gustaría ver los precios o prefieres una demo?`,

      en: `👋 Hello! Welcome to ${businessInfo.name}.
I'm ALIA, your new "Digital Employee" 🤖.

My job is to serve your clients 24/7 so you can rest.
Here is what's most popular:

💰 **See Basic Plan Price**
🚀 **Understand how I work**
💳 **Steps to hire me**

Would you like to see pricing or do you prefer a demo?`,

      pt: `👋 Olá! Bem-vindo à ${businessInfo.name}.
Sou a ALIA, sua nova "Funcionária Digital" 🤖.

Meu trabalho é atender seus clientes 24/7 para que você descanse.
Aqui está o mais procurado:

💰 **Ver Preço do Plano Básico**
🚀 **Entender como funciono**
💳 **Passos para me contratar**

Gostaria de ver os preços ou prefere uma demo?`
    };
    
    const welcomeMsg = {
      role: 'assistant',
      content: welcomeTexts[selectedLanguage] || welcomeTexts.es,
      timestamp: new Date().toISOString()
    };
    
    setMessages([welcomeMsg]);
    await saveAllData();
  };

  const addProduct = () => {
    // --- LÓGICA DE RESTRICCIÓN (NUEVO) ---
    // Si el usuario NO es premium Y ya tiene 2 o más productos...
    if (userPlan !== 'premium' && products.length >= 2) {
      // Le mostramos una alerta (puedes cambiar esto por un modal bonito luego)
      alert("🔒 Límite alcanzado en Plan Gratis.\n\nPor favor actualiza a Premium para agregar productos ilimitados.");
      // Y detenemos la función aquí. No se agrega nada.
      return; 
    }
    // -------------------------------------

    // El resto sigue igual que antes...
    if (newProduct.name && newProduct.price) {
      setProducts([...products, {...newProduct}]);
      setNewProduct({ name: '', price: '', category: '', image: '' });
    }
  };

  const removeProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const analyzeImage = (imageData) => {
    const responses = {
      es: [
        '📸 He analizado la imagen. Veo que muestras nuestro menú. ¿Sobre qué producto te gustaría más información?',
        '✨ Perfecto, he revisado la imagen. ¿Necesitas información sobre precios, ingredientes o disponibilidad?',
        '🔍 Imagen recibida. Puedo ver varios productos. ¿Cuál te interesa específicamente?'
      ],
      en: [
        '📸 I\'ve analyzed the image. I see you\'re showing our menu. What product would you like more information about?',
        '✨ Perfect, I\'ve reviewed the image. Do you need information about prices, ingredients, or availability?',
        '🔍 Image received. I can see several products. Which one specifically interests you?'
      ],
      pt: [
        '📸 Analisei a imagem. Vejo que você está mostrando nosso menu. Sobre qual produto gostaria de mais informações?',
        '✨ Perfeito, revisei a imagem. Precisa de informações sobre preços, ingredientes ou disponibilidade?',
        '🔍 Imagem recebida. Posso ver vários produtos. Qual especificamente te interessa?'
      ]
    };
    
    const langResponses = responses[selectedLanguage];
    return langResponses[Math.floor(Math.random() * langResponses.length)];
  };

  const generateAIResponse = async (userMessage, hasImage = false) => {
    if (hasImage) {
      return analyzeImage(uploadedImage);
    }

    const msg = userMessage.toLowerCase().trim();
    const pick = (options) => options[Math.floor(Math.random() * options.length)];

    // 1. PREPARAR DATOS
    const menuList = products.length > 0 
      ? products.map(p => `• ${p.image || '🔹'} **${p.name}** ...... $${p.price}`).join('\n')
      : null;

    const getPaymentMethods = (lang) => {
        const methods = [];
        if (paymentInfo.pixEnabled) methods.push('Pix');
        if (paymentInfo.creditCardEnabled) methods.push(lang === 'pt' ? 'Cartão de Crédito' : (lang === 'en' ? 'Credit Card' : 'Tarjeta de Crédito'));
        if (paymentInfo.debitCardEnabled) methods.push(lang === 'pt' ? 'Cartão de Débito' : (lang === 'en' ? 'Debit Card' : 'Tarjeta de Débito'));
        if (paymentInfo.cashEnabled) methods.push(lang === 'pt' ? 'Dinheiro' : (lang === 'en' ? 'Cash' : 'Efectivo'));
        
        if (methods.length === 0) return lang === 'pt' ? 'Dinheiro' : (lang === 'en' ? 'Cash' : 'Efectivo');
        return methods.join(', ');
    };

    const activeMethods = getPaymentMethods(selectedLanguage);

    // 2. RESPUESTAS POR IDIOMA (AHORA INCLUYE "THANKS")
    const responses = {
      es: {
        greeting: [`👋 ¡Hola! Bienvenido a ${businessInfo.name}.\n\nSoy tu asistente virtual. ¿En qué puedo ayudarte hoy?`],
        menu: [ "📋 ¡Claro! Aquí tienes nuestro catálogo interactivo. Selecciona lo que necesites 👇", "📂 Abrí la lista de opciones para ti." ],
        payment_handoff: [`✅ ¡Excelente! He recibido tu pedido.\n\nPara confirmar, indícame tu forma de pago preferida: **${activeMethods}**.`],
        reservation: [`📅 ¡Perfecto! He abierto el calendario para ti.\n\nPor favor selecciona la fecha y hora en las opciones de abajo 👇`],
        reservation_confirmed: [`🎉 **¡Excelente!** Tu reserva ha sido registrada correctamente. Te esperamos.`],
        final: [`🎉 **¡Confirmado!** Tu pedido ya está en marcha. ¡Gracias!`],
        service: [`✨ **Nuestros Servicios:**\n\n${businessInfo.description}\n\n¿Te gustaría ver el Menú o hacer una Reserva?`],
        info: [`📍 Ubicación: ${businessInfo.address}. ⏰ Horario: ${businessInfo.hours}.`],
        thanks: [
            "😊 ¡Es un placer! Aquí estaré si se te antoja algo más.",
            "¡A ti! Que tengas un día excelente. ☕",
            "¡Gracias por visitarnos! Vuelve pronto. 👋",
            "¡De nada! Estamos para servirte."
        ],
        default: [`Entiendo "${userMessage}". ¿Quieres ver el **Menú**, hacer una **Reserva** o consultar la **Ubicación**?`]
      },
      en: {
        greeting: [`👋 Hello! Welcome to ${businessInfo.name}.\n\nI'm your virtual assistant. How can I help you today?`],
        menu: ["📋 Sure! Here is our interactive catalog. Select what you need 👇"],
        payment_handoff: [`✅ Great! Order received.\n\nTo confirm, please choose your payment method: **${activeMethods}**.`],
        reservation: [`📅 Great! I've opened the calendar for you.\n\nPlease select a date and time below 👇`],
        reservation_confirmed: [`🎉 **Awesome!** Your reservation has been successfully booked. See you soon!`],
        final: [`🎉 **Confirmed!** Your order is being processed. Thanks!`],
        service: [`✨ **Our Services:**\n\n${businessInfo.description}\n\nWould you like to see the Menu or Book a table?`],
        info: [`📍 Location: ${businessInfo.address}. ⏰ Hours: ${businessInfo.hours}.`],
        thanks: [
            "😊 My pleasure! I'm here if you need anything else.",
            "You're welcome! Have a wonderful day. ☕",
            "Thanks for visiting! Come back soon. 👋",
            "No problem! Happy to help."
        ],
        default: [`I understand. Would you like to see the **Menu**, make a **Reservation**, or check our **Location**?`]
      },
      pt: {
        greeting: [`👋 Olá! Bem-vindo ao ${businessInfo.name}.\n\nSou seu assistente virtual. Como posso ajudar hoje?`],
        menu: ["📋 Claro! Aqui está nosso catálogo interativo. Selecione o que precisa 👇"],
        payment_handoff: [`✅ Ótimo! Recebi seu pedido.\n\nPara confirmar, indique o pagamento: **${activeMethods}**.`],
        reservation: [`📅 Perfeito! Abri o calendário para você.\n\nPor favor, selecione data e hora abaixo 👇`],
        reservation_confirmed: [`🎉 **Excelente!** Sua reserva foi agendada com sucesso. Te esperamos!`],
        final: [`🎉 **Confirmado!** Seu pedido já está sendo preparado. Obrigado!`],
        service: [`✨ **Nossos Serviços:**\n\n${businessInfo.description}\n\nGostaria de ver o Menu ou fazer uma Reserva?`],
        info: [`📍 Localização: ${businessInfo.address}. ⏰ Horário: ${businessInfo.hours}.`],
        thanks: [
            "😊 O prazer é meu! Estou por aqui se precisar.",
            "Por nada! Tenha um ótimo dia. ☕",
            "Obrigado você pela visita! Volte logo. 👋",
            "De nada! Estamos à disposição."
        ],
        default: [`Entendi. Gostaria de ver o **Menu**, fazer uma **Reserva** ou ver a **Localização**?`]
      }
    };

    const langParams = responses[selectedLanguage] || responses.es;

    // --- CEREBRO: JERARQUÍA DE DECISIONES ---

    // 1. CONFIRMACIÓN DE PEDIDO (Botón verde)
    if (msg.includes('he seleccionado') || msg.includes('total estimado') || msg.includes('cómo procedemos') || msg.includes('selected') || msg.includes('total estimated') || msg.includes('selecionei') || msg.includes('total estimado')) {
        return pick(langParams.payment_handoff);
    }
    
    // 2. CONFIRMACIÓN DE RESERVA (FORMATO ELEGANTE: "Martes, 20 de Enero")
    if (msg.includes('quiero reservar para') || msg.includes('reservation for') || msg.includes('agendar para')) {
        const parts = msg.match(/(?:para|for) (.*?) (?:a las|at|às) (.*)/i);
        
        if (parts && parts.length === 3) {
           let dateStr = parts[1].replace('el ', '').replace('the ', '').replace('o ', '').trim();
           const time = parts[2].replace('.', '').trim();

           // MAGIA: Convertimos "20/1/2026" a "Martes, 20 de enero"
           try {
             if (dateStr.includes('/')) {
               const [day, month, year] = dateStr.split('/');
               const dateObj = new Date(year, month - 1, day);
               if (!isNaN(dateObj)) {
                 const locale = selectedLanguage === 'es' ? 'es-ES' : selectedLanguage === 'pt' ? 'pt-BR' : 'en-US';
                 dateStr = dateObj.toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'long' });
                 dateStr = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
               }
             }
           } catch (e) {}

           if (selectedLanguage === 'es') return `🎉 **¡Excelente!** Tu reserva ha sido registrada correctamente.\n\nTe esperamos el **${dateStr}** a las **${time}**.`;
           if (selectedLanguage === 'pt') return `🎉 **Excelente!** Sua reserva foi agendada com sucesso.\n\nTe esperamos **${dateStr}** às **${time}**.`;
           return `🎉 **Awesome!** Your reservation has been successfully booked for **${dateStr}** at **${time}**. See you soon!`;
        }
        return pick(langParams.reservation_confirmed); 
    }

    // 3. SOLICITUD DE RESERVA (Abre Calendario)
    if (msg.includes('reserva') || msg.includes('cita') || msg.includes('booking') || msg.includes('agend') || msg.includes('mesa') || msg.includes('table') || msg.includes('appointment')) {
        setShowCalendar(true);
        return pick(langParams.reservation);
    }

    // 4. PAGOS
    if (msg.includes('tarjeta') || msg.includes('card') || msg.includes('pix') || msg.includes('efectivo') || msg.includes('cash') || msg.includes('credito') || msg.includes('crédito') || msg.includes('debito') || msg.includes('débito') || msg.includes('credit') || msg.includes('debit') || msg.includes('dinheiro')) {
        return pick(langParams.final);
    }

    // 5. CONSULTA DE SERVICIOS (Texto solamente)
    if (msg.includes('servicio') || msg.includes('ofrecen') || msg.includes('haces') || 
        msg.includes('service') || msg.includes('offer') || msg.includes('serviço') || msg.includes('fazer')) {
        return pick(langParams.service);
    }

    // 6. SOLICITUD DE MENÚ (Abre Catálogo)
    if (msg.includes('menu') || msg.includes('menú') || msg.includes('carta') || 
        msg.includes('catalogo') || msg.includes('catálogo') || 
        msg.includes('precio') || msg.includes('productos') || 
        msg.includes('price') || msg.includes('products') || 
        msg.includes('preço') || 
        msg.includes('si') || msg.includes('sí') || msg.includes('yes') || msg.includes('claro') || msg.includes('sim')) {
        
        setShowMenuUI(true);
        return pick(langParams.menu);
    }

    // 7. AGRADECIMIENTOS (¡NUEVO!) 😊
    if (msg.includes('gracias') || msg.includes('thank') || msg.includes('obrigad') || msg.includes('valeu')) {
        return pick(langParams.thanks);
    }

    // 8. SALUDOS
    if (msg.includes('hola') || msg.includes('buen') || msg.includes('hi') || msg.includes('olá') || msg.includes('ola') || msg.includes('tarde') || msg.includes('noite') || msg.includes('dia') || msg.includes('morning') || msg.includes('evening')) {
        return pick(langParams.greeting);
    }

    // 9. CONSULTAS GENERALES
    if (msg.includes('hora') || msg.includes('ubic') || msg.includes('dond') || msg.includes('loca') || msg.includes('where')) return pick(langParams.info);

    // 10. INTENCIÓN DE COMPRA DIRECTA
    const productMatch = products.find(p => msg.includes(p.name.toLowerCase()));
    if (msg.includes('quiero') || msg.includes('dame') || msg.includes('ordenar') || productMatch || msg.includes('llevar') || msg.includes('aqui') || msg.includes('want') || msg.includes('order') || msg.includes('quero')) {
        setShowMenuUI(true);
        return pick(langParams.menu);
    }

    return pick(langParams.default);
  };

  const handleSend = async (overrideMessage = null) => {
    // Si viene texto del menú, úsalo. Si no, usa el input normal.
    const textToSend = typeof overrideMessage === 'string' ? overrideMessage : input;

    // Validación: Si no hay texto ni imagen, no hacer nada
    if (!textToSend?.trim() && !uploadedImage && typeof overrideMessage !== 'boolean') return;

    const isImageUpload = typeof overrideMessage === 'boolean' && overrideMessage;

    const userMessage = { 
      role: 'user', 
      content: textToSend,
      timestamp: new Date().toISOString(),
      hasImage: isImageUpload,
      image: isImageUpload ? uploadedImage : null
    };
    
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    if (!isImageUpload) setUploadedImage(null);
    setIsTyping(true);

    const newStats = { ...stats, totalChats: stats.totalChats + 1, todayChats: stats.todayChats + 1 };
    setStats(newStats);

    setTimeout(async () => {
      const aiResponse = {
        role: 'assistant',
        content: await generateAIResponse(textToSend, isImageUpload),
        timestamp: new Date().toISOString()
      };
      
      setMessages([...updatedMessages, aiResponse]);
      setIsTyping(false);
      
      if (voiceEnabled && 'speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(aiResponse.content);
        utterance.lang = selectedLanguage === 'es' ? 'es-ES' : selectedLanguage === 'pt' ? 'pt-BR' : 'en-US';
        window.speechSynthesis.speak(utterance);
      }

      await saveAllData();
    }, 1500);
  };

  const toggleRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      
      if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = selectedLanguage === 'es' ? 'es-ES' : selectedLanguage === 'pt' ? 'pt-BR' : 'en-US';
        recognition.continuous = false;
        
        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          setInput(transcript);
          setIsRecording(false);
        };
        
        recognition.onerror = () => {
          setIsRecording(false);
        };
        
        recognition.onend = () => {
          setIsRecording(false);
        };
        
        recognition.start();
      } else {
        setTimeout(() => {
          const demoMessages = {
            es: '¿Cuál es el horario de atención?',
            en: 'What are your business hours?',
            pt: 'Qual é o horário de atendimento?'
          };
          setInput(demoMessages[selectedLanguage]);
          setIsRecording(false);
        }, 2000);
      }
    } else {
      setIsRecording(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
        setInput('He adjuntado una imagen');
        handleSend(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setNotifMessage('✅ Copied to clipboard!');
    setShowCopyNotif(true);
    setTimeout(() => setShowCopyNotif(false), 3000);
  };

  const generateWidgetCode = () => {
    const code = `<!-- AI Assistant Widget - Paste in your website -->
<div id="ai-assistant-widget"></div>
<script>
  (function() {
    const config = {
      businessName: "${businessInfo.name}",
      primaryColor: "${businessInfo.primaryColor}",
      language: "${selectedLanguage}",
      position: "bottom-right"
    };
    
    const widget = document.createElement('div');
    widget.innerHTML = \`
      <style>
        #ai-chat-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, \${config.primaryColor}, #3B82F6);
          box-shadow: 0 4px 20px rgba(6, 182, 212, 0.5);
          cursor: pointer;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s;
        }
        #ai-chat-btn:hover { transform: scale(1.1); }
      </style>
      <button id="ai-chat-btn">💬</button>
    \`;
    document.body.appendChild(widget);
    
    document.getElementById('ai-chat-btn').onclick = () => {
      window.open('https://your-domain.com/chat', 'AI Assistant', 'width=400,height=600');
    };
  })();
</script>`;
    
    copyToClipboard(code);
  };

  const generateWhatsAppCode = () => {
    const code = `// WhatsApp Integration - Node.js + Twilio
const twilio = require('twilio');
const client = twilio('YOUR_ACCOUNT_SID', 'YOUR_AUTH_TOKEN');

app.post('/whatsapp-webhook', async (req, res) => {
  const incomingMsg = req.body.Body;
  const from = req.body.From;
  
  // Process with AI (connect to your assistant API)
  const aiResponse = await fetch('YOUR_API_URL/chat', {
    method: 'POST',
    body: JSON.stringify({ message: incomingMsg }),
    headers: { 'Content-Type': 'application/json' }
  }).then(r => r.json());
  
  // Send response back via WhatsApp
  await client.messages.create({
    body: aiResponse.content,
    from: 'whatsapp:+14155238886', // Twilio sandbox number
    to: from
  });
  
  res.sendStatus(200);
});

// Setup webhook in Twilio Console:
// https://console.twilio.com/us1/develop/sms/settings/whatsapp-sandbox`;
    
    copyToClipboard(code);
  };

  // =================================================================
  //  PASO FINAL: PEGAR ESTO AQUÍ (JUSTO ANTES DEL "return (" )
  // =================================================================
  
  // 1. Si la vista es 'landing', mostramos la Portada nueva
  if (currentView === 'landing') {
    return (
      <LandingPage 
        t={t}
        selectedLanguage={selectedLanguage}
        onLanguageChange={setSelectedLanguage}
        onStart={() => setCurrentView('pricing')} 
        onLogin={() => setCurrentView('pricing')}
        onDemo={() => {
          loadExampleConfig(); // <--- Tu función original que carga Café Delicias
          setCurrentView('app'); // <--- Entramos a la APP
        }} 
      />
    );
  }

  // 2. Si la vista es 'pricing', mostramos los Precios
  if (currentView === 'pricing') {
    return (
      <PricingSection 
        t={t}
        selectedLanguage={selectedLanguage}
        onLanguageChange={setSelectedLanguage}
        onSelectPlan={handleLogin} 
        onBack={() => setCurrentView('landing')} 
      />
    );
  }

  // 3. Si no es ninguno de los anteriores, el código sigue y muestra tu APP original
  // =================================================================

  return (  // <--- ESTA ES LA LÍNEA QUE YA TENÍAS. ¡NO LA BORRES!
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      {/* Animated Tech Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{top: '10%', left: '10%', animationDuration: '4s'}}></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{top: '60%', right: '10%', animationDuration: '6s'}}></div>
        <div className="absolute w-64 h-64 bg-cyan-400/5 rounded-full blur-2xl animate-pulse" style={{bottom: '10%', left: '50%', animationDuration: '5s'}}></div>
      </div>

      {/* Header */}
      <header className="relative bg-black/40 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-lg opacity-75 rounded-xl"></div>
                <div className="relative bg-gradient-to-r from-cyan-500 to-blue-600 p-2 rounded-xl shadow-lg shadow-cyan-500/50">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  AI Business Assistant PRO
                </h1>
                <p className="text-xs text-cyan-400/70">Next-Generation Intelligence Platform</p>
              </div>
            </div>
            
            {/* Language Selector */}
            <div className="hidden md:flex items-center gap-2 bg-black/30 p-1 rounded-lg border border-cyan-500/20">
              {['es', 'en', 'pt'].map(lang => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold uppercase transition ${
                    selectedLanguage === lang
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                      : 'text-cyan-300/70 hover:text-cyan-300 hover:bg-white/5'
                  }`}
                >
                  {lang}
                </button>
                
              ))}
              {/* --- BOTÓN DE LOGOUT (NUEVO) --- */}
            <button
              onClick={handleLogout}
              className="ml-2 flex items-center gap-2 px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-lg transition text-xs font-bold"
              title="Cerrar Sesión"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden md:inline">Salir</span>
            </button>
            {/* -------------------------------- */}
            </div>

            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-cyan-400 hover:bg-white/10 p-2 rounded-lg transition border border-cyan-500/20"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>

            <nav className="hidden lg:flex gap-2">
              {[
                { id: 'chat', icon: MessageCircle, label: t.chat },
                { id: 'config', icon: Settings, label: t.config },
                { id: 'analytics', icon: BarChart3, label: t.analytics },
                { id: 'integrations', icon: Zap, label: t.integrations }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition font-medium ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                      : 'text-cyan-300/80 hover:text-cyan-300 hover:bg-white/5 border border-transparent hover:border-cyan-500/20'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="text-sm">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {menuOpen && (
            <div className="lg:hidden py-4 space-y-2 border-t border-cyan-500/20">
              {[
                { id: 'chat', icon: MessageCircle, label: t.chat },
                { id: 'config', icon: Settings, label: t.config },
                { id: 'analytics', icon: BarChart3, label: t.analytics },
                { id: 'integrations', icon: Zap, label: t.integrations }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setMenuOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                      : 'text-cyan-300 hover:bg-white/5'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Chat View */}
        {activeTab === 'chat' && (
          <div className="bg-black/30 backdrop-blur-2xl rounded-3xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 overflow-hidden">
            {!isConfigured ? (
              <div className="p-12 text-center">
                <div className="relative inline-block mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-2xl opacity-60 animate-pulse rounded-full"></div>
                  <div className="relative bg-gradient-to-br from-cyan-500 via-blue-600 to-blue-700 w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/50 rotate-6">
                    <Bot className="w-12 h-12 text-white -rotate-6" />
                  </div>
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-4">
                  {t.welcomeTitle}
                </h2>
                <p className="text-cyan-300/80 text-lg mb-8 max-w-md mx-auto leading-relaxed">
                  {t.welcomeSubtitle}
                </p>
                <button
                  onClick={() => setActiveTab('config')}
                  className="bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 hover:from-cyan-600 hover:via-blue-600 hover:to-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 border border-cyan-400/30"
                >
                  {t.configure} →
                </button>
              </div>
            ) : (
              <>
                <div className="h-[550px] overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-cyan-500/30 scrollbar-track-transparent">
                  {messages.length === 0 ? (
                    <div className="text-center py-16">
                      <div className="relative inline-block mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-2xl animate-pulse rounded-full"></div>
                        <div className="relative bg-gradient-to-br from-cyan-500/20 to-blue-500/20 w-20 h-20 rounded-2xl flex items-center justify-center border-2 border-cyan-500/30 shadow-xl">
                          <MessageCircle className="w-10 h-10 text-cyan-300" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        🤖 AI Ready
                      </h3>
                      <p className="text-cyan-300/70 text-lg">
                        Start chatting to test your assistant
                      </p>
                      <div className="mt-6 flex flex-wrap justify-center gap-2">
                        <span className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-300">Voice Enabled</span>
                        <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs text-blue-300">Image Analysis</span>
                        <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs text-purple-300">Multi-language</span>
                      </div>
                    </div>
                  ) : (
                    messages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex gap-3 animate-fade-in ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        {msg.role === 'assistant' && (
                          <div className="relative flex-shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-md opacity-75 rounded-full"></div>
                            <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 w-10 h-10 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50 border border-cyan-400/30">
                              <Bot className="w-5 h-5 text-white" />
                            </div>
                          </div>
                        )}
                        <div className="max-w-[75%]">
                          <div
                            className={`px-5 py-3 rounded-2xl ${
                              msg.role === 'user'
                                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/20 border border-cyan-400/30'
                                : 'bg-white/5 text-white border border-cyan-500/20 backdrop-blur-sm'
                            }`}
                          >
                            {msg.hasImage && msg.image && (
                              <img src={msg.image} alt="uploaded" className="max-w-full h-40 object-cover rounded-xl mb-3 border-2 border-white/20" />
                            )}
                            <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                          </div>
                          <span className="text-xs text-cyan-400/50 mt-1.5 block px-2">
                            {new Date(msg.timestamp).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
                          </span>
                        </div>
                        {msg.role === 'user' && (
                          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30 border border-blue-400/30">
                            <User className="w-5 h-5 text-white" />
                          </div>
                        )}
                      </div>
                    ))
                  )}
                  
                  {isTyping && (
                    <div className="flex gap-3 animate-fade-in">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-md opacity-75 rounded-full"></div>
                        <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 w-10 h-10 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50">
                          <Bot className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="bg-white/5 px-5 py-3 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
                        <div className="flex gap-1.5 mb-1">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                        </div>
                        <span className="text-xs text-cyan-300/70">{t.typing}</span>
                      </div>
                    </div>
                  )}

                  {/* --- CATÁLOGO INTERACTIVO VISUAL --- */}
                  {showMenuUI && (
                    <div className="mt-4 mb-4 bg-slate-900/95 rounded-2xl border border-cyan-500/50 shadow-2xl backdrop-blur-md overflow-hidden animate-fade-in-up mx-2 z-50 relative">
                      {/* Encabezado */}
                      <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-4 border-b border-white/10 flex justify-between items-center">
                        <div>
                          <h3 className="text-lg font-bold text-white flex items-center gap-2">📋 Catálogo Disponible</h3>
                          <p className="text-xs text-cyan-400">Selecciona lo que deseas ordenar</p>
                        </div>
                        <button onClick={() => setShowMenuUI(false)} className="bg-white/10 w-8 h-8 rounded-full text-white">✕</button>
                      </div>

                      {/* Lista de Productos */}
                      <div className="p-2 space-y-3 max-h-[400px] overflow-y-auto custom-scrollbar">
                        {products.map((product) => {
                          const qty = cart[product.name] || 0;
                          return (
                            <div key={product.name} className="flex bg-white/5 p-3 rounded-xl border border-white/5 hover:border-cyan-500/30 transition group">
                              {/* Foto */}
                              <div className="w-20 h-20 bg-slate-800 rounded-lg overflow-hidden flex-shrink-0 border border-white/10">
                                {product.image ? (
                                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                ) : ( <div className="w-full h-full flex items-center justify-center text-2xl">📦</div> )}
                              </div>
                              {/* Info */}
                              <div className="flex-1 px-3 flex flex-col justify-center">
                                <h4 className="font-bold text-white text-base">{product.name}</h4>
                                <p className="text-xs text-slate-400 mt-1 line-clamp-2">{product.description || 'Sin descripción.'}</p>
                                <p className="text-cyan-300 font-bold mt-1">${product.price}</p>
                              </div>
                             {/* Botones Verticales (+ Arriba, - Abajo) */}
                              {/* Botones Verticales */}
                              <div className="flex flex-col items-center justify-center gap-1 pl-2 border-l border-white/10">
                                <button 
                                  onClick={() => setCart({...cart, [product.name]: qty + 1})} 
                                  className="w-8 h-8 flex items-center justify-center bg-slate-800 hover:bg-green-500/20 text-green-400 rounded-full font-bold transition"
                                >
                                  +
                                </button>
                                <span className="text-sm font-bold text-white w-6 text-center py-1">
                                  {qty}
                                </span>
                                <button 
                                  onClick={() => { const newQty = Math.max(0, qty - 1); setCart({...cart, [product.name]: newQty}); }} 
                                  className="w-8 h-8 flex items-center justify-center bg-slate-800 hover:bg-cyan-500/20 text-cyan-400 rounded-full font-bold transition"
                                >
                                  -
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Total y Confirmar */}
                      <div className="p-4 bg-slate-900 border-t border-white/10">
                        <div className="flex justify-between items-end mb-4">
                          <span className="text-slate-400 text-sm">Total Estimado:</span>
                          <span className="text-2xl font-bold text-white">
                            ${products.reduce((acc, p) => acc + (p.price * (cart[p.name] || 0)), 0).toFixed(2)}
                          </span>
                        </div>
                        <button
                          onClick={() => {
                            const items = Object.entries(cart).filter(([_, q]) => q > 0).map(([name, q]) => `${q}x ${name}`).join(', ');
                            if (!items) return;
                            const total = products.reduce((acc, p) => acc + (p.price * (cart[p.name] || 0)), 0).toFixed(2);
                            const orderText = `Hola, he seleccionado: ${items}. Total estimado: $${total}. ¿Cómo procedemos?`;
                            handleSend(orderText);
                            setShowMenuUI(false);
                            setCart({});
                          }}
                          disabled={Object.values(cart).reduce((a, b) => a + b, 0) === 0}
                          className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg transition flex justify-center items-center gap-2"
                        >
                          ✅ Confirmar Selección
                        </button>
                      </div>
                    </div>
                  )}

                  {/* --- CALENDARIO DE RESERVAS (MULTILINGÜE) --- */}
                  {showCalendar && (
                    <div className="mt-4 mb-4 bg-slate-900/95 rounded-2xl border border-purple-500/50 shadow-2xl backdrop-blur-md overflow-hidden animate-fade-in-up mx-2 z-50 relative">
                      <div className="bg-gradient-to-r from-purple-900 to-slate-900 p-4 border-b border-white/10 flex justify-between items-center">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">{t.calendarTitle}</h3>
                        <button onClick={() => setShowCalendar(false)} className="bg-white/10 w-8 h-8 rounded-full text-white">✕</button>
                      </div>
                      
                      <div className="p-4">
                        <p className="text-purple-300 text-sm mb-3">{t.selectDate}</p>
                        {/* Días del mes */}
                        <div className="grid grid-cols-7 gap-2 mb-4">
                          {[...Array(14)].map((_, i) => {
                            const d = new Date();
                            d.setDate(d.getDate() + i);
                            // Detectamos idioma para la fecha
                            const locale = selectedLanguage === 'es' ? 'es-ES' : selectedLanguage === 'pt' ? 'pt-BR' : 'en-US';
                            return (
                              <button 
                                key={i}
                                className="p-2 rounded-lg bg-white/5 hover:bg-purple-500/30 border border-white/10 flex flex-col items-center text-xs transition"
                              >
                                <span className="text-slate-400 capitalize">{d.toLocaleDateString(locale, {weekday: 'short'})}</span>
                                <span className="text-white font-bold text-lg">{d.getDate()}</span>
                              </button>
                            );
                          })}
                        </div>

                        <p className="text-purple-300 text-sm mb-3">{t.selectTime}</p>
                        <div className="grid grid-cols-3 gap-2">
                          {['09:00', '10:00', '11:00', '13:00', '15:00', '16:30', '18:00', '19:30'].map(time => (
                            <button
                              key={time}
                              onClick={() => {
                                const d = new Date();
                                const locale = selectedLanguage === 'es' ? 'es-ES' : selectedLanguage === 'pt' ? 'pt-BR' : 'en-US';
                                const fechaStr = d.toLocaleDateString(locale);
                                
                                // Mensaje de confirmación en el idioma correcto
                                let confirmMsg = '';
                                if (selectedLanguage === 'es') confirmMsg = `Hola, quiero reservar para el ${fechaStr} a las ${time}.`;
                                else if (selectedLanguage === 'pt') confirmMsg = `Olá, quero agendar para ${fechaStr} às ${time}.`;
                                else confirmMsg = `Hello, I want a reservation for ${fechaStr} at ${time}.`;

                                handleSend(confirmMsg);
                                setShowCalendar(false);
                              }}
                              className="py-2 px-3 rounded-lg bg-white/5 border border-purple-500/30 text-white hover:bg-purple-500 hover:text-white transition text-sm font-medium"
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Enhanced Input Area */}
                <div className="border-t border-cyan-500/20 p-4 bg-black/40 backdrop-blur-xl">
                  <div className="flex gap-2 mb-3">
                    {/* Voice Record Button */}
                    <button
                      onClick={toggleRecording}
                      className={`p-3 rounded-xl transition shadow-lg ${
                        isRecording 
                          ? 'bg-red-500 text-white animate-pulse shadow-red-500/50 scale-110' 
                          : 'bg-white/10 hover:bg-white/15 text-cyan-400 border border-cyan-500/30 hover:border-cyan-500/50 shadow-cyan-500/20'
                      }`}
                      title={isRecording ? t.recording : 'Voice input'}
                    >
                      <Mic className="w-5 h-5" />
                    </button>

                    {/* Text-to-Speech Toggle */}
                    <button
                      onClick={() => setVoiceEnabled(!voiceEnabled)}
                      className={`p-3 rounded-xl transition shadow-lg ${
                        voiceEnabled
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-cyan-500/50'
                          : 'bg-white/10 hover:bg-white/15 text-cyan-400 border border-cyan-500/30 hover:border-cyan-500/50'
                      }`}
                      title={voiceEnabled ? t.voiceEnabled : t.voiceDisabled}
                    >
                      {voiceEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                    </button>

                    {/* Image Upload Button */}
                    <label className="p-3 rounded-xl bg-white/10 hover:bg-white/15 text-cyan-400 border border-cyan-500/30 hover:border-cyan-500/50 transition cursor-pointer shadow-lg shadow-cyan-500/20">
                      <ImagePlus className="w-5 h-5" />
                      <input 
                        ref={fileInputRef}
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>

                    <div className="flex-1"></div>

                    {isRecording && (
                      <div className="flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-xl">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                        <span className="text-sm text-red-300 font-medium">{t.recording}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder={t.messagePlaceholder}
                      className="flex-1 bg-white/5 border border-cyan-500/30 rounded-xl px-5 py-3.5 text-white placeholder-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition"
                    />
                    <button
                      onClick={() => handleSend()}
                      disabled={!input.trim()}
                      className="bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 hover:from-cyan-600 hover:via-blue-600 hover:to-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white px-8 py-3.5 rounded-xl font-semibold transition shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 disabled:hover:scale-100 border border-cyan-400/30"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* Configuration View */}
        {activeTab === 'config' && (
          <div className="bg-black/30 backdrop-blur-2xl rounded-3xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 p-8">
            {isConfigured && (
              <div className="mb-4">
                <button
                  onClick={resetToWelcome}
                  className="flex items-center gap-2 text-cyan-400/70 hover:text-cyan-400 text-sm transition"
                >
                  <Home className="w-4 h-4" />
                  {t.backToWelcome}
                </button>
              </div>
            )}
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-xl opacity-75"></div>
                  <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-xl shadow-lg">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-1">
                    {t.businessConfig}
                  </h2>
                  <p className="text-cyan-300/70">Personalize your AI assistant</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-cyan-300 mb-2">
                      {t.businessName} *
                    </label>
                    <input
                      type="text"
                      value={businessInfo.name}
                      onChange={(e) => setBusinessInfo({...businessInfo, name: e.target.value})}
                      placeholder={t.businessNamePlaceholder}
                      className="w-full bg-white/5 border border-cyan-500/30 rounded-xl px-4 py-3 text-white placeholder-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 backdrop-blur-sm transition"
                    />
                  </div>

                 {/* SELECTOR DE TIPO DE NEGOCIO MEJORADO (TRADUCIDO) */}
                  <div>
                    <label className="block text-sm font-semibold text-cyan-300 mb-2">
                      {t.businessType} *
                    </label>
                    <div className="relative">
                      <select
                        value={businessTypes.some(t => t.value === businessInfo.type) ? businessInfo.type : 'custom'}
                        onChange={(e) => {
                          const val = e.target.value;
                          const selectedType = businessTypes.find(t => t.value === val);
                          
                          if (val === 'custom') {
                            setBusinessInfo({...businessInfo, type: ''}); 
                          } else {
                            setBusinessInfo({
                              ...businessInfo, 
                              type: val, 
                              logo: selectedType ? selectedType.emoji : '🏢'
                            });
                          }
                        }}
                        className="w-full bg-white/5 border border-cyan-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 backdrop-blur-sm transition appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="bg-slate-900">{t.selectIndustry}</option>
                        {businessTypes.map(type => (
                          <option key={type.id} value={type.value} className="bg-slate-900">
                            {type.label}
                          </option>
                        ))}
                        <option value="custom" className="bg-slate-900">{t.otherIndustry}</option>
                      </select>
                      
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-cyan-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                    
                    {(!businessTypes.some(t => t.value === businessInfo.type) && businessInfo.type !== '') || businessInfo.type === '' ? (
                      <input
                        type="text"
                        value={businessInfo.type}
                        onChange={(e) => setBusinessInfo({...businessInfo, type: e.target.value})}
                        placeholder={t.typeManualPlaceholder}
                        className="mt-3 w-full bg-white/5 border border-cyan-500/30 rounded-xl px-4 py-3 text-white placeholder-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 backdrop-blur-sm transition animate-fade-in"
                      />
                    ) : null}
                  </div>
                </div>

                {/* LOGO INTELIGENTE (TRADUCIDO) */}
                <div>
                  <label className="block text-sm font-semibold text-cyan-300 mb-2">
                    {t.businessLogo}
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-slate-800 border border-cyan-500/30 flex items-center justify-center overflow-hidden relative group">
                      {businessInfo.logo && (businessInfo.logo.includes('data:image') || businessInfo.logo.includes('http')) ? (
                        <img src={businessInfo.logo} alt="Logo" className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-3xl select-none animate-bounce-slow">
                          {businessInfo.logo || '🏢'}
                        </span>
                      )}

                      {businessInfo.logo && (
                         <button 
                           onClick={() => setBusinessInfo({...businessInfo, logo: ''})}
                           className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition text-xs text-red-400 font-bold"
                         >{t.remove}</button>
                      )}
                    </div>

                    <label className="cursor-pointer bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg transition text-sm font-bold flex items-center gap-2 shadow-lg shadow-cyan-500/20">
                      <ImagePlus className="w-4 h-4" />
                      <span>{t.uploadLogo}</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, (img) => setBusinessInfo({...businessInfo, logo: img}))} 
                      />
                    </label>
                    
                    <p className="text-xs text-slate-500 max-w-[150px]">
                      {t.ifNoPhoto}
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cyan-300 mb-2">
                    {t.servicesDescription} *
                  </label>
                  <textarea
                    value={businessInfo.description}
                    onChange={(e) => setBusinessInfo({...businessInfo, description: e.target.value})}
                    placeholder={t.servicesPlaceholder}
                    rows="4"
                    className="w-full bg-white/5 border border-cyan-500/30 rounded-xl px-4 py-3 text-white placeholder-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 backdrop-blur-sm transition resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-cyan-300 mb-2">
                      {t.businessHours}
                    </label>
                    <input
                      type="text"
                      value={businessInfo.hours}
                      onChange={(e) => setBusinessInfo({...businessInfo, hours: e.target.value})}
                      placeholder={t.hoursPlaceholder}
                      className="w-full bg-white/5 border border-cyan-500/30 rounded-xl px-4 py-3 text-white placeholder-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 backdrop-blur-sm transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-cyan-300 mb-2">
                      {t.phoneNumber}
                    </label>
                    <input
                      type="text"
                      value={businessInfo.phone}
                      onChange={(e) => setBusinessInfo({...businessInfo, phone: e.target.value})}
                      placeholder={t.phonePlaceholder}
                      className="w-full bg-white/5 border border-cyan-500/30 rounded-xl px-4 py-3 text-white placeholder-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 backdrop-blur-sm transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-cyan-300 mb-2">
                      {t.address}
                    </label>
                    <input
                      type="text"
                      value={businessInfo.address}
                      onChange={(e) => setBusinessInfo({...businessInfo, address: e.target.value})}
                      placeholder={t.addressPlaceholder}
                      className="w-full bg-white/5 border border-cyan-500/30 rounded-xl px-4 py-3 text-white placeholder-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 backdrop-blur-sm transition"
                    />
                  </div>
                </div>

                {/* Brand Colors */}
                <div>
                  <label className="block text-sm font-semibold text-cyan-300 mb-3 flex items-center gap-2">
                    <Palette className="w-4 h-4" />
                    {t.brandColors}
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs text-cyan-400/70 mb-2">{t.primary}</label>
                      <input
                        type="color"
                        value={businessInfo.primaryColor}
                        onChange={(e) => setBusinessInfo({...businessInfo, primaryColor: e.target.value})}
                        className="w-full h-12 rounded-xl border-2 border-cyan-500/30 cursor-pointer bg-white/5"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-cyan-400/70 mb-2">{t.secondary}</label>
                      <input
                        type="color"
                        value={businessInfo.secondaryColor}
                        onChange={(e) => setBusinessInfo({...businessInfo, secondaryColor: e.target.value})}
                        className="w-full h-12 rounded-xl border-2 border-cyan-500/30 cursor-pointer bg-white/5"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-cyan-400/70 mb-2">{t.accent}</label>
                      <input
                        type="color"
                        value={businessInfo.accentColor}
                        onChange={(e) => setBusinessInfo({...businessInfo, accentColor: e.target.value})}
                        className="w-full h-12 rounded-xl border-2 border-cyan-500/30 cursor-pointer bg-white/5"
                      />
                    </div>
                  </div>
                </div>

                {/* Products/Services Section */}
                <div className="border-t border-cyan-500/20 pt-6 mt-6">
                  <h3 className="text-xl font-bold text-white mb-4">{t.productsServices}</h3>
                  
                  {/* FORMULARIO DE PRODUCTO MEJORADO (TRADUCIDO) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <input
                        type="text"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                        placeholder={t.productNamePlaceholder} 
                        className="w-full bg-white/5 border border-cyan-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-cyan-400/50"
                      />
                      <input
                        type="number"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                        placeholder={t.productPricePlaceholder}
                        className="w-full bg-white/5 border border-cyan-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-cyan-400/50"
                      />
                      
                      {/* Descripción Traducida */}
                      <textarea
                        value={newProduct.description || ''}
                        onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                        placeholder={t.productDescriptionPlaceholder}
                        className="col-span-2 w-full bg-white/5 border border-cyan-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 h-20 resize-none placeholder-cyan-400/50"
                      />

                      {/* Subir Imagen Local Traducido */}
                      <div className="col-span-2 flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-cyan-500/30">
                        <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center overflow-hidden border border-white/10">
                          {newProduct.image ? (
                            <img src={newProduct.image} alt="Preview" className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-xl">📸</span>
                          )}
                        </div>
                        <label className="cursor-pointer text-cyan-400 hover:text-cyan-300 font-bold text-sm flex items-center gap-2">
                          <span>{t.uploadPhoto}</span>
                          <input 
                            type="file" 
                            accept="image/*" 
                            className="hidden"
                            onChange={(e) => handleFileUpload(e, (img) => setNewProduct({...newProduct, image: img}))} 
                          />
                        </label>
                      </div>
                    </div>
                  
                  <button
                    onClick={addProduct}
                    className="mb-4 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 text-cyan-300 px-4 py-2 rounded-lg transition text-sm font-medium"
                  >
                    {t.addProduct}
                  </button>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {products.map((product, idx) => (
                      <div key={idx} className="bg-white/5 border border-cyan-500/20 rounded-xl p-3 flex items-center gap-3">
                        <span className="text-2xl">{product.image}</span>
                        <div className="flex-1">
                          <p className="text-white font-medium">{product.name}</p>
                          <p className="text-cyan-400 text-sm">${product.price} - {product.category}</p>
                        </div>
                        <button
                          onClick={() => removeProduct(idx)}
                          className="text-red-400 hover:text-red-300 text-sm"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <button
                    onClick={saveBusinessInfo}
                    disabled={!businessInfo.name || !businessInfo.type || !businessInfo.description}
                    className="flex-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 hover:from-cyan-600 hover:via-blue-600 hover:to-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white px-6 py-4 rounded-xl font-bold text-lg transition shadow-xl shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 disabled:hover:scale-100 border border-cyan-400/30"
                  >
                    <Check className="w-5 h-5 inline mr-2" />
                    {t.save}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Analytics View */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            {isConfigured && (
              <div className="bg-black/30 backdrop-blur-2xl rounded-2xl border border-cyan-500/20 shadow-xl shadow-cyan-500/10 p-4">
                <button
                  onClick={resetToWelcome}
                  className="flex items-center gap-2 text-cyan-400/70 hover:text-cyan-400 text-sm transition"
                >
                  <Home className="w-4 h-4" />
                  {t.backToWelcome}
                </button>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: MessageSquare, label: t.totalChats, value: stats.totalChats, color: 'cyan', trend: '+12%' },
                { icon: Zap, label: t.today, value: stats.todayChats, color: 'blue', trend: '+8%' },
                { icon: Clock, label: t.avgResponse, value: stats.avgResponseTime, color: 'purple', trend: '-5%' },
                { icon: Users, label: t.satisfaction, value: `${stats.satisfaction}%`, color: 'green', trend: '+3%' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-black/30 backdrop-blur-2xl rounded-2xl border border-cyan-500/20 shadow-xl shadow-cyan-500/10 p-6 hover:scale-105 transition">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`bg-${stat.color}-500/20 p-3 rounded-xl border border-${stat.color}-500/30`}>
                      <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
                    </div>
                    <span className="text-sm text-green-400 font-semibold">{stat.trend}</span>
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-cyan-300/70 text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-black/30 backdrop-blur-2xl rounded-2xl border border-cyan-500/20 shadow-xl shadow-cyan-500/10 p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  {t.hourlyActivity}
                </h3>
                <div className="flex items-end justify-between h-48 gap-2">
                  {analyticsData.hourlyData.map((value, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                      <div 
                        className="w-full bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t-lg transition-all hover:from-cyan-400 hover:to-blue-400 cursor-pointer shadow-lg shadow-cyan-500/30"
                        style={{ height: `${(value / 40) * 100}%` }}
                      ></div>
                      <span className="text-xs text-cyan-400/50">{idx}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur-2xl rounded-2xl border border-cyan-500/20 shadow-xl shadow-cyan-500/10 p-6">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-cyan-400" />
                  {t.topQuestions}
                </h3>
                <div className="space-y-4">
                  {((stats.topQuestions && stats.topQuestions[selectedLanguage]) || 
                    (selectedLanguage === 'en' ? ['Hours', 'Location', 'Prices'] : 
                     selectedLanguage === 'pt' ? ['Horários', 'Localização', 'Preços'] : 
                     ['Horarios', 'Ubicación', 'Precios'])).map((q, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-cyan-500/30">
                        {idx + 1}
                      </div>
                      <div className="flex-1 bg-white/5 border border-cyan-500/20 rounded-xl px-4 py-3">
                        <p className="text-white font-medium">{q}</p>
                      </div>
                      <div className="text-cyan-400 font-semibold">{35 - (idx * 8)}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-2xl rounded-2xl border border-cyan-500/20 shadow-xl shadow-cyan-500/10 p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-cyan-400" />
                {t.performanceMetrics}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {analyticsData.conversionRate}%
                  </div>
                  <p className="text-cyan-300/70 font-medium">{t.conversionRate}</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {analyticsData.avgSessionTime}
                  </div>
                  <p className="text-cyan-300/70 font-medium">{t.avgSessionTime}</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {stats.peakHours}
                  </div>
                  <p className="text-cyan-300/70 font-medium">{t.peakHours}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Integrations View */}
        {activeTab === 'integrations' && (
          <div className="space-y-6">
            {isConfigured && (
              <div className="bg-black/30 backdrop-blur-2xl rounded-2xl border border-cyan-500/20 shadow-xl shadow-cyan-500/10 p-4">
                <button
                  onClick={resetToWelcome}
                  className="flex items-center gap-2 text-cyan-400/70 hover:text-cyan-400 text-sm transition"
                >
                  <Home className="w-4 h-4" />
                  {t.backToWelcome}
                </button>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Widget Code */}
              <div className="bg-black/30 backdrop-blur-2xl rounded-2xl border border-cyan-500/20 shadow-xl shadow-cyan-500/10 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-cyan-500/20 p-3 rounded-xl border border-cyan-500/30">
                    <Code className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{t.websiteWidget}</h3>
                    <p className="text-cyan-300/70 text-sm">{t.embedWebsite}</p>
                  </div>
                </div>
                <button
                  onClick={generateWidgetCode}
                  className="w-full bg-white/5 hover:bg-white/10 border border-cyan-500/30 hover:border-cyan-500/50 text-cyan-300 px-4 py-2.5 rounded-lg font-medium transition flex items-center justify-center gap-2 text-sm"
                >
                  <Copy className="w-4 h-4" />
                  {t.copyWidgetCode}
                </button>
              </div>

              {/* WhatsApp */}
              <div className="bg-black/30 backdrop-blur-2xl rounded-2xl border border-cyan-500/20 shadow-xl shadow-cyan-500/10 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-500/20 p-3 rounded-xl border border-green-500/30">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{t.whatsappIntegration}</h3>
                    <p className="text-cyan-300/70 text-sm">{t.connectTwilio}</p>
                  </div>
                </div>
                <button
                  onClick={generateWhatsAppCode}
                  className="w-full bg-white/5 hover:bg-white/10 border border-green-500/30 hover:border-green-500/50 text-green-300 px-4 py-2.5 rounded-lg font-medium transition flex items-center justify-center gap-2 text-sm"
                >
                  <Copy className="w-4 h-4" />
                  {t.copyWhatsappCode}
                </button>
              </div>

              {/* Payment Integration */}
              <div className="bg-black/30 backdrop-blur-2xl rounded-2xl border border-cyan-500/20 shadow-xl shadow-cyan-500/10 p-6 md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-500/20 p-3 rounded-xl border border-purple-500/30">
                    <CreditCard className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{t.paymentProcessing}</h3>
                    <p className="text-cyan-300/70 text-sm">{t.paymentMethodsAvailable}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
  {[
    { key: 'pixEnabled', label: t.payPix, icon: '💠' },
    { key: 'creditCardEnabled', label: t.payCredit, icon: '💳' },
    { key: 'debitCardEnabled', label: t.payDebit, icon: '💳' },
    { key: 'cashEnabled', label: t.payCash, icon: '💵' },

    // ✅ Stripe (emoji)
    { key: 'stripeEnabled', label: t.payStripe, icon: '🟣' },

    // ✅ MercadoPago (emoji)
    { key: 'mercadoPagoEnabled', label: t.payMP, icon: '🟦' },

    // ✅ PayPal (emoji)
    { key: 'paypalEnabled', label: t.payPaypal, icon: '🅿️' },

    // ✅ Crypto USDT (nuevo)
    { key: 'cryptoUsdtEnabled', label: t.payUSDT, icon: '🟩' },
  ].map((payment) => (
                <button
                  key={payment.key}
                  onClick={() => setPaymentInfo({...paymentInfo, [payment.key]: !paymentInfo[payment.key]})}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg transition text-sm font-medium border ${
                    paymentInfo[payment.key]
                      ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/50 text-green-300'
                      : 'bg-white/5 border-cyan-500/20 text-cyan-400/60 hover:bg-white/10 hover:border-cyan-500/30'
                  }`}
                >
                  <span className="text-lg">{payment.icon}</span>
                  <span>{payment.label}</span>
                  {paymentInfo[payment.key] && <Check className="w-4 h-4 ml-auto text-green-400" />}
                </button>
              ))}
            </div>
              </div>

              {/* Multi-language */}
              <div className="bg-black/30 backdrop-blur-2xl rounded-2xl border border-cyan-500/20 shadow-xl shadow-cyan-500/10 p-6 md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-500/20 p-3 rounded-xl border border-blue-500/30">
                    <Globe className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{t.multiLanguageSupport}</h3>
                    <p className="text-cyan-300/70 text-sm">{t.selectLanguages}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  {[
                    { code: 'es', flag: '🇪🇸', name: 'Español' },
                    { code: 'en', flag: '🇬🇧', name: 'English' },
                    { code: 'pt', flag: '🇧🇷', name: 'Português' }
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setSelectedLanguage(lang.code)}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition font-semibold border ${
                        selectedLanguage === lang.code
                          ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300'
                          : 'bg-white/5 border-cyan-500/20 text-cyan-400/60 hover:bg-white/10 hover:border-cyan-500/30'
                      }`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span>{lang.name}</span>
                      {selectedLanguage === lang.code && <Check className="w-4 h-4" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Export Section */}
            <div className="bg-black/30 backdrop-blur-2xl rounded-2xl border border-cyan-500/20 shadow-xl shadow-cyan-500/10 p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">🚀 {t.readyToDeploy}</h3>
                <p className="text-cyan-300/70">{t.exportAssistant}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button 
                  onClick={() => copyToClipboard('Full source code exported!')}
                  className="bg-white/5 hover:bg-white/10 border border-cyan-500/20 hover:border-cyan-500/40 text-cyan-300 px-4 py-2.5 rounded-lg font-medium transition flex items-center justify-center gap-2 text-sm"
                >
                  <Download className="w-4 h-4" />
                  {t.exportCode}
                </button>
                <button 
                  onClick={() => copyToClipboard('Configuration JSON exported!')}
                  className="bg-white/5 hover:bg-white/10 border border-cyan-500/20 hover:border-cyan-500/40 text-cyan-300 px-4 py-2.5 rounded-lg font-medium transition flex items-center justify-center gap-2 text-sm"
                >
                  <Settings className="w-4 h-4" />
                  {t.exportConfig}
                </button>
                <button 
                  onClick={() => copyToClipboard('Complete documentation exported!')}
                  className="bg-white/5 hover:bg-white/10 border border-cyan-500/20 hover:border-cyan-500/40 text-cyan-300 px-4 py-2.5 rounded-lg font-medium transition flex items-center justify-center gap-2 text-sm"
                >
                  <Code className="w-4 h-4" />
                  {t.exportDocs}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Copy Notification */}
      {showCopyNotif && (
        <div className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-xl shadow-2xl shadow-green-500/50 flex items-center gap-3 animate-bounce border border-green-400/30 z-50">
          <Check className="w-6 h-6" />
          <span className="font-semibold">{notifMessage}</span>
        </div>
      )}

      {/* Footer */}
      <footer className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-8">
        <div className="bg-black/20 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-300 font-medium">
              ✅ {t.voiceRecognition}
            </span>
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-300 font-medium">
              ✅ {t.imageAnalysis}
            </span>
            <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm text-purple-300 font-medium">
              ✅ {t.multiLanguage}
            </span>
            <span className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-sm text-green-300 font-medium">
              ✅ {t.whatsappReady}
            </span>
            <span className="px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full text-sm text-pink-300 font-medium">
              ✅ {t.paymentIntegration}
            </span>
          </div>
          <p className="text-cyan-300/70 text-sm mb-2">
            💡 <strong className="text-cyan-300">{t.proTip}:</strong> {t.proTipText}
          </p>
          <div className="border-t border-cyan-500/20 pt-2 mt-2">
            <button
              onClick={loadExampleConfig}
              className="text-cyan-400/60 hover:text-cyan-400 text-xs underline transition"
            >
              {t.loadExample}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}