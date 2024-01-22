import { css } from "@emotion/react";

const styles = {
  footer: css`
    max-width: var(--main);
    margin: 0 auto;
    padding: 24px 0 96px;
    font-size: 12px;
    text-align: center;
  `,
  link: css`
    color: var(--primary);
    text-decoration: none;
    &:is(:hover, :focus-within) {
      text-decoration: underline;
    }
  `,
};

export default function Footer() {
  return (
    <footer css={styles.footer}>
      Made by{" "}
      <a
        css={styles.link}
        href="https://chocolat5.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        chocolat
      </a>{" "}
      • Source code on{" "}
      <a
        css={styles.link}
        href="https://github.com/chocolat5/movie-quote-of-the-day"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </footer>
  );
}
