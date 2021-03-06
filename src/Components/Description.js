import React, { Component } from 'react';

class Description extends Component {

    render() {
        return (
            <section>
                <div className="has-text-centered content">

                    <div>
                        <h1 className="title is-4 is-uppercase has-text-danger">Rug Pull Game</h1>
                        <h2 className="subtitle is-6">How does it work?</h2>
                        <div>You need to buy atleast 1 RPG on Uniswap and then click the button below to play.<br />
                        Each time you play, you will BURN 1 RPG and have a chance of 1:1000 for winning all Liquidity! (all LP Tokens)<br />
                        Currently the winning number is 777 and cannot be manipulated. (only by Ethereum miners).<br />
                            You'll find info about provably fair systems online on google.<br />
                            <a href="https://github.com/SimpleYield/rugpullgame">Github</a>&nbsp;&nbsp;
                            <a href="https://t.me/rugpullgame">Telegram</a><br />

                            <div className="panel-heading has-text-centered is-clipped is-size-6 code">
                                <div>
                                    <img src={require('./chancetorug.png')} alt="picturehere" />
                                </div>
                            </div>
                        
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
    