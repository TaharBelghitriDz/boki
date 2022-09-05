export const filterResult = ({ data }: any) =>
  data.items.map(({ volumeInfo, accessInfo }: any) => {
    const book: any = {};
    book.title = volumeInfo.title;
    book.subtitle = volumeInfo.subtitle;
    book.img = volumeInfo.imageLinks.thumbnail;
    book.author = volumeInfo.authors[0];
    book.download = accessInfo.pdf.isAvailable
      ? accessInfo.pdf.downloadLink
      : accessInfo.epub.downloadLink;
    return book;
  });
