// ==================================================
// JUNDOKAN BRASIL - PREMIUM SCRIPT
// ANIMAÇÕES, NAVEGAÇÃO, TEMA ESCURO, EFEITOS PREMIUM
// ==================================================

// DADOS DO SITE
const blogPosts = [
    {
        id: 1,
        title: "Pinan/Heian – História e significado",
        description: "Vamos explorar a origem e o significado dos kata Pinan/Heian, criados por Anko Itosu em Okinawa e amplamente praticados no karatê. Uma jornada pela história das formas fundamentais do karatê moderno.",
        authors: "Adriana Ribeti de Freitas Duarte e Kethelly Queiroz Lopes",
        date: "20/10/2024",
        readTime: "4 min",
        icon: "🥋",
        image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,h=1152,fit=crop/A0xwbVP30nCDqgG1/shorin-ryu-a-karate-kata-name-japanese-AMqbxzMKJOUwwoWX.jpg"
    },
    {
        id: 2,
        title: "Artes Marciais e suas ramificações",
        description: "Este conteúdo explora a diferença entre esporte de combate e arte marcial, analisando a origem do termo 'arte marcial'. Descubra as nuances que diferenciam cada abordagem nas artes marciais japonesas.",
        authors: "Brunno Ribeiro",
        date: "05/10/2024",
        readTime: "4 min",
        icon: "⚔️",
        image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,h=1152,fit=crop/A0xwbVP30nCDqgG1/20-img_0061-AQEy9xQv3zHGRkP7.jpg"
    },
    {
        id: 3,
        title: "A importância do Randori no desenvolvimento marcial",
        description: "O aprendizado no karatê é contínuo e envolve tanto a prática das técnicas quanto a aplicação em situações reais. O Randori como ferramenta fundamental para o desenvolvimento do praticante.",
        authors: "João Paulo Bertozi Brunhara",
        date: "05/10/2024",
        readTime: "3 min",
        icon: "🥋",
        image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,h=1152,fit=crop/A0xwbVP30nCDqgG1/captura-de-tela-2024-10-06-134226-YlevNWDXjXIyMK8Q.jpg"
    }
];

