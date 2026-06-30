# PROJECT CONTEXT — HELICORP ROUND 2 WEBSITE TEST

## 1. Mục tiêu dự án

Tôi cần xây dựng một landing page hoàn chỉnh cho bài test Thực tập sinh IT Phát triển Website của HELICORP.

Sản phẩm chọn để làm landing page:

**CleanBox Pro — Máy dọn vệ sinh mèo tự động thông minh**

Website cần giới thiệu sản phẩm theo phong cách hiện đại, đẹp, responsive, tối ưu tốc độ, có form đăng ký nhận tư vấn và có backend xử lý dữ liệu thật.

Mục tiêu cuối cùng:

* Có GitHub repository public.
* Có landing page deploy chạy thực tế.
* Có backend API deploy chạy thực tế.
* Có database MySQL trên Google Cloud SQL.
* Có ảnh chụp Google PageSpeed Insights Mobile >= 85.
* Có minh chứng các phần điểm cộng: webhook, tracking click/scroll, dark mode, animation, mini ecommerce, chatbot.

---

## 2. Tech stack bắt buộc dùng

### Frontend

Sử dụng:

* React
* Vite
* TypeScript
* Tailwind CSS
* React Hook Form
* Zod
* Lucide React
* LocalStorage cho cart/favorite/recently viewed/theme/sessionId

Deploy frontend lên:

* Firebase Hosting

### Backend

Sử dụng:

* Java
* Spring Boot
* Gradle - Groovy
* Spring Web
* Spring Validation
* Spring Data JPA
* MySQL Driver
* Lombok
* Spring Boot Actuator
* Spring Boot DevTools
* Cloud SQL MySQL Socket Factory

Deploy backend lên:

* Google Cloud Run

### Database

Sử dụng:

* Google Cloud SQL for MySQL

Tên database:

```text
cleanbox_db
```

### Webhook

Sử dụng một trong các loại webhook sau:

* Google Sheet Webhook qua Google Apps Script
* Webhook.site
* Discord Webhook

Ưu tiên Google Sheet Webhook để dễ chụp minh chứng dữ liệu gửi ra ngoài.

---

## 3. Git branch strategy

Chỉ dùng 4 nhánh:

```text
main
develop
feature/frontend
feature/backend
```

Ý nghĩa:

```text
main: chứa phiên bản ổn định, đã hoàn thiện và sẵn sàng deploy production.

develop: nhánh tích hợp, dùng để kiểm thử tổng thể frontend và backend trước khi đưa lên main.

feature/frontend: phát triển toàn bộ phần giao diện React, responsive, SEO, form, dark mode, animation, mini ecommerce, chatbot UI và PageSpeed.

feature/backend: phát triển toàn bộ phần Java Spring Boot API, validation, MySQL database, webhook, tracking event và chatbot API.
```

Commit message dùng format:

```text
feat(frontend): build hero section
feat(frontend): add lead form validation
feat(frontend): add dark mode and animations
perf(frontend): optimize images and loading speed

feat(backend): setup Spring Boot project
feat(backend): implement lead API
feat(backend): save leads to MySQL
feat(backend): integrate webhook notification
fix(backend): handle validation errors globally

docs: update README and evidence screenshots
```

---

## 4. Cấu trúc repository

Tạo repo tên:

```text
helicorp-cleanbox-landing
```
---

## 5. Frontend requirements

Landing page phải có đầy đủ các section sau:

### 5.1 Header

Có:

* Logo CleanBox Pro
* Menu: Tính năng, An toàn, Thông số, Sản phẩm, FAQ
* CTA button: Nhận tư vấn
* Dark mode toggle
* Cart icon

### 5.2 Hero Section

Nội dung:

```text
Máy dọn vệ sinh mèo tự động cho nhà sạch thơm mỗi ngày

CleanBox Pro tự động dọn sau khi boss rời đi, khử mùi thông minh, cảm biến an toàn đa điểm và theo dõi trạng thái qua ứng dụng.

CTA:
- Nhận tư vấn miễn phí
- Xem cách hoạt động
```

Hero cần có:

* Hình/mockup máy dọn vệ sinh mèo
* Card nổi giả lập app notification: “Boss vừa sử dụng, máy sẽ tự dọn sau 60s”
* Badge tính năng: tự động dọn, khử mùi, cảm biến an toàn, app mobile

