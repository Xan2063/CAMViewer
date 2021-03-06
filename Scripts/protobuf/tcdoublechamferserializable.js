/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tutorial.TcDoubleChamferSerializable');

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
proto.tutorial.TcDoubleChamferSerializable = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tutorial.TcDoubleChamferSerializable, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tutorial.TcDoubleChamferSerializable.displayName = 'proto.tutorial.TcDoubleChamferSerializable';
}


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
proto.tutorial.TcDoubleChamferSerializable.prototype.toObject = function(opt_includeInstance) {
  return proto.tutorial.TcDoubleChamferSerializable.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tutorial.TcDoubleChamferSerializable} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tutorial.TcDoubleChamferSerializable.toObject = function(includeInstance, msg) {
  var f, obj = {
    hasreversedspin: msg.getHasreversedspin()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.tutorial.TcDoubleChamferSerializable} The clone.
 */
proto.tutorial.TcDoubleChamferSerializable.prototype.cloneMessage = function() {
  return /** @type {!proto.tutorial.TcDoubleChamferSerializable} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bool HasReversedSpin = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.tutorial.TcDoubleChamferSerializable.prototype.getHasreversedspin = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1, false));
};


/** @param {boolean} value  */
proto.tutorial.TcDoubleChamferSerializable.prototype.setHasreversedspin = function(value) {
  jspb.Message.setField(this, 1, value);
};


