<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amaria N Donuts - Toko Donat & Minuman Profesional</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Font Poppins -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Custom CSS File -->
    <link rel="stylesheet" href="style/style.css">
</head>
<body class="bg-[#FFF7F0] text-slate-800 antialiased selection:bg-orange-500 selection:text-white">

    <!-- Toast Notification Container -->
    <div id="toast-container" class="fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none"></div>

    <!-- Top Navigation Bar -->
    <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-orange-100 shadow-sm transition-all">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            
            <!-- Brand Logo -->
            <a href="#beranda" onclick="showStorefrontView()" class="flex items-center gap-3 group">
                <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-red-600 via-orange-500 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/30 group-hover:scale-105 transition duration-300">
                    <i class="fa-solid fa-cookie-bite text-2xl"></i>
                </div>
                <div>
                    <h1 class="font-extrabold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Amaria N Donuts</h1>
                    <p class="text-[10px] font-bold uppercase tracking-widest text-slate-400">Fresh Donuts & Drinks</p>
                </div>
            </a>

            <!-- Desktop Nav Links -->
            <nav class="hidden md:flex items-center gap-8 font-medium text-sm">
                <a href="#beranda" onclick="showStorefrontView()" class="text-red-600 hover:text-orange-600 transition font-semibold">Beranda</a>
                <a href="#menu" onclick="showStorefrontView()" class="text-slate-600 hover:text-red-600 transition">Menu Pilihan</a>
                <a href="#tentang" onclick="showStorefrontView()" class="text-slate-600 hover:text-red-600 transition">Tentang Kami</a>
                <a href="#kontak" onclick="showStorefrontView()" class="text-slate-600 hover:text-red-600 transition">Kontak</a>
            </nav>

            <!-- Actions (Cart & Admin Mode Toggle) -->
            <div class="flex items-center gap-3">
                <!-- Admin Mode / Logout Button -->
                <button onclick="handleAdminButtonClick()" id="admin-mode-btn" class="px-3 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-orange-100 hover:text-orange-600 transition border border-slate-200 flex items-center gap-1.5" title="Mode Kelola Menu Toko">
                    <i class="fa-solid fa-lock" id="admin-icon"></i>
                    <span id="admin-text" class="hidden sm:inline">Admin Mode</span>
                </button>

                <!-- Unified Action Button -->
                <button id="nav-action-btn" onclick="handleNavActionClick()" class="relative px-4 py-2.5 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition shadow-md shadow-orange-500/20 flex items-center gap-2">
                    <i class="fa-solid fa-bag-shopping" id="nav-action-icon"></i>
                    <span id="nav-action-label" class="text-xs">Keranjang</span>
                    <span id="nav-action-badge" class="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] min-w-[20px] h-5 px-1 rounded-full flex items-center justify-center font-bold shadow">0</span>
                </button>

                <!-- Mobile Menu Button -->
                <button id="menu-btn" aria-label="Toggle Menu" class="md:hidden text-slate-700 hover:text-red-600 focus:outline-none p-2">
                    <i class="fa-solid fa-bars text-2xl"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Menu Drawer -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-b border-orange-100 px-6 pt-4 pb-6 space-y-3 shadow-xl">
            <a href="#beranda" onclick="showStorefrontView()" class="block text-red-600 font-semibold mobile-link">Beranda</a>
            <a href="#menu" onclick="showStorefrontView()" class="block text-slate-700 hover:text-red-600 font-medium mobile-link">Menu Pilihan</a>
            <a href="#tentang" onclick="showStorefrontView()" class="block text-slate-700 hover:text-red-600 font-medium mobile-link">Tentang Kami</a>
            <a href="#kontak" onclick="showStorefrontView()" class="block text-slate-700 hover:text-red-600 font-medium mobile-link">Kontak</a>
            <div class="pt-3 border-t border-orange-100">
                <button onclick="handleNavActionClick(); document.getElementById('mobile-menu').classList.add('hidden');" class="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 text-white text-xs font-bold flex items-center justify-between shadow-sm">
                    <span class="flex items-center gap-2">
                        <i class="fa-solid fa-bag-shopping" id="mobile-action-icon"></i>
                        <span id="mobile-action-label">Buka Keranjang Belanja</span>
                    </span>
                    <span id="mobile-action-badge" class="bg-white text-red-600 text-[11px] font-extrabold px-2 py-0.5 rounded-full">0</span>
                </button>
            </div>
        </div>
    </header>

    <!-- Main Content Area -->
    <main id="main-content">
        <!-- Hero Section -->
        <section id="beranda" class="relative overflow-hidden bg-gradient-to-b from-[#FFF1E6] via-[#FFF7F0] to-[#FFE8D6] py-16 lg:py-24 border-b border-orange-100">
            <div class="absolute -top-24 -right-24 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl pointer-events-none"></div>
            <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-red-400/15 rounded-full blur-3xl pointer-events-none"></div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
                        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-bold shadow-sm">
                            <i class="fa-solid fa-fire text-red-600 animate-pulse"></i>
                            <span>Donat Lembut & Minuman Segar Premium Setiap Hari</span>
                        </div>
                        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            Manisnya Kebahagiaan di Setiap <span class="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Gigitan & Segarnya</span> Minuman!
                        </h1>
                        <p class="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                            Selamat datang di <strong class="text-slate-800">Amaria N Donuts</strong>. Nikmati kelezatan donat empuk bertabur topping lumer berkualitas tinggi serta aneka minuman segar pelepas penat.
                        </p>
                        <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                            <a href="#menu" class="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold rounded-2xl hover:opacity-95 transition shadow-xl shadow-orange-500/25 flex items-center justify-center gap-3 text-base">
                                <i class="fa-solid fa-utensils"></i>
                                <span>Lihat Menu Favorit</span>
                            </a>
                            <a href="#tentang" class="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-bold rounded-2xl border border-orange-200 hover:bg-orange-50 transition shadow-sm flex items-center justify-center gap-2 text-base">
                                <i class="fa-solid fa-circle-info text-orange-500"></i>
                                <span>Tentang Kami</span>
                            </a>
                        </div>
                    </div>

                    <!-- Hero Visual Card -->
                    <div class="lg:col-span-5">
                        <div class="relative mx-auto max-w-md lg:max-w-none">
                            <div class="absolute inset-0 bg-gradient-to-tr from-red-600 to-orange-400 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-lg"></div>
                            <div class="relative bg-white p-4 rounded-3xl border border-orange-200/80 shadow-2xl space-y-4">
                                <div class="relative h-64 sm:h-72 rounded-2xl overflow-hidden group">
                                    <img src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80" alt="Amaria N Donuts Special" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                                        <span class="bg-red-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider w-max mb-1">Best Seller</span>
                                        <h3 class="font-extrabold text-xl">Box Mix 6 Rasa Spesial</h3>
                                        <p class="text-xs text-orange-100">Donat empuk bertabur cokelat lumer & keju melimpah.</p>
                                    </div>
                                </div>
                                <div class="grid grid-cols-2 gap-3">
                                    <div class="p-3 bg-orange-50 rounded-2xl border border-orange-100 text-center">
                                        <i class="fa-solid fa-mug-hot text-orange-600 text-xl mb-1"></i>
                                        <h4 class="font-bold text-xs text-slate-800">Minuman Segar</h4>
                                        <p class="text-[10px] text-slate-500">Kopi & Teh Racikan</p>
                                    </div>
                                    <div class="p-3 bg-red-50 rounded-2xl border border-red-100 text-center">
                                        <i class="fa-solid fa-award text-red-600 text-xl mb-1"></i>
                                        <h4 class="font-bold text-xs text-slate-800">100% Halal & Fresh</h4>
                                        <p class="text-[10px] text-slate-500">Dibuat Setiap Hari</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Menu Section -->
        <section id="menu" class="py-20 bg-[#FFF7F0]">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                
                <div class="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 border-b border-orange-200/60 pb-6">
                    <div>
                        <span class="text-red-600 font-extrabold text-xs uppercase tracking-widest block mb-1">Pilihan Lezat</span>
                        <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight">Menu Donat & Minuman Kami</h2>
                    </div>

                    <div id="admin-add-container" class="hidden flex flex-wrap items-center gap-3">
                        <button onclick="showAdminOrdersView()" class="px-5 py-3 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition shadow-lg shadow-orange-500/25 flex items-center gap-2 text-xs sm:text-sm">
                            <i class="fa-solid fa-clipboard-list"></i>
                            <span>Lihat Pesanan (<span id="admin-banner-order-count">0</span>)</span>
                        </button>
                        <button onclick="openAddModal()" class="px-5 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition shadow-lg shadow-red-600/25 flex items-center gap-2 text-xs sm:text-sm">
                            <i class="fa-solid fa-plus"></i>
                            <span>Tambah Menu Baru</span>
                        </button>
                    </div>
                </div>

                <!-- Category Filters -->
                <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                    <button onclick="filterMenu('all')" id="filter-all" class="filter-btn px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-md shadow-orange-500/20">
                        <i class="fa-solid fa-border-all mr-2"></i>Semua Menu
                    </button>
                    <button onclick="filterMenu('Donut Klasik')" id="filter-Donut-Klasik" class="filter-btn px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition bg-white text-slate-700 border border-orange-200 hover:bg-orange-50">
                        <i class="fa-solid fa-cookie mr-2 text-orange-500"></i>Donat Klasik
                    </button>
                    <button onclick="filterMenu('Donut Premium')" id="filter-Donut-Premium" class="filter-btn px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition bg-white text-slate-700 border border-orange-200 hover:bg-orange-50">
                        <i class="fa-solid fa-star mr-2 text-amber-500"></i>Donat Premium
                    </button>
                    <button onclick="filterMenu('Donut Spesial')" id="filter-Donut-Spesial" class="filter-btn px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition bg-white text-slate-700 border border-orange-200 hover:bg-orange-50">
                        <i class="fa-solid fa-gift mr-2 text-red-500"></i>Donat Spesial
                    </button>
                    <button onclick="filterMenu('Minuman')" id="filter-Minuman" class="filter-btn px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition bg-white text-slate-700 border border-orange-200 hover:bg-orange-50">
                        <i class="fa-solid fa-mug-hot mr-2 text-amber-600"></i>Minuman Segar
                    </button>
                </div>

                <!-- Menu Grid -->
                <div id="menu-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"></div>
            </div>
        </section>

        <!-- About Section -->
        <section id="tentang" class="py-20 bg-gradient-to-b from-[#FFF1E6] to-[#FFF7F0] border-t border-orange-100">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div class="lg:col-span-5 relative">
                        <div class="absolute inset-0 bg-red-600/10 rounded-3xl transform -rotate-3 scale-105 blur-md"></div>
                        <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-orange-200">
                            <img src="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80" alt="Tentang Amaria N Donuts" class="w-full h-80 sm:h-96 object-cover">
                        </div>
                    </div>
                    <div class="lg:col-span-7 space-y-6">
                        <span class="text-red-600 font-extrabold text-xs uppercase tracking-widest block">Cerita Kami</span>
                        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Dedikasi untuk Cita Rasa Donat & Minuman Berkualitas Tinggi
                        </h2>
                        <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
                            <strong class="text-slate-800">Amaria N Donuts</strong> lahir dari kecintaan kami pada kelembutan tekstur donat klasik dipadu dengan inovasi rasa kekinian. Setiap adonan diuleni menggunakan bahan pilihan berkualitas tinggi tanpa bahan pengawet, menjamin kesegaran di setiap gigitan.
                        </p>
                        <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
                            Tidak hanya itu, kami juga menyajikan koleksi minuman hangat dan dingin pilihan yang diracik khusus untuk menyempurnakan waktu santai Anda bersama keluarga dan sahabat tercinta.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="kontak" class="py-20 bg-[#FFF7F0] border-t border-orange-100">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div class="text-center max-w-2xl mx-auto space-y-3">
                    <span class="text-red-600 font-extrabold text-xs uppercase tracking-widest block">Hubungi Kami</span>
                    <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight">Kunjungi Outlet Kami atau Pesan Online</h2>
                    <p class="text-slate-600 text-sm">Kami siap melayani pesanan Anda setiap hari mulai pukul 09.00 hingga 21.00 WIB.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-white p-6 rounded-3xl border border-orange-200/80 shadow-lg text-center space-y-3">
                        <div class="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto text-xl shadow-inner"><i class="fa-solid fa-location-dot"></i></div>
                        <h3 class="font-bold text-base text-slate-900">Alamat Outlet</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">Jl. Kenangan Manis No. 12, Pusat Kota Kuliner, Indonesia</p>
                    </div>
                    <div class="bg-white p-6 rounded-3xl border border-orange-200/80 shadow-lg text-center space-y-3">
                        <div class="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto text-xl shadow-inner"><i class="fa-brands fa-whatsapp"></i></div>
                        <h3 class="font-bold text-base text-slate-900">WhatsApp Pesanan</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">+62 812-1649-7059<br>(Fast Response)</p>
                    </div>
                    <div class="bg-white p-6 rounded-3xl border border-orange-200/80 shadow-lg text-center space-y-3">
                        <div class="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto text-xl shadow-inner"><i class="fa-solid fa-clock"></i></div>
                        <h3 class="font-bold text-base text-slate-900">Jam Operasional</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">Senin - Minggu: 09.00 - 21.00 WIB<br>Buka Setiap Hari</p>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer id="main-footer" class="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center text-xs text-slate-500">
            &copy; 2026 Amaria N Donuts. Hak Cipta Dilindungi. Dibuat dengan penuh rasa manis.
        </div>
    </footer>

    <!-- CART SIDEBAR DRAWER MODAL -->
    <div id="cart-modal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden opacity-0 transition-opacity duration-300 flex justify-end">
        <div id="cart-drawer" class="w-full max-w-md bg-white h-full shadow-2xl transform translate-x-full transition-transform duration-300 flex flex-col">
            <div class="p-6 border-b border-orange-100 flex items-center justify-between bg-gradient-to-r from-red-600 to-orange-500 text-white">
                <div class="flex items-center gap-2"><i class="fa-solid fa-basket-shopping"></i><h3 class="font-extrabold text-base">Keranjang Belanja</h3></div>
                <button onclick="closeCartModal()" class="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"><i class="fa-solid fa-xmark text-sm"></i></button>
            </div>
            <div id="cart-items-container" class="flex-1 overflow-y-auto p-6 space-y-4"></div>
            <div class="p-6 border-t border-orange-200/70 bg-gradient-to-b from-orange-50/80 to-red-50/40 space-y-3">
                <div class="flex items-center justify-between text-xs text-slate-500"><span>Total Item</span><span id="cart-total-qty" class="font-bold text-slate-700">0 item</span></div>
                <div class="flex items-center justify-between text-sm"><span class="text-slate-600 font-medium">Total Pembayaran</span><span id="cart-subtotal" class="font-extrabold text-red-600 text-lg">Rp 0</span></div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div class="space-y-1"><label class="block text-[11px] font-bold uppercase tracking-wider text-slate-700">Nama Pemesan *</label><input type="text" id="customer-name" placeholder="Nama lengkap..." class="w-full px-3.5 py-2 bg-white border border-orange-200 rounded-xl text-xs focus:outline-none focus:border-orange-500"></div>
                    <div class="space-y-1"><label class="block text-[11px] font-bold uppercase tracking-wider text-slate-700">No. Meja / WA</label><input type="text" id="customer-contact" placeholder="Meja 04..." class="w-full px-3.5 py-2 bg-white border border-orange-200 rounded-xl text-xs focus:outline-none focus:border-orange-500"></div>
                </div>
                <div class="space-y-1"><label class="block text-[11px] font-bold uppercase tracking-wider text-slate-700">Catatan Pesanan</label><textarea id="order-notes" rows="2" placeholder="Kurang manis / es dipisah..." class="w-full px-3.5 py-2 bg-white border border-orange-200 rounded-xl text-xs focus:outline-none focus:border-orange-500 resize-none"></textarea></div>
                <div class="space-y-2 pt-1">
                    <button onclick="submitCustomerOrder()" class="w-full py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold rounded-xl hover:opacity-95 transition shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 text-sm"><i class="fa-solid fa-paper-plane"></i><span>Kirim Pesanan</span></button>
                    <button onclick="checkoutWhatsApp()" class="w-full py-2.5 bg-white border border-emerald-500 text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 transition flex items-center justify-center gap-2 text-xs"><i class="fa-brands fa-whatsapp text-base text-emerald-600"></i><span>Kirim & Konfirmasi via WhatsApp</span></button>
                </div>
            </div>
        </div>
    </div>

    <!-- ADMIN LOGIN MODAL -->
    <div id="admin-login-modal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
        <div class="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl border border-orange-200 space-y-6 relative">
            <button onclick="closeAdminLoginModal()" class="absolute top-6 right-6 text-slate-400 hover:text-slate-700"><i class="fa-solid fa-xmark text-lg"></i></button>
            <div class="text-center space-y-2">
                <div class="w-14 h-14 bg-gradient-to-tr from-red-600 to-orange-500 text-white rounded-2xl flex items-center justify-center mx-auto text-xl shadow-md"><i class="fa-solid fa-lock"></i></div>
                <h3 class="font-extrabold text-xl text-slate-900">Login Admin Toko</h3>
                <p class="text-xs text-slate-500">Masukkan kredensial admin.</p>
            </div>
            <div id="login-error-box" class="hidden p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2"><i class="fa-solid fa-circle-exclamation shrink-0"></i><span id="login-error-text">Username/password salah.</span></div>
            <form onsubmit="handleAdminLogin(event)" class="space-y-4">
                <div class="space-y-1"><label class="block text-xs font-bold uppercase tracking-wider text-slate-700">Username</label><input type="text" id="admin-username" required placeholder="admin" class="w-full px-4 py-3 bg-slate-50 border border-orange-200 rounded-xl text-sm focus:outline-none focus:border-orange-500"></div>
                <div class="space-y-1">
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-700">Password</label>
                    <div class="relative"><input type="password" id="admin-password" required placeholder="••••••••" class="w-full px-4 py-3 bg-slate-50 border border-orange-200 rounded-xl text-sm focus:outline-none focus:border-orange-500 pr-10"><button type="button" onclick="togglePasswordVisibility()" class="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600"><i class="fa-solid fa-eye" id="toggle-password-icon"></i></button></div>
                </div>
                <div class="bg-orange-50 p-3 rounded-xl border border-orange-100 text-[11px] text-orange-800 flex items-center justify-between"><span>Demo: <strong>admin</strong> / <strong>amaria123</strong></span><button type="button" onclick="fillDemoCredentials()" class="underline font-bold text-red-600">Isi Otomatis</button></div>
                <button type="submit" class="w-full py-3.5 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold rounded-xl hover:opacity-95 transition shadow-lg shadow-orange-500/25">Masuk ke Mode Admin</button>
            </form>
        </div>
    </div>


   <!-- ADMIN ADD/EDIT MENU MODAL -->
