# Cau truc tong quat Frontend

Frontend cua du an nam trong thu muc `frontend`. Day la ung dung React + Vite + TypeScript + Tailwind CSS dung de hien thi landing page san pham CleanBox Pro, goi API tu backend va xu ly cac chuc nang phia client.

## Cau truc thu muc

```text
frontend/
+-- public/
+-- src/
|   +-- components/
|   |   +-- common/
|   |       +-- Header.tsx
|   |       +-- Footer.tsx
|   |       +-- ToastContainer.tsx
|   |       +-- CartDrawer.tsx
|   |       +-- ChatbotWidget.tsx
|   +-- configs/
|   |   +-- Apis.ts
|   |   +-- Constants.ts
|   |   +-- Types.ts
|   +-- hooks/
|   |   +-- useAnimations.ts
|   |   +-- useTracking.ts
|   +-- reducers/
|   |   +-- AppReducer.ts
|   +-- screens/
|   |   +-- Landing/
|   |       +-- HeroSection.tsx
|   |       +-- PainPointSection.tsx
|   |       +-- FeatureSection.tsx
|   |       +-- SafetySection.tsx
|   |       +-- StorySection.tsx
|   |       +-- SpecsSection.tsx
|   |       +-- ProductSection.tsx
|   |       +-- LeadFormSection.tsx
|   |       +-- FAQSection.tsx
|   +-- App.tsx
|   +-- App.css
|   +-- main.tsx
|   +-- index.css
+-- package.json
+-- index.html
```

## Chuc nang tung thu muc/file chinh

### `public/`

Chua cac file tinh duoc trinh duyet truy cap truc tiep.

- `index.html`: file HTML goc voi SEO meta tags (title, description, Open Graph).

### `src/`

Chua toan bo source code chinh cua frontend React.

### `src/components/common/`

Chua cac component dung chung, co the tai su dung o nhieu noi.

- `Header.tsx`: header co dinh voi logo, menu dieu huong (Tinh nang, An toan, Thong so, San pham, FAQ), nut dark mode toggle, cart icon voi badge so luong, nut CTA "Nhan tu van", menu mobile responsive.
- `Footer.tsx`: footer voi thong tin thuong hieu, link nhanh va thong bao ban quyen.
- `ToastContainer.tsx`: he thong hien thi thong bao toast (success, error, info, warning) voi animation vao/ra.
- `CartDrawer.tsx`: gio hang dang drawer truot tu ben phai, hien thi danh sach san pham da them, dieu chinh so luong, xoa san pham, tinh tong tien, nut dat hang demo.
- `ChatbotWidget.tsx`: widget chatbot goc phai man hinh, co nut noi FAB, cua so chat voi tin nhan, goi y cau hoi, typing indicator, luu lich su chat vao localStorage.

### `src/configs/`

Chua cac file cau hinh va du lieu tinh.

- `Apis.ts`: cau hinh API voi base URL tu env, cac function goi backend (submitLead, trackEvent, sendChatMessage, getProducts), va local chatbot fallback keyword matching.
- `Constants.ts`: du lieu tinh cua ung dung gom PRODUCTS (3 san pham), FEATURES (6 tinh nang), PAIN_POINTS (3 van de), SAFETY_SENSORS, STORY_STEPS, SPECS, FAQ_DATA, CHATBOT_SUGGESTIONS, CAT_WEIGHT_RANGES, NEED_OPTIONS.
- `Types.ts`: dinh nghia TypeScript interfaces/types: Product, CartItem, LeadFormData, ChatMessage, TrackingEvent, ApiResponse, Toast.

### `src/hooks/`

Chua custom hooks cua project.

- `useAnimations.ts`: hook xu ly scroll reveal animation, them class "visible" khi element vao viewport.
- `useTracking.ts`: hook quan ly session ID va gui tracking events (page_view, scroll milestones, cta_click, form events, dark_mode_toggle, cart/favorite/chat events).

### `src/reducers/`

Chua logic quan ly state va localStorage.

