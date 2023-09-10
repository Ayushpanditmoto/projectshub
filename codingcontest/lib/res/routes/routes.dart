import 'package:codingcontest/res/routes/routes.name.dart';
import 'package:codingcontest/view/splash.screen.dart';
import 'package:get/get.dart';

class AppRoutes {
  static appRoutes() => [
        GetPage(
          name: RoutesNames.home,
          page: () => const SplashScreen(),
          transition: Transition.fadeIn,
        ),
        GetPage(
          name: RoutesNames.splash,
          page: () => const SplashScreen(),
          transition: Transition.fadeIn,
        ),
      ];
}
