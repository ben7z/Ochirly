/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_4',
                            type: 'image',
                            rect: ['0px', '0px', '640px', '1040px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"4.jpg",'0px','0px']
                        },
                        {
                            id: 'light',
                            symbolName: 'light',
                            type: 'rect',
                            rect: ['-481', '0', '1195', '615', 'auto', 'auto']
                        },
                        {
                            id: 'title',
                            type: 'image',
                            rect: ['133px', '187px', '373px', '133px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"title.png",'0px','0px'],
                            transform: [[],[],[],['1.5','1.5']]
                        },
                        {
                            id: '_4_text',
                            type: 'image',
                            rect: ['157px', '400px', '326px', '181px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"4_text.png",'0px','0px']
                        },
                        {
                            id: '_4_text2',
                            type: 'image',
                            rect: ['181px', '819px', '278px', '51px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"4_text2.png",'0px','0px']
                        },
                        {
                            id: '_4_text1',
                            type: 'image',
                            rect: ['181px', '731px', '278px', '51px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"4_text1.png",'0px','0px']
                        },
                        {
                            id: 'focus',
                            symbolName: 'focus',
                            type: 'rect',
                            rect: ['156', '855', '36', '36', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '640px', '1136px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid77",
                            "scaleX",
                            0,
                            750,
                            "easeInQuad",
                            "${title}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid76",
                            "opacity",
                            0,
                            750,
                            "easeInQuad",
                            "${title}",
                            '0',
                            '1'
                        ],
                        [
                            "eid83",
                            "top",
                            750,
                            1000,
                            "easeInQuad",
                            "${_4_text}",
                            '400px',
                            '381px'
                        ],
                        [
                            "eid92",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${_4_text2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid87",
                            "opacity",
                            750,
                            1000,
                            "easeInQuad",
                            "${_4_text2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid93",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${_4_text}",
                            '0',
                            '0'
                        ],
                        [
                            "eid82",
                            "opacity",
                            750,
                            1000,
                            "easeInQuad",
                            "${_4_text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid91",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${_4_text1}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid86",
                            "opacity",
                            750,
                            1000,
                            "easeInQuad",
                            "${_4_text1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid78",
                            "scaleY",
                            0,
                            750,
                            "easeInQuad",
                            "${title}",
                            '1.5',
                            '1'
                        ]
                    ]
                }
            },
            "focus": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '36px', '36px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.2', '1.2']],
                            id: 'down_left',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/focus.png', '0px', '0px']
                        },
                        {
                            rect: ['289px', '0', '36px', '36px', 'auto', 'auto'],
                            transform: [[], ['-90'], [], ['1.2', '1.2']],
                            id: 'down_right',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/focus.png', '0px', '0px']
                        },
                        {
                            rect: ['289px', '-134px', '36px', '36px', 'auto', 'auto'],
                            transform: [[], ['180'], [], ['1.2', '1.2']],
                            id: 'up_right',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/focus.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '-134px', '36px', '36px', 'auto', 'auto'],
                            transform: [[], ['90'], [], ['1.2', '1.2']],
                            id: 'up_left',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/focus.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '36px', '36px']
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: true,
                    data: [
                        [
                            "eid63",
                            "scaleX",
                            0,
                            750,
                            "linear",
                            "${down_left}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid44",
                            "scaleX",
                            750,
                            1000,
                            "linear",
                            "${down_left}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid69",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${down_left}",
                            '0',
                            '1'
                        ],
                        [
                            "eid58",
                            "opacity",
                            750,
                            1000,
                            "linear",
                            "${down_left}",
                            '1',
                            '0.1'
                        ],
                        [
                            "eid70",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${up_right}",
                            '0',
                            '1'
                        ],
                        [
                            "eid55",
                            "opacity",
                            750,
                            1000,
                            "linear",
                            "${up_right}",
                            '1',
                            '0.1'
                        ],
                        [
                            "eid68",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${down_right}",
                            '0',
                            '1'
                        ],
                        [
                            "eid57",
                            "opacity",
                            750,
                            1000,
                            "linear",
                            "${down_right}",
                            '1',
                            '0.1'
                        ],
                        [
                            "eid59",
                            "scaleX",
                            0,
                            750,
                            "linear",
                            "${up_left}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid40",
                            "scaleX",
                            750,
                            1000,
                            "linear",
                            "${up_left}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid66",
                            "scaleY",
                            0,
                            750,
                            "linear",
                            "${up_right}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid39",
                            "scaleY",
                            750,
                            1000,
                            "linear",
                            "${up_right}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid64",
                            "scaleY",
                            0,
                            750,
                            "linear",
                            "${down_left}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid45",
                            "scaleY",
                            750,
                            1000,
                            "linear",
                            "${down_left}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid67",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${up_left}",
                            '0',
                            '1'
                        ],
                        [
                            "eid56",
                            "opacity",
                            750,
                            1000,
                            "linear",
                            "${up_left}",
                            '1',
                            '0.1'
                        ],
                        [
                            "eid61",
                            "scaleX",
                            0,
                            750,
                            "linear",
                            "${down_right}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid42",
                            "scaleX",
                            750,
                            1000,
                            "linear",
                            "${down_right}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid62",
                            "scaleY",
                            0,
                            750,
                            "linear",
                            "${down_right}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid43",
                            "scaleY",
                            750,
                            1000,
                            "linear",
                            "${down_right}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid60",
                            "scaleY",
                            0,
                            750,
                            "linear",
                            "${up_left}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid41",
                            "scaleY",
                            750,
                            1000,
                            "linear",
                            "${up_left}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid65",
                            "scaleX",
                            0,
                            750,
                            "linear",
                            "${up_right}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid38",
                            "scaleX",
                            750,
                            1000,
                            "linear",
                            "${up_right}",
                            '1',
                            '0.8'
                        ]
                    ]
                }
            },
            "light": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['200px', '0px', '1195px', '615px', 'auto', 'auto'],
                            id: '_4_light',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/4_light.png', '0px', '0px']
                        },
                        {
                            rect: ['200px', '0px', '1195px', '615px', 'auto', 'auto'],
                            id: '_4_lightCopy2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/4_light.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1195px', '615px']
                        }
                    }
                },
                timeline: {
                    duration: 30075.561482347,
                    autoPlay: true,
                    data: [
                        [
                            "eid98",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${_4_light}",
                            '1',
                            '1'
                        ],
                        [
                            "eid111",
                            "opacity",
                            28326,
                            674,
                            "linear",
                            "${_4_light}",
                            '1',
                            '0'
                        ],
                        [
                            "eid108",
                            "left",
                            28326,
                            1750,
                            "linear",
                            "${_4_lightCopy2}",
                            '220px',
                            '200px'
                        ],
                        [
                            "eid114",
                            "opacity",
                            28326,
                            1750,
                            "linear",
                            "${_4_lightCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid90",
                            "left",
                            0,
                            29000,
                            "linear",
                            "${_4_light}",
                            '200px',
                            '0px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-13287302");
