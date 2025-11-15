const presets = require('./presets.json');

export default {
  getSimData(){
    return {
      rpm: Math.floor(1000 + Math.random()*8000),
      tps: Math.floor(Math.random()*100),
      afr: (10 + Math.random()*6).toFixed(1)
    };
  },
  getPresets(){ return presets; }
}
