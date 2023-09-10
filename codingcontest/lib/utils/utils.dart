import 'dart:io';

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:fluttertoast/fluttertoast.dart';

class Utils {
  static String getPlatformName() {
    return Platform.isAndroid ? 'Android' : 'iOS';
  }

  static String getPlatformVersion() {
    return Platform.version;
  }

  // This method is used to change the focus from one field to another
  static void fieldFocusChange(
      {required BuildContext context,
      required FocusNode currentFocus,
      required FocusNode nextFocus}) {
    currentFocus.unfocus();
    FocusScope.of(context).requestFocus(nextFocus);
  }

  // This method is used to show a snackbar
  static void showSnackBar(
      {required String title,
      required String message,
      required Color backgroundColor}) {
    Get.snackbar(
      title,
      message,
      snackPosition: SnackPosition.BOTTOM,
      backgroundColor: backgroundColor,
      colorText: Colors.white,
      margin: const EdgeInsets.all(10),
      borderRadius: 10,
      duration: const Duration(seconds: 3),
    );
  }

  // This method is used to show a toast message
  static void showToast({required String message}) {
    Fluttertoast.showToast(
      msg: message,
      toastLength: Toast.LENGTH_SHORT,
      gravity: ToastGravity.BOTTOM,
      backgroundColor: Colors.grey[800],
      textColor: Colors.white,
      fontSize: 16.0,
    );
  }
}
