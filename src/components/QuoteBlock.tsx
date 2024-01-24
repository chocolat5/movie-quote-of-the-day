import { ReactElement, useState } from "react";
import { css } from "@emotion/react";
import copy from "copy-to-clipboard";

import IconButton from "./UI/IconButton";
import { Quote, Theme, TextSize } from "../types";
import getRandomQuote from "../utils/helper";
// eslint-disable-next-line import/extensions
import quotes from "../data/quotes.json";

const styles = {
  wrap: css`
    width: 100%;
    display: grid;
    place-items: center;
    height: 100%;
    padding: 24px;
    @media screen and (min-width: 600px) {
      padding: 40px;
    }
  `,
  container: css`
    margin: 0 auto;
    @media screen and (min-width: 900px) {
      width: calc(var(--main) - 80px);
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
    margin-top: 20px;
    font-size: 18px;
    font-family: "Courier Prime", monospace;
    font-weight: 400;
    line-height: 1.8;
    text-align: right;
  `,
  actions: css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    width: 100%;
    margin-top: 24px;
  `,
  tooltip: css`
    padding: 1px 6px;
    color: var(--base);
    background-color: var(--primary700);
    border-radius: 4px;
    font-size: 12px;
  `,
};

type Props = {
  theme: Theme;
} & {
  size: TextSize;
};

export default function QuoteBlock({ size, theme }: Props): ReactElement {
  const [copiedQuote, setCopiedQuote] = useState<boolean | null>(null);
  const [currentQuote, setCurrentQuote] = useState<Omit<Quote, "size">>(
    getRandomQuote(quotes)
  );

  const handleCopyQuote = () => {
    copy(`${currentQuote.quote} - ${currentQuote.title}(${currentQuote.year})`);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(null), 1500);
  };

  const actions = (
    <div css={styles.actions}>
      <IconButton
        id="refresh"
        ariaLabel="refresh"
        handleClick={() => setCurrentQuote(getRandomQuote(quotes))}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 20C9.76667 20 7.875 19.225 6.325 17.675C4.775 16.125 4 14.2333 4 12C4 9.76667 4.775 7.875 6.325 6.325C7.875 4.775 9.76667 4 12 4C13.15 4 14.25 4.2375 15.3 4.7125C16.35 5.1875 17.25 5.86667 18 6.75V4H20V11H13V9H17.2C16.6667 8.06667 15.9375 7.33333 15.0125 6.8C14.0875 6.26667 13.0833 6 12 6C10.3333 6 8.91667 6.58333 7.75 7.75C6.58333 8.91667 6 10.3333 6 12C6 13.6667 6.58333 15.0833 7.75 16.25C8.91667 17.4167 10.3333 18 12 18C13.2833 18 14.4417 17.6333 15.475 16.9C16.5083 16.1667 17.2333 15.2 17.65 14H19.75C19.2833 15.7667 18.3333 17.2083 16.9 18.325C15.4667 19.4417 13.8333 20 12 20Z"
            fill="currentColor"
          />
        </svg>
      </IconButton>
      <IconButton
        id="tweet"
        ariaLabel="Tweet"
        text={`${currentQuote.quote}%20-%20${currentQuote.title}(${currentQuote.year})`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.27999 9.09 5.10999 7.38 2.99999 4.79C2.62999 5.42 2.41999 6.16 2.41999 6.94C2.41999 8.43 3.16999 9.75 4.32999 10.5C3.61999 10.5 2.95999 10.3 2.37999 10V10.03C2.37999 12.11 3.85999 13.85 5.81999 14.24C5.19072 14.4122 4.53009 14.4362 3.88999 14.31C4.1616 15.1625 4.69353 15.9084 5.41101 16.4429C6.12849 16.9775 6.99544 17.2737 7.88999 17.29C6.37362 18.4904 4.49399 19.1393 2.55999 19.13C2.21999 19.13 1.87999 19.11 1.53999 19.07C3.43999 20.29 5.69999 21 8.11999 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"
            fill="currentColor"
          />
        </svg>
      </IconButton>
      <IconButton
        id="copy"
        ariaLabel="Copy to Clipboard"
        handleClick={handleCopyQuote}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18C8.45 18 7.97917 17.8042 7.5875 17.4125C7.19583 17.0208 7 16.55 7 16V4C7 3.45 7.19583 2.97917 7.5875 2.5875C7.97917 2.19583 8.45 2 9 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V16C20 16.55 19.8042 17.0208 19.4125 17.4125C19.0208 17.8042 18.55 18 18 18H9ZM9 16H18V4H9V16ZM5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V6H5V20H16V22H5Z"
            fill="currentColor"
          />
        </svg>
      </IconButton>
      {copiedQuote && <p css={styles.tooltip}>Copied</p>}
    </div>
  );

  return (
    <div
      css={styles.wrap}
      style={{
        color: theme.color,
        backgroundColor: theme.bgColor,
      }}
    >
      <div css={styles.container}>
        <p css={styles.quote} style={{ fontSize: `${size.fontSize}px` }}>
          {currentQuote.quote}
        </p>
        <p css={styles.title}>
          - {currentQuote.title} ({currentQuote.year})
        </p>
        {actions}
      </div>
    </div>
  );
}
