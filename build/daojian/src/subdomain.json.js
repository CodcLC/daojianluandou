module.exports = [
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  [
    {
      "__type__": "cc.Prefab",
      "_name": "Player",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "Player",
      "_children": [
        {
          "__id__": 2
        },
        {
          "__id__": 13
        }
      ],
      "_components": [
        {
          "__id__": 15
        },
        {
          "__type__": "cc.CircleCollider",
          "node": {
            "__id__": 1
          },
          "_radius": 200
        },
        {
          "__type__": "fffb951/GFGpZQryjExFi+v",
          "node": {
            "__id__": 1
          }
        },
        {
          "__type__": "cbb8an4cWJIy7jTE63ZIcvD",
          "node": {
            "__id__": 1
          }
        },
        {
          "__type__": "cc.RigidBody",
          "node": {
            "__id__": 1
          }
        },
        {
          "__type__": "cc.PhysicsCircleCollider",
          "node": {
            "__id__": 1
          },
          "_radius": 75
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "02WMtLVAZPqabXRAAMUPrl"
        },
        "fileId": "79Thy4pq9EBJQLVFnllh/D"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 100,
        "height": 100
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "Body",
      "_parent": {
        "__id__": 1
      },
      "_children": [
        {
          "__id__": 3
        },
        {
          "__id__": 4
        },
        {
          "__id__": 5
        },
        {
          "__id__": 7
        },
        {
          "__id__": 8
        },
        {
          "__id__": 10
        }
      ],
      "_components": [
        {
          "__id__": 12
        },
        {
          "__type__": "cc.CircleCollider",
          "node": {
            "__id__": 2
          },
          "tag": 3,
          "_radius": 75
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "02WMtLVAZPqabXRAAMUPrl"
        },
        "fileId": "eft1hJf4dD26wETS+LmMHc"
      },
      "_color": {
        "__type__": "cc.Color",
        "r": 243,
        "g": 243,
        "b": 250
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 150,
        "height": 150
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "bai_ske",
      "_parent": {
        "__id__": 2
      },
      "_active": false,
      "_components": [
        {
          "__type__": "dragonBones.ArmatureDisplay",
          "node": {
            "__id__": 3
          },
          "_armatureName": "MovieClip",
          "_animationName": "newAnimation",
          "_preCacheMode": 0,
          "_armatureKey": "639f55fe-ebdb-462d-b474-f6b9d112488b#a7c86e2f-b879-4180-ab0c-d146c5e18c38",
          "_N$dragonAsset": {
            "__uuid__": "63n1X+69tGLbR09rnREkiL"
          },
          "_N$dragonAtlasAsset": {
            "__uuid__": "a7yG4vuHlBgKsM0UbF4Yw4"
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "02WMtLVAZPqabXRAAMUPrl"
        },
        "fileId": "0e5JHqjdhIyaGtIr3OSO5G"
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3.6,
          3.6,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "Tail",
      "_parent": {
        "__id__": 2
      },
      "_active": false,
      "_components": [
        {
          "__type__": "cc.MotionStreak",
          "node": {
            "__id__": 4
          },
          "_fadeTime": 0.65,
          "_stroke": 150,
          "_texture": {
            "__uuid__": "eaEZsKXElDGYJ/sJTBkk/d"
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "02WMtLVAZPqabXRAAMUPrl"
        },
        "fileId": "c9+iipdMNCAa1joLwa8zf8"
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "skin",
      "_parent": {
        "__id__": 2
      },
      "_components": [
        {
          "__id__": 6
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "02WMtLVAZPqabXRAAMUPrl"
        },
        "fileId": "f9XMzMFi5AM7MpeBbQFFLh"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 150,
        "height": 150
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Sprite",
      "node": {
        "__id__": 5
      },
      "_spriteFrame": {
        "__uuid__": "6cjyhCjN1LDK08YBD0GjLB"
      },
      "_sizeMode": 0
    },
    {
      "__type__": "cc.Node",
      "_name": "ming_xian",
      "_parent": {
        "__id__": 2
      },
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 7
          },
          "_spriteFrame": {
            "__uuid__": "09XNAubCtITZYQlBVM00Gy"
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "02WMtLVAZPqabXRAAMUPrl"
        },
        "fileId": "21N5iAuUdCRoSprVH+iCj5"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 122,
        "height": 26
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          61,
          -86.8,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "NameTxt",
      "_parent": {
        "__id__": 2
      },
      "_components": [
        {
          "__id__": 9
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "02WMtLVAZPqabXRAAMUPrl"
        },
        "fileId": "4dXIaXfjFOr7TGYtWopAP7"
      },
      "_color": {
        "__type__": "cc.Color",
        "r": 134,
        "g": 233,
        "b": 254
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 97.8,
        "height": 30
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          73.4,
          -83.6,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Label",
      "node": {
        "__id__": 8
      },
      "_useOriginalSize": false,
      "_string": "无名",
      "_N$string": "无名",
      "_fontSize": 20,
      "_N$horizontalAlign": 1,
      "_N$verticalAlign": 1,
      "_N$overflow": 2
    },
    {
      "__type__": "cc.Node",
      "_name": "face",
      "_parent": {
        "__id__": 2
      },
      "_active": false,
      "_components": [
        {
          "__id__": 11
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "02WMtLVAZPqabXRAAMUPrl"
        },
        "fileId": "ceTUnGExxPxJdS6CI/e+aV"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 107,
        "height": 84
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Sprite",
      "node": {
        "__id__": 10
      },
      "_spriteFrame": {
        "__uuid__": "5cLvwotipGroAjJGAVwUzV"
      }
    },
    {
      "__type__": "68f37xrkmpGcZut7SNLEz2/",
      "node": {
        "__id__": 2
      },
      "skin": {
        "__id__": 6
      },
      "face": {
        "__id__": 11
      },
      "faceSFArr": [
        {
          "__uuid__": "5cLvwotipGroAjJGAVwUzV"
        },
        {
          "__uuid__": "77YKLuTsxEiLNq4WpGKncF"
        },
        {
          "__uuid__": "9ejK/j6npJL5HZZcaIo76L"
        }
      ]
    },
    {
      "__type__": "cc.Node",
      "_name": "KnifePool",
      "_parent": {
        "__id__": 1
      },
      "_components": [
        {
          "__id__": 14
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "02WMtLVAZPqabXRAAMUPrl"
        },
        "fileId": "d2jJQmGOhEur2YEBek8cUl"
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "c4bdd116CZJqJdKFHYxqqqR",
      "node": {
        "__id__": 13
      },
      "player": {
        "__id__": 15
      }
    },
    {
      "__type__": "c3b100Vh/REDKGWVEdiJIDB",
      "node": {
        "__id__": 1
      },
      "knifePool": {
        "__id__": 14
      },
      "nameTxt": {
        "__id__": 9
      },
      "body": {
        "__id__": 12
      },
      "circle": {
        "__id__": 3
      },
      "tail": {
        "__id__": 4
      },
      "skins": [
        {
          "__uuid__": "6cjyhCjN1LDK08YBD0GjLB"
        },
        {
          "__uuid__": "d04m28/s5NzZTb4ytjpjf4"
        },
        {
          "__uuid__": "fcBTf2WBNOg4nl/Twd21hw"
        },
        {
          "__uuid__": "9eqB+dXVNN4ZK02WWmxk3/"
        },
        {
          "__uuid__": "177mt+iIlAvq6BRenCyLS8"
        },
        {
          "__uuid__": "0bI/grRPtHX4q/+Sbdn9Ou"
        },
        {
          "__uuid__": "b4T8fmntNJWpLglqmj3+Xu"
        },
        {
          "__uuid__": "d1GKL4WOZGGrqV6rV7dzC7"
        }
      ]
    }
  ],
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "15",
      "texture": "9fM7RC0flB8qgvMEZEQHkH",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "36",
      "texture": "8e0juKBX1FOKcxu/3qjSjR",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  [
    {
      "__type__": "cc.Prefab",
      "_name": "zangai_4",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "zangai_4",
      "_children": [
        {
          "__id__": 2
        }
      ],
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 1
          },
          "_spriteFrame": {
            "__uuid__": "69JcV17jxLN5gNEWmJV+/n"
          }
        },
        {
          "__type__": "cc.RigidBody",
          "node": {
            "__id__": 1
          },
          "_type": 0
        },
        {
          "__type__": "cc.PhysicsPolygonCollider",
          "node": {
            "__id__": 1
          },
          "points": [
            {
              "__type__": "cc.Vec2",
              "x": -56,
              "y": -263
            },
            {
              "__type__": "cc.Vec2",
              "x": 7,
              "y": -231
            },
            {
              "__type__": "cc.Vec2",
              "x": 78,
              "y": -165
            },
            {
              "__type__": "cc.Vec2",
              "x": 106,
              "y": -121
            },
            {
              "__type__": "cc.Vec2",
              "x": 141,
              "y": -106
            },
            {
              "__type__": "cc.Vec2",
              "x": 150,
              "y": -57
            },
            {
              "__type__": "cc.Vec2",
              "x": 181,
              "y": -29
            },
            {
              "__type__": "cc.Vec2",
              "x": 189.6,
              "y": 37.3
            },
            {
              "__type__": "cc.Vec2",
              "x": 106.6,
              "y": 119.3
            },
            {
              "__type__": "cc.Vec2",
              "x": 73,
              "y": 157
            },
            {
              "__type__": "cc.Vec2",
              "x": 29,
              "y": 236
            },
            {
              "__type__": "cc.Vec2",
              "x": -15,
              "y": 266
            },
            {
              "__type__": "cc.Vec2",
              "x": -83,
              "y": 242
            },
            {
              "__type__": "cc.Vec2",
              "x": -148,
              "y": 140
            },
            {
              "__type__": "cc.Vec2",
              "x": -184,
              "y": 31
            },
            {
              "__type__": "cc.Vec2",
              "x": -165,
              "y": -73
            },
            {
              "__type__": "cc.Vec2",
              "x": -117,
              "y": -227
            }
          ]
        },
        {
          "__type__": "e4c4cYS2FtI6p+AI35rs0jE",
          "node": {
            "__id__": 1
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "04e2OBIrZP9qMcnfo2vDBu"
        },
        "fileId": "22AZzprExOaIpkPbhDaDDq"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 380,
        "height": 527
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          378,
          -575,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "New Node",
      "_parent": {
        "__id__": 1
      },
      "_components": [
        {
          "__type__": "cc.PolygonCollider",
          "node": {
            "__id__": 2
          },
          "tag": 2,
          "points": [
            {
              "__type__": "cc.Vec2",
              "x": -132,
              "y": -189
            },
            {
              "__type__": "cc.Vec2",
              "x": -100,
              "y": -245
            },
            {
              "__type__": "cc.Vec2",
              "x": -62,
              "y": -261
            },
            {
              "__type__": "cc.Vec2",
              "y": -239
            },
            {
              "__type__": "cc.Vec2",
              "x": 76,
              "y": -168
            },
            {
              "__type__": "cc.Vec2",
              "x": 107,
              "y": -123
            },
            {
              "__type__": "cc.Vec2",
              "x": 129,
              "y": -117
            },
            {
              "__type__": "cc.Vec2",
              "x": 153,
              "y": -63
            },
            {
              "__type__": "cc.Vec2",
              "x": 184,
              "y": -20
            },
            {
              "__type__": "cc.Vec2",
              "x": 190,
              "y": 40
            },
            {
              "__type__": "cc.Vec2",
              "x": 91,
              "y": 137
            },
            {
              "__type__": "cc.Vec2",
              "x": 39,
              "y": 226
            },
            {
              "__type__": "cc.Vec2",
              "x": -15,
              "y": 265
            },
            {
              "__type__": "cc.Vec2",
              "x": -89,
              "y": 244
            },
            {
              "__type__": "cc.Vec2",
              "x": -163,
              "y": 92
            },
            {
              "__type__": "cc.Vec2",
              "x": -180,
              "y": 29
            },
            {
              "__type__": "cc.Vec2",
              "x": -178,
              "y": -24
            }
          ]
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "04e2OBIrZP9qMcnfo2vDBu"
        },
        "fileId": "20KWuoMY1BGpxGgSPextTN"
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    }
  ],
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "ming_xian",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        42,
        127,
        122,
        26
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        122,
        26
      ],
      "rotated": 1,
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "duanwei-jieji-1",
      "texture": "aaxXGTvtFFj41/boKCKlvr",
      "rect": [
        0,
        0,
        88,
        22
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        88,
        22
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "xingqiu-6",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        339,
        118,
        115,
        115
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        115,
        115
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "38",
      "texture": "48j5khf+pAZYW1RIfmksEC",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.EffectAsset",
    "_name": "builtin-2d-spine",
    "techniques": [
      {
        "passes": [
          {
            "blendState": {
              "targets": [
                {
                  "blend": true
                }
              ]
            },
            "rasterizerState": {
              "cullMode": 0
            },
            "properties": {
              "texture": {
                "value": "white",
                "type": 29
              },
              "alphaThreshold": {
                "value": [
                  0.5
                ],
                "type": 13
              }
            },
            "program": "builtin-2d-spine|vs|fs"
          }
        ]
      }
    ],
    "shaders": [
      {
        "hash": 3550530479,
        "glsl3": {
          "vert": "\nprecision highp float;\nuniform CCGlobal {\n  mat4 cc_matView;\n  mat4 cc_matViewInv;\n  mat4 cc_matProj;\n  mat4 cc_matProjInv;\n  mat4 cc_matViewProj;\n  mat4 cc_matViewProjInv;\n  vec4 cc_cameraPos;\n  vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_screenScale;\n};\nuniform CCLocal {\n  mat4 cc_matWorld;\n  mat4 cc_matWorldIT;\n};\nin vec3 a_position;\nin vec4 a_color;\n#if USE_TINT\n  in vec4 a_color0;\n#endif\nin vec2 a_uv0;\nout vec2 v_uv0;\nout vec4 v_light;\n#if USE_TINT\n  out vec4 v_dark;\n#endif\nvoid main () {\n  mat4 mvp;\n  #if CC_USE_MODEL\n    mvp = cc_matViewProj * cc_matWorld;\n  #else\n    mvp = cc_matViewProj;\n  #endif\n  v_uv0 = a_uv0;\n  v_light = a_color;\n  #if USE_TINT\n    v_dark = a_color0;\n  #endif\n  gl_Position = mvp * vec4(a_position, 1);\n}",
          "frag": "\nprecision highp float;\nuniform sampler2D texture;\nin vec2 v_uv0;\nin vec4 v_light;\n#if USE_TINT\n  in vec4 v_dark;\n#endif\n#if USE_ALPHA_TEST\n  uniform ALPHA_TEST {\n    float alphaThreshold;\n  };\n#endif\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\nvoid main () {\n  vec4 texColor = vec4(1.0);\n  vec4 texture_tmp = texture(texture, v_uv0);\n  #if CC_USE_ALPHA_ATLAS_texture\n      texture_tmp.a *= texture(texture, v_uv0 + vec2(0, 0.5)).r;\n  #endif\n  #if INPUT_IS_GAMMA\n    texColor.rgb *= (texture_tmp.rgb * texture_tmp.rgb);\n    texColor.a *= texture_tmp.a;\n  #else\n    texColor *= texture_tmp;\n  #endif\n  vec4 finalColor;\n  #if USE_TINT\n    finalColor.a = v_light.a * texColor.a;\n    finalColor.rgb = ((texColor.a - 1.0) * v_dark.a + 1.0 - texColor.rgb) * v_dark.rgb + texColor.rgb * v_light.rgb;\n  #else\n    finalColor = texColor * v_light;\n  #endif\n  ALPHA_TEST(finalColor);\n  gl_FragColor = finalColor;\n}"
        },
        "glsl1": {
          "vert": "\nprecision highp float;\nuniform mat4 cc_matViewProj;\nuniform mat4 cc_matWorld;\nattribute vec3 a_position;\nattribute vec4 a_color;\n#if USE_TINT\n  attribute vec4 a_color0;\n#endif\nattribute vec2 a_uv0;\nvarying vec2 v_uv0;\nvarying vec4 v_light;\n#if USE_TINT\n  varying vec4 v_dark;\n#endif\nvoid main () {\n  mat4 mvp;\n  #if CC_USE_MODEL\n    mvp = cc_matViewProj * cc_matWorld;\n  #else\n    mvp = cc_matViewProj;\n  #endif\n  v_uv0 = a_uv0;\n  v_light = a_color;\n  #if USE_TINT\n    v_dark = a_color0;\n  #endif\n  gl_Position = mvp * vec4(a_position, 1);\n}",
          "frag": "\nprecision highp float;\nuniform sampler2D texture;\nvarying vec2 v_uv0;\nvarying vec4 v_light;\n#if USE_TINT\n  varying vec4 v_dark;\n#endif\n#if USE_ALPHA_TEST\n  uniform float alphaThreshold;\n#endif\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\nvoid main () {\n  vec4 texColor = vec4(1.0);\n  vec4 texture_tmp = texture2D(texture, v_uv0);\n  #if CC_USE_ALPHA_ATLAS_texture\n      texture_tmp.a *= texture2D(texture, v_uv0 + vec2(0, 0.5)).r;\n  #endif\n  #if INPUT_IS_GAMMA\n    texColor.rgb *= (texture_tmp.rgb * texture_tmp.rgb);\n    texColor.a *= texture_tmp.a;\n  #else\n    texColor *= texture_tmp;\n  #endif\n  vec4 finalColor;\n  #if USE_TINT\n    finalColor.a = v_light.a * texColor.a;\n    finalColor.rgb = ((texColor.a - 1.0) * v_dark.a + 1.0 - texColor.rgb) * v_dark.rgb + texColor.rgb * v_light.rgb;\n  #else\n    finalColor = texColor * v_light;\n  #endif\n  ALPHA_TEST(finalColor);\n  gl_FragColor = finalColor;\n}"
        },
        "builtins": {
          "globals": {
            "blocks": [
              {
                "name": "CCGlobal",
                "defines": []
              }
            ],
            "samplers": []
          },
          "locals": {
            "blocks": [
              {
                "name": "CCLocal",
                "defines": []
              }
            ],
            "samplers": []
          }
        },
        "defines": [
          {
            "name": "USE_TINT",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_MODEL",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "USE_ALPHA_TEST",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_ALPHA_ATLAS_texture",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "INPUT_IS_GAMMA",
            "type": "boolean",
            "defines": []
          }
        ],
        "blocks": [
          {
            "name": "ALPHA_TEST",
            "members": [
              {
                "name": "alphaThreshold",
                "type": 13,
                "count": 1
              }
            ],
            "defines": [
              "USE_ALPHA_TEST"
            ],
            "binding": 0
          }
        ],
        "samplers": [
          {
            "name": "texture",
            "type": 29,
            "count": 1,
            "defines": [],
            "binding": 30
          }
        ],
        "record": null,
        "name": "builtin-2d-spine|vs|fs"
      }
    ]
  },
  [
    {
      "__type__": "cc.Prefab",
      "_name": "Zangai_6",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "Zangai_6",
      "_children": [
        {
          "__id__": 2
        }
      ],
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 1
          },
          "_spriteFrame": {
            "__uuid__": "6bm5EXFgJGVK2bf7H5n5nQ"
          }
        },
        {
          "__type__": "cc.RigidBody",
          "node": {
            "__id__": 1
          },
          "_type": 1
        },
        {
          "__type__": "cc.PhysicsPolygonCollider",
          "node": {
            "__id__": 1
          },
          "points": [
            {
              "__type__": "cc.Vec2",
              "x": -146,
              "y": -51
            },
            {
              "__type__": "cc.Vec2",
              "x": -133,
              "y": -124
            },
            {
              "__type__": "cc.Vec2",
              "x": -90,
              "y": -183
            },
            {
              "__type__": "cc.Vec2",
              "x": -72,
              "y": -255
            },
            {
              "__type__": "cc.Vec2",
              "x": -33,
              "y": -285
            },
            {
              "__type__": "cc.Vec2",
              "x": -5,
              "y": -279
            },
            {
              "__type__": "cc.Vec2",
              "x": 29,
              "y": -281
            },
            {
              "__type__": "cc.Vec2",
              "x": 78,
              "y": -275
            },
            {
              "__type__": "cc.Vec2",
              "x": 111,
              "y": -254
            },
            {
              "__type__": "cc.Vec2",
              "x": 121,
              "y": -202
            },
            {
              "__type__": "cc.Vec2",
              "x": 143,
              "y": -160
            },
            {
              "__type__": "cc.Vec2",
              "x": 159,
              "y": -101
            },
            {
              "__type__": "cc.Vec2",
              "x": 150,
              "y": -63
            },
            {
              "__type__": "cc.Vec2",
              "x": 157,
              "y": -25
            },
            {
              "__type__": "cc.Vec2",
              "x": 146,
              "y": 6
            },
            {
              "__type__": "cc.Vec2",
              "x": 152,
              "y": 36
            },
            {
              "__type__": "cc.Vec2",
              "x": 134,
              "y": 111
            },
            {
              "__type__": "cc.Vec2",
              "x": 122,
              "y": 195
            },
            {
              "__type__": "cc.Vec2",
              "x": 100,
              "y": 219
            },
            {
              "__type__": "cc.Vec2",
              "x": -9,
              "y": 283
            },
            {
              "__type__": "cc.Vec2",
              "x": -70,
              "y": 286
            },
            {
              "__type__": "cc.Vec2",
              "x": -90,
              "y": 272
            },
            {
              "__type__": "cc.Vec2",
              "x": -101,
              "y": 234
            },
            {
              "__type__": "cc.Vec2",
              "x": -143,
              "y": 163
            },
            {
              "__type__": "cc.Vec2",
              "x": -140,
              "y": 76
            },
            {
              "__type__": "cc.Vec2",
              "x": -157,
              "y": 31
            },
            {
              "__type__": "cc.Vec2",
              "x": -158,
              "y": -19
            }
          ]
        },
        {
          "__type__": "e4c4cYS2FtI6p+AI35rs0jE",
          "node": {
            "__id__": 1
          },
          "type": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "0f7RvFWC9O+pTMZbzLdae1"
        },
        "fileId": "30g8cHEYtMiLWMcb5BnRA3"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 324,
        "height": 569
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          1302,
          -137,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "New Node",
      "_parent": {
        "__id__": 1
      },
      "_components": [
        {
          "__type__": "cc.PolygonCollider",
          "node": {
            "__id__": 2
          },
          "tag": 2,
          "points": [
            {
              "__type__": "cc.Vec2",
              "x": -40,
              "y": -63
            },
            {
              "__type__": "cc.Vec2",
              "x": -36,
              "y": -111
            },
            {
              "__type__": "cc.Vec2",
              "x": -6,
              "y": -159
            },
            {
              "__type__": "cc.Vec2",
              "x": 5,
              "y": -177
            },
            {
              "__type__": "cc.Vec2",
              "x": 14,
              "y": -204
            },
            {
              "__type__": "cc.Vec2",
              "x": 28,
              "y": -241
            },
            {
              "__type__": "cc.Vec2",
              "x": 59,
              "y": -283
            },
            {
              "__type__": "cc.Vec2",
              "x": 88,
              "y": -281
            },
            {
              "__type__": "cc.Vec2",
              "x": 131,
              "y": -285
            },
            {
              "__type__": "cc.Vec2",
              "x": 201,
              "y": -267
            },
            {
              "__type__": "cc.Vec2",
              "x": 215,
              "y": -244
            },
            {
              "__type__": "cc.Vec2",
              "x": 224,
              "y": -195
            },
            {
              "__type__": "cc.Vec2",
              "x": 252,
              "y": -143
            },
            {
              "__type__": "cc.Vec2",
              "x": 257,
              "y": -111
            },
            {
              "__type__": "cc.Vec2",
              "x": 251,
              "y": -69
            },
            {
              "__type__": "cc.Vec2",
              "x": 260,
              "y": -37
            },
            {
              "__type__": "cc.Vec2",
              "x": 246,
              "y": 7
            },
            {
              "__type__": "cc.Vec2",
              "x": 249,
              "y": 52
            },
            {
              "__type__": "cc.Vec2",
              "x": 235,
              "y": 97
            },
            {
              "__type__": "cc.Vec2",
              "x": 229,
              "y": 166
            },
            {
              "__type__": "cc.Vec2",
              "x": 216,
              "y": 208
            },
            {
              "__type__": "cc.Vec2",
              "x": 94,
              "y": 282
            },
            {
              "__type__": "cc.Vec2",
              "x": 28,
              "y": 282
            },
            {
              "__type__": "cc.Vec2",
              "x": 8,
              "y": 266
            },
            {
              "__type__": "cc.Vec2",
              "x": -1,
              "y": 229
            },
            {
              "__type__": "cc.Vec2",
              "x": -45,
              "y": 154
            },
            {
              "__type__": "cc.Vec2",
              "x": -39,
              "y": 129
            },
            {
              "__type__": "cc.Vec2",
              "x": -38,
              "y": 93
            },
            {
              "__type__": "cc.Vec2",
              "x": -50,
              "y": 50
            },
            {
              "__type__": "cc.Vec2",
              "x": -63,
              "y": -14
            }
          ]
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "0f7RvFWC9O+pTMZbzLdae1"
        },
        "fileId": "c2RjScZi5NopKqDE4m8jmx"
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          -101,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    }
  ],
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "19",
      "texture": "8dIKvGytRLx5scqVacEPNM",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  [
    {
      "__type__": "cc.Prefab",
      "_name": "zangai-dong_2",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "zangai-dong_2",
      "_children": [
        {
          "__id__": 2
        }
      ],
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 1
          },
          "_spriteFrame": {
            "__uuid__": "71OyVysEJLX78RbyaEnVno"
          }
        },
        {
          "__type__": "cc.RigidBody",
          "node": {
            "__id__": 1
          },
          "_type": 0
        },
        {
          "__type__": "cc.PhysicsPolygonCollider",
          "node": {
            "__id__": 1
          },
          "points": [
            {
              "__type__": "cc.Vec2",
              "x": -133,
              "y": -139
            },
            {
              "__type__": "cc.Vec2",
              "x": -92,
              "y": -245
            },
            {
              "__type__": "cc.Vec2",
              "x": -27,
              "y": -316
            },
            {
              "__type__": "cc.Vec2",
              "x": 45,
              "y": -317
            },
            {
              "__type__": "cc.Vec2",
              "x": 102,
              "y": -232
            },
            {
              "__type__": "cc.Vec2",
              "x": 145.1,
              "y": -62.2
            },
            {
              "__type__": "cc.Vec2",
              "x": 125.2,
              "y": 25.8
            },
            {
              "__type__": "cc.Vec2",
              "x": 68.4,
              "y": 84.4
            },
            {
              "__type__": "cc.Vec2",
              "x": -4,
              "y": 134.5
            },
            {
              "__type__": "cc.Vec2",
              "x": -96,
              "y": 159
            },
            {
              "__type__": "cc.Vec2",
              "x": -129,
              "y": 117
            }
          ]
        },
        {
          "__type__": "e4c4cYS2FtI6p+AI35rs0jE",
          "node": {
            "__id__": 1
          },
          "type": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "11ck1lZtpEEpaCd8+aI15E"
        },
        "fileId": "38siIQVwJMF7VjP9JpO5el"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 296,
        "height": 640
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          -761,
          687,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "New Node",
      "_parent": {
        "__id__": 1
      },
      "_components": [
        {
          "__type__": "cc.PolygonCollider",
          "node": {
            "__id__": 2
          },
          "tag": 2,
          "points": [
            {
              "__type__": "cc.Vec2",
              "x": -130,
              "y": -110
            },
            {
              "__type__": "cc.Vec2",
              "x": -104,
              "y": -228
            },
            {
              "__type__": "cc.Vec2",
              "x": -31,
              "y": -315
            },
            {
              "__type__": "cc.Vec2",
              "x": 44,
              "y": -318
            },
            {
              "__type__": "cc.Vec2",
              "x": 123,
              "y": -173
            },
            {
              "__type__": "cc.Vec2",
              "x": 143.7,
              "y": -46.5
            },
            {
              "__type__": "cc.Vec2",
              "x": 116,
              "y": 39
            },
            {
              "__type__": "cc.Vec2",
              "x": 57.2,
              "y": 94.1
            },
            {
              "__type__": "cc.Vec2",
              "x": -6,
              "y": 131.8
            },
            {
              "__type__": "cc.Vec2",
              "x": -93.1,
              "y": 159
            },
            {
              "__type__": "cc.Vec2",
              "x": -127,
              "y": 123
            },
            {
              "__type__": "cc.Vec2",
              "x": -134,
              "y": 43
            }
          ]
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "11ck1lZtpEEpaCd8+aI15E"
        },
        "fileId": "a6ABudxoJC1byYqJAMxbYM"
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    }
  ],
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "daoju_jiasu",
      "texture": "29uiny4YlCwbVj4CNW6TxA",
      "rect": [
        0,
        0,
        116,
        115
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        116,
        115
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.EffectAsset",
    "_name": "builtin-2d-gray-sprite",
    "techniques": [
      {
        "passes": [
          {
            "blendState": {
              "targets": [
                {
                  "blend": true
                }
              ]
            },
            "rasterizerState": {
              "cullMode": 0
            },
            "properties": {
              "texture": {
                "value": "white",
                "type": 29
              }
            },
            "program": "builtin-2d-gray-sprite|vs|fs"
          }
        ]
      }
    ],
    "shaders": [
      {
        "hash": 4278481454,
        "glsl3": {
          "vert": "\nprecision highp float;\nuniform CCGlobal {\n  mat4 cc_matView;\n  mat4 cc_matViewInv;\n  mat4 cc_matProj;\n  mat4 cc_matProjInv;\n  mat4 cc_matViewProj;\n  mat4 cc_matViewProjInv;\n  vec4 cc_cameraPos;\n  vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_screenScale;\n};\nin vec3 a_position;\nin mediump vec2 a_uv0;\nout mediump vec2 v_uv0;\nin vec4 a_color;\nout vec4 v_color;\nvoid main () {\n  gl_Position = cc_matViewProj * vec4(a_position, 1);\n  v_uv0 = a_uv0;\n  v_color = a_color;\n}",
          "frag": "\nprecision highp float;\nuniform sampler2D texture;\nin mediump vec2 v_uv0;\nin vec4 v_color;\nvoid main () {\n  vec4 color = v_color;\n  vec4 texture_tmp = texture(texture, v_uv0);\n  #if CC_USE_ALPHA_ATLAS_texture\n      texture_tmp.a *= texture(texture, v_uv0 + vec2(0, 0.5)).r;\n  #endif\n  #if INPUT_IS_GAMMA\n    color.rgb *= (texture_tmp.rgb * texture_tmp.rgb);\n    color.a *= texture_tmp.a;\n  #else\n    color *= texture_tmp;\n  #endif\n  float gray = 0.2126*color.r + 0.7152*color.g + 0.0722*color.b;\n  gl_FragColor = vec4(gray, gray, gray, color.a);\n}"
        },
        "glsl1": {
          "vert": "\nprecision highp float;\nuniform mat4 cc_matViewProj;\nattribute vec3 a_position;\nattribute mediump vec2 a_uv0;\nvarying mediump vec2 v_uv0;\nattribute vec4 a_color;\nvarying vec4 v_color;\nvoid main () {\n  gl_Position = cc_matViewProj * vec4(a_position, 1);\n  v_uv0 = a_uv0;\n  v_color = a_color;\n}",
          "frag": "\nprecision highp float;\nuniform sampler2D texture;\nvarying mediump vec2 v_uv0;\nvarying vec4 v_color;\nvoid main () {\n  vec4 color = v_color;\n  vec4 texture_tmp = texture2D(texture, v_uv0);\n  #if CC_USE_ALPHA_ATLAS_texture\n      texture_tmp.a *= texture2D(texture, v_uv0 + vec2(0, 0.5)).r;\n  #endif\n  #if INPUT_IS_GAMMA\n    color.rgb *= (texture_tmp.rgb * texture_tmp.rgb);\n    color.a *= texture_tmp.a;\n  #else\n    color *= texture_tmp;\n  #endif\n  float gray = 0.2126*color.r + 0.7152*color.g + 0.0722*color.b;\n  gl_FragColor = vec4(gray, gray, gray, color.a);\n}"
        },
        "builtins": {
          "globals": {
            "blocks": [
              {
                "name": "CCGlobal",
                "defines": []
              }
            ],
            "samplers": []
          },
          "locals": {
            "blocks": [],
            "samplers": []
          }
        },
        "defines": [
          {
            "name": "CC_USE_ALPHA_ATLAS_texture",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "INPUT_IS_GAMMA",
            "type": "boolean",
            "defines": []
          }
        ],
        "blocks": [],
        "samplers": [
          {
            "name": "texture",
            "type": 29,
            "count": 1,
            "defines": [],
            "binding": 30
          }
        ],
        "record": null,
        "name": "builtin-2d-gray-sprite|vs|fs"
      }
    ]
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_8",
      "texture": "32Ig4qFJhI3ZaTkIXBEbej",
      "rect": [
        16,
        6,
        42,
        116
      ],
      "offset": [
        0.5,
        -2
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_21",
      "texture": "f5bWOqduxBO6MSeMAk1xTH",
      "rect": [
        17,
        14,
        40,
        96
      ],
      "offset": [
        0.5,
        0
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_0",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        823,
        115,
        23,
        100
      ],
      "offset": [
        0,
        -8
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "xingqiu-5",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        329,
        1,
        115,
        115
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        115,
        115
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "41",
      "texture": "e9qL6Fj4FI871DlmxjFVVA",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "33",
      "texture": "81ue1csA5Fh4yTlJQIVxYz",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "43",
      "texture": "bftOS2mnBJVrVTdpJLj2Zc",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "26",
      "texture": "a55/JG9XpG7L3MAyLwSoY2",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  [
    {
      "__type__": "cc.Prefab",
      "_name": "Item_fhl",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "Item_fhl",
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 1
          },
          "_spriteFrame": {
            "__uuid__": "321EMUsfFLo4xWRI3phBZB"
          }
        },
        {
          "__type__": "80113nWi9FNLaCAbUWEg+lL",
          "node": {
            "__id__": 1
          },
          "type": 1
        },
        {
          "__type__": "cc.BoxCollider",
          "node": {
            "__id__": 1
          },
          "tag": 8,
          "_size": {
            "__type__": "cc.Size",
            "width": 101,
            "height": 101
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "20w+9rFu5AkK9OF4YfiB5F"
        },
        "fileId": "c1+zQNNDdNL4MDEWO5DsVs"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 101,
        "height": 101
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    }
  ],
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_4",
      "texture": "bf2HJzEsNPTIOFf+yAsrPF",
      "rect": [
        16,
        1,
        42,
        121
      ],
      "offset": [
        0.5,
        0.5
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_15",
      "texture": "fazE6k/odHjaC9pbvAbzjj",
      "rect": [
        4,
        15,
        66,
        101
      ],
      "offset": [
        0.5,
        -3.5
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.EffectAsset",
    "_name": "builtin-2d-sprite",
    "techniques": [
      {
        "passes": [
          {
            "blendState": {
              "targets": [
                {
                  "blend": true
                }
              ]
            },
            "rasterizerState": {
              "cullMode": 0
            },
            "properties": {
              "texture": {
                "value": "white",
                "type": 29
              },
              "alphaThreshold": {
                "value": [
                  0.5
                ],
                "type": 13
              }
            },
            "program": "builtin-2d-sprite|vs|fs"
          }
        ]
      }
    ],
    "shaders": [
      {
        "hash": 3278106612,
        "glsl3": {
          "vert": "\nprecision highp float;\nuniform CCGlobal {\n  mat4 cc_matView;\n  mat4 cc_matViewInv;\n  mat4 cc_matProj;\n  mat4 cc_matProjInv;\n  mat4 cc_matViewProj;\n  mat4 cc_matViewProjInv;\n  vec4 cc_cameraPos;\n  vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_screenScale;\n};\nuniform CCLocal {\n  mat4 cc_matWorld;\n  mat4 cc_matWorldIT;\n};\nin vec3 a_position;\nin vec4 a_color;\nout vec4 v_color;\n#if USE_TEXTURE\nin vec2 a_uv0;\nout vec2 v_uv0;\n#endif\nvoid main () {\n  vec4 pos = vec4(a_position, 1);\n  #if CC_USE_MODEL\n  pos = cc_matViewProj * cc_matWorld * pos;\n  #else\n  pos = cc_matViewProj * pos;\n  #endif\n  #if USE_TEXTURE\n  v_uv0 = a_uv0;\n  #endif\n  v_color = a_color;\n  gl_Position = pos;\n}",
          "frag": "\nprecision highp float;\n#if USE_ALPHA_TEST\n  uniform ALPHA_TEST {\n    float alphaThreshold;\n  };\n#endif\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\nin vec4 v_color;\n#if USE_TEXTURE\nin vec2 v_uv0;\nuniform sampler2D texture;\n#endif\nvoid main () {\n  vec4 o = vec4(1, 1, 1, 1);\n  #if USE_TEXTURE\n  vec4 texture_tmp = texture(texture, v_uv0);\n  #if CC_USE_ALPHA_ATLAS_texture\n      texture_tmp.a *= texture(texture, v_uv0 + vec2(0, 0.5)).r;\n  #endif\n  #if INPUT_IS_GAMMA\n    o.rgb *= (texture_tmp.rgb * texture_tmp.rgb);\n    o.a *= texture_tmp.a;\n  #else\n    o *= texture_tmp;\n  #endif\n  #endif\n  o *= v_color;\n  ALPHA_TEST(o);\n  gl_FragColor = o;\n}"
        },
        "glsl1": {
          "vert": "\nprecision highp float;\nuniform mat4 cc_matViewProj;\nuniform mat4 cc_matWorld;\nattribute vec3 a_position;\nattribute vec4 a_color;\nvarying vec4 v_color;\n#if USE_TEXTURE\nattribute vec2 a_uv0;\nvarying vec2 v_uv0;\n#endif\nvoid main () {\n  vec4 pos = vec4(a_position, 1);\n  #if CC_USE_MODEL\n  pos = cc_matViewProj * cc_matWorld * pos;\n  #else\n  pos = cc_matViewProj * pos;\n  #endif\n  #if USE_TEXTURE\n  v_uv0 = a_uv0;\n  #endif\n  v_color = a_color;\n  gl_Position = pos;\n}",
          "frag": "\nprecision highp float;\n#if USE_ALPHA_TEST\n  uniform float alphaThreshold;\n#endif\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\nvarying vec4 v_color;\n#if USE_TEXTURE\nvarying vec2 v_uv0;\nuniform sampler2D texture;\n#endif\nvoid main () {\n  vec4 o = vec4(1, 1, 1, 1);\n  #if USE_TEXTURE\n  vec4 texture_tmp = texture2D(texture, v_uv0);\n  #if CC_USE_ALPHA_ATLAS_texture\n      texture_tmp.a *= texture2D(texture, v_uv0 + vec2(0, 0.5)).r;\n  #endif\n  #if INPUT_IS_GAMMA\n    o.rgb *= (texture_tmp.rgb * texture_tmp.rgb);\n    o.a *= texture_tmp.a;\n  #else\n    o *= texture_tmp;\n  #endif\n  #endif\n  o *= v_color;\n  ALPHA_TEST(o);\n  gl_FragColor = o;\n}"
        },
        "builtins": {
          "globals": {
            "blocks": [
              {
                "name": "CCGlobal",
                "defines": []
              }
            ],
            "samplers": []
          },
          "locals": {
            "blocks": [
              {
                "name": "CCLocal",
                "defines": []
              }
            ],
            "samplers": []
          }
        },
        "defines": [
          {
            "name": "USE_TEXTURE",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_MODEL",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "USE_ALPHA_TEST",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_ALPHA_ATLAS_texture",
            "type": "boolean",
            "defines": [
              "USE_TEXTURE"
            ]
          },
          {
            "name": "INPUT_IS_GAMMA",
            "type": "boolean",
            "defines": [
              "USE_TEXTURE"
            ]
          }
        ],
        "blocks": [
          {
            "name": "ALPHA_TEST",
            "members": [
              {
                "name": "alphaThreshold",
                "type": 13,
                "count": 1
              }
            ],
            "defines": [
              "USE_ALPHA_TEST"
            ],
            "binding": 0
          }
        ],
        "samplers": [
          {
            "name": "texture",
            "type": 29,
            "count": 1,
            "defines": [
              "USE_TEXTURE"
            ],
            "binding": 30
          }
        ],
        "record": null,
        "name": "builtin-2d-sprite|vs|fs"
      }
    ]
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "default_btn_disabled",
      "texture": "71VhFCTINJM6/Ky3oX9nBT",
      "rect": [
        0,
        0,
        40,
        40
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        40,
        40
      ],
      "capInsets": [
        12,
        12,
        12,
        12
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Material",
    "_name": "builtin-unlit",
    "_effectAsset": {
      "__uuid__": "6dkeWRTOBGXICfYQ7JUBnG"
    },
    "_techniqueData": {
      "0": {
        "props": {
          "diffuseTexture": {
            "__uuid__": "02delMVqdBD70a/HSD99FK"
          }
        },
        "defines": {
          "USE_DIFFUSE_TEXTURE": true
        }
      }
    }
  },
  {
    "__type__": "cc.EffectAsset",
    "_name": "builtin-3d-trail",
    "techniques": [
      {
        "name": "add",
        "passes": [
          {
            "rasterizerState": {
              "cullMode": 0
            },
            "blendState": {
              "targets": [
                {
                  "blend": true,
                  "blendSrc": 770,
                  "blendDst": 1,
                  "blendSrcAlpha": 770,
                  "blendDstAlpha": 1
                }
              ]
            },
            "depthStencilState": {
              "depthTest": true,
              "depthWrite": false
            },
            "properties": {
              "mainTexture": {
                "value": "grey",
                "type": 29
              },
              "mainTiling_Offset": {
                "value": [
                  1,
                  1,
                  0,
                  0
                ],
                "type": 16
              },
              "frameTile_velLenScale": {
                "value": [
                  1,
                  1,
                  0,
                  0
                ],
                "type": 16
              },
              "tintColor": {
                "value": [
                  0.5,
                  0.5,
                  0.5,
                  0.5
                ],
                "inspector": {
                  "type": "color"
                },
                "type": 16
              }
            },
            "program": "builtin-3d-trail|particle-trail:vs_main|tinted-fs:add"
          }
        ]
      },
      {
        "name": "alpha-blend",
        "passes": [
          {
            "rasterizerState": {
              "cullMode": 0
            },
            "blendState": {
              "targets": [
                {
                  "blend": true,
                  "blendSrc": 1,
                  "blendDst": 771,
                  "blendSrcAlpha": 1,
                  "blendDstAlpha": 771
                }
              ]
            },
            "depthStencilState": {
              "depthTest": true,
              "depthWrite": false
            },
            "properties": {
              "mainTexture": {
                "value": "grey",
                "type": 29
              },
              "mainTiling_Offset": {
                "value": [
                  1,
                  1,
                  0,
                  0
                ],
                "type": 16
              },
              "frameTile_velLenScale": {
                "value": [
                  1,
                  1,
                  0,
                  0
                ],
                "type": 16
              },
              "tintColor": {
                "value": [
                  0.5,
                  0.5,
                  0.5,
                  0.5
                ],
                "inspector": {
                  "type": "color"
                },
                "type": 16
              }
            },
            "program": "builtin-3d-trail|particle-trail:vs_main|tinted-fs:add"
          }
        ]
      },
      {
        "name": "add-multiply",
        "passes": [
          {
            "rasterizerState": {
              "cullMode": 0
            },
            "blendState": {
              "targets": [
                {
                  "blend": true,
                  "blendSrc": 1,
                  "blendDst": 771,
                  "blendSrcAlpha": 1,
                  "blendDstAlpha": 771
                }
              ]
            },
            "depthStencilState": {
              "depthTest": true,
              "depthWrite": false
            },
            "properties": {
              "mainTexture": {
                "value": "grey",
                "type": 29
              },
              "mainTiling_Offset": {
                "value": [
                  1,
                  1,
                  0,
                  0
                ],
                "type": 16
              },
              "frameTile_velLenScale": {
                "value": [
                  1,
                  1,
                  0,
                  0
                ],
                "type": 16
              },
              "tintColor": {
                "value": [
                  0.5,
                  0.5,
                  0.5,
                  0.5
                ],
                "inspector": {
                  "type": "color"
                },
                "type": 16
              }
            },
            "program": "builtin-3d-trail|particle-trail:vs_main|tinted-fs:multiply"
          }
        ]
      },
      {
        "name": "add-smooth",
        "passes": [
          {
            "rasterizerState": {
              "cullMode": 0
            },
            "blendState": {
              "targets": [
                {
                  "blend": true,
                  "blendSrc": 1,
                  "blendDst": 771,
                  "blendSrcAlpha": 1,
                  "blendDstAlpha": 771
                }
              ]
            },
            "depthStencilState": {
              "depthTest": true,
              "depthWrite": false
            },
            "properties": {
              "mainTexture": {
                "value": "grey",
                "type": 29
              },
              "mainTiling_Offset": {
                "value": [
                  1,
                  1,
                  0,
                  0
                ],
                "type": 16
              },
              "frameTile_velLenScale": {
                "value": [
                  1,
                  1,
                  0,
                  0
                ],
                "type": 16
              }
            },
            "program": "builtin-3d-trail|particle-trail:vs_main|no-tint-fs:addSmooth"
          }
        ]
      },
      {
        "name": "premultiply-blend",
        "passes": [
          {
            "rasterizerState": {
              "cullMode": 0
            },
            "blendState": {
              "targets": [
                {
                  "blend": true,
                  "blendSrc": 1,
                  "blendDst": 771,
                  "blendSrcAlpha": 1,
                  "blendDstAlpha": 771
                }
              ]
            },
            "depthStencilState": {
              "depthTest": true,
              "depthWrite": false
            },
            "properties": {
              "mainTexture": {
                "value": "grey",
                "type": 29
              },
              "mainTiling_Offset": {
                "value": [
                  1,
                  1,
                  0,
                  0
                ],
                "type": 16
              },
              "frameTile_velLenScale": {
                "value": [
                  1,
                  1,
                  0,
                  0
                ],
                "type": 16
              }
            },
            "program": "builtin-3d-trail|particle-trail:vs_main|no-tint-fs:premultiplied"
          }
        ]
      }
    ],
    "shaders": [
      {
        "hash": 2929688198,
        "glsl3": {
          "vert": "\nprecision mediump float;\nuniform Constants{\n    vec4 mainTiling_Offset;\n    vec4 frameTile_velLenScale;\n    vec4 scale;\n};\nuniform CCGlobal {\n  mat4 cc_matView;\n  mat4 cc_matViewInv;\n  mat4 cc_matProj;\n  mat4 cc_matProjInv;\n  mat4 cc_matViewProj;\n  mat4 cc_matViewProjInv;\n  vec4 cc_cameraPos;\n  vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_screenScale;\n};\nuniform CCLocal {\n  mat4 cc_matWorld;\n  mat4 cc_matWorldIT;\n};\nout vec2 uv;\nout vec4 color;\nin vec3 a_position;\nin vec4 a_texCoord;\nin vec3 a_texCoord1;\nin vec3 a_texCoord2;\nin vec4 a_color;\n#if CC_DRAW_WIRE_FRAME\n    out vec3 vBarycentric;\n#endif\nvec4 vs_main() {\n    highp vec4 pos = vec4(a_position, 1);\n    vec4 velocity = vec4(a_texCoord1.xyz, 0);\n#if !CC_USE_WORLD_SPACE\n    pos = cc_matWorld * pos;\n    velocity = cc_matWorld * velocity;\n#endif\n    float vertOffset = (a_texCoord.x - 0.5) * a_texCoord.y;\n    vec3 camUp = normalize(cross(pos.xyz - cc_cameraPos.xyz, velocity.xyz));\n    pos.xyz += camUp * vertOffset;\n    pos = cc_matViewProj * pos;\n    uv = a_texCoord.zw * mainTiling_Offset.xy + mainTiling_Offset.zw;;\n    color = a_color;\n#if CC_DRAW_WIRE_FRAME\n    vBarycentric = a_texCoord2;\n#endif\n    return pos;\n}\nvoid main() { gl_Position = vs_main(); }",
          "frag": "\nprecision mediump float;\nvec4 CCFragOutput (vec4 color) {\n  #if OUTPUT_TO_GAMMA\n    color.rgb = sqrt(color.rgb);\n  #endif\n\treturn color;\n}\nin vec2 uv;\nin vec4 color;\n#if CC_DRAW_WIRE_FRAME\n  in vec3 vBarycentric;\n#endif\nuniform sampler2D mainTexture;\nuniform FragConstants {\n  vec4 tintColor;\n};\nvec4 add () {\n  vec4 col = 2.0 * color * tintColor * texture(mainTexture, uv);\n  #if CC_DRAW_WIRE_FRAME\n      if (any(lessThan(vBarycentric, vec3(0.02)))) {\n          col = vec4(0., 1., 1., 1.);\n      }\n  #endif\n  return CCFragOutput(col);\n}\nout vec4 cc_FragColor;\nvoid main() { cc_FragColor = add(); }"
        },
        "glsl1": {
          "vert": "\nprecision mediump float;\nuniform vec4 mainTiling_Offset;\nuniform mat4 cc_matViewProj;\nuniform vec4 cc_cameraPos;\nuniform mat4 cc_matWorld;\nvarying vec2 uv;\nvarying vec4 color;\nattribute vec3 a_position;\nattribute vec4 a_texCoord;\nattribute vec3 a_texCoord1;\nattribute vec3 a_texCoord2;\nattribute vec4 a_color;\n#if CC_DRAW_WIRE_FRAME\n    varying vec3 vBarycentric;\n#endif\nvec4 vs_main() {\n    highp vec4 pos = vec4(a_position, 1);\n    vec4 velocity = vec4(a_texCoord1.xyz, 0);\n#if !CC_USE_WORLD_SPACE\n    pos = cc_matWorld * pos;\n    velocity = cc_matWorld * velocity;\n#endif\n    float vertOffset = (a_texCoord.x - 0.5) * a_texCoord.y;\n    vec3 camUp = normalize(cross(pos.xyz - cc_cameraPos.xyz, velocity.xyz));\n    pos.xyz += camUp * vertOffset;\n    pos = cc_matViewProj * pos;\n    uv = a_texCoord.zw * mainTiling_Offset.xy + mainTiling_Offset.zw;;\n    color = a_color;\n#if CC_DRAW_WIRE_FRAME\n    vBarycentric = a_texCoord2;\n#endif\n    return pos;\n}\nvoid main() { gl_Position = vs_main(); }",
          "frag": "\nprecision mediump float;\nvec4 CCFragOutput (vec4 color) {\n  #if OUTPUT_TO_GAMMA\n    color.rgb = sqrt(color.rgb);\n  #endif\n\treturn color;\n}\nvarying vec2 uv;\nvarying vec4 color;\n#if CC_DRAW_WIRE_FRAME\n  varying vec3 vBarycentric;\n#endif\nuniform sampler2D mainTexture;\nuniform vec4 tintColor;\nvec4 add () {\n  vec4 col = 2.0 * color * tintColor * texture2D(mainTexture, uv);\n  #if CC_DRAW_WIRE_FRAME\n      if (any(lessThan(vBarycentric, vec3(0.02)))) {\n          col = vec4(0., 1., 1., 1.);\n      }\n  #endif\n  return CCFragOutput(col);\n}\nvoid main() { gl_FragColor = add(); }"
        },
        "builtins": {
          "globals": {
            "blocks": [
              {
                "name": "CCGlobal",
                "defines": []
              }
            ],
            "samplers": []
          },
          "locals": {
            "blocks": [
              {
                "name": "CCLocal",
                "defines": []
              }
            ],
            "samplers": []
          }
        },
        "defines": [
          {
            "name": "CC_DRAW_WIRE_FRAME",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_WORLD_SPACE",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "OUTPUT_TO_GAMMA",
            "type": "boolean",
            "defines": []
          }
        ],
        "blocks": [
          {
            "name": "Constants",
            "members": [
              {
                "name": "mainTiling_Offset",
                "type": 16,
                "count": 1
              },
              {
                "name": "frameTile_velLenScale",
                "type": 16,
                "count": 1
              },
              {
                "name": "scale",
                "type": 16,
                "count": 1
              }
            ],
            "defines": [],
            "binding": 0
          },
          {
            "name": "FragConstants",
            "members": [
              {
                "name": "tintColor",
                "type": 16,
                "count": 1
              }
            ],
            "defines": [],
            "binding": 1
          }
        ],
        "samplers": [
          {
            "name": "mainTexture",
            "type": 29,
            "count": 1,
            "defines": [],
            "binding": 30
          }
        ],
        "record": null,
        "name": "builtin-3d-trail|particle-trail:vs_main|tinted-fs:add"
      },
      {
        "hash": 4224037318,
        "glsl3": {
          "vert": "\nprecision mediump float;\nuniform Constants{\n    vec4 mainTiling_Offset;\n    vec4 frameTile_velLenScale;\n    vec4 scale;\n};\nuniform CCGlobal {\n  mat4 cc_matView;\n  mat4 cc_matViewInv;\n  mat4 cc_matProj;\n  mat4 cc_matProjInv;\n  mat4 cc_matViewProj;\n  mat4 cc_matViewProjInv;\n  vec4 cc_cameraPos;\n  vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_screenScale;\n};\nuniform CCLocal {\n  mat4 cc_matWorld;\n  mat4 cc_matWorldIT;\n};\nout vec2 uv;\nout vec4 color;\nin vec3 a_position;\nin vec4 a_texCoord;\nin vec3 a_texCoord1;\nin vec3 a_texCoord2;\nin vec4 a_color;\n#if CC_DRAW_WIRE_FRAME\n    out vec3 vBarycentric;\n#endif\nvec4 vs_main() {\n    highp vec4 pos = vec4(a_position, 1);\n    vec4 velocity = vec4(a_texCoord1.xyz, 0);\n#if !CC_USE_WORLD_SPACE\n    pos = cc_matWorld * pos;\n    velocity = cc_matWorld * velocity;\n#endif\n    float vertOffset = (a_texCoord.x - 0.5) * a_texCoord.y;\n    vec3 camUp = normalize(cross(pos.xyz - cc_cameraPos.xyz, velocity.xyz));\n    pos.xyz += camUp * vertOffset;\n    pos = cc_matViewProj * pos;\n    uv = a_texCoord.zw * mainTiling_Offset.xy + mainTiling_Offset.zw;;\n    color = a_color;\n#if CC_DRAW_WIRE_FRAME\n    vBarycentric = a_texCoord2;\n#endif\n    return pos;\n}\nvoid main() { gl_Position = vs_main(); }",
          "frag": "\nprecision mediump float;\nvec4 CCFragOutput (vec4 color) {\n  #if OUTPUT_TO_GAMMA\n    color.rgb = sqrt(color.rgb);\n  #endif\n\treturn color;\n}\nin vec2 uv;\nin vec4 color;\n#if CC_DRAW_WIRE_FRAME\n  in vec3 vBarycentric;\n#endif\nuniform sampler2D mainTexture;\nuniform FragConstants {\n  vec4 tintColor;\n};\nvec4 multiply () {\n  vec4 col;\n  vec4 texColor = texture(mainTexture, uv);\n  col.rgb = tintColor.rgb * texColor.rgb * color.rgb * vec3(2.0);\n  col.a = (1.0 - texColor.a) * (tintColor.a * color.a * 2.0);\n  #if CC_DRAW_WIRE_FRAME\n      if (any(lessThan(vBarycentric, vec3(0.02)))) {\n          col = vec4(0., 1., 1., col.a);\n      }\n  #endif\n  return CCFragOutput(col);\n}\nout vec4 cc_FragColor;\nvoid main() { cc_FragColor = multiply(); }"
        },
        "glsl1": {
          "vert": "\nprecision mediump float;\nuniform vec4 mainTiling_Offset;\nuniform mat4 cc_matViewProj;\nuniform vec4 cc_cameraPos;\nuniform mat4 cc_matWorld;\nvarying vec2 uv;\nvarying vec4 color;\nattribute vec3 a_position;\nattribute vec4 a_texCoord;\nattribute vec3 a_texCoord1;\nattribute vec3 a_texCoord2;\nattribute vec4 a_color;\n#if CC_DRAW_WIRE_FRAME\n    varying vec3 vBarycentric;\n#endif\nvec4 vs_main() {\n    highp vec4 pos = vec4(a_position, 1);\n    vec4 velocity = vec4(a_texCoord1.xyz, 0);\n#if !CC_USE_WORLD_SPACE\n    pos = cc_matWorld * pos;\n    velocity = cc_matWorld * velocity;\n#endif\n    float vertOffset = (a_texCoord.x - 0.5) * a_texCoord.y;\n    vec3 camUp = normalize(cross(pos.xyz - cc_cameraPos.xyz, velocity.xyz));\n    pos.xyz += camUp * vertOffset;\n    pos = cc_matViewProj * pos;\n    uv = a_texCoord.zw * mainTiling_Offset.xy + mainTiling_Offset.zw;;\n    color = a_color;\n#if CC_DRAW_WIRE_FRAME\n    vBarycentric = a_texCoord2;\n#endif\n    return pos;\n}\nvoid main() { gl_Position = vs_main(); }",
          "frag": "\nprecision mediump float;\nvec4 CCFragOutput (vec4 color) {\n  #if OUTPUT_TO_GAMMA\n    color.rgb = sqrt(color.rgb);\n  #endif\n\treturn color;\n}\nvarying vec2 uv;\nvarying vec4 color;\n#if CC_DRAW_WIRE_FRAME\n  varying vec3 vBarycentric;\n#endif\nuniform sampler2D mainTexture;\nuniform vec4 tintColor;\nvec4 multiply () {\n  vec4 col;\n  vec4 texColor = texture2D(mainTexture, uv);\n  col.rgb = tintColor.rgb * texColor.rgb * color.rgb * vec3(2.0);\n  col.a = (1.0 - texColor.a) * (tintColor.a * color.a * 2.0);\n  #if CC_DRAW_WIRE_FRAME\n      if (any(lessThan(vBarycentric, vec3(0.02)))) {\n          col = vec4(0., 1., 1., col.a);\n      }\n  #endif\n  return CCFragOutput(col);\n}\nvoid main() { gl_FragColor = multiply(); }"
        },
        "builtins": {
          "globals": {
            "blocks": [
              {
                "name": "CCGlobal",
                "defines": []
              }
            ],
            "samplers": []
          },
          "locals": {
            "blocks": [
              {
                "name": "CCLocal",
                "defines": []
              }
            ],
            "samplers": []
          }
        },
        "defines": [
          {
            "name": "CC_DRAW_WIRE_FRAME",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_WORLD_SPACE",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "OUTPUT_TO_GAMMA",
            "type": "boolean",
            "defines": []
          }
        ],
        "blocks": [
          {
            "name": "Constants",
            "members": [
              {
                "name": "mainTiling_Offset",
                "type": 16,
                "count": 1
              },
              {
                "name": "frameTile_velLenScale",
                "type": 16,
                "count": 1
              },
              {
                "name": "scale",
                "type": 16,
                "count": 1
              }
            ],
            "defines": [],
            "binding": 0
          },
          {
            "name": "FragConstants",
            "members": [
              {
                "name": "tintColor",
                "type": 16,
                "count": 1
              }
            ],
            "defines": [],
            "binding": 1
          }
        ],
        "samplers": [
          {
            "name": "mainTexture",
            "type": 29,
            "count": 1,
            "defines": [],
            "binding": 30
          }
        ],
        "record": null,
        "name": "builtin-3d-trail|particle-trail:vs_main|tinted-fs:multiply"
      },
      {
        "hash": 1704877102,
        "glsl3": {
          "vert": "\nprecision mediump float;\nuniform Constants{\n    vec4 mainTiling_Offset;\n    vec4 frameTile_velLenScale;\n    vec4 scale;\n};\nuniform CCGlobal {\n  mat4 cc_matView;\n  mat4 cc_matViewInv;\n  mat4 cc_matProj;\n  mat4 cc_matProjInv;\n  mat4 cc_matViewProj;\n  mat4 cc_matViewProjInv;\n  vec4 cc_cameraPos;\n  vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_screenScale;\n};\nuniform CCLocal {\n  mat4 cc_matWorld;\n  mat4 cc_matWorldIT;\n};\nout vec2 uv;\nout vec4 color;\nin vec3 a_position;\nin vec4 a_texCoord;\nin vec3 a_texCoord1;\nin vec3 a_texCoord2;\nin vec4 a_color;\n#if CC_DRAW_WIRE_FRAME\n    out vec3 vBarycentric;\n#endif\nvec4 vs_main() {\n    highp vec4 pos = vec4(a_position, 1);\n    vec4 velocity = vec4(a_texCoord1.xyz, 0);\n#if !CC_USE_WORLD_SPACE\n    pos = cc_matWorld * pos;\n    velocity = cc_matWorld * velocity;\n#endif\n    float vertOffset = (a_texCoord.x - 0.5) * a_texCoord.y;\n    vec3 camUp = normalize(cross(pos.xyz - cc_cameraPos.xyz, velocity.xyz));\n    pos.xyz += camUp * vertOffset;\n    pos = cc_matViewProj * pos;\n    uv = a_texCoord.zw * mainTiling_Offset.xy + mainTiling_Offset.zw;;\n    color = a_color;\n#if CC_DRAW_WIRE_FRAME\n    vBarycentric = a_texCoord2;\n#endif\n    return pos;\n}\nvoid main() { gl_Position = vs_main(); }",
          "frag": "\nprecision mediump float;\nvec4 CCFragOutput (vec4 color) {\n  #if OUTPUT_TO_GAMMA\n    color.rgb = sqrt(color.rgb);\n  #endif\n\treturn color;\n}\nin vec2 uv;\nin vec4 color;\nuniform sampler2D mainTexture;\nvec4 addSmooth () {\n  vec4 col = color * texture(mainTexture, uv);\n  col.rgb *= col.a;\n  return CCFragOutput(col);\n}\nout vec4 cc_FragColor;\nvoid main() { cc_FragColor = addSmooth(); }"
        },
        "glsl1": {
          "vert": "\nprecision mediump float;\nuniform vec4 mainTiling_Offset;\nuniform mat4 cc_matViewProj;\nuniform vec4 cc_cameraPos;\nuniform mat4 cc_matWorld;\nvarying vec2 uv;\nvarying vec4 color;\nattribute vec3 a_position;\nattribute vec4 a_texCoord;\nattribute vec3 a_texCoord1;\nattribute vec3 a_texCoord2;\nattribute vec4 a_color;\n#if CC_DRAW_WIRE_FRAME\n    varying vec3 vBarycentric;\n#endif\nvec4 vs_main() {\n    highp vec4 pos = vec4(a_position, 1);\n    vec4 velocity = vec4(a_texCoord1.xyz, 0);\n#if !CC_USE_WORLD_SPACE\n    pos = cc_matWorld * pos;\n    velocity = cc_matWorld * velocity;\n#endif\n    float vertOffset = (a_texCoord.x - 0.5) * a_texCoord.y;\n    vec3 camUp = normalize(cross(pos.xyz - cc_cameraPos.xyz, velocity.xyz));\n    pos.xyz += camUp * vertOffset;\n    pos = cc_matViewProj * pos;\n    uv = a_texCoord.zw * mainTiling_Offset.xy + mainTiling_Offset.zw;;\n    color = a_color;\n#if CC_DRAW_WIRE_FRAME\n    vBarycentric = a_texCoord2;\n#endif\n    return pos;\n}\nvoid main() { gl_Position = vs_main(); }",
          "frag": "\nprecision mediump float;\nvec4 CCFragOutput (vec4 color) {\n  #if OUTPUT_TO_GAMMA\n    color.rgb = sqrt(color.rgb);\n  #endif\n\treturn color;\n}\nvarying vec2 uv;\nvarying vec4 color;\nuniform sampler2D mainTexture;\nvec4 addSmooth () {\n  vec4 col = color * texture2D(mainTexture, uv);\n  col.rgb *= col.a;\n  return CCFragOutput(col);\n}\nvoid main() { gl_FragColor = addSmooth(); }"
        },
        "builtins": {
          "globals": {
            "blocks": [
              {
                "name": "CCGlobal",
                "defines": []
              }
            ],
            "samplers": []
          },
          "locals": {
            "blocks": [
              {
                "name": "CCLocal",
                "defines": []
              }
            ],
            "samplers": []
          }
        },
        "defines": [
          {
            "name": "CC_DRAW_WIRE_FRAME",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_WORLD_SPACE",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "OUTPUT_TO_GAMMA",
            "type": "boolean",
            "defines": []
          }
        ],
        "blocks": [
          {
            "name": "Constants",
            "members": [
              {
                "name": "mainTiling_Offset",
                "type": 16,
                "count": 1
              },
              {
                "name": "frameTile_velLenScale",
                "type": 16,
                "count": 1
              },
              {
                "name": "scale",
                "type": 16,
                "count": 1
              }
            ],
            "defines": [],
            "binding": 0
          }
        ],
        "samplers": [
          {
            "name": "mainTexture",
            "type": 29,
            "count": 1,
            "defines": [],
            "binding": 30
          }
        ],
        "record": null,
        "name": "builtin-3d-trail|particle-trail:vs_main|no-tint-fs:addSmooth"
      },
      {
        "hash": 2717357054,
        "glsl3": {
          "vert": "\nprecision mediump float;\nuniform Constants{\n    vec4 mainTiling_Offset;\n    vec4 frameTile_velLenScale;\n    vec4 scale;\n};\nuniform CCGlobal {\n  mat4 cc_matView;\n  mat4 cc_matViewInv;\n  mat4 cc_matProj;\n  mat4 cc_matProjInv;\n  mat4 cc_matViewProj;\n  mat4 cc_matViewProjInv;\n  vec4 cc_cameraPos;\n  vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_screenScale;\n};\nuniform CCLocal {\n  mat4 cc_matWorld;\n  mat4 cc_matWorldIT;\n};\nout vec2 uv;\nout vec4 color;\nin vec3 a_position;\nin vec4 a_texCoord;\nin vec3 a_texCoord1;\nin vec3 a_texCoord2;\nin vec4 a_color;\n#if CC_DRAW_WIRE_FRAME\n    out vec3 vBarycentric;\n#endif\nvec4 vs_main() {\n    highp vec4 pos = vec4(a_position, 1);\n    vec4 velocity = vec4(a_texCoord1.xyz, 0);\n#if !CC_USE_WORLD_SPACE\n    pos = cc_matWorld * pos;\n    velocity = cc_matWorld * velocity;\n#endif\n    float vertOffset = (a_texCoord.x - 0.5) * a_texCoord.y;\n    vec3 camUp = normalize(cross(pos.xyz - cc_cameraPos.xyz, velocity.xyz));\n    pos.xyz += camUp * vertOffset;\n    pos = cc_matViewProj * pos;\n    uv = a_texCoord.zw * mainTiling_Offset.xy + mainTiling_Offset.zw;;\n    color = a_color;\n#if CC_DRAW_WIRE_FRAME\n    vBarycentric = a_texCoord2;\n#endif\n    return pos;\n}\nvoid main() { gl_Position = vs_main(); }",
          "frag": "\nprecision mediump float;\nvec4 CCFragOutput (vec4 color) {\n  #if OUTPUT_TO_GAMMA\n    color.rgb = sqrt(color.rgb);\n  #endif\n\treturn color;\n}\nin vec2 uv;\nin vec4 color;\nuniform sampler2D mainTexture;\nvec4 premultiplied () {\n  vec4 col = color * texture(mainTexture, uv) * color.a;\n  return CCFragOutput(col);\n}\nout vec4 cc_FragColor;\nvoid main() { cc_FragColor = premultiplied(); }"
        },
        "glsl1": {
          "vert": "\nprecision mediump float;\nuniform vec4 mainTiling_Offset;\nuniform mat4 cc_matViewProj;\nuniform vec4 cc_cameraPos;\nuniform mat4 cc_matWorld;\nvarying vec2 uv;\nvarying vec4 color;\nattribute vec3 a_position;\nattribute vec4 a_texCoord;\nattribute vec3 a_texCoord1;\nattribute vec3 a_texCoord2;\nattribute vec4 a_color;\n#if CC_DRAW_WIRE_FRAME\n    varying vec3 vBarycentric;\n#endif\nvec4 vs_main() {\n    highp vec4 pos = vec4(a_position, 1);\n    vec4 velocity = vec4(a_texCoord1.xyz, 0);\n#if !CC_USE_WORLD_SPACE\n    pos = cc_matWorld * pos;\n    velocity = cc_matWorld * velocity;\n#endif\n    float vertOffset = (a_texCoord.x - 0.5) * a_texCoord.y;\n    vec3 camUp = normalize(cross(pos.xyz - cc_cameraPos.xyz, velocity.xyz));\n    pos.xyz += camUp * vertOffset;\n    pos = cc_matViewProj * pos;\n    uv = a_texCoord.zw * mainTiling_Offset.xy + mainTiling_Offset.zw;;\n    color = a_color;\n#if CC_DRAW_WIRE_FRAME\n    vBarycentric = a_texCoord2;\n#endif\n    return pos;\n}\nvoid main() { gl_Position = vs_main(); }",
          "frag": "\nprecision mediump float;\nvec4 CCFragOutput (vec4 color) {\n  #if OUTPUT_TO_GAMMA\n    color.rgb = sqrt(color.rgb);\n  #endif\n\treturn color;\n}\nvarying vec2 uv;\nvarying vec4 color;\nuniform sampler2D mainTexture;\nvec4 premultiplied () {\n  vec4 col = color * texture2D(mainTexture, uv) * color.a;\n  return CCFragOutput(col);\n}\nvoid main() { gl_FragColor = premultiplied(); }"
        },
        "builtins": {
          "globals": {
            "blocks": [
              {
                "name": "CCGlobal",
                "defines": []
              }
            ],
            "samplers": []
          },
          "locals": {
            "blocks": [
              {
                "name": "CCLocal",
                "defines": []
              }
            ],
            "samplers": []
          }
        },
        "defines": [
          {
            "name": "CC_DRAW_WIRE_FRAME",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_WORLD_SPACE",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "OUTPUT_TO_GAMMA",
            "type": "boolean",
            "defines": []
          }
        ],
        "blocks": [
          {
            "name": "Constants",
            "members": [
              {
                "name": "mainTiling_Offset",
                "type": 16,
                "count": 1
              },
              {
                "name": "frameTile_velLenScale",
                "type": 16,
                "count": 1
              },
              {
                "name": "scale",
                "type": 16,
                "count": 1
              }
            ],
            "defines": [],
            "binding": 0
          }
        ],
        "samplers": [
          {
            "name": "mainTexture",
            "type": 29,
            "count": 1,
            "defines": [],
            "binding": 30
          }
        ],
        "record": null,
        "name": "builtin-3d-trail|particle-trail:vs_main|no-tint-fs:premultiplied"
      }
    ]
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_21",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        861,
        1,
        43,
        98
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        73,
        124
      ],
      "rotated": 1,
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "16",
      "texture": "d5yOw59PJMFqBGMC61jOgE",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "21",
      "texture": "f3B3dtYN1HL4h3n2gFNtDN",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_6",
      "texture": "84caBgkENHSJcqZFfu65yM",
      "rect": [
        16,
        7,
        42,
        110
      ],
      "offset": [
        0.5,
        0
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "zangai-dong_4",
      "texture": "18+LfHPt9NY7M8KnqFXKYl",
      "rect": [
        0,
        0,
        380,
        527
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        380,
        527
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "daoju_feng",
      "texture": "fc9tS45D5NSZDCgoEEcsFE",
      "rect": [
        0,
        0,
        101,
        101
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        101,
        101
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  [
    {
      "__type__": "cc.Prefab",
      "_name": "LevelIcon",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "LevelIcon",
      "_children": [
        {
          "__id__": 2
        },
        {
          "__id__": 4
        }
      ],
      "_components": [
        {
          "__type__": "8a516H4mcJAb7hInBhucHS5",
          "node": {
            "__id__": 1
          },
          "icon": {
            "__id__": 3
          },
          "uplevel": {
            "__id__": 4
          },
          "upelementArr": [
            {
              "__id__": 5
            },
            {
              "__id__": 8
            },
            {
              "__id__": 11
            }
          ]
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "34lvp2Rs5N8YiJPFEzPawh"
        },
        "fileId": "8aqpzQLLpId4eukPVEhP7t"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 125,
        "height": 125
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          -198,
          20,
          0,
          0,
          0,
          0,
          1,
          0.5,
          0.5,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "Icon",
      "_parent": {
        "__id__": 1
      },
      "_components": [
        {
          "__id__": 3
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "34lvp2Rs5N8YiJPFEzPawh"
        },
        "fileId": "da4XTZ2U9JJYHn9ZbCqJgU"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 183,
        "height": 165
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Sprite",
      "node": {
        "__id__": 2
      },
      "_spriteFrame": {
        "__uuid__": "dbHGonm4BCqI+l3Ncf4bSr"
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "UpLevel",
      "_parent": {
        "__id__": 1
      },
      "_children": [
        {
          "__id__": 5
        },
        {
          "__id__": 8
        },
        {
          "__id__": 11
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "34lvp2Rs5N8YiJPFEzPawh"
        },
        "fileId": "51Jy1U/l9FEIODHuToO4ku"
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          -93,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "Upelement",
      "_parent": {
        "__id__": 4
      },
      "_children": [
        {
          "__id__": 6
        },
        {
          "__id__": 7
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "34lvp2Rs5N8YiJPFEzPawh"
        },
        "fileId": "26iLBdw0NCOIzTF8NVMrPw"
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "bg",
      "_parent": {
        "__id__": 5
      },
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 6
          },
          "_spriteFrame": {
            "__uuid__": "09mBHl4ZVC5bG3PDcPOh5Y"
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "34lvp2Rs5N8YiJPFEzPawh"
        },
        "fileId": "58mlJIyRBLR5WXcIoM38Jd"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 88,
        "height": 22
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "upstate",
      "_parent": {
        "__id__": 5
      },
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 7
          },
          "_spriteFrame": {
            "__uuid__": "d2wOKaWKNFAaTLeTmH08V2"
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "34lvp2Rs5N8YiJPFEzPawh"
        },
        "fileId": "4b57lLC3FNpZDvwjjPAcuL"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 88,
        "height": 22
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "Upelement",
      "_parent": {
        "__id__": 4
      },
      "_children": [
        {
          "__id__": 9
        },
        {
          "__id__": 10
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "34lvp2Rs5N8YiJPFEzPawh"
        },
        "fileId": "a1A277b55HqIbPbcx/omYV"
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          -18,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "bg",
      "_parent": {
        "__id__": 8
      },
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 9
          },
          "_spriteFrame": {
            "__uuid__": "09mBHl4ZVC5bG3PDcPOh5Y"
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "34lvp2Rs5N8YiJPFEzPawh"
        },
        "fileId": "acIz3LGThLeb15JxvmyHEf"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 88,
        "height": 22
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "upstate",
      "_parent": {
        "__id__": 8
      },
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 10
          },
          "_spriteFrame": {
            "__uuid__": "d2wOKaWKNFAaTLeTmH08V2"
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "34lvp2Rs5N8YiJPFEzPawh"
        },
        "fileId": "d6pATkLORO5LHYIx8youW8"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 88,
        "height": 22
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "Upelement",
      "_parent": {
        "__id__": 4
      },
      "_children": [
        {
          "__id__": 12
        },
        {
          "__id__": 13
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "34lvp2Rs5N8YiJPFEzPawh"
        },
        "fileId": "adnfmUbg1LLKpihnoywXFM"
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          -36,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "bg",
      "_parent": {
        "__id__": 11
      },
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 12
          },
          "_spriteFrame": {
            "__uuid__": "09mBHl4ZVC5bG3PDcPOh5Y"
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "34lvp2Rs5N8YiJPFEzPawh"
        },
        "fileId": "37URmXnhBMz7/gt1dN0jjg"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 88,
        "height": 22
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "upstate",
      "_parent": {
        "__id__": 11
      },
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 13
          },
          "_spriteFrame": {
            "__uuid__": "d2wOKaWKNFAaTLeTmH08V2"
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "34lvp2Rs5N8YiJPFEzPawh"
        },
        "fileId": "d2Kwqr8f5KubYsuQu/P73n"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 88,
        "height": 22
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    }
  ],
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "39",
      "texture": "beK8eczu9NsqYer97Mpk+C",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_24",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        563,
        1,
        43,
        114
      ],
      "offset": [
        0,
        -1
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  [
    {
      "__type__": "cc.SceneAsset",
      "_name": "test",
      "scene": {
        "__id__": 1
      },
      "asyncLoadAssets": null
    },
    {
      "__type__": "cc.Scene",
      "_name": "New Node",
      "_children": [
        {
          "__id__": 2
        }
      ],
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      },
      "autoReleaseAssets": false
    },
    {
      "__type__": "cc.Node",
      "_name": "Canvas",
      "_parent": {
        "__id__": 1
      },
      "_children": [
        {
          "__id__": 3
        },
        {
          "__id__": 4
        },
        {
          "__id__": 5
        },
        {
          "__id__": 6
        },
        {
          "__id__": 7
        },
        {
          "__id__": 8
        },
        {
          "__id__": 9
        }
      ],
      "_components": [
        {
          "__type__": "cc.Canvas",
          "node": {
            "__id__": 2
          }
        },
        {
          "__type__": "08f3f9Pjx5N+bZJdn6QAZZv",
          "node": {
            "__id__": 2
          },
          "tail": {
            "__id__": 8
          }
        },
        {
          "__type__": "cc.Widget",
          "node": {
            "__id__": 2
          },
          "_alignFlags": 45
        }
      ],
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 960,
        "height": 640
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          480,
          320,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      },
      "_id": "7fHQ1ej9BNfI4pWE9CjdYA"
    },
    {
      "__type__": "cc.Node",
      "_name": "Main Camera",
      "_parent": {
        "__id__": 2
      },
      "_components": [
        {
          "__type__": "cc.Camera",
          "node": {
            "__id__": 3
          },
          "_clearFlags": 7,
          "_depth": -1
        }
      ],
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "New Sprite(Splash)",
      "_parent": {
        "__id__": 2
      },
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 4
          },
          "_materials": [
            {
              "__uuid__": "ecpdLyjvZBwrvm+cedCcQy"
            }
          ],
          "_spriteFrame": {
            "__uuid__": "a2MjXRFdtLlYQ5ouAFv/+R"
          },
          "_sizeMode": 0
        },
        {
          "__type__": "cc.Animation",
          "node": {
            "__id__": 4
          },
          "_clips": [
            {
              "__uuid__": "ad30z/ZwFFgISwWXqUsavw"
            }
          ],
          "playOnLoad": true
        }
      ],
      "_color": {
        "__type__": "cc.Color",
        "r": 1,
        "g": 1,
        "b": 1
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 100,
        "height": 100
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          172,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "New Sprite(Splash)",
      "_parent": {
        "__id__": 2
      },
      "_active": false,
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 5
          },
          "_spriteFrame": {
            "__uuid__": "a2MjXRFdtLlYQ5ouAFv/+R"
          },
          "_sizeMode": 0
        },
        {
          "__type__": "cc.Animation",
          "node": {
            "__id__": 5
          },
          "_defaultClip": {
            "__uuid__": "c9pVXsPY5BUYbA2t1phFi9"
          },
          "_clips": [
            {
              "__uuid__": "c9pVXsPY5BUYbA2t1phFi9"
            }
          ],
          "playOnLoad": true
        }
      ],
      "_color": {
        "__type__": "cc.Color",
        "r": 253,
        "g": 244,
        "b": 244
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 100,
        "height": 100
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          -152,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "New Sprite(Splash)",
      "_parent": {
        "__id__": 2
      },
      "_active": false,
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 6
          },
          "_sizeMode": 2
        },
        {
          "__type__": "10fa9noqZpH3pYATAmeKpIH",
          "node": {
            "__id__": 6
          },
          "playTimes": 5,
          "row": 1,
          "col": 5,
          "autoDestroy": true
        }
      ],
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 307,
        "height": 307
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          -223,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "3",
      "_parent": {
        "__id__": 2
      },
      "_active": false,
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 7
          }
        }
      ],
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 307,
        "height": 307
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          225,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "New Node",
      "_parent": {
        "__id__": 2
      },
      "_components": [
        {
          "__type__": "cc.MotionStreak",
          "node": {
            "__id__": 8
          },
          "_materials": [
            {
              "__uuid__": "ecpdLyjvZBwrvm+cedCcQy"
            }
          ],
          "_minSeg": 0,
          "_texture": {
            "__uuid__": "eaEZsKXElDGYJ/sJTBkk/d"
          }
        }
      ],
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          -400,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "Tail",
      "_parent": {
        "__id__": 2
      },
      "_components": [
        {
          "__type__": "cc.MotionStreak",
          "node": {
            "__id__": 9
          },
          "_materials": [
            {
              "__uuid__": "ecpdLyjvZBwrvm+cedCcQy"
            }
          ],
          "_fadeTime": 0.65,
          "_stroke": 200,
          "_texture": {
            "__uuid__": "eaEZsKXElDGYJ/sJTBkk/d"
          }
        }
      ],
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          26,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    }
  ],
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  [
    {
      "__type__": "cc.Prefab",
      "_name": "zangai-dong_1",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "zangai-dong_1",
      "_children": [
        {
          "__id__": 2
        }
      ],
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 1
          },
          "_spriteFrame": {
            "__uuid__": "49dFEhVClJH5EjUeAnU/t/"
          }
        },
        {
          "__type__": "cc.RigidBody",
          "node": {
            "__id__": 1
          },
          "_type": 0
        },
        {
          "__type__": "cc.PhysicsPolygonCollider",
          "node": {
            "__id__": 1
          },
          "_offset": {
            "__type__": "cc.Vec2",
            "x": -1
          },
          "points": [
            {
              "__type__": "cc.Vec2",
              "x": -71.4,
              "y": -160.7
            },
            {
              "__type__": "cc.Vec2",
              "x": -26.5,
              "y": -153.8
            },
            {
              "__type__": "cc.Vec2",
              "x": 63.8,
              "y": -145.2
            },
            {
              "__type__": "cc.Vec2",
              "x": 106.1,
              "y": -129.2
            },
            {
              "__type__": "cc.Vec2",
              "x": 122.4,
              "y": -105.4
            },
            {
              "__type__": "cc.Vec2",
              "x": 173.2,
              "y": -70.9
            },
            {
              "__type__": "cc.Vec2",
              "x": 196.7,
              "y": -14.4
            },
            {
              "__type__": "cc.Vec2",
              "x": 194.6,
              "y": 16.6
            },
            {
              "__type__": "cc.Vec2",
              "x": 141.9,
              "y": 65
            },
            {
              "__type__": "cc.Vec2",
              "x": 122.2,
              "y": 96.6
            },
            {
              "__type__": "cc.Vec2",
              "x": 83.2,
              "y": 121.8
            },
            {
              "__type__": "cc.Vec2",
              "x": 53.3,
              "y": 134.1
            },
            {
              "__type__": "cc.Vec2",
              "x": 36,
              "y": 134.3
            },
            {
              "__type__": "cc.Vec2",
              "x": -29.5,
              "y": 155
            },
            {
              "__type__": "cc.Vec2",
              "x": -50.6,
              "y": 157.7
            },
            {
              "__type__": "cc.Vec2",
              "x": -117.7,
              "y": 128.9
            },
            {
              "__type__": "cc.Vec2",
              "x": -131.5,
              "y": 106.2
            },
            {
              "__type__": "cc.Vec2",
              "x": -167.1,
              "y": 88.2
            },
            {
              "__type__": "cc.Vec2",
              "x": -187.1,
              "y": 57.4
            },
            {
              "__type__": "cc.Vec2",
              "x": -198,
              "y": 24.5
            },
            {
              "__type__": "cc.Vec2",
              "x": -189.5,
              "y": -10
            },
            {
              "__type__": "cc.Vec2",
              "x": -188.8,
              "y": -44
            },
            {
              "__type__": "cc.Vec2",
              "x": -174.3,
              "y": -70.5
            },
            {
              "__type__": "cc.Vec2",
              "x": -149.3,
              "y": -106.4
            },
            {
              "__type__": "cc.Vec2",
              "x": -127.6,
              "y": -120.6
            },
            {
              "__type__": "cc.Vec2",
              "x": -106.5,
              "y": -148.9
            }
          ]
        },
        {
          "__type__": "e4c4cYS2FtI6p+AI35rs0jE",
          "node": {
            "__id__": 1
          },
          "type": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "38d4T8sj1Cdpx7bIcEkl4a"
        },
        "fileId": "94P4y20P9FL6La4tH80pmk"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 397,
        "height": 325
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          -813,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "New Node",
      "_parent": {
        "__id__": 1
      },
      "_components": [
        {
          "__type__": "cc.PolygonCollider",
          "node": {
            "__id__": 2
          },
          "tag": 2,
          "points": [
            {
              "__type__": "cc.Vec2",
              "x": 55,
              "y": -145.8
            },
            {
              "__type__": "cc.Vec2",
              "x": 106,
              "y": -131.1
            },
            {
              "__type__": "cc.Vec2",
              "x": 114.6,
              "y": -110.9
            },
            {
              "__type__": "cc.Vec2",
              "x": 174,
              "y": -71.7
            },
            {
              "__type__": "cc.Vec2",
              "x": 196.7,
              "y": -9.9
            },
            {
              "__type__": "cc.Vec2",
              "x": 193,
              "y": 16.6
            },
            {
              "__type__": "cc.Vec2",
              "x": 141.4,
              "y": 66.2
            },
            {
              "__type__": "cc.Vec2",
              "x": 116.1,
              "y": 104.1
            },
            {
              "__type__": "cc.Vec2",
              "x": 84.4,
              "y": 117.2
            },
            {
              "__type__": "cc.Vec2",
              "x": 58,
              "y": 131.7
            },
            {
              "__type__": "cc.Vec2",
              "x": -10.5,
              "y": 146.8
            },
            {
              "__type__": "cc.Vec2",
              "x": -54.3,
              "y": 158.5
            },
            {
              "__type__": "cc.Vec2",
              "x": -118.9,
              "y": 127.2
            },
            {
              "__type__": "cc.Vec2",
              "x": -132.9,
              "y": 103.6
            },
            {
              "__type__": "cc.Vec2",
              "x": -164.5,
              "y": 90.1
            },
            {
              "__type__": "cc.Vec2",
              "x": -183.4,
              "y": 65.7
            },
            {
              "__type__": "cc.Vec2",
              "x": -200.3,
              "y": 29
            },
            {
              "__type__": "cc.Vec2",
              "x": -191.9,
              "y": -8.7
            },
            {
              "__type__": "cc.Vec2",
              "x": -191.6,
              "y": -45.7
            },
            {
              "__type__": "cc.Vec2",
              "x": -153.6,
              "y": -103.4
            },
            {
              "__type__": "cc.Vec2",
              "x": -127.6,
              "y": -125.4
            },
            {
              "__type__": "cc.Vec2",
              "x": -104.5,
              "y": -149.7
            },
            {
              "__type__": "cc.Vec2",
              "x": -86.5,
              "y": -154.5
            },
            {
              "__type__": "cc.Vec2",
              "x": -73.7,
              "y": -160.9
            },
            {
              "__type__": "cc.Vec2",
              "x": -57.6,
              "y": -160
            },
            {
              "__type__": "cc.Vec2",
              "x": -30.9,
              "y": -154.4
            }
          ]
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "38d4T8sj1Cdpx7bIcEkl4a"
        },
        "fileId": "35AnuJ8hxAuY3w6/gQyV5D"
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    }
  ],
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Material",
    "_name": "builtin-2d-gray-sprite",
    "_effectAsset": {
      "__uuid__": "14TDKXr2NJ6LjvHPops74o"
    },
    "_techniqueData": {}
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_10",
      "texture": "14r1HQPxpF4bwG77wgXPWZ",
      "rect": [
        22,
        10,
        29,
        111
      ],
      "offset": [
        0,
        -3.5
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_4",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        1,
        1,
        45,
        124
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_3",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        70,
        121,
        33,
        118
      ],
      "offset": [
        0,
        3
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_2",
      "texture": "abHAcNOpxDMK+h/Wtd3rjq",
      "rect": [
        28,
        26,
        19,
        71
      ],
      "offset": [
        1,
        0.5
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_9",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        647,
        115,
        49,
        110
      ],
      "offset": [
        0,
        -1
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_9",
      "texture": "15RRj4mexGkr2xjeZNc8NC",
      "rect": [
        14,
        10,
        46,
        107
      ],
      "offset": [
        0.5,
        -1.5
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_0",
      "texture": "bb8TQkTiJD/qcQPH/zhwaL",
      "rect": [
        36,
        0,
        38,
        178
      ],
      "offset": [
        2.5,
        0
      ],
      "originalSize": [
        105,
        178
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Material",
    "_name": "builtin-3d-trail",
    "_effectAsset": {
      "__uuid__": "2afAA24LNP4YmYiaVLiivs"
    },
    "_techniqueData": {
      "0": {
        "props": {
          "mainTexture": {
            "__uuid__": "02delMVqdBD70a/HSD99FK"
          }
        }
      }
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "3",
      "texture": "eb/eAzIJFMrqNs5vEkz9L4",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "0",
      "texture": "4b4RwneT1LRqp8gC3NUqDl",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "20",
      "texture": "01IM2oPYxAa5IacHH5PVXu",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "zangai-dong_1",
      "texture": "c3lJ1unupAzYiguh+errV6",
      "rect": [
        0,
        0,
        397,
        325
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        397,
        325
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "29",
      "texture": "17p0R2Xf5BnJJQbwvPvsWZ",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_1",
      "texture": "74mYIFC2FKiYlys1Y9qiGs",
      "rect": [
        24,
        22,
        25,
        78
      ],
      "offset": [
        0,
        1
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "17",
      "texture": "38DE8XqABFs4z0cy9FaP3t",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_12",
      "texture": "1a25B1SgtIjIg0cVuBjbzl",
      "rect": [
        27,
        14,
        19,
        104
      ],
      "offset": [
        0,
        -4
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "18",
      "texture": "42fTOQFoJAUKsN8GZZMeFo",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  [
    {
      "__type__": "cc.Prefab",
      "_name": "Item_magnet",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "Item_magnet",
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 1
          },
          "_spriteFrame": {
            "__uuid__": "7d/5srhUFAK6v7RDzRln/Y"
          }
        },
        {
          "__type__": "80113nWi9FNLaCAbUWEg+lL",
          "node": {
            "__id__": 1
          },
          "type": 3
        },
        {
          "__type__": "cc.BoxCollider",
          "node": {
            "__id__": 1
          },
          "tag": 8,
          "_size": {
            "__type__": "cc.Size",
            "width": 82,
            "height": 84
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "4fe15C0r9Agb38oXYX8vco"
        },
        "fileId": "a7CZAW8cxJ6rA0uLu7noUV"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 82,
        "height": 84
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          -273,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    }
  ],
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "xingqiu-1",
      "texture": "21LgAEpxRLB4WWdPCVvp8B",
      "rect": [
        0,
        0,
        115,
        115
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        115,
        115
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_13",
      "texture": "cehOLYmTxIXbTEWClMq2FS",
      "rect": [
        18,
        4,
        37,
        112
      ],
      "offset": [
        0,
        2
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_19",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        694,
        1,
        61,
        108
      ],
      "offset": [
        0,
        -6
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "32",
      "texture": "c5wL+wjH1IS5RWjarq5Z1n",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_19",
      "texture": "e4dDpqxQ1GVYVqya1Fp/1s",
      "rect": [
        7,
        15,
        59,
        106
      ],
      "offset": [
        0,
        -6
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "27",
      "texture": "6eeBsN19hBNo7G4IVchAB5",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "40",
      "texture": "bcSl7aAxxDFrhYPXl8tMfu",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  [
    {
      "__type__": "cc.Prefab",
      "_name": "KillEffect",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "KillEffect",
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 1
          },
          "_spriteFrame": {
            "__uuid__": "a2MjXRFdtLlYQ5ouAFv/+R"
          },
          "_sizeMode": 0
        },
        {
          "__type__": "10fa9noqZpH3pYATAmeKpIH",
          "node": {
            "__id__": 1
          },
          "interval": 0.03,
          "texture": {
            "__uuid__": "786aEzdOpI1bzKuOQPvaJ7"
          },
          "playTimes": 1,
          "row": 3,
          "isAll": true,
          "autoDestroy": true
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__id__": 0
        },
        "fileId": "e3Dass4RZFsqU0KKfIv4xU"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 100,
        "height": 100
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          -163,
          0,
          0,
          0,
          0,
          1,
          1.5,
          1.5,
          1
        ]
      }
    }
  ],
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_17",
      "texture": "50Td+9ePdJzqruWKJhnjkF",
      "rect": [
        18,
        13,
        37,
        103
      ],
      "offset": [
        0,
        -2.5
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "biaoqing_1",
      "texture": "dfAx5K42NE6Kr1MKptzfKE",
      "rect": [
        2,
        21,
        107,
        84
      ],
      "offset": [
        -2,
        -5.5
      ],
      "originalSize": [
        115,
        115
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_2",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        780,
        91,
        21,
        74
      ],
      "offset": [
        1,
        1
      ],
      "originalSize": [
        73,
        124
      ],
      "rotated": 1,
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_1",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        861,
        209,
        27,
        80
      ],
      "offset": [
        0,
        1
      ],
      "originalSize": [
        73,
        124
      ],
      "rotated": 1,
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_23",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        647,
        227,
        25,
        110
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        73,
        124
      ],
      "rotated": 1,
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "dragonBones.DragonBonesAsset",
    "_name": "bai_ske",
    "_dragonBonesJson": "{\"frameRate\":24,\"isGlobal\":0,\"name\":\"bai\",\"version\":\"5.5\",\"armature\":[{\"slot\":[{\"displayIndex\":-1,\"name\":\"椭圆 1 拷贝\",\"parent\":\"椭圆 1 拷贝\",\"color\":{}},{\"z\":1,\"displayIndex\":-1,\"name\":\"newLayer\",\"parent\":\"newLayer\",\"color\":{}},{\"z\":2,\"displayIndex\":-1,\"name\":\"newLayer1\",\"parent\":\"newLayer1\",\"color\":{}},{\"z\":3,\"displayIndex\":-1,\"name\":\"newLayer2\",\"parent\":\"newLayer2\",\"color\":{}}],\"aabb\":{\"width\":0,\"y\":0,\"height\":0,\"x\":0},\"canvas\":{\"width\":800,\"y\":0,\"height\":600,\"x\":0},\"type\":\"MovieClip\",\"name\":\"MovieClip\",\"defaultActions\":[{\"gotoAndPlay\":\"newAnimation\"}],\"skin\":[{\"name\":\"\",\"slot\":[{\"display\":[{\"path\":\"椭圆 1 拷贝 7\",\"type\":\"image\",\"name\":\"椭圆 1 拷贝\",\"transform\":{}}],\"name\":\"newLayer2\"},{\"display\":[{\"path\":\"椭圆 1 拷贝 7\",\"type\":\"image\",\"name\":\"椭圆 1 拷贝\",\"transform\":{}}],\"name\":\"椭圆 1 拷贝\"},{\"display\":[{\"path\":\"椭圆 1 拷贝 7\",\"type\":\"image\",\"name\":\"椭圆 1 拷贝\",\"transform\":{}}],\"name\":\"newLayer\"},{\"display\":[{\"path\":\"椭圆 1 拷贝 7\",\"type\":\"image\",\"name\":\"椭圆 1 拷贝\",\"transform\":{}}],\"name\":\"newLayer1\"}]}],\"ik\":[],\"bone\":[{\"name\":\"root\",\"transform\":{}},{\"transform\":{},\"name\":\"椭圆 1 拷贝\",\"parent\":\"root\"},{\"transform\":{},\"name\":\"newLayer\",\"parent\":\"root\"},{\"transform\":{},\"name\":\"newLayer1\",\"parent\":\"root\"},{\"transform\":{},\"name\":\"newLayer2\",\"parent\":\"root\"}],\"frameRate\":24,\"animation\":[{\"slot\":[{\"colorFrame\":[{\"tweenEasing\":0,\"duration\":40,\"color\":{\"aM\":66}},{\"duration\":20,\"color\":{\"aM\":0}},{\"tweenEasing\":0,\"duration\":20},{\"duration\":0,\"color\":{\"aM\":65}}],\"name\":\"椭圆 1 拷贝\",\"displayFrame\":[{\"duration\":40},{\"duration\":20},{\"duration\":20},{\"duration\":0}]},{\"colorFrame\":[{\"tweenEasing\":0,\"duration\":60},{\"duration\":20,\"color\":{\"aM\":0}}],\"name\":\"newLayer\",\"displayFrame\":[{\"duration\":60},{\"duration\":20}]},{\"colorFrame\":[{\"duration\":20},{\"tweenEasing\":0,\"duration\":60},{\"duration\":0,\"color\":{\"aM\":0}}],\"name\":\"newLayer1\",\"displayFrame\":[{\"value\":-1,\"duration\":20},{\"duration\":60},{\"duration\":0}]},{\"colorFrame\":[{\"tweenEasing\":0,\"duration\":20,\"color\":{\"aM\":33}},{\"duration\":1,\"color\":{\"aM\":0}},{\"duration\":19,\"color\":{\"aM\":0}},{\"tweenEasing\":0,\"duration\":40},{\"duration\":0,\"color\":{\"aM\":33}}],\"name\":\"newLayer2\",\"displayFrame\":[{\"duration\":20},{\"duration\":1},{\"duration\":19},{\"duration\":40},{\"duration\":0}]}],\"frame\":[],\"ffd\":[],\"duration\":80,\"ik\":[],\"bone\":[{\"rotateFrame\":[],\"scaleFrame\":[],\"translateFrame\":[],\"name\":\"root\"},{\"rotateFrame\":[{\"tweenEasing\":0,\"duration\":40},{\"duration\":20},{\"tweenEasing\":0,\"duration\":20},{\"duration\":0}],\"scaleFrame\":[{\"y\":0.3667,\"tweenEasing\":0,\"duration\":40,\"x\":0.3667},{\"duration\":20},{\"y\":0.05,\"tweenEasing\":0,\"duration\":20,\"x\":0.05},{\"y\":0.36,\"duration\":0,\"x\":0.36}],\"translateFrame\":[{\"tweenEasing\":0,\"duration\":40},{\"duration\":20},{\"tweenEasing\":0,\"duration\":20},{\"duration\":0}],\"name\":\"椭圆 1 拷贝\"},{\"rotateFrame\":[{\"tweenEasing\":0,\"duration\":60},{\"duration\":20}],\"scaleFrame\":[{\"y\":0.05,\"tweenEasing\":0,\"duration\":60,\"x\":0.05},{\"duration\":20}],\"translateFrame\":[{\"tweenEasing\":0,\"duration\":60},{\"duration\":20}],\"name\":\"newLayer\"},{\"rotateFrame\":[{\"duration\":20},{\"tweenEasing\":0,\"duration\":60},{\"duration\":0}],\"scaleFrame\":[{\"duration\":20},{\"y\":0.05,\"tweenEasing\":0,\"duration\":60,\"x\":0.05},{\"duration\":0}],\"translateFrame\":[{\"duration\":20},{\"tweenEasing\":0,\"duration\":60},{\"duration\":0}],\"name\":\"newLayer1\"},{\"rotateFrame\":[{\"tweenEasing\":0,\"duration\":20},{\"duration\":1},{\"duration\":19},{\"tweenEasing\":0,\"duration\":40},{\"duration\":0}],\"scaleFrame\":[{\"y\":0.7103,\"tweenEasing\":0,\"duration\":20,\"x\":0.7103},{\"duration\":1},{\"y\":0.01,\"duration\":19,\"x\":0.01},{\"y\":0.05,\"tweenEasing\":0,\"duration\":40,\"x\":0.05},{\"y\":0.68,\"duration\":0,\"x\":0.68}],\"translateFrame\":[{\"tweenEasing\":0,\"duration\":20},{\"duration\":1},{\"duration\":19},{\"tweenEasing\":0,\"duration\":40},{\"duration\":0}],\"name\":\"newLayer2\"}],\"playTimes\":0,\"name\":\"newAnimation\"}]}]}"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteAtlas",
    "_name": "daotp.plist",
    "_spriteFrames": {
      "dao_0": {
        "__uuid__": "1752kkNWBNk53c8V422lOV"
      },
      "dao_1": {
        "__uuid__": "62egyP+X5CuIjJB+GeyAbm"
      },
      "dao_10": {
        "__uuid__": "71wtELyB5BBZwvz5cqYGr4"
      },
      "dao_11": {
        "__uuid__": "e1MmQAjrJBOZ0KIHRNsX0j"
      },
      "dao_12": {
        "__uuid__": "69xhP0GChNhqG7/3/YhUoL"
      },
      "dao_13": {
        "__uuid__": "aag/h9TWBG/6bD2hMSQyvh"
      },
      "dao_14": {
        "__uuid__": "e19QX57A1DCZnc8fZlSio6"
      },
      "dao_15": {
        "__uuid__": "aeLePzfIVCZa1MYGkY8tIu"
      },
      "dao_16": {
        "__uuid__": "e2DRmr4wVC26JPOCa8yrwp"
      },
      "dao_17": {
        "__uuid__": "77YCsAr5BKI4iSIM0iAjC1"
      },
      "dao_18": {
        "__uuid__": "6b56GRSF9LUarHqTPEIiCO"
      },
      "dao_19": {
        "__uuid__": "52bKvUOWdLUov5EJoawYl8"
      },
      "dao_2": {
        "__uuid__": "5fxp+upXxLDL9dFtebAtPZ"
      },
      "dao_20": {
        "__uuid__": "76PWlyOgpEZ7LrydYlPhB2"
      },
      "dao_21": {
        "__uuid__": "2b9gmbdshPQYBIlWLoDc+9"
      },
      "dao_22": {
        "__uuid__": "97aRNrAr9NNoSwz9aRkyaC"
      },
      "dao_23": {
        "__uuid__": "63gCsc1gtE6YOam314JIOE"
      },
      "dao_24": {
        "__uuid__": "36egxRdxpMZKOn6sAhMzeq"
      },
      "dao_3": {
        "__uuid__": "3exg37FHVHfY22LSs3MVne"
      },
      "dao_4": {
        "__uuid__": "3dIFN0oNNFYqU5ljQB6XCn"
      },
      "dao_5": {
        "__uuid__": "a61MtnTO9Gk5hs5ZF0SFRM"
      },
      "dao_6": {
        "__uuid__": "67UzZ9S21BhpmLTPUq7pJS"
      },
      "dao_7": {
        "__uuid__": "f9mIwe8aNO96ZVYRcpNcnh"
      },
      "dao_8": {
        "__uuid__": "d5duBkubVAQK89dWU17nJa"
      },
      "dao_9": {
        "__uuid__": "45HF2ZWwpBSK5BJnwW5sWp"
      },
      "ming_xian": {
        "__uuid__": "09XNAubCtITZYQlBVM00Gy"
      },
      "xingqiu-1": {
        "__uuid__": "6cjyhCjN1LDK08YBD0GjLB"
      },
      "xingqiu-2": {
        "__uuid__": "d04m28/s5NzZTb4ytjpjf4"
      },
      "xingqiu-3": {
        "__uuid__": "fcBTf2WBNOg4nl/Twd21hw"
      },
      "xingqiu-4": {
        "__uuid__": "9eqB+dXVNN4ZK02WWmxk3/"
      },
      "xingqiu-5": {
        "__uuid__": "177mt+iIlAvq6BRenCyLS8"
      },
      "xingqiu-6": {
        "__uuid__": "0bI/grRPtHX4q/+Sbdn9Ou"
      },
      "xingqiu-7": {
        "__uuid__": "b4T8fmntNJWpLglqmj3+Xu"
      },
      "xingqiu-8": {
        "__uuid__": "d1GKL4WOZGGrqV6rV7dzC7"
      }
    }
  },
  {
    "__type__": "cc.JsonAsset",
    "_name": "NameTable",
    "json": [
      {
        "id": 1,
        "name": "ckk"
      },
      {
        "id": 2,
        "name": "胖纸~"
      },
      {
        "id": 3,
        "name": "涛子"
      },
      {
        "id": 4,
        "name": "馬興"
      },
      {
        "id": 5,
        "name": "*碧血孤傲*"
      },
      {
        "id": 6,
        "name": "G楽丸"
      },
      {
        "id": 7,
        "name": "77LG"
      },
      {
        "id": 8,
        "name": "Sunshine"
      },
      {
        "id": 9,
        "name": "徘徊者号"
      },
      {
        "id": 10,
        "name": "蜗牛壳儿"
      },
      {
        "id": 11,
        "name": "稷下梨雪"
      },
      {
        "id": 12,
        "name": "破风坦克"
      },
      {
        "id": 13,
        "name": "锋羽"
      },
      {
        "id": 14,
        "name": "我爱鱼"
      },
      {
        "id": 15,
        "name": "T七"
      },
      {
        "id": 16,
        "name": "瑞特蜡笔人"
      },
      {
        "id": 17,
        "name": "緋^_^"
      },
      {
        "id": 18,
        "name": "Zerone"
      },
      {
        "id": 19,
        "name": "月巴雀君"
      },
      {
        "id": 20,
        "name": "握住你的手、"
      },
      {
        "id": 21,
        "name": "虚无"
      },
      {
        "id": 22,
        "name": "风筝"
      },
      {
        "id": 23,
        "name": "Lqw"
      },
      {
        "id": 24,
        "name": "王大锤Wdc"
      },
      {
        "id": 25,
        "name": "yueyue"
      },
      {
        "id": 26,
        "name": ". Crey"
      },
      {
        "id": 27,
        "name": "图咪"
      },
      {
        "id": 28,
        "name": "紫笺"
      },
      {
        "id": 29,
        "name": "S!ns."
      },
      {
        "id": 30,
        "name": "圣殿骑士"
      },
      {
        "id": 31,
        "name": "fan"
      },
      {
        "id": 32,
        "name": "超爱睡的葱"
      },
      {
        "id": 33,
        "name": "邪朙"
      },
      {
        "id": 34,
        "name": "默然ッ等候"
      },
      {
        "id": 35,
        "name": "童叟无欺😈"
      },
      {
        "id": 36,
        "name": "多多酱"
      },
      {
        "id": 37,
        "name": " 山顶洞人"
      },
      {
        "id": 38,
        "name": "GAVIN"
      },
      {
        "id": 39,
        "name": "刀疤喵"
      },
      {
        "id": 40,
        "name": "Never stop smiling"
      },
      {
        "id": 41,
        "name": "四月初8"
      },
      {
        "id": 42,
        "name": "Wind.."
      },
      {
        "id": 43,
        "name": "RichardYang"
      },
      {
        "id": 44,
        "name": "林子"
      },
      {
        "id": 45,
        "name": "崇明全友"
      },
      {
        "id": 46,
        "name": "永不放弃3！"
      },
      {
        "id": 47,
        "name": "鬼混尊者"
      },
      {
        "id": 48,
        "name": "oc"
      },
      {
        "id": 49,
        "name": "Czar"
      },
      {
        "id": 50,
        "name": "MAYOnnaise"
      },
      {
        "id": 51,
        "name": "斗鲸"
      },
      {
        "id": 52,
        "name": "快乐小铺"
      },
      {
        "id": 53,
        "name": "Mcfate"
      },
      {
        "id": 54,
        "name": "绫夏"
      },
      {
        "id": 55,
        "name": "泡泡茶壶💭"
      },
      {
        "id": 56,
        "name": "二十三"
      },
      {
        "id": 57,
        "name": "能能"
      },
      {
        "id": 58,
        "name": "仰望"
      },
      {
        "id": 59,
        "name": "展"
      },
      {
        "id": 60,
        "name": "月到天心"
      },
      {
        "id": 61,
        "name": "梅小菜"
      },
      {
        "id": 62,
        "name": "KK"
      },
      {
        "id": 63,
        "name": "红狼gi鱼"
      },
      {
        "id": 64,
        "name": "一堆乱码"
      },
      {
        "id": 65,
        "name": "疯尘之子"
      },
      {
        "id": 66,
        "name": "小棋"
      },
      {
        "id": 67,
        "name": "Allotu∮"
      },
      {
        "id": 68,
        "name": "Mr. O"
      },
      {
        "id": 69,
        "name": "Guardian Angel🇩🇪🇭🇷"
      },
      {
        "id": 70,
        "name": "myszheng"
      },
      {
        "id": 71,
        "name": "ping"
      },
      {
        "id": 72,
        "name": "Hong Kwok"
      },
      {
        "id": 73,
        "name": "欧生生"
      },
      {
        "id": 74,
        "name": "卐"
      },
      {
        "id": 75,
        "name": "丁文斌"
      },
      {
        "id": 76,
        "name": "紫裘"
      },
      {
        "id": 77,
        "name": "荀以旋"
      },
      {
        "id": 78,
        "name": "安德鲁"
      },
      {
        "id": 79,
        "name": "Astrodolphin"
      },
      {
        "id": 80,
        "name": "天"
      },
      {
        "id": 81,
        "name": "维摩诘"
      },
      {
        "id": 82,
        "name": "Sincerity"
      },
      {
        "id": 83,
        "name": "行者无疆"
      },
      {
        "id": 84,
        "name": "风"
      },
      {
        "id": 85,
        "name": "岁月静好"
      },
      {
        "id": 86,
        "name": "lich/kuk"
      },
      {
        "id": 87,
        "name": "五叶糖"
      },
      {
        "id": 88,
        "name": "Oscar"
      },
      {
        "id": 89,
        "name": "消逝的一"
      },
      {
        "id": 90,
        "name": "暗影丶玫玖玖"
      }
    ]
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "24",
      "texture": "e9/085pGJBeKKL5wQqFcvr",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_6",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        647,
        1,
        45,
        112
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  [
    {
      "__type__": "cc.Prefab",
      "_name": "PopupText",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "PopupText",
      "_children": [
        {
          "__id__": 2
        }
      ],
      "_components": [
        {
          "__type__": "2e6fcfe6F9CqaGVaos3yc6A",
          "node": {
            "__id__": 1
          },
          "label": {
            "__id__": 3
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "69BbcDjMRLnrzmFCGc5Uu5"
        },
        "fileId": "18NQeiLLxF8YFHYHY8zcCi"
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "Label",
      "_parent": {
        "__id__": 1
      },
      "_components": [
        {
          "__id__": 3
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "69BbcDjMRLnrzmFCGc5Uu5"
        },
        "fileId": "60gRiHsExEZp8VnNT5xxPU"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 250,
        "height": 80
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Label",
      "node": {
        "__id__": 2
      },
      "_useOriginalSize": false,
      "_string": "Label",
      "_N$string": "Label",
      "_N$horizontalAlign": 1,
      "_N$verticalAlign": 1,
      "_N$overflow": 2
    }
  ],
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "zangai_4",
      "texture": "84m8Ox0gNIIYVQ2/cQfNQh",
      "rect": [
        0,
        0,
        380,
        527
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        380,
        527
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_12",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        848,
        115,
        21,
        106
      ],
      "offset": [
        0,
        -4
      ],
      "originalSize": [
        73,
        124
      ],
      "rotated": 1,
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "25",
      "texture": "71YL8RCANIDYnVRUy1lrS+",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_18",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        861,
        46,
        67,
        90
      ],
      "offset": [
        0,
        -6
      ],
      "originalSize": [
        73,
        124
      ],
      "rotated": 1,
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "zangai-dong_3",
      "texture": "aeNzV5KPNJjozxzBV0JsR9",
      "rect": [
        0,
        0,
        324,
        569
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        324,
        569
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "xingqiu-1",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        95,
        1,
        115,
        115
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        115,
        115
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "4",
      "texture": "7esjULfAlOIouAekl2bx3Z",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.EffectAsset",
    "_name": "builtin-unlit",
    "techniques": [
      {
        "name": "opaque",
        "passes": [
          {
            "blendState": {
              "targets": [
                {
                  "blend": true
                }
              ]
            },
            "rasterizerState": {
              "cullMode": 0
            },
            "depthStencilState": {
              "depthTest": true,
              "depthWrite": true
            },
            "properties": {
              "diffuseTexture": {
                "value": "white",
                "type": 29
              },
              "diffuseColor": {
                "value": [
                  1,
                  1,
                  1,
                  1
                ],
                "editor": {
                  "type": "color"
                },
                "type": 16
              },
              "alphaThreshold": {
                "value": [
                  0.5
                ],
                "type": 13
              },
              "mainTiling": {
                "value": [
                  1,
                  1
                ],
                "type": 14
              },
              "mainOffset": {
                "value": [
                  0,
                  0
                ],
                "type": 14
              }
            },
            "program": "builtin-unlit|unlit-vs|unlit-fs"
          }
        ]
      },
      {
        "name": "transparent",
        "passes": [
          {
            "stage": "transparent",
            "blendState": {
              "targets": [
                {
                  "blend": true
                }
              ]
            },
            "rasterizerState": {
              "cullMode": 0
            },
            "depthStencilState": {
              "depthTest": true,
              "depthWrite": true
            },
            "properties": {
              "diffuseTexture": {
                "value": "white",
                "type": 29
              },
              "diffuseColor": {
                "value": [
                  1,
                  1,
                  1,
                  1
                ],
                "editor": {
                  "type": "color"
                },
                "type": 16
              },
              "alphaThreshold": {
                "value": [
                  0.5
                ],
                "type": 13
              },
              "mainTiling": {
                "value": [
                  1,
                  1
                ],
                "type": 14
              },
              "mainOffset": {
                "value": [
                  0,
                  0
                ],
                "type": 14
              }
            },
            "program": "builtin-unlit|unlit-vs|unlit-fs"
          }
        ]
      }
    ],
    "shaders": [
      {
        "hash": 922858114,
        "glsl3": {
          "vert": "\nprecision highp float;\nuniform CCLocal {\n  mat4 cc_matWorld;\n  mat4 cc_matWorldIT;\n};\nuniform CCGlobal {\n  mat4 cc_matView;\n  mat4 cc_matViewInv;\n  mat4 cc_matProj;\n  mat4 cc_matProjInv;\n  mat4 cc_matViewProj;\n  mat4 cc_matViewProjInv;\n  vec4 cc_cameraPos;\n  vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_screenScale;\n};\n#if CC_USE_SKINNING\n  in vec4 a_weights;\n  in vec4 a_joints;\n  #if CC_USE_JOINTS_TEXTRUE\n    uniform SKINNING {\n      vec2 jointsTextureSize;\n    };\n    uniform sampler2D jointsTexture;\n    #if CC_JOINTS_TEXTURE_FLOAT32\n      mat4 getBoneMatrix(const in float i) {\n        float width = jointsTextureSize.x;\n        float height = jointsTextureSize.y;\n        float j = i * 4.0;\n        float x = mod(j, width);\n        float y = floor(j / width);\n        float dx = 1.0 / width;\n        float dy = 1.0 / height;\n        y = dy * (y + 0.5);\n        vec4 v1 = texture(jointsTexture, vec2(dx * (x + 0.5), y));\n        vec4 v2 = texture(jointsTexture, vec2(dx * (x + 1.5), y));\n        vec4 v3 = texture(jointsTexture, vec2(dx * (x + 2.5), y));\n        vec4 v4 = texture(jointsTexture, vec2(dx * (x + 3.5), y));\n        return mat4(v1, v2, v3, v4);\n      }\n    #else\n      float decode32(vec4 rgba) {\n        float Sign = 1.0 - step(128.0, rgba[0]) * 2.0;\n        float Exponent = 2.0 * mod(rgba[0], 128.0) + step(128.0, rgba[1]) - 127.0;\n        float Mantissa = mod(rgba[1], 128.0) * 65536.0 + rgba[2] * 256.0 + rgba[3] + 8388608.0;\n        return Sign * exp2(Exponent - 23.0) * Mantissa;\n      }\n      vec4 decodevec4 (vec4 x, vec4 y, vec4 z, vec4 w) {\n        return vec4(\n          decode32(x.wzyx * 255.0),\n          decode32(y.wzyx * 255.0),\n          decode32(z.wzyx * 255.0),\n          decode32(w.wzyx * 255.0)\n        );\n      }\n      vec4 decodevec4 (float dx, float x, float y) {\n        return decodevec4(\n          texture(jointsTexture, vec2(dx * (x + 0.5), y)),\n          texture(jointsTexture, vec2(dx * (x + 1.5), y)),\n          texture(jointsTexture, vec2(dx * (x + 2.5), y)),\n          texture(jointsTexture, vec2(dx * (x + 3.5), y))\n        );\n      }\n      mat4 getBoneMatrix(const in float i) {\n        float width = jointsTextureSize.x;\n        float height = jointsTextureSize.y;\n        float j = i * 16.0;\n        float x = mod(j, width);\n        float y = floor(j / width);\n        float dx = 1.0 / width;\n        float dy = 1.0 / height;\n        y = dy * (y + 0.5);\n        vec4 v1 = decodevec4(dx, x,       y);\n        vec4 v2 = decodevec4(dx, x+4.0,   y);\n        vec4 v3 = decodevec4(dx, x+8.0,   y);\n        vec4 v4 = decodevec4(dx, x+12.0,  y);\n        return mat4(v1, v2, v3, v4);\n      }\n    #endif\n  #else\n    uniform JOINT_MATRIX {\n      mat4 jointMatrices[50];\n    };\n    mat4 getBoneMatrix(const in float i) {\n      return jointMatrices[int(i)];\n    }\n  #endif\n    mat4 skinMatrix() {\n      return\n        getBoneMatrix(a_joints.x) * a_weights.x +\n        getBoneMatrix(a_joints.y) * a_weights.y +\n        getBoneMatrix(a_joints.z) * a_weights.z +\n        getBoneMatrix(a_joints.w) * a_weights.w\n        ;\n    }\n#endif\nstruct StandardVertInput {\n  vec2 uv;\n  vec4 position;\n  vec3 normal;\n  vec4 tangent;\n  vec4 color;\n};\nin vec3 a_position;\n#if CC_USE_ATTRIBUTE_UV0\nin vec2 a_uv0;\n#endif\n#if CC_USE_ATTRIBUTE_COLOR\nin vec4 a_color;\n#endif\n#if CC_USE_ATTRIBUTE_NORMAL\nin vec3 a_normal;\n#endif\n#if CC_USE_ATTRIBUTE_TANGENT\nin vec4 a_tangent;\n#endif\nvoid CCAttribute (out StandardVertInput In) {\n  In.position = vec4(a_position, 1.0);\n  #if CC_USE_ATTRIBUTE_UV0\n    In.uv = a_uv0;\n  #else\n    In.uv = vec2(0.0);\n  #endif\n  #if CC_USE_ATTRIBUTE_COLOR\n    In.color = a_color;\n  #else\n    In.color = vec4(1.0);\n  #endif\n  #if CC_USE_ATTRIBUTE_NORMAL\n    In.normal = a_normal;\n  #else\n    In.normal = vec3(0.0, 1.0, 0.0);\n  #endif\n  #if CC_USE_ATTRIBUTE_TANGENT\n    In.tangent = a_tangent;\n  #else\n    In.tangent = vec4(1.0, 0.0, 0.0, 0.0);\n  #endif\n}\nvoid CCVertInput(out StandardVertInput In) {\n  CCAttribute(In);\n  #if CC_USE_SKINNING\n    mat4 m = skinMatrix();\n    In.position = m * In.position;\n    #if CC_USE_ATTRIBUTE_NORMAL\n      In.normal = (m * vec4(In.normal, 0)).xyz;\n    #endif\n    #if CC_USE_ATTRIBUTE_TANGENT\n      In.tangent = m * In.tangent;\n    #endif\n  #endif\n}\nuniform MAIN_TILING {\n  vec2 mainTiling;\n  vec2 mainOffset;\n};\n#if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n  out mediump vec2 v_uv0;\n#endif\n#if CC_USE_ATTRIBUTE_COLOR\n  out lowp vec4 v_color;\n#endif\nvoid main () {\n  StandardVertInput In;\n  CCVertInput(In);\n  #if CC_USE_ATTRIBUTE_COLOR\n    v_color = In.color;\n  #endif\n  #if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n    v_uv0 = In.uv * mainTiling + mainOffset;\n  #endif\n  gl_Position = cc_matViewProj * cc_matWorld * In.position;\n}",
          "frag": "\nprecision highp float;\n#if USE_ALPHA_TEST\n  uniform ALPHA_TEST {\n    float alphaThreshold;\n  };\n#endif\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\nvec4 CCFragOutput (vec4 color) {\n  #if OUTPUT_TO_GAMMA\n    color.rgb = sqrt(color.rgb);\n  #endif\n\treturn color;\n}\nuniform UNLIT {\n  lowp vec4 diffuseColor;\n};\n#if USE_DIFFUSE_TEXTURE\n  uniform sampler2D diffuseTexture;\n#endif\n#if CC_USE_ATTRIBUTE_COLOR\n  in lowp vec4 v_color;\n#endif\n#if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n  in mediump vec2 v_uv0;\n#endif\nvoid main () {\n  vec4 color = diffuseColor;\n  #if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n  vec4 diffuseTexture_tmp = texture(diffuseTexture, v_uv0);\n  #if CC_USE_ALPHA_ATLAS_diffuseTexture\n      diffuseTexture_tmp.a *= texture(diffuseTexture, v_uv0 + vec2(0, 0.5)).r;\n  #endif\n  #if INPUT_IS_GAMMA\n    color.rgb *= (diffuseTexture_tmp.rgb * diffuseTexture_tmp.rgb);\n    color.a *= diffuseTexture_tmp.a;\n  #else\n    color *= diffuseTexture_tmp;\n  #endif\n  #endif\n  #if CC_USE_ATTRIBUTE_COLOR\n    color *= v_color;\n  #endif\n  ALPHA_TEST(color);\n  gl_FragColor = CCFragOutput(color);\n}"
        },
        "glsl1": {
          "vert": "\nprecision highp float;\nuniform mat4 cc_matWorld;\nuniform mat4 cc_matViewProj;\n#if CC_USE_SKINNING\n  attribute vec4 a_weights;\n  attribute vec4 a_joints;\n  #if CC_USE_JOINTS_TEXTRUE\n    uniform vec2 jointsTextureSize;\n    uniform sampler2D jointsTexture;\n    #if CC_JOINTS_TEXTURE_FLOAT32\n      mat4 getBoneMatrix(const in float i) {\n        float width = jointsTextureSize.x;\n        float height = jointsTextureSize.y;\n        float j = i * 4.0;\n        float x = mod(j, width);\n        float y = floor(j / width);\n        float dx = 1.0 / width;\n        float dy = 1.0 / height;\n        y = dy * (y + 0.5);\n        vec4 v1 = texture2D(jointsTexture, vec2(dx * (x + 0.5), y));\n        vec4 v2 = texture2D(jointsTexture, vec2(dx * (x + 1.5), y));\n        vec4 v3 = texture2D(jointsTexture, vec2(dx * (x + 2.5), y));\n        vec4 v4 = texture2D(jointsTexture, vec2(dx * (x + 3.5), y));\n        return mat4(v1, v2, v3, v4);\n      }\n    #else\n      float decode32(vec4 rgba) {\n        float Sign = 1.0 - step(128.0, rgba[0]) * 2.0;\n        float Exponent = 2.0 * mod(rgba[0], 128.0) + step(128.0, rgba[1]) - 127.0;\n        float Mantissa = mod(rgba[1], 128.0) * 65536.0 + rgba[2] * 256.0 + rgba[3] + 8388608.0;\n        return Sign * exp2(Exponent - 23.0) * Mantissa;\n      }\n      vec4 decodevec4 (vec4 x, vec4 y, vec4 z, vec4 w) {\n        return vec4(\n          decode32(x.wzyx * 255.0),\n          decode32(y.wzyx * 255.0),\n          decode32(z.wzyx * 255.0),\n          decode32(w.wzyx * 255.0)\n        );\n      }\n      vec4 decodevec4 (float dx, float x, float y) {\n        return decodevec4(\n          texture2D(jointsTexture, vec2(dx * (x + 0.5), y)),\n          texture2D(jointsTexture, vec2(dx * (x + 1.5), y)),\n          texture2D(jointsTexture, vec2(dx * (x + 2.5), y)),\n          texture2D(jointsTexture, vec2(dx * (x + 3.5), y))\n        );\n      }\n      mat4 getBoneMatrix(const in float i) {\n        float width = jointsTextureSize.x;\n        float height = jointsTextureSize.y;\n        float j = i * 16.0;\n        float x = mod(j, width);\n        float y = floor(j / width);\n        float dx = 1.0 / width;\n        float dy = 1.0 / height;\n        y = dy * (y + 0.5);\n        vec4 v1 = decodevec4(dx, x,       y);\n        vec4 v2 = decodevec4(dx, x+4.0,   y);\n        vec4 v3 = decodevec4(dx, x+8.0,   y);\n        vec4 v4 = decodevec4(dx, x+12.0,  y);\n        return mat4(v1, v2, v3, v4);\n      }\n    #endif\n  #else\n    uniform mat4 jointMatrices[50];\n    mat4 getBoneMatrix(const in float i) {\n      return jointMatrices[int(i)];\n    }\n  #endif\n    mat4 skinMatrix() {\n      return\n        getBoneMatrix(a_joints.x) * a_weights.x +\n        getBoneMatrix(a_joints.y) * a_weights.y +\n        getBoneMatrix(a_joints.z) * a_weights.z +\n        getBoneMatrix(a_joints.w) * a_weights.w\n        ;\n    }\n#endif\nstruct StandardVertInput {\n  vec2 uv;\n  vec4 position;\n  vec3 normal;\n  vec4 tangent;\n  vec4 color;\n};\nattribute vec3 a_position;\n#if CC_USE_ATTRIBUTE_UV0\nattribute vec2 a_uv0;\n#endif\n#if CC_USE_ATTRIBUTE_COLOR\nattribute vec4 a_color;\n#endif\n#if CC_USE_ATTRIBUTE_NORMAL\nattribute vec3 a_normal;\n#endif\n#if CC_USE_ATTRIBUTE_TANGENT\nattribute vec4 a_tangent;\n#endif\nvoid CCAttribute (out StandardVertInput In) {\n  In.position = vec4(a_position, 1.0);\n  #if CC_USE_ATTRIBUTE_UV0\n    In.uv = a_uv0;\n  #else\n    In.uv = vec2(0.0);\n  #endif\n  #if CC_USE_ATTRIBUTE_COLOR\n    In.color = a_color;\n  #else\n    In.color = vec4(1.0);\n  #endif\n  #if CC_USE_ATTRIBUTE_NORMAL\n    In.normal = a_normal;\n  #else\n    In.normal = vec3(0.0, 1.0, 0.0);\n  #endif\n  #if CC_USE_ATTRIBUTE_TANGENT\n    In.tangent = a_tangent;\n  #else\n    In.tangent = vec4(1.0, 0.0, 0.0, 0.0);\n  #endif\n}\nvoid CCVertInput(out StandardVertInput In) {\n  CCAttribute(In);\n  #if CC_USE_SKINNING\n    mat4 m = skinMatrix();\n    In.position = m * In.position;\n    #if CC_USE_ATTRIBUTE_NORMAL\n      In.normal = (m * vec4(In.normal, 0)).xyz;\n    #endif\n    #if CC_USE_ATTRIBUTE_TANGENT\n      In.tangent = m * In.tangent;\n    #endif\n  #endif\n}\nuniform vec2 mainTiling;\nuniform vec2 mainOffset;\n#if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n  varying mediump vec2 v_uv0;\n#endif\n#if CC_USE_ATTRIBUTE_COLOR\n  varying lowp vec4 v_color;\n#endif\nvoid main () {\n  StandardVertInput In;\n  CCVertInput(In);\n  #if CC_USE_ATTRIBUTE_COLOR\n    v_color = In.color;\n  #endif\n  #if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n    v_uv0 = In.uv * mainTiling + mainOffset;\n  #endif\n  gl_Position = cc_matViewProj * cc_matWorld * In.position;\n}",
          "frag": "\nprecision highp float;\n#if USE_ALPHA_TEST\n  uniform float alphaThreshold;\n#endif\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\nvec4 CCFragOutput (vec4 color) {\n  #if OUTPUT_TO_GAMMA\n    color.rgb = sqrt(color.rgb);\n  #endif\n\treturn color;\n}\nuniform lowp vec4 diffuseColor;\n#if USE_DIFFUSE_TEXTURE\n  uniform sampler2D diffuseTexture;\n#endif\n#if CC_USE_ATTRIBUTE_COLOR\n  varying lowp vec4 v_color;\n#endif\n#if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n  varying mediump vec2 v_uv0;\n#endif\nvoid main () {\n  vec4 color = diffuseColor;\n  #if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n  vec4 diffuseTexture_tmp = texture2D(diffuseTexture, v_uv0);\n  #if CC_USE_ALPHA_ATLAS_diffuseTexture\n      diffuseTexture_tmp.a *= texture2D(diffuseTexture, v_uv0 + vec2(0, 0.5)).r;\n  #endif\n  #if INPUT_IS_GAMMA\n    color.rgb *= (diffuseTexture_tmp.rgb * diffuseTexture_tmp.rgb);\n    color.a *= diffuseTexture_tmp.a;\n  #else\n    color *= diffuseTexture_tmp;\n  #endif\n  #endif\n  #if CC_USE_ATTRIBUTE_COLOR\n    color *= v_color;\n  #endif\n  ALPHA_TEST(color);\n  gl_FragColor = CCFragOutput(color);\n}"
        },
        "builtins": {
          "globals": {
            "blocks": [
              {
                "name": "CCGlobal",
                "defines": []
              }
            ],
            "samplers": []
          },
          "locals": {
            "blocks": [
              {
                "name": "CCLocal",
                "defines": []
              }
            ],
            "samplers": []
          }
        },
        "defines": [
          {
            "name": "CC_USE_SKINNING",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_JOINTS_TEXTRUE",
            "type": "boolean",
            "defines": [
              "CC_USE_SKINNING"
            ]
          },
          {
            "name": "CC_JOINTS_TEXTURE_FLOAT32",
            "type": "boolean",
            "defines": [
              "CC_USE_SKINNING",
              "CC_USE_JOINTS_TEXTRUE"
            ]
          },
          {
            "name": "CC_USE_ATTRIBUTE_UV0",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_ATTRIBUTE_COLOR",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_ATTRIBUTE_NORMAL",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_ATTRIBUTE_TANGENT",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "USE_DIFFUSE_TEXTURE",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "USE_ALPHA_TEST",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "OUTPUT_TO_GAMMA",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_ALPHA_ATLAS_diffuseTexture",
            "type": "boolean",
            "defines": [
              "CC_USE_ATTRIBUTE_UV0",
              "USE_DIFFUSE_TEXTURE"
            ]
          },
          {
            "name": "INPUT_IS_GAMMA",
            "type": "boolean",
            "defines": [
              "CC_USE_ATTRIBUTE_UV0",
              "USE_DIFFUSE_TEXTURE"
            ]
          }
        ],
        "blocks": [
          {
            "name": "SKINNING",
            "members": [
              {
                "name": "jointsTextureSize",
                "type": 14,
                "count": 1
              }
            ],
            "defines": [
              "CC_USE_SKINNING",
              "CC_USE_JOINTS_TEXTRUE"
            ],
            "binding": 0
          },
          {
            "name": "JOINT_MATRIX",
            "members": [
              {
                "name": "jointMatrices",
                "type": 26,
                "count": 50
              }
            ],
            "defines": [
              "CC_USE_SKINNING"
            ],
            "binding": 1
          },
          {
            "name": "MAIN_TILING",
            "members": [
              {
                "name": "mainTiling",
                "type": 14,
                "count": 1
              },
              {
                "name": "mainOffset",
                "type": 14,
                "count": 1
              }
            ],
            "defines": [],
            "binding": 2
          },
          {
            "name": "ALPHA_TEST",
            "members": [
              {
                "name": "alphaThreshold",
                "type": 13,
                "count": 1
              }
            ],
            "defines": [
              "USE_ALPHA_TEST"
            ],
            "binding": 3
          },
          {
            "name": "UNLIT",
            "members": [
              {
                "name": "diffuseColor",
                "type": 16,
                "count": 1
              }
            ],
            "defines": [],
            "binding": 4
          }
        ],
        "samplers": [
          {
            "name": "jointsTexture",
            "type": 29,
            "count": 1,
            "defines": [
              "CC_USE_SKINNING",
              "CC_USE_JOINTS_TEXTRUE"
            ],
            "binding": 30
          },
          {
            "name": "diffuseTexture",
            "type": 29,
            "count": 1,
            "defines": [
              "USE_DIFFUSE_TEXTURE"
            ],
            "binding": 31
          }
        ],
        "record": null,
        "name": "builtin-unlit|unlit-vs|unlit-fs"
      }
    ]
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Material",
    "_name": "builtin-2d-base",
    "_effectAsset": {
      "__uuid__": "28dPjdQWxEQIG3VVl1Qm6T"
    },
    "_techniqueData": {}
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "zangai-dong_2",
      "texture": "c4MqVq5FVJE5SYqPlVwHaB",
      "rect": [
        0,
        0,
        296,
        640
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        296,
        640
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_10",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        614,
        117,
        31,
        114
      ],
      "offset": [
        0,
        -3
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_20",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        757,
        46,
        43,
        102
      ],
      "offset": [
        0,
        -3
      ],
      "originalSize": [
        73,
        124
      ],
      "rotated": 1,
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_17",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        739,
        111,
        39,
        106
      ],
      "offset": [
        0,
        -2
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "biaoqing_2",
      "texture": "62eZsn1r1ERrOWlINFw8Pu",
      "rect": [
        9,
        19,
        93,
        80
      ],
      "offset": [
        -2,
        -1.5
      ],
      "originalSize": [
        115,
        115
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "34",
      "texture": "88aJzv8bFBEpAhX0ECvd8j",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Material",
    "_name": "builtin-2d-spine",
    "_effectAsset": {
      "__uuid__": "0ek66qC1NOQLjgYmi04HvX"
    },
    "_techniqueData": {}
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "13",
      "texture": "649ewvsL5PE6/8spjvXs/9",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "zangai_0",
      "texture": "97lfcibypOoZnU+fEM/2gT",
      "rect": [
        0,
        0,
        200,
        200
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        200,
        200
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "23",
      "texture": "02JHcjM3VKU5bCjwIyIOj+",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "daoju_xitie",
      "texture": "97vRL6ihlEgrlGZWQd2pZp",
      "rect": [
        0,
        0,
        82,
        84
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        82,
        84
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "12",
      "texture": "85DyLq6wJIGa/vs2OaTI7d",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "11",
      "texture": "495NBNZHtCcpE4U1ZGLklY",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "28",
      "texture": "758O1M5ihAFodsCH+Z0bG3",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_22",
      "texture": "88uIAiOylBH4XArkoJmpAu",
      "rect": [
        17,
        16,
        39,
        97
      ],
      "offset": [
        0,
        -2.5
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "35",
      "texture": "d8fwwIJjNOWrw2U1Vp8PQc",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.JsonAsset",
    "_name": "LevelTable",
    "json": [
      {
        "id": 1,
        "name": "倔强青铜",
        "level": 1,
        "uplevel": 0,
        "stars": 0,
        "meteor": "",
        "movMeteor": "",
        "blackHole": 0,
        "speedUp": "",
        "hotWheels": "",
        "magnet": "",
        "newContent": "按住屏幕移动捡刀\n松开手指龟缩防御\n攻击敌人星球",
        "contentType": 100,
        "ailv1": 4,
        "ailv2": 3,
        "ailv3": 0,
        "ailv4": 0
      },
      {
        "id": 2,
        "name": "华彩白银",
        "level": 2,
        "uplevel": 0,
        "stars": 20,
        "meteor": "2-4",
        "movMeteor": "",
        "blackHole": 0,
        "speedUp": "",
        "hotWheels": "",
        "magnet": "",
        "newContent": "陨石",
        "contentType": 11,
        "ailv1": 5,
        "ailv2": 2,
        "ailv3": 0,
        "ailv4": 0
      },
      {
        "id": 3,
        "name": "荣耀黄金1",
        "level": 3,
        "uplevel": 1,
        "stars": 50,
        "meteor": "3-5",
        "movMeteor": "1-3",
        "blackHole": 0,
        "speedUp": "",
        "hotWheels": "",
        "magnet": "",
        "newContent": "移动型陨石",
        "contentType": 12,
        "ailv1": 3,
        "ailv2": 3,
        "ailv3": 1,
        "ailv4": 0
      },
      {
        "id": 4,
        "name": "荣耀黄金2",
        "level": 3,
        "uplevel": 2,
        "stars": 100,
        "meteor": "3-5",
        "movMeteor": "1-3",
        "blackHole": 0,
        "speedUp": "",
        "hotWheels": "",
        "magnet": "",
        "newContent": "",
        "contentType": 0,
        "ailv1": 2,
        "ailv2": 4,
        "ailv3": 1,
        "ailv4": 0
      },
      {
        "id": 5,
        "name": "荣耀黄金3",
        "level": 3,
        "uplevel": 3,
        "stars": 150,
        "meteor": "3-5",
        "movMeteor": "1-3",
        "blackHole": 0,
        "speedUp": "",
        "hotWheels": "",
        "magnet": "",
        "newContent": "",
        "contentType": 0,
        "ailv1": 2,
        "ailv2": 3,
        "ailv3": 2,
        "ailv4": 0
      },
      {
        "id": 6,
        "name": "不毁铂金1",
        "level": 4,
        "uplevel": 1,
        "stars": 200,
        "meteor": "4-6",
        "movMeteor": "2-4",
        "blackHole": 1,
        "speedUp": "",
        "hotWheels": "",
        "magnet": "",
        "newContent": "吞噬一切：黑洞",
        "contentType": 10,
        "ailv1": 1,
        "ailv2": 3,
        "ailv3": 3,
        "ailv4": 0
      },
      {
        "id": 7,
        "name": "不毁铂金2",
        "level": 4,
        "uplevel": 2,
        "stars": 300,
        "meteor": "4-6",
        "movMeteor": "2-4",
        "blackHole": 1,
        "speedUp": "",
        "hotWheels": "",
        "magnet": "",
        "newContent": "",
        "contentType": 0,
        "ailv1": 0,
        "ailv2": 4,
        "ailv3": 3,
        "ailv4": 0
      },
      {
        "id": 8,
        "name": "不毁铂金3",
        "level": 4,
        "uplevel": 3,
        "stars": 450,
        "meteor": "4-6",
        "movMeteor": "2-4",
        "blackHole": 1,
        "speedUp": "",
        "hotWheels": "",
        "magnet": "",
        "newContent": "",
        "contentType": 0,
        "ailv1": 0,
        "ailv2": 3,
        "ailv3": 3,
        "ailv4": 1
      },
      {
        "id": 9,
        "name": "永恒钻石1",
        "level": 5,
        "uplevel": 1,
        "stars": 650,
        "meteor": "4-6",
        "movMeteor": "3-5",
        "blackHole": 1,
        "speedUp": "20-2",
        "hotWheels": "",
        "magnet": "",
        "newContent": "移动加速：火箭",
        "contentType": 2,
        "ailv1": 0,
        "ailv2": 2,
        "ailv3": 4,
        "ailv4": 1
      },
      {
        "id": 10,
        "name": "永恒钻石2",
        "level": 5,
        "uplevel": 2,
        "stars": 900,
        "meteor": "4-6",
        "movMeteor": "3-5",
        "blackHole": 1,
        "speedUp": "20-2",
        "hotWheels": "",
        "magnet": "",
        "newContent": "",
        "contentType": 0,
        "ailv1": 0,
        "ailv2": 2,
        "ailv3": 3,
        "ailv4": 2
      },
      {
        "id": 11,
        "name": "永恒钻石3",
        "level": 5,
        "uplevel": 3,
        "stars": 1200,
        "meteor": "4-6",
        "movMeteor": "3-5",
        "blackHole": 1,
        "speedUp": "20-2",
        "hotWheels": "",
        "magnet": "",
        "newContent": "",
        "contentType": 0,
        "ailv1": 0,
        "ailv2": 1,
        "ailv3": 4,
        "ailv4": 2
      },
      {
        "id": 12,
        "name": "星界大师1",
        "level": 6,
        "uplevel": 1,
        "stars": 1600,
        "meteor": "4-6",
        "movMeteor": "4-6",
        "blackHole": 1,
        "speedUp": "20-2",
        "hotWheels": "30-2",
        "magnet": "",
        "newContent": "旋转加速：风火轮",
        "contentType": 1,
        "ailv1": 0,
        "ailv2": 0,
        "ailv3": 5,
        "ailv4": 2
      },
      {
        "id": 13,
        "name": "星界大师2",
        "level": 6,
        "uplevel": 2,
        "stars": 2100,
        "meteor": "4-6",
        "movMeteor": "4-6",
        "blackHole": 1,
        "speedUp": "20-2",
        "hotWheels": "30-2",
        "magnet": "",
        "newContent": "",
        "contentType": 0,
        "ailv1": 0,
        "ailv2": 0,
        "ailv3": 4,
        "ailv4": 3
      },
      {
        "id": 14,
        "name": "星界大师3",
        "level": 6,
        "uplevel": 3,
        "stars": 2700,
        "meteor": "4-6",
        "movMeteor": "4-6",
        "blackHole": 1,
        "speedUp": "20-2",
        "hotWheels": "30-2",
        "magnet": "",
        "newContent": "",
        "contentType": 0,
        "ailv1": 0,
        "ailv2": 0,
        "ailv3": 3,
        "ailv4": 4
      },
      {
        "id": 15,
        "name": "宇宙最强",
        "level": 7,
        "uplevel": 0,
        "stars": 3500,
        "meteor": "5-7",
        "movMeteor": "5-7",
        "blackHole": 1,
        "speedUp": "20-2",
        "hotWheels": "30-2",
        "magnet": "30-1",
        "newContent": "自动吸刀：磁铁",
        "contentType": 3,
        "ailv1": 0,
        "ailv2": 0,
        "ailv3": 2,
        "ailv4": 5
      }
    ]
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_0",
      "texture": "05U8kdKtBCBKeZIN769Imk",
      "rect": [
        27,
        22,
        20,
        97
      ],
      "offset": [
        0.5,
        -8.5
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  [
    {
      "__type__": "cc.Prefab",
      "_name": "Mark",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "Mark",
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 1
          },
          "_spriteFrame": {
            "__uuid__": "4fhxmZgXlPzrf0A2sW03n6"
          },
          "_sizeMode": 0
        },
        {
          "__type__": "77508ChDR1GLYt5yR5jvjxa",
          "node": {
            "__id__": 1
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "93O/lUnfBMpZRPj+cDJtjA"
        },
        "fileId": "5fVxVZ/AdE+6G9IZqspkef"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 50,
        "height": 50
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    }
  ],
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "2",
      "texture": "54dGfpgjdML5cd7AfT2hJE",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_22",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        780,
        115,
        41,
        100
      ],
      "offset": [
        0,
        -2
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_24",
      "texture": "4dfofaHMxKJID9Yvvhc6K6",
      "rect": [
        17,
        7,
        40,
        112
      ],
      "offset": [
        0.5,
        -1
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "47",
      "texture": "61tWR83U1AprbfjRm0HrBC",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "14",
      "texture": "c1esqTWJ1G0bjDD8/Yri/T",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  [
    {
      "__type__": "cc.Prefab",
      "_name": "BlackHole",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "BlackHole",
      "_children": [
        {
          "__id__": 2
        }
      ],
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 1
          },
          "_spriteFrame": {
            "__uuid__": "7bETIf45NM+Ktni08tv5qL"
          },
          "_sizeMode": 0
        },
        {
          "__type__": "cc.RigidBody",
          "node": {
            "__id__": 1
          },
          "_type": 0
        },
        {
          "__type__": "cc.PhysicsCircleCollider",
          "node": {
            "__id__": 1
          },
          "_radius": 100
        },
        {
          "__type__": "01a155n941N4KWBmaZ+N+j1",
          "node": {
            "__id__": 1
          },
          "type": 2,
          "skin": {
            "__id__": 4
          },
          "body": {
            "__id__": 2
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "9d+DwFrAJJ4JtawpJXKRM8"
        },
        "fileId": "4eUHvo061EzoPfiXYLr1sG"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 225,
        "height": 229
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          286,
          238,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "Body",
      "_parent": {
        "__id__": 1
      },
      "_children": [
        {
          "__id__": 3
        }
      ],
      "_components": [
        {
          "__type__": "cc.CircleCollider",
          "node": {
            "__id__": 2
          },
          "tag": 5,
          "_radius": 100
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "9d+DwFrAJJ4JtawpJXKRM8"
        },
        "fileId": "a0TMhLQAtGXq/Wfk1CyASy"
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "Skin",
      "_parent": {
        "__id__": 2
      },
      "_components": [
        {
          "__id__": 4
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "9d+DwFrAJJ4JtawpJXKRM8"
        },
        "fileId": "628m3AcVtBXavFJhURMRhu"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 225,
        "height": 229
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Sprite",
      "node": {
        "__id__": 3
      },
      "_spriteFrame": {
        "__uuid__": "7bETIf45NM+Ktni08tv5qL"
      },
      "_sizeMode": 0
    }
  ],
  [
    {
      "__type__": "cc.Prefab",
      "_name": "Knife",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "Knife",
      "_children": [
        {
          "__id__": 2
        }
      ],
      "_components": [
        {
          "__type__": "42a9bdmWaRJLKhRV5/o+TYs",
          "node": {
            "__id__": 1
          },
          "skin": {
            "__id__": 3
          }
        },
        {
          "__type__": "cc.BoxCollider",
          "node": {
            "__id__": 1
          },
          "tag": 1,
          "_size": {
            "__type__": "cc.Size",
            "width": 42,
            "height": 101
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "9dDjAyovZJEIO55qg6abLm"
        },
        "fileId": "494zvS2FlOkJ9YOfdsVpLJ"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 42,
        "height": 101
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          215,
          168,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "Skin",
      "_parent": {
        "__id__": 1
      },
      "_components": [
        {
          "__id__": 3
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "9dDjAyovZJEIO55qg6abLm"
        },
        "fileId": "d9hARr8otP/bNk7VxSZy60"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 38,
        "height": 178
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Sprite",
      "node": {
        "__id__": 2
      },
      "_spriteFrame": {
        "__uuid__": "46Rs2IA+tI9r4jN+1HtNfP"
      },
      "_sizeMode": 0
    }
  ],
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "biaoqing_3",
      "texture": "3aTEqKV6JPLaAuyyyKCnF8",
      "rect": [
        7,
        23,
        98,
        76
      ],
      "offset": [
        -1.5,
        -3.5
      ],
      "originalSize": [
        115,
        115
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "xingqiu-4",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        222,
        118,
        115,
        115
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        115,
        115
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  [
    {
      "__type__": "cc.Prefab",
      "_name": "zangai_7",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "zangai_7",
      "_children": [
        {
          "__id__": 2
        }
      ],
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 1
          },
          "_spriteFrame": {
            "__uuid__": "31uE+coshP45HL+gm4NCAF"
          }
        },
        {
          "__type__": "cc.RigidBody",
          "node": {
            "__id__": 1
          },
          "_type": 0
        },
        {
          "__type__": "cc.PhysicsPolygonCollider",
          "node": {
            "__id__": 1
          },
          "points": [
            {
              "__type__": "cc.Vec2",
              "x": -166,
              "y": -83
            },
            {
              "__type__": "cc.Vec2",
              "x": -117,
              "y": -229
            },
            {
              "__type__": "cc.Vec2",
              "x": -63,
              "y": -260
            },
            {
              "__type__": "cc.Vec2",
              "x": 11,
              "y": -233
            },
            {
              "__type__": "cc.Vec2",
              "x": 108,
              "y": -125
            },
            {
              "__type__": "cc.Vec2",
              "x": 177,
              "y": -30
            },
            {
              "__type__": "cc.Vec2",
              "x": 186,
              "y": 43
            },
            {
              "__type__": "cc.Vec2",
              "x": 80,
              "y": 145
            },
            {
              "__type__": "cc.Vec2",
              "x": 58,
              "y": 197
            },
            {
              "__type__": "cc.Vec2",
              "x": 21,
              "y": 242
            },
            {
              "__type__": "cc.Vec2",
              "x": -16,
              "y": 263
            },
            {
              "__type__": "cc.Vec2",
              "x": -86,
              "y": 240
            },
            {
              "__type__": "cc.Vec2",
              "x": -119,
              "y": 186
            },
            {
              "__type__": "cc.Vec2",
              "x": -171,
              "y": 67
            },
            {
              "__type__": "cc.Vec2",
              "x": -182,
              "y": 3
            }
          ]
        },
        {
          "__type__": "e4c4cYS2FtI6p+AI35rs0jE",
          "node": {
            "__id__": 1
          },
          "type": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "9fnrqrprtF3bc29z1Mt6ox"
        },
        "fileId": "90jE5ccGBFj6I74Q5d1gut"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 380,
        "height": 527
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          571,
          742,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "New Node",
      "_parent": {
        "__id__": 1
      },
      "_components": [
        {
          "__type__": "cc.PolygonCollider",
          "node": {
            "__id__": 2
          },
          "tag": 2,
          "points": [
            {
              "__type__": "cc.Vec2",
              "x": 73,
              "y": -264
            },
            {
              "__type__": "cc.Vec2",
              "x": 131,
              "y": -240
            },
            {
              "__type__": "cc.Vec2",
              "x": 175,
              "y": -204
            },
            {
              "__type__": "cc.Vec2",
              "x": 239,
              "y": -125
            },
            {
              "__type__": "cc.Vec2",
              "x": 273,
              "y": -107
            },
            {
              "__type__": "cc.Vec2",
              "x": 289,
              "y": -58
            },
            {
              "__type__": "cc.Vec2",
              "x": 319,
              "y": -23
            },
            {
              "__type__": "cc.Vec2",
              "x": 323,
              "y": 44
            },
            {
              "__type__": "cc.Vec2",
              "x": 254,
              "y": 113
            },
            {
              "__type__": "cc.Vec2",
              "x": 210,
              "y": 157
            },
            {
              "__type__": "cc.Vec2",
              "x": 162,
              "y": 240
            },
            {
              "__type__": "cc.Vec2",
              "x": 129,
              "y": 265
            },
            {
              "__type__": "cc.Vec2",
              "x": 94,
              "y": 260
            },
            {
              "__type__": "cc.Vec2",
              "x": 51,
              "y": 246
            },
            {
              "__type__": "cc.Vec2",
              "x": 6,
              "y": 171
            },
            {
              "__type__": "cc.Vec2",
              "x": -37,
              "y": 79
            },
            {
              "__type__": "cc.Vec2",
              "x": -46,
              "y": -18
            },
            {
              "__type__": "cc.Vec2",
              "x": -31,
              "y": -46
            },
            {
              "__type__": "cc.Vec2",
              "x": -21,
              "y": -127
            },
            {
              "__type__": "cc.Vec2",
              "x": 18,
              "y": -225
            },
            {
              "__type__": "cc.Vec2",
              "x": 40,
              "y": -251
            }
          ]
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "9fnrqrprtF3bc29z1Mt6ox"
        },
        "fileId": "53MoTZEF5Jgo2RzOPHLL8g"
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          -135,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    }
  ],
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "default_sprite_splash",
      "texture": "02delMVqdBD70a/HSD99FK",
      "rect": [
        0,
        0,
        2,
        2
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        2,
        2
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  [
    {
      "__type__": "cc.Prefab",
      "_name": "LevelTitle",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "LevelTitle",
      "_children": [
        {
          "__id__": 2
        }
      ],
      "_components": [
        null
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "a4QAYPtnlEWaXItUk4hpkj"
        },
        "fileId": "f65FoF3BtNkb2unqN7zFUD"
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "Label",
      "_parent": {
        "__id__": 1
      },
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 2
          },
          "_useOriginalSize": false,
          "_string": "1-1",
          "_N$string": "1-1",
          "_fontSize": 63.7,
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1
        },
        {
          "__type__": "cc.LabelOutline",
          "node": {
            "__id__": 2
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "a4QAYPtnlEWaXItUk4hpkj"
        },
        "fileId": "91KyJ8MLVPeIkPGudjoT61"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 94.07,
        "height": 40
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    }
  ],
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_5",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        1,
        127,
        39,
        124
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "6",
      "texture": "94vgF4445Obbbg5jaO+ois",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "10",
      "texture": "22LB6/F7lPsbNrq3QyS4K7",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "dragonBones.DragonBonesAtlasAsset",
    "_name": "bai_tex",
    "_atlasJson": "{\"SubTexture\":[{\"y\":1,\"frameX\":-1,\"frameHeight\":100,\"frameY\":-1,\"width\":98,\"frameWidth\":100,\"height\":98,\"name\":\"椭圆 1 拷贝 7\",\"x\":1}],\"width\":128,\"imagePath\":\"bai_tex.png\",\"height\":128,\"name\":\"bai\"}",
    "_texture": {
      "__uuid__": "9eZ/v8AexB4ozz3mSlZ4cL"
    },
    "texture": {
      "__uuid__": "9eZ/v8AexB4ozz3mSlZ4cL"
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_13",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        573,
        117,
        39,
        114
      ],
      "offset": [
        0,
        2
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.AnimationClip",
    "_name": "splash",
    "_duration": 0.6666666666666666,
    "wrapMode": "2",
    "curveData": {
      "props": {
        "color": [
          {
            "frame": 0,
            "value": {
              "__type__": "cc.Color",
              "r": 3,
              "g": 3,
              "b": 3
            }
          },
          {
            "frame": 0.3333333333333333,
            "value": {
              "__type__": "cc.Color",
              "r": 239,
              "g": 199,
              "b": 2
            }
          },
          {
            "frame": 0.6666666666666666,
            "value": {
              "__type__": "cc.Color"
            }
          }
        ]
      }
    }
  },
  {
    "__type__": "cc.JsonAsset",
    "_name": "AccountRankTable",
    "json": [
      {
        "id": 1,
        "level": 1,
        "rank": 1,
        "reward": 7
      },
      {
        "id": 2,
        "level": 1,
        "rank": 2,
        "reward": 6
      },
      {
        "id": 3,
        "level": 1,
        "rank": 3,
        "reward": 5
      },
      {
        "id": 4,
        "level": 1,
        "rank": 4,
        "reward": 4
      },
      {
        "id": 5,
        "level": 1,
        "rank": 5,
        "reward": 3
      },
      {
        "id": 6,
        "level": 1,
        "rank": 6,
        "reward": 2
      },
      {
        "id": 7,
        "level": 1,
        "rank": 7,
        "reward": 1
      },
      {
        "id": 8,
        "level": 1,
        "rank": 8,
        "reward": 0
      },
      {
        "id": 9,
        "level": 2,
        "rank": 1,
        "reward": 7
      },
      {
        "id": 10,
        "level": 2,
        "rank": 2,
        "reward": 6
      },
      {
        "id": 11,
        "level": 2,
        "rank": 3,
        "reward": 5
      },
      {
        "id": 12,
        "level": 2,
        "rank": 4,
        "reward": 4
      },
      {
        "id": 13,
        "level": 2,
        "rank": 5,
        "reward": 3
      },
      {
        "id": 14,
        "level": 2,
        "rank": 6,
        "reward": 2
      },
      {
        "id": 15,
        "level": 2,
        "rank": 7,
        "reward": 1
      },
      {
        "id": 16,
        "level": 2,
        "rank": 8,
        "reward": 0
      },
      {
        "id": 17,
        "level": 3,
        "rank": 1,
        "reward": 7
      },
      {
        "id": 18,
        "level": 3,
        "rank": 2,
        "reward": 6
      },
      {
        "id": 19,
        "level": 3,
        "rank": 3,
        "reward": 5
      },
      {
        "id": 20,
        "level": 3,
        "rank": 4,
        "reward": 4
      },
      {
        "id": 21,
        "level": 3,
        "rank": 5,
        "reward": 3
      },
      {
        "id": 22,
        "level": 3,
        "rank": 6,
        "reward": -1
      },
      {
        "id": 23,
        "level": 3,
        "rank": 7,
        "reward": -2
      },
      {
        "id": 24,
        "level": 3,
        "rank": 8,
        "reward": -3
      },
      {
        "id": 25,
        "level": 4,
        "rank": 1,
        "reward": 7
      },
      {
        "id": 26,
        "level": 4,
        "rank": 2,
        "reward": 6
      },
      {
        "id": 27,
        "level": 4,
        "rank": 3,
        "reward": 5
      },
      {
        "id": 28,
        "level": 4,
        "rank": 4,
        "reward": 4
      },
      {
        "id": 29,
        "level": 4,
        "rank": 5,
        "reward": 3
      },
      {
        "id": 30,
        "level": 4,
        "rank": 6,
        "reward": -1
      },
      {
        "id": 31,
        "level": 4,
        "rank": 7,
        "reward": -2
      },
      {
        "id": 32,
        "level": 4,
        "rank": 8,
        "reward": -3
      },
      {
        "id": 33,
        "level": 5,
        "rank": 1,
        "reward": 7
      },
      {
        "id": 34,
        "level": 5,
        "rank": 2,
        "reward": 6
      },
      {
        "id": 35,
        "level": 5,
        "rank": 3,
        "reward": 5
      },
      {
        "id": 36,
        "level": 5,
        "rank": 4,
        "reward": 4
      },
      {
        "id": 37,
        "level": 5,
        "rank": 5,
        "reward": 3
      },
      {
        "id": 38,
        "level": 5,
        "rank": 6,
        "reward": -1
      },
      {
        "id": 39,
        "level": 5,
        "rank": 7,
        "reward": -2
      },
      {
        "id": 40,
        "level": 5,
        "rank": 8,
        "reward": -3
      },
      {
        "id": 41,
        "level": 6,
        "rank": 1,
        "reward": 7
      },
      {
        "id": 42,
        "level": 6,
        "rank": 2,
        "reward": 6
      },
      {
        "id": 43,
        "level": 6,
        "rank": 3,
        "reward": 5
      },
      {
        "id": 44,
        "level": 6,
        "rank": 4,
        "reward": 4
      },
      {
        "id": 45,
        "level": 6,
        "rank": 5,
        "reward": 3
      },
      {
        "id": 46,
        "level": 6,
        "rank": 6,
        "reward": -1
      },
      {
        "id": 47,
        "level": 6,
        "rank": 7,
        "reward": -2
      },
      {
        "id": 48,
        "level": 6,
        "rank": 8,
        "reward": -3
      },
      {
        "id": 49,
        "level": 7,
        "rank": 1,
        "reward": 7
      },
      {
        "id": 50,
        "level": 7,
        "rank": 2,
        "reward": 6
      },
      {
        "id": 51,
        "level": 7,
        "rank": 3,
        "reward": 5
      },
      {
        "id": 52,
        "level": 7,
        "rank": 4,
        "reward": 4
      },
      {
        "id": 53,
        "level": 7,
        "rank": 5,
        "reward": 3
      },
      {
        "id": 54,
        "level": 7,
        "rank": 6,
        "reward": -1
      },
      {
        "id": 55,
        "level": 7,
        "rank": 7,
        "reward": -2
      },
      {
        "id": 56,
        "level": 7,
        "rank": 8,
        "reward": -3
      },
      {
        "id": 57,
        "level": 8,
        "rank": 1,
        "reward": 7
      },
      {
        "id": 58,
        "level": 8,
        "rank": 2,
        "reward": 6
      },
      {
        "id": 59,
        "level": 8,
        "rank": 3,
        "reward": 5
      },
      {
        "id": 60,
        "level": 8,
        "rank": 4,
        "reward": 4
      },
      {
        "id": 61,
        "level": 8,
        "rank": 5,
        "reward": 3
      },
      {
        "id": 62,
        "level": 8,
        "rank": 6,
        "reward": -1
      },
      {
        "id": 63,
        "level": 8,
        "rank": 7,
        "reward": -2
      },
      {
        "id": 64,
        "level": 8,
        "rank": 8,
        "reward": -3
      },
      {
        "id": 65,
        "level": 9,
        "rank": 1,
        "reward": 7
      },
      {
        "id": 66,
        "level": 9,
        "rank": 2,
        "reward": 6
      },
      {
        "id": 67,
        "level": 9,
        "rank": 3,
        "reward": 5
      },
      {
        "id": 68,
        "level": 9,
        "rank": 4,
        "reward": 4
      },
      {
        "id": 69,
        "level": 9,
        "rank": 5,
        "reward": -1
      },
      {
        "id": 70,
        "level": 9,
        "rank": 6,
        "reward": -2
      },
      {
        "id": 71,
        "level": 9,
        "rank": 7,
        "reward": -3
      },
      {
        "id": 72,
        "level": 9,
        "rank": 8,
        "reward": -4
      },
      {
        "id": 73,
        "level": 10,
        "rank": 1,
        "reward": 7
      },
      {
        "id": 74,
        "level": 10,
        "rank": 2,
        "reward": 6
      },
      {
        "id": 75,
        "level": 10,
        "rank": 3,
        "reward": 5
      },
      {
        "id": 76,
        "level": 10,
        "rank": 4,
        "reward": 4
      },
      {
        "id": 77,
        "level": 10,
        "rank": 5,
        "reward": -1
      },
      {
        "id": 78,
        "level": 10,
        "rank": 6,
        "reward": -2
      },
      {
        "id": 79,
        "level": 10,
        "rank": 7,
        "reward": -3
      },
      {
        "id": 80,
        "level": 10,
        "rank": 8,
        "reward": -4
      },
      {
        "id": 81,
        "level": 11,
        "rank": 1,
        "reward": 7
      },
      {
        "id": 82,
        "level": 11,
        "rank": 2,
        "reward": 6
      },
      {
        "id": 83,
        "level": 11,
        "rank": 3,
        "reward": 5
      },
      {
        "id": 84,
        "level": 11,
        "rank": 4,
        "reward": 4
      },
      {
        "id": 85,
        "level": 11,
        "rank": 5,
        "reward": -1
      },
      {
        "id": 86,
        "level": 11,
        "rank": 6,
        "reward": -2
      },
      {
        "id": 87,
        "level": 11,
        "rank": 7,
        "reward": -3
      },
      {
        "id": 88,
        "level": 11,
        "rank": 8,
        "reward": -4
      },
      {
        "id": 89,
        "level": 12,
        "rank": 1,
        "reward": 7
      },
      {
        "id": 90,
        "level": 12,
        "rank": 2,
        "reward": 6
      },
      {
        "id": 91,
        "level": 12,
        "rank": 3,
        "reward": 5
      },
      {
        "id": 92,
        "level": 12,
        "rank": 4,
        "reward": -1
      },
      {
        "id": 93,
        "level": 12,
        "rank": 5,
        "reward": -2
      },
      {
        "id": 94,
        "level": 12,
        "rank": 6,
        "reward": -3
      },
      {
        "id": 95,
        "level": 12,
        "rank": 7,
        "reward": -4
      },
      {
        "id": 96,
        "level": 12,
        "rank": 8,
        "reward": -5
      },
      {
        "id": 97,
        "level": 13,
        "rank": 1,
        "reward": 7
      },
      {
        "id": 98,
        "level": 13,
        "rank": 2,
        "reward": 6
      },
      {
        "id": 99,
        "level": 13,
        "rank": 3,
        "reward": 5
      },
      {
        "id": 100,
        "level": 13,
        "rank": 4,
        "reward": -1
      },
      {
        "id": 101,
        "level": 13,
        "rank": 5,
        "reward": -2
      },
      {
        "id": 102,
        "level": 13,
        "rank": 6,
        "reward": -3
      },
      {
        "id": 103,
        "level": 13,
        "rank": 7,
        "reward": -4
      },
      {
        "id": 104,
        "level": 13,
        "rank": 8,
        "reward": -5
      },
      {
        "id": 105,
        "level": 14,
        "rank": 1,
        "reward": 7
      },
      {
        "id": 106,
        "level": 14,
        "rank": 2,
        "reward": 6
      },
      {
        "id": 107,
        "level": 14,
        "rank": 3,
        "reward": 5
      },
      {
        "id": 108,
        "level": 14,
        "rank": 4,
        "reward": -1
      },
      {
        "id": 109,
        "level": 14,
        "rank": 5,
        "reward": -2
      },
      {
        "id": 110,
        "level": 14,
        "rank": 6,
        "reward": -3
      },
      {
        "id": 111,
        "level": 14,
        "rank": 7,
        "reward": -4
      },
      {
        "id": 112,
        "level": 14,
        "rank": 8,
        "reward": -5
      },
      {
        "id": 113,
        "level": 15,
        "rank": 1,
        "reward": 7
      },
      {
        "id": 114,
        "level": 15,
        "rank": 2,
        "reward": 6
      },
      {
        "id": 115,
        "level": 15,
        "rank": 3,
        "reward": 5
      },
      {
        "id": 116,
        "level": 15,
        "rank": 4,
        "reward": -1
      },
      {
        "id": 117,
        "level": 15,
        "rank": 5,
        "reward": -2
      },
      {
        "id": 118,
        "level": 15,
        "rank": 6,
        "reward": -3
      },
      {
        "id": 119,
        "level": 15,
        "rank": 7,
        "reward": -4
      },
      {
        "id": 120,
        "level": 15,
        "rank": 8,
        "reward": -5
      }
    ]
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_15",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        848,
        138,
        69,
        104
      ],
      "offset": [
        0,
        -3
      ],
      "originalSize": [
        73,
        124
      ],
      "rotated": 1,
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_3",
      "texture": "03iu1Ycc5L0oS5lUmLJDnz",
      "rect": [
        22,
        0,
        30,
        116
      ],
      "offset": [
        0.5,
        4
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "zangai_3",
      "texture": "6biB1CBedCLLpJYXXK5sds",
      "rect": [
        0,
        0,
        324,
        569
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        324,
        569
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  [
    {
      "__type__": "cc.Prefab",
      "_name": "zangai_5",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "zangai_5",
      "_children": [
        {
          "__id__": 2
        }
      ],
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 1
          },
          "_spriteFrame": {
            "__uuid__": "feyVP0Q8VE7bJyqL6sVDP4"
          }
        },
        {
          "__type__": "cc.RigidBody",
          "node": {
            "__id__": 1
          },
          "_type": 0
        },
        {
          "__type__": "cc.PhysicsPolygonCollider",
          "node": {
            "__id__": 1
          },
          "points": [
            {
              "__type__": "cc.Vec2",
              "x": -72.9,
              "y": -159.7
            },
            {
              "__type__": "cc.Vec2",
              "x": -3.5,
              "y": -153.5
            },
            {
              "__type__": "cc.Vec2",
              "x": 101,
              "y": -140
            },
            {
              "__type__": "cc.Vec2",
              "x": 118,
              "y": -107
            },
            {
              "__type__": "cc.Vec2",
              "x": 178,
              "y": -71
            },
            {
              "__type__": "cc.Vec2",
              "x": 196,
              "y": 7
            },
            {
              "__type__": "cc.Vec2",
              "x": 131,
              "y": 86
            },
            {
              "__type__": "cc.Vec2",
              "x": 111,
              "y": 105.4
            },
            {
              "__type__": "cc.Vec2",
              "x": 83,
              "y": 121
            },
            {
              "__type__": "cc.Vec2",
              "x": 61.5,
              "y": 132.5
            },
            {
              "__type__": "cc.Vec2",
              "x": 26.5,
              "y": 136.2
            },
            {
              "__type__": "cc.Vec2",
              "x": -48,
              "y": 158
            },
            {
              "__type__": "cc.Vec2",
              "x": -118,
              "y": 131
            },
            {
              "__type__": "cc.Vec2",
              "x": -134,
              "y": 105
            },
            {
              "__type__": "cc.Vec2",
              "x": -171.2,
              "y": 86.6
            },
            {
              "__type__": "cc.Vec2",
              "x": -194.7,
              "y": 36.6
            },
            {
              "__type__": "cc.Vec2",
              "x": -192.2,
              "y": -10.7
            },
            {
              "__type__": "cc.Vec2",
              "x": -189.3,
              "y": -47.2
            },
            {
              "__type__": "cc.Vec2",
              "x": -165.3,
              "y": -89.7
            },
            {
              "__type__": "cc.Vec2",
              "x": -129.9,
              "y": -116.6
            },
            {
              "__type__": "cc.Vec2",
              "x": -111.7,
              "y": -147.7
            }
          ]
        },
        {
          "__type__": "e4c4cYS2FtI6p+AI35rs0jE",
          "node": {
            "__id__": 1
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "b1mHAzM9xMopDsomC9+QxQ"
        },
        "fileId": "02S2caG8RNJI+ktXc38De/"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 397,
        "height": 325
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          -730,
          -923,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "New Node",
      "_parent": {
        "__id__": 1
      },
      "_components": [
        {
          "__type__": "cc.PolygonCollider",
          "node": {
            "__id__": 2
          },
          "tag": 2,
          "points": [
            {
              "__type__": "cc.Vec2",
              "x": -23,
              "y": -153
            },
            {
              "__type__": "cc.Vec2",
              "x": 56,
              "y": -145
            },
            {
              "__type__": "cc.Vec2",
              "x": 105,
              "y": -132
            },
            {
              "__type__": "cc.Vec2",
              "x": 119,
              "y": -109
            },
            {
              "__type__": "cc.Vec2",
              "x": 178,
              "y": -69
            },
            {
              "__type__": "cc.Vec2",
              "x": 186,
              "y": -28
            },
            {
              "__type__": "cc.Vec2",
              "x": 200,
              "y": -14
            },
            {
              "__type__": "cc.Vec2",
              "x": 196,
              "y": 18
            },
            {
              "__type__": "cc.Vec2",
              "x": 142,
              "y": 65
            },
            {
              "__type__": "cc.Vec2",
              "x": 122,
              "y": 95
            },
            {
              "__type__": "cc.Vec2",
              "x": 74,
              "y": 129
            },
            {
              "__type__": "cc.Vec2",
              "x": 25.7,
              "y": 134.4
            },
            {
              "__type__": "cc.Vec2",
              "x": -39,
              "y": 159
            },
            {
              "__type__": "cc.Vec2",
              "x": -83,
              "y": 146
            },
            {
              "__type__": "cc.Vec2",
              "x": -120,
              "y": 128
            },
            {
              "__type__": "cc.Vec2",
              "x": -134,
              "y": 106
            },
            {
              "__type__": "cc.Vec2",
              "x": -179,
              "y": 77
            },
            {
              "__type__": "cc.Vec2",
              "x": -197,
              "y": 27
            },
            {
              "__type__": "cc.Vec2",
              "x": -190,
              "y": -43
            },
            {
              "__type__": "cc.Vec2",
              "x": -166,
              "y": -85
            },
            {
              "__type__": "cc.Vec2",
              "x": -126,
              "y": -124
            },
            {
              "__type__": "cc.Vec2",
              "x": -112,
              "y": -148
            },
            {
              "__type__": "cc.Vec2",
              "x": -71,
              "y": -159
            }
          ]
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "b1mHAzM9xMopDsomC9+QxQ"
        },
        "fileId": "9cKSGuAYhEBI1WBNwX0oly"
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    }
  ],
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "48",
      "texture": "1aeox7zSJM/axP8BPK7atr",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "7",
      "texture": "4fMrEX+GJKhLRa65bZJYSl",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "xingqiu-7",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        446,
        1,
        115,
        115
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        115,
        115
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  [
    {
      "__type__": "cc.Prefab",
      "_name": "SuccessPanel",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "SuccessPanel",
      "_children": [
        {
          "__id__": 2
        },
        {
          "__type__": "cc.Node",
          "_name": "Win",
          "_parent": {
            "__id__": 1
          },
          "_prefab": {
            "__type__": "cc.PrefabInfo",
            "root": {
              "__id__": 1
            },
            "asset": {
              "__uuid__": "b4sVMzA75O15Ov5g9Dv+jV"
            },
            "fileId": "c4OwDltxVAB75q89Nhaxxz"
          },
          "_trs": {
            "__type__": "TypedArray",
            "ctor": "Float64Array",
            "array": [
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              1,
              1,
              1
            ]
          },
          "_groupIndex": 1,
          "groupIndex": 1
        },
        {
          "__id__": 3
        },
        {
          "__id__": 4
        },
        {
          "__id__": 8
        }
      ],
      "_components": [
        {
          "__type__": "c5bf9IbcQJHtLeLpeQbul8E",
          "node": {
            "__id__": 1
          },
          "nextLevelBtn": {
            "__id__": 7
          },
          "exitBtn": {
            "__id__": 11
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "b4sVMzA75O15Ov5g9Dv+jV"
        },
        "fileId": "bfKRVjJTNNha4VE9a9lM8D"
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          65,
          5,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      },
      "_groupIndex": 1,
      "groupIndex": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "BG",
      "_parent": {
        "__id__": 1
      },
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 2
          },
          "_spriteFrame": {
            "__uuid__": "a2MjXRFdtLlYQ5ouAFv/+R"
          },
          "_sizeMode": 0
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "b4sVMzA75O15Ov5g9Dv+jV"
        },
        "fileId": "c79xurKIdEzZJFActx50pO"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 500,
        "height": 800
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      },
      "_groupIndex": 1,
      "groupIndex": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "MsgTxt",
      "_parent": {
        "__id__": 1
      },
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 3
          },
          "_useOriginalSize": false,
          "_string": "游戏过关",
          "_N$string": "游戏过关",
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1,
          "_N$overflow": 2
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "b4sVMzA75O15Ov5g9Dv+jV"
        },
        "fileId": "d5b64ZfNNK56FVAGMTsEAG"
      },
      "_color": {
        "__type__": "cc.Color",
        "r": 6,
        "g": 6,
        "b": 6
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 383,
        "height": 292
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          16,
          150,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      },
      "_groupIndex": 1,
      "groupIndex": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "enterNextBtn",
      "_parent": {
        "__id__": 1
      },
      "_children": [
        {
          "__id__": 5
        }
      ],
      "_components": [
        {
          "__id__": 7
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "b4sVMzA75O15Ov5g9Dv+jV"
        },
        "fileId": "c5FxpG4UxNnLg3YhTVoyMo"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 233,
        "height": 95
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          7,
          -110,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      },
      "_groupIndex": 1,
      "groupIndex": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "Background",
      "_parent": {
        "__id__": 4
      },
      "_children": [
        {
          "__id__": 6
        }
      ],
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 5
          },
          "_spriteFrame": {
            "__uuid__": "f0BIwQ8D5Ml7nTNQbh1YlS"
          },
          "_type": 1,
          "_sizeMode": 0
        },
        {
          "__type__": "cc.Widget",
          "node": {
            "__id__": 5
          },
          "alignMode": 0,
          "_alignFlags": 45,
          "_originalWidth": 100,
          "_originalHeight": 40
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "b4sVMzA75O15Ov5g9Dv+jV"
        },
        "fileId": "67W6AK4V1PRoHla4vyK+nw"
      },
      "_color": {
        "__type__": "cc.Color",
        "r": 230,
        "g": 230,
        "b": 230
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 233,
        "height": 95
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      },
      "_groupIndex": 1,
      "groupIndex": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "Label",
      "_parent": {
        "__id__": 5
      },
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 6
          },
          "_useOriginalSize": false,
          "_string": "下一关",
          "_N$string": "下一关",
          "_enableWrapText": false,
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1,
          "_N$overflow": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "b4sVMzA75O15Ov5g9Dv+jV"
        },
        "fileId": "b2IL6G77dLK7yJMl7qQEH1"
      },
      "_color": {
        "__type__": "cc.Color"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 169,
        "height": 72
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          -3,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      },
      "_groupIndex": 1,
      "groupIndex": 1
    },
    {
      "__type__": "cc.Button",
      "node": {
        "__id__": 4
      },
      "_N$transition": 2,
      "transition": 2,
      "_N$normalColor": {
        "__type__": "cc.Color",
        "r": 230,
        "g": 230,
        "b": 230
      },
      "_N$pressedColor": {
        "__type__": "cc.Color",
        "r": 200,
        "g": 200,
        "b": 200
      },
      "pressedColor": {
        "__type__": "cc.Color",
        "r": 200,
        "g": 200,
        "b": 200
      },
      "_N$disabledColor": {
        "__type__": "cc.Color",
        "r": 120,
        "g": 120,
        "b": 120,
        "a": 200
      },
      "_N$normalSprite": {
        "__uuid__": "f0BIwQ8D5Ml7nTNQbh1YlS"
      },
      "_N$pressedSprite": {
        "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
      },
      "pressedSprite": {
        "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
      },
      "_N$hoverSprite": {
        "__uuid__": "f0BIwQ8D5Ml7nTNQbh1YlS"
      },
      "hoverSprite": {
        "__uuid__": "f0BIwQ8D5Ml7nTNQbh1YlS"
      },
      "_N$disabledSprite": {
        "__uuid__": "29FYIk+N1GYaeWH/q1NxQO"
      },
      "_N$target": {
        "__id__": 5
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "exitBtn",
      "_parent": {
        "__id__": 1
      },
      "_children": [
        {
          "__id__": 9
        }
      ],
      "_components": [
        {
          "__id__": 11
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "b4sVMzA75O15Ov5g9Dv+jV"
        },
        "fileId": "34luD99/5JrrNDc2sWJDUU"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 233,
        "height": 95
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          7,
          -257,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      },
      "_groupIndex": 1,
      "groupIndex": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "Background",
      "_parent": {
        "__id__": 8
      },
      "_children": [
        {
          "__id__": 10
        }
      ],
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 9
          },
          "_spriteFrame": {
            "__uuid__": "f0BIwQ8D5Ml7nTNQbh1YlS"
          },
          "_type": 1,
          "_sizeMode": 0
        },
        {
          "__type__": "cc.Widget",
          "node": {
            "__id__": 9
          },
          "alignMode": 0,
          "_alignFlags": 45,
          "_originalWidth": 100,
          "_originalHeight": 40
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "b4sVMzA75O15Ov5g9Dv+jV"
        },
        "fileId": "d2fEvFnDlAC7JvG0pyu9Ey"
      },
      "_color": {
        "__type__": "cc.Color",
        "r": 230,
        "g": 230,
        "b": 230
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 233,
        "height": 95
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      },
      "_groupIndex": 1,
      "groupIndex": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "Label",
      "_parent": {
        "__id__": 9
      },
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 10
          },
          "_useOriginalSize": false,
          "_string": "返回",
          "_N$string": "返回",
          "_enableWrapText": false,
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1,
          "_N$overflow": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "b4sVMzA75O15Ov5g9Dv+jV"
        },
        "fileId": "5174/mYhFAz6U66ISAj046"
      },
      "_color": {
        "__type__": "cc.Color"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 169,
        "height": 72
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          -3,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      },
      "_groupIndex": 1,
      "groupIndex": 1
    },
    {
      "__type__": "cc.Button",
      "node": {
        "__id__": 8
      },
      "_N$transition": 2,
      "transition": 2,
      "_N$normalColor": {
        "__type__": "cc.Color",
        "r": 230,
        "g": 230,
        "b": 230
      },
      "_N$pressedColor": {
        "__type__": "cc.Color",
        "r": 200,
        "g": 200,
        "b": 200
      },
      "pressedColor": {
        "__type__": "cc.Color",
        "r": 200,
        "g": 200,
        "b": 200
      },
      "_N$disabledColor": {
        "__type__": "cc.Color",
        "r": 120,
        "g": 120,
        "b": 120,
        "a": 200
      },
      "_N$normalSprite": {
        "__uuid__": "f0BIwQ8D5Ml7nTNQbh1YlS"
      },
      "_N$pressedSprite": {
        "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
      },
      "pressedSprite": {
        "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
      },
      "_N$hoverSprite": {
        "__uuid__": "f0BIwQ8D5Ml7nTNQbh1YlS"
      },
      "hoverSprite": {
        "__uuid__": "f0BIwQ8D5Ml7nTNQbh1YlS"
      },
      "_N$disabledSprite": {
        "__uuid__": "29FYIk+N1GYaeWH/q1NxQO"
      },
      "_N$target": {
        "__id__": 9
      }
    }
  ],
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  [
    {
      "__type__": "cc.Prefab",
      "_name": "TargetLadder",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "TargetLadder",
      "_children": [
        {
          "__id__": 2
        }
      ],
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 1
          },
          "_spriteFrame": {
            "__uuid__": "a2MjXRFdtLlYQ5ouAFv/+R"
          },
          "_sizeMode": 0
        },
        {
          "__type__": "cc.BoxCollider",
          "node": {
            "__id__": 1
          },
          "_size": {
            "__type__": "cc.Size",
            "width": 200,
            "height": 100
          }
        },
        null
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "b9++7vKPFPmKrMq2xu8tIj"
        },
        "fileId": "838unSlf5AhYOm/Bn0Uavx"
      },
      "_color": {
        "__type__": "cc.Color",
        "r": 15,
        "g": 199,
        "b": 243
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 200,
        "height": 100
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          288,
          1660,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "taidigirl",
      "_parent": {
        "__id__": 1
      },
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 2
          },
          "_sizeMode": 0
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "b9++7vKPFPmKrMq2xu8tIj"
        },
        "fileId": "83dynG8+FM+IHck+D3HoZe"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 50,
        "height": 100
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          99,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    }
  ],
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_7",
      "texture": "5e1TM0Jf9JGZB97mygPCnZ",
      "rect": [
        19,
        9,
        35,
        112
      ],
      "offset": [
        0,
        -3
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_18",
      "texture": "d0UdO7nppF75w3ItB2Dfsy",
      "rect": [
        5,
        24,
        64,
        88
      ],
      "offset": [
        0.5,
        -6
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "46",
      "texture": "64+Y5kS95AgoEw/M6HKyYs",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.EffectAsset",
    "_name": "builtin-clear-stencil",
    "techniques": [
      {
        "passes": [
          {
            "blendState": {
              "targets": [
                {
                  "blend": true
                }
              ]
            },
            "rasterizerState": {
              "cullMode": 0
            },
            "program": "builtin-clear-stencil|vs|fs"
          }
        ]
      }
    ],
    "shaders": [
      {
        "hash": 2075641479,
        "glsl3": {
          "vert": "\nprecision highp float;\nin vec3 a_position;\nvoid main () {\n  gl_Position = vec4(a_position, 1);\n}",
          "frag": "\nprecision highp float;\nvoid main () {\n  gl_FragColor = vec4(1.0);\n}"
        },
        "glsl1": {
          "vert": "\nprecision highp float;\nattribute vec3 a_position;\nvoid main () {\n  gl_Position = vec4(a_position, 1);\n}",
          "frag": "\nprecision highp float;\nvoid main () {\n  gl_FragColor = vec4(1.0);\n}"
        },
        "builtins": {
          "globals": {
            "blocks": [],
            "samplers": []
          },
          "locals": {
            "blocks": [],
            "samplers": []
          }
        },
        "defines": [],
        "blocks": [],
        "samplers": [],
        "record": null,
        "name": "builtin-clear-stencil|vs|fs"
      }
    ]
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "49",
      "texture": "c6jEmJdr9PCqegfsC5Qz80",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  [
    {
      "__type__": "cc.Prefab",
      "_name": "Item_rocket",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "Item_rocket",
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 1
          },
          "_spriteFrame": {
            "__uuid__": "11tGgXyv9KFqqdeipLg0JM"
          }
        },
        {
          "__type__": "80113nWi9FNLaCAbUWEg+lL",
          "node": {
            "__id__": 1
          },
          "type": 2
        },
        {
          "__type__": "cc.BoxCollider",
          "node": {
            "__id__": 1
          },
          "tag": 8,
          "_size": {
            "__type__": "cc.Size",
            "width": 116,
            "height": 115
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "c6mlI7qG1K4YoA+IQTYuWI"
        },
        "fileId": "e15eecgkhP3YBOB7iSKjJD"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 116,
        "height": 115
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          -142,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    }
  ],
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "9",
      "texture": "5azXMIsepENqC+VPtaXNLT",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  [
    {
      "__type__": "cc.Prefab",
      "_name": "zangai_2",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "zangai_2",
      "_children": [
        {
          "__id__": 2
        }
      ],
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 1
          },
          "_spriteFrame": {
            "__uuid__": "efYoLnqzJMVoupZIPXBW+W"
          }
        },
        {
          "__type__": "cc.RigidBody",
          "node": {
            "__id__": 1
          },
          "_type": 1
        },
        {
          "__type__": "cc.PhysicsPolygonCollider",
          "node": {
            "__id__": 1
          },
          "points": [
            {
              "__type__": "cc.Vec2",
              "x": -133,
              "y": -139
            },
            {
              "__type__": "cc.Vec2",
              "x": -92,
              "y": -245
            },
            {
              "__type__": "cc.Vec2",
              "x": -27,
              "y": -316
            },
            {
              "__type__": "cc.Vec2",
              "x": 45,
              "y": -317
            },
            {
              "__type__": "cc.Vec2",
              "x": 102,
              "y": -232
            },
            {
              "__type__": "cc.Vec2",
              "x": 145.1,
              "y": -62.2
            },
            {
              "__type__": "cc.Vec2",
              "x": 125.2,
              "y": 25.8
            },
            {
              "__type__": "cc.Vec2",
              "x": 68.4,
              "y": 84.4
            },
            {
              "__type__": "cc.Vec2",
              "x": -4,
              "y": 134.5
            },
            {
              "__type__": "cc.Vec2",
              "x": -96,
              "y": 159
            },
            {
              "__type__": "cc.Vec2",
              "x": -129,
              "y": 117
            }
          ]
        },
        {
          "__type__": "e4c4cYS2FtI6p+AI35rs0jE",
          "node": {
            "__id__": 1
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "c9eKloCnhHv5W5lBO6gvji"
        },
        "fileId": "09WvR3D3xOu7YqvehyQHIo"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 296,
        "height": 640
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          528,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "New Node",
      "_parent": {
        "__id__": 1
      },
      "_components": [
        {
          "__type__": "cc.PolygonCollider",
          "node": {
            "__id__": 2
          },
          "tag": 2,
          "points": [
            {
              "__type__": "cc.Vec2",
              "x": -130,
              "y": -110
            },
            {
              "__type__": "cc.Vec2",
              "x": -104,
              "y": -228
            },
            {
              "__type__": "cc.Vec2",
              "x": -31,
              "y": -315
            },
            {
              "__type__": "cc.Vec2",
              "x": 44,
              "y": -318
            },
            {
              "__type__": "cc.Vec2",
              "x": 123,
              "y": -173
            },
            {
              "__type__": "cc.Vec2",
              "x": 143.7,
              "y": -46.5
            },
            {
              "__type__": "cc.Vec2",
              "x": 116,
              "y": 39
            },
            {
              "__type__": "cc.Vec2",
              "x": 57.2,
              "y": 94.1
            },
            {
              "__type__": "cc.Vec2",
              "x": -6,
              "y": 131.8
            },
            {
              "__type__": "cc.Vec2",
              "x": -93.1,
              "y": 159
            },
            {
              "__type__": "cc.Vec2",
              "x": -127,
              "y": 123
            },
            {
              "__type__": "cc.Vec2",
              "x": -134,
              "y": 43
            }
          ]
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "c9eKloCnhHv5W5lBO6gvji"
        },
        "fileId": "57khXSmbFBdZq5xr9T5nFh"
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    }
  ],
  {
    "__type__": "cc.AnimationClip",
    "_name": "splash2",
    "_duration": 1.3833333333333333,
    "curveData": {
      "props": {
        "opacity": [
          {
            "frame": 0,
            "value": 0
          },
          {
            "frame": 0.3,
            "value": 255
          },
          {
            "frame": 1.05,
            "value": 255
          },
          {
            "frame": 1.3833333333333333,
            "value": 0
          }
        ]
      }
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "42",
      "texture": "4dIRde2HVB7rDswA5JzTTT",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.JsonAsset",
    "_name": "KnifeTable",
    "json": [
      {
        "id": 1,
        "explain": 0,
        "stars": 0,
        "num1": 0,
        "straking": 0,
        "logindays": 0,
        "knives": 0,
        "timelimitnum1": 0,
        "kills": 0,
        "games": 0,
        "kills4": 0,
        "kills5": 0,
        "kills6": 0
      },
      {
        "id": 2,
        "explain": "累计获得3次第一名解锁",
        "stars": 50,
        "num1": 3,
        "straking": 0,
        "logindays": 0,
        "knives": 0,
        "timelimitnum1": 0,
        "kills": 0,
        "games": 0,
        "kills4": 0,
        "kills5": 0,
        "kills6": 0
      },
      {
        "id": 3,
        "explain": "完成一次四杀解锁",
        "stars": 150,
        "num1": 0,
        "straking": 0,
        "logindays": 0,
        "knives": 0,
        "timelimitnum1": 0,
        "kills": 0,
        "games": 0,
        "kills4": 1,
        "kills5": 0,
        "kills6": 0
      },
      {
        "id": 4,
        "explain": "连赢3局解锁",
        "stars": 200,
        "num1": 0,
        "straking": 3,
        "logindays": 0,
        "knives": 0,
        "timelimitnum1": 0,
        "kills": 0,
        "games": 0,
        "kills4": 0,
        "kills5": 0,
        "kills6": 0
      },
      {
        "id": 5,
        "explain": "累计2天登陆游戏解锁",
        "stars": 250,
        "num1": 0,
        "straking": 0,
        "logindays": 2,
        "knives": 0,
        "timelimitnum1": 0,
        "kills": 0,
        "games": 0,
        "kills4": 0,
        "kills5": 0,
        "kills6": 0
      },
      {
        "id": 6,
        "explain": "1局中获得40把刀解锁",
        "stars": 300,
        "num1": 0,
        "straking": 0,
        "logindays": 0,
        "knives": 40,
        "timelimitnum1": 0,
        "kills": 0,
        "games": 0,
        "kills4": 0,
        "kills5": 0,
        "kills6": 0
      },
      {
        "id": 7,
        "explain": "在80秒内获得第一名解锁",
        "stars": 350,
        "num1": 0,
        "straking": 0,
        "logindays": 0,
        "knives": 0,
        "timelimitnum1": 80,
        "kills": 0,
        "games": 0,
        "kills4": 0,
        "kills5": 0,
        "kills6": 0
      },
      {
        "id": 8,
        "explain": "累计击杀50个敌人解锁",
        "stars": 400,
        "num1": 0,
        "straking": 0,
        "logindays": 0,
        "knives": 0,
        "timelimitnum1": 0,
        "kills": 50,
        "games": 0,
        "kills4": 0,
        "kills5": 0,
        "kills6": 0
      },
      {
        "id": 9,
        "explain": "累计玩30局游戏解锁",
        "stars": 450,
        "num1": 0,
        "straking": 0,
        "logindays": 0,
        "knives": 0,
        "timelimitnum1": 0,
        "kills": 0,
        "games": 30,
        "kills4": 0,
        "kills5": 0,
        "kills6": 0
      },
      {
        "id": 10,
        "explain": "累计获得20次第一名解锁",
        "stars": 500,
        "num1": 20,
        "straking": 0,
        "logindays": 0,
        "knives": 0,
        "timelimitnum1": 0,
        "kills": 0,
        "games": 0,
        "kills4": 0,
        "kills5": 0,
        "kills6": 0
      },
      {
        "id": 11,
        "explain": "完成2次五杀解锁",
        "stars": 600,
        "num1": 0,
        "straking": 0,
        "logindays": 0,
        "knives": 0,
        "timelimitnum1": 0,
        "kills": 0,
        "games": 0,
        "kills4": 0,
        "kills5": 2,
        "kills6": 0
      },
      {
        "id": 12,
        "explain": "连赢6局解锁",
        "stars": 650,
        "num1": 0,
        "straking": 6,
        "logindays": 0,
        "knives": 0,
        "timelimitnum1": 0,
        "kills": 0,
        "games": 0,
        "kills4": 0,
        "kills5": 0,
        "kills6": 0
      },
      {
        "id": 13,
        "explain": "累计5天登陆游戏解锁",
        "stars": 700,
        "num1": 0,
        "straking": 0,
        "logindays": 5,
        "knives": 0,
        "timelimitnum1": 0,
        "kills": 0,
        "games": 0,
        "kills4": 0,
        "kills5": 0,
        "kills6": 0
      },
      {
        "id": 14,
        "explain": "在1局中获得60把刀解锁",
        "stars": 750,
        "num1": 0,
        "straking": 0,
        "logindays": 0,
        "knives": 60,
        "timelimitnum1": 0,
        "kills": 0,
        "games": 0,
        "kills4": 0,
        "kills5": 0,
        "kills6": 0
      },
      {
        "id": 15,
        "explain": "在50秒内获得第一名解锁",
        "stars": 800,
        "num1": 0,
        "straking": 0,
        "logindays": 0,
        "knives": 0,
        "timelimitnum1": 50,
        "kills": 0,
        "games": 0,
        "kills4": 0,
        "kills5": 0,
        "kills6": 0
      },
      {
        "id": 16,
        "explain": "累计杀死200个敌人解锁",
        "stars": 900,
        "num1": 0,
        "straking": 0,
        "logindays": 0,
        "knives": 0,
        "timelimitnum1": 0,
        "kills": 200,
        "games": 0,
        "kills4": 0,
        "kills5": 0,
        "kills6": 0
      },
      {
        "id": 17,
        "explain": "累计玩100局游戏解锁",
        "stars": 950,
        "num1": 0,
        "straking": 0,
        "logindays": 0,
        "knives": 0,
        "timelimitnum1": 0,
        "kills": 0,
        "games": 100,
        "kills4": 0,
        "kills5": 0,
        "kills6": 0
      },
      {
        "id": 18,
        "explain": "累计获得60次第一名解锁",
        "stars": 1000,
        "num1": 60,
        "straking": 0,
        "logindays": 0,
        "knives": 0,
        "timelimitnum1": 0,
        "kills": 0,
        "games": 0,
        "kills4": 0,
        "kills5": 0,
        "kills6": 0
      },
      {
        "id": 19,
        "explain": "完成5次五杀解锁",
        "stars": 1200,
        "num1": 0,
        "straking": 0,
        "logindays": 0,
        "knives": 0,
        "timelimitnum1": 0,
        "kills": 0,
        "games": 0,
        "kills4": 0,
        "kills5": 5,
        "kills6": 0
      },
      {
        "id": 20,
        "explain": "连赢10局解锁",
        "stars": 1400,
        "num1": 0,
        "straking": 10,
        "logindays": 0,
        "knives": 0,
        "timelimitnum1": 0,
        "kills": 0,
        "games": 0,
        "kills4": 0,
        "kills5": 0,
        "kills6": 0
      },
      {
        "id": 21,
        "explain": "累计7天登陆游戏解锁",
        "stars": 3500,
        "num1": 0,
        "straking": 0,
        "logindays": 7,
        "knives": 0,
        "timelimitnum1": 0,
        "kills": 0,
        "games": 0,
        "kills4": 0,
        "kills5": 0,
        "kills6": 0
      },
      {
        "id": 22,
        "explain": "在1局中获得80把飞刀解锁",
        "stars": 1600,
        "num1": 0,
        "straking": 0,
        "logindays": 0,
        "knives": 80,
        "timelimitnum1": 0,
        "kills": 0,
        "games": 0,
        "kills4": 0,
        "kills5": 0,
        "kills6": 0
      },
      {
        "id": 23,
        "explain": "累计获得100次第一名解锁",
        "stars": 1800,
        "num1": 100,
        "straking": 0,
        "logindays": 0,
        "knives": 0,
        "timelimitnum1": 0,
        "kills": 0,
        "games": 0,
        "kills4": 0,
        "kills5": 0,
        "kills6": 0
      },
      {
        "id": 24,
        "explain": "完成12次六杀解锁",
        "stars": 2000,
        "num1": 0,
        "straking": 0,
        "logindays": 0,
        "knives": 0,
        "timelimitnum1": 0,
        "kills": 0,
        "games": 0,
        "kills4": 0,
        "kills5": 0,
        "kills6": 12
      },
      {
        "id": 25,
        "explain": "连赢20局解锁",
        "stars": 2500,
        "num1": 0,
        "straking": 20,
        "logindays": 0,
        "knives": 0,
        "timelimitnum1": 0,
        "kills": 0,
        "games": 0,
        "kills4": 0,
        "kills5": 0,
        "kills6": 0
      }
    ]
  },
  [
    {
      "__type__": "cc.Prefab",
      "_name": "FailPanel",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "FailPanel",
      "_children": [
        {
          "__id__": 2
        },
        {
          "__type__": "cc.Node",
          "_name": "Win",
          "_parent": {
            "__id__": 1
          },
          "_prefab": {
            "__type__": "cc.PrefabInfo",
            "root": {
              "__id__": 1
            },
            "asset": {
              "__uuid__": "cc7yvgD+xIfLOpnpBxA7no"
            },
            "fileId": "269Hjfz5FNJ68Ugt3PZYLc"
          },
          "_trs": {
            "__type__": "TypedArray",
            "ctor": "Float64Array",
            "array": [
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              1,
              1,
              1
            ]
          },
          "_groupIndex": 1,
          "groupIndex": 1
        },
        {
          "__id__": 3
        },
        {
          "__id__": 4
        },
        {
          "__id__": 8
        }
      ],
      "_components": [
        {
          "__type__": "7504bk1adBA66vY+CrfbIPm",
          "node": {
            "__id__": 1
          },
          "replayBtn": {
            "__id__": 7
          },
          "exitBtn": {
            "__id__": 11
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "cc7yvgD+xIfLOpnpBxA7no"
        },
        "fileId": "f50jbAxhtNTrW7wqW1BfZG"
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      },
      "_groupIndex": 1,
      "groupIndex": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "BG",
      "_parent": {
        "__id__": 1
      },
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 2
          },
          "_spriteFrame": {
            "__uuid__": "a2MjXRFdtLlYQ5ouAFv/+R"
          },
          "_sizeMode": 0
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "cc7yvgD+xIfLOpnpBxA7no"
        },
        "fileId": "56nlizMIZDQb/g2MUJxJze"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 500,
        "height": 800
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      },
      "_groupIndex": 1,
      "groupIndex": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "MsgTxt",
      "_parent": {
        "__id__": 1
      },
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 3
          },
          "_useOriginalSize": false,
          "_string": "游戏失败",
          "_N$string": "游戏失败",
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1,
          "_N$overflow": 2
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "cc7yvgD+xIfLOpnpBxA7no"
        },
        "fileId": "6fvXM2exNAbYs+1b2GF+4D"
      },
      "_color": {
        "__type__": "cc.Color",
        "r": 6,
        "g": 6,
        "b": 6
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 383,
        "height": 292
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          16,
          150,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      },
      "_groupIndex": 1,
      "groupIndex": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "replayBtn",
      "_parent": {
        "__id__": 1
      },
      "_children": [
        {
          "__id__": 5
        }
      ],
      "_components": [
        {
          "__id__": 7
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "cc7yvgD+xIfLOpnpBxA7no"
        },
        "fileId": "ccwVNTYtJJCpFJZ0CJ0+82"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 233,
        "height": 95
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          7,
          -110,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      },
      "_groupIndex": 1,
      "groupIndex": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "Background",
      "_parent": {
        "__id__": 4
      },
      "_children": [
        {
          "__id__": 6
        }
      ],
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 5
          },
          "_spriteFrame": {
            "__uuid__": "f0BIwQ8D5Ml7nTNQbh1YlS"
          },
          "_type": 1,
          "_sizeMode": 0
        },
        {
          "__type__": "cc.Widget",
          "node": {
            "__id__": 5
          },
          "alignMode": 0,
          "_alignFlags": 45,
          "_originalWidth": 100,
          "_originalHeight": 40
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "cc7yvgD+xIfLOpnpBxA7no"
        },
        "fileId": "73xFicdYtD9qJxrACGK6Ov"
      },
      "_color": {
        "__type__": "cc.Color",
        "r": 230,
        "g": 230,
        "b": 230
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 233,
        "height": 95
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      },
      "_groupIndex": 1,
      "groupIndex": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "Label",
      "_parent": {
        "__id__": 5
      },
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 6
          },
          "_useOriginalSize": false,
          "_string": "重玩",
          "_N$string": "重玩",
          "_enableWrapText": false,
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1,
          "_N$overflow": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "cc7yvgD+xIfLOpnpBxA7no"
        },
        "fileId": "ba3i9TA99JVYu6+0SoS6/V"
      },
      "_color": {
        "__type__": "cc.Color"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 169,
        "height": 72
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          -3,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      },
      "_groupIndex": 1,
      "groupIndex": 1
    },
    {
      "__type__": "cc.Button",
      "node": {
        "__id__": 4
      },
      "_N$transition": 2,
      "transition": 2,
      "_N$normalColor": {
        "__type__": "cc.Color",
        "r": 230,
        "g": 230,
        "b": 230
      },
      "_N$pressedColor": {
        "__type__": "cc.Color",
        "r": 200,
        "g": 200,
        "b": 200
      },
      "pressedColor": {
        "__type__": "cc.Color",
        "r": 200,
        "g": 200,
        "b": 200
      },
      "_N$disabledColor": {
        "__type__": "cc.Color",
        "r": 120,
        "g": 120,
        "b": 120,
        "a": 200
      },
      "_N$normalSprite": {
        "__uuid__": "f0BIwQ8D5Ml7nTNQbh1YlS"
      },
      "_N$pressedSprite": {
        "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
      },
      "pressedSprite": {
        "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
      },
      "_N$hoverSprite": {
        "__uuid__": "f0BIwQ8D5Ml7nTNQbh1YlS"
      },
      "hoverSprite": {
        "__uuid__": "f0BIwQ8D5Ml7nTNQbh1YlS"
      },
      "_N$disabledSprite": {
        "__uuid__": "29FYIk+N1GYaeWH/q1NxQO"
      },
      "_N$target": {
        "__id__": 5
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "exitBtn",
      "_parent": {
        "__id__": 1
      },
      "_children": [
        {
          "__id__": 9
        }
      ],
      "_components": [
        {
          "__id__": 11
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "cc7yvgD+xIfLOpnpBxA7no"
        },
        "fileId": "54gzaBXuBKhbJbKiTz3+Ra"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 233,
        "height": 95
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          7,
          -263,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      },
      "_groupIndex": 1,
      "groupIndex": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "Background",
      "_parent": {
        "__id__": 8
      },
      "_children": [
        {
          "__id__": 10
        }
      ],
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 9
          },
          "_spriteFrame": {
            "__uuid__": "f0BIwQ8D5Ml7nTNQbh1YlS"
          },
          "_type": 1,
          "_sizeMode": 0
        },
        {
          "__type__": "cc.Widget",
          "node": {
            "__id__": 9
          },
          "alignMode": 0,
          "_alignFlags": 45,
          "_originalWidth": 100,
          "_originalHeight": 40
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "cc7yvgD+xIfLOpnpBxA7no"
        },
        "fileId": "03qkiFjCpOErDC5CIacV2v"
      },
      "_color": {
        "__type__": "cc.Color",
        "r": 230,
        "g": 230,
        "b": 230
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 233,
        "height": 95
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      },
      "_groupIndex": 1,
      "groupIndex": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "Label",
      "_parent": {
        "__id__": 9
      },
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 10
          },
          "_useOriginalSize": false,
          "_string": "退出",
          "_N$string": "退出",
          "_enableWrapText": false,
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1,
          "_N$overflow": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "cc7yvgD+xIfLOpnpBxA7no"
        },
        "fileId": "b0yLJLbhFBipda3QipUb9/"
      },
      "_color": {
        "__type__": "cc.Color"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 169,
        "height": 72
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          -3,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      },
      "_groupIndex": 1,
      "groupIndex": 1
    },
    {
      "__type__": "cc.Button",
      "node": {
        "__id__": 8
      },
      "_N$transition": 2,
      "transition": 2,
      "_N$normalColor": {
        "__type__": "cc.Color",
        "r": 230,
        "g": 230,
        "b": 230
      },
      "_N$pressedColor": {
        "__type__": "cc.Color",
        "r": 200,
        "g": 200,
        "b": 200
      },
      "pressedColor": {
        "__type__": "cc.Color",
        "r": 200,
        "g": 200,
        "b": 200
      },
      "_N$disabledColor": {
        "__type__": "cc.Color",
        "r": 120,
        "g": 120,
        "b": 120,
        "a": 200
      },
      "_N$normalSprite": {
        "__uuid__": "f0BIwQ8D5Ml7nTNQbh1YlS"
      },
      "_N$pressedSprite": {
        "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
      },
      "pressedSprite": {
        "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
      },
      "_N$hoverSprite": {
        "__uuid__": "f0BIwQ8D5Ml7nTNQbh1YlS"
      },
      "hoverSprite": {
        "__uuid__": "f0BIwQ8D5Ml7nTNQbh1YlS"
      },
      "_N$disabledSprite": {
        "__uuid__": "29FYIk+N1GYaeWH/q1NxQO"
      },
      "_N$target": {
        "__id__": 9
      }
    }
  ],
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "22",
      "texture": "d5NlUmkAJMFqSPFrAzAfmE",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "37",
      "texture": "2d/SnnReBOk7TCs04yQV7J",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Material",
    "_name": "builtin-clear-stencil",
    "_effectAsset": {
      "__uuid__": "c0BAyVxX9JzZy8EjFrc9DU"
    },
    "_techniqueData": {}
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "xingqiu-2",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        105,
        118,
        115,
        115
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        115,
        115
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "xingqiu-8",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        456,
        118,
        115,
        115
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        115,
        115
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "duanwei-jieji-2",
      "texture": "e0NVMTx/9C/a9XuakofdS6",
      "rect": [
        0,
        0,
        88,
        22
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        88,
        22
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_5",
      "texture": "75WNvFjf1IpL0wyHhHN+Vi",
      "rect": [
        19,
        2,
        36,
        121
      ],
      "offset": [
        0.5,
        -0.5
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_8",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        48,
        1,
        45,
        118
      ],
      "offset": [
        0,
        -2
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_23",
      "texture": "f6lp2DWTdK7KdCK8EQF2an",
      "rect": [
        26,
        9,
        22,
        107
      ],
      "offset": [
        0.5,
        -0.5
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "30",
      "texture": "e9axE1HCRLKrLqK3rgcvpv",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "duanwei_6",
      "texture": "18gf+LZIlNcZ4mSgB/Ftlk",
      "rect": [
        0,
        0,
        183,
        165
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        183,
        165
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_11",
      "texture": "6dkcQHXA9CIqL6SuKmPbkY",
      "rect": [
        17,
        9,
        40,
        100
      ],
      "offset": [
        0.5,
        3
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  [
    {
      "__type__": "cc.Prefab",
      "_name": "RankItem",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "RankItem",
      "_children": [
        {
          "__id__": 2
        },
        {
          "__id__": 4
        },
        {
          "__id__": 6
        }
      ],
      "_components": [
        {
          "__type__": "2e241NFGeFI0aRL3ryh8mzv",
          "node": {
            "__id__": 1
          },
          "mark": {
            "__id__": 3
          },
          "nameTxt": {
            "__id__": 5
          },
          "rankTxt": {
            "__id__": 7
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "dfQ1mIoUpDk5WpGC0qUJt7"
        },
        "fileId": "58V2ntig5Czbiwbh6yqDw6"
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          -80,
          70,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "xingqiu-3",
      "_parent": {
        "__id__": 1
      },
      "_components": [
        {
          "__id__": 3
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "dfQ1mIoUpDk5WpGC0qUJt7"
        },
        "fileId": "3akxPEnLZD8oHW+3VyxEBa"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 22,
        "height": 22
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Sprite",
      "node": {
        "__id__": 2
      },
      "_spriteFrame": {
        "__uuid__": "4fhxmZgXlPzrf0A2sW03n6"
      },
      "_sizeMode": 0
    },
    {
      "__type__": "cc.Node",
      "_name": "NameTxt",
      "_parent": {
        "__id__": 1
      },
      "_components": [
        {
          "__id__": 5
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "dfQ1mIoUpDk5WpGC0qUJt7"
        },
        "fileId": "9bdDIxp3lMiKoLRXe2/jzE"
      },
      "_color": {
        "__type__": "cc.Color",
        "r": 185,
        "g": 187,
        "b": 172
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 100,
        "height": 40
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          70,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Label",
      "node": {
        "__id__": 4
      },
      "_useOriginalSize": false,
      "_string": "玩家",
      "_N$string": "玩家",
      "_fontSize": 24,
      "_N$verticalAlign": 1,
      "_N$overflow": 2
    },
    {
      "__type__": "cc.Node",
      "_name": "RankTxt",
      "_parent": {
        "__id__": 1
      },
      "_components": [
        {
          "__id__": 7
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "dfQ1mIoUpDk5WpGC0qUJt7"
        },
        "fileId": "d0fLEu3qtBlqVaTfOtFugT"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 100,
        "height": 40
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          156.9,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Label",
      "node": {
        "__id__": 6
      },
      "_useOriginalSize": false,
      "_string": "1",
      "_N$string": "1",
      "_fontSize": 24,
      "_N$horizontalAlign": 1,
      "_N$verticalAlign": 1,
      "_N$overflow": 2
    }
  ],
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_14",
      "texture": "5frsybfgZCE6dYTjwBYdKr",
      "rect": [
        18,
        18,
        37,
        104
      ],
      "offset": [
        0,
        -8
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_14",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        698,
        111,
        39,
        106
      ],
      "offset": [
        0,
        -8
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_11",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        757,
        1,
        43,
        102
      ],
      "offset": [
        0,
        3
      ],
      "originalSize": [
        73,
        124
      ],
      "rotated": 1,
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_16",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        759,
        219,
        33,
        100
      ],
      "offset": [
        1,
        3
      ],
      "originalSize": [
        73,
        124
      ],
      "rotated": 1,
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  [
    {
      "__type__": "cc.Prefab",
      "_name": "zangai_3",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "zangai_3",
      "_children": [
        {
          "__id__": 2
        }
      ],
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 1
          },
          "_spriteFrame": {
            "__uuid__": "b0OabAkVZMYJ/4owEbjIAI"
          }
        },
        {
          "__type__": "cc.RigidBody",
          "node": {
            "__id__": 1
          },
          "_type": 0
        },
        {
          "__type__": "cc.PhysicsPolygonCollider",
          "node": {
            "__id__": 1
          },
          "points": [
            {
              "__type__": "cc.Vec2",
              "x": -64,
              "y": -255
            },
            {
              "__type__": "cc.Vec2",
              "x": -40,
              "y": -282
            },
            {
              "__type__": "cc.Vec2",
              "x": 36,
              "y": -281
            },
            {
              "__type__": "cc.Vec2",
              "x": 107,
              "y": -259
            },
            {
              "__type__": "cc.Vec2",
              "x": 155,
              "y": -106
            },
            {
              "__type__": "cc.Vec2",
              "x": 147.6,
              "y": 53
            },
            {
              "__type__": "cc.Vec2",
              "x": 121,
              "y": 206
            },
            {
              "__type__": "cc.Vec2",
              "x": -4.2,
              "y": 284.1
            },
            {
              "__type__": "cc.Vec2",
              "x": -74,
              "y": 284
            },
            {
              "__type__": "cc.Vec2",
              "x": -140,
              "y": 167
            },
            {
              "__type__": "cc.Vec2",
              "x": -146,
              "y": 84
            },
            {
              "__type__": "cc.Vec2",
              "x": -156,
              "y": -5
            },
            {
              "__type__": "cc.Vec2",
              "x": -140,
              "y": -102
            }
          ]
        },
        {
          "__type__": "e4c4cYS2FtI6p+AI35rs0jE",
          "node": {
            "__id__": 1
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "e36UD30aRHOZ1Nwm9E+2Iy"
        },
        "fileId": "a7NGX//VxLdpxRyWEuW9V1"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 324,
        "height": 569
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          -611,
          -334,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "New Node",
      "_parent": {
        "__id__": 1
      },
      "_components": [
        {
          "__type__": "cc.PolygonCollider",
          "node": {
            "__id__": 2
          },
          "tag": 2,
          "points": [
            {
              "__type__": "cc.Vec2",
              "x": -73,
              "y": -244
            },
            {
              "__type__": "cc.Vec2",
              "x": -43,
              "y": -280
            },
            {
              "__type__": "cc.Vec2",
              "x": 24,
              "y": -284
            },
            {
              "__type__": "cc.Vec2",
              "x": 82,
              "y": -271
            },
            {
              "__type__": "cc.Vec2",
              "x": 104,
              "y": -257
            },
            {
              "__type__": "cc.Vec2",
              "x": 151,
              "y": -140
            },
            {
              "__type__": "cc.Vec2",
              "x": 154,
              "y": -8
            },
            {
              "__type__": "cc.Vec2",
              "x": 132,
              "y": 167
            },
            {
              "__type__": "cc.Vec2",
              "x": 104,
              "y": 218
            },
            {
              "__type__": "cc.Vec2",
              "x": -4,
              "y": 283
            },
            {
              "__type__": "cc.Vec2",
              "x": -84,
              "y": 278
            },
            {
              "__type__": "cc.Vec2",
              "x": -143,
              "y": 156
            },
            {
              "__type__": "cc.Vec2",
              "x": -158,
              "y": 7
            },
            {
              "__type__": "cc.Vec2",
              "x": -134,
              "y": -105
            }
          ]
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "e36UD30aRHOZ1Nwm9E+2Iy"
        },
        "fileId": "7ctVjx5wNI1ozSB9hbbKGt"
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    }
  ],
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "8",
      "texture": "e1b1DIsBlAkb8Y0tVqZoAY",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "default_btn_pressed",
      "texture": "b4P/PCArtIdIH38t6mlw8Y",
      "rect": [
        0,
        0,
        40,
        40
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        40,
        40
      ],
      "capInsets": [
        12,
        12,
        12,
        12
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "5",
      "texture": "efVc4SqLxKLKFf3JnHJHjr",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  [
    {
      "__type__": "cc.Prefab",
      "_name": "LadderNormal",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "LadderNormal",
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 1
          },
          "_spriteFrame": {
            "__uuid__": "a2MjXRFdtLlYQ5ouAFv/+R"
          },
          "_sizeMode": 0
        },
        null,
        {
          "__type__": "cc.RigidBody",
          "node": {
            "__id__": 1
          },
          "_type": 0
        },
        {
          "__type__": "cc.PhysicsBoxCollider",
          "node": {
            "__id__": 1
          },
          "_size": {
            "__type__": "cc.Size",
            "width": 200,
            "height": 100
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__id__": 0
        },
        "fileId": "a0Y1wtk8NL9KT4KSwjbMoX"
      },
      "_color": {
        "__type__": "cc.Color",
        "r": 15,
        "g": 199,
        "b": 243
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 200,
        "height": 100
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float64Array",
        "array": [
          162,
          -157,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    }
  ],
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_20",
      "texture": "2afmLSjBxM/I9XirIsjJuM",
      "rect": [
        17,
        15,
        40,
        100
      ],
      "offset": [
        0.5,
        -3
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "45",
      "texture": "b0PrJEblxIC4VHuc18i86P",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Material",
    "_name": "builtin-2d-sprite",
    "_effectAsset": {
      "__uuid__": "28dPjdQWxEQIG3VVl1Qm6T"
    },
    "_techniqueData": {
      "0": {
        "defines": {
          "USE_TEXTURE": true
        }
      }
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "zangai_2",
      "texture": "a06HCHgotJVa2/6aGrkrpn",
      "rect": [
        0,
        0,
        296,
        640
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        296,
        640
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "default_btn_normal",
      "texture": "e8Ueib+qJEhL6mXAHdnwbi",
      "rect": [
        0,
        0,
        40,
        40
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        40,
        40
      ],
      "capInsets": [
        12,
        12,
        12,
        12
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "1",
      "texture": "6bnjKXD6RGq7Ixz+yZHrjY",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_16",
      "texture": "a4RUsG73ZDgoK56ZTZm73f",
      "rect": [
        23,
        11,
        30,
        97
      ],
      "offset": [
        1.5,
        2.5
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "50",
      "texture": "3fGEjGNS5MyJD/JOGEJo6Q",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "dao_7",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        608,
        1,
        37,
        114
      ],
      "offset": [
        0,
        -3
      ],
      "originalSize": [
        73,
        124
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "44",
      "texture": "6cuApDTnRODrnwfcFgZgwf",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "31",
      "texture": "bc7OPQvgNJ+LPNoPb5NEOk",
      "rect": [
        0,
        0,
        77,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        77,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "xingqiu-3",
      "texture": "2c6QhRJmlMxLzRzXfiLQXu",
      "rect": [
        212,
        1,
        115,
        115
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        115,
        115
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "zangai_1",
      "texture": "b6C395JOxBZ50jT7Nke6W3",
      "rect": [
        0,
        0,
        397,
        325
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        397,
        325
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  }
];
