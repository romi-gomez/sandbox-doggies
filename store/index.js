export const state = () => ({
  connectedAccount: '',
  contractAddress: '0xc7df86762ba83f2a6197e1ff9bb40ae0f696b9e6',
  currentTokenData: null,
  isConnected: false
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
  setIsConnected(state, isConnected) {
    state.isConnected = isConnected
  },
}

