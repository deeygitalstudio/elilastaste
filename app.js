   const menuItems = [
            { 
                id: 1,
                 name: "Fried Rice & Peppered Chicken",
                  category: "Rice",
                   price: 4200, 
                   image: "https://kikifoodies.com/wp-content/uploads/2023/12/ET5B9195.jpeg", 
                   description: "sweet and yummy",

                 },

            { 
                id: 2, 
                name: "Jollof Rice & Peppered Chicken", 
                category: "Rice", 
                price: 4000, 
                image: "https://t4.ftcdn.net/jpg/12/92/81/49/360_F_1292814964_cINtJDBFzTcfhlSAKtprK3erb0ltmRSM.jpg",
                 description: "sweet and spicy Classy tomato sauce",
             },
            { 
                id: 3, 
                name: "2.5L Jollof Rice", 
                category: "Rice", 
                price: 15000, 
                image: "https://www.oluolufoods.com/cdn/shop/articles/025ddf8195079ed983f08cd74e6399e8feeb4d28.png?v=1751236672",
                description: "sweet and spicy Classy tomato sauce",
             },
            { 
                id: 4, 
                name: "5L Jollof Rice", 
                category: "Rice", 
                price: 22000, 
                image: "https://www.oluolufoods.com/cdn/shop/articles/025ddf8195079ed983f08cd74e6399e8feeb4d28.png?v=1751236672",
               description: "sweet and spicy Classy tomato sauce",
             },
            { 
                id: 5, 
                name: "2.5L Fried Rice", 
                category: "Rice", 
                price: 16000, 
                image: "https://sisijemimah.com/wp-content/uploads/2015/07/IMG_0011_20200824075644597-scaled.jpg",
                 description: "sweet and yummy",
             },
            { 
                id: 6, 
                name: "5L Fried Rice", 
                category: "Rice", 
                price: 23000, 
                image: "https://sisijemimah.com/wp-content/uploads/2015/07/IMG_0011_20200824075644597-scaled.jpg",
                  description: "sweet and yummy",
             },
            { 
                id: 7, 
                name: "2.5L Coconut Rice", 
                category: "Rice", 
                price: 17000, 
                image: "https://i.ytimg.com/vi/phKnxFqtyrs/maxresdefault.jpg",
                description: "Sweet"
             },
            { 
                id: 8, 
                name: "5L Coconut Rice", 
                category: "Rice", 
                price: 25000, 
                image: "https://i.ytimg.com/vi/phKnxFqtyrs/maxresdefault.jpg",
                 description: "Sweet"
             },
            { 
                id: 9, 
                name: "2.5L Ofada Rice", 
                category: "Rice", 
                price: 16000, 
                image: "https://gtfoodsplus.com/wp-content/uploads/2024/08/hq720.jpg",
                 description: "nutty fragrance and spicy"
             },
            { 
                id: 10, 
                name: "5L Ofada Rice", 
                category: "Rice", 
                price: 22000, 
                image: "https://gtfoodsplus.com/wp-content/uploads/2024/08/hq720.jpg",
                 description: "nutty fragrance and spicy"
             },
            { 
                id: 11, 
                name: "2.5L Asun Rice", 
                category: "Rice", 
                price: 18000, 
                image: "https://i.ytimg.com/vi/efk4Ss_UsoA/maxresdefault.jpg",
                 description: "Sweet"
             },
            { 
                id: 12, 
                name: "5L Asun Rice", 
                category: "Rice", 
                price: 25000, 
                image: "https://i.ytimg.com/vi/efk4Ss_UsoA/maxresdefault.jpg",
                 description: "Sweet"
             },
            { 
                id: 13, 
                name: "2.5L Native Rice", 
                category: "Rice", 
                price: 15000, 
                image: "https://i.ytimg.com/vi/bcolBftZQYA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDgEYvCQphdlrt_T7tN8Ug9K3J3Ug",
                 description: "Pepperoni, mozzarella, and tomato sauce"
             },
            { 
                id: 14, 
                name: "5L Native Rice", 
                category: "Rice", 
                price: 22000, 
                image: "https://i.ytimg.com/vi/bcolBftZQYA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDgEYvCQphdlrt_T7tN8Ug9K3J3Ug",
                 description: "Pepperoni, mozzarella, and tomato sauce"
             },
            { 
                id: 15, 
                name: "2.5L Native Pasta", 
                category: "Pasta", 
                price: 18000, 
                image: "https://i.ytimg.com/vi/-HciGwIEtCM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCF1MiK9dd9IwLYPpiY4zTJ4burkw",
                 description: "Pepperoni, mozzarella, and tomato sauce"
             },
            { 
                id: 16, 
                name: "5L Native Pasta", 
                category: "Pasta", 
                price: 25000, 
                image: "https://i.ytimg.com/vi/-HciGwIEtCM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCF1MiK9dd9IwLYPpiY4zTJ4burkw",
                 description: "Pepperoni, mozzarella, and tomato sauce"
             },
            { 
                id: 17, 
                name: "2.5L Asun Pasta", 
                category: "Pasta", 
                price: 15000, 
                image: "https://i.ytimg.com/vi/CiqYHU4P268/maxresdefault.jpg",
                 description: "Pepperoni, mozzarella, and tomato sauce"
             },
            { 
                id: 18, 
                name: "5L Asun Pasta", 
                category: "Pasta", 
                price: 22000, 
                image: "https://i.ytimg.com/vi/CiqYHU4P268/maxresdefault.jpg",
                 description: "Pepperoni, mozzarella, and tomato sauce"
             },
            { 
                id: 19, 
                name: "2.5L Stir Fry Pasta", 
                category: "Pasta", 
                price: 18000, 
                image: "https://i.ytimg.com/vi/fnUAx_3SB94/maxresdefault.jpg",
                 description: "Pepperoni, mozzarella, and tomato sauce"
             },
            { 
                id: 20, 
                name: "5L Stir Fry Pasta", 
                category: "Pasta", 
                price: 25000, 
                image: "https://i.ytimg.com/vi/fnUAx_3SB94/maxresdefault.jpg",
                 description: "Pepperoni, mozzarella, and tomato sauce"
             },
            { 
                id: 21, 
                name: "2.5L Jollof Pasta", 
                category: "Pasta", 
                price: 18000, 
                image: "https://i0.wp.com/www.1qfoodplatter.com/wp-content/uploads/2016/08/Jollof-Spaghetti-2.jpg?ssl=1",
                 description: "Pepperoni, mozzarella, and tomato sauce"
             },
            { 
                id: 22, 
                name: "5L Jollof Pasta", 
                category: "Pasta", 
                price: 25000, 
                image: "https://i0.wp.com/www.1qfoodplatter.com/wp-content/uploads/2016/08/Jollof-Spaghetti-2.jpg?ssl=1",
                 description: "Pepperoni, mozzarella, and tomato sauce"
             },
        
            { 
                id: 23, 
                name: "2.5L Alfredo Pasta", 
                category: "Pasta", 
                price: 20000, 
                image: "https://images.aws.nestle.recipes/resized/0a0717810b73a1672a029c29788e557b_creamy_alfredo_pasta_long_left_1200_628.jpg",
                 description: "Pepperoni, mozzarella, and tomato sauce"
             },
            { 
                id: 24, 
                name: "5L Alfredo Pasta", 
                category: "Pasta", 
                price: 30000, 
                image: "https://images.aws.nestle.recipes/resized/0a0717810b73a1672a029c29788e557b_creamy_alfredo_pasta_long_left_1200_628.jpg",
                 description: "Pepperoni, mozzarella, and tomato sauce"
             },
            { 
                id: 25, 
                name: "CatFish And Fries", 
                category: "Grills", 
                price: 10000, 
                image: "https://i.ytimg.com/vi/IqIfIRsdQmY/maxresdefault.jpg",
                 description: "Crispy and sweet"
             },
        
            { 
                id: 26, 
                name: "Tilapia | Croaker And Fries", 
                category: "Grills", 
                price: 12000, 
                image: "https://i.ytimg.com/vi/IFl7vH8PxxY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLASBLo8Owz4ErMuDBIHv_UOpxCfww",
                 description: "Crispy and sweet"
             },
            { 
                id: 27, 
                name: "4pcs of Turkey And Fries", 
                category: "Grills", 
                price: 15000, 
                image: "https://pbs.twimg.com/media/Et7v-lxWQAEmwOj.jpg:large",
                description: "Crispy and sweet"
             },
            { 
                id: 28, 
                name: "8pcs of Turkey And Fries", 
                category: "Grills", 
                price: 25000, 
                image: "https://pbs.twimg.com/media/Et7v-lxWQAEmwOj.jpg:large",
                 description: "Crispy and sweet"
             },
        
            { 
                id: 29, 
                name: "4pcs of Chicken And Fries", 
                category: "Grills", 
                price: 12000, 
                image: "https://media.istockphoto.com/id/1164396068/photo/fried-chicken-leg-with-french-fries.jpg?s=612x612&w=0&k=20&c=NV9wyTVV4Ef2HdRAFqg9Hg0SwqXgJF-nrCjfHbSEW18=",
                 description: "Crispy and sweet"
             },
            { 
                id: 30, 
                name: "8pcs of Chicken And Fries", 
                category: "Grills", 
                price: 20000, 
                image: "https://media.istockphoto.com/id/1164396068/photo/fried-chicken-leg-with-french-fries.jpg?s=612x612&w=0&k=20&c=NV9wyTVV4Ef2HdRAFqg9Hg0SwqXgJF-nrCjfHbSEW18=",
                 description: "Crispy and sweet"
             },
            { 
                id: 31, 
                name: "2.5L of Efo Riro", 
                category: "Soups", 
                price: 18000, 
                image: "https://i.ytimg.com/vi/sPZZgr6Ghqo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCgYaU5sFcRw1aOIg-6wCE6Lk6r9g",
                 description: "Pepperoni, mozzarella, and tomato sauce"
             },
            { 
                id: 32, 
                name: "5L of Efo Riro", 
                category: "Soups", 
                price: 25000, 
                image: "https://i.ytimg.com/vi/sPZZgr6Ghqo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCgYaU5sFcRw1aOIg-6wCE6Lk6r9g",
                 description: "Pepperoni, mozzarella, and tomato sauce"
             },
            { 
                id: 31, 
                name: "2.5L of Egusi Soup", 
                category: "Soups", 
                price: 18000, 
                image: "https://www.allnigerianrecipes.com/wp-content/uploads/2022/11/festive-nigerian-egusi-soup.jpg",
                 description: "Pepperoni, mozzarella, and tomato sauce"
             },
            { 
                id: 32, 
                name: "5L of Egusi Soup", 
                category: "Soups", 
                price: 25000, 
                image: "https://www.allnigerianrecipes.com/wp-content/uploads/2022/11/festive-nigerian-egusi-soup.jpg",
                 description: "Pepperoni, mozzarella, and tomato sauce"
             },
            { 
                id: 33, 
                name: "2.5L of Afang Soup", 
                category: "Soups", 
                price: 20000, 
                image: "https://i.ytimg.com/vi/u3FzRezSgBs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBqAlGq04SQ_O_iJOGsT2I9Ux3wMQ",
                 description: "Pepperoni, mozzarella, and tomato sauce"
             },
            { 
                id: 34, 
                name: "5L of Afang Soup", 
                category: "Soups", 
                price: 27000, 
                image: "https://i.ytimg.com/vi/u3FzRezSgBs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBqAlGq04SQ_O_iJOGsT2I9Ux3wMQ",
                 description: "Pepperoni, mozzarella, and tomato sauce"
             },
        
            { 
                id: 35, 
                name: "2.5L of Okro Soup", 
                category: "Soups", 
                price: 15000, 
                image: "https://i.ytimg.com/vi/BgpeXjEjaR0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAfxob4hRk3z5ppubG_jzNQ_gQWlw",
                 description: "Pepperoni, mozzarella, and tomato sauce"
             },
            { 
                id: 36, 
                name: "5L of Okro Soup", 
                category: "Soups", 
                price: 25000, 
                image: "https://i.ytimg.com/vi/BgpeXjEjaR0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAfxob4hRk3z5ppubG_jzNQ_gQWlw",
                 description: "Pepperoni, mozzarella, and tomato sauce"
             },
        
            { 
                id: 36, 
                name: "2.5L of Buka Stew", 
                category: "Soups", 
                price: 15000, 
                image: "https://i.ytimg.com/vi/-BDWuHLUAQU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAttwl7mIVxHwxB0Q-fWyO4ThxMNA",
                 description: "Pepperoni, mozzarella, and tomato sauce"
             },
            { 
                id: 37, 
                name: "5L of Buka Stew", 
                category: "Soups", 
                price: 25000, 
                image: "https://i.ytimg.com/vi/-BDWuHLUAQU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAttwl7mIVxHwxB0Q-fWyO4ThxMNA",
                 description: "Pepperoni, mozzarella, and tomato sauce"
             },
            { 
                id: 38, 
                name: "2.5L of Ofada Stew", 
                category: "Soups", 
                price: 18000, 
                image: "https://i.ytimg.com/vi/_GvgEz4G4LM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAUP7rjwPqPPH06n8vtVA6SzhabMA",
                 description: "Pepperoni, mozzarella, and tomato sauce"
             },
            { 
                id: 39, 
                name: "5L of Ofada Stew", 
                category: "Soups", 
                price: 20000, 
                image: "https://i.ytimg.com/vi/_GvgEz4G4LM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAUP7rjwPqPPH06n8vtVA6SzhabMA",
                 description: "Pepperoni, mozzarella, and tomato sauce"
             },
        
        ];

        let cart = [];
        let currentCategory = 'all';

        // DOM elements
        const menuGrid = document.getElementById('menuGrid');
        const orderModal = document.getElementById('orderModal');
        const orderBtnEl = document.getElementById('orderBtn');
        const closeCartBtn = document.getElementById('closeCartBtn');
        const cartItems = document.getElementById('cartItems');
        const cartCount = document.getElementById('cartCount');
        const cartTotal = document.getElementById('cartTotal');
        const categoryBtns = document.querySelectorAll('.category-btn');
        const checkoutBtn = document.getElementById('checkoutBtn');
        const orderNowBtn = document.getElementById('orderNowBtn');
        const locationInput = document.getElementById('locationInput');

        // Initialize
        function init() {
            renderMenu();
            setupEventListeners();
        }

        // Setup event listeners
        function setupEventListeners() {
    
            categoryBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    categoryBtns.forEach(b => {
                        b.classList.remove('active', 'bg-primary', 'text-white');
                        b.classList.add('bg-white', 'text-gray-700');
                    });
                    btn.classList.add('active', 'bg-primary', 'text-white');
                    btn.classList.remove('bg-white', 'text-gray-700');
                    currentCategory = btn.dataset.category;
                    renderMenu();
                });
            });

       

      // Contact form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // stop normal form submit
    alert("Processing your message...");
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const note = document.getElementById("note").value.trim();

    const phoneNumbers = "2348133515558"; // your WhatsApp number
    const message = 
