/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ './src/js/_components.js':
      /*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _components_scrollreveal_min__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./components/scrollreveal.min */ './src/js/components/scrollreveal.min.js',
          );
        /* harmony import */ var _components_scrollreveal_min__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _components_scrollreveal_min__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _components_scoll_min__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./components/scoll.min */ './src/js/components/scoll.min.js');
        /* harmony import */ var _components_scoll_min__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(_components_scoll_min__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */ var _components_burger__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./components/burger */ './src/js/components/burger.js');
        /* harmony import */ var _components_burger__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(_components_burger__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./components/select */ './src/js/components/select.js');
        /* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(_components_select__WEBPACK_IMPORTED_MODULE_3__);

        /***/
      },

    /***/ './src/js/_functions.js':
      /*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./functions/mobile-check */ './src/js/functions/mobile-check.js');
        // Данный файл - лишь собрание подключений готовых компонентов.
        // Рекомендуется создавать отдельный файл в папке components и подключать все там

        // Определение операционной системы на мобильных

        console.log((0, _functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__.mobileCheck)());

        // Определение ширины экрана
        // import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
        // if (isDesktop()) {
        //   console.log('...')
        // }

        // Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
        // import { throttle } from './functions/throttle';
        // let yourFunc = () => { console.log('throttle') };
        // let func = throttle(yourFunc);
        // window.addEventListener('resize', func);

        // Фикс фулскрин-блоков
        // import './functions/fix-fullheight';

        // Реализация бургер-меню
        // import { burger } from './functions/burger';

        // Реализация остановки скролла (не забудьте вызвать функцию)
        // import { disableScroll } from './functions/disable-scroll';

        // Реализация включения скролла (не забудьте вызвать функцию)
        // import { enableScroll } from './functions/enable-scroll';

        // Реализация модального окна
        // import GraphModal from 'graph-modal';
        // const modal = new GraphModal();

        // Реализация табов
        // import GraphTabs from 'graph-tabs';
        // const tabs = new GraphTabs('tab');

        // Получение высоты шапки сайта (не забудьте вызвать функцию)
        // import { getHeaderHeight } from './functions/header-height';

        // Подключение плагина кастом-скролла
        // import 'simplebar';

        // Подключение плагина для позиционирования тултипов
        // import { createPopper, right} from '@popperjs/core';
        // createPopper(el, tooltip, {
        //   placement: 'right'
        // });

        // Подключение свайпера
        // import Swiper, { Navigation, Pagination } from 'swiper';
        // Swiper.use([Navigation, Pagination]);
        // const swiper = new Swiper(el, {
        //   slidesPerView: 'auto',
        // });

        // Подключение анимаций по скроллу
        // import AOS from 'aos';
        // AOS.init();

        // Подключение параллакса блоков при скролле
        // import Rellax from 'rellax';
        // const rellax = new Rellax('.rellax');

        // Подключение плавной прокрутки к якорям
        // import SmoothScroll from 'smooth-scroll';
        // const scroll = new SmoothScroll('a[href*="#"]');

        // Подключение событий свайпа на мобильных
        // import 'swiped-events';
        // document.addEventListener('swiped', function(e) {
        //   console.log(e.target);
        //   console.log(e.detail);
        //   console.log(e.detail.dir);
        // });

        // import { validateForms } from './functions/validate-forms';
        // const rules1 = [...];

        // const afterForm = () => {
        //   console.log('Произошла отправка, тут можно писать любые действия');
        // };

        // validateForms('.form-1', rules1, afterForm);

        /***/
      },

    /***/ './src/js/_vars.js':
      /*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
          windowEl: window,
          documentEl: document,
          htmlEl: document.documentElement,
          bodyEl: document.body,
        };

        /***/
      },

    /***/ './src/js/_vendor.js':
      /*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./vendor/focus-visible.js */ './src/js/vendor/focus-visible.js');
        /* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__,
          );

        /***/
      },

    /***/ './src/js/components/burger.js':
      /*!*************************************!*\
  !*** ./src/js/components/burger.js ***!
  \*************************************/
      /***/ () => {
        $('.mobile div').on('click', () => {
          $('.mobile div').toggleClass('active');
          $('.mobile nav').toggleClass('open');
          $('.mobile nav ul').toggleClass('show');
        });
        $('.mobile .mobile__link').on('click', () => {
          $('.mobile div').removeClass('active');
          $('.mobile nav').removeClass('open');
          $('.mobile nav ul').removeClass('show');
        });
        for (let a = 1; a <= $('.mobile ul li').length; a++) {
          $('.mobile ul li:nth-child(' + a + ')').css('animation-delay', '.' + (a + 1) + 's');
        }

        /***/
      },

    /***/ './src/js/components/scoll.min.js':
      /*!****************************************!*\
  !*** ./src/js/components/scoll.min.js ***!
  \****************************************/
      /***/ () => {
        document.addEventListener('DOMContentLoaded', function () {
          var e = (function () {
              if ('scrollingElement' in document) return document.scrollingElement;
              var a = document.documentElement,
                b = a.scrollTop;
              a.scrollTop = b + 1;
              var c = a.scrollTop;
              a.scrollTop = b;
              return c > b ? a : document.body;
            })(),
            h = function (a) {
              var b = e.scrollTop;
              if (2 > a.length) a = -b;
              else if ((a = document.querySelector(a))) {
                a = a.getBoundingClientRect().top;
                var c = e.scrollHeight - window.innerHeight;
                a = b + a < c ? a : c - b;
              } else a = void 0;
              if (a)
                return new Map([
                  ['start', b],
                  ['delta', a],
                ]);
            },
            m = function (a) {
              var b = a.getAttribute('href'),
                c = h(b);
              if (c) {
                var d = new Map([['duration', 800]]),
                  k = performance.now();
                requestAnimationFrame(function l(a) {
                  d.set('elapsed', a - k);
                  a = d.get('duration');
                  var f = d.get('elapsed'),
                    g = c.get('start'),
                    h = c.get('delta');
                  e.scrollTop = Math.round(h * (-Math.pow(2, (-10 * f) / a) + 1) + g);
                  d.get('elapsed') < d.get('duration')
                    ? requestAnimationFrame(l)
                    : (history.pushState(null, null, b),
                      (e.scrollTop = c.get('start') + c.get('delta')));
                });
              }
            },
            n = function b(c, d) {
              var e = c.item(d);
              e.addEventListener('click', function (b) {
                b.preventDefault();
                m(e);
              });
              if (d) return b(c, d - 1);
            },
            f = document.querySelectorAll('a.scroll'),
            g = f.length - 1;
          0 > g || n(f, g);
        });

        /***/
      },

    /***/ './src/js/components/scrollreveal.min.js':
      /*!***********************************************!*\
  !*** ./src/js/components/scrollreveal.min.js ***!
  \***********************************************/
      /***/ () => {
        /*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/
        var ScrollReveal = (function () {
          'use strict';

          var r = {
            delay: 0,
            distance: '0',
            duration: 600,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            interval: 0,
            opacity: 0,
            origin: 'bottom',
            rotate: {
              x: 0,
              y: 0,
              z: 0,
            },
            scale: 1,
            cleanup: !1,
            container: document.documentElement,
            desktop: !0,
            mobile: !0,
            reset: !1,
            useDelay: 'always',
            viewFactor: 0,
            viewOffset: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            },
            afterReset: function () {},
            afterReveal: function () {},
            beforeReset: function () {},
            beforeReveal: function () {},
          };
          var n = {
            success: function () {
              document.documentElement.classList.add('sr'),
                document.body
                  ? (document.body.style.height = '100%')
                  : document.addEventListener('DOMContentLoaded', function () {
                      document.body.style.height = '100%';
                    });
            },
            failure: function () {
              return (
                document.documentElement.classList.remove('sr'),
                {
                  clean: function () {},
                  destroy: function () {},
                  reveal: function () {},
                  sync: function () {},
                  get noop() {
                    return !0;
                  },
                }
              );
            },
          };
          function o(e) {
            return 'object' == typeof window.Node
              ? e instanceof window.Node
              : null !== e &&
                  'object' == typeof e &&
                  'number' == typeof e.nodeType &&
                  'string' == typeof e.nodeName;
          }
          function u(e, t) {
            if ((void 0 === t && (t = document), e instanceof Array)) return e.filter(o);
            if (o(e)) return [e];
            if (
              ((n = e),
              (i = Object.prototype.toString.call(n)),
              'object' == typeof window.NodeList
                ? n instanceof window.NodeList
                : null !== n &&
                  'object' == typeof n &&
                  'number' == typeof n.length &&
                  /^\[object (HTMLCollection|NodeList|Object)\]$/.test(i) &&
                  (0 === n.length || o(n[0])))
            )
              return Array.prototype.slice.call(e);
            var n, i;
            if ('string' == typeof e)
              try {
                var r = t.querySelectorAll(e);
                return Array.prototype.slice.call(r);
              } catch (e) {
                return [];
              }
            return [];
          }
          function s(e) {
            return (
              null !== e &&
              e instanceof Object &&
              (e.constructor === Object || '[object Object]' === Object.prototype.toString.call(e))
            );
          }
          function f(n, i) {
            if (s(n))
              return Object.keys(n).forEach(function (e) {
                return i(n[e], e, n);
              });
            if (n instanceof Array)
              return n.forEach(function (e, t) {
                return i(e, t, n);
              });
            throw new TypeError('Expected either an array or object literal.');
          }
          function h(e) {
            for (var t = [], n = arguments.length - 1; 0 < n--; ) t[n] = arguments[n + 1];
            if (this.constructor.debug && console) {
              var i = '%cScrollReveal: ' + e;
              t.forEach(function (e) {
                return (i += '\n — ' + e);
              }),
                console.log(i, 'color: #ea654b;');
            }
          }
          function t() {
            var n = this,
              i = {
                active: [],
                stale: [],
              },
              t = {
                active: [],
                stale: [],
              },
              r = {
                active: [],
                stale: [],
              };
            try {
              f(u('[data-sr-id]'), function (e) {
                var t = parseInt(e.getAttribute('data-sr-id'));
                i.active.push(t);
              });
            } catch (e) {
              throw e;
            }
            f(this.store.elements, function (e) {
              -1 === i.active.indexOf(e.id) && i.stale.push(e.id);
            }),
              f(i.stale, function (e) {
                return delete n.store.elements[e];
              }),
              f(this.store.elements, function (e) {
                -1 === r.active.indexOf(e.containerId) && r.active.push(e.containerId),
                  e.hasOwnProperty('sequence') &&
                    -1 === t.active.indexOf(e.sequence.id) &&
                    t.active.push(e.sequence.id);
              }),
              f(this.store.containers, function (e) {
                -1 === r.active.indexOf(e.id) && r.stale.push(e.id);
              }),
              f(r.stale, function (e) {
                var t = n.store.containers[e].node;
                t.removeEventListener('scroll', n.delegate),
                  t.removeEventListener('resize', n.delegate),
                  delete n.store.containers[e];
              }),
              f(this.store.sequences, function (e) {
                -1 === t.active.indexOf(e.id) && t.stale.push(e.id);
              }),
              f(t.stale, function (e) {
                return delete n.store.sequences[e];
              });
          }
          function N(e) {
            if (e.constructor !== Array) throw new TypeError('Expected array.');
            if (16 === e.length) return e;
            if (6 !== e.length) throw new RangeError('Expected array with either 6 or 16 values.');
            var t = z();
            return (
              (t[0] = e[0]),
              (t[1] = e[1]),
              (t[4] = e[2]),
              (t[5] = e[3]),
              (t[12] = e[4]),
              (t[13] = e[5]),
              t
            );
          }
          function z() {
            for (var e = [], t = 0; t < 16; t++) t % 5 == 0 ? e.push(1) : e.push(0);
            return e;
          }
          function F(e, t) {
            for (var n = N(e), i = N(t), r = [], o = 0; o < 4; o++)
              for (var s = [n[o], n[o + 4], n[o + 8], n[o + 12]], a = 0; a < 4; a++) {
                var c = 4 * a,
                  l = [i[c], i[c + 1], i[c + 2], i[c + 3]],
                  d = s[0] * l[0] + s[1] * l[1] + s[2] * l[2] + s[3] * l[3];
                r[o + c] = d;
              }
            return r;
          }
          function D(e, t) {
            var n = z();
            return (n[0] = e), (n[5] = 'number' == typeof t ? t : e), n;
          }
          var S = (function () {
            var n = {},
              i = document.documentElement.style;
            function e(e, t) {
              if ((void 0 === t && (t = i), e && 'string' == typeof e)) {
                if (n[e]) return n[e];
                if ('string' == typeof t[e]) return (n[e] = e);
                if ('string' == typeof t['-webkit-' + e]) return (n[e] = '-webkit-' + e);
                throw new RangeError('Unable to find "' + e + '" style property.');
              }
              throw new TypeError('Expected a string.');
            }
            return (
              (e.clearCache = function () {
                return (n = {});
              }),
              e
            );
          })();
          function p(e) {
            var t = window.getComputedStyle(e.node),
              n = t.position,
              i = e.config,
              r = {},
              o = (e.node.getAttribute('style') || '').match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [];
            (r.computed = o
              ? o
                  .map(function (e) {
                    return e.trim();
                  })
                  .join('; ') + ';'
              : ''),
              (r.generated = o.some(function (e) {
                return e.match(/visibility\s?:\s?visible/i);
              })
                ? r.computed
                : o
                    .concat(['visibility: visible'])
                    .map(function (e) {
                      return e.trim();
                    })
                    .join('; ') + ';');
            var s,
              a,
              c,
              l,
              d,
              u,
              f,
              h,
              p,
              m,
              y,
              v,
              g,
              b = parseFloat(t.opacity),
              w = isNaN(parseFloat(i.opacity)) ? parseFloat(t.opacity) : parseFloat(i.opacity),
              E = {
                computed: b !== w ? 'opacity: ' + b + ';' : '',
                generated: b !== w ? 'opacity: ' + w + ';' : '',
              },
              j = [];
            if (parseFloat(i.distance)) {
              var T = 'top' === i.origin || 'bottom' === i.origin ? 'Y' : 'X',
                k = i.distance;
              ('top' !== i.origin && 'left' !== i.origin) ||
                (k = /^-/.test(k) ? k.substr(1) : '-' + k);
              var O = k.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),
                x = O[0];
              switch (O[1]) {
                case 'em':
                  k = parseInt(t.fontSize) * x;
                  break;
                case 'px':
                  k = x;
                  break;
                case '%':
                  k =
                    'Y' === T
                      ? (e.node.getBoundingClientRect().height * x) / 100
                      : (e.node.getBoundingClientRect().width * x) / 100;
                  break;
                default:
                  throw new RangeError('Unrecognized or missing distance unit.');
              }
              'Y' === T
                ? j.push(((c = k), ((l = z())[13] = c), l))
                : j.push(((s = k), ((a = z())[12] = s), a));
            }
            i.rotate.x &&
              j.push(
                ((d = i.rotate.x),
                (u = (Math.PI / 180) * d),
                ((f = z())[5] = f[10] = Math.cos(u)),
                (f[6] = f[9] = Math.sin(u)),
                (f[9] *= -1),
                f),
              ),
              i.rotate.y &&
                j.push(
                  ((h = i.rotate.y),
                  (p = (Math.PI / 180) * h),
                  ((m = z())[0] = m[10] = Math.cos(p)),
                  (m[2] = m[8] = Math.sin(p)),
                  (m[2] *= -1),
                  m),
                ),
              i.rotate.z &&
                j.push(
                  ((y = i.rotate.z),
                  (v = (Math.PI / 180) * y),
                  ((g = z())[0] = g[5] = Math.cos(v)),
                  (g[1] = g[4] = Math.sin(v)),
                  (g[4] *= -1),
                  g),
                ),
              1 !== i.scale && (0 === i.scale ? j.push(D(2e-4)) : j.push(D(i.scale)));
            var R = {};
            if (j.length) {
              (R.property = S('transform')),
                (R.computed = {
                  raw: t[R.property],
                  matrix: (function (e) {
                    if ('string' == typeof e) {
                      var t = e.match(/matrix(3d)?\(([^)]+)\)/);
                      if (t) return N(t[2].split(', ').map(parseFloat));
                    }
                    return z();
                  })(t[R.property]),
                }),
                j.unshift(R.computed.matrix);
              var q = j.reduce(F);
              R.generated = {
                initial: R.property + ': matrix3d(' + q.join(', ') + ');',
                final: R.property + ': matrix3d(' + R.computed.matrix.join(', ') + ');',
              };
            } else
              R.generated = {
                initial: '',
                final: '',
              };
            var A = {};
            if (E.generated || R.generated.initial) {
              (A.property = S('transition')), (A.computed = t[A.property]), (A.fragments = []);
              var P = i.delay,
                L = i.duration,
                M = i.easing;
              E.generated &&
                A.fragments.push({
                  delayed: 'opacity ' + L / 1e3 + 's ' + M + ' ' + P / 1e3 + 's',
                  instant: 'opacity ' + L / 1e3 + 's ' + M + ' 0s',
                }),
                R.generated.initial &&
                  A.fragments.push({
                    delayed: R.property + ' ' + L / 1e3 + 's ' + M + ' ' + P / 1e3 + 's',
                    instant: R.property + ' ' + L / 1e3 + 's ' + M + ' 0s',
                  }),
                A.computed &&
                  !A.computed.match(/all 0s|none 0s/) &&
                  A.fragments.unshift({
                    delayed: A.computed,
                    instant: A.computed,
                  });
              var I = A.fragments.reduce(
                function (e, t, n) {
                  return (
                    (e.delayed += 0 === n ? t.delayed : ', ' + t.delayed),
                    (e.instant += 0 === n ? t.instant : ', ' + t.instant),
                    e
                  );
                },
                {
                  delayed: '',
                  instant: '',
                },
              );
              A.generated = {
                delayed: A.property + ': ' + I.delayed + ';',
                instant: A.property + ': ' + I.instant + ';',
              };
            } else
              A.generated = {
                delayed: '',
                instant: '',
              };
            return {
              inline: r,
              opacity: E,
              position: n,
              transform: R,
              transition: A,
            };
          }
          function m(r, e) {
            e.split(';').forEach(function (e) {
              var t = e.split(':'),
                n = t[0],
                i = t.slice(1);
              n && i && (r.style[n.trim()] = i.join(':'));
            });
          }
          function y(e) {
            var i,
              r = this;
            try {
              f(u(e), function (e) {
                var t = e.getAttribute('data-sr-id');
                if (null !== t) {
                  i = !0;
                  var n = r.store.elements[t];
                  n.callbackTimer && window.clearTimeout(n.callbackTimer.clock),
                    m(n.node, n.styles.inline.generated),
                    e.removeAttribute('data-sr-id'),
                    delete r.store.elements[t];
                }
              });
            } catch (e) {
              return h.call(this, 'Clean failed.', e.message);
            }
            if (i)
              try {
                t.call(this);
              } catch (e) {
                return h.call(this, 'Clean failed.', e.message);
              }
          }
          function v(n) {
            for (var e = [], t = arguments.length - 1; 0 < t--; ) e[t] = arguments[t + 1];
            if (s(n))
              return (
                f(e, function (e) {
                  f(e, function (e, t) {
                    s(e) ? ((n[t] && s(n[t])) || (n[t] = {}), v(n[t], e)) : (n[t] = e);
                  });
                }),
                n
              );
            throw new TypeError('Target must be an object literal.');
          }
          function g(e) {
            return void 0 === e && (e = navigator.userAgent), /Android|iPhone|iPad|iPod/i.test(e);
          }
          var e,
            b =
              ((e = 0),
              function () {
                return e++;
              });
          function w() {
            var n = this;
            t.call(this),
              f(this.store.elements, function (e) {
                var t = [e.styles.inline.generated];
                e.visible
                  ? (t.push(e.styles.opacity.computed),
                    t.push(e.styles.transform.generated.final),
                    (e.revealed = !0))
                  : (t.push(e.styles.opacity.generated),
                    t.push(e.styles.transform.generated.initial),
                    (e.revealed = !1)),
                  m(
                    e.node,
                    t
                      .filter(function (e) {
                        return '' !== e;
                      })
                      .join(' '),
                  );
              }),
              f(this.store.containers, function (e) {
                var t = e.node === document.documentElement ? window : e.node;
                t.addEventListener('scroll', n.delegate), t.addEventListener('resize', n.delegate);
              }),
              this.delegate(),
              (this.initTimeout = null);
          }
          function c(e, t) {
            void 0 === t && (t = {});
            var n = t.pristine || this.pristine,
              i =
                'always' === e.config.useDelay ||
                ('onload' === e.config.useDelay && n) ||
                ('once' === e.config.useDelay && !e.seen),
              r = e.visible && !e.revealed,
              o = !e.visible && e.revealed && e.config.reset;
            return t.reveal || r
              ? function (e, t) {
                  var n = [
                    e.styles.inline.generated,
                    e.styles.opacity.computed,
                    e.styles.transform.generated.final,
                  ];
                  t
                    ? n.push(e.styles.transition.generated.delayed)
                    : n.push(e.styles.transition.generated.instant);
                  (e.revealed = e.seen = !0),
                    m(
                      e.node,
                      n
                        .filter(function (e) {
                          return '' !== e;
                        })
                        .join(' '),
                    ),
                    a.call(this, e, t);
                }.call(this, e, i)
              : t.reset || o
              ? function (e) {
                  var t = [
                    e.styles.inline.generated,
                    e.styles.opacity.generated,
                    e.styles.transform.generated.initial,
                    e.styles.transition.generated.instant,
                  ];
                  (e.revealed = !1),
                    m(
                      e.node,
                      t
                        .filter(function (e) {
                          return '' !== e;
                        })
                        .join(' '),
                    ),
                    a.call(this, e);
                }.call(this, e)
              : void 0;
          }
          function a(e, t) {
            var n = this,
              i = t ? e.config.duration + e.config.delay : e.config.duration,
              r = e.revealed ? e.config.beforeReveal : e.config.beforeReset,
              o = e.revealed ? e.config.afterReveal : e.config.afterReset,
              s = 0;
            e.callbackTimer &&
              ((s = Date.now() - e.callbackTimer.start),
              window.clearTimeout(e.callbackTimer.clock)),
              r(e.node),
              (e.callbackTimer = {
                start: Date.now(),
                clock: window.setTimeout(function () {
                  o(e.node),
                    (e.callbackTimer = null),
                    e.revealed && !e.config.reset && e.config.cleanup && y.call(n, e.node);
                }, i - s),
              });
          }
          function l(e, t) {
            if ((void 0 === t && (t = this.pristine), !e.visible && e.revealed && e.config.reset))
              return c.call(this, e, {
                reset: !0,
              });
            var n = this.store.sequences[e.sequence.id],
              i = e.sequence.index;
            if (n) {
              var r = new d(n, 'visible', this.store),
                o = new d(n, 'revealed', this.store);
              if (
                ((n.models = {
                  visible: r,
                  revealed: o,
                }),
                !o.body.length)
              ) {
                var s = n.members[r.body[0]],
                  a = this.store.elements[s];
                if (a)
                  return (
                    j.call(this, n, r.body[0], -1, t),
                    j.call(this, n, r.body[0], 1, t),
                    c.call(this, a, {
                      reveal: !0,
                      pristine: t,
                    })
                  );
              }
              if (
                !n.blocked.head &&
                i === [].concat(o.head).pop() &&
                i >= [].concat(r.body).shift()
              )
                return (
                  j.call(this, n, i, -1, t),
                  c.call(this, e, {
                    reveal: !0,
                    pristine: t,
                  })
                );
              if (
                !n.blocked.foot &&
                i === [].concat(o.foot).shift() &&
                i <= [].concat(r.body).pop()
              )
                return (
                  j.call(this, n, i, 1, t),
                  c.call(this, e, {
                    reveal: !0,
                    pristine: t,
                  })
                );
            }
          }
          function E(e) {
            var t = Math.abs(e);
            if (isNaN(t)) throw new RangeError('Invalid sequence interval.');
            (this.id = b()),
              (this.interval = Math.max(t, 16)),
              (this.members = []),
              (this.models = {}),
              (this.blocked = {
                head: !1,
                foot: !1,
              });
          }
          function d(e, i, r) {
            var o = this;
            (this.head = []),
              (this.body = []),
              (this.foot = []),
              f(e.members, function (e, t) {
                var n = r.elements[e];
                n && n[i] && o.body.push(t);
              }),
              this.body.length &&
                f(e.members, function (e, t) {
                  var n = r.elements[e];
                  n && !n[i] && (t < o.body[0] ? o.head.push(t) : o.foot.push(t));
                });
          }
          function j(e, t, n, i) {
            var r = this,
              o = ['head', null, 'foot'][1 + n],
              s = e.members[t + n],
              a = this.store.elements[s];
            (e.blocked[o] = !0),
              setTimeout(function () {
                (e.blocked[o] = !1), a && l.call(r, a, i);
              }, e.interval);
          }
          function i(e, a, t) {
            var c = this;
            void 0 === a && (a = {}), void 0 === t && (t = !1);
            var l,
              d = [],
              n = a.interval || r.interval;
            try {
              n && (l = new E(n));
              var i = u(e);
              if (!i.length) throw new Error('Invalid reveal target.');
              f(
                i.reduce(function (e, t) {
                  var n = {},
                    i = t.getAttribute('data-sr-id');
                  i
                    ? (v(n, c.store.elements[i]), m(n.node, n.styles.inline.computed))
                    : ((n.id = b()),
                      (n.node = t),
                      (n.seen = !1),
                      (n.revealed = !1),
                      (n.visible = !1));
                  var r = v({}, n.config || c.defaults, a);
                  if ((!r.mobile && g()) || (!r.desktop && !g())) return i && y.call(c, n), e;
                  var o,
                    s = u(r.container)[0];
                  if (!s) throw new Error('Invalid container.');
                  return (
                    s.contains(t) &&
                      (null ===
                        (o = (function (t) {
                          var e = [],
                            n = arguments.length - 1;
                          for (; 0 < n--; ) e[n] = arguments[n + 1];
                          var i = null;
                          return (
                            f(e, function (e) {
                              f(e, function (e) {
                                null === i && e.node === t && (i = e.id);
                              });
                            }),
                            i
                          );
                        })(s, d, c.store.containers)) &&
                        ((o = b()),
                        d.push({
                          id: o,
                          node: s,
                        })),
                      (n.config = r),
                      (n.containerId = o),
                      (n.styles = p(n)),
                      l &&
                        ((n.sequence = {
                          id: l.id,
                          index: l.members.length,
                        }),
                        l.members.push(n.id)),
                      e.push(n)),
                    e
                  );
                }, []),
                function (e) {
                  (c.store.elements[e.id] = e).node.setAttribute('data-sr-id', e.id);
                },
              );
            } catch (e) {
              return h.call(this, 'Reveal failed.', e.message);
            }
            f(d, function (e) {
              c.store.containers[e.id] = {
                id: e.id,
                node: e.node,
              };
            }),
              l && (this.store.sequences[l.id] = l),
              !0 !== t &&
                (this.store.history.push({
                  target: e,
                  options: a,
                }),
                this.initTimeout && window.clearTimeout(this.initTimeout),
                (this.initTimeout = window.setTimeout(w.bind(this), 0)));
          }
          var T,
            k =
              Math.sign ||
              function (e) {
                return (0 < e) - (e < 0) || +e;
              },
            O =
              ((T = Date.now()),
              function (e) {
                var t = Date.now();
                16 < t - T
                  ? e((T = t))
                  : setTimeout(function () {
                      return O(e);
                    }, 0);
              }),
            x =
              window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              O;
          function R(e, t) {
            for (
              var n = t ? e.node.clientHeight : e.node.offsetHeight,
                i = t ? e.node.clientWidth : e.node.offsetWidth,
                r = 0,
                o = 0,
                s = e.node;
              isNaN(s.offsetTop) || (r += s.offsetTop),
                isNaN(s.offsetLeft) || (o += s.offsetLeft),
                (s = s.offsetParent);

            );
            return {
              bounds: {
                top: r,
                right: o + i,
                bottom: r + n,
                left: o,
              },
              height: n,
              width: i,
            };
          }
          function q(e, t) {
            var i = this;
            void 0 === e &&
              (e = {
                type: 'init',
              }),
              void 0 === t && (t = this.store.elements),
              x(function () {
                var n = 'init' === e.type || 'resize' === e.type;
                f(i.store.containers, function (e) {
                  n && (e.geometry = R.call(i, e, !0));
                  var t = function (e) {
                    var t, n;
                    return (
                      (n =
                        e.node === document.documentElement
                          ? ((t = window.pageYOffset), window.pageXOffset)
                          : ((t = e.node.scrollTop), e.node.scrollLeft)),
                      {
                        top: t,
                        left: n,
                      }
                    );
                  }.call(i, e);
                  e.scroll &&
                    (e.direction = {
                      x: k(t.left - e.scroll.left),
                      y: k(t.top - e.scroll.top),
                    }),
                    (e.scroll = t);
                }),
                  f(t, function (e) {
                    (n || void 0 === e.geometry) && (e.geometry = R.call(i, e)),
                      (e.visible = function (e) {
                        void 0 === e && (e = {});
                        var t = this.store.containers[e.containerId];
                        if (t) {
                          var n = Math.max(0, Math.min(1, e.config.viewFactor)),
                            i = e.config.viewOffset,
                            r = e.geometry.bounds.top + e.geometry.height * n,
                            o = e.geometry.bounds.right - e.geometry.width * n,
                            s = e.geometry.bounds.bottom - e.geometry.height * n,
                            a = e.geometry.bounds.left + e.geometry.width * n,
                            c = t.geometry.bounds.top + t.scroll.top + i.top,
                            l = t.geometry.bounds.right + t.scroll.left - i.right,
                            d = t.geometry.bounds.bottom + t.scroll.top - i.bottom,
                            u = t.geometry.bounds.left + t.scroll.left + i.left;
                          return (
                            (r < d && u < o && c < s && a < l) || 'fixed' === e.styles.position
                          );
                        }
                      }.call(i, e));
                  }),
                  f(t, function (e) {
                    e.sequence ? l.call(i, e) : c.call(i, e);
                  }),
                  (i.pristine = !1);
              });
          }
          var A,
            P,
            L,
            M,
            I,
            C,
            W,
            Y,
            $ = '4.0.9';
          function H(e) {
            var t;
            if (
              (void 0 === e && (e = {}),
              void 0 === this || Object.getPrototypeOf(this) !== H.prototype)
            )
              return new H(e);
            if (!H.isSupported())
              return (
                h.call(this, 'Instantiation failed.', 'This browser is not supported.'), n.failure()
              );
            try {
              t = v({}, C || r, e);
            } catch (e) {
              return h.call(this, 'Invalid configuration.', e.message), n.failure();
            }
            try {
              if (!u(t.container)[0]) throw new Error('Invalid container.');
            } catch (e) {
              return h.call(this, e.message), n.failure();
            }
            return (!(C = t).mobile && g()) || (!C.desktop && !g())
              ? (h.call(
                  this,
                  'This device is disabled.',
                  'desktop: ' + C.desktop,
                  'mobile: ' + C.mobile,
                ),
                n.failure())
              : (n.success(),
                (this.store = {
                  containers: {},
                  elements: {},
                  history: [],
                  sequences: {},
                }),
                (this.pristine = !0),
                (A = A || q.bind(this)),
                (P =
                  P ||
                  function () {
                    var n = this;
                    f(this.store.elements, function (e) {
                      m(e.node, e.styles.inline.generated), e.node.removeAttribute('data-sr-id');
                    }),
                      f(this.store.containers, function (e) {
                        var t = e.node === document.documentElement ? window : e.node;
                        t.removeEventListener('scroll', n.delegate),
                          t.removeEventListener('resize', n.delegate);
                      }),
                      (this.store = {
                        containers: {},
                        elements: {},
                        history: [],
                        sequences: {},
                      });
                  }.bind(this)),
                (L = L || i.bind(this)),
                (M = M || y.bind(this)),
                (I =
                  I ||
                  function () {
                    var t = this;
                    f(this.store.history, function (e) {
                      i.call(t, e.target, e.options, !0);
                    }),
                      w.call(this);
                  }.bind(this)),
                Object.defineProperty(this, 'delegate', {
                  get: function () {
                    return A;
                  },
                }),
                Object.defineProperty(this, 'destroy', {
                  get: function () {
                    return P;
                  },
                }),
                Object.defineProperty(this, 'reveal', {
                  get: function () {
                    return L;
                  },
                }),
                Object.defineProperty(this, 'clean', {
                  get: function () {
                    return M;
                  },
                }),
                Object.defineProperty(this, 'sync', {
                  get: function () {
                    return I;
                  },
                }),
                Object.defineProperty(this, 'defaults', {
                  get: function () {
                    return C;
                  },
                }),
                Object.defineProperty(this, 'version', {
                  get: function () {
                    return $;
                  },
                }),
                Object.defineProperty(this, 'noop', {
                  get: function () {
                    return !1;
                  },
                }),
                Y || (Y = this));
          }
          return (
            (H.isSupported = function () {
              return (
                ('transform' in (t = document.documentElement.style) || 'WebkitTransform' in t) &&
                ('transition' in (e = document.documentElement.style) || 'WebkitTransition' in e)
              );
              var e, t;
            }),
            Object.defineProperty(H, 'debug', {
              get: function () {
                return W || !1;
              },
              set: function (e) {
                return (W = 'boolean' == typeof e ? e : W);
              },
            }),
            H(),
            H
          );
        })();
        const sr = ScrollReveal({
          origin: 'top',
          distance: '60px',
          duration: 1400,
          delay: 110,
        });
        sr.reveal(`.nav__list, .section__title, .servers__info`);
        sr.reveal(
          `.header__logo, .hero__title, .marquee, .have__picture, .servers__item, .footer__logotype`,
          {
            delay: 110,
            origin: 'left',
          },
        );
        sr.reveal(`.nav__social, .hero__descr, .footer__link`, {
          delay: 110,
          origin: 'right',
        });
        sr.reveal(`.have__text, .footer__name`, {
          delay: 110,
          origin: 'top',
        });
        sr.reveal(`.hero__row, .servers__progress, .footer__text`, {
          delay: 110,
          origin: 'bottom',
        });

        /***/
      },

    /***/ './src/js/functions/mobile-check.js':
      /*!******************************************!*\
  !*** ./src/js/functions/mobile-check.js ***!
  \******************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ mobileCheck: () => /* binding */ mobileCheck,
          /* harmony export */
        });
        /* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../_vars */ './src/js/_vars.js',
        );

        const mobileCheck = () => {
          const userAgent = navigator.userAgent || navigator.vendor || window.opera;
          if (/android/i.test(userAgent)) {
            _vars__WEBPACK_IMPORTED_MODULE_0__['default'].htmlEl.classList.add('page--android');
            return 'Android';
          }
          if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            _vars__WEBPACK_IMPORTED_MODULE_0__['default'].htmlEl.classList.add('page--ios');
            return 'iOS';
          }
          return 'unknown';
        };

        /***/
      },

    /***/ './src/js/vendor/focus-visible.js':
      /*!****************************************!*\
  !*** ./src/js/vendor/focus-visible.js ***!
  \****************************************/
      /***/ () => {
        /**
         * Applies the :focus-visible polyfill at the given scope.
         * A scope in this case is either the top-level Document or a Shadow Root.
         *
         * @param {(Document|ShadowRoot)} scope
         * @see https://github.com/WICG/focus-visible
         */
        function applyFocusVisiblePolyfill(scope) {
          var hadKeyboardEvent = true;
          var hadFocusVisibleRecently = false;
          var hadFocusVisibleRecentlyTimeout = null;
          var inputTypesAllowlist = {
            text: true,
            search: true,
            url: true,
            tel: true,
            email: true,
            password: true,
            number: true,
            date: true,
            month: true,
            week: true,
            time: true,
            datetime: true,
            'datetime-local': true,
          };

          /**
           * Helper function for legacy browsers and iframes which sometimes focus
           * elements like document, body, and non-interactive SVG.
           * @param {Element} el
           */
          function isValidFocusTarget(el) {
            if (
              el &&
              el !== document &&
              el.nodeName !== 'HTML' &&
              el.nodeName !== 'BODY' &&
              'classList' in el &&
              'contains' in el.classList
            ) {
              return true;
            }
            return false;
          }

          /**
           * Computes whether the given element should automatically trigger the
           * `focus-visible` class being added, i.e. whether it should always match
           * `:focus-visible` when focused.
           * @param {Element} el
           * @return {boolean}
           */
          function focusTriggersKeyboardModality(el) {
            var type = el.type;
            var tagName = el.tagName;
            if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
              return true;
            }
            if (tagName === 'TEXTAREA' && !el.readOnly) {
              return true;
            }
            if (el.isContentEditable) {
              return true;
            }
            return false;
          }

          /**
           * Add the `focus-visible` class to the given element if it was not added by
           * the author.
           * @param {Element} el
           */
          function addFocusVisibleClass(el) {
            if (el.classList.contains('focus-visible')) {
              return;
            }
            el.classList.add('focus-visible');
            el.setAttribute('data-focus-visible-added', '');
          }

          /**
           * Remove the `focus-visible` class from the given element if it was not
           * originally added by the author.
           * @param {Element} el
           */
          function removeFocusVisibleClass(el) {
            if (!el.hasAttribute('data-focus-visible-added')) {
              return;
            }
            el.classList.remove('focus-visible');
            el.removeAttribute('data-focus-visible-added');
          }

          /**
           * If the most recent user interaction was via the keyboard;
           * and the key press did not include a meta, alt/option, or control key;
           * then the modality is keyboard. Otherwise, the modality is not keyboard.
           * Apply `focus-visible` to any current active element and keep track
           * of our keyboard modality state with `hadKeyboardEvent`.
           * @param {KeyboardEvent} e
           */
          function onKeyDown(e) {
            if (e.metaKey || e.altKey || e.ctrlKey) {
              return;
            }
            if (isValidFocusTarget(scope.activeElement)) {
              addFocusVisibleClass(scope.activeElement);
            }
            hadKeyboardEvent = true;
          }

          /**
           * If at any point a user clicks with a pointing device, ensure that we change
           * the modality away from keyboard.
           * This avoids the situation where a user presses a key on an already focused
           * element, and then clicks on a different element, focusing it with a
           * pointing device, while we still think we're in keyboard modality.
           * @param {Event} e
           */
          function onPointerDown(e) {
            hadKeyboardEvent = false;
          }

          /**
           * On `focus`, add the `focus-visible` class to the target if:
           * - the target received focus as a result of keyboard navigation, or
           * - the event target is an element that will likely require interaction
           *   via the keyboard (e.g. a text box)
           * @param {Event} e
           */
          function onFocus(e) {
            // Prevent IE from focusing the document or HTML element.
            if (!isValidFocusTarget(e.target)) {
              return;
            }
            if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
              addFocusVisibleClass(e.target);
            }
          }

          /**
           * On `blur`, remove the `focus-visible` class from the target.
           * @param {Event} e
           */
          function onBlur(e) {
            if (!isValidFocusTarget(e.target)) {
              return;
            }
            if (
              e.target.classList.contains('focus-visible') ||
              e.target.hasAttribute('data-focus-visible-added')
            ) {
              // To detect a tab/window switch, we look for a blur event followed
              // rapidly by a visibility change.
              // If we don't see a visibility change within 100ms, it's probably a
              // regular focus change.
              hadFocusVisibleRecently = true;
              window.clearTimeout(hadFocusVisibleRecentlyTimeout);
              hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
                hadFocusVisibleRecently = false;
              }, 100);
              removeFocusVisibleClass(e.target);
            }
          }

          /**
           * If the user changes tabs, keep track of whether or not the previously
           * focused element had .focus-visible.
           * @param {Event} e
           */
          function onVisibilityChange(e) {
            if (document.visibilityState === 'hidden') {
              // If the tab becomes active again, the browser will handle calling focus
              // on the element (Safari actually calls it twice).
              // If this tab change caused a blur on an element with focus-visible,
              // re-apply the class when the user switches back to the tab.
              if (hadFocusVisibleRecently) {
                hadKeyboardEvent = true;
              }
              addInitialPointerMoveListeners();
            }
          }

          /**
           * Add a group of listeners to detect usage of any pointing devices.
           * These listeners will be added when the polyfill first loads, and anytime
           * the window is blurred, so that they are active when the window regains
           * focus.
           */
          function addInitialPointerMoveListeners() {
            document.addEventListener('mousemove', onInitialPointerMove);
            document.addEventListener('mousedown', onInitialPointerMove);
            document.addEventListener('mouseup', onInitialPointerMove);
            document.addEventListener('pointermove', onInitialPointerMove);
            document.addEventListener('pointerdown', onInitialPointerMove);
            document.addEventListener('pointerup', onInitialPointerMove);
            document.addEventListener('touchmove', onInitialPointerMove);
            document.addEventListener('touchstart', onInitialPointerMove);
            document.addEventListener('touchend', onInitialPointerMove);
          }
          function removeInitialPointerMoveListeners() {
            document.removeEventListener('mousemove', onInitialPointerMove);
            document.removeEventListener('mousedown', onInitialPointerMove);
            document.removeEventListener('mouseup', onInitialPointerMove);
            document.removeEventListener('pointermove', onInitialPointerMove);
            document.removeEventListener('pointerdown', onInitialPointerMove);
            document.removeEventListener('pointerup', onInitialPointerMove);
            document.removeEventListener('touchmove', onInitialPointerMove);
            document.removeEventListener('touchstart', onInitialPointerMove);
            document.removeEventListener('touchend', onInitialPointerMove);
          }

          /**
           * When the polfyill first loads, assume the user is in keyboard modality.
           * If any event is received from a pointing device (e.g. mouse, pointer,
           * touch), turn off keyboard modality.
           * This accounts for situations where focus enters the page from the URL bar.
           * @param {Event} e
           */
          function onInitialPointerMove(e) {
            // Work around a Safari quirk that fires a mousemove on <html> whenever the
            // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
            if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
              return;
            }
            hadKeyboardEvent = false;
            removeInitialPointerMoveListeners();
          }

          // For some kinds of state, we are interested in changes at the global scope
          // only. For example, global pointer input, global key presses and global
          // visibility change should affect the state at every scope:
          document.addEventListener('keydown', onKeyDown, true);
          document.addEventListener('mousedown', onPointerDown, true);
          document.addEventListener('pointerdown', onPointerDown, true);
          document.addEventListener('touchstart', onPointerDown, true);
          document.addEventListener('visibilitychange', onVisibilityChange, true);
          addInitialPointerMoveListeners();

          // For focus and blur, we specifically care about state changes in the local
          // scope. This is because focus / blur events that originate from within a
          // shadow root are not re-dispatched from the host element if it was already
          // the active element in its own scope:
          scope.addEventListener('focus', onFocus, true);
          scope.addEventListener('blur', onBlur, true);

          // We detect that a node is a ShadowRoot by ensuring that it is a
          // DocumentFragment and also has a host property. This check covers native
          // implementation and polyfill implementation transparently. If we only cared
          // about the native implementation, we could just check if the scope was
          // an instance of a ShadowRoot.
          if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
            // Since a ShadowRoot is a special kind of DocumentFragment, it does not
            // have a root element to add a class to. So, we add this attribute to the
            // host element instead:
            scope.host.setAttribute('data-js-focus-visible', '');
          } else if (scope.nodeType === Node.DOCUMENT_NODE) {
            document.documentElement.classList.add('js-focus-visible');
            document.documentElement.setAttribute('data-js-focus-visible', '');
          }
        }

        // It is important to wrap all references to global window and document in
        // these checks to support server-side rendering use cases
        // @see https://github.com/WICG/focus-visible/issues/199
        if (typeof window !== 'undefined' && typeof document !== 'undefined') {
          // Make the polyfill helper globally available. This can be used as a signal
          // to interested libraries that wish to coordinate with the polyfill for e.g.,
          // applying the polyfill to a shadow root:
          window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;

          // Notify interested libraries of the polyfill's presence, in case the
          // polyfill was loaded lazily:
          var event;
          try {
            event = new CustomEvent('focus-visible-polyfill-ready');
          } catch (error) {
            // IE11 does not support using CustomEvent as a constructor directly:
            event = document.createEvent('CustomEvent');
            event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
          }
          window.dispatchEvent(event);
        }
        if (typeof document !== 'undefined') {
          // Apply the polyfill to the global document, so that no JavaScript
          // coordination is required to use the polyfill in the top-level document:
          applyFocusVisiblePolyfill(document);
        }

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule ? /******/ () => module['default'] : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  (() => {
    'use strict';
    /*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./_vendor */ './src/js/_vendor.js',
    );
    /* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./_vars */ './src/js/_vars.js',
    );
    /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./_functions */ './src/js/_functions.js',
    );
    /* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./_components */ './src/js/_components.js',
    );
  })();

  /******/
})();
//# sourceMappingURL=main.js.map