const eventos = [
    { nome: "Seminário de Verão", data: "15/01/2025", local: "São Paulo - SP", desc: "Treinamento intensivo com Sensei Pablo Scurzi", image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/A0xwbVP30nCDqgG1/s-unadjustednonraw_thumb_ca-Yg2W5rknk8i9K6po.jpg" },
    { nome: "Exame de Faixa", data: "20/03/2025", local: "Dojo Central", desc: "Avaliação técnica e kata", image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/A0xwbVP30nCDqgG1/s-20201006_193907-AQEyVRvOzDIq2XZN.jpg" },
    { nome: "Encontro de Okinawa", data: "10/05/2025", local: "Brasil", desc: "Celebração das tradições", image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/A0xwbVP30nCDqgG1/img_7774-mv0Dl8jykxUB2J82.jpg" }
];

const faq = [
    { q: "Qual a idade mínima para começar?", a: "A partir de 7 anos. Temos turmas infantis, juvenis e adultas. Não há limite máximo de idade, o karatê é para todos!" },
    { q: "Preciso de equipamento especial?", a: "Inicialmente apenas roupas confortáveis. O kimono (karategi) pode ser adquirido após a matrícula, com orientação dos senseis." },
    { q: "O que é Goju-Ryu?", a: "Goju-Ryu significa 'estilo duro-suave', combinando técnicas rígidas (go) e flexíveis (ju). É um dos estilos tradicionais de Okinawa, fundado por Chojun Miyagi." },
    { q: "Como funciona o sistema de faixas?", a: "Seguimos o sistema tradicional com 10 kyus (faixas coloridas) até a faixa preta (shodan). Cada graduação exige tempo de prática e avaliação técnica." },
    { q: "Há competições?", a: "Sim, mas nosso foco principal é o desenvolvimento pessoal, disciplina e preservação da tradição. Participamos de eventos seletivamente." }
];

const depoimentos = [
    { nome: "Bento Fanni Dias Menezes ", texto: "Eu gosto de praticar karatê porque eu quero aprender a me defender. Porquê depois do karatê eu me senti mais seguro e motivado.", foto: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=667,fit=crop/A0xwbVP30nCDqgG1/20240522_095533-mjEvkDe8xGTMo8rv.jpg" },
    { nome: "Kethelly Queiroz Lopes ", texto: "Apesar de o karatê jutsu não ter um viés espiritual como o Karatê-Do, ele ainda é um remédio para a mente..", foto: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=666,fit=crop/A0xwbVP30nCDqgG1/20240923_204754-AVLp0BjKbpsN3jzK.jpg" },
    { nome: "Tito Dassie Silveira ", texto: "Gosto porque é bonito e não é violento. É uma arte incrivel.", foto: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=666,fit=crop/A0xwbVP30nCDqgG1/20240521_190829-dWxya9xLZBugB5rY.jpg" }
];

const patrocinadores = [
    { nome: "arena dojo", instagram: "@arenadojo", link: "https://www.instagram.com/arenadojo?igsh=MXV6dGo3MXhtNWY5ZQ==" },
    { nome: "Hotelzinho Sonho da mamãe", instagram: "@hotelzinhosonhodamamae", link: "https://www.instagram.com/hotelzinhosonhodamamae?igsh=MXJwaHZzOWZmdTdoZw==" },
    { nome: "hero1 tech", instagram: "@hero1.tech", link: "https://www.instagram.com/hero1.tech?igsh=MWgzeWF4b2diNWwwbg==" }
];

const instagramPosts = [
    { text: "Treino intenso de Kata! 🥋", image: "https://instagram.fvix22-1.fna.fbcdn.net/v/t51.82787-15/628874634_18421358938138082_5049110643385897750_n.heic?stp=dst-jpg_e35_p480x480_tt6&_nc_cat=105&ig_cache_key=MzgyNzQ0NzE1NTgzNDA2MDcwNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IlNUT1JZLnhwaWRzLjE0NDAuc2RyLnJlZ3VsYXJfcGhvdG8uQzMifQ%3D%3D&_nc_ohc=RuCB9ID7vLwQ7kNvwGPj397&_nc_oc=AdrzSX5j9o0aPNJIKHQeZQ16TpI4vG3JOpI92r4To0frugi18MbRW0CZCONil2Y3wyxRhp6XYUftwuyS5Vm9erNi&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fvix22-1.fna&_nc_gid=jIB-s1NLisDy8GnC2cNuBA&_nc_ss=7a22e&oh=00_Af5hSxre1y5ibI69-58gFqf1kjb115-w-lSDf_IyjW6hxg&oe=6A01AAD4", link: "#" },
    { text: "Sensei Brunno na Argentina 🇦🇷", image: "https://instagram.fvix22-1.fna.fbcdn.net/v/t51.82787-15/630123323_18420906661138082_8532220439886960468_n.heic?stp=dst-jpg_e35_p480x480_tt6&_nc_cat=106&ig_cache_key=MzgyNjY0OTc4MTgwMDUzNjQ3Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IlNUT1JZLnhwaWRzLjE0NDAuc2RyLnJlZ3VsYXJfcGhvdG8uQzMifQ%3D%3D&_nc_ohc=UHBadTQ-HzIQ7kNvwHNjwna&_nc_oc=AdrRNp7UV2kjXXLAS0nEeHkSWkoZmDqgsZsDfdEjSvy1ryXuf2PMxRJrQQqBEeB7234GxDdIL21MqOrO0OIm12BE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fvix22-1.fna&_nc_gid=jIB-s1NLisDy8GnC2cNuBA&_nc_ss=7a22e&oh=00_Af7TDUXeRMGBuU8XzCb0JNjRxNPA4Cbzc7EjauF8xaSzEw&oe=6A01B189", link: "#" },
    { text: "Outros! 👏", image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=667,fit=crop/A0xwbVP30nCDqgG1/20240803_171254-6L4fCauvTuJbeukF.jpg", link: "#" }
];

const bibliotecaItems = [
    { type: "photo", title: "Seminário 2024", thumb: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=667,fit=crop/A0xwbVP30nCDqgG1/20240803_163147-cQyy6K6fdLioPWII.jpg" },
    { type: "photo", title: "Gaishuku 2026", thumb: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=545,fit=crop/A0xwbVP30nCDqgG1/20240803_180551-1-hcEyvp38VeoDfrdY.jpg" },
    { type: "video", title: "Gaishuku Brasil", thumb: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=424,fit=crop/A0xwbVP30nCDqgG1/chatgpt-image-2-de-fev.-de-2026-12_18_01-WgxIKScg9X4olI0w.png" },
    { type: "photo", title: "Jundokan Okinawa - Naha", thumb: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/A0xwbVP30nCDqgG1/img_20120601_073043-Aq2vNrBpEoFr3a2g.jpg" }
];

// ==================================================
// TEMA ESCURO/CLARO
// ==================================================
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        document.querySelector('#themeToggle .fa-moon').style.display = 'none';
        document.querySelector('#themeToggle .fa-sun').style.display = 'block';
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    const moonIcon = document.querySelector('#themeToggle .fa-moon');
    const sunIcon = document.querySelector('#themeToggle .fa-sun');
    
    if (isDark) {
        localStorage.setItem('theme', 'dark');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    } else {
        localStorage.setItem('theme', 'light');
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    }
}

// ==================================================
// HEADER SCROLL BEHAVIOR - PREMIUM
// ==================================================
let lastScrollY = 0;
let ticking = false;

function handleHeaderScroll() {
    const header = document.getElementById('mainHeader');
    const currentScrollY = window.scrollY;
    
    if (currentScrollY < 50) {
        header.classList.remove('header-hidden', 'header-minimal');
    } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Descendo - esconde
        header.classList.add('header-hidden');
        header.classList.remove('header-minimal');
    } else if (currentScrollY < lastScrollY) {
        // Subindo - mostra com estilo minimalista
        header.classList.remove('header-hidden');
        header.classList.add('header-minimal');
    }
    
    lastScrollY = currentScrollY;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            handleHeaderScroll();
            ticking = false;
        });
        ticking = true;
    }
});

// ==================================================
// CUSTOM CURSOR PREMIUM
// ==================================================
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

if (cursorDot && cursorOutline) {
    window.addEventListener('mousemove', (e) => {
        cursorDot.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
        cursorOutline.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
    });
    
    // Hover effect para elementos interativos
    const interactiveElements = document.querySelectorAll('a, button, .btn, .card, .faq-question');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.transform = 'scale(1.5)';
            cursorOutline.style.borderColor = 'var(--secondary)';
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.transform = 'scale(1)';
            cursorOutline.style.borderColor = 'var(--primary)';
        });
    });
}

// ==================================================
// PARALLAX EFFECT
// ==================================================
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
}

