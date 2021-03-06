/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tutorial.TcContourSerializable');

goog.require('jspb.Message');
goog.require('proto.tutorial.TcSegmentSerializable');


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
proto.tutorial.TcContourSerializable = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tutorial.TcContourSerializable.repeatedFields_, null);
};
goog.inherits(proto.tutorial.TcContourSerializable, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tutorial.TcContourSerializable.displayName = 'proto.tutorial.TcContourSerializable';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tutorial.TcContourSerializable.repeatedFields_ = [2];



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
proto.tutorial.TcContourSerializable.prototype.toObject = function(opt_includeInstance) {
  return proto.tutorial.TcContourSerializable.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tutorial.TcContourSerializable} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tutorial.TcContourSerializable.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId(),
    segmentsList: jspb.Message.toObjectList(msg.getSegmentsList(),
    proto.tutorial.TcSegmentSerializable.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.tutorial.TcContourSerializable} The clone.
 */
proto.tutorial.TcContourSerializable.prototype.cloneMessage = function() {
  return /** @type {!proto.tutorial.TcContourSerializable} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 Id = 1;
 * @return {number}
 */
proto.tutorial.TcContourSerializable.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.tutorial.TcContourSerializable.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated TcSegmentSerializable Segments = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.tutorial.TcSegmentSerializable>}
 */
proto.tutorial.TcContourSerializable.prototype.getSegmentsList = function() {
  return /** @type{!Array.<!proto.tutorial.TcSegmentSerializable>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tutorial.TcSegmentSerializable, 2));
};


/** @param {Array.<!proto.tutorial.TcSegmentSerializable>|undefined} value  */
proto.tutorial.TcContourSerializable.prototype.setSegmentsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.tutorial.TcContourSerializable.prototype.clearSegmentsList = function() {
  this.setSegmentsList([]);
};


