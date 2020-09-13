import React, { Component } from 'react';
import Web3 from 'web3';
import contract from './Tokens/Rpg';
import Nav from './Components/Nav';
import Description from './Components/Description';
import InstallMetamask from './Components/InstallMetamask';
import UnlockMetamask from './Components/UnlockMetamask';
import AddressBar from './Components/AddressBar';

class App extends Component {
    constructor(){
        super();

        this.appName = contract.name;


        this.state = {
            tzAddress: null,
            inProgress: false,
            totalSupply: 0,
            tx: null,
            network: 'Checking...',
            account: null,
            defaultGasPrice: null,
            defaultGasLimit: 200000
        };
        this.state.tzAddress = contract.address; // 0xA4d80eB67cFDa1267487c0458F1cd1Cd21654D81
    }

    setNetwork = () => {
        let networkName, that = this;

        window.web3.eth.net.getNetworkType(function (err, networkId) {
            switch (networkId) {
                case "1":
                    networkName = "Main";
                    break;
                case "2":
                    networkName = "Morden";
                    break;
                case "3":
                    networkName = "Ropsten";
                    break;
                case "4":
                    networkName = "Rinkeby";
                    break;
                case "42":
                    networkName = "Kovan";
                    break;
                default:
                    networkName = networkId;
            }

            that.setState({
                network: networkName
            })
        });
    };

    setGasPrice = () => {
        window.web3.eth.getGasPrice((err, price) => {
            price = window.web3.utils.fromWei(price, 'gwei'); // price.toNumber
            console.log(price);
            if (!err) {
                console.log(price);
                this.setState({ defaultGasPrice: price }
                )
            }
        });
    };

    resetApp = () => {
      this.setState({
          transferDetail: {},
          defaultGasPrice: null,
      })
    };

    unlockAccount = async () => {
        if (window.ethereum) {
            let accountlist = await window.web3.eth.requestAccounts();
            this.setState({
                account: accountlist[0]
            });
        }
        return false;
    };

    getContractInfo = async () => {
        let contractweb3 = new window.web3.eth.Contract(contract.abi, contract.address);
        let app = this;
        await contractweb3.methods.totalSupply().call()
            .then((response, err) => {
                if (response) {
                    app.setState({
                        totalSupply: response/10**18
                    });
                } else {
                    console.log(err);
                }
            });
    };

    playRPG = async () => {
        let contractweb3 = new window.web3.eth.Contract(contract.abi, contract.address);
        let transObj = { from: this.state.account, gas: this.state.defaultGasLimit };
        let app = this;
        contractweb3.methods.ChanceToRug().send(transObj)
            .then((response, err) => {
                if (response) {
                    app.resetApp();

                    app.setState({
                        tx: response.tx,
                        inProgress: false
                    });
                } else {
                    console.log(err);
                }
            });
    };


    componentDidMount = async () => {
        if (window.web3) {
            window.web3 = new Web3(window.ethereum);
            this.setNetwork();
            this.setGasPrice();
            await this.getContractInfo();

            let accountlist = await window.web3.eth.getAccounts();
            if (accountlist.length > 0) {
                this.setState({
                    account: accountlist[0]
                });
            }
        }
    }

    render() {
        if (window.web3) {
            if (!this.state.account) {
                return (
                    <div>
                        <Nav appName={this.appName} network={this.state.network} />
                        <div className="container">
                            <section className="articles">
                                <div className="column is-8 is-offset-2">
                                    <div className="card article">
                                        <div className="card-content">
                                            <div className="media">
                                                <div className="media-content has-text-centered">
                                                    <UnlockMetamask message="Unlock Your Metamask/Mist Wallet" />
                                                    <Description />
                                                    <a href="/" className="button is-info" onClick={this.unlockAccount}>Unlock Account</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                )
            }else {
                return (
                    <div><Nav appName={this.appName} network={this.state.network} />
                        <div className="container">
                            <section className="articles">
                                <div className="column is-8 is-offset-2">
                                    <div className="card article">
                                        <div className="card-content">
                                            <div className="media">
                                                <div className="media-content has-text-centered">
                                                    <Description />
                                                    <AddressBar account={this.state.account} totalsupply={this.state.totalSupply} playrpg={this.playRPG} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    </div>
                )
            }
        }else{
            return(
                <InstallMetamask />
            )
        }
    }
}

export default App;