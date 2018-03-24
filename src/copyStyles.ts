function isCSSStyleSheet(styleSheet: StyleSheet): styleSheet is CSSStyleSheet {
    return (styleSheet as CSSStyleSheet).cssRules !== undefined;
}

export function copyStyles(sourceDoc: Document, targetDoc: Document): void {
    Array.from(sourceDoc.styleSheets).forEach(styleSheet => {
        if (isCSSStyleSheet(styleSheet)) {
            // for <style> elements
            const newStyleEl = sourceDoc.createElement("style");

            Array.from(styleSheet.cssRules).forEach(cssRule => {
                // write the text of each rule into the body of the style element
                newStyleEl.appendChild(sourceDoc.createTextNode(cssRule.cssText));
            });

            targetDoc.head.appendChild(newStyleEl);
        } else if (styleSheet.href) {
            // for <link> elements loading CSS from a URL
            const newLinkEl = sourceDoc.createElement("link");

            newLinkEl.rel = "stylesheet";
            newLinkEl.href = styleSheet.href;
            targetDoc.head.appendChild(newLinkEl);
        }
    });
}
