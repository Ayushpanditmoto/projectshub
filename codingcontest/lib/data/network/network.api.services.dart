import 'dart:convert';
import 'dart:io';

import 'package:codingcontest/data/app.exceptions.dart';
import 'package:codingcontest/data/network/base.api.services.dart';
import 'package:http/http.dart' as http;

class NetworkApiServices extends BaseApiServices {
  @override
  Future<dynamic> get(String url) async {
    dynamic responseJson;
    try {
      var response =
          await http.get(Uri.parse(url)).timeout(const Duration(seconds: 10));
      responseJson = _returnResponse(response);
    } on SocketException {
      throw InternetException("No Internet Connection");
    } on http.ClientException {
      throw FetchDataException("Error During Communication");
    } on FormatException {
      throw BadRequestException("Invalid Request");
    } catch (e) {
      throw UnauthorisedException(e.toString());
    }
    return responseJson;
  }

  dynamic _returnResponse(http.Response response) {
    switch (response.statusCode) {
      case 200:
        var responseJson = jsonDecode(response.body);
        return responseJson;
      case 400:
        throw BadRequestException(response.body.toString());
      case 401:
      case 403:
        throw UnauthorisedException(response.body.toString());
      case 500:
      default:
        throw FetchDataException(
            'Error occured while Communication with Server with StatusCode : ${response.statusCode}');
    }
  }
}
