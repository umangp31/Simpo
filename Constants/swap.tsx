import Dai from "../assets/icons/Dai";
import USDC from "../assets/icons/USDC";
import USDT from "../assets/icons/USDT";
import WMatic from "../assets/icons/WMatic";
import { token } from "../types/Uniswap";

export const tokens: token[] = [
  {
    TokenName: "WMatic",
    TokenDecimals: 18,
    TokenLogo: <WMatic height={40} width={40} />,
    TokenContract: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
  },
  {
    TokenName: "USDC",
    TokenDecimals: 6,
    TokenLogo: <USDC height={40} width={40} />,
    TokenContract: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
  },
  {
    TokenName: "Dai",
    TokenDecimals: 18,
    TokenLogo: <Dai height={40} width={40} />,
    TokenContract: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
  },
  {
    TokenName: "USDT",
    TokenDecimals: 6,
    TokenLogo: <USDT height={40} width={40} />,
    TokenContract: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
  },
];
