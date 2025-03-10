export const particlesConfig = {
    background: {
        color: {
            value: "transparent",
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
};

export const PopConfigs = {
    particles: {
        destroy: {
            mode: "split",
            split: {
                count: 1,
                factor: {
                    value: {
                        min: 2,
                        max: 4
                    }
                },
                rate: {
                    value: 100
                },
                particles: {
                    life: {
                        count: 1,
                        duration: {
                            value: {
                                min: 2,
                                max: 3
                            }
                        }
                    },
                    move: {
                        speed: {
                            min: 10,
                            max: 15
                        }
                    }
                }
            }
        },
        number: {
            value: 80
        },
        color: {
            value: [
                "#3998D0",
                "#2EB6AF",
                "#A9BD33",
                "#FEC73B",
                "#F89930",
                "#F45623",
                "#D62E32",
                "#EB586E",
                "#9952CF"
            ]
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 1
        },
        size: {
            value: {
                min: 10,
                max: 15
            }
        },
        collisions: {
            enable: true,
            mode: "bounce"
        },
        move: {
            enable: true,
            speed: 3,
            outModes: "bounce"
        }
    },
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "pop"
            }
        }
    },
    background: {
        color: "#000000"
    }
};
export const PoissonConfigs = {
    particles: {
        number: {
            value: 100
        },
        color: {
            value: "#ffffff"
        },
        links: {
            enable: true,
            distance: 200
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 1
        },
        size: {
            value: {
                min: 4,
                max: 6
            }
        },
        move: {
            enable: true,
            speed: 2
        }
    },
    background: {
        color: "#000000"
    },
    poisson: {
        enable: true
    }
};

export const ZigZagPathconfigs = {
    particles: {
        color: {
            value: ["#ffffff", "#ff0000", "#00ff00", "#0000ff"]
        },
        move: {
            enable: true,
            outModes: "out",
            speed: { min: 1, max: 3 },
            path: {
                enable: true,
                options: {
                    waveLength: { min: 3, max: 7 },
                    waveHeight: { min: 1, max: 5 }
                },
                generator: "zigZagPathGenerator"
            },
            trail: {
                enable: true,
                length: 20,
                fill: {
                    color: "#000000"
                }
            }
        },
        number: {
            value: 80
        },
        opacity: {
            value: 1
        },
        shape: {
            type: "circle"
        },
        size: {
            value: 3
        }
    },
    background: {
        color: "#000000"
    }
};

