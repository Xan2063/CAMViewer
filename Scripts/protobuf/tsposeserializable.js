/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tutorial.TsPoseSerializable');

goog.require('jspb.Message');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tutorial.TsPoseSerializable = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tutorial.TsPoseSerializable.repeatedFields_, null);
};
goog.inherits(proto.tutorial.TsPoseSerializable, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tutorial.TsPoseSerializable.displayName = 'proto.tutorial.TsPoseSerializable';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tutorial.TsPoseSerializable.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tutorial.TsPoseSerializable.prototype.toObject = function(opt_includeInstance) {
  return proto.tutorial.TsPoseSerializable.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tutorial.TsPoseSerializable} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tutorial.TsPoseSerializable.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementsList: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.tutorial.TsPoseSerializable} The clone.
 */
proto.tutorial.TsPoseSerializable.prototype.cloneMessage = function() {
  return /** @type {!proto.tutorial.TsPoseSerializable} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated double Elements = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.tutorial.TsPoseSerializable.prototype.getElementsList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 1));
};


/** @param {Array.<number>} value  */
proto.tutorial.TsPoseSerializable.prototype.setElementsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


