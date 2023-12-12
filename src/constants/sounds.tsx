let Sound, vol1, vol2, vol3, vol4; //bug in library of react native sound ts

if (process.env.NODE_ENV !== 'test') {
  Sound = require('react-native-sound');
  vol1 = require('../sound/1.mp3');
  vol2 = require('../sound/2.mp3');
  vol3 = require('../sound/3.mp3');
  vol4 = require('../sound/4.mp3');

  const vol1Play = new Sound(vol1, (error: any) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    vol1Play.setVolume(1);
  });

  const vol2Play = new Sound(vol2, (error: string) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    vol2Play.setVolume(1);
  });

  const vol3Play = new Sound(vol3, (error: string) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    vol3Play.setVolume(1);
  });

  const vol4Play = new Sound(vol4, (error: string) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    vol4Play.setVolume(1);
  });

  module.exports = {
    vol1Play,
    vol2Play,
    vol3Play,
    vol4Play,
  };
}
