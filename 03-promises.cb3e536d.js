function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},o.parcelRequire7bc7=r);var i=r("7Y9D8");function l(e,o){const n=Math.random()>.5;return new Promise(((t,r)=>{setTimeout((()=>{n?t({position:e,delay:o}):r({position:e,delay:o})}),o)}))}document.querySelector(".form").addEventListener("submit",(function(o){o.preventDefault();const n=o.currentTarget.elements,t=Number(n.delay.value),r=Number(n.step.value),s=Number(n.amount.value);o.currentTarget.reset(),function(o,n,t){let r=o;for(let o=1;o<=t;o++)console.log(o,r),l(o,r).then((({position:o,delay:n})=>{console.log(`✅ Fulfilled promise ${o} in ${n}ms`),e(i).Notify.success(`✅ Fulfilled promise ${o} in ${n}ms`)})).catch((({position:o,delay:n})=>{console.log(`❌ Rejected promise ${o} in ${n}ms`),e(i).Notify.failure(`❌ Rejected promise ${o} in ${n}ms`)})).finally((()=>{})),r+=n}(t,r,s)}));
//# sourceMappingURL=03-promises.cb3e536d.js.map
