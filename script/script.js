let menuItems = JSON.parse(localStorage.getItem('amaria_menu_items')) || defaultMenu;
let cart = JSON.parse(localStorage.getItem('amaria_cart')) || [];
let orders = JSON.parse(localStorage.getItem('amaria_orders_v1')) || [];
let adminMode = sessionStorage.getItem('amaria_admin_authenticated') === 'true';
let currentFilter = 'all';
let currentOrderFilter = 'all';

function showToast(message, isSuccess = true) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `pointer-events-auto px-4 py-3 rounded-2xl shadow-xl text-white text-xs font-bold flex items-center gap-2.5 transition-all duration-300 transform translate-y-2 opacity-0 ${isSuccess ? 'bg-emerald-600' : 'bg-red-600'}`;
    toast.innerHTML = `<i class="fa-solid ${isSuccess ? 'fa-circle-check' : 'fa-triangle-exclamation'} text-base"></i><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.classList.remove('translate-y-2', 'opacity-0'), 10);
    setTimeout(() => {
        toast.classList.add('translate-y-2', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function renderMenu(filter = 'all') {
    currentFilter = filter;
    const grid = document.getElementById('menu-grid');
    if (!grid) return;
    grid.innerHTML = '';

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.className = "filter-btn px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition bg-white text-slate-700 border border-orange-200 hover:bg-orange-50";
    });

    const activeBtnId = filter === 'all' ? 'filter-all' : `filter-${filter.replace(/\s+/g, '-')}`;
    const activeBtn = document.getElementById(activeBtnId);
    if (activeBtn) {
        activeBtn.className = "filter-btn px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-md shadow-orange-500/20";
    }

    const filtered = filter === 'all' ? menuItems : menuItems.filter(item => item.category === filter);

    if (filtered.length === 0) {
        grid.innerHTML = `<div class="col-span-full py-16 text-center text-slate-400"><i class="fa-solid fa-cookie text-5xl mb-3 text-orange-200"></i><p class="font-medium">Belum ada menu pada kategori ini.</p></div>`;
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = "bg-white rounded-3xl border border-orange-200/80 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden flex flex-col group";
        
        let actionButtonHTML = adminMode ? `
            <div class="grid grid-cols-2 gap-2 pt-2 border-t border-orange-100">
                <button onclick="openEditModal(${item.id})" class="py-2.5 px-3 bg-orange-100 hover:bg-orange-200 text-orange-700 font-bold rounded-xl text-xs transition flex items-center justify-center gap-1.5"><i class="fa-solid fa-pen-to-square"></i>Edit</button>
                <button onclick="deleteMenuItem(${item.id})" class="py-2.5 px-3 bg-red-100 hover:bg-red-200 text-red-700 font-bold rounded-xl text-xs transition flex items-center justify-center gap-1.5"><i class="fa-solid fa-trash-can"></i>Hapus</button>
            </div>
        ` : `
            <button onclick="addToCart(${item.id})" class="w-full py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold rounded-xl hover:opacity-95 transition shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 text-xs"><i class="fa-solid fa-cart-plus"></i>+ Keranjang</button>
        `;

        card.innerHTML = `
            <div class="relative h-48 overflow-hidden bg-orange-50">
                <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" onerror="this.src='https://placehold.co/600x400/FFEDD5/DC2626?text=Amaria+Donuts'">
                <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-extrabold px-3 py-1 rounded-full shadow-sm">${item.category}</span>
            </div>
            <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div class="space-y-1.5">
                    <h3 class="font-extrabold text-base text-slate-900 line-clamp-1">${item.name}</h3>
                    <p class="text-xs text-slate-500 line-clamp-2 leading-relaxed">${item.description || 'Nikmati kelezatan spesial buatan Amaria N Donuts.'}</p>
                </div>
                <div class="space-y-3">
                    <div class="flex items-center justify-between"><span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Harga</span><span class="font-extrabold text-red-600 text-base">Rp ${item.price.toLocaleString('id-ID')}</span></div>
                    ${actionButtonHTML}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterMenu(categoryName) {
    renderMenu(categoryName);
}

function addToCart(id) {
    if (adminMode) {
        showToast("Mode Admin aktif. Gunakan akun pelanggan untuk berbelanja.", false);
        return;
    }
    const product = menuItems.find(m => m.id === id);
    if (!product) return;

    const existing = cart.find(c => c.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 });
    }
    saveCartToStorage();
    showToast(`Berhasil menambahkan "${product.name}" ke keranjang!`, true);
}

function updateCartQuantity(id, delta) {
    const item = cart.find(c => c.id === id);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) cart = cart.filter(c => c.id !== id);
    saveCartToStorage();
    renderCartItems();
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    saveCartToStorage();
    renderCartItems();
    showToast("Item dihapus dari keranjang.", false);
}

function saveCartToStorage() {
    localStorage.setItem('amaria_cart', JSON.stringify(cart));
    updateNavActionBadge();
}

function getCartItemsCount() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function getActiveOrdersCount() {
    return orders.filter(o => o.status === 'Menunggu' || o.status === 'Diproses').length;
}

function updateNavActionBadge() {
    const badge = document.getElementById('nav-action-badge');
    const mobileBadge = document.getElementById('mobile-action-badge');
    const bannerCount = document.getElementById('admin-banner-order-count');
    const activeOrders = getActiveOrdersCount();

    if (bannerCount) bannerCount.textContent = activeOrders;

    if (adminMode) {
        if (badge) badge.textContent = activeOrders;
        if (mobileBadge) mobileBadge.textContent = activeOrders;
    } else {
        const cartCount = getCartItemsCount();
        if (badge) badge.textContent = cartCount;
        if (mobileBadge) mobileBadge.textContent = cartCount;
    }
}

