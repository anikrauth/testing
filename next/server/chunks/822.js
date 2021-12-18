"use strict";
exports.id = 822;
exports.ids = [822];
exports.modules = {

/***/ 8986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Seo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/lib/helper.ts
// !STARTERCONF This OG is generated from https://github.com/theodorusclarence/og
// Please clone them and self-host if your site is going to be visited by many people.
// Then change the url and the default logo.
function openGraph({ siteName , templateTitle , description , // !STARTERCONF Or, you can use my server with your own logo.
logo ='https://og.thcl.dev/images/logo.jpg'  }) {
    const ogLogo = encodeURIComponent(logo);
    const ogSiteName = encodeURIComponent(siteName.trim());
    const ogTemplateTitle = templateTitle ? encodeURIComponent(templateTitle.trim()) : undefined;
    const ogDesc = encodeURIComponent(description.trim());
    return `https://og.thcl.dev/api/general?siteName=${ogSiteName}&description=${ogDesc}&logo=${ogLogo}${ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}` : ''}`;
}

;// CONCATENATED MODULE: ./src/components/Seo.tsx




// !STARTERCONF Change these default meta
const defaultMeta = {
    title: 'Next.js + Tailwind CSS + TypeScript Starter',
    siteName: 'Next.js + Tailwind CSS + TypeScript Starter',
    description: 'A starter for Next.js, Tailwind CSS, and TypeScript with Absolute Import, Seo, Link component, pre-configured with Husky',
    url: 'https://tsnext-tw.thcl.dev',
    image: 'https://theodorusclarence.com/favicon/large-og.jpg',
    type: 'website',
    robots: 'follow, index'
};
function Seo(props) {
    const router = (0,router_.useRouter)();
    const meta = {
        ...defaultMeta,
        ...props
    };
    meta['title'] = props.templateTitle ? `${props.templateTitle} | ${meta.siteName}` : meta.title;
    // Use siteName if there is templateTitle
    // but show full title if there is none
    meta.image = openGraph({
        description: meta.description,
        siteName: props.templateTitle ? meta.siteName : meta.title,
        templateTitle: props.templateTitle
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: meta.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "robots",
                content: meta.robots
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                content: meta.description,
                name: "description"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:url",
                content: `${meta.url}${router.asPath}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "canonical",
                href: `${meta.url}${router.asPath}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:type",
                content: meta.type
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:site_name",
                content: meta.siteName
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:description",
                content: meta.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:title",
                content: meta.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "image",
                property: "og:image",
                content: meta.image
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:site",
                content: "@th_clarence"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:title",
                content: meta.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:description",
                content: meta.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:image",
                content: meta.image
            }),
            meta.date && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "article:published_time",
                        content: meta.date
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "publish_date",
                        property: "og:publish_date",
                        content: meta.date
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "author",
                        property: "article:author",
                        content: "Theodorus Clarence"
                    })
                ]
            }),
            favicons.map((linkProps)=>/*#__PURE__*/ jsx_runtime_.jsx("link", {
                    ...linkProps
                }, linkProps.href)
            ),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "msapplication-TileColor",
                content: "#ffffff"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "msapplication-TileImage",
                content: "/favicon/ms-icon-144x144.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "theme-color",
                content: "#ffffff"
            })
        ]
    }));
};
// !STARTERCONF this is the default favicon, you can generate your own from https://www.favicon-generator.org/
// then replace the whole /public/favicon folder
const favicons = [
    {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/favicon/apple-icon-57x57.png'
    },
    {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/favicon/apple-icon-60x60.png'
    },
    {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/favicon/apple-icon-72x72.png'
    },
    {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/favicon/apple-icon-76x76.png'
    },
    {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/favicon/apple-icon-114x114.png'
    },
    {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/favicon/apple-icon-120x120.png'
    },
    {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/favicon/apple-icon-144x144.png'
    },
    {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/favicon/apple-icon-152x152.png'
    },
    {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-icon-180x180.png'
    },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/favicon/android-icon-192x192.png'
    },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png'
    },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon/favicon-96x96.png'
    },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png'
    },
    {
        rel: 'manifest',
        href: '/favicon/manifest.json'
    }, 
];


/***/ }),

/***/ 6323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Layout({ children  }) {
    // Put Header or Footer Here
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    }));
};


/***/ }),

/***/ 4248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ArrowLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_links_CustomLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6378);




function ArrowLink({ children , className , direction ='right' , as , ...rest }) {
    const Component = as || _components_links_CustomLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Component, {
        ...rest,
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(className, 'gap-[0.25em] group', direction === 'left' && 'flex-row-reverse'),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: children
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                viewBox: "0 0 16 16",
                height: "1em",
                width: "1em",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('relative', 'transition-transform duration-200', direction === 'right' ? 'motion-safe:-translate-x-1' : 'rotate-180', 'group-hover:translate-x-0'),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fill: "currentColor",
                        d: "M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        stroke: "currentColor",
                        d: "M1.75 8H11",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('transition-all duration-200 origin-left', 'opacity-0 motion-safe:-translate-x-1', 'group-hover:opacity-100 group-hover:translate-x-0')
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 6378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CustomLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_links_UnstyledLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7466);



function CustomLink({ children , className , ...rest }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_links_UnstyledLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...rest,
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('animated-underline custom-link inline-flex items-center font-semibold', 'focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-primary-500', 'border-dark border-b border-dotted hover:border-black/0', className),
        children: children
    }));
};


/***/ }),

/***/ 7466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UnstyledLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);



function UnstyledLink({ children , href , openNewTab , className , nextLinkProps , ...rest }) {
    const isNewTab = openNewTab !== undefined ? openNewTab : href && !href.startsWith('/') && !href.startsWith('#');
    if (!isNewTab) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
            href: href,
            ...nextLinkProps,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                ...rest,
                className: className,
                children: children
            })
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: href,
        ...rest,
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(className, 'cursor-newtab'),
        children: children
    }));
};


/***/ })

};
;