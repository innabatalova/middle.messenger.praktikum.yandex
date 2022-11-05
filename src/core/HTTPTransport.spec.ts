import {expect} from 'chai';
import * as sinon from 'sinon';
import {beforeEach} from 'mocha';
import HTTPTransport from './HTTPTransport';

const baseUrl = '/api/v1';
const http = HTTPTransport;

const xhrMock = sinon.useFakeXMLHttpRequest();
(global as any).XMLHttpRequest = xhrMock;
import { Options } from "../api/baseAPI";

const options: Options = {
  method: "GET",
  credentials: true,
  headers: {
    "content-type": "application/json",
  },
};

describe('HTTP', function () {
  let server: sinon.SinonFakeServer;

  beforeEach(() => {
    server = sinon.fakeServer.create();
    server.respondWith(
      new RegExp(`${baseUrl}/(\\d+)`),
      (xhr: sinon.SinonFakeXMLHttpRequest, id?: string) => {
        xhr.respond(Number(id), {}, id || '');
      }
    );
    server.autoRespond = true;
  });

  describe('Get', function () {
    it('Should use GET method', function () {
      http.get('/200', options);

      expect(server.requests[0].method).to.equal('GET');
    });

    it('Should stringify data', function () {
      http.get('/200',options);

      expect(server.requests[0].url).to.equal('/200');
    });
  });

  describe('Post', function () {
    it('Should use POST method', function () {
      http.post('/200', options);

      expect(server.requests[0].method).to.equal('POST');
    });
  });

  describe('Put', function () {
    it('Should use PUT method', function () {
      http.put('/200', options);

      expect(server.requests[0].method).to.equal('PUT');
    });
  });

  describe('Delete', function () {
    it('Should use DELETE method', function () {
      http.delete('/200', options);

      expect(server.requests[0].method).to.equal('DELETE');
    });
  });
});