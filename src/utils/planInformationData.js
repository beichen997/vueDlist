
function planData () {
  return [
    {
      planInformationList: [
        {
          groups: '缝制组一组',
          peopleNum: 10,
          ordersNum: 500,
          startTime: '2019-01-02',
          endTime: '2019-01-11'
        },
        {
          groups: '缝制组二组',
          peopleNum: 8,
          ordersNum: 450,
          startTime: '2019-01-02',
          endTime: '2019-01-11'
        }
      ]
    },
    {
      planInformationList: [
        {
          groups: '缝制组一组',
          peopleNum: 10,
          ordersNum: 1400,
          startTime: '2019-01-02',
          endTime: '2019-01-11'
        },
        {
          groups: '缝制组二组',
          peopleNum: 6,
          ordersNum: 1100,
          startTime: '2019-01-02',
          endTime: '2019-01-11'
        }
      ]
    },
    {
      planInformationList: [
        {
          groups: '缝制组一组',
          peopleNum: 5,
          ordersNum: 1200,
          startTime: '2019-01-02',
          endTime: '2019-01-11'
        },
        {
          groups: '缝制组二组',
          peopleNum: 2,
          ordersNum: 800,
          startTime: '2019-01-02',
          endTime: '2019-01-11'
        }
      ]
    },
    {
      planInformationList: [
        {
          groups: '缝制组一组',
          peopleNum: 1,
          ordersNum: 30,
          startTime: '2019-01-02',
          endTime: '2019-01-11'
        },
        {
          groups: '缝制组二组',
          peopleNum: 2,
          ordersNum: 70,
          startTime: '2019-01-02',
          endTime: '2019-01-11'
        }
      ]
    },
    {
      planInformationList: [
        {
          groups: '缝制组一组',
          peopleNum: 2,
          ordersNum: 80,
          startTime: '2019-01-02',
          endTime: '2019-01-11'
        },
        {
          groups: '缝制组二组',
          peopleNum: 1,
          ordersNum: 20,
          startTime: '2019-01-02',
          endTime: '2019-01-11'
        }
      ]
    }
  ]
}
let receiptDetails = [
  {
    list: [{
      inStyles: '款式001',
      inProductNum: 'SC001',
      inSheetNum: 'CS001',
      inParts: '前片',
      inColor: '黑',
      inSize: 180,
      inType: '扎件',
      inTieNum: 1,
      inTieTotal: 10
    },
    {
      inStyles: '款式001',
      inProductNum: 'SC001',
      inSheetNum: 'CS001',
      inParts: '前片',
      inColor: '黑',
      inSize: 185,
      inType: '扎件',
      inTieNum: 2,
      inTieTotal: 10
    },
    {
      inStyles: '款式001',
      inProductNum: 'SC001',
      inSheetNum: 'CS001',
      inParts: '前片',
      inColor: '黑',
      inSize: 185,
      inType: '扎件',
      inTieNum: 3,
      inTieTotal: 10
    },
    {
      inStyles: '款式001',
      inProductNum: 'SC001',
      inSheetNum: 'CS001',
      inParts: '前片',
      inColor: '黑',
      inSize: 185,
      inType: '扎件',
      inTieNum: 4,
      inTieTotal: 10
    }]
  },
  {
    list: [{
      inStyles: '款式002',
      inProductNum: 'SC002',
      inSheetNum: 'CS002',
      inParts: '前片',
      inColor: '黑',
      inSize: 180,
      inType: '扎件',
      inTieNum: 1,
      inTieTotal: 10
    },
    {
      inStyles: '款式002',
      inProductNum: 'SC002',
      inSheetNum: 'CS002',
      inParts: '前片',
      inColor: '黑',
      inSize: 185,
      inType: '扎件',
      inTieNum: 2,
      inTieTotal: 20
    },
    {
      inStyles: '款式002',
      inProductNum: 'SC002',
      inSheetNum: 'CS002',
      inParts: '后片',
      inColor: '黑',
      inSize: 135,
      inType: '扎件',
      inTieNum: 3,
      inTieTotal: 10
    },
    {
      inStyles: '款式002',
      inProductNum: 'SC002',
      inSheetNum: 'CS002',
      inParts: '前片',
      inColor: '黑',
      inSize: 185,
      inType: '扎件',
      inTieNum: 4,
      inTieTotal: 10
    }]
  },
  {
    list: [{
      inStyles: '款式003',
      inProductNum: 'SC003',
      inSheetNum: 'CS003',
      inParts: '前片',
      inColor: '白',
      inSize: 120,
      inType: '扎件',
      inTieNum: 1,
      inTieTotal: 20
    },
    {
      inStyles: '款式003',
      inProductNum: 'SC003',
      inSheetNum: 'CS003',
      inParts: '前片',
      inColor: '黑',
      inSize: 185,
      inType: '扎件',
      inTieNum: 2,
      inTieTotal: 10
    },
    {
      inStyles: '款式003',
      inProductNum: 'SC003',
      inSheetNum: 'CS003',
      inParts: '前片',
      inColor: '白',
      inSize: 185,
      inType: '扎件',
      inTieNum: 3,
      inTieTotal: 20
    }]
  },
  {
    list: [{
      inStyles: '款式004',
      inProductNum: 'SC004',
      inSheetNum: 'CS004',
      inParts: '后片',
      inColor: '黑',
      inSize: 180,
      inType: '扎件',
      inTieNum: 1,
      inTieTotal: 80
    },
    {
      inStyles: '款式004',
      inProductNum: 'SC004',
      inSheetNum: 'CS004',
      inParts: '前片',
      inColor: '黑',
      inSize: 185,
      inType: '扎件',
      inTieNum: 2,
      inTieTotal: 20
    }]
  }
]
export {
  planData,
  receiptDetails
}
