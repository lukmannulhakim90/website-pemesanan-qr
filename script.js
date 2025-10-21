// === DATA MENU LENGKAP KAMU ===
const menuData = {
    'Asian Food': [
        { name: 'Nasi Goreng Special', desc: 'Nasi goreng yang disajikan dengan potongan ayam, telur, acar, dan kerupuk.', price: 38000, image: 'https://i.pinimg.com/736x/4d/89/4a/4d894ae7d925293f90b3aa7e5b3a316c.jpg' },
        { name: 'Mie Goreng Special', desc: 'Mie goreng yang disajikan dengan potongan ayam, acar, dan kerupuk.', price: 35000, image: 'https://i.pinimg.com/736x/74/e6/66/74e66635b6386750a1153937bbacc3ad.jpg' },
        { name: 'Nasi Capcay', desc: 'Nasi dengan campuran sayuran dengan ayam dan jamur yang dipadukan kuah kaldu.', price: 38000, image: 'https://i.pinimg.com/736x/78/ca/6a/78ca6a2716fe012b94469e8cc2f84eab.jpg' },
        { name: 'Ebi Furai Kari Rice', desc: 'Daging udang dibalut dengan tepung tempura dipadukan dengan kuah kari.', price: 40000, image: 'https://i.pinimg.com/736x/90/8e/20/908e20fb3d1014f55521154baa094541.jpg' },
        { name: 'Ebi Furai Barbeque Rice', desc: 'Daging udang dibalut dengan tepung tempura dipadukan dengan saus barbeque.', price: 40000, image: 'https://i.pinimg.com/1200x/a8/72/dd/a872dd13be46efe2d771f4b152d6a9ba.jpg' },
        { name: 'Chicken Katsu Barbeque Rice', desc: 'Daging ayam yang dibalut tepung roti dengan saus barbeque.', price: 38000, image: 'https://i.pinimg.com/736x/10/e0/6a/10e06a107d725238b453bb4af71c8b60.jpg' },
        { name: 'Chicken Katsu Kari Rice', desc: 'Daging ayam yang dibalut tepung roti dengan kuah kari.', price: 38000, image: 'https://i.pinimg.com/736x/c6/ce/ed/c6ceed0c556d5a296e7c8eb75dca6d4d.jpg' },
        { name: 'Dorry Curry Rice', desc: 'Daging ikan dori dibalut dengan tepung tempura yang dipadukan dengan saus kari.', price: 40000, image: 'https://i.pinimg.com/736x/0e/98/d3/0e98d32285fcc3bdbea7cc7b8eccc182.jpg' },
        { name: 'Chicken Qualey', desc: 'Daging ayam dengan balutan tepung maizena gurih dan potongan paprika.', price: 38000, image: 'https://i.pinimg.com/736x/95/5d/fc/955dfc693a1c79f0cfad83efdf3dc6f7.jpg' },
        { name: 'Chicken Sambal Jeruk', desc: 'Perpaduan potongan daging ayam dengan sambal jeruk yang pedas dan segar.', price: 38000, image: 'https://i.pinimg.com/736x/b4/2d/71/b42d7179b72fedbc1668e272e423f976.jpg' }
    ],
    'Western Food': [
        { name: 'Spaghetti (Carbonara)', desc: 'Spaghetti dengan saus carbonara yang terbuat dari kuning telur, keju, dan susu.', price: 38000, image: 'https://i.pinimg.com/736x/6c/b5/d8/6cb5d86b51a6a8944c0e69f9773f0474.jpg' },
        { name: 'Spaghetti (Bolognese)', desc: 'Spaghetti dengan saus bolognese dari saus tomat, daging giling, dan keju.', price: 38000, image: 'https://i.pinimg.com/1200x/df/6f/76/df6f76a785a000a1cb95387cbfd2d39d.jpg' },
        { name: 'Chicken Fajitas', desc: 'Daging ayam dengan paprika dan bawang bombay disajikan dengan nasi.', price: 41000, image: 'https://i.pinimg.com/1200x/f3/5e/af/f35eaf1acd209e25dbb0a237c3f8096a.jpg' },
        { name: 'Fish n Chips', desc: 'Ikan dori tepung ditambah dengan irisan lemon, saus tartar, dan kentang goreng.', price: 45000, image: 'https://i.pinimg.com/1200x/b3/c4/65/b3c46586ed5976e876670a5bdb831897.jpg' }
    ],
    'Special Korean': [
        { name: 'Toppoki', desc: 'Tepung beras yang dimasak dalam bumbu khas korea yang pedas dan manis.', price: 35000, image: 'https://i.pinimg.com/736x/a6/de/ca/a6deca9db04c189b10ceef3f31b8acbe.jpg' },
        { name: 'Chicken Buldak', desc: 'Ayam karage krispi dengan bumbu pedas khas korea dan taburan biji wijen.', price: 39000, image: 'https://i.pinimg.com/736x/67/d7/ab/67d7ab55bf9770f35caae6ba03218daf.jpg' }
    ],
    'Salad Series': [
        { name: 'Caesar Salad', desc: 'Selada segar, roti panggang, keju parmesan, dengan dressing caesar.', price: 39000, image: 'https://i.pinimg.com/1200x/00/38/9d/00389ddab812fdc051465e0d21b83ee8.jpg' },
        { name: 'Chicken Salad Sandwich', desc: 'Salad ayam dengan roti, sayuran segar, dan disajikan dengan kentang goreng.', price: 40000, image: 'https://i.pinimg.com/1200x/14/67/86/146786a49adc5509ad11f88d3e76c504.jpg' }
    ],
    'Snacks': [
        { name: 'French Fries (Original)', desc: 'Kentang goreng original dengan seasoning lada dan garam.', price: 29000, image: 'https://i.pinimg.com/736x/a3/a3/53/a3a3537e15eb6a15ccf7c82f45056aec.jpg' },
        { name: 'French Fries (Balado)', desc: 'Kentang goreng dengan tambahan bumbu balado.', price: 29000, image: 'https://i.pinimg.com/1200x/c7/76/c5/c776c57b7de8a82f2c9c5b067e3f677f.jpg' },
        { name: 'French Fries (Barbeque)', desc: 'Kentang goreng dengan tambahan bumbu barbeque.', price: 29000, image: 'https://i.pinimg.com/736x/da/9e/5d/da9e5d60c95860816a2af779412efa67.jpg' },
        { name: 'Singkong Original', desc: 'Singkong goreng gurih original dipadukan dengan saos Bangkok.', price: 27000, image: 'https://i.pinimg.com/736x/0b/45/48/0b4548aaf6d0981b50fc1caf1d9260d3.jpg' },
        { name: 'Singkong Keju Susu', desc: 'Singkong goreng gurih dengan tambahan keju dan susu yang manis.', price: 29000, image: 'https://i.pinimg.com/1200x/5b/83/d2/5b83d270a9af1dc90921c934753877ea.jpg' },
        { name: 'Singkong Keju Balado Susu', desc: 'Singkong goreng dengan kombinasi keju, susu manis dan bumbu balado.', price: 29000, image: 'https://i.pinimg.com/736x/7c/b3/a0/7cb3a08f9a061a4c6f5fe740579f5fc4.jpg' },
        { name: 'Pisang Goreng Original', desc: 'Pisang goreng original dengan balutan tepung pisang vanilla.', price: 27000, image: 'https://i.pinimg.com/736x/52/f0/57/52f0579e1abf9e82bf88a2327eff6f45.jpg' },
        { name: 'Roti Bakar (Crunchy)', desc: 'Roti bakar dengan isian choco crunchy.', price: 27000, image: 'https://i.pinimg.com/736x/9e/96/69/9e96691a071bbe84dff2018ab7465ee6.jpg' },
        { name: 'Roti Bakar (Keju)', desc: 'Roti bakar dengan isian keju.', price: 27000, image: 'https://i.pinimg.com/1200x/35/0f/21/350f214aa3ecc24d08645998b31ce794.jpg' },
        { name: 'Roti Bakar (Mix)', desc: 'Roti bakar dengan isian choco crunchy dan keju.', price: 30000, image: 'https://i.pinimg.com/736x/c2/e9/ee/c2e9eee2fbc6a618bb6741efabbe0821.jpg' },
        { name: 'Nachos (Original)', desc: 'Tortilla crispy dengan dressing sauce guacamole dan salsa yg segar.', price: 29000, image: 'https://i.pinimg.com/1200x/4c/2c/11/4c2c11968121e19ab4c56b65950988b0.jpg' },
        { name: 'Nachos (Grande)', desc: 'Tortilla crispy dengan daging sapi serta dressing guacamole dan salsa.', price: 41000, image: 'https://i.pinimg.com/1200x/d8/81/43/d88143ba84fdd5a27878cbcc32538036.jpg' },
        { name: 'Nachos (Cheese)', desc: 'Tortilla crispy yang disiram dengan keju melted, serta dressing guacamole.', price: 39000, image: 'https://i.pinimg.com/1200x/66/dd/9b/66dd9b63d8c7ac489f36afbaf3cb30d2.jpg' },
        { name: 'Chicken Wonton', desc: 'Daging cincang dibungkus lembaran tepung terigu dan dipadukan dengan saos Bangkok.', price: 35000, image: 'https://i.pinimg.com/1200x/1c/0d/40/1c0d4095ecdf58c5980f87c0b1ecd307.jpg' },
        { name: 'Chimichangas', desc: 'Kebab goreng dengan isian keju dan jalapenos serta tambahan guacamole.', price: 36000, image: 'https://i.pinimg.com/1200x/1b/26/a2/1b/26/a2/1b26a2f2d221f6df54fa5a36ab0b2152.jpg' },
        { name: 'Taco', desc: 'Kulit tortila berisi sayuran, daging, dan saus.', price: 35000, image: 'https://i.pinimg.com/736x/d7/55/38/d7553870b67a17e5a8eccc91ad3eeedb.jpg' },
        { name: 'Quesadillas (Chicken)', desc: 'Tortilla panggang dengan isian daging ayam, jalapenos, dan guacamole.', price: 40000, image: 'https://i.pinimg.com/736x/9a/ce/9d/9ace9d1db3ad897f8985048bc8d8d38f.jpg' },
        { name: 'Quesadillas (Cheese)', desc: 'Tortilla panggang dengan isian keju, jalapenos, dan guacamole.', price: 35000, image: 'https://i.pinimg.com/736x/9b/3d/64/9b3d640398f72e1397d373c2f931fef6.jpg' },
        { name: 'Onion Ring', desc: 'Bawang Bombay iris yang dibalut tepung bumbu dan digoreng.', price: 25000, image: 'https://i.pinimg.com/1200x/64/1f/e3/641fe39f462c4cc035a3fd9a908ff3f2.jpg' },
        { name: 'Combo Platter A', desc: 'Gabungan French Fries, Onion Ring dan Sosis.', price: 40000, image: 'https://i.pinimg.com/736x/e5/c8/b6/e5c8b65f270104bce687680ae840ec17.jpg' },
        { name: 'Combo Platter B', desc: 'Gabungan Nachos Ori, Onion Ring dan Sosis.', price: 37000, image: 'https://i.pinimg.com/1200x/20/59/91/20599139611a37b2a9a5a8f84f8a953c.jpg' }
    ],
    'Signature Bar': [
        { name: 'Es Kopiluvium', desc: 'Kopi khas kopiluvium dengan perpaduan susu dan gula aren.', price: 28000, image: 'https://i.pinimg.com/736x/a7/83/b4/a783b44845585a83cc800c60adea81a5.jpg' },
        { name: 'Es Kopiluvium Strong', desc: 'Kopi khas kopiluvium dengan perpaduan susu dan gula aren.', price: 33000, image: 'https://i.pinimg.com/736x/a7/83/b4/a783b44845585a83cc800c60adea81a5.jpg' },
        { name: 'Milkshake Regal', desc: 'Milkshake dengan biskuit regal.', price: 31000, image: 'https://i.pinimg.com/736x/d5/71/7f/d5717fd723ced649bc8cfed2209ef9f0.jpg' },
        { name: 'Es Klepon Latte', desc: 'Kue klepon dalam bentuk minuman.', price: 31000, image: 'https://i.pinimg.com/736x/fb/51/9d/fb519da9b4f75936f6c6f78bcaa4677e.jpg' },
        { name: 'Berry Fresh Coffee', desc: 'Kopi dengan paduan strawberry, wild mint, vanilla, sirup lemon serta soda.', price: 31000, image: 'https://i.pinimg.com/1200x/ad/d0/08/add008e0863824e5726ae79df45a2c94.jpg' }
    ],
    'Coffee Bar': [
        { name: 'Cafe Latte', desc: 'Kopi susu tanpa gula.', price: 31000, image: 'https://i.pinimg.com/736x/c0/90/db/c090db7eebad10357a2b38b9476e9787.jpg' },
        { name: 'Caramel Latte', desc: 'Kopi susu dengan tambahan sirup caramel.', price: 31000, image: 'https://i.pinimg.com/1200x/29/f0/a8/29f0/a8/29f0a835def0b6cb4a8337e468b31830.jpg' },
        { name: 'Hazelnut Latte', desc: 'Kopi susu dengan tambahan sirup hazelnut.', price: 31000, image: 'https://i.pinimg.com/736x/70/19/e4/7019e4b3fbe9c54a6cc83bc915068f42.jpg' },
        { name: 'Vanilla Latte', desc: 'Kopi susu dengan tambahan sirup vanilla.', price: 31000, image: 'https://i.pinimg.com/1200x/dc/73/eb/dc73eb13611273c05ca0180eeb6088e5.jpg' },        
        { name: 'Moccacino', desc: 'Kopi susu dengan perpaduan rasa coklat di dalamnya.', price: 31000, image: 'https://i.pinimg.com/1200x/54/ff/5a/54ff5a9b09242792def2de1b44c2a2e3.jpg' },
    ],
    'Milk Bar': [
        { name: 'Red Velvet Latte', desc: 'Minuman berbahan dasar susu dengan rasa kue red velvet.', price: 31000, image: 'https://i.pinimg.com/736x/c1/9a/57/c19a570d7eca9395550df63575085a22.jpg' },
        { name: 'Matcha Latte', desc: 'Minuman berbahan dasar susu dengan teh hijau.', price: 31000, image: 'https://i.pinimg.com/736x/21/83/7c/21837cee4f17590bca8709b5214fe4b8.jpg' },
        { name: 'Taro Latte', desc: 'Minuman berbahan dasar susu dengan rasa taro/talas.', price: 31000, image: 'https://i.pinimg.com/736x/98/3d/f8/983df8b8150644dce1f12b71bf99be87.jpg' },
        { name: 'Choco Latte', desc: 'Minuman berbahan dasar susu dengan rasa coklat premium.', price: 31000, image: 'https://i.pinimg.com/1200x/09/df/5d/09df5d1d08b4d67a50457cb593c20cf7.jpg' },
    ],
    'Yakult Bar': [
        { name: 'Lychee Yakult', desc: 'Minuman yakult dipadukan dengan susu dan perasa leci.', price: 30000, image: 'https://i.pinimg.com/1200x/69/52/f6/6952f6bf4e171418ec4934fced184a59.jpg' },
        { name: 'Mango Yakult', desc: 'Minuman yakult dipadukan dengan susu dan perasa mangga.', price: 30000, image: 'https://i.pinimg.com/1200x/0f/1d/43/0f1d431dd0d5893039354f2e779e3401.jpg' },
        { name: 'Strawberry Yakult', desc: 'Minuman yakult dipadukan dengan susu dan perasa stroberi.', price: 30000, image: 'https://i.pinimg.com/1200x/0f/30/95/0f/30/9596a2ab16fbfb9f5ed2f77700c8.jpg' },
    ],
    'Manual Brew': [
        { name: 'V60', desc: 'Seduhan manual dari line up beans single origin.', price: 35000, image: 'https://i.pinimg.com/736x/47/56/ef/4756ef3b50dbc8539d5228bdbf985dc0.jpg' },
        { name: 'Japanese', desc: 'Seduhan manual dengan menggunakan es.', price: 35000, image: 'https://i.pinimg.com/736x/19/58/88/195888819498d204eb0619c6eda8bd7b.jpg' }
    ],
    'Mocktail Bar': [
        { name: 'Virgin Mojito', desc: 'Minuman soda dengan paduan lemon, peach, dan mint.', price: 31000, image: 'https://i.pinimg.com/736x/d9/81/40/d981406aaae9ef4c994feed6b042e4c5.jpg' },
        { name: 'Everyday Mood', desc: 'Minuman soda dengan paduan cranberry, jahe, dan peach.', price: 31000, image: 'https://i.pinimg.com/1200x/e7/67/6e/e7676e3166b0d6429920df6e5bf78e12.jpg' },
        { name: 'Punch X', desc: 'Minuman soda dengan cranberry jus, sirup jahe, sirup calamansi, dan mint.', price: 31000, image: 'https://i.pinimg.com/1200x/3a/d4/22/3ad422d2c0a777081f222e98f4dd4c58.jpg' },
    ],
    'Tea Bar': [
        { name: 'Lychee Tea', desc: 'Teh dengan perpaduan buah leci.', price: 29000, image: 'https://i.pinimg.com/736x/d6/ec/73/d6ec73b1deb6385c2b78ff1f61d5843f.jpg' },
        { name: 'Lemon Tea', desc: 'Teh dengan perpaduan buah lemon.', price: 25000, image: 'https://i.pinimg.com/736x/7a/7e/d0/7a7ed0b4e43809c4ae44f9c630a6d24d.jpg' },
    ],
    'Juicy Series': [
        { name: 'Banana Smoothies', desc: 'Paduan pisang segar, susu UHT, Oats dan youghurt yang menyegarkan.', price: 35000, image: 'https://i.pinimg.com/1200x/d1/d6/c3/d1d6c3206c4f0011c907aef078918ee1.jpg' },
        { name: 'Avocado Juice', desc: 'Jus buah alpukat creamy dengan campuran susu kental manis dan gula.', price: 35000, image: 'https://i.pinimg.com/736x/45/58/4f/45584fc3f3753fc8c74dbb4fc66452e7.jpg' },
        { name: 'Coconut Tropic', desc: 'Paduan air kelapa segar dicampur dengan saritan gurih dan oats.', price: 35000, image: 'https://i.pinimg.com/736x/61/6d/44/616d44ae20ea2eb2df4b81b7cae0637b.jpg' },
        { name: 'Passionate Ale', desc: 'Minuman infused juice dengan paduan buah apel, markisa dan sirup jahe.', price: 35000, image: 'https://i.pinimg.com/1200x/ea/8c/f3/ea8cf3d126c334caf0fa0d090380e6bc.jpg' }
    ],
    'Dessert': [
        { name: 'Ice Cream Original', desc: 'Es krim vanilla original tanpa topping.', price: 18000, image: 'https://i.pinimg.com/1200x/5e/aa/eb/5eaaeb991b5c03e7c008bb26299a2679.jpg' },
        { name: 'Ice Cream Strawberry Coco', desc: 'Es krim vanilla dengan sirup strawberry dan topping coklat bubuk.', price: 25000, image: 'https://i.pinimg.com/736x/f7/f2/12/f7f2121c11249cdb7e77dcf4941b59c9.jpg' },
        { name: 'Ice Cream Oreo', desc: 'Es krim vanilla dengan tambahan topping coklat bubuk.', price: 25000, image: 'https://i.pinimg.com/1200x/03/a1/0e/03a10e2236b7aafc8d62db8aa94555ed.jpg' },
        { name: 'Ice Cream Regal', desc: 'Es krim vanilla dengan tambahan topping biskuit regal.', price: 25000, image: 'https://i.pinimg.com/1200x/73/af/83/73af83856cc34b7ac20f7b2653528f02.jpg' }
    ],
    'Other': [
        { name: 'Air Mineral', desc: 'Air mineral kemasan.', price: 10000, image: 'https://i.pinimg.com/736x/c2/fc/94/c2fc94b52010bc1c50bf3c9dcc971511.jpg' }
    ],
    'Extras': [
        { name: 'Add on simple syrup', desc: 'Tambahan simple syrup.', price: 5000, image: 'https://i.pinimg.com/736x/e5/3c/bc/e53cbcc355e333dd9ec468133735a4b3.jpg' },
        { name: 'Add on espresso', desc: 'Tambahan espresso.', price: 5000, image: 'https://i.pinimg.com/1200x/f9/6d/c0/f96dc0b38102d567a0b0abf872da86e9.jpg' },
        { name: 'Add on ice cream', desc: 'Tambahan es krim.', price: 10000, image: 'https://i.pinimg.com/1200x/59/f5/9a/59f59a878a4dfad58875d1e9899b4820.jpg' }
    ]
};