<div id="menu-modal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-orange-200 space-y-6 max-h-[90vh] overflow-y-auto">
        <div class="flex items-center justify-between">
            <h3 id="modal-title" class="font-extrabold text-xl text-slate-900">Tambah Menu Baru</h3>
            <button onclick="closeMenuModal()" class="text-slate-400 hover:text-slate-700"><i class="fa-solid fa-xmark text-lg"></i></button>
        </div>
        <form onsubmit="handleMenuSubmit(event)" class="space-y-4">
            <input type="hidden" id="edit-menu-id">
            
            <div class="space-y-1">
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-700">Nama Menu <span class="text-red-600">*</span></label>
                <input type="text" id="menu-name" required placeholder="Contoh: Donat Tiramisu Almond" class="w-full px-4 py-3 bg-slate-50 border border-orange-200 rounded-xl text-sm focus:outline-none focus:border-orange-500">
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1">
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-700">Kategori <span class="text-red-600">*</span></label>
                    <select id="menu-category" class="w-full px-4 py-3 bg-slate-50 border border-orange-200 rounded-xl text-sm focus:outline-none focus:border-orange-500">
                        <option value="Donut Klasik">Donut Klasik</option>
                        <option value="Donut Premium">Donut Premium</option>
                        <option value="Donut Spesial">Donut Spesial</option>
                        <option value="Minuman">Minuman</option>
                    </select>
                </div>
                <div class="space-y-1">
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-700">Harga (Rp) <span class="text-red-600">*</span></label>
                    <input type="number" id="menu-price" required placeholder="12000" class="w-full px-4 py-3 bg-slate-50 border border-orange-200 rounded-xl text-sm focus:outline-none focus:border-orange-500">
                </div>
            </div>

            <!-- Input File dari Perangkat -->
            <div class="space-y-1">
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-700">Pilih Foto dari Perangkat</label>
                <input type="file" id="menu-image-file" accept="image/*" class="w-full text-xs text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-orange-100 file:text-orange-700 hover:file:bg-orange-200 cursor-pointer" onchange="handleImageUpload(event)">
                <input type="hidden" id="menu-image"> <!-- Menyimpan data string gambar -->
                <p class="text-[10px] text-slate-400">Format yang didukung: JPG, PNG, WEBP (Maksimal ukuran disarankan &lt; 1MB).</p>
            </div>

            <!-- Live Image Preview -->
            <div class="space-y-1">
                <label class="block text-[11px] font-bold uppercase tracking-wider text-slate-500">Pratinjau Foto</label>
                <div class="w-full h-36 rounded-2xl overflow-hidden border border-orange-200 bg-orange-50/50 flex items-center justify-center">
                    <img id="image-preview-tag" src="https://placehold.co/400x200/FFEDD5/DC2626?text=Preview" alt="Pratinjau" class="w-full h-full object-cover">
                </div>
            </div>

            <div class="space-y-1">
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-700">Deskripsi Singkat</label>
                <textarea id="menu-description" rows="2" placeholder="Deskripsi rasa dan tekstur menu..." class="w-full px-4 py-3 bg-slate-50 border border-orange-200 rounded-xl text-sm focus:outline-none focus:border-orange-500 resize-none"></textarea>
            </div>

            <div class="flex items-center justify-end gap-3 pt-2">
                <button type="button" onclick="closeMenuModal()" class="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold">Batal</button>
                <button type="submit" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 text-white text-xs font-bold shadow-md">Simpan Menu</button>
            </div>
        </form>
    </div>
