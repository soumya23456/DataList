(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    23: function(e, n, t) {},
    41: function(e, n, t) {
      "use strict";
      t.r(n);
      var c = t(0),
        i = t(2),
        a = t.n(i),
        r = t(16),
        o = t.n(r),
        s = t(17),
        d = t(6),
        u = (t(23), t(4)),
        j = t.n(u);
      var l = function() {
          var e = Object(i.useState)(""),
            n = Object(d.a)(e, 2),
            t = n[0],
            a = n[1],
            r = Object(i.useState)(0),
            o = Object(d.a)(r, 2),
            u = o[0],
            l = o[1],
            h = Object(i.useState)([]),
            p = Object(d.a)(h, 2),
            b = p[0],
            f = p[1];
          return (
            Object(i.useEffect)(function() {
              j.a
                .get("https://mern-beginners.herokuapp.com/read")
                .then(function(e) {
                  f(e.data);
                })
                .catch(function() {
                  console.log("ERR");
                });
            }, []),
            Object(c.jsxs)("div", {
              className: "App",
              children: [
                Object(c.jsxs)("div", {
                  className: "inputs",
                  children: [
                    Object(c.jsx)("input", {
                      type: "text",
                      placeholder: "Friend name...",
                      onChange: function(e) {
                        a(e.target.value);
                      }
                    }),
                    Object(c.jsx)("input", {
                      type: "number",
                      placeholder: "Friend age...",
                      onChange: function(e) {
                        l(e.target.value);
                      }
                    }),
                    Object(c.jsx)("button", {
                      onClick: function() {
                        j.a
                          .post(
                            "https://mern-beginners.herokuapp.com/addfriend",
                            { name: t, age: u }
                          )
                          .then(function(e) {
                            f(
                              [].concat(Object(s.a)(b), [
                                { _id: e.data._id, name: t, age: u }
                              ])
                            );
                          });
                      },
                      children: "Add Friend"
                    })
                  ]
                }),
                Object(c.jsx)("div", {
                  className: "listOfFriends",
                  children: b.map(function(e) {
                    return Object(c.jsxs)("div", {
                      className: "friendContainer",
                      children: [
                        Object(c.jsxs)("div", {
                          className: "friend",
                          children: [
                            Object(c.jsxs)("h3", {
                              children: ["Name: ", e.name]
                            }),
                            Object(c.jsxs)("h3", {
                              children: [" Age: ", e.age]
                            })
                          ]
                        }),
                        Object(c.jsx)("button", {
                          onClick: function() {
                            !(function(e) {
                              var n = prompt("Enter new age: ");
                              j.a
                                .put(
                                  "https://mern-beginners.herokuapp.com/update",
                                  { newAge: n, id: e }
                                )
                                .then(function() {
                                  f(
                                    b.map(function(t) {
                                      return t._id == e
                                        ? { _id: e, name: t.name, age: n }
                                        : t;
                                    })
                                  );
                                });
                            })(e._id);
                          },
                          children: "Update"
                        }),
                        Object(c.jsx)("button", {
                          id: "removeBtn",
                          onClick: function() {
                            var n;
                            (n = e._id),
                              j.a
                                .delete(
                                  "https://mern-beginners.herokuapp.com/delete/".concat(
                                    n
                                  )
                                )
                                .then(function() {
                                  f(
                                    b.filter(function(e) {
                                      return e._id != n;
                                    })
                                  );
                                });
                          },
                          children: "X"
                        })
                      ]
                    });
                  })
                })
              ]
            })
          );
        },
        h = function(e) {
          e &&
            e instanceof Function &&
            t
              .e(3)
              .then(t.bind(null, 42))
              .then(function(n) {
                var t = n.getCLS,
                  c = n.getFID,
                  i = n.getFCP,
                  a = n.getLCP,
                  r = n.getTTFB;
                t(e), c(e), i(e), a(e), r(e);
              });
        };
      o.a.render(
        Object(c.jsx)(a.a.StrictMode, { children: Object(c.jsx)(l, {}) }),
        document.getElementById("root")
      ),
        h();
    }
  },
  [[41, 1, 2]]
]);
//# sourceMappingURL=main.c63be530.chunk.js.map
