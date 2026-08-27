from unittest.mock import patch

from django.db import DatabaseError
from django.test import TestCase


class HealthCheckTests(TestCase):
    def test_health_check_returns_ok_when_database_is_healthy(self):
        response = self.client.get("/api/v1/health/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"status": "ok"})

    @patch("api.v1.views.connection.cursor", side_effect=DatabaseError)
    def test_health_check_returns_error_when_database_is_unavailable(self, cursor):
        response = self.client.get("/api/v1/health/")

        self.assertEqual(response.status_code, 503)
        self.assertEqual(response.json(), {"status": "error"})
