import 'package:codingcontest/data/response/status.dart';

class ApiResponse<T> {
  Status? status;
  T? data;
  String? message;

  ApiResponse(
      {required this.status, required this.data, required this.message});

  ApiResponse.loading() : status = Status.loading;
  ApiResponse.completed(this.data) : status = Status.success;
  ApiResponse.error(this.message) : status = Status.error;

  @override
  String toString() {
    return "Status : $status \n Message : $message \n Data : $data";
  }
}
