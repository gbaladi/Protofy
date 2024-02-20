"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9786],{49786:function(e,t,a){a.r(t);var n=a(52322),i=a(52398);let r=[{number:1,side:"left",name:"3V3",type:"P",analog:!1,description:"3V3 Power supply",maxVoltage:3.3,rtc:!1},{number:2,side:"left",name:"EN",type:"I",analog:!1,description:"CHIP_PU, RESET",maxVoltage:3.3,rtc:!1},{number:3,side:"left",name:"36",type:"I",analog:!0,description:"GPIO36, ADC1_CH0, S_VP",maxVoltage:3.3,rtc:!0},{number:4,side:"left",name:"39",type:"I",analog:!0,description:"GPIO39, ADC1_CH3, S_VN",maxVoltage:3.3,rtc:!0},{number:5,side:"left",name:"34",type:"I",analog:!0,description:"GPIO34, ADC1_CH6, VDET_1",maxVoltage:3.3,rtc:!0},{number:6,side:"left",name:"35",type:"I",analog:!0,description:"GPIO35, ADC1_CH7, VDET_2",maxVoltage:3.3,rtc:!0},{number:7,side:"left",name:"32",type:"IO",analog:!0,description:"GPIO32, ADC1_CH4, TOUCH_CH9, XTAL_32K_P",maxVoltage:3.3,rtc:!0},{number:8,side:"left",name:"33",type:"IO",analog:!0,description:"GPIO33, ADC1_CH5, TOUCH_CH8, XTAL_32K_N",maxVoltage:3.3,rtc:!0},{number:9,side:"left",name:"25",type:"IO",analog:!0,description:"GPIO25, ADC1_CH8, DAC_1",maxVoltage:3.3,rtc:!0},{number:10,side:"left",name:"26",type:"IO",analog:!0,description:"GPIO26, ADC2_CH9, DAC_2",maxVoltage:3.3,rtc:!0},{number:11,side:"left",name:"27",type:"IO",analog:!0,description:"GPIO27, ADC2_CH7, TOUCH_CH7",maxVoltage:3.3,rtc:!0},{number:12,side:"left",name:"14",type:"IO",analog:!0,description:"GPIO14, ADC2_CH6, TOUCH_CH6, MTMS",maxVoltage:3.3,rtc:!0},{number:13,side:"left",name:"12",type:"IO",analog:!0,description:"GPIO12, ADC2_CH5, TOUCH_CH5, MTDI",maxVoltage:3.3,rtc:!0},{number:14,side:"left",name:"GND",type:"G",analog:!1,description:"Ground",maxVoltage:0,rtc:!1},{number:15,side:"left",name:"13",type:"IO",analog:!0,description:"GPIO13, ADC2_CH4, TOUCH_CH4, MTCK",maxVoltage:3.3,rtc:!0},{number:16,side:"left",name:"9",type:"IO",analog:!1,description:"GPIO9, D2",maxVoltage:3.3,rtc:!1},{number:17,side:"left",name:"10",type:"IO",analog:!1,description:"GPIO10, D3",maxVoltage:3.3,rtc:!1},{number:18,side:"left",name:"11",type:"IO",analog:!1,description:"GPIO11, CMD",maxVoltage:3.3,rtc:!1},{number:19,side:"left",name:"5V",type:"P",analog:!1,description:"5V Power supply",maxVoltage:5,rtc:!1},{number:1,side:"right",name:"GND",type:"G",analog:!1,description:"Ground",maxVoltage:0,rtc:!1},{number:2,side:"right",name:"23",type:"IO",analog:!1,description:"GPIO23",maxVoltage:3.3,rtc:!1},{number:3,side:"right",name:"22",type:"IO",analog:!1,description:"GPIO22",maxVoltage:3.3,rtc:!1},{number:4,side:"right",name:"TX",type:"IO",analog:!1,description:"GPIO1, U0TXD",maxVoltage:3.3,rtc:!1},{number:5,side:"right",name:"RX",type:"IO",analog:!1,description:"GPIO3, U0RXD",maxVoltage:3.3,rtc:!1},{number:6,side:"right",name:"21",type:"IO",analog:!1,description:"GPIO21",maxVoltage:3.3,rtc:!1},{number:7,side:"right",name:"GND",type:"GND",analog:!1,description:"Ground",maxVoltage:0,rtc:!1},{number:8,side:"right",name:"19",type:"IO",analog:!1,description:"GPIO19",maxVoltage:3.3,rtc:!1},{number:9,side:"right",name:"18",type:"IO",analog:!1,description:"GPIO18",maxVoltage:3.3,rtc:!1},{number:10,side:"right",name:"5",type:"IO",analog:!1,description:"GPIO5",maxVoltage:3.3,rtc:!1},{number:11,side:"right",name:"17",type:"IO",analog:!1,description:"GPIO17",maxVoltage:3.3,rtc:!1},{number:12,side:"right",name:"16",type:"IO",analog:!1,description:"GPIO16",maxVoltage:3.3,rtc:!1},{number:13,side:"right",name:"4",type:"IO",analog:!0,description:"GPIO4, ADC2_CH0, TOUCH_CH0",maxVoltage:3.3,rtc:!0},{number:14,side:"right",name:"0",type:"IO",analog:!0,description:"GPIO0, ADC2_CH1, TOUCH_CH1, Boot",maxVoltage:3.3,rtc:!0},{number:15,side:"right",name:"2",type:"IO",analog:!0,description:"GPIO2, ADC2_CH2, TOUCH_CH2",maxVoltage:3.3,rtc:!0},{number:16,side:"right",name:"15",type:"IO",analog:!0,description:"GPIO15, ADC2_CH3, TOUCH_CH3, MTDO",maxVoltage:3.3,rtc:!0},{number:17,side:"right",name:"8",type:"IO",analog:!1,description:"GPIO8, D1",maxVoltage:3.3,rtc:!1},{number:18,side:"right",name:"7",type:"IO",analog:!1,description:"GPIO7, D0",maxVoltage:3.3,rtc:!1},{number:19,side:"right",name:"CLK",type:"IO",analog:!1,description:"GPIO6, CLK",maxVoltage:3.3,rtc:!1}];t.default=e=>{let{node:t={},nodeData:a={},children:o}=e,m=[{label:"Run duration",field:"param1",type:"input",static:!0},{label:"Sleep duration",field:"param2",type:"input",static:!0},{label:"Wakeup Pin",static:!0,field:"param3",type:"select",data:r.filter(e=>e.type.includes("I")&&!["EN","36","39","CLK"].includes(e.name)&&!0==e.rtc).map(e=>e.name)}];return(0,n.jsx)(i.Node,{node:t,isPreview:!t.id,title:"Deep Sleep",color:"#FFDF82",id:t.id,skipCustom:!0,disableInput:!0,disableOutput:!0,children:(0,n.jsx)(i.NodeParams,{id:t.id,params:m})})}}}]);