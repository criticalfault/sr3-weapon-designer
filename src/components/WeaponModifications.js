const Modifications = {
    "Custom Finish":{
        "DP":20,
        "Installation TN":4,
        "Base Time":24,
        "Base Time Measure":"Hours"
    }, 
    "Embossing/Engraving":{
        "DP":20,
        "Installation TN":4,
        "Base Time":12,
        "Base Time Measure":"Hours"
    }, 
    "Gas Vent":{
        "Levels":['II','III','IV'],
        "DP":[90,140,200],
        "FCU":[-.5,-.75,-1],
        "Weight":[.5,.75,.75],
        "Installation TN":5,
        "Base Time":24,
        "Base Time Measure":"Hours",
        "Mount":"Barrel",
        "Tools":"Shop"
    }, 
    "Safe Target System":{
        "DP":40,
        "FCU":-.25,
        "Weight":1,
        "Installation TN":5,
        "Base Time":18,
        "Base Time Measure":"Hours",
        "Tools":"Shop"
    }, 
    "Secondary Weapon":{
        "DP":450,
        "FCU":-.5,
        "Weight":.5,
        "Installation TN":8,
        "Base Time":24,
        "Base Time Measure":"Hours",
        "Tools":"Shop"
    }, 
    "Smartgun System (Internal)":{

    },
    "Smartgun System 2 (Internal)":{

    },
    "Voice Activation":{
        "DP":50,
        "FCU":-.25,
        "Weight":.1,
        "Installation TN":6,
        "Base Time":24,
        "Base Time Measure":"Hours",
        "Tools":"Shop"
    }, 
    "Biometric Safety":{
        "DP":450,
        "FCU":-.25,
        "Weight":.1,
        "Installation TN":6,
        "Base Time":24,
        "Base Time Measure":"Hours",
        "Tools":"Shop"
    }, 
    "Bipod":{
        "DP":80,
        "Weight":2,
        "Mount":"Under",
        "Installation TN":3,
        "Base Time":8,
        "Base Time Measure":"Hours",
        "Tools":"Kit"
    }, 
    "Foregrip":{
        "DP":50,
        "Weight":.5,
        "Mount":"Under",
        "Installation TN":3,
        "Base Time":36,
        "Base Time Measure":"Hours",
        "Tools":"Kit",
        "RC":1
    }, 
    "Personalized Grip":{
        "DP":25,
        "Installation TN":5,
        "Base Time":24,
        "Base Time Measure":"Hours",
        "Tools":"Kit",
    }, 
    "Range Finder":{
        "DP":30,
        "FCU":-.25,
        "Weight":.1,
        "Installation TN":4,
        "Base Time":24,
        "Base Time Measure":"Hours",
        "Tools":"Kit",
        "Mount": [ "Top", "Under"],
        "InvalidWith":"Imaging System"
    }, 
    "Laser Sight (Low Power)":{
        "DP":100,
        "FCU":-.25,
        "Weight":.25,
        "Installation TN":4,
        "Base Time":24,
        "Base Time Measure":"Hours",
        "Tools":"Kit",
        "Mount": [ "Top", "Under"],
    }, 
    "Laser Sight (High Power)":{
        "DP":200,
        "FCU":-.25,
        "Weight":.25,
        "Installation TN":4,
        "Base Time":24,
        "Base Time Measure":"Hours",
        "Tools":"Kit",
        "Mount": [ "Top", "Under"],
        "InvalidWith": ["Smartgun System (Internal)", "Smartgun System 2 (Internal)"]
    }, 
    "Remove Safety":{
        "DP":30,
        "Installation TN":5,
        "Base Time":18,
        "Base Time Measure":"Hours",
        "Tools":"Kit",
    }, 
    "Remove Trigger":{
        "DP":50,
        "FCU":-.5,
        "Installation TN":5,
        "Base Time":24,
        "Base Time Measure":"Hours",
        "Tools":"Shop",
    }, 
    "Underbarrel Weight":{
        "DP":25,
        "FCU":-.25,
        "Weight":1,
        "Mount": "Under",
        "Installation TN":4,
        "Base Time":24,
        "Base Time Measure":"Hours",
        "Tools":"Kit",
        "RC":1
    }


}
export default Modifications;
/*

Laser Target Designator
Laser designators are used to mark targets so weapons
with the appropriate seeker gear can home in on the reflected
energy (see p. 35).
Skill: Electronics B/R
Installation TN/Base Time: 4/48 hours
Mount: Top or under
Tools: Kit
Weight: .5
FCU: –.25 (r)
DP: +740

Imaging Systems
Imaging scopes range from simple magnification to lowlight
and infrared (see p. 34 and p. 280, SR3). The types may
be combined into one scope that can switch modes by adding
together their FCU and DP. Installation of such a combined
scope is calculated as one item. Imaging scopes are incompatible
with smartlink systems.
Skill: B/R Electronics
Installation TN/Base Time: 4/24 hours
Mount: Top or under
Tools: Kit
Weight: .25
FCU: –.25 (r)
DP: Flashlight +25, Gun Cam +400, Low-light +300,
Magnification 1 +100, Magnification 2 +160, Magnification 3
+240, Thermographic +300



Extended Clip
By using a large-capacity clip, a gunsmith can increase the
ammo capacity of a firearm. Firearms with a clip have a maximum
ammo capacity of 50 rounds.
Skill: (Weapon) B/R
Installation TN/Base Time: 3/8 hours
Mount: None
Tools: Shop
Weight: None
FCU: None
DP: +2/round added

Smartgun System (Internal)
Skill: Electronics B/R, (Weapon) B/R
Installation TN/Base Time: 5/24 hours
Mount: None
Tools: Shop
Weight: Standard .5, Smartlink .25
FCU: –.5
DP: Standard Smartlink +(frame’s base DPV), Smartlink-2
+(1.5 x frame’s base DPV)


*/