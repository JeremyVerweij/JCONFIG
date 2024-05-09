var JCONFIG = {};
JLIB.extensions.JCONFIG = JCONFIG;

var JCONFIG_SRC = [
    {src: "configBase", requirements: [], enabled: () => true},
    {src: "configs", requirements: ["configBase"], enabled: () => true},
];

JLIB_LOADER.LOAD_EXTENSION_SRC_LIST(JCONFIG_SRC, "JCONFIG");