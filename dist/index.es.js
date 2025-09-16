import ne, { useRef as Ct, useDebugValue as rt, createElement as Cn, useContext as jn, useState as Ge, useEffect as ir } from "react";
var Sr = { exports: {} }, Me = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tt;
function En() {
  if (tt)
    return Me;
  tt = 1;
  var e = ne, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(f, c, g) {
    var h, p = {}, x = null, b = null;
    g !== void 0 && (x = "" + g), c.key !== void 0 && (x = "" + c.key), c.ref !== void 0 && (b = c.ref);
    for (h in c)
      n.call(c, h) && !l.hasOwnProperty(h) && (p[h] = c[h]);
    if (f && f.defaultProps)
      for (h in c = f.defaultProps, c)
        p[h] === void 0 && (p[h] = c[h]);
    return { $$typeof: r, type: f, key: x, ref: b, props: p, _owner: o.current };
  }
  return Me.Fragment = t, Me.jsx = i, Me.jsxs = i, Me;
}
var We = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nt;
function Rn() {
  return nt || (nt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ne, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), f = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), S = Symbol.iterator, E = "@@iterator";
    function T(a) {
      if (a === null || typeof a != "object")
        return null;
      var u = S && a[S] || a[E];
      return typeof u == "function" ? u : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(a) {
      {
        for (var u = arguments.length, v = new Array(u > 1 ? u - 1 : 0), $ = 1; $ < u; $++)
          v[$ - 1] = arguments[$];
        w("error", a, v);
      }
    }
    function w(a, u, v) {
      {
        var $ = k.ReactDebugCurrentFrame, z = $.getStackAddendum();
        z !== "" && (u += "%s", v = v.concat([z]));
        var V = v.map(function(D) {
          return String(D);
        });
        V.unshift("Warning: " + u), Function.prototype.apply.call(console[a], console, V);
      }
    }
    var P = !1, j = !1, C = !1, m = !1, A = !1, L;
    L = Symbol.for("react.module.reference");
    function ge(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === l || A || a === o || a === g || a === h || m || a === b || P || j || C || typeof a == "object" && a !== null && (a.$$typeof === x || a.$$typeof === p || a.$$typeof === i || a.$$typeof === f || a.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === L || a.getModuleId !== void 0));
    }
    function F(a, u, v) {
      var $ = a.displayName;
      if ($)
        return $;
      var z = u.displayName || u.name || "";
      return z !== "" ? v + "(" + z + ")" : v;
    }
    function me(a) {
      return a.displayName || "Context";
    }
    function H(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case l:
          return "Profiler";
        case o:
          return "StrictMode";
        case g:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case f:
            var u = a;
            return me(u) + ".Consumer";
          case i:
            var v = a;
            return me(v._context) + ".Provider";
          case c:
            return F(a, a.render, "ForwardRef");
          case p:
            var $ = a.displayName || null;
            return $ !== null ? $ : H(a.type) || "Memo";
          case x: {
            var z = a, V = z._payload, D = z._init;
            try {
              return H(D(V));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, ae = 0, ve, ue, pe, J, Z, oe, q;
    function _() {
    }
    _.__reactDisabledLog = !0;
    function G() {
      {
        if (ae === 0) {
          ve = console.log, ue = console.info, pe = console.warn, J = console.error, Z = console.group, oe = console.groupCollapsed, q = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: _,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        ae++;
      }
    }
    function I() {
      {
        if (ae--, ae === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, a, {
              value: ve
            }),
            info: X({}, a, {
              value: ue
            }),
            warn: X({}, a, {
              value: pe
            }),
            error: X({}, a, {
              value: J
            }),
            group: X({}, a, {
              value: Z
            }),
            groupCollapsed: X({}, a, {
              value: oe
            }),
            groupEnd: X({}, a, {
              value: q
            })
          });
        }
        ae < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var W = k.ReactCurrentDispatcher, te;
    function le(a, u, v) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (z) {
            var $ = z.stack.trim().match(/\n( *(at )?)/);
            te = $ && $[1] || "";
          }
        return `
` + te + a;
      }
    }
    var ce = !1, be;
    {
      var Ee = typeof WeakMap == "function" ? WeakMap : Map;
      be = new Ee();
    }
    function de(a, u) {
      if (!a || ce)
        return "";
      {
        var v = be.get(a);
        if (v !== void 0)
          return v;
      }
      var $;
      ce = !0;
      var z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var V;
      V = W.current, W.current = null, G();
      try {
        if (u) {
          var D = function() {
            throw Error();
          };
          if (Object.defineProperty(D.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(D, []);
            } catch (ee) {
              $ = ee;
            }
            Reflect.construct(a, [], D);
          } else {
            try {
              D.call();
            } catch (ee) {
              $ = ee;
            }
            a.call(D.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ee) {
            $ = ee;
          }
          a();
        }
      } catch (ee) {
        if (ee && $ && typeof ee.stack == "string") {
          for (var O = ee.stack.split(`
`), Q = $.stack.split(`
`), B = O.length - 1, Y = Q.length - 1; B >= 1 && Y >= 0 && O[B] !== Q[Y]; )
            Y--;
          for (; B >= 1 && Y >= 0; B--, Y--)
            if (O[B] !== Q[Y]) {
              if (B !== 1 || Y !== 1)
                do
                  if (B--, Y--, Y < 0 || O[B] !== Q[Y]) {
                    var ie = `
` + O[B].replace(" at new ", " at ");
                    return a.displayName && ie.includes("<anonymous>") && (ie = ie.replace("<anonymous>", a.displayName)), typeof a == "function" && be.set(a, ie), ie;
                  }
                while (B >= 1 && Y >= 0);
              break;
            }
        }
      } finally {
        ce = !1, W.current = V, I(), Error.prepareStackTrace = z;
      }
      var Pe = a ? a.displayName || a.name : "", we = Pe ? le(Pe) : "";
      return typeof a == "function" && be.set(a, we), we;
    }
    function en(a, u, v) {
      return de(a, !1);
    }
    function rn(a) {
      var u = a.prototype;
      return !!(u && u.isReactComponent);
    }
    function Ye(a, u, v) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return de(a, rn(a));
      if (typeof a == "string")
        return le(a);
      switch (a) {
        case g:
          return le("Suspense");
        case h:
          return le("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case c:
            return en(a.render);
          case p:
            return Ye(a.type, u, v);
          case x: {
            var $ = a, z = $._payload, V = $._init;
            try {
              return Ye(V(z), u, v);
            } catch {
            }
          }
        }
      return "";
    }
    var Ve = Object.prototype.hasOwnProperty, Wr = {}, Hr = k.ReactDebugCurrentFrame;
    function Ue(a) {
      if (a) {
        var u = a._owner, v = Ye(a.type, a._source, u ? u.type : null);
        Hr.setExtraStackFrame(v);
      } else
        Hr.setExtraStackFrame(null);
    }
    function tn(a, u, v, $, z) {
      {
        var V = Function.call.bind(Ve);
        for (var D in a)
          if (V(a, D)) {
            var O = void 0;
            try {
              if (typeof a[D] != "function") {
                var Q = Error(($ || "React class") + ": " + v + " type `" + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[D] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Q.name = "Invariant Violation", Q;
              }
              O = a[D](u, D, $, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (B) {
              O = B;
            }
            O && !(O instanceof Error) && (Ue(z), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $ || "React class", v, D, typeof O), Ue(null)), O instanceof Error && !(O.message in Wr) && (Wr[O.message] = !0, Ue(z), y("Failed %s type: %s", v, O.message), Ue(null));
          }
      }
    }
    var nn = Array.isArray;
    function pr(a) {
      return nn(a);
    }
    function an(a) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, v = u && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return v;
      }
    }
    function on(a) {
      try {
        return Br(a), !1;
      } catch {
        return !0;
      }
    }
    function Br(a) {
      return "" + a;
    }
    function Gr(a) {
      if (on(a))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", an(a)), Br(a);
    }
    var Le = k.ReactCurrentOwner, sn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Yr, Ur, hr;
    hr = {};
    function ln(a) {
      if (Ve.call(a, "ref")) {
        var u = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function cn(a) {
      if (Ve.call(a, "key")) {
        var u = Object.getOwnPropertyDescriptor(a, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function dn(a, u) {
      if (typeof a.ref == "string" && Le.current && u && Le.current.stateNode !== u) {
        var v = H(Le.current.type);
        hr[v] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(Le.current.type), a.ref), hr[v] = !0);
      }
    }
    function fn(a, u) {
      {
        var v = function() {
          Yr || (Yr = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        v.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function un(a, u) {
      {
        var v = function() {
          Ur || (Ur = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        v.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var pn = function(a, u, v, $, z, V, D) {
      var O = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: a,
        key: u,
        ref: v,
        props: D,
        // Record the component responsible for creating this element.
        _owner: V
      };
      return O._store = {}, Object.defineProperty(O._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(O, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $
      }), Object.defineProperty(O, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.freeze && (Object.freeze(O.props), Object.freeze(O)), O;
    };
    function hn(a, u, v, $, z) {
      {
        var V, D = {}, O = null, Q = null;
        v !== void 0 && (Gr(v), O = "" + v), cn(u) && (Gr(u.key), O = "" + u.key), ln(u) && (Q = u.ref, dn(u, z));
        for (V in u)
          Ve.call(u, V) && !sn.hasOwnProperty(V) && (D[V] = u[V]);
        if (a && a.defaultProps) {
          var B = a.defaultProps;
          for (V in B)
            D[V] === void 0 && (D[V] = B[V]);
        }
        if (O || Q) {
          var Y = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          O && fn(D, Y), Q && un(D, Y);
        }
        return pn(a, O, Q, z, $, Le.current, D);
      }
    }
    var gr = k.ReactCurrentOwner, qr = k.ReactDebugCurrentFrame;
    function Re(a) {
      if (a) {
        var u = a._owner, v = Ye(a.type, a._source, u ? u.type : null);
        qr.setExtraStackFrame(v);
      } else
        qr.setExtraStackFrame(null);
    }
    var mr;
    mr = !1;
    function vr(a) {
      return typeof a == "object" && a !== null && a.$$typeof === r;
    }
    function Xr() {
      {
        if (gr.current) {
          var a = H(gr.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function gn(a) {
      {
        if (a !== void 0) {
          var u = a.fileName.replace(/^.*[\\\/]/, ""), v = a.lineNumber;
          return `

Check your code at ` + u + ":" + v + ".";
        }
        return "";
      }
    }
    var Kr = {};
    function mn(a) {
      {
        var u = Xr();
        if (!u) {
          var v = typeof a == "string" ? a : a.displayName || a.name;
          v && (u = `

Check the top-level render call using <` + v + ">.");
        }
        return u;
      }
    }
    function Jr(a, u) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var v = mn(u);
        if (Kr[v])
          return;
        Kr[v] = !0;
        var $ = "";
        a && a._owner && a._owner !== gr.current && ($ = " It was passed a child from " + H(a._owner.type) + "."), Re(a), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, $), Re(null);
      }
    }
    function Zr(a, u) {
      {
        if (typeof a != "object")
          return;
        if (pr(a))
          for (var v = 0; v < a.length; v++) {
            var $ = a[v];
            vr($) && Jr($, u);
          }
        else if (vr(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var z = T(a);
          if (typeof z == "function" && z !== a.entries)
            for (var V = z.call(a), D; !(D = V.next()).done; )
              vr(D.value) && Jr(D.value, u);
        }
      }
    }
    function vn(a) {
      {
        var u = a.type;
        if (u == null || typeof u == "string")
          return;
        var v;
        if (typeof u == "function")
          v = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === p))
          v = u.propTypes;
        else
          return;
        if (v) {
          var $ = H(u);
          tn(v, a.props, "prop", $, a);
        } else if (u.PropTypes !== void 0 && !mr) {
          mr = !0;
          var z = H(u);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", z || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xn(a) {
      {
        for (var u = Object.keys(a.props), v = 0; v < u.length; v++) {
          var $ = u[v];
          if ($ !== "children" && $ !== "key") {
            Re(a), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $), Re(null);
            break;
          }
        }
        a.ref !== null && (Re(a), y("Invalid attribute `ref` supplied to `React.Fragment`."), Re(null));
      }
    }
    var Qr = {};
    function et(a, u, v, $, z, V) {
      {
        var D = ge(a);
        if (!D) {
          var O = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (O += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Q = gn(z);
          Q ? O += Q : O += Xr();
          var B;
          a === null ? B = "null" : pr(a) ? B = "array" : a !== void 0 && a.$$typeof === r ? (B = "<" + (H(a.type) || "Unknown") + " />", O = " Did you accidentally export a JSX literal instead of a component?") : B = typeof a, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", B, O);
        }
        var Y = hn(a, u, v, z, V);
        if (Y == null)
          return Y;
        if (D) {
          var ie = u.children;
          if (ie !== void 0)
            if ($)
              if (pr(ie)) {
                for (var Pe = 0; Pe < ie.length; Pe++)
                  Zr(ie[Pe], a);
                Object.freeze && Object.freeze(ie);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Zr(ie, a);
        }
        if (Ve.call(u, "key")) {
          var we = H(a), ee = Object.keys(u).filter(function(Sn) {
            return Sn !== "key";
          }), xr = ee.length > 0 ? "{key: someKey, " + ee.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Qr[we + xr]) {
            var $n = ee.length > 0 ? "{" + ee.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, xr, we, $n, we), Qr[we + xr] = !0;
          }
        }
        return a === n ? xn(Y) : vn(Y), Y;
      }
    }
    function bn(a, u, v) {
      return et(a, u, v, !0);
    }
    function yn(a, u, v) {
      return et(a, u, v, !1);
    }
    var wn = yn, kn = bn;
    We.Fragment = n, We.jsx = wn, We.jsxs = kn;
  }()), We;
}
process.env.NODE_ENV === "production" ? Sr.exports = En() : Sr.exports = Rn();
var s = Sr.exports, re = function() {
  return re = Object.assign || function(r) {
    for (var t, n = 1, o = arguments.length; n < o; n++) {
      t = arguments[n];
      for (var l in t)
        Object.prototype.hasOwnProperty.call(t, l) && (r[l] = t[l]);
    }
    return r;
  }, re.apply(this, arguments);
};
function Te(e, r, t) {
  if (t || arguments.length === 2)
    for (var n = 0, o = r.length, l; n < o; n++)
      (l || !(n in r)) && (l || (l = Array.prototype.slice.call(r, 0, n)), l[n] = r[n]);
  return e.concat(l || Array.prototype.slice.call(r));
}
function Pn(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var An = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Tn = /* @__PURE__ */ Pn(
  function(e) {
    return An.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), M = "-ms-", Be = "-moz-", N = "-webkit-", jt = "comm", sr = "rule", Or = "decl", _n = "@import", Et = "@keyframes", On = "@layer", Rt = Math.abs, Fr = String.fromCharCode, Cr = Object.assign;
function Fn(e, r) {
  return K(e, 0) ^ 45 ? (((r << 2 ^ K(e, 0)) << 2 ^ K(e, 1)) << 2 ^ K(e, 2)) << 2 ^ K(e, 3) : 0;
}
function Pt(e) {
  return e.trim();
}
function xe(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function R(e, r, t) {
  return e.replace(r, t);
}
function Ze(e, r, t) {
  return e.indexOf(r, t);
}
function K(e, r) {
  return e.charCodeAt(r) | 0;
}
function _e(e, r, t) {
  return e.slice(r, t);
}
function he(e) {
  return e.length;
}
function At(e) {
  return e.length;
}
function He(e, r) {
  return r.push(e), e;
}
function Dn(e, r) {
  return e.map(r).join("");
}
function at(e, r) {
  return e.filter(function(t) {
    return !xe(t, r);
  });
}
var lr = 1, Oe = 1, Tt = 0, se = 0, U = 0, ze = "";
function cr(e, r, t, n, o, l, i, f) {
  return { value: e, root: r, parent: t, type: n, props: o, children: l, line: lr, column: Oe, length: i, return: "", siblings: f };
}
function ye(e, r) {
  return Cr(cr("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, r);
}
function Ae(e) {
  for (; e.root; )
    e = ye(e.root, { children: [e] });
  He(e, e.siblings);
}
function In() {
  return U;
}
function zn() {
  return U = se > 0 ? K(ze, --se) : 0, Oe--, U === 10 && (Oe = 1, lr--), U;
}
function fe() {
  return U = se < Tt ? K(ze, se++) : 0, Oe++, U === 10 && (Oe = 1, lr++), U;
}
function Se() {
  return K(ze, se);
}
function Qe() {
  return se;
}
function dr(e, r) {
  return _e(ze, e, r);
}
function jr(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Nn(e) {
  return lr = Oe = 1, Tt = he(ze = e), se = 0, [];
}
function Vn(e) {
  return ze = "", e;
}
function br(e) {
  return Pt(dr(se - 1, Er(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ln(e) {
  for (; (U = Se()) && U < 33; )
    fe();
  return jr(e) > 2 || jr(U) > 3 ? "" : " ";
}
function Mn(e, r) {
  for (; --r && fe() && !(U < 48 || U > 102 || U > 57 && U < 65 || U > 70 && U < 97); )
    ;
  return dr(e, Qe() + (r < 6 && Se() == 32 && fe() == 32));
}
function Er(e) {
  for (; fe(); )
    switch (U) {
      case e:
        return se;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Er(U);
        break;
      case 40:
        e === 41 && Er(e);
        break;
      case 92:
        fe();
        break;
    }
  return se;
}
function Wn(e, r) {
  for (; fe() && e + U !== 47 + 10; )
    if (e + U === 42 + 42 && Se() === 47)
      break;
  return "/*" + dr(r, se - 1) + "*" + Fr(e === 47 ? e : fe());
}
function Hn(e) {
  for (; !jr(Se()); )
    fe();
  return dr(e, se);
}
function Bn(e) {
  return Vn(er("", null, null, null, [""], e = Nn(e), 0, [0], e));
}
function er(e, r, t, n, o, l, i, f, c) {
  for (var g = 0, h = 0, p = i, x = 0, b = 0, S = 0, E = 1, T = 1, k = 1, y = 0, w = "", P = o, j = l, C = n, m = w; T; )
    switch (S = y, y = fe()) {
      case 40:
        if (S != 108 && K(m, p - 1) == 58) {
          Ze(m += R(br(y), "&", "&\f"), "&\f", Rt(g ? f[g - 1] : 0)) != -1 && (k = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        m += br(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        m += Ln(S);
        break;
      case 92:
        m += Mn(Qe() - 1, 7);
        continue;
      case 47:
        switch (Se()) {
          case 42:
          case 47:
            He(Gn(Wn(fe(), Qe()), r, t, c), c);
            break;
          default:
            m += "/";
        }
        break;
      case 123 * E:
        f[g++] = he(m) * k;
      case 125 * E:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            T = 0;
          case 59 + h:
            k == -1 && (m = R(m, /\f/g, "")), b > 0 && he(m) - p && He(b > 32 ? it(m + ";", n, t, p - 1, c) : it(R(m, " ", "") + ";", n, t, p - 2, c), c);
            break;
          case 59:
            m += ";";
          default:
            if (He(C = ot(m, r, t, g, h, o, f, w, P = [], j = [], p, l), l), y === 123)
              if (h === 0)
                er(m, r, C, C, P, l, p, f, j);
              else
                switch (x === 99 && K(m, 3) === 110 ? 100 : x) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    er(e, C, C, n && He(ot(e, C, C, 0, 0, o, f, w, o, P = [], p, j), j), o, j, p, f, n ? P : j);
                    break;
                  default:
                    er(m, C, C, C, [""], j, 0, f, j);
                }
        }
        g = h = b = 0, E = k = 1, w = m = "", p = i;
        break;
      case 58:
        p = 1 + he(m), b = S;
      default:
        if (E < 1) {
          if (y == 123)
            --E;
          else if (y == 125 && E++ == 0 && zn() == 125)
            continue;
        }
        switch (m += Fr(y), y * E) {
          case 38:
            k = h > 0 ? 1 : (m += "\f", -1);
            break;
          case 44:
            f[g++] = (he(m) - 1) * k, k = 1;
            break;
          case 64:
            Se() === 45 && (m += br(fe())), x = Se(), h = p = he(w = m += Hn(Qe())), y++;
            break;
          case 45:
            S === 45 && he(m) == 2 && (E = 0);
        }
    }
  return l;
}
function ot(e, r, t, n, o, l, i, f, c, g, h, p) {
  for (var x = o - 1, b = o === 0 ? l : [""], S = At(b), E = 0, T = 0, k = 0; E < n; ++E)
    for (var y = 0, w = _e(e, x + 1, x = Rt(T = i[E])), P = e; y < S; ++y)
      (P = Pt(T > 0 ? b[y] + " " + w : R(w, /&\f/g, b[y]))) && (c[k++] = P);
  return cr(e, r, t, o === 0 ? sr : f, c, g, h, p);
}
function Gn(e, r, t, n) {
  return cr(e, r, t, jt, Fr(In()), _e(e, 2, -2), 0, n);
}
function it(e, r, t, n, o) {
  return cr(e, r, t, Or, _e(e, 0, n), _e(e, n + 1, -1), n, o);
}
function _t(e, r, t) {
  switch (Fn(e, r)) {
    case 5103:
      return N + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return N + e + e;
    case 4789:
      return Be + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return N + e + Be + e + M + e + e;
    case 5936:
      switch (K(e, r + 11)) {
        case 114:
          return N + e + M + R(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return N + e + M + R(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return N + e + M + R(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return N + e + M + e + e;
    case 6165:
      return N + e + M + "flex-" + e + e;
    case 5187:
      return N + e + R(e, /(\w+).+(:[^]+)/, N + "box-$1$2" + M + "flex-$1$2") + e;
    case 5443:
      return N + e + M + "flex-item-" + R(e, /flex-|-self/g, "") + (xe(e, /flex-|baseline/) ? "" : M + "grid-row-" + R(e, /flex-|-self/g, "")) + e;
    case 4675:
      return N + e + M + "flex-line-pack" + R(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return N + e + M + R(e, "shrink", "negative") + e;
    case 5292:
      return N + e + M + R(e, "basis", "preferred-size") + e;
    case 6060:
      return N + "box-" + R(e, "-grow", "") + N + e + M + R(e, "grow", "positive") + e;
    case 4554:
      return N + R(e, /([^-])(transform)/g, "$1" + N + "$2") + e;
    case 6187:
      return R(R(R(e, /(zoom-|grab)/, N + "$1"), /(image-set)/, N + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return R(e, /(image-set\([^]*)/, N + "$1$`$1");
    case 4968:
      return R(R(e, /(.+:)(flex-)?(.*)/, N + "box-pack:$3" + M + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + N + e + e;
    case 4200:
      if (!xe(e, /flex-|baseline/))
        return M + "grid-column-align" + _e(e, r) + e;
      break;
    case 2592:
    case 3360:
      return M + R(e, "template-", "") + e;
    case 4384:
    case 3616:
      return t && t.some(function(n, o) {
        return r = o, xe(n.props, /grid-\w+-end/);
      }) ? ~Ze(e + (t = t[r].value), "span", 0) ? e : M + R(e, "-start", "") + e + M + "grid-row-span:" + (~Ze(t, "span", 0) ? xe(t, /\d+/) : +xe(t, /\d+/) - +xe(e, /\d+/)) + ";" : M + R(e, "-start", "") + e;
    case 4896:
    case 4128:
      return t && t.some(function(n) {
        return xe(n.props, /grid-\w+-start/);
      }) ? e : M + R(R(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return R(e, /(.+)-inline(.+)/, N + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (he(e) - 1 - r > 6)
        switch (K(e, r + 1)) {
          case 109:
            if (K(e, r + 4) !== 45)
              break;
          case 102:
            return R(e, /(.+:)(.+)-([^]+)/, "$1" + N + "$2-$3$1" + Be + (K(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Ze(e, "stretch", 0) ? _t(R(e, "stretch", "fill-available"), r, t) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return R(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, l, i, f, c, g) {
        return M + o + ":" + l + g + (i ? M + o + "-span:" + (f ? c : +c - +l) + g : "") + e;
      });
    case 4949:
      if (K(e, r + 6) === 121)
        return R(e, ":", ":" + N) + e;
      break;
    case 6444:
      switch (K(e, K(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return R(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + N + (K(e, 14) === 45 ? "inline-" : "") + "box$3$1" + N + "$2$3$1" + M + "$2box$3") + e;
        case 100:
          return R(e, ":", ":" + M) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return R(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function nr(e, r) {
  for (var t = "", n = 0; n < e.length; n++)
    t += r(e[n], n, e, r) || "";
  return t;
}
function Yn(e, r, t, n) {
  switch (e.type) {
    case On:
      if (e.children.length)
        break;
    case _n:
    case Or:
      return e.return = e.return || e.value;
    case jt:
      return "";
    case Et:
      return e.return = e.value + "{" + nr(e.children, n) + "}";
    case sr:
      if (!he(e.value = e.props.join(",")))
        return "";
  }
  return he(t = nr(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function Un(e) {
  var r = At(e);
  return function(t, n, o, l) {
    for (var i = "", f = 0; f < r; f++)
      i += e[f](t, n, o, l) || "";
    return i;
  };
}
function qn(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function Xn(e, r, t, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Or:
        e.return = _t(e.value, e.length, t);
        return;
      case Et:
        return nr([ye(e, { value: R(e.value, "@", "@" + N) })], n);
      case sr:
        if (e.length)
          return Dn(t = e.props, function(o) {
            switch (xe(o, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Ae(ye(e, { props: [R(o, /:(read-\w+)/, ":" + Be + "$1")] })), Ae(ye(e, { props: [o] })), Cr(e, { props: at(t, n) });
                break;
              case "::placeholder":
                Ae(ye(e, { props: [R(o, /:(plac\w+)/, ":" + N + "input-$1")] })), Ae(ye(e, { props: [R(o, /:(plac\w+)/, ":" + Be + "$1")] })), Ae(ye(e, { props: [R(o, /:(plac\w+)/, M + "input-$1")] })), Ae(ye(e, { props: [o] })), Cr(e, { props: at(t, n) });
                break;
            }
            return "";
          });
    }
}
var Kn = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, je = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Ot = "active", Ft = "data-styled-version", fr = "6.1.19", Dr = `/*!sc*/
`, ar = typeof window < "u" && typeof document < "u", Jn = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), st = /invalid hook call/i, qe = /* @__PURE__ */ new Set(), Zn = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = r ? ' with the id of "'.concat(r, '"') : "", n = "The component ".concat(e).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o = console.error;
    try {
      var l = !0;
      console.error = function(i) {
        for (var f = [], c = 1; c < arguments.length; c++)
          f[c - 1] = arguments[c];
        st.test(i) ? (l = !1, qe.delete(n)) : o.apply(void 0, Te([i], f, !1));
      }, Ct(), l && !qe.has(n) && (console.warn(n), qe.add(n));
    } catch (i) {
      st.test(i.message) && qe.delete(n);
    } finally {
      console.error = o;
    }
  }
}, ur = Object.freeze([]), Fe = Object.freeze({});
function Qn(e, r, t) {
  return t === void 0 && (t = Fe), e.theme !== t.theme && e.theme || r || t.theme;
}
var Rr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), ea = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ra = /(^-|-$)/g;
function lt(e) {
  return e.replace(ea, "-").replace(ra, "");
}
var ta = /(a)(d)/gi, Xe = 52, ct = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Pr(e) {
  var r, t = "";
  for (r = Math.abs(e); r > Xe; r = r / Xe | 0)
    t = ct(r % Xe) + t;
  return (ct(r % Xe) + t).replace(ta, "$1-$2");
}
var yr, Dt = 5381, ke = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, It = function(e) {
  return ke(Dt, e);
};
function na(e) {
  return Pr(It(e) >>> 0);
}
function zt(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function wr(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Nt = typeof Symbol == "function" && Symbol.for, Vt = Nt ? Symbol.for("react.memo") : 60115, aa = Nt ? Symbol.for("react.forward_ref") : 60112, oa = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, ia = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Lt = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, sa = ((yr = {})[aa] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, yr[Vt] = Lt, yr);
function dt(e) {
  return ("type" in (r = e) && r.type.$$typeof) === Vt ? Lt : "$$typeof" in e ? sa[e.$$typeof] : oa;
  var r;
}
var la = Object.defineProperty, ca = Object.getOwnPropertyNames, ft = Object.getOwnPropertySymbols, da = Object.getOwnPropertyDescriptor, fa = Object.getPrototypeOf, ut = Object.prototype;
function Mt(e, r, t) {
  if (typeof r != "string") {
    if (ut) {
      var n = fa(r);
      n && n !== ut && Mt(e, n, t);
    }
    var o = ca(r);
    ft && (o = o.concat(ft(r)));
    for (var l = dt(e), i = dt(r), f = 0; f < o.length; ++f) {
      var c = o[f];
      if (!(c in ia || t && t[c] || i && c in i || l && c in l)) {
        var g = da(r, c);
        try {
          la(e, c, g);
        } catch {
        }
      }
    }
  }
  return e;
}
function De(e) {
  return typeof e == "function";
}
function Ir(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function $e(e, r) {
  return e && r ? "".concat(e, " ").concat(r) : e || r || "";
}
function pt(e, r) {
  if (e.length === 0)
    return "";
  for (var t = e[0], n = 1; n < e.length; n++)
    t += r ? r + e[n] : e[n];
  return t;
}
function Ie(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Ar(e, r, t) {
  if (t === void 0 && (t = !1), !t && !Ie(e) && !Array.isArray(e))
    return r;
  if (Array.isArray(r))
    for (var n = 0; n < r.length; n++)
      e[n] = Ar(e[n], r[n]);
  else if (Ie(r))
    for (var n in r)
      e[n] = Ar(e[n], r[n]);
  return e;
}
function zr(e, r) {
  Object.defineProperty(e, "toString", { value: r });
}
var ua = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function pa() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  for (var t = e[0], n = [], o = 1, l = e.length; o < l; o += 1)
    n.push(e[o]);
  return n.forEach(function(i) {
    t = t.replace(/%[a-z]/, i);
  }), t;
}
function Ne(e) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(r.length > 0 ? " Args: ".concat(r.join(", ")) : "")) : new Error(pa.apply(void 0, Te([ua[e]], r, !1)).trim());
}
var ha = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  return e.prototype.indexOfGroup = function(r) {
    for (var t = 0, n = 0; n < r; n++)
      t += this.groupSizes[n];
    return t;
  }, e.prototype.insertRules = function(r, t) {
    if (r >= this.groupSizes.length) {
      for (var n = this.groupSizes, o = n.length, l = o; r >= l; )
        if ((l <<= 1) < 0)
          throw Ne(16, "".concat(r));
      this.groupSizes = new Uint32Array(l), this.groupSizes.set(n), this.length = l;
      for (var i = o; i < l; i++)
        this.groupSizes[i] = 0;
    }
    for (var f = this.indexOfGroup(r + 1), c = (i = 0, t.length); i < c; i++)
      this.tag.insertRule(f, t[i]) && (this.groupSizes[r]++, f++);
  }, e.prototype.clearGroup = function(r) {
    if (r < this.length) {
      var t = this.groupSizes[r], n = this.indexOfGroup(r), o = n + t;
      this.groupSizes[r] = 0;
      for (var l = n; l < o; l++)
        this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(r) {
    var t = "";
    if (r >= this.length || this.groupSizes[r] === 0)
      return t;
    for (var n = this.groupSizes[r], o = this.indexOfGroup(r), l = o + n, i = o; i < l; i++)
      t += "".concat(this.tag.getRule(i)).concat(Dr);
    return t;
  }, e;
}(), ga = 1 << 30, rr = /* @__PURE__ */ new Map(), or = /* @__PURE__ */ new Map(), tr = 1, Ke = function(e) {
  if (rr.has(e))
    return rr.get(e);
  for (; or.has(tr); )
    tr++;
  var r = tr++;
  if (process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > ga))
    throw Ne(16, "".concat(r));
  return rr.set(e, r), or.set(r, e), r;
}, ma = function(e, r) {
  tr = r + 1, rr.set(e, r), or.set(r, e);
}, va = "style[".concat(je, "][").concat(Ft, '="').concat(fr, '"]'), xa = new RegExp("^".concat(je, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ba = function(e, r, t) {
  for (var n, o = t.split(","), l = 0, i = o.length; l < i; l++)
    (n = o[l]) && e.registerName(r, n);
}, ya = function(e, r) {
  for (var t, n = ((t = r.textContent) !== null && t !== void 0 ? t : "").split(Dr), o = [], l = 0, i = n.length; l < i; l++) {
    var f = n[l].trim();
    if (f) {
      var c = f.match(xa);
      if (c) {
        var g = 0 | parseInt(c[1], 10), h = c[2];
        g !== 0 && (ma(h, g), ba(e, h, c[3]), e.getTag().insertRules(g, o)), o.length = 0;
      } else
        o.push(f);
    }
  }
}, ht = function(e) {
  for (var r = document.querySelectorAll(va), t = 0, n = r.length; t < n; t++) {
    var o = r[t];
    o && o.getAttribute(je) !== Ot && (ya(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function wa() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Wt = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(f) {
    var c = Array.from(f.querySelectorAll("style[".concat(je, "]")));
    return c[c.length - 1];
  }(t), l = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(je, Ot), n.setAttribute(Ft, fr);
  var i = wa();
  return i && n.setAttribute("nonce", i), t.insertBefore(n, l), n;
}, ka = function() {
  function e(r) {
    this.element = Wt(r), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet)
        return t.sheet;
      for (var n = document.styleSheets, o = 0, l = n.length; o < l; o++) {
        var i = n[o];
        if (i.ownerNode === t)
          return i;
      }
      throw Ne(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(r, t) {
    try {
      return this.sheet.insertRule(t, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, e.prototype.getRule = function(r) {
    var t = this.sheet.cssRules[r];
    return t && t.cssText ? t.cssText : "";
  }, e;
}(), $a = function() {
  function e(r) {
    this.element = Wt(r), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(r, t) {
    if (r <= this.length && r >= 0) {
      var n = document.createTextNode(t);
      return this.element.insertBefore(n, this.nodes[r] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, e.prototype.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), Sa = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(r, t) {
    return r <= this.length && (this.rules.splice(r, 0, t), this.length++, !0);
  }, e.prototype.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, e.prototype.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), gt = ar, Ca = { isServer: !ar, useCSSOMInjection: !Jn }, Ht = function() {
  function e(r, t, n) {
    r === void 0 && (r = Fe), t === void 0 && (t = {});
    var o = this;
    this.options = re(re({}, Ca), r), this.gs = t, this.names = new Map(n), this.server = !!r.isServer, !this.server && ar && gt && (gt = !1, ht(this)), zr(this, function() {
      return function(l) {
        for (var i = l.getTag(), f = i.length, c = "", g = function(p) {
          var x = function(k) {
            return or.get(k);
          }(p);
          if (x === void 0)
            return "continue";
          var b = l.names.get(x), S = i.getGroup(p);
          if (b === void 0 || !b.size || S.length === 0)
            return "continue";
          var E = "".concat(je, ".g").concat(p, '[id="').concat(x, '"]'), T = "";
          b !== void 0 && b.forEach(function(k) {
            k.length > 0 && (T += "".concat(k, ","));
          }), c += "".concat(S).concat(E, '{content:"').concat(T, '"}').concat(Dr);
        }, h = 0; h < f; h++)
          g(h);
        return c;
      }(o);
    });
  }
  return e.registerId = function(r) {
    return Ke(r);
  }, e.prototype.rehydrate = function() {
    !this.server && ar && ht(this);
  }, e.prototype.reconstructWithOptions = function(r, t) {
    return t === void 0 && (t = !0), new e(re(re({}, this.options), r), this.gs, t && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (r = function(t) {
      var n = t.useCSSOMInjection, o = t.target;
      return t.isServer ? new Sa(o) : n ? new ka(o) : new $a(o);
    }(this.options), new ha(r)));
    var r;
  }, e.prototype.hasNameForId = function(r, t) {
    return this.names.has(r) && this.names.get(r).has(t);
  }, e.prototype.registerName = function(r, t) {
    if (Ke(r), this.names.has(r))
      this.names.get(r).add(t);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(t), this.names.set(r, n);
    }
  }, e.prototype.insertRules = function(r, t, n) {
    this.registerName(r, t), this.getTag().insertRules(Ke(r), n);
  }, e.prototype.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, e.prototype.clearRules = function(r) {
    this.getTag().clearGroup(Ke(r)), this.clearNames(r);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), ja = /&/g, Ea = /^\s*\/\/.*$/gm;
function Bt(e, r) {
  return e.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(r, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(r, " ")), t.props = t.props.map(function(n) {
      return "".concat(r, " ").concat(n);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Bt(t.children, r)), t;
  });
}
function Ra(e) {
  var r, t, n, o = e === void 0 ? Fe : e, l = o.options, i = l === void 0 ? Fe : l, f = o.plugins, c = f === void 0 ? ur : f, g = function(x, b, S) {
    return S.startsWith(t) && S.endsWith(t) && S.replaceAll(t, "").length > 0 ? ".".concat(r) : x;
  }, h = c.slice();
  h.push(function(x) {
    x.type === sr && x.value.includes("&") && (x.props[0] = x.props[0].replace(ja, t).replace(n, g));
  }), i.prefix && h.push(Xn), h.push(Yn);
  var p = function(x, b, S, E) {
    b === void 0 && (b = ""), S === void 0 && (S = ""), E === void 0 && (E = "&"), r = E, t = b, n = new RegExp("\\".concat(t, "\\b"), "g");
    var T = x.replace(Ea, ""), k = Bn(S || b ? "".concat(S, " ").concat(b, " { ").concat(T, " }") : T);
    i.namespace && (k = Bt(k, i.namespace));
    var y = [];
    return nr(k, Un(h.concat(qn(function(w) {
      return y.push(w);
    })))), y;
  };
  return p.hash = c.length ? c.reduce(function(x, b) {
    return b.name || Ne(15), ke(x, b.name);
  }, Dt).toString() : "", p;
}
var Pa = new Ht(), Tr = Ra(), Gt = ne.createContext({ shouldForwardProp: void 0, styleSheet: Pa, stylis: Tr });
Gt.Consumer;
ne.createContext(void 0);
function mt() {
  return jn(Gt);
}
var vt = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, l) {
      l === void 0 && (l = Tr);
      var i = n.name + l.hash;
      o.hasNameForId(n.id, i) || o.insertRules(n.id, i, l(n.rules, i, "@keyframes"));
    }, this.name = r, this.id = "sc-keyframes-".concat(r), this.rules = t, zr(this, function() {
      throw Ne(12, String(n.name));
    });
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = Tr), this.name + r.hash;
  }, e;
}(), Aa = function(e) {
  return e >= "A" && e <= "Z";
};
function xt(e) {
  for (var r = "", t = 0; t < e.length; t++) {
    var n = e[t];
    if (t === 1 && n === "-" && e[0] === "-")
      return e;
    Aa(n) ? r += "-" + n.toLowerCase() : r += n;
  }
  return r.startsWith("ms-") ? "-" + r : r;
}
var Yt = function(e) {
  return e == null || e === !1 || e === "";
}, Ut = function(e) {
  var r, t, n = [];
  for (var o in e) {
    var l = e[o];
    e.hasOwnProperty(o) && !Yt(l) && (Array.isArray(l) && l.isCss || De(l) ? n.push("".concat(xt(o), ":"), l, ";") : Ie(l) ? n.push.apply(n, Te(Te(["".concat(o, " {")], Ut(l), !1), ["}"], !1)) : n.push("".concat(xt(o), ": ").concat((r = o, (t = l) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || r in Kn || r.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return n;
};
function Ce(e, r, t, n) {
  if (Yt(e))
    return [];
  if (Ir(e))
    return [".".concat(e.styledComponentId)];
  if (De(e)) {
    if (!De(l = e) || l.prototype && l.prototype.isReactComponent || !r)
      return [e];
    var o = e(r);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof vt || Ie(o) || o === null || console.error("".concat(zt(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Ce(o, r, t, n);
  }
  var l;
  return e instanceof vt ? t ? (e.inject(t, n), [e.getName(n)]) : [e] : Ie(e) ? Ut(e) : Array.isArray(e) ? Array.prototype.concat.apply(ur, e.map(function(i) {
    return Ce(i, r, t, n);
  })) : [e.toString()];
}
function Ta(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (De(t) && !Ir(t))
      return !1;
  }
  return !0;
}
var _a = It(fr), Oa = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Ta(r), this.componentId = t, this.baseHash = ke(_a, t), this.baseStyle = n, Ht.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(r, t, n) : "";
    if (this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId))
        o = $e(o, this.staticRulesId);
      else {
        var l = pt(Ce(this.rules, r, t, n)), i = Pr(ke(this.baseHash, l) >>> 0);
        if (!t.hasNameForId(this.componentId, i)) {
          var f = n(l, ".".concat(i), void 0, this.componentId);
          t.insertRules(this.componentId, i, f);
        }
        o = $e(o, i), this.staticRulesId = i;
      }
    else {
      for (var c = ke(this.baseHash, n.hash), g = "", h = 0; h < this.rules.length; h++) {
        var p = this.rules[h];
        if (typeof p == "string")
          g += p, process.env.NODE_ENV !== "production" && (c = ke(c, p));
        else if (p) {
          var x = pt(Ce(p, r, t, n));
          c = ke(c, x + h), g += x;
        }
      }
      if (g) {
        var b = Pr(c >>> 0);
        t.hasNameForId(this.componentId, b) || t.insertRules(this.componentId, b, n(g, ".".concat(b), void 0, this.componentId)), o = $e(o, b);
      }
    }
    return o;
  }, e;
}(), qt = ne.createContext(void 0);
qt.Consumer;
var kr = {}, bt = /* @__PURE__ */ new Set();
function Fa(e, r, t) {
  var n = Ir(e), o = e, l = !wr(e), i = r.attrs, f = i === void 0 ? ur : i, c = r.componentId, g = c === void 0 ? function(P, j) {
    var C = typeof P != "string" ? "sc" : lt(P);
    kr[C] = (kr[C] || 0) + 1;
    var m = "".concat(C, "-").concat(na(fr + C + kr[C]));
    return j ? "".concat(j, "-").concat(m) : m;
  }(r.displayName, r.parentComponentId) : c, h = r.displayName, p = h === void 0 ? function(P) {
    return wr(P) ? "styled.".concat(P) : "Styled(".concat(zt(P), ")");
  }(e) : h, x = r.displayName && r.componentId ? "".concat(lt(r.displayName), "-").concat(r.componentId) : r.componentId || g, b = n && o.attrs ? o.attrs.concat(f).filter(Boolean) : f, S = r.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var E = o.shouldForwardProp;
    if (r.shouldForwardProp) {
      var T = r.shouldForwardProp;
      S = function(P, j) {
        return E(P, j) && T(P, j);
      };
    } else
      S = E;
  }
  var k = new Oa(t, x, n ? o.componentStyle : void 0);
  function y(P, j) {
    return function(C, m, A) {
      var L = C.attrs, ge = C.componentStyle, F = C.defaultProps, me = C.foldedComponentIds, H = C.styledComponentId, X = C.target, ae = ne.useContext(qt), ve = mt(), ue = C.shouldForwardProp || ve.shouldForwardProp;
      process.env.NODE_ENV !== "production" && rt(H);
      var pe = Qn(m, ae, F) || Fe, J = function(I, W, te) {
        for (var le, ce = re(re({}, W), { className: void 0, theme: te }), be = 0; be < I.length; be += 1) {
          var Ee = De(le = I[be]) ? le(ce) : le;
          for (var de in Ee)
            ce[de] = de === "className" ? $e(ce[de], Ee[de]) : de === "style" ? re(re({}, ce[de]), Ee[de]) : Ee[de];
        }
        return W.className && (ce.className = $e(ce.className, W.className)), ce;
      }(L, m, pe), Z = J.as || X, oe = {};
      for (var q in J)
        J[q] === void 0 || q[0] === "$" || q === "as" || q === "theme" && J.theme === pe || (q === "forwardedAs" ? oe.as = J.forwardedAs : ue && !ue(q, Z) || (oe[q] = J[q], ue || process.env.NODE_ENV !== "development" || Tn(q) || bt.has(q) || !Rr.has(Z) || (bt.add(q), console.warn('styled-components: it looks like an unknown prop "'.concat(q, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var _ = function(I, W) {
        var te = mt(), le = I.generateAndInjectStyles(W, te.styleSheet, te.stylis);
        return process.env.NODE_ENV !== "production" && rt(le), le;
      }(ge, J);
      process.env.NODE_ENV !== "production" && C.warnTooManyClasses && C.warnTooManyClasses(_);
      var G = $e(me, H);
      return _ && (G += " " + _), J.className && (G += " " + J.className), oe[wr(Z) && !Rr.has(Z) ? "class" : "className"] = G, A && (oe.ref = A), Cn(Z, oe);
    }(w, P, j);
  }
  y.displayName = p;
  var w = ne.forwardRef(y);
  return w.attrs = b, w.componentStyle = k, w.displayName = p, w.shouldForwardProp = S, w.foldedComponentIds = n ? $e(o.foldedComponentIds, o.styledComponentId) : "", w.styledComponentId = x, w.target = n ? o.target : e, Object.defineProperty(w, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(P) {
    this._foldedDefaultProps = n ? function(j) {
      for (var C = [], m = 1; m < arguments.length; m++)
        C[m - 1] = arguments[m];
      for (var A = 0, L = C; A < L.length; A++)
        Ar(j, L[A], !0);
      return j;
    }({}, o.defaultProps, P) : P;
  } }), process.env.NODE_ENV !== "production" && (Zn(p, x), w.warnTooManyClasses = function(P, j) {
    var C = {}, m = !1;
    return function(A) {
      if (!m && (C[A] = !0, Object.keys(C).length >= 200)) {
        var L = j ? ' with the id of "'.concat(j, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(P).concat(L, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), m = !0, C = {};
      }
    };
  }(p, x)), zr(w, function() {
    return ".".concat(w.styledComponentId);
  }), l && Mt(w, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), w;
}
function yt(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1)
    t.push(r[n], e[n + 1]);
  return t;
}
var wt = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Da(e) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  if (De(e) || Ie(e))
    return wt(Ce(yt(ur, Te([e], r, !0))));
  var n = e;
  return r.length === 0 && n.length === 1 && typeof n[0] == "string" ? Ce(n) : wt(Ce(yt(n, r)));
}
function _r(e, r, t) {
  if (t === void 0 && (t = Fe), !r)
    throw Ne(1, r);
  var n = function(o) {
    for (var l = [], i = 1; i < arguments.length; i++)
      l[i - 1] = arguments[i];
    return e(r, t, Da.apply(void 0, Te([o], l, !1)));
  };
  return n.attrs = function(o) {
    return _r(e, r, re(re({}, t), { attrs: Array.prototype.concat(t.attrs, o).filter(Boolean) }));
  }, n.withConfig = function(o) {
    return _r(e, r, re(re({}, t), o));
  }, n;
}
var Xt = function(e) {
  return _r(Fa, e);
}, d = Xt;
Rr.forEach(function(e) {
  d[e] = Xt(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Je = "__sc-".concat(je, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Je] || (window[Je] = 0), window[Je] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Je] += 1);
const Ia = d.button`
  font-family: var(--mainFont, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
  font-size: 14px;
  font-weight: 400;
  height: ${(e) => e.size === "large" ? "45px" : "31px"};
  line-height: ${(e) => e.size === "large" ? "19px" : "normal"};
  padding: 0 20px;
  border: 2px solid transparent;
  border-radius: 2px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  white-space: nowrap;
  width: ${(e) => e.fullWidth ? "100%" : "auto"};
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    background-color: var(--gray2, #f5f5f5);
  }
  
  /* Primary variant */
  ${(e) => e.variant === "primary" && `
    background-color: var(--blue, #1376CD);
    color: var(--white, #ffffff);
    
    &:hover:not(:disabled) {
      background-color: var(--darkBlue, #0d5ba3);
    }
    
    &:disabled {
      opacity: 0.25;
    }
  `}
  
  /* Secondary variant (default) */
  ${(e) => (!e.variant || e.variant === "secondary") && `
    background-color: var(--gray3, #e5e5e5);
    color: var(--black, #000000);
  `}
  
  /* Red variant */
  ${(e) => e.variant === "red" && `
    background-color: var(--red, #D72919);
    color: var(--white, #ffffff);
    
    &:hover:not(:disabled),
    &:active {
      background-color: var(--darkRed, #b01e12);
    }
    
    &:active {
      border: 2px solid var(--red, #D72919);
    }
    
    &:disabled {
      opacity: 0.25;
      color: var(--white, #ffffff);
      background-color: var(--red, #D72919);
    }
  `}
  
  /* Green variant */
  ${(e) => e.variant === "green" && `
    background-color: var(--green, #1F8446);
    color: var(--white, #ffffff);
    
    &:hover:not(:disabled),
    &:active {
      background-color: var(--darkGreen, #155d32);
    }
    
    &:active {
      border: 2px solid var(--green, #1F8446);
    }
    
    &:disabled {
      opacity: 0.25;
      color: var(--white, #ffffff);
      background-color: var(--green, #1F8446);
    }
  `}
  
  /* White variant */
  ${(e) => e.variant === "white" && `
    background-color: var(--white, #ffffff);
    border: 1px solid var(--blue, #1376CD);
    color: var(--blue, #1376CD);
    
    &:hover:not(:disabled),
    &:active {
      background-color: var(--lightBlue, #e6f2ff);
    }
    
    &:active {
      border: 2px solid var(--blue, #1376CD);
    }
    
    &:disabled {
      opacity: 0.25;
      color: var(--blue, #1376CD);
      background-color: var(--white, #ffffff);
    }
  `}
  
  /* Large size */
  ${(e) => e.size === "large" && `
    font-size: 16px;
  `}
  
  /* Mobile full width */
  @media (max-width: 667px) {
    ${(e) => e.fullWidthOnMobile && `
      width: 100%;
    `}
  }
`, za = d.span`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 100%;
  opacity: ${(e) => e.loading ? 0 : 1};
  transition: opacity 0.2s ease;
`, Na = d.div`
  width: ${(e) => e.size === "large" ? "30px" : "18px"};
  height: ${(e) => e.size === "large" ? "30px" : "18px"};
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`, Ai = ({
  variant: e = "secondary",
  size: r = "default",
  disabled: t = !1,
  loading: n = !1,
  fullWidth: o = !1,
  fullWidthOnMobile: l = !1,
  children: i,
  onClick: f,
  type: c = "button",
  className: g,
  "data-cy": h = "fsp-button",
  ...p
}) => /* @__PURE__ */ s.jsxs(
  Ia,
  {
    variant: e,
    size: r,
    disabled: t || n,
    fullWidth: o,
    fullWidthOnMobile: l,
    onClick: f,
    type: c,
    className: g,
    "data-cy": h,
    ...p,
    children: [
      /* @__PURE__ */ s.jsx(za, { loading: n, children: i }),
      n && /* @__PURE__ */ s.jsx(Na, { size: r })
    ]
  }
), Va = (e) => `
    
    font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
    margin: 0;
    letter-spacing: normal;
  
    ${{
  h1: `
      font-size: 24px;
      line-height: 28px;
      font-weight: 400;
      @media (max-width: 599px) {
        font-size: 20px;
        line-height: 24px;
      }
    `,
  h2: `
      font-size: 20px;
      line-height: 24px;
      font-weight: 400;
      @media (max-width: 599px) {
        font-size: 18px;
        line-height: 21px;
      }
    `,
  h3: `
      font-size: 18px;
      line-height: 21px;
      font-weight: 400;
      @media (max-width: 599px) {
        font-size: 16px;
        line-height: 19px;
      }
    `,
  h4: `
      font-size: 16px;
      line-height: 19px;
      font-weight: 400;
      @media (max-width: 599px) {
        font-size: 14px;
        line-height: 16px;
      }
    `,
  h5: `
      font-size: 14px;
      line-height: 18px;
      font-weight: 400;
    `,
  body: `
      font-size: 14px;
      line-height: 16px;
      font-weight: 400;
    `,
  secondary: `
      font-size: 12px;
      line-height: 14px;
      font-weight: 400;
    `,
  caption: `
      font-size: 12px;
      line-height: 14px;
      font-weight: 400;
    `,
  error: `
      font-size: 12px;
      line-height: 14px;
      font-weight: 400;
    `,
  hint: `
      font-size: 12px;
      line-height: 14px;
      font-weight: 400;
    `
}[e || "body"]}
  `, La = (e) => `color: ${{
  black: "var(--black, #000000)",
  gray1: "var(--gray1, #595959)",
  gray2: "var(--gray2, #919191)",
  blue: "var(--blue, #1374c9)",
  red: "var(--red, #d72919)",
  green: "var(--green, #1f8446)",
  orange: "var(--orange, #dc7418)",
  white: "var(--white, #ffffff)"
}[e || "black"]};`, Ma = d.div`
  ${({ variant: e }) => Va(e)}
  ${({ color: e }) => La(e)}
  ${({ weight: e }) => e === "bold" && "font-weight: bold;"}
  ${({ align: e }) => e && `text-align: ${e};`}
  ${({ underline: e }) => e && "text-decoration: underline;"}
  ${({ noMargin: e }) => e && "margin: 0 !important;"}
  
  /* Link styles for blue text */
  ${({ color: e, variant: r }) => e === "blue" && r !== "h1" && r !== "h2" && r !== "h3" && r !== "h4" && r !== "h5" && `
    cursor: pointer;
    
    &:hover {
      text-decoration: none;
    }
  `}
`, Ti = ({
  variant: e = "body",
  color: r = "black",
  weight: t = "normal",
  align: n,
  children: o,
  className: l,
  style: i,
  as: f,
  underline: c = !1,
  noMargin: g = !1,
  ...h
}) => {
  const p = f || (e != null && e.startsWith("h") ? e : "div");
  return /* @__PURE__ */ s.jsx(
    Ma,
    {
      as: p,
      variant: e,
      color: r,
      weight: t,
      align: n,
      underline: c,
      noMargin: g,
      className: l,
      style: i,
      ...h,
      children: o
    }
  );
}, $r = d.div`
  width: 100%;
  margin-top: ${(e) => e.noTopMargin ? "0" : "10px"};
  margin-bottom: ${(e) => e.noBottomMargin ? "0" : "15px"};
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
`, Wa = d.table`
  width: 100%;
  border-collapse: collapse;
  
  ${(e) => e.responsive && `
    @media (max-width: ${e.breakpoint || 768}px) {
      display: none;
    }
  `}
  
  ${(e) => e.tight && `
    td {
      padding: 10px 20px;
    }
  `}
  
  ${(e) => e.contentTopAligned && `
    td {
      vertical-align: top;
    }
  `}
  
  ${(e) => e.striped && `
    tr:nth-child(even) td {
      background: var(--gray5, #fafafa);
    }
  `}
`, Ha = d.th`
  color: var(--black, #000000);
  background-color: var(--lightBlue, #e7f1fa);
  padding: 10px 20px;
  text-align: ${(e) => e.align || "left"};
  width: ${(e) => e.width || "auto"};
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  font-size: 14px;
  font-weight: 400;
  border-bottom: 1px solid var(--gray3, #e5e5e5);
  
  ${(e) => e.sortable && `
    cursor: pointer;
    user-select: none;
    
    &:hover {
      background-color: var(--lightBlue2, #cce4f7);
    }
  `}
`, Ba = d.tr`
  border-bottom: ${(e) => e.noBorderBottom ? "none" : "1px solid var(--gray3, #e5e5e5)"};
  
  ${(e) => e.clickable && `
    cursor: pointer;
    
    &:hover {
      background-color: var(--gray4, #f5f5f5);
    }
  `}
`, Ga = d.td`
  padding: 15px 20px;
  color: var(--black, #000000);
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  font-size: 14px;
  line-height: normal;
  text-align: ${(e) => e.align || "left"};
  
  a {
    color: var(--blue, #1374c9);
    text-decoration: underline;
    
    &:hover {
      text-decoration: none;
    }
    
    &.isSelected {
      text-decoration: underline !important;
    }
  }
  
  b {
    background-color: var(--yellow, #fffba3);
    font-weight: bold;
  }
  
  .warning {
    color: var(--orange, #dc7418);
    font-weight: bold;
  }
  
  .expired,
  .misconfigured,
  .error {
    color: var(--red, #d72919);
    font-weight: bold;
  }
`, Ya = d.div`
  display: ${(e) => e.withIcon ? "grid" : "block"};
  grid-auto-flow: ${(e) => e.withIcon ? "column" : "initial"};
  gap: ${(e) => e.withIcon ? "15px" : "0"};
  justify-content: ${(e) => e.withIcon ? "start" : "initial"};
  align-items: ${(e) => e.withIcon ? "center" : "initial"};
  color: var(--gray1, #595959);
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  font-size: 14px;
  padding: 0 20px 15px 20px;
  margin-top: 15px;
  
  .big-icon {
    font-size: 50px;
    color: var(--gray3, #e5e5e5);
  }
`, Ua = d.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  color: var(--blue, #1374c9);
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  font-size: 14px;
`, qa = d.div`
  display: none;
  
  @media (max-width: ${(e) => e.breakpoint || 768}px) {
    display: block;
  }
`, Xa = d.div`
  ${(e) => e.mobileLayout === "two-column" && `
    .mobile-table-row {
      display: grid;
      grid-template-columns: 120px 1fr;
      gap: 20px;
      align-items: start;
      
      &:not(:last-child) {
        margin-bottom: 15px;
      }
    }
  `}
  
  ${(e) => e.mobileLayout === "stacked" && `
    .mobile-table-row {
      display: grid;
      grid-template-columns: 1fr;
      gap: 0;
      align-items: start;
      
      &:not(:last-child) {
        margin-bottom: 15px;
      }
    }
  `}
`, Ka = d.div`
  display: grid;
  align-items: start;
  
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`, Ja = d.div`
  border-bottom: 1px solid var(--gray3, #e5e5e5);
  padding: 15px 20px;
  
  &:first-of-type {
    border-top: 1px solid var(--gray3, #e5e5e5);
    margin-top: 15px;
  }
`, Za = d.label`
  font-size: 12px;
  line-height: 16px;
  color: var(--gray1, #595959);
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 0;
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
`, Qa = d.div`
  font-size: 14px;
  line-height: 16px;
  color: var(--black, #000000);
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  word-wrap: break-word;
  
  a {
    color: var(--blue, #1374c9);
    text-decoration: underline;
    
    &:hover {
      text-decoration: none;
    }
  }
  
  b {
    background-color: var(--yellow, #fffba3);
    font-weight: bold;
  }
  
  .warning {
    color: var(--orange, #dc7418);
    font-weight: bold;
  }
  
  .expired,
  .misconfigured,
  .error {
    color: var(--red, #d72919);
    font-weight: bold;
  }
`, _i = d.div`
  border-radius: 3px;
  color: var(--white, #ffffff);
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  font-size: 14px;
  font-weight: 500;
  height: 36px;
  line-height: 36px;
  text-align: center;
  text-transform: capitalize;
  width: 36px;
  display: inline-block;
  
  ${(e) => e.status === "green" && `
    background-color: var(--green, #1f8446);
  `}
  
  ${(e) => e.status === "gray" && `
    background-color: var(--gray1, #595959);
  `}
  
  ${(e) => e.status === "light-green" && `
    background-color: var(--lightGreen, #e8f2ec);
    color: var(--green, #1f8446);
    border: 1px solid var(--green, #1f8446);
    
    &:hover {
      background-color: var(--lightGreen2, #c0e4cf);
    }
  `}
  
  ${(e) => e.status === "light-gray" && `
    background-color: var(--gray3, #e5e5e5);
    color: var(--gray1, #595959);
    border: 1px solid var(--gray1, #595959);
    
    &:hover {
      background-color: var(--gray2, #919191);
    }
  `}
  
  ${(e) => e.status === "light-orange" && `
    background-color: var(--lightOrange, #fbf1e7);
    color: var(--orange, #dc7418);
    border: 1px solid var(--orange, #dc7418);
    
    &:hover {
      background-color: var(--lightOrange2, #f3ceae);
    }
  `}
  
  ${(e) => e.status === "orange" && `
    background-color: var(--orange, #dc7418);
  `}
`, Oi = ({
  columns: e,
  data: r,
  loading: t = !1,
  emptyText: n,
  emptyIcon: o,
  striped: l = !1,
  tight: i = !1,
  contentTopAligned: f = !1,
  clickableRows: c = !1,
  noBorderBottom: g = !1,
  className: h,
  onRowClick: p,
  onSort: x,
  responsive: b = !1,
  mobileLayout: S = "two-column",
  mobileBreakpoint: E = 768
}) => {
  const [T, k] = ne.useState(null), [y, w] = ne.useState("asc"), P = (m) => {
    const A = T === m && y === "asc" ? "desc" : "asc";
    k(m), w(A), x == null || x(m, A);
  }, j = (m, A) => m.render ? m.render(A[m.key], A) : A[m.key], C = () => !b || !r || r.length === 0 ? null : /* @__PURE__ */ s.jsx(qa, { mobileLayout: S, breakpoint: E, children: /* @__PURE__ */ s.jsx(Xa, { mobileLayout: S, children: r.map((m, A) => /* @__PURE__ */ s.jsx(Ja, { children: e.map((L) => /* @__PURE__ */ s.jsxs(
    Ka,
    {
      className: "mobile-table-row",
      onClick: () => c && (p == null ? void 0 : p(m, A)),
      style: { cursor: c ? "pointer" : "default" },
      children: [
        /* @__PURE__ */ s.jsx(Za, { className: "secondary-text", children: L.label }),
        /* @__PURE__ */ s.jsx(Qa, { children: j(L, m) })
      ]
    },
    L.key
  )) }, A)) }) });
  return t ? /* @__PURE__ */ s.jsx($r, { className: h, children: /* @__PURE__ */ s.jsx(Ua, { children: "Loading..." }) }) : !r || r.length === 0 ? n ? /* @__PURE__ */ s.jsx($r, { className: h, children: /* @__PURE__ */ s.jsxs(Ya, { withIcon: !!o, children: [
    o && /* @__PURE__ */ s.jsx("div", { className: "big-icon", children: o }),
    n
  ] }) }) : null : /* @__PURE__ */ s.jsxs($r, { className: h, children: [
    /* @__PURE__ */ s.jsxs(
      Wa,
      {
        striped: l,
        tight: i,
        contentTopAligned: f,
        clickableRows: c,
        responsive: b,
        breakpoint: E,
        children: [
          /* @__PURE__ */ s.jsx("thead", { children: /* @__PURE__ */ s.jsx("tr", { children: e.map((m) => /* @__PURE__ */ s.jsxs(
            Ha,
            {
              sortable: m.sortable,
              align: m.align,
              width: m.width,
              onClick: () => m.sortable && P(m.key),
              children: [
                m.label,
                m.sortable && T === m.key && /* @__PURE__ */ s.jsx("span", { children: y === "asc" ? " ↑" : " ↓" })
              ]
            },
            m.key
          )) }) }),
          /* @__PURE__ */ s.jsx("tbody", { children: r.map((m, A) => /* @__PURE__ */ s.jsx(
            Ba,
            {
              clickable: c,
              noBorderBottom: g,
              onClick: () => c && (p == null ? void 0 : p(m, A)),
              children: e.map((L) => /* @__PURE__ */ s.jsx(
                Ga,
                {
                  align: L.align,
                  children: j(L, m)
                },
                L.key
              ))
            },
            A
          )) })
        ]
      }
    ),
    C()
  ] });
}, eo = (e, r, t) => {
  const n = `
    display: inline-block;
    height: ${t === "small" ? "20px" : "24px"};
    line-height: ${t === "small" ? "20px" : "24px"};
    max-width: 96%;
    padding: 0 ${t === "small" ? "10px" : "12px"};
    font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
    font-size: ${t === "small" ? "12px" : "14px"};
    font-weight: bold;
    text-align: center;
    white-space: nowrap;
    border: none;
    outline: none;
    cursor: ${e === "transparent" ? "default" : "pointer"};
    transition: all 0.2s ease;
  `, o = {
    round: "border-radius: 10px;",
    square: "border-radius: 3px;"
  }, l = {
    blue: `
      background-color: var(--blue, #1374c9);
      color: var(--white, #ffffff);
      font-weight: 500;
    `,
    green: `
      background-color: var(--green, #1f8446);
      color: var(--white, #ffffff);
    `,
    red: `
      background-color: var(--red, #d72919);
      color: var(--white, #ffffff);
    `,
    gray: `
      color: var(--black, #000000);
      background-color: var(--gray3, #e5e5e5);
    `,
    "dark-gray": `
      color: var(--white, #ffffff);
      background-color: var(--gray1, #595959);
    `,
    orange: `
      color: var(--white, #ffffff);
      background-color: var(--orange, #dc7418);
    `,
    "light-orange": `
      background-color: var(--lightOrange, #fbf1e7);
      color: var(--black, #000000);
    `,
    "gray-text": `
      color: var(--gray1, #595959);
      background-color: var(--gray3, #e5e5e5);
    `,
    transparent: `
      background-color: transparent;
      padding: 0;
      cursor: default;
    `,
    flat: `
      background-color: var(--white, #ffffff);
      border: 1px solid var(--gray1, #595959);
      color: var(--gray1, #595959);
      font-size: 14px;
      font-weight: normal;
    `
  };
  return `
    ${n}
    ${o[r || "square"]}
    ${l[e || "gray"]}
  `;
}, ro = d.span.withConfig({
  shouldForwardProp: (e) => !["variant", "shape", "size", "disabled", "removable", "count"].includes(e)
})`
  ${({ variant: e, shape: r, size: t }) => eo(e, r, t)}
  
  &:hover:not(.transparent) {
    opacity: 0.8;
  }
  
  /* Flat variant specific styles */
  ${(e) => e.variant === "flat" && `
    &.green {
      border-color: var(--green, #1f8446);
      color: var(--green, #1f8446);
    }
    
    &.red {
      border-color: var(--red, #d72919);
      color: var(--red, #d72919);
    }
  `}
`, to = d.span`
  display: flex;
  align-items: center;
  gap: 5px;
`, no = d.button.withConfig({
  shouldForwardProp: () => !0
})`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  margin-left: 5px;
  padding: 0;
  font-size: 12px;
  opacity: 0.7;
  
  &:hover {
    opacity: 1;
  }
`, ao = d.span`
  font-weight: bold;
  margin-left: 10px;
`, Nr = ({
  variant: e = "gray",
  shape: r = "square",
  size: t = "medium",
  removable: n = !1,
  children: o,
  className: l,
  onRemove: i,
  onClick: f,
  icon: c,
  count: g,
  ...h
}) => {
  const p = () => {
    f == null || f();
  }, x = (b) => {
    b.stopPropagation(), i == null || i();
  };
  return /* @__PURE__ */ s.jsx(
    ro,
    {
      variant: e,
      shape: r,
      size: t,
      className: `${l || ""} ${e === "transparent" ? "transparent" : ""}`,
      onClick: p,
      ...h,
      children: /* @__PURE__ */ s.jsxs(to, { children: [
        c && /* @__PURE__ */ s.jsx("span", { children: c }),
        o,
        g !== void 0 && /* @__PURE__ */ s.jsx(ao, { children: g }),
        n && /* @__PURE__ */ s.jsx(no, { onClick: x, type: "button", children: "×" })
      ] })
    }
  );
}, Fi = (e) => /* @__PURE__ */ s.jsx(Nr, { ...e, variant: "blue", shape: "round" }), Di = (e) => /* @__PURE__ */ s.jsx(Nr, { ...e, variant: "gray", shape: "square" }), Ii = ({ weatherType: e, children: r, ...t }) => {
  const n = {
    vfr: { variant: "green", shape: "round" },
    mvfr: { variant: "blue", shape: "round" },
    ifr: { variant: "red", shape: "round" },
    lifr: { variant: "gray", shape: "round" }
  };
  return /* @__PURE__ */ s.jsx(
    Nr,
    {
      ...t,
      ...n[e],
      children: r
    }
  );
}, oo = (e) => `
    
    background-color: var(--gray5, #fafafa);
    margin-bottom: 20px;
    font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
    border-radius: 2px;
    overflow: hidden;
  
    ${{
  default: `
      background-color: var(--gray5, #fafafa);
    `,
  white: `
      background-color: var(--white, #ffffff);
    `,
  primary: `
      background-color: var(--gray5, #fafafa);
      border-left: 4px solid var(--blue, #1374c9);
      border-top-left-radius: 4px;
    `,
  danger: `
      background-color: var(--gray5, #fafafa);
      border-left: 4px solid var(--red, #d72919);
      border-top-left-radius: 4px;
    `,
  warning: `
      background-color: var(--gray5, #fafafa);
      border-left: 4px solid var(--orange, #dc7418);
      border-top-left-radius: 4px;
    `
}[e || "default"]}
  `, io = d.div.withConfig({
  shouldForwardProp: (e) => !["variant", "noMargin", "onClick"].includes(e)
})`
  ${({ variant: e }) => oo(e)}
  ${({ noMargin: e }) => e && "margin-bottom: 0;"}
  ${({ onClick: e }) => e && "cursor: pointer;"}
  
  &:last-of-type {
    margin-bottom: 0;
  }
`, Kt = d.div.withConfig({
  shouldForwardProp: (e) => !["variant", "isEditing", "dynamicHeight"].includes(e)
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--gray4, #f5f5f5);
  color: var(--black, #000000);
  padding: 10px 20px;
  height: 35px;
  font-size: 18px;
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  border-bottom: 1px solid var(--borderGray, #d8d8d8);
  
  ${(e) => e.variant === "border" && `
    border-left: 4px solid var(--blue, #1374c9);
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  `}
  
  ${(e) => e.variant === "primary" && `
    border-left: 4px solid var(--blue, #1374c9);
    border-top-left-radius: 4px;
  `}
  
  ${(e) => e.variant === "danger" && `
    border-left: 4px solid var(--red, #d72919);
    border-top-left-radius: 4px;
  `}
  
  ${(e) => e.variant === "warning" && `
    border-left: 4px solid var(--orange, #dc7418);
    border-top-left-radius: 4px;
  `}
  
  ${(e) => e.variant === "white" && `
    background-color: var(--white, #ffffff);
    border-left: 4px solid var(--gray3, #e5e5e5);
    border-top-left-radius: 4px;
  `}
  
  ${(e) => e.isEditing && `
    border-top-left-radius: 3px;
    border-left: 4px solid var(--blue, #1374c9);
  `}
  
  ${(e) => e.dynamicHeight && `
    height: auto;
    min-height: 45px;
  `}
  
  a {
    text-decoration: none !important;
    
    &:hover {
      text-decoration: underline !important;
    }
  }
  
  @media (max-width: 599px) {
    font-size: 16px;
    
    &:not(.not-stacked) {
      align-items: start;
      display: flex;
      flex-direction: column;
      gap: 5px;
      height: auto;
    }
  }
`, Vr = d.div.withConfig({
  shouldForwardProp: (e) => !["noPadding", "gridLayout"].includes(e)
})`
  padding: ${(e) => e.noPadding ? "0" : "20px"};
  background-color: inherit;
  
  ${(e) => e.gridLayout && `
    display: grid;
    gap: 0 20px;
    grid-template-columns: auto auto;
    justify-content: start;
    
    .card-detail-value {
      font-weight: bold;
    }
  `}
  
  h3 {
    margin-bottom: 10px !important;
  }
  
  p {
    font-size: 14px;
    line-height: 16px;
  }
`, so = d.div.withConfig({
  shouldForwardProp: () => !0
})`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
`, zi = d.span`
  margin-left: 10px;
  cursor: pointer;
  color: var(--blue, #1374c9);
  font-size: 16px;
  position: relative;
`, Ni = ({
  variant: e = "default",
  header: r,
  children: t,
  className: n,
  noPadding: o = !1,
  noMargin: l = !1,
  isEditing: i = !1,
  dynamicHeight: f = !1,
  onClick: c,
  ...g
}) => /* @__PURE__ */ s.jsxs(
  io,
  {
    variant: e,
    className: n,
    noMargin: l,
    onClick: c,
    ...g,
    children: [
      r && /* @__PURE__ */ s.jsx(
        Kt,
        {
          variant: e,
          isEditing: !!i,
          dynamicHeight: !!f,
          children: r
        }
      ),
      /* @__PURE__ */ s.jsx(Vr, { noPadding: !!o, children: t })
    ]
  }
), Vi = ({
  children: e,
  actions: r,
  className: t,
  variant: n = "default",
  isEditing: o = !1,
  dynamicHeight: l = !1
}) => /* @__PURE__ */ s.jsxs(
  Kt,
  {
    className: t,
    variant: n,
    isEditing: o,
    dynamicHeight: l,
    children: [
      e,
      r && /* @__PURE__ */ s.jsx(so, { children: r })
    ]
  }
), Li = ({
  children: e,
  className: r,
  noPadding: t = !1,
  gridLayout: n = !1
}) => /* @__PURE__ */ s.jsx(
  Vr,
  {
    className: r,
    noPadding: t,
    gridLayout: n,
    children: e
  }
), Mi = ({
  children: e,
  className: r,
  gridLayout: t = !1
}) => /* @__PURE__ */ s.jsx(Vr, { className: r, style: t ? { display: "grid", gridTemplateColumns: "auto 1fr", gap: "8px", alignItems: "center" } : void 0, children: e }), Wi = ({
  children: e,
  className: r
}) => /* @__PURE__ */ s.jsx("div", { className: r, style: { marginBottom: "3px" }, children: e }), lo = d.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  
  ${(e) => e.variant === "checkbox-list" && `
    padding-top: 0;
  `}
`, co = d.div`
  border-bottom: 1px solid var(--gray3, #e5e5e5);
  background-color: var(--lightBlue, #e7f1fa);
  padding: 8px 20px 8px 20px;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: var(--black, #000000);
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
`, fo = d.li`
  height: auto;
  box-sizing: border-box;
  border-bottom: 1px solid var(--borderGray, #d8d8d8);
  padding: 0;
  background-color: var(--white, #ffffff);
  transition: background-color 0.2s ease;
  
  &:first-of-type {
    border-top: 1px solid var(--borderGray, #d8d8d8);
  }
  
  ${(e) => e.clickable && `
    cursor: pointer;
    
    &:hover {
      background: var(--gray4, #f5f5f5);
    }
  `}
  
  ${(e) => e.active && `
    background: var(--blue, #1374c9);
    color: var(--white, #ffffff);
    
    &.green {
      background: var(--green, #1f8446);
    }
  `}
  
  ${(e) => e.leftBorder && `
    .list-item-content {
      border-left: 3px solid var(--${e.leftBorder}, #1f8446);
    }
  `}
  
  ${(e) => e.variant === "action-list" && `
    .list-item-content {
      padding: 0 0 0 20px;
      
      .list-item-wrapper {
        padding: 15px 10px;
        
        &.list-item-with-button {
          padding: 0px 0px 0px 10px;
        }
        
        &.list-item-with-toggle {
          padding: 7px 10px;
        }
      }
    }
  `}
`, uo = d.div`
  padding: 10px 10px 10px 20px;
  display: flex;
  align-items: center;
  min-height: 40px;
  
  ${(e) => e.variant === "action-list" && `
    padding: 0 0 0 20px;
  `}
`, po = d.div`
  display: grid;
  grid-auto-flow: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  line-height: 16px;
  height: 100%;
  
  > :first-child {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  ${(e) => e.variant === "checkbox-list" && `
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
  `}
`, ho = d.div`
  display: flex;
  line-height: 31px;
  align-self: flex-start;
  align-items: center;
  gap: 10px;
  
  .display-name-container {
    padding-left: 0px;
  }
  
  .display-name {
    font-weight: bold;
    text-wrap: wrap;
  }
  
  .default-label {
    font-weight: bold;
    margin-top: 3px;
  }
`, go = d.div`
  font-size: 14px;
  line-height: 16px;
  color: inherit;
  
  ${(e) => e.variant === "button-list" && `
    font-weight: bold;
    text-wrap: wrap;
  `}
`, mo = d.div`
  font-size: 12px;
  line-height: 14px;
  color: var(--gray1, #595959);
  margin-top: 2px;
`, vo = d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
`, xo = d.div`
  padding: 0 10px;
  cursor: move;
  color: var(--gray2, #919191);
  
  &:hover {
    color: var(--black, #000000);
  }
`, bo = d.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  
  input[type="checkbox"] {
    margin: 0 10px 0 0;
  }
`, Lr = ({
  items: e,
  header: r,
  variant: t = "default",
  className: n,
  onItemClick: o
}) => {
  const l = (i, f) => {
    i.onClick ? i.onClick() : o && o(i, f);
  };
  return /* @__PURE__ */ s.jsxs(lo, { variant: t, className: n, children: [
    r && /* @__PURE__ */ s.jsx(co, { children: r }),
    e.map((i, f) => /* @__PURE__ */ s.jsx(
      fo,
      {
        active: i.active,
        leftBorder: i.leftBorder,
        clickable: !!(i.onClick || o),
        variant: t,
        onClick: () => l(i, f),
        children: /* @__PURE__ */ s.jsx(uo, { variant: t, children: /* @__PURE__ */ s.jsxs(po, { variant: t, children: [
          /* @__PURE__ */ s.jsxs(ho, { children: [
            i.draggable && /* @__PURE__ */ s.jsx(xo, { children: "⋮⋮" }),
            t === "checkbox-list" && /* @__PURE__ */ s.jsx(bo, { children: /* @__PURE__ */ s.jsx("input", { type: "checkbox" }) }),
            i.icon && /* @__PURE__ */ s.jsx("span", { children: i.icon }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx(go, { variant: t, children: i.text }),
              i.secondaryText && /* @__PURE__ */ s.jsx(mo, { children: i.secondaryText })
            ] })
          ] }),
          i.actions && /* @__PURE__ */ s.jsx(vo, { onClick: (c) => c.stopPropagation(), children: i.actions })
        ] }) })
      },
      i.id
    ))
  ] });
}, Hi = (e) => /* @__PURE__ */ s.jsx(Lr, { ...e, variant: "button-list" }), Bi = (e) => /* @__PURE__ */ s.jsx(Lr, { ...e, variant: "checkbox-list" }), Gi = (e) => /* @__PURE__ */ s.jsx(Lr, { ...e, variant: "action-list" }), yo = d.div`
  display: flex;
  flex-direction: ${(e) => e.labelPosition === "left" ? "row" : "column"};
  align-items: ${(e) => e.labelPosition === "left" ? "center" : "stretch"};
  gap: ${(e) => e.labelPosition === "left" ? "30px" : "4px"};
  width: ${(e) => e.fullWidth ? "100%" : "auto"};
  margin-top: ${(e) => e.noMarginTop ? "0" : "10px"};
  margin-bottom: ${(e) => e.noMarginBottom ? "0" : "10px"};
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  
  @media (max-width: 599px) {
    flex-direction: column;
    gap: 4px;
    align-items: stretch;
  }
`, wo = d.label`
  font-size: ${(e) => e.size === "small" ? "12px" : "14px"};
  line-height: ${(e) => e.size === "small" ? "14px" : "16px"};
  color: ${(e) => e.disabled ? "var(--gray2, #919191)" : e.size === "small" ? "var(--gray1, #595959)" : "var(--black, #000000)"};
  font-weight: 500;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  
  ${(e) => e.position === "left" && `
    justify-self: end;
    line-height: 31px;
    height: 31px;
    min-width: 175px;
  `}
  
  ${(e) => e.error && `
    color: var(--red, #d72919);
  `}
  
  .required-asterisk {
    color: inherit;
    margin-right: 2px;
  }
  
  .icon {
    font-size: 14px;
    color: var(--gray2, #919191);
  }
`, ko = d.div.withConfig({
  shouldForwardProp: (e) => !["fullWidth", "hasError", "disabled", "grayWhenDisabled", "hasPrefix", "hasSuffix"].includes(e)
})`
  position: relative;
  width: ${(e) => e.fullWidth ? "100%" : "auto"};
  
  .input-field {
    width: 100%;
    height: 31px;
    padding: 0 8px;
    border: 1px solid var(--gray2, #919191);
    border-radius: 2px;
    background-color: var(--white, #ffffff);
    font-size: 14px;
    line-height: 16px;
    color: var(--black, #000000);
    font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
    box-sizing: border-box;
    transition: all 0.2s ease;
    
    ${(e) => e.hasPrefix && `
      padding-left: 26px;
    `}
    
    ${(e) => e.hasSuffix && `
      padding-right: 26px;
    `}
    
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px var(--lightBlue2, #cce4f7);
      border-color: var(--blue, #1374c9);
    }
    
    &:disabled {
      color: var(--gray2, #919191);
      background-color: ${(e) => e.grayWhenDisabled ? "var(--gray4, #f5f5f5)" : "var(--white, #ffffff)"};
      cursor: not-allowed;
    }
    
    &::placeholder {
      color: var(--gray2, #919191);
    }
    
    ${(e) => e.hasError && `
      border-color: var(--red, #d72919) !important;
    `}
  }
`, kt = d.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: var(--gray1, #595959);
  font-size: 14px;
  line-height: 16px;
  pointer-events: none;
  z-index: 1;
  
  ${(e) => e.position === "prefix" && `
    left: 10px;
  `}
  
  ${(e) => e.position === "suffix" && `
    right: 10px;
  `}
`, $t = d.div`
  font-size: 12px;
  line-height: 14px;
  color: var(--gray1, #595959);
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  
  ${(e) => e.position === "inline" && `
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    font-size: 12px;
    line-height: 14px;
  `}
  
  ${(e) => e.position === "bottom" && `
    display: flex;
    justify-content: flex-end;
    margin-top: 0px;
  `}
`, $o = d.div`
  font-size: 12px;
  line-height: 14px;
  color: var(--gray1, #595959);
  margin-top: 0px;
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
`, So = d.div`
  font-size: 12px;
  line-height: 14px;
  color: var(--red, #d72919);
  margin-top: 0px;
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
`, Yi = ({
  value: e = "",
  onChange: r,
  onBlur: t,
  onFocus: n,
  onKeyUp: o,
  label: l,
  placeholder: i,
  hint: f,
  errorMessage: c,
  required: g = !1,
  disabled: h = !1,
  type: p = "text",
  inputMode: x,
  maxLength: b,
  min: S,
  max: E,
  labelSize: T = "regular",
  labelPosition: k = "top",
  fullWidth: y = !0,
  noMarginTop: w = !1,
  noMarginBottom: P = !1,
  icon: j,
  prefix: C,
  suffix: m,
  currencySymbol: A,
  showCounter: L = !1,
  counterPosition: ge = "bottom",
  hasError: F = !1,
  grayWhenDisabled: me = !1,
  className: H,
  id: X,
  name: ae,
  autoComplete: ve
}) => {
  const [ue, pe] = ne.useState(e);
  ne.useEffect(() => {
    pe(e);
  }, [e]);
  const J = (W) => {
    const te = W.target.value;
    pe(te), r == null || r(te);
  }, Z = (W) => {
    n == null || n(W);
  }, oe = (W) => {
    t == null || t(W);
  }, q = (W) => {
    o == null || o(W);
  }, _ = ue || "", G = _.length, I = F || c && c.length > 0;
  return /* @__PURE__ */ s.jsxs(
    yo,
    {
      fullWidth: y,
      labelPosition: k,
      noMarginTop: w,
      noMarginBottom: P,
      className: H,
      children: [
        l && /* @__PURE__ */ s.jsxs(
          wo,
          {
            htmlFor: X,
            size: T,
            required: !!g,
            disabled: !!h,
            error: !!I,
            position: k,
            children: [
              g && /* @__PURE__ */ s.jsx("span", { className: "required-asterisk", children: "*" }),
              j && /* @__PURE__ */ s.jsx("span", { className: "icon", children: j }),
              l
            ]
          }
        ),
        /* @__PURE__ */ s.jsxs(
          ko,
          {
            fullWidth: !!y,
            hasError: !!I,
            disabled: !!h,
            grayWhenDisabled: !!me,
            hasPrefix: !!(C || A),
            hasSuffix: !!(m || L && ge === "inline"),
            children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  id: X,
                  name: ae,
                  type: p,
                  inputMode: x,
                  value: _,
                  onChange: J,
                  onFocus: Z,
                  onBlur: oe,
                  onKeyUp: q,
                  placeholder: i,
                  disabled: h,
                  required: g,
                  maxLength: b,
                  min: S,
                  max: E,
                  autoComplete: ve,
                  className: "input-field"
                }
              ),
              (C || A) && /* @__PURE__ */ s.jsx(kt, { position: "prefix", children: A || C }),
              m && /* @__PURE__ */ s.jsx(kt, { position: "suffix", children: m }),
              L && ge === "inline" && b && /* @__PURE__ */ s.jsxs($t, { position: "inline", children: [
                G,
                "/",
                b
              ] })
            ]
          }
        ),
        L && ge === "bottom" && b && /* @__PURE__ */ s.jsxs($t, { position: "bottom", children: [
          G,
          "/",
          b
        ] }),
        f && !I && /* @__PURE__ */ s.jsx($o, { children: f }),
        I && c && /* @__PURE__ */ s.jsx(So, { children: c })
      ]
    }
  );
}, Co = d.div.withConfig({
  shouldForwardProp: (e) => !["fullWidth", "labelPosition", "displayInline", "noMarginTop", "noMarginBottom"].includes(e)
})`
  display: ${(e) => e.displayInline ? "inline-block" : "flex"};
  flex-direction: ${(e) => e.labelPosition === "left" ? "row" : "column"};
  align-items: ${(e) => e.labelPosition === "left" ? "center" : "stretch"};
  gap: ${(e) => e.labelPosition === "left" ? "30px" : "4px"};
  width: ${(e) => e.fullWidth ? "100%" : "auto"};
  margin-top: ${(e) => e.noMarginTop ? "0" : "10px"};
  margin-bottom: ${(e) => e.noMarginBottom ? "0" : "10px"};
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  
  @media (max-width: 599px) {
    flex-direction: column;
    gap: 4px;
    align-items: stretch;
  }
`, jo = d.label.withConfig({
  shouldForwardProp: (e) => !["size", "required", "disabled", "error", "position"].includes(e)
})`
  font-size: ${(e) => e.size === "small" ? "12px" : "14px"};
  line-height: ${(e) => e.size === "small" ? "14px" : "16px"};
  color: ${(e) => e.disabled ? "var(--gray2, #919191)" : e.size === "small" ? "var(--gray1, #595959)" : "var(--black, #000000)"};
  font-weight: 500;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  
  ${(e) => e.position === "left" && `
    justify-self: end;
    line-height: 31px;
    height: 31px;
    min-width: 175px;
  `}
  
  ${(e) => e.error && `
    color: var(--red, #d72919);
  `}
  
  .required-asterisk {
    color: inherit;
    margin-right: 2px;
  }
`, Eo = d.div.withConfig({
  shouldForwardProp: (e) => !["fullWidth", "hasError", "disabled", "grayBackground", "grayWhenDisabled", "removeMinWidth", "preventFullWidthOnMobile"].includes(e)
})`
  position: relative;
  width: ${(e) => e.fullWidth ? "100%" : "auto"};
  min-width: ${(e) => e.removeMinWidth ? "auto" : "200px"};
  
  @media (max-width: 599px) {
    width: ${(e) => e.preventFullWidthOnMobile ? "auto" : "100%"};
  }
`, Ro = d.div.withConfig({
  shouldForwardProp: (e) => !["hasError", "disabled", "grayBackground", "grayWhenDisabled", "isOpen"].includes(e)
})`
  position: relative;
  width: 100%;
  height: 31px;
  border: 1px solid var(--gray2, #8c8c8c);
  border-radius: 2px;
  background-color: var(--white, #ffffff);
  cursor: pointer;
  transition: border-color 0.2s ease;
  box-sizing: border-box;
  
  ${(e) => e.isOpen && `
    border-color: var(--blue, #1376CD) !important;
    box-shadow: 0 0 0 2px rgba(19, 118, 205, 0.2) !important;
  `}
  
  &:focus-within {
    border-color: var(--blue, #1376CD) !important;
    box-shadow: 0 0 0 2px rgba(19, 118, 205, 0.2) !important;
  }
  
  ${(e) => e.disabled && `
    background-color: ${e.grayWhenDisabled ? "var(--gray3, #d9d9d9)" : "var(--white, #ffffff)"};
    color: var(--gray2, #8c8c8c);
    cursor: not-allowed;
  `}
  
  ${(e) => e.grayBackground && `
    background-color: var(--gray4, #f0f0f0);
  `}
  
  ${(e) => e.hasError && `
    border-color: var(--red, #d72919) !important;
  `}
  
  &:hover:not(:disabled) {
    border-color: var(--blue, #1376CD) !important;
    box-shadow: 0 0 0 2px rgba(19, 118, 205, 0.2) !important;
  }
  
  &:active:not(:disabled) {
    border-color: var(--blue, #1376CD) !important;
    box-shadow: 0 0 0 2px rgba(19, 118, 205, 0.2) !important;
  }
`, Po = d.div.withConfig({
  shouldForwardProp: (e) => !["disabled", "grayBackground", "grayWhenDisabled"].includes(e)
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  height: 100%;
  font-size: 14px;
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  color: var(--black, #000000);
  width: 100%;
  box-sizing: border-box;
  
  ${(e) => e.disabled && `
    color: var(--gray2, #8c8c8c);
  `}
`, Ao = d.span.withConfig({
  shouldForwardProp: (e) => !["placeholder"].includes(e)
})`
  flex: 1;
  color: ${(e) => e.placeholder ? "var(--gray2, #8c8c8c)" : "inherit"};
`, To = d.div.withConfig({
  shouldForwardProp: (e) => !["isOpen", "disabled"].includes(e)
})`
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid var(--gray2, #8c8c8c);
  transition: transform 0.2s ease;
  margin-left: 8px;
  
  ${(e) => e.isOpen && `
    transform: rotate(180deg);
  `}
  
  ${(e) => e.disabled && `
    border-top-color: var(--gray2, #8c8c8c);
  `}
`, _o = d.div.withConfig({
  shouldForwardProp: (e) => !["isOpen"].includes(e)
})`
  position: absolute;
  top: calc(100% + 1px);
  left: 0;
  right: 0;
  background-color: var(--white, #ffffff);
  border: 1px solid var(--gray2, #8c8c8c);
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
  display: ${(e) => e.isOpen ? "block" : "none"};
`, Mr = d.div.withConfig({
  shouldForwardProp: (e) => !["selected", "disabled", "isGroupHeader"].includes(e)
})`
  padding: 8px 12px;
  font-size: 14px;
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  cursor: ${(e) => e.disabled || e.isGroupHeader ? "default" : "pointer"};
  background-color: ${(e) => e.selected ? "var(--blue, #1976d2)" : "transparent"};
  color: ${(e) => e.selected ? "var(--white, #ffffff)" : e.disabled ? "var(--gray2, #8c8c8c)" : e.isGroupHeader ? "var(--gray1, #595959)" : "var(--black, #000000)"};
  font-weight: ${(e) => e.isGroupHeader ? "500" : "normal"};
  
  &:hover {
    background-color: ${(e) => e.disabled || e.isGroupHeader ? "transparent" : e.selected ? "var(--blue, #1976d2)" : "var(--gray3, #d9d9d9)"};
  }
`, Oo = d(Mr)`
  font-weight: bold;
  color: var(--gray1, #595959);
  background-color: transparent;
  border-bottom: none;
  margin: 0;
  padding: 8px 12px 4px 12px;
  
  &:hover {
    background-color: transparent;
  }
`, Fo = d(Mr)`
  padding-left: 24px;
`, Do = d.div`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  border: 2px solid var(--gray3, #d9d9d9);
  border-top: 2px solid var(--blue, #1976d2);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: translateY(-50%) rotate(0deg); }
    100% { transform: translateY(-50%) rotate(360deg); }
  }
`, Io = d.div`
  font-size: 12px;
  line-height: 14px;
  color: var(--gray1, #595959);
  margin-top: 0px;
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
`, zo = d.div`
  font-size: 12px;
  line-height: 14px;
  color: var(--red, #d72919);
  margin-top: 0px;
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
`, Ui = ({
  value: e,
  onChange: r,
  onBlur: t,
  onFocus: n,
  label: o,
  placeholder: l,
  hint: i,
  errorMessage: f,
  required: c = !1,
  disabled: g = !1,
  options: h = [],
  multiple: p = !1,
  groups: x = [],
  labelSize: b = "regular",
  labelPosition: S = "top",
  fullWidth: E = !0,
  grayBackground: T = !1,
  grayWhenDisabled: k = !1,
  displayInline: y = !1,
  removeMinWidth: w = !1,
  preventFullWidthOnMobile: P = !1,
  loading: j = !1,
  hasError: C = !1,
  errorStateFromParent: m = !1,
  className: A,
  id: L,
  cypressSelector: ge = "fsp-select"
}) => {
  const [F, me] = Ge(e), [H, X] = Ge(!1), ae = Ct(null);
  ir(() => {
    me(e);
  }, [e]);
  const ve = (_) => {
    me(_), r == null || r(_), X(!1);
  }, ue = (_) => {
    var G;
    (G = ae.current) != null && G.contains(_.relatedTarget) || (X(!1), t == null || t(_));
  }, pe = (_) => {
    n == null || n(_);
  }, J = (_) => {
    _.key === "Enter" || _.key === " " ? (_.preventDefault(), !g && !j && X(!H)) : _.key === "Escape" && X(!1);
  }, Z = C || m || f && f.length > 0, oe = () => {
    if (p && Array.isArray(F)) {
      if (F.length === 0)
        return l || "Select options";
      if (F.length === 1) {
        const I = [...h, ...x.flatMap((W) => W.options)].find((W) => W.value === F[0]);
        return (I == null ? void 0 : I.label) || F[0];
      }
      return `${F.length} selected`;
    }
    if (F == null || F === "")
      return l || "Select an option";
    const G = [...h, ...x.flatMap((I) => I.options)].find((I) => I.value === F);
    return (G == null ? void 0 : G.label) || F;
  }, q = () => x.length > 0 ? x.map((_, G) => /* @__PURE__ */ s.jsxs(ne.Fragment, { children: [
    /* @__PURE__ */ s.jsx(Oo, { isGroupHeader: !0, children: _.name }),
    _.options.map((I, W) => /* @__PURE__ */ s.jsx(
      Fo,
      {
        selected: p ? F == null ? void 0 : F.includes(I.value) : F === I.value,
        disabled: I.disabled,
        onClick: () => !I.disabled && ve(
          p ? (F || []).includes(I.value) ? (F || []).filter((te) => te !== I.value) : [...F || [], I.value] : I.value
        ),
        children: I.label
      },
      `${G}-${W}`
    ))
  ] }, G)) : h.map((_, G) => /* @__PURE__ */ s.jsx(
    Mr,
    {
      selected: p ? F == null ? void 0 : F.includes(_.value) : F === _.value,
      disabled: _.disabled,
      onClick: () => !_.disabled && ve(
        p ? (F || []).includes(_.value) ? (F || []).filter((I) => I !== _.value) : [...F || [], _.value] : _.value
      ),
      children: _.label
    },
    G
  ));
  return /* @__PURE__ */ s.jsxs(
    Co,
    {
      fullWidth: E,
      labelPosition: S,
      displayInline: y,
      className: A,
      children: [
        o && /* @__PURE__ */ s.jsxs(
          jo,
          {
            htmlFor: L,
            size: b,
            required: !!c,
            disabled: !!g,
            error: !!Z,
            position: S,
            children: [
              c && /* @__PURE__ */ s.jsx("span", { className: "required-asterisk", children: "*" }),
              o
            ]
          }
        ),
        /* @__PURE__ */ s.jsxs(
          Eo,
          {
            fullWidth: !!E,
            hasError: !!Z,
            disabled: !!g,
            grayBackground: !!T,
            grayWhenDisabled: !!k,
            removeMinWidth: !!w,
            preventFullWidthOnMobile: !!P,
            children: [
              /* @__PURE__ */ s.jsxs(
                Ro,
                {
                  ref: ae,
                  hasError: !!Z,
                  disabled: !!g,
                  grayBackground: !!T,
                  grayWhenDisabled: !!k,
                  isOpen: !!H,
                  tabIndex: g || j ? -1 : 0,
                  onFocus: pe,
                  onBlur: ue,
                  onKeyDown: J,
                  onClick: () => !g && !j && X(!H),
                  "data-cy": ge,
                  children: [
                    /* @__PURE__ */ s.jsxs(
                      Po,
                      {
                        disabled: g,
                        grayBackground: T,
                        grayWhenDisabled: k,
                        children: [
                          /* @__PURE__ */ s.jsx(Ao, { placeholder: !F || Array.isArray(F) && F.length === 0, children: oe() }),
                          /* @__PURE__ */ s.jsx(To, { isOpen: H, disabled: g })
                        ]
                      }
                    ),
                    /* @__PURE__ */ s.jsx(_o, { isOpen: H, children: q() })
                  ]
                }
              ),
              j && /* @__PURE__ */ s.jsx(Do, {})
            ]
          }
        ),
        i && !Z && /* @__PURE__ */ s.jsx(Io, { children: i }),
        Z && f && /* @__PURE__ */ s.jsx(zo, { children: f })
      ]
    }
  );
}, No = d.div`
  display: inline-block;
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  
  ${(e) => e.bold && `
    label {
      font-weight: bold;
    }
  `}
  
  ${(e) => e.inactive && `
    label {
      color: var(--gray2, #8c8c8c);
    }
  `}
  
  ${(e) => e.whiteSpaceWrap && `
    .checkbox-layout {
      white-space: inherit;
    }
  `}
`, Vo = d.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, Lo = d.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`, Mo = d.div`
  position: relative;
  width: 16px;
  height: 16px;
  min-width: 16px;
  min-height: 16px;
  border: 1px solid var(--gray2, #8c8c8c);
  border-radius: 2px;
  background-color: var(--white, #ffffff);
  cursor: pointer;
  transition: all 0.2s ease;
  
  ${(e) => e.checked && `
    background-color: var(--blue, #1976d2);
    border-color: var(--blue, #1976d2);
    
    &::after {
      content: '';
      position: absolute;
      left: 4px;
      top: 1px;
      width: 4px;
      height: 8px;
      border: solid var(--white, #ffffff);
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  `}
  
  ${(e) => e.disabled && `
    opacity: 0.5;
    cursor: not-allowed;
    
    ${e.checked && `
      background-color: var(--blue, #1976d2);
      border-color: var(--blue, #1976d2);
    `}
  `}
  
  ${(e) => e.hasError && `
    border-color: var(--red, #d72919);
  `}
  
  ${(e) => e.inverted && `
    background-color: var(--white, #ffffff);
    
    ${e.checked && `
      &::after {
        border-color: var(--blue, #1976d2);
      }
    `}
  `}
  
  &:hover:not(:disabled) {
    border-color: var(--blue, #1976d2);
  }
`, Wo = d.label`
  font-size: ${(e) => e.size === "small" ? "12px" : "14px"};
  line-height: ${(e) => e.size === "small" ? "14px" : "16px"};
  color: ${(e) => e.disabled ? "var(--gray2, #919191)" : e.inactive ? "var(--gray2, #8c8c8c)" : e.size === "small" ? "var(--gray1, #595959)" : "var(--black, #000000)"};
  font-weight: ${(e) => e.bold ? "bold" : "500"};
  margin-bottom: 0;
  cursor: ${(e) => e.disabled ? "not-allowed" : "pointer"};
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  user-select: none;
  
  ${(e) => e.hasError && `
    color: var(--red, #d72919);
  `}
`, Ho = d.span`
  color: inherit;
  margin-right: 2px;
`, qi = ({
  checked: e = !1,
  onChange: r,
  onBlur: t,
  onFocus: n,
  label: o,
  required: l = !1,
  disabled: i = !1,
  labelSize: f = "regular",
  bold: c = !1,
  inactive: g = !1,
  whiteSpaceWrap: h = !1,
  inverted: p = !1,
  hasError: x = !1,
  className: b,
  id: S,
  name: E,
  value: T,
  cypressSelector: k = "fsp-checkbox"
}) => {
  const [y, w] = Ge(e);
  ir(() => {
    w(e);
  }, [e]);
  const P = (A) => {
    const L = A.target.checked;
    w(L), r == null || r(L);
  }, j = () => {
    if (!i) {
      const A = !y;
      w(A), r == null || r(A);
    }
  }, C = (A) => {
    t == null || t(A);
  }, m = (A) => {
    n == null || n(A);
  };
  return /* @__PURE__ */ s.jsx(
    No,
    {
      className: b,
      disabled: i,
      bold: c,
      inactive: g,
      whiteSpaceWrap: h,
      inverted: p,
      children: /* @__PURE__ */ s.jsxs(Vo, { children: [
        /* @__PURE__ */ s.jsx(
          Lo,
          {
            type: "checkbox",
            id: S,
            name: E,
            value: T,
            checked: y,
            onChange: P,
            onBlur: C,
            onFocus: m,
            disabled: i,
            "data-cy": k
          }
        ),
        /* @__PURE__ */ s.jsx(
          Mo,
          {
            checked: y,
            disabled: i,
            hasError: x,
            inverted: p,
            onClick: j
          }
        ),
        o && /* @__PURE__ */ s.jsxs(
          Wo,
          {
            htmlFor: S,
            size: f,
            disabled: i,
            hasError: x,
            bold: c,
            inactive: g,
            className: "checkbox-layout",
            onClick: j,
            children: [
              l && /* @__PURE__ */ s.jsx(Ho, { children: "*" }),
              o
            ]
          }
        )
      ] })
    }
  );
}, Bo = d.div`
  display: grid;
  gap: 5px;
  grid-template-columns: ${(e) => e.direction === "horizontal" ? "repeat(auto-fit, minmax(200px, 1fr))" : "1fr"};
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  
  ${(e) => e.hasError && `
    .radio-button .radio-input {
      border: 1px solid var(--red, #d72919) !important;
    }
  `}
`, Go = d.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`, Yo = d.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`, Uo = d.div`
  position: relative;
  width: 17px;
  height: 17px;
  min-width: 17px;
  min-height: 17px;
  border: 1px solid var(--gray2, #8c8c8c);
  border-radius: 50%;
  background-color: var(--white, #ffffff);
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 2px;
  
  ${(e) => e.solid && `
    background-color: var(--white, #ffffff);
  `}
  
  ${(e) => e.checked && `
    border-color: var(--blue, #1976d2);
    
    &::before {
      content: '';
      position: absolute;
      left: -2px;
      top: -2px;
      right: -2px;
      bottom: -2px;
      border: 2px solid var(--blue, #1976d2);
      border-radius: 50%;
      pointer-events: none;
    }
    
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: var(--blue, #1976d2);
      transform: translate(-50%, -50%);
    }
  `}
  
  ${(e) => e.disabled && `
    opacity: 0.5;
    cursor: not-allowed;
  `}
  
  ${(e) => e.inverted && `
    background-color: var(--white, #ffffff);
    
    ${e.checked && `
      border-color: var(--white, #ffffff);
      
      &::before {
        content: '';
        position: absolute;
        left: -2px;
        top: -2px;
        right: -2px;
        bottom: -2px;
        border: 2px solid var(--white, #ffffff);
        border-radius: 50%;
        pointer-events: none;
      }
      
      &::after {
        background-color: var(--blue, #1976d2);
      }
    `}
  `}
  
  &:hover:not(:disabled) {
    border-color: var(--blue, #1976d2);
  }
`, Jt = d.label`
  font-size: ${(e) => e.size === "small" ? "12px" : "14px"};
  line-height: ${(e) => e.size === "small" ? "14px" : "16px"};
  color: ${(e) => e.disabled ? "var(--gray2, #919191)" : e.inverted ? "var(--white, #ffffff)" : e.size === "small" ? "var(--gray1, #595959)" : "var(--black, #000000)"};
  font-weight: 500;
  margin-bottom: 0;
  cursor: ${(e) => e.disabled ? "not-allowed" : "pointer"};
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  user-select: none;
  padding-top: 2px;
  
  ${(e) => e.hasError && `
    color: var(--red, #d72919);
  `}
`, Zt = d.span`
  color: inherit;
  margin-right: 2px;
`, qo = ({
  value: e,
  selectedValue: r,
  onChange: t,
  onBlur: n,
  onFocus: o,
  label: l,
  required: i = !1,
  disabled: f = !1,
  labelSize: c = "regular",
  solid: g = !1,
  inverted: h = !1,
  hasError: p = !1,
  className: x,
  id: b,
  name: S,
  cypressSelector: E = "fsp-radio"
}) => {
  const T = r === e, k = (j) => {
    j.target.checked && (t == null || t(e || ""));
  }, y = () => {
    !f && !T && (t == null || t(e || ""));
  }, w = (j) => {
    n == null || n(j);
  }, P = (j) => {
    o == null || o(j);
  };
  return /* @__PURE__ */ s.jsxs(Go, { className: x, children: [
    /* @__PURE__ */ s.jsx(
      Yo,
      {
        type: "radio",
        id: b,
        name: S,
        value: e,
        checked: T,
        onChange: k,
        onBlur: w,
        onFocus: P,
        disabled: f,
        "data-cy": E
      }
    ),
    /* @__PURE__ */ s.jsx(
      Uo,
      {
        checked: T,
        disabled: f,
        solid: g,
        inverted: h,
        onClick: y,
        className: "radio-input"
      }
    ),
    l && /* @__PURE__ */ s.jsxs(
      Jt,
      {
        htmlFor: b,
        size: c,
        disabled: f,
        hasError: p,
        inverted: h,
        onClick: y,
        children: [
          i && /* @__PURE__ */ s.jsx(Zt, { children: "*" }),
          l
        ]
      }
    )
  ] });
}, Xi = ({
  value: e,
  onChange: r,
  onBlur: t,
  onFocus: n,
  options: o = [],
  label: l,
  required: i = !1,
  disabled: f = !1,
  labelSize: c = "regular",
  solid: g = !1,
  inverted: h = !1,
  direction: p = "vertical",
  hasError: x = !1,
  className: b,
  name: S,
  cypressSelector: E = "fsp-radio-group"
}) => {
  const [T, k] = Ge(e);
  ir(() => {
    k(e);
  }, [e]);
  const y = (w) => {
    k(w), r == null || r(w);
  };
  return /* @__PURE__ */ s.jsxs(
    Bo,
    {
      className: b,
      disabled: f,
      hasError: x,
      direction: p,
      children: [
        l && /* @__PURE__ */ s.jsx("div", { style: { gridColumn: "1 / -1", marginBottom: "8px" }, children: /* @__PURE__ */ s.jsxs(
          Jt,
          {
            size: c,
            disabled: f,
            hasError: x,
            inverted: h,
            children: [
              i && /* @__PURE__ */ s.jsx(Zt, { children: "*" }),
              l
            ]
          }
        ) }),
        o.map((w, P) => /* @__PURE__ */ s.jsx(
          qo,
          {
            value: w.value,
            selectedValue: T,
            onChange: y,
            onBlur: t,
            onFocus: n,
            label: w.label,
            disabled: f || w.disabled,
            labelSize: c,
            solid: g,
            inverted: h,
            hasError: x,
            name: S,
            cypressSelector: w.cypressSelector || `${E}-option-${P}`
          },
          w.value
        ))
      ]
    }
  );
}, Xo = [
  {
    name: "Grayscale",
    colors: [
      { name: "Black", cssVar: "--black", hexValue: "#000000", description: "Primary text", usage: "Headings, body text" },
      { name: "Gray 1", cssVar: "--gray1", hexValue: "#595959", description: "Secondary text", usage: "Labels, secondary content" },
      { name: "Gray 2", cssVar: "--gray2", hexValue: "#8c8c8c", description: "Disabled text", usage: "Disabled states, placeholders" },
      { name: "Gray 3", cssVar: "--gray3", hexValue: "#d9d9d9", description: "Borders", usage: "Input borders, dividers" },
      { name: "Gray 4", cssVar: "--gray4", hexValue: "#f0f0f0", description: "Background", usage: "Card backgrounds, sections" },
      { name: "Gray 5", cssVar: "--gray5", hexValue: "#fafafa", description: "Page background", usage: "Main page background" },
      { name: "White", cssVar: "--white", hexValue: "#ffffff", description: "Pure white", usage: "Card content, modals" },
      { name: "Border Gray", cssVar: "--borderGray", hexValue: "#e0e0e0", description: "Standard border color", usage: "Input borders, dividers" }
    ]
  },
  {
    name: "Blues",
    colors: [
      { name: "Default Blue", cssVar: "--blue", hexValue: "#1376CD", description: "Primary brand color", usage: "Buttons, links, active states" },
      { name: "Dark Blue", cssVar: "--blue2", hexValue: "#0C4C85", description: "Darker blue variant", usage: "Hover states, active elements" },
      { name: "Light Blue", cssVar: "--lightBlue", hexValue: "#E7F1FA", description: "Light blue background", usage: "List headers, highlights" }
    ]
  },
  {
    name: "Greens",
    colors: [
      { name: "Default Green", cssVar: "--green", hexValue: "#1F8446", description: "Success states", usage: "Success messages, completed states" },
      { name: "Dark Green", cssVar: "--darkGreen", hexValue: "#0F4122", description: "Dark green variant", usage: "Success buttons, completed states" },
      { name: "Light Green", cssVar: "--lightGreen", hexValue: "#E8F2EC", description: "Light green background", usage: "Success highlights" }
    ]
  },
  {
    name: "Oranges",
    colors: [
      { name: "Default Orange", cssVar: "--orange", hexValue: "#DC7418", description: "Warning states", usage: "Warnings, attention items" },
      { name: "Dark Orange", cssVar: "--darkOrange", hexValue: "#994700", description: "Dark orange variant", usage: "Warning buttons, critical states" },
      { name: "Light Orange", cssVar: "--lightOrange", hexValue: "#FBF1E7", description: "Light orange background", usage: "Warning highlights" }
    ]
  },
  {
    name: "Reds",
    colors: [
      { name: "Default Red", cssVar: "--red", hexValue: "#D72919", description: "Error states", usage: "Error messages, required fields" },
      { name: "Dark Red", cssVar: "--darkRed", hexValue: "#6B140C", description: "Dark red variant", usage: "Error buttons, critical states" },
      { name: "Light Red", cssVar: "--lightRed", hexValue: "#FBE9E8", description: "Light red background", usage: "Error highlights" }
    ]
  },
  {
    name: "Purples",
    colors: [
      { name: "Default Purple", cssVar: "--purple", hexValue: "#5200D8", description: "Purple accent", usage: "Special states, highlights" },
      { name: "Medium Purple", cssVar: "--mediumPurple", hexValue: "#945CF0", description: "Medium purple variant", usage: "Purple buttons, secondary states" },
      { name: "Light Purple", cssVar: "--lightPurple", hexValue: "#EDE2FF", description: "Light purple background", usage: "Purple highlights" }
    ]
  }
], Ko = d.div`
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  padding: ${(e) => e.compact ? "16px" : "24px"};
  background-color: var(--white, #ffffff);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`, Jo = d.h2`
  font-size: 24px;
  font-weight: 600;
  color: var(--black, #000000);
  margin: 0 0 24px 0;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--gray3, #d9d9d9);
`, Zo = d.div`
  margin-bottom: 32px;
`, Qo = d.h3`
  font-size: 18px;
  font-weight: 500;
  color: var(--black, #000000);
  margin: 0 0 16px 0;
`, ei = d.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${(e) => e.compact ? "200px" : "280px"}, 1fr));
  gap: 16px;
`, ri = d.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--gray3, #d9d9d9);
  border-radius: 4px;
  overflow: hidden;
  background-color: var(--white, #ffffff);
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
  }
`, Qt = d.div`
  height: 80px;
  background-color: ${(e) => e.color};
  border-bottom: 1px solid var(--gray3, #d9d9d9);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(e) => e.color === "#ffffff" && `
    border: 1px solid var(--gray3, #d9d9d9);
  `}
`, ti = d.div`
  padding: ${(e) => e.compact ? "12px" : "16px"};
`, ni = d.h4`
  font-size: 16px;
  font-weight: 500;
  color: var(--black, #000000);
  margin: 0 0 8px 0;
`, St = d.div`
  font-size: 14px;
  color: var(--gray1, #595959);
  margin-bottom: 4px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
`, ai = d.div`
  font-size: 12px;
  color: var(--gray1, #595959);
  margin-bottom: 4px;
  line-height: 1.4;
`, oi = d.div`
  font-size: 11px;
  color: var(--gray2, #8c8c8c);
  font-style: italic;
  line-height: 1.3;
`, ii = d.code`
  background-color: var(--gray5, #fafafa);
  padding: 2px 4px;
  border-radius: 2px;
  font-size: 12px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  color: var(--blue, #1976d2);
`, si = d.code`
  background-color: var(--gray5, #fafafa);
  padding: 2px 4px;
  border-radius: 2px;
  font-size: 12px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  color: var(--green, #4caf50);
`, li = d.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 10px;
  color: var(--black, #000000);
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s ease;

  ${Qt}:hover & {
    opacity: 1;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`, Ki = ({
  showHexValues: e = !0,
  showCSSVariables: r = !0,
  showUsageExamples: t = !0,
  compact: n = !1
}) => {
  const o = (l) => {
    navigator.clipboard.writeText(l);
  };
  return /* @__PURE__ */ s.jsxs(Ko, { compact: n, children: [
    /* @__PURE__ */ s.jsx(Jo, { children: "FSP Color Palette" }),
    Xo.map((l) => /* @__PURE__ */ s.jsxs(Zo, { children: [
      /* @__PURE__ */ s.jsx(Qo, { children: l.name }),
      /* @__PURE__ */ s.jsx(ei, { compact: n, children: l.colors.map((i) => /* @__PURE__ */ s.jsxs(ri, { compact: n, children: [
        /* @__PURE__ */ s.jsx(Qt, { color: i.hexValue, children: /* @__PURE__ */ s.jsx(li, { onClick: () => o(i.hexValue), children: "Copy" }) }),
        /* @__PURE__ */ s.jsxs(ti, { compact: n, children: [
          /* @__PURE__ */ s.jsx(ni, { children: i.name }),
          r && /* @__PURE__ */ s.jsxs(St, { children: [
            "CSS: ",
            /* @__PURE__ */ s.jsx(ii, { children: i.cssVar })
          ] }),
          e && /* @__PURE__ */ s.jsxs(St, { children: [
            "HEX: ",
            /* @__PURE__ */ s.jsx(si, { children: i.hexValue })
          ] }),
          i.description && /* @__PURE__ */ s.jsx(ai, { children: i.description }),
          t && i.usage && /* @__PURE__ */ s.jsxs(oi, { children: [
            "Usage: ",
            i.usage
          ] })
        ] })
      ] }, i.name)) })
    ] }, l.name))
  ] });
}, ci = d.div`
  display: flex;
  height: 100vh;
  background-color: var(--white, #ffffff);
  color: var(--black, #000000);
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  
  @media (max-width: 991px) {
    height: calc(100vh - 39px);
    overflow: hidden;
  }
`, di = d.div`
  width: 222px;
  background-color: var(--gray4, #f0f0f0);
  border: none;
  overflow-x: hidden;
  transition: transform 0.3s ease;
  
  ${(e) => e.isMobile && `
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 1000;
    transform: ${e.isOpen ? "translateX(0)" : "translateX(-100%)"};
    margin-top: 40px;
  `}
  
  @media (max-width: 599px) {
    width: 100%;
  }
`, fi = d.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 30px 30px 30px;
  overflow-x: hidden;
  
  @media (max-width: 599px) {
    padding: 0 20px 20px 20px;
  }
`, ui = d.main`
  flex: 1;
  position: relative;
`, pi = d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${(e) => e.isOpen ? "block" : "none"};
`, Ji = ({
  children: e,
  className: r,
  sidebarOpen: t = !1,
  onSidebarToggle: n,
  sidebar: o,
  header: l,
  isMobile: i = !1
}) => {
  const [f, c] = Ge(t);
  ir(() => {
    c(t);
  }, [t]);
  const g = () => {
    const p = !f;
    c(p), n == null || n(p);
  }, h = () => {
    i && g();
  };
  return /* @__PURE__ */ s.jsxs(ci, { className: r, isMobile: i, children: [
    o && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx(di, { isOpen: f, isMobile: i, children: o }),
      i && /* @__PURE__ */ s.jsx(pi, { isOpen: f, onClick: h })
    ] }),
    /* @__PURE__ */ s.jsxs(fi, { isMobile: i, children: [
      l && /* @__PURE__ */ s.jsx("div", { children: ne.cloneElement(l, {
        onToggleSidebar: g,
        sidebarOpen: f
      }) }),
      /* @__PURE__ */ s.jsx(ui, { children: e })
    ] })
  ] });
}, hi = d.h1`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  align-items: center;
  justify-content: start;
  margin: 40px 0 30px;
  font-size: 24px;
  font-weight: 500;
  color: var(--black, #000000);
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  
  ${(e) => e.spaceBetween && `
    justify-content: space-between;
  `}
  
  ${(e) => e.variant === "with-tabs" && `
    margin: 40px 0 0 0;
  `}
  
  ${(e) => e.variant === "with-breadcrumbs" && `
    margin: 0 0 20px 0;
  `}
  
  ${(e) => e.variant === "with-tight-breadcrumbs" && `
    margin-top: -2px;
  `}
  
  ${(e) => !e.noEllipsis && `
    h1 {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  `}
  
  @media (max-width: 599px) {
    align-items: start;
    grid-template-columns: 1fr;
    
    ${(e) => e.variant === "with-breadcrumbs" && `
      margin: 0 0 10px 0;
    `}
  }
`, gi = d.div`
  display: grid;
  align-items: center;
  gap: 10px;
  grid-auto-flow: column;
`, mi = d.div`
  display: flex;
  align-items: center;
  
  fa-icon, svg {
    color: var(--blue, #1376CD);
    margin-left: 10px;
  }
`, vi = d.span`
  color: var(--blue, #1376CD);
  font-size: 14px;
  position: relative;
  top: -6px;
`, xi = d.span`
  display: flex;
  align-items: center;
  gap: 10px;
`, Zi = ({
  title: e,
  subtitle: r,
  actions: t,
  className: n,
  variant: o = "default",
  noEllipsis: l = !1,
  spaceBetween: i = !1,
  titleWithIcon: f,
  tooltip: c
}) => /* @__PURE__ */ s.jsxs(
  hi,
  {
    className: n,
    variant: o,
    noEllipsis: l,
    spaceBetween: i,
    children: [
      /* @__PURE__ */ s.jsxs(xi, { children: [
        /* @__PURE__ */ s.jsx("span", { children: e }),
        r && /* @__PURE__ */ s.jsx("span", { style: { fontSize: "16px", color: "var(--gray1, #595959)" }, children: r }),
        f && /* @__PURE__ */ s.jsx(mi, { children: f }),
        c && /* @__PURE__ */ s.jsx(vi, { children: c })
      ] }),
      t && /* @__PURE__ */ s.jsx(gi, { children: t })
    ]
  }
), bi = d.div`
  width: ${(e) => e.fullWidth ? "100%" : "auto"};
  max-width: ${(e) => e.maxWidth || "none"};
  margin: ${(e) => e.centered ? "0 auto" : "0"};
  padding: ${(e) => {
  switch (e.padding) {
    case "none":
      return "0";
    case "small":
      return "10px";
    case "medium":
      return "20px";
    case "large":
      return "30px";
    case "xlarge":
      return "40px";
    default:
      return "20px";
  }
}};
  background-color: ${(e) => {
  switch (e.background) {
    case "white":
      return "var(--white, #ffffff)";
    case "gray3":
      return "var(--gray3, #d9d9d9)";
    case "gray4":
      return "var(--gray4, #f0f0f0)";
    case "gray5":
      return "var(--gray5, #fafafa)";
    case "light-blue":
      return "var(--lightBlue, #E7F1FA)";
    default:
      return "transparent";
  }
}};
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  
  @media (max-width: 599px) {
    padding: ${(e) => {
  switch (e.padding) {
    case "none":
      return "0";
    case "small":
      return "8px";
    case "medium":
      return "16px";
    case "large":
      return "24px";
    case "xlarge":
      return "32px";
    default:
      return "16px";
  }
}};
  }
`, Qi = ({
  children: e,
  className: r,
  padding: t = "medium",
  maxWidth: n,
  fullWidth: o = !1,
  centered: l = !1,
  background: i
}) => /* @__PURE__ */ s.jsx(
  bi,
  {
    className: r,
    padding: t,
    maxWidth: n,
    fullWidth: o,
    centered: l,
    background: i,
    children: e
  }
), yi = d.div`
  display: grid;
  width: ${(e) => e.fullWidth ? "100%" : "auto"};
  
  /* Grid template */
  grid-template-columns: ${(e) => e.templateColumns ? e.templateColumns : e.columns ? typeof e.columns == "number" ? `repeat(${e.columns}, 1fr)` : e.columns : "1fr"};
  
  grid-template-rows: ${(e) => e.templateRows ? e.templateRows : e.rows ? typeof e.rows == "number" ? `repeat(${e.rows}, 1fr)` : e.rows : "auto"};
  
  ${(e) => e.templateAreas && `
    grid-template-areas: ${e.templateAreas};
  `}
  
  /* Gap */
  gap: ${(e) => e.gap ? typeof e.gap == "number" ? `${e.gap}px` : e.gap : "0"};
  
  ${(e) => e.columnGap && `
    column-gap: ${typeof e.columnGap == "number" ? `${e.columnGap}px` : e.columnGap};
  `}
  
  ${(e) => e.rowGap && `
    row-gap: ${typeof e.rowGap == "number" ? `${e.rowGap}px` : e.rowGap};
  `}
  
  /* Auto flow */
  ${(e) => e.autoFlow && `
    grid-auto-flow: ${e.autoFlow};
  `}
  
  /* Alignment */
  ${(e) => e.alignItems && `
    align-items: ${e.alignItems};
  `}
  
  ${(e) => e.justifyItems && `
    justify-items: ${e.justifyItems};
  `}
  
  ${(e) => e.alignContent && `
    align-content: ${e.alignContent};
  `}
  
  ${(e) => e.justifyContent && `
    justify-content: ${e.justifyContent};
  `}
  
  /* Responsive breakpoints */
  ${(e) => e.responsive && `
    @media (max-width: 991px) {
      grid-template-columns: ${e.tabletColumns ? typeof e.tabletColumns == "number" ? `repeat(${e.tabletColumns}, 1fr)` : e.tabletColumns : "1fr"};
    }
    
    @media (max-width: 599px) {
      grid-template-columns: ${e.mobileColumns ? typeof e.mobileColumns == "number" ? `repeat(${e.mobileColumns}, 1fr)` : e.mobileColumns : "1fr"};
    }
  `}
`, es = ({
  children: e,
  className: r,
  columns: t,
  rows: n,
  gap: o,
  columnGap: l,
  rowGap: i,
  templateColumns: f,
  templateRows: c,
  templateAreas: g,
  autoFlow: h,
  alignItems: p,
  justifyItems: x,
  alignContent: b,
  justifyContent: S,
  fullWidth: E = !1,
  responsive: T = !1,
  mobileColumns: k,
  tabletColumns: y
}) => /* @__PURE__ */ s.jsx(
  yi,
  {
    className: r,
    columns: t,
    rows: n,
    gap: o,
    columnGap: l,
    rowGap: i,
    templateColumns: f,
    templateRows: c,
    templateAreas: g,
    autoFlow: h,
    alignItems: p,
    justifyItems: x,
    alignContent: b,
    justifyContent: S,
    fullWidth: E,
    responsive: T,
    mobileColumns: k,
    tabletColumns: y,
    children: e
  }
), wi = d.div`
  display: ${(e) => e.inline ? "inline-flex" : "flex"};
  flex-direction: ${(e) => e.direction || "row"};
  flex-wrap: ${(e) => e.wrap || "nowrap"};
  width: ${(e) => e.fullWidth ? "100%" : "auto"};
  height: ${(e) => e.fullHeight ? "100%" : "auto"};
  
  /* Gap */
  ${(e) => e.gap && `
    gap: ${typeof e.gap == "number" ? `${e.gap}px` : e.gap};
  `}
  
  /* Alignment */
  ${(e) => e.alignItems && `
    align-items: ${e.alignItems};
  `}
  
  ${(e) => e.justifyContent && `
    justify-content: ${e.justifyContent};
  `}
  
  ${(e) => e.alignContent && `
    align-content: ${e.alignContent};
  `}
  
  /* Responsive breakpoints */
  ${(e) => e.responsive && `
    @media (max-width: 991px) {
      flex-direction: ${e.tabletDirection || e.direction || "row"};
    }
    
    @media (max-width: 599px) {
      flex-direction: ${e.mobileDirection || "column"};
    }
  `}
`, rs = ({
  children: e,
  className: r,
  direction: t = "row",
  wrap: n = "nowrap",
  gap: o,
  alignItems: l,
  justifyContent: i,
  alignContent: f,
  fullWidth: c = !1,
  fullHeight: g = !1,
  inline: h = !1,
  responsive: p = !1,
  mobileDirection: x,
  tabletDirection: b
}) => /* @__PURE__ */ s.jsx(
  wi,
  {
    className: r,
    direction: t,
    wrap: n,
    gap: o,
    alignItems: l,
    justifyContent: i,
    alignContent: f,
    fullWidth: c,
    fullHeight: g,
    inline: h,
    responsive: p,
    mobileDirection: x,
    tabletDirection: b,
    children: e
  }
), ki = d.div`
  width: ${(e) => e.fullWidth ? "100%" : "auto"};
  height: ${(e) => e.fullHeight ? "100%" : "auto"};
  display: ${(e) => e.display || "block"};
  
  /* Margin */
  ${(e) => e.margin !== void 0 && `
    margin: ${typeof e.margin == "number" ? `${e.margin}px` : e.margin};
  `}
  
  ${(e) => e.marginTop !== void 0 && `
    margin-top: ${typeof e.marginTop == "number" ? `${e.marginTop}px` : e.marginTop};
  `}
  
  ${(e) => e.marginRight !== void 0 && `
    margin-right: ${typeof e.marginRight == "number" ? `${e.marginRight}px` : e.marginRight};
  `}
  
  ${(e) => e.marginBottom !== void 0 && `
    margin-bottom: ${typeof e.marginBottom == "number" ? `${e.marginBottom}px` : e.marginBottom};
  `}
  
  ${(e) => e.marginLeft !== void 0 && `
    margin-left: ${typeof e.marginLeft == "number" ? `${e.marginLeft}px` : e.marginLeft};
  `}
  
  /* Padding */
  ${(e) => e.padding !== void 0 && `
    padding: ${typeof e.padding == "number" ? `${e.padding}px` : e.padding};
  `}
  
  ${(e) => e.paddingTop !== void 0 && `
    padding-top: ${typeof e.paddingTop == "number" ? `${e.paddingTop}px` : e.paddingTop};
  `}
  
  ${(e) => e.paddingRight !== void 0 && `
    padding-right: ${typeof e.paddingRight == "number" ? `${e.paddingRight}px` : e.paddingRight};
  `}
  
  ${(e) => e.paddingBottom !== void 0 && `
    padding-bottom: ${typeof e.paddingBottom == "number" ? `${e.paddingBottom}px` : e.paddingBottom};
  `}
  
  ${(e) => e.paddingLeft !== void 0 && `
    padding-left: ${typeof e.paddingLeft == "number" ? `${e.paddingLeft}px` : e.paddingLeft};
  `}
  
  /* Gap */
  ${(e) => e.gap !== void 0 && `
    gap: ${typeof e.gap == "number" ? `${e.gap}px` : e.gap};
  `}
  
  /* Flex properties */
  ${(e) => e.flexDirection && `
    flex-direction: ${e.flexDirection};
  `}
  
  ${(e) => e.justifyContent && `
    justify-content: ${e.justifyContent};
  `}
  
  ${(e) => e.alignItems && `
    align-items: ${e.alignItems};
  `}
`, ts = ({
  children: e,
  className: r,
  style: t,
  margin: n,
  marginTop: o,
  marginRight: l,
  marginBottom: i,
  marginLeft: f,
  padding: c,
  paddingTop: g,
  paddingRight: h,
  paddingBottom: p,
  paddingLeft: x,
  gap: b,
  fullWidth: S = !1,
  fullHeight: E = !1,
  display: T,
  flexDirection: k,
  justifyContent: y,
  alignItems: w
}) => /* @__PURE__ */ s.jsx(
  ki,
  {
    className: r,
    style: t,
    margin: n,
    marginTop: o,
    marginRight: l,
    marginBottom: i,
    marginLeft: f,
    padding: c,
    paddingTop: g,
    paddingRight: h,
    paddingBottom: p,
    paddingLeft: x,
    gap: b,
    fullWidth: S,
    fullHeight: E,
    display: T,
    flexDirection: k,
    justifyContent: y,
    alignItems: w,
    children: e
  }
), ns = {
  // Margin utilities
  m0: { margin: 0 },
  m5: { margin: 5 },
  m10: { margin: 10 },
  m15: { margin: 15 },
  m20: { margin: 20 },
  m25: { margin: 25 },
  m30: { margin: 30 },
  m35: { margin: 35 },
  m40: { margin: 40 },
  // Padding utilities
  p0: { padding: 0 },
  p5: { padding: 5 },
  p10: { padding: 10 },
  p15: { padding: 15 },
  p20: { padding: 20 },
  p25: { padding: 25 },
  p30: { padding: 30 },
  p35: { padding: 35 },
  p40: { padding: 40 },
  // Gap utilities
  gap0: { gap: 0 },
  gap5: { gap: 5 },
  gap10: { gap: 10 },
  gap15: { gap: 15 },
  gap20: { gap: 20 },
  gap25: { gap: 25 },
  gap30: { gap: 30 },
  gap35: { gap: 35 },
  gap40: { gap: 40 }
}, $i = d.div`
  position: relative;
`, Si = d.div`
  position: absolute;
  top: -34px; /* Position above the content area */
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 14px;
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  z-index: 1;
`, Ci = d.div`
  /* No margin needed - breadcrumb is positioned above */
`, ji = d.a.withConfig({
  shouldForwardProp: (e) => !["onClick"].includes(e)
})`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--gray1, #595959);
  font-size: 12px;
  line-height: 14px;
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--blue, #1376CD);
  }
  
  &:focus {
    outline: 2px solid var(--blue, #1376CD);
    outline-offset: 2px;
    border-radius: 2px;
  }
`, Ei = d.span`
  font-size: 12px;
  line-height: 14px;
  margin-right: 4px;
  color: inherit;
`, Ri = d.span`
  font-size: 12px;
  line-height: 14px;
  color: inherit;
`, as = ({
  previousPage: e,
  onBack: r,
  className: t,
  href: n
}) => {
  const o = () => {
    r && r();
  };
  return /* @__PURE__ */ s.jsx(Si, { className: t, children: /* @__PURE__ */ s.jsxs(
    ji,
    {
      href: n || "#",
      onClick: o,
      role: "button",
      tabIndex: 0,
      "aria-label": `Go back to ${e}`,
      children: [
        /* @__PURE__ */ s.jsx(Ei, { children: "‹" }),
        /* @__PURE__ */ s.jsx(Ri, { children: e })
      ]
    }
  ) });
}, os = ({
  children: e,
  breadcrumb: r,
  className: t
}) => /* @__PURE__ */ s.jsxs($i, { className: t, children: [
  r,
  /* @__PURE__ */ s.jsx(Ci, { children: e })
] });
export {
  Di as CountChip,
  Gi as FSPActionList,
  as as FSPBreadcrumb,
  os as FSPBreadcrumbWrapper,
  Ai as FSPButton,
  Hi as FSPButtonList,
  Ni as FSPCard,
  Li as FSPCardContent,
  Vi as FSPCardHeader,
  Mi as FSPCardInfo,
  Wi as FSPCardLabel,
  qi as FSPCheckbox,
  Bi as FSPCheckboxList,
  Nr as FSPChip,
  Ki as FSPColorPalette,
  Qi as FSPContainer,
  rs as FSPFlex,
  es as FSPGrid,
  Yi as FSPInput,
  Ji as FSPLayout,
  Lr as FSPList,
  Zi as FSPPageHeader,
  qo as FSPRadio,
  Xi as FSPRadioGroup,
  Ui as FSPSelect,
  ts as FSPSpacing,
  Oi as FSPTable,
  Ti as FSPTypography,
  zi as InfoIcon,
  _i as StatusBox,
  Fi as StatusChip,
  Ii as WeatherChip,
  ns as spacingUtilities
};
