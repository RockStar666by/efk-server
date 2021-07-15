(() => {
  const e = {
    373: (e, t, i) => {
      i.r(t);
    },
    203: (e, t, i) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.deleteItem =
          t.updateItem =
          t.createItem =
          t.getItems =
          t.deleteCategory =
          t.createCategory =
          t.getCategoryById =
          t.getCategories =
            void 0);
      const n = i(928);
      const o = 'categories';
      const r = 'items';
      const a = (e) => `http://localhost:3000/api/${e}`;
      (t.getCategories = () => n.fetchJson(a(o))),
        (t.getCategoryById = (e) => n.fetchJson(a(`categories/${e}`))),
        (t.createCategory = (e) =>
          n.fetchJson(a(o), {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(e),
          })),
        (t.deleteCategory = (e) =>
          n.fetchVoid(a(`categories/${e}`), { method: 'DELETE' })),
        (t.getItems = () => n.fetchJson(a('items'))),
        (t.createItem = (e) =>
          n.fetchJson(a(r), {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(e),
          })),
        (t.updateItem = (e) =>
          n.fetchJson(a(r), {
            method: 'PUT',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(e),
          })),
        (t.deleteItem = (e) =>
          n.fetchVoid(a(`items/${e}`), { method: 'DELETE' }));
    },
    953: (e, t, i) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.categoryPage = void 0);
      const n = i(928);
      const o = i(203);
      const r = (e) => {
        let t;
        const i = n.div(
          'page-item',
          n.withHtml(
            `\n      <div class='category-name'><p>${
              e.name
            }</p></div>\n      <div class='category-description'><p>${
              (t = e.description) !== null && void 0 !== t ? t : ''
            }</p></div>\n    `
          ),
          n.withChilds(
            n.create(
              'button',
              n.withHtml('✖'),
              n.withCss('delete'),
              n.on('click', () =>
                o
                  .deleteCategory(e.id)
                  .then(() => i.remove())
                  .catch((t) =>
                    alert(`Category ${e.name} not deleted: ${t.message}`)
                  )
              )
            )
          )
        );
        return i;
      };
      t.categoryPage = () => {
        const e = n.div(
          'content',
          n.withChilds(
            ((e) => {
              const t = n.create(
                'input',
                n.withAttrs({ type: 'text', placeholder: 'Category name' })
              );
              const i = n.create(
                'input',
                n.withAttrs({ type: 'text', placeholder: 'Description' })
              );
              const o = n.create(
                'button',
                n.withCss('ok'),
                n.withAttrs({ type: 'submit' }),
                n.withHtml('✔')
              );
              return n.create(
                'form',
                n.withCss('page-item'),
                n.withChilds(
                  n.div('category-name', n.withChilds(t)),
                  n.div('category-description', n.withChilds(i)),
                  o
                ),
                n.on('submit', (n, o) => {
                  o.preventDefault(),
                    e == null ||
                      e({ id: -1, name: t.value, description: i.value }),
                    (t.value = ''),
                    (i.value = '');
                })
              );
            })((t) =>
              o
                .createCategory(t)
                .then((t) => e.appendChild(r(t)))
                .catch((e) =>
                  alert(`Category ${t.name} not created: ${e.message}`)
                )
            )
          )
        );
        return (
          o
            .getCategories()
            .then((t) => t.map(r).forEach((t) => e.appendChild(t)))
            .catch((e) => alert(`Categories not loaded: ${e.message}`)),
          e
        );
      };
    },
    123(e, t, i) {
      const n =
        (this && this.__awaiter) ||
        function (e, t, i, n) {
          return new (i || (i = Promise))((o, r) => {
            function a(e) {
              try {
                c(n.next(e));
              } catch (e) {
                r(e);
              }
            }
            function d(e) {
              try {
                c(n.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function c(e) {
              let t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i((e) => {
                        e(t);
                      })).then(a, d);
            }
            c((n = n.apply(e, t || [])).next());
          });
        };
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.itemPage = void 0);
      const o = i(928);
      const r = i(203);
      const a = { name: '', price: 0, categoryId: 1 };
      const d = (e, t) =>
        o.create(
          'input',
          o.withAttrs({
            value: e != null ? e : '',
            type: 'text',
            placeholder: t != null ? t : '',
          })
        );
      const c = (e, t) => {
        const i = e.parentElement;
        i == null || i.insertBefore(t, e), e.remove();
      };
      const s = (e, t, i) => {
        const a = d(e.name, 'Item name');
        const c = d(e.price ? String(e.price) : '', 'Price');
        const s = d(e.description, 'description');
        const l = ((e) => {
          const t = o.create('select');
          return (
            r.getCategories().then((i) => {
              o.withChilds(
                ...i.map((t) =>
                  ((e, t = !1) =>
                    o.create(
                      'option',
                      o.withHtml(e.name),
                      o.withAttrs({ value: String(e.id) }),
                      o.withAttrs(t ? { selected: 'true' } : {})
                    ))(t, t.id === e)
                )
              )(t);
            }),
            t
          );
        })(e.categoryId);
        const h = o.create('input', o.withAttrs({ type: 'file' }));
        const m = o.div(
          'page-item',
          o.withChilds(
            o.div('item-category', o.withChilds(l)),
            o.div(
              'item-data',
              o.withChilds(
                o.div('item-name', o.withChilds(a)),
                o.div('item-price', o.withChilds(c)),
                o.div('item-description', o.withChilds(s)),
                o.div('item-description', o.withChilds(h))
              )
            ),
            o.create(
              'button',
              o.withHtml('✔'),
              o.on('click', () =>
                n(void 0, void 0, void 0, function* () {
                  const e = yield new Promise((e) => {
                    let t;
                    if (
                      (t = h.files) === null || void 0 === t ? void 0 : t[0]
                    ) {
                      const t = new FileReader();
                      t.readAsDataURL(h.files[0]),
                        t.addEventListener('load', () => e(String(t.result)));
                    } else e(void 0);
                  });
                  return yield t({
                    categoryId: Number(l.value),
                    name: a.value,
                    price: Number(c.value),
                    description: s.value,
                    image: e,
                  });
                })
                  .then((e) => i(e, m))
                  .catch((e) => alert(`Item not saved: ${e.message}`))
              )
            )
          )
        );
        return m;
      };
      const l = (e) => {
        let t;
        const i = (e, t) => c(t, l(e));
        const n = o.div('item-category', o.withHtml('Load...'));
        r.getCategoryById(e.categoryId)
          .then((e) => {
            n.innerText = e.name;
          })
          .catch(() => {
            n.innerText = 'Error';
          });
        const a = o.div(
          'page-item',
          o.withChilds(
            n,
            o.div(
              'item-image',
              o.withHtml(
                e.image ? `<img alt="${e.name}" src="${e.image}">` : ''
              )
            ),
            o.div(
              'item-data',
              o.withChilds(
                o.div('item-name', o.withHtml(e.name)),
                o.div('item-price', o.withHtml(String(e.price))),
                o.div(
                  'item-description',
                  o.withHtml(
                    (t = e.description) !== null && void 0 !== t ? t : ''
                  )
                )
              )
            ),
            o.create(
              'button',
              o.withHtml('✎'),
              o.on('click', () => c(a, s(e, r.updateItem, i)))
            ),
            o.create(
              'button',
              o.withHtml('✖'),
              o.on('click', () =>
                r
                  .deleteItem(e.name)
                  .then(() => a.remove())
                  .catch((e) => alert(`Item not deleted: ${e.message}`))
              )
            )
          )
        );
        return a;
      };
      t.itemPage = () => {
        const e = o.div('content');
        const t = (i, n) => {
          e.appendChild(l(i)), c(n, s(a, r.createItem, t));
        };
        return (
          e.appendChild(s(a, r.createItem, t)),
          r
            .getItems()
            .then((t) => t.map(l).forEach((t) => e.appendChild(t)))
            .catch((e) => alert(`Items not loaded: ${e.message}`)),
          e
        );
      };
    },
    877: (e, t, i) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.showTab = t.tab = void 0);
      const n = i(570);
      const o = i(708);
      (t.tab = (e, t) => n.div('tab', o.withHtml(e), o.on('click', t))),
        (t.showTab = (function () {
          let e = null;
          return (t, i) => {
            e && e.classList.add('out');
            const n = o.withCss('in')(i());
            t.appendChild(n),
              setTimeout(() => n.classList.remove('in')),
              n.addEventListener(
                'transitionend',
                () => {
                  e == null || e.remove(), (e = n);
                },
                { once: !0 }
              );
          };
        })());
    },
    708: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.on =
          t.withHtml =
          t.withChilds =
          t.withAttrs =
          t.withCss =
          t.create =
            void 0),
        (t.create = function (e = 'div', ...t) {
          return t.reduce((e, t) => t(e), document.createElement(e));
        }),
        (t.withCss = function (...e) {
          return (t) => (t.classList.add(...e), t);
        }),
        (t.withAttrs = function (e) {
          return (t) => (
            Object.keys(e).forEach((i) => t.setAttribute(i, e[i])), t
          );
        }),
        (t.withChilds = function (...e) {
          return (t) => (e.forEach((e) => t.appendChild(e)), t);
        }),
        (t.withHtml = function (e) {
          return (t) => ((t.innerHTML += e), t);
        }),
        (t.on = function (e, t) {
          return (i) => (i.addEventListener(e, (e) => t(i, e)), i);
        });
    },
    570: (e, t, i) => {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.div = void 0);
      const n = i(708);
      t.div = (e, ...t) => n.create('div', n.withCss(e), ...t);
    },
    928(e, t, i) {
      const n =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, i, n) {
              void 0 === n && (n = i),
                Object.defineProperty(e, n, {
                  enumerable: !0,
                  get() {
                    return t[i];
                  },
                });
            }
          : function (e, t, i, n) {
              void 0 === n && (n = i), (e[n] = t[i]);
            });
      const o =
        (this && this.__exportStar) ||
        function (e, t) {
          for (const i in e)
            i === 'default' ||
              Object.prototype.hasOwnProperty.call(t, i) ||
              n(t, e, i);
        };
      Object.defineProperty(t, '__esModule', { value: !0 }),
        o(i(708), t),
        o(i(570), t),
        o(i(681), t);
    },
    681: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.fetchVoid = t.fetchJson = t.query = void 0);
      const i = (e) => e.json();
      const n = () => Promise.resolve();
      function o(e, t, n = i) {
        return new Promise((i, o) => {
          fetch(e, t)
            .then((e) => {
              e.ok
                ? n(e).then(i).catch(o)
                : o(new Error(`(${e.status}) ${e.statusText}`));
            })
            .catch(o);
        });
      }
      (t.query = o),
        (t.fetchJson = (e, t) => o(e, t, i)),
        (t.fetchVoid = (e, t) => o(e, t, n));
    },
  };
  const t = {};
  function i(n) {
    const o = t[n];
    if (void 0 !== o) return o.exports;
    const r = (t[n] = { exports: {} });
    return e[n].call(r.exports, r, r.exports, i), r.exports;
  }
  (i.r = (e) => {
    typeof Symbol !== 'undefined' &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
      Object.defineProperty(e, '__esModule', { value: !0 });
  }),
    (() => {
      i(373);
      const e = i(928);
      const t = i(877);
      const n = i(953);
      const o = i(123);
      const r = e.div('content-wrapper');
      const a = t.tab('Categories', () => t.showTab(r, n.categoryPage));
      const d = t.tab('Items', () => t.showTab(r, o.itemPage));
      document.body.appendChild(
        e.div(
          'app',
          e.withHtml('<h1>NodeJS demo app.</h1>'),
          e.withChilds(e.div('tabs-wrapper', e.withChilds(a, d)), r)
        )
      ),
        (window.onload = () => t.showTab(r, n.categoryPage));
    })();
})();
