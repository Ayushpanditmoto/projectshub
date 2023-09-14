import 'package:flutter/material.dart';
import 'package:get/get.dart';

class ContestCardComponents extends StatelessWidget {
  const ContestCardComponents({super.key});

  // String ContestDuration(String endtime, String starttime) {
  //   return endtime + ' - ' + starttime;
  // }

  @override
  Widget build(BuildContext context) {
    final height = Get.height;
    final width = Get.width;
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(10),
        color: Colors.white,
      ),
      height: height * 0.2,
      width: width * 0.9,
      child: Card(
        child: Column(
          children: [
            Row(
              children: [
                Container(
                  height: height * 0.2,
                  width: width * 0.3,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    color: Colors.red,
                  ),
                ),
                const Column(
                  children: [
                    Text('Biweekly Contest 113'),
                    Text('Contest Duration'),
                    Text('Contest Start Time'),
                  ],
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