// Cart data
let cart = [];

// === FUNGSI BARU: Notifikasi Toast (Lebih Keren dari Alert) ===
function showToast(message) {
    const toast = document.getElementById('toast-notification');
    toast.textContent = message;
    toast.className = 'show'; // Tambah kelas 'show'
    
    // Sembunyikan setelah 3 detik
    setTimeout(() => {
        toast.className = toast.className.replace('show', '');
    }, 3000);
}

// Fungsi untuk menampilkan daftar kategori
function renderCategories() {
    const menuContainer = document.getElementById('menu-content');
    menuContainer.innerHTML = ''; // Kosongkan dulu

    const categoryGrid = document.createElement('div');
    categoryGrid.className = 'category-grid';

    for (const categoryName of Object.keys(menuData)) {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `<h2>${categoryName}</h2>`;
        card.onclick = () => renderMenuItems(categoryName); 
        categoryGrid.appendChild(card);
    }
    menuContainer.appendChild(categoryGrid);
}

// Fungsi untuk menampilkan item dari kategori yang dipilih
function renderMenuItems(categoryName) {
    const menuContainer = document.getElementById('menu-content');
    menuContainer.innerHTML = ''; // Kosongkan lagi

    const items = menuData[categoryName];
    
    // Buat header dengan nama kategori dan tombol kembali
    const headerDiv = document.createElement('div');
    headerDiv.className = 'item-list-header';
    headerDiv.innerHTML = `
        <h2>${categoryName}</h2>
        <button class="btn" onclick="renderCategories()">⬅️ Kembali ke Kategori</button>
    `;
    menuContainer.appendChild(headerDiv);

    const menuItemsDiv = document.createElement('div');
    menuItemsDiv.className = 'menu-items';

    items.forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.className = 'menu-item';
        
        // Desain Kartu Menu Baru
        menuItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
            <div class="item-info">
                <div class="item-name">${item.name}</div>
                <div class="item-desc">${item.desc}</div>
                <div class="item-price">Rp ${item.price.toLocaleString('id-ID')}</div>
                <button class="add-btn" onclick="addToCart(event, { name: '${item.name}', price: ${item.price} })">Tambah</button>
            </div>
        `;
        
        // Menambahkan event listener ke tombol 'Tambah'
        // Kita perlu `event.stopPropagation()` agar mengklik tombol tidak memicu event lain
        const addButton = menuItemDiv.querySelector('.add-btn');
        addButton.onclick = (event) => {
            event.stopPropagation();
            addToCart(item);
        };

        menuItemsDiv.appendChild(menuItemDiv);
    });
    menuContainer.appendChild(menuItemsDiv);
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    showSection('menu');
});

// Show specific section
function showSection(sectionId) {
    document.querySelectorAll('main > .container > section').forEach(section => {
        section.style.display = 'none';
    });

    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
    
    if (sectionId === 'menu') {
        document.querySelector('#menu .hero').style.display = 'block';
        renderCategories(); // Selalu mulai dari kategori
    } else {
        document.querySelector('#menu .hero').style.display = 'none';
    }
    
    // Scroll ke atas
    window.scrollTo(0, 0);
}

// Add item to cart
function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    updateCartCount();
    // GANTI ALERT DENGAN TOAST
    showToast(`${item.name} ditambahkan!`);
}

// Update cart count in header
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItems;
}

// Show cart modal
function showCart() {
    const cartModal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Keranjang masih kosong</p>';
        cartTotal.textContent = 'Total: Rp 0';
    } else {
        let total = 0;
        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'cart-item';
            
            cartItemDiv.innerHTML = `
                <div>
                    <div><strong>${item.name}</strong></div>
                    <div>Rp ${item.price.toLocaleString('id-ID')} x ${item.quantity}</div>
                    <div>Subtotal: Rp ${itemTotal.toLocaleString('id-ID')}</div>
                </div>
            `;
            
            const removeButton = document.createElement('button');
            removeButton.className = 'remove-btn';
            removeButton.textContent = '×';
            removeButton.onclick = () => removeFromCart(index);
            
            cartItemDiv.appendChild(removeButton);
            cartItems.appendChild(cartItemDiv);
        });
        cartTotal.textContent = `Total: Rp ${total.toLocaleString('id-ID')}`;
    }
    
    // MODIFIKASI: Gunakan classList untuk transisi fade-in
    cartModal.classList.add('show');
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    showCart(); // Refresh cart view
}

// Close cart modal
function closeCart() {
    // MODIFIKASI: Gunakan classList untuk transisi fade-out
    document.getElementById('cartModal').classList.remove('show');
}

// Show checkout section
function showCheckout() {
    if (cart.length === 0) {
        showToast('Keranjang masih kosong!');
        return;
    }
    closeCart();
    showSection('checkout');
    
    const orderSummary = document.getElementById('orderSummary');
    const checkoutTotal = document.getElementById('checkoutTotal');
    
    orderSummary.innerHTML = '<h3>Rincian Pesanan:</h3>';
    
    let total = 0;
    const orderList = document.createElement('ul');
    orderList.style.cssText = 'list-style-position: inside; padding-left: 0; margin-bottom: 1rem;';
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} (${item.quantity}x) - Rp ${itemTotal.toLocaleString('id-ID')}`;
        orderList.appendChild(listItem);
    });
    
    orderSummary.appendChild(orderList);
    checkoutTotal.textContent = `Total: Rp ${total.toLocaleString('id-ID')}`;
}

// Confirm order
function confirmOrder() {
    const customerName = document.getElementById('customerName').value;
    // PERBAIKAN: Menghapus 't' yang typo dari kode aslimu
    const tableNumber = document.getElementById('tableNumber').value;
    
    if (!customerName || !tableNumber) {
        alert('Harap isi nama pelanggan dan nomor meja!');
        return;
    }
    
    if (cart.length === 0) {
        alert('Keranjang masih kosong!');
        return;
    }
    
    document.getElementById('successMsg').style.display = 'block';
    
    // Kosongkan keranjang
    cart = [];
    updateCartCount();
    
    // Reset form
    document.getElementById('customerName').value = '';
    document.getElementById('tableNumber').value = '';
    
    // Kembali ke menu setelah 3 detik
    setTimeout(() => {
        document.getElementById('successMsg').style.display = 'none';
        showSection('menu');
    }, 3000);
}