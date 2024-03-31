import { ICrypto, useStore } from "../store/useStore";
import btc from "../assets/images/bitcoin-btc-logo.svg";
import eth from "../assets/images/ethereum-eth.svg";
import bnb from "../assets/images/bnb-bnb-logo.svg";
import xrp from "../assets/images/xrp-svgrepo-com.svg";
import { Flex, Image, Layout, Table, TableProps, Typography } from "antd";
import { Link } from "react-router-dom";
import {
  getCurrencyNameFromStreamName,
  priceChangePercentRender,
} from "../utils/helpers";

const images = {
  "btcusdt@ticker": btc,
  "ethusdt@ticker": eth,
  "bnbusdt@ticker": bnb,
  "xrpusdt@ticker": xrp,
};

const columns: TableProps<ICrypto>["columns"] = [
  {
    title: <Typography.Text strong>Currency</Typography.Text>,
    dataIndex: "name",
    key: "name",
    render: (_, { name }) => (
      <Link to={getCurrencyNameFromStreamName(name)}>
        <Flex gap={16} align="center">
          <Image
            width={40}
            src={images[name]}
            alt="currency_logo"
            preview={false}
          />
          <Typography.Text strong>
            {name.split("usdt")[0].toUpperCase()}
          </Typography.Text>
        </Flex>
      </Link>
    ),
    width: 200,
  },
  {
    title: <Typography.Text strong>Price, USD</Typography.Text>,
    dataIndex: "lastPrice",
    key: "lastPrice",
    render: (_, { lastPrice }) => (
      <Typography.Text strong>{lastPrice}</Typography.Text>
    ),
    width: 200,
  },
  {
    title: <Typography.Text strong>Price Change, %</Typography.Text>,
    dataIndex: "priceChangePercent",
    key: "priceChangePercent",
    render: (_, { priceChangePercent }) => (
      <Typography.Text
        strong
        style={{ color: priceChangePercent > 0 ? "green" : "red" }}
      >
        {priceChangePercentRender(priceChangePercent)}
      </Typography.Text>
    ),
    width: 200,
  },
];

export const Home = () => {
  const { cryptoData } = useStore();

  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>
      <Layout.Header
        style={{ backgroundColor: "#3d7eff", textAlign: "center" }}
      >
        <Typography.Title
          level={4}
          style={{ margin: "1rem 0 1rem", color: "#fff" }}
        >
          Crypto Currency Tracker
        </Typography.Title>
      </Layout.Header>
      <Layout.Content style={{ padding: "2rem" }}>
        <Table
          columns={columns}
          dataSource={cryptoData}
          rowKey="name"
          pagination={false}
          style={{ width: "fit-content", margin: "0 auto" }}
        />
      </Layout.Content>
    </Layout>
  );
};
