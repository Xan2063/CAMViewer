/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.tutorial.TcContourSplineSegmentSerializable');

goog.require('jspb.Message');
goog.require('proto.tutorial.TcDoublePoseTuple');


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
proto.tutorial.TcContourSplineSegmentSerializable = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tutorial.TcContourSplineSegmentSerializable.repeatedFields_, null);
};
goog.inherits(proto.tutorial.TcContourSplineSegmentSerializable, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tutorial.TcContourSplineSegmentSerializable.displayName = 'proto.tutorial.TcContourSplineSegmentSerializable';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tutorial.TcContourSplineSegmentSerializable.repeatedFields_ = [1];



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
proto.tutorial.TcContourSplineSegmentSerializable.prototype.toObject = function(opt_includeInstance) {
  return proto.tutorial.TcContourSplineSegmentSerializable.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tutorial.TcContourSplineSegmentSerializable} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tutorial.TcContourSplineSegmentSerializable.toObject = function(includeInstance, msg) {
  var f, obj = {
    doubleposetupleList: jspb.Message.toObjectList(msg.getDoubleposetupleList(),
    proto.tutorial.TcDoublePoseTuple.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.tutorial.TcContourSplineSegmentSerializable} The clone.
 */
proto.tutorial.TcContourSplineSegmentSerializable.prototype.cloneMessage = function() {
  return /** @type {!proto.tutorial.TcContourSplineSegmentSerializable} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated TcDoublePoseTuple doublePoseTuple = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.tutorial.TcDoublePoseTuple>}
 */
proto.tutorial.TcContourSplineSegmentSerializable.prototype.getDoubleposetupleList = function() {
  return /** @type{!Array.<!proto.tutorial.TcDoublePoseTuple>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tutorial.TcDoublePoseTuple, 1));
};


/** @param {Array.<!proto.tutorial.TcDoublePoseTuple>|undefined} value  */
proto.tutorial.TcContourSplineSegmentSerializable.prototype.setDoubleposetupleList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.tutorial.TcContourSplineSegmentSerializable.prototype.clearDoubleposetupleList = function() {
  this.setDoubleposetupleList([]);
};


