#!/usr/bin/env python3
"""Local preview server that disables browser caching so edits show up immediately."""
import http.server
import socketserver

PORT = 8000


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def send_header(self, keyword, value):
        # Drop Last-Modified so browsers can't do conditional (304) caching.
        if keyword.lower() == "last-modified":
            return
        super().send_header(keyword, value)


class Server(socketserver.ThreadingTCPServer):
    allow_reuse_address = True


with Server(("", PORT), NoCacheHandler) as httpd:
    print(f"No-cache preview server on http://localhost:{PORT}")
    httpd.serve_forever()
