import { ReactElement, useMemo } from "react";
import { css } from "@emotion/react";
import { ClickEvent } from "@/src/types";

const styles = {
  button: css`
    flex-grow: 1;
    flex-shrink: 1;
    color: var(--primary);
    border: 1px solid var(--border);
    background-color: var(--white);
    padding: 8px 16px;
    font-size: 13px;
    letter-spacing: 0.02em;
    text-align: center;
    cursor: pointer;

    &:hover {
      filter: brightness(94%);
    }

    &.-isSelected {
      color: var(--white);
      background-color: var(--primary);
      border-color: var(--primary);
    }

    &.-variant-right {
      border-radius: 0 8px 8px 0;
      border-left: 0;
    }

    &.-variant-left {
      border-radius: 8px 0 0 8px;
    }

    &.-variant-middle {
      border-left: 0;
    }
  `,
};

interface Props {
  id: string;
  text: string;
  handleClick: (event: ClickEvent) => void;
  variant: "right" | "left" | "middle";
  // eslint-disable-next-line react/require-default-props
  selected?: boolean;
}

export default function SelectButton({
  id,
  text,
  handleClick,
  variant = "middle",
  selected = false,
}: Props): ReactElement {
  const className = useMemo(() => {
    switch (variant) {
      case "right":
        return "-variant-right";
        break;
      case "left":
        return "-variant-left";
        break;
      default:
        return "-variant-middle";
    }
  }, [variant]);

  return (
    <button
      id={id}
      type="button"
      css={styles.button}
      onClick={handleClick}
      className={`${className} ${selected && "-isSelected"}`}
    >
      {text}
    </button>
  );
}