### 5.3 Pain Point Section

Có 3 vấn đề:

```text
1. Nhà có mùi dù thay cát thường xuyên
2. Bận rộn, không thể xúc cát mỗi ngày
3. Lo lắng khi để mèo ở nhà một mình
```

### 5.4 Feature Section

Tính năng nổi bật:

```text
1. Tự động dọn sau khi mèo rời đi
2. Khử mùi kép
3. Cảm biến an toàn
4. Theo dõi qua app
5. Khoang rộng cho mèo lớn
6. Dễ tháo lắp vệ sinh
```

Mỗi tính năng là một card có:

* Icon
* Title
* Description
* Hover interaction

### 5.5 Safety Section

Nội dung trọng tâm:

```text
An toàn cho boss là ưu tiên số 1

Hệ thống cảm biến giúp phát hiện khi mèo bước vào, quay lại hoặc đứng gần vùng hoạt động. Nếu phát hiện rủi ro, máy sẽ tự động tạm dừng để bảo vệ boss.
```

Hiển thị dạng visual:

* Máy ở giữa
* Các điểm cảm biến xung quanh
* Tooltip hoặc card nhỏ cho từng loại cảm biến

### 5.6 Story Section / Scrollytelling

Tên section:

```text
Một ngày cùng boss và CleanBox Pro
```

Nội dung:

```text
07:30 — Boss đi vệ sinh
Máy nhận diện lượt sử dụng.

07:31 — Tự động dọn
Máy bắt đầu làm sạch sau khi boss rời khỏi khoang.

08:00 — Sen đi làm
Ứng dụng báo trạng thái ngay trên điện thoại.

20:00 — Nhà vẫn sạch thơm
Khoang chứa rác kín mùi, không gian sống dễ chịu hơn.
```

Yêu cầu kỹ thuật:

* Desktop dùng sticky layout.
* Mobile dùng scroll reveal đơn giản.
* Parallax nhẹ bằng transform.
* Không dùng video nặng.

### 5.7 Specs Section

Thông số kỹ thuật:

```text
Tên sản phẩm: CleanBox Pro
Loại thiết bị: Máy dọn vệ sinh mèo tự động
Cơ chế dọn: Tự động sau khi mèo rời đi
Cảm biến: Hồng ngoại, trọng lượng, chống kẹt, trạng thái nắp
Kết nối: Wi-Fi / Mobile App
Chế độ: Auto / Manual / Schedule
Khử mùi: Khoang rác kín + sáp khử mùi
Phù hợp: 1–3 mèo
Loại cát: Cát vón, cát khoáng, cát đậu nành hạt nhỏ
Thời gian chứa rác: 14–20 ngày tùy tần suất
Bảo hành demo: 12 tháng
```

Desktop có thể dùng table/card grid.

Mobile phải chuyển thành card để không tràn ngang.

### 5.8 Product Plans / Mini Ecommerce

Tạo 3 gói sản phẩm:

```text
CleanBox Lite
Dành cho 1 mèo
Giá demo: 5.990.000đ

CleanBox Pro
Dành cho 1–3 mèo
Giá demo: 6.690.000đ

CleanBox Pro Plus
Dành cho mèo lớn / nhiều mèo
Giá demo: 7.690.000đ
```

Tính năng ecommerce mini:

* Add to cart
* Favorite product
* Recently viewed
* Cart drawer
* Lưu localStorage
* Toast khi thêm vào giỏ/yêu thích

### 5.9 Lead Form Section

Form đăng ký nhận tư vấn gồm:

```text
fullName
phone
email
catCount
catWeightRange
need
message
```

Validate frontend bằng React Hook Form + Zod:

* fullName required
* phone required và đúng format số điện thoại Việt Nam
* email optional nhưng nếu nhập phải đúng format
* catCount >= 1
* need required
* message optional

Khi submit:

```text
React validate
→ gọi POST /api/leads
→ hiện loading state
→ backend validate
→ backend lưu MySQL
→ backend gửi webhook
→ frontend hiện toast success/error
```

### 5.10 Chatbot Widget

Chatbot nằm góc phải màn hình.

Câu hỏi mẫu:

```text
Máy có an toàn cho mèo con không?
Máy có dùng cho mèo lớn không?
Bao lâu phải đổ rác?
Máy dùng loại cát nào?
Có điều khiển bằng app không?
Bảo hành bao lâu?
```

