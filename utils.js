const utils = (function () {
  return {
    getDefaultSchemaOptions() {
      return {
        toObject: {
          transform: function (doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            return ret;
          },
        },
        toJSON: {
          transform: function (doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            return ret;
          },
        },
      };
    }
  };
})();

module.exports = utils;