const chat = {
  state: {
    socket: null
  },
  mutations: {
    CONNENT_SOCKET: (state, socket) => {
      state.socket = socket
    }
  }
}

export default chat
