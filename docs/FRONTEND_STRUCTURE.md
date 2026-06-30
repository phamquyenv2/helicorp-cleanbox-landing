# Cau truc tong quat Frontend

Frontend cua du an nam trong thu muc `smarteduresourceweb`. Day la ung dung React dung de hien thi giao dien nguoi dung, goi API tu backend va xu ly cac chuc nang phia client.

## Cau truc thu muc

```text
smarteduresourceweb/
+-- public/
+-- src/
|   +-- components/
|   +-- configs/
|   +-- hooks/
|   +-- reducers/
|   +-- screens/
|   +-- App.js
|   +-- App.css
|   +-- index.js
|   +-- index.css
+-- package.json
+-- firebase.json
+-- README.md
```

## Chuc nang tung thu muc/file chinh

### `public/`

Chua cac file tinh duoc trinh duyet truy cap truc tiep.

- `index.html`: file HTML goc, noi React app duoc gan vao.
- `manifest.json`, `favicon.ico`, logo: thong tin hien thi cua ung dung tren trinh duyet.
- `momo.png`: hinh anh lien quan den thanh toan MoMo.
- `thumbnails/`: anh thumbnail cho tai lieu va khoa hoc.

### `src/`

Chua toan bo source code chinh cua frontend React.

### `src/components/`

Chua cac component dung chung, co the tai su dung o nhieu man hinh.

- `common/`: cac component chung nhu Header, Footer, card khoa hoc, card tai lieu, spinner.
- `Layouts/`: cac layout rieng cho tung nhom nguoi dung nhu Admin va Lecturer.
- `DashboardLayout/`: layout dashboard dung chung, gom sidebar, topbar va vung noi dung.

### `src/configs/`

Chua cac file cau hinh va helper dung chung.

- `Apis.js`: cau hinh axios va danh sach endpoint goi API backend.
- `Context.js`: tao context de chia se thong tin user trong toan app.
- `MockData.js`: chua helper format du lieu, label, mau badge va mot so du lieu phu tro hien thi.

### `src/hooks/`

Chua custom hook cua project.

- `useSubmissionGuard.js`: ho tro kiem soat viec submit form, tranh gui trung hoac xu ly trang thai dang submit.

### `src/reducers/`

Chua reducer quan ly state global don gian.

- `MyUserReducer.js`: xu ly dang nhap, dang xuat va trang thai user.

### `src/screens/`

Chua cac man hinh/page chinh cua ung dung. Moi thu muc con tuong ung voi mot nhom chuc nang.

- `Home/`: trang chu.
- `Auth/`: dang nhap, dang ky sinh vien, dang ky giang vien.
- `Student/`: dashboard sinh vien, ho so, khoa hoc cua toi, lo trinh hoc tap.
- `Resource/`: danh sach va chi tiet tai lieu/hoc lieu.
- `Course/`: danh sach khoa hoc, chi tiet khoa hoc, man hinh hoc.
- `Quiz/`: danh sach quiz, lam quiz, xem ket qua.
- `Forum/`: dien dan, thread, tao bai viet moi.
- `Chat/`: man hinh nhan tin.
- `Payment/`: thanh toan, lich su thanh toan, ket qua MoMo.
- `Admin/`: cac man hinh quan tri he thong.
- `Lecturer/`: cac man hinh quan ly cua giang vien.

### `src/App.js`

File trung tam cua frontend.

Chuc nang chinh:

- Khai bao routing cua ung dung.
- Gan layout phu hop cho tung nhom route.
- Quan ly user context.
- Kiem tra mot so quyen truy cap cua lecturer.
- Hien thi Header/Footer cho layout thong thuong.

### `src/index.js`

Diem khoi chay cua React app. File nay render `App` vao `public/index.html`.

### `src/App.css` va `src/index.css`

Chua style tong the cua ung dung.

- `index.css`: style global ban dau.
- `App.css`: style chinh cho giao dien, card, section, header, footer va cac man hinh public.

### `package.json`

Khai bao thong tin project, thu vien phu thuoc va cac lenh chay frontend.

Mot so script chinh:

- `npm start`: chay frontend o moi truong development.
- `npm run build`: build frontend cho production.
- `npm test`: chay test.

### `firebase.json`

File cau hinh lien quan den Firebase Hosting/deploy neu du an co su dung Firebase.

## Tom tat ngan gon

Frontend duoc to chuc theo huong:

- `components/` de chua thanh phan giao dien dung lai.
- `screens/` de chua cac trang theo nghiep vu.
- `configs/` de chua cau hinh API, context va helper.
- `reducers/` de quan ly state user.
- `hooks/` de chua logic React tai su dung.
- `App.js` de gom routing va layout tong.
- `public/` de chua file tinh va tai nguyen cong khai.
