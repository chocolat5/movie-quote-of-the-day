import { ReactElement } from "react";
import { css } from "@emotion/react";

const styles = {
  button: css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 138px;
    height: 40px;
    color: var(--white);
    background-color: var(--primary);
    border-radius: 4px;
    font-size: 15px;
    text-align: center;
    cursor: pointer;

    &:hover {
      filter: brightness(80%);
    }
  `,
};

interface Props {
  // eslint-disable-next-line react/require-default-props
  copied?: boolean | null;
  text: string;
  handleClick: () => void;
}

export default function Button({
  copied = false,
  text,
  handleClick,
}: Props): ReactElement {
  return (
    <button type="button" css={styles.button} onClick={handleClick}>
      {copied && (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75V4.75C16.0041 4.75 19.25 7.99594 19.25 12V12C19.25 16.0041 16.0041 19.25 12 19.25V19.25C7.99594 19.25 4.75 16.0041 4.75 12V12Z"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9.75 12.75L10.1837 13.6744C10.5275 14.407 11.5536 14.4492 11.9564 13.7473L14.25 9.75"
          />
        </svg>
      )}
      {text}
    </button>
  );
}