function handleNavActionClick() {
    if (adminMode) {
        showAdminOrdersView();
    } else {
        openCartModal();
    }
}

const cartModal = document.getElementById('cart-modal');
const cartDrawer = document.getElementById('cart-drawer');

function openCartModal() {
    if (adminMode) {
        showAdminOrdersView();
        return;
    }
    renderCartItems();
    if (cartModal && cartDrawer) {
        cartModal.classList.remove('hidden');
        setTimeout(() => {
            cartModal.classList.remove('opacity-0');
            cartDrawer.classList.remove('translate-x-full');
        }, 10);
    }
}

function closeCartModal() {
    if (cartModal && cartDrawer) {
        cartModal.classList.add('opacity-0');
        cartDrawer.classList.add('translate-x-full');
        setTimeout(() => cartModal.classList.add('hidden'), 300);
    }
}

function renderCartItems() {
    const container = document.getElementById('cart-items-container');
    const subtotalEl = document.getElementById('cart-subtotal');
    const totalQtyEl = document.getElementById('cart-total-qty');
    if (!container) return;
    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = `<div class="py-16 text-center text-slate-400"><i class="fa-solid fa-basket-shopping text-5xl mb-3 text-orange-200"></i><p class="font-medium text-sm">Keranjang kosong.</p></div>`;
        subtotalEl.textContent = 'Rp 0';
        if (totalQtyEl) totalQtyEl.textContent = '0 item';
        return;
    }

    let subtotal = 0;
    let totalQty = 0;

    cart.forEach(item => {
        const itemSubtotal = item.price * item.quantity;
        subtotal += itemSubtotal;
        totalQty += item.quantity;
        const div = document.createElement('div');
        div.className = "flex items-center justify-between gap-3 p-3 bg-orange-50/50 rounded-2xl border border-orange-100";
        div.innerHTML = `
            <div class="flex items-center gap-3 min-w-0">
                <img src="${item.image}" alt="${item.name}" class="w-14 h-14 object-cover rounded-xl border border-orange-100 shrink-0" onerror="this.src='https://placehold.co/100x100/FFEDD5/DC2626?text=Donut'">
                <div class="min-w-0">
                    <h5 class="font-bold text-slate-900 text-sm truncate">${item.name}</h5>
                    <p class="text-[11px] text-slate-500">Rp ${item.price.toLocaleString('id-ID')} &times; ${item.quantity}</p>
                    <p class="text-xs text-red-600 font-extrabold">Subtotal: Rp ${itemSubtotal.toLocaleString('id-ID')}</p>
                </div>
            </div>
            <div class="flex items-center gap-1.5 shrink-0">
                <div class="flex items-center bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                    <button onclick="updateCartQuantity(${item.id}, -1)" class="px-2.5 py-1 text-slate-600 hover:bg-slate-100">-</button>
                    <span class="px-2 text-xs font-bold text-slate-800">${item.quantity}</span>
                    <button onclick="updateCartQuantity(${item.id}, 1)" class="px-2.5 py-1 text-slate-600 hover:bg-slate-100">+</button>
                </div>
                <button onclick="removeFromCart(${item.id})" class="text-slate-400 hover:text-red-600 p-1.5"><i class="fa-solid fa-trash-can text-xs"></i></button>
            </div>
        `;
        container.appendChild(div);
    });

    subtotalEl.textContent = `Rp ${subtotal.toLocaleString('id-ID')}`;
    if (totalQtyEl) totalQtyEl.textContent = `${totalQty} item`;
}

// Mencegah pesanan terkirim berkali-kali
let isSubmittingOrder = false;

