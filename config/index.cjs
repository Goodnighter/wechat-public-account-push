/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx8402b4652ea663f1',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'ff8eed79df3c8a6f376227e06c2729cd',

  PROVINCE: '浙江',
  CITY: '杭州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o_A6P5y9wsN_trLxLBjhvqkwuOdo',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'AO9gVL8kP6v2zYyyIECWvXa_xqmrYuCYFH_UPHpFeQ0',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-24',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1994', date: '01-24',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝', year: '1994', date: '01-24',
        },
        {
          type: '节日', name: '相识纪念日', year: '2021', date: '12-21',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'live_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'kmmt7DEUi2HfVwKXldSvoMmb0qESSiFBJiH3bVfG5lA',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o_A6P5_frw1NAYjbih6wNf0m8Gvw',
    }
  ],

}

module.exports = USER_CONFIG

