(function () {
    var a = {};
    function trans(c, d) {
        var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        a[e[0x0]] = e;
        return '';
    }
    function regTextVar(c, d) {
        var e = ![];
        d = d['toLowerCase']();
        var f = function () {
            var o = this['get']('data');
            o['updateText'](o['translateObjs'][c]);
        };
        var g = function (o) {
            var p = o['data']['nextSelectedIndex'];
            if (p >= 0x0) {
                var q = o['source']['get']('items')[p];
                var r = function () {
                    q['unbind']('start', r, this);
                    f['call'](this);
                };
                q['bind']('start', r, this);
            } else
                f['call'](this);
        };
        var h = function (o) {
            return function (p) {
                if (o in p) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var i = function (o, p) {
            return function (q, r) {
                if (o == q && p in r) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var j = function (o, p, q) {
            for (var r = 0x0; r < o['length']; ++r) {
                var s = o[r];
                var t = s['get']('selectedIndex');
                if (t >= 0x0) {
                    var u = p['split']('.');
                    var v = s['get']('items')[t];
                    if (q !== undefined && !q['call'](this, v))
                        continue;
                    for (var w = 0x0; w < u['length']; ++w) {
                        if (v == undefined)
                            return '';
                        v = 'get' in v ? v['get'](u[w]) : v[u[w]];
                    }
                    return v;
                }
            }
            return '';
        };
        var k = function (o) {
            var p = o['get']('player');
            return p !== undefined && p['get']('viewerArea') == this['getMainViewer']();
        };
        switch (d) {
        case 'title':
        case 'subtitle':
            var m = function () {
                switch (d) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (m) {
                return function () {
                    var o = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!e) {
                        for (var p = 0x0; p < o['length']; ++p) {
                            o[p]['bind']('changing', g, this);
                        }
                        e = !![];
                    }
                    return j['call'](this, o, m, k);
                };
            }
            break;
        default:
            if (d['startsWith']('quiz.') && 'Quiz' in TDV) {
                var n = undefined;
                var m = function () {
                    switch (d) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var o = /quiz\.([\w_]+)\.(.+)/['exec'](d);
                        if (o) {
                            n = o[0x1];
                            switch ('quiz.' + o[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (m) {
                    return function () {
                        var o = this['get']('data')['quiz'];
                        if (o) {
                            if (!e) {
                                if (n != undefined)
                                    if (n == 'global') {
                                        var q = this['get']('data')['quizConfig'];
                                        var s = q['objectives'];
                                        for (var u = 0x0, w = s['length']; u < w; ++u) {
                                            o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, s[u]['id'], m), this);
                                        }
                                    } else {
                                        o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, n, m), this);
                                    }
                                else
                                    o['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], h['call'](this, m), this);
                                e = !![];
                            }
                            try {
                                var x = 0x0;
                                if (n != undefined) {
                                    if (n == 'global') {
                                        var q = this['get']('data')['quizConfig'];
                                        var s = q['objectives'];
                                        for (var u = 0x0, w = s['length']; u < w; ++u) {
                                            x += o['getObjective'](s[u]['id'], m);
                                        }
                                    } else {
                                        x = o['getObjective'](n, m);
                                    }
                                } else {
                                    x = o['get'](m);
                                    if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        x += 0x1;
                                }
                                return x;
                            } catch (y) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, c) {
        var d = {};
        d['player'] = player;
        d['playList'] = c;
        function e(h) {
            for (var j = 0x0; j < h['length']; ++j) {
                var k = h[j];
                if ('id' in k)
                    player[k['id']] = k;
            }
        }
        if (d['questions']) {
            e(d['questions']);
            for (var f = 0x0; f < d['questions']['length']; ++f) {
                var g = d['questions'][f];
                e(g['options']);
            }
        }
        if (d['objectives']) {
            e(d['objectives']);
        }
        if (d['califications']) {
            e(d['califications']);
        }
        if (d['score']) {
            player[d['score']['id']] = d['score'];
        }
        if (d['question']) {
            player[d['question']['id']] = d['question'];
        }
        if (d['timeout']) {
            player[d['timeout']['id']] = d['timeout'];
        }
        player['get']('data')['translateObjs'] = a;
        return d;
    }
    var b = {"scrollBarMargin":2,"scrollBarVisible":"rollOver","id":"rootPlayer","gap":10,"verticalAlign":"top","width":"100%","paddingLeft":0,"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_8E6D9F0C_828E_B8BC_4192_3E9BF2C56B7A], 'cardboardAvailable'); if(!this.get('fullscreenAvailable')) { [this.Button_8EEE7DC3_8014_7303_41DC_0C1821763D5B,this.Button_9213047E_807C_1104_41B8_0CC2230781B5].forEach(function(component) { component.set('visible', false); }) }","downloadEnabled":false,"scrollBarWidth":10,"scrollBarOpacity":0.5,"data":{"locales":{"es":"locale/es.txt"},"name":"Player520","textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"volume":1,"rate":1},"defaultLocale":"es"},"propagateClick":false,"mediaActivationMode":"window","defaultVRPointer":"laser","left":577.55,"paddingRight":0,"horizontalAlign":"left","desktopMipmappingEnabled":false,"children":["this.MainViewer_mobile","this.Container_70320AAC_7FB8_99B0_41C4_1D4E6A0CA184_mobile","this.Button_8EEE7DC3_8014_7303_41DC_0C1821763D5B","this.Button_9213047E_807C_1104_41B8_0CC2230781B5"],"borderSize":0,"toolTipHorizontalAlign":"center","height":"100%","scrollBarColor":"#000000","layout":"absolute","buttonExitFullscreen":"this.Button_9213047E_807C_1104_41B8_0CC2230781B5","contentOpaque":false,"backgroundColor":["#FFFFFF"],"minHeight":20,"minWidth":20,"borderRadius":0,"vrPolyfillScale":0.75,"shadow":false,"mobileMipmappingEnabled":false,"class":"Player","definitions": [{"id":"IconButton_7033FAAB_7FB8_99B0_41C7_FE166791A51D_mobile","pressedIconURL":"skin/IconButton_7033FAAB_7FB8_99B0_41C7_FE166791A51D_pressed.png","verticalAlign":"middle","width":30,"paddingLeft":0,"transparencyActive":true,"propagateClick":false,"paddingRight":0,"iconURL":"skin/IconButton_7033FAAB_7FB8_99B0_41C7_FE166791A51D.png","horizontalAlign":"center","borderSize":0,"rollOverIconURL":"skin/IconButton_7033FAAB_7FB8_99B0_41C7_FE166791A51D_rollover.png","toolTipHorizontalAlign":"center","height":55.6,"mode":"toggle","borderRadius":0,"minHeight":0,"minWidth":0,"shadow":false,"class":"IconButton","backgroundOpacity":0,"paddingTop":0,"paddingBottom":0,"cursor":"hand","data":{"name":"Button27668"}},{"id":"IconButton_70336AAB_7FB8_99B0_41DA_A6CD1E6E5380_mobile","pressedIconURL":"skin/IconButton_70336AAB_7FB8_99B0_41DA_A6CD1E6E5380_pressed.png","verticalAlign":"middle","width":30,"paddingLeft":0,"transparencyActive":true,"propagateClick":false,"paddingRight":0,"iconURL":"skin/IconButton_70336AAB_7FB8_99B0_41DA_A6CD1E6E5380.png","horizontalAlign":"center","borderSize":0,"rollOverIconURL":"skin/IconButton_70336AAB_7FB8_99B0_41DA_A6CD1E6E5380_rollover.png","toolTipHorizontalAlign":"center","height":28,"mode":"push","borderRadius":0,"minHeight":0,"minWidth":0,"shadow":false,"class":"IconButton","backgroundOpacity":0,"paddingTop":0,"paddingBottom":0,"cursor":"hand","data":{"name":"Button27663"}},{"scrollBarMargin":1,"scrollBarVisible":"rollOver","id":"Container_70332AAB_7FB8_99B0_416B_28B9EBC281AC_mobile","gap":2,"verticalAlign":"middle","width":28.6,"paddingLeft":0,"children":["this.IconButton_7033FAAB_7FB8_99B0_41C7_FE166791A51D_mobile"],"scrollBarWidth":5,"scrollBarOpacity":0.5,"data":{"name":"Container27666"},"propagateClick":false,"paddingRight":0,"horizontalAlign":"center","borderSize":0,"toolTipHorizontalAlign":"center","height":"100%","scrollBarColor":"#000000","layout":"vertical","contentOpaque":false,"borderRadius":0,"minHeight":10,"minWidth":10,"shadow":false,"class":"Container","backgroundOpacity":0,"paddingTop":0,"paddingBottom":0,"overflow":"hidden"},{"scrollBarMargin":1,"scrollBarVisible":"rollOver","id":"Container_70320AAC_7FB8_99B0_41C4_1D4E6A0CA184_mobile","gap":2,"verticalAlign":"middle","width":221.1,"paddingLeft":0,"right":10,"children":["this.IconButton_70336AAB_7FB8_99B0_41DA_A6CD1E6E5380_mobile","this.IconButton_70334AAB_7FB8_99B0_41C7_7BFFABB0FE80_mobile","this.Container_70332AAB_7FB8_99B0_416B_28B9EBC281AC_mobile","this.IconButton_70325AAB_7FB8_99B0_41D4_AFC76AADF9C2_mobile","this.IconButton_70322AAB_7FB8_99B0_41C2_B3649873BAAC_mobile","this.IconButton_8E6D9F0C_828E_B8BC_4192_3E9BF2C56B7A"],"scrollBarWidth":5,"scrollBarOpacity":0.5,"data":{"name":"Container27661"},"propagateClick":false,"paddingRight":0,"horizontalAlign":"center","borderSize":0,"bottom":"0%","toolTipHorizontalAlign":"center","height":56.65,"scrollBarColor":"#000000","layout":"horizontal","contentOpaque":false,"borderRadius":0,"minHeight":10,"minWidth":10,"shadow":false,"class":"Container","backgroundOpacity":0,"paddingTop":0,"paddingBottom":0,"overflow":"hidden"},{"fontFamily":"Montserrat","data":{"name":"fullscreen enter button"},"id":"Button_8EEE7DC3_8014_7303_41DC_0C1821763D5B","gap":5,"verticalAlign":"middle","width":133.15,"paddingLeft":0,"cursor":"hand","right":25,"fontStyle":"normal","shadowColor":"#000000","propagateClick":false,"paddingRight":0,"click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, null, false)}.bind(this); invisibleFunc(this.Button_8EEE7DC3_8014_7303_41DC_0C1821763D5B); var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, null, null, false)}.bind(this); visibleFunc(this.Button_9213047E_807C_1104_41B8_0CC2230781B5)","pressedBackgroundOpacity":1,"horizontalAlign":"center","borderColor":"#000000","borderSize":0,"bottom":"8.7%","toolTipHorizontalAlign":"center","rollOverBackgroundColorRatios":[0],"height":20,"mode":"push","pressedLabel":trans('Button_8EEE7DC3_8014_7303_41DC_0C1821763D5B.pressedLabel'),"fontSize":"10px","rollOverShadow":false,"shadowSpread":1,"backgroundColor":["#000000"],"minHeight":1,"rollOverBackgroundOpacity":0.8,"minWidth":1,"borderRadius":5,"pressedBackgroundColor":["#0000FF"],"shadow":false,"iconHeight":0,"iconWidth":0,"fontColor":"#FFFFFF","class":"Button","label":trans('Button_8EEE7DC3_8014_7303_41DC_0C1821763D5B.label'),"shadowBlurRadius":3,"backgroundColorDirection":"vertical","pressedBackgroundColorRatios":[0],"backgroundOpacity":0.2,"paddingTop":0,"backgroundColorRatios":[0],"iconBeforeLabel":true,"fontWeight":"bold","textDecoration":"none","paddingBottom":0,"rollOverBackgroundColor":["#0000FF"],"layout":"horizontal"},{"hoverFactor":0,"manualRotationSpeed":1800,"class":"RotationalCamera","automaticZoomSpeed":10,"initialPosition":{"yaw":27.79,"hfov":120,"class":"RotationalCameraPosition","pitch":21.07},"automaticRotationSpeed":10,"manualZoomSpeed":2,"id":"media_8CF5BE1D_802D_F104_41DD_C0791D325EFC_camera"},{"visible":false,"fontFamily":"Montserrat","data":{"name":"fullscreen exit button"},"id":"Button_9213047E_807C_1104_41B8_0CC2230781B5","gap":5,"verticalAlign":"middle","width":133.15,"paddingLeft":0,"cursor":"hand","right":20,"fontStyle":"normal","shadowColor":"#000000","propagateClick":false,"paddingRight":0,"click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, null, false)}.bind(this); invisibleFunc(this.Button_9213047E_807C_1104_41B8_0CC2230781B5); var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, null, null, false)}.bind(this); visibleFunc(this.Button_8EEE7DC3_8014_7303_41DC_0C1821763D5B)","pressedBackgroundOpacity":1,"horizontalAlign":"center","borderColor":"#000000","borderSize":0,"bottom":"8.7%","toolTipHorizontalAlign":"center","rollOverBackgroundColorRatios":[0],"height":20,"mode":"push","pressedLabel":trans('Button_9213047E_807C_1104_41B8_0CC2230781B5.pressedLabel'),"fontSize":"10px","rollOverShadow":false,"shadowSpread":1,"backgroundColor":["#000000"],"minHeight":1,"rollOverBackgroundOpacity":0.8,"minWidth":1,"borderRadius":5,"pressedBackgroundColor":["#0000FF"],"shadow":false,"iconHeight":0,"iconWidth":0,"fontColor":"#FFFFFF","class":"Button","label":trans('Button_9213047E_807C_1104_41B8_0CC2230781B5.label'),"shadowBlurRadius":3,"backgroundColorDirection":"vertical","pressedBackgroundColorRatios":[0],"backgroundOpacity":0.2,"paddingTop":0,"backgroundColorRatios":[0],"iconBeforeLabel":true,"fontWeight":"bold","textDecoration":"none","paddingBottom":0,"rollOverBackgroundColor":["#0000FF"],"layout":"horizontal"},{"playbackBarProgressBackgroundColorRatios":[0],"toolTipBorderRadius":1,"id":"MainViewer_mobile","playbackBarBorderRadius":0,"progressBorderRadius":0,"playbackBarProgressBorderColor":"#000000","width":"100%","subtitlesTextShadowColor":"#000000","progressLeft":0,"subtitlesFontSize":"3vmin","propagateClick":false,"subtitlesTop":0,"vrPointerSelectionColor":"#FF6600","playbackBarProgressOpacity":1,"playbackBarHeadBorderRadius":0,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"playbackBarBackgroundOpacity":1,"borderSize":0,"subtitlesPaddingBottom":5,"toolTipFontStyle":"normal","subtitlesBorderColor":"#FFFFFF","subtitlesTextDecoration":"none","toolTipHorizontalAlign":"center","playbackBarBorderSize":0,"toolTipBorderSize":1,"toolTipShadowVerticalLength":0,"subtitlesTextShadowBlurRadius":0,"subtitlesFontFamily":"Arial","height":"100%","toolTipFontWeight":"normal","subtitlesPaddingTop":5,"subtitlesShadow":false,"playbackBarHeadShadowBlurRadius":1.5,"playbackBarLeft":0,"shadow":false,"playbackBarHeadHeight":15,"subtitlesOpacity":1,"toolTipPaddingTop":2,"playbackBarHeadShadowColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"vrPointerSelectionTime":2000,"vrPointerColor":"#FFFFFF","subtitlesGap":0,"playbackBarHeadBorderSize":0,"subtitlesHorizontalAlign":"center","displayTooltipInTouchScreens":true,"subtitlesBackgroundColor":"#000000","playbackBarHeadShadow":true,"subtitlesVerticalAlign":"bottom","paddingTop":0,"playbackBarHeadOpacity":1,"toolTipTextShadowOpacity":0,"toolTipBackgroundColor":"#F6F6F6","doubleClickAction":"toggle_fullscreen","toolTipOpacity":1,"subtitlesTextShadowOpacity":1,"paddingBottom":0,"translationTransitionDuration":1000,"subtitlesBorderSize":0,"toolTipTextShadowColor":"#000000","surfaceReticleColor":"#FFFFFF","toolTipBorderColor":"#767676","surfaceReticleOpacity":0.6,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesFontColor":"#FFFFFF","playbackBarOpacity":1,"paddingLeft":0,"toolTipFontFamily":"Arial","toolTipTextShadowBlurRadius":1,"playbackBarHeadShadowVerticalLength":0,"toolTipShadowHorizontalLength":0,"transitionMode":"blending","progressRight":0,"playbackBarBottom":5,"paddingRight":0,"toolTipPaddingBottom":2,"progressBackgroundColorRatios":[0],"progressBarBackgroundColorDirection":"vertical","toolTipShadowBlurRadius":1,"progressOpacity":1,"playbackBarBackgroundColor":["#FFFFFF"],"progressBarBorderColor":"#000000","progressBackgroundOpacity":1,"playbackBarHeight":10,"progressBarBackgroundColorRatios":[0],"playbackBarProgressBackgroundColorDirection":"vertical","subtitlesFontWeight":"normal","toolTipShadowSpread":0,"progressBackgroundColorDirection":"vertical","subtitlesPaddingLeft":5,"playbackBarHeadWidth":6,"subtitlesPaddingRight":5,"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesBottom":50,"playbackBarProgressBorderSize":0,"toolTipFontSize":"1.11vmin","surfaceReticleSelectionColor":"#FFFFFF","subtitlesEnabled":true,"toolTipDisplayTime":600,"progressBorderColor":"#000000","surfaceReticleSelectionOpacity":1,"progressBarBackgroundColor":["#3399FF"],"playbackBarBackgroundColorDirection":"vertical","borderRadius":0,"minHeight":25,"toolTipShadowColor":"#333333","playbackBarProgressBackgroundColor":["#3399FF"],"minWidth":50,"playbackBarProgressBorderRadius":0,"toolTipFontColor":"#606060","progressBarOpacity":1,"playbackBarRight":0,"subtitlesTextShadowHorizontalLength":1,"progressBackgroundColor":["#FFFFFF"],"playbackBarHeadShadowOpacity":0.7,"progressBottom":0,"displayTooltipInSurfaceSelection":true,"toolTipPaddingLeft":3,"firstTransitionDuration":0,"class":"ViewerArea","toolTipPaddingRight":3,"progressBorderSize":0,"progressHeight":10,"progressBarBorderRadius":0,"data":{"name":"Main Viewer"},"progressBarBorderSize":0,"transitionDuration":500,"playbackBarBorderColor":"#FFFFFF","toolTipShadowOpacity":1,"playbackBarHeadShadowHorizontalLength":0},{"id":"IconButton_70322AAB_7FB8_99B0_41C2_B3649873BAAC_mobile","pressedIconURL":"skin/IconButton_70322AAB_7FB8_99B0_41C2_B3649873BAAC_pressed.png","verticalAlign":"middle","width":28,"paddingLeft":0,"transparencyActive":true,"propagateClick":false,"paddingRight":0,"iconURL":"skin/IconButton_70322AAB_7FB8_99B0_41C2_B3649873BAAC.png","horizontalAlign":"center","borderSize":0,"rollOverIconURL":"skin/IconButton_70322AAB_7FB8_99B0_41C2_B3649873BAAC_rollover.png","toolTipHorizontalAlign":"center","height":28,"mode":"toggle","borderRadius":0,"minHeight":0,"minWidth":0,"shadow":false,"class":"IconButton","backgroundOpacity":0,"paddingTop":0,"paddingBottom":0,"cursor":"hand","data":{"name":"Button27672"}},{"buttonPause":"this.IconButton_7033FAAB_7FB8_99B0_41C7_FE166791A51D_mobile","buttonPlayLeft":"this.IconButton_70334AAB_7FB8_99B0_41C7_7BFFABB0FE80_mobile","viewerArea":"this.MainViewer_mobile","displayPlaybackBar":true,"buttonRestart":"this.IconButton_70336AAB_7FB8_99B0_41DA_A6CD1E6E5380_mobile","gyroscopeEnabled":true,"surfaceSelectionEnabled":false,"aaEnabled":true,"mouseControlMode":"drag_rotation","zoomEnabled":true,"id":"MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayer","arrowKeysAction":"translate","gyroscopeVerticalDraggingEnabled":true,"buttonPlayRight":"this.IconButton_70325AAB_7FB8_99B0_41D4_AFC76AADF9C2_mobile","touchControlMode":"drag_rotation","buttonCardboardView":"this.IconButton_8E6D9F0C_828E_B8BC_4192_3E9BF2C56B7A"},{"id":"IconButton_8E6D9F0C_828E_B8BC_4192_3E9BF2C56B7A","verticalAlign":"middle","width":44.45,"paddingLeft":0,"transparencyActive":false,"propagateClick":false,"paddingRight":0,"iconURL":"skin/IconButton_8EDDA047_828F_E8AC_41D8_72D84EDB4E1C.png","horizontalAlign":"center","borderSize":0,"toolTipHorizontalAlign":"center","height":33,"maxWidth":50,"maxHeight":50,"mode":"push","borderRadius":0,"minHeight":1,"minWidth":1,"shadow":false,"class":"IconButton","backgroundOpacity":0,"paddingTop":0,"paddingBottom":0,"cursor":"hand","data":{"name":"IconButton13821"}},{"items":[{"media":"this.media_8CF5BE1D_802D_F104_41DD_C0791D325EFC","end":"this.trigger('tourEnded')","class":"Video360PlayListItem","start":"this.MainViewer_mobilePanoramaPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0)","begin":"this.fixTogglePlayPauseButton(this.MainViewer_mobilePanoramaPlayer)","player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.media_8CF5BE1D_802D_F104_41DD_C0791D325EFC_camera"}],"id":"mainPlayList","class":"PlayList"},{"id":"IconButton_70325AAB_7FB8_99B0_41D4_AFC76AADF9C2_mobile","pressedIconURL":"skin/IconButton_70325AAB_7FB8_99B0_41D4_AFC76AADF9C2_pressed.png","verticalAlign":"middle","width":30,"paddingLeft":0,"transparencyActive":true,"propagateClick":false,"paddingRight":0,"iconURL":"skin/IconButton_70325AAB_7FB8_99B0_41D4_AFC76AADF9C2.png","horizontalAlign":"center","borderSize":0,"rollOverIconURL":"skin/IconButton_70325AAB_7FB8_99B0_41D4_AFC76AADF9C2_rollover.png","toolTipHorizontalAlign":"center","height":28,"mode":"push","borderRadius":0,"minHeight":0,"minWidth":0,"shadow":false,"class":"IconButton","backgroundOpacity":0,"paddingTop":0,"paddingBottom":0,"cursor":"hand","data":{"name":"Button27671"}},{"id":"IconButton_70334AAB_7FB8_99B0_41C7_7BFFABB0FE80_mobile","pressedIconURL":"skin/IconButton_70334AAB_7FB8_99B0_41C7_7BFFABB0FE80_pressed.png","verticalAlign":"middle","width":30,"paddingLeft":0,"transparencyActive":true,"propagateClick":false,"paddingRight":0,"iconURL":"skin/IconButton_70334AAB_7FB8_99B0_41C7_7BFFABB0FE80.png","horizontalAlign":"center","borderSize":0,"rollOverIconURL":"skin/IconButton_70334AAB_7FB8_99B0_41C7_7BFFABB0FE80_rollover.png","toolTipHorizontalAlign":"center","height":28,"mode":"push","borderRadius":0,"minHeight":0,"minWidth":0,"shadow":false,"class":"IconButton","backgroundOpacity":0,"paddingTop":0,"paddingBottom":0,"cursor":"hand","data":{"name":"Button27664"}},{"data":{"label":"CONSIV 1"},"label":trans('media_8CF5BE1D_802D_F104_41DD_C0791D325EFC.label'),"id":"media_8CF5BE1D_802D_F104_41DD_C0791D325EFC","hfovMin":60,"loop":true,"overlays":["this.overlay_8CF5AE1D_802D_F104_41C7_4FF0A97B4397"],"partial":false,"pitch":0,"vfov":180,"class":"Video360","hfovMax":140,"thumbnailUrl":"media/media_8CF5BE1D_802D_F104_41DD_C0791D325EFC_t.jpg","hfov":360,"video":[{"width":3840,"url":"media/media_8CF5BE1D_802D_F104_41DD_C0791D325EFC.m3u8","class":"Video360Resource","posterURL":"media/media_8CF5BE1D_802D_F104_41DD_C0791D325EFC_poster.jpg","type":"application/x-mpegurl","height":1920,"framerate":25},{"width":3840,"url":"media/media_8CF5BE1D_802D_F104_41DD_C0791D325EFC.mp4","class":"Video360Resource","bitrate":4340,"posterURL":"media/media_8CF5BE1D_802D_F104_41DD_C0791D325EFC_poster.jpg","type":"video/mp4","height":1920,"framerate":25}]},{"class":"HotspotPanoramaOverlay","data":{"label":"Info Red 02"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_719337F2_7FBB_B790_41B6_FB658DE1FB4A"],"items":[{"data":{"label":"Info Red 02"},"verticalAlign":"middle","image":"this.AnimatedImageResource_8C1954F3_829D_E964_41AD_48A77357EBFC","playbackPositions":[{"roll":0,"timestamp":0,"class":"PanoramaOverlayPlaybackPosition","pitch":1.54,"yaw":17.07,"hfov":10.98,"opacity":0},{"roll":0,"timestamp":102,"class":"PanoramaOverlayPlaybackPosition","pitch":1.54,"yaw":17.07,"hfov":10.98,"opacity":0},{"roll":0,"timestamp":102,"class":"PanoramaOverlayPlaybackPosition","pitch":1.54,"yaw":17.07,"hfov":10.98,"opacity":0},{"roll":0,"timestamp":103.2,"class":"PanoramaOverlayPlaybackPosition","pitch":1.54,"yaw":17.07,"hfov":10.98,"opacity":1}],"class":"HotspotPanoramaOverlayImage","pitch":0,"horizontalAlign":"center","scaleMode":"fit_inside","distance":100,"yaw":0}],"id":"overlay_8CF5AE1D_802D_F104_41C7_4FF0A97B4397","enabledInCardboard":true,"maps":[]},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","rollOver":"this.MainViewer_mobilePanoramaPlayer.pause()","click":"this.openLink(this.translate('LinkBehaviour_6F4A7AA3_7FA9_99B0_41C4_5BEDCAD9BD58.source'), '_blank')","id":"HotspotPanoramaOverlayArea_719337F2_7FBB_B790_41B6_FB658DE1FB4A","rollOut":"this.MainViewer_mobilePanoramaPlayer.play()"},{"levels":[{"url":"media/res_724EEA94_7FB8_B990_41DF_A4C36AAE7D5D_0.png","width":468,"class":"ImageResourceLevel","height":702}],"class":"AnimatedImageResource","colCount":4,"rowCount":6,"id":"AnimatedImageResource_8C1954F3_829D_E964_41AD_48A77357EBFC","frameCount":24,"frameDuration":41}],"mouseWheelEnabled":true,"backgroundColorDirection":"vertical","backgroundOpacity":1,"scripts":{"historyGoForward":TDV.Tour.Script.historyGoForward,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"cloneCamera":TDV.Tour.Script.cloneCamera,"initQuiz":TDV.Tour.Script.initQuiz,"getComponentByName":TDV.Tour.Script.getComponentByName,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"clone":TDV.Tour.Script.clone,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"mixObject":TDV.Tour.Script.mixObject,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getPixels":TDV.Tour.Script.getPixels,"setValue":TDV.Tour.Script.setValue,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"init":TDV.Tour.Script.init,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setLocale":TDV.Tour.Script.setLocale,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"showPopupImage":TDV.Tour.Script.showPopupImage,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"isPanorama":TDV.Tour.Script.isPanorama,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"quizStart":TDV.Tour.Script.quizStart,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getKey":TDV.Tour.Script.getKey,"quizFinish":TDV.Tour.Script.quizFinish,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"quizShowScore":TDV.Tour.Script.quizShowScore,"registerKey":TDV.Tour.Script.registerKey,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"showWindow":TDV.Tour.Script.showWindow,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"playAudioList":TDV.Tour.Script.playAudioList,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"shareSocial":TDV.Tour.Script.shareSocial,"textToSpeech":TDV.Tour.Script.textToSpeech,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"openLink":TDV.Tour.Script.openLink,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getOverlays":TDV.Tour.Script.getOverlays,"unregisterKey":TDV.Tour.Script.unregisterKey,"existsKey":TDV.Tour.Script.existsKey,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setMapLocation":TDV.Tour.Script.setMapLocation,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"initAnalytics":TDV.Tour.Script.initAnalytics,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getMediaByName":TDV.Tour.Script.getMediaByName,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"historyGoBack":TDV.Tour.Script.historyGoBack,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"resumePlayers":TDV.Tour.Script.resumePlayers,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMainViewer":TDV.Tour.Script.getMainViewer,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"translate":TDV.Tour.Script.translate,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer},"paddingTop":0,"backgroundColorRatios":[0],"backgroundPreloadEnabled":true,"buttonEnterFullscreen":"this.Button_8EEE7DC3_8014_7303_41DC_0C1821763D5B","buttonToggleMute":"this.IconButton_70322AAB_7FB8_99B0_41C2_B3649873BAAC_mobile","paddingBottom":0,"overflow":"hidden"};
    if (b['data'] == undefined)
        b['data'] = {};
    b['data']['translateObjs'] = a;
    b['data']['history'] = {};
    b['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](b);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.1.5.js.map
//Generated with v2021.1.5, Thu Aug 26 2021
//