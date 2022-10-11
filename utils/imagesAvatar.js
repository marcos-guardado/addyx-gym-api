const imagesAvaliables = [
  "https://i.imgur.com/dKi2BEx.png",
  "https://i.imgur.com/tSXURMZ.jpg",
  "https://i.imgur.com/SH9QeQt.png",
  "https://i.imgur.com/KE9EDqC.png",
];

const generateRandomPhoto = () => {
  const imageLink =
    imagesAvaliables[Math.floor(Math.random() * imagesAvaliables.length)];
  return imageLink;
};

module.exports = generateRandomPhoto;
