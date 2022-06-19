import sha256 from 'crypto-js/sha256.js';
//const sha256 = require('crypto-js/sha256');

class block {


    constructor(hight, timestamp, data, prevHash = '') {
    this.hight=hight;
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = prevHash; 
    this.hash = this.calculateHash();
    this.nonce = 0;
    }

calculateHash(){
    return sha256(this.hight+ this.prevHash+ this.timestamp+ JSON.stringify(this.data) + this.nonce).toString();
}

mine(difficulty) {
   
    while (this.hash.substring(0, difficulty)!=="".padStart(difficulty, "0")) {
        this.nonce++;
        this.hash = this.calculateHash();
    }
    //console.log("Block mined:" + this.hash);
 }
}

export default block