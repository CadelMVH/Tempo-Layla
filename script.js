TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "class": "LivePanorama",
  "thumbnailUrl": "media/panorama_E140AF6F_F7B1_EF08_41E8_EFB0BFC94EC7_1_t.jpg",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_E140AF6F_F7B1_EF08_41E8_EFB0BFC94EC7_0_t.jpg"
   },
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_E140AF6F_F7B1_EF08_41E8_EFB0BFC94EC7_1_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_E140AF6F_F7B1_EF08_41E8_EFB0BFC94EC7",
  "partial": false,
  "frameDisplayTime": 3000,
  "pitch": 0,
  "hfovMax": 120,
  "frameTransitionTime": 1000,
  "label": "Entry",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 751.69,
    "x": 2443.61,
    "angle": -27.22,
    "map": {
     "class": "Map",
     "fieldOfViewOverlayInsideOpacity": 0.26,
     "thumbnailUrl": "media/map_EB178670_F773_7117_41ED_54ECCBB77C9B_t.png",
     "width": 3200,
     "id": "map_EB178670_F773_7117_41ED_54ECCBB77C9B",
     "fieldOfViewOverlayInsideColor": "#0066CC",
     "height": 918,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "overlays": [
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_EBF674FC_F773_1108_41E5_40686B140DF3",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 706.69,
        "height": 90,
        "x": 2398.61,
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
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 0)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 706.69,
        "x": 2398.61,
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
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_EBB0FD3E_F773_130B_41E2_D6767F3188C0",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 710.62,
        "height": 90,
        "x": 2668.13,
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
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 1)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 710.62,
        "x": 2668.13,
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
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_EB1BD3C7_F773_7778_41D9_27574C55D5DE",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 387.38,
        "height": 90,
        "x": 2272.88,
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
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 2)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 387.38,
        "x": 2272.88,
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
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_EB9E83B3_F773_1718_41E3_E3F85447B33F",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 232.47,
        "height": 90,
        "x": 1679.42,
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
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 3)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 232.47,
        "x": 1679.42,
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
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_EAE17391_F771_1719_41DB_EBDE071B6A68",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 214.65,
        "height": 90,
        "x": 1051.23,
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
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 4)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 214.65,
        "x": 1051.23,
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
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_EBB3DC04_F771_30F8_41EB_E6872BB900B0",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 201.91,
        "height": 90,
        "x": 787.03,
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
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 5)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 201.91,
        "x": 787.03,
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
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_EB5D5BB1_F771_7718_41BA_AAA11963AD36",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 765.27,
        "height": 90,
        "x": 769.2,
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
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 6)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 765.27,
        "x": 769.2,
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
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_EBF14530_F771_3318_41EA_0D7F6345776A",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 724.98,
        "height": 90,
        "x": 1054.47,
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
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 7)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 724.98,
        "x": 1054.47,
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
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_EB42B842_F771_F17B_41D4_117C0FEC8267",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 624.02,
        "height": 90,
        "x": 1691,
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
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 8)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 624.02,
        "x": 1691,
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
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_F3659A0C_F8DF_B16A_41E7_8E928F9362AC",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 436.93,
        "height": 90,
        "x": 1898.93,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 22,
           "class": "ImageResourceLevel",
           "width": 22,
           "url": "media/map_EB178670_F773_7117_41ED_54ECCBB77C9B_HS_9_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 10)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 436.93,
        "x": 1898.93,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_EB178670_F773_7117_41ED_54ECCBB77C9B_HS_9.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_F5763450_F8E6_D1F9_41E4_144ACC3B52B6",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 614.07,
        "height": 90,
        "x": 771.06,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 22,
           "class": "ImageResourceLevel",
           "width": 22,
           "url": "media/map_EB178670_F773_7117_41ED_54ECCBB77C9B_HS_10_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 11)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 614.07,
        "x": 771.06,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_EB178670_F773_7117_41ED_54ECCBB77C9B_HS_10.png"
          }
         ]
        }
       },
       "useHandCursor": true
      }
     ],
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
     "minimumZoomFactor": 0.5,
     "label": "Layla Floorplan",
     "maximumZoomFactor": 1.2,
     "scaleMode": "fit_inside",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "initialZoomFactor": 1,
     "fieldOfViewOverlayRadiusScale": 0.14
    }
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaPlayer",
  "buttonZoomOut": {
   "class": "IconButton",
   "paddingLeft": 0,
   "toolTipShadowBlurRadius": 3,
   "horizontalAlign": "center",
   "mode": "push",
   "toolTipFontStyle": "normal",
   "width": 30,
   "toolTipDisplayTime": 600,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625.png",
   "height": 30,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipPaddingBottom": 4,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_rollover.png",
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipTextShadowOpacity": 0,
   "paddingBottom": 0,
   "toolTipShadowHorizontalLength": 0,
   "toolTipFontColor": "#606060",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_pressed.png",
   "toolTipFontSize": 12,
   "transparencyActive": false,
   "minWidth": 0,
   "toolTipFontWeight": "normal",
   "cursor": "hand",
   "borderSize": 0,
   "toolTipBorderRadius": 3,
   "toolTipShadowOpacity": 1,
   "borderRadius": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
   "toolTipFontFamily": "Arial",
   "data": {
    "name": "Button1207"
   },
   "verticalAlign": "middle",
   "minHeight": 0,
   "toolTip": "Zoom Out",
   "toolTipPaddingRight": 6,
   "toolTipOpacity": 1,
   "toolTipPaddingLeft": 6,
   "toolTipShadowSpread": 0,
   "paddingRight": 0,
   "backgroundOpacity": 0,
   "toolTipBorderColor": "#767676",
   "toolTipShadowVerticalLength": 0,
   "toolTipBorderSize": 1,
   "paddingTop": 0,
   "toolTipShadowColor": "#333333",
   "toolTipPaddingTop": 4,
   "toolTipTextShadowColor": "#000000"
  },
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "buttonPlayLeft": {
   "class": "IconButton",
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "mode": "push",
   "width": 38,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247.png",
   "height": 38,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_rollover.png",
   "paddingBottom": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_pressed.png",
   "transparencyActive": false,
   "minWidth": 0,
   "cursor": "hand",
   "borderSize": 0,
   "borderRadius": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
   "data": {
    "name": "Button1196"
   },
   "verticalAlign": "middle",
   "minHeight": 0,
   "paddingRight": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0
  },
  "displayPlaybackBar": true,
  "gyroscopeEnabled": true,
  "buttonPlayRight": {
   "class": "IconButton",
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "mode": "push",
   "width": 38,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40.png",
   "height": 38,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_rollover.png",
   "paddingBottom": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_pressed.png",
   "transparencyActive": false,
   "minWidth": 0,
   "cursor": "hand",
   "borderSize": 0,
   "borderRadius": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
   "data": {
    "name": "Button1198"
   },
   "verticalAlign": "middle",
   "minHeight": 0,
   "paddingRight": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "buttonRestart": {
   "class": "IconButton",
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "mode": "push",
   "width": 38,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440.png",
   "height": 38,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_rollover.png",
   "paddingBottom": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_pressed.png",
   "transparencyActive": false,
   "minWidth": 0,
   "cursor": "hand",
   "borderSize": 0,
   "borderRadius": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
   "data": {
    "name": "Button1195"
   },
   "verticalAlign": "middle",
   "minHeight": 0,
   "paddingRight": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0
  },
  "buttonPause": {
   "class": "IconButton",
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "mode": "toggle",
   "width": 40,
   "iconURL": "skin/IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D.png",
   "height": 40,
   "paddingBottom": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D_pressed.png",
   "transparencyActive": false,
   "minWidth": 0,
   "cursor": "hand",
   "borderSize": 0,
   "borderRadius": 0,
   "id": "IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
   "data": {
    "name": "Button1167"
   },
   "verticalAlign": "middle",
   "minHeight": 0,
   "paddingRight": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0
  },
  "mouseControlMode": "drag_rotation",
  "preloadEnabled": false,
  "buttonZoomIn": {
   "class": "IconButton",
   "paddingLeft": 0,
   "toolTipShadowBlurRadius": 3,
   "horizontalAlign": "center",
   "mode": "push",
   "toolTipFontStyle": "normal",
   "width": 30,
   "toolTipDisplayTime": 600,
   "iconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411.png",
   "height": 30,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipPaddingBottom": 4,
   "rollOverIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_rollover.png",
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipTextShadowOpacity": 0,
   "paddingBottom": 0,
   "toolTipShadowHorizontalLength": 0,
   "toolTipFontColor": "#606060",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_pressed.png",
   "toolTipFontSize": 12,
   "transparencyActive": false,
   "minWidth": 0,
   "toolTipFontWeight": "normal",
   "cursor": "hand",
   "borderSize": 0,
   "toolTipBorderRadius": 3,
   "toolTipShadowOpacity": 1,
   "borderRadius": 0,
   "id": "IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411",
   "toolTipFontFamily": "Arial",
   "data": {
    "name": "Button1208"
   },
   "verticalAlign": "middle",
   "minHeight": 0,
   "toolTip": "Zoom In",
   "toolTipPaddingRight": 6,
   "toolTipOpacity": 1,
   "toolTipPaddingLeft": 6,
   "toolTipShadowSpread": 0,
   "paddingRight": 0,
   "backgroundOpacity": 0,
   "toolTipBorderColor": "#767676",
   "toolTipShadowVerticalLength": 0,
   "toolTipBorderSize": 1,
   "paddingTop": 0,
   "toolTipShadowColor": "#333333",
   "toolTipPaddingTop": 4,
   "toolTipTextShadowColor": "#000000"
  },
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "class": "MapPlayer",
  "id": "MapViewerMapPlayer",
  "movementMode": "constrained",
  "viewerArea": {
   "class": "ViewerArea",
   "progressBackgroundColorDirection": "vertical",
   "toolTipShadowBlurRadius": 3,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "toolTipFontStyle": "normal",
   "playbackBarProgressBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "toolTipDisplayTime": 600,
   "progressBorderRadius": 4,
   "playbackBarBorderRadius": 4,
   "playbackBarProgressBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipPaddingBottom": 4,
   "toolTipTextShadowColor": "#000000",
   "progressBarBorderRadius": 4,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "progressHeight": 20,
   "paddingBottom": 0,
   "shadow": false,
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadShadowBlurRadius": 3,
   "progressBorderSize": 2,
   "playbackBarHeadShadowOpacity": 0.7,
   "progressBottom": 2,
   "transitionDuration": 500,
   "toolTipBorderRadius": 3,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipShadowOpacity": 1,
   "toolTipFontFamily": "Arial",
   "toolTipOpacity": 1,
   "toolTipPaddingRight": 6,
   "playbackBarHeadBorderSize": 0,
   "playbackBarOpacity": 1,
   "minHeight": 1,
   "progressBackgroundOpacity": 1,
   "progressBarOpacity": 1,
   "paddingTop": 0,
   "toolTipBorderColor": "#767676",
   "toolTipShadowVerticalLength": 0,
   "toolTipBorderSize": 1,
   "paddingRight": 0,
   "toolTipShadowColor": "#333333",
   "paddingLeft": 0,
   "playbackBarHeadBorderColor": "#000000",
   "toolTipPaddingTop": 4,
   "progressBarBackgroundColorDirection": "vertical",
   "playbackBarHeadBorderRadius": 0,
   "toolTipShadowHorizontalLength": 0,
   "progressOpacity": 1,
   "playbackBarHeadShadow": true,
   "progressBackgroundColorRatios": [
    0,
    1
   ],
   "width": "100%",
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarLeft": 0,
   "progressRight": 10,
   "playbackBarProgressBorderRadius": 0,
   "playbackBarHeadHeight": 30,
   "transitionMode": "blending",
   "playbackBarHeadShadowColor": "#000000",
   "progressBarBorderSize": 1,
   "height": "100%",
   "toolTipBackgroundColor": "#F6F6F6",
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarRight": 0,
   "toolTipTextShadowOpacity": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "toolTipFontColor": "#606060",
   "progressBarBackgroundColorRatios": [
    0,
    1
   ],
   "progressBarBorderColor": "#000000",
   "toolTipFontSize": 12,
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarBackgroundOpacity": 1,
   "playbackBarHeadWidth": 6,
   "minWidth": 1,
   "playbackBarBorderSize": 2,
   "playbackBarHeight": 20,
   "top": "0%",
   "playbackBarBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "progressBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "playbackBarHeadOpacity": 1,
   "toolTipFontWeight": "normal",
   "borderSize": 0,
   "borderRadius": 0,
   "id": "MapViewer",
   "progressBarBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "playbackBarProgressOpacity": 1,
   "playbackBarBorderColor": "#AAAAAA",
   "progressLeft": 10,
   "left": "0%",
   "toolTipShadowSpread": 0,
   "progressBorderColor": "#AAAAAA",
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarBottom": 0,
   "toolTipPaddingLeft": 6
  },
  "buttonZoomOut": "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
  "buttonZoomIn": "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"
 },
 {
  "class": "PanoramaCamera",
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_E140AF6F_F7B1_EF08_41E8_EFB0BFC94EC7_camera",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -152.33,
   "pitch": -4.6
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -41.07,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -4.21,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_EC7E60FB_F7B3_3108_41C3_4A9D2F8A043B_t.jpg",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_EC7E60FB_F7B3_3108_41C3_4A9D2F8A043B_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_EC7E60FB_F7B3_3108_41C3_4A9D2F8A043B",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Bedroom 2",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 755.62,
    "x": 2713.13,
    "angle": -44.6,
    "map": "this.map_EB178670_F773_7117_41ED_54ECCBB77C9B"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_EC7E60FB_F7B3_3108_41C3_4A9D2F8A043B_camera",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 56.93,
   "pitch": -18.19
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -56.78,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -10.36,
     "pitchSpeed": 17.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 61.67,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -10.61,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_EDB9248F_F7B1_3108_41E2_056506CC9C0B_t.jpg",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_EDB9248F_F7B1_3108_41E2_056506CC9C0B_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_EDB9248F_F7B1_3108_41E2_056506CC9C0B",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Living Room",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 432.38,
    "x": 2317.88,
    "angle": -19.77,
    "map": "this.map_EB178670_F773_7117_41ED_54ECCBB77C9B"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_EDB9248F_F7B1_3108_41E2_056506CC9C0B_camera",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -97.1,
   "pitch": -3.08
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 50.12,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -5.46,
     "pitchSpeed": 17.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -83.28,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -8.1,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfov": 360,
  "class": "LivePanorama",
  "thumbnailUrl": "media/panorama_EDB6C73F_F7B1_1F09_41D4_F09420644E4C_1_t.jpg",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_EDB6C73F_F7B1_1F09_41D4_F09420644E4C_0_t.jpg"
   },
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_EDB6C73F_F7B1_1F09_41D4_F09420644E4C_1_t.jpg"
   },
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_EDB6C73F_F7B1_1F09_41D4_F09420644E4C_2_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_EDB6C73F_F7B1_1F09_41D4_F09420644E4C",
  "partial": false,
  "frameDisplayTime": 3000,
  "pitch": 0,
  "hfovMax": 120,
  "frameTransitionTime": 1000,
  "label": "Kitchen",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 277.47,
    "x": 1724.42,
    "angle": -32.14,
    "map": "this.map_EB178670_F773_7117_41ED_54ECCBB77C9B"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_EDB6C73F_F7B1_1F09_41D4_F09420644E4C_camera",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 125.42,
   "pitch": -18.56
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 156.39,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -2.2,
     "pitchSpeed": 17.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -48.23,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -4.33,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_EDE39825_F7B7_3139_41D0_DE74487240B0_t.jpg",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_EDE39825_F7B7_3139_41D0_DE74487240B0_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_EDE39825_F7B7_3139_41D0_DE74487240B0",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Laundry Room",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 259.65,
    "x": 1096.23,
    "angle": -45.7,
    "map": "this.map_EB178670_F773_7117_41ED_54ECCBB77C9B"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_EDE39825_F7B7_3139_41D0_DE74487240B0_camera",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 123.59,
   "pitch": -12.17
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 131.01,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -0.06,
     "pitchSpeed": 17.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -51.75,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -9.23,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfov": 360,
  "class": "LivePanorama",
  "thumbnailUrl": "media/panorama_EDF06F2E_F7B7_2F08_41E8_870DEB81C854_1_t.jpg",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_EDF06F2E_F7B7_2F08_41E8_870DEB81C854_0_t.jpg"
   },
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_EDF06F2E_F7B7_2F08_41E8_870DEB81C854_1_t.jpg"
   },
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_EDF06F2E_F7B7_2F08_41E8_870DEB81C854_2_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_EDF06F2E_F7B7_2F08_41E8_870DEB81C854",
  "partial": false,
  "frameDisplayTime": 3000,
  "pitch": 0,
  "hfovMax": 120,
  "frameTransitionTime": 1000,
  "label": "Bathroom",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 246.91,
    "x": 832.03,
    "angle": -32.78,
    "map": "this.map_EB178670_F773_7117_41ED_54ECCBB77C9B"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 124.73,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -0.69,
     "pitchSpeed": 17.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -161.41,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -14.01,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_EDF06F2E_F7B7_2F08_41E8_870DEB81C854_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 20.74,
   "pitch": -16.33
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_ED6A409D_F7B1_7108_41E8_BACD5A91FBD2_t.jpg",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_ED6A409D_F7B1_7108_41E8_BACD5A91FBD2_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_ED6A409D_F7B1_7108_41E8_BACD5A91FBD2",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Master Bedroom",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 810.27,
    "x": 814.2,
    "angle": -33.27,
    "map": "this.map_EB178670_F773_7117_41ED_54ECCBB77C9B"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_ED6A409D_F7B1_7108_41E8_BACD5A91FBD2_camera",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 38.73,
   "pitch": -9.28
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 122.22,
     "path": "longest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -13.75,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfov": 360,
  "class": "LivePanorama",
  "thumbnailUrl": "media/panorama_ED61A5D3_F7B3_1318_41D6_3C9656E8C7F2_1_t.jpg",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_ED61A5D3_F7B3_1318_41D6_3C9656E8C7F2_0_t.jpg"
   },
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_ED61A5D3_F7B3_1318_41D6_3C9656E8C7F2_1_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_ED61A5D3_F7B3_1318_41D6_3C9656E8C7F2",
  "partial": false,
  "frameDisplayTime": 3000,
  "pitch": 0,
  "hfovMax": 120,
  "frameTransitionTime": 1000,
  "label": "Utility",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 769.98,
    "x": 1099.47,
    "angle": -38.8,
    "map": "this.map_EB178670_F773_7117_41ED_54ECCBB77C9B"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 123.85,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -10.11,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_ED61A5D3_F7B3_1318_41D6_3C9656E8C7F2_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -41.99,
   "pitch": -13.25
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "LivePanorama",
  "thumbnailUrl": "media/panorama_ED38E020_F7B1_F138_41CB_5329FB12DFE7_1_t.jpg",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_ED38E020_F7B1_F138_41CB_5329FB12DFE7_0_t.jpg"
   },
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_ED38E020_F7B1_F138_41CB_5329FB12DFE7_1_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_ED38E020_F7B1_F138_41CB_5329FB12DFE7",
  "partial": false,
  "frameDisplayTime": 3000,
  "pitch": 0,
  "hfovMax": 120,
  "frameTransitionTime": 1000,
  "label": "Kitchen",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 669.02,
    "x": 1736,
    "angle": -31.6,
    "map": "this.map_EB178670_F773_7117_41ED_54ECCBB77C9B"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -39.57,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -7.47,
     "pitchSpeed": 17.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 124.73,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -6.47,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_ED38E020_F7B1_F138_41CB_5329FB12DFE7_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 5.39,
   "pitch": -12.3
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Video",
  "scaleMode": "fit_inside",
  "label": "Tempo -Layla Drone Video (720p)",
  "thumbnailUrl": "media/video_DA28C0EA_F991_3108_41E8_9FCDA6E8D5C3_t.jpg",
  "video": {
   "height": 720,
   "class": "VideoResource",
   "mp4Url": "media/video_DA28C0EA_F991_3108_41E8_9FCDA6E8D5C3.mp4",
   "width": 1280
  },
  "width": 1280,
  "id": "video_DA28C0EA_F991_3108_41E8_9FCDA6E8D5C3",
  "loop": false,
  "height": 720
 },
 {
  "class": "VideoPlayer",
  "id": "MainViewerVideoPlayer",
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "buttonRestart": "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
  "buttonPause": "this.IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D"
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_DD0AABFD_F9F3_7708_41D3_0C53D83B5C12_t.jpg",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_DD0AABFD_F9F3_7708_41D3_0C53D83B5C12_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_DD0AABFD_F9F3_7708_41D3_0C53D83B5C12.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_DD0AABFD_F9F3_7708_41D3_0C53D83B5C12_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_DD0AABFD_F9F3_7708_41D3_0C53D83B5C12",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Rendering Sphere",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 481.93,
    "x": 1943.93,
    "angle": 416.65,
    "map": "this.map_EB178670_F773_7117_41ED_54ECCBB77C9B"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 157.26,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -8.48,
     "pitchSpeed": 17.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -136.04,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.71,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_DD0AABFD_F9F3_7708_41D3_0C53D83B5C12_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -148.81,
   "pitch": -2.91
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_F6369E75_F8E3_71BB_41DB_384828AEB1DE_t.jpg",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_F6369E75_F8E3_71BB_41DB_384828AEB1DE_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_F6369E75_F8E3_71BB_41DB_384828AEB1DE.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_F6369E75_F8E3_71BB_41DB_384828AEB1DE_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_F6369E75_F8E3_71BB_41DB_384828AEB1DE",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Layla Bedroom",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 659.07,
    "x": 816.06,
    "angle": -88.43,
    "map": "this.map_EB178670_F773_7117_41ED_54ECCBB77C9B"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 24.87,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -5.59,
     "pitchSpeed": 17.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -154.38,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -13.13,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_F6369E75_F8E3_71BB_41DB_384828AEB1DE_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_0A09C351_06D1_60DB_4188_34912AEE6F65",
    "media": "this.panorama_E140AF6F_F7B1_EF08_41E8_EFB0BFC94EC7",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0A09C351_06D1_60DB_4188_34912AEE6F65, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E140AF6F_F7B1_EF08_41E8_EFB0BFC94EC7_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_0A326354_06D1_60D9_4193_EB7AA3AF6C8A",
    "media": "this.panorama_EC7E60FB_F7B3_3108_41C3_4A9D2F8A043B",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0A326354_06D1_60D9_4193_EB7AA3AF6C8A, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_EC7E60FB_F7B3_3108_41C3_4A9D2F8A043B_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_0A328354_06D1_60D9_4193_2F1C6E85DC2A",
    "media": "this.panorama_EDB9248F_F7B1_3108_41E2_056506CC9C0B",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0A328354_06D1_60D9_4193_2F1C6E85DC2A, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_EDB9248F_F7B1_3108_41E2_056506CC9C0B_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_0A310354_06D1_60D9_418A_AB5687D6FD8E",
    "media": "this.panorama_EDB6C73F_F7B1_1F09_41D4_F09420644E4C",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0A310354_06D1_60D9_418A_AB5687D6FD8E, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_EDB6C73F_F7B1_1F09_41D4_F09420644E4C_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_0A31B354_06D1_60D9_4198_BFF00808A81A",
    "media": "this.panorama_EDE39825_F7B7_3139_41D0_DE74487240B0",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0A31B354_06D1_60D9_4198_BFF00808A81A, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_EDE39825_F7B7_3139_41D0_DE74487240B0_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_0A301354_06D1_60D9_416C_80AB3941A32D",
    "media": "this.panorama_EDF06F2E_F7B7_2F08_41E8_870DEB81C854",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0A301354_06D1_60D9_416C_80AB3941A32D, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_EDF06F2E_F7B7_2F08_41E8_870DEB81C854_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_0A30B354_06D1_60D9_414A_DDCE646167C0",
    "media": "this.panorama_ED6A409D_F7B1_7108_41E8_BACD5A91FBD2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0A30B354_06D1_60D9_414A_DDCE646167C0, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_ED6A409D_F7B1_7108_41E8_BACD5A91FBD2_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_0A318354_06D1_60D9_4194_879213F046D8",
    "media": "this.panorama_ED61A5D3_F7B3_1318_41D6_3C9656E8C7F2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0A318354_06D1_60D9_4194_879213F046D8, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_ED61A5D3_F7B3_1318_41D6_3C9656E8C7F2_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_0A302356_06D1_60D9_4186_0405256F8C34",
    "media": "this.panorama_ED38E020_F7B1_F138_41CB_5329FB12DFE7",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0A302356_06D1_60D9_4186_0405256F8C34, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_ED38E020_F7B1_F138_41CB_5329FB12DFE7_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_DA28C0EA_F991_3108_41E8_9FCDA6E8D5C3",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 9, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 9, this.video_DA28C0EA_F991_3108_41E8_9FCDA6E8D5C3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_0A368356_06D1_60D9_4185_B8D3EA530E87",
    "media": "this.panorama_DD0AABFD_F9F3_7708_41D3_0C53D83B5C12",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0A368356_06D1_60D9_4185_B8D3EA530E87, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_DD0AABFD_F9F3_7708_41D3_0C53D83B5C12_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_0A353356_06D1_60D9_4197_7AFCEAFD1C64",
    "media": "this.panorama_F6369E75_F8E3_71BB_41DB_384828AEB1DE",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0A353356_06D1_60D9_4197_7AFCEAFD1C64, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F6369E75_F8E3_71BB_41DB_384828AEB1DE_camera",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 0)"
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
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)",
    "camera": "this.panorama_E140AF6F_F7B1_EF08_41E8_EFB0BFC94EC7_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EC7E60FB_F7B3_3108_41C3_4A9D2F8A043B",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)",
    "camera": "this.panorama_EC7E60FB_F7B3_3108_41C3_4A9D2F8A043B_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EDB9248F_F7B1_3108_41E2_056506CC9C0B",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)",
    "camera": "this.panorama_EDB9248F_F7B1_3108_41E2_056506CC9C0B_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EDB6C73F_F7B1_1F09_41D4_F09420644E4C",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)",
    "camera": "this.panorama_EDB6C73F_F7B1_1F09_41D4_F09420644E4C_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EDE39825_F7B7_3139_41D0_DE74487240B0",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)",
    "camera": "this.panorama_EDE39825_F7B7_3139_41D0_DE74487240B0_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EDF06F2E_F7B7_2F08_41E8_870DEB81C854",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 6)",
    "camera": "this.panorama_EDF06F2E_F7B7_2F08_41E8_870DEB81C854_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_ED6A409D_F7B1_7108_41E8_BACD5A91FBD2",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 6, 7)",
    "camera": "this.panorama_ED6A409D_F7B1_7108_41E8_BACD5A91FBD2_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_ED61A5D3_F7B3_1318_41D6_3C9656E8C7F2",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 7, 8)",
    "camera": "this.panorama_ED61A5D3_F7B3_1318_41D6_3C9656E8C7F2_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_ED38E020_F7B1_F138_41CB_5329FB12DFE7",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 8, 9)",
    "camera": "this.panorama_ED38E020_F7B1_F138_41CB_5329FB12DFE7_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_DA28C0EA_F991_3108_41E8_9FCDA6E8D5C3",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.thumbnaillist5245_playlist, 9, 10)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.thumbnaillist5245_playlist, 9, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.thumbnaillist5245_playlist, 9, this.video_DA28C0EA_F991_3108_41E8_9FCDA6E8D5C3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DD0AABFD_F9F3_7708_41D3_0C53D83B5C12",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 10, 11)",
    "camera": "this.panorama_DD0AABFD_F9F3_7708_41D3_0C53D83B5C12_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6369E75_F8E3_71BB_41DB_384828AEB1DE",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 11, 0)",
    "camera": "this.panorama_F6369E75_F8E3_71BB_41DB_384828AEB1DE_camera"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_DA28C0EA_F991_3108_41E8_9FCDA6E8D5C3",
    "player": "this.MainViewerVideoPlayer",
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
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 0, 1)",
    "camera": "this.panorama_E140AF6F_F7B1_EF08_41E8_EFB0BFC94EC7_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EC7E60FB_F7B3_3108_41C3_4A9D2F8A043B",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 1, 2)",
    "camera": "this.panorama_EC7E60FB_F7B3_3108_41C3_4A9D2F8A043B_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EDB9248F_F7B1_3108_41E2_056506CC9C0B",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 2, 3)",
    "camera": "this.panorama_EDB9248F_F7B1_3108_41E2_056506CC9C0B_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EDB6C73F_F7B1_1F09_41D4_F09420644E4C",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 3, 4)",
    "camera": "this.panorama_EDB6C73F_F7B1_1F09_41D4_F09420644E4C_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EDE39825_F7B7_3139_41D0_DE74487240B0",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 4, 5)",
    "camera": "this.panorama_EDE39825_F7B7_3139_41D0_DE74487240B0_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EDF06F2E_F7B7_2F08_41E8_870DEB81C854",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 5, 6)",
    "camera": "this.panorama_EDF06F2E_F7B7_2F08_41E8_870DEB81C854_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_ED6A409D_F7B1_7108_41E8_BACD5A91FBD2",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 6, 7)",
    "camera": "this.panorama_ED6A409D_F7B1_7108_41E8_BACD5A91FBD2_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_ED61A5D3_F7B3_1318_41D6_3C9656E8C7F2",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 7, 8)",
    "camera": "this.panorama_ED61A5D3_F7B3_1318_41D6_3C9656E8C7F2_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_ED38E020_F7B1_F138_41CB_5329FB12DFE7",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 8, 9)",
    "camera": "this.panorama_ED38E020_F7B1_F138_41CB_5329FB12DFE7_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_DA28C0EA_F991_3108_41E8_9FCDA6E8D5C3",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 9, 10)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 9, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 9, this.video_DA28C0EA_F991_3108_41E8_9FCDA6E8D5C3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DD0AABFD_F9F3_7708_41D3_0C53D83B5C12",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 10, 11)",
    "camera": "this.panorama_DD0AABFD_F9F3_7708_41D3_0C53D83B5C12_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6369E75_F8E3_71BB_41DB_384828AEB1DE",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 11, 0)",
    "camera": "this.panorama_F6369E75_F8E3_71BB_41DB_384828AEB1DE_camera"
   }
  ]
 },
 "this.map_EB178670_F773_7117_41ED_54ECCBB77C9B",
 {
  "class": "PlayList",
  "id": "playList_0A04434C_06D1_60C9_4190_FB2C4BD35106",
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
  "id": "playList_0A04634C_06D1_60C9_4193_949582B2525A",
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
  "class": "MediaAudio",
  "id": "audio_DDEFFE5C_F991_F108_41CE_F98239658AAB",
  "autoplay": true,
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_DDEFFE5C_F991_F108_41CE_F98239658AAB.mp3",
   "oggUrl": "media/audio_DDEFFE5C_F991_F108_41CE_F98239658AAB.ogg"
  },
  "data": {
   "label": "Through the door, the light pours in,"
  }
 }
], "children": [
 {
  "class": "ViewerArea",
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipFontStyle": "normal",
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipDisplayTime": 600,
  "progressBorderRadius": 4,
  "playbackBarBorderRadius": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipTextShadowColor": "#000000",
  "progressBarBorderRadius": 4,
  "toolTipPaddingBottom": 4,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressHeight": 20,
  "paddingBottom": 0,
  "shadow": false,
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBorderSize": 2,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBottom": 1,
  "transitionDuration": 500,
  "toolTipBorderRadius": 3,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipShadowOpacity": 1,
  "toolTipFontFamily": "Arial",
  "toolTipOpacity": 1,
  "toolTipPaddingRight": 6,
  "playbackBarHeadBorderSize": 0,
  "playbackBarOpacity": 1,
  "minHeight": 50,
  "progressBackgroundOpacity": 1,
  "progressBarOpacity": 1,
  "paddingTop": 0,
  "toolTipBorderColor": "#767676",
  "toolTipShadowVerticalLength": 0,
  "toolTipBorderSize": 1,
  "paddingRight": 0,
  "toolTipShadowColor": "#333333",
  "paddingLeft": 0,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipPaddingTop": 4,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowHorizontalLength": 0,
  "progressOpacity": 1,
  "playbackBarHeadShadow": true,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarLeft": 0,
  "progressRight": 10,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadHeight": 30,
  "transitionMode": "blending",
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBarBorderSize": 1,
  "playbackBarRight": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipFontColor": "#606060",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBorderColor": "#000000",
  "toolTipFontSize": 12,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadWidth": 6,
  "minWidth": 100,
  "playbackBarBorderSize": 2,
  "playbackBarHeight": 20,
  "top": 77,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipPaddingLeft": 6,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "borderRadius": 0,
  "id": "MainViewer",
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarBorderColor": "#AAAAAA",
  "progressLeft": 10,
  "left": 0,
  "progressBorderColor": "#AAAAAA",
  "playbackBarProgressBorderColor": "#000000",
  "right": 0,
  "toolTipShadowSpread": 0,
  "bottom": 92,
  "playbackBarBottom": 10
 },
 {
  "class": "ThumbnailList",
  "scrollBarVisible": "rollOver",
  "horizontalAlign": "left",
  "backgroundColor": [
   "#000000"
  ],
  "itemThumbnailShadowBlurRadius": 4,
  "selectedItemLabelFontWeight": "bold",
  "selectedItemLabelFontColor": "#FFFF00",
  "layout": "vertical",
  "itemThumbnailShadowOpacity": 0.8,
  "paddingBottom": 10,
  "shadow": false,
  "itemVerticalAlign": "middle",
  "itemThumbnailShadowHorizontalLength": 3,
  "rollOverItemLabelFontWeight": "bold",
  "minHeight": 0,
  "itemLabelTextDecoration": "none",
  "itemLabelFontWeight": "normal",
  "itemBackgroundOpacity": 0,
  "itemLabelHorizontalAlign": "center",
  "itemLabelFontSize": 14,
  "itemThumbnailHeight": 70,
  "itemThumbnailScaleMode": "fit_outside",
  "maxHeight": 800,
  "paddingTop": 10,
  "itemPaddingBottom": 3,
  "paddingLeft": 20,
  "paddingRight": 20,
  "itemThumbnailShadowVerticalLength": 3,
  "itemPaddingTop": 3,
  "scrollBarColor": "#FFFFFF",
  "itemLabelGap": 8,
  "width": 158.5,
  "itemLabelFontFamily": "Arial",
  "playList": "this.thumbnaillist5245_playlist",
  "itemPaddingRight": 3,
  "itemLabelFontColor": "#FFFFFF",
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailShadowColor": "#000000",
  "itemThumbnailBorderRadius": 5,
  "scrollBarWidth": 10,
  "itemMode": "normal",
  "scrollBarMargin": 2,
  "minWidth": 0,
  "itemHorizontalAlign": "center",
  "top": "8.02%",
  "maxWidth": 800,
  "itemOpacity": 1,
  "borderSize": 0,
  "borderRadius": 5,
  "id": "thumbnaillist5245",
  "rollOverItemLabelFontColor": "#FF0000",
  "itemBorderRadius": 0,
  "verticalAlign": "top",
  "backgroundColorDirection": "vertical",
  "itemLabelFontStyle": "normal",
  "itemBackgroundColor": [],
  "data": {
   "name": "ThumbnailList28173"
  },
  "itemThumbnailShadowSpread": 1,
  "backgroundOpacity": 0.2,
  "itemThumbnailShadow": true,
  "itemThumbnailWidth": 100,
  "scrollBarOpacity": 0.5,
  "gap": 0,
  "itemThumbnailOpacity": 1,
  "bottom": "10.1%",
  "itemPaddingLeft": 3,
  "right": "0%",
  "itemBackgroundColorRatios": [],
  "backgroundColorRatios": [
   0
  ],
  "itemLabelPosition": "bottom"
 },
 {
  "class": "Container",
  "paddingLeft": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "horizontalAlign": "center",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "scrollBarColor": "#000000",
  "width": "100%",
  "height": 92,
  "children": [
   {
    "class": "Label",
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "fontSize": 40,
    "width": 374,
    "textDecoration": "none",
    "fontFamily": "Arial",
    "text": "Tempo / Layla",
    "paddingBottom": 0,
    "shadow": false,
    "fontWeight": "bold",
    "fontStyle": "normal",
    "minWidth": 30,
    "fontColor": "#666666",
    "borderSize": 0,
    "borderRadius": 0,
    "id": "label4056",
    "data": {
     "name": "Label28174"
    },
    "verticalAlign": "middle",
    "minHeight": 16,
    "paddingRight": 0,
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "height": "100%"
   },
   {
    "class": "Container",
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "backgroundColor": [
     "#FFFFFF"
    ],
    "scrollBarColor": "#000000",
    "width": 805.5,
    "height": "93.478%",
    "children": [
     {
      "class": "IconButton",
      "paddingLeft": 0,
      "toolTipShadowBlurRadius": 3,
      "horizontalAlign": "center",
      "mode": "toggle",
      "toolTipFontStyle": "normal",
      "width": 40,
      "toolTipDisplayTime": 600,
      "iconURL": "skin/IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75.png",
      "height": 40,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipPaddingBottom": 4,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipTextShadowOpacity": 0,
      "paddingBottom": 0,
      "toolTipShadowHorizontalLength": 0,
      "toolTipFontColor": "#606060",
      "shadow": false,
      "pressedIconURL": "skin/IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75_pressed.png",
      "toolTipFontSize": 12,
      "transparencyActive": true,
      "minWidth": 0,
      "toolTipFontWeight": "normal",
      "cursor": "hand",
      "borderSize": 0,
      "toolTipBorderRadius": 3,
      "toolTipShadowOpacity": 1,
      "borderRadius": 0,
      "id": "IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75",
      "toolTipFontFamily": "Arial",
      "data": {
       "name": "Button49930"
      },
      "verticalAlign": "middle",
      "minHeight": 0,
      "toolTip": "Mute",
      "toolTipPaddingRight": 6,
      "toolTipOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipShadowSpread": 0,
      "paddingRight": 0,
      "backgroundOpacity": 0,
      "toolTipBorderColor": "#767676",
      "toolTipShadowVerticalLength": 0,
      "toolTipBorderSize": 1,
      "paddingTop": 0,
      "toolTipShadowColor": "#333333",
      "toolTipPaddingTop": 4,
      "toolTipTextShadowColor": "#000000"
     },
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
     {
      "class": "Container",
      "paddingLeft": 0,
      "horizontalAlign": "center",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "scrollBarColor": "#000000",
      "width": 133,
      "height": "100%",
      "children": [
       {
        "class": "Container",
        "paddingLeft": 0,
        "horizontalAlign": "center",
        "backgroundColor": [
         "#FFFFFF"
        ],
        "scrollBarColor": "#000000",
        "width": 47,
        "height": "100%",
        "children": [
         "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247"
        ],
        "backgroundColorRatios": [
         0
        ],
        "layout": "vertical",
        "scrollBarVisible": "rollOver",
        "paddingBottom": 0,
        "scrollBarWidth": 10,
        "shadow": false,
        "scrollBarMargin": 2,
        "minWidth": 20,
        "borderSize": 0,
        "borderRadius": 0,
        "id": "Container_4EEC4AA5_5E2B_1FC1_41B6_F59E8DCAC55A",
        "data": {
         "name": "Container1202"
        },
        "verticalAlign": "middle",
        "minHeight": 20,
        "backgroundColorDirection": "vertical",
        "paddingTop": 0,
        "backgroundOpacity": 1,
        "scrollBarOpacity": 0.5,
        "creationPolicy": "inAdvance",
        "paddingRight": 0,
        "gap": 10,
        "contentOpaque": false,
        "overflow": "hidden"
       },
       "this.IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40"
      ],
      "backgroundColorRatios": [
       0
      ],
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "paddingBottom": 0,
      "scrollBarWidth": 10,
      "shadow": false,
      "scrollBarMargin": 2,
      "minWidth": 20,
      "borderSize": 0,
      "borderRadius": 0,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41C0_26F0681CF137",
      "data": {
       "name": "Container1200"
      },
      "verticalAlign": "middle",
      "minHeight": 20,
      "backgroundColorDirection": "vertical",
      "paddingTop": 0,
      "backgroundOpacity": 1,
      "scrollBarOpacity": 0.5,
      "creationPolicy": "inAdvance",
      "paddingRight": 0,
      "gap": 5,
      "contentOpaque": false,
      "overflow": "hidden"
     },
     {
      "class": "Container",
      "paddingLeft": 0,
      "horizontalAlign": "center",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "scrollBarColor": "#000000",
      "width": 85,
      "height": "100%",
      "children": [
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
       "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"
      ],
      "backgroundColorRatios": [
       0
      ],
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "paddingBottom": 0,
      "scrollBarWidth": 10,
      "shadow": false,
      "scrollBarMargin": 2,
      "minWidth": 20,
      "borderSize": 0,
      "borderRadius": 0,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41D4_9B4DE1B45BE3",
      "data": {
       "name": "Container1206"
      },
      "verticalAlign": "middle",
      "minHeight": 20,
      "backgroundColorDirection": "vertical",
      "paddingTop": 0,
      "backgroundOpacity": 1,
      "scrollBarOpacity": 0.5,
      "creationPolicy": "inAdvance",
      "paddingRight": 0,
      "gap": 10,
      "contentOpaque": false,
      "overflow": "hidden"
     }
    ],
    "backgroundColorRatios": [
     0
    ],
    "layout": "horizontal",
    "scrollBarVisible": "rollOver",
    "paddingBottom": 0,
    "scrollBarWidth": 10,
    "shadow": false,
    "scrollBarMargin": 2,
    "minWidth": 468,
    "borderSize": 0,
    "borderRadius": 0,
    "id": "Container_4EEC4AA6_5E2B_1FC3_41CE_536DE679C718",
    "data": {
     "name": "Container1194"
    },
    "verticalAlign": "middle",
    "minHeight": 20,
    "backgroundColorDirection": "vertical",
    "paddingTop": 0,
    "backgroundOpacity": 1,
    "scrollBarOpacity": 0.5,
    "creationPolicy": "inAdvance",
    "paddingRight": 0,
    "gap": 10,
    "contentOpaque": false,
    "overflow": "hidden"
   },
   {
    "class": "ThumbnailList",
    "paddingTop": 10,
    "horizontalAlign": "left",
    "itemThumbnailShadowVerticalLength": 3,
    "itemPaddingTop": 3,
    "scrollBarColor": "#FFFFFF",
    "itemLabelGap": 1,
    "playList": "this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist",
    "itemThumbnailShadowBlurRadius": 8,
    "height": 92,
    "width": "28.046%",
    "itemPaddingRight": 3,
    "selectedItemLabelFontWeight": "bold",
    "itemLabelFontFamily": "Arial",
    "layout": "horizontal",
    "itemThumbnailShadowColor": "#000000",
    "scrollBarWidth": 10,
    "itemBackgroundColorDirection": "vertical",
    "itemThumbnailShadowOpacity": 0.54,
    "paddingBottom": 10,
    "rollOverItemBackgroundOpacity": 0,
    "itemThumbnailShadowHorizontalLength": 3,
    "itemMode": "normal",
    "itemVerticalAlign": "middle",
    "scrollBarMargin": 2,
    "shadow": false,
    "itemThumbnailBorderRadius": 2,
    "rollOverItemLabelFontWeight": "bold",
    "itemHorizontalAlign": "center",
    "rollOverItemLabelFontColor": "#003399",
    "minWidth": 20,
    "itemOpacity": 1,
    "borderSize": 0,
    "borderRadius": 5,
    "itemLabelFontColor": "#000000",
    "itemBorderRadius": 0,
    "verticalAlign": "top",
    "minHeight": 20,
    "itemThumbnailShadow": true,
    "id": "ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965",
    "itemLabelFontStyle": "normal",
    "itemBackgroundColor": [],
    "itemLabelFontWeight": "normal",
    "itemThumbnailShadowSpread": 1,
    "backgroundOpacity": 0,
    "itemBackgroundOpacity": 0,
    "itemLabelHorizontalAlign": "center",
    "itemLabelTextDecoration": "none",
    "data": {
     "name": "ThumbnailList35762"
    },
    "itemLabelFontSize": 14,
    "itemThumbnailHeight": 36,
    "scrollBarOpacity": 0.5,
    "gap": 13,
    "itemThumbnailOpacity": 1,
    "itemThumbnailWidth": 94,
    "selectedItemLabelFontColor": "#FFCC00",
    "paddingRight": 20,
    "itemPaddingLeft": 3,
    "itemPaddingBottom": 3,
    "itemThumbnailScaleMode": "fit_outside",
    "paddingLeft": 20,
    "scrollBarVisible": "always",
    "itemLabelPosition": "top",
    "itemBackgroundColorRatios": []
   },
   {
    "class": "ThumbnailList",
    "paddingTop": 10,
    "horizontalAlign": "left",
    "itemThumbnailShadowVerticalLength": 3,
    "itemPaddingTop": 3,
    "scrollBarColor": "#FFFFFF",
    "itemLabelGap": 8,
    "playList": "this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist",
    "itemThumbnailShadowBlurRadius": 8,
    "height": 82.5,
    "width": "26.327%",
    "itemPaddingRight": 3,
    "selectedItemLabelFontWeight": "bold",
    "itemLabelFontFamily": "Arial",
    "layout": "horizontal",
    "itemThumbnailShadowColor": "#000000",
    "scrollBarWidth": 10,
    "itemBackgroundColorDirection": "vertical",
    "itemThumbnailShadowOpacity": 0.57,
    "paddingBottom": 10,
    "selectedItemLabelFontColor": "#FFCC00",
    "itemThumbnailShadowHorizontalLength": 3,
    "itemMode": "normal",
    "itemVerticalAlign": "middle",
    "scrollBarMargin": 2,
    "shadow": false,
    "itemThumbnailBorderRadius": 5,
    "rollOverItemLabelFontWeight": "bold",
    "itemHorizontalAlign": "center",
    "minWidth": 1,
    "itemOpacity": 1,
    "borderSize": 0,
    "borderRadius": 5,
    "itemLabelFontColor": "#FFFFFF",
    "itemBorderRadius": 0,
    "verticalAlign": "top",
    "minHeight": 1,
    "visible": false,
    "id": "ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B",
    "itemLabelFontStyle": "normal",
    "itemBackgroundColor": [],
    "itemLabelFontWeight": "normal",
    "itemThumbnailShadowSpread": 1,
    "backgroundOpacity": 0,
    "itemBackgroundOpacity": 0,
    "itemLabelHorizontalAlign": "center",
    "itemLabelTextDecoration": "none",
    "data": {
     "name": "ThumbnailList35762"
    },
    "itemLabelFontSize": 14,
    "itemThumbnailHeight": 75,
    "scrollBarOpacity": 0.5,
    "gap": 13,
    "itemThumbnailShadow": true,
    "itemThumbnailWidth": 100,
    "paddingRight": 20,
    "itemPaddingLeft": 3,
    "itemPaddingBottom": 3,
    "itemThumbnailScaleMode": "fit_outside",
    "itemThumbnailOpacity": 1,
    "paddingLeft": 20,
    "scrollBarVisible": "rollOver",
    "itemLabelPosition": "bottom",
    "itemBackgroundColorRatios": []
   }
  ],
  "scrollBarVisible": "rollOver",
  "layout": "horizontal",
  "paddingBottom": 0,
  "scrollBarWidth": 10,
  "shadow": false,
  "scrollBarMargin": 2,
  "minWidth": 1,
  "borderSize": 0,
  "borderRadius": 0,
  "data": {
   "name": "Container29432"
  },
  "verticalAlign": "middle",
  "minHeight": 1,
  "backgroundColorDirection": "vertical",
  "paddingTop": 0,
  "backgroundOpacity": 0.3,
  "left": "0%",
  "creationPolicy": "inAdvance",
  "paddingRight": 0,
  "scrollBarOpacity": 0.5,
  "gap": 6,
  "bottom": "0%",
  "contentOpaque": false,
  "overflow": "scroll"
 },
 {
  "class": "Image",
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "width": "9.198%",
  "height": "7.604%",
  "url": "skin/Image_306F4727_273A_95B3_41B2_3DF89EEDBF85.png",
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "shadow": false,
  "minWidth": 1,
  "top": "0.05%",
  "maxWidth": 1467,
  "borderSize": 0,
  "borderRadius": 0,
  "id": "Image_306F4727_273A_95B3_41B2_3DF89EEDBF85",
  "data": {
   "name": "Wave Logo"
  },
  "verticalAlign": "middle",
  "minHeight": 1,
  "paddingRight": 0,
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "right": "0%",
  "maxHeight": 817
 },
 {
  "class": "Image",
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "width": "38.151%",
  "height": "6.979%",
  "url": "skin/Image_3E29962B_272E_B7B3_4191_F996EF0F95BB.png",
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "shadow": false,
  "minWidth": 1,
  "top": "0.31%",
  "maxWidth": 1700,
  "borderSize": 0,
  "borderRadius": 0,
  "id": "Image_3E29962B_272E_B7B3_4191_F996EF0F95BB",
  "data": {
   "name": "MTViewhomes"
  },
  "verticalAlign": "middle",
  "minHeight": 1,
  "paddingRight": 0,
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "right": "8.53%",
  "maxHeight": 186
 },
 {
  "class": "Container",
  "paddingLeft": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "horizontalAlign": "left",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "scrollBarColor": "#000000",
  "width": "28.739%",
  "height": "33.75%",
  "children": [
   "this.MapViewer"
  ],
  "scrollBarVisible": "rollOver",
  "layout": "absolute",
  "paddingBottom": 0,
  "scrollBarWidth": 10,
  "shadow": false,
  "scrollBarMargin": 2,
  "minWidth": 1,
  "top": "1.82%",
  "borderSize": 0,
  "borderRadius": 0,
  "id": "Container_581FBEE1_4338_67EB_41B1_0EF3FEBC0B73",
  "data": {
   "name": "Container24488"
  },
  "verticalAlign": "top",
  "minHeight": 1,
  "backgroundColorDirection": "vertical",
  "paddingTop": 0,
  "backgroundOpacity": 0.3,
  "left": "0.63%",
  "creationPolicy": "inAdvance",
  "paddingRight": 0,
  "scrollBarOpacity": 0.5,
  "gap": 10,
  "contentOpaque": false,
  "overflow": "scroll"
 }
], 
 "class": "Player",
 "paddingLeft": 0,
 "mouseWheelEnabled": true,
 "scrollBarColor": "#000000",
 "width": "100%",
 "horizontalAlign": "left",
 "height": "100%",
 "vrPolyfillScale": 0.88,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "buttonToggleMute": "this.IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "minWidth": 20,
 "scripts": {
  "existsKey": function(key){  return key in window; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "unregisterKey": function(key){  delete window[key]; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getKey": function(key){  return window[key]; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); }
 },
 "borderSize": 0,
 "borderRadius": 0,
 "id": "rootPlayer",
 "data": {
  "name": "Player28156"
 },
 "verticalAlign": "top",
 "minHeight": 20,
 "mobileMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "gap": 10,
 "start": "this.playAudioList([this.audio_DDEFFE5C_F991_F108_41CE_F98239658AAB]); this.syncPlaylists([this.thumbnaillist5245_playlist,this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist,this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_0A04634C_06D1_60C9_4193_949582B2525A.set('selectedIndex', 0)",
 "contentOpaque": false,
 "overflow": "visible"
})