Flow:

```text
User nhập câu hỏi
→ React gọi POST /api/chat
→ backend match keyword
→ backend trả lời
→ lưu chat_messages vào MySQL
```

### 5.11 FAQ Section

Tạo FAQ cho các câu hỏi:

* Máy có an toàn không?
* Dùng được loại cát nào?
* Bao lâu cần đổ rác?
* Có cần app không?
* Có phù hợp nhà nuôi nhiều mèo không?
* Bảo hành bao lâu?

---

## 6. Frontend UI/UX rules

Phong cách:

```text
Pet-tech cao cấp
Sạch sẽ
Ấm áp
Thông minh
Đáng tin cậy
```

Màu đề xuất:

```css
--primary: #ff7a1a;
--secondary: #16c7a8;
--background: #fff8f1;
--surface: #ffffff;
--text: #172033;
--muted: #667085;
```

Dark mode:

```css
--background-dark: #101827;
--surface-dark: #172033;
--text-dark: #f8fafc;
--muted-dark: #94a3b8;
```

Responsive:

* Desktop: hero 2 cột, feature grid 3 cột.
* Tablet: grid 2 cột.
* Mobile: tất cả về 1 cột.
* Không được tràn ngang.
* Button cao tối thiểu 44px.
* Font body 15–16px.
* Chatbot không che form trên mobile.

Performance:

* Ảnh dùng WebP hoặc AVIF.
* Hero image loading eager.
* Ảnh dưới fold loading lazy.
* Không dùng video nền.
* Không dùng animation quá nặng.
* Dùng CSS transform/opacity cho animation.
* Hạn chế package lớn.
* PageSpeed Mobile phải >= 85.

SEO:

Trong `frontend/index.html` cần có:

```html
<title>CleanBox Pro - Máy dọn vệ sinh mèo tự động</title>
<meta name="description" content="CleanBox Pro giúp tự động dọn vệ sinh cho mèo, khử mùi thông minh, cảm biến an toàn và theo dõi qua ứng dụng." />

<meta property="og:title" content="CleanBox Pro - Máy dọn vệ sinh mèo tự động" />
<meta property="og:description" content="Nhà sạch thơm, boss an toàn, sen nhàn hơn mỗi ngày." />
<meta property="og:type" content="website" />
<meta property="og:image" content="/og-image.webp" />
```

---

## 7. Backend requirements

Spring Boot backend cần có các API:

```text
GET  /api/health
GET  /api/products
POST /api/leads
POST /api/events
POST /api/chat
```

### 7.1 GET /api/health

Trả về:

```json
{
  "success": true,
  "message": "CleanBox API is running"
}
```

### 7.2 GET /api/products

Trả danh sách 3 sản phẩm:

* CleanBox Lite
* CleanBox Pro
* CleanBox Pro Plus

Có thể seed cứng trong database hoặc trả hard-code từ service nếu cần nhanh.

### 7.3 POST /api/leads

Nhận request:

```json
{
  "fullName": "Nguyễn Văn A",
  "phone": "0912345678",
  "email": "a@example.com",
  "catCount": 2,
  "catWeightRange": "5-10kg",
  "need": "receive_offer",
  "message": "Mình muốn tư vấn loại phù hợp cho 2 mèo."
}
```

Yêu cầu:

* Validate bằng Jakarta Validation.
* Nếu lỗi validate, trả 400 với message rõ ràng.
* Nếu hợp lệ:

  * Lưu vào bảng `leads`.
  * Gửi webhook.
  * Trả success.

### 7.4 POST /api/events

Nhận event tracking từ frontend:

```json
{
  "sessionId": "uuid",
  "eventType": "cta_click",
  "eventName": "hero_register_click",
  "pageUrl": "/",
  "section": "hero",
  "productId": "cleanbox-pro-plus",
  "metadata": "{\"buttonText\":\"Nhận tư vấn miễn phí\",\"scrollDepth\":40}"
}
```

Event cần track:

```text
page_view
cta_click
scroll_25
scroll_50
scroll_75
scroll_100
form_start
form_submit_success
form_submit_error
dark_mode_toggle
add_to_cart
add_to_favorite
chat_open
chat_message_sent
```

### 7.5 POST /api/chat

