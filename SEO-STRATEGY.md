# SEO & GEO Strategy — Archi Construction & Veranda
**Domain:** archi.constructionveranda.com
**Sektör:** Yerel Hizmet / Dış Mekan Yapı (Belçika)
**Güncelleme:** 2026-03-18
**Hazırlayan:** DMC Kreatif

---

## Mevcut Durum

| Metrik | Değer | Hedef (12 ay) |
|--------|-------|----------------|
| SEO Health Score | 58/100 | 82/100 |
| GEO Score | ~55/100 (post-fixes) | 72/100 |
| Organic Traffic | Baseline | +300% |
| FR keyword rankings (pergola, véranda) | Top 10–50 | Top 3–10 |
| NL keyword rankings | Bilinmiyor | Top 5–15 |
| Google My Business | ❌ Yok | ✅ Kurulu + 50+ yorum |
| Domain Authority | ~15 (tahmini) | ~30 |

---

## Stratejik Hedefler

### Birincil Hedefler
1. Belçika'da "pergola bioclimatique Charleroi / Belgique" için FR + NL top 5
2. Hainaut, Brabant Wallon ve Namur bölgesinde local pack görünürlüğü
3. AI Overviews ve Perplexity'de "pergola bioclimatique Belgique" sorusu için alıntı

### İkincil Hedefler
4. Blog ile organik trafik: ayda 500 → 2,000 ziyaretçi (12 ay)
5. Teklif formu dönüşümü: mevcut → %30 artış
6. Lüksemburg ve Kuzey Fransa aramalarında görünürlük

---

## 5 Stratejik Sütun

### 🏗 Sütun 1: Teknik Temel
**Öncelik:** Kritik | **Süre:** 1-4 hafta

CSR sorunu tüm diğer SEO çalışmasını bloke ediyor. Googlebot ve AI crawler'lar boş HTML görüyor.

| Görev | Etki | Süre |
|-------|------|------|
| react-snap prerendering | ⭐⭐⭐⭐⭐ | 4 saat |
| React.lazy() code splitting | ⭐⭐⭐⭐ | 2-4 saat |
| i18next-http-backend lazy loading | ⭐⭐⭐⭐ | 2 saat |
| Hero WebP + `<picture>` | ⭐⭐⭐⭐ | 2 saat |
| Canonical/hreflang her sayfaya | ⭐⭐⭐⭐⭐ | 4 saat |
| GSC doğrulama + HSTS | ⭐⭐⭐ | 30 dak |
| 404 NotFoundPage | ⭐⭐⭐ | 1 saat |

**Teknik temel tamamlanınca beklenen skor:** SEO 72/100, GEO 63/100

---

### ✍️ Sütun 2: İçerik Otoritesi
**Öncelik:** Yüksek | **Süre:** 1-6 ay

**Sayfa içerik hedefleri:**

| Sayfa | Mevcut | Hedef | Aksiyon |
|-------|--------|-------|---------|
| Anasayfa | ~400 kelime | 700+ | Hero açıklama + sosyal kanıt |
| Servis sayfaları | ~700 kelime | 1,200+ | FAQ bölümü + teknik detaylar |
| Blog yazıları | ~700 kelime | 1,500+ | Genişletilmiş rehber formatı |
| Hakkımızda | ~260 kelime | 600+ | Ekip + sertifikalar + tarihçe |
| Portföy sayfaları | Bilinmiyor | 300+ | Her proje için açıklama |

**E-E-A-T güçlendirme aksiyonları:**
- BCE şirket numarası footer'a ve schema'ya ekle
- Fiziksel adres footer'a ekle (Charleroi 6000)
- Domain email (info@constructionveranda.com)
- Sertifika logolarını tıklanabilir bağlantılarla doğrula
- Google Reviews widget veya embed
- "500+ projets" → proje galeri sayısıyla otomatik güncelle

**FAQ içerik blokları (AI alıntısı için 134+ kelime):**
- Pergola bioclimatique: fiyat, izin, bakım, kurulum süresi
- Véranda aluminium: ısı yalıtımı, maliyetler, seçenekler
- Carport: boyutlar, malzeme, yasal gereksinimler
- Volet roulant: elektrikli vs manuel, güvenlik

---

### 📍 Sütun 3: Yerel SEO Hakimiyeti
**Öncelik:** Yüksek | **Süre:** 1-4 ay

**Google My Business (Kritik — hiç yok):**
1. GMB profili oluştur (Charleroi + Hainaut)
2. Tüm servisler listelenir
3. Aylık 4 post hedefi (görselli, Fransızca)
4. Yorum alma stratejisi: her tamamlanan projeye email istek

