import React from 'react'
import ReactDOM from 'react-dom/client'
import '../sasslib/sasslib/style.scss'
import '../scss/index.scss'
import Navbar from './Navbar'
import Search from './Search'

ReactDOM.createRoot(document.getElementById('container')).render(
  <React.StrictMode>
    <Navbar />
    <Search />
  </React.StrictMode >,
)
