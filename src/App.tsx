import { useState } from "react";
import { css } from "@emotion/react";

import Header from "@/src/components/Layout/Header";

const styles = {
  cardStyle: css`
    padding: 2em;
    background-color: #afc8ad;
  `,
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div css={styles.cardStyle}>
        {/* eslint-disable-next-line react/button-has-type, @typescript-eslint/no-shadow */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
