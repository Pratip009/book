(self.webpackChunkfrontend = self.webpackChunkfrontend || []).push([
  [971],
  {
    53630: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => x });
      var n = a(65043),
        s = a(86213),
        i = a(75574),
        r = a(22908),
        o = a.n(r),
        l = a(52738),
        d = a(82110),
        c = a(70579);
      const x = () => {
        const [e, t] = (0, n.useState)({ email: "", number: "" }),
          [a, r] = (0, n.useState)(""),
          [x, m] = (0, n.useState)(!1),
          [p, h] = (0, n.useState)(""),
          [u, g] = (0, n.useState)(""),
          j = "https://book-rxj9.onrender.com/api/v1",
          f = (0, i.A)(),
          b = (a) => {
            const { name: n, value: s } = a.target;
            console.log(`Input changed - Name: ${n}, Value: ${s}`),
              t({ ...e, [n]: s });
          };
        return (0, c.jsxs)("div", {
          className: f.updateProduct,
          children: [
            (0, c.jsx)("div", {
              className: x ? `${f.toggleBox1}` : `${f.firstBox1}`,
              children: (0, c.jsx)(d.A, {}),
            }),
            (0, c.jsxs)("div", {
              className: f.secondBox1,
              children: [
                (0, c.jsx)("div", {
                  className: f.navBar1,
                  children: (0, c.jsxs)(l.A, {
                    bg: "light",
                    expand: "lg",
                    children: [
                      (0, c.jsx)(l.A.Brand, {
                        href: "#",
                        children: "Contact Form",
                      }),
                      (0, c.jsx)(l.A.Toggle, {
                        onClick: () => {
                          m(!x);
                        },
                      }),
                      (0, c.jsx)(l.A.Collapse, {}),
                    ],
                  }),
                }),
                (0, c.jsx)("div", {
                  style: {
                    maxWidth: "500px",
                    margin: "50px auto",
                    padding: "20px",
                    backgroundColor: "#f9f9f9",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  },
                  children: (0, c.jsxs)("main", {
                    children: [
                      (0, c.jsx)("h2", {
                        style: {
                          textAlign: "center",
                          color: "#333",
                          marginBottom: "20px",
                          fontFamily: "'Outfit', sans-serif",
                        },
                        children: "Add or Update Contact Details",
                      }),
                      p &&
                        (0, c.jsx)("p", {
                          style: { color: "green" },
                          children: p,
                        }),
                      u &&
                        (0, c.jsx)("p", {
                          style: { color: "red" },
                          children: u,
                        }),
                      (0, c.jsxs)("form", {
                        onSubmit: async (t) => {
                          t.preventDefault(),
                            console.log(
                              "Sending data to:",
                              `${j}/contacts/add`
                            ),
                            console.log("Data being sent:", e);
                          if (!/^[0-9]{10}$/.test(e.number))
                            return (
                              g(
                                "Invalid phone number format. It should be 10 digits."
                              ),
                              void h("")
                            );
                          const a = o().stringify(e);
                          try {
                            const e = await s.A.post(`${j}/contacts/add`, a, {
                              headers: {
                                "Content-Type":
                                  "application/x-www-form-urlencoded",
                              },
                            });
                            console.log(
                              "Contact details added successfully:",
                              e.data
                            ),
                              h("Contact details added successfully!"),
                              g("");
                          } catch (n) {
                            console.error(
                              "Error adding contact details:",
                              n.response || n.message
                            ),
                              g(
                                "Failed to add contact details. Please try again."
                              ),
                              h("");
                          }
                        },
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          gap: "15px",
                        },
                        children: [
                          (0, c.jsxs)("div", {
                            children: [
                              (0, c.jsx)("label", {
                                htmlFor: "email",
                                style: {
                                  display: "block",
                                  marginBottom: "5px",
                                  fontWeight: "bold",
                                  fontSize: "14px",
                                },
                                children: "Email:",
                              }),
                              (0, c.jsx)("input", {
                                type: "email",
                                id: "email",
                                name: "email",
                                value: e.email,
                                onChange: b,
                                required: !0,
                                placeholder: "Enter email",
                                style: {
                                  width: "100%",
                                  padding: "10px",
                                  borderRadius: "5px",
                                  border: "1px solid #ddd",
                                  fontSize: "14px",
                                },
                              }),
                            ],
                          }),
                          (0, c.jsxs)("div", {
                            children: [
                              (0, c.jsx)("label", {
                                htmlFor: "mobileNumber",
                                style: {
                                  display: "block",
                                  marginBottom: "5px",
                                  fontWeight: "bold",
                                  fontSize: "14px",
                                },
                                children: "Mobile Number:",
                              }),
                              (0, c.jsx)("input", {
                                type: "text",
                                id: "number",
                                name: "number",
                                value: e.number,
                                onChange: b,
                                required: !0,
                                placeholder: "Enter mobile number",
                                style: {
                                  width: "100%",
                                  padding: "10px",
                                  borderRadius: "5px",
                                  border: "1px solid #ddd",
                                  fontSize: "14px",
                                },
                              }),
                            ],
                          }),
                          (0, c.jsxs)("div", {
                            children: [
                              (0, c.jsx)("label", {
                                htmlFor: "updateId",
                                style: {
                                  display: "block",
                                  marginBottom: "5px",
                                  fontWeight: "bold",
                                  fontSize: "14px",
                                },
                                children: "Update ID:",
                              }),
                              (0, c.jsx)("input", {
                                type: "text",
                                id: "updateId",
                                name: "updateId",
                                value: a,
                                onChange: (e) => r(e.target.value),
                                placeholder: "Enter ID to update (optional)",
                                style: {
                                  width: "100%",
                                  padding: "10px",
                                  borderRadius: "5px",
                                  border: "1px solid #ddd",
                                  fontSize: "14px",
                                },
                              }),
                            ],
                          }),
                          (0, c.jsx)("button", {
                            type: "submit",
                            style: {
                              padding: "10px 20px",
                              backgroundColor: "#FF4E00",
                              color: "#fff",
                              border: "none",
                              borderRadius: "5px",
                              fontSize: "16px",
                              cursor: "pointer",
                            },
                            children: "Add Contact",
                          }),
                        ],
                      }),
                      (0, c.jsx)("button", {
                        onClick: async () => {
                          if (a) {
                            console.log("Updating contact details:", {
                              id: a,
                              ...e,
                            });
                            try {
                              const n = await s.A.put(`${j}/update/${a}`, e);
                              console.log(
                                "Response from server (update):",
                                n.data
                              ),
                                t({ email: "", number: "" }),
                                h("Contact details updated successfully!"),
                                g("");
                            } catch (n) {
                              console.error(
                                "Error updating contact details:",
                                n
                              ),
                                g(
                                  "Failed to update contact details. Please try again."
                                ),
                                h("");
                            }
                          } else g("Please provide an ID for updating.");
                        },
                        style: {
                          marginTop: "15px",
                          padding: "10px 20px",
                          backgroundColor: "#007BFF",
                          color: "#fff",
                          border: "none",
                          borderRadius: "5px",
                          fontSize: "16px",
                          cursor: "pointer",
                        },
                        children: "Update Contact",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    82110: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => y });
      a(65043);
      var n = a(91688),
        s = a(62582),
        i = a(81045),
        r = a(85865),
        o = a(11906),
        l = a(86447),
        d = a(58094),
        c = a(53827),
        x = a(22505),
        m = a(95065),
        p = a(48134),
        h = a(62647),
        u = a(33639),
        g = a(34233),
        j = a(76300),
        f = a(79456),
        b = a(70579);
      const N = (0, l.A)((e) => ({
        sidebar: {
          backgroundColor: "#fff",
          padding: "2rem 0",
          boxShadow: "2px 10px 6px rgba(0, 0, 0, 0.4)",
          borderRadius: "5px",
          margin: "0 auto",
          width: "100%",
        },
        avatar11: {
          width: "80px",
          height: "80px",
          border: "5px solid #414141",
          margin: "0 auto",
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        name: { fontWeight: "500", textAlign: "center", fontSize: "1rem" },
        email: {
          color: "#414141",
          marginBottom: "1.5rem",
          textAlign: "center",
          fontSize: "0.9rem",
        },
        divider: {
          height: "2px",
          width: "75%",
          backgroundColor: "#414141",
          margin: "2rem",
        },
        button: {
          marginLeft: "2rem !important",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#292929 !important",
          color: "white   !important",
          width: "70%     !important",
          padding: "0.8rem 2rem   !important",
          borderRadius: "4px !important",
          "&:hover": {
            backgroundColor: "#ed1c24 !important",
            color: "white !important",
          },
        },
        sideBarMenu: {
          listStyleType: "none",
          padding: 0,
          margin: "3rem  10px",
          width: "100%",
        },
        sideBarMenuItem: {
          display: "flex",
          alignItems: "center",
          padding: "0.9rem 1rem",
          borderRadius: "2px",
          marginTop: "1.3rem",
          width: "75%",
          boxShadow: " 4px 4px 8px rgba(0, 0, 0, 0.3)",
          "&:hover": {
            backgroundColor: "#ed1c24",
            boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.4)",
            "& svg": { color: "white" },
            "& span": { color: "white !important" },
          },
          "& svg": { color: "#414141", fontSize: "26px", margin: "0 20px  0 " },
          "& span": {
            color: "#414141",
            fontSize: "1rem",
            fontWeight: "500",
            marginLeft: "1rem",
            textDecoration: "none",
            textDecorationLine: "none",
            transition: "color 0.3s ease",
          },
        },
      }));
      const y = function () {
        const e = N(),
          { user: t, loading: a } = (0, f.d4)((e) => e.userData),
          l = (0, n.W6)();
        return (0, b.jsx)(b.Fragment, {
          children:
            !a &&
            (0, b.jsx)(b.Fragment, {
              children: (0, b.jsxs)("div", {
                className: e.sidebar,
                children: [
                  (0, b.jsx)(i.A, {
                    src: t && t.avatar.url,
                    alt: "User Avatar",
                    className: e.avatar11,
                  }),
                  (0, b.jsx)(r.A, {
                    variant: "subtitle1",
                    className: e.name,
                    children: t && t.name,
                  }),
                  (0, b.jsx)(r.A, {
                    variant: "subtitle2",
                    className: e.email,
                    children: t && t.email,
                  }),
                  (0, b.jsx)("div", { className: e.divider }),
                  (0, b.jsxs)("ul", {
                    className: e.sideBarMenu,
                    children: [
                      (0, b.jsx)(s.N_, {
                        to: "/admin/dashboard",
                        style: { color: "inherit", textDecoration: "none" },
                        children: (0, b.jsxs)("li", {
                          className: e.sideBarMenuItem,
                          children: [
                            (0, b.jsx)(d.A, { fontSize: "large" }),
                            (0, b.jsxs)("span", {
                              className: e.sideBarMenuItem_text,
                              children: [" ", "Dashboard"],
                            }),
                          ],
                        }),
                      }),
                      (0, b.jsx)(s.N_, {
                        to: "/",
                        style: { color: "inherit", textDecoration: "none" },
                        children: (0, b.jsxs)("li", {
                          className: e.sideBarMenuItem,
                          children: [
                            (0, b.jsx)(u.A, { fontSize: "large" }),
                            (0, b.jsx)("span", {
                              className: e.sideBarMenuItem_text,
                              children: "Home",
                            }),
                          ],
                        }),
                      }),
                      (0, b.jsx)(s.N_, {
                        to: "/admin/products",
                        style: { color: "inherit", textDecoration: "none" },
                        children: (0, b.jsxs)("li", {
                          className: e.sideBarMenuItem,
                          children: [
                            (0, b.jsx)(c.A, { fontSize: "large" }),
                            (0, b.jsxs)("span", {
                              className: e.sideBarMenuItem_text,
                              children: [" ", "Products"],
                            }),
                          ],
                        }),
                      }),
                      (0, b.jsx)(s.N_, {
                        to: "/admin/new/product",
                        style: { color: "inherit", textDecoration: "none" },
                        children: (0, b.jsxs)("li", {
                          className: e.sideBarMenuItem,
                          children: [
                            (0, b.jsx)(x.A, { fontSize: "large" }),
                            (0, b.jsx)("span", {
                              className: e.sideBarMenuItem_text,
                              children: "Add Product",
                            }),
                          ],
                        }),
                      }),
                      (0, b.jsx)(s.N_, {
                        to: "/admin/orders",
                        style: { color: "inherit", textDecoration: "none" },
                        children: (0, b.jsxs)("li", {
                          className: e.sideBarMenuItem,
                          children: [
                            (0, b.jsx)(m.A, { fontSize: "large" }),
                            (0, b.jsx)("span", {
                              className: e.sideBarMenuItem_text,
                              children: "Orders",
                            }),
                          ],
                        }),
                      }),
                      (0, b.jsx)(s.N_, {
                        to: "/admin/reviews",
                        style: { color: "inherit", textDecoration: "none" },
                        children: (0, b.jsxs)("li", {
                          className: e.sideBarMenuItem,
                          children: [
                            (0, b.jsx)(p.A, { fontSize: "large" }),
                            (0, b.jsx)("span", {
                              className: e.sideBarMenuItem_text,
                              children: "Reviews",
                            }),
                          ],
                        }),
                      }),
                      (0, b.jsx)(s.N_, {
                        to: "/contact",
                        style: { color: "inherit", textDecoration: "none" },
                        children: (0, b.jsxs)("li", {
                          className: e.sideBarMenuItem,
                          children: [
                            (0, b.jsx)(g.A, { fontSize: "large" }),
                            (0, b.jsx)("span", {
                              className: e.sideBarMenuItem_text,
                              children: "Contact",
                            }),
                          ],
                        }),
                      }),
                      (0, b.jsx)(s.N_, {
                        to: "/admin/contact",
                        style: { color: "inherit", textDecoration: "none" },
                        children: (0, b.jsxs)("li", {
                          className: e.sideBarMenuItem,
                          children: [
                            (0, b.jsx)(j.A, { fontSize: "large" }),
                            (0, b.jsx)("span", {
                              className: e.sideBarMenuItem_text,
                              children: "Contact-Header",
                            }),
                          ],
                        }),
                      }),
                      (0, b.jsx)(s.N_, {
                        to: "/admin/team",
                        style: { color: "inherit", textDecoration: "none" },
                        children: (0, b.jsxs)("li", {
                          className: e.sideBarMenuItem,
                          children: [
                            (0, b.jsx)(j.A, { fontSize: "large" }),
                            (0, b.jsx)("span", {
                              className: e.sideBarMenuItem_text,
                              children: "Team",
                            }),
                          ],
                        }),
                      }),
                      (0, b.jsx)(s.N_, {
                        to: "/admin/testimonial",
                        style: { color: "inherit", textDecoration: "none" },
                        children: (0, b.jsxs)("li", {
                          className: e.sideBarMenuItem,
                          children: [
                            (0, b.jsx)(j.A, { fontSize: "large" }),
                            (0, b.jsx)("span", {
                              className: e.sideBarMenuItem_text,
                              children: "Testimonial",
                            }),
                          ],
                        }),
                      }),
                      (0, b.jsx)(s.N_, {
                        to: "/admin/news",
                        style: { color: "inherit", textDecoration: "none" },
                        children: (0, b.jsxs)("li", {
                          className: e.sideBarMenuItem,
                          children: [
                            (0, b.jsx)(j.A, { fontSize: "large" }),
                            (0, b.jsx)("span", {
                              className: e.sideBarMenuItem_text,
                              children: "News Feed",
                            }),
                          ],
                        }),
                      }),
                      (0, b.jsx)(s.N_, {
                        to: "/admin/createuser",
                        style: { color: "inherit", textDecoration: "none" },
                        children: (0, b.jsxs)("li", {
                          className: e.sideBarMenuItem,
                          children: [
                            (0, b.jsx)(j.A, { fontSize: "large" }),
                            (0, b.jsx)("span", {
                              className: e.sideBarMenuItem_text,
                              children: "Messages",
                            }),
                          ],
                        }),
                      }),
                      (0, b.jsx)(s.N_, {
                        to: "/admin/blog",
                        style: { color: "inherit", textDecoration: "none" },
                        children: (0, b.jsxs)("li", {
                          className: e.sideBarMenuItem,
                          children: [
                            (0, b.jsx)(j.A, { fontSize: "large" }),
                            (0, b.jsx)("span", {
                              className: e.sideBarMenuItem_text,
                              children: "Blog",
                            }),
                          ],
                        }),
                      }),
                      (0, b.jsx)(s.N_, {
                        to: "/admin/gallery",
                        style: { color: "inherit", textDecoration: "none" },
                        children: (0, b.jsxs)("li", {
                          className: e.sideBarMenuItem,
                          children: [
                            (0, b.jsx)(j.A, { fontSize: "large" }),
                            (0, b.jsx)("span", {
                              className: e.sideBarMenuItem_text,
                              children: "Gallery",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, b.jsx)("div", { className: e.divider }),
                  (0, b.jsxs)(o.A, {
                    className: e.button,
                    onClick: function () {
                      l.push("/account");
                    },
                    variant: "contained",
                    children: [
                      (0, b.jsx)(h.A, {
                        fontSize: "large",
                        style: { marginRight: "10px" },
                      }),
                      "Account",
                    ],
                  }),
                ],
              }),
            }),
        });
      };
    },
    42634: () => {},
  },
]);
//# sourceMappingURL=971.7b2912a5.chunk.js.map
