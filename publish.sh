npm install
# 'tsc' needs this package to be installed. We have it as peerDependency so it won't get install by the above command.
npm install --no-save @react-native-community/art
npm run check
npm run build
