from unittest.mock import MagicMock, patch

from django.db import DatabaseError
from django.test import SimpleTestCase


class HealthCheckTests(SimpleTestCase):
    @patch("api.v1.views.connection.cursor")
    def test_health_check_returns_ok_when_database_is_healthy(self, cursor):
        database_cursor = MagicMock()
        cursor.return_value.__enter__.return_value = database_cursor

        response = self.client.get("/api/v1/health/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"status": "ok"})
        database_cursor.execute.assert_called_once_with("SELECT 1")

    @patch("api.v1.views.connection.cursor", side_effect=DatabaseError)
    def test_health_check_returns_error_when_database_is_unavailable(self, cursor):
        response = self.client.get("/api/v1/health/")

        self.assertEqual(response.status_code, 503)
        self.assertEqual(response.json(), {"status": "error"})