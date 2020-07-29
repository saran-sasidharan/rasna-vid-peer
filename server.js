const { PeerServer } = require('peer');

const port = process.env.PORT || 3001
const peerServer = PeerServer({ port: port, path: '/' });
