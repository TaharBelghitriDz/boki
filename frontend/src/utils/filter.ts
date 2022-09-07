export const filterResult = ({ data }: any) =>
  data.items.map(({ volumeInfo, accessInfo }: any) => {
    const book: any = {};
    book.title = volumeInfo.title.split(" ").slice(0, 8).join(" ");
    book.subtitle = volumeInfo.subtitle || null;
    book.img = volumeInfo.imageLinks.thumbnail || null;
    book.author = volumeInfo.authors ? volumeInfo.authors[0] : "author name";
    book.download = accessInfo.pdf.isAvailable
      ? accessInfo.pdf.downloadLink
      : accessInfo.epub.downloadLink || null;
    return book;
  });
