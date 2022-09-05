const csrfFetch = async (url, options = {}) => {
    options.method = options.method || 'GET';
    options.headers = options.headers || {};

    if (options.method.toUpperCase() !== 'GET') {
        options.headers['X-CSRF-TOKEN'] = sessionStorage.getItem('X-CSRF-TOKEN');
        options.headers['Content-Type'] ||= 'application/json';
    }
    const res = await fetch(url, options);
    if (res.status >= 400) throw res;
    return res

}

export const restoreCSRF = async () => {
    const res = await csrfFetch('api/session');
    storeCSRFToken(res);
    return res
}

export const storeCSRFToken = async (Response) => {
    const token = Response.headers.get('X-CSRF-TOKEN');
    if (token) sessionStorage.setItem('X-CSRF-TOKEN', token);
}

export default csrfFetch;