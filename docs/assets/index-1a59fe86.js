(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const u=t=>{if(!t)throw new Error("No ha seleccionado una fecha válida.");const n=new Date,a=new Date(t).setHours(24);if(a>n)throw new Error("La fecha seleccionada debe ser menor a la fecha actual.");const o=n-a,e=Math.floor(o/(1e3*60*60*24*365)),r=Math.floor(o%(1e3*60*60*24*365)/(1e3*60*60*24*30)),s=Math.floor(o%(1e3*60*60*24*30)/(1e3*60*60*24));return{years:e,months:r,days:s}},c=document.getElementById("bornDate"),f=document.getElementById("btnCalculate"),i=document.getElementById("message"),y=document.getElementById("years"),m=document.getElementById("months"),h=document.getElementById("days"),l=()=>{try{const t=u(c.value);y.innerText=t.years,m.innerText=t.months,h.innerText=t.days,d(i)}catch(t){d(i,t.message)}},d=(t,n="no-error")=>{n!=="no-error"?(t.style.display="block",t.innerText=n):t.style.display="none"};document.addEventListener("DOMContentLoaded",()=>{c.value=new Date().toISOString().split("T")[0],c.max=c.value});c.addEventListener("keypress",t=>{t.key==="Enter"&&l()});f.addEventListener("click",()=>{l()});
