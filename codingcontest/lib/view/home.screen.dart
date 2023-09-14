import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Coding Contest'),
      ),
      body: Column(
        children: [
          const Text('Home Screen'),
          ElevatedButton(
            onPressed: () {
              Navigator.pushNamed(context, '/splash');
            },
            child: const Text('Go to Splash Screen'),
          ),
        ],
      ),
    );
  }
}
