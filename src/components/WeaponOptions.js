const Options = {
    "Ammo Loading (break action)":{
        "Name":"Ammo Loading (break action)",
        "DP":-5,
        "Concealability":1,
        "Ammo Cap":1,
        "IncompatiableWith":[],
        "Weight":0
    },
    "Ammo Loading (belt)":{
        "Name":"Ammo Loading (belt)",
        "DP":10,
        "Ammo Cap":100,
        "Weight":0,
        "IncompatiableWith":[],
    },
    "Barrel Extension":{
        "Name":"Barrel Extension",
        "DP":15,
        "FCU": -.5,
        "Weight": .25,
        "Concealability":-2,
        "IncompatiableWith":["Barrel Reduction"]
    },
    "Barrel Reduction":{
        "Name":"Barrel Reduction",
        "DP":8,
        "FCU": -.5,
        "Weight": -.25,
        "Concealability":2,
        "IncompatiableWith":["Barrel Extension"]
    },
    "Bullpup Configuration":{
        "Name":"Bullpup Configuration",
        "DP":25,
        "FCU":-.5,
        "Concealability":2,
        "Weight":0,
        "RC":1,
        "IncompatiableWith":["Improved Concealability"]
    },
    "Ceramic Components":{
        "Name":"Ceramic Components",
        "DP":20,
        "FCU":-.25,
        "Weight":-.1,
        "HasLevels":true,
        "MaxLevels":3,
        "IncompatiableWith":[],
        "Extra":["Increase the Concealability rating of firearms with ceramic components by +2 per level when attempting to avoid detection by MAD systems",
            "Increase the Concealability rating of firearms with ceramic components by +4 per level when attempting to avoid detection by MAD systems",
            "At level 3, the gun is composed entirely of ceramic and is undetectable by MAD systems."
        ]
    },
    "Easy Breakdown":{
        "Name":"Easy Breakdown",
        "DP":40,
        "FCU":0,
        "Weight":0,
        "IncompatiableWith":[],
        "Extra":"Guns with this option can be disassembled or re-assembled in 3 Complex Actions, and can fit into a large briefcase when disassembled."
    },
    "Firing Mode (SA)":{
        "Name":"Firing Mode (SA)",
        "Weight":0,
        "IncompatiableWith":[],
    },
    "Flechette Only":{
        "Name":"Flechette Only",
        "DP":10,
        "FCU":.5,
        "Weight":0,
        "IncompatiableWith":[],
    },
    "Heavy Barrel":{
        "Name":"Heavy Barrel",
        "DP":25,
        "FCU":-.25,
        "Weight":.5,
        "RC":1,
        "IncompatiableWith":[],
    },
    "High-Velocity Capability":{
        "Name":"High-Velocity Capability",
        "DP":100,
        "FCU":-1.5,
        "Weight":1,
        "IncompatiableWith":[],
        "extra":"Fires 6 round bursts and auto fires 18 rounds per Combat Phase"
    },
    "Improved Ammo Capacity":{
        "Name":"Improved Ammo Capacity",
        "IncompatiableWith":[],

    },
    "Improved Concealability":{
        "Name":"Improved Concealability",
        "DP":25,
        "FCU":-.25,
        "Concealability":1,
        "HasLevels":true,
        "MaxLevels":2,
        "IncompatiableWith":[],
        "Weight":0
    },
    "Improved FCU 1":{
        "Name":"Improved FCU 1",
        "DP":10,
        "FCU":.25,
        "IncompatiableWith":[],
        "Weight":0
    },
    "Improved FCU 2":{
        "Name":"Improved FCU 2",
        "DP":10,
        "FCU":.25,
        "IncompatiableWith":[],
        "Weight":0
    },
    "Improved FCU 3":{
        "Name":"Improved FCU 3",
        "DP":10,
        "FCU":.25,
        "IncompatiableWith":[],
        "Weight":0
    },
    "Improved FCU 4":{
        "Name":"Improved FCU 4",
        "DP":10,
        "FCU":.25,
        "IncompatiableWith":[],
        "Weight":0
    },
    "Improved FCU 5":{
        "Name":"Improved FCU 5",
        "DP":10,
        "FCU":.25,
        "Weight":0,
        "IncompatiableWith":[],
    },
    "Improved FCU 6":{
        "Name":"Improved FCU 6",
        "DP":10,
        "FCU":.25,
        "Weight":0,
        "IncompatiableWith":[],
    },
    "Increased Power 1":{
        "Name":"Increased Power 1",
        "DP":80,
        "FCU":-.25,
        "Weight":.25,
        "Power":1,
        "IncompatiableWith":[],
    },
    "Increased Power 2":{
        "Name":"Increased Power 2",
        "DP":80,
        "FCU":-.25,
        "Weight":.25,
        "Power":1,
        "HasLevels":true,
        "MaxLevels":2,
        "IncompatiableWith":[],
    },
    "Increased Power 3":{
        "Name":"Increased Power 3",
        "DP":80,
        "FCU":-.25,
        "Weight":.25,
        "IncompatiableWith":[],
        "Power":1
    },
    "Melee Hardening":{
        "Name":"Melee Hardening",
        "DP":15,
        "FCU":-.5,
        "Weight":.25,
        "IncompatiableWith":[],
        "Extra":"The firearm is built especially sturdy and hard, receiving +1 Power when used in melee combat."
    },
    "Metahuman Design (Troll)":{
        "Name":"Metahuman Design (Troll)",
        "DP":80,
        "FCU":-.25,
        "Weight":.25,
        "IncompatiableWith":["Metahuman Design (Dwarf)"],
        "Extra":"Members of any other metahuman race attempting to use a troll modified gun suffer a +2 modifier when using the weapon. A dwarf attempting to use a troll-modified weapon suffers a +4 modifier."
    },
    "Metahuman Design (Dwarf)":{
        "Name":"Metahuman Design (Dwarf)",
        "DP":80,
        "FCU":-.25,
        "Weight":.25,
        "IncompatiableWith":["Metahuman Design (Troll)"],
        "Extra":"Members of any other metahuman race attempting to use a dwarf-modified gun suffer a +2 modifier when using the weapon. A Troll attempting to use a Dwarf-modified weapon suffers a +4 modifier."
    },
    "Weight Decrease 1":{
        "Name":"Weight Decrease 1",
        "DP":5,
        "IncompatiableWith":[],
        "Weight":-.25
    },
    "Weight Decrease 2":{
        "Name":"Weight Decrease 2",
        "DP":5,
        "IncompatiableWith":[],
        "Weight":-.25
    },
    "Weight Decrease 3":{
        "Name":"Weight Decrease 3",
        "DP":5,
        "IncompatiableWith":[],
        "Weight":-.25
    },
    "Weight Decrease 4":{
        "Name":"Weight Decrease 4",
        "DP":5,
        "IncompatiableWith":[],
        "Weight":-.25
    },
    "Weight Decrease 5":{
        "Name":"Weight Decrease 5",
        "DP":5,
        "IncompatiableWith":[],
        "Weight":-.25
    }, 
    "Weight Decrease 6":{
        "Name":"Weight Decrease 6",
        "DP":5,
        "IncompatiableWith":[],
        "Weight":-.25
    }, 
    "Weight Decrease 7":{
        "Name":"Weight Decrease 7",
        "DP":5,
        "IncompatiableWith":[],
        "Weight":-.25
    }, 
    "Weight Decrease 8":{
        "Name":"Weight Decrease 8",
        "DP":5,
        "IncompatiableWith":[],
        "Weight":-.25
    }, 
    "Weight Decrease 9":{
        "Name":"Weight Decrease 9",
        "DP":5,
        "IncompatiableWith":[],
        "Weight":-.25
    }, 
    "Weight Decrease 10":{
        "Name":"Weight Decrease 10",
        "DP":5,
        "IncompatiableWith":[],
        "Weight":-.25
    },
     "Weight Decrease 11":{
        "Name":"Weight Decrease 11",
        "DP":5,
        "IncompatiableWith":[],
        "Weight":-.25
    }, 
    "Weight Decrease 12":{
        "Name":"Weight Decrease 12",
        "DP":5,
        "IncompatiableWith":[],
        "Weight":-.25
    }, 
    "Weight Decrease 13":{
        "Name":"Weight Decrease 13",
        "DP":5,
        "IncompatiableWith":[],
        "Weight":-.25
    }, 
    "Weight Decrease 14":{
        "Name":"Weight Decrease 14",
        "DP":5,
        "IncompatiableWith":[],
        "Weight":-.25
    }, 
    "Weight Decrease 15":{
        "Name":"Weight Decrease 15",
        "DP":5,
        "IncompatiableWith":[],
        "Weight":-.25
    }, 
    "Weight Decrease 16":{
        "Name":"Weight Decrease 16",
        "DP":5,
        "IncompatiableWith":[],
        "Weight":-.25
    }
}

export default Options;