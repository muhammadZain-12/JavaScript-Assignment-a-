let mobiles = [
     
        ['iphone',[
            'x10',
                ["ram:2gb",
                'rom:32gb',
                "price : 12000"]
            ],
            ['x10pro',
                ["ram:4gb",
                'rom:64gb',
                "price : 20000"]
            ],
            ['x11',
                ["ram:8gb",
                'rom:102gb',
                "price : 30000"]
            ],
            ['x11pro',
                ["ram:16gb",
                'rom:256gb', 
                "price : 40000"]
            ]],

        
            ['samsung',[
            's5',
                ["ram:2gb",
                'rom:32gb',
                "price : 12000",]
            ],
            ['s6',
                ["ram:2gb",
                'rom:32gb',
                "price : 12000",]
            ],
            ['s7',
                ["ram:2gb",
                'rom:32gb',
                "price : 12000",]
            ],
            ['s8',
                ["ram:2gb",
                'rom:32gb',
                "price : 12000",]
            ]
        ],
        
            ['xiomi',
                ['x1',
                ["ram:2gb",
                'rom:32gb',
                "price : 12000"]
                ],
                ['x2',
                    ["ram:2gb",
                    'rom:32gb',
                    "price : 12000"]
                ],
                ['x3',
                    ["ram:2gb",
                'rom:32gb',
                "price : 12000"]
                ],
                ['x4',
                    ["ram:2gb",
                    'rom:32gb',
                    "price : 12000"]
                ]
            ],
        
        ['infinix',
            ['hot8',
                ["ram:2gb",
                'rom:32gb',
                "price : 12000",]
            ],
            ['hot8pro',
                ["ram:2gb",
                'rom:32gb',
                "price : 12000"]
            ],
            ['hot9',
                ["ram:2gb",
                'rom:32gb',
                "price : 12000"]
            ],
            ['hot9pro',
                ["ram:2gb",
                'rom:32gb',
                "price : 12000"]
            ]
        ]]


let mobileName;

var copyArray = [...mobiles]


let iphone = [copyArray[0][0]]
let samsung = [copyArray[1][0]]
let xiomi = [copyArray[2][0]]
let infinix = [copyArray[3][0]]
mobileName = [...iphone,...samsung,...xiomi,...infinix]


let iPhoneModel;

let iphoneModel1 = [copyArray[0][1][0]]
let iphoneModel2 = [copyArray[0][2][0]]
let iphoneModel3 = [copyArray[0][3][0]]
let iphoneModel4 = [copyArray[0][4][0]]
iPhoneModel = [...iphoneModel1,...iphoneModel2,...iphoneModel3,...iphoneModel4]

let samsungModel;
let samsungModel1 = [copyArray[1][1][0]]
let samsungModel2 = [copyArray[1][2][0]]
let samsungModel3 = [copyArray[1][3][0]]
let samsungModel4 = [copyArray[1][4][0]]
samsungModel = [...samsungModel1,...samsungModel2,...samsungModel3,...samsungModel4]

let xiomiModel;
let xiomiModel1 = [copyArray[2][1][0]]
let xiomiModel2 = [copyArray[2][2][0]]
let xiomiModel3 = [copyArray[2][3][0]]
let xiomiModel4 = [copyArray[2][4][0]]
xiomiModel = [...xiomiModel1,...xiomiModel2,...xiomiModel3,...xiomiModel4]

let infinixModel;
let infinixModel1 = [copyArray[3][1][0]]
let infinixModel2 = [copyArray[3][2][0]]
let infinixModel3 = [copyArray[3][3][0]]
let infinixModel4 = [copyArray[3][4][0]]
infinixModel = [...infinixModel1,...infinixModel2,...infinixModel3,...infinixModel4]


let models = [...iphoneModel1,...samsungModel,...xiomiModel,...infinixModel]


let x10spec = [copyArray[0][1][1]]
let x10prospec = [copyArray[0][2][1]]
let x11spec = [copyArray[0][3][1]]
let x11prospec = [copyArray[0][4][1]]

let iphoneSpec = [...x10spec,...x10prospec,...x11spec,...x11prospec]



let s5spec = [copyArray[1][1][1]]
let s6spec = [copyArray[1][2][1]]
let s7spec = [copyArray[1][3][1]]
let s8spec = [copyArray[1][4][1]]

let samsungSpec  = [...s5spec,...s6spec,...s7spec,...s8spec]



let x1spec = [copyArray[2][1][1]]
let x2spec = [copyArray[2][2][1]]
let x3spec = [copyArray[2][3][1]]
let x4spec = [copyArray[2][4][1]]

let xiomiSpec  = [...x1spec,...x2spec,...x3spec,...x4spec]


let hot8spec = [copyArray[3][1][1]]
let hot8Prospec = [copyArray[3][2][1]]
let hot9spec = [copyArray[3][3][1]]
let hot9Prospec = [copyArray[3][4][1]]

let infinixSpec  = [...hot8spec,...hot8Prospec,...hot9spec,...hot9Prospec]



let specification = [...iphoneSpec,...samsungSpec,...xiomiSpec,...infinixSpec]

document.write(`<h1>${mobileName[0]}</h1>`)
for (var i=0;i<4;i++){
document.write(`<li>${iPhoneModel[i]} : ${iphoneSpec[i]}</li>`)

}

document.write(`<h1>${mobileName[1]}</h1>`)
for (var i=0;i<4;i++){
document.write(`<li>${samsungModel[i]} : ${samsungSpec[i]}</li>`)

}
document.write(`<h1>${mobileName[2]}</h1>`)
for (var i=0;i<4;i++){
document.write(`<li>${xiomiModel[i]} : ${xiomiSpec[i]}</li>`)

}
document.write(`<h1>${mobileName[3]}</h1>`)
for (var i=0;i<4;i++){
document.write(`<li>${infinixModel[i]} : ${infinixSpec [i]}</li>`)

}