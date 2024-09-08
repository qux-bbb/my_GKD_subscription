import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 0,
      name: '分段广告-订阅号消息内容-广告',
      desc: '点击下拉框-[不感兴趣]-[与我无关]',
      rules: [
        {
          key: 0,
          excludeMatches: [
            // 防止在第二段、第三段出现时触发，防止在文章末尾广告关闭后触发
            '[text="不感兴趣" || text="与我无关" || text="感谢你的反馈"][visibleToUser=true]',
          ],
          matches:
            '@[visibleToUser=true] > TextView[text="广告"][visibleToUser=true]',
          snapshotUrls: ['https://i.gkd.li/i/16922475'],
        },
        {
          // 第二段
          preKeys: [0],
          key: 1,
          excludeMatches: '[text="感谢你的反馈"][visibleToUser=true]',
          matches: '[text="不感兴趣"][visibleToUser=true]', // 为确保能够关闭尾部广告，此处点击“不感兴趣”而非“关闭此广告”
          snapshotUrls: ['https://i.gkd.li/i/16922513'],
        },
        {
          // 第三段
          preKeys: [1],
          key: 2,
          matches: '[text="与我无关"][visibleToUser=true]',
          snapshotUrls: ['https://i.gkd.li/i/16922516'],
        },
      ],
    },
  ],
});
