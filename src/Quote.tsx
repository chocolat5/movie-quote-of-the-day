import { css } from "@emotion/react";

import QuoteBlock from "@/src/components/QuoteBlock";

import { Theme, TextSize } from "./types";
import themes from "@/src/utils/themes";
import sizes from "@/src/utils/sizes";

const styles = {
  main: css`
    display: grid;
    place-items: center;
    height: 100dvh;
    @media screen and (min-width: 900px) {
      padding: 0;
    }
  `,
};

function Quote() {
  const queryParameters = new URLSearchParams(window.location.search);
  const themeParam = queryParameters.get("theme");
  const sizeParam = queryParameters.get("fontSize");

  const currentTheme = themes.filter((theme: Theme) => theme.id === themeParam);
  const currentSize = sizes.filter(
    (sizeItem: TextSize) => sizeItem.id === sizeParam
  );

  return (
    <main css={styles.main}>
      <QuoteBlock size={currentSize[0]} theme={currentTheme[0]} />
    </main>
  );
}

export default Quote;
