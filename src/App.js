import React, {Component} from "react";
import axios from 'axios';
import FirstPage from "./components/FirstPage/FirstPage";
import { Routes, Route } from "react-router-dom";
import Kerala from "./components/OrgChart/Kerala";
import Bangalore from "./components/OrgChart/Bangalore";
import Assam from "./components/OrgChart/Assam";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/Navbar/About";

const ADDRESS = "0xf9b6260eb0dd4a801ee5fa754d88d576a788dea4";
const apikey = "TX499JN6SBINTNG7N6DJWZBR5R2HVFGDUW";
const endpoint =  "​https://api-rinkeby.etherscan.io/api/ ";

class App extends Component {
  constructor() {
		super();
		this.state = {
			balance: [],
		};
	}

  async componentDidMount() {
		const etherscan = await axios.get(endpoint + `?module=stats&action=tokensupply&contractaddress=${ADDRESS}&apikey=${apikey}`);

		let { result } = etherscan.data;
    console.log(result);
		this.setState({
		 balance: result,
		});
  }

  render() {
    const {balance} = this.state;

  return (
    <div>
      <Navbar />
      <p>{balance}</p>
      {console.log(balance)}
   
      <Routes>
        <Route exact path="/" element={<FirstPage />}></Route>
        <Route exact path="/kerala" element={<Kerala />}></Route>
        <Route exact path="/bangalore" element={<Bangalore />}></Route>
        <Route exact path="/assam" element={<Assam />}></Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
 };
}

export default App;