// ==================================================
// ANIMAÇÕES AO SCROLL - AOS INIT
// ==================================================
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
    }
}

// ==================================================
// RENDERIZAÇÃO DAS SEÇÕES
// ==================================================
function renderInstagramFeed() {
    return `
        <div class="instagram-feed" data-aos="fade-up">
            <h3><i class="fab fa-instagram"></i> Últimas Postagens #KaratêGojuRyu</h3>
            <div class="instagram-posts">
                ${instagramPosts.map(post => `
                    <div class="instagram-post">
                        <img src="${post.image}" alt="Post Instagram" loading="lazy">
                        <i class="fab fa-instagram" style="font-size: 24px; color: #E4405F;"></i>
                        <p>${post.text}</p>
                        <a href="${post.link}" style="color: var(--primary);">Ver no Instagram →</a>
                    </div>
                `).join('')}
            </div>
            <p style="margin-top: 16px; text-align: center;">
                <i class="fab fa-instagram"></i> Siga @chuseikan.jundokanbrasil | Sensei brunno
            </p>
        </div>
    `;
}

function renderSponsorsArea() {
    return `
        <div class="sponsors-area" data-aos="fade-up">
            <h3><i class="fas fa-handshake"></i> Nossos Patrocinadores</h3>
            <div class="sponsors-grid">
                ${patrocinadores.map(p => `
                    <div class="sponsor-card" data-aos="zoom-in" data-aos-duration="500">
                        <a href="${p.link}" target="_blank" rel="noopener">
                            <i class="fab fa-instagram"></i> ${p.nome}<br>
                            <small>${p.instagram}</small>
                        </a>
                    </div>
                `).join('')}
            </div>
            ${renderInstagramFeed()}
        </div>
    `;
}