- `AppReducer.ts`: quan ly theme (dark/light mode), session ID, cart (them/xoa/cap nhat so luong/tinh tong), favorites (toggle yeu thich), recently viewed, chat history, toast notifications, va format gia tien.

### `src/screens/Landing/`

Chua cac section cua landing page. Moi file tuong ung voi mot phan cua trang.

- `HeroSection.tsx`: banner chinh voi tieu de, mo ta, 2 nut CTA (Nhan tu van, Xem cach hoat dong), mockup san pham voi card thong bao app noi, badge tinh nang.
- `PainPointSection.tsx`: 3 van de quen thuoc cua sen nuoi meo (mui, ban ron, lo lang).
- `FeatureSection.tsx`: 6 tinh nang noi bat dang card grid voi icon, title, description, hover interaction.
- `SafetySection.tsx`: gioi thieu he thong cam bien an toan da diem voi visual hien thi may o giua va cac diem cam bien xung quanh.
- `StorySection.tsx`: scrollytelling "Mot ngay cung boss va CleanBox Pro" voi 4 moc thoi gian (07:30, 07:31, 08:00, 20:00), sticky layout desktop, scroll reveal mobile.
- `SpecsSection.tsx`: bang thong so ky thuat san pham (ten, loai, co che, cam bien, ket noi, che do, khu mui, phu hop, loai cat, thoi gian chua rac, bao hanh).
- `ProductSection.tsx`: mini ecommerce voi 3 san pham (Lite, Pro, Pro Plus), moi card co badge, nut yeu thich, gia voi giam gia, danh sach tinh nang, nut them vao gio hang voi trang thai "Da them".
- `LeadFormSection.tsx`: form dang ky nhan tu van voi React Hook Form + Zod validation (fullName, phone, email, catCount, catWeightRange, need, message), loading state, toast success/error.
- `FAQSection.tsx`: 6 cau hoi thuong gap dang accordion co animation mo/dong.

### `src/App.tsx`

File trung tam cua frontend.

Chuc nang chinh:

- Khai bao va sap xep thu tu cac section cua landing page.
- Quan ly state theme (dark/light) va dong bo voi body class.
- Quan ly state cart o cap App de dong bo giua Header badge, ProductSection va CartDrawer.
- Khoi tao scroll reveal animations.
- Render Header, tat ca section, Footer, ToastContainer, CartDrawer va ChatbotWidget.

### `src/main.tsx`

Diem khoi chay cua React app. File nay render `App` vao `index.html`.

### `src/App.css` va `src/index.css`

Chua style tong the cua ung dung.

- `index.css`: Tailwind CSS import, design system tokens (mau, font), dark mode styles, scroll reveal animations (reveal, reveal-left, reveal-right, reveal-scale, stagger), hero floating animations, toast animations, chatbot animations, timeline, scrollbar va selection styles.
- `App.css`: style bo sung cho card hover, CTA button glow, FAQ accordion, sticky header glassmorphism, timeline connector, specs table zebra, mobile touch targets va reduced motion preferences.

### `package.json`

Khai bao thong tin project, thu vien phu thuoc va cac lenh chay frontend.

Mot so script chinh:

- `npm run dev`: chay frontend o moi truong development (Vite).
- `npm run build`: build frontend cho production (tsc + vite build).
- `npm run preview`: xem truoc ban build production.
- `npm run lint`: chay oxlint kiem tra code.

## Tom tat ngan gon

Frontend duoc to chuc theo huong:

- `components/common/` de chua thanh phan giao dien dung lai (Header, Footer, Toast, CartDrawer, ChatbotWidget).
- `screens/Landing/` de chua cac section cua landing page theo thu tu hien thi.
- `configs/` de chua cau hinh API, du lieu tinh va TypeScript types.
- `reducers/` de quan ly state localStorage (theme, cart, favorites, chat history, toast).
- `hooks/` de chua logic React tai su dung (animations, tracking).
- `App.tsx` de gom tat ca section, quan ly state tong va render layout.
- `public/` de chua file tinh va SEO meta.
