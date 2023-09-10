import 'package:get/get.dart';

class Languages extends Translations {
  @override
  Map<String, Map<String, String>> get keys => {
        'en_US': {
          'hello': 'Hello World',
          'email_hint': 'Enter your email',
        },
        'hi_IN': {
          'hello': 'नमस्ते दुनिया',
          'email_hint': 'अपना ईमेल दर्ज करें',
        }
      };
}
