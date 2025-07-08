

import liveServer from 'live-server';


const params = {
  host:'localhost',
  port:3000,
  open:false,
  mount:[['/', './public'], ['/src', './src']]
}



liveServer.start(params);