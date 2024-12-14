import { HttpHandlerFn, HttpRequest } from "@angular/common/http";

const API_HEADER:string = "X-API-KEY";

const API_TOKEN:string = "rgirodon";

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {

    // Clone the request to add the authentication header.
    const newReq = req.clone({
        headers: req.headers.append(API_HEADER, API_TOKEN),
    });

    return next(newReq);
}