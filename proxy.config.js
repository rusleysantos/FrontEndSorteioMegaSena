const proxy = [{
    context: ['/api'],
    target: 'http://rusleysantos-001-site1.etempurl.com',
    secure: false,
    logLevel: 'debug',
    //pathRewrite: {'^/api' : ''}
}];
module.exports = proxy;