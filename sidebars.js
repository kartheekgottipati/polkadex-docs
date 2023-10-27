module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Overview',
      items: ['vision', 'whatispolkadex', 'whyPolkadot' , 'polkadexTeam', 'polkadexCommunity']
    },
    {
      type: 'category',
      label: 'Polkadex Orderbook',
      items: ['orderbookIntroduction', 'orderbookArchitecture', 'orderbookBenefits','orderbookPolkadexFiat',
      {
        type: 'category',
        label: 'FAQ',
        items: ['orderbookPolkadexFAQWallets','orderbookPolkadexFAQBalances', 'orderbookPolkadexFAQTransfer', 'orderbookPolkadexFAQHowToTrade'],
      },
    ]
    },
    {
      type: 'doc',
      id: 'IDOPlatform'
    },
    {
      type: 'doc',
      id: 'theaBridge'
    },
    {
      type: 'doc',
      id: 'fungibleAssets'
    },
    {
      type: 'doc',
      id: 'polkadexNFTs'
    }, 
    {
      type: 'doc',
      id: 'tokenEconomics'
    },
    {
      type: 'category',
      label: 'Polkadex Network & Ecosystem',
      items: ['polkadexNetworkEcosystemGovernance', 'polkadexNetworkEcosystemStaking', 'polkadexNetworkEcosystemParachain', ]
    },
  ]
};
