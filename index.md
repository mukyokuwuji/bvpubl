---
layout: base.njk
title: "BrahmaVidya Publishing"
---

<section class="hero">
    <div class="container">
        <h1>Illuminating Wisdom, Nurturing Presence</h1>
        <p class="subtitle">Timeless wisdom and embodied practices</p>
    </div>
</section>

<section id="books" class="upcoming-books">
    <div class="container">
        <h2>Forthcoming Titles 2025 & 2026</h2>
        <div class="book-grid">
            <div class="book-item">
                {% image "f69d1.png", "Book cover - Polish translation of Selfless Self - Talks with Sri Ramakant Maharaj", "(max-width: 480px) 160px, (max-width: 768px) 150px, 180px" %}
                <h3>Selfless Self - Talks with Sri Ramakant Maharaj: Polish Translation (scheduled 2025)</h3>
                <p class="book-author">Author: Sri Ramakant Maharaj / English original edited by Ann Shaw</p>
                <div class="book-description">
                <p>A translation of the priceless teachings from a Master of the Navnath Sampradaya tradition</p>
                <p>Immerse yourself in the profound wisdom of one of the last true Masters of non-duality. "Selfless Self" is an extraordinary collection of conversations with Sri Ramakant Maharaj, a direct disciple to the renowned Sri Nisargadatta Maharaj, conveying the essence of the timeless teachings of the Navnath Sampradaya tradition.</p>
                <p>This unique book guides readers through the fundamental questions of human existence - Who am I? Where do I come from? What is the nature of reality? - offering deep, transformative answers that transcend intellectual concepts.</p>
                <p>Sri Ramakant Maharaj, like his predecessors in the lineage of Masters including Sri Nisargadatta Maharaj and Siddharameshwar Maharaj, points to the direct path to recognising one's true nature, beyond all limitations.</p>
                <p>The original English text was edited by Ann Shaw, whilst the Polish translation has been prepared by another humble disciple of Sri Ramakant Maharaj; both were initiated into the Nath tradition, seeking only to faithfully convey the depth and power of their beloved Master's teachings.</p>
                <p>For those seeking authentic spiritual wisdom, this book serves as an invaluable guide leading to the discovery of that which has always been present - the unlimited, unchanging reality beyond all concepts, time and space.</p>
                </div>
            </div>
            <div class="book-item">
                {% image "34e6b.png", "Book cover - Bagua Chun Gen Qigong: A System for Health, Grounding, and Renewal", "(max-width: 480px) 160px, (max-width: 768px) 150px, 180px" %}
                <h3>Bagua Chun Gen Qigong: A System for Health, Grounding, and Renewal (scheduled 2025)</h3>
                <div class="book-description"><p>This practical guide presents Bagua Chun Gen Qigong, a very rarely taught and never before documented system designed to promote physical wellbeing and energy cultivation. Though deceptively dissimilar to typical health exercise practices, this versatile form of Qigong offers remarkably effective benefits across multiple dimensions of wellbeing.</p>
                <p>The flowing movements introduced in this work provide a clear pathway from fundamental techniques to more nuanced practices, making this art accessible to practitioners at all levels while preserving its authentic essence. Each exercise is presented with detailed instructions, common corrections, and progressive levels of practice to accommodate both beginners and experienced practitioners.</p>
                <p>Drawing from training across multiple traditions, the author shares insights gained through years of study in Mainland China, Hong Kong, Japan, Indonesia, and Thailand. This experience is complemented by over two decades of Yoga practice learned from teachers in Poland, Japan, and India, as well as certification as a Therapeutic Thai bodywork therapist and instructor through TTMA Japan.</p>
                <p>Having taught this system in Tokyo and Vienna, and currently teaching in Seoul, the author presents these methods with practical applications for daily wellness. The system makes it particularly valuable for those navigating the challenges of contemporary life while seeking balance through traditional movement practices that deliver tangible results.</p></div>
            </div>
            <div class="book-item">
                {% image "f7e93.png", "Book cover - Nearer Than Your Next Thought: The Presence That Burns Lifetimes", "(max-width: 480px) 160px, (max-width: 768px) 150px, 180px" %}
                <h3>Nearer Than Your Next Thought: The Presence That Burns Lifetimes (scheduled 2026)</h3>
                <div class="book-description"><p>This spiritual memoir and contemplative exploration welcomes readers into the living wisdom of the ancient Navnath Sampradaya tradition. The author, having received formal initiation from Sri Ramakant Maharaj, shares insights from within this sacred lineage that flows through Matsyendranath, Gorakhnath, Siddharameshwar Maharaj, Nisargadatta Maharaj and other Sages of this revered tradition.</p>
                <p>Moving beyond mere philosophy or abstract concepts, this work gently invites readers into the heart of Self-inquiry through the direct, uncompromising pointers that have characterised this lineage for centuries. The author's journey from seeker to finder—and the quiet dissolution of both—reveals how the most profound truths reside not in distant spiritual realms but in the immediate reality closer than one's very next thought.</p>
                <p>Drawing from personal experience within this tradition, the book offers a perspective on these timeless teachings that resonates with contemporary seekers. Neither diluted spirituality nor impenetrable esotericism, these pages convey the transformative essence that has illuminated the path for generations of sincere aspirants within this lineage.</p>
                <p>The distinguishing quality of this work lies in its steadfast focus on direct recognition rather than gradual practice—a hallmark of the Navnath approach that cuts through spiritual materialism and transcends the mind's tendency to transform profound pointers into mere concepts. For earnest spiritual seekers who have grown weary of techniques and incremental approaches, this book serves as both gentle challenge and heartfelt invitation: to recognise what has always been present, to abide as what one truly is.</p>
                <p>The journey offered is not from here to there, but from misunderstanding to recognition—a journey without distance to a destination one has never left.</p></div>
            </div>
        </div>
    </div>
</section>

<section id="contact-form-area" class="contact-form-section">
    <div class="container">
        <h2>Contact</h2>
        <p class="contact-subtitle-line">Questions or publication opportunities? Your message is warmly welcomed.</p>
        <p class="contact-subtitle-line">Pytania lub możliwości publikacji? Wiadomość od Ciebie jest mile widziana.</p>
        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/thank-you/">

        <input type="hidden" name="form-name" value="contact" />

            <p class="hidden" style="display:none;">
                <label>Don’t fill this out if you’re human. / Nie wypełniaj tego pola, jeśli jesteś człowiekiem. <input name="bot-field" /></label>
            </p>
            <div class="form-group">
                <label for="name">Name / Imię:</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="message">Message / Wiadomość:</label>
                <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <div class="form-group">
                <button type="submit" class="submit-button">Send message / Wyślij wiadomość</button>
            </div>
        </form>
    </div>
</section>

<section id="about" class="about-us">
    <div class="container">
        <img src="/img/9ae3510c78b10dfe4d9df080479a46e5.jpeg" alt="BrahmaVidya Publishing" class="about-us-logo">

        <p>A carefully selected collection of titles from BrahmaVidya Publishing's emerging catalog.</p>
    </div>
</section>