function renderHome() {
    return `
        <section class="hero">
            <div class="container hero-content" data-aos="fade-up" data-aos-duration="1000">
                <h1>Descubra o Karatê Goju-Ryu<br>e suas raízes</h1>
                <p class="subtitle">Explore técnicas e a história do karatê de Okinawa.</p>
                <p><strong>Conheça o Jundokan Brasil</strong> - A verdadeira casa de Eiichi Miyazato no Brasil.</p>
                <div style="margin-top: 32px;">
                    <a href="#" class="btn" data-page="contato">Comece sua jornada →</a>
                </div>
            </div>
        </section>

        <div class="container">
            <section class="section" data-aos="fade-up">
                <h2 class="section-title">Nossa Missão</h2>
                <p style="font-size: 1.1rem; max-width: 800px; line-height: 1.8;">A missão da Jundokan Brasil é ensinar o karatê Goju-Ryu, preservando sua essência como arte marcial desenvolvida em Okinawa, com foco na defesa pessoal e no crescimento integral dos alunos.</p>
            </section>

            <section class="section" data-aos="fade-up" data-aos-delay="100">
                <h2 class="section-title">Nossa Visão</h2>
                <p style="font-size: 1.1rem; max-width: 800px; line-height: 1.8;">A Jundokan Brasil aspira ser uma escola de referência no ensino do karatê Goju-Ryu no Brasil, conhecida por sua autenticidade e dedicação à tradição.</p>
            </section>

            <section class="section" data-aos="fade-up">
                <h2 class="section-title">Nossa História</h2>
                <div style="background: var(--bg-surface); padding: 48px; border-radius: 32px; box-shadow: var(--shadow-md); border: 1px solid var(--border-color);">
                    <div style="display: flex; flex-wrap: wrap; gap: 40px; align-items: flex-start;">
                        <div style="flex: 2;">
                            <h3 style="color: var(--primary); margin-bottom: 24px; font-size: 1.8rem;">A Casa de Eiichi Miyazato</h3>
                            <div style="margin-bottom: 24px; text-align: center;">
                                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=359,fit=crop/A0xwbVP30nCDqgG1/20221120_120515-YX4ywO1W9ZiO5lxL.jpg" 
                                     alt="Eiichi Miyazato" 
                                     style="width: 100%; max-width: 1000px; border-radius: 74px; object-fit: cover; box-shadow: var(--shadow-md);">
                                <p style="margin-top: 12px; font-size: 0.9rem; color: var(--text-tertiary);">Eiichi Miyazato - Fundador da Jundokan</p>
                            </div>
                            <p style="line-height: 1.8;">Durante muitos anos, com imenso orgulho, carregamos o nome Okinawa Karate Jutsu, guiados pelo Sensei Thulio Almeida, que nos conduziu com maestria no caminho do Karatê.</p>
                            <p style="margin-top: 16px; line-height: 1.8;">Sob o comando do Sensei Thulio, finalmente encontramos nossa verdadeira casa na Jundokan, onde estabelecemos nossas raízes profundas.</p>
                            <p style="margin-top: 16px; line-height: 1.8;"><strong>Atualização importante:</strong> Atualmente, o Sensei Brunno Ribeiro se encontra sendo 3 dan. <strong>Argentina</strong>, expandindo os ensinamentos do Karatê Goju-Ryu pela América do Sul.</p>
                        </div>
                        <div style="flex: 1; text-align: center;">
                            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=542,fit=crop/A0xwbVP30nCDqgG1/screenshot_20241004_082254_photos-YbNvXBNyqRCrKpvJ.jpg" 
                                 alt="Sensei Brunno Ribeiro" 
                                 style="width: 100%; max-width: 280px; border-radius: 24px; object-fit: cover; box-shadow: var(--shadow-md);">
                            <p style="margin-top: 16px; font-weight: 600; font-size: 1.1rem;">Sensei Brunno Ribeiro</p>
                            <p style="font-size: 0.9rem; color: var(--text-tertiary);">Representante Jundokan </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section" data-aos="fade-up">
                <h2 class="section-title center">Princípios do Goju-Ryu</h2>
                <div class="values-grid">
                    <div class="value-card" data-aos="zoom-in" data-aos-delay="0"><div class="value-icon"><i class="fas fa-fist-raised"></i></div><h3>Disciplina</h3><p>A base para o crescimento no caminho das artes marciais.</p></div>
                    <div class="value-card" data-aos="zoom-in" data-aos-delay="100"><div class="value-icon"><i class="fas fa-heart"></i></div><h3>Respeito</h3><p>A todos os mestres e praticantes, honrando a tradição.</p></div>
                    <div class="value-card" data-aos="zoom-in" data-aos-delay="200"><div class="value-icon"><i class="fas fa-brain"></i></div><h3>Equilíbrio</h3><p>Entre corpo e mente, dureza e suavidade.</p></div>
                </div>
            </section>

            <section class="section" data-aos="fade-up">
                <h2 class="section-title center">O que dizem nossos alunos</h2>
                <div class="testimonials-grid">
                    ${depoimentos.map((d, idx) => `
                        <div class="testimonial-card" data-aos="fade-up" data-aos-delay="${idx * 100}">
                            <img src="${d.foto}" alt="${d.nome}" class="testimonial-photo" loading="lazy">
                            <i class="fas fa-quote-left"></i>
                            <p class="testimonial-text">"${d.texto}"</p>
                            <p class="testimonial-author">- ${d.nome}</p>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="section" data-aos="fade-up">
                <h2 class="section-title">Perguntas Frequentes</h2>
                <div class="faq-list">
                    ${faq.map((item, idx) => `
                        <div class="faq-item" data-idx="${idx}" data-aos="fade-up" data-aos-delay="${idx * 50}">
                            <div class="faq-question">
                                ${item.q}
                                <i class="fas fa-chevron-down"></i>
                            </div>
                            <div class="faq-answer">${item.a}</div>
                        </div>
                    `).join('')}
                </div>
            </section>

            ${renderSponsorsArea()}
        </div>
    `;
}

function renderBlog() {
    return `
        <div class="container" style="padding-top: 100px;">
            <h1 class="section-title" data-aos="fade-up">Blog e Notícias</h1>
            <div class="card-grid">
                ${blogPosts.map((post, idx) => `
                    <div class="card" data-aos="fade-up" data-aos-delay="${idx * 100}">
                        <div class="card-img">
                            <img src="${post.image}" alt="${post.title}" loading="lazy">
                        </div>
                        <div class="card-content">
                            <h3>${post.title}</h3>
                            <div class="card-meta">
                                <span><i class="far fa-calendar"></i> ${post.date}</span>
                                <span><i class="far fa-clock"></i> ${post.readTime}</span>
                            </div>
                            <p>${post.description.substring(0, 150)}...</p>
                            <div class="card-meta"><i class="fas fa-user"></i> ${post.authors}</div>
                            <button class="btn" style="margin-top: 20px;" onclick="alert('Conteúdo completo disponível em breve!')">Ler artigo completo →</button>
                        </div>
                    </div>
                `).join('')}
            </div>
            ${renderSponsorsArea()}
        </div>
    `;
}

function renderEventos() {
    return `
        <div class="container" style="padding-top: 100px;">
            <h1 class="section-title" data-aos="fade-up">Eventos e Registros</h1>
            <div class="card-grid">
                ${eventos.map((ev, idx) => `
                    <div class="card" data-aos="fade-up" data-aos-delay="${idx * 100}">
                        <div class="card-img">
                            <img src="${ev.image}" alt="${ev.nome}" loading="lazy">
                        </div>
                        <div class="card-content">
                            <h3>${ev.nome}</h3>
                            <p><i class="far fa-calendar-alt"></i> ${ev.data}</p>
                            <p><i class="fas fa-map-marker-alt"></i> ${ev.local}</p>
                            <p>${ev.desc}</p>
                        </div>
                    </div>
                `).join('')}
            </div>

            <section style="margin-top: 80px;" data-aos="fade-up">
                <h2 class="section-title">Biblioteca - Fotos e Vídeos</h2>
                <div class="library-grid">
                    ${bibliotecaItems.map((item, idx) => `
                        <div class="library-item" data-aos="zoom-in" data-aos-delay="${idx * 50}" onclick="alert('Galeria: ${item.title} - Em breve mais conteúdo!')">
                            <img src="${item.thumb}" alt="${item.title}" loading="lazy">
                            <p><strong>${item.title}</strong></p>
                            <small>${item.type === 'photo' ? '📸 Foto' : '🎬 Vídeo'}</small>
                        </div>
                    `).join('')}
                </div>
                <div style="margin-top: 40px; text-align: center;">
                    <button class="btn btn-outline" onclick="alert('Histórico completo de eventos desde 2020 disponível para alunos!')">Ver Histórico Completo →</button>
                </div>
            </section>

            ${renderSponsorsArea()}
        </div>
    `;
}

function renderContato() {
    return `
        <div class="container" style="padding-top: 100px;">
            <h1 class="section-title" data-aos="fade-up">Contato e Localização</h1>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px;" class="contact-grid">
                <div data-aos="fade-right">
                    <div class="form-container">
                        <h3>Faça sua inscrição</h3>
                        <form id="contactForm">
                            <div class="form-group">
                                <input type="text" id="nome" placeholder="Seu nome completo" required>
                            </div>
                            <div class="form-group">
                                <input type="email" id="email" placeholder="Seu e-mail" required>
                            </div>
                            <div class="form-group">
                                <input type="tel" id="telefone" placeholder="WhatsApp (com DDD)">
                            </div>
                            <div class="form-group">
                                <textarea rows="4" id="mensagem" placeholder="Sua mensagem..."></textarea>
                            </div>
                            <div class="form-buttons">
                                <button type="button" class="btn" id="btnEmailEnviar"><i class="far fa-envelope"></i> Enviar por E-mail</button>
                                <button type="button" class="btn btn-outline" id="btnWppEnviar"><i class="fab fa-whatsapp"></i> Enviar via WhatsApp</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div data-aos="fade-left">
                    <div style="background: var(--bg-surface); padding: 40px; border-radius: 32px; border: 1px solid var(--border-color);">
                        <h3 style="color: var(--primary); margin-bottom: 24px;">Sensei Brunno Ribeiro</h3>
                        <p style="margin-bottom: 16px;"><i class="fas fa-user-graduate"></i> <strong>Representante Jundokan no Brasil</strong></p>
                        <p style="margin-bottom: 16px;"><i class="fas fa-map-marker-alt"></i> <strong>Localização atual:</strong> Buenos Aires, Argentina 🇦🇷</p>
                        <p style="margin-bottom: 12px;"><i class="fas fa-envelope"></i> contato@jundokanbrasil.com</p>
                        <p style="margin-bottom: 12px;"><i class="fab fa-whatsapp"></i> (11) 99999-9999</p>
                        <p style="margin-bottom: 12px;"><i class="fab fa-instagram"></i> @senseibrunno | @jundokanbrasil</p>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up">
                <div class="map-container" id="map"></div>
                <p style="margin-top: 16px; text-align: center;">
                    <i class="fas fa-map-marker-alt"></i> 
                    <strong>Hotelzinho Sonho da Mamãe</strong> - Rua das Flores, 456 - São Paulo, SP
                </p>
            </div>

            ${renderSponsorsArea()}
        </div>
    `;
}

// ==================================================
// MAPA PREMIUM
// ==================================================
let map = null;
function initMap() {
    if (map) return;
    const mapElement = document.getElementById('map');
    if (!mapElement) return;
    
    const hotelLat = -23.5645;
    const hotelLng = -46.6537;
    
    map = L.map('map').setView([hotelLat, hotelLng], 15);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
    }).addTo(map);
    
    const customIcon = L.divIcon({
        html: '<div style="background: var(--primary); width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 10px var(--primary);"></div>',
        iconSize: [12, 12],
        className: 'custom-marker'
    });
    
    L.marker([hotelLat, hotelLng], { icon: customIcon }).addTo(map)
        .bindPopup('<b>Hotelzinho Sonho da Mamãe</b><br>Rua das Flores, 456 - São Paulo, SP')
        .openPopup();
}

// ==================================================
// EVENTOS DE FORMULÁRIO
// ==================================================
function attachFormEvents() {
    const btnEmail = document.getElementById('btnEmailEnviar');
    const btnWpp = document.getElementById('btnWppEnviar');
    
    if (btnEmail) {
        btnEmail.addEventListener('click', () => {
            const nome = document.getElementById('nome')?.value || '';
            const email = document.getElementById('email')?.value || '';
            const mensagem = document.getElementById('mensagem')?.value || '';
            if (!nome || !email) {
                alert('Preencha nome e e-mail.');
                return;
            }
            const body = `Nome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`;
            window.location.href = `mailto:contato@jundokanbrasil.com?subject=Inscrição Jundokan - ${nome}&body=${encodeURIComponent(body)}`;
            alert('E-mail aberto no seu cliente de e-mail!');
        });
    }
    
    if (btnWpp) {
        btnWpp.addEventListener('click', () => {
            const nome = document.getElementById('nome')?.value || '';
            const telefone = document.getElementById('telefone')?.value || '';
            const mensagem = document.getElementById('mensagem')?.value || '';
            let texto = `Olá Sensei! Sou ${nome}. ${mensagem ? 'Mensagem: ' + mensagem : 'Gostaria de mais informações sobre o Karatê Goju-Ryu.'}`;
            if (telefone) texto += ` Meu WhatsApp: ${telefone}`;
            window.open(`https://wa.me/5527998114460?text=${encodeURIComponent(texto)}`, '_blank');
        });
    }
}

