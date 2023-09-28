import 'dart:developer';
import 'package:app_settings/app_settings.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:timezone/timezone.dart';
import 'package:get/get.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';

class NotificationController extends GetxController {
  FlutterLocalNotificationsPlugin flutterLocalNotificationsPlugin =
      FlutterLocalNotificationsPlugin();

  FirebaseMessaging messaging = FirebaseMessaging.instance;

  @override
  void onInit() async {
    super.onInit();
    AndroidInitializationSettings androidInitializationSettings =
        const AndroidInitializationSettings(
      "@mipmap/ic_launcher",
    );

    InitializationSettings initializationSettings = InitializationSettings(
      android: androidInitializationSettings,
    );

    bool? initialise = await flutterLocalNotificationsPlugin.initialize(
      initializationSettings,
    );

    log('Notification $initialise');
  }

  void requestPermission() async {
    NotificationSettings settings = await messaging.requestPermission(
      alert: true,
      announcement: false,
      badge: true,
      carPlay: false,
      criticalAlert: false,
      provisional: false,
      sound: true,
    );
    log('User granted permission: ${settings.authorizationStatus}');
    if (settings.authorizationStatus == AuthorizationStatus.authorized) {
      getToken();
    } else if (settings.authorizationStatus ==
        AuthorizationStatus.provisional) {
      getToken();
    } else {
      AppSettings.openAppSettings();
      log('User declined or has not accepted permission');
    }
  }

  void getToken() async {
    String? token = await messaging.getToken();
    log('Token: $token');
  }

  AndroidNotificationDetails androidDetails = const AndroidNotificationDetails(
    "ayush",
    "ayush",
    priority: Priority.high,
    importance: Importance.high,
  );
  void showNotification() {
    NotificationDetails notiDetails =
        NotificationDetails(android: androidDetails);

    flutterLocalNotificationsPlugin.show(1, "ayush", "body", notiDetails);
  }

//custom notification
  void showCustomNotification() {
    NotificationDetails notiDetails =
        NotificationDetails(android: androidDetails);

    flutterLocalNotificationsPlugin.show(
      1,
      "ayush",
      "body",
      notiDetails,
      payload: "Custom Notification",
    );
  }

  void showScheduledNotification() async {
    NotificationDetails notiDetails =
        NotificationDetails(android: androidDetails);

    await flutterLocalNotificationsPlugin.zonedSchedule(
      1,
      "ayush",
      "body",
      TZDateTime.now(local).add(const Duration(seconds: 5)),
      notiDetails,
      uiLocalNotificationDateInterpretation:
          UILocalNotificationDateInterpretation.absoluteTime,
      payload: "Scheduled Notification",
    );
  }

  void showPeriodicNotification() async {
    NotificationDetails notiDetails =
        NotificationDetails(android: androidDetails);

    await flutterLocalNotificationsPlugin.periodicallyShow(
      1,
      "ayush",
      "body",
      RepeatInterval.everyMinute,
      notiDetails,
      payload: "Periodic Notification",
    );
  }

  void showNotificationWithAttachment() async {
    NotificationDetails notiDetails =
        NotificationDetails(android: androidDetails);

    await flutterLocalNotificationsPlugin.show(
      1,
      "ayush",
      "body",
      notiDetails,
      payload: "Custom Notification",
    );
  }
}