**Belçika sektör dizinleri:**
| Dizin | Etki | Ücretsiz? |
|-------|------|-----------|
| TrustUp.be | ⭐⭐⭐⭐⭐ | Evet |
| Bobex.be | ⭐⭐⭐⭐ | Evet |
| Houzz.be | ⭐⭐⭐⭐ | Evet |
| Architecte-Online.be | ⭐⭐⭐ | Evet |
| 1207.be (Pages d'Or) | ⭐⭐⭐ | Freemium |
| Checkatrade.com | ⭐⭐⭐ | Freemium |

**NAP tutarlılığı (Name, Address, Phone):**
- Tüm dizinlerde: "Archi Construction & Veranda", Charleroi 6000, +32 487 72 06 29
- Schema güncellenecek: `streetAddress` ekle
- Footer'da tam adres görünür hale getir

**Hedef coğrafi anahtar kelimeler:**
- `pergola bioclimatique Charleroi` / `Hainaut` / `Belgique`
- `véranda aluminium Charleroi` / `Namur` / `Brabant Wallon`
- `carport aluminium Belgique`
- `pergola Lüksemburg` / `pergola Nord-Pas-de-Calais`
- `aluminium pergola Antwerpen` / `Gent` (NL)

---

### 🤖 Sütun 4: AI Arama Görünürlüğü (GEO)
**Öncelik:** Yüksek | **Süre:** 1-6 ay

**Hızlı kazanımlar (hemen):**
- llms.txt ✅ oluşturuldu (2026-03-18)
- robots.txt AI kuralları ✅ güncellendi
- react-snap prerendering (içerik AI'a görünür olacak)

**Orta vadeli:**
- Her servis sayfasına 5-8 sorulu FAQ bölümü
- 134-167 kelimelik alıntılanabilir içerik blokları
- BlogPosting schema + dateModified
- Service schema her servis sayfasına

**Sosyal kanıt ve otorite (AI citation için kritik):**
| Platform | Etki | Aksiyon |
|----------|------|---------|
| YouTube kanalı | ⭐⭐⭐⭐⭐ | Proje videoları, kurulum süreçleri |
| Google My Business | ⭐⭐⭐⭐⭐ | Yorum + fotoğraf |
| LinkedIn şirket | ⭐⭐⭐⭐ | Profil + haftalık post |
| Reddit r/belgium | ⭐⭐⭐ | Helpful comments (doğal) |
| Houzz.be profil | ⭐⭐⭐⭐ | Proje portföyü |

---

### 🌍 Sütun 5: Çok Dilli Mükemmellik
**Öncelik:** Orta | **Süre:** 2-6 ay

**Dil öncelik sırası:**
1. 🇫🇷 **FR** — Ana pazar (Wallonie), en fazla yatırım
2. 🇳🇱 **NL** — İkincil pazar (Flandre), büyüme potansiyeli
3. 🇳🇱 **EN** — Expat ve uluslararası trafik, düşük öncelik
4. 🇩🇪 **DE** — Eupen/Liège Almanca bölgesi + sınır ötesi
5. 🇹🇷 **TR** — Türk Belçika diasporası, niche

**FR/NL içerik stratejisi:**
- FR: Blog ayda 2 makale (uzun biçim, 1,500+ kelime)
- NL: FR içeriklerin çevirisi + NL'e özgü anahtar kelimeler
- DE/EN/TR: Minimal, sadece servis sayfaları + anasayfa
- Her dilde canonical + hreflang doğru tanımlı

**Hreflang yapısı (düzeltilecek):**
```
FR → x-default + fr-be
NL → nl-be
EN → en
DE → de
TR → tr
```

---

## KPI Tablosu

| Metrik | Başlangıç | 3 Ay | 6 Ay | 12 Ay |
|--------|-----------|------|------|-------|
| SEO Health Score | 58/100 | 70/100 | 78/100 | 82/100 |
| GEO Score | ~55/100 | 62/100 | 68/100 | 72/100 |
| Organic trafik/ay | ~200 | 500 | 1,000 | 2,000 |
| "pergola belgique" FR sırası | 20-50 | 10-20 | 5-10 | 3-7 |
| Google My Business yorum | 0 | 15 | 30 | 60 |
| Core Web Vitals LCP | ~3.5s | 2.5s | 2.2s | ≤2.0s |
| Domain Authority | ~15 | 18 | 22 | 30 |
| Indexed pages | ~30 | 60 | 80 | 100+ |

---

## Risk ve Kısıtlamalar

| Risk | Olasılık | Çözüm |
|------|----------|-------|
| SPA prerendering hataları | Orta | Kapsamlı test, fallback SSR planı |
| Next.js migrasyon maliyeti | Yüksek | Kısa vadede prerender, uzun vadede Next.js değerlendir |
| Rakip marka bütçeleri | Yüksek | Long-tail ve yerel odaklı ol |
| Yorum toplama yavaş | Orta | Proaktif email kampanyası |
| FR aksanlar/içerik kalitesi | Düşük | Native FR düzeltme ihtiyacı |
