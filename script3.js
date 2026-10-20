// Prices are placeholders: edit the "p" value for any product.
const PRODUCTS = [
  {"n": "Aashirvaad Iodized Salt", "p": 28, "c": "Sugar & Salt", "i": "aashirvaad_iodized_salt.png"},
  {"n": "Ariel Complete Plus", "p": 220, "c": "Household Care", "i": "ariel_complete_plus.png"},
  {"n": "Bingo Cheese Nachos", "p": 30, "c": "Biscuits & Snacks", "i": "bingo_cheese_nachos.png"},
  {"n": "Bingo Hashtags Spicy Masala", "p": 30, "c": "Biscuits & Snacks", "i": "bingo_hashtags_spicy_masala.png"},
  {"n": "Bingo Korean Style Hot Spicy", "p": 30, "c": "Biscuits & Snacks", "i": "bingo_korean_style_hot_spicy.png"},
  {"n": "Bingo Mad Angles", "p": 30, "c": "Biscuits & Snacks", "i": "bingo_mad_angles.png"},
  {"n": "Bingo Original Style Chilli", "p": 30, "c": "Biscuits & Snacks", "i": "bingo_original_style_chilli.png"},
  {"n": "Bingo Tedhe Medhe Masala Tadka", "p": 30, "c": "Biscuits & Snacks", "i": "bingo_tedhe_medhe_masala_tadka.png"},
  {"n": "Bingo Tedhe Medhe Mast Masala Tadka", "p": 30, "c": "Biscuits & Snacks", "i": "bingo_tedhe_medhe_mast_masala_tadka.png"},
  {"n": "Bounty", "p": 40, "c": "Biscuits & Snacks", "i": "bounty.png"},
  {"n": "Britannia Good Day Butter Cookies", "p": 30, "c": "Biscuits & Snacks", "i": "britannia_good_day_butter_cookies.png"},
  {"n": "Brooke Bond 3 Roses Natural Care", "p": 110, "c": "Tea & Coffee", "i": "brooke_bond_3_roses_natural_care.png"},
  {"n": "Brooke Bond Red Label", "p": 95, "c": "Tea & Coffee", "i": "brooke_bond_red_label.png"},
  {"n": "Brooke Bond Taj Mahal", "p": 160, "c": "Tea & Coffee", "i": "brooke_bond_taj_mahal.png"},
  {"n": "Cadbury Dairy Milk", "p": 20, "c": "Biscuits & Snacks", "i": "cadbury_dairy_milk.png"},
  {"n": "Cadbury Dairy Milk Silk", "p": 85, "c": "Biscuits & Snacks", "i": "cadbury_dairy_milk_silk.png"},
  {"n": "Cadbury Oreo Original", "p": 40, "c": "Biscuits & Snacks", "i": "cadbury_oreo_original.png"},
  {"n": "Campa Cola", "p": 40, "c": "Beverages", "i": "campa_cola.png"},
  {"n": "Cinthol Lime Soap", "p": 55, "c": "Personal Care", "i": "cinthol_lime_soap.png"},
  {"n": "Closeup Everfresh Toothpaste", "p": 70, "c": "Personal Care", "i": "closeup_everfresh_toothpaste.png"},
  {"n": "Coca Cola", "p": 40, "c": "Beverages", "i": "coca_cola.png"},
  {"n": "Colgate MaxFresh Toothpaste", "p": 95, "c": "Personal Care", "i": "colgate_maxfresh_toothpaste.png"},
  {"n": "Colgate Strong Teeth Toothpaste", "p": 60, "c": "Personal Care", "i": "colgate_strong_teeth_toothpaste.png"},
  {"n": "Colgate ZigZag Charcoal Toothbrush", "p": 45, "c": "Personal Care", "i": "colgate_zigzag_charcoal_toothbrush.png"},
  {"n": "Colgate ZigZag Deep Clean Toothbrush", "p": 45, "c": "Personal Care", "i": "colgate_zigzag_deep_clean_toothbrush.png"},
  {"n": "Dabur Red Toothpaste", "p": 95, "c": "Personal Care", "i": "dabur_red_toothpaste.png"},
  {"n": "Dark Fantasy Desserts Choco Chunks", "p": 30, "c": "Biscuits & Snacks", "i": "dark_fantasy_desserts_choco_chunks.png"},
  {"n": "Dark Fantasy Desserts Choco Nut Dipped", "p": 30, "c": "Biscuits & Snacks", "i": "dark_fantasy_desserts_choco_nut_dipped.png"},
  {"n": "Dark Fantasy Sandwich Creme Chocolate", "p": 30, "c": "Biscuits & Snacks", "i": "dark_fantasy_sandwich_creme_chocolate.png"},
  {"n": "Dark Fantasy Sandwich Creme Vanilla", "p": 30, "c": "Biscuits & Snacks", "i": "dark_fantasy_sandwich_creme_vanilla.png"},
  {"n": "Dove Cream Beauty Bar", "p": 65, "c": "Personal Care", "i": "dove_cream_beauty_bar.png"},
  {"n": "Dove Intense Repair Shampoo", "p": 180, "c": "Personal Care", "i": "dove_intense_repair_shampoo.png"},
  {"n": "Fogg Paradise Body Spray", "p": 199, "c": "Personal Care", "i": "fogg_paradise_body_spray.png"},
  {"n": "Garlic", "p": 60, "c": "Fresh Produce", "i": "garlic.png"},
  {"n": "Groundnuts", "p": 110, "c": "Rice & Grains", "i": "groundnuts.png"},
  {"n": "Hauser XO Pens", "p": 50, "c": "Household Care", "i": "hauser_xo_pens.png"},
  {"n": "Head & Shoulders Classic Clean", "p": 120, "c": "Personal Care", "i": "head_and_shoulders_classic_clean.png"},
  {"n": "Head & Shoulders Cool Menthol", "p": 120, "c": "Personal Care", "i": "head_and_shoulders_cool_menthol.png"},
  {"n": "KitKat 2 Finger", "p": 20, "c": "Biscuits & Snacks", "i": "kitkat_2_finger.png"},
  {"n": "KitKat 4 Finger", "p": 45, "c": "Biscuits & Snacks", "i": "kitkat_4_finger.png"},
  {"n": "Lays American Style Cream Onion", "p": 20, "c": "Biscuits & Snacks", "i": "lays_american_style_cream_onion.png"},
  {"n": "Lotte Choco Pie", "p": 30, "c": "Biscuits & Snacks", "i": "lotte_choco_pie.png"},
  {"n": "Minute Maid Pulpy Orange", "p": 40, "c": "Beverages", "i": "minute_maid_pulpy_orange.png"},
  {"n": "Mysore Sandal Soap", "p": 40, "c": "Personal Care", "i": "mysore_sandal_soap.png"},
  {"n": "Nature Power Papaya Aura Soap", "p": 55, "c": "Personal Care", "i": "nature_power_papaya_aura_soap.png"},
  {"n": "Pantene Lively Clean", "p": 99, "c": "Personal Care", "i": "pantene_lively_clean.png"},
  {"n": "Parle Hide and Seek Almonds", "p": 30, "c": "Biscuits & Snacks", "i": "parle_hide_and_seek_almonds.png"},
  {"n": "Parle Hide and Seek Choco Chip", "p": 30, "c": "Biscuits & Snacks", "i": "parle_hide_and_seek_choco_chip.png"},
  {"n": "Parrys White Label Sugar", "p": 52, "c": "Sugar & Salt", "i": "parrys_white_label_sugar.png"},
  {"n": "Pears Original Glycerin Soap", "p": 55, "c": "Personal Care", "i": "pears_original_glycerin_soap.png"},
  {"n": "Quaker Oats", "p": 180, "c": "Rice & Grains", "i": "quaker_oats.png"},
  {"n": "Quest Hard Toothbrush", "p": 35, "c": "Personal Care", "i": "quest_hard_toothbrush.png"},
  {"n": "Santoor Fresh Skin Soap", "p": 40, "c": "Personal Care", "i": "santoor_fresh_skin_soap.png"},
  {"n": "Santoor Sandal Turmeric Soap", "p": 40, "c": "Personal Care", "i": "santoor_sandal_turmeric_soap.png"},
  {"n": "Sensodyne Fresh Gel Toothpaste", "p": 110, "c": "Personal Care", "i": "sensodyne_fresh_gel_toothpaste.png"},
  {"n": "Sensodyne Sensitive Toothbrush", "p": 99, "c": "Personal Care", "i": "sensodyne_sensitive_toothbrush.png"},
  {"n": "Small Red Onions", "p": 45, "c": "Fresh Produce", "i": "small_red_onions.png"},
  {"n": "Snickers", "p": 50, "c": "Biscuits & Snacks", "i": "snickers.png"},
  {"n": "Sunfeast Dark Fantasy Choco Fills", "p": 30, "c": "Biscuits & Snacks", "i": "sunfeast_dark_fantasy_choco_fills.png"},
  {"n": "Sunfeast Dark Fantasy Yumfills Pie", "p": 30, "c": "Biscuits & Snacks", "i": "sunfeast_dark_fantasy_yumfills_pie.png"},
  {"n": "Sunsilk Stunning Black Shine", "p": 99, "c": "Personal Care", "i": "sunsilk_stunning_black_shine.png"},
  {"n": "Tata Salt", "p": 28, "c": "Sugar & Salt", "i": "tata_salt.png"},
  {"n": "Tata Tea Chakra Gold Elaichi", "p": 130, "c": "Tea & Coffee", "i": "tata_tea_chakra_gold_elaichi.png"},
  {"n": "Tata Tea Chakra Gold Gemini", "p": 125, "c": "Tea & Coffee", "i": "tata_tea_chakra_gold_gemini.png"},
  {"n": "Thums Up 750ml", "p": 45, "c": "Beverages", "i": "thums_up_750ml.png"},
  {"n": "Thums Up Large Bottle", "p": 95, "c": "Beverages", "i": "thums_up_large_bottle.png"},
  {"n": "Toor Dal", "p": 160, "c": "Rice & Grains", "i": "toor_dal.png"},
  {"n": "Unibic Assorted Cookies", "p": 30, "c": "Biscuits & Snacks", "i": "unibic_assorted_cookies.png"},
  {"n": "Unibic Butter Cookies", "p": 30, "c": "Biscuits & Snacks", "i": "unibic_butter_cookies.png"},
  {"n": "Unibic Choco Chip Cookies", "p": 30, "c": "Biscuits & Snacks", "i": "unibic_choco_chip_cookies.png"},
  {"n": "Unibic Fruit Nut Cookies", "p": 30, "c": "Biscuits & Snacks", "i": "unibic_fruit_nut_cookies.png"}
];
const ICONS = {"All Products":"▦","Cooking Oil":"🛢️","Rice & Grains":"🌾","Sugar & Salt":"🧂","Flour & Spices":"🌶️","Beverages":"🥤","Tea & Coffee":"☕","Biscuits & Snacks":"🍟","Household Care":"🧽","Personal Care":"🧼","Fresh Produce":"🥬"};
const ORDER = ["Cooking Oil","Rice & Grains","Sugar & Salt","Flour & Spices","Beverages","Tea & Coffee","Biscuits & Snacks","Household Care","Personal Care","Fresh Produce"];

