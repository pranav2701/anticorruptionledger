import React from "react";
import "./About.css";

const About = () => {
  
  return (
    
<div className="about">

<h1 className="aboutus">About Us</h1>

<br></br>
{/* <h3>What is a blockchain?</h3>

<p>-A blockchain is essentially a digital ledger of transactions that is duplicated and distributed across the entire network of computer systems on the blockchain.</p>
<p>- Each block in the chain contains a number of transactions, and every time a new transaction occurs on the blockchain, a record of that transaction is added to every participant's ledger.</p>
<p>-A "smart contract" is simply a program that runs on the Ethereum blockchain. It's a collection of code (its functions) and data (its state) that resides at a specific address on the Ethereum blockchain
</p>
<h3>But how do we eradicate corruption through blockchain?</h3>
<p>-The most general case of corruption that takes place during donation is donation overfilling, wherein using blockchain we can restrict the donation amount to a certain limit avoiding excess funding to swift away as corrupted money to the intermediators</p>
<p>-Blockchain could improve the transparency and disclosure of procurement processes, investment in which can be lost to corruption.</p>
<p>-After indulging blockchain to our project, to confirm the donated amount, he/she can verify it through looking into the transaction ledger which would be displayed in our front-end transparently. Furthermore, the donated money could be tracked remotely by the user by viewing the organization's ledger.</p> */}

{/* <h2>Abstract</h2> */}

<p className="aboutp">Blockchain- a decentralized ledger technology, provides an attractive and fool proof
way to organize modern finance, Currently any financial system depends on intermediaries for any transaction that occurs. The concept of blockchain eliminates the intermediaries and brings in transparency with the transactions that occur with the help of immutable ledgers built on the concept of hashing. We use this principle in the project to bring about immutable transactions and preserve its legitimacy and prevent tampering.

The objective of blockchain itself is decentralization and transparency. The Anti Corruption ledger does the same by recording transactions that occur when funds are donated to the government/NGO during any emergency and displaying them to the public. Since the ledgers are immutable, it creates a trustworthy environment for the public when it comes to contributing to the nation's needs. This eliminates the sense of distrust with the government and as to how the funds are used.

Presently there are many sites existing to help people in need whenever unforeseen circumstances like floods, famine, war, and disasters occur. People carry out financial contributions to help the victims but are often skeptical if their money is being used for the right cause or not. There is a lack of transparency about the money that is being spent and the contributors are often unaware of the impact created by their contributions. In order to combat this problem, where money is often misused for other purposes without reaching the needy, and with an aim of fighting against the possible loopholes of corruption we are building a blockchain-based solution where
users could track their contribution along with being informed of the total transaction carried out in a cause, with added insights about inflow and outflow of cash. Along with that, we present a dashboard of the total contribution or sum received, the amount spent, and the amount left in the treasure. Solutions like these are a hope to fight against corruption and ensure complete transparency to the donor as well as the skeptical contributors, who would be convinced by the transparency that their money is being used for the right cause..
</p>
</div>
);
};
export default About;
