JCONFIG.configs = {};

JCONFIG.addNewConfig = function(name, config){
    if(config instanceof JCONFIG.configBase)
        JCONFIG.configs[name] = config;
}

window.dispatchEvent(JLIB.common.scriptLoaded)
