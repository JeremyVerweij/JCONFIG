JCONFIG.configBase = class {
    constructor(CONFIG_NAME){
        this.CONFIG_NAME = CONFIG_NAME;
    }

    parse(...key){
        LOG.error("JCONFIG: no parser specified");
    }

    get(){
        LOG.error("JCONFIG: no get function specified");
    }

    set(){
        LOG.error("JCONFIG: no set function specified");
    }

    toString(){
        return JSON.stringify(this);
    }
}

window.dispatchEvent(JLIB.common.scriptLoaded)
