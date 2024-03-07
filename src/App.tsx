import React, { useState } from "react"
import {
  Stat
} from './ui-components';
import { Button } from "@aws-amplify/ui-react";

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const handleCallback = () => {
    setCount(count => count + 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div>
      <p>count: {count}</p>
      <Stat initialValue="callback" callback={handleCallback} pasent={"+" + count + "%"} />
      <Button onClick={handleReset} >reset</Button>
    </div>
  )
}

export default App

