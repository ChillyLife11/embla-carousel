"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[1920],{1920:function(n,t,e){e.r(t),t.default='import React, { useCallback, useEffect, useState } from \'react\';\n\nexport const usePrevNextButtons = (emblaApi, onButtonClick) => {\n    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);\n    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);\n    \n    const onPrevButtonClick = useCallback(() => {\n        if (!emblaApi)\n            return;\n        emblaApi.scrollPrev();\n        if (onButtonClick)\n            onButtonClick(emblaApi);\n    }, [emblaApi, onButtonClick]);\n    \n    const onNextButtonClick = useCallback(() => {\n        if (!emblaApi)\n            return;\n        emblaApi.scrollNext();\n        if (onButtonClick)\n            onButtonClick(emblaApi);\n    }, [emblaApi, onButtonClick]);\n    \n    const onSelect = useCallback((emblaApi) => {\n        setPrevBtnDisabled(!emblaApi.canScrollPrev());\n        setNextBtnDisabled(!emblaApi.canScrollNext());\n    }, []);\n    \n    useEffect(() => {\n        if (!emblaApi)\n            return;\n        \n        onSelect(emblaApi);\n        emblaApi.on(\'reInit\', onSelect);\n        emblaApi.on(\'select\', onSelect);\n    }, [emblaApi, onSelect]);\n    \n    return {\n        prevBtnDisabled,\n        nextBtnDisabled,\n        onPrevButtonClick,\n        onNextButtonClick\n    };\n};\n\nexport const PrevButton = (props) => {\n    const { children, ...restProps } = props;\n    \n    return (<button className="embla__button embla__button--prev" type="button" {...restProps}>\n      <svg className="embla__button__svg" viewBox="0 0 532 532">\n        <path fill="currentColor" d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"/>\n      </svg>\n      {children}\n    </button>);\n};\n\nexport const NextButton = (props) => {\n    const { children, ...restProps } = props;\n    \n    return (<button className="embla__button embla__button--next" type="button" {...restProps}>\n      <svg className="embla__button__svg" viewBox="0 0 532 532">\n        <path fill="currentColor" d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"/>\n      </svg>\n      {children}\n    </button>);\n};\n'}}]);
//# sourceMappingURL=1920-271f090b72abfc1e121c.js.map