import{C as A,a as P,b as w}from"./CatalogSidebar-BX0n5Gxr.js";import{p as D,d as f,q as K,m as c,z as X,u as L,s as h,k as n,t as N,h as l,j as U,f as R,x as W}from"./iframe-B3TcvJsq.js";import{a as I}from"./await-5xdQBHnL.js";import{a as T,s as O}from"./attributes-CkHowp77.js";/* empty css                   */import{R as S}from"./ResourceHeader-D2Uogxy4.js";import{g as M,s as Z}from"./theme-DJ84E762.js";import{a as B}from"./style-B3ufI60B.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CUlkZ_RL.js";import"./each-BSye3epp.js";import"./snippet-B44izKwC.js";import"./index-C-YiXxc3.js";import"./helpers-DLCARBRj.js";import"./bundle-mjs-0JNfDbnS.js";import"./input-DuSexQ4w.js";import"./this-CG9Jdc1Q.js";var E=K('<svg><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"></path></svg>');function j(o,t){D(t,!0);let i=f(t,"color",3,"primary"),s=f(t,"size",3,"8"),d=f(t,"currentFill",3,"currentFill"),e=f(t,"currentColor",3,"currentColor"),r=X(t,["$$slots","$$events","$$legacy","color","size","class","currentFill","currentColor"]);const a=M("spinner");let m=L(()=>Z({color:i(),size:s(),class:B(a,t.class)}));var _=E();T(_,()=>({...r,role:"status",class:c(m),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}));var b=n(_),v=h(b);N(()=>{O(b,"fill",e()),O(v,"fill",d())}),l(o,_),U()}var z=R('<article typeof="dcat:Catalog"><!> <!> <div class="px-4 md:ml-64"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700"><!></div></div></article>'),F=R("<p> </p>"),H=R('<div class="text-center size-14"><!></div>'),k=R('<div xmlns:dcat="http://www.w3.org/ns/dcat#" xmlns:dcterms="http://purl.org/dc/terms/"><!></div>');function g(o,t){var i=k(),s=n(i);I(s,()=>t.catalogPromise,d=>{var e=H(),r=n(e);j(r,{size:"8"}),l(d,e)},(d,e)=>{var r=z(),a=n(r);S(a,{get resource(){return c(e)}});var m=h(a,2);A(m,{get catalog(){return c(e)}});var _=h(m,2),b=n(_),v=n(b);P(v,{get catalog(){return c(e)}}),N(()=>O(r,"about",c(e).uri)),l(d,r)},(d,e)=>{var r=F(),a=n(r);N(()=>W(a,`Something went wrong: ${c(e).message??""}`)),l(d,r)}),l(o,i)}g.__docgen={data:[{name:"catalogPromise",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"object",text:"Promise<Catalog<Dataset<Resource>>>"},static:!1,readonly:!1}],name:"DataCatalogs.svelte"};const q=`@prefix : <http://acl.intersect.ornl.gov/dms/drs/> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix xml: <http://www.w3.org/XML/1998/namespace> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix dcat: <http://www.w3.org/ns/dcat#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix xrdrepo: <http://acl.intersect.ornl.gov/dms/drs/xrd> .
@base <http://acl.intersect.ornl.gov/dms/drs/> .

[ rdf:type owl:Ontology
 ] .

#################################################################
#    Annotation properties
#################################################################

###  http://purl.org/dc/terms/description
dcterms:description rdf:type owl:AnnotationProperty .


###  http://purl.org/dc/terms/publisher
dcterms:publisher rdf:type owl:AnnotationProperty .


###  http://purl.org/dc/terms/title
dcterms:title rdf:type owl:AnnotationProperty .


###  http://www.w3.org/ns/dcat#accessURL
dcat:accessURL rdf:type owl:AnnotationProperty .


###  http://www.w3.org/ns/dcat#distribution
dcat:distribution rdf:type owl:AnnotationProperty .


###  http://www.w3.org/ns/dcat#downloadURL
dcat:downloadURL rdf:type owl:AnnotationProperty .


#################################################################
#    Object Properties
#################################################################

###  http://www.w3.org/ns/dcat#catalog
dcat:catalog rdf:type owl:ObjectProperty .


###  http://www.w3.org/ns/dcat#dataset
dcat:dataset rdf:type owl:ObjectProperty .


#################################################################
#    Classes
#################################################################

###  http://www.w3.org/ns/dcat#Catalog
dcat:Catalog rdf:type owl:Class .


###  http://www.w3.org/ns/dcat#Dataset
dcat:Dataset rdf:type owl:Class .


###  http://www.w3.org/ns/dcat#Distribution
dcat:Distribution rdf:type owl:Class .


#################################################################
#    Individuals
#################################################################

###  http://acl.intersect.ornl.gov/dms/drs/
: rdf:type owl:NamedIndividual ,
           dcat:Catalog ;
          dcat:resource :sampleResource1 ;
  dcat:catalog :samplerepo ,
               :xrdrepo ;
  dcat:dataset :sampleDataset1 ;
  dcat:service :sampleService1 ;
  dcterms:description "Repositories for all the Data managed by the ACL data management system."@en ;
  dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
  dcterms:title "ACL Data Registry"@en .

:sampleResource1 rdf:type owl:NamedIndividual ,
                      dcat:Resource ;
                      dcterms:title "Sample Resource 1"@en ;
                      dcterms:description "A Description for a Sample Resource"@en .

:sampleDataset1 rdf:type owl:NamedIndividual ,
                      dcat:Dataset ;
                      dcterms:title "Sample Dataset 1"@en ;
                      dcterms:description "A Description for a Sample Dataset"@en .

:sampleService1 rdf:type owl:NamedIndividual ,
                      dcat:Service ;
                      dcterms:title "Sample Service 1"@en ;
                      dcterms:description "A Description for a Sample Service"@en .

###  :samplerepo
:samplerepo rdf:type owl:NamedIndividual ,
                       dcat:Catalog ;
              dcterms:description "Catalog of ACL samples"@en ;
              dcterms:title "Samples Registry"@en ;
              dcat:dataset <:samplerepo/a38ab982-22ae-464d-9a58-9af176c13cc5> ,
                           <:samplerepo/a6b9d412-d52a-4a08-88b1-0be034554e82> ,
                           <:samplerepo/ac2252f9-bdcf-4eb4-89db-6dfc0028ba19> ,
                           <:samplerepo/ac7e1c23-0c49-4687-a30f-ba29924301a3> ,
                           <:samplerepo/ae838f9e-1ab0-4e5a-ab13-06bb0d1b31d7> ,
                           <:samplerepo/b0319165-f96d-47f3-95e8-a2974b2981dd> ,
                           <:samplerepo/b06dce88-4f10-486f-9b61-c507f15a5da0> ,
                           <:samplerepo/bc08e7f4-2043-4bca-bace-a07b2f15c0f2> ,
                           <:samplerepo/d023fd93-bff8-4112-9162-69ed07661b43> ,
                           <:samplerepo/f6cc04a9-7de5-4e66-a8a8-f8e7f35c67b8> ,
                           <:samplerepo/f7fc656b-5608-437b-9906-38eac87529ca> ,
                           <:samplerepo/f96eccc9-7fd3-4d77-98ce-3554d1fd1b87> ,
                           <:samplerepo/0c0cbd2b-37a2-469a-96af-f8e06e543e90> ,
                           <:samplerepo/0ccebb57-801d-4db8-b8cd-4d8987854470> ,
                           <:samplerepo/0eeaf6e4-3ca3-4814-bc46-0c649569b403> ,
                           <:samplerepo/0f05d60d-5cbb-41d2-a34e-0142f5927e80> ,
                           <:samplerepo/000e73cc-e1af-4ee0-91a8-fd7aa738802b> ,
                           <:samplerepo/01dee095-5ba9-4518-abf0-504c26097188> ,
                           <:samplerepo/0294af3d-7ef0-4970-9bde-c2824e4bb3b8> ,
                           <:samplerepo/05f629ce-fd83-4216-a44a-07b77bbded00> ,
                           <:samplerepo/1def0846-afeb-4d71-99f2-eab698bf4b04> ,
                           <:samplerepo/143723a2-b0df-444b-b49f-e3318926d539> ,
                           <:samplerepo/153c5b0a-3980-40b1-b01e-3985d96233e0> ,
                           <:samplerepo/189b724f-8461-4b09-b4d1-b02f85f45162> ,
                           <:samplerepo/2a804c14-6077-4bf2-8765-2672b7bc7bf5> ,
                           <:samplerepo/2c79fab1-edc3-4fe5-a4d8-d095d8825920> ,
                           <:samplerepo/2de65b30-9987-4a69-81ec-5d8427c64033> ,
                           <:samplerepo/2007cd5c-4ccd-4fa4-b6e7-8dc465e83ee5> ,
                           <:samplerepo/234a71ad-4f7a-414e-9b18-5ac4ccc6c90f> ,
                           <:samplerepo/24cb06f2-f088-4295-80cf-9e0dbfd7d33c> ,
                           <:samplerepo/26255dc2-6a89-4788-85ee-99681d921b8f> ,
                           <:samplerepo/2782c2d3-a8b7-49ec-87a3-9530c26a6561> ,
                           <:samplerepo/29a6206e-bff6-4933-bc17-4a6fa4d26ab2> ,
                           <:samplerepo/4ad603e1-078f-4e22-86bb-982cb47676bc> ,
                           <:samplerepo/4b055385-deb3-48ca-916b-3c6a426254d9> ,
                           <:samplerepo/43a432ab-9c5b-413e-a2e4-140fc10dffc5> ,
                           <:samplerepo/4425d5f0-618e-4e2d-9011-e1a960340265> ,
                           <:samplerepo/4644eac8-9cd4-466d-b0b2-0d8af983648f> ,
                           <:samplerepo/5b0dfdad-a319-4848-9a37-24bfc7a408b2> ,
                           <:samplerepo/52810458-0189-4d37-9f87-8b855bb55839> ,
                           <:samplerepo/643c69f7-9abd-4af1-9d6d-9f751206d5d6> ,
                           <:samplerepo/7c78330f-d49d-4acb-882b-db4d3a1f333f> ,
                           <:samplerepo/7e008db5-48bb-49c6-9b74-e1f15444807c> ,
                           <:samplerepo/73f8848a-af45-4d93-b870-a59ec6d6ee90> ,
                           <:samplerepo/8b44d713-5ac5-4afc-9496-24d91ad02044> ,
                           <:samplerepo/9606ad3f-70ce-4efb-8361-9c7401147cf2> .


###  :samplerepo/a38ab982-22ae-464d-9a58-9af176c13cc5
<:samplerepo/a38ab982-22ae-464d-9a58-9af176c13cc5> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample NCTO_5pctNa_20230526"@en ;
                                                   dcterms:title "NCTO_5pctNa_20230526" .


###  :samplerepo/a6b9d412-d52a-4a08-88b1-0be034554e82
<:samplerepo/a6b9d412-d52a-4a08-88b1-0be034554e82> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample KCAO_20230619_4-refinedata"@en ;
                                                   dcterms:title "KCAO_20230619_4-refinedata" .


###  :samplerepo/ac2252f9-bdcf-4eb4-89db-6dfc0028ba19
<:samplerepo/ac2252f9-bdcf-4eb4-89db-6dfc0028ba19> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample SCIO_20230526"@en ;
                                                   dcterms:title "SCIO_20230526" .


###  :samplerepo/ac7e1c23-0c49-4687-a30f-ba29924301a3
<:samplerepo/ac7e1c23-0c49-4687-a30f-ba29924301a3> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample NaPtO3_20230619_350anneal"@en ;
                                                   dcterms:title "NaPtO3_20230619_350anneal" .


###  :samplerepo/ae838f9e-1ab0-4e5a-ab13-06bb0d1b31d7
<:samplerepo/ae838f9e-1ab0-4e5a-ab13-06bb0d1b31d7> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample NaPtO3_overnight"@en ;
                                                   dcterms:title "NaPtO3_overnight" .


###  :samplerepo/b0319165-f96d-47f3-95e8-a2974b2981dd
<:samplerepo/b0319165-f96d-47f3-95e8-a2974b2981dd> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample NCSO_20230526_ZnCl2"@en ;
                                                   dcterms:title "NCSO_20230526_ZnCl2" .


###  :samplerepo/b06dce88-4f10-486f-9b61-c507f15a5da0
<:samplerepo/b06dce88-4f10-486f-9b61-c507f15a5da0> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample testSi4bh"@en ;
                                                   dcterms:title "testSi4bh" .


###  :samplerepo/bc08e7f4-2043-4bca-bace-a07b2f15c0f2
<:samplerepo/bc08e7f4-2043-4bca-bace-a07b2f15c0f2> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample NaPtO_reheat_over300C"@en ;
                                                   dcterms:title "NaPtO_reheat_over300C" .


###  :samplerepo/d023fd93-bff8-4112-9162-69ed07661b43
<:samplerepo/d023fd93-bff8-4112-9162-69ed07661b43> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample NAPtO3-20230613"@en ;
                                                   dcterms:title "NAPtO3-20230613" .


###  :samplerepo/f6cc04a9-7de5-4e66-a8a8-f8e7f35c67b8
<:samplerepo/f6cc04a9-7de5-4e66-a8a8-f8e7f35c67b8> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample NaPtO3_20230619_350anneal-1hr"@en ;
                                                   dcterms:title "NaPtO3_20230619_350anneal-1hr" .


###  :samplerepo/f7fc656b-5608-437b-9906-38eac87529ca
<:samplerepo/f7fc656b-5608-437b-9906-38eac87529ca> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample KCAO_2023062_350c_anneal_18thdiv-sli"@en ;
                                                   dcterms:title "KCAO_2023062_350c_anneal_18thdiv-sli" .


###  :samplerepo/f96eccc9-7fd3-4d77-98ce-3554d1fd1b87
<:samplerepo/f96eccc9-7fd3-4d77-98ce-3554d1fd1b87> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample NaPtO3_20230807_1-stir"@en ;
                                                   dcterms:title "NaPtO3_20230807_1-stir" .


###  :samplerepo/0c0cbd2b-37a2-469a-96af-f8e06e543e90
<:samplerepo/0c0cbd2b-37a2-469a-96af-f8e06e543e90> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample KCAO_20230619-350C"@en ;
                                                   dcterms:title "KCAO_20230619-350C" .


###  :samplerepo/0ccebb57-801d-4db8-b8cd-4d8987854470
<:samplerepo/0ccebb57-801d-4db8-b8cd-4d8987854470> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample testSi_080823"@en ;
                                                   dcterms:title "testSi_080823" .


###  :samplerepo/0eeaf6e4-3ca3-4814-bc46-0c649569b403
<:samplerepo/0eeaf6e4-3ca3-4814-bc46-0c649569b403> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample NCTO_20230526-Srxchange"@en ;
                                                   dcterms:title "NCTO_20230526-Srxchange" .


###  :samplerepo/0f05d60d-5cbb-41d2-a34e-0142f5927e80
<:samplerepo/0f05d60d-5cbb-41d2-a34e-0142f5927e80> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample LiPtO3_EC"@en ;
                                                   dcterms:title "LiPtO3_EC" .


###  :samplerepo/000e73cc-e1af-4ee0-91a8-fd7aa738802b
<:samplerepo/000e73cc-e1af-4ee0-91a8-fd7aa738802b> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample BCAO_20230607_firstfire"@en ;
                                                   dcterms:title "BCAO_20230607_firstfire" .


###  :samplerepo/01dee095-5ba9-4518-abf0-504c26097188
<:samplerepo/01dee095-5ba9-4518-abf0-504c26097188> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample NCTO-2pt3"@en ;
                                                   dcterms:title "NCTO-2pt3" .


###  :samplerepo/0294af3d-7ef0-4970-9bde-c2824e4bb3b8
<:samplerepo/0294af3d-7ef0-4970-9bde-c2824e4bb3b8> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample KCAO_20230619-350C-1hr"@en ;
                                                   dcterms:title "KCAO_20230619-350C-1hr" .


###  :samplerepo/05f629ce-fd83-4216-a44a-07b77bbded00
<:samplerepo/05f629ce-fd83-4216-a44a-07b77bbded00> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample Na2PtO3_20230420_7"@en ;
                                                   dcterms:title "Na2PtO3_20230420_7" .


###  :samplerepo/1def0846-afeb-4d71-99f2-eab698bf4b04
<:samplerepo/1def0846-afeb-4d71-99f2-eab698bf4b04> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample NCSO_20230420_4"@en ;
                                                   dcterms:title "NCSO_20230420_4" .


###  :samplerepo/143723a2-b0df-444b-b49f-e3318926d539
<:samplerepo/143723a2-b0df-444b-b49f-e3318926d539> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample NCTO_5PCT_Mg_20230526"@en ;
                                                   dcterms:title "NCTO_5PCT_Mg_20230526" .


###  :samplerepo/153c5b0a-3980-40b1-b01e-3985d96233e0
<:samplerepo/153c5b0a-3980-40b1-b01e-3985d96233e0> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample silicon standard"@en ;
                                                   dcterms:title "silicon standard" .


###  :samplerepo/189b724f-8461-4b09-b4d1-b02f85f45162
<:samplerepo/189b724f-8461-4b09-b4d1-b02f85f45162> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample NCSO_20230420_3"@en ;
                                                   dcterms:title "NCSO_20230420_3" .


###  :samplerepo/2a804c14-6077-4bf2-8765-2672b7bc7bf5
<:samplerepo/2a804c14-6077-4bf2-8765-2672b7bc7bf5> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample test"@en ;
                                                   dcterms:title "test" .


###  :samplerepo/2c79fab1-edc3-4fe5-a4d8-d095d8825920
<:samplerepo/2c79fab1-edc3-4fe5-a4d8-d095d8825920> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample NCSO_20230420_5"@en ;
                                                   dcterms:title "NCSO_20230420_5" .


###  :samplerepo/2de65b30-9987-4a69-81ec-5d8427c64033
<:samplerepo/2de65b30-9987-4a69-81ec-5d8427c64033> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample NaPtO-900C-20230728"@en ;
                                                   dcterms:title "NaPtO-900C-20230728" .


###  :samplerepo/2007cd5c-4ccd-4fa4-b6e7-8dc465e83ee5
<:samplerepo/2007cd5c-4ccd-4fa4-b6e7-8dc465e83ee5> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample usersample1_20230615"@en ;
                                                   dcterms:title "usersample1_20230615" .


###  :samplerepo/234a71ad-4f7a-414e-9b18-5ac4ccc6c90f
<:samplerepo/234a71ad-4f7a-414e-9b18-5ac4ccc6c90f> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample NCSO_20230428_Zndope15"@en ;
                                                   dcterms:title "NCSO_20230428_Zndope15" .


###  :samplerepo/24cb06f2-f088-4295-80cf-9e0dbfd7d33c
<:samplerepo/24cb06f2-f088-4295-80cf-9e0dbfd7d33c> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample BaCo2TeO6_20230609"@en ;
                                                   dcterms:title "BaCo2TeO6_20230609" .


###  :samplerepo/26255dc2-6a89-4788-85ee-99681d921b8f
<:samplerepo/26255dc2-6a89-4788-85ee-99681d921b8f> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample NaPtO"@en ;
                                                   dcterms:title "NaPtO" .


###  :samplerepo/2782c2d3-a8b7-49ec-87a3-9530c26a6561
<:samplerepo/2782c2d3-a8b7-49ec-87a3-9530c26a6561> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample NCTO_20230526_MgCl2"@en ;
                                                   dcterms:title "NCTO_20230526_MgCl2" .


###  :samplerepo/29a6206e-bff6-4933-bc17-4a6fa4d26ab2
<:samplerepo/29a6206e-bff6-4933-bc17-4a6fa4d26ab2> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample NCTO_20230602_1-hexflux-ground"@en ;
                                                   dcterms:title "NCTO_20230602_1-hexflux-ground" .


###  :samplerepo/4ad603e1-078f-4e22-86bb-982cb47676bc
<:samplerepo/4ad603e1-078f-4e22-86bb-982cb47676bc> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample Na2PtO3_20230804_2-filtrate"@en ;
                                                   dcterms:title "Na2PtO3_20230804_2-filtrate" .


###  :samplerepo/4b055385-deb3-48ca-916b-3c6a426254d9
<:samplerepo/4b055385-deb3-48ca-916b-3c6a426254d9> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample Na2PtO3_20230804_2-bigbatch"@en ;
                                                   dcterms:title "Na2PtO3_20230804_2-bigbatch" .


###  :samplerepo/43a432ab-9c5b-413e-a2e4-140fc10dffc5
<:samplerepo/43a432ab-9c5b-413e-a2e4-140fc10dffc5> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample ncto 15pt mg"@en ;
                                                   dcterms:title "ncto 15pt mg" .


###  :samplerepo/4425d5f0-618e-4e2d-9011-e1a960340265
<:samplerepo/4425d5f0-618e-4e2d-9011-e1a960340265> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample NCTO_2pt7Na"@en ;
                                                   dcterms:title "NCTO_2pt7Na" .


###  :samplerepo/4644eac8-9cd4-466d-b0b2-0d8af983648f
<:samplerepo/4644eac8-9cd4-466d-b0b2-0d8af983648f> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample NaPtO3_20230806_2-nostir-350anneal"@en ;
                                                   dcterms:title "NaPtO3_20230806_2-nostir-350anneal" .


###  :samplerepo/5b0dfdad-a319-4848-9a37-24bfc7a408b2
<:samplerepo/5b0dfdad-a319-4848-9a37-24bfc7a408b2> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample NaPtO3_20230807_2-nostir"@en ;
                                                   dcterms:title "NaPtO3_20230807_2-nostir" .


###  :samplerepo/52810458-0189-4d37-9f87-8b855bb55839
<:samplerepo/52810458-0189-4d37-9f87-8b855bb55839> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample Na2PtO3_20230731"@en ;
                                                   dcterms:title "Na2PtO3_20230731" .


###  :samplerepo/643c69f7-9abd-4af1-9d6d-9f751206d5d6
<:samplerepo/643c69f7-9abd-4af1-9d6d-9f751206d5d6> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample NCTO_2pt8Na"@en ;
                                                   dcterms:title "NCTO_2pt8Na" .


###  :samplerepo/7c78330f-d49d-4acb-882b-db4d3a1f333f
<:samplerepo/7c78330f-d49d-4acb-882b-db4d3a1f333f> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample NCSO_20230420_6"@en ;
                                                   dcterms:title "NCSO_20230420_6" .


###  :samplerepo/7e008db5-48bb-49c6-9b74-e1f15444807c
<:samplerepo/7e008db5-48bb-49c6-9b74-e1f15444807c> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample KCAO_20230623_60HR-anneal"@en ;
                                                   dcterms:title "KCAO_20230623_60HR-anneal" .


###  :samplerepo/73f8848a-af45-4d93-b870-a59ec6d6ee90
<:samplerepo/73f8848a-af45-4d93-b870-a59ec6d6ee90> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample NCTO_20230602_2-monoflux-ground"@en ;
                                                   dcterms:title "NCTO_20230602_2-monoflux-ground" .


###  :samplerepo/8b44d713-5ac5-4afc-9496-24d91ad02044
<:samplerepo/8b44d713-5ac5-4afc-9496-24d91ad02044> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample NaPtO3_20230806_1-stir-350anneal"@en ;
                                                   dcterms:title "NaPtO3_20230806_1-stir-350anneal" .


###  :samplerepo/9606ad3f-70ce-4efb-8361-9c7401147cf2
<:samplerepo/9606ad3f-70ce-4efb-8361-9c7401147cf2> rdf:type owl:NamedIndividual ,
                                                            dcat:Dataset ;
                                                   dcterms:description "Data fo sample NCTO_30%Na_20230526"@en ;
                                                   dcterms:title "NCTO_30%Na_20230526" .


###  :xrdrepo/a0cf308e-21b2-4e45-8484-d16c61345445
<:xrdrepo/a0cf308e-21b2-4e45-8484-d16c61345445> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NCSO_20230420_5.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NCSO_20230420_5.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCSO_20230420_5.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCSO_20230420_5.xrdml> .


###  :xrdrepo/a23883cf-c21e-4b5c-9a40-35b03e3a668a
<:xrdrepo/a23883cf-c21e-4b5c-9a40-35b03e3a668a> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-test_1.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-test_1.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-test_1.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-test_1.xrdml> .


###  :xrdrepo/a2f31cca-a74f-4419-bfb0-981dcb5f4f4b
<:xrdrepo/a2f31cca-a74f-4419-bfb0-981dcb5f4f4b> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NaPtO3_2023052501_1.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NaPtO3_2023052501_1.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NaPtO3_2023052501_1.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NaPtO3_2023052501_1.xrdml> .


###  :xrdrepo/a71d61c2-d83e-4776-97eb-cc38c56c1f2d
<:xrdrepo/a71d61c2-d83e-4776-97eb-cc38c56c1f2d> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NCSO_20230420_3.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NCSO_20230420_3.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCSO_20230420_3.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCSO_20230420_3.xrdml> .


###  :xrdrepo/a7311374-82f7-436c-baf6-649003da3c74
<:xrdrepo/a7311374-82f7-436c-baf6-649003da3c74> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NCTO_30pctNa_20230526_1.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NCTO_30pctNa_20230526_1.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO_30pctNa_20230526_1.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO_30pctNa_20230526_1.xrdml> .


###  :xrdrepo/a7cf5e7d-9021-4273-a3ff-02c1bbf94ce2
<:xrdrepo/a7cf5e7d-9021-4273-a3ff-02c1bbf94ce2> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_350u%CC%A8C_1%20-%20Copy.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_350ųC_1 - Copy.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_350u%CC%A8C_1%20-%20Copy.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_350u%CC%A8C_1%20-%20Copy.xrdml> .


###  :xrdrepo/a83f5451-89e5-4bb5-8f19-2805b086944f
<:xrdrepo/a83f5451-89e5-4bb5-8f19-2805b086944f> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_450u%CC%A8C.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_450ųC.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_450u%CC%A8C.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_450u%CC%A8C.xrdml> .


###  :xrdrepo/aa0658aa-a211-4e7a-9f93-929359b22e0e
<:xrdrepo/aa0658aa-a211-4e7a-9f93-929359b22e0e> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_225u%CC%A8C_6%20-%20Copy.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_225ųC_6 - Copy.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_225u%CC%A8C_6%20-%20Copy.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_225u%CC%A8C_6%20-%20Copy.xrdml> .


###  :xrdrepo/aa4e389f-a456-4007-9dd1-6717f9d6d6db
<:xrdrepo/aa4e389f-a456-4007-9dd1-6717f9d6d6db> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NCTO_5pctNa_20230526_1.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NCTO_5pctNa_20230526_1.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO_5pctNa_20230526_1.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO_5pctNa_20230526_1.xrdml> .


###  :xrdrepo/aba42234-1adc-4ea1-85a5-9daddc61cf83
<:xrdrepo/aba42234-1adc-4ea1-85a5-9daddc61cf83> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_400u%CC%A8C_4.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_400ųC_4.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_400u%CC%A8C_4.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_400u%CC%A8C_4.xrdml> .


###  :xrdrepo/b0e0e29b-8d23-4358-81fa-9d23cceb09dd
<:xrdrepo/b0e0e29b-8d23-4358-81fa-9d23cceb09dd> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_375u%CC%A8C_1.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_375ųC_1.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_375u%CC%A8C_1.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_375u%CC%A8C_1.xrdml> .


###  :xrdrepo/b916aac2-4916-4132-9d25-a05ce0bce9f4
<:xrdrepo/b916aac2-4916-4132-9d25-a05ce0bce9f4> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_275u%CC%A8C%20-%20Copy.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_275ųC - Copy.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_275u%CC%A8C%20-%20Copy.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_275u%CC%A8C%20-%20Copy.xrdml> .


###  :xrdrepo/badbda96-efdb-4f96-8695-7b80d8027437
<:xrdrepo/badbda96-efdb-4f96-8695-7b80d8027437> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NaPtO3_2023052501.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NaPtO3_2023052501.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NaPtO3_2023052501.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NaPtO3_2023052501.xrdml> .


###  :xrdrepo/bcb2936b-eae4-4c4d-90f9-5ab911dec3e9
<:xrdrepo/bcb2936b-eae4-4c4d-90f9-5ab911dec3e9> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NCSO_20230420_6.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NCSO_20230420_6.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCSO_20230420_6.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCSO_20230420_6.xrdml> .


###  :xrdrepo/c142bc77-866c-447b-bf54-a6a49dddacfc
<:xrdrepo/c142bc77-866c-447b-bf54-a6a49dddacfc> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_225u%CC%A8C_4.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_225ųC_4.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_225u%CC%A8C_4.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_225u%CC%A8C_4.xrdml> .


###  :xrdrepo/c2f6088a-b032-4a0c-8a7f-290b418b7895
<:xrdrepo/c2f6088a-b032-4a0c-8a7f-290b418b7895> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_150u%CC%A8C_2.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_150ųC_2.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_150u%CC%A8C_2.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_150u%CC%A8C_2.xrdml> .


###  :xrdrepo/c402f996-1eb3-4296-ae21-54b95f8fda4a
<:xrdrepo/c402f996-1eb3-4296-ae21-54b95f8fda4a> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NCTO-2pt3.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NCTO-2pt3.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO-2pt3.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO-2pt3.xrdml> .


###  :xrdrepo/c92d8af3-f9e4-4405-95bf-11e276f0a7b0
<:xrdrepo/c92d8af3-f9e4-4405-95bf-11e276f0a7b0> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NCTO_2pt8Na_1.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NCTO_2pt8Na_1.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO_2pt8Na_1.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO_2pt8Na_1.xrdml> .


###  :xrdrepo/ccea9999-361e-4de5-b760-8c98b31b143b
<:xrdrepo/ccea9999-361e-4de5-b760-8c98b31b143b> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_175u%CC%A8C_6.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_175ųC_6.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_175u%CC%A8C_6.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_175u%CC%A8C_6.xrdml> .


###  :xrdrepo/cdd17f8f-d682-4cd8-a2c4-6d46246e790b
<:xrdrepo/cdd17f8f-d682-4cd8-a2c4-6d46246e790b> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NCSO_20230420_4.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NCSO_20230420_4.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCSO_20230420_4.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCSO_20230420_4.xrdml> .


###  :xrdrepo/cddf5357-caf6-42f0-a20d-24aa6a5f631d
<:xrdrepo/cddf5357-caf6-42f0-a20d-24aa6a5f631d> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NaPtO3_20230806_2-nostir-350anneal.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NaPtO3_20230806_2-nostir-350anneal.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NaPtO3_20230806_2-nostir-350anneal.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NaPtO3_20230806_2-nostir-350anneal.xrdml> .


###  :xrdrepo/cec48c8d-6917-4ab9-99f9-b096e1e5d913
<:xrdrepo/cec48c8d-6917-4ab9-99f9-b096e1e5d913> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-testSi4bh.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-testSi4bh.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-testSi4bh.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-testSi4bh.xrdml> .


###  :xrdrepo/d4e223c5-a8b0-4768-a682-e40a3f661482
<:xrdrepo/d4e223c5-a8b0-4768-a682-e40a3f661482> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NaPtO3_20230806_1-stir-350anneal.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NaPtO3_20230806_1-stir-350anneal.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NaPtO3_20230806_1-stir-350anneal.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NaPtO3_20230806_1-stir-350anneal.xrdml> .


###  :xrdrepo/d7b9681b-a093-40cc-8930-ee6eca75a544
<:xrdrepo/d7b9681b-a093-40cc-8930-ee6eca75a544> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NAPtO3-20230613.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NAPtO3-20230613.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NAPtO3-20230613.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NAPtO3-20230613.xrdml> .


###  :xrdrepo/d8c22ab8-8b42-4c90-bcff-46127d1412bc
<:xrdrepo/d8c22ab8-8b42-4c90-bcff-46127d1412bc> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_200u%CC%A8C_3.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_200ųC_3.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_200u%CC%A8C_3.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_200u%CC%A8C_3.xrdml> .


###  :xrdrepo/db3b360b-e6fe-4511-9dd0-b7379fc63dbc
<:xrdrepo/db3b360b-e6fe-4511-9dd0-b7379fc63dbc> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_250u%CC%A8C_3.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_250ųC_3.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_250u%CC%A8C_3.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_250u%CC%A8C_3.xrdml> .


###  :xrdrepo/deea4dec-a36d-4502-9f1f-af85c282053f
<:xrdrepo/deea4dec-a36d-4502-9f1f-af85c282053f> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NCTO_2pt7Na.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NCTO_2pt7Na.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO_2pt7Na.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO_2pt7Na.xrdml> .


###  :xrdrepo/e2323e89-76ca-42ad-b1a2-11ba0e5a9295
<:xrdrepo/e2323e89-76ca-42ad-b1a2-11ba0e5a9295> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-Na2PtO3_20230804_2-bigbatch.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-Na2PtO3_20230804_2-bigbatch.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-Na2PtO3_20230804_2-bigbatch.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-Na2PtO3_20230804_2-bigbatch.xrdml> .


###  :xrdrepo/e2676812-9890-4b58-803a-6def50475e34
<:xrdrepo/e2676812-9890-4b58-803a-6def50475e34> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_350u%CC%A8C_4.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_350ųC_4.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_350u%CC%A8C_4.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_350u%CC%A8C_4.xrdml> .


###  :xrdrepo/e2d718fa-0014-4dfe-acce-e5a125edcf3c
<:xrdrepo/e2d718fa-0014-4dfe-acce-e5a125edcf3c> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_425u%CC%A8C_4.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_425ųC_4.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_425u%CC%A8C_4.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_425u%CC%A8C_4.xrdml> .


###  :xrdrepo/e5f854a8-77d7-49fe-ab3d-b0cd04caa5d8
<:xrdrepo/e5f854a8-77d7-49fe-ab3d-b0cd04caa5d8> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-KCAO_20230619_4-refinedata.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-KCAO_20230619_4-refinedata.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-KCAO_20230619_4-refinedata.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-KCAO_20230619_4-refinedata.xrdml> .


###  :xrdrepo/e602b969-812a-4420-92f2-c9feec1626c8
<:xrdrepo/e602b969-812a-4420-92f2-c9feec1626c8> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_400u%CC%A8C_2.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_400ųC_2.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_400u%CC%A8C_2.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_400u%CC%A8C_2.xrdml> .


###  :xrdrepo/e60da0d3-0d6d-4ff4-b5bc-41039ac4062d
<:xrdrepo/e60da0d3-0d6d-4ff4-b5bc-41039ac4062d> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_425u%CC%A8C_1.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_425ųC_1.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_425u%CC%A8C_1.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_425u%CC%A8C_1.xrdml> .


###  :xrdrepo/e766d581-8477-4758-8991-74a95f81c255
<:xrdrepo/e766d581-8477-4758-8991-74a95f81c255> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NaPtO3_20230619_350anneal-1hr.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NaPtO3_20230619_350anneal-1hr.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NaPtO3_20230619_350anneal-1hr.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NaPtO3_20230619_350anneal-1hr.xrdml> .


###  :xrdrepo/ed9b83ae-49d0-4b59-84a0-a618a5a93204
<:xrdrepo/ed9b83ae-49d0-4b59-84a0-a618a5a93204> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_100u%CC%A8C.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_100ųC.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_100u%CC%A8C.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_100u%CC%A8C.xrdml> .


###  :xrdrepo/ee874479-24f1-40c2-a04d-88a90a9b0bdc
<:xrdrepo/ee874479-24f1-40c2-a04d-88a90a9b0bdc> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_400u%CC%A8C_1%20-%20Copy.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_400ųC_1 - Copy.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_400u%CC%A8C_1%20-%20Copy.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_400u%CC%A8C_1%20-%20Copy.xrdml> .


###  :xrdrepo/ee8868f6-4be0-4392-bf70-6c4473061ff1
<:xrdrepo/ee8868f6-4be0-4392-bf70-6c4473061ff1> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NCTO_5PCT_Mg_20230526.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NCTO_5PCT_Mg_20230526.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO_5PCT_Mg_20230526.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO_5PCT_Mg_20230526.xrdml> .


###  :xrdrepo/eeed129e-0225-423b-bc1a-04c765821967
<:xrdrepo/eeed129e-0225-423b-bc1a-04c765821967> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_250u%CC%A8C_4.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_250ųC_4.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_250u%CC%A8C_4.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_250u%CC%A8C_4.xrdml> .


###  :xrdrepo/f052f4d1-c05d-49c8-ae8e-66d6a55648de
<:xrdrepo/f052f4d1-c05d-49c8-ae8e-66d6a55648de> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_225u%CC%A8C_1.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_225ųC_1.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_225u%CC%A8C_1.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_225u%CC%A8C_1.xrdml> .


###  :xrdrepo/f1cb20c1-290d-4ef6-a1f9-46da50fec5cf
<:xrdrepo/f1cb20c1-290d-4ef6-a1f9-46da50fec5cf> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_250u%CC%A8C_5%20-%20Copy.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_250ųC_5 - Copy.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_250u%CC%A8C_5%20-%20Copy.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_250u%CC%A8C_5%20-%20Copy.xrdml> .


###  :xrdrepo/f29397ca-f67e-4fa9-8267-d73cb8be0fbf
<:xrdrepo/f29397ca-f67e-4fa9-8267-d73cb8be0fbf> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_175u%CC%A8C_4.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_175ųC_4.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_175u%CC%A8C_4.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_175u%CC%A8C_4.xrdml> .


###  :xrdrepo/f3b8ec5d-5608-4540-af47-bdaa0f7b68c2
<:xrdrepo/f3b8ec5d-5608-4540-af47-bdaa0f7b68c2> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_350u%CC%A8C_3.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_350ųC_3.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_350u%CC%A8C_3.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_350u%CC%A8C_3.xrdml> .


###  :xrdrepo/f4b4155d-8143-4292-982b-87ec4c403f30
<:xrdrepo/f4b4155d-8143-4292-982b-87ec4c403f30> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_325u%CC%A8C_1.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_325ųC_1.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_325u%CC%A8C_1.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_325u%CC%A8C_1.xrdml> .


###  :xrdrepo/f6c3e82d-4f4f-40f6-95be-1d584e852090
<:xrdrepo/f6c3e82d-4f4f-40f6-95be-1d584e852090> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_200u%CC%A8C_1.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_200ųC_1.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_200u%CC%A8C_1.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_200u%CC%A8C_1.xrdml> .


###  :xrdrepo/f7028d7f-e370-4811-8801-25e05af1d44f
<:xrdrepo/f7028d7f-e370-4811-8801-25e05af1d44f> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_350u%CC%A8C_1.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_350ųC_1.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_350u%CC%A8C_1.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_350u%CC%A8C_1.xrdml> .


###  :xrdrepo/fa604af1-7584-4aad-b32b-3e1c30e18bef
<:xrdrepo/fa604af1-7584-4aad-b32b-3e1c30e18bef> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_27u%CC%A8C.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_27ųC.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_27u%CC%A8C.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_27u%CC%A8C.xrdml> .


###  :xrdrepo/faa878f3-6584-4913-9a91-d73e5bb68fe5
<:xrdrepo/faa878f3-6584-4913-9a91-d73e5bb68fe5> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_375u%CC%A8C_1%20-%20Copy.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_375ųC_1 - Copy.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_375u%CC%A8C_1%20-%20Copy.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_375u%CC%A8C_1%20-%20Copy.xrdml> .


###  :xrdrepo/fd3a959f-fb87-4021-bd59-5634eaa4a349
<:xrdrepo/fd3a959f-fb87-4021-bd59-5634eaa4a349> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_375u%CC%A8C_4.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_375ųC_4.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_375u%CC%A8C_4.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_375u%CC%A8C_4.xrdml> .


###  :xrdrepo/0e070b4c-e446-4477-841b-1c49165be651
<:xrdrepo/0e070b4c-e446-4477-841b-1c49165be651> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_150u%CC%A8C_1.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_150ųC_1.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_150u%CC%A8C_1.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_150u%CC%A8C_1.xrdml> .


###  :xrdrepo/040e8c41-ff70-444d-8640-ee092bcb726e
<:xrdrepo/040e8c41-ff70-444d-8640-ee092bcb726e> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_200u%CC%A8C_6.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_200ųC_6.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_200u%CC%A8C_6.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_200u%CC%A8C_6.xrdml> .


###  :xrdrepo/06f68adf-cc80-414b-b1d3-6dfc00c7fee4
<:xrdrepo/06f68adf-cc80-414b-b1d3-6dfc00c7fee4> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_425u%CC%A8C_2.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_425ųC_2.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_425u%CC%A8C_2.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_425u%CC%A8C_2.xrdml> .


###  :xrdrepo/1b4cc81e-36e5-4c72-80de-71753e790586
<:xrdrepo/1b4cc81e-36e5-4c72-80de-71753e790586> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for SIL-silicon_standard_1deg_div.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "SIL-silicon_standard_1deg_div.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/SIL-silicon_standard_1deg_div.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/SIL-silicon_standard_1deg_div.xrdml> .


###  :xrdrepo/1bc96de5-c06c-4287-84f4-a8bf0a9b3fe7
<:xrdrepo/1bc96de5-c06c-4287-84f4-a8bf0a9b3fe7> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_250u%CC%A8C_2.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_250ųC_2.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_250u%CC%A8C_2.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_250u%CC%A8C_2.xrdml> .


###  :xrdrepo/1bef9f68-0b7b-4824-8623-c72bba47c8a8
<:xrdrepo/1bef9f68-0b7b-4824-8623-c72bba47c8a8> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NCSO_20230526_ZnCl2.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NCSO_20230526_ZnCl2.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCSO_20230526_ZnCl2.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCSO_20230526_ZnCl2.xrdml> .


###  :xrdrepo/1c41670c-8286-401f-bdeb-c0f6e5ddea54
<:xrdrepo/1c41670c-8286-401f-bdeb-c0f6e5ddea54> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_200u%CC%A8C_5.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_200ųC_5.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_200u%CC%A8C_5.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_200u%CC%A8C_5.xrdml> .


###  :xrdrepo/1ee59fff-d67f-4c95-9ec5-0c8c62f8c4aa
<:xrdrepo/1ee59fff-d67f-4c95-9ec5-0c8c62f8c4aa> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-usersample1_20230615.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-usersample1_20230615.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-usersample1_20230615.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-usersample1_20230615.xrdml> .


###  :xrdrepo/10f528dd-e36a-4e04-9b7d-4676c3a48392
<:xrdrepo/10f528dd-e36a-4e04-9b7d-4676c3a48392> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_400u%CC%A8C_3.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_400ųC_3.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_400u%CC%A8C_3.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_400u%CC%A8C_3.xrdml> .


###  :xrdrepo/11c74375-74fc-44db-89f7-d2c94629c94a
<:xrdrepo/11c74375-74fc-44db-89f7-d2c94629c94a> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_25u%CC%A8C_1.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_25ųC_1.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_25u%CC%A8C_1.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_25u%CC%A8C_1.xrdml> .


###  :xrdrepo/12236e4a-ff76-4cd2-8c86-7d9ab52905ce
<:xrdrepo/12236e4a-ff76-4cd2-8c86-7d9ab52905ce> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-Na2PtO3_20230804_2-filtrate.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-Na2PtO3_20230804_2-filtrate.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-Na2PtO3_20230804_2-filtrate.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-Na2PtO3_20230804_2-filtrate.xrdml> .


###  :xrdrepo/147a1d90-c636-4517-b666-ea3ee949d212
<:xrdrepo/147a1d90-c636-4517-b666-ea3ee949d212> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_400u%CC%A8C_1.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_400ųC_1.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_400u%CC%A8C_1.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_400u%CC%A8C_1.xrdml> .


###  :xrdrepo/1623c72d-9930-44b8-9373-68403084c97d
<:xrdrepo/1623c72d-9930-44b8-9373-68403084c97d> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_25u%CC%A8C_2.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_25ųC_2.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_25u%CC%A8C_2.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_25u%CC%A8C_2.xrdml> .


###  :xrdrepo/18af847c-397c-42c0-b4ef-5472134b440f
<:xrdrepo/18af847c-397c-42c0-b4ef-5472134b440f> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_300u%CC%A8C.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_300ųC.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_300u%CC%A8C.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_300u%CC%A8C.xrdml> .


###  :xrdrepo/18380a1f-6202-44f1-99ac-5458b828c77d
<:xrdrepo/18380a1f-6202-44f1-99ac-5458b828c77d> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_450u%CC%A8C%20-%20Copy.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_450ųC - Copy.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_450u%CC%A8C%20-%20Copy.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_450u%CC%A8C%20-%20Copy.xrdml> .


###  :xrdrepo/194de352-87f5-49d1-8623-605f59b4b88e
<:xrdrepo/194de352-87f5-49d1-8623-605f59b4b88e> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NaPtO3_20230807_1-stir.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NaPtO3_20230807_1-stir.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NaPtO3_20230807_1-stir.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NaPtO3_20230807_1-stir.xrdml> .


###  :xrdrepo/2a068cfb-09f1-4f5a-acd8-dfbc2eea1a2a
<:xrdrepo/2a068cfb-09f1-4f5a-acd8-dfbc2eea1a2a> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_275u%CC%A8C.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_275ųC.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_275u%CC%A8C.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_275u%CC%A8C.xrdml> .


###  :xrdrepo/2b1c4110-0886-4d63-a294-04f88d8a4aab
<:xrdrepo/2b1c4110-0886-4d63-a294-04f88d8a4aab> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_200u%CC%A8C_2.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_200ųC_2.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_200u%CC%A8C_2.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_200u%CC%A8C_2.xrdml> .


###  :xrdrepo/2c0bb623-fc59-4925-b247-22be624ee08d
<:xrdrepo/2c0bb623-fc59-4925-b247-22be624ee08d> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_225u%CC%A8C_2.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_225ųC_2.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_225u%CC%A8C_2.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_225u%CC%A8C_2.xrdml> .


###  :xrdrepo/2e2c2f45-8fc9-4679-a976-086cff098068
<:xrdrepo/2e2c2f45-8fc9-4679-a976-086cff098068> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_325u%CC%A8C_2.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_325ųC_2.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_325u%CC%A8C_2.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_325u%CC%A8C_2.xrdml> .


###  :xrdrepo/20ccc597-8cfb-43b7-9c35-6e546e18cc80
<:xrdrepo/20ccc597-8cfb-43b7-9c35-6e546e18cc80> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_200u%CC%A8C_6%20-%20Copy.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_200ųC_6 - Copy.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_200u%CC%A8C_6%20-%20Copy.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_200u%CC%A8C_6%20-%20Copy.xrdml> .


###  :xrdrepo/204ab510-045e-4e87-8e8c-fbc4a6fa50f5
<:xrdrepo/204ab510-045e-4e87-8e8c-fbc4a6fa50f5> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-Na2PtO3_20230731.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-Na2PtO3_20230731.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-Na2PtO3_20230731.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-Na2PtO3_20230731.xrdml> .


###  :xrdrepo/24414095-7455-44d3-bfe2-5e587dc67016
<:xrdrepo/24414095-7455-44d3-bfe2-5e587dc67016> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-testSi_080823.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-testSi_080823.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-testSi_080823.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-testSi_080823.xrdml> .


###  :xrdrepo/3d98cff9-4897-4b87-99e7-48e3cc2ac703
<:xrdrepo/3d98cff9-4897-4b87-99e7-48e3cc2ac703> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_325u%CC%A8C_3.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_325ųC_3.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_325u%CC%A8C_3.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_325u%CC%A8C_3.xrdml> .


###  :xrdrepo/3e69a0e1-ca5c-4e69-af98-3cbd33be2374
<:xrdrepo/3e69a0e1-ca5c-4e69-af98-3cbd33be2374> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_425u%CC%A8C_1%20-%20Copy.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_425ųC_1 - Copy.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_425u%CC%A8C_1%20-%20Copy.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_425u%CC%A8C_1%20-%20Copy.xrdml> .


###  :xrdrepo/31da7ba7-cec1-4756-bc9a-9769bf6848a6
<:xrdrepo/31da7ba7-cec1-4756-bc9a-9769bf6848a6> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_25u%CC%A8C_3.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_25ųC_3.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_25u%CC%A8C_3.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_25u%CC%A8C_3.xrdml> .


###  :xrdrepo/35603dd1-ed1e-4773-a1d1-cbb746eb841c
<:xrdrepo/35603dd1-ed1e-4773-a1d1-cbb746eb841c> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_25u%CC%A8C_1.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_25ųC_1.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_25u%CC%A8C_1.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_25u%CC%A8C_1.xrdml> .


###  :xrdrepo/38b7ded8-4271-4a7b-869a-90a58ba90eb0
<:xrdrepo/38b7ded8-4271-4a7b-869a-90a58ba90eb0> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_25u%CC%A8C_4.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_25ųC_4.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_25u%CC%A8C_4.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_25u%CC%A8C_4.xrdml> .


###  :xrdrepo/3960412c-93bc-426d-9aae-f055a14458b7
<:xrdrepo/3960412c-93bc-426d-9aae-f055a14458b7> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NaPtO-900C-20230728.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NaPtO-900C-20230728.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NaPtO-900C-20230728.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NaPtO-900C-20230728.xrdml> .


###  :xrdrepo/4b2ace70-9fc6-4901-99b9-ac36b4f5088c
<:xrdrepo/4b2ace70-9fc6-4901-99b9-ac36b4f5088c> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_250u%CC%A8C_6.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_250ųC_6.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_250u%CC%A8C_6.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_250u%CC%A8C_6.xrdml> .


###  :xrdrepo/4f6cec58-e2a4-4dc7-8f86-629f6b37b353
<:xrdrepo/4f6cec58-e2a4-4dc7-8f86-629f6b37b353> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_375u%CC%A8C_3.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_375ųC_3.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_375u%CC%A8C_3.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_375u%CC%A8C_3.xrdml> .


###  :xrdrepo/43a6c53b-29f4-4ac0-aed0-ae4c15be5e03
<:xrdrepo/43a6c53b-29f4-4ac0-aed0-ae4c15be5e03> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_150u%CC%A8C_4.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_150ųC_4.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_150u%CC%A8C_4.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_150u%CC%A8C_4.xrdml> .


###  :xrdrepo/43aa29f7-e414-4f9e-8f6c-6d7287daa9d7
<:xrdrepo/43aa29f7-e414-4f9e-8f6c-6d7287daa9d7> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NCTO_20230602_2-monoflux-ground.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NCTO_20230602_2-monoflux-ground.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO_20230602_2-monoflux-ground.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO_20230602_2-monoflux-ground.xrdml> .


###  :xrdrepo/44cb4c87-221d-434e-8423-9e4a5d18a399
<:xrdrepo/44cb4c87-221d-434e-8423-9e4a5d18a399> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-BaCo2TeO6_20230609.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-BaCo2TeO6_20230609.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-BaCo2TeO6_20230609.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-BaCo2TeO6_20230609.xrdml> .


###  :xrdrepo/45f6df86-a727-4cbe-959f-79184dd0c932
<:xrdrepo/45f6df86-a727-4cbe-959f-79184dd0c932> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_250u%CC%A8C_5.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_250ųC_5.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_250u%CC%A8C_5.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_250u%CC%A8C_5.xrdml> .


###  :xrdrepo/455517b0-f41b-4a66-a316-cbfa8f4406f5
<:xrdrepo/455517b0-f41b-4a66-a316-cbfa8f4406f5> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_300u%CC%A8C%20-%20Copy.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_300ųC - Copy.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_300u%CC%A8C%20-%20Copy.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_300u%CC%A8C%20-%20Copy.xrdml> .


###  :xrdrepo/46ad0957-3757-45b9-96bc-954ef8e519c9
<:xrdrepo/46ad0957-3757-45b9-96bc-954ef8e519c9> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_225u%CC%A8C_5.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_225ųC_5.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_225u%CC%A8C_5.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_225u%CC%A8C_5.xrdml> .


###  :xrdrepo/5b8f39a0-4ddb-4a04-b793-0f555b251143
<:xrdrepo/5b8f39a0-4ddb-4a04-b793-0f555b251143> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NCTO_30pctNa_20230526.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NCTO_30pctNa_20230526.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO_30pctNa_20230526.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO_30pctNa_20230526.xrdml> .


###  :xrdrepo/5e6eb5c0-2cba-4159-a974-523e3667790a
<:xrdrepo/5e6eb5c0-2cba-4159-a974-523e3667790a> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_175u%CC%A8C_2.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_175ųC_2.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_175u%CC%A8C_2.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_175u%CC%A8C_2.xrdml> .


###  :xrdrepo/53c7f322-995b-4f38-a0a6-653eeb150d54
<:xrdrepo/53c7f322-995b-4f38-a0a6-653eeb150d54> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_150u%CC%A8C_5.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_150ųC_5.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_150u%CC%A8C_5.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_150u%CC%A8C_5.xrdml> .


###  :xrdrepo/53dac591-3f12-44bb-889a-9e7ccb9422ba
<:xrdrepo/53dac591-3f12-44bb-889a-9e7ccb9422ba> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_200u%CC%A8C_4.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_200ųC_4.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_200u%CC%A8C_4.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_200u%CC%A8C_4.xrdml> .


###  :xrdrepo/569a9be8-9ef0-45f8-9286-077ee5c285f5
<:xrdrepo/569a9be8-9ef0-45f8-9286-077ee5c285f5> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-KCAO_2023062_350c_anneal_18thdiv-sli.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-KCAO_2023062_350c_anneal_18thdiv-sli.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-KCAO_2023062_350c_anneal_18thdiv-sli.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-KCAO_2023062_350c_anneal_18thdiv-sli.xrdml> .


###  :xrdrepo/6b3ac057-51a2-45ca-8a74-b86cdf076431
<:xrdrepo/6b3ac057-51a2-45ca-8a74-b86cdf076431> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_225u%CC%A8C_3.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_225ųC_3.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_225u%CC%A8C_3.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_225u%CC%A8C_3.xrdml> .


###  :xrdrepo/639c7654-40ea-49d2-a0b3-0ecc0691e00e
<:xrdrepo/639c7654-40ea-49d2-a0b3-0ecc0691e00e> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-SCIO_20230526.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-SCIO_20230526.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-SCIO_20230526.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-SCIO_20230526.xrdml> .


###  :xrdrepo/66ab2dc2-cba1-4def-8942-e5f7da546d4f
<:xrdrepo/66ab2dc2-cba1-4def-8942-e5f7da546d4f> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_425u%CC%A8C_3.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_425ųC_3.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_425u%CC%A8C_3.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_425u%CC%A8C_3.xrdml> .


###  :xrdrepo/6667a355-f1d8-4c5c-9721-abbade38eaa7
<:xrdrepo/6667a355-f1d8-4c5c-9721-abbade38eaa7> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NCSO_20230428_Zndope15.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NCSO_20230428_Zndope15.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCSO_20230428_Zndope15.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCSO_20230428_Zndope15.xrdml> .


###  :xrdrepo/674240bd-7168-41b7-a376-d51d97471049
<:xrdrepo/674240bd-7168-41b7-a376-d51d97471049> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-KCAO_20230623_60HR-anneal.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-KCAO_20230623_60HR-anneal.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-KCAO_20230623_60HR-anneal.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-KCAO_20230623_60HR-anneal.xrdml> .


###  :xrdrepo/69d50da9-fa96-4de2-b74c-66fdf950339b
<:xrdrepo/69d50da9-fa96-4de2-b74c-66fdf950339b> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-BCAO_20230607_firstfire.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-BCAO_20230607_firstfire.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-BCAO_20230607_firstfire.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-BCAO_20230607_firstfire.xrdml> .


###  :xrdrepo/697f83cf-f88c-4c18-b4dd-280f66614109
<:xrdrepo/697f83cf-f88c-4c18-b4dd-280f66614109> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_250u%CC%A8C_1.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_250ųC_1.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_250u%CC%A8C_1.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_250u%CC%A8C_1.xrdml> .


###  :xrdrepo/702d7964-24a8-4de2-8b23-8139ac7ebc99
<:xrdrepo/702d7964-24a8-4de2-8b23-8139ac7ebc99> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_350u%CC%A8C_2.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_350ųC_2.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_350u%CC%A8C_2.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_350u%CC%A8C_2.xrdml> .


###  :xrdrepo/72660ce5-d066-4c08-b0e2-c932346c00e4
<:xrdrepo/72660ce5-d066-4c08-b0e2-c932346c00e4> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-LiPtO3_EC.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-LiPtO3_EC.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-LiPtO3_EC.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-LiPtO3_EC.xrdml> .


###  :xrdrepo/73674264-b206-4679-9c84-cd1ae598db2a
<:xrdrepo/73674264-b206-4679-9c84-cd1ae598db2a> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_150u%CC%A8C_3.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_150ųC_3.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_150u%CC%A8C_3.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_150u%CC%A8C_3.xrdml> .


###  :xrdrepo/76fc7c67-5d73-4160-a9c7-71953d50ea13
<:xrdrepo/76fc7c67-5d73-4160-a9c7-71953d50ea13> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NaPtO3_20230619_350anneal.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NaPtO3_20230619_350anneal.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NaPtO3_20230619_350anneal.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NaPtO3_20230619_350anneal.xrdml> .


###  :xrdrepo/78732bc4-00e9-4a32-b010-7b479201fef6
<:xrdrepo/78732bc4-00e9-4a32-b010-7b479201fef6> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_325u%CC%A8C_1%20-%20Copy.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_325ųC_1 - Copy.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_325u%CC%A8C_1%20-%20Copy.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_325u%CC%A8C_1%20-%20Copy.xrdml> .


###  :xrdrepo/7918c016-c8de-464b-89af-dcd3ba3b51f1
<:xrdrepo/7918c016-c8de-464b-89af-dcd3ba3b51f1> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NaPtO3_20230807_2-nostir.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NaPtO3_20230807_2-nostir.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NaPtO3_20230807_2-nostir.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NaPtO3_20230807_2-nostir.xrdml> .


###  :xrdrepo/792be6e9-b7d7-4d97-b8bc-213f9e222a63
<:xrdrepo/792be6e9-b7d7-4d97-b8bc-213f9e222a63> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-KCAO_20230619-350C-1hr.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-KCAO_20230619-350C-1hr.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-KCAO_20230619-350C-1hr.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-KCAO_20230619-350C-1hr.xrdml> .


###  :xrdrepo/8cdb7b2d-65f3-4f19-b945-30aff19b1450
<:xrdrepo/8cdb7b2d-65f3-4f19-b945-30aff19b1450> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-Na2PtO3_20230420_7.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-Na2PtO3_20230420_7.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-Na2PtO3_20230420_7.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-Na2PtO3_20230420_7.xrdml> .


###  :xrdrepo/8e6709ca-e19b-4742-a38b-bc0e62a47d9b
<:xrdrepo/8e6709ca-e19b-4742-a38b-bc0e62a47d9b> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NCTO_20230526_MgCl2.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NCTO_20230526_MgCl2.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO_20230526_MgCl2.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO_20230526_MgCl2.xrdml> .


###  :xrdrepo/81ca0f6e-4763-422f-971e-b3b6eb885aab
<:xrdrepo/81ca0f6e-4763-422f-971e-b3b6eb885aab> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_225u%CC%A8C_6.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_225ųC_6.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_225u%CC%A8C_6.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_225u%CC%A8C_6.xrdml> .


###  :xrdrepo/83322a54-8871-4b1f-9788-b7f4340f7531
<:xrdrepo/83322a54-8871-4b1f-9788-b7f4340f7531> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_175u%CC%A8C_5.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_175ųC_5.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_175u%CC%A8C_5.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_175u%CC%A8C_5.xrdml> .


###  :xrdrepo/8339764d-e2f0-478a-8a97-473c2cbc4765
<:xrdrepo/8339764d-e2f0-478a-8a97-473c2cbc4765> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NCTO_5PCT_Mg_20230526_1.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NCTO_5PCT_Mg_20230526_1.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO_5PCT_Mg_20230526_1.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO_5PCT_Mg_20230526_1.xrdml> .


###  :xrdrepo/858674e6-89d9-48a6-887c-777badd8764e
<:xrdrepo/858674e6-89d9-48a6-887c-777badd8764e> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NCTO_15pctMg20230526_1.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NCTO_15pctMg20230526_1.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO_15pctMg20230526_1.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO_15pctMg20230526_1.xrdml> .


###  :xrdrepo/86c0dd76-3bee-4ee7-aae4-b79ed1ce44a6
<:xrdrepo/86c0dd76-3bee-4ee7-aae4-b79ed1ce44a6> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_300u%CC%A8C.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_300ųC.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_300u%CC%A8C.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_300u%CC%A8C.xrdml> .


###  :xrdrepo/860c7857-2cd2-455b-9f01-3ec524af427c
<:xrdrepo/860c7857-2cd2-455b-9f01-3ec524af427c> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_175u%CC%A8C_1.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_175ųC_1.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_175u%CC%A8C_1.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_175u%CC%A8C_1.xrdml> .


###  :xrdrepo/861f7f98-59ae-4da2-af6d-ca46ef711901
<:xrdrepo/861f7f98-59ae-4da2-af6d-ca46ef711901> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NCTO_20230602_1-hexflux-ground.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NCTO_20230602_1-hexflux-ground.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO_20230602_1-hexflux-ground.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO_20230602_1-hexflux-ground.xrdml> .


###  :xrdrepo/8937a1ca-9b6f-4573-970c-5dd30058ee05
<:xrdrepo/8937a1ca-9b6f-4573-970c-5dd30058ee05> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_325u%CC%A8C_4.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_325ųC_4.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_325u%CC%A8C_4.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_325u%CC%A8C_4.xrdml> .


###  :xrdrepo/9e45b9c8-cc00-4bc2-924c-c492589419f4
<:xrdrepo/9e45b9c8-cc00-4bc2-924c-c492589419f4> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_375u%CC%A8C_2.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_375ųC_2.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_375u%CC%A8C_2.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_375u%CC%A8C_2.xrdml> .


###  :xrdrepo/9092533d-0676-467f-a95f-2ca798b6b668
<:xrdrepo/9092533d-0676-467f-a95f-2ca798b6b668> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NCTO_2pt8Na.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NCTO_2pt8Na.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO_2pt8Na.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO_2pt8Na.xrdml> .


###  :xrdrepo/96ac7c7a-08a1-4ffa-96a5-bcf78c372e76
<:xrdrepo/96ac7c7a-08a1-4ffa-96a5-bcf78c372e76> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-KCAO_20230619-350C.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-KCAO_20230619-350C.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-KCAO_20230619-350C.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-KCAO_20230619-350C.xrdml> .


###  :xrdrepo/97abdb25-9464-4553-a99e-f9f7e8d250e6
<:xrdrepo/97abdb25-9464-4553-a99e-f9f7e8d250e6> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NCTO_5pctNa_20230526.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NCTO_5pctNa_20230526.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO_5pctNa_20230526.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO_5pctNa_20230526.xrdml> .


###  :xrdrepo/97f9c6f5-1b78-4659-8ab6-bd27dc8bc554
<:xrdrepo/97f9c6f5-1b78-4659-8ab6-bd27dc8bc554> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_reheat_over300C_500u%CC%A8C.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_reheat_over300C_500ųC.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_500u%CC%A8C.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_reheat_over300C_500u%CC%A8C.xrdml> .


###  :xrdrepo/98f52908-d1a0-4d29-9c4e-a9594a0529ba
<:xrdrepo/98f52908-d1a0-4d29-9c4e-a9594a0529ba> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_150u%CC%A8C_6.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_150ųC_6.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_150u%CC%A8C_6.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_150u%CC%A8C_6.xrdml> .


###  :xrdrepo/982592ca-9141-40d4-b260-3d3c79327fee
<:xrdrepo/982592ca-9141-40d4-b260-3d3c79327fee> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NCTO_20230526-Srxchange.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NCTO_20230526-Srxchange.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO_20230526-Srxchange.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO_20230526-Srxchange.xrdml> .


###  :xrdrepo/987d151e-2165-4eaa-83a6-6eb08473072f
<:xrdrepo/987d151e-2165-4eaa-83a6-6eb08473072f> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for RAW-NCTO_15pctMg20230526.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "RAW-NCTO_15pctMg20230526.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO_15pctMg20230526.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/RAW-NCTO_15pctMg20230526.xrdml> .


###  :xrdrepo/997c35f0-9b25-4aa7-8b79-d782d569ae68
<:xrdrepo/997c35f0-9b25-4aa7-8b79-d782d569ae68> rdf:type owl:NamedIndividual ,
                                                         dcat:Distribution ;
                                                dcterms:description "Distribution for XRK900_10-90_026step_30min_NaPtO_175u%CC%A8C_3.xrdml"@en ;
                                                dcterms:publisher <http://data.acl.intersect.ornl.gov> ;
                                                dcterms:title "XRK900_10-90_026step_30min_NaPtO_175ųC_3.xrdml" ;
                                                dcat:accessURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_175u%CC%A8C_3.xrdml> ;
                                                dcat:downloadURL <http://acl.intersect.ornl.gov/xrd-repository/XRK900_10-90_026step_30min_NaPtO_175u%CC%A8C_3.xrdml> .

###  http://acl.intersect.ornl.gov/dms/drs/xrdrepo
:xrdrepo rdf:type owl:NamedIndividual ,
                  dcat:Catalog ;
         dcterms:description "Data Catalog for the XRD file repository"@en ;
         dcterms:title "XRD Repository"@en ;
         dcat:distribution <:xrdrepo/a0cf308e-21b2-4e45-8484-d16c61345445> ,
                           <:xrdrepo/a23883cf-c21e-4b5c-9a40-35b03e3a668a> ,
                           <:xrdrepo/a2f31cca-a74f-4419-bfb0-981dcb5f4f4b> ,
                           <:xrdrepo/a71d61c2-d83e-4776-97eb-cc38c56c1f2d> ,
                           <:xrdrepo/a7311374-82f7-436c-baf6-649003da3c74> ,
                           <:xrdrepo/a7cf5e7d-9021-4273-a3ff-02c1bbf94ce2> ,
                           <:xrdrepo/a83f5451-89e5-4bb5-8f19-2805b086944f> ,
                           <:xrdrepo/aa0658aa-a211-4e7a-9f93-929359b22e0e> ,
                           <:xrdrepo/aa4e389f-a456-4007-9dd1-6717f9d6d6db> ,
                           <:xrdrepo/aba42234-1adc-4ea1-85a5-9daddc61cf83> ,
                           <:xrdrepo/b0e0e29b-8d23-4358-81fa-9d23cceb09dd> ,
                           <:xrdrepo/b916aac2-4916-4132-9d25-a05ce0bce9f4> ,
                           <:xrdrepo/badbda96-efdb-4f96-8695-7b80d8027437> ,
                           <:xrdrepo/bcb2936b-eae4-4c4d-90f9-5ab911dec3e9> ,
                           <:xrdrepo/c142bc77-866c-447b-bf54-a6a49dddacfc> ,
                           <:xrdrepo/c2f6088a-b032-4a0c-8a7f-290b418b7895> ,
                           <:xrdrepo/c402f996-1eb3-4296-ae21-54b95f8fda4a> ,
                           <:xrdrepo/c92d8af3-f9e4-4405-95bf-11e276f0a7b0> ,
                           <:xrdrepo/ccea9999-361e-4de5-b760-8c98b31b143b> ,
                           <:xrdrepo/cdd17f8f-d682-4cd8-a2c4-6d46246e790b> ,
                           <:xrdrepo/cddf5357-caf6-42f0-a20d-24aa6a5f631d> ,
                           <:xrdrepo/cec48c8d-6917-4ab9-99f9-b096e1e5d913> ,
                           <:xrdrepo/d4e223c5-a8b0-4768-a682-e40a3f661482> ,
                           <:xrdrepo/d7b9681b-a093-40cc-8930-ee6eca75a544> ,
                           <:xrdrepo/d8c22ab8-8b42-4c90-bcff-46127d1412bc> ,
                           <:xrdrepo/db3b360b-e6fe-4511-9dd0-b7379fc63dbc> ,
                           <:xrdrepo/deea4dec-a36d-4502-9f1f-af85c282053f> ,
                           <:xrdrepo/e2323e89-76ca-42ad-b1a2-11ba0e5a9295> ,
                           <:xrdrepo/e2676812-9890-4b58-803a-6def50475e34> ,
                           <:xrdrepo/e2d718fa-0014-4dfe-acce-e5a125edcf3c> ,
                           <:xrdrepo/e5f854a8-77d7-49fe-ab3d-b0cd04caa5d8> ,
                           <:xrdrepo/e602b969-812a-4420-92f2-c9feec1626c8> ,
                           <:xrdrepo/e60da0d3-0d6d-4ff4-b5bc-41039ac4062d> ,
                           <:xrdrepo/e766d581-8477-4758-8991-74a95f81c255> ,
                           <:xrdrepo/ed9b83ae-49d0-4b59-84a0-a618a5a93204> ,
                           <:xrdrepo/ee874479-24f1-40c2-a04d-88a90a9b0bdc> ,
                           <:xrdrepo/ee8868f6-4be0-4392-bf70-6c4473061ff1> ,
                           <:xrdrepo/eeed129e-0225-423b-bc1a-04c765821967> ,
                           <:xrdrepo/f052f4d1-c05d-49c8-ae8e-66d6a55648de> ,
                           <:xrdrepo/f1cb20c1-290d-4ef6-a1f9-46da50fec5cf> ,
                           <:xrdrepo/f29397ca-f67e-4fa9-8267-d73cb8be0fbf> ,
                           <:xrdrepo/f3b8ec5d-5608-4540-af47-bdaa0f7b68c2> ,
                           <:xrdrepo/f4b4155d-8143-4292-982b-87ec4c403f30> ,
                           <:xrdrepo/f6c3e82d-4f4f-40f6-95be-1d584e852090> ,
                           <:xrdrepo/f7028d7f-e370-4811-8801-25e05af1d44f> ,
                           <:xrdrepo/fa604af1-7584-4aad-b32b-3e1c30e18bef> ,
                           <:xrdrepo/faa878f3-6584-4913-9a91-d73e5bb68fe5> ,
                           <:xrdrepo/fd3a959f-fb87-4021-bd59-5634eaa4a349> ,
                           <:xrdrepo/0e070b4c-e446-4477-841b-1c49165be651> ,
                           <:xrdrepo/040e8c41-ff70-444d-8640-ee092bcb726e> ,
                           <:xrdrepo/06f68adf-cc80-414b-b1d3-6dfc00c7fee4> ,
                           <:xrdrepo/1b4cc81e-36e5-4c72-80de-71753e790586> ,
                           <:xrdrepo/1bc96de5-c06c-4287-84f4-a8bf0a9b3fe7> ,
                           <:xrdrepo/1bef9f68-0b7b-4824-8623-c72bba47c8a8> ,
                           <:xrdrepo/1c41670c-8286-401f-bdeb-c0f6e5ddea54> ,
                           <:xrdrepo/1ee59fff-d67f-4c95-9ec5-0c8c62f8c4aa> ,
                           <:xrdrepo/10f528dd-e36a-4e04-9b7d-4676c3a48392> ,
                           <:xrdrepo/11c74375-74fc-44db-89f7-d2c94629c94a> ,
                           <:xrdrepo/12236e4a-ff76-4cd2-8c86-7d9ab52905ce> ,
                           <:xrdrepo/147a1d90-c636-4517-b666-ea3ee949d212> ,
                           <:xrdrepo/1623c72d-9930-44b8-9373-68403084c97d> ,
                           <:xrdrepo/18af847c-397c-42c0-b4ef-5472134b440f> ,
                           <:xrdrepo/18380a1f-6202-44f1-99ac-5458b828c77d> ,
                           <:xrdrepo/194de352-87f5-49d1-8623-605f59b4b88e> ,
                           <:xrdrepo/2a068cfb-09f1-4f5a-acd8-dfbc2eea1a2a> ,
                           <:xrdrepo/2b1c4110-0886-4d63-a294-04f88d8a4aab> ,
                           <:xrdrepo/2c0bb623-fc59-4925-b247-22be624ee08d> ,
                           <:xrdrepo/2e2c2f45-8fc9-4679-a976-086cff098068> ,
                           <:xrdrepo/20ccc597-8cfb-43b7-9c35-6e546e18cc80> ,
                           <:xrdrepo/204ab510-045e-4e87-8e8c-fbc4a6fa50f5> ,
                           <:xrdrepo/24414095-7455-44d3-bfe2-5e587dc67016> ,
                           <:xrdrepo/3d98cff9-4897-4b87-99e7-48e3cc2ac703> ,
                           <:xrdrepo/3e69a0e1-ca5c-4e69-af98-3cbd33be2374> ,
                           <:xrdrepo/31da7ba7-cec1-4756-bc9a-9769bf6848a6> ,
                           <:xrdrepo/35603dd1-ed1e-4773-a1d1-cbb746eb841c> ,
                           <:xrdrepo/38b7ded8-4271-4a7b-869a-90a58ba90eb0> ,
                           <:xrdrepo/3960412c-93bc-426d-9aae-f055a14458b7> ,
                           <:xrdrepo/4b2ace70-9fc6-4901-99b9-ac36b4f5088c> ,
                           <:xrdrepo/4f6cec58-e2a4-4dc7-8f86-629f6b37b353> ,
                           <:xrdrepo/43a6c53b-29f4-4ac0-aed0-ae4c15be5e03> ,
                           <:xrdrepo/43aa29f7-e414-4f9e-8f6c-6d7287daa9d7> ,
                           <:xrdrepo/44cb4c87-221d-434e-8423-9e4a5d18a399> ,
                           <:xrdrepo/45f6df86-a727-4cbe-959f-79184dd0c932> ,
                           <:xrdrepo/455517b0-f41b-4a66-a316-cbfa8f4406f5> ,
                           <:xrdrepo/46ad0957-3757-45b9-96bc-954ef8e519c9> ,
                           <:xrdrepo/5b8f39a0-4ddb-4a04-b793-0f555b251143> ,
                           <:xrdrepo/5e6eb5c0-2cba-4159-a974-523e3667790a> ,
                           <:xrdrepo/53c7f322-995b-4f38-a0a6-653eeb150d54> ,
                           <:xrdrepo/53dac591-3f12-44bb-889a-9e7ccb9422ba> ,
                           <:xrdrepo/569a9be8-9ef0-45f8-9286-077ee5c285f5> ,
                           <:xrdrepo/6b3ac057-51a2-45ca-8a74-b86cdf076431> ,
                           <:xrdrepo/639c7654-40ea-49d2-a0b3-0ecc0691e00e> ,
                           <:xrdrepo/66ab2dc2-cba1-4def-8942-e5f7da546d4f> ,
                           <:xrdrepo/6667a355-f1d8-4c5c-9721-abbade38eaa7> ,
                           <:xrdrepo/674240bd-7168-41b7-a376-d51d97471049> ,
                           <:xrdrepo/69d50da9-fa96-4de2-b74c-66fdf950339b> ,
                           <:xrdrepo/697f83cf-f88c-4c18-b4dd-280f66614109> ,
                           <:xrdrepo/702d7964-24a8-4de2-8b23-8139ac7ebc99> ,
                           <:xrdrepo/72660ce5-d066-4c08-b0e2-c932346c00e4> ,
                           <:xrdrepo/73674264-b206-4679-9c84-cd1ae598db2a> ,
                           <:xrdrepo/76fc7c67-5d73-4160-a9c7-71953d50ea13> ,
                           <:xrdrepo/78732bc4-00e9-4a32-b010-7b479201fef6> ,
                           <:xrdrepo/7918c016-c8de-464b-89af-dcd3ba3b51f1> ,
                           <:xrdrepo/792be6e9-b7d7-4d97-b8bc-213f9e222a63> ,
                           <:xrdrepo/8cdb7b2d-65f3-4f19-b945-30aff19b1450> ,
                           <:xrdrepo/8e6709ca-e19b-4742-a38b-bc0e62a47d9b> ,
                           <:xrdrepo/81ca0f6e-4763-422f-971e-b3b6eb885aab> ,
                           <:xrdrepo/83322a54-8871-4b1f-9788-b7f4340f7531> ,
                           <:xrdrepo/8339764d-e2f0-478a-8a97-473c2cbc4765> ,
                           <:xrdrepo/858674e6-89d9-48a6-887c-777badd8764e> ,
                           <:xrdrepo/86c0dd76-3bee-4ee7-aae4-b79ed1ce44a6> ,
                           <:xrdrepo/860c7857-2cd2-455b-9f01-3ec524af427c> ,
                           <:xrdrepo/861f7f98-59ae-4da2-af6d-ca46ef711901> ,
                           <:xrdrepo/8937a1ca-9b6f-4573-970c-5dd30058ee05> ,
                           <:xrdrepo/9e45b9c8-cc00-4bc2-924c-c492589419f4> ,
                           <:xrdrepo/9092533d-0676-467f-a95f-2ca798b6b668> ,
                           <:xrdrepo/96ac7c7a-08a1-4ffa-96a5-bcf78c372e76> ,
                           <:xrdrepo/97abdb25-9464-4553-a99e-f9f7e8d250e6> ,
                           <:xrdrepo/97f9c6f5-1b78-4659-8ab6-bd27dc8bc554> ,
                           <:xrdrepo/98f52908-d1a0-4d29-9c4e-a9594a0529ba> ,
                           <:xrdrepo/982592ca-9141-40d4-b260-3d3c79327fee> ,
                           <:xrdrepo/987d151e-2165-4eaa-83a6-6eb08473072f> ,
                           <:xrdrepo/997c35f0-9b25-4aa7-8b79-d782d569ae68> .


###  Generated by the OWL API (version 4.5.29.2024-05-13T12:11:03Z) https://github.com/owlcs/owlapi
`,bt={title:"SDL/DCAT/Catalog View",component:g,parameters:{}},V=new File([q],"repositories.ttl",{type:"text/turtle"}),y=w.fromFile("http://acl.intersect.ornl.gov/dms/drs/",V),C={args:{catalogPromise:y}},G=(o,t=1e3)=>new Promise((i,s)=>setTimeout(()=>s(new p(o)),t)),x={args:{catalogPromise:new Promise(()=>{})}},u={args:{catalogPromise:y}},p={args:{catalogPromise:G("Oops, something went wrong!",500)}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    catalogPromise: catalog
  }
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    // unresolved promise: stays in loading state
    catalogPromise: new Promise(() => {})
  }
}`,...x.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    catalogPromise: catalog
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    catalogPromise: rejectAfter("Oops, something went wrong!", 500)
  }
}`,...p.parameters?.docs?.source}}};const ft=["Default","Loading","Success","Error"];export{C as Default,p as Error,x as Loading,u as Success,ft as __namedExportsOrder,bt as default};