// ==================================================
// FAQ TOGGLE
// ==================================================
function attachFaqEvents() {
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', function(e) {
            if (e.target.closest('.faq-question')) {
                this.classList.toggle('active');
                const icon = this.querySelector('.fa-chevron-down');
                if (icon) icon.style.transform = this.classList.contains('active') ? 'rotate(180deg)' : '';
            }
        });
    });
}

// ==================================================
// NAVEGAÇÃO DINÂMICA
// ==================================================
let currentPage = 'home';

function loadPage(page) {
    currentPage = page;
    const contentDiv = document.getElementById('dynamic-content');
    let html = '';
    
    if (page === 'home') html = renderHome();
    else if (page === 'blog') html = renderBlog();
    else if (page === 'eventos') html = renderEventos();
    else if (page === 'contato') html = renderContato();
    
    contentDiv.innerHTML = html;
    
    // Re-inicializar componentes após carregar conteúdo
    attachFaqEvents();
    attachFormEvents();
    initAOS();
    initParallax();
    
    // Rolagem suave para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (page === 'contato') setTimeout(initMap, 100);
}

// ==================================================
// MENU MOBILE
// ==================================================
function setupMobileMenu() {
    const mobileBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
        
        // Fechar menu ao clicar em um link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
            });
        });
    }
}

