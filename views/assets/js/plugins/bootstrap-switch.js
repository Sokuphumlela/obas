/**
 * bootstrap-switch - Turn checkboxes and radio buttons into toggle switches.
 *
 * @version v3.3.4
 * @homepage https://bttstrp.github.io/bootstrap-switch
 * @author Mattia Larentis <mattia@larentis.eu> (http://larentis.eu)
 * @license Apache-2.0
 */

(function (a, b) {
    if ('function' == typeof define && define.amd) define(['jquery'], b);
    else if ('undefined' != typeof exports) b(require('jquery'));
    else {
        b(a.jquery), a.bootstrapSwitch = {
            exports: {}
        }.exports
    }
})(this, function (a) {
    'use strict';

    function c(j, k) {
        if (!(j instanceof k)) throw new TypeError('Cannot call a class as a function')
    }

    var d = function (j) {
            return j && j.__esModule ? j : {
                default: j
            }
        }(a),
        e = Object.assign || function (j) {
            for (var l, k = 1; k < arguments.length; k++)
                for (var m in l = arguments[k], l) Object.prototype.hasOwnProperty.call(l, m) && (j[m] = l[m]);
            return j
        },
        f = function () {
            function j(k, l) {
                for (var n, m = 0; m < l.length; m++) n = l[m], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(k, n.key, n)
            }

            return function (k, l, m) {
                return l && j(k.prototype, l), m && j(k, m), k
            }
        }(),
        g = d.default || window.jQuery || window.$,
        h = function () {
            function j(k) {
                var l = this,
                    m = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                c(this, j), this.$element = g(k), this.options = g.extend({}, g.fn.bootstrapSwitch.defaults, this._getElementOptions(), m), this.prevOptions = {}, this.$wrapper = g('<div>', {
                    class: function () {
                        var o = [];
                        return o.push(l.options.state ? 'on' : 'off'), l.options.size && o.push(l.options.size), l.options.disabled && o.push('disabled'), l.options.readonly && o.push('readonly'), l.options.indeterminate && o.push('indeterminate'), l.options.inverse && o.push('inverse'), l.$element.attr('id') && o.push('id-' + l.$element.attr('id')), o.map(l._getClass.bind(l)).concat([l.options.baseClass], l._getClasses(l.options.wrapperClass)).join(' ')
                    }
                }), this.$container = g('<div>', {
                    class: this._getClass('container')
                }), this.$on = g('<span>', {
                    html: this.options.onText,
                    class: this._getClass('handle-on') + ' ' + this._getClass(this.options.onColor)
                }), this.$off = g('<span>', {
                    html: this.options.offText,
                    class: this._getClass('handle-off') + ' ' + this._getClass(this.options.offColor)
                }), this.$label = g('<span>', {
                    html: this.options.labelText,
                    class: this._getClass('label')
                }), this.$element.on('init.bootstrapSwitch', this.options.onInit.bind(this, k)), this.$element.on('switchChange.bootstrapSwitch', function () {
                    for (var n = arguments.length, o = Array(n), p = 0; p < n; p++) o[p] = arguments[p];
                    !1 === l.options.onSwitchChange.apply(k, o) && (l.$element.is(':radio') ? g('[name="' + l.$element.attr('name') + '"]').trigger('previousState.bootstrapSwitch', !0) : l.$element.trigger('previousState.bootstrapSwitch', !0))
                }), this.$container = this.$element.wrap(this.$container).parent(), this.$wrapper = this.$container.wrap(this.$wrapper).parent(), this.$element.before(this.options.inverse ? this.$off : this.$on).before(this.$label).before(this.options.inverse ? this.$on : this.$off), this.options.indeterminate && this.$element.prop('indeterminate', !0), this._init(), this._elementHandlers(), this._handleHandlers(), this._labelHandlers(), this._formHandler(), this._externalLabelHandler(), this.$element.trigger('init.bootstrapSwitch', this.options.state)
            }
            return f(j, [{
                key: 'setPrevOptions',
                value: function () {
                    this.prevOptions = e({}, this.options)
                }
            }, {
                key: 'state',
                value: function (l, m) {
                    return 'undefined' == typeof l ? this.options.state : this.options.disabled || this.options.readonly || this.options.state && !this.options.radioAllOff && this.$element.is(':radio') ? this.$element : (this.$element.is(':radio') ? g('[name="' + this.$element.attr('name') + '"]').trigger('setPreviousOptions.bootstrapSwitch') : this.$element.trigger('setPreviousOptions.bootstrapSwitch'), this.options.indeterminate && this.indeterminate(!1), this.$element.prop('checked', !!l).trigger('change.bootstrapSwitch', m), this.$element)
                }
            }, {
                key: 'toggleState',
                value: function (l) {
                    return this.options.disabled || this.options.readonly ? this.$element : this.options.indeterminate ? (this.indeterminate(!1), this.state(!0)) : this.$element.prop('checked', !this.options.state).trigger('change.bootstrapSwitch', l)
                }
            }, {
                key: 'size',
                value: function (l) {
                    return 'undefined' == typeof l ? this.options.size : (null != this.options.size && this.$wrapper.removeClass(this._getClass(this.options.size)), l && this.$wrapper.addClass(this._getClass(l)), this._width(), this._containerPosition(), this.options.size = l, this.$element)
                }
            }, {
                key: 'animate',
                value: function (l) {
                    return 'undefined' == typeof l ? this.options.animate : this.options.animate === !!l ? this.$element : this.toggleAnimate()
                }
            }, {
                key: 'toggleAnimate',
                value: function () {
                    return this.options.animate = !this.options.animate, this.$wrapper.toggleClass(this._getClass('animate')), this.$element
                }
            }, {
                key: 'disabled',
                value: function (l) {
                    return 'undefined' == typeof l ? this.options.disabled : this.options.disabled === !!l ? this.$element : this.toggleDisabled()
                }
            }, {
                key: 'toggleDisabled',
                value: function () {
                    return this.options.disabled = !this.options.disabled, this.$element.prop('disabled', this.options.disabled), this.$wrapper.toggleClass(this._getClass('disabled')), this.$element
                }
            }, {
                key: 'readonly',
                value: function (l) {
                    return 'undefined' == typeof l ? this.options.readonly : this.options.readonly === !!l ? this.$element : this.toggleReadonly()
                }
            }, {
                key: 'toggleReadonly',
                value: function () {
                    return this.options.readonly = !this.options.readonly, this.$element.prop('readonly', this.options.readonly), this.$wrapper.toggleClass(this._getClass('readonly')), this.$element
                }
            }, {
                key: 'indeterminate',
                value: function (l) {
                    return 'undefined' == typeof l ? this.options.indeterminate : this.options.indeterminate === !!l ? this.$element : this.toggleIndeterminate()
                }
            }, {
                key: 'toggleIndeterminate',
                value: function () {
                    return this.options.indeterminate = !this.options.indeterminate, this.$element.prop('indeterminate', this.options.indeterminate), this.$wrapper.toggleClass(this._getClass('indeterminate')), this._containerPosition(), this.$element
                }
            }, {
                key: 'inverse',
                value: function (l) {
                    return 'undefined' == typeof l ? this.options.inverse : this.options.inverse === !!l ? this.$element : this.toggleInverse()
                }
            }, {
                key: 'toggleInverse',
                value: function () {
                    this.$wrapper.toggleClass(this._getClass('inverse'));
                    var l = this.$on.clone(!0),
                        m = this.$off.clone(!0);
                    return this.$on.replaceWith(m), this.$off.replaceWith(l), this.$on = m, this.$off = l, this.options.inverse = !this.options.inverse, this.$element
                }
            }, {
                key: 'onColor',
                value: function (l) {
                    return 'undefined' == typeof l ? this.options.onColor : (this.options.onColor && this.$on.removeClass(this._getClass(this.options.onColor)), this.$on.addClass(this._getClass(l)), this.options.onColor = l, this.$element)
                }
            }, {
                key: 'offColor',
                value: function (l) {
                    return 'undefined' == typeof l ? this.options.offColor : (this.options.offColor && this.$off.removeClass(this._getClass(this.options.offColor)), this.$off.addClass(this._getClass(l)), this.options.offColor = l, this.$element)
                }
            }, {
                key: 'onText',
                value: function (l) {
                    return 'undefined' == typeof l ? this.options.onText : (this.$on.html(l), this._width(), this._containerPosition(), this.options.onText = l, this.$element)
                }
            }, {
                key: 'offText',
                value: function (l) {
                    return 'undefined' == typeof l ? this.options.offText : (this.$off.html(l), this._width(), this._containerPosition(), this.options.offText = l, this.$element)
                }
            }, {
                key: 'labelText',
                value: function (l) {
                    return 'undefined' == typeof l ? this.options.labelText : (this.$label.html(l), this._width(), this.options.labelText = l, this.$element)
                }
            }, {
                key: 'handleWidth',
                value: function (l) {
                    return 'undefined' == typeof l ? this.options.handleWidth : (this.options.handleWidth = l, this._width(), this._containerPosition(), this.$element)
                }
            }, {
                key: 'labelWidth',
                value: function (l) {
                    return 'undefined' == typeof l ? this.options.labelWidth : (this.options.labelWidth = l, this._width(), this._containerPosition(), this.$element)
                }
            }, {
                key: 'baseClass',
                value: function () {
                    return this.options.baseClass
                }
            }, {
                key: 'wrapperClass',
                value: function (l) {
                    return 'undefined' == typeof l ? this.options.wrapperClass : (l || (l = g.fn.bootstrapSwitch.defaults.wrapperClass), this.$wrapper.removeClass(this._getClasses(this.options.wrapperClass).join(' ')), this.$wrapper.addClass(this._getClasses(l).join(' ')), this.options.wrapperClass = l, this.$element)
                }
            }, {
                key: 'radioAllOff',
                value: function (l) {
                    if ('undefined' == typeof l) return this.options.radioAllOff;
                    var m = !!l;
                    return this.options.radioAllOff === m ? this.$element : (this.options.radioAllOff = m, this.$element)
                }
            }, {
                key: 'onInit',
                value: function (l) {
                    return 'undefined' == typeof l ? this.options.onInit : (l || (l = g.fn.bootstrapSwitch.defaults.onInit), this.options.onInit = l, this.$element)
                }
            }, {
                key: 'onSwitchChange',
                value: function (l) {
                    return 'undefined' == typeof l ? this.options.onSwitchChange : (l || (l = g.fn.bootstrapSwitch.defaults.onSwitchChange), this.options.onSwitchChange = l, this.$element)
                }
            }, {
                key: 'destroy',
                value: function () {
                    var l = this.$element.closest('form');
                    return l.length && l.off('reset.bootstrapSwitch').removeData('bootstrap-switch'), this.$container.children().not(this.$element).remove(), this.$element.unwrap().unwrap().off('.bootstrapSwitch').removeData('bootstrap-switch'), this.$element
                }
            }, {
                key: '_getElementOptions',
                value: function () {
                    return {
                        state: this.$element.is(':checked'),
                        size: this.$element.data('size'),
                        animate: this.$element.data('animate'),
                        disabled: this.$element.is(':disabled'),
                        readonly: this.$element.is('[readonly]'),
                        indeterminate: this.$element.data('indeterminate'),
                        inverse: this.$element.data('inverse'),
                        radioAllOff: this.$element.data('radio-all-off'),
                        onColor: this.$element.data('on-color'),
                        offColor: this.$element.data('off-color'),
                        onText: this.$element.data('on-text'),
                        offText: this.$element.data('off-text'),
                        labelText: this.$element.data('label-text'),
                        handleWidth: this.$element.data('handle-width'),
                        labelWidth: this.$element.data('label-width'),
                        baseClass: this.$element.data('base-class'),
                        wrapperClass: this.$element.data('wrapper-class')
                    }
                }
            }, {
                key: '_width',
                value: function () {
                    var l = this,
                        m = this.$on.add(this.$off).add(this.$label).css('width', ''),
                        n = 'auto' === this.options.handleWidth ? Math.round(Math.max(this.$on.width(), this.$off.width())) : this.options.handleWidth;
                    return m.width(n), this.$label.width(function (o, p) {
                        return 'auto' === l.options.labelWidth ? p < n ? n : p : l.options.labelWidth
                    }), this._handleWidth = this.$on.outerWidth(), this._labelWidth = this.$label.outerWidth(), this.$container.width(2 * this._handleWidth + this._labelWidth), this.$wrapper.width(this._handleWidth + this._labelWidth)
                }
            }, {
                key: '_containerPosition',
                value: function () {
                    var l = this,
                        m = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.options.state,
                        n = arguments[1];
                    this.$container.css('margin-left', function () {
                        var o = [0, '-' + l._handleWidth + 'px'];
                        return l.options.indeterminate ? '-' + l._handleWidth / 2 + 'px' : m ? l.options.inverse ? o[1] : o[0] : l.options.inverse ? o[0] : o[1]
                    })
                }
            }, {
                key: '_init',
                value: function () {
                    var l = this,
                        m = function () {
                            l.setPrevOptions(), l._width(), l._containerPosition(), setTimeout(function () {
                                if (l.options.animate) return l.$wrapper.addClass(l._getClass('animate'))
                            }, 50)
                        };
                    if (this.$wrapper.is(':visible')) return void m();
                    var n = window.setInterval(function () {
                        if (l.$wrapper.is(':visible')) return m(), window.clearInterval(n)
                    }, 50)
                }
            }, {
                key: '_elementHandlers',
                value: function () {
                    var l = this;
                    return this.$element.on({
                        'setPreviousOptions.bootstrapSwitch': this.setPrevOptions.bind(this),
                        'previousState.bootstrapSwitch': function () {
                            l.options = l.prevOptions, l.options.indeterminate && l.$wrapper.addClass(l._getClass('indeterminate')), l.$element.prop('checked', l.options.state).trigger('change.bootstrapSwitch', !0)
                        },
                        'change.bootstrapSwitch': function (n, o) {
                            n.preventDefault(), n.stopImmediatePropagation();
                            var p = l.$element.is(':checked');
                            l._containerPosition(p), p === l.options.state || (l.options.state = p, l.$wrapper.toggleClass(l._getClass('off')).toggleClass(l._getClass('on')), !o && (l.$element.is(':radio') && g('[name="' + l.$element.attr('name') + '"]').not(l.$element).prop('checked', !1).trigger('change.bootstrapSwitch', !0), l.$element.trigger('switchChange.bootstrapSwitch', [p])))
                        },
                        'focus.bootstrapSwitch': function (n) {
                            n.preventDefault(), l.$wrapper.addClass(l._getClass('focused'))
                        },
                        'blur.bootstrapSwitch': function (n) {
                            n.preventDefault(), l.$wrapper.removeClass(l._getClass('focused'))
                        },
                        'keydown.bootstrapSwitch': function (n) {
                            !n.which || l.options.disabled || l.options.readonly || (37 === n.which || 39 === n.which) && (n.preventDefault(), n.stopImmediatePropagation(), l.state(39 === n.which))
                        }
                    })
                }
            }, {
                key: '_handleHandlers',
                value: function () {
                    var l = this;
                    return this.$on.on('click.bootstrapSwitch', function (m) {
                        return m.preventDefault(), m.stopPropagation(), l.state(!1), l.$element.trigger('focus.bootstrapSwitch')
                    }), this.$off.on('click.bootstrapSwitch', function (m) {
                        return m.preventDefault(), m.stopPropagation(), l.state(!0), l.$element.trigger('focus.bootstrapSwitch')
                    })
                }
            }, {
                key: '_labelHandlers',
                value: function () {
                    var l = this;
                    this.$label.on({
                        click: function (o) {
                            o.stopPropagation()
                        },
                        'mousedown.bootstrapSwitch touchstart.bootstrapSwitch': function (o) {
                            l._dragStart || l.options.disabled || l.options.readonly || (o.preventDefault(), o.stopPropagation(), l._dragStart = (o.pageX || o.originalEvent.touches[0].pageX) - parseInt(l.$container.css('margin-left'), 10), l.options.animate && l.$wrapper.removeClass(l._getClass('animate')), l.$element.trigger('focus.bootstrapSwitch'))
                        },
                        'mousemove.bootstrapSwitch touchmove.bootstrapSwitch': function (o) {
                            if (null != l._dragStart) {
                                var p = (o.pageX || o.originalEvent.touches[0].pageX) - l._dragStart;
                                o.preventDefault(), p < -l._handleWidth || 0 < p || (l._dragEnd = p, l.$container.css('margin-left', l._dragEnd + 'px'))
                            }
                        },
                        'mouseup.bootstrapSwitch touchend.bootstrapSwitch': function (o) {
                            if (l._dragStart) {
                                if (o.preventDefault(), l.options.animate && l.$wrapper.addClass(l._getClass('animate')), l._dragEnd) {
                                    var p = l._dragEnd > -(l._handleWidth / 2);
                                    l._dragEnd = !1, l.state(l.options.inverse ? !p : p)
                                } else l.state(!l.options.state);
                                l._dragStart = !1
                            }
                        },
                        'mouseleave.bootstrapSwitch': function () {
                            l.$label.trigger('mouseup.bootstrapSwitch')
                        }
                    })
                }
            }, {
                key: '_externalLabelHandler',
                value: function () {
                    var l = this,
                        m = this.$element.closest('label');
                    m.on('click', function (n) {
                        n.preventDefault(), n.stopImmediatePropagation(), n.target === m[0] && l.toggleState()
                    })
                }
            }, {
                key: '_formHandler',
                value: function () {
                    var l = this.$element.closest('form');
                    l.data('bootstrap-switch') || l.on('reset.bootstrapSwitch', function () {
                        window.setTimeout(function () {
                            l.find('input').filter(function () {
                                return g(this).data('bootstrap-switch')
                            }).each(function () {
                                return g(this).bootstrapSwitch('state', this.checked)
                            })
                        }, 1)
                    }).data('bootstrap-switch', !0)
                }
            }, {
                key: '_getClass',
                value: function (l) {
                    return this.options.baseClass + '-' + l
                }
            }, {
                key: '_getClasses',
                value: function (l) {
                    return g.isArray(l) ? l.map(this._getClass.bind(this)) : [this._getClass(l)]
                }
            }]), j
        }();
    g.fn.bootstrapSwitch = function (j) {
        for (var l = arguments.length, m = Array(1 < l ? l - 1 : 0), n = 1; n < l; n++) m[n - 1] = arguments[n];
        return Array.prototype.reduce.call(this, function (o, p) {
            var q = g(p),
                r = q.data('bootstrap-switch'),
                s = r || new h(p, j);
            return r || q.data('bootstrap-switch', s), 'string' == typeof j ? s[j].apply(s, m) : o
        }, this)
    }, g.fn.bootstrapSwitch.Constructor = h, g.fn.bootstrapSwitch.defaults = {
        state: !0,
        size: null,
        animate: !0,
        disabled: !1,
        readonly: !1,
        indeterminate: !1,
        inverse: !1,
        radioAllOff: !1,
        onColor: 'primary',
        offColor: 'default',
        onText: 'ON',
        offText: 'OFF',
        labelText: '&nbsp',
        handleWidth: 'auto',
        labelWidth: 'auto',
        baseClass: 'bootstrap-switch',
        wrapperClass: 'wrapper',
        onInit: function () {
        },
        onSwitchChange: function () {
        }
    }
});