Nhận:

```json
{
  "sessionId": "uuid",
  "message": "Máy có dùng cho mèo lớn không?"
}
```

Backend rule-based match keyword.

Ví dụ:

* Có keyword `mèo lớn`, `to`, `nặng` → trả lời về CleanBox Pro Plus.
* Có keyword `an toàn`, `kẹt`, `mèo con` → trả lời về cảm biến.
* Có keyword `cát` → trả lời loại cát phù hợp.
* Có keyword `rác`, `đổ rác`, `bao lâu` → trả lời 14–20 ngày tùy tần suất.
* Không match → trả câu fallback.

Lưu user message và bot reply vào bảng `chat_messages`.

---

## 8. Backend dependencies

Spring Initializr chọn:

```text
Project: Gradle - Groovy
Language: Java
Packaging: Jar
Configuration: YAML
Java: 21

Dependencies:
- Spring Web
- Validation
- Lombok
- Spring Boot DevTools
- Spring Boot Actuator
- Spring Data JPA
- MySQL Driver
```

Trong `build.gradle`, cần có thêm Cloud SQL MySQL Socket Factory:

```gradle
implementation 'com.google.cloud.sql:mysql-socket-factory-connector-j-8:1.28.6'
```

Dependency tổng thể:

```gradle
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web'
    implementation 'org.springframework.boot:spring-boot-starter-validation'
    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
    implementation 'org.springframework.boot:spring-boot-starter-actuator'

    implementation 'com.google.cloud.sql:mysql-socket-factory-connector-j-8:1.28.6'

    runtimeOnly 'com.mysql:mysql-connector-j'

    compileOnly 'org.projectlombok:lombok'
    annotationProcessor 'org.projectlombok:lombok'

    developmentOnly 'org.springframework.boot:spring-boot-devtools'

    testImplementation 'org.springframework.boot:spring-boot-starter-test'
}
```

---

## 9. Backend DTOs

### LeadRequest

```java
public record LeadRequest(
    @NotBlank(message = "Họ tên không được để trống")
    String fullName,

    @NotBlank(message = "Số điện thoại không được để trống")
    @Pattern(regexp = "^(0|\\+84)[0-9]{9,10}$", message = "Số điện thoại không hợp lệ")
    String phone,

    @Email(message = "Email không hợp lệ")
    String email,

    @Min(value = 1, message = "Số lượng mèo phải lớn hơn 0")
    Integer catCount,

    String catWeightRange,

    @NotBlank(message = "Vui lòng chọn nhu cầu tư vấn")
    String need,

    String message
) {}
```

### EventRequest

```java
public record EventRequest(
    @NotBlank String sessionId,
    @NotBlank String eventType,
    String eventName,
    String pageUrl,
    String section,
    String productId,
    String metadata
) {}
```

### ChatRequest

```java
public record ChatRequest(
    @NotBlank String sessionId,
    @NotBlank String message
) {}
```

### ApiResponse

```java
public record ApiResponse<T>(
    boolean success,
    String message,
    T data
) {}
```

---

## 10. MySQL database design

### Table: products

```sql
CREATE TABLE products (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    price BIGINT NOT NULL,
    compare_at_price BIGINT,
    badge VARCHAR(100),
    short_description TEXT,
    image_url TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Table: leads

```sql
CREATE TABLE leads (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255),
    cat_count INT,
    cat_weight_range VARCHAR(50),
    need VARCHAR(100),
    message TEXT,
    status VARCHAR(50) DEFAULT 'new',
    source VARCHAR(100) DEFAULT 'landing_page',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Table: events

