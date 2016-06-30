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
                            id: 'page',
                            type: 'image',
                            rect: ['0px', '0px', '640px', '1040px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1.jpg",'0px','0px']
                        },
                        {
                            id: 'main',
                            symbolName: 'main',
                            type: 'rect',
                            rect: ['-177px', '272px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'light2',
                            symbolName: 'light',
                            type: 'rect',
                            rect: ['-1', '235', '640', '622', 'auto', 'auto']
                        },
                        {
                            id: 'title2',
                            symbolName: 'title',
                            type: 'rect',
                            rect: ['133', '109', '373', '133', 'auto', 'auto']
                        },
                        {
                            id: 'schedule',
                            type: 'image',
                            rect: ['203px', '823px', '99px', '99px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"schedule.png",'0px','0px']
                        },
                        {
                            id: 'location2',
                            type: 'image',
                            rect: ['342px', '823px', '101px', '99px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"location2.png",'0px','0px']
                        },
                        {
                            id: 'focus2',
                            symbolName: 'focus',
                            type: 'rect',
                            rect: ['167', '922', '36', '36', 'auto', 'auto']
                        },
                        {
                            id: 'address',
                            type: 'image',
                            rect: ['178px', '306px', '283px', '70px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"address.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '640px', '1050px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 24750,
                    autoPlay: true,
                    data: [

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
                            id: '_4',
                            opacity: '0.1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/focus.png', '0px', '0px']
                        },
                        {
                            rect: ['272px', '-135px', '36px', '36px', 'auto', 'auto'],
                            transform: [[], ['180'], [], ['1.2', '1.2']],
                            id: '_3',
                            opacity: '0.1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/focus.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '-135px', '36px', '36px', 'auto', 'auto'],
                            transform: [[], ['90'], [], ['1.2', '1.2']],
                            id: '_2',
                            opacity: '0.1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/focus.png', '0px', '0px']
                        },
                        {
                            rect: ['272px', '0px', '36px', '36px', 'auto', 'auto'],
                            transform: [[], ['-90'], [], ['1.2', '1.2']],
                            id: '_1',
                            opacity: '0.1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/focus.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '36px', '36px']
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: true,
                    data: [
                        [
                            "eid30",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid34",
                            "opacity",
                            750,
                            1000,
                            "linear",
                            "${_1}",
                            '1',
                            '0.1'
                        ],
                        [
                            "eid29",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid33",
                            "opacity",
                            750,
                            1000,
                            "linear",
                            "${_2}",
                            '1',
                            '0.1'
                        ],
                        [
                            "eid13",
                            "scaleX",
                            0,
                            750,
                            "linear",
                            "${_2}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid17",
                            "scaleX",
                            750,
                            1000,
                            "linear",
                            "${_2}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid10",
                            "scaleY",
                            0,
                            750,
                            "linear",
                            "${_1}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid20",
                            "scaleY",
                            750,
                            1000,
                            "linear",
                            "${_1}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid12",
                            "scaleY",
                            0,
                            750,
                            "linear",
                            "${_3}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid24",
                            "scaleY",
                            750,
                            1000,
                            "linear",
                            "${_3}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid31",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${_4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid35",
                            "opacity",
                            750,
                            1000,
                            "linear",
                            "${_4}",
                            '1',
                            '0.1'
                        ],
                        [
                            "eid9",
                            "scaleX",
                            0,
                            750,
                            "linear",
                            "${_1}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid19",
                            "scaleX",
                            750,
                            1000,
                            "linear",
                            "${_1}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid14",
                            "scaleY",
                            0,
                            750,
                            "linear",
                            "${_2}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid18",
                            "scaleY",
                            750,
                            1000,
                            "linear",
                            "${_2}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid15",
                            "scaleX",
                            0,
                            750,
                            "linear",
                            "${_4}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid21",
                            "scaleX",
                            750,
                            1000,
                            "linear",
                            "${_4}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid16",
                            "scaleY",
                            0,
                            750,
                            "linear",
                            "${_4}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid22",
                            "scaleY",
                            750,
                            1000,
                            "linear",
                            "${_4}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid32",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid36",
                            "opacity",
                            750,
                            1000,
                            "linear",
                            "${_3}",
                            '1',
                            '0.1'
                        ],
                        [
                            "eid11",
                            "scaleX",
                            0,
                            750,
                            "linear",
                            "${_3}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid23",
                            "scaleX",
                            750,
                            1000,
                            "linear",
                            "${_3}",
                            '1',
                            '0.8'
                        ]
                    ]
                }
            },
            "title": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'title',
                            rect: ['0px', '0px', '373px', '133px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/title.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '373px', '133px']
                        }
                    }
                },
                timeline: {
                    duration: 7500,
                    autoPlay: true,
                    data: [
                        [
                            "eid39",
                            "scaleX",
                            0,
                            3000,
                            "linear",
                            "${title}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid41",
                            "scaleX",
                            3000,
                            0,
                            "easeInQuad",
                            "${title}",
                            '0.95',
                            '0.95'
                        ],
                        [
                            "eid53",
                            "scaleX",
                            3500,
                            3500,
                            "easeOutQuad",
                            "${title}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid40",
                            "scaleY",
                            0,
                            3000,
                            "linear",
                            "${title}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid42",
                            "scaleY",
                            3000,
                            0,
                            "easeInQuad",
                            "${title}",
                            '0.95',
                            '0.95'
                        ],
                        [
                            "eid54",
                            "scaleY",
                            3500,
                            3500,
                            "easeOutQuad",
                            "${title}",
                            '0.95',
                            '1'
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
                            type: 'image',
                            id: 'light',
                            opacity: '1',
                            rect: ['0px', '0px', '640px', '622px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/light.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '640px', '622px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid45",
                            "scaleX",
                            0,
                            2000,
                            "easeInOutQuad",
                            "${light}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid47",
                            "scaleX",
                            2000,
                            2000,
                            "easeInOutQuad",
                            "${light}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid51",
                            "opacity",
                            0,
                            2000,
                            "easeInOutQuad",
                            "${light}",
                            '1',
                            '0.1463413773998'
                        ],
                        [
                            "eid52",
                            "opacity",
                            2000,
                            2000,
                            "easeInOutQuad",
                            "${light}",
                            '0.1463413773998',
                            '1'
                        ],
                        [
                            "eid46",
                            "scaleY",
                            0,
                            2000,
                            "easeInOutQuad",
                            "${light}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid48",
                            "scaleY",
                            2000,
                            2000,
                            "easeInOutQuad",
                            "${light}",
                            '0.95',
                            '1'
                        ]
                    ]
                }
            },
            "main": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'main',
                            opacity: '1',
                            rect: ['-30px', '0px', '1063px', '547px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/main.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'mainCopy',
                            opacity: '0',
                            rect: ['110px', '0px', '1063px', '547px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/main.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1063px', '547px']
                        }
                    }
                },
                timeline: {
                    duration: 24750,
                    autoPlay: true,
                    data: [
                        [
                            "eid67",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${main}",
                            '1',
                            '1'
                        ],
                        [
                            "eid66",
                            "opacity",
                            19750,
                            2250,
                            "linear",
                            "${main}",
                            '1',
                            '0'
                        ],
                        [
                            "eid61",
                            "left",
                            20500,
                            4250,
                            "linear",
                            "${mainCopy}",
                            '110px',
                            '96px'
                        ],
                        [
                            "eid57",
                            "left",
                            0,
                            24000,
                            "linear",
                            "${main}",
                            '96px',
                            '-30px'
                        ],
                        [
                            "eid68",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${mainCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid64",
                            "opacity",
                            20500,
                            3500,
                            "linear",
                            "${mainCopy}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-29706186");


/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId1) {

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
            "stage1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_2',
                            type: 'image',
                            rect: ['0px', '0px', '640px', '1040px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2.jpg",'0px','0px']
                        },
                        {
                            id: 'bottom',
                            symbolName: 'bottom',
                            type: 'rect',
                            rect: ['-504', '664', '1063', '386', 'auto', 'auto']
                        },
                        {
                            id: '_2__03',
                            type: 'image',
                            rect: ['54px', '588px', '413px', '75px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"2__03.png",'0px','0px']
                        },
                        {
                            id: '_2__02',
                            type: 'image',
                            rect: ['54px', '340px', '377px', '160px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"2__02.png",'0px','0px']
                        },
                        {
                            id: '_2__01',
                            type: 'image',
                            rect: ['54px', '190px', '442px', '108px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"2__01.png",'0px','0px']
                        },
                        {
                            id: '_2_title',
                            type: 'image',
                            rect: ['249px', '86px', '142px', '29px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2_title.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage1}': {
                            isStage: true,
                            rect: [undefined, undefined, '640px', '1050px'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid2",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${_2__01}",
                            '190px',
                            '200px'
                        ],
                        [
                            "eid12",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${_2__01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4",
                            "top",
                            500,
                            1000,
                            "linear",
                            "${_2__02}",
                            '340px',
                            '350px'
                        ],
                        [
                            "eid10",
                            "opacity",
                            500,
                            1000,
                            "linear",
                            "${_2__02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid6",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${_2__03}",
                            '588px',
                            '598px'
                        ],
                        [
                            "eid11",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${_2__03}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "bottom": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_2_light',
                            type: 'image',
                            rect: ['-20px', '0px', '1063px', '386px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/2_light.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1063px', '386px']
                        }
                    }
                },
                timeline: {
                    duration: 21000,
                    autoPlay: true,
                    data: [
                        [
                            "eid29",
                            "location",
                            0,
                            10000,
                            "linear",
                            "${_2_light}",
                            [[511.5, 263, 0, 0, 0, 0,0],[509.12, 223.84, 14.36, -50.25, 15.59, -54.57,39.72],[531.5, 193, 0, 0, 0, 0,78.27]]
                        ],
                        [
                            "eid31",
                            "location",
                            11000,
                            10000,
                            "linear",
                            "${_2_light}",
                            [[531.17, 193.16, -5.81, 20.33, -14.43, 50.5,0],[531.1, 233.26, -15.89, 56.46, -10.71, 38.06,40.24],[511.5, 263, 0, 0, 0, 0,76.33]]
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-40685479");

