window.firstPageId = 'cjg9'
        window.bi.sendBeat(12, 'Partially visible', {pageId: window.firstPageId})
        if (window.requestCloseWelcomeScreen) {
            window.requestCloseWelcomeScreen()
        }
        if (!window.__browser_deprecation__) {
            window.fedops.phaseStarted('partially_visible', {paramsOverrides: { pageId: firstPageId }})
        }