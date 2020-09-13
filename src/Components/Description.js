import React, { Component } from 'react';
import AddressBar from './AddressBar';


class Description extends Component {

    render() {
        return (
            <section>
                <div className="has-text-centered content">

                    <div>
                        <h1 className="title is-4 is-uppercase has-text-danger">Rug Pull Game</h1>
                        <h2 className="subtitle is-6">How does it work?</h2>
                        <div>You can buy atleast 1 RPG on Uniswap and then click the button below.<br />
                        Each time you play, you will BURN 1 RPG and have a chance of 1:1000 for winning all Liquidity!<br />
                        Currently the winning number is 777 and cannot be manipulated. (only by Ethereum miners).<br />
                            You'll find info about provably fair systems online on google.<br />
                        
                        </div>
                        </div>
                    <br />
                    <h2 className="subtitle is-6 has-text-grey-light">This game is just for fun, no financal commitment is made. This project is in beta-phase.</h2>
                </div>
            </section>
        )
    }
}

export default Description;
    