import 'package:codingcontest/res/getx_localization/languages.dart';
import 'package:codingcontest/res/routes/routes.dart';
// import 'package:codingcontest/view/splash.screen.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      title: 'Coding Contest',
      translations: Languages(),
      locale: const Locale('en', 'US'),
      fallbackLocale: const Locale('en', 'US'),
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      // home: const SplashScreen(),
      getPages: AppRoutes.appRoutes(),
    );
  }
}