async function submitCustomerOrder() {

    // Cegah checkout berulang
    if (isSubmittingOrder) {
        showToast("Pesanan sedang diproses, mohon tunggu!", false);
        return false;
    }

    // Ambil elemen input pelanggan
    const nameInput = document.getElementById('customer-name');
    const contactInput = document.getElementById('customer-contact');
    const notesInput = document.getElementById('order-notes');

    const customerName = nameInput.value.trim();
    const customerContact = contactInput.value.trim();
    const orderNotes = notesInput.value.trim();

    // Validasi nama pelanggan
    if (!customerName) {
        showToast("Mohon isi Nama Pemesan terlebih dahulu!", false);
        nameInput.focus();
        return false;
    }

    // Validasi keranjang
    if (!Array.isArray(cart) || cart.length === 0) {
        showToast("Keranjang belanja masih kosong!", false);
        return false;
    }

    // Validasi harga dan jumlah produk
    const validCart = cart.every(item =>
        Number.isFinite(Number(item.price)) &&
        Number(item.price) >= 0 &&
        Number.isInteger(Number(item.quantity)) &&
        Number(item.quantity) > 0
    );

    if (!validCart) {
        showToast("Data produk dalam keranjang tidak valid!", false);
        return false;
    }

    // Hitung total pembayaran
    const total = cart.reduce((sum, item) => {
        return sum + (Number(item.price) * Number(item.quantity));
    }, 0);

    // Waktu Indonesia Barat
    const now = new Date();

    const formattedDate = now.toLocaleDateString('id-ID', {
        timeZone: 'Asia/Jakarta',
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });

    const formattedTime = now.toLocaleTimeString('id-ID', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

    // Membuat ID pesanan
    const orderId = `#ORD-${Date.now()}-${Math.floor(100 + Math.random() * 900)}`;

    // Membuat objek pesanan
    const newOrder = {
        id: orderId,
        timestamp: `${formattedDate}, ${formattedTime} WIB`,
        customerName: customerName,
        customerContact: customerContact || '-',
        items: cart.map(item => ({
            ...item
        })),
        total: total,
        notes: orderNotes,
        status: "Menunggu"
    };

    // Aktifkan status proses
    isSubmittingOrder = true;

    try {

        // Kirim data ke backend PHP
        const response = await fetch('backend/save_order.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        });

        // Ambil respons server
        const responseText = await response.text();

        if (!responseText.trim()) {
            throw new Error(
                "Server PHP memberikan respons kosong."
            );
        }

        // Parsing JSON
        let data;

        try {
            data = JSON.parse(responseText);
        } catch (error) {
            console.error("Respons PHP tidak valid:", responseText);

            throw new Error(
                "Respons server tidak valid. Periksa backend PHP."
            );
        }

        // Periksa HTTP response
        if (!response.ok) {
            throw new Error(
                data.message || `Server error: ${response.status}`
            );
        }

        // Periksa status penyimpanan
        if (!data.success) {
            throw new Error(
                data.message || "Gagal menyimpan pesanan ke database."
            );
        }

        // =====================================
        // PESANAN BERHASIL DISIMPAN
        // =====================================

        // Kosongkan keranjang
        cart = [];
        saveCartToStorage();

        // Reset input pelanggan
        nameInput.value = '';
        contactInput.value = '';
        notesInput.value = '';

        // Tutup modal keranjang
        closeCartModal();

        // Notifikasi berhasil
        showToast(
            `Pesanan ${orderId} berhasil disimpan ke database!`,
            true
        );

        return true;

    } catch (error) {

        console.error("Checkout Error:", error);

        showToast(
            error.message || "Kesalahan koneksi saat mengirim pesanan.",
            false
        );

        return false;

    } finally {

        // Izinkan checkout berikutnya
        isSubmittingOrder = false;

    }
}


function syncOrdersFromStorage() {
    fetch('backend/get_order.php')
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                orders = data.orders || [];
                updateNavActionBadge();
                
                // Render ulang tampilan tabel pesanan di mode admin jika sedang dibuka
                const adminOrdersView = document.getElementById('admin-orders-view');
                if (adminMode && adminOrdersView && !adminOrdersView.classList.contains('hidden')) {
                    if (typeof renderAdminOrders === 'function') {
                        renderAdminOrders();
                    }
                }
            } else {
                console.error("Gagal memuat pesanan:", data.message);
            }
        })
        .catch(err => console.error('Gagal memuat pesanan dari database:', err));
}

// Mencegah checkout WhatsApp berulang
let isWhatsAppCheckoutProcessing = false;

async function checkoutWhatsApp() {

    if (isWhatsAppCheckoutProcessing) {
        showToast("Pesanan sedang diproses, mohon tunggu!", false);
        return;
    }

    const customerName = document.getElementById('customer-name').value.trim();
    const customerContact = document.getElementById('customer-contact').value.trim();
    const orderNotes = document.getElementById('order-notes').value.trim();

    // Validasi nama pelanggan
    if (!customerName) {
        showToast("Mohon isi Nama Pemesan terlebih dahulu!", false);
        document.getElementById('customer-name').focus();
        return;
    }

    // Validasi keranjang
    if (!cart || cart.length === 0) {
        showToast("Keranjang belanja masih kosong!", false);
        return;
    }

    // Membuat pesan WhatsApp
    let message = `Halo *Amaria N Donuts*, Saya ingin memesan:\n\n`;
    message += `*Nama:* ${customerName}\n`;

    if (customerContact) {
        message += `*No. Meja/WA:* ${customerContact}\n`;
    }

    if (orderNotes) {
        message += `*Catatan:* ${orderNotes}\n`;
    }

    message += `----------------------------------\n`;

    cart.forEach((item, index) => {
        const subtotal = item.price * item.quantity;

        message += `${index + 1}. *${item.name}* (${item.quantity}x) - Rp ${subtotal.toLocaleString('id-ID')}\n`;
    });

    // Hitung total pembayaran
    const total = cart.reduce(
        (sum, item) => sum + (item.price * item.quantity),
        0
    );

    message += `----------------------------------\n`;
    message += `*Total Pembayaran: Rp ${total.toLocaleString('id-ID')}*\n\n`;
    message += `Mohon segera diproses ya kak, terima kasih!`;

    // Buat URL WhatsApp
    const whatsappURL =
        `https://wa.me/${6281216497059}?text=${encodeURIComponent(message)}`;

    // Buka tab kosong untuk menghindari blokir popup
    const whatsappWindow = window.open('about:blank', '_blank');

    if (!whatsappWindow) {
        showToast("Izinkan pop-up browser untuk membuka WhatsApp!", false);
        return;
    }

    isWhatsAppCheckoutProcessing = true;

    try {

        // Simpan pesanan dan tunggu hasilnya
        const saved = await submitCustomerOrder();

        if (!saved) {
            whatsappWindow.close();
            return;
        }

        // Arahkan ke WhatsApp setelah database berhasil menyimpan
        whatsappWindow.location.href = whatsappURL;

    } catch (error) {

        console.error("Checkout WhatsApp Error:", error);

        whatsappWindow.close();

        showToast("Terjadi kesalahan saat checkout!", false);

    } finally {

        isWhatsAppCheckoutProcessing = false;

    }
}

