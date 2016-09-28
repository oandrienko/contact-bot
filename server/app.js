import express from 'express';
import path from 'path';
import clc from 'cli-color'

import config from './server/config';

let app = express();
app.set('port', process.env.PORT || 8000);

app = config(app);

app.listen(app.get('port'), () => {
  if (app.get('env') === 'development')
  	console.log(clc.cyanBright('Server is running on port ' + app.get('port')));
});

