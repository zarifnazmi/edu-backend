import { ServerResponse }  from 'http';

export default ( res: ServerResponse) => {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Path Not Found');
};