`📩 New Contact Message
━━━━━━━━━━━━━━━
👤 Name: ${name}
📧 Email: ${email}
📝 Subject: ${subject}
💬 Message: ${note}`;

    // Build WhatsApp link
    const url = `https://wa.me/${phoneNumbers}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(url, "_blank");

    // Success message
    alert(`✅ Thank you, ${name}! Your message has been sent successfully. We'll reply to ${email} within 24 hours.`);
    
    // Reset form
    contactForm.reset();
});


        
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
        }

        // Render menu items
        function renderMenu() {
            const filteredItems = currentCategory === 'all' 
                ? menuItems 
                : menuItems.filter(item => item.category === currentCategory);

            menuGrid.innerHTML = filteredItems.map(item => `
                <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div class="p-6">
                        <img class="w-100 mx-auto mb-4" src="${item.image}" alt="Item image">
                        <h3 class="text-xl font-semibold mb-2">${item.name}</h3>
                        <p class="text-gray-600 mb-4">${item.description}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-2xl font-bold text-primary">N${item.price}</span>
                            <button
                          class="order-btn bg-primary text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                          data-name="${item.name}"
                           data-price="${item.price}"
                         data-desc="${item.description}">
                        Order Now
                         </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }



document.addEventListener("click", function (e) {
  if (e.target.classList.contains("order-btn")) {
    const name = e.target.dataset.name;
    const price = e.target.dataset.price;
    const desc = e.target.dataset.desc;

    // your WhatsApp number (no + or spaces, include country code)
    const phoneNumber = "2348133515558"; 

    // message template
    const message = `Hello! I would like to order:\n\n🍽 Meal: ${name}\n💵 Price: ₦${price}\n📋 Description: ${desc}`;

    // open WhatsApp chat
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }
});

document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const closeMenu = document.getElementById("closeMenu");
    const overlay = document.getElementById("overlay");

    // Open menu
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("-translate-x-full");
      mobileMenu.classList.add("translate-x-0");
      overlay.classList.remove("hidden");
    });

    // Close menu (button + overlay click)
    function closeSidebar() {
      mobileMenu.classList.remove("translate-x-0");
      mobileMenu.classList.add("-translate-x-full");
      overlay.classList.add("hidden");
    }

    closeMenu.addEventListener("click", closeSidebar);
    overlay.addEventListener("click", closeSidebar);
  });


        init();