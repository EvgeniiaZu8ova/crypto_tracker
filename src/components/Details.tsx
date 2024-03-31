import { useEffect } from "react";
import { axiosInstance } from "../utils/api";
import { Link, useLocation } from "react-router-dom";
import { IHistoricalTradeResponse, useStore } from "../store/useStore";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import dayjs from "dayjs";
import { Flex, Layout, Typography } from "antd";
import { getCurrencyNameFromPathname } from "../utils/helpers";

export const Details = () => {
  const { pathname } = useLocation();
  const { cryptoData, historicalTrade, updateHistoricalTrade } = useStore();

  const currencyName = getCurrencyNameFromPathname(pathname);

  const currencyPrice =
    cryptoData.find((el) => el.name.startsWith(currencyName))?.lastPrice ?? 0;

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const { data } = await axiosInstance.get("", {
          params: {
            symbol: currencyName.toUpperCase(),
          },
        });

        updateHistoricalTrade(
          data.map((el: IHistoricalTradeResponse) => {
            return {
              price: +el.price,

              //el.time is divided by 1000 as api provides timestamp in ms and dayjs.unix expects to receive time in s
              time: dayjs.unix(el.time / 1000).format("DD/MM, HH:mm:ss"),
            };
          })
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchCurrencyData();
  }, [currencyName, pathname, updateHistoricalTrade]);

  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>
      <Layout.Header style={{ backgroundColor: "#3d7eff" }}>
        <Flex
          justify="space-between"
          align="center"
          gap={8}
          style={{ margin: "0 auto" }}
        >
          <Link to="/">
            <Typography.Text style={{ color: "#fff" }}>
              &#8592; Back To Home Page
            </Typography.Text>
          </Link>
          <Typography.Title
            level={4}
            style={{ margin: "1rem 0 1rem", color: "#fff" }}
          >
            Crypto Currency Tracker
          </Typography.Title>
        </Flex>
      </Layout.Header>
      <Layout.Content style={{ padding: "2rem", backgroundColor: "#fff" }}>
        <Flex
          vertical
          align="center"
          gap={20}
          style={{ margin: "0 auto", width: "fit-content" }}
        >
          <Typography.Text strong>{currencyName.toUpperCase()}</Typography.Text>
          <Typography.Text strong>Price, USD: {currencyPrice}</Typography.Text>
          <Typography.Text strong>Historical Trades</Typography.Text>
          <LineChart
            width={730}
            height={400}
            data={historicalTrade.filter((_, index) => index % 10 === 0)}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" interval="preserveStartEnd" />
            <YAxis
              domain={["dataMin", "dataMax"]}
              tickFormatter={(value: number) => value.toFixed(2)}
            />
            <Tooltip />
            <Legend formatter={(value: string) => `${value}, USD`} />
            <Line type="monotone" dataKey="price" stroke="#bc0dd3" />
          </LineChart>
        </Flex>
      </Layout.Content>
    </Layout>
  );
};
