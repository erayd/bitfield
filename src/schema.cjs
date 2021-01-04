"use strict";
exports.property = validate20;
const schema22 = {"$schema":"http://json-schema.org/draft-07/schema#","$id":"property","definitions":{"property":{"type":"object","required":["offset","size"],"properties":{"offset":{"type":"integer","minimum":0},"size":{"type":"integer","minimum":0,"default":1}}}},"$ref":"#/definitions/property"};
const schema23 = {"type":"object","required":["offset","size"],"properties":{"offset":{"type":"integer","minimum":0},"size":{"type":"integer","minimum":0,"default":1}}};

function validate20(data, {dataPath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="property" */;
let vErrors = null;
let errors = 0;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.size === undefined){
data.size = 1;
}
let missing0;
if((data.offset === undefined && (missing0 = "offset")) || (data.size === undefined && (missing0 = "size"))){
validate20.errors = [{keyword:"required",dataPath,schemaPath:"#/definitions/property/required",params:{missingProperty: missing0},message:"should have required property '"+missing0+"'"}];
return false;
}
else {
if(data.offset !== undefined){
let data0 = data.offset;
const _errs1 = errors;
if(!(((typeof data0 == "number") && (!(data0 % 1) && !isNaN(data0))) && (isFinite(data0)))){
let dataType0 = typeof data0;
let coerced0 = undefined;
if(!(coerced0 !== undefined)){
if(dataType0 === "boolean" || data0 === null
              || (dataType0 === "string" && data0 && data0 == +data0 && !(data0 % 1))){
coerced0 = +data0;
}
else {
validate20.errors = [{keyword:"type",dataPath:dataPath+"/offset",schemaPath:"#/definitions/property/properties/offset/type",params:{type: "integer"},message:"should be integer"}];
return false;
}
}
if(coerced0 !== undefined){
data0 = coerced0;
if(data !== undefined){
data["offset"] = coerced0;
}
}
}
if((typeof data0 == "number") && (isFinite(data0))){
if(data0 < 0 || isNaN(data0)){
validate20.errors = [{keyword:"minimum",dataPath:dataPath+"/offset",schemaPath:"#/definitions/property/properties/offset/minimum",params:{comparison: ">=", limit: 0},message:"should be >= 0"}];
return false;
}
}
var valid1 = _errs1 === errors;
}
else {
var valid1 = true;
}
if(valid1){
let data1 = data.size;
const _errs2 = errors;
if(!(((typeof data1 == "number") && (!(data1 % 1) && !isNaN(data1))) && (isFinite(data1)))){
let dataType1 = typeof data1;
let coerced1 = undefined;
if(!(coerced1 !== undefined)){
if(dataType1 === "boolean" || data1 === null
              || (dataType1 === "string" && data1 && data1 == +data1 && !(data1 % 1))){
coerced1 = +data1;
}
else {
validate20.errors = [{keyword:"type",dataPath:dataPath+"/size",schemaPath:"#/definitions/property/properties/size/type",params:{type: "integer"},message:"should be integer"}];
return false;
}
}
if(coerced1 !== undefined){
data1 = coerced1;
if(data !== undefined){
data["size"] = coerced1;
}
}
}
if((typeof data1 == "number") && (isFinite(data1))){
if(data1 < 0 || isNaN(data1)){
validate20.errors = [{keyword:"minimum",dataPath:dataPath+"/size",schemaPath:"#/definitions/property/properties/size/minimum",params:{comparison: ">=", limit: 0},message:"should be >= 0"}];
return false;
}
}
var valid1 = _errs2 === errors;
}
}
}
else {
validate20.errors = [{keyword:"type",dataPath,schemaPath:"#/definitions/property/type",params:{type: "object"},message:"should be object"}];
return false;
}
validate20.errors = vErrors;
return errors === 0;
}

exports.init = validate21;
const schema24 = {"$schema":"http://json-schema.org/draft-07/schema#","$id":"init","type":"object","additionalProperties":{"$ref":"property#/definitions/property"}};

