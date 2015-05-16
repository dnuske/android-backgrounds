
destinationDir = 'android-background'

if (Meteor.isClient) {
  // This code only runs on the web browser
}

if (Meteor.isServer) {
  //this code runs only on server
}

if(Meteor.isCordova){
  //this code runs only on mobile

  Template.image_rack.helpers({
    images: [
      { title: "Grumpy cat", path: '/grumpycat.jpg' },
      { title: "Toptal", path: '/toptal.jpg' },
      { title: "Mountain", path: '/mountains.jpg' }
    ]
  });

  Template.image_shelf.events({
    "click .shelf_container": function(e){
      console.log("click .shelf_container --> setting up walpaper");
      setWalpaper('www/application' + this.path, this.title, destinationDir);
    }
  })

  function setWalpaper(imagePath, imageTitle, folderName){
    var success = function() { alert("Walpaper set!"); };           // Do something on success return.
    var error = function(message) { alert("error-> " + message); };   // Do something on error return.
    wallpaper.setImage(imagePath, imageTitle, folderName, success, error);
  }
}
