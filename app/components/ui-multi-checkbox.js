import Ember from 'ember';

export default Ember.Component.extend({

    /**
     * The root component element
     *
     * @property {Ember.String} tagName
     * @default  "div"
     */
    tagName: 'div',

    /**
     * Attribute bindings for the checkbox component
     *
     * @property {Ember.String} attributeBindings
     */
    value: [],

    /**
     * Attribute bindings for the checkbox component
     *
     * @property {Ember.String} attributeBindings
     */
    name: null,

    /**
     * Attribute bindings for the checkbox component
     *
     * @property {Ember.String} attributeBindings
     */
    style: '',

    /**
     * Attribute bindings for the checkbox component
     *
     * @property {Ember.String} attributeBindings
     */
    inlineDisplay: false,

    /**
     * Attribute bindings for the button component
     *
     * @property {Ember.Array} attributeBindings
     */
    attributeBindings: ['style'],

    /**
     * Class names to apply to the checkbox
     *
     * @property {Ember.Array} classNames
     */
    classNames: [],

    /**
     * Class bindings for the checkbox component
     *
     * @property {Ember.Array} classNameBindings
     */
    classNameBindings: ['inlineDisplayClass', 'theme'],
    theme: '',

    /**
     * Class string for the internal input element
     *
     * @function inputClass
     * @returns  {string}
     */
    inlineDisplayClass: function (argument) {
        if(this.get('inlineDisplay')){
            return 'inline fields';
        }else {
            return '';
        }
    }.property(),

    /**
     * Class bindings for the checkbox component
     *
     * @property {Ember.Array} classNameBindings
     */
    options: [],

    initialize: function (argument) {
        this.$('input').change(Ember.run.bind(this, function() {
            var newValue = this.$('input:checked').map(function(index, item){
                return $(item).val();
            });
            this.set('value', newValue.toArray());
        }));
        var that = this;
        this.$('input').each(function(index, item){
            if(that.get('value').indexOf($(item).val())>=0){
                $(item).prop('checked', true);
            }
        });

    }.on('didInsertElement')
});
