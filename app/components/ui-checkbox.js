import Ember from 'ember';

export default Ember.Component.extend({
    /**
     * The root component element
     *
     * @property {Ember.String} tagName
     * @default  "input"
     */
    tagName: 'div',
    
    /**
     * Class names to apply to the button
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'ui', 'checkbox'],

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    /**
     * Alert external code about the click
     *
     * @function click
     * @returns  {void}
     */
    click: function() {
        this.sendAction();
    },

    /**
     * Class bindings for the button component
     *
     * @property {Ember.Array} classNameBindings
     */
    classNameBindings: ['theme'],
    theme: '',

    /**
     * Attribute bindings for the button component
     *
     * @property {Ember.String} attributeBindings
     */
    value: null,

    /**
     * Attribute bindings for the button component
     *
     * @property {Ember.String} attributeBindings
     */
    checked: null,    
    /**
     * Attribute bindings for the button component
     *
     * @property {Ember.String} attributeBindings
     */
    name: null,

    initialize: function(argument) {
        this.$().checkbox();
        var name = this.get('name'), 
            value = this.get('value'), 
            input = this.$("input"),
            checked = this.get('checked');
            
        if(name){
            input.attr("name", name);
        }

        if(value){
            input.attr("value", value);
        }

        if(checked){
            input.attr("checked", "checked");
        }else {
            input.removeAttr("checked", "");
        }

        this.$('input').change(Ember.run.bind(this, function() {
            this.set('value', this.$('input:checked').val());
            this.set('checked', this.$().find("input").attr("checked"));
        }));

    }.on('didInsertElement')
});