const ADMIN_CREDENTIALS = { username: 'admin', password: 'amaria123' };

function handleAdminButtonClick() {
    if (adminMode) {
        logoutAdmin();
    } else {
        openAdminLoginModal();
    }
}

function openAdminLoginModal() {
    document.getElementById('admin-login-modal').classList.remove('hidden');
}

function closeAdminLoginModal() {
    document.getElementById('admin-login-modal').classList.add('hidden');
    document.getElementById('login-error-box').classList.add('hidden');
}

function togglePasswordVisibility() {
    const pwdInput = document.getElementById('admin-password');
    const icon = document.getElementById('toggle-password-icon');
    if (pwdInput.type === 'password') {
        pwdInput.type = 'text';
        icon.className = "fa-solid fa-eye-slash";
    } else {
        pwdInput.type = 'password';
        icon.className = "fa-solid fa-eye";
    }
}



function fillDemoCredentials() {
    document.getElementById('admin-username').value = 'admin';
    document.getElementById('admin-password').value = 'amaria123';
}

function handleAdminLogin(e) {
    e.preventDefault();
    const u = document.getElementById('admin-username').value.trim();
    const p = document.getElementById('admin-password').value;
    const errBox = document.getElementById('login-error-box');
    const errText = document.getElementById('login-error-text');

    if (u === ADMIN_CREDENTIALS.username && p === ADMIN_CREDENTIALS.password) {
        adminMode = true;
        sessionStorage.setItem('amaria_admin_authenticated', 'true');
        errBox.classList.add('hidden');
        closeAdminLoginModal();
        updateAdminUIState();
        showStorefrontView();
        renderMenu(currentFilter);
        showToast("Login berhasil! Tombol Keranjang kini berfungsi sebagai Pesanan.", true);
    } else {
        errText.textContent = "Username atau password admin tidak sesuai.";
        errBox.classList.remove('hidden');
    }
}

function logoutAdmin() {
    adminMode = false;
    sessionStorage.removeItem('amaria_admin_authenticated');
    updateAdminUIState();
    showStorefrontView();
    renderMenu(currentFilter);
    showToast("Anda telah keluar dari Mode Admin.", false);
}

function updateAdminUIState() {
    const btn = document.getElementById('admin-mode-btn');
    const icon = document.getElementById('admin-icon');
    const text = document.getElementById('admin-text');
    const addContainer = document.getElementById('admin-add-container');
    const navActionLabel = document.getElementById('nav-action-label');
    const mobileActionLabel = document.getElementById('mobile-action-label');

    if (adminMode) {
        if (btn) btn.className = "px-3 py-2 rounded-xl text-xs font-bold bg-red-600 text-white hover:bg-red-700 transition shadow flex items-center gap-1.5";
        if (icon) icon.className = "fa-solid fa-right-from-bracket";
        if (text) text.textContent = "Admin Aktif • Logout";
        if (addContainer) addContainer.classList.remove('hidden');
        if (navActionLabel) navActionLabel.textContent = "Pesanan";
        if (mobileActionLabel) mobileActionLabel.textContent = "Kelola Pesanan Masuk";
    } else {
        if (btn) btn.className = "px-3 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-orange-100 hover:text-orange-600 transition border border-slate-200 flex items-center gap-1.5";
        if (icon) icon.className = "fa-solid fa-lock";
        if (text) text.textContent = "Admin Mode";
        if (addContainer) addContainer.classList.add('hidden');
        if (navActionLabel) navActionLabel.textContent = "Keranjang";
        if (mobileActionLabel) mobileActionLabel.textContent = "Buka Keranjang Belanja";
    }
    updateNavActionBadge();
}

function openAddModal() {
    document.getElementById('modal-title').textContent = "Tambah Menu Baru";
    document.getElementById('edit-menu-id').value = "";
    document.getElementById('menu-name').value = "";
    document.getElementById('menu-price').value = "";
    document.getElementById('menu-image').value = "";
    document.getElementById('menu-description').value = "";
    document.getElementById('image-preview-tag').src = "https://placehold.co/400x200/FFEDD5/DC2626?text=Preview";
    document.getElementById('menu-modal').classList.remove('hidden');
}

function openEditModal(id) {
    const item = menuItems.find(m => m.id === id);
    if (!item) return;
    document.getElementById('modal-title').textContent = "Edit Menu Toko";
    document.getElementById('edit-menu-id').value = item.id;
    document.getElementById('menu-name').value = item.name;
    document.getElementById('menu-category').value = item.category;
    document.getElementById('menu-price').value = item.price;
    document.getElementById('menu-image').value = item.image;
    document.getElementById('menu-description').value = item.description || "";
    document.getElementById('image-preview-tag').src = item.image;
    document.getElementById('menu-modal').classList.remove('hidden');
}

function closeMenuModal() {
    document.getElementById('menu-modal').classList.add('hidden');
}

function previewImageInput(url) {
    const preview = document.getElementById('image-preview-tag');
    if (preview) {
        preview.src = url.trim() !== '' ? url : "https://placehold.co/400x200/FFEDD5/DC2626?text=Preview";
    }
}

