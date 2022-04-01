const Songs = [
  {
    id: 1,
    favourite: false,
    songName: "Chạy về nơi phía anh",
    artist: "Khắc Việt",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-35d06.appspot.com/o/music%2FChayVeNoiPhiaAnh-KhacViet-7129688.mp3?alt=media&token=786e33a5-9709-46ff-ad61-1e456f9c206d",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-35d06.appspot.com/o/img%2Fchay%20ve%20n%C6%A1i%20phia%20anh.jpg?alt=media&token=6acea83e-e683-4eed-bd44-ac0477391b9b",
  },
  {
    id: 2,
    favourite: false,
    songName: "Cưới đi",
    artist: "2T & ChangC",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-35d06.appspot.com/o/music%2FCuoiDi-2TChangC-6560962.mp3?alt=media&token=85b9ab5c-b004-45ad-8083-de34e23fb22c",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-35d06.appspot.com/o/img%2Fcuoi%20di.jpg?alt=media&token=40a9e7fe-bda7-4de7-831f-3d51c329d842",
  },
  {
    id: 3,
    favourite: false,
    songName: "Dù cho mai về sau",
    artist: "Bùi Trường Linh",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-35d06.appspot.com/o/music%2FDuChoMaiVeSau-ThaiLe-6802428.mp3?alt=media&token=19fbfe49-b3e3-418d-9ef8-c7cf863e5684",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-35d06.appspot.com/o/img%2Fdu%20cho%20mai%20ve%20sau.jpg?alt=media&token=f472ade9-a9ee-468d-837b-43e39b577df6",
  },
  {
    id: 4,
    favourite: false,
    songName: "Đường tôi chở em về",
    artist: "Bùi Trường Linh",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-35d06.appspot.com/o/music%2FDuongTaChoEmVe-buitruonglinh-6318765.mp3?alt=media&token=cb8cde71-cfb0-4518-8487-b09124da9376",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-35d06.appspot.com/o/img%2Fd%C6%B0%C6%A1ng%20toi%20ch%C6%A1%20em%20ve.jpg?alt=media&token=3bf08b8d-59da-4994-986d-a8d08e984afa",
  },
  {
    id: 5,
    favourite: false,
    songName: "Gác lại âu lo",
    artist: "Miu Lê",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-35d06.appspot.com/o/music%2FGacLaiAuLo-DaLABMiuLe-6360815.mp3?alt=media&token=1aa4dc91-40c7-4ffd-b54b-c5683aa3df7e",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-35d06.appspot.com/o/img%2Fg%C3%A1c%20l%E1%BA%A1i%20%C3%A2u%20lo.jpg?alt=media&token=bc8576de-bc34-439b-a5c4-50661361e410",
  },
  {
    id: 6,
    songName: "Lỡ Say Bye là Bye",
    artist: "Changg & Lemese",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-35d06.appspot.com/o/music%2FLoSayByeLaBye-LemeseChangg-6926941.mp3?alt=media&token=036698a8-5766-409b-809f-78f6c907494f",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-35d06.appspot.com/o/img%2Fl%E1%BB%A1%20say%20bye%20l%C3%A0%20bye.jpg?alt=media&token=1f335274-f0fd-4af5-bd3e-55e6991817d1",
  },
  {
    id: 7,
    favourite: false,
    songName: "Muộn rồi mà sao còn",
    artist: "Sơn Tùng MTP",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-35d06.appspot.com/o/music%2FMuonRoiMaSaoCon-SonTungMTP-7011803.mp3?alt=media&token=e6ded9ce-03ef-4a2f-aeeb-11c72d22153d",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-35d06.appspot.com/o/img%2FS%C6%A1n_T%C3%B9ng_M-TP_-_Mu%E1%BB%99n_r%E1%BB%93i_m%C3%A0_sao_c%C3%B2n.png?alt=media&token=46f0aab5-4b5c-4d09-a1f9-9c9ce7e692e0",
  },
  {
    id: 8,
    favourite: false,
    songName: "Nàng Thơ",
    artist: "Hoàng Dũng",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-35d06.appspot.com/o/music%2FNangTho-HoangDung-6413381.mp3?alt=media&token=a13a2f27-95f6-4a7e-8eb8-aa89fca3e139",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-35d06.appspot.com/o/img%2Fn%C3%A0ng%20th%C6%A1.jpg?alt=media&token=197057db-44a9-4ddc-a0ac-d10ac7c11ca1",
  },
  {
    id: 9,
    favourite: false,
    songName: "Phải chăng em đã yêu",
    artist: "JukySan",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-35d06.appspot.com/o/music%2FPhaiChangEmDaYeu-JukySanRedT-6940932.mp3?alt=media&token=9760777f-877a-4a17-a8e3-b0b37800d625",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-35d06.appspot.com/o/img%2Fph%E1%BA%A3i%20ch%C4%83ng%20em%20%C4%91%C3%A3%20y%C3%AAu.jpg?alt=media&token=bbfd9ab5-2e6b-4ecf-8555-5b83d91fc7ec",
  },
  {
    id: 10,
    favourite: false,
    songName: "Sài Gòn đau lòng quá",
    artist: "Hoàng Duyên ",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-35d06.appspot.com/o/img%2Fs%C3%A0i%20g%C3%B2n%20%C4%91au%20l%C3%B2ng%20qu%C3%A1.jpg?alt=media&token=752a7cd3-ce74-4170-8656-f81f2b4364d2",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-35d06.appspot.com/o/img%2Fs%C3%A0i%20g%C3%B2n%20%C4%91au%20l%C3%B2ng%20qu%C3%A1.jpg?alt=media&token=752a7cd3-ce74-4170-8656-f81f2b4364d2",
  },
];

export default Songs;