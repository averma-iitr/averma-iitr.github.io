"use client"

import { store } from "@/store"
import React from "react"
import { Provider } from "react-redux"
import App from "@/Components/App"

const Home = ()=> {
  return(
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Home