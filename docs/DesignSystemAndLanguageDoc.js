<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>FinancePro UI Component Assets - Sticker Sheet</title>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: {
              DEFAULT: '#0f756d',
              light: '#e7f1f0',
              dark: '#0a4f4a',
            },
            slate: {
              50: '#f8fafc',
              100: '#f1f5f9',
              200: '#e2e8f0',
              300: '#cbd5e1',
              400: '#94a3b8',
              500: '#64748b',
              600: '#475569',
              700: '#334155',
              800: '#1e293b',
              900: '#0f172a',
            }
          },
          borderRadius: {
            'twelve': '12px',
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          }
        }
      }
    }
  </script>
<style data-purpose="custom-utilities">
    body {
      background-color: #f1f5f9;
      font-family: 'Inter', sans-serif;
    }
    .component-label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #64748b;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }
    .asset-container {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 1.5rem;
    }
  </style>
</head>
<body class="p-8">
<!-- BEGIN: PageHeader -->
<header class="mb-12">
<h1 class="text-3xl font-bold text-slate-900">FinancePro Design System</h1>
<p class="text-slate-500 mt-2">Desktop Component Asset Sheet &amp; Style Guide (Theme 3: Teal &amp; Slate)</p>
</header>
<!-- END: PageHeader -->
<main class="grid grid-cols-1 xl:grid-cols-2 gap-8">
<!-- BEGIN: NavigationAssets -->
<section class="asset-container" data-purpose="navigation-assets">
<h2 class="text-xl font-bold text-slate-800 mb-6">1. Navigation Components</h2>
<div class="space-y-8">
<!-- Sidebar Asset -->
<div data-purpose="sidebar-preview">
<p class="component-label">Desktop Sidebar</p>
<div class="w-64 h-96 bg-slate-900 rounded-twelve overflow-hidden flex flex-col">
<div class="p-6">
<div class="h-8 w-32 bg-primary rounded"></div>
</div>
<nav class="flex-1 px-4 space-y-2">
<div class="bg-primary text-white flex items-center px-4 py-3 rounded-lg text-sm font-medium">
<span class="w-5 h-5 mr-3 bg-white/20 rounded"></span> Dashboard
              </div>
<div class="text-slate-400 hover:bg-slate-800 flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors">
<span class="w-5 h-5 mr-3 bg-slate-700 rounded"></span> Transactions
              </div>
<div class="text-slate-400 hover:bg-slate-800 flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors">
<span class="w-5 h-5 mr-3 bg-slate-700 rounded"></span> Reports
              </div>
