const Options = {
    "Ammo Loading (break action)":{
        "DP":-5,
        "Concealability":1,
        "Ammo Cap":1,
        "Weight":0
    },
    "Ammo Loading (belt)":{
        "DP":10,
        "Ammo Cap":100,
        "Weight":0
    },
    "Barrel Extension":{
        "DP":15,
        "FCU": -.5,
        "Weight": .25,
        "Concealability":-2
    },
    "Barrel Reduction":{
        "DP":8,
        "FCU": -.5,
        "Weight": -.25,
        "Concealability":2
    },
    "Bullpup Configuration":{
        "DP":25,
        "FCU":-.5,
        "Concealability":2,
        "Weight":0,
        "RC":1,
        "invalidWith":"Improved Concealability"
    },
    "Ceramic Components":{
        "Levels":[1,2,3],
        "DP":[20,40,60],
        "FCU":[-.25,-.5,-.75],
        "Weight":[-.1,-.2,-.3],
        "Extra":["+2 Concealability when attempting to avoid detection by MAD systems",
                 "+4 Concealability when attempting to avoid detection by MAD systems",
                 "At level 3, the gun is composed entirely of ceramic and is undetectable by MAD systems."]
    },
    "Easy Breakdown":{
        "DP":40,
        "FCU":0,
        "Weight":0,
        "Extra":"Guns with this option can be disassembled or re-assembled in 3 Complex Actions, and can fit into a large briefcase when disassembled."
    },
    "Firing Mode (SA)":{
        "Weight":0
    },
    "Flechette Only":{
        "DP":10,
        "FCU":.5,
        "Weight":0,
        "Extra":"Weapon now only can fire Flechettes"
    },
    "Heavy Barrel":{
        "DP":25,
        "FCU":-.25,
        "Weight":.5,
        "RC":1
    },
    "Improved Ammo Capacity":{
        "Ammo Cap":1,
        "DP":2,
        "FCU":-.125
    },
    "Improved Concealability":{
        "Levels":[1,2],
        "DP":[25,50],
        "FCU":[-.25,-.5],
        "Concealability":[1,2],
    },
    "Increased Power (Up to 1)":{
        "DP":80,
        "FCU":-.25,
        "Weight":.25,
        "Power":1
    },
    "Increased Power (Up to 2)":{
        "Levels":[1,2],
        "DP":[80,160],
        "FCU":[-.25,-.5],
        "Weight":[.25,.5],
        "Power":[1,2]
    },
    "Increased Power (Up to 3)":{
        "Levels":[1,2,3],
        "DP":[80,160,240],
        "FCU":[-.25,-.5,-.75],
        "Weight":[.25,.5,.75],
        "Power":[1,2,3]
    },
    "Recoil Compensation":{
        "Levels":[1,2],
        "DP":[70,140],
        "RC":[1,2],
        "FCU":[-.5,-1,-1.5],
        "Weight":[.25,.5,.75]
    },
    "High-Velocity Capability":{
        "DP":100,
        "FCU":-1.5,
        "Weight":1,
        "Extra":"Fires 6-round bursts\nFires 18-round Full Auto.",
        "InvalidWith":"Barrel"
    },
    "Melee Hardening":{
        "DP":15,
        "FCU":-.5,
        "Weight":.25,
        "Extra":"The firearm is built especially sturdy and hard, receiving +1 Power when used in melee combat."
    },
    "Metahuman Design (Troll)":{
        "DP":80,
        "FCU":-.25,
        "Weight":.25,
        "Extra":"Members of any other metahuman race attempting to use a troll modified gun suffer a +2 modifier when using the weapon.\n A dwarf attempting to use a troll-modified weapon suffers a +4 modifier."
    },
    "Metahuman Design (Dwarf)":{
        "DP":80,
        "FCU":-.25,
        "Weight":.25,
        "Extra":"Members of any other metahuman race attempting to use a dwarf-modified gun suffer a +2 modifier when using the weapon.\n A Troll attempting to use a Dwarf-modified weapon suffers a +4 modifier."
    },
    "Weight Decrease (Up to 2)":{
        "Levels":[1,2],
        "DP":[5,10],
        "Weight":[-.25,-.5]
    },
    "Weight Decrease (Up to 6)":{
        "Levels":[1,2,3,4,5,6],
        "DP":[5,10,15,20,25,30],
        "Weight":[-.25,-.5,-.75, -1,-1.25,-1.5]
    },
    "Weight Decrease (Up to 8)":{
        "Levels":[1,2,3,4,5,6,7,8],
        "DP":[5,10,15,20,25,30,35,40],
        "Weight":[-.25,-.5,-.75,-1, -1.25,-1.5,-1.75,-2]
    },
    "Weight Decrease (Up to 12)":{
        "Levels":[1,2,3,4,5,6,7,8,9,10,11,12],
        "DP":[5,10,15,20,25,30,35,40,45,50,55,60],
        "Weight":[-.25,-.5,-.75,-1, -1.25,-1.5,-1.75,-2, -2.25,-2.5,-2.75,-3]
    },
    "Weight Decrease (Up to 16)":{
        "Levels":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
        "DP":[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80],
        "Weight":[-.25,-.5,-.75,-1, -1.25,-1.5,-1.75,-2, -2.25,-2.5,-2.75,-3, -3.25,-3.5,-3.75,-4]
    }
}

export default Options;