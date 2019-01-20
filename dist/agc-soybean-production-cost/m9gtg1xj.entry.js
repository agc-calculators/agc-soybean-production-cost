/*! Built with http://stenciljs.com */
const{h:t}=window.AgcSoybeanProductionCost;import{d as e}from"./chunk-20c43398.js";class s{constructor(){this.socket="",this.ready=!1}render(){return t("section",{"data-wizard-results":!0,ref:t=>this.section=t},t("div",{style:{display:this.ready?"none":"block"}},t("slot",{name:"empty"})),t("div",{style:{display:this.ready?"block":"none"}},this.data&&t("ul",{class:"agc-results"},t("li",null,t("h2",{"data-i18n":"results.total-income"},"Gross Income per Acre"),t("span",{class:"agc-results__value"},"$",e(this.data.totalIncomePerAcre).dollars),t("sub",null,t("strong",null,".",e(this.data.totalIncomePerAcre).cents))),t("li",null,t("h2",{"data-i18n":"results.net-income-per-acre"},"Net Income per Acre"),t("span",{class:"agc-results__value"},"$",e(this.data.netIncomePerAcre).dollars),t("sub",null,t("strong",null,".",e(this.data.netIncomePerAcre).cents))),t("li",null,t("h2",{"data-i18n":`results.net-income-total.${this.data.units.land}`},"Net Income - ",this.data.plantedAcres," acres"),t("span",{class:"agc-results__value"},"$",e(this.data.netIncomeTotal).dollars),t("sub",null,t("strong",null,".",e(this.data.netIncomeTotal).cents))))))}handleResults(t){t.detail.socket===this.socket&&(this.data=Object.assign({},t.detail.results),this.ready=!0)}componentDidLoad(){this.socket&&window.document.addEventListener("agcCalculated",this.handleResults.bind(this))}componentDidUnload(){window.document.removeEventListener("agcCalculated",this.handleResults)}static get is(){return"agc-soybean-production-cost-results"}static get properties(){return{data:{state:!0},ready:{state:!0},socket:{type:String,attr:"socket"}}}}export{s as AgcSoybeanProductionCostResults};