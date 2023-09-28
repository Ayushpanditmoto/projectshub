import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:codingcontest/controllers/notification.controller.dart';

class SplashScreen extends StatelessWidget {
  const SplashScreen({super.key});

  void showNotification() {
    NotificationController notificationController =
        Get.put(NotificationController());
    notificationController.showNotification();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: const Center(
          child: Text('Splash Screen'),
        ),
        floatingActionButton: FloatingActionButton(
            onPressed: showNotification,
            child: const Icon(Icons.notification_add)));
  }
}
