import { expect, test } from "vitest";
import {
  getCurrencyNameFromPathname,
  getCurrencyNameFromStreamName,
  priceChangePercentRender,
} from "./helpers";

test("getCurrencyNameFromPathname turns /bnbusdt to bnbusdt", () => {
  expect(getCurrencyNameFromPathname("/bnbusdt")).toBe("bnbusdt");
});

test("getCurrencyNameFromStreamName turns bnbusdt@ticker to bnbusdt", () => {
  expect(getCurrencyNameFromStreamName("bnbusdt@ticker")).toBe("bnbusdt");
});

test("priceChangePercentRender returns + 0.05 for 0.05", () => {
  expect(priceChangePercentRender(0.05)).toBe("+ 0.05");
});
