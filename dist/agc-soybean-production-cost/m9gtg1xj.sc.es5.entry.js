/*! Built with http://stenciljs.com */
AgcSoybeanProductionCost.loadBundle("m9gtg1xj",["exports","./chunk-d3b984d1.js"],function(e,t){var n=window.AgcSoybeanProductionCost.h,s=function(){function e(){this.socket="",this.ready=!1}return e.prototype.render=function(){var e=this;return n("section",{"data-wizard-results":!0,ref:function(t){return e.section=t}},n("div",{style:{display:this.ready?"none":"block"}},n("slot",{name:"empty"})),n("div",{style:{display:this.ready?"block":"none"}},this.data&&n("ul",{class:"agc-results"},n("li",null,n("h2",{"data-i18n":"results.total-income"},"Gross Income per Acre"),n("span",{class:"agc-results__value"},"$",t.parseMoney(this.data.totalIncomePerAcre).dollars),n("sub",null,n("strong",null,".",t.parseMoney(this.data.totalIncomePerAcre).cents))),n("li",null,n("h2",{"data-i18n":"results.net-income-per-acre"},"Net Income per Acre"),n("span",{class:"agc-results__value"},"$",t.parseMoney(this.data.netIncomePerAcre).dollars),n("sub",null,n("strong",null,".",t.parseMoney(this.data.netIncomePerAcre).cents))),n("li",null,n("h2",{"data-i18n":"results.net-income-total."+this.data.units.land},"Net Income - ",this.data.plantedAcres," acres"),n("span",{class:"agc-results__value"},"$",t.parseMoney(this.data.netIncomeTotal).dollars),n("sub",null,n("strong",null,".",t.parseMoney(this.data.netIncomeTotal).cents))))))},e.prototype.handleResults=function(e){e.detail.socket===this.socket&&(this.data=Object.assign({},e.detail.results),this.ready=!0)},e.prototype.componentDidLoad=function(){this.socket&&window.document.addEventListener("agcCalculated",this.handleResults.bind(this))},e.prototype.componentDidUnload=function(){window.document.removeEventListener("agcCalculated",this.handleResults)},Object.defineProperty(e,"is",{get:function(){return"agc-soybean-production-cost-results"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{data:{state:!0},ready:{state:!0},socket:{type:String,attr:"socket"}}},enumerable:!0,configurable:!0}),e}();e.AgcSoybeanProductionCostResults=s,Object.defineProperty(e,"__esModule",{value:!0})});