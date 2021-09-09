

module.exports = {
  before: {
    all: [],
    find: [
      function (context) {
        if (context.params?.query?.price) {
          for (const key in context.params?.query?.price) {
            context.params.query.price[key] = +context.params.query.price[key]
          }
        }
      }
    ],
    get: [
      
    ],
    create: [
      function (context) {
        // console.log(context)
        if (!context.data?.title) {
          throw new Error('title is required')
        }
      }
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
