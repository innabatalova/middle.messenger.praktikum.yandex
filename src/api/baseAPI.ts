import HTTPTransport from "../utils/HTTPTransport";

abstract class BaseAPI {
  http;
  baseUrl: string;

  public constructor() {
    this.http = HTTPTransport;
    this.baseUrl = "https://ya-praktikum.tech/api/v2";
  }
}

export default BaseAPI;
