<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>FinancePro Design System - Desktop</title>
<!-- Google Fonts: Plus Jakarta Sans & Inter -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;family=Plus+Jakarta+Sans:wght@600;700;800&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS CDN -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: {
              DEFAULT: '#0f756d', // Theme custom color
              dark: '#0d635c',
              light: '#ccfbf1',
            },
            slate: {
              50: '#f8fafc',
              100: '#f1f5f9',
              200: '#e2e8f0',
              800: '#1e293b',
              900: '#0f172a',
            }
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            heading: ['Plus Jakarta Sans', 'sans-serif'],
          },
          borderRadius: {
            'custom': '12px', // Theme roundness: ROUND_TWELVE
          }
        }
      }
    }
  </script>
<style data-purpose="typography">
    h1, h2, h3, h4 { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700; }
    body { font-family: 'Inter', sans-serif; }
  </style>
<style data-purpose="layout-grid">
    .spec-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
    }
  </style>
</head>
<body class="bg-slate-50 text-slate-900 antialiased">
<!-- BEGIN: Sidebar Navigation Layout Mockup -->
<div class="flex min-h-screen">
<!-- Sidebar -->
<aside class="w-64 bg-slate-900 text-white p-6 hidden lg:flex flex-col fixed h-full" data-purpose="sidebar-nav">
<div class="mb-10 flex items-center gap-3">
<div class="w-8 h-8 bg-primary rounded-custom flex items-center justify-center font-bold text-white">F</div>
<span class="text-xl font-heading tracking-tight">FinancePro</span>
</div>
<nav class="space-y-4 flex-1">
<div class="text-xs font-semibold text-slate-400 uppercase tracking-widest px-2">System</div>
<a class="block px-2 py-2 text-primary-light font-medium border-l-2 border-primary" href="#">Identity</a>
<a class="block px-2 py-2 text-slate-300 hover:text-white transition" href="#">Foundation</a>
<a class="block px-2 py-2 text-slate-300 hover:text-white transition" href="#">Layouts</a>
</nav>
<div class="mt-auto pt-6 border-t border-slate-800 text-xs text-slate-400">
        v1.0.0 Desktop Docs
      </div>
</aside>
<!-- Main Content Area -->
<main class="lg:ml-64 flex-1 p-8 md:p-12 max-w-7xl mx-auto">
<!-- BEGIN: Hero Section -->
<header class="mb-16" data-purpose="page-header">
<div class="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">Design Language</div>
<h1 class="text-5xl lg:text-6xl text-slate-900 mb-6 tracking-tight">Forging trust through precise design.</h1>
<p class="text-xl text-slate-600 max-w-2xl leading-relaxed">The FinancePro design system is a comprehensive guide to building secure, transparent, and high-performance financial interfaces for the modern web.</p>
</header>
<!-- END: Hero Section -->
<!-- BEGIN: Brand Identity -->
<section class="mb-20" id="identity">
<div class="border-b border-slate-200 pb-4 mb-8">
<h2 class="text-3xl">1. Brand Identity</h2>
</div>
<div class="grid md:grid-cols-2 gap-12">
<div data-purpose="mission-statement">
<h3 class="text-xl mb-4 text-primary">The Mission</h3>
<p class="text-slate-600 leading-relaxed italic border-l-4 border-primary/20 pl-6 py-2">
              "To democratize institutional-grade financial security by providing a 'Zero-Trust' interface that is as intuitive as it is impenetrable."
            </p>
</div>
<div data-purpose="philosophy">
<h3 class="text-xl mb-4 text-primary">Zero-Trust Philosophy</h3>
<p class="text-slate-600 leading-relaxed">
              In design, Zero-Trust means never assuming the user is safe. We use explicit confirmations, clear audit trails, and high-contrast security indicators to ensure users are always in control of their assets.
            </p>