let cat = "All Products", cart = [], isSignup = false;
const $ = id => document.getElementById(id);

function renderCats() {
  const present = ORDER.filter(c => PRODUCTS.some(p => p.c === c));
  $("cats").innerHTML = "";
  ["All Products", ...present].forEach(c => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "cat" + (c === cat ? " active" : "");
    b.innerHTML = '<span class="em">' + ICONS[c] + '</span><span></span>';
    b.lastChild.textContent = c;
    b.onclick = () => { cat = c; renderCats(); render(); $("list").scrollIntoView({behavior: "smooth"}); };
    $("cats").appendChild(b);
  });
}

function render() {
  const q = $("q").value.trim().toLowerCase();
  let list = PRODUCTS.filter(p => (cat === "All Products" || p.c === cat) && p.n.toLowerCase().includes(q));
  const s = $("sort").value;
  if (s === "low") list.sort((a, b) => a.p - b.p);
  if (s === "high") list.sort((a, b) => b.p - a.p);
  if (s === "az") list.sort((a, b) => a.n.localeCompare(b.n));
  $("title").firstChild.textContent = cat + " ";
  $("count").textContent = "(" + list.length + " item" + (list.length === 1 ? "" : "s") + ")";
  $("empty").hidden = list.length > 0;
  $("grid").innerHTML = "";
  list.forEach(p => {
    const c = document.createElement("div"); c.className = "card";
    const t = document.createElement("div"); t.className = "thumb";
    const im = document.createElement("img"); im.src = p.i; im.alt = p.n; im.loading = "lazy"; t.appendChild(im);
    const h = document.createElement("h4"); h.textContent = p.n;
    const pr = document.createElement("div"); pr.className = "price"; pr.textContent = "₹" + p.p;
    const b = document.createElement("button"); b.className = "add"; b.type = "button"; b.textContent = "Add to Cart";
    b.onclick = () => { cart.push(p); updateCart(); b.textContent = "Added ✓"; setTimeout(() => b.textContent = "Add to Cart", 900); };
    c.append(t, h, pr, b); $("grid").appendChild(c);
  });
}

