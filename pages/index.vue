<template>
  <div class="main">
    <div class="main__logos">
      <Logo class="main__logos--sb" logo="TSBLogo.svg" size="300" />
      <Logo class="main__logos--sd" logo="snoop-logo.svg" size="300" />
    </div>
    <ConnectMetamask class="main__connect" @connect="connectToMetamask()" />
    <SearchBar v-if="$store.state.isConnected" class="main__search-bar" @search="searchToken()"/>
    <TokenInfo v-if="$store.state.currentTokenData !== null" class="main__token-info"/>
  </div>
</template>

<script>
 import Web3 from 'web3'
 import abi from '~/assets/data/ethereum/doggiesAbi.json'

export default {
  name: 'IndexPage',
  mounted(){
    if(this.$store.state.connectedAccount !== ''){
      this.$store.commit('setIsConnected', true)
    }
  },
  methods: {
    async connectToMetamask (){
      try{
        if(window.ethereum){
          const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
          this.$store.commit('setConnectedAccount', accounts[0])
          if (this.$store.state.connectedAccount !== []) {
            this.$store.commit('setIsConnected', true)
          }
        }
      } catch (err ){
        console.error(err)
      }
    },
    async searchToken(){
      try{
        if(this.$store.state.isConnected){
          const web3 = new Web3(window.ethereum)
          const contract = new web3.eth.Contract(abi, this.$store.contractAddress)
          contract.options.address = this.$store.state.contractAddress

          const searchId = this.$store.state.currentTokenId !== '' && this.$store.state.currentTokenId.length === 4 ? this.$store.state.currentTokenId : this.generateRandomId(4)

          await contract.methods.tokenURI(searchId)
            .call()
            .then( url => {
              try{
                fetch(url)
                  .then( async (data) => {
                    const tokenData = await data.json()
                    this.$store.commit('setCurrentTokenData', tokenData)
                  })
              }catch(err){
                console.error(err)
              }
            })
        } else {
          console.log("you need to be connected to Metamask")
        }
      } catch(err){
        console.error(err)
      }
    },
    generateRandomId(digits){
      const id = []
      for(let i = 0; i < digits; i++ ){
        id.push(Math.floor(Math.random()*9)+1)
      }
      return id.reduce((accum, digit) => (accum * 10) + digit, 0)
    }
  }
}
</script>

<style lang="scss" scoped>

  .main {
    width: 90%;
    height: 100%;
    margin: 0 auto;

    &__logos{
      margin:4em 0 0 0 ;
    }
  }

</style>
