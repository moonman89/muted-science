import { describe, it, expect } from "vitest";
import { HealthCheckResponse } from "./generated/api";

describe("HealthCheckResponse schema", () => {
  it("accepts a valid health check response", () => {
    const result = HealthCheckResponse.parse({ status: "ok" });
    expect(result).toEqual({ status: "ok" });
  });

  it("accepts any string status value", () => {
    const result = HealthCheckResponse.parse({ status: "degraded" });
    expect(result).toEqual({ status: "degraded" });
  });

  it("rejects a response with a missing status field", () => {
    expect(() => HealthCheckResponse.parse({})).toThrow();
  });

  it("rejects a response where status is not a string", () => {
    expect(() => HealthCheckResponse.parse({ status: 42 })).toThrow();
  });

  it("strips unknown fields", () => {
    const result = HealthCheckResponse.parse({ status: "ok", extra: "field" });
    expect(result).not.toHaveProperty("extra");
  });
});
