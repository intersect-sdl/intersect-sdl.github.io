import{f as m,h as a,t as d,x as h,m as r,k as o,s as c}from"./iframe-B3TcvJsq.js";import{a as b}from"./await-5xdQBHnL.js";import{s as x}from"./attributes-CkHowp77.js";/* empty css                   */import"./theme-DJ84E762.js";import{R as _}from"./ResourceHeader-D2Uogxy4.js";import{C as D,a as T,b as M}from"./CatalogSidebar-BX0n5Gxr.js";import"./preload-helper-Ct5FWWRu.js";import"./style-B3ufI60B.js";import"./snippet-B44izKwC.js";import"./index-C-YiXxc3.js";import"./each-BSye3epp.js";import"./input-DuSexQ4w.js";import"./this-CG9Jdc1Q.js";import"./bundle-mjs-0JNfDbnS.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./index-CUlkZ_RL.js";import"./helpers-DLCARBRj.js";var P=m('<article typeof="dcat:Catalog" class="p-4"><!> <!> <div class="px-4 md:ml-64"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700"><!></div></div></article>'),C=m("<p> </p>"),A=m('<div class="text-center size-14">Loading</div>'),R=m('<div xmlns:dcat="http://www.w3.org/ns/dcat#" xmlns:dcterms="http://purl.org/dc/terms/"><!></div>');function S(u,y){var l=R(),g=o(l);b(g,()=>y.catalogPromise,s=>{var e=A();a(s,e)},(s,e)=>{var t=P(),n=o(t);_(n,{get resource(){return r(e)}});var p=c(n,2);D(p,{get catalog(){return r(e)}});var f=c(p,2),w=o(f),v=o(w);T(v,{get catalog(){return r(e)}}),d(()=>x(t,"about",r(e).uri)),a(s,t)},(s,e)=>{var t=C(),n=o(t);d(()=>h(n,`Something went wrong: ${r(e).message??""}`)),a(s,t)}),a(u,l)}S.__docgen={data:[{name:"catalogPromise",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"object",text:"Promise<Catalog<Dataset<Resource>>>"},static:!1,readonly:!1}],name:"SystemBrowser.svelte"};const H=`@prefix dcat: <http://www.w3.org/ns/dcat#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix ssn:  <http://www.w3.org/ns/ssn/> .
@prefix sosa: <http://www.w3.org/ns/sosa/> .
@prefix ldp:  <http://www.w3.org/ns/ldp#> .
@prefix xsd:  <http://www.w3.org/2001/XMLSchema#> .
@prefix dcterms:  <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix : <http://example.org/ns/systems/> .
@base <http://example.org/ns/systems/> .

# === LDP/DCAT Catalog Container ===
: rdf:type owl:NamedIndividual , ldp:Container, dcat:Catalog ;
    dcterms:title "Example Sensor Systems Catalog"@en ;
    dcterms:description "Repositories for all the Data managed by the ACL data management system."@en ;
    dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
    dcat:resource :WeatherStation01 , :SoilMonitoringUnitA .

# === SYSTEM 1: WeatherStation01 ===
:WeatherStation01 rdf:type dcat:Resource, ssn:System ;
    dcterms:title "Weather Station 01"@en ;
    ssn:hasSubSystem <TemperatureSensor01> ;
    ssn:hasSubSystem <HumiditySensor01> ;
    ssn:hasDeployment <Deployment01> .

<TemperatureSensor01> a sosa:Sensor ;
    dcterms:title "Temperature Sensor 01"@en ;
    sosa:observes <props/AirTemperature> .

<HumiditySensor01> a sosa:Sensor ;
    dcterms:title "Humidity Sensor 01"@en ;
    sosa:observes <props/RelativeHumidity> .

<props/AirTemperature> a sosa:ObservableProperty ;
    dcterms:title "Air Temperature"@en .

<props/RelativeHumidity> a sosa:ObservableProperty ;
    dcterms:title "Relative Humidity"@en .

<Deployment01> a ssn:Deployment ;
    ssn:deployedSystem <WeatherStation01> ;
    ssn:deploymentLocation <sites/Site001> ;
    dcterms:date "2024-03-01"^^xsd:date .

<sites/Site001> a sosa:FeatureOfInterest ;
    dcterms:title "Rooftop Station A"@en ;
    foaf:based_near "Knoxville, TN"@en .

# === SYSTEM 2: SoilMonitoringUnitA ===
<SoilMonitoringUnitA> a dcat:Resource, ssn:System ;
    dcterms:title "Soil Monitoring Unit A"@en ;
    ssn:hasSubSystem <SoilMoistureSensor01> ;
    ssn:hasSubSystem <SoilTemperatureSensor01> ;
    ssn:hasDeployment <Deployment02> .

<SoilMoistureSensor01> a sosa:Sensor ;
    dcterms:title "Soil Moisture Sensor 01"@en ;
    sosa:observes <props/SoilMoisture> .

<SoilTemperatureSensor01> a sosa:Sensor ;
    dcterms:title "Soil Temperature Sensor 01"@en ;
    sosa:observes <props/SoilTemperature> .

<props/SoilMoisture> a sosa:ObservableProperty ;
    dcterms:title "Soil Moisture"@en .

<props/SoilTemperature> a sosa:ObservableProperty ;
    dcterms:title "Soil Temperature"@en .

<Deployment02> a ssn:Deployment ;
    ssn:deployedSystem <SoilMonitoringUnitA> ;
    ssn:deploymentLocation <sites/Plot002> ;
    dcterms:date "2025-04-15"^^xsd:date .

<sites/Plot002> a sosa:FeatureOfInterest ;
    dcterms:title "Agricultural Plot 002"@en ;
    foaf:based_near "Maryville, TN"@en .
`,L=new File([H],"system-examples.ttl",{type:"text/turtle"}),O=await M.fromFile("http://example.org/ns/systems/",L),Q={title:"SDL/SSN/System Browser",component:S,parameters:{layout:"fullscreen"}},i={name:"Default View",args:{catalogPromise:O}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Default View",
  args: {
    catalogPromise: catalogPromise
  }
}`,...i.parameters?.docs?.source}}};const Z=["Default"];export{i as Default,Z as __namedExportsOrder,Q as default};
