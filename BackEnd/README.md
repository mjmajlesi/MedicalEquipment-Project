# Django Backend for Auth API (JWT)

This is a Django REST Framework backend providing Sign-Up and Login APIs using a custom user model and JWT (JSON Web Token) authentication system.

## Getting Started

Clone the repository and set up the virtual environment:

```bash
git clone <your-repo-url>
cd <project-folder>
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

Install the required dependencies:

```bash
pip install -r requirements.txt
```

Required packages (make sure these are in `requirements.txt`):

```
Django>=4.2
djangorestframework
djangorestframework-simplejwt
django-cors-headers
```

Apply database migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

Create a superuser (optional):

```bash
python manage.py createsuperuser
```

Run the development server:

```bash
python manage.py runserver
```

Visit [http://localhost:8000](http://localhost:8000) in your browser.

## API Endpoints

### POST `/api/sign_up/`

Register a new user.

**Request body:**

```json
{
  "username": "myuser",
  "email": "myuser@gmail.com",
  "password": "mypassword"
}
```

### POST `/api/login/`

Authenticate a user and return JWT access and refresh tokens.

**Request body:**

```json
{
  "email": "myuser@gmail.com",
  "password": "mypassword"
}
```

**Response:**

```json
{
  "message": "Login successful",
  "user": {
    "id": 1,
    "email": "myuser@gmail.com",
    "username": "myuser"
  },
  "token": "access_token_here",
  "refresh": "refresh_token_here"
}
```

### POST `/api/token/refresh/`

Get a new access token using the refresh token.

**Request body:**

```json
{
  "refresh": "refresh_token_here"
}
```

---

## Product Management API

The project includes a `Product` model for managing medical equipment data. Each product contains a title, description, image, and a unique slug. Images are stored in a dedicated `media/` folder inside the `Products` app.

### Product API Endpoints

- `GET /api/products_detail/` – returns a list of all products
- `GET /api/products_detail/<slug>/` – returns details of a single product

The image URLs returned in the API response are full (absolute) URLs to allow frontend applications to directly display the images without additional processing.

---

## Image URL Handling in Product API

To ensure the frontend receives usable image URLs, the backend uses a custom serializer method that builds absolute image URLs using the current request context. This avoids returning relative paths like `/media/...` and instead returns full URLs like `https://yourdomain.com/media/...`.

---

## Media Settings

In `settings.py`, media handling is configured as follows:

- `MEDIA_URL = '/media/'`
- `MEDIA_ROOT = os.path.join(BASE_DIR, 'Products/media')`

Make sure the media folder exists and images are stored correctly for them to be accessible in the API responses.

Also, `urls.py` includes settings to serve media files during development using `django.conf.urls.static.static`.

---

## Bulk Importing Product Data

You can import multiple product entries from a `.csv` file (e.g., `details.csv`) that contains the following fields:

- `title` — name of the product
- `image` — name of the image file
- `description` — brief product description

Ensure that the referenced image files exist in the `Products/media/` directory.

A utility script is used to read this CSV, generate unique slugs, and bulk-create product entries in the database.

---

✅ With this structure, the product management functionality is modular, frontend-friendly, and ready for scalable use.