import React, { Component } from 'react';

class addressBar extends Component {
    render() {
        return (
            <div className="address content">
            <p className={this.props.tx ? "is-hidden" : "panel-heading has-text-centered is-clipped is-size-6 boxxes"}>
                Connected ETH Account:<br />
                <a href={"https://etherscan.io/address/" + this.props.account}>{this.props.account}</a>
            </p>

            <p className={this.props.tx ? "is-hidden" : "panel-heading has-text-centered is-clipped is-size-6 boxxes"}>
                Total Supply:<br />
                    {this.props.totalsupply}
                </p>
                <a href="/" className="button is-success" onClick={this.props.playrpg}>PLAY (1 RPG Burn)</a>
        </div>
        )
    }
}

export default addressBar;