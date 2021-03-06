/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tutorial.TcCuttingContourSerializable');

goog.require('jspb.Message');
goog.require('proto.tutorial.TcContourSerializable');


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
proto.tutorial.TcCuttingContourSerializable = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tutorial.TcCuttingContourSerializable, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tutorial.TcCuttingContourSerializable.displayName = 'proto.tutorial.TcCuttingContourSerializable';
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
proto.tutorial.TcCuttingContourSerializable.prototype.toObject = function(opt_includeInstance) {
  return proto.tutorial.TcCuttingContourSerializable.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tutorial.TcCuttingContourSerializable} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tutorial.TcCuttingContourSerializable.toObject = function(includeInstance, msg) {
  var f, obj = {
    hasreversedspin: msg.getHasreversedspin(),
    contour: (f = msg.getContour()) && proto.tutorial.TcContourSerializable.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.tutorial.TcCuttingContourSerializable} The clone.
 */
proto.tutorial.TcCuttingContourSerializable.prototype.cloneMessage = function() {
  return /** @type {!proto.tutorial.TcCuttingContourSerializable} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bool HasReversedSpin = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.tutorial.TcCuttingContourSerializable.prototype.getHasreversedspin = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1, false));
};


/** @param {boolean} value  */
proto.tutorial.TcCuttingContourSerializable.prototype.setHasreversedspin = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional TcContourSerializable Contour = 2;
 * @return {proto.tutorial.TcContourSerializable}
 */
proto.tutorial.TcCuttingContourSerializable.prototype.getContour = function() {
  return /** @type{proto.tutorial.TcContourSerializable} */ (
    jspb.Message.getWrapperField(this, proto.tutorial.TcContourSerializable, 2));
};


/** @param {proto.tutorial.TcContourSerializable|undefined} value  */
proto.tutorial.TcCuttingContourSerializable.prototype.setContour = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.tutorial.TcCuttingContourSerializable.prototype.clearContour = function() {
  this.setContour(undefined);
};


