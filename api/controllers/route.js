module.exports = {


  friendlyName: 'Route',


  description: 'Route something.',


  inputs: {
    routename: {
      description: 'The routes of the app to look up.',
      // By declaring a numeric example, Sails will automatically respond with `res.badRequest`
      // if the `userId` parameter is not a number.
      type: 'string',
      // By making the `userId` parameter required, Sails will automatically respond with
      // `res.badRequest` if it's left out.
      required: false
    }
  },


  exits: {

  },


  fn: async function (inputs, routename) {   
    return [
      {
        sort: 1,
        type: 'slider',
        data: [
          {
            id: '1',
            link: '/home',
            image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
            description: '',
            title: 'One',
          },
          {
            id: '2',
            link: '/home',
            image: 'https://static.toiimg.com/photo/72975551.cms',
            description: '',
            title: 'Two',
          },
          {
            id: '3',
            link: '/home',
            image: 'https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0=',
            description: '',
            title: 'Three',
          },
          {
            id: '4',
            link: '/home',
            image: 'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg',
            description: '',
            title: 'Four',
          },
          {
            id: '5',
            link: '/home',
            image: 'https://www.freedigitalphotos.net/images/img/homepage/394230.jpg',
            description: '',
            title: 'Five',
          },
        ]
      }
    ]
  }
};
