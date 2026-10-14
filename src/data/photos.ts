// 首页右侧的堆叠相册。
// 想换照片：把图片放进 public/images/，再在下面这个数组里增删一行即可。
// 数组里第一张默认显示在最上面；鼠标移到相册上会按顺序自动翻阅。

export interface StackPhoto {
  /** 相对于 public/ 的路径，例如 images/team.jpg */
  src: string;
  /** 图片说明（会读给读屏软件听，也方便日后自己认） */
  alt: string;
}

export const HERO_PHOTOS: StackPhoto[] = [
  {
    src: 'images/group-photo-1.jpg',
    alt: '课题组在室内迷宫 CS 团建活动中的合影',
  },
  {
    src: 'images/group-photo-2.jpg',
    alt: '课题组师生在中国农业大学校门口的毕业合影',
  },
];
