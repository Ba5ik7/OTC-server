module.exports = {

  // friendlyName: 'Hello',

  // description: 'Hello something.',

  inputs: {
    userId: {
      description: 'The ID of the user to look up.',
      // By declaring a numeric example, Sails will automatically respond with `res.badRequest`
      // if the `userId` parameter is not a number.
      type: 'number',
      // By making the `userId` parameter required, Sails will automatically respond with
      // `res.badRequest` if it's left out.
      required: false
    }
  },

  exits: {

  },

  fn: async function (inputs) {
    // All done.
    return [
      { name: 'Home', link: '/home' },
      { name: 'Events', link: '/events' },
      { name: 'Things To Do', link: '/things-to-do' },
      { name: 'News', link: '/news' },
      { name: 'Get Involved', link: '/get-involved' },
      { name: 'About OTC', link: '/about-otc' },
    ]
  }
};
