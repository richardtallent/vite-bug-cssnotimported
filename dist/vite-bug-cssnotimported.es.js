import{openBlock as t,createBlock as o,renderSlot as e}from"vue";const n={name:"RetroButton",emits:["click"],methods:{onClick(t){this.$emit("click",t)}}};n.render=function(n,r,c,i,l,u){return t(),o("button",{class:"retro-button",onClick:r[1]||(r[1]=(...t)=>u.onClick&&u.onClick(...t))},[e(n.$slots,"default")])};var r={RetroButton:n};export default r;