function updateCart() { $("cartCount").textContent = cart.length; }
function openCart() {
  const items = {};
  cart.forEach(p => { items[p.n] = items[p.n] || {n: p.n, p: p.p, q: 0}; items[p.n].q++; });
  $("cartItems").innerHTML = "";
  const rows = Object.values(items);
  if (!rows.length) $("cartItems").innerHTML = '<p class="sub">Your cart is empty. Add some products.</p>';
  rows.forEach(r => {
    const d = document.createElement("div"); d.className = "line";
    d.innerHTML = "<span></span><span></span>";
    d.firstChild.textContent = r.n + " × " + r.q; d.lastChild.textContent = "₹" + r.p * r.q;
    $("cartItems").appendChild(d);
  });
  $("cartTotal").textContent = "₹" + cart.reduce((s, p) => s + p.p, 0);
  $("cartBox").style.display = "flex";
}
function clearCart() { cart = []; updateCart(); openCart(); }
function openLogin() { $("msg").textContent = ""; $("loginBox").style.display = "flex"; }
function closeAll() { $("loginBox").style.display = "none"; $("cartBox").style.display = "none"; }
function toggleMode() {
  isSignup = !isSignup;
  $("lt").textContent = isSignup ? "Create Your Account" : "Welcome to J-Mart";
  $("tt").textContent = isSignup ? "Already registered?" : "New customer?";
  $("tb").textContent = isSignup ? "Login" : "Sign Up";
  $("msg").textContent = "";
}
$("form").addEventListener("submit", e => {
  e.preventDefault();
  if (!/^[0-9]{10}$/.test($("phone").value.trim())) { $("msg").textContent = "Please enter a valid 10-digit mobile number."; return; }
  $("msg").textContent = "Hello, " + $("name").value.trim() + "! Demo " + (isSignup ? "sign up" : "login") + " completed.";
  // Demo only; nothing is saved.
});
[$("loginBox"), $("cartBox")].forEach(o => o.addEventListener("click", e => { if (e.target === o) closeAll(); }));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeAll(); });
$("q").addEventListener("input", () => { cat = "All Products"; renderCats(); render(); });
$("sort").addEventListener("change", render);
renderCats(); render();
