export const state = () => ({
  connectedAccount: '',
  contractAddress: '0xc7df86762ba83f2a6197e1ff9bb40ae0f696b9e6',
  currentTokenData: null,
  currentTokenId: 0,
  isConnected: false,
})

export const getters = {
  getConnectedAccount(state) {
    return state.connectedAccount
  },
  getContractAddress(state) {
    return state.contractAddress
  },
  getCurrentTokenData(state){
    return state.currentTokenData
  },
  getCurrentTokenId(state){
    return state.currentTokenId
  },
  getIsConnected(state){
    return state.isConnected
  }
}

export const mutations = {
  setConnectedAccount(state, connectedAccount) {
    state.connectedAccount = connectedAccount
  },
  setContractAdress(state, contractAddress) {
    state.contractAddress = contractAddress
  },
  setCurrentTokenData(state, currentTokenData){
    state.currentTokenData = currentTokenData
  },
  setCurrentTokenId(state, currentTokenId){
    state.currentTokenId = currentTokenId
  },
  setIsConnected(state, isConnected) {
    state.isConnected = isConnected
  },
}

