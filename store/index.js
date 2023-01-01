export const state = () => ({
  connectedAccount: [],
  contractAddress: null,
  ownAddress: null,
  contract:null
})

export const getters = {
  getConnectedAccount(state) {
    return state.connectedAccount
  },

  getContract(state){
    return state.contract
  }
}

export const mutations = {
  setConnectedAccount(state, connectedAccount) {
    state.connectedAccount = connectedAccount
  },
  setContract(state, contract){
    state.contract = contract
  }
}

