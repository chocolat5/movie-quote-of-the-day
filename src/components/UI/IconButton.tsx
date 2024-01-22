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
  `,
};

interface Props {
  children: ReactNode;
  handleClick: () => void;
  ariaLabel: string;
}

export default function IconButton({
  children,
  handleClick,
  ariaLabel,
}: Props): ReactElement {
  return (
    <button
      type="button"
      css={styles.button}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
