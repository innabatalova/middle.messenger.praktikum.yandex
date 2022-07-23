enum METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

type Options = {
  method: string;
  timeout?: number;
  credentials?: boolean;
  mode?: string;
  headers?: Record<string, string>;
  body?: Record<string, any>;
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

  private request = (url: string, options: Options, timeout = 5000) => {
    const { headers = {}, method, credentials, data, body } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(
        method,
        isGet && data ? `${url}${this.queryStringify(data)}` : url
      );

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      if (credentials) {
        xhr.withCredentials = true;
      }

      xhr.responseType = "json";
      xhr.timeout = timeout;

      xhr.onload = () => resolve(xhr);
      xhr.onabort = () => reject(new Error("Обрыв соединения"));
      xhr.onerror = () => reject(new Error("Ошибка соединения"));
      xhr.ontimeout = () => reject(new Error("Время ожидания ответа истекло"));

      if (isGet) {
        xhr.send();
      }

      if (body) {
        xhr.send(JSON.stringify(body));
      }

      if (!isGet && data) {
        xhr.send(data as Document);
      }
    });
  };
}

export default new HTTPTransport();
