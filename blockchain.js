
import block from "./block.js";

class blockchain{

    constructor(){
    
        this.chain = [this.genesis()];
        this.difficulty = 4;
    }
    
    genesis(){
        return new block(0,"01/15/2022","The first block","0");
    }
    
    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }
    
    addBlock(block){
    
        block.prevHash = this.getLastBlock().hash;
        block.mine(this.difficulty);
        this.chain.push(block);
    }
    valid(){
        for(let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const prevBlock = this.chain[i -1 ];
            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }
            if(currentBlock.prevHash !== prevBlock.hash){
                return false;
            }  
        }
        return true;
    }
}

export default blockchain;

let renad = new blockchain();
console.log('Block 1 : ')
renad.addBlock(new block(1, "1/6/8888", {amunt :4}));

console.log('Block 2 : ')
renad.addBlock(new block(2, "1/6/8888", {amunt :60}));

console.log('Block 3 : ')
renad.addBlock(new block(3, "1/6/8888", {amunt :6}));

console.log('Block 4 : ')
renad.addBlock(new block(4, "1/6/8888", {amunt :50}));

console.log('Block 5 : ')
renad.addBlock(new block(5, "1/6/8888", {amunt :3}));

console.log('Block 6 : ')
renad.addBlock(new block(6, "1/6/8888", {amunt :70}));

console.log('Block 7 : ')
renad.addBlock(new block(7, "1/6/8888", {amunt :9}));

console.log('Block 8 : ')
renad.addBlock(new block(8, "1/6/8888", {amunt :10}));

console.log('Block 9 : ')
renad.addBlock(new block(9, "1/6/8888", {amunt :7}));

console.log('Block 10 : ')
renad.addBlock(new block(10, "1/6/8888", {amunt :40}));

console.log('Is blockchain is valid ?  ' + renad.valid()); 

