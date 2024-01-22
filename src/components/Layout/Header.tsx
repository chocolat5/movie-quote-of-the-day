import { css } from "@emotion/react";

const styles = {
  header: css`
    max-width: var(--main);
    margin: 0 auto;
    padding: 96px 0 0;
    text-align: center;
  `,
  title: css`
    font-size: 20px;
    font-family: "Arial Black", system-ui, Avenir, Helvetica, sans-serif;
    font-weight: 700;
    line-height: 1.2;
  `,
};

export default function Header() {
  return (
    <header css={styles.header}>
      <h1 css={styles.title}>The Movie Quote of the Day</h1>
    </header>
  );
}