</div>

 <!-- ADMIN ORDERS VIEW -->
<div id="admin-orders-view"
     class="hidden py-8 bg-[#FFF7ED] min-h-[80vh]">

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">

        <!-- HEADER -->
        <div class="flex flex-col sm:flex-row justify-between
            items-start sm:items-center gap-4
            bg-gradient-to-r from-orange-50 via-white to-amber-50
            border border-orange-100 rounded-2xl
            p-5 shadow-sm">

            <div>
                <span class="text-orange-500 text-xs font-bold uppercase tracking-wider">
                    Dashboard Admin
                </span>

                <h2 class="text-2xl font-bold text-gray-800 mt-1">
                    Kelola Pesanan Masuk
                </h2>

                <p class="text-sm text-gray-500 mt-1">
                    Pantau dan kelola semua pesanan pelanggan.
                </p>
            </div>

            <!-- ACTION BUTTONS -->
            <div class="flex items-center gap-2">

                <button
                    onclick="showStorefrontView()"
                    class="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
                    <i class="fa-solid fa-arrow-left mr-1"></i>
                    Kembali
                </button>

                <button
                    onclick="clearAllOrders()"
                    class="px-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition">
                    <i class="fa-solid fa-trash mr-1"></i>
                    Hapus Riwayat
                </button>

            </div>

        </div>

        <!-- ORDER FILTER -->
        <!-- ORDER FILTER -->
