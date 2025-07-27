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

## Backend Configuration

In your `settings.py`, make sure the following settings are added:

```python
INSTALLED_APPS = [
    'rest_framework',
    'corsheaders',
    'login',  # your app name
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    ...
]

AUTH_USER_MODEL = 'login.User'

CORS_ALLOW_ALL_ORIGINS = True  # Only for development

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}
```