class block {

 
    constructor(nonce , hash , prevHash , timestamp = "", data = []) {

        this.timestamp = timestamp;
        this.data = data;
        this.hash = hash;
        this.prevHash = prevHash; 
        this.nonce = nonce;
    }
}