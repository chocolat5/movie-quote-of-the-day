import { ReactElement, ReactNode } from "react";
import { css } from "@emotion/react";

const styles = {
  button: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    padding: 0;
    color: var(--primary500);
    background: none;
    cursor: pointer;
    svg {
      fill: var(--primary500);
    }
    &:hover {
      filter: brightness(85%);
    }
  `,
};

interface Props {
  id: string;
  children: ReactNode;
  // eslint-disable-next-line react/require-default-props
  handleClick?: () => void;
  ariaLabel: string;
  // eslint-disable-next-line react/require-default-props
  text?: string;
}

export default function IconButton({
  id,
  children,
  handleClick,
  ariaLabel,
  text = "",
}: Props): ReactElement {
  if (id === "tweet") {
    return (
      <a
        id={id}
        className="twitter-share-button"
        href={`https://twitter.com/intent/tweet?url=https://movie-quote-of-the-day.chocolat5.com/&text=${text}&hashtags=MovieQuoteoftheDay`}
        target="_blank"
        rel="noopener noreferrer"
        type="button"
        css={styles.button}
        onClick={handleClick}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      id={id}
      type="button"
      css={styles.button}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
