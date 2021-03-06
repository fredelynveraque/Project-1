 //---------------------------------------Chart Tab and Date Range--------------------------------------

var fiveYears = [
        { label: '2014', exports: 1212, imports: 1212, weight: 10342, height: 13245, quantity:16543 },
        { label: '2015', exports: 913, imports: 213, weight: 8756, height: 4654, quantity: 10232 },
        { label: '2016', exports: 1015, imports: 415, weight: 9373, height: 10654, quantity: 14645 },
        { label: '2017', exports: 1113, imports: 1213, weight: 10456, height: 13654, quantity: 16542 },
        { label: '2018', exports: 1514, imports: 1416, weight: 17542, height: 19654, quantity: 24564 },
    ];
    var newFiveYears = [
        { label: '2016', exports: 2213, imports: 2213, weight: 20152, height: 21543, quantity: 15634 },
        { label: '2017', exports: 115, imports: 315, weight: 5211, height: 6324, quantity:  1054 },
        { label: '2018', exports: 2016, imports: 516, weight: 17435, height: 3245, quantity: 15523 },
        { label: '2019', exports: 2114, imports: 2214, weight: 26532, height: 27235, quantity: 34252 },
        { label: '2020', exports: 2514, imports: 2414, weight: 27454, height: 29345, quantity: 38352 },
    ];
    var oneWeek = [
        { label: 'Day 1', exports: 40, imports: 12, weight: 80, height: 90, quantity: 1073 },
        { label: 'Day 2', exports: 23, imports: 2, weight: 45, height: 52, quantity: 202 },
        { label: 'Day 3', exports: 15, imports: 13, weight: 31, height: 30, quantity: 342 },
        { label: 'Day 4', exports: 26, imports: 6, weight: 38, height: 12, quantity: 372  },
        { label: 'Day 5', exports: 43, imports: 12, weight: 82, height: 40, quantity: 1008 },
        { label: 'Day 6', exports: 32, imports: 16, weight: 70, height: 60, quantity: 904 },
        { label: 'Day 7', exports: 46, imports: 9, weight: 89, height: 70, quantity: 582 },
    ];
    var twoWeeks = [
        { label: 'Day 1', exports: 40, imports: 12, weight: 80, height: 90, quantity: 1073 },
        { label: 'Day 2', exports: 23, imports: 2, weight: 45, height: 52, quantity: 202 },
        { label: 'Day 3', exports: 15, imports: 13, weight: 31, height: 30, quantity: 342 },
        { label: 'Day 4', exports: 26, imports: 6, weight: 38, height: 12, quantity: 372  },
        { label: 'Day 5', exports: 43, imports: 12, weight: 82, height: 40, quantity: 1008 },
        { label: 'Day 6', exports: 32, imports: 16, weight: 70, height: 60, quantity: 904 },
        { label: 'Day 7', exports: 46, imports: 9, weight: 89, height: 70, quantity: 582 },
        { label: 'Day 8', exports: 71, imports: 12, weight: 143, height: 154, quantity: 1400 },
        { label: 'Day 9', exports: 45, imports: 17, weight: 83, height: 87, quantity: 700 },
        { label: 'Day 10', exports: 16, imports: 15, weight: 30, height: 33, quantity: 90 },
        { label: 'Day 11', exports: 57, imports: 14, weight: 101, height: 104, quantity: 90 },
        { label: 'Day 12', exports: 85, imports: 9, weight: 164, height: 171, quantity: 180 },
        { label: 'Day 13', exports: 45, imports: 9, weight: 60, height: 42, quantity: 88 },
        { label: 'Day 14', exports: 54, imports: 12, weight: 73, height: 66, quantity: 120 },
    ];
    var oneMonth = [
        { label: 'Jan 1', exports: 40, imports: 12, weight: 80, height: 90, quantity: 1073 },
        { label: 'Jan 2', exports: 23, imports: 2, weight: 45, height: 52, quantity: 202 },
        { label: 'Jan 3', exports: 15, imports: 13, weight: 31, height: 30, quantity: 342 },
        { label: 'Jan 4', exports: 26, imports: 6, weight: 38, height: 12, quantity: 372 },
        { label: 'Jan 5', exports: 43, imports: 12, weight: 82, height: 40, quantity: 1008 },
        { label: 'Jan 6', exports: 32, imports: 16, weight: 70, height: 60, quantity: 904 },
        { label: 'Jan 7', exports: 46, imports: 9, weight: 89, height: 70, quantity: 582 },
        { label: 'Jan 8', exports: 71, imports: 12, weight: 143, height: 154, quantity: 1400 },
        { label: 'Jan 9', exports: 45, imports: 17, weight: 83, height: 87, quantity: 700 },
        { label: 'Jan 10', exports: 16, imports: 15, weight: 30, height: 33, quantity: 90 },
        { label: 'Jan 11', exports: 57, imports: 14, weight: 101, height: 104, quantity: 99 },
        { label: 'Jan 12', exports: 85, imports: 9, weight: 164, height: 171, quantity: 180 },
        { label: 'Jan 13', exports: 45, imports: 9, weight: 60, height: 42, quantity: 88 },
        { label: 'Jan 14', exports: 54, imports: 12, weight: 73, height: 66, quantity: 120 },
        { label: 'Jan 15', exports: 14, imports: 2, weight: 39, height: 40, quantity: 50 },
        { label: 'Jan 16', exports: 17, imports: 3, weight: 44, height: 33, quantity: 300 },
        { label: 'Jan 17', exports: 13, imports: 15, weight: 33, height: 36, quantity: 45 },
        { label: 'Jan 18', exports: 15, imports: 18, weight: 30, height: 22, quantity: 60 },
        { label: 'Jan 19', exports: 18, imports: 3, weight: 42, height: 22, quantity: 80 },
        { label: 'Jan 20', exports: 19, imports: 7, weight: 51, height: 63, quantity: 100 },
        { label: 'Jan 21', exports: 11, imports: 5, weight: 44, height: 55, quantity: 72 },
        { label: 'Jan 22', exports: 13, imports: 1, weight: 52, height: 32, quantity: 70 },
        { label: 'Jan 23', exports: 12, imports: 3, weight: 42, height: 32, quantity: 60 },
        { label: 'Jan 24', exports: 9, imports: 14, weight: 52, height: 32, quantity: 40 },
        { label: 'Jan 25', exports: 10, imports: 16, weight: 90, height: 100, quantity: 10 },
        { label: 'Jan 26', exports: 15, imports: 11, weight: 30, height: 30, quantity: 30 },
        { label: 'Jan 27', exports: 18, imports: 10, weight: 42, height: 72, quantity: 50 },
        { label: 'Jan 28', exports: 13, imports: 5, weight: 41, height: 42, quantity: 50 },
        { label: 'Jan 29', exports: 12, imports: 10, weight: 140, height: 150, quantity: 200 },
        { label: 'Jan 30', exports: 19, imports: 6, weight: 150, height: 140, quantity: 200 },
        { label: 'Jan 31', exports: 20, imports: 0, weight: 133, height: 180, quantity: 300 },
    ];
    var threeMonths = [
        { label: 'Jan 1-7', exports: 42, imports: 52, weight: 303, height: 305, quantity: 4750 },
        { label: 'Jan 8-14', exports: 65, imports: 36, weight: 298, height: 300, quantity: 2679 },
        { label: 'Jan 15-21', exports: 84, imports: 19, weight: 132, height: 150, quantity: 707 },
        { label: 'Jan 22-28', exports: 100, imports: 24, weight: 123, height: 142, quantity: 1010 },
        { label: 'Jan 29 - Feb 4', exports: 42, imports: 52, weight: 142, height: 194, quantity: 4329 },
        { label: 'Feb 5-11', exports: 65, imports: 36, weight: 324, height: 423, quantity: 5003 },
        { label: 'Feb 12-18', exports: 84, imports: 19, weight: 563, height: 654, quantity:  4313 },
        { label: 'Feb 19-25', exports: 100, imports: 24, weight: 432, height: 533, quantity: 5356 },
        { label: 'Feb 26 - Mar 4', exports: 42, imports: 52, weight: 423, height: 356, quantity: 6425 },
        { label: 'Mar 5-11', exports: 65, imports: 36, weight: 634, height: 234, quantity: 6357 },
        { label: 'Mar 12-18', exports: 84, imports: 19, weight: 747, height: 456, quantity: 8567 },
        { label: 'Mar 19-25', exports: 100, imports: 24, weight: 756, height: 342, quantity: 3757 },
    ];
    var oneYear = [
        { label: 'January', exports: 121, imports: 121, weight: 300, height: 420, quantity: 9018 },
        { label: 'February', exports: 91, imports: 21, weight: 320, height: 140, quantity: 5012 },
        { label: 'March', exports: 101, imports: 41, weight: 110, height: 40, quantity: 1362 },
        { label: 'April', exports: 111, imports: 121, weight: 230, height: 120, quantity: 12857 },
        { label: 'May', exports: 131, imports: 111, weight: 550, height: 550, quantity: 4758 },
        { label: 'June', exports: 14, imports: 10, weight: 643, height: 420, quantity: 3784 },
        { label: 'July', exports: 13, imports: 10, weight: 100, height: 100, quantity: 9834 },
        { label: 'August', exports: 7, imports: 12, weight: 554, height: 434, quantity: 7897 },
        { label: 'September', exports: 12, imports: 17, weight: 476, height: 456, quantity: 4956 },
        { label: 'October', exports: 15, imports: 15, weight: 516, height: 506, quantity: 7354 },
        { label: 'November', exports: 16, imports: 14, weight: 586, height: 426, quantity: 4598 },
        { label: 'December', exports: 18, imports: 9, weight: 234, height: 44, quantity: 10245 },
    ];
    var fourYears = [
        { label: '2014', exports: 121, imports: 121, weight: 2532, height: 2345, quantity: 63654 },
        { label: '2015', exports: 91, imports: 21, weight: 4325, height: 5324, quantity: 54352 },
        { label: '2016', exports: 101, imports: 41, weight: 4746, height: 4331, quantity: 13428 },
        { label: '2017', exports: 111, imports: 121, weight: 6354, height: 5436, quantity: 19323 },
    ];

//-----------------------------------End of Chart Data and Date Range---------------------------------