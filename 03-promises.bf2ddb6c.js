!function(){function e(e,n){var o=Math.random()>.5;return new Promise((function(t,c){setTimeout((function(){o?t({position:e,delay:n}):c({position:e,delay:n})}),n)}))}console.log("test3"),document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();var o=n.currentTarget.elements,t=Number(o.delay.value),c=Number(o.step.value),i=Number(o.amount.value);n.currentTarget.reset(),function(n,o,t){for(var c=n,i=1;i<=t;i++)console.log(i,c),e(i,c).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})).finally((function(){})),c+=o}(t,c,i)})),console.log("By Конец")}();
//# sourceMappingURL=03-promises.bf2ddb6c.js.map