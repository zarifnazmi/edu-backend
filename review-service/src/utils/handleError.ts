import { ServerResponse }  from 'http';

export default ( res: ServerResponse, message: string, statusCode: number) => {
    res.writeHead(statusCode || 500, {'Content-Type': 'text/plain'});
    res.end(message);
};