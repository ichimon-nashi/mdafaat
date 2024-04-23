import { useState } from "react";
import Header from './components/Header'
import ContentPanel from './components/ContentPanel'
import './index.css'

function App() {

  const [activeTab, setActiveTab] = useState("JCRM")

  function handleActiveTab (clickedTab) {
      setActiveTab(clickedTab);
  }

  return (
      <div className="App">
        <Header 
          activeTab={activeTab}
          handleActiveTab={handleActiveTab}
        />
        <ContentPanel 
          activeTab={activeTab}
        />
      </div>
  )
}

export default App
