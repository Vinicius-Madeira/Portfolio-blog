export interface Hobby {
  imgSrc: string;
  imgTitle: string;
  title: string;
  body: string;
}

export const hobbies: Hobby[] = [
  {
    imgSrc: "https://img.freepik.com/premium-vector/japan-flag_592324-6958.jpg",
    imgTitle: "Japan's Flag",
    title: `Japanese / 日本語`,
    body: `I started learning Japanese back in 2018. 
       I've always liked Japan and japanese culture, especially watching anime.`,
  },
  {
    imgSrc: "https://v4.mui.com/static/logo_raw.svg",
    imgTitle: "Material UI Logo",
    title: "Material UI",
    body: `I started learning Material UI quite recently and I'm amazed by how
            easy it is to create beautiful layouts with it. Simply an awesome lib.`,
  },
];