<div class="flex flex-wrap gap-2">

    <button
        onclick="filterAdminOrders('all')"
        id="order-tab-all"
        class="order-filter-btn px-4 py-2 rounded-lg text-xs font-bold
               bg-orange-500 text-white border border-orange-500
               shadow-sm hover:bg-orange-600 transition">
        Semua
    </button>

    <button
        onclick="filterAdminOrders('Menunggu')"
        id="order-tab-Menunggu"
        class="order-filter-btn px-4 py-2 rounded-lg text-xs font-bold
               bg-white border border-orange-200 text-orange-800
               hover:bg-orange-100 transition">
        Menunggu
    </button>

    <button
        onclick="filterAdminOrders('Diproses')"
        id="order-tab-Diproses"
        class="order-filter-btn px-4 py-2 rounded-lg text-xs font-bold
               bg-white border border-orange-200 text-orange-800
               hover:bg-orange-100 transition">
        Diproses
    </button>

    <button
        onclick="filterAdminOrders('Selesai')"
        id="order-tab-Selesai"
        class="order-filter-btn px-4 py-2 rounded-lg text-xs font-bold
               bg-white border border-orange-200 text-orange-800
               hover:bg-orange-100 transition">
        Selesai
    </button>

    <button
        onclick="filterAdminOrders('Dibatalkan')"
        id="order-tab-Dibatalkan"
        class="order-filter-btn px-4 py-2 rounded-lg text-xs font-bold
               bg-white border border-orange-200 text-orange-800
               hover:bg-orange-100 transition">
        Dibatalkan
    </button>

</div>

        <!-- LIST SEMUA PESANAN -->
<div
    id="admin-orders-container"
    class="flex flex-col gap-2 w-full max-w-md mx-auto">
</div>

    </div>

</div>

    <!-- External JavaScript File -->
    <script src="script/script.js" defer></script>
</body>
</html>