function handleMenuSubmit(e) {
    e.preventDefault();
    const id = document.getElementById('edit-menu-id').value;
    const name = document.getElementById('menu-name').value.trim();
    const category = document.getElementById('menu-category').value;
    const price = parseInt(document.getElementById('menu-price').value);
    const image = document.getElementById('menu-image').value.trim();
    const description = document.getElementById('menu-description').value.trim();

    if (id) {
        const item = menuItems.find(m => m.id == id);
        if (item) {
            item.name = name;
            item.category = category;
            item.price = price;
            item.image = image;
            item.description = description;
            showToast(`Menu "${name}" berhasil diperbarui!`, true);
        }
    } else {
        const newItem = { id: Date.now(), name, category, price, image, description };
        menuItems.unshift(newItem);
        showToast(`Menu "${name}" berhasil ditambahkan!`, true);
    }

    localStorage.setItem('amaria_menu_items', JSON.stringify(menuItems));
    closeMenuModal();
    renderMenu(currentFilter);
}

function deleteMenuItem(id) {
    if (confirm("Apakah Anda yakin ingin menghapus menu ini dari database?")) {
        // Kirim request ke backend PHP menggunakan Fetch API
        fetch('backend/delete_menu.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Hapus juga dari array lokal agar tampilan langsung ter-update
                menuItems = menuItems.filter(m => m.id !== id);
                renderMenu(currentFilter);
                showToast("Menu berhasil dihapus dari database.", true);
            } else {
                showToast(data.message || "Gagal menghapus menu.", false);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showToast("Terjadi kesalahan koneksi ke server.", false);
        });
    }
}

function syncOrdersFromStorage() {
    orders = JSON.parse(localStorage.getItem('amaria_orders_v1')) || [];
    updateNavActionBadge();
}

async function showAdminOrdersView() {
    document.getElementById('main-content').classList.add('hidden');
    document.getElementById('main-footer')?.classList.add('hidden');
    document.getElementById('admin-orders-view').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Tarik data terbaru dari database MySQL secara sinkron
    try {
        const response = await fetch('backend/get_order.php');
        const data = await response.json();
        if (data.success) {
            orders = data.orders || [];
            updateNavActionBadge();
            renderAdminOrders(); // Render tabel setelah data benar-benar siap
        } else {
            console.error("Gagal memuat pesanan:", data.message);
        }
    } catch (err) {
        console.error('Koneksi database pesanan gagal:', err);
    }
}

function showStorefrontView() {

    // Sembunyikan halaman kelola pesanan
    const adminView = document.getElementById('admin-orders-view');
    if (adminView) {
        adminView.classList.add('hidden');
    }

    // Tampilkan kembali halaman utama
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.classList.remove('hidden');
    }

    // Tampilkan kembali footer halaman utama
    const footer = document.getElementById('main-footer');
    if (footer) {
        footer.classList.remove('hidden');
    }

    // Render ulang menu
    renderMenu(currentFilter);

    // Kembali ke posisi paling atas
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function filterAdminOrders(status) {
    currentOrderFilter = status;
    document.querySelectorAll('.order-filter-btn').forEach(btn => {
        btn.className = "order-filter-btn px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-700 border border-orange-200";
    });
    const activeTab = document.getElementById(`order-tab-${status}`);
    if (activeTab) activeTab.className = "order-filter-btn px-4 py-2 rounded-xl text-xs font-bold bg-orange-500 text-white shadow";
    renderAdminOrders();
}

function renderAdminOrders() {

      console.log("VERSI COMPACT ADMIN AKTIF");

    const container = document.getElementById('admin-orders-container');
    if (!container) return;

    container.innerHTML = '';

    // Event handler tombol lihat pesanan

    const filtered = currentOrderFilter === 'all'
        ? orders
        : orders.filter(order => order.status === currentOrderFilter);

    const escapeHTML = (value) => {
        return String(value ?? '').replace(/[&<>"']/g, char => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        })[char]);
    };

    const formatRupiah = value =>
        Number(value || 0).toLocaleString('id-ID');

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="bg-white border border-gray-200 rounded-lg p-5 text-center">
                <i class="fa-solid fa-clipboard-list text-2xl text-gray-300 mb-2"></i>
                <p class="text-sm text-gray-500">Tidak ada pesanan.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(order => {

        const items = Array.isArray(order.items) ? order.items : [];

        const totalItemQty = items.reduce(
            (sum, item) => sum + Number(item.quantity || 0),
            0
        );

        const badgeStyle = getOrderStatusBadgeStyle(order.status);

        const card = document.createElement('div');

        card.className = `
            w-full max-w-md mx-auto
            bg-white border border-gray-200
            rounded-xl px-3 py-3
            shadow-sm hover:border-orange-300
            transition
        `;

        card.innerHTML = `
            <!-- BARIS PERTAMA -->
            <div class="flex items-center justify-between gap-2 mb-2">

                <div class="min-w-0">
                    <p class="text-xs font-extrabold text-gray-800">
                        ${escapeHTML(order.id)}
                    </p>

                    <p class="text-[10px] text-gray-400 mt-0.5">
                        ${escapeHTML(order.timestamp)}
                    </p>
                </div>

                <span class="shrink-0 px-2.5 py-1 rounded-full
                    text-[10px] font-bold ${badgeStyle}">
                    ${escapeHTML(order.status)}
                </span>

            </div>

            <!-- GARIS PEMBATAS -->
            <div class="border-t border-gray-100 pt-2">

                <div class="flex items-center gap-2">

                    <!-- PELANGGAN -->
                    <div class="flex-1 min-w-0">

                        <p class="text-sm font-bold text-gray-800 truncate">
                            ${escapeHTML(order.customerName)}
                        </p>

                        <p class="text-[10px] text-gray-400 mt-0.5 truncate">
                            ${totalItemQty} Item · ${escapeHTML(order.customerContact || '-')}
                        </p>

                    </div>

                    <!-- TOTAL -->
                    <div class="shrink-0 text-right">

                        <p class="text-xs font-extrabold text-gray-900">
                            Rp ${formatRupiah(order.total)}
                        </p>

                        <p class="text-[10px] text-gray-400">
                            Total
                        </p>

                    </div>

                    <!-- TOMBOL MATA -->
                    <button
    type="button"
    data-order-id="${escapeHTML(String(order.id))}"
    class="view-order-btn shrink-0 w-9 h-9
           flex items-center justify-center
           rounded-lg bg-orange-50
           border border-orange-100
           text-orange-600 hover:bg-orange-100
           cursor-pointer transition"
    title="Lihat Detail Pesanan"
    aria-label="Lihat Detail Pesanan">

    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="pointer-events-none">

        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z"/>
        <circle cx="12" cy="12" r="3"/>

    </svg>

</button>

                </div>

            </div>
        `;


       // Hubungkan tombol mata dengan detail pesanan
const viewButton = card.querySelector('.view-order-btn');

viewButton.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();

    console.log("Pesanan dipilih:", order.id);

    showOrderDetails(String(order.id));
});

// Masukkan kartu ke container
container.appendChild(card);

    });
}

