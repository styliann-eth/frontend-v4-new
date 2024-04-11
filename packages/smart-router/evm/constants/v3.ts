import { ChainId } from '@pancakeswap/chains'
import { Address } from 'viem'

// = 1 << 23 or 100000000000000000000000
export const V2_FEE_PATH_PLACEHOLDER = 8388608

export const MSG_SENDER = '0x0000000000000000000000000000000000000001'
export const ADDRESS_THIS = '0x0000000000000000000000000000000000000002'

export const MIXED_ROUTE_QUOTER_ADDRESSES = {
  [ChainId.ETHEREUM]: '0x678Aa4bF4E210cf2166753e054d5b7c31cc7fa86',
  [ChainId.GOERLI]: '0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997',
  [ChainId.BSC]: '0x678Aa4bF4E210cf2166753e054d5b7c31cc7fa86',
  [ChainId.BSC_TESTNET]: '0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997',
  [ChainId.ARBITRUM_ONE]: '0x5457fa0318753E9eaC2d17DFfdb6383da207d705',
  [ChainId.ARBITRUM_GOERLI]: '0x805e03325116Da555Babf012C7bd490Bdd6EEa95',
  [ChainId.POLYGON_ZKEVM]: '0x4c650FB471fe4e0f476fD3437C3411B1122c4e3B',
  [ChainId.POLYGON_ZKEVM_TESTNET]: '0x9CFCdecF9e37Bf25023A2B42537127c1089600fE',
  [ChainId.ZKSYNC]: '0x9B1edFB3848660402E4f1DC25733764e80aA627A',
  [ChainId.ZKSYNC_TESTNET]: '0x7931c270f59Cb1c2617e87976689bD6803afF50a',
  [ChainId.LINEA]: '0x4c650FB471fe4e0f476fD3437C3411B1122c4e3B',
  [ChainId.LINEA_TESTNET]: '0x7d3ed219e45637Cfa77b1a634d0489a2950d1B7F',
  [ChainId.OPBNB]: '0x4c650FB471fe4e0f476fD3437C3411B1122c4e3B',
  [ChainId.OPBNB_TESTNET]: '0x118F080BF268aa7De4bE6d5e579D926903E7d6Cb',
  [ChainId.BASE]: '0x4c650FB471fe4e0f476fD3437C3411B1122c4e3B',
  [ChainId.BASE_TESTNET]: '0x9d4277f1D41CCB30C0e91f7d1bBA2A739E19032C',
  [ChainId.SCROLL_SEPOLIA]: '0x9d4277f1D41CCB30C0e91f7d1bBA2A739E19032C',
  [ChainId.SEPOLIA]: '0x4c650FB471fe4e0f476fD3437C3411B1122c4e3B',
  [ChainId.ARBITRUM_SEPOLIA]: '0x4c650FB471fe4e0f476fD3437C3411B1122c4e3B',
  [ChainId.BASE_SEPOLIA]: '0x4c650FB471fe4e0f476fD3437C3411B1122c4e3B',
  [ChainId.ETHERLINK_TESTNET]: '0x0aD681b67ca1D530bAf9B7e1f2F58f40138b77ae',
  [ChainId.ETHERLINK]: '0x0aD681b67ca1D530bAf9B7e1f2F58f40138b77ae',
} as const satisfies Record<ChainId, Address>

