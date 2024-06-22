# HTTP Status Codes

HTTP status codes are used to communicate the status of a request between the client and the server. These codes are divided into five categories:

1. **1xx Informational**
2. **2xx Success**
3. **3xx Redirection**
4. **4xx Client Errors**
5. **5xx Server Errors**

## 1xx Informational

1xx status codes inform the client that the request has been received and is continuing to be processed.

- **100 Continue**: Indicates that the initial part of the request has been received and the client should continue with the request.
- **101 Switching Protocols**: Indicates that the server is switching protocols as requested by the client.

## 2xx Success

2xx status codes indicate that the request was successfully received, understood, and accepted.

- **200 OK**: The request was successful.
- **201 Created**: The request was successful and a new resource was created.
- **202 Accepted**: The request has been received but not yet acted upon.
- **204 No Content**: The request was successful but there is no content to send in the response.

## 3xx Redirection

3xx status codes indicate that further action needs to be taken by the client to complete the request.

- **301 Moved Permanently**: The requested resource has been permanently moved to a new URL.
- **302 Found**: The requested resource is temporarily available at a different URL.
- **304 Not Modified**: The requested resource has not been modified since the last request.

## 4xx Client Errors

4xx status codes indicate that the client made an error in the request.

- **400 Bad Request**: The request could not be understood by the server due to malformed syntax.
- **401 Unauthorized**: The request requires user authentication.
- **403 Forbidden**: The server understood the request, but is refusing to fulfill it.
- **404 Not Found**: The server has not found anything matching the requested URL.
- **405 Method Not Allowed**: The method specified in the request is not allowed for the resource.
- **409 Conflict**: The request could not be completed due to a conflict with the current state of the resource.
- **429 Too Many Requests**: The client has sent too many requests in a given amount of time.

## 5xx Server Errors

5xx status codes indicate that the server encountered an error while processing the request.

- **500 Internal Server Error**: The server encountered an unexpected condition which prevented it from fulfilling the request.
- **501 Not Implemented**: The server does not support the functionality required to fulfill the request.
- **502 Bad Gateway**: The server received an invalid response from an upstream server.
- **503 Service Unavailable**: The server is currently unable to handle the request due to temporary overload or maintenance.
- **504 Gateway Timeout**: The server did not receive a timely response from an upstream server.

## Usage Guidelines

- **200 OK**: Use when the request is successfully processed and data is returned.
- **201 Created**: Use when a new resource is successfully created, such as a new user registration.
- **204 No Content**: Use when the request is successful but there is no content to return, such as after a resource is deleted.
- **400 Bad Request**: Use when there is an error in the request from the client's side, such as missing parameters.
- **401 Unauthorized**: Use when authentication is required.
- **403 Forbidden**: Use when the client is authenticated but does not have permission to access the resource.
- **404 Not Found**: Use when the requested resource is not found on the server.
- **409 Conflict**: Use when there is a conflict with the current state of the resource, such as duplicate data entry.
- **500 Internal Server Error**: Use when there is an unexpected error on the server's side.
- **503 Service Unavailable**: Use when the server is temporarily unavailable due to overload or maintenance.

These guidelines provide a basic understanding of when to use each status code, although specific use cases may vary.
