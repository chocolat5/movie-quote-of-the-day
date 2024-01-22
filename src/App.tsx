import { Fragment, useCallback, useState } from "react";
import { css } from "@emotion/react";
import copy from "copy-to-clipboard";

import Header from "@/src/components/Layout/Header";
import Footer from "@/src/components/Layout/Footer";
import QuoteBlock from "@/src/components/QuoteBlock";
import Button from "@/src/components/UI/Button";
import SelectButton from "@/src/components/UI/SelectButton";

import { Theme, TextSize } from "@/src/types";
import themes from "@/src/utils/themes";
import sizes from "@/src/utils/sizes";
// eslint-disable-next-line import/extensions
import quotes from "@/src/data/quotes.json";

const styles = {
  main: css`
    max-width: var(--main);
    margin: 0 auto;
    padding: 0 24px;
    @media screen and (min-width: 900px) {
      padding: 0;
    }
  `,
  headline: css`
    margin: 24px 0 8px;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.2;
  `,
  description: css`
    margin: 32px auto;
  `,
  list: css`
    list-style: decimal;
    list-style-position: inside;
    line-height: 1.8;
  `,
  selectors: css`
    margin: 32px 0;
    @media screen and (min-width: 900px) {
      display: flex;
      gap: 24px;
    }
  `,
  selectorsTheme: css`
    @media screen and (max-width: 599px) {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      button {
        &:nth-child(n + 4) {
          border-top: none;
        }
        &:nth-of-type(3) {
          border-radius: 0 8px 0 0;
        }
        &:nth-of-type(4) {
          border-left: 1px solid var(--border);
        }
        &:nth-of-type(6) {
          border-radius: 0 0 8px 0;
        }
        &.-variant-left {
          border-radius: 8px 0 0 0;
        }
        &.-variant-right {
          border-radius: 0 0 8px 8px;
          border-left: 1px solid var(--border);
        }
      }
    }
  `,
  selectType: css`
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 600;
  `,
  button: css`
    display: flex;
    justify-content: center;
    margin: 32px 0 0;
  `,
};

function App() {
  const [copied, setCopied] = useState<boolean | null>(null);
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);
  const [currentSize, setCurrentSize] = useState<TextSize>(sizes[0]);

  const handleThemeChange = useCallback((id: string) => {
    const current = themes.filter((theme: Theme) => theme.id === id);
    setCurrentTheme(current[0]);
  }, []);

  const handleSizeChange = useCallback((size: TextSize["id"]) => {
    const current = sizes.filter((sizeItem: TextSize) => sizeItem.id === size);
    setCurrentSize(current[0]);
  }, []);

  const handleCopy = () => {
    copy(
      `https://movie-quote-of-the-day.chocolat5.com/quote?theme=${currentTheme.id}&fontSize=${currentSize.id}`
    );
    setCopied(true);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <>
      <Header />
      <main css={styles.main}>
        <div css={styles.description}>
          <p>
            Minimal Movie Quotes Widget for Notion workspace.
            <br />
            Show a random quotes from all time best movies every time you open
            Notion.
          </p>
          <h2 css={styles.headline}>How to Use</h2>
          <ol css={styles.list}>
            <li>Create your own widget with styling.</li>
            <li>
              Click the “Copy URL” button to copy the URL to your clipboard.
            </li>
            <li>Type /embed in Notion to create a new embed block.</li>
            <li>Paste the URL from your clipboard.</li>
          </ol>
        </div>
        <QuoteBlock
          quote={quotes[0].quote}
          title={quotes[0].title}
          year={quotes[0].year}
          size={currentSize}
          theme={currentTheme}
        />
        <div css={styles.selectors}>
          <div>
            <h2 css={styles.selectType}>Theme:</h2>
            {themes.map((theme, i) => (
              <Fragment key={theme.id}>
                <SelectButton
                  id={theme.id}
                  selected={currentTheme.id === theme.id}
                  text={theme.label}
                  variant={
                    (i === 0 && "left") ||
                    (i === themes.length - 1 && "right") ||
                    "middle"
                  }
                  handleClick={() => handleThemeChange(theme.id)}
                />
              </Fragment>
            ))}
          </div>
          <div>
            <h2 css={styles.selectType}>Size:</h2>
            {sizes.map((sizeItem, j) => (
              <Fragment key={sizeItem.id}>
                <SelectButton
                  id={sizeItem.id}
                  selected={currentSize.id === sizeItem.id}
                  text={sizeItem.label}
                  variant={
                    (j === 0 && "left") ||
                    (j === sizes.length - 1 && "right") ||
                    "middle"
                  }
                  handleClick={() => handleSizeChange(sizeItem.id)}
                />
              </Fragment>
            ))}
          </div>
        </div>
        <div css={styles.button}>
          <Button
            copied={copied}
            text={copied ? "Copied" : "Copy URL"}
            handleClick={handleCopy}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