export const V3_QUOTER_ADDRESSES = {
  [ChainId.ETHEREUM]: '0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997',
  [ChainId.GOERLI]: '0xbC203d7f83677c7ed3F7acEc959963E7F4ECC5C2',
  [ChainId.BSC]: '0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997',
  [ChainId.BSC_TESTNET]: '0xbC203d7f83677c7ed3F7acEc959963E7F4ECC5C2',
  [ChainId.ARBITRUM_ONE]: '0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997',
  [ChainId.ARBITRUM_GOERLI]: '0xC0F9488345ed89105b3bd135150905F718Bb254E',
  [ChainId.POLYGON_ZKEVM]: '0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997',
  [ChainId.POLYGON_ZKEVM_TESTNET]: '0xA9c08a89Be4503E04Fd84Eadad4320eE34e9B11D',
  [ChainId.ZKSYNC]: '0x3d146FcE6c1006857750cBe8aF44f76a28041CCc',
  [ChainId.ZKSYNC_TESTNET]: '0x43e273b4Ffd6bC9d6Be1a862D19893549c3b9b46',
  [ChainId.LINEA]: '0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997',
  [ChainId.LINEA_TESTNET]: '0x669254936caE83bE34008BdFdeeA63C902497B31',
  [ChainId.OPBNB]: '0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997',
  [ChainId.OPBNB_TESTNET]: '0x052a99849Ef2e13a5CB28275862991671D4b6fF5',
  [ChainId.BASE]: '0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997',
  [ChainId.BASE_TESTNET]: '0x6cc56b20bf8C4FfD58050D15AbA2978A745CC691',
  [ChainId.SCROLL_SEPOLIA]: '0x6cc56b20bf8C4FfD58050D15AbA2978A745CC691',
  [ChainId.SEPOLIA]: '0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997',
  [ChainId.ARBITRUM_SEPOLIA]: '0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997',
  [ChainId.BASE_SEPOLIA]: '0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997',
  [ChainId.ETHERLINK_TESTNET]: '0x3531ACe66aDb3374974C5ae9eFC51F03f28C834d',
  [ChainId.ETHERLINK]: '0x3531ACe66aDb3374974C5ae9eFC51F03f28C834d',
} as const satisfies Record<ChainId, Address>

const TICK_LENS_MAINNET_ADDRESS = '0x9a489505a00cE272eAa5e07Dba6491314CaE3796'
const TICK_LENS_TESTNET_ADDRESS = '0xac1cE734566f390A94b00eb9bf561c2625BF44ea'
export const V3_TICK_LENS_ADDRESSES = {
  [ChainId.ETHEREUM]: TICK_LENS_MAINNET_ADDRESS,
  [ChainId.GOERLI]: TICK_LENS_TESTNET_ADDRESS,
  [ChainId.BSC]: TICK_LENS_MAINNET_ADDRESS,
  [ChainId.BSC_TESTNET]: TICK_LENS_TESTNET_ADDRESS,
  [ChainId.ARBITRUM_ONE]: TICK_LENS_MAINNET_ADDRESS,
  [ChainId.ARBITRUM_GOERLI]: '0x2F6dE77f29a0065398837DD4a485c48eE8D13afc',
  [ChainId.POLYGON_ZKEVM]: TICK_LENS_MAINNET_ADDRESS,
  [ChainId.POLYGON_ZKEVM_TESTNET]: '0x1415dc83bc3d87089ab533B196D14d9C49828C69',
  [ChainId.ZKSYNC]: '0x7b08978FA77910f77d273c353C62b5BFB9E6D17B',
  [ChainId.ZKSYNC_TESTNET]: '0x',
  [ChainId.LINEA]: TICK_LENS_MAINNET_ADDRESS,
  [ChainId.LINEA_TESTNET]: '0xEf60E2B3bB419891Aa2541b805f5AcEA991C181F',
  [ChainId.OPBNB]: TICK_LENS_MAINNET_ADDRESS,
  [ChainId.OPBNB_TESTNET]: '0x15571d4a7D08e16108b97cf7c80Ffd5C3fcb9657',
  [ChainId.BASE]: TICK_LENS_MAINNET_ADDRESS,
  [ChainId.BASE_TESTNET]: '0x66A9870FF7707936B0B0278cF999C5f2Ac2e42F5',
  [ChainId.SCROLL_SEPOLIA]: '0x66A9870FF7707936B0B0278cF999C5f2Ac2e42F5',
  [ChainId.SEPOLIA]: TICK_LENS_MAINNET_ADDRESS,
  [ChainId.ARBITRUM_SEPOLIA]: TICK_LENS_MAINNET_ADDRESS,
  [ChainId.BASE_SEPOLIA]: TICK_LENS_MAINNET_ADDRESS,
  [ChainId.ETHERLINK_TESTNET]: '0x30dE0DcB024C472b657Cf7b69c3399614282dF1d',
  [ChainId.ETHERLINK]: '0x30dE0DcB024C472b657Cf7b69c3399614282dF1d',
} as const satisfies Record<ChainId, Address>
