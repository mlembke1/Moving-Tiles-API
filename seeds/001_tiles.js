exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tiles').del()
    .then(function() {
      // Inserts seed entries
      return knex('tiles').insert([
        {id: 1, imagePath: 'https://img2.storyblok.com/1600x0/filters:quality(95)/f/42126/1200x900/ef38e00988/javascript-logo.png'},
        {id: 2, imagePath: 'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png'},
        {id: 3, imagePath: 'https://www.shareicon.net/data/512x512/2016/05/06/760858_html_512x512.png'},
        {id: 4, imagePath: 'http://futurewingsmedia.com/demos/web-designing-course/css-flat.png'},
        {id: 5, imagePath: 'https://cdn-images-1.medium.com/max/427/1*UMfUwzsm3lo230vWd2TMWw.png'},
        {id: 6, imagePath: 'http://www.stickpng.com/assets/images/5848152fcef1014c0b5e4967.png'},
        {id: 7, imagePath: 'http://icons-for-free.com/icon/download-code_development_logo_mysql_icon-204722.png'},
        {id: 8, imagePath: 'https://vector.me/files/images/2/8/284731/postgresql_logo'},
        {id: 9, imagePath: 'https://i.pinimg.com/originals/34/71/4b/34714b8ef3d6d9887936a942a613064e.png'},
        {id: 10, imagePath: 'https://arcweb.co/wp-content/uploads/2016/10/react-logo-1000-transparent.png'},
        {id: 11, imagePath: 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg'},
        {id: 12, imagePath: 'https://git-scm.com/images/logos/downloads/Git-Icon-Black.png'},
        {id: 13, imagePath: 'https://www.algarytm.com/wp-content/uploads/2016/09/ionic.png'},
        {id: 14, imagePath: 'http://res.cloudinary.com/colinstodd-com/image/upload/c_fit/xb5ji7lefpswrmrseisq.png'},
        {id: 15, imagePath: 'http://res.cloudinary.com/colinstodd-com/image/upload/c_fit/n9qdpfw4kwsjqox0lymi.png'},
        {id: 16, imagePath: 'http://www.stickpng.com/assets/images/5847f40ecef1014c0b5e488a.png'},
        {id: 17, imagePath: 'https://2.bp.blogspot.com/-DVuoJmAoO_I/WqFFIPRuyVI/AAAAAAABgbM/gxqVYKxMclQlJKWkkd6K0GbMtpxA1PsygCLcBGAs/s1600/FlaskLogo.png'},
        {id: 18, imagePath: 'https://user-images.githubusercontent.com/49339/32078472-5053adea-baa7-11e7-9034-519002f12ac7.png'}
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('tiles_id_seq', (SELECT MAX(id) FROM tiles))")
      })
    })
}

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