</nav>
</div>
</div>
<!-- Breadcrumbs & Header -->
<div data-purpose="breadcrumbs-header">
<p class="component-label">Breadcrumbs &amp; Top Header</p>
<div class="border border-slate-200 rounded-twelve p-4 bg-white">
<nav class="flex text-sm text-slate-500 mb-4">
<span>Home</span>
<span class="mx-2">/</span>
<span>Banking</span>
<span class="mx-2">/</span>
<span class="text-primary font-medium">Checking Account</span>
</nav>
<div class="flex justify-between items-center">
<h3 class="text-2xl font-bold text-slate-900">Checking Account</h3>
<div class="flex items-center space-x-4">
<div class="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
<span class="text-xs font-bold">JD</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- END: NavigationAssets -->
<!-- BEGIN: ButtonFormAssets -->
<section class="asset-container" data-purpose="form-assets">
<h2 class="text-xl font-bold text-slate-800 mb-6">2. Buttons &amp; Form Elements</h2>
<div class="grid grid-cols-2 gap-8">
<!-- Buttons -->
<div class="space-y-4">
<p class="component-label">Button States</p>
<button class="w-full bg-primary text-white py-3 px-6 rounded-twelve font-semibold hover:bg-primary-dark transition-colors">Primary (Default)</button>
<button class="w-full bg-primary/80 text-white py-3 px-6 rounded-twelve font-semibold cursor-not-allowed">Primary (Disabled)</button>
<button class="w-full border-2 border-primary text-primary py-3 px-6 rounded-twelve font-semibold hover:bg-primary-light transition-colors">Secondary Action</button>
</div>
<!-- Inputs -->
<div class="space-y-4">
<p class="component-label">Input Styles</p>
<div class="space-y-3">
<div>
<label class="block text-xs font-bold text-slate-500 mb-1">LABEL TEXT</label>
<input class="w-full border-slate-300 rounded-twelve focus:border-primary focus:ring-primary shadow-sm" placeholder="Enter text..." type="text"/>
</div>
<div>
<label class="block text-xs font-bold text-slate-500 mb-1">SELECT CATEGORY</label>
<select class="w-full border-slate-300 rounded-twelve focus:border-primary focus:ring-primary shadow-sm">
<option>Entertainment</option>
<option>Utilities</option>
<option>Groceries</option>
</select>
</div>
</div>
</div>
</div>
</section>
<!-- END: ButtonFormAssets -->
<!-- BEGIN: DataDisplayAssets -->
<section class="asset-container xl:col-span-2" data-purpose="data-display-assets">
<h2 class="text-xl font-bold text-slate-800 mb-6">3. Data Display &amp; Tables</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<!-- Stat Card 1 -->
<div class="p-6 border border-slate-200 rounded-twelve shadow-sm">
<p class="text-sm font-medium text-slate-500">Total Balance</p>
<h4 class="text-3xl font-bold text-slate-900 mt-1">$45,285.00</h4>
<div class="mt-4 flex items-center text-emerald-600 text-sm font-semibold">
<span class="mr-1">↑</span> 2.4% <span class="text-slate-400 font-normal ml-2">from last month</span>
</div>
</div>
<!-- Stat Card 2 -->
<div class="p-6 border border-slate-200 rounded-twelve shadow-sm">
<p class="text-sm font-medium text-slate-500">Monthly Expenses</p>
<h4 class="text-3xl font-bold text-slate-900 mt-1">$12,410.50</h4>
<div class="mt-4 flex items-center text-rose-600 text-sm font-semibold">
<span class="mr-1">↓</span> 0.8% <span class="text-slate-400 font-normal ml-2">from last month</span>
</div>
</div>
<!-- Stat Card 3 -->
<div class="p-6 border border-slate-200 rounded-twelve shadow-sm bg-primary text-white">
<p class="text-sm font-medium opacity-80">Savings Goal</p>
<h4 class="text-3xl font-bold mt-1">$100,000.00</h4>
<div class="mt-4 bg-primary-dark/30 h-2 rounded-full overflow-hidden">
<div class="bg-white h-full w-[65%]"></div>
</div>
<p class="text-xs mt-2 opacity-80">65% of target reached</p>
</div>
</div>
<!-- Transaction Table -->
<div class="overflow-hidden border border-slate-200 rounded-twelve">
<p class="p-4 bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">Transaction Ledger</p>
<table class="min-w-full divide-y divide-slate-200">
<thead class="bg-slate-50">
<tr>
<th class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
<th class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Entity</th>
<th class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Category</th>
<th class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Amount</th>
<th class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
</tr>
</thead>
<tbody class="bg-white divide-y divide-slate-200">
<tr>
<td class="px-6 py-4 whitespace-nowrap text-sm text-slate-900">Oct 24, 2023</td>
<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Apple Store</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500">Technology</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-rose-600 font-semibold">-$1,299.00</td>
<td class="px-6 py-4 whitespace-nowrap"><span class="px-3 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-800">Completed</span></td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-nowrap text-sm text-slate-900">Oct 23, 2023</td>
<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Internal Transfer</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500">Savings</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-emerald-600 font-semibold">+$5,000.00</td>
<td class="px-6 py-4 whitespace-nowrap"><span class="px-3 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-800">Pending</span></td>
</tr>
</tbody>
</table>
</div>
</section>
<!-- END: DataDisplayAssets -->
<!-- BEGIN: FeedbackAssets -->
<section class="asset-container" data-purpose="feedback-assets">
<h2 class="text-xl font-bold text-slate-800 mb-6">4. Feedback &amp; Status</h2>
<div class="space-y-6">
<!-- Alerts -->
<div>
<p class="component-label">Alert Styles</p>
<div class="space-y-3">
<div class="flex items-center p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-twelve">
<span class="w-5 h-5 mr-3 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs">✓</span>
<p class="text-sm font-medium">Transaction has been successfully processed.</p>
</div>
<div class="flex items-center p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-twelve">
<span class="w-5 h-5 mr-3 bg-rose-500 text-white rounded-full flex items-center justify-center text-xs">!</span>
<p class="text-sm font-medium">Insufficient funds to complete this request.</p>
</div>
</div>
</div>
<!-- Progress Bars -->
<div>
<p class="component-label">Progress Indicators</p>
<div class="space-y-4">
<div class="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
<div class="bg-primary h-full w-3/4"></div>
</div>
<div class="flex items-center justify-between text-xs text-slate-500 font-bold">
<span>LOADING SYSTEM...</span>
<span>75%</span>
</div>
</div>
</div>
</div>
</section>
<!-- END: FeedbackAssets -->
<!-- BEGIN: ModalAssets -->
<section class="asset-container" data-purpose="modal-assets">
<h2 class="text-xl font-bold text-slate-800 mb-6">5. Modal Overlays</h2>
<div class="bg-slate-200/50 p-8 rounded-twelve border border-slate-200 flex justify-center">
<!-- Mock Modal Component -->
<div class="max-w-md w-full bg-white rounded-twelve shadow-2xl border border-slate-100 overflow-hidden">
<div class="p-6">
<h3 class="text-lg font-bold text-slate-900 mb-2">Confirm Payment</h3>
<p class="text-slate-500 text-sm mb-6">Are you sure you want to send <span class="font-semibold text-slate-900">$2,400.00</span> to vendor "Apex Distribution"?</p>
<div class="flex space-x-3">
<button class="flex-1 bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-dark transition-colors">Confirm</button>
<button class="flex-1 border border-slate-300 text-slate-700 py-2 px-4 rounded-lg font-medium hover:bg-slate-50 transition-colors">Cancel</button>
</div>
</div>
</div>
</div>
<p class="text-center text-xs text-slate-400 mt-4 italic">Centered modal asset example</p>
</section>
<!-- END: ModalAssets -->
</main>
<!-- BEGIN: ColorPalette -->
<footer class="mt-12 asset-container" data-purpose="palette-guide">
<h2 class="text-xl font-bold text-slate-800 mb-6">Brand Palette</h2>
<div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
<div class="space-y-2">
<div class="h-16 w-full rounded-twelve bg-primary shadow-inner"></div>
<p class="text-[10px] font-bold text-slate-500 text-center">PRIMARY (#0f756d)</p>
</div>
<div class="space-y-2">
<div class="h-16 w-full rounded-twelve bg-primary-light shadow-inner"></div>
<p class="text-[10px] font-bold text-slate-500 text-center">TEAL LITE</p>
</div>
<div class="space-y-2">
<div class="h-16 w-full rounded-twelve bg-slate-900 shadow-inner"></div>
<p class="text-[10px] font-bold text-slate-500 text-center">SLATE 900</p>
</div>
<div class="space-y-2">
<div class="h-16 w-full rounded-twelve bg-slate-500 shadow-inner"></div>
<p class="text-[10px] font-bold text-slate-500 text-center">SLATE 500</p>
</div>
<div class="space-y-2">
<div class="h-16 w-full rounded-twelve bg-slate-200 shadow-inner"></div>
<p class="text-[10px] font-bold text-slate-500 text-center">SLATE 200</p>
</div>
<div class="space-y-2">
<div class="h-16 w-full rounded-twelve bg-white border border-slate-200 shadow-inner"></div>
<p class="text-[10px] font-bold text-slate-500 text-center">WHITE</p>
</div>
</div>
</footer>
<!-- END: ColorPalette -->
</body></html>