function validate21(data, {dataPath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="init" */;
let vErrors = null;
let errors = 0;
if(data && typeof data == "object" && !Array.isArray(data)){
for(const key0 in data){
let data0 = data[key0];
const _errs1 = errors;
if(data0 && typeof data0 == "object" && !Array.isArray(data0)){
if(data0.size === undefined){
data0.size = 1;
}
let missing0;
if((data0.offset === undefined && (missing0 = "offset")) || (data0.size === undefined && (missing0 = "size"))){
validate21.errors = [{keyword:"required",dataPath:dataPath+"/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),schemaPath:"property#/definitions/property/required",params:{missingProperty: missing0},message:"should have required property '"+missing0+"'"}];
return false;
}
else {
if(data0.offset !== undefined){
let data1 = data0.offset;
const _errs3 = errors;
if(!(((typeof data1 == "number") && (!(data1 % 1) && !isNaN(data1))) && (isFinite(data1)))){
let dataType0 = typeof data1;
let coerced0 = undefined;
if(!(coerced0 !== undefined)){
if(dataType0 === "boolean" || data1 === null
              || (dataType0 === "string" && data1 && data1 == +data1 && !(data1 % 1))){
coerced0 = +data1;
}
else {
validate21.errors = [{keyword:"type",dataPath:dataPath+"/" + key0.replace(/~/g, "~0").replace(/\//g, "~1")+"/offset",schemaPath:"property#/definitions/property/properties/offset/type",params:{type: "integer"},message:"should be integer"}];
return false;
}
}
if(coerced0 !== undefined){
data1 = coerced0;
if(data0 !== undefined){
data0["offset"] = coerced0;
}
}
}
if((typeof data1 == "number") && (isFinite(data1))){
if(data1 < 0 || isNaN(data1)){
validate21.errors = [{keyword:"minimum",dataPath:dataPath+"/" + key0.replace(/~/g, "~0").replace(/\//g, "~1")+"/offset",schemaPath:"property#/definitions/property/properties/offset/minimum",params:{comparison: ">=", limit: 0},message:"should be >= 0"}];
return false;
}
}
var valid2 = _errs3 === errors;
}
else {
var valid2 = true;
}
if(valid2){
let data2 = data0.size;
const _errs4 = errors;
if(!(((typeof data2 == "number") && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2)))){
let dataType1 = typeof data2;
let coerced1 = undefined;
if(!(coerced1 !== undefined)){
if(dataType1 === "boolean" || data2 === null
              || (dataType1 === "string" && data2 && data2 == +data2 && !(data2 % 1))){
coerced1 = +data2;
}
else {
validate21.errors = [{keyword:"type",dataPath:dataPath+"/" + key0.replace(/~/g, "~0").replace(/\//g, "~1")+"/size",schemaPath:"property#/definitions/property/properties/size/type",params:{type: "integer"},message:"should be integer"}];
return false;
}
}
if(coerced1 !== undefined){
data2 = coerced1;
if(data0 !== undefined){
data0["size"] = coerced1;
}
}
}
if((typeof data2 == "number") && (isFinite(data2))){
if(data2 < 0 || isNaN(data2)){
validate21.errors = [{keyword:"minimum",dataPath:dataPath+"/" + key0.replace(/~/g, "~0").replace(/\//g, "~1")+"/size",schemaPath:"property#/definitions/property/properties/size/minimum",params:{comparison: ">=", limit: 0},message:"should be >= 0"}];
return false;
}
}
var valid2 = _errs4 === errors;
}
}
}
else {
validate21.errors = [{keyword:"type",dataPath:dataPath+"/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),schemaPath:"property#/definitions/property/type",params:{type: "object"},message:"should be object"}];
return false;
}
var valid0 = _errs1 === errors;
if(!valid0){
break;
}
}
}
else {
validate21.errors = [{keyword:"type",dataPath,schemaPath:"#/type",params:{type: "object"},message:"should be object"}];
return false;
}
validate21.errors = vErrors;
return errors === 0;
}