```sql
CREATE TABLE events (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    session_id VARCHAR(100) NOT NULL,
    event_type VARCHAR(100) NOT NULL,
    event_name VARCHAR(255),
    page_url TEXT,
    section VARCHAR(100),
    product_id VARCHAR(100),
    metadata TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Table: chat_messages

```sql
CREATE TABLE chat_messages (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    session_id VARCHAR(100) NOT NULL,
    user_message TEXT NOT NULL,
    bot_reply TEXT NOT NULL,
    matched_keyword VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 11. Backend application.yml

Local:

```yaml
server:
  port: 8080

spring:
  application:
    name: cleanbox-api

  datasource:
    url: jdbc:mysql://localhost:3306/cleanbox_db?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=Asia/Ho_Chi_Minh
    username: root
    password: your_password
    driver-class-name: com.mysql.cj.jdbc.Driver

  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
    properties:
      hibernate:
        format_sql: true

app:
  cors:
    allowed-origins: ${CORS_ALLOWED_ORIGINS:http://localhost:5173}
  webhook:
    url: ${WEBHOOK_URL:}
```

Production:

```yaml
server:
  port: ${PORT:8080}

spring:
  application:
    name: cleanbox-api

  datasource:
    url: ${SPRING_DATASOURCE_URL}
    username: ${SPRING_DATASOURCE_USERNAME}
    password: ${SPRING_DATASOURCE_PASSWORD}
    driver-class-name: com.mysql.cj.jdbc.Driver

  jpa:
    hibernate:
      ddl-auto: update
    show-sql: false

app:
  cors:
    allowed-origins: ${CORS_ALLOWED_ORIGINS}
  webhook:
    url: ${WEBHOOK_URL:}
```

Cloud Run `SPRING_DATASOURCE_URL` dạng:

```text
jdbc:mysql:///cleanbox_db?cloudSqlInstance=PROJECT_ID:asia-southeast1:cleanbox-mysql&socketFactory=com.google.cloud.sql.mysql.SocketFactory&useSSL=false
```

---

## 12. Frontend environment variables

File `frontend/.env.example`:

```env
VITE_API_URL=http://localhost:8080
```

Production trên Firebase Hosting cần build với:

```env
VITE_API_URL=https://cleanbox-api-xxxxx.a.run.app
```

---

## 13. API service frontend

Tạo `frontend/src/services/api.ts`.

Các function cần có:

```ts
submitLead(data)
trackEvent(data)
sendChatMessage(data)
getProducts()
```

Tất cả gọi đến:

```ts
const API_URL = import.meta.env.VITE_API_URL;
```

---

## 14. Tracking frontend

Tạo hook `useTracking.ts`.

Yêu cầu:

* Tự tạo `sessionId` bằng UUID và lưu localStorage.
* Gửi `page_view` khi mở trang.
* Gửi scroll event khi đạt 25%, 50%, 75%, 100%.
* Gửi CTA click event.
* Gửi form start và form submit event.
* Gửi dark mode toggle event.
* Gửi cart/favorite/chat event.

Không gửi event quá nhiều lần; scroll milestone chỉ gửi mỗi mức một lần.

---

## 15. LocalStorage keys

Dùng các key:

```text
cleanbox_theme
cleanbox_session_id
cleanbox_cart
cleanbox_favorites
cleanbox_recently_viewed
cleanbox_chat_history
```

---

## 16. Deployment plan

### Backend deploy lên Cloud Run

Cần tạo Cloud SQL MySQL:

```text
Instance name: cleanbox-mysql
Region: asia-southeast1
Database: cleanbox_db
User: cleanbox_user
```

Backend deploy:

```bash
gcloud run deploy cleanbox-api \
  --source . \
  --region asia-southeast1 \
  --allow-unauthenticated \
  --set-env-vars SPRING_DATASOURCE_URL="jdbc:mysql:///cleanbox_db?cloudSqlInstance=PROJECT_ID:asia-southeast1:cleanbox-mysql&socketFactory=com.google.cloud.sql.mysql.SocketFactory&useSSL=false" \
  --set-env-vars SPRING_DATASOURCE_USERNAME="cleanbox_user" \
  --set-env-vars SPRING_DATASOURCE_PASSWORD="YOUR_PASSWORD" \
  --set-env-vars CORS_ALLOWED_ORIGINS="YOUR_FRONTEND_URL" \
  --set-env-vars WEBHOOK_URL="YOUR_WEBHOOK_URL"
```

### Frontend deploy lên Firebase Hosting

```bash
cd frontend
npm run build
firebase login
firebase init hosting
firebase deploy --only hosting
```

Cấu hình:

```text
Public directory: dist
Single-page app: Yes
```

---

## 17. README requirements

README.md phải có:

```text
1. Project overview
2. Live demo URL
3. Backend API URL
4. Tech stack
5. Main features
6. Bonus features
7. Git branch strategy
8. Database design
9. API documentation
10. Local setup guide
11. Deployment guide
12. PageSpeed screenshot
13. Evidence screenshots
```

Bonus features cần liệt kê:

```text
- Frontend + backend validation
- Webhook integration
- User behavior tracking click/scroll
- Dark Mode
- Scroll animation
- Skeleton loading
- Micro-interactions
- Spring Boot backend
- MySQL database
- Scrollytelling/parallax
- Mini ecommerce: cart, favorite, recently viewed
- Chatbot FAQ
```

---

## 18. Evidence screenshots cần chuẩn bị

Lưu vào `docs/screenshots/`:

```text
desktop-home.png
mobile-home.png
dark-mode.png
form-success.png
mysql-leads.png
webhook-proof.png
chatbot.png
cart.png
pagespeed-mobile.png
```

---

## 19. Final checklist

### Required checklist

```text
[ ] Hero Section
[ ] Feature Section
[ ] Technical Specs Section
[ ] Lead Form
[ ] Responsive desktop/mobile
[ ] SEO Title, Description, Open Graph
[ ] PageSpeed Mobile >= 85
[ ] GitHub public repository
[ ] Frontend deploy live
[ ] Backend deploy live
[ ] MySQL database connected
[ ] Screenshot PageSpeed
```

### Bonus checklist

```text
[ ] Validate form frontend
[ ] Validate form backend
[ ] Webhook thật
[ ] Toast notification
[ ] Tracking click
[ ] Tracking scroll
[ ] Dark Mode
[ ] Scroll Animation
[ ] Skeleton Loading
[ ] Micro-interactions
[ ] Backend lưu dữ liệu
[ ] Scrollytelling/parallax
[ ] Favorite product
[ ] Cart drawer
[ ] Recently viewed
[ ] Chatbot góc màn hình
```

---

## 20. Thứ tự triển khai code

Làm đúng thứ tự sau để tránh mông lung:

```text
1. Tạo repo GitHub
2. Tạo nhánh develop
3. Tạo nhánh feature/frontend
4. Setup React Vite TypeScript Tailwind
5. Làm UI landing page đủ section
6. Làm responsive
7. Làm SEO meta
8. Làm lead form frontend validation
9. Làm dark mode
10. Làm animations
11. Làm mini ecommerce localStorage
12. Làm chatbot UI
13. Merge feature/frontend vào develop

14. Tạo nhánh feature/backend từ develop
15. Setup Spring Boot Gradle
16. Thêm dependencies backend
17. Tạo entity/repository/service/controller
18. Làm health API
19. Làm lead API
20. Làm event API
21. Làm chatbot API
22. Kết nối MySQL local
23. Tích hợp webhook
24. Cấu hình CORS
25. Merge feature/backend vào develop

26. Trên develop: test frontend gọi backend
27. Fix integration bugs
28. Tối ưu PageSpeed
29. Deploy Cloud SQL MySQL
30. Deploy backend Cloud Run
31. Deploy frontend Firebase Hosting
32. Chạy PageSpeed Insights
33. Chụp minh chứng
34. Viết README
35. Merge develop vào main
36. Nộp GitHub link + live link + PageSpeed screenshot + minh chứng bonus
```

---

## 21. Important coding rules

Khi code, luôn tuân thủ:

```text
- Không hard-code API URL, dùng env.
- Không hard-code database password.
- Không để webhook secret trong repo.
- Backend phải validate dữ liệu, không chỉ frontend.
- Frontend phải có loading/error/success states.
- Form submit lỗi phải hiện message rõ ràng.
- CORS chỉ mở cho localhost và production frontend URL.
- Ảnh phải tối ưu WebP.
- Mobile không được vỡ layout.
- Không dùng package quá nặng gây giảm PageSpeed.
- README phải rõ ràng để người chấm hiểu đã làm gì.
```

---

## 22. Expected final output

Khi hoàn thành, project cần có:

```text
1. Frontend landing page đẹp, responsive, deploy live.
2. Backend Spring Boot API deploy live.
3. MySQL Cloud SQL lưu được leads/events/chat_messages.
4. Webhook nhận được dữ liệu lead.
5. Dark mode hoạt động.
6. Tracking click/scroll hoạt động.
7. Mini ecommerce hoạt động bằng localStorage.
8. Chatbot FAQ hoạt động qua backend.
9. PageSpeed Mobile >= 85.
10. README đầy đủ.
11. Screenshot minh chứng trong docs/screenshots.
```
