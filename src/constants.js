import pkg from '../package.json' with { type: "json" };
export const VERSION = pkg.version;

export const APP_SIZE = 1000;

export const MOUSE_CLICK_TIME = 350;    // milliseconds
export const MOUSE_DOUBLE_TIME = 500;   // milliseconds
export const MOUSE_SLOP = 2;            // pixels
export const OUTLINE_THICKNESS = 2;     // pixels

export const APP_EVENTS = [
    'init',
    'update',
    'destroy',
    'keydown',
    'keyup',
    'pointerdown',
    'pointerup',
    'pointermove',
];

export const APP_ORIENTATION = {
    PORTRAIT:       'portrait',
    LANDSCAPE:      'landscape',
};

export const STAGE_TYPES = {
    STAGE_2D:        'Stage2D',
    STAGE_3D:        'Stage3D',
    STAGE_UI:        'StageUI',
};

export const WORLD_TYPES = {
    WORLD_2D:        'World2D',
    WORLD_3D:        'World3D',
    WORLD_UI:        'WorldUI',
};

export const SCRIPT_FORMAT = {
    JAVASCRIPT:     'javascript',
    PYTHON:         'python',
};
