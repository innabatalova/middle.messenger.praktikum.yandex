enum METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

type Options = {
  timeout?: number;
  method: string;
  headers?: Record<string, string>;
  data?: Record<string, any>;
};

class HTTPTransport {
  public get = (url: string, options: Options) => {
    return this.request(
      url,
      { ...options, method: METHODS.GET },
      options.timeout
    );
  };

  public post = (url: string, options: Options) => {
    return this.request(
      url,
      { ...options, method: METHODS.POST },
      options.timeout
    );
  };

  public put = (url: string, options: Options) => {
    return this.request(
      url,
      { ...options, method: METHODS.PUT },
      options.timeout
    );
  };

  public delete = (url: string, options: Options) => {
    return this.request(
      url,
      { ...options, method: METHODS.DELETE },
      options.timeout
    );
  };

  private queryStringify(data: Record<string, any>) {
    if (typeof data !== "object") {
      throw new Error("Тело запроса должно быть объектом");
    }

    const keys = Object.keys(data);

    return keys.reduce((result, key, index) => {
      return `${result}${key}=${data[key]}${
        index < keys.length - 1 ? "&" : ""
      }`;
    }, "?");
  }

  private request = (url: string, options: Options, timeout = 3000) => {
    const { headers = {}, method, data } = options;

    return new Promise((res, rej) => {
      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(
        method,
        isGet && data ? `${url}${this.queryStringify(data)}` : url
      );

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.timeout = timeout;

      xhr.onload = () => res(xhr);
      xhr.onabort = rej;
      xhr.onerror = rej;
      xhr.ontimeout = rej;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}

export default HTTPTransport;
