import { ReactElement } from "react";
import { css } from "@emotion/react";
import { Quote, Theme, TextSize } from "@/src/types";

const styles = {
  wrap: css`
    display: grid;
    place-items: center;
    width: 100%;
    min-height: 240px;
    padding: 24px;
    background-color: var(--white);
    border: 1px solid var(--border);
    border-radius: 2px;
    @media screen and (min-width: 600px) {
      padding: 40px;
    }
  `,
  quote: css`
    font-size: 24px;
    font-family: "Courier Prime", monospace;
    font-weight: 400;
    font-style: italic;
    line-height: 1.6;
    text-align: left;
  `,
  title: css`
    width: 100%;
    font-size: 18px;
    font-family: "Courier Prime", monospace;
    font-weight: 400;
    line-height: 1.8;
    text-align: right;
  `,
};

type Props = Omit<Quote, "size"> & {
  theme: Theme;
} & {
  size: TextSize;
};

export default function QuoteBlock({
  quote,
  title,
  year,
  size,
  theme,
}: Props): ReactElement {
  return (
    <div
      css={styles.wrap}
      style={{
        color: theme.color,
        backgroundColor: theme.bgColor,
      }}
    >
      <p css={styles.quote} style={{ fontSize: `${size.fontSize}px` }}>
        {quote}
      </p>
      <p css={styles.title}>
        - {title} ({year})
      </p>
    </div>
  );
}
