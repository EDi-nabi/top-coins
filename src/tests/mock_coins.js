const mockCoins = () => {
  return Array.from(new Array(100), (v, i) => {
    return {
      id: i,
      name: 'Coin ' + i,
      cmc_rank: i,
      quote: {
        USD: {
          price: i,
          percent_change_24h: i,
          volume_24h: i,
          market_cap: i,
        },
      },
    };
  });
};

export default mockCoins;
