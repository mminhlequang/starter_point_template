# Starter point template
Template backend sử dụng FastAPI + Nextjs + Docker Compose.

File `.env` đã có sẵn dạng template placeholder. Bạn cần thay các giá trị sau:

- `{{project_name}}`
- `{{domain}}`
- `{{frontend domain}}`
- `{{port fastapi}}`
- `{{port adminer}}`
- `{{port postgres}}`
 

- API: `http://localhost:{{port fastapi}}`
- Swagger UI: `http://localhost:{{port fastapi}}/docs`
- ReDoc: `http://localhost:{{port fastapi}}/redoc`
- Adminer: `http://localhost:{{port adminer}}`
 