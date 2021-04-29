import FBXLoader from './fbx-loader';

export function loadFBX(fbxFile) {
  return new Promise((resolve, reject) => {
      let fbxLoader = new FBXLoader();
      fbxLoader.load(fbxFile, object => resolve(object));
  });
}

