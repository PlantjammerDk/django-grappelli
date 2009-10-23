$.fx.off = true;
$.fx.speeds._default = 0; // force fx.off for jQuery < 1.8 (http://dev.jqueryui.com/ticket/4328)
$('#bookmarks').gBookmarks({url: BOOKMARKS_URL});
$('.changelist-content').gChangelist();
$('#changelist').gActions();
$('input.vTimeField').gTimeField({
    buttons: [
        {label: gettext("Now"), callback: function(e, ui){ 
            return ui.element.val(new Date().getHourMinuteSecond()); 
        }},
        {label: gettext("Midnight"), callback: function(e, ui){ 
            return ui.element.val('00:00:00'); 
        }},
        {label: gettext("6 a.m."), callback: function(e, ui){ 
            return ui.element.val('06:00:00'); 
        }},
        {label: gettext("Noon"), callback: function(e, ui){ 
            return ui.element.val('12:00:00'); 
        }}
    ]
});
$('input.vDateField').gDateField();
$('.inline-group').gInlineGroup();
$('.inline-stacked').gInlineStacked();
$('.inline-tabular').gInlineTabular();
$('input[name*="object_id"]').gRelated({url: '{% url grp_related_lookup %}'});
$('.ui-gAutoSlugField').gAutoSlugField();
