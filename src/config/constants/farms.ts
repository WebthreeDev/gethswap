import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0, // Has zero aloc, we use this just to calculate USD price
    risk: 3,
    isTokenOnly: false,
    hide: true,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0xe0e92035077c39594793e61802a350347c320cf2',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 1,
    risk: 3,
    isTokenOnly: false,
    lpSymbol: 'GETH-BNB LP',
    lpAddresses: {
      97: '0xc6231bfbc66ab4b9dfd4ed8966f119d41c9eeb45', // GRAVITY-BUSD LP
      56: '0xa5771442E68392BE17c7d96Bac0d92593d39e17C', // GRAVITY-BUSD LP
    },
    tokenSymbol: 'GRAVITY-BUSD',
    tokenAddresses: {
      97: '0x3eFA66aB2b1690e9BE8e82784EDfF2cF2dc150e0', // GRAVITY
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', // GRAVITY
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 2, 
    risk: 3,
    isTokenOnly: false,
    lpSymbol: 'GETH-BNB LP',
    lpAddresses: {
      97: '0xc214b43d8f7cccffc28c273ae74cf946538c2037', // GETH-BNB LP
      56: '0xAd1230E155ba671D5fb860a515970C253DD49361', // GETH-BNB LP
    },
    tokenSymbol: 'GETH-BUSD',
    tokenAddresses: {
      97: '0x562d2BFc80FD1afF3bF5e4Bd8Fa5312E65305C14', // GETH
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', // GETH
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 3,
    risk: 1,
    decimals: 9,
    isTokenOnly: true,
    lpSymbol: 'GETH',
    lpAddresses: {
      97: '0xc214b43d8f7cccffc28c273ae74cf946538c2037',  // GETH BUSD LP
      56: '0xAd1230E155ba671D5fb860a515970C253DD49361', // GETH BUSD LP
    },
    tokenSymbol: 'GETH',
    tokenAddresses: {
      97: '0x562d2BFc80FD1afF3bF5e4Bd8Fa5312E65305C14', // GETH
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', // GETH
    },
     quoteTokenSymbol: QuoteToken.BUSD,
     quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 4,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'GRAVITY',
    lpAddresses: {
      97: '0xc6231bfbc66ab4b9dfd4ed8966f119d41c9eeb45', // GRAVITY-BUSD LP
      56: '0xa5771442E68392BE17c7d96Bac0d92593d39e17C', // GRAVITY-BUSD LP
    },
    tokenSymbol: 'GRAVITY',
    tokenAddresses: {
      97: '0x3eFA66aB2b1690e9BE8e82784EDfF2cF2dc150e0', // GRAVITY
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', // GRAVITY
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 5,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'GETH-GRAVITY',
    lpAddresses: {
      97: '',
      56: '0xef1d3deceb43d85d84842032d404ade23eb31b1d', // GOL-BUSD LP
    },
    tokenSymbol: 'GRAVETH',
    tokenAddresses: {
      97: '',
      56: '0x52f6a03a53840c01470f33a0b016e4c3e3dfe796', // GOL
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }
]

export default farms
