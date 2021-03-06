import Mock from "mockjs"

Mock.mock("/mockapi/searchRes/filterSectionInit", {
  "status": "success",
  "msg": "查询成功",
  "data": [{
      "title": "分类",
      "choosen": [{
        "name": "美食",
        "type": "food",
        "id": 0,
        "sublist|4-8": [{
            "name|1": ["烤肉", "特色菜", "面包", "甜点", "火锅", "自助餐", "小吃", "快餐"],
            "id|+1": 1201
        }] 
      }, {
        "name": "休闲娱乐",
        "type": "funny",
        "id": 1,
        "sublist|1-2": [{
            "name|1": ["ktv", "茶馆"],
            "id|+1": 20
        }]
      }, {
        "name": "生活服务",
        "id": 2,
        "type": "life"
      }]
    },
    {
      "title": "区域",
      "choosen|3-5": [{
        "name|1": ["推荐商圈", "江阳区", "纳溪区", "龙马潭区", "泸县", "合江县"],
        "type": "area",
        "id|+1": 100860,
        "sublist|6-10": [{
            "name|1": ["水井沟", "大山坪", "市政府/天益广场", "百子图", "钟鼓楼", "迎晖路", "市中心"],
            "id|+1": 136 
        }]
      }]
    }
  ]
})
