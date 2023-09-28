
export const calculateWinner = (squares) => {
  const lines = [
    // SOLDAN SAĞA
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [9, 10, 11],
    [12, 13, 14],
    [15, 16, 17],

    //YUKARIDAN AŞAĞI
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [3, 6, 9],
    [4, 7, 10],
    [5, 8, 11],

    [6, 9, 12],
    [7, 10, 13],
    [8, 11, 14],

    [9, 12, 15],
    [10, 13, 16],
    [11, 14, 17],

    // SOL ÜSTTEN SAĞ ALT ÇAPRAZA
    [0, 4, 8],
    [3, 7, 11],
    [6, 10, 14],
    [9, 13, 17],

    // SAĞ ÜSTTEN SOLA ALT ÇAPRAZA
    [2, 4, 6],
    [5, 7, 9],
    [8, 10, 12],
    [11, 13, 15],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    //a, b ve c ; kombinasyon oluşturan ilk ortanca ve son değer ([5, 7, 9] gibi)
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // squares[a] derken aslında içinin X yada O olması
      return squares[a];
      // squares[a] değerinde kombinasyonu oluşturan kim ise kazanan da o olacak
    }
  }
  return null;
}
