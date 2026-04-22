# FastAPI Template

Template backend sử dụng FastAPI + SQLModel + Alembic + Docker Compose.

## Mục tiêu README này

Giúp bạn clone dự án và chạy local trong vài phút, không cần đoán bước nào còn thiếu.

## 1) Yêu cầu môi trường

- Docker + Docker Compose
- Git
- Một cổng trống cho API, Postgres, Adminer (theo file .env)

Kiểm tra nhanh:

```bash
docker --version
docker compose version
git --version
```

## 2) Clone source

```bash
git clone <YOUR_REPO_URL>
cd fastapi_template
```

## 3) Cấu hình biến môi trường

File `.env` đã có sẵn dạng template placeholder. Bạn cần thay các giá trị sau:

- `shopviaads`
- `api.techads.store`
- `techads.store`
- `8000`
- `8080`
- `5432`

Lưu ý:

- Nếu dùng SMTP thật, điền đúng `SMTP_HOST`, `SMTP_USER`, `SMTP_PASSWORD`
- Nếu chưa dùng Lemon Squeezy, có thể giữ trống các biến liên quan để chạy local API cơ bản

## 4) Start dự án bằng Docker Compose

Chạy lần đầu:

```bash
docker compose up -d --build
```

Các lần sau:

```bash
docker compose up -d
```

Xem log backend:

```bash
docker compose logs -f backend
```

Dừng toàn bộ service:

```bash
docker compose down
```

## 5) Dự án chạy ở đâu

- API: `http://localhost:8000`
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`
- Adminer: `http://localhost:8080`

Health check:

```bash
curl http://localhost:8000/api/v1/utils/health-check/
```

## 6) Những gì container tự làm khi khởi động

Service `prestart` sẽ tự động:

1. Đợi Postgres sẵn sàng
2. Chạy Alembic migration (`alembic upgrade head`)
3. Seed dữ liệu ban đầu (`python app/initial_data.py`)
4. Tạo thư mục upload `/app/public`

Bạn không cần chạy tay các bước trên trong lần start bình thường.

## 7) Quy trình làm việc hằng ngày

Start:

```bash
docker compose up -d
```

Theo dõi log:

```bash
docker compose logs -f backend
```

Restart backend:

```bash
docker compose restart backend
```

Dọn sạch và build lại từ đầu (khi cần):

```bash
docker compose down -v
docker compose up -d --build
```

## 8) Troubleshooting nhanh

### Lỗi cổng đã được sử dụng

- Đổi cổng trong `.env`
- Hoặc stop service đang chiếm cổng đó

### Backend không lên vì DB

```bash
docker compose ps
docker compose logs -f db
docker compose logs -f prestart
```

### Migration lỗi sau khi đổi model

```bash
docker compose exec backend alembic upgrade head
```

### Không đăng nhập được tài khoản admin ban đầu

- Kiểm tra `FIRST_SUPERUSER` và `FIRST_SUPERUSER_PASSWORD` trong `.env`
- Xem log service `prestart` để xác nhận bước seed dữ liệu

## 9) Deploy VPS (tham khảo nhanh)

Nếu cần cấu hình CI/CD lên VPS, xem thêm tài liệu:

- `SETUP_CICD.md`

Triển khai reverse proxy cơ bản (Nginx) theo domain:

```nginx
server {
    listen 80;
    server_name <your-domain>;

    location / {
        proxy_pass http://127.0.0.1:<your-fastapi-port>;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Sau đó có thể cấp SSL bằng certbot:

```bash
sudo certbot --nginx -d <your-domain>
```
