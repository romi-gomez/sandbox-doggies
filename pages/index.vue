<template>
  <div class="container">
    <Logo class="container__logo" logo="snoop-logo.svg" size="300" />
    <ConnectMetamask class="container__connect" @connect="connectToMetamask()" />
    <SearchBar @search="searchToken()"/>
    <NftInfo v-if="$store.state.currentTokenData !== null" />
  </div>
</template>

<script>
 import Web3 from 'web3'
 import abi from '~/assets/data/ethereum/doggiesAbi.json'

export default {
  name: 'IndexPage',
  data: () =>{
    return {
      currentTokenId: 1234
      }
  },
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

          await contract.methods.tokenURI(this.$store.state.currentTokenId)
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
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;

    &__logo{

    }

    &__connect{

    }

    &__nftInfo{

    }
  }
</style>
