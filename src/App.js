import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Main from './components/main/Main'

function App() {
  return (
    <div className="App">
      <div class="eltdf-wrapper">
        <div class="eltdf-wrapper-inner">
          <div class="eltdf-double-grid-line-one"></div>
          <div class="eltdf-double-grid-line-two"></div>
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
      <div
        class="rbt-toolbar"
        data-theme="Laurent"
        data-featured=""
        data-button-position="65%"
        data-button-horizontal="right"
        data-button-alt="no"
      ></div>
    </div>
  )
}

export default App
