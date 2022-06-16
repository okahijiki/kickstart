import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xf2212d2BBdDaA0fd3B38da1FFE3a1487554436cE'
);

export default instance;
