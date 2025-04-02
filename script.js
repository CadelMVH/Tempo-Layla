TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "LivePanorama",
  "frameDisplayTime": 3000,
  "hfovMin": 60,
  "hfov": 360,
  "id": "panorama_E140AF6F_F7B1_EF08_41E8_EFB0BFC94EC7",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_E140AF6F_F7B1_EF08_41E8_EFB0BFC94EC7_1_t.jpg",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 751.92,
    "x": 2443.84,
    "angle": -27.22,
    "map": {
     "class": "Map",
     "fieldOfViewOverlayInsideOpacity": 0.26,
     "id": "map_EB178670_F773_7117_41ED_54ECCBB77C9B",
     "fieldOfViewOverlayInsideColor": "#0066CC",
     "initialZoomFactor": 1,
     "height": 918,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "minimumZoomFactor": 0.5,
     "width": 3200,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 459,
        "class": "ImageResourceLevel",
        "width": 1600,
        "url": "media/map_EB178670_F773_7117_41ED_54ECCBB77C9B.png"
       },
       {
        "height": 229,
        "class": "ImageResourceLevel",
        "width": 800,
        "url": "media/map_EB178670_F773_7117_41ED_54ECCBB77C9B_lq.png",
        "grayscale": true
       }
      ]
     },
     "thumbnailUrl": "media/map_EB178670_F773_7117_41ED_54ECCBB77C9B_t.png",
     "label": "Layla Floorplan",
     "maximumZoomFactor": 1.2,
     "overlays": [
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_EBF674FC_F773_1108_41E5_40686B140DF3",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 706.92,
        "height": 90,
        "x": 2398.84,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 22,
           "class": "ImageResourceLevel",
           "width": 22,
           "url": "media/map_EB178670_F773_7117_41ED_54ECCBB77C9B_HS_0_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 0)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 706.92,
        "x": 2398.84,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_EB178670_F773_7117_41ED_54ECCBB77C9B_HS_0.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_EBB0FD3E_F773_130B_41E2_D6767F3188C0",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 710.85,
        "height": 90,
        "x": 2668.36,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 22,
           "class": "ImageResourceLevel",
           "width": 22,
           "url": "media/map_EB178670_F773_7117_41ED_54ECCBB77C9B_HS_1_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 1)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 710.85,
        "x": 2668.36,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_EB178670_F773_7117_41ED_54ECCBB77C9B_HS_1.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_EB1BD3C7_F773_7778_41D9_27574C55D5DE",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 387.61,
        "height": 90,
        "x": 2273.11,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 22,
           "class": "ImageResourceLevel",
           "width": 22,
           "url": "media/map_EB178670_F773_7117_41ED_54ECCBB77C9B_HS_2_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 2)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 387.61,
        "x": 2273.11,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_EB178670_F773_7117_41ED_54ECCBB77C9B_HS_2.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_EB9E83B3_F773_1718_41E3_E3F85447B33F",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 232.71,
        "height": 90,
        "x": 1679.65,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 22,
           "class": "ImageResourceLevel",
           "width": 22,
           "url": "media/map_EB178670_F773_7117_41ED_54ECCBB77C9B_HS_3_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 3)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 232.71,
        "x": 1679.65,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_EB178670_F773_7117_41ED_54ECCBB77C9B_HS_3.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_EAE17391_F771_1719_41DB_EBDE071B6A68",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 214.88,
        "height": 90,
        "x": 1051.46,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 22,
           "class": "ImageResourceLevel",
           "width": 22,
           "url": "media/map_EB178670_F773_7117_41ED_54ECCBB77C9B_HS_4_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 4)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 214.88,
        "x": 1051.46,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_EB178670_F773_7117_41ED_54ECCBB77C9B_HS_4.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_EBB3DC04_F771_30F8_41EB_E6872BB900B0",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 202.14,
        "height": 90,
        "x": 787.26,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 22,
           "class": "ImageResourceLevel",
           "width": 22,
           "url": "media/map_EB178670_F773_7117_41ED_54ECCBB77C9B_HS_5_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 5)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 202.14,
        "x": 787.26,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_EB178670_F773_7117_41ED_54ECCBB77C9B_HS_5.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_EB5D5BB1_F771_7718_41BA_AAA11963AD36",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 742.34,
        "height": 90,
        "x": 769.44,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 22,
           "class": "ImageResourceLevel",
           "width": 22,
           "url": "media/map_EB178670_F773_7117_41ED_54ECCBB77C9B_HS_6_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 6)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 742.34,
        "x": 769.44,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_EB178670_F773_7117_41ED_54ECCBB77C9B_HS_6.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_EBF14530_F771_3318_41EA_0D7F6345776A",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 725.21,
        "height": 90,
        "x": 1054.7,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 22,
           "class": "ImageResourceLevel",
           "width": 22,
           "url": "media/map_EB178670_F773_7117_41ED_54ECCBB77C9B_HS_7_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 7)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 725.21,
        "x": 1054.7,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_EB178670_F773_7117_41ED_54ECCBB77C9B_HS_7.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_EB42B842_F771_F17B_41D4_117C0FEC8267",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 624.25,
        "height": 90,
        "x": 1691.23,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 22,
           "class": "ImageResourceLevel",
           "width": 22,
           "url": "media/map_EB178670_F773_7117_41ED_54ECCBB77C9B_HS_8_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 8)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 624.25,
        "x": 1691.23,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_EB178670_F773_7117_41ED_54ECCBB77C9B_HS_8.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      }
     ],
     "scaleMode": "fit_inside",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "fieldOfViewOverlayRadiusScale": 0.14
    }
   }
  ],
  "vfov": 180,
  "hfovMax": 120,
  "frameTransitionTime": 1000,
  "label": "Entry",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_E140AF6F_F7B1_EF08_41E8_EFB0BFC94EC7_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_E140AF6F_F7B1_EF08_41E8_EFB0BFC94EC7_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_E140AF6F_F7B1_EF08_41E8_EFB0BFC94EC7_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_E140AF6F_F7B1_EF08_41E8_EFB0BFC94EC7_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_E140AF6F_F7B1_EF08_41E8_EFB0BFC94EC7_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_E140AF6F_F7B1_EF08_41E8_EFB0BFC94EC7_1.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "preloadEnabled": false,
  "buttonZoomOut": {
   "toolTipShadowVerticalLength": 0,
   "borderSize": 0,
   "toolTipBorderSize": 1,
   "toolTipOpacity": 1,
   "class": "IconButton",
   "toolTipFontFamily": "Arial",
   "toolTipDisplayTime": 600,
   "mode": "push",
   "toolTipPaddingLeft": 6,
   "width": 30,
   "toolTipPaddingTop": 4,
   "paddingBottom": 0,
   "height": 30,
   "toolTipTextShadowOpacity": 0,
   "toolTipTextShadowColor": "#000000",
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipShadowHorizontalLength": 0,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_rollover.png",
   "horizontalAlign": "center",
   "borderRadius": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipShadowSpread": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_pressed.png",
   "toolTipShadowOpacity": 1,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625.png",
   "minWidth": 0,
   "cursor": "hand",
   "toolTipPaddingBottom": 4,
   "paddingLeft": 0,
   "paddingRight": 0,
   "shadow": false,
   "toolTip": "Zoom Out",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1207"
   },
   "verticalAlign": "middle",
   "minHeight": 0,
   "transparencyActive": false,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
   "toolTipBorderColor": "#767676",
   "toolTipFontColor": "#606060",
   "toolTipBorderRadius": 3,
   "toolTipFontWeight": "normal",
   "toolTipFontStyle": "normal",
   "paddingTop": 0,
   "toolTipFontSize": 12,
   "toolTipPaddingRight": 6
  },
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "buttonPlayLeft": {
   "borderSize": 0,
   "class": "IconButton",
   "mode": "push",
   "width": 38,
   "paddingBottom": 0,
   "height": 38,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_rollover.png",
   "horizontalAlign": "center",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_pressed.png",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247.png",
   "minWidth": 0,
   "cursor": "hand",
   "paddingLeft": 0,
   "paddingRight": 0,
   "shadow": false,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1196"
   },
   "verticalAlign": "middle",
   "minHeight": 0,
   "transparencyActive": false,
   "paddingTop": 0
  },
  "gyroscopeEnabled": true,
  "buttonPlayRight": {
   "borderSize": 0,
   "class": "IconButton",
   "mode": "push",
   "width": 38,
   "paddingBottom": 0,
   "height": 38,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_rollover.png",
   "horizontalAlign": "center",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_pressed.png",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40.png",
   "minWidth": 0,
   "cursor": "hand",
   "paddingLeft": 0,
   "paddingRight": 0,
   "shadow": false,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1198"
   },
   "verticalAlign": "middle",
   "minHeight": 0,
   "transparencyActive": false,
   "paddingTop": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "buttonPause": {
   "borderSize": 0,
   "class": "IconButton",
   "mode": "toggle",
   "width": 40,
   "paddingBottom": 0,
   "height": 40,
   "horizontalAlign": "center",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D_pressed.png",
   "iconURL": "skin/IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D.png",
   "minWidth": 0,
   "cursor": "hand",
   "paddingLeft": 0,
   "paddingRight": 0,
   "shadow": false,
   "id": "IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1167"
   },
   "verticalAlign": "middle",
   "minHeight": 0,
   "transparencyActive": false,
   "paddingTop": 0
  },
  "mouseControlMode": "drag_rotation",
  "buttonRestart": {
   "borderSize": 0,
   "class": "IconButton",
   "mode": "push",
   "width": 38,
   "paddingBottom": 0,
   "height": 38,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_rollover.png",
   "horizontalAlign": "center",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_pressed.png",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440.png",
   "minWidth": 0,
   "cursor": "hand",
   "paddingLeft": 0,
   "paddingRight": 0,
   "shadow": false,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1195"
   },
   "verticalAlign": "middle",
   "minHeight": 0,
   "transparencyActive": false,
   "paddingTop": 0
  },
  "buttonZoomIn": {
   "toolTipShadowVerticalLength": 0,
   "borderSize": 0,
   "toolTipBorderSize": 1,
   "toolTipOpacity": 1,
   "class": "IconButton",
   "toolTipFontFamily": "Arial",
   "toolTipDisplayTime": 600,
   "mode": "push",
   "toolTipPaddingLeft": 6,
   "width": 30,
   "toolTipPaddingTop": 4,
   "paddingBottom": 0,
   "height": 30,
   "toolTipTextShadowOpacity": 0,
   "toolTipTextShadowColor": "#000000",
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipShadowHorizontalLength": 0,
   "rollOverIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_rollover.png",
   "horizontalAlign": "center",
   "borderRadius": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipShadowSpread": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_pressed.png",
   "toolTipShadowOpacity": 1,
   "iconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411.png",
   "minWidth": 0,
   "cursor": "hand",
   "toolTipPaddingBottom": 4,
   "paddingLeft": 0,
   "paddingRight": 0,
   "shadow": false,
   "toolTip": "Zoom In",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1208"
   },
   "verticalAlign": "middle",
   "minHeight": 0,
   "transparencyActive": false,
   "id": "IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411",
   "toolTipBorderColor": "#767676",
   "toolTipFontColor": "#606060",
   "toolTipBorderRadius": 3,
   "toolTipFontWeight": "normal",
   "toolTipFontStyle": "normal",
   "paddingTop": 0,
   "toolTipFontSize": 12,
   "toolTipPaddingRight": 6
  },
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "class": "MapPlayer",
  "id": "MapViewerMapPlayer",
  "movementMode": "constrained",
  "viewerArea": {
   "borderSize": 0,
   "toolTipPaddingRight": 6,
   "toolTipOpacity": 1,
   "progressBottom": 2,
   "class": "ViewerArea",
   "toolTipFontFamily": "Arial",
   "toolTipDisplayTime": 600,
   "toolTipPaddingLeft": 6,
   "transitionMode": "blending",
   "toolTipPaddingTop": 4,
   "playbackBarProgressBorderRadius": 0,
   "toolTipTextShadowOpacity": 0,
   "toolTipTextShadowBlurRadius": 3,
   "progressBorderSize": 2,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarHeadShadowBlurRadius": 3,
   "borderRadius": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipShadowSpread": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipShadowOpacity": 1,
   "shadow": false,
   "paddingLeft": 0,
   "paddingRight": 0,
   "minHeight": 1,
   "playbackBarProgressOpacity": 1,
   "playbackBarBottom": 0,
   "playbackBarBorderSize": 2,
   "progressBarBackgroundColorDirection": "vertical",
   "toolTipFontColor": "#606060",
   "playbackBarHeadShadowColor": "#000000",
   "progressBarBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "playbackBarHeadBorderRadius": 0,
   "paddingTop": 0,
   "playbackBarProgressBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "playbackBarHeadBorderSize": 0,
   "progressBarOpacity": 1,
   "toolTipShadowVerticalLength": 0,
   "progressBackgroundColorDirection": "vertical",
   "toolTipFontSize": 12,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "playbackBarBorderColor": "#AAAAAA",
   "playbackBarHeadBorderColor": "#000000",
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarProgressBorderSize": 0,
   "toolTipTextShadowColor": "#000000",
   "paddingBottom": 0,
   "height": "100%",
   "playbackBarHeadShadow": true,
   "width": "100%",
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "progressBarBorderRadius": 4,
   "progressBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "playbackBarLeft": 0,
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarHeadHeight": 30,
   "toolTipShadowHorizontalLength": 0,
   "progressBackgroundColorRatios": [
    0,
    1
   ],
   "progressRight": 10,
   "playbackBarBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "progressBarBorderColor": "#000000",
   "progressBarBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeight": 20,
   "minWidth": 1,
   "progressBackgroundOpacity": 1,
   "top": "0%",
   "progressBorderRadius": 4,
   "playbackBarHeadWidth": 6,
   "playbackBarProgressBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipPaddingBottom": 4,
   "id": "MapViewer",
   "playbackBarBorderRadius": 4,
   "progressLeft": 10,
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBorderColor": "#000000",
   "toolTipBorderRadius": 3,
   "progressBorderColor": "#AAAAAA",
   "playbackBarHeadOpacity": 1,
   "toolTipFontWeight": "normal",
   "progressBarBorderSize": 1,
   "toolTipFontStyle": "normal",
   "left": "0%",
   "playbackBarBackgroundColorDirection": "vertical",
   "progressOpacity": 1,
   "transitionDuration": 500,
   "playbackBarRight": 0,
   "playbackBarOpacity": 1,
   "playbackBarBackgroundOpacity": 1,
   "toolTipBorderSize": 1,
   "progressHeight": 20
  },
  "buttonZoomOut": "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
  "buttonZoomIn": "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_E140AF6F_F7B1_EF08_41E8_EFB0BFC94EC7_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -38.02,
   "pitch": -1.34
  },
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 14.85,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 5000,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 14.85,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "hfov": 360,
  "id": "panorama_EC7E60FB_F7B3_3108_41C3_4A9D2F8A043B",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_EC7E60FB_F7B3_3108_41C3_4A9D2F8A043B_t.jpg",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 755.85,
    "x": 2713.36,
    "angle": -44.6,
    "map": "this.map_EB178670_F773_7117_41ED_54ECCBB77C9B"
   }
  ],
  "vfov": 180,
  "hfovMax": 120,
  "label": "Bedroom 2",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_EC7E60FB_F7B3_3108_41C3_4A9D2F8A043B_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_EC7E60FB_F7B3_3108_41C3_4A9D2F8A043B_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_EC7E60FB_F7B3_3108_41C3_4A9D2F8A043B.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_EC7E60FB_F7B3_3108_41C3_4A9D2F8A043B_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 56.93,
   "pitch": -18.19
  },
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 14.85,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 5000,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 14.85,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "hfov": 360,
  "id": "panorama_EDB9248F_F7B1_3108_41E2_056506CC9C0B",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_EDB9248F_F7B1_3108_41E2_056506CC9C0B_t.jpg",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 432.61,
    "x": 2318.11,
    "angle": -19.77,
    "map": "this.map_EB178670_F773_7117_41ED_54ECCBB77C9B"
   }
  ],
  "vfov": 180,
  "hfovMax": 120,
  "label": "Living Room",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_EDB9248F_F7B1_3108_41E2_056506CC9C0B_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_EDB9248F_F7B1_3108_41E2_056506CC9C0B_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_EDB9248F_F7B1_3108_41E2_056506CC9C0B.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_EDB9248F_F7B1_3108_41E2_056506CC9C0B_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -97.1,
   "pitch": -3.08
  },
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 14.85,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 5000,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 14.85,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "LivePanorama",
  "frameDisplayTime": 3000,
  "hfovMin": 60,
  "hfov": 360,
  "id": "panorama_EDB6C73F_F7B1_1F09_41D4_F09420644E4C",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_EDB6C73F_F7B1_1F09_41D4_F09420644E4C_1_t.jpg",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 277.71,
    "x": 1724.65,
    "angle": -32.14,
    "map": "this.map_EB178670_F773_7117_41ED_54ECCBB77C9B"
   }
  ],
  "vfov": 180,
  "hfovMax": 120,
  "frameTransitionTime": 1000,
  "label": "Kitchen",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_EDB6C73F_F7B1_1F09_41D4_F09420644E4C_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_EDB6C73F_F7B1_1F09_41D4_F09420644E4C_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_EDB6C73F_F7B1_1F09_41D4_F09420644E4C_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_EDB6C73F_F7B1_1F09_41D4_F09420644E4C_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_EDB6C73F_F7B1_1F09_41D4_F09420644E4C_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_EDB6C73F_F7B1_1F09_41D4_F09420644E4C_1.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_EDB6C73F_F7B1_1F09_41D4_F09420644E4C_2_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_EDB6C73F_F7B1_1F09_41D4_F09420644E4C_2_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_EDB6C73F_F7B1_1F09_41D4_F09420644E4C_2.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_EDB6C73F_F7B1_1F09_41D4_F09420644E4C_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 125.42,
   "pitch": -18.56
  },
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 14.85,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 5000,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 14.85,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "hfov": 360,
  "id": "panorama_EDE39825_F7B7_3139_41D0_DE74487240B0",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_EDE39825_F7B7_3139_41D0_DE74487240B0_t.jpg",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 259.88,
    "x": 1096.46,
    "angle": -45.7,
    "map": "this.map_EB178670_F773_7117_41ED_54ECCBB77C9B"
   }
  ],
  "vfov": 180,
  "hfovMax": 120,
  "label": "Laundry Room",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_EDE39825_F7B7_3139_41D0_DE74487240B0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_EDE39825_F7B7_3139_41D0_DE74487240B0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_EDE39825_F7B7_3139_41D0_DE74487240B0.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_EDE39825_F7B7_3139_41D0_DE74487240B0_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 123.59,
   "pitch": -12.17
  },
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 14.85,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 5000,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 14.85,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "LivePanorama",
  "frameDisplayTime": 3000,
  "hfovMin": 60,
  "hfov": 360,
  "id": "panorama_EDF06F2E_F7B7_2F08_41E8_870DEB81C854",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_EDF06F2E_F7B7_2F08_41E8_870DEB81C854_1_t.jpg",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 247.14,
    "x": 832.26,
    "angle": -32.78,
    "map": "this.map_EB178670_F773_7117_41ED_54ECCBB77C9B"
   }
  ],
  "vfov": 180,
  "hfovMax": 120,
  "frameTransitionTime": 1000,
  "label": "Bathroom",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_EDF06F2E_F7B7_2F08_41E8_870DEB81C854_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_EDF06F2E_F7B7_2F08_41E8_870DEB81C854_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_EDF06F2E_F7B7_2F08_41E8_870DEB81C854_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_EDF06F2E_F7B7_2F08_41E8_870DEB81C854_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_EDF06F2E_F7B7_2F08_41E8_870DEB81C854_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_EDF06F2E_F7B7_2F08_41E8_870DEB81C854_1.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_EDF06F2E_F7B7_2F08_41E8_870DEB81C854_2_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_EDF06F2E_F7B7_2F08_41E8_870DEB81C854_2_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_EDF06F2E_F7B7_2F08_41E8_870DEB81C854_2.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_EDF06F2E_F7B7_2F08_41E8_870DEB81C854_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 20.74,
   "pitch": -16.33
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 14.85,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "hfov": 360,
  "id": "panorama_ED6A409D_F7B1_7108_41E8_BACD5A91FBD2",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_ED6A409D_F7B1_7108_41E8_BACD5A91FBD2_t.jpg",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 787.34,
    "x": 814.44,
    "angle": -33.27,
    "map": "this.map_EB178670_F773_7117_41ED_54ECCBB77C9B"
   }
  ],
  "vfov": 180,
  "hfovMax": 120,
  "label": "Master Bedroom",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_ED6A409D_F7B1_7108_41E8_BACD5A91FBD2_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_ED6A409D_F7B1_7108_41E8_BACD5A91FBD2_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_ED6A409D_F7B1_7108_41E8_BACD5A91FBD2.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_ED6A409D_F7B1_7108_41E8_BACD5A91FBD2_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 38.73,
   "pitch": -9.29
  },
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 14.85,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 5000,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 14.85,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "LivePanorama",
  "frameDisplayTime": 3000,
  "hfovMin": 60,
  "hfov": 360,
  "id": "panorama_ED61A5D3_F7B3_1318_41D6_3C9656E8C7F2",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_ED61A5D3_F7B3_1318_41D6_3C9656E8C7F2_1_t.jpg",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 770.21,
    "x": 1099.7,
    "angle": -38.8,
    "map": "this.map_EB178670_F773_7117_41ED_54ECCBB77C9B"
   }
  ],
  "vfov": 180,
  "hfovMax": 120,
  "frameTransitionTime": 1000,
  "label": "Utility",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_ED61A5D3_F7B3_1318_41D6_3C9656E8C7F2_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_ED61A5D3_F7B3_1318_41D6_3C9656E8C7F2_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_ED61A5D3_F7B3_1318_41D6_3C9656E8C7F2_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_ED61A5D3_F7B3_1318_41D6_3C9656E8C7F2_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_ED61A5D3_F7B3_1318_41D6_3C9656E8C7F2_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_ED61A5D3_F7B3_1318_41D6_3C9656E8C7F2_1.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_ED61A5D3_F7B3_1318_41D6_3C9656E8C7F2_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 36.78,
   "pitch": -13.64
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 14.85,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "LivePanorama",
  "frameDisplayTime": 3000,
  "hfovMin": 60,
  "hfov": 360,
  "id": "panorama_ED38E020_F7B1_F138_41CB_5329FB12DFE7",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_ED38E020_F7B1_F138_41CB_5329FB12DFE7_1_t.jpg",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 669.25,
    "x": 1736.23,
    "angle": -31.6,
    "map": "this.map_EB178670_F773_7117_41ED_54ECCBB77C9B"
   }
  ],
  "vfov": 180,
  "hfovMax": 120,
  "frameTransitionTime": 1000,
  "label": "Kitchen",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_ED38E020_F7B1_F138_41CB_5329FB12DFE7_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_ED38E020_F7B1_F138_41CB_5329FB12DFE7_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_ED38E020_F7B1_F138_41CB_5329FB12DFE7_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_ED38E020_F7B1_F138_41CB_5329FB12DFE7_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_ED38E020_F7B1_F138_41CB_5329FB12DFE7_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_ED38E020_F7B1_F138_41CB_5329FB12DFE7_1.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_ED38E020_F7B1_F138_41CB_5329FB12DFE7_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 5.39,
   "pitch": -12.3
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 14.85,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Video",
  "thumbnailUrl": "media/video_DA28C0EA_F991_3108_41E8_9FCDA6E8D5C3_t.jpg",
  "label": "Tempo -Layla Drone Video (720p)",
  "video": {
   "height": 720,
   "class": "VideoResource",
   "mp4Url": "media/video_DA28C0EA_F991_3108_41E8_9FCDA6E8D5C3.mp4",
   "width": 1280
  },
  "width": 1280,
  "id": "video_DA28C0EA_F991_3108_41E8_9FCDA6E8D5C3",
  "loop": false,
  "height": 720,
  "scaleMode": "fit_inside"
 },
 {
  "class": "VideoPlayer",
  "displayPlaybackBar": true,
  "id": "MainViewerVideoPlayer",
  "viewerArea": "this.MainViewer",
  "buttonPause": "this.IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
  "buttonRestart": "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440"
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_DB81A373_F991_3719_41E6_2D3763F6D367, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_DB81A373_F991_3719_41E6_2D3763F6D367",
    "media": "this.panorama_E140AF6F_F7B1_EF08_41E8_EFB0BFC94EC7",
    "camera": "this.panorama_E140AF6F_F7B1_EF08_41E8_EFB0BFC94EC7_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_DB811373_F991_3719_41EC_4C50F831392B, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_DB811373_F991_3719_41EC_4C50F831392B",
    "media": "this.panorama_EC7E60FB_F7B3_3108_41C3_4A9D2F8A043B",
    "camera": "this.panorama_EC7E60FB_F7B3_3108_41C3_4A9D2F8A043B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_DB814373_F991_3719_41D3_EEAE4B517A11, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_DB814373_F991_3719_41D3_EEAE4B517A11",
    "media": "this.panorama_EDB9248F_F7B1_3108_41E2_056506CC9C0B",
    "camera": "this.panorama_EDB9248F_F7B1_3108_41E2_056506CC9C0B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_DB86B373_F991_3719_41ED_B5F60F6D1F61, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_DB86B373_F991_3719_41ED_B5F60F6D1F61",
    "media": "this.panorama_EDB6C73F_F7B1_1F09_41D4_F09420644E4C",
    "camera": "this.panorama_EDB6C73F_F7B1_1F09_41D4_F09420644E4C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_DB86E373_F991_3719_41CD_583330380DA6, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_DB86E373_F991_3719_41CD_583330380DA6",
    "media": "this.panorama_EDE39825_F7B7_3139_41D0_DE74487240B0",
    "camera": "this.panorama_EDE39825_F7B7_3139_41D0_DE74487240B0_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_DB865373_F991_3719_41E4_4ADCCE30223B, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_DB865373_F991_3719_41E4_4ADCCE30223B",
    "media": "this.panorama_EDF06F2E_F7B7_2F08_41E8_870DEB81C854",
    "camera": "this.panorama_EDF06F2E_F7B7_2F08_41E8_870DEB81C854_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_DB878373_F991_3719_41C0_78F90F9528E8, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_DB878373_F991_3719_41C0_78F90F9528E8",
    "media": "this.panorama_ED6A409D_F7B1_7108_41E8_BACD5A91FBD2",
    "camera": "this.panorama_ED6A409D_F7B1_7108_41E8_BACD5A91FBD2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_DB87C373_F991_3719_41D1_9CE62B1D2779, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_DB87C373_F991_3719_41D1_9CE62B1D2779",
    "media": "this.panorama_ED61A5D3_F7B3_1318_41D6_3C9656E8C7F2",
    "camera": "this.panorama_ED61A5D3_F7B3_1318_41D6_3C9656E8C7F2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_DB873373_F991_3719_41E1_C1BE67F87C70, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_DB873373_F991_3719_41E1_C1BE67F87C70",
    "media": "this.panorama_ED38E020_F7B1_F138_41CB_5329FB12DFE7",
    "camera": "this.panorama_ED38E020_F7B1_F138_41CB_5329FB12DFE7_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_DA28C0EA_F991_3108_41E8_9FCDA6E8D5C3",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 0)",
    "end": "this.trigger('tourEnded')",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 9, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 9, this.video_DA28C0EA_F991_3108_41E8_9FCDA6E8D5C3)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "thumbnaillist5245_playlist",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E140AF6F_F7B1_EF08_41E8_EFB0BFC94EC7",
    "camera": "this.panorama_E140AF6F_F7B1_EF08_41E8_EFB0BFC94EC7_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EC7E60FB_F7B3_3108_41C3_4A9D2F8A043B",
    "camera": "this.panorama_EC7E60FB_F7B3_3108_41C3_4A9D2F8A043B_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EDB9248F_F7B1_3108_41E2_056506CC9C0B",
    "camera": "this.panorama_EDB9248F_F7B1_3108_41E2_056506CC9C0B_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EDB6C73F_F7B1_1F09_41D4_F09420644E4C",
    "camera": "this.panorama_EDB6C73F_F7B1_1F09_41D4_F09420644E4C_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EDE39825_F7B7_3139_41D0_DE74487240B0",
    "camera": "this.panorama_EDE39825_F7B7_3139_41D0_DE74487240B0_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EDF06F2E_F7B7_2F08_41E8_870DEB81C854",
    "camera": "this.panorama_EDF06F2E_F7B7_2F08_41E8_870DEB81C854_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 6)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_ED6A409D_F7B1_7108_41E8_BACD5A91FBD2",
    "camera": "this.panorama_ED6A409D_F7B1_7108_41E8_BACD5A91FBD2_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 6, 7)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_ED61A5D3_F7B3_1318_41D6_3C9656E8C7F2",
    "camera": "this.panorama_ED61A5D3_F7B3_1318_41D6_3C9656E8C7F2_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 7, 8)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_ED38E020_F7B1_F138_41CB_5329FB12DFE7",
    "camera": "this.panorama_ED38E020_F7B1_F138_41CB_5329FB12DFE7_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 8, 9)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_DA28C0EA_F991_3108_41E8_9FCDA6E8D5C3",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.thumbnaillist5245_playlist, 9, 0)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.thumbnaillist5245_playlist, 9, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.thumbnaillist5245_playlist, 9, this.video_DA28C0EA_F991_3108_41E8_9FCDA6E8D5C3)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_DA28C0EA_F991_3108_41E8_9FCDA6E8D5C3",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist, 0, this.video_DA28C0EA_F991_3108_41E8_9FCDA6E8D5C3)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E140AF6F_F7B1_EF08_41E8_EFB0BFC94EC7",
    "camera": "this.panorama_E140AF6F_F7B1_EF08_41E8_EFB0BFC94EC7_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 0, 1)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EC7E60FB_F7B3_3108_41C3_4A9D2F8A043B",
    "camera": "this.panorama_EC7E60FB_F7B3_3108_41C3_4A9D2F8A043B_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 1, 2)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EDB9248F_F7B1_3108_41E2_056506CC9C0B",
    "camera": "this.panorama_EDB9248F_F7B1_3108_41E2_056506CC9C0B_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EDB6C73F_F7B1_1F09_41D4_F09420644E4C",
    "camera": "this.panorama_EDB6C73F_F7B1_1F09_41D4_F09420644E4C_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 3, 4)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EDE39825_F7B7_3139_41D0_DE74487240B0",
    "camera": "this.panorama_EDE39825_F7B7_3139_41D0_DE74487240B0_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 4, 5)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EDF06F2E_F7B7_2F08_41E8_870DEB81C854",
    "camera": "this.panorama_EDF06F2E_F7B7_2F08_41E8_870DEB81C854_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 5, 6)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_ED6A409D_F7B1_7108_41E8_BACD5A91FBD2",
    "camera": "this.panorama_ED6A409D_F7B1_7108_41E8_BACD5A91FBD2_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 6, 7)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_ED61A5D3_F7B3_1318_41D6_3C9656E8C7F2",
    "camera": "this.panorama_ED61A5D3_F7B3_1318_41D6_3C9656E8C7F2_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 7, 8)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_ED38E020_F7B1_F138_41CB_5329FB12DFE7",
    "camera": "this.panorama_ED38E020_F7B1_F138_41CB_5329FB12DFE7_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 8, 9)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_DA28C0EA_F991_3108_41E8_9FCDA6E8D5C3",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 9, 0)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 9, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 9, this.video_DA28C0EA_F991_3108_41E8_9FCDA6E8D5C3)"
   }
  ]
 },
 "this.map_EB178670_F773_7117_41ED_54ECCBB77C9B",
 {
  "class": "PlayList",
  "id": "playList_DB803372_F991_371B_41DB_DEFF7B05A48F",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_EB178670_F773_7117_41ED_54ECCBB77C9B",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_DB802372_F991_371B_41DD_6EB893921E08",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_EB178670_F773_7117_41ED_54ECCBB77C9B",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "data": {
   "label": "Through the door, the light pours in,"
  },
  "class": "MediaAudio",
  "id": "audio_DDEFFE5C_F991_F108_41CE_F98239658AAB",
  "autoplay": true,
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_DDEFFE5C_F991_F108_41CE_F98239658AAB.mp3",
   "oggUrl": "media/audio_DDEFFE5C_F991_F108_41CE_F98239658AAB.ogg"
  }
 }
], "children": [
 {
  "borderSize": 0,
  "toolTipPaddingRight": 6,
  "progressHeight": 20,
  "toolTipOpacity": 1,
  "progressBottom": 1,
  "class": "ViewerArea",
  "toolTipFontFamily": "Arial",
  "toolTipDisplayTime": 600,
  "toolTipPaddingLeft": 6,
  "transitionMode": "blending",
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipTextShadowBlurRadius": 3,
  "progressBorderSize": 2,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "borderRadius": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowOpacity": 1,
  "shadow": false,
  "paddingLeft": 0,
  "paddingRight": 0,
  "minHeight": 50,
  "playbackBarProgressOpacity": 1,
  "playbackBarBottom": 10,
  "playbackBarBorderSize": 2,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipFontColor": "#606060",
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadBorderRadius": 0,
  "paddingTop": 0,
  "toolTipFontSize": 12,
  "playbackBarHeadBorderSize": 0,
  "progressBarOpacity": 1,
  "toolTipShadowVerticalLength": 0,
  "progressBackgroundColorDirection": "vertical",
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressBorderSize": 0,
  "toolTipTextShadowColor": "#000000",
  "paddingBottom": 0,
  "playbackBarHeadShadow": true,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "progressBarBorderRadius": 4,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarLeft": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadHeight": 30,
  "toolTipShadowHorizontalLength": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "progressRight": 10,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeight": 20,
  "minWidth": 100,
  "progressBackgroundOpacity": 1,
  "top": 77,
  "progressBorderRadius": 4,
  "playbackBarHeadWidth": 6,
  "progressOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipPaddingBottom": 4,
  "id": "MainViewer",
  "playbackBarBorderRadius": 4,
  "progressLeft": 10,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBorderColor": "#000000",
  "toolTipFontStyle": "normal",
  "toolTipBorderRadius": 3,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "progressBarBorderSize": 1,
  "left": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "bottom": 92,
  "transitionDuration": 500,
  "playbackBarRight": 0,
  "playbackBarOpacity": 1,
  "playbackBarBackgroundOpacity": 1,
  "toolTipBorderSize": 1,
  "progressBorderColor": "#AAAAAA",
  "right": 0
 },
 {
  "borderSize": 0,
  "class": "ThumbnailList",
  "backgroundColor": [
   "#000000"
  ],
  "itemThumbnailShadowBlurRadius": 4,
  "horizontalAlign": "left",
  "selectedItemLabelFontWeight": "bold",
  "borderRadius": 5,
  "backgroundColorDirection": "vertical",
  "selectedItemLabelFontColor": "#FFFF00",
  "backgroundColorRatios": [
   0
  ],
  "layout": "vertical",
  "shadow": false,
  "itemThumbnailShadowOpacity": 0.8,
  "itemVerticalAlign": "middle",
  "paddingLeft": 20,
  "paddingRight": 20,
  "minHeight": 0,
  "rollOverItemLabelFontWeight": "bold",
  "playList": "this.thumbnaillist5245_playlist",
  "backgroundOpacity": 0.2,
  "itemThumbnailShadowHorizontalLength": 3,
  "itemLabelTextDecoration": "none",
  "itemLabelFontWeight": "normal",
  "itemBackgroundOpacity": 0,
  "itemLabelHorizontalAlign": "center",
  "itemThumbnailHeight": 70,
  "paddingTop": 10,
  "maxHeight": 800,
  "itemLabelFontSize": 14,
  "itemPaddingBottom": 3,
  "itemThumbnailScaleMode": "fit_outside",
  "itemPaddingTop": 3,
  "scrollBarColor": "#FFFFFF",
  "itemLabelGap": 8,
  "width": 158.5,
  "paddingBottom": 10,
  "itemLabelFontFamily": "Arial",
  "itemPaddingRight": 3,
  "itemLabelFontColor": "#FFFFFF",
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailShadowColor": "#000000",
  "scrollBarWidth": 10,
  "itemThumbnailBorderRadius": 5,
  "itemMode": "normal",
  "scrollBarMargin": 2,
  "minWidth": 0,
  "itemHorizontalAlign": "center",
  "top": "8.02%",
  "itemOpacity": 1,
  "rollOverItemLabelFontColor": "#FF0000",
  "maxWidth": 800,
  "bottom": "10.1%",
  "itemThumbnailShadow": true,
  "id": "thumbnaillist5245",
  "itemBorderRadius": 0,
  "verticalAlign": "top",
  "itemThumbnailOpacity": 1,
  "itemLabelFontStyle": "normal",
  "itemBackgroundColor": [],
  "data": {
   "name": "ThumbnailList28173"
  },
  "itemThumbnailWidth": 100,
  "scrollBarOpacity": 0.5,
  "gap": 0,
  "itemThumbnailShadowSpread": 1,
  "itemPaddingLeft": 3,
  "right": "0%",
  "itemBackgroundColorRatios": [],
  "itemThumbnailShadowVerticalLength": 3,
  "scrollBarVisible": "rollOver",
  "itemLabelPosition": "bottom"
 },
 {
  "creationPolicy": "inAdvance",
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "class": "Label",
    "width": 374,
    "paddingBottom": 0,
    "fontSize": 40,
    "height": "100%",
    "textDecoration": "none",
    "borderRadius": 0,
    "text": "Tempo / Layla",
    "fontFamily": "Arial",
    "fontStyle": "normal",
    "fontWeight": "bold",
    "minWidth": 30,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "paddingRight": 0,
    "shadow": false,
    "id": "label4056",
    "backgroundOpacity": 0,
    "data": {
     "name": "Label28174"
    },
    "verticalAlign": "middle",
    "minHeight": 16,
    "fontColor": "#666666",
    "paddingTop": 0
   },
   {
    "creationPolicy": "inAdvance",
    "borderSize": 0,
    "children": [
     {
      "toolTipShadowVerticalLength": 0,
      "borderSize": 0,
      "toolTipBorderSize": 1,
      "toolTipOpacity": 1,
      "class": "IconButton",
      "toolTipFontFamily": "Arial",
      "toolTipDisplayTime": 600,
      "mode": "toggle",
      "toolTipPaddingLeft": 6,
      "width": 40,
      "toolTipPaddingTop": 4,
      "paddingBottom": 0,
      "height": 40,
      "toolTipTextShadowOpacity": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipShadowHorizontalLength": 0,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipShadowSpread": 0,
      "pressedIconURL": "skin/IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75_pressed.png",
      "toolTipShadowOpacity": 1,
      "iconURL": "skin/IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75.png",
      "minWidth": 0,
      "cursor": "hand",
      "toolTipPaddingBottom": 4,
      "paddingLeft": 0,
      "paddingRight": 0,
      "shadow": false,
      "toolTip": "Mute",
      "backgroundOpacity": 0,
      "data": {
       "name": "Button49930"
      },
      "verticalAlign": "middle",
      "minHeight": 0,
      "transparencyActive": true,
      "id": "IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75",
      "toolTipBorderColor": "#767676",
      "toolTipFontColor": "#606060",
      "toolTipBorderRadius": 3,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "paddingTop": 0,
      "toolTipFontSize": 12,
      "toolTipPaddingRight": 6
     },
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
     {
      "creationPolicy": "inAdvance",
      "borderSize": 0,
      "children": [
       {
        "creationPolicy": "inAdvance",
        "borderSize": 0,
        "children": [
         "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247"
        ],
        "class": "Container",
        "backgroundColor": [
         "#FFFFFF"
        ],
        "scrollBarVisible": "rollOver",
        "width": 47,
        "paddingBottom": 0,
        "height": "100%",
        "scrollBarColor": "#000000",
        "horizontalAlign": "center",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "backgroundColorRatios": [
         0
        ],
        "backgroundColorDirection": "vertical",
        "layout": "vertical",
        "scrollBarMargin": 2,
        "minWidth": 20,
        "paddingLeft": 0,
        "paddingRight": 0,
        "shadow": false,
        "id": "Container_4EEC4AA5_5E2B_1FC1_41B6_F59E8DCAC55A",
        "backgroundOpacity": 1,
        "data": {
         "name": "Container1202"
        },
        "verticalAlign": "middle",
        "minHeight": 20,
        "scrollBarOpacity": 0.5,
        "paddingTop": 0,
        "gap": 10,
        "contentOpaque": false,
        "overflow": "hidden"
       },
       "this.IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40"
      ],
      "class": "Container",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "scrollBarVisible": "rollOver",
      "width": 133,
      "paddingBottom": 0,
      "height": "100%",
      "scrollBarColor": "#000000",
      "horizontalAlign": "center",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "backgroundColorRatios": [
       0
      ],
      "backgroundColorDirection": "vertical",
      "layout": "horizontal",
      "scrollBarMargin": 2,
      "minWidth": 20,
      "paddingLeft": 0,
      "paddingRight": 0,
      "shadow": false,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41C0_26F0681CF137",
      "backgroundOpacity": 1,
      "data": {
       "name": "Container1200"
      },
      "verticalAlign": "middle",
      "minHeight": 20,
      "scrollBarOpacity": 0.5,
      "paddingTop": 0,
      "gap": 5,
      "contentOpaque": false,
      "overflow": "hidden"
     },
     {
      "creationPolicy": "inAdvance",
      "borderSize": 0,
      "children": [
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
       "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"
      ],
      "class": "Container",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "scrollBarVisible": "rollOver",
      "width": 85,
      "paddingBottom": 0,
      "height": "100%",
      "scrollBarColor": "#000000",
      "horizontalAlign": "center",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "backgroundColorRatios": [
       0
      ],
      "backgroundColorDirection": "vertical",
      "layout": "horizontal",
      "scrollBarMargin": 2,
      "minWidth": 20,
      "paddingLeft": 0,
      "paddingRight": 0,
      "shadow": false,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41D4_9B4DE1B45BE3",
      "backgroundOpacity": 1,
      "data": {
       "name": "Container1206"
      },
      "verticalAlign": "middle",
      "minHeight": 20,
      "scrollBarOpacity": 0.5,
      "paddingTop": 0,
      "gap": 10,
      "contentOpaque": false,
      "overflow": "hidden"
     }
    ],
    "class": "Container",
    "backgroundColor": [
     "#FFFFFF"
    ],
    "scrollBarVisible": "rollOver",
    "width": 805.5,
    "paddingBottom": 0,
    "height": "93.478%",
    "scrollBarColor": "#000000",
    "horizontalAlign": "center",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "backgroundColorRatios": [
     0
    ],
    "backgroundColorDirection": "vertical",
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "minWidth": 468,
    "paddingLeft": 0,
    "paddingRight": 0,
    "shadow": false,
    "id": "Container_4EEC4AA6_5E2B_1FC3_41CE_536DE679C718",
    "backgroundOpacity": 1,
    "data": {
     "name": "Container1194"
    },
    "verticalAlign": "middle",
    "minHeight": 20,
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "gap": 10,
    "contentOpaque": false,
    "overflow": "hidden"
   },
   {
    "paddingTop": 10,
    "borderSize": 0,
    "itemThumbnailShadowVerticalLength": 3,
    "horizontalAlign": "left",
    "itemBackgroundColorRatios": [],
    "class": "ThumbnailList",
    "itemPaddingTop": 3,
    "scrollBarColor": "#FFFFFF",
    "itemLabelGap": 1,
    "width": "28.046%",
    "paddingBottom": 10,
    "height": 92,
    "selectedItemLabelFontWeight": "bold",
    "itemPaddingRight": 3,
    "itemLabelFontColor": "#000000",
    "itemLabelFontFamily": "Arial",
    "borderRadius": 5,
    "itemThumbnailShadowColor": "#000000",
    "scrollBarWidth": 10,
    "itemBackgroundColorDirection": "vertical",
    "itemThumbnailShadowOpacity": 0.54,
    "layout": "horizontal",
    "itemThumbnailBorderRadius": 2,
    "itemMode": "normal",
    "rollOverItemBackgroundOpacity": 0,
    "selectedItemLabelFontColor": "#FFCC00",
    "minWidth": 20,
    "itemHorizontalAlign": "center",
    "rollOverItemLabelFontColor": "#003399",
    "scrollBarMargin": 2,
    "itemOpacity": 1,
    "paddingLeft": 20,
    "paddingRight": 20,
    "itemVerticalAlign": "middle",
    "minHeight": 20,
    "itemThumbnailShadowBlurRadius": 8,
    "id": "ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965",
    "playList": "this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist",
    "backgroundOpacity": 0,
    "itemBorderRadius": 0,
    "verticalAlign": "top",
    "itemThumbnailShadow": true,
    "rollOverItemLabelFontWeight": "bold",
    "shadow": false,
    "itemLabelFontWeight": "normal",
    "itemThumbnailShadowHorizontalLength": 3,
    "itemThumbnailOpacity": 1,
    "itemBackgroundOpacity": 0,
    "itemLabelHorizontalAlign": "center",
    "itemLabelTextDecoration": "none",
    "data": {
     "name": "ThumbnailList35762"
    },
    "itemLabelFontSize": 14,
    "itemThumbnailHeight": 36,
    "scrollBarOpacity": 0.5,
    "itemLabelFontStyle": "normal",
    "itemThumbnailScaleMode": "fit_outside",
    "gap": 13,
    "itemThumbnailShadowSpread": 1,
    "itemPaddingLeft": 3,
    "itemPaddingBottom": 3,
    "itemThumbnailWidth": 94,
    "itemBackgroundColor": [],
    "scrollBarVisible": "always",
    "itemLabelPosition": "top"
   },
   {
    "borderSize": 0,
    "horizontalAlign": "left",
    "itemBackgroundColorRatios": [],
    "class": "ThumbnailList",
    "itemPaddingTop": 3,
    "scrollBarColor": "#FFFFFF",
    "itemLabelGap": 8,
    "width": "26.327%",
    "paddingBottom": 10,
    "height": 82.5,
    "selectedItemLabelFontWeight": "bold",
    "itemPaddingRight": 3,
    "itemLabelFontColor": "#FFFFFF",
    "itemLabelFontFamily": "Arial",
    "borderRadius": 5,
    "itemThumbnailShadowColor": "#000000",
    "scrollBarWidth": 10,
    "itemBackgroundColorDirection": "vertical",
    "itemThumbnailShadowOpacity": 0.57,
    "layout": "horizontal",
    "itemThumbnailBorderRadius": 5,
    "itemMode": "normal",
    "itemVerticalAlign": "middle",
    "selectedItemLabelFontColor": "#FFCC00",
    "minWidth": 1,
    "itemHorizontalAlign": "center",
    "itemThumbnailShadowBlurRadius": 8,
    "scrollBarMargin": 2,
    "itemOpacity": 1,
    "paddingLeft": 20,
    "paddingRight": 20,
    "visible": false,
    "shadow": false,
    "id": "ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B",
    "playList": "this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist",
    "backgroundOpacity": 0,
    "itemBorderRadius": 0,
    "verticalAlign": "top",
    "minHeight": 1,
    "itemThumbnailShadow": true,
    "rollOverItemLabelFontWeight": "bold",
    "itemLabelTextDecoration": "none",
    "itemLabelFontWeight": "normal",
    "itemThumbnailShadowHorizontalLength": 3,
    "itemThumbnailOpacity": 1,
    "itemBackgroundOpacity": 0,
    "itemLabelHorizontalAlign": "center",
    "itemThumbnailWidth": 100,
    "data": {
     "name": "ThumbnailList35762"
    },
    "itemLabelFontSize": 14,
    "itemThumbnailHeight": 75,
    "scrollBarOpacity": 0.5,
    "itemLabelFontStyle": "normal",
    "itemThumbnailScaleMode": "fit_outside",
    "gap": 13,
    "itemThumbnailShadowSpread": 1,
    "itemPaddingLeft": 3,
    "itemPaddingBottom": 3,
    "paddingTop": 10,
    "itemBackgroundColor": [],
    "itemThumbnailShadowVerticalLength": 3,
    "scrollBarVisible": "rollOver",
    "itemLabelPosition": "bottom"
   }
  ],
  "overflow": "scroll",
  "class": "Container",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "scrollBarVisible": "rollOver",
  "gap": 6,
  "paddingBottom": 0,
  "height": 92,
  "width": "100%",
  "scrollBarColor": "#000000",
  "horizontalAlign": "center",
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "backgroundColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "layout": "horizontal",
  "scrollBarMargin": 2,
  "minWidth": 1,
  "paddingLeft": 0,
  "paddingRight": 0,
  "shadow": false,
  "backgroundOpacity": 0.3,
  "data": {
   "name": "Container29432"
  },
  "verticalAlign": "middle",
  "minHeight": 1,
  "bottom": "0%",
  "left": "0%",
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "contentOpaque": false
 },
 {
  "borderSize": 0,
  "class": "Image",
  "paddingBottom": 0,
  "height": "7.604%",
  "width": "9.198%",
  "horizontalAlign": "center",
  "borderRadius": 0,
  "url": "skin/Image_306F4727_273A_95B3_41B2_3DF89EEDBF85.png",
  "shadow": false,
  "scaleMode": "fit_inside",
  "minWidth": 1,
  "top": "0.05%",
  "maxWidth": 1467,
  "paddingLeft": 0,
  "paddingRight": 0,
  "id": "Image_306F4727_273A_95B3_41B2_3DF89EEDBF85",
  "backgroundOpacity": 0,
  "data": {
   "name": "Wave Logo"
  },
  "verticalAlign": "middle",
  "minHeight": 1,
  "paddingTop": 0,
  "right": "0%",
  "maxHeight": 817
 },
 {
  "borderSize": 0,
  "class": "Image",
  "paddingBottom": 0,
  "height": "6.979%",
  "width": "38.151%",
  "horizontalAlign": "center",
  "borderRadius": 0,
  "url": "skin/Image_3E29962B_272E_B7B3_4191_F996EF0F95BB.png",
  "shadow": false,
  "scaleMode": "fit_inside",
  "minWidth": 1,
  "top": "0.31%",
  "maxWidth": 1700,
  "paddingLeft": 0,
  "paddingRight": 0,
  "id": "Image_3E29962B_272E_B7B3_4191_F996EF0F95BB",
  "backgroundOpacity": 0,
  "data": {
   "name": "MTViewhomes"
  },
  "verticalAlign": "middle",
  "minHeight": 1,
  "paddingTop": 0,
  "right": "8.53%",
  "maxHeight": 186
 },
 {
  "creationPolicy": "inAdvance",
  "borderSize": 0,
  "children": [
   "this.MapViewer"
  ],
  "overflow": "scroll",
  "class": "Container",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "scrollBarVisible": "rollOver",
  "gap": 10,
  "paddingBottom": 0,
  "height": "33.75%",
  "width": "28.739%",
  "scrollBarColor": "#000000",
  "horizontalAlign": "left",
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "backgroundColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "layout": "absolute",
  "scrollBarMargin": 2,
  "minWidth": 1,
  "top": "1.82%",
  "paddingLeft": 0,
  "paddingRight": 0,
  "shadow": false,
  "id": "Container_581FBEE1_4338_67EB_41B1_0EF3FEBC0B73",
  "backgroundOpacity": 0.3,
  "data": {
   "name": "Container24488"
  },
  "verticalAlign": "top",
  "minHeight": 1,
  "left": "0.63%",
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "contentOpaque": false
 }
], 
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "class": "Player",
 "start": "this.playAudioList([this.audio_DDEFFE5C_F991_F108_41CE_F98239658AAB]); this.syncPlaylists([this.thumbnaillist5245_playlist,this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist,this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_DB802372_F991_371B_41DD_6EB893921E08.set('selectedIndex', 0)",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "vrPolyfillScale": 0.88,
 "paddingBottom": 0,
 "height": "100%",
 "width": "100%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75",
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": false,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "minWidth": 20,
 "scripts": {
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getKey": function(key){  return window[key]; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "unregisterKey": function(key){  delete window[key]; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "existsKey": function(key){  return key in window; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } }
 },
 "paddingLeft": 0,
 "paddingRight": 0,
 "shadow": false,
 "id": "rootPlayer",
 "data": {
  "name": "Player28156"
 },
 "verticalAlign": "top",
 "minHeight": 20,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "contentOpaque": false,
 "overflow": "visible"
})