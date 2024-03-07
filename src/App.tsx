import React, { useState } from "react"
import {
  Stat
} from './ui-components';

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const handleCallback = () => {
    setCount(count => count + 1)
  }

  return (
    <div>
      <p>count: {count}</p>
      <Stat initialValue="callback" callback={handleCallback} pasent={"+" + count + "%"} />
    </div>
  )
}

export default App

