require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remind pumpkin good arctic opera squeeze'; 
let testAccounts = [
"0xbfab615303b44529b6660854e7df6e5db84ba3f2b5ffa8af2513a45610d398e4",
"0x0a1d59857c9bb94a39531e6348051aa2b4abcbf74e9a2d7dc74f31f9b1ac1130",
"0x57d932a6338d44e41a1a1c4e9776b590bc41241a50b3ace99a9d59bfe12ef7e5",
"0x329a45a5a2e2f2200612f6eae8dbc62c8ee8fd1fc36f81725747bb0052b5d765",
"0x0caffcf6d30ae19af91ca3efc23cd0f40e304745728b6ca4db08f198af99cafc",
"0x812fc5df59ba78b40f76656f801fb7a76db74a2b369c2e93768d5f21bda04b0c",
"0x5d8185f7dbbb5348336bf29554fc84cbd4fe0009be1ed6302d1a47be50262e96",
"0x54c25052c72ff75b2078a066faf85acd3e1e51f93b43720dd3b59361f461d72c",
"0x78f6f5b8ed0c9ca3ebf0ffe5d543e9785e0959b91af858f39389525dd11dd78d",
"0x3ab72681d7e1d7b0fbb5a159ca30776619ffa87efcc8e2b46230847d6c442b3a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

