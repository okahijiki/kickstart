import React, { Component } from "react";
import { Card, Button } from 'semantic-ui-react';
import factory from "../ethereum/factory";
import Layout from "../components/Layout";

class CampaignIndex extends Component {

  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }

  renderCampaigns(){
    const items = this.props.campaigns.map(address=>{
      return{
        header:address,
        description:<a>View Campaign</a>,
        fluid:true
      };
    });

    return <Card.Group items={items} />;

  }

  render() {
    return(
      <Layout>
        <div>
        <h3>Open campaigns</h3>
        <Button
          floated = "right"
          content = "Create Campaign"
          icon = "add circle"
          primary = {true}
          />
<<<<<<< HEAD
          {this.renderCampaigns()}
=======
>>>>>>> 7f5befb1a513b283c2c64ed58be5b3d30a9e430c
        </div>
       </Layout>
  );
 }
}
export default CampaignIndex;
