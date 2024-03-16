import React, { useState } from "react"
import {
  SideBar,
  Stat
} from './ui-components';
import { Button } from "@aws-amplify/ui-react";
import LayoutComponent from "./Layout";

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
      <LayoutComponent>
        <p>count: {count}</p>
        <Stat />
        <Button onClick={handleReset} >reset</Button>
      </LayoutComponent>
    </div>
  )
}

export default App

