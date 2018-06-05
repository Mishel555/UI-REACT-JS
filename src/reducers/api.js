const api = (state = [], action) => {
  switch (action.type) {
    case '':
    let data = action.data
      return [...state,
        data
    ]
    default:
    return state
  }
}

export default api
