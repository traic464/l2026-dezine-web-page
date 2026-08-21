# De Zine — Company Website

เว็บไซต์บริษัท De Zine (สตูดิโอออกแบบครีเอทีฟ) สร้างด้วย Next.js 14 (App Router) +
TypeScript + Tailwind CSS + Framer Motion แนวดีไซน์ได้แรงบันดาลใจจากธีมมืด
ตัวอักษรใหญ่หนา ของเทมเพลต Keynote (keynote.framer.website) แต่ปรับเนื้อหา
และองค์ประกอบทั้งหมดให้เป็นหน้าเว็บบริษัทออกแบบ (services / portfolio / about /
testimonials / contact) แทนหน้าอีเวนต์

## เริ่มต้นใช้งาน

ต้องมี Node.js 18.18 ขึ้นไป (แนะนำ 20+)

```bash
npm install
npm run dev
```

เปิด http://localhost:3000

## โครงสร้างโปรเจกต์

```
app/
  layout.tsx      metadata + font (Prompt, Sarabun) + global wrapper
  page.tsx         ประกอบทุก section เข้าด้วยกัน
  globals.css      Tailwind base + custom utilities (noise, marquee, ฯลฯ)
components/
  Navbar.tsx        เมนูบนสุด แบบ sticky + มือถือ
  Hero.tsx          หัวข้อใหญ่ + marquee ticker
  Services.tsx       บริการ 6 อย่าง
  Work.tsx           ผลงาน/พอร์ตโฟลิโอ (thumbnail เป็น gradient placeholder)
  About.tsx          เกี่ยวกับบริษัท + สถิติ
  Testimonials.tsx   รีวิวจากลูกค้า
  Contact.tsx         CTA ติดต่อ
  Footer.tsx          footer + โซเชียล
  Reveal.tsx          wrapper สำหรับ scroll animation (framer-motion)
```

## ปรับแต่งแบรนด์

- สี: แก้ไขที่ `tailwind.config.ts` (`ink`, `paper`, `accent`, `accent2`)
- ฟอนต์: แก้ไขที่ `app/layout.tsx` (ปัจจุบันใช้ Prompt + Sarabun รองรับภาษาไทย)
- เนื้อหา/ข้อความ/รูปภาพ: แก้ไขได้ตรง ๆ ในแต่ละไฟล์ใน `components/`
  (ปัจจุบันเป็น placeholder ทั้งหมด รอเนื้อหาจริงจากทีม De Zine)
- โลโก้: ปัจจุบันเป็นข้อความ "De.Zine" ล้วน ๆ สามารถแทนที่ด้วยไฟล์ภาพ/SVG ใน
  `public/` แล้วใช้ `next/image` แทนได้

## Deploy

โปรเจกต์นี้ deploy ได้ตรง ๆ บน Vercel หรือแพลตฟอร์มที่รองรับ Next.js ทั่วไป
(`npm run build && npm run start`)
