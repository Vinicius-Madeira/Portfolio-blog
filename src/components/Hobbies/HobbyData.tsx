export interface Hobby {
  imgSrc?: string;
  imgTitle?: string;
  title: string;
  body: any;
}

export const studies: Hobby[] = [
  {
    imgSrc: "https://img.freepik.com/premium-vector/japan-flag_592324-6958.jpg",
    imgTitle: "Japan's Flag",
    title: "Japanese / 日本語",
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

export const genres: Hobby[] = [
  {
    title: "J-Pop",
    body: "Due to my japanese language studies, I've been listening to a lot of japanese songs, which is one of the genres that I enjoy the most at the moment.",
  },
  {
    title: "Rock",
    body: "What would I be without rock? I still remember the first time that I listened to 'Duality' from Slipknot, it got me instantly hooked, I'm not gonna lie.",
  },
  {
    title: "Alternative",
    body: "I'm calling it alternative just because I believe some of the songs that I listen are not too mainstream, but it could really be anything that I vibe with.",
  },
];
