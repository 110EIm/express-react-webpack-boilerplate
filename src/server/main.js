import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

import express from 'express';
import logger from 'morgan';
import path from 'path';

import index from './routes';

const app = express();
const port = 3000;
const devPort = 4000;

app.use('/', express.static(path.join(__dirname, './../../public')));
app.use(logger('dev'));

//Routers
app.use('/', index);

/* support client-side routing */
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../../public/index.html'));
});

app.listen(port, () => {
    console.log('Express is listening on port', port);
});

if (process.env.NODE_ENV === 'development') {
    console.log('Server is running on development mode');
    const config = require('../../webpack.dev.config');
    const compiler = webpack(config);
    const devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(devPort,
        () => console.log('webpack-dev-server is listening on port', devPort));
}