function showOrderDetails(orderId) {

    // Cari pesanan berdasarkan ID
    const order = orders.find(
        item => String(item.id) === String(orderId)
    );

    if (!order) {
        showToast("Pesanan tidak ditemukan!", false);
        return;
    }

    // Pengaman teks HTML
    const escapeHTML = (value) => {
        return String(value ?? '').replace(/[&<>"']/g, char => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        })[char]);
    };

    // Format Rupiah
    const formatRupiah = value =>
        Number(value || 0).toLocaleString('id-ID');

    // Daftar produk
    const items = Array.isArray(order.items) ? order.items : [];

    // Total jumlah produk
    const totalQuantity = items.reduce(
        (sum, item) => sum + Number(item.quantity || 0),
        0
    );

    // Status pesanan
    const badgeStyle = getOrderStatusBadgeStyle(order.status);

    // Gambar default
    const defaultImage =
        'https://placehold.co/100x100/FFF7ED/EA580C?text=Menu';

    // HTML produk
    const itemsHTML = items.map(item => {

        const price = Number(item.price) || 0;
        const quantity = Number(item.quantity) || 0;
        const subtotal = price * quantity;

        // Validasi URL gambar
        const rawImage = String(item.image || '');

        const image = /^(https?:\/\/|\/|\.\/|\.\.\/)/i.test(rawImage)
            ? escapeHTML(rawImage)
            : defaultImage;

        return `
            <div class="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0">

                <!-- FOTO PRODUK -->
                <img
                    src="${image}"
                    alt="${escapeHTML(item.name)}"
                    onerror="this.onerror=null;this.src='${defaultImage}'"
                    class="w-12 h-12 rounded-lg object-cover border border-gray-200 shrink-0"
                >

                <!-- INFORMASI PRODUK -->
                <div class="flex-1 min-w-0">

                    <p class="text-sm font-semibold text-gray-800">
                        ${escapeHTML(item.name)}
                    </p>

                    <p class="text-xs text-gray-400 mt-1">
                        ${quantity} x Rp ${formatRupiah(price)}
                    </p>

                </div>

                <!-- SUBTOTAL -->
                <div class="text-right shrink-0">

                    <p class="text-sm font-bold text-gray-800">
                        Rp ${formatRupiah(subtotal)}
                    </p>

                </div>

            </div>
        `;

    }).join('');

    // Catatan pelanggan
    const notesHTML = order.notes ? `
        <div class="bg-amber-50 border border-amber-100 rounded-lg p-3">

            <p class="text-xs font-bold text-amber-800 mb-1">
                <i class="fa-solid fa-note-sticky mr-1"></i>
                Catatan Pelanggan
            </p>

            <p class="text-sm text-amber-900">
                ${escapeHTML(order.notes)}
            </p>

        </div>
    ` : `
        <p class="text-xs text-gray-400 italic">
            Tidak ada catatan tambahan.
        </p>
    `;

    // Hapus modal sebelumnya jika masih ada
    document.getElementById('admin-order-detail-modal')?.remove();

    // Buat modal
    const modal = document.createElement('div');

    modal.id = 'admin-order-detail-modal';

    modal.className = `
        fixed inset-0 z-[9999]
        bg-black/50
        flex items-center justify-center
        p-3 sm:p-5
    `;

    modal.innerHTML = `

        <div
            class="bg-white w-full max-w-lg
                   rounded-xl shadow-2xl
                   max-h-[90vh] overflow-y-auto">

            <!-- HEADER MODAL -->
            <div class="flex items-center justify-between
                        px-5 py-4 border-b border-gray-100
                        sticky top-0 bg-white z-10">

                <div>
                    <h3 class="text-lg font-bold text-gray-800">
                        Detail Pesanan
                    </h3>

                    <p class="text-xs text-gray-400 mt-1">
                        ${escapeHTML(order.id)}
                    </p>
                </div>

                <button
                    type="button"
                    data-close-modal
                    class="w-8 h-8 rounded-lg bg-gray-100
                           text-gray-500 hover:bg-gray-200
                           flex items-center justify-center">

                    <i class="fa-solid fa-xmark"></i>

                </button>

            </div>


            <!-- BODY MODAL -->
            <div class="p-5 space-y-5">

                <!-- STATUS -->
                <div class="flex items-center justify-between">

                    <span class="text-sm text-gray-500">
                        Status Pesanan
                    </span>

                    <span class="px-3 py-1 rounded-full
                                 text-xs font-bold ${badgeStyle}">
                        ${escapeHTML(order.status)}
                    </span>

                </div>


                <!-- INFORMASI PELANGGAN -->
                <div class="bg-gray-50 rounded-lg p-4 space-y-3">

                    <h4 class="text-xs font-bold uppercase
                               tracking-wide text-gray-500">
                        Informasi Pelanggan
                    </h4>

                    <div>
                        <p class="text-xs text-gray-400">
                            Nama Pemesan
                        </p>

                        <p class="text-sm font-semibold text-gray-800">
                            ${escapeHTML(order.customerName)}
                        </p>
                    </div>

                    <div>
                        <p class="text-xs text-gray-400">
                            No. Meja / WhatsApp
                        </p>

                        <p class="text-sm font-semibold text-gray-800">
                            ${escapeHTML(order.customerContact || '-')}
                        </p>
                    </div>

                    <div>
                        <p class="text-xs text-gray-400">
                            Waktu Pemesanan
                        </p>

                        <p class="text-sm font-semibold text-gray-800">
                            ${escapeHTML(order.timestamp)}
                        </p>
                    </div>

                </div>


                <!-- RINCIAN PRODUK -->
                <div>

                    <div class="flex items-center justify-between mb-2">

                        <h4 class="text-xs font-bold uppercase
                                   tracking-wide text-gray-500">
                            Rincian Produk
                        </h4>

                        <span class="text-xs font-semibold text-orange-600">
                            ${totalQuantity} Item
                        </span>

                    </div>

                    <div class="border border-gray-100 rounded-lg px-3">

                        ${itemsHTML || `
                            <p class="text-sm text-gray-400 py-4 text-center">
                                Tidak ada rincian produk.
                            </p>
                        `}

                    </div>

                </div>


                <!-- CATATAN -->
                <div>
                    ${notesHTML}
                </div>


                <!-- TOTAL PEMBAYARAN -->
                <div class="border-t border-gray-200 pt-4">

                    <div class="flex justify-between items-center">

                        <span class="text-sm font-semibold text-gray-600">
                            Total Pembayaran
                        </span>

                        <span class="text-xl font-extrabold text-orange-600">
                            Rp ${formatRupiah(order.total)}
                        </span>

                    </div>

                </div>


                <!-- TOMBOL PENGELOLAAN -->
                <div class="border-t border-gray-100 pt-4">

                    <p class="text-xs font-bold text-gray-500 mb-3">
                        KELOLA STATUS PESANAN
                    </p>

                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">

                        <button
                            type="button"
                            data-status="Diproses"
                            class="py-2.5 rounded-lg bg-orange-50
                                   text-orange-700 text-xs font-bold
                                   hover:bg-orange-100 transition">

                            <i class="fa-solid fa-gear mr-1"></i>
                            Proses

                        </button>

                        <button
                            type="button"
                            data-status="Selesai"
                            class="py-2.5 rounded-lg bg-green-50
                                   text-green-700 text-xs font-bold
                                   hover:bg-green-100 transition">

                            <i class="fa-solid fa-check mr-1"></i>
                            Selesai

                        </button>

                        <button
                            type="button"
                            data-status="Dibatalkan"
                            class="py-2.5 rounded-lg bg-red-50
                                   text-red-600 text-xs font-bold
                                   hover:bg-red-100 transition">

                            <i class="fa-solid fa-xmark mr-1"></i>
                            Batal

                        </button>

                        <button
                            type="button"
                            data-delete-order
                            class="py-2.5 rounded-lg bg-gray-100
                                   text-gray-600 text-xs font-bold
                                   hover:bg-gray-200 transition">

                            <i class="fa-solid fa-trash mr-1"></i>
                            Hapus

                        </button>

                    </div>

                </div>

            </div>

        </div>

    `;

    // Masukkan modal ke halaman
    document.body.appendChild(modal);


    // ==================================
    // EVENT TOMBOL MODAL
    // ==================================

    // Tutup modal
    const closeModal = () => modal.remove();

    modal.querySelector('[data-close-modal]')
        .addEventListener('click', closeModal);

    // Tutup jika klik area luar modal
    modal.addEventListener('click', event => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Tombol update status
    modal.querySelectorAll('[data-status]').forEach(button => {

        button.addEventListener('click', () => {

            const newStatus = button.dataset.status;

            closeModal();

            updateOrderStatus(order.id, newStatus);

        });

    });

    // Tombol hapus pesanan
    modal.querySelector('[data-delete-order]')
        .addEventListener('click', () => {

            closeModal();

            deleteOrder(order.id);

        });

}


function getOrderStatusBadgeStyle(status) {
    switch(status) {
        case 'Menunggu': return 'bg-amber-100 text-amber-800';
        case 'Diproses': return 'bg-orange-100 text-orange-800';
        case 'Selesai': return 'bg-emerald-100 text-emerald-800';
        case 'Dibatalkan': return 'bg-red-100 text-red-800';
        default: return 'bg-slate-100 text-slate-800';
    }
}

function updateOrderStatus(id, newStatus) {
    const order = orders.find(o => o.id === id);
    if (order) {
        order.status = newStatus;
        localStorage.setItem('amaria_orders_v1', JSON.stringify(orders));
        renderAdminOrders();
        updateNavActionBadge();
        showToast(`Status ${id} diubah menjadi "${newStatus}".`, true);
    }
}

function deleteOrder(id) {
    if (confirm(`Hapus riwayat pesanan ${id}?`)) {
        orders = orders.filter(o => o.id !== id);
        localStorage.setItem('amaria_orders_v1', JSON.stringify(orders));
        renderAdminOrders();
        updateNavActionBadge();
        showToast("Pesanan dihapus.", false);
    }
}

function clearAllOrders() {
    if (confirm("Yakin ingin menghapus seluruh riwayat pesanan?")) {
        orders = [];
        localStorage.setItem('amaria_orders_v1', JSON.stringify(orders));
        renderAdminOrders();
        updateNavActionBadge();
        showToast("Semua riwayat pesanan dibersihkan.", false);
    }
}

window.addEventListener('storage', (event) => {
    if (event.key === 'amaria_orders_v1' && event.newValue) {
        syncOrdersFromStorage();
        if (adminMode && !document.getElementById('admin-orders-view').classList.contains('hidden')) {
            renderAdminOrders();
        }
    }
    if (event.key === 'amaria_menu_items' && event.newValue) {
        try {
            menuItems = JSON.parse(event.newValue) || defaultMenu;
            renderMenu(currentFilter);
        } catch (err) { console.error(err); }
    }
});

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (menuBtn && mobileMenu) {
    menuBtn.onclick = () => mobileMenu.classList.toggle('hidden');
}

window.onload = function() {
    updateAdminUIState();
    renderMenu('all');
    updateNavActionBadge();
};

// Variabel sementara untuk menampung string gambar yang diunggah
let uploadedImageBase64 = "";

// Fungsi untuk membaca file dari perangkat dan mengubahnya menjadi Base64
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    // Batasi ukuran file (misal maks 2MB agar localStorage tidak penuh)
    if (file.size > 2 * 1024 * 1024) {
        showToast("Ukuran file terlalu besar! Maksimal 2MB.", false);
        event.target.value = "";
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        uploadedImageBase64 = e.target.result;
        document.getElementById('menu-image').value = uploadedImageBase64;
        document.getElementById('image-preview-tag').src = uploadedImageBase64;
    };
    reader.readAsDataURL(file);
}

// Perbarui fungsi openAddModal
function openAddModal() {
    document.getElementById('modal-title').textContent = "Tambah Menu Baru";
    document.getElementById('edit-menu-id').value = "";
    document.getElementById('menu-name').value = "";
    document.getElementById('menu-price').value = "";
    document.getElementById('menu-image').value = "";
    document.getElementById('menu-image-file').value = "";
    document.getElementById('menu-description').value = "";
    uploadedImageBase64 = "";
    document.getElementById('image-preview-tag').src = "https://placehold.co/400x200/FFEDD5/DC2626?text=Preview";
    document.getElementById('menu-modal').classList.remove('hidden');
}

// Perbarui fungsi openEditModal
function openEditModal(id) {
    const item = menuItems.find(m => m.id === id);
    if (!item) return;
    document.getElementById('modal-title').textContent = "Edit Menu Toko";
    document.getElementById('edit-menu-id').value = item.id;
    document.getElementById('menu-name').value = item.name;
    document.getElementById('menu-category').value = item.category;
    document.getElementById('menu-price').value = item.price;
    document.getElementById('menu-image').value = item.image;
    document.getElementById('menu-image-file').value = ""; // Reset input file
    document.getElementById('menu-description').value = item.description || "";
    
    uploadedImageBase64 = item.image; // Pertahankan gambar lama jika tidak diubah
    document.getElementById('image-preview-tag').src = item.image;
    document.getElementById('menu-modal').classList.remove('hidden');
}

// Perbarui fungsi handleMenuSubmit untuk menggunakan gambar lokal jika ada
function handleMenuSubmit(e) {
    e.preventDefault();
    const id = document.getElementById('edit-menu-id').value;
    const name = document.getElementById('menu-name').value.trim();
    const category = document.getElementById('menu-category').value;
    const price = parseInt(document.getElementById('menu-price').value);
    const description = document.getElementById('menu-description').value.trim();
    
    // Gunakan gambar baru jika diunggah, jika tidak gunakan gambar lama / default
    const image = uploadedImageBase64 || "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80";

    if (id) {
        const item = menuItems.find(m => m.id == id);
        if (item) {
            item.name = name;
            item.category = category;
            item.price = price;
            item.image = image;
            item.description = description;
            showToast(`Menu "${name}" berhasil diperbarui!`, true);
        }
    } else {
        const newItem = { id: Date.now(), name, category, price, image, description };
        menuItems.unshift(newItem);
        showToast(`Menu "${name}" berhasil ditambahkan!`, true);
    }

    localStorage.setItem('amaria_menu_items', JSON.stringify(menuItems));
    closeMenuModal();
    renderMenu(currentFilter);
}