export const Fireworks3xConfigs = {
    name: "Fireworks Mask",
    fullScreen: {
        enable: true
    },
    background: {
        color: "#000000",
        image: "url('https://particles.js.org/images/background3.jpg')",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover"
    },
    backgroundMask: {
        enable: true,
        cover: {
            color: "#000"
        }
    },
    emitters: {
        direction: "top",
        life: {
            count: 0,
            duration: 0.1,
            delay: 0.1
        },
        rate: {
            delay: 0.15,
            quantity: 1
        },
        size: {
            width: 100,
            height: 0
        },
        position: {
            y: 100,
            x: 50
        }
    },
    particles: {
        color: {
            value: "#fff"
        },
        number: {
            value: 0
        },
        destroy: {
            bounds: {
                top: 30
            },
            mode: "split",
            split: {
                count: 1,
                factor: {
                    value: 0.333333
                },
                rate: {
                    value: 100
                },
                particles: {
                    stroke: {
                        width: 0
                    },
                    color: {
                        value: ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"]
                    },
                    number: {
                        value: 0
                    },
                    collisions: {
                        enable: false
                    },
                    destroy: {
                        bounds: {
                            top: 0
                        }
                    },
                    opacity: {
                        value: {
                            min: 0.1,
                            max: 1
                        },
                        animation: {
                            enable: true,
                            speed: 0.7,
                            sync: false,
                            startValue: "max",
                            destroy: "min"
                        }
                    },
                    effect: {
                        type: "trail",
                        options: {
                            trail: {
                                length: {
                                    min: 5,
                                    max: 10
                                }
                            }
                        }
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        value: 2,
                        animation: {
                            enable: false
                        }
                    },
                    life: {
                        count: 1,
                        duration: {
                            value: {
                                min: 1,
                                max: 2
                            }
                        }
                    },
                    move: {
                        enable: true,
                        gravity: {
                            enable: true,
                            acceleration: 9.81,
                            inverse: false
                        },
                        decay: 0.1,
                        speed: {
                            min: 10,
                            max: 25
                        },
                        direction: "outside",
                        outModes: "destroy"
                    }
                }
            }
        },
        life: {
            count: 1
        },
        effect: {
            type: "trail",
            options: {
                trail: {
                    length: {
                        min: 10,
                        max: 30
                    },
                    minWidth: 1,
                    maxWidth: 1
                }
            }
        },
        rotate: {
            path: true
        },
        shape: {
            type: "circle"
        },
        size: {
            value: 1
        },
        move: {
            enable: true,
            gravity: {
                acceleration: 15,
                enable: true,
                inverse: true,
                maxSpeed: 100
            },
            speed: {
                min: 10,
                max: 20
            },
            outModes: {
                default: "destroy",
                top: "none"
            }
        }
    },
    sounds: {
        enable: true,
        events: [
            {
                event: "particleRemoved",
                filter: (args) => args.data.particle.options.move.gravity.inverse,
                audio: [
                    "https://particles.js.org/audio/explosion0.mp3",
                    "https://particles.js.org/audio/explosion1.mp3",
                    "https://particles.js.org/audio/explosion2.mp3"
                ]
            }
        ],
        volume: 50
    }
};
export const NewTrailsConfigs = {
    name: "Effect Trail",
    particles: {
        number: {
            value: 80,
            density: {
                enable: true
            }
        },
        color: {
            value: "#ff0000",
            animation: {
                enable: true,
                speed: 360,
                sync: true
            }
        },
        effect: {
            type: "trail",
            options: {
                trail: {
                    fade: true,
                    length: {
                        min: 10,
                        max: 30
                    }
                }
            }
        },
        shape: {
            type: "circle"
        },
        size: {
            value: 10
        },
        move: {
            path: {
                enable: true,
                options: {
                    size: 32,
                    draw: false,
                    increment: 0.004
                },
                generator: "simplexNoise"
            },
            enable: true,
            speed: { min: 6, max: 15 }
        }
    },
    background: {
        color: "#000000"
    }
};
export const AnimatedMarioGifParticlesConfigs = {
    particles: {
        move: {
            enable: true,
            speed: { min: 1, max: 6 }
        },
        number: {
            value: 20,
            max: 30
        },
        opacity: {
            value: 1
        },
        rotate: {
            path: true
        },
        shape: {
            options: {
                image: {
                    gif: true,
                    height: 200,
                    src: "https://particles.js.org/images/mario.gif",
                    width: 200
                }
            },
            type: "image"
        },
        size: {
            value: {
                min: 32,
                max: 64
            }
        }
    }
};
export const HypnoSquaresConfigs = {
    particles: {
        stroke: {
            width: 5,
            color: {
                value: [
                    "#5bc0eb",
                    "#fde74c",
                    "#9bc53d",
                    "#e55934",
                    "#fa7921",
                    "#2FF3E0",
                    "#F8D210",
                    "#FA26A0",
                    "#F51720"
                ]
            }
        },
        shape: {
            type: "square",
            options: {
                square: {
                    fill: false
                }
            }
        },
        rotate: {
            value: 0,
            direction: "counter-clockwise",
            animation: {
                enable: true,
                speed: 2,
                sync: true
            }
        },
        size: {
            value: { min: 1, max: 500 },
            animation: {
                enable: true,
                startValue: "min",
                speed: 60,
                sync: true,
                destroy: "max"
            }
        }
    },
    background: {
        color: "#000"
    },
    emitters: {
        direction: "top",
        position: {
            y: 50,
            x: 50
        },
        rate: {
            delay: 1,
            quantity: 1
        }
    }
};
export const CursorRainbowShapesTrailConfigs = {
    particles: {
        number: {
            value: 0
        },
        stroke: {
            color: {
                value: "#ff0000",
                animation: {
                    enable: true,
                    speed: 360,
                    sync: true
                }
            },
            width: 2
        },
        shape: {
            type: ["circle", "square", "triangle", "polygon"],
            options: {
                circle: {
                    fill: false
                },
                square: {
                    fill: false
                },
                triangle: {
                    fill: false
                },
                polygon: [
                    {
                        sides: 5,
                        fill: false
                    },
                    {
                        sides: 6,
                        fill: false
                    }
                ]
            }
        },
        opacity: {
            value: 1
        },
        rotate: {
            value: { min: 0, max: 360 },
            direction: "random",
            animation: {
                enable: true,
                sync: true,
                speed: { min: 15, max: 30 }
            }
        },
        size: {
            value: { min: 1, max: 30 },
            animation: {
                enable: true,
                speed: { min: 40, max: 80 },
                sync: true,
                startValue: "max",
                destroy: "min"
            }
        },
        move: {
            enable: true,
            speed: { min: 5, max: 10 },
            outModes: "destroy"
        }
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "trail"
            }
        },
        modes: {
            trail: {
                delay: 0,
                quantity: 7,
                pauseOnStop: false
            }
        }
    },
    background: {
        color: "#000000"
    }
};
export const FireworksConfigs = [
    {
        particles: {
            number: {
                value: 0
            },
            color: {
                value: "#ff0000",
                animation: {
                    enable: true,
                    speed: 20,
                    sync: true
                }
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.5
            },
            size: {
                value: { min: 1, max: 3 }
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none"
            }
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "trail"
                }
            },
            modes: {
                trail: {
                    delay: 0.01,
                    pauseOnStop: true,
                    particles: {
                        color: {
                            value: "#00ff00",
                            animation: {
                                enable: true,
                                speed: 200,
                                sync: false
                            }
                        },
                        move: {
                            outModes: "destroy"
                        },
                        size: {
                            random: true,
                            value: 10
                        }
                    }
                }
            }
        },
        background: {
            color: "#000000"
        }
    },
    {
        backgroundMask: {
            enable: true,
            cover: {
                value: {
                    r: 0,
                    g: 0,
                    b: 0
                }
            }
        },
        background: {
            image: "url('https://particles.js.org/images/background.jpg')",
            size: "100% 100%",
            repeat: "no-repeat"
        },
        particles: {
            color: {
                value: ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"],
                animation: {
                    enable: true,
                    speed: 30
                }
            },
            move: {
                direction: "bottom",
                enable: true,
                outModes: {
                    default: "out"
                },
                size: true,
                speed: {
                    min: 1,
                    max: 3
                }
            },
            number: {
                value: 700,
                density: {
                    enable: true,
                    area: 800
                }
            },
            opacity: {
                value: 1
            },
            rotate: {
                value: {
                    min: 0,
                    max: 360
                },
                direction: "random",
                move: true,
                animation: {
                    enable: true,
                    speed: 60
                }
            },
            tilt: {
                direction: "random",
                enable: true,
                move: true,
                value: {
                    min: 0,
                    max: 360
                },
                animation: {
                    enable: true,
                    speed: 60
                }
            },
            shape: {
                type: ["circle", "square", "polygon"],
                options: {
                    polygon: [
                        {
                            sides: 5
                        },
                        {
                            sides: 6
                        }
                    ]
                }
            },
            size: {
                value: {
                    min: 3,
                    max: 5
                }
            },
            roll: {
                darken: {
                    enable: true,
                    value: 30
                },
                enlighten: {
                    enable: true,
                    value: 30
                },
                enable: true,
                speed: {
                    min: 15,
                    max: 25
                }
            },
            wobble: {
                distance: 30,
                enable: true,
                move: true,
                speed: {
                    min: -15,
                    max: 15
                }
            }
        }
    },
    {
        background: {
            color: "#000"
        },
        emitters: {
            direction: "top",
            life: {
                count: 0,
                duration: 0.1,
                delay: 0.1
            },
            rate: {
                delay: 0.15,
                quantity: 1
            },
            size: {
                width: 100,
                height: 0
            },
            position: {
                y: 100,
                x: 50
            }
        },
        particles: {
            number: {
                value: 0
            },
            destroy: {
                bounds: {
                    top: 30
                },
                mode: "split",
                split: {
                    count: 1,
                    factor: {
                        value: 0.333333
                    },
                    rate: {
                        value: 100
                    },
                    particles: {
                        stroke: {
                            width: 0
                        },
                        color: {
                            value: ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"]
                        },
                        number: {
                            value: 0
                        },
                        collisions: {
                            enable: false
                        },
                        destroy: {
                            bounds: {
                                top: 0
                            }
                        },
                        opacity: {
                            value: {
                                min: 0.1,
                                max: 1
                            },
                            animation: {
                                enable: true,
                                speed: 0.7,
                                sync: false,
                                startValue: "max",
                                destroy: "min"
                            }
                        },
                        shape: {
                            type: "circle"
                        },
                        size: {
                            value: 2,
                            animation: {
                                enable: false
                            }
                        },
                        life: {
                            count: 1,
                            duration: {
                                value: {
                                    min: 1,
                                    max: 2
                                }
                            }
                        },
                        move: {
                            enable: true,
                            gravity: {
                                enable: true,
                                acceleration: 9.81,
                                inverse: false
                            },
                            decay: 0.1,
                            speed: {
                                min: 10,
                                max: 25
                            },
                            direction: "outside",
                            random: true,
                            straight: false,
                            outModes: "destroy"
                        }
                    }
                }
            },
            life: {
                count: 1
            },
            shape: {
                type: "line"
            },
            size: {
                value: {
                    min: 0.1,
                    max: 50
                },
                animation: {
                    enable: true,
                    sync: true,
                    speed: 90,
                    startValue: "max",
                    destroy: "min"
                }
            },
            stroke: {
                color: {
                    value: "#ffffff"
                },
                width: 1
            },
            rotate: {
                path: true
            },
            move: {
                enable: true,
                gravity: {
                    acceleration: 15,
                    enable: true,
                    inverse: true,
                    maxSpeed: 100
                },
                speed: {
                    min: 10,
                    max: 20
                },
                outModes: {
                    default: "destroy",
                    top: "none"
                },
                trail: {
                    fill: {
                        color: "#000"
                    },
                    enable: true,
                    length: 10
                }
            }
        }
    },
    {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true
                }
            },
            color: {
                value: "#ff0000",
                animation: {
                    enable: true,
                    speed: 360,
                    sync: true
                }
            },
            effect: {
                type: "trail",
                options: {
                    trail: {
                        fade: true,
                        length: {
                            min: 10,
                            max: 30
                        }
                    }
                }
            },
            shape: {
                type: "circle"
            },
            size: {
                value: 10
            },
            move: {
                path: {
                    enable: true,
                    options: {
                        size: 32,
                        draw: false,
                        increment: 0.004
                    },
                    generator: "simplexNoise"
                },
                enable: true,
                speed: { min: 6, max: 15 }
            }
        },
        background: {
            color: "#000000"
        }
    }
];