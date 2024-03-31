export const getCurrencyNameFromPathname = (pathname: string): string => {
  return pathname.split("/")[1] ?? "";
};

export const getCurrencyNameFromStreamName = (streamname: string): string => {
  return streamname.split("@")[0] ?? "";
};

export const priceChangePercentRender = (
  priceChangePercent: number
): string => {
  const sign = priceChangePercent > 0 ? "+" : "-";
  const value = Math.abs(priceChangePercent);

  return `${sign} ${value}`;
};