// ==================================================
// SALVAR ESTADO DA PÁGINA
// ==================================================
function savePageState(page) {
    sessionStorage.setItem('currentPage', page);
}

function loadSavedPage() {
    const savedPage = sessionStorage.getItem('currentPage');
    if (savedPage && savedPage !== currentPage) {
        loadPage(savedPage);
        document.querySelectorAll('[data-page]').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === savedPage) {
                link.classList.add('active');
            }
        });
    }
}

// ==================================================
// IMAGE LAZY LOADING OBSERVER
// ==================================================
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.6s ease';
                setTimeout(() => {
                    img.style.opacity = '1';
                }, 100);
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ==================================================
// INICIALIZAÇÃO
// ==================================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    setupMobileMenu();
    initAOS();
    initParallax();
    
    // Carregar página salva ou home
    const savedPage = sessionStorage.getItem('currentPage');
    if (savedPage && savedPage !== 'home') {
        loadPage(savedPage);
        document.querySelectorAll('[data-page]').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === savedPage) {
                link.classList.add('active');
            }
        });
    } else {
        loadPage('home');
    }
    
    // Theme toggle
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
    
    // Navigation
    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            
            savePageState(page);
            
            document.querySelectorAll('[data-page]').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            loadPage(page);
            
            const navLinks = document.querySelector('.nav-links');
            if (window.innerWidth <= 768 && navLinks) {
                navLinks.classList.remove('show');
            }
        });
    });
    
    // Save state on page unload
    window.addEventListener('beforeunload', () => {
        savePageState(currentPage);
    });
    
    // Initialize lazy loading after content loads
    setTimeout(initLazyLoading, 500);
});