</div>
</div>
</section>
<!-- END: Brand Identity -->
<!-- BEGIN: Visual Foundation -->
<section class="mb-20" id="foundation">
<div class="border-b border-slate-200 pb-4 mb-8">
<h2 class="text-3xl">2. Visual Foundation</h2>
</div>
<!-- Color Palette -->
<div class="mb-12">
<h3 class="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Color Palette</h3>
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
<div class="space-y-2">
<div class="h-24 bg-[#0f756d] rounded-custom shadow-sm flex items-end p-3 text-white text-xs font-mono">#0F756D</div>
<span class="block text-sm font-medium">Primary Teal</span>
</div>
<div class="space-y-2">
<div class="h-24 bg-slate-900 rounded-custom shadow-sm flex items-end p-3 text-white text-xs font-mono">#0F172A</div>
<span class="block text-sm font-medium">Deep Navy</span>
</div>
<div class="space-y-2">
<div class="h-24 bg-slate-100 rounded-custom border border-slate-200 shadow-sm flex items-end p-3 text-slate-600 text-xs font-mono">#F1F5F9</div>
<span class="block text-sm font-medium">Soft Slate</span>
</div>
<div class="space-y-2">
<div class="h-24 bg-red-500 rounded-custom shadow-sm flex items-end p-3 text-white text-xs font-mono">#EF4444</div>
<span class="block text-sm font-medium">Alert Red</span>
</div>
</div>
</div>
<!-- Typography -->
<div class="grid md:grid-cols-2 gap-12">
<div class="p-6 bg-white rounded-custom border border-slate-200 shadow-sm">
<h3 class="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Headings</h3>
<div class="space-y-4">
<p class="text-4xl font-heading">Plus Jakarta Sans</p>
<p class="text-slate-500 text-sm leading-relaxed">Used for headlines, page titles, and hero sections to convey confidence and modern authority.</p>
</div>
</div>
<div class="p-6 bg-white rounded-custom border border-slate-200 shadow-sm">
<h3 class="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Body &amp; UI</h3>
<div class="space-y-4">
<p class="text-4xl font-sans">Inter</p>
<p class="text-slate-500 text-sm leading-relaxed">Used for data tables, form labels, and general body text. Chosen for high legibility in dense financial data.</p>
</div>
</div>
</div>
</section>
<!-- END: Visual Foundation -->
<!-- BEGIN: Layout Guidelines -->
<section class="mb-20" id="layout">
<div class="border-b border-slate-200 pb-4 mb-8">
<h2 class="text-3xl">3. Desktop Layout Specs</h2>
</div>
<div class="spec-grid">
<!-- Sidebar Rule -->
<div class="bg-white p-6 rounded-custom border border-slate-200">
<h4 class="text-primary mb-3">Navigation Sidebar</h4>
<ul class="text-sm text-slate-600 space-y-2 list-disc pl-4">
<li>Fixed width: 256px (w-64)</li>
<li>Background: Slate-900</li>
<li>Iconography: 20px Solid style</li>
</ul>
</div>
<!-- Grid Rule -->
<div class="bg-white p-6 rounded-custom border border-slate-200">
<h4 class="text-primary mb-3">Grid System</h4>
<ul class="text-sm text-slate-600 space-y-2 list-disc pl-4">
<li>12-column standard grid</li>
<li>32px gutter (gap-8)</li>
<li>Max-width: 1280px container</li>
</ul>
</div>
<!-- Spacing Rule -->
<div class="bg-white p-6 rounded-custom border border-slate-200">
<h4 class="text-primary mb-3">Spacing &amp; Scale</h4>
<ul class="text-sm text-slate-600 space-y-2 list-disc pl-4">
<li>Base unit: 4px</li>
<li>Card padding: 24px (p-6)</li>
<li>Section margin: 80px (mb-20)</li>
</ul>
</div>
</div>
</section>
<!-- END: Layout Guidelines -->
<!-- BEGIN: Voice & Tone -->
<section class="mb-10" id="voice">
<div class="p-8 bg-primary rounded-custom text-white">
<h2 class="text-3xl mb-6">4. Voice &amp; Tone</h2>
<div class="grid md:grid-cols-3 gap-8">
<div data-purpose="tone-card">
<div class="text-primary-light font-bold mb-2">Professional</div>
<p class="text-sm opacity-90">Avoid slang. Use precise terminology (e.g., 'Liquidate' instead of 'Sell everything').</p>
</div>
<div data-purpose="tone-card">
<div class="text-primary-light font-bold mb-2">Secure</div>
<p class="text-sm opacity-90">Reassure users with status updates. Use active voice for security actions.</p>
</div>
<div data-purpose="tone-card">
<div class="text-primary-light font-bold mb-2">Helpful</div>
<p class="text-sm opacity-90">Contextual tooltips for complex financial metrics. No user left guessing.</p>
</div>
</div>
</div>
</section>
<!-- END: Voice & Tone -->
<!-- BEGIN: Footer -->
<footer class="mt-20 py-8 border-t border-slate-200 flex justify-between items-center text-slate-400 text-sm">
<p>© 2023 FinancePro Brand Lab. Confidential Document.</p>
<div class="flex gap-6">
<a class="hover:text-primary transition" href="#">System Status</a>
<a class="hover:text-primary transition" href="#">Assets API</a>
</div>
</footer>
<!-- END: Footer -->
</main>
</div>
<!-- END: Sidebar Navigation Layout Mockup -->
</body></html>
