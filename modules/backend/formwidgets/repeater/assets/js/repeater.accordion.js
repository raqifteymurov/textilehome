/*
 * Field Repeater - Standard Mode
 *
 * Logic fo rthe standard visual mode
 *
 */
+function ($) { "use strict";

    // NAMESPACES
    // ============================

    if ($.oc === undefined) {
        $.oc = {};
    }

    if ($.oc.fieldRepeater === undefined) {
        $.oc.fieldRepeater = {};
    }

    var RepeaterStandard = function() {};

    RepeaterStandard.prototype.initStandardMode = function() {
        // Overrides
        this.selectorToolbar = '> .field-repeater-toolbar:first';
        this.selectorHeader = '> .field-repeater-items > .field-repeater-item > .repeater-header';
        this.selectorSortable = '> .field-repeater-items';
        this.selectorChecked = '> .field-repeater-items > .field-repeater-item > .repeater-header input[type=checkbox]:checked';
        this.eventSortableOnEnd = null;
        this.eventOnChange = null;
        this.eventOnAddItem = null;
        this.eventOnRemoveItem = null;
        this.eventMenuFilter = this.standardMenuFilter;

        // Items
        var headSelect = this.selectorHeader;
        this.$el.on('dblclick', headSelect, this.proxy(this.dblclickItemHeader));
        this.$el.on('click', headSelect + ' [data-repeater-expand]', this.proxy(this.toggleCollapse));
        this.$el.on('click', headSelect + ' [data-repeater-collapse]', this.proxy(this.toggleCollapse));
    }

    RepeaterStandard.prototype.disposeStandardMode = function() {
        // Items
        var headSelect = this.selectorHeader;
        this.$el.off('dblclick', headSelect, this.proxy(this.dblclickItemHeader));
        this.$el.off('click', headSelect + ' [data-repeater-expand]', this.proxy(this.toggleCollapse));
        this.$el.off('click', headSelect + ' [data-repeater-collapse]', this.proxy(this.toggleCollapse));
    }

    RepeaterStandard.prototype.standardMenuFilter = function($item, $list) {
        // Hide/show remove button and divider
        $('[data-repeater-remove]', $list).closest('li').toggleClass('disabled', !this.canRemove);

        // Hide/show up/down
        $('[data-repeater-move-up]', $list).closest('li').toggle(!!$item.prev().length);
        $('[data-repeater-move-down]', $list).closest('li').toggle(!!$item.next().length);

        // Hide/show expand/collapse
        $('[data-repeater-expand]', $list).closest('li').toggle($item.hasClass('collapsed'));
        $('[data-repeater-collapse]', $list).closest('li').toggle(!$item.hasClass('collapsed'));
    }

    RepeaterStandard.prototype.dblclickItemHeader = function(ev) {
        var $target = $(ev.target);
        if (
            !$target.hasClass('repeater-header') &&
            !$target.hasClass('repeater-item-title') &&
            !$target.hasClass('repeater-item-checkbox')
        ) {
            return;
        }

        var $item = $target.closest('.field-repeater-item');
        $item.hasClass('collapsed') ? this.expand($item) : this.collapse($item);
    }

    RepeaterStandard.prototype.toggleCollapse = function(ev) {
        var self = this,
            $item = $(ev.target).closest('.field-repeater-item'),
            isCollapsed = $item.hasClass('collapsed');

        ev.preventDefault();

        if (this.getStyle() === 'accordion') {
            if (isCollapsed) {
                this.collapseAll();
                this.expand($item);
            }
            return;
        }

        var $items = this.getCheckedItemsOrItem($item);
        $.each($items, function(k, item) {
            isCollapsed ? self.expand($(item)) : self.collapse($(item));
        });
    }

    RepeaterStandard.prototype.collapseAll = function() {
        var self = this,
            $items = $('> .field-repeater-item', this.$itemContainer);

        $.each($items, function(key, item){
            self.collapse($(item));
        });
    }

    RepeaterStandard.prototype.expandAll = function() {
        var self = this,
            $items = $('> .field-repeater-item', this.$itemContainer);

        $.each($items, function(key, item){
            self.expand($(item));
        });
    }

    RepeaterStandard.prototype.collapse = function($item) {
        $item.addClass('collapsed');

        $('> .repeater-header > .repeater-item-title', $item).text(this.getCollapseTitle($item));
    }

    RepeaterStandard.prototype.expand = function($item) {
        $item.removeClass('collapsed');
    }

    $.oc.fieldRepeater.standardMode = RepeaterStandard;

}(window.jQuery);
