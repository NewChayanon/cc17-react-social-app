// import './App.css'

import AhemeContextProvider from "./context/AuthenContext"
import PostContextProvider from "./context/PostContext"
import ThemeContextProvider from "./context/ThemeContext"
import Router from "./routes/Router"

function App() {


  return (
    <ThemeContextProvider>
      <AhemeContextProvider>
        <PostContextProvider>
          <Router />
        </PostContextProvider>
      </AhemeContextProvider>
    </ThemeContextProvider>
  )
}

export default App
