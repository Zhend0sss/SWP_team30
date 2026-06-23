# Prometheus

This repository now includes Prometheus as part of the observability overlay.

## What it does

- Runs Prometheus as a separate Docker Compose service.
- Scrapes Prometheus itself, Alloy, and Loki.
- Stores time-series data in a local Docker volume.
- Exposes the Prometheus UI on `http://localhost:9090`.

## Files

- `compose.observability.yaml`
- `observability/prometheus/prometheus.yml`

## Current scrape targets

- `prometheus:9090`
- `alloy:12345`
- `loki:3100`

## Planned later target

The backend is not scraped yet because it does not currently expose a Prometheus metrics endpoint. Once Spring Boot Actuator and the Prometheus registry are added, enable the commented `backend` scrape job in `observability/prometheus/prometheus.yml`.

## How to run it

```bash
docker compose -f compose.yaml -f compose.observability.yaml up -d prometheus loki alloy
```

## Notes

- This is a local development configuration aimed at debugging and visibility.
- The `--web.enable-lifecycle` flag is enabled so Prometheus config can be reloaded later